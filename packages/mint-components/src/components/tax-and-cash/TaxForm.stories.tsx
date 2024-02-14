import { h } from "@stencil/core";
import { StoryDemoData } from "../../global/demo";
import { INDIRECT_TAX_COUNTRIES } from "./countries";
import { UseDocumentTypeFormResult } from "./sqm-document-type-form/useDocumentTypeForm";
import { UseDocusignFormResult } from "./sqm-docusign-form/useDocusignForm";
import { UseIndirectTaxFormResult } from "./sqm-indirect-tax-form/useIndirectTaxForm";
import {
  INDIRECT_TAX_PROVINCES,
  INDIRECT_TAX_SPAIN_REGIONS,
} from "./subregions";
import { UseUserInfoFormResult } from "./sqm-user-info-form/useUserInfoForm";
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

    formState: {
      firstName: "Bob",
      lastName: "Testerson",
      email: "bobtesterson@example.com",
      countryCode: "US",
      currency: "CAD",
      participantType: "individualParticipant",
      errors: {},
    },
  },
  data: {
    countries: [
      {
        impactCountryCode: "CANADA",
        countryCode: "CA",
        displayName: "Canada",
      },
    ],
    currencies: [
      {
        currencyCode: "CAD",
        displayName: "CAD",
      },
    ],
  },
  refs: {
    formRef: { current: null },
  },
};

const stepTwoProps: StoryDemoData<UseIndirectTaxFormResult> = {
  states: {
    hideSteps: false,
    disabled: false,
    loading: false,
    isPartner: false,
    errors: {},
    formState: {
      checked: undefined,
    },
  },
  callbacks: {
    onSubmit: async () => console.log("Submit"),
    onChange: () => console.log("Submit"),
    onBack: () => console.log("Submit"),
    onFormChange: (field: string, e: CustomEvent) => console.log(field, e),
    onQstToggle: () => {},
    onSpainToggle: () => {},
  },
  data: {
    esRegions: INDIRECT_TAX_SPAIN_REGIONS,
    countries: INDIRECT_TAX_COUNTRIES,
    provinces: INDIRECT_TAX_PROVINCES,
  },
  slotProps: {
    formState: {
      errors: {},
    },
  },
  refs: { formRef: { current: null } },
};

