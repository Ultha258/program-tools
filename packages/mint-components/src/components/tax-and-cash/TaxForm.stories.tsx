import { h } from "@stencil/core";
import { StoryDemoData } from "../../global/demo";
import { UseDocumentTypeFormResult } from "./sqm-document-type-form/useDocumentTypeForm";
import {
  ParticipantType,
  UseDocusignFormResult,
} from "./sqm-docusign-form/useDocusignForm";
import { UseIndirectTaxFormResult } from "./sqm-indirect-tax-form/useIndirectTaxForm";
import {
  INDIRECT_TAX_PROVINCES,
  INDIRECT_TAX_SPAIN_REGIONS,
} from "./subregions";
import { UseUserInfoFormResult } from "./sqm-user-info-form/useUserInfoForm";
import { DocusignStatus } from "./sqm-docusign-form/docusign-iframe/DocusignIframe";
import { BankingInfoFormViewProps } from "./sqm-banking-info-form/sqm-banking-info-form-view";
import LoadingView from "./sqm-tax-and-cash/LoadingView";
// import sqmUserInfoSpecs from "./sqm-tax-document-step-1.feature";
// import sqmIndirectTaxFormSpecs from "../sqm-indirect-tax-form/sqm-indirect-tax-form.feature";

export default {
  title: "Components/Tax Form",
};

const stepOneProps: StoryDemoData<UseUserInfoFormResult> = {
  states: {
    hideSteps: false,
    loading: false,
    disabled: false,
    isPartner: false,
    isUser: false,
    formState: {
      firstName: "Bob",
      lastName: "Testerson",
      email: "bobtesterson@example.com",
      countryCode: "US",
      currency: "CAD",
      errors: {},
    },
  },
  data: {
    countries: [
      {
        countryCode: "CA",
        displayName: "Canada",
      },
      {
        countryCode: "ES",
        displayName: "Spain",
      },
      {
        countryCode: "UK",
        displayName: "United Kingdom",
      },
      {
        countryCode: "US",
        displayName: "United States",
      },
    ],
    currencies: [
      {
        currencyCode: "CAD",
        displayName: "CAD",
      },
      {
        currencyCode: "GBP",
        displayName: "GBP",
      },
      {
        currencyCode: "USD",
        displayName: "USD",
      },
    ],
  },
  refs: {
    formRef: { current: null },
    currencyRef: { current: null },
  },
};

const stepTwoProps: StoryDemoData<UseIndirectTaxFormResult> = {
  states: {
    hideSteps: false,
    disabled: false,
    loading: false,
    isPartner: false,
    formState: {
      checked: undefined,
      errors: {},
    },
  },
  callbacks: {
    onSubmit: async () => console.log("Submit"),
    onChange: () => console.log("Submit"),
    onBack: () => console.log("Submit"),
    onFormChange: (field: string, e: CustomEvent) => console.log(field, e),
    onQstToggle: () => {},
    onSpainToggle: () => {},
    setCountrySearch: (c) => console.log(c),
  },
  data: {
    esRegions: INDIRECT_TAX_SPAIN_REGIONS,
    countries: [
      {
        countryCode: "CA",
        displayName: "Canada",
      },
      {
        countryCode: "ES",
        displayName: "Spain",
      },
      {
        countryCode: "UK",
        displayName: "United Kingdom",
      },
      {
        countryCode: "US",
        displayName: "United States",
      },
    ],
    provinces: INDIRECT_TAX_PROVINCES,
  },
  slotProps: {
    formState: {
      errors: {},
    },
  },
  refs: { formRef: { current: null } },
};

const stepFourProps: StoryDemoData<BankingInfoFormViewProps> = {
  states: {
    hideSteps: false,
    disabled: false,
    loading: false,
    hasPayPal: false,
    isPartner: false,
    saveDisabled: false,
    thresholds: [],
    formState: {
      paymentMethodChecked: "toBankAccount",
    },
  },
  callbacks: {
    onSubmit: async () => console.log("Submit"),
    setPaymentMethodChecked: () => {},
    setPaymentScheduleChecked: () => {},
    getValidationErrorMessage: () => "",
  },
  refs: { formRef: { current: null } },
};

const docusignFormProps: StoryDemoData<UseDocusignFormResult> = {
  states: {
    docusignStatus: undefined,
    hideSteps: false,
    documentType: "W9" as const,
    documentTypeString: "W9",
    loading: false,
    disabled: false,
    submitDisabled: false,
    participantTypeDisabled: false,
    formState: {
      participantType: "individualParticipant" as ParticipantType,
      errors: {},
      completedTaxForm: true,
      taxFormExpired: false,
    },
    hideBackButton: false,
  },
  callbacks: {
    setParticipantType: (p) => console.log({ p }),
    setDocusignStatus: (status: DocusignStatus) => console.log(status),
    toggleFormSubmitted: () => console.log("Toggle checkbox"),
    onSubmit: async () => console.log("submit"),
    onBack: () => console.log("Back"),
  },
};

