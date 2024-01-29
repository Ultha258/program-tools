import { h } from "@stencil/core";
import {
  DocumentTypeFormView,
  DocumentTypeFormViewProps,
} from "../sqm-document-type-form/sqm-document-type-form-view";
import {
  DocusignFormView,
  TaxFormStepThreeAViewProps,
} from "../sqm-docusign-form/sqm-docusign-form-view";
import {
  IndirectTaxFormView,
  TaxFormStepTwoProps,
} from "../sqm-indirect-tax-form/sqm-indirect-tax-form-view";
import {
  TaxDocumentSubmittedProps,
  TaxDocumentSubmittedView,
} from "../sqm-tax-document-submitted/sqm-tax-document-submitted-view";
import {
  documentTypeFormText,
  taxFormStepOneText,
  taxFormStepTwoText,
} from "./defaultTextCopy";
import {
  RegisteredInCanada,
  RegisteredInOtherRegion,
} from "./small-views/SlotViews.stories";
import {
  TaxFormStepOneProps,
  UserInfoFormView,
} from "./sqm-user-info-form-view";

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
      currency: "CAD",
      allowBankingCollection: true,
      participantType: "individualParticipant",
    },
  },
  callbacks: {
    onSubmit: (props: any) => console.log("Submit"),
    onRadioClick: (props: any) => console.log("Radio Click"),
  },
  text: taxFormStepOneText,
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
  refs: { formRef: { current: null } },
  text: taxFormStepTwoText,
};

const documentSubmittedActiveProps: TaxDocumentSubmittedProps = {
  states: {
    status: "ACTIVE",
    documentType: "W9",
    dateSubmitted: "Jan 18th, 2025",
  },
  callbacks: { onClick: () => console.log("Submit new Form") },
  text: {
    statusTextActive: "Active",
    badgeTextSubmittedOn: "Submitted On",
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
    statusTextNotVerified: "Not Verified",
    badgeTextAwaitingReview: "Awaiting Review. Submitted On",
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
    statusTextNotActive: "Not Active",
    badgeTextSubmittedOn: "Submitted On",
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
    statusTextExpired: "Expired",
    badgeTextSubmittedOn: "Expired On",
    bankingInformationSectionHeader: "Banking Information",
    taxDocumentSectionHeader: "Tax Documents",
    taxAlertHeader: "Your W8-BEN-E tax form has expired. ",
    taxAlertMessage: "Please resubmit a new W8-BEN-E form.",
    taxDocumentSectionSubHeader: "W8-BEN-E Tax Documents",
    newFormButton: "Submit New Form",
  },
};

const documentSubmittedLoadingProps: TaxDocumentSubmittedProps = {
  states: {
    status: "EXPIRED",
    documentType: "W8-BEN-E",
    dateSubmitted: "Jan 18th, 2025",
    loading: true,
  },
  callbacks: { onClick: () => console.log("Submit new Form") },
  text: {
    statusTextExpired: "Expired",
    badgeTextSubmittedOn: "Expired On",
    bankingInformationSectionHeader: "Banking Information",
    taxDocumentSectionHeader: "Tax Documents",
    taxAlertHeader: "Your W8-BEN-E tax form has expired. ",
    taxAlertMessage: "Please resubmit a new W8-BEN-E form.",
    taxDocumentSectionSubHeader: "W8-BEN-E Tax Documents",
    newFormButton: "Submit New Form",
  },
};

const stepThreeAProps: TaxFormStepThreeAViewProps = {
  states: {
    loading: false,
    submitDisabled: false,
    formState: {
      formSubmisson: false,
      completedTaxForm: true,
    },
    docusignSlot: (
      <div
        style={{
          border: "1px dashed black",
          width: "600px",
          height: "600px",
        }}
      ></div>
    ),
  },
  callbacks: {
    onSubmit: (props: any) => console.log(props),
    onBack: () => console.log("Back"),
  },
  text: taxFormStepThreeText,
};

const stepThreeBProps: DocumentTypeFormViewProps = {
  states: {
    loading: false,
    submitDisabled: false,
    formState: {
      formSubmisson: false,
      selectedTaxForm: undefined,
    },
  },
  callbacks: {
    onSubmit: (props: any) => console.log(props),
    onBack: () => console.log("Back"),
  },
  text: documentTypeFormText,
};

// STEP ONE
export const StepOne = () => {
  return <UserInfoFormView {...stepOneProps} />;
};

export const StepOneLoading = () => {
  return (
    <UserInfoFormView
      {...stepOneProps}
      states={{ ...stepOneProps.states, loading: true }}
    />
  );
};

export const StepOneDisabled = () => {
  return (
    <UserInfoFormView
      {...stepOneProps}
      states={{ ...stepOneProps.states, submitDisabled: true }}
    />
  );
};

export const StepOneWithErrors = () => {
  return (
    <UserInfoFormView
      {...stepOneProps}
      states={{
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
      }}
    />
  );
};

// STEP TWO
export const StepTwo = () => {
  return <IndirectTaxFormView {...stepTwoProps} />;
};

export const StepTwoWithError = () => {
  return (
    <IndirectTaxFormView
      {...stepTwoProps}
      states={{
        ...stepTwoProps.states,
        formState: {
          ...stepTwoProps.states.formState,
          errors: {
            taxDetails: true,
          },
        },
      }}
    />
  );
};

export const StepTwoHSTChecked = () => {
  return (
    <IndirectTaxFormView
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
    <IndirectTaxFormView
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
    <IndirectTaxFormView
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

// STEP THREE
export const StepThreeWithDocusign = () => {
  return <DocusignFormView {...stepThreeAProps} />;
};

export const StepThreeWithFormSelector = () => {
  return <DocumentTypeFormView {...stepThreeBProps} />;
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

export const TaxDocumentSubmittedLoading = () => {
  return <TaxDocumentSubmittedView {...documentSubmittedLoadingProps} />;
};
