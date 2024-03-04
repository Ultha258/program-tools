import { useLocale } from "@saasquatch/component-boilerplate";
import { DateTime } from "luxon";
import { useParentQueryValue } from "../../../utils/useParentQuery";
import { USER_QUERY_NAMESPACE, UserQuery } from "../sqm-tax-and-cash/data";
import { PayoutDetailsCard } from "./sqm-payout-details-card";
import { PayoutDetailsCardViewProps } from "./sqm-payout-details-card-view";

export function usePayoutDetailsCard(
  props: PayoutDetailsCard
): PayoutDetailsCardViewProps {
  const locale = useLocale();

  const { data, loading } =
    useParentQueryValue<UserQuery>(USER_QUERY_NAMESPACE);

  const publisher = data?.user?.impactConnection?.publisher;

  function getPayoutDetailedStatusText(paymentDay) {
    const currentDay = DateTime.now().day;
    if (paymentDay === "1") {
      return currentDay === 1
        ? DateTime.now().toFormat("LLL dd, yyyy")
        : DateTime.now()
            .plus({ month: 1 })
            .startOf("month")
            .toFormat("LLL dd, yyyy");
    } else if (paymentDay === "15") {
      return currentDay <= 15
        ? DateTime.now()
            .plus({ day: 15 - currentDay })
            .toFormat("LLL dd, yyyy")
        : DateTime.now()
            .plus({ month: 1 })
            .startOf("month")
            .plus({ day: 15 })
            .toFormat("LLL dd, yyyy");
    } else {
      return `${props.nextPayoutBalanceText} ${publisher?.withdrawalSettings?.paymentThreshold}`;
    }
  }

  const paymentDay = getPayoutDetailedStatusText(
    publisher?.withdrawalSettings?.paymentDay
  );
  //   publisher?.withdrawalSettings?.paymentDay;

  console.log({ paymentDay });

  return {
    states: {
      loading: false,
      mainCurrency: {
        currencyText: publisher?.currency,
        amountText: publisher?.payoutsAccount?.balance,
      },
      status: "nextPayout",
      payoutType: publisher?.withdrawalSettings?.paymentMethod,
      error: false,
      paypalEmailAddress: publisher?.withdrawalSettings?.paypalEmailAddress,
      cardNumberPreview: publisher?.withdrawalSettings?.bankAccountNumber,
      nextPayoutDate: paymentDay,
    },
    text: {
      ...props.getTextProps(),
    },
  };
}

export type UsePayoutDetailsCardResult = ReturnType<
  typeof usePayoutDetailsCard
>;
