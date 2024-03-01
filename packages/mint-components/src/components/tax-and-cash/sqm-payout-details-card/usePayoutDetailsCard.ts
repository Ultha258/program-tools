import { useEffect } from "@saasquatch/universal-hooks";
import { DateTime } from "luxon";
import { useParentQueryValue } from "../../../utils/useParentQuery";
import { useParent, useSetParent } from "../../../utils/useParentState";
import {
  TAX_CONTEXT_NAMESPACE,
  TAX_FORM_CONTEXT_NAMESPACE,
  TaxContext,
  USER_QUERY_NAMESPACE,
  UserQuery,
} from "../sqm-tax-and-cash/data";
import { useLocale } from "@saasquatch/component-boilerplate";
import { PayoutDetailsCard } from "./sqm-payout-details-card";
import { PayoutDetailsCardViewProps } from "./sqm-payout-details-card-view";

export function usePayoutDetailsCard(
  props: PayoutDetailsCard
): PayoutDetailsCardViewProps {
  const setStep = useSetParent(TAX_CONTEXT_NAMESPACE);
  const [context, setContext] = useParent<TaxContext>(
    TAX_FORM_CONTEXT_NAMESPACE
  );

  const locale = useLocale();

  useEffect(() => {
    // Clear override context once on submitted
    setContext({});
  }, []);

  const { data, loading } =
    useParentQueryValue<UserQuery>(USER_QUERY_NAMESPACE);

  const publisher = data?.user?.impactConnection?.publisher;

  console.log({ publisher });

  function getPaymentDay(paymentDay) {
    if (paymentDay === "1") {
      return DateTime.now()
        .plus({ month: 1 })
        .startOf("month")
        .toFormat("LLL dd, yyyy");
    } else if (paymentDay === "15") {
      return DateTime.now()
        .plus({ month: 1 })
        .startOf("month")
        .toFormat("LLL dd, yyyy");
    }
  }

  const paymentDay = getPaymentDay(publisher?.withdrawalSettings?.paymentDay);
  //   publisher?.withdrawalSettings?.paymentDay;

  console.log({ paymentDay });

  return {
    states: {
      loading: false,
      mainCurrency: {
        currencyText: publisher?.currency,
        amountText: publisher?.payoutsAccount?.balance,
      },
      status: "next payout",
      payoutType: publisher?.withdrawalSettings?.paymentMethod,
      empty: false,
      paypalEmailAddress: publisher?.withdrawalSettings?.paypalEmailAddress,
      cardNumberPreview: publisher?.withdrawalSettings?.bankAccountNumber,
    },
    text: {
      ...props.getTextProps(),
      nextPayoutDetailedStatusText: paymentDay,
    },
  };
}

export type UsePayoutDetailsCardResult = ReturnType<
  typeof usePayoutDetailsCard
>;
