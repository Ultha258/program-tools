import { h } from "@stencil/core";

export default {
  title: "Components/Banking Information Form",
};

const bankingFormProps = {
  states: {
    hideSteps: false,
    disabled: false,
    loading: false,
    formState: {
      checked: "toBankAccount",
    },
  },
  demo: {
    bitset: 39,
  },
  callbacks: {
    onSubmit: async () => console.log("Submit"),
    onChange: () => console.log("Submit"),
  },
  slotProps: {
    formState: {
      errors: {},
    },
  },
  refs: { formRef: { current: null } },
};
export const BankingInfoFormDefault = () => {
  return <sqm-banking-info-form></sqm-banking-info-form>;
};

export const BankingInfoFormCountryUSCurrencyUSD = () => {
  return (
    <sqm-banking-info-form
      demoData={{
        ...bankingFormProps,
        demo: {
          bitset: 39,
        },
      }}
    ></sqm-banking-info-form>
  );
};

export const BankingInfoFormCountryUSCurrencyGBP = () => {
  return (
    <sqm-banking-info-form
      demoData={{
        ...bankingFormProps,
        demo: {
          bitset: 33,
        },
      }}
    ></sqm-banking-info-form>
  );
};

export const BankingInfoFormCountryCanadaCurrencyCAD = () => {
  return (
    <sqm-banking-info-form
      demoData={{
        ...bankingFormProps,
        demo: {
          bitset: 37,
        },
      }}
    ></sqm-banking-info-form>
  );
};

export const BankingInfoFormCountryCanadaCurrencyUSD = () => {
  return (
    <sqm-banking-info-form
      demoData={{
        ...bankingFormProps,
        demo: {
          bitset: 21,
        },
      }}
    ></sqm-banking-info-form>
  );
};

export const BankingInfoFormCountrySpainCurrencyUSD = () => {
  return (
    <sqm-banking-info-form
      demoData={{
        ...bankingFormProps,
        demo: {
          bitset: 25,
        },
      }}
    ></sqm-banking-info-form>
  );
};

export const BankingInfoFormIsPartner = () => {
  return (
    <sqm-banking-info-form
      demoData={{
        ...bankingFormProps,
        states: {
          ...bankingFormProps.states,
          isPartner: true,
        },
        demo: {
          bitset: 25,
        },
      }}
    ></sqm-banking-info-form>
  );
};

export const BankingInfoFormPaypalChecked = () => {
  return (
    <sqm-banking-info-form
      demoData={{
        ...bankingFormProps,
        states: {
          ...bankingFormProps.states,
          formState: {
            ...bankingFormProps.states.formState,
            checked: "toPaypalAccount",
          },
        },
      }}
    ></sqm-banking-info-form>
  );
};
