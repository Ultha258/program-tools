import { h } from "@stencil/core";
import {
  TaxFormStepOneView,
  TaxFormStepOneProps,
} from "./sqm-tax-form-step-1-view";
import {
  TaxFormStepTwoProps,
  TaxFormStepTwoView,
} from "./sqm-tax-form-step-2-view";
import {
  TaxDocumentSubmittedProps,
  TaxDocumentSubmittedView,
} from "./sqm-tax-document-submitted-view";
import {
  RegisteredInCanada,
  RegisteredInOtherRegion,
} from "./small-views/SlotViews.stories";

export default {
  title: "Components/Tax Form",
};

const stepOneProps: TaxFormStepOneProps = {
  states: {
    loading: false,
    submitDisabled: false,
    formState: {
      firstName: "Bob",
      lastName: "Testerson",
      email: "bobtesterson@example.com",
      countryCode: "US",
      currency: "fghdfgsd",
      allowBankingCollection: true,
    },
  },
  callbacks: {
    onSubmit: (props: any) => console.log("Submit"),
  },
  text: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    country: "Country",
    currency: "Currency",
    allowBankingCollection:
      "I allow impact.com to collect my tax and banking information",
    submitButton: "Continue",
    step: "step",
    stepOf: "of",
    personalInformation: "Personal Information",
  },
  refs: {
    formRef: () => {},
  },
};

const stepTwoProps: TaxFormStepTwoProps = {
  states: {
    loading: false,
    submitDisabled: false,
    formState: {
      checked: undefined,
    },
  },
  callbacks: {
    onSubmit: (props: any) => console.log("Submit"),
    onChange: (e) => console.log("Submit"),
    onBack: () => console.log("Submit"),
  },
  text: {
    step: "Step",
    stepOf: "of",
    indirectTax: "Indirect Tax",
    indirectTaxDescription:
      "Indirect Taxes (e.g. VAT, HST, GST) are transactional based taxes that are required to be levied by service providers by most tax authorities.",
    indirectTaxDetails: "Indirect Tax Details",
    indirectTaxDetailsDescription:
      "Not sure if you are registered for indirect tax? Contact our Support team to find out more.",
    hstCanada: "I am registered for HST in Canada",
    otherRegion:
      "I am registered for Indirect Tax in a different Country / Region",
    notRegistered: "I am not registered for Indirect Tax",
    submitButton: "Continue",
    backButton: "Back",
  },
};

const documentSubmittedActiveProps: TaxDocumentSubmittedProps = {
  states: {
    status: "ACTIVE",
    documentType: "W9",
    dateSubmitted: "Jan 18th, 2025",
  },
  callbacks: { onClick: () => console.log("Submit new Form") },
  text: {
    status: {
      active: "Active",
    },
    badge: {
      submittedOn: "Submitted On",
    },
    bankingInformationSectionHeader: "Banking Information",
    taxDocumentSectionHeader: "Tax Documents",
    taxAlertHeader:
      "Your W9 tax form has personal information that doesn't match your profile",
    taxAlertMessage: "Please resubmit a new W9 form.",
    taxDocumentSectionSubHeader: "W9 Tax Documents",
    newFormButton: "Submit New Form",
  },
};

const documentSubmittedNotVerifiedProps: TaxDocumentSubmittedProps = {
  states: {
    status: "NOT_VERIFIED",
    documentType: "W9",
    dateSubmitted: "Jan 18th, 2025",
  },
  callbacks: { onClick: () => console.log("Submit new Form") },
  text: {
    status: {
      notVerified: "Not Verified",
    },
    badge: {
      awaitingReview: "Awaiting Review. Submitted On",
    },
    bankingInformationSectionHeader: "Banking Information",
    taxDocumentSectionHeader: "Tax Documents",
    taxDocumentSectionSubHeader: "W9 Tax Documents",
    newFormButton: "Submit New Form",
  },
};
const documentSubmittedNotActiveProps: TaxDocumentSubmittedProps = {
  states: {
    status: "NOT_ACTIVE",
    documentType: "W8-BEN-E",
    dateSubmitted: "Jan 18th, 2025",
  },
  callbacks: { onClick: () => console.log("Submit new Form") },
  text: {
    status: {
      notActive: "Not Active",
    },
    badge: {
      submittedOn: "Submitted On",
    },
    bankingInformationSectionHeader: "Banking Information",
    taxDocumentSectionHeader: "Tax Documents",
    taxAlertHeader:
      "Your W8-BEN-E tax form has personal information that doesn't match your profile",
    taxAlertMessage: "Please resubmit a new W8-BEN-E form.",
    taxDocumentSectionSubHeader: "W8-BEN-E Tax Documents",
    newFormButton: "Submit New Form",
  },
};

