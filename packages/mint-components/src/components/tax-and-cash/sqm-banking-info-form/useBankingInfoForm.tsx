import {
  useLocale,
  useMutation,
  useUserIdentity,
} from "@saasquatch/component-boilerplate";
import { useEffect, useRef, useState } from "@saasquatch/universal-hooks";
import { h } from "@stencil/core";
import { gql } from "graphql-request";
import JSONPointer from "jsonpointer";
import { useParentQueryValue } from "../../../utils/useParentQuery";
import { useSetParent } from "../../../utils/useParentState";
import {
  FINANCE_NETWORK_SETTINGS_NAMESPACE,
  FinanceNetworkSetting,
  FinanceNetworkSettingsQuery,
  TAX_CONTEXT_NAMESPACE,
  USER_QUERY_NAMESPACE,
  UserQuery,
} from "../sqm-tax-and-cash/data";
import { BankingInfoForm } from "./sqm-banking-info-form";
import { BankingInfoFormViewProps } from "./sqm-banking-info-form-view";

// Hardcoded in Impact backend
export const paypalFeeMap = {
  USD: "USD20.00",
  GBP: "GBP30.00",
  EUR: "EUR35.00",
  AUD: "AUD60.00",
  CAD: "CAD50.00",
  NZD: "NZD60.00",
  HKD: "HKD320.00",
  DKK: "DKK250.00",
  ILS: "ILS160.00",
  MXN: "MXN600.00",
  RUB: "RUB1200.00",
  PHP: "PHP2000.00",
  JPY: "JPY2000.00",
};

const ACH_PAYMENT_METHOD = 3;
const WIRE_PAYMENT_METHOD = 5;
const PAYPAL_PAYMENT_METHOD = 7;

export type BankingInfoFormData = {
  paypalEmailAddress?: string;
  beneficiaryAccountName?: string;
  bankCountry?: string;
  beneficiaryClassification?:
    | "BUSINESS"
    | "INDIVIDUAL"
    | "FOREIGN"
    | "CPF"
    | "CNPJ";
  beneficiaryAlternativeName?: string;
  beneficiaryTaxPayerId?: string;
  bankAccountType?: "CHECKING" | "SAVINGS" | "NOT_SET";
  bankAccountNumber?: string;
  swiftCode?: string;
  routingCode?: string;
  voCode?: string;
  agencyCode?: string;
  bankAddress?: string;
  bankPostalCode?: string;
  bankCity?: string;
  bankState?: string;
  branchCode?: string;

  // TODO These fields aren't settable in the mutation
  bankName?: string;
  patronymicName?: string;
  bankProvinceState?: string;
};

type RoutingCodeLabels = {
  AU: string;
  CA: string;
  CZ: string;
  HK: string;
  SG: string;
  US: string;
  NZ: string;
  ZA: string;
  IN: string;
  CNY: string;
};

