import { h } from "@stencil/core";
import {
  DocumentTypeFormView,
  DocumentTypeFormViewProps,
} from "../sqm-document-type-form/sqm-document-type-form-view";
import {
  DocusignFormView,
  DocusignFormViewProps,
} from "../sqm-docusign-form/sqm-docusign-form-view";
import {
  IndirectTaxFormView,
  IndirectTaxFormViewProps,
} from "../sqm-indirect-tax-form/sqm-indirect-tax-form-view";
import {
  TaxDocumentSubmittedProps,
  TaxDocumentSubmittedView,
} from "../sqm-tax-document-submitted/sqm-tax-document-submitted-view";
import {
  documentTypeFormText,
  userInfoText,
  indirectTaxFormText,
  docusignFormText,
  taxFormDocumentSubmittedText,
} from "./defaultTextCopy";
import {
  RegisteredInCanada,
  RegisteredInOtherRegion,
} from "./small-views/SlotViews.stories";
import {
  UserInfoFormViewProps,
  UserInfoFormView,
} from "./sqm-user-info-form-view";

export default {
  title: "Components/Tax Form",
};

const stepOneProps: UserInfoFormViewProps = {
  states: {
    loading: false,
    disabled: false,
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
    // TODO: fix type
    onSubmit: (props: any) => console.log("Submit"),
    // TODO: fix type
    onRadioClick: (props: any) => console.log("Radio Click"),
  },
  text: userInfoText,
  refs: {
    formRef: () => {},
  },
};

const stepTwoProps: IndirectTaxFormViewProps = {
  states: {
    loading: false,
    submitDisabled: false,
    formState: {
      checked: undefined,
    },
  },
  callbacks: {
    // TODO: fix type
    onSubmit: (props: any) => console.log("Submit"),
    // TODO: fix type
    onChange: (e) => console.log("Submit"),
    onBack: () => console.log("Submit"),
  },
  refs: { formRef: { current: null } },
  text: indirectTaxFormText,
};

const documentSubmittedActiveProps: TaxDocumentSubmittedProps = {
  states: {
    status: "ACTIVE",
    documentType: "W9",
    dateSubmitted: "Jan 18th, 2025",
    dateExpired: "Dec 18th, 2025",
  },
  callbacks: { onClick: () => console.log("Submit new Form") },
  text: {
    ...taxFormDocumentSubmittedText,
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
    ...taxFormDocumentSubmittedText,
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
    ...taxFormDocumentSubmittedText,
  },
};

const documentSubmittedExpiredProps: TaxDocumentSubmittedProps = {
  states: {
    status: "EXPIRED",
    documentType: "W8-BEN-E",
    dateSubmitted: "Jan 18th, 2025",
    dateExpired: "Dec 18th, 2025",
    expiresSoon: true,
  },
  callbacks: { onClick: () => console.log("Submit new Form") },
  text: {
    ...taxFormDocumentSubmittedText,
  },
};

const documentSubmittedExpiringSoonProps: TaxDocumentSubmittedProps = {
  states: {
    status: "ACTIVE",
    documentType: "W8-BEN-E",
    dateSubmitted: "Jan 18th, 2025",
    dateExpired: "Feb 18th, 2025",
    expiresSoon: true,
  },
  callbacks: { onClick: () => console.log("Submit new Form") },
  text: {
    ...taxFormDocumentSubmittedText,
  },
};

const documentSubmittedLoadingProps: TaxDocumentSubmittedProps = {
  states: {
    status: "ACTIVE",
    documentType: "W8-BEN-E",
    dateSubmitted: "Jan 18th, 2025",
    loading: true,
  },
  callbacks: { onClick: () => console.log("Submit new Form") },
  text: {
    ...taxFormDocumentSubmittedText,
  },
};

const docusignFormProps: DocusignFormViewProps = {
  states: {
    loading: false,
    submitDisabled: false,
    formState: {
      completedTaxForm: true,
    },
  },
  callbacks: {
    toggleFormSubmitted: () => console.log("Toggle checkbox"),
    onShowDocumentType: () => console.log("To other form"),
    onSubmit: (props: any) => console.log(props),
    onBack: () => console.log("Back"),
  },
  text: docusignFormText,
};

const documentTypeFormProps: DocumentTypeFormViewProps = {
  states: {
    loading: false,
    submitDisabled: false,
    formState: {
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
      states={{ ...stepOneProps.states, disabled: true }}
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

export const StepOneWithGeneralError = () => {
  return (
    <UserInfoFormView
      {...stepOneProps}
      states={{
        ...stepOneProps.states,
        formState: {
          ...stepOneProps.states.formState,
          errors: {
            general: true,
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

export const StepTwoLoading = () => {
  return (
    <IndirectTaxFormView
      {...stepTwoProps}
      states={{
        ...stepTwoProps.states,
        loading: true,
      }}
    />
  );
};

export const StepTwoWithGeneralError = () => {
  return (
    <IndirectTaxFormView
      {...stepTwoProps}
      states={{
        ...stepTwoProps.states,
        formState: {
          ...stepTwoProps.states.formState,
          errors: {
            general: true,
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
  // @ts-ignore TODO: fix this
  return <DocusignFormView {...docusignFormProps} />;
};

export const StepThreeDocusignWithGeneralError = () => {
  // @ts-ignore TODO: fix this
  return (
    <DocusignFormView
      {...docusignFormProps}
      states={{
        ...docusignFormProps.states,
        formState: {
          ...docusignFormProps.states.formState,
          errors: {
            general: true,
          },
        },
      }}
    />
  );
};

export const StepThreeDocusignLoading = () => {
  // @ts-ignore TODO: fix this
  return (
    <DocusignFormView
      {...docusignFormProps}
      states={{
        ...docusignFormProps.states,
        loading: true,
      }}
    />
  );
};

export const StepThreeWithFormSelector = () => {
  return <DocumentTypeFormView {...documentTypeFormProps} />;
};

export const StepThreeFormSelectorWithGeneralError = () => {
  return (
    <DocumentTypeFormView
      {...documentTypeFormProps}
      states={{
        ...documentTypeFormProps.states,
        formState: {
          ...documentTypeFormProps.states.formState,
          errors: {
            general: true,
          },
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

export const TaxDocumentSubmittedExpiringSoon = () => {
  return <TaxDocumentSubmittedView {...documentSubmittedExpiringSoonProps} />;
};

export const TaxDocumentSubmittedLoading = () => {
  return <TaxDocumentSubmittedView {...documentSubmittedLoadingProps} />;
};

export const TaxDocumentSubmittedWithGeneralError = () => {
  return (
    <TaxDocumentSubmittedView
      {...documentSubmittedActiveProps}
      states={{
        ...documentSubmittedLoadingProps.states,
        errors: {
          general: true,
        },
      }}
    />
  );
};