const documentTypeFormProps: StoryDemoData<UseDocumentTypeFormResult> = {
  states: {
    hideSteps: false,
    loading: false,
    disabled: false,
    formState: {
      errors: {},
      formSubmission: false,
      selectedTaxForm: undefined,
    },
  },
  callbacks: {
    onSubmit: async () => console.log("Submit"),
    onBack: () => console.log("Back"),
  },
};

export const GeneralLoadingView = () => {
  return <LoadingView />;
};

// STEP ONE
export const StepOne = () => {
  return <sqm-user-info-form demoData={stepOneProps} />;
};

export const StepOneLoading = () => {
  return (
    <sqm-user-info-form
      demoData={{
        states: { ...stepOneProps.states, loading: true },
      }}
    ></sqm-user-info-form>
  );
};

export const StepOneDisabled = () => {
  return (
    <sqm-user-info-form
      demoData={{
        states: { ...stepOneProps.states, disabled: true },
      }}
    ></sqm-user-info-form>
  );
};

export const StepOneIsUser = () => {
  return (
    <sqm-user-info-form
      demoData={{
        states: { ...stepOneProps.states, isUser: true },
      }}
    ></sqm-user-info-form>
  );
};

export const StepOneIsPartner = () => {
  return (
    <sqm-user-info-form
      demoData={{
        states: { ...stepOneProps.states, disabled: true, isPartner: true },
      }}
    ></sqm-user-info-form>
  );
};

export const StepOneWithErrors = () => {
  return (
    <sqm-user-info-form
      demoData={{
        states: {
          ...stepOneProps.states,
          formState: {
            ...stepOneProps.states.formState,
            errors: {
              firstName: true,
              lastName: true,
              email: true,
              countryCode: true,
              currency: true,
              participantType: true,
              allowBankingCollection: true,
            },
          },
        },
      }}
    ></sqm-user-info-form>
  );
};

export const StepOneWithGeneralError = () => {
  return (
    <sqm-user-info-form
      demoData={{
        states: {
          ...stepOneProps.states,
          formState: {
            ...stepOneProps.states.formState,
            errors: {
              general: true,
            },
          },
        },
      }}
    ></sqm-user-info-form>
  );
};