export function getFormMap({
  props,
  routingCodeLabels,
  getValidationErrorMessage,
}: {
  props: BankingInfoFormViewProps | Omit<any, "text" | "callbacks">;
  routingCodeLabels: RoutingCodeLabels;
  getValidationErrorMessage: (text: string) => string;
}) {
  const { errors } = props.states.formState;

  return {
    0: {
      input: (
        <sl-input
          required
          label={props.text.beneficiaryAccountNameLabel}
          name="/beneficiaryAccountName"
          id="beneficiaryAccountName"
          key="beneficiaryAccountName"
          type="text"
          {...(errors?.beneficiaryAccountName && {
            class: "error-input",
            helpText: getValidationErrorMessage(
              props.text.beneficiaryAccountNameLabel
            ),
          })}
        ></sl-input>
      ),
    },
    1: {
      input: (
        <sl-select
          required
          label={props.text.bankAccountTypeLabel}
          name="/bankAccountType"
          id="bankAccountType"
          key="bankAccountType"
          {...(errors?.bankAccountType && {
            class: "error-input",
            helpText: getValidationErrorMessage(
              props.text.bankAccountTypeLabel
            ),
          })}
        >
          <sl-menu-item value="CHECKING">
            {props.text.checkingSelectItemLabel}
          </sl-menu-item>
          <sl-menu-item value="SAVINGS">
            {props.text.savingsSelectItemLabel}
          </sl-menu-item>
        </sl-select>
      ),
    },
    2: {
      input: (
        <sl-input
          required
          label={props.text.bankAccountNumberLabel}
          name="/bankAccountNumber"
          id="bankAccountNumber"
          key="bankAccountNumber"
          type="text"
          {...(errors?.bankAccountNumber && {
            class: "error-input",
            helpText: getValidationErrorMessage(
              props.text.bankAccountNumberLabel
            ),
          })}
        ></sl-input>
      ),
    },
    3: {
      input: (
        <sl-input
          required
          label={props.text.ibanLabel}
          name="/bankAccountNumber"
          id="iban"
          key="iban"
          type="text"
          {...(errors?.bankAccountNumber && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.ibanLabel),
          })}
        ></sl-input>
      ),
    },

    4: {
      input: (
        <sl-input
          required
          label={props.text.swiftCodeLabel}
          name="/swiftCode"
          id="swiftCode"
          key="swiftCode"
          type="text"
          {...(errors?.swiftCode && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.swiftCodeLabel),
          })}
        ></sl-input>
      ),
    },
    5: {
      input: (
        <sl-input
          required
          label={
            routingCodeLabels[props.states.bankCountry] ||
            props.text.routingCodeLabel
          }
          name="/routingCode"
          id="routingCode"
          key="routingCode"
          type="text"
          {...(errors?.routingCode && {
            class: "error-input",
            helpText: getValidationErrorMessage(
              routingCodeLabels[props.states.bankCountry] ||
                props.text.routingCodeLabel
            ),
          })}
        ></sl-input>
      ),
    },
    6: {
      input: (
        <sl-input
          required
          label={props.text.bankNameLabel}
          name="/bankName"
          id="bankName"
          key="bankName"
          type="text"
          {...(errors?.bankName && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.bankNameLabel),
          })}
        ></sl-input>
      ),
    },
    7: {
      input: [
        <sl-select
          required
          label={props.text.classificationLabel}
          name="/beneficiaryClassification"
          id="beneficiaryClassification"
          key="beneficiaryClassification"
          {...(errors?.beneficiaryClassification && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.classificationLabel),
          })}
        >
          <sl-menu-item value="BUSINESS">
            {props.text.businessSelectItemLabel}
          </sl-menu-item>
          <sl-menu-item value="INDIVIDUAL">
            {props.text.individualSelectItemLabel}
          </sl-menu-item>
          <sl-menu-item value="FOREIGN">
            {props.text.foreignSelectItemLabel}
          </sl-menu-item>
        </sl-select>,
        <sl-input
          required
          label={props.text.taxPayerIdLabel}
          type="text"
          name="/taxPayerId"
          id="taxPayerId"
          key="taxPayerId"
          {...(errors?.taxPayerId && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.taxPayerIdLabel),
          })}
        ></sl-input>,
      ],
    },
    8: {
      input: (
        <sl-select
          required
          label={props.text.classificationCPFLabel}
          name="/beneficiaryClassification"
          id="beneficiaryClassification"
          key="beneficiaryClassification"
          {...(errors?.beneficiaryClassification && {
            class: "error-input",
            helpText: getValidationErrorMessage(
              props.text.classificationCPFLabel
            ),
          })}
        >
          <sl-menu-item value="CPF">CPF</sl-menu-item>
          <sl-menu-item value="CNPJ">CNPJ</sl-menu-item>
        </sl-select>
      ),
    },
    9: {
      input: (
        <sl-input
          key="patronymicName"
          required
          label={props.text.patronymicNameLabel}
          name="/patronymicName"
          id="patronymicName"
          type="text"
          {...(errors?.patronymicName && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.patronymicNameLabel),
          })}
        ></sl-input>
      ),
    },
    10: {
      input: (
        <sl-input
          key="voCode"
          label={props.text.voCodeLabel}
          name="/voCode"
          id="voCode"
          type="text"
          {...(errors?.voCode && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.voCodeLabel),
          })}
        ></sl-input>
      ),
    },
    11: {
      input: (
        <sl-input
          required
          label={props.text.agencyCodeLabel}
          name="/agencyCode"
          id="agencyCode"
          key="agencyCode"
          type="text"
          {...(errors?.agencyCode && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.agencyCodeLabel),
          })}
        ></sl-input>
      ),
    },
    12: {
      input: [
        <sl-input
          required
          label={props.text.bankAddressLabel}
          name="/bankAddress"
          id="bankAddress"
          key="bankAddress"
          type="text"
          {...(errors?.bankAddress && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.bankAddressLabel),
          })}
        ></sl-input>,
        <sl-input
          required
          label={props.text.bankCityLabel}
          name="/bankCity"
          id="bankCity"
          key="bankCity"
          type="text"
          {...(errors?.bankCity && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.bankCityLabel),
          })}
        ></sl-input>,
        <sl-input
          required
          label={props.text.bankProvinceStateLabel}
          name="/bankProvinceState"
          id="bankProvinceState"
          key="bankProvinceState"
          type="text"
          {...(errors?.bankProvinceState && {
            class: "error-input",
            helpText: getValidationErrorMessage(
              props.text.bankProvinceStateLabel
            ),
          })}
        ></sl-input>,
        <sl-input
          required
          label={props.text.bankPostalCodeLabel}
          name="/bankPostalCode"
          id="bankPostalCode"
          key="bankPostalCode"
          type="text"
          {...(errors?.bankPostalCode && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.bankPostalCodeLabel),
          })}
        ></sl-input>,
      ],
    },
    13: {
      input: (
        <sl-input
          required
          label={props.text.branchCodeLabel}
          name="/branchCode"
          id="branchCode"
          key="branchCode"
          type="text"
          {...(errors?.branchCode && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.branchCodeLabel),
          })}
        ></sl-input>
      ),
    },
    14: {
      input: (
        <sl-select
          required
          label={props.text.classificationLabel}
          name="/beneficiaryClassification"
          id="beneficiaryClassification"
          key="beneficiaryClassification"
          {...(errors?.beneficiaryClassification && {
            class: "error-input",
            helpText: getValidationErrorMessage(props.text.classificationLabel),
          })}
        >
          <sl-menu-item value="BUSINESS">BUSINESS</sl-menu-item>
          <sl-menu-item value="INDIVIDUAL">INDIVIDUAL</sl-menu-item>
          <sl-menu-item value="FOREIGN">FOREIGN</sl-menu-item>
        </sl-select>
      ),
    },
  };
}