const docusignFormProps: StoryDemoData<UseDocusignFormResult> = {
  states: {
    hideSteps: false,
    documentType: "W9",
    loading: false,
    disabled: false,
    submitDisabled: false,
    formState: {
      errors: {},
      completedTaxForm: true,
      taxFormExpired: false,
    },
  },
  callbacks: {
    toggleFormSubmitted: () => console.log("Toggle checkbox"),
    onShowDocumentType: () => console.log("To other form"),
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
          errors: {
            general: true,
          },
          formState: {
            ...stepTwoProps.states.formState,
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
            province: "BC",
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
            province: "QC",
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
            province: "QC",
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
            hasSubRegionTaxNumber: true,
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

export const StepTwoOtherRegionCheckedCanadaWithError = () => {
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
            province: "QC",
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
    >
      <div slot="docusign-iframe">Hey</div>
    </sqm-docusign-form>
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
    >
      <div slot="docusign-iframe">Hey</div>
    </sqm-docusign-form>
  );
};

export const StepThreeDocusignWithFormSubmissionError = () => {
  return (
    <sqm-docusign-form
      demoData={{
        states: {
          ...docusignFormProps.states,
          formState: {
            ...docusignFormProps.states.formState,
            completedTaxForm: false,
            errors: {
              formSubmission: true,
            },
          },
        },
      }}
    >
      <div slot="docusign-iframe">Hey</div>
    </sqm-docusign-form>
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
    >
      <div slot="docusign-iframe">Hey</div>
    </sqm-docusign-form>
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

export const StepThreeWithFormSelector = () => {
  return (
    <sqm-document-type-form
      demoData={{
        states: {
          ...documentTypeFormProps.states,
        },
      }}
    ></sqm-document-type-form>
  );
};

export const StepThreeWithFormSelectorLoading = () => {
  return (
    <sqm-document-type-form
      demoData={{
        states: {
          ...documentTypeFormProps.states,
          loading: true,
        },
      }}
    ></sqm-document-type-form>
  );
};

export const StepThreeWithFormSelectorDisabled = () => {
  return (
    <sqm-document-type-form
      demoData={{
        states: {
          ...documentTypeFormProps.states,
          disabled: true,
        },
      }}
    ></sqm-document-type-form>
  );
};

export const StepThreeFormSelectorWithGeneralError = () => {
  return (
    <sqm-document-type-form
      demoData={{
        states: {
          ...documentTypeFormProps.states,
          formState: {
            ...documentTypeFormProps.states.formState,
            errors: {
              general: true,
            },
          },
        },
      }}
    ></sqm-document-type-form>
  );
};

export const TaxDocumentSubmittedActive = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          disabled: false,
          status: "ACTIVE",
          documentType: "W8BEN",
          dateSubmitted: "Jan 18th, 2025",
          dateExpired: "Dec 18th, 2025",
          noFormNeeded: false,
          country: "United Kingdom",
          indirectTaxNumber: 123456,
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentSubmittedNotVerified = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          disabled: false,
          status: "NOT_VERIFIED",
          documentType: "W8BEN",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          country: "United Kingdom",
          indirectTaxNumber: 123456,
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentSubmittedNotActive = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          disabled: false,
          status: "NOT_ACTIVE",
          documentType: "W8BENE",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          indirectTaxNumber: 123456,
          country: "Slovania",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentSubmittedExpired = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          disabled: false,
          status: "EXPIRED",
          documentType: "W8BENE",
          dateSubmitted: "Jan 18th, 2025",
          dateExpired: "Dec 25th, 2025",
          noFormNeeded: false,
          indirectTaxNumber: 123456,
          country: "United Kingdom",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentSubmittedExpiringSoon = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          disabled: false,
          status: "ACTIVE",
          documentType: "W8BENE",
          dateSubmitted: "Jan 18th, 2025",
          dateExpired: "Feb 18th, 2025",
          expiresSoon: true,
          noFormNeeded: false,
          indirectTaxNumber: 123456,
          country: "Slovania",
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentNoFormNeeded = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          disabled: false,
          documentType: "W9",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: true,
          province: "Ontario",
          country: "Canada",
          isIndirectTaxCanada: true,
          indirectTaxNumber: 123456,
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentSubmittedIndirectTaxCanada = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          status: "ACTIVE",
          disabled: false,
          documentType: "W8BENE",
          dateSubmitted: "Jan 18th, 2025",
          dateExpired: "Dec 20, 2026",
          noFormNeeded: false,
          province: "Ontario",
          country: "Canada",
          isIndirectTaxCanada: true,
          indirectTaxNumber: 123456,
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentSubmittedNotRegistered = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          status: "ACTIVE",
          documentType: "W8BEN",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          notRegistered: true,
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentSubmittedIndividualParticipant = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          status: "ACTIVE",
          documentType: "W8BEN",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          notRegistered: true,
          isBusinessEntity: false,
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentSubmittedLoading = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          disabled: false,
          status: "ACTIVE",
          documentType: "W9",
          dateSubmitted: "Jan 18th, 2025",
          dateExpired: "Dec 18th, 2025",
          noFormNeeded: false,
          loading: true,
          isBusinessEntity: true,
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentSubmittedWithGeneralError = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          disabled: false,
          status: "ACTIVE",
          documentType: "W9",
          dateSubmitted: "Jan 18th, 2025",
          dateExpired: "Dec 18th, 2025",
          noFormNeeded: false,
          indirectTaxNumber: 123456,
          country: "Slovania",
          isBusinessEntity: true,
          errors: {
            general: true,
          },
        },
      }}
    ></sqm-tax-document-submitted>
  );
};

export const TaxDocumentSubmittedDisabled = () => {
  return (
    <sqm-tax-document-submitted
      demoData={{
        states: {
          disabled: true,
          status: "NOT_ACTIVE",
          documentType: "W8BEN",
          dateSubmitted: "Jan 18th, 2025",
          noFormNeeded: false,
          isBusinessEntity: true,
          indirectTaxNumber: 123456,
          country: "Slovania",
        },
      }}
    ></sqm-tax-document-submitted>
  );
};
