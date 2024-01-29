import { IndirectDetailsSlotViewProps } from "./small-views/IndirectTaxDetailsView";
import { TaxFormStepOneProps } from "./sqm-user-info-form-view";
import { TaxDocumentSubmittedProps } from "../sqm-tax-document-submitted/sqm-tax-document-submitted-view";
import { TaxFormStepTwoProps } from "../sqm-indirect-tax-form/sqm-indirect-tax-form-view";

export const indirectDetailsSlotText: IndirectDetailsSlotViewProps["text"] = {
  selectedRegion: "Country / Region of Indirect Tax",
  vatNumber: "VAT number",
  province: "Province",
  indirectTaxNumber: "Indirect Tax",
};

export const taxFormStepOneText: TaxFormStepOneProps["text"] = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  country: "Country",
  currency: "Currency",
  allowBankingCollection: "I agree to the terms",
  submitButton: "Submit",
  step: "Step",
  stepOf: "of",
  personalInformation: "Personal Information",
  participantType: "Participant type",
  businessEntity: "I represent a business entity",
  individualParticipant: "I am an individual participant",
  taxAndBankingCollection: "Tax and banking collection",
  error: {
    firstName: "Enter a first name",
    lastName: "Enter a last name",
    email: "Enter a valid email",
    countryCode: "Select a country",
    currency: "Select a currency",
    allowBankingCollection: "This field is required",
    participantType: "Select a participant type",
  },
};

export const taxFormStepTwoText: TaxFormStepTwoProps["text"] = {
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
  error: {
    taxDetails: "This field is required",
  },
};

export const taxFormStepThreeText: any = {
  step: "Step",
  stepOf: "of",
  taxForm: "Tax form",
  backButton: "Back",
  submitButton: "Continue",
  error: {
    formSubmission: "",
  },
};

export const taxFormDocumentSubmittedText: TaxDocumentSubmittedProps["text"] = {
  statusTextActive: "Active",
  statusTextNotActive: "Invalid Tax Form",
  statusTextNotVerified: "Not Verified",
  statusTextExpired: "Expired",
  badgeTextSubmittedOn: "Submitted on",
  badgeTextAwaitingReview: "Awaiting review. Submitted on",
  badgeTextExpiredOn: "Expired on",
  taxAlertHeader:
    "Your {documentType} tax form has personal information that doesn't match your profile.",
  taxAlertMessage: "Please resubmit a new {documentType} form.",
  bankingInformationSectionHeader: "Banking Information",
  taxDocumentSectionHeader: "Tax documents",
  taxDocumentSectionSubHeader: "{documentType} Tax Form",
  newFormButton: "Submit New Form",
};