export function getFormInputs({ bitset, formMap }) {
  // Convert bitset to binary representation
  const binary = bitset.toString(2).padStart(Object.keys(formMap).length, "0");

  // Reverse to match order of docs
  // https://docs.google.com/document/d/1db8BnXK4NXN8LcX1U0-GBcnq57X3_XKmFBZijLOIYt4
  const inputFields = [...binary].reverse().reduce((agg, num, idx) => {
    if (!Number(num) || !formMap[idx]) return agg;
    return [...agg, formMap[idx]];
  }, []);

  return inputFields;
}

type SetImpactPublisherWithdrawalSettingsResult = {
  setImpactPublisherWithdrawalSettings: {
    success: boolean;
    validationErrors: { field: string; message: string }[];
  };
};
type SetImpactPublisherWithdrawalSettingsInput = {
  user: {
    id: string;
    accountId: string;
  };
  paymentMethod: "PAYPAL" | "BANKING_TRANSFER";
  paymentSchedulingType?: "BALANCE_THRESHOLD" | "FIXED_DAY";
  paymentThreshold?: string;
  paymentDay?: string;
} & BankingInfoFormData;
const SAVE_WITHDRAWAL_SETTINGS = gql`
  mutation setImpactPublisherWithdrawalSettings(
    $setImpactPublisherWithdrawalSettingsInput: SetImpactPublisherWithdrawalSettingsInput!
  ) {
    setImpactPublisherWithdrawalSettings(
      setImpactPublisherWithdrawalSettingsInput: $setImpactPublisherWithdrawalSettingsInput
    ) {
      success
      validationErrors {
        field
        message
      }
    }
  }
`;