// STEP TWO
export const StepTwoLoading = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          loading: true,
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoDisabled = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          disabled: true,
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoIsPartner = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          isPartner: true,
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoWithGeneralError = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            errors: {
              general: true,
            },
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoOtherRegionChecked = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            checked: "otherRegion",
          },
        },
        slotProps: {
          formState: {
            selectedRegion: "UK",
            indirectTaxNumber: "123456",
            errors: {},
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoOtherRegionCheckedCanada = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            checked: "otherRegion",
          },
        },
        slotProps: {
          formState: {
            selectedRegion: "CA",
            province: "BRITISHCOLUMBIA",
            indirectTaxNumber: "123456",
            errors: {},
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoOtherRegionCheckedCanadaGST = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            checked: "otherRegion",
          },
        },
        slotProps: {
          formState: {
            selectedRegion: "CA",
            province: "QUEBEC",
            indirectTaxNumber: "123456",
            errors: {},
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoOtherRegionCheckedCanadaGSTAndQST = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            checked: "otherRegion",
          },
        },
        slotProps: {
          formState: {
            selectedRegion: "CA",
            province: "QUEBEC",
            qstNumber: "654321",
            hasQst: true,
            errors: {},
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoOtherRegionCheckedOtherCountrySubRegion = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            checked: "otherRegion",
          },
        },
        slotProps: {
          formState: {
            selectedRegion: "ES",
            subRegion: "CANARYISLANDS",
            errors: {},
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoOtherRegionCheckedOtherCountrySubRegionIncomeTax = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            checked: "otherRegion",
          },
        },
        slotProps: {
          formState: {
            selectedRegion: "ES",
            subRegion: "CANARYISLANDS",
            hasSubRegionTaxNumber: true,
            subRegionTaxNumber: "654321",
            errors: {},
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoOtherRegionCheckedWithInputErrors = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            checked: "otherRegion",
            errors: {},
          },
        },
        slotProps: {
          formState: {
            province: "",
            selectedRegion: "GB",
            errors: {
              selectedRegion: true,
              indirectTaxNumber: true,
            },
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoOtherRegionCheckedCanadaWithProvinceError = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            checked: "otherRegion",
          },
        },
        slotProps: {
          formState: {
            selectedRegion: "CA",
            province: "BC",
            errors: {
              province: true,
              indirectTaxNumber: true,
            },
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoOtherRegionCheckedCanadaGSTAndQSTError = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            checked: "otherRegion",
          },
        },
        slotProps: {
          formState: {
            selectedRegion: "CA",
            province: "QUEBEC",
            hasQst: true,
            errors: {
              province: true,
              indirectTaxNumber: true,
              qstNumber: true,
            },
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoOtherRegionCheckedOtherCountrySubRegionErrors = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            checked: "otherRegion",
          },
        },
        slotProps: {
          formState: {
            selectedRegion: "ES",
            hasSubRegionTaxNumber: true,
            errors: {
              indirectTaxNumber: true,
              subRegionTaxNumberError: true,
              subRegion: true,
            },
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

export const StepTwoNotRegisteredChecked = () => {
  return (
    <sqm-indirect-tax-form
      demoData={{
        states: {
          ...stepTwoProps.states,
          formState: {
            ...stepTwoProps.states.formState,
            checked: "notRegistered",
          },
        },
      }}
    ></sqm-indirect-tax-form>
  );
};

// STEP THREE
export const StepThreeWithDocusign = () => {
  return (
    <sqm-docusign-form
      demoData={{
        states: {
          ...docusignFormProps.states,
        },
      }}
    ></sqm-docusign-form>
  );
};

export const StepThreeWithDocusignW8BEN = () => {
  return (
    <sqm-docusign-form
      demoData={{
        states: {
          ...docusignFormProps.states,
          documentType: "W8BEN",
        },
      }}
    ></sqm-docusign-form>
  );
};

export const StepThreeWithDocusignW8BENE = () => {
  return (
    <sqm-docusign-form
      demoData={{
        states: {
          ...docusignFormProps.states,
          documentType: "W8BENE",
          formState: {
            completedTaxForm: false,
            taxFormExpired: false,
            participantType: "businessEntity",
            errors: {
              participantType: "",
              general: false,
            },
          },
        },
      }}
    ></sqm-docusign-form>
  );
};

export const StepThreeWithDocusignExpired = () => {
  return (
    <sqm-docusign-form
      demoData={{
        states: {
          ...docusignFormProps.states,
          docusignStatus: "ttl_expired",
          formState: {
            participantType: "individualParticipant" as ParticipantType,
            taxFormExpired: true,
            completedTaxForm: false,
            errors: {},
          },
        },
      }}
    ></sqm-docusign-form>
  );
};

export const StepThreeWithDocusignCompleted = () => {
  return (
    <sqm-docusign-form
      demoData={{
        states: {
          ...docusignFormProps.states,
          docusignStatus: "signing_complete",
          formState: {
            participantType: "individualParticipant" as ParticipantType,
            taxFormExpired: false,
            completedTaxForm: true,
            errors: {},
          },
        },
      }}
    ></sqm-docusign-form>
  );
};

export const StepThreeDocusignWithError = () => {
  return (
    <sqm-docusign-form
      demoData={{
        states: {
          ...docusignFormProps.states,
          docusignStatus: "exception",
          formState: {
            ...docusignFormProps.states.formState,
            completedTaxForm: false,
            errors: {
              formSubmission: true,
            },
          },
        },
      }}
    ></sqm-docusign-form>
  );
};

export const StepThreeDocusignWithGeneralError = () => {
  return (
    <sqm-docusign-form
      demoData={{
        states: {
          ...docusignFormProps.states,
          formState: {
            ...docusignFormProps.states.formState,
            errors: {
              general: true,
            },
          },
        },
      }}
    ></sqm-docusign-form>
  );
};

export const StepThreeDocusignLoading = () => {
  return (
    <sqm-docusign-form
      demoData={{
        states: {
          ...docusignFormProps.states,
          loading: true,
        },
      }}
    ></sqm-docusign-form>
  );
};

export const StepThreeDocusignDisabled = () => {
  return (
    <sqm-docusign-form
      demoData={{
        states: {
          ...docusignFormProps.states,
          disabled: true,
        },
      }}
    ></sqm-docusign-form>
  );
};

// STEP 4
export const StepFourDefault = () => {
  return <sqm-banking-info-form></sqm-banking-info-form>;
};

export const StepFourIsPartner = () => {
  return (
    <sqm-banking-info-form
      demoData={{
        ...stepFourProps,
        states: {
          ...stepFourProps.states,
          isPartner: true,
          formState: {
            ...stepFourProps.states.formState,
          },
        },
      }}
    ></sqm-banking-info-form>
  );
};

export const StepFourDirectToBankChecked = () => {
  return (
    <sqm-banking-info-form
      demoData={{
        ...stepFourProps,
        states: {
          ...stepFourProps.states,
          formState: {
            ...stepFourProps.states.formState,
          },
        },
      }}
    ></sqm-banking-info-form>
  );
};

export const StepFourToPaypalChecked = () => {
  return (
    <sqm-banking-info-form
      demoData={{
        ...stepFourProps,
        states: {
          ...stepFourProps.states,
          formState: {
            ...stepFourProps.states.formState,
            paymentMethodChecked: "toPayPalAccount",
          },
        },
      }}
    ></sqm-banking-info-form>
  );
};

export const TaxAndCashDashboardActiveW9Form = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          status: "ACTIVE",
          documentType: "W9",
          documentTypeString: "W9",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          country: "United Kingdom",
          indirectTaxNumber: "123456",
          indirectTaxType: "VAT",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardActiveW8BENForm = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          status: "ACTIVE",
          documentType: "W8BEN",
          documentTypeString: "W8-BEN",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          country: "United Kingdom",
          indirectTaxType: "VAT",
          indirectTaxNumber: "123456",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardActiveW8BENEForm = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          status: "ACTIVE",
          documentType: "W8BENE",
          documentTypeString: "W8-BEN-E",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          country: "United Kingdom",
          indirectTaxType: "VAT",
          indirectTaxNumber: "123456",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardNotActiveW9Form = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          status: "NOT_ACTIVE",
          documentType: "W9",
          documentTypeString: "W9",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          indirectTaxNumber: "123456",
          indirectTaxType: "VAT",
          country: "Slovania",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};
export const TaxAndCashDashboardNotVerifiedW9Form = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          status: "NOT_VERIFIED",
          documentType: "W9",
          documentTypeString: "W9",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          country: "United States",
          indirectTaxType: "VAT",
          indirectTaxNumber: "123456",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardNotVerifiedW8BENForm = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          status: "NOT_VERIFIED",
          documentType: "W8BEN",
          documentTypeString: "W8-BEN",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          country: "United Kingdom",
          indirectTaxType: "VAT",
          indirectTaxNumber: "123456",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardNotVerifiedW8BENEForm = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          status: "NOT_VERIFIED",
          documentType: "W8BENE",
          documentTypeString: "W8-BEN-E",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          country: "United Kingdom",
          indirectTaxType: "VAT",
          indirectTaxNumber: "123456",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardNotActiveW8BENEForm = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          status: "NOT_ACTIVE",
          documentType: "W8BENE",
          documentTypeString: "W8-BEN-E",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          indirectTaxNumber: "123456",
          indirectTaxType: "VAT",
          country: "United Kingdom",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardNoFormNeeded = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          documentType: "W9",
          documentTypeString: "W9",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: true,
          province: "Ontario",
          country: "Canada",
          isIndirectTaxCanada: true,
          indirectTaxNumber: "123456",
          indirectTaxType: "GST",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardIndirectTaxCanada = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          status: "ACTIVE",
          disabled: false,
          documentType: "W8BENE",
          documentTypeString: "W8-BEN-E",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          province: "Ontario",
          country: "Canada",
          isIndirectTaxCanada: true,
          indirectTaxType: "GST",
          indirectTaxNumber: "123456",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardIndirectTaxCanadaQuebec = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          status: "ACTIVE",
          disabled: false,
          documentType: "W8BENE",
          documentTypeString: "W8-BEN-E",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          province: "Quebec",
          country: "Canada",
          isIndirectTaxCanada: true,
          indirectTaxType: "GST",
          indirectTaxNumber: "123456",
          qstNumber: 44212,
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardIndirectTaxSpain = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          status: "ACTIVE",
          disabled: false,
          documentType: "W8BENE",
          documentTypeString: "W8-BEN-E",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          country: "Spain",
          subRegion: "Madred",
          indirectTaxType: "VAT",
          indirectTaxNumber: "123456",
          subRegionTaxNumber: 44212,
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardIndirectTaxNotRegistered = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          status: "ACTIVE",
          documentType: "W8BEN",
          documentTypeString: "W8-BEN",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          notRegistered: true,
          isBusinessEntity: false,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardLoading = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          status: "ACTIVE",
          documentType: "W9",
          documentTypeString: "W9",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          loading: true,
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardWithGeneralError = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: false,
          status: "ACTIVE",
          documentType: "W9",
          documentTypeString: "W9",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          indirectTaxNumber: "123456",
          country: "Slovania",
          isBusinessEntity: true,
          errors: {
            general: true,
          },
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};

export const TaxAndCashDashboardDisabled = () => {
  return (
    <sqm-tax-and-cash-dashboard
      demoData={{
        states: {
          disabled: true,
          status: "NOT_ACTIVE",
          documentType: "W8BEN",
          documentTypeString: "W8-BEN",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          isBusinessEntity: true,
          indirectTaxNumber: "123456",
          country: "Slovania",
        },
      }}
    ></sqm-tax-and-cash-dashboard>
  );
};