const documentSubmittedExpiredProps: TaxDocumentSubmittedProps = {
  states: {
    status: "EXPIRED",
    documentType: "W8-BEN-E",
    dateSubmitted: "Jan 18th, 2025",
  },
  callbacks: { onClick: () => console.log("Submit new Form") },
  text: {
    status: {
      expired: "Expired",
    },
    badge: {
      expiredOn: "Expired On",
    },
    bankingInformationSectionHeader: "Banking Information",
    taxDocumentSectionHeader: "Tax Documents",
    taxAlertHeader: "Your W8-BEN-E tax form has expired. ",
    taxAlertMessage: "Please resubmit a new W8-BEN-E form.",
    taxDocumentSectionSubHeader: "W8-BEN-E Tax Documents",
    newFormButton: "Submit New Form",
  },
};

// STEP ONE
export const StepOne = () => {
  return <TaxFormStepOneView {...stepOneProps} />;
};

export const StepOneLoading = () => {
  return (
    <TaxFormStepOneView
      {...stepOneProps}
      states={{ ...stepOneProps.states, loading: true }}
    />
  );
};

export const StepOneDisabled = () => {
  return (
    <TaxFormStepOneView
      {...stepOneProps}
      states={{ ...stepOneProps.states, submitDisabled: true }}
    />
  );
};

export const StepOneWithError = () => {
  return (
    <TaxFormStepOneView
      {...stepOneProps}
      states={{
        ...stepOneProps.states,
        formState: {
          ...stepOneProps.states.formState,
          errors: {
            firstName: {
              status: "invalid",
              message: "Please enter your first name",
            },
          },
        },
      }}
    />
  );
};

// STEP TWO
export const StepTwo = () => {
  return <TaxFormStepTwoView {...stepTwoProps} />;
};

export const StepTwoHSTChecked = () => {
  return (
    <TaxFormStepTwoView
      {...stepTwoProps}
      states={{
        ...stepTwoProps.states,
        registeredInCanadaDetailsSlot: <RegisteredInCanada />,
        formState: {
          ...stepTwoProps.states.formState,
          checked: "hstCanada",
        },
      }}
    />
  );
};

export const StepTwoOtherRegionChecked = () => {
  return (
    <TaxFormStepTwoView
      {...stepTwoProps}
      states={{
        ...stepTwoProps.states,
        registeredInDifferentCountryDetailsSlot: <RegisteredInOtherRegion />,
        formState: {
          ...stepTwoProps.states.formState,
          checked: "otherRegion",
        },
      }}
    />
  );
};

export const StepTwoNotRegisteredChecked = () => {
  return (
    <TaxFormStepTwoView
      {...stepTwoProps}
      states={{
        ...stepTwoProps.states,
        formState: {
          ...stepTwoProps.states.formState,
          checked: "notRegistered",
        },
      }}
    />
  );
};

export const TaxDocumentSubmittedActive = () => {
  return <TaxDocumentSubmittedView {...documentSubmittedActiveProps} />;
};

export const TaxDocumentSubmittedNotVerified = () => {
  return <TaxDocumentSubmittedView {...documentSubmittedNotVerifiedProps} />;
};

export const TaxDocumentSubmittedNotActive = () => {
  return <TaxDocumentSubmittedView {...documentSubmittedNotActiveProps} />;
};

export const TaxDocumentSubmittedExpired = () => {
  return <TaxDocumentSubmittedView {...documentSubmittedExpiredProps} />;
};