function getPaymentMethod(paymentOption: FinanceNetworkSetting | undefined) {
  if (
    paymentOption.defaultFinancePaymentMethodId === 3 ||
    paymentOption.defaultFinancePaymentMethodId === 5
  )
    return "BANK_TRANSFER";

  if (paymentOption.defaultFinancePaymentMethodId === 7) return "PAYPAL";
  return "";
}

export function useBankingInfoForm(
  props: BankingInfoForm
): BankingInfoFormViewProps {
  const locale = useLocale();
  const setStep = useSetParent<string>(TAX_CONTEXT_NAMESPACE);

  const { data: userData, refetch } =
    useParentQueryValue<UserQuery>(USER_QUERY_NAMESPACE);

  const [saveWithdrawalSettings] =
    useMutation<SetImpactPublisherWithdrawalSettingsResult>(
      SAVE_WITHDRAWAL_SETTINGS
    );

  const user = useUserIdentity();

  /** mock data */
  const [_currency, setCurrency] = useState("");
  /** */

  const formRef = useRef<HTMLFormElement>(null);

  const [bankCountry, setBankCountry] = useState("");
  const [currentPaymentOption, setCurrentPaymentOption] =
    useState<null | FinanceNetworkSetting>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [_paymentMethodChecked, setPaymentMethodChecked] = useState<
    "toBankAccount" | "toPayPalAccount" | undefined
  >(undefined);
  const [paymentScheduleChecked, setPaymentScheduleChecked] = useState<
    "paymentThreshold" | "paymentDay" | undefined
  >(undefined);

  const onSubmit = async (event: any) => {
    let formData: BankingInfoFormData = {};
    let validationErrors: Record<string, string> = {};

    const controls = event.target.getFormControls();

    controls.forEach((control) => {
      if (!control.name || !control.id) return;

      const key = control.name;
      const value = control.value;
      JSONPointer.set(formData, key, value);

      if (control.required && !value) {
        JSONPointer.set(validationErrors, key, true);
      }
    });

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) {
      return;
    }

    setLoading(true);
    console.log({ formData });
    try {
      if (!currentPaymentOption) throw new Error("No currentPaymentOption");
      // @ts-ignore figure out what the values for paymentDay are
      // const { paymentDay, ...rest } = formData;

      // TODO: wire up mutation
      const response = await saveWithdrawalSettings({
        setImpactPublisherWithdrawalSettingsInput: {
          user: {
            id: user.id,
            accountId: user.accountId,
          },
          paymentMethod: formData?.paypalEmailAddress
            ? "PAYPAL"
            : getPaymentMethod(currentPaymentOption),
          ...formData,
        } as SetImpactPublisherWithdrawalSettingsInput,
      });
      if (!response || (response as Error)?.message) throw new Error();
      if (
        !(response as SetImpactPublisherWithdrawalSettingsResult)
          .setImpactPublisherWithdrawalSettings?.success
      ) {
        // TODO What to do with validation errors
        console.error(
          "Validation failed: ",
          (response as SetImpactPublisherWithdrawalSettingsResult)
            .setImpactPublisherWithdrawalSettings?.validationErrors
        );
        throw new Error();
      }

      await refetch();

      setStep("/submitted");
    } catch (e) {
      console.error(e);
      setErrors({ general: true });
    } finally {
      setLoading(false);
    }
  };

  const currency =
    _currency || userData?.user?.impactConnection?.publisher?.currency;

  const feeCap = paypalFeeMap[currency] || "";

  const paymentOptionsRes = useParentQueryValue<FinanceNetworkSettingsQuery>(
    FINANCE_NETWORK_SETTINGS_NAMESPACE
  );

  const paymentOptions =
    paymentOptionsRes?.data?.impactFinanceNetworkSettings?.data;

  useEffect(() => {
    if (!userData) return;
    if (!paymentOptions) return;

    const publisherCountry =
      userData?.user?.impactConnection?.publisher?.countryCode;
    const currentPaymentOption = paymentOptions?.find(
      (paymentOption) => paymentOption.countryCode === publisherCountry
    );

    setCurrentPaymentOption(currentPaymentOption);
    setBankCountry(publisherCountry);
  }, [paymentOptions, userData, setCurrentPaymentOption, setBankCountry]);

  // TODO currentPaymentOption should be updated when the paypal option is selected
  // TODO there should be an option in the array with defaultFinancePaymentMethodId = 7 (paypal)
  const updateBankCountry = (bankCountry: string) => {
    const currentPaymentOption = paymentOptions?.find((paymentOption) => {
      if (paymentOption.countryCode === bankCountry) return true;
      return false;
    });

    setBankCountry(bankCountry);
    setCurrentPaymentOption(currentPaymentOption);
  };

  const paymentMethodFeeMap = {
    [ACH_PAYMENT_METHOD]: "EFT Withdrawal (free)",
    [WIRE_PAYMENT_METHOD]: `FX Wire (Processing Fee ${currency}${
      currentPaymentOption?.defaultFxFee || 0
    }.00)`,
  };
  const paymentMethodFeeLabel =
    paymentMethodFeeMap[currentPaymentOption?.defaultFinancePaymentMethodId];

  const intlLocale = locale?.replace("_", "-") || "en";

  // filter out any duplicate countries and null countryCode
  const availableCountries = new Set(
    paymentOptions?.map((option) => option.countryCode).filter((value) => value)
  );

  // build list of country codes and names
  const countries = Array.from(availableCountries)?.map((country) => {
    // @ts-ignore DisplayNames not in Intl type
    const name = new Intl.DisplayNames([intlLocale], {
      type: "region",
    }).of(country);

    return {
      code: country,
      name,
    };
  });

  console.log({ currentPaymentOption, paymentOptions, availableCountries });

  const hasPayPal = !!paymentOptions?.find(
    (option) => option.defaultFinancePaymentMethodId === PAYPAL_PAYMENT_METHOD
  );

  const paymentMethodChecked = !hasPayPal
    ? "toBankAccount"
    : _paymentMethodChecked;

  return {
    text: props.getTextProps(),
    callbacks: {
      onSubmit,
      setBankCountry: updateBankCountry,
      setPaymentMethodChecked,
      setPaymentScheduleChecked,
      setCurrency,
    },
    states: {
      saveDisabled: !paymentMethodChecked || !paymentScheduleChecked,
      locale,
      isPartner: !!userData?.user?.impactConnection,
      feeCap,
      paymentMethodFeeLabel,
      disabled: loading,
      loading,
      hideBanking: paymentMethodChecked !== "toBankAccount",
      hidePayPal: paymentMethodChecked !== "toPayPalAccount",
      formState: {
        paymentMethodChecked,
        paymentScheduleChecked,
        errors,
      },
      currentPaymentOption,
      bitset: currentPaymentOption?.withdrawalSettingId || 0,
      bankCountry,
      currency,
      thresholds: currentPaymentOption?.thresholdOptions?.split(",") || [],
      countries,
      hasPayPal,
      showInputs: false,
      hideSteps: false,
    },
    refs: {
      formRef,
    },
  };
}
