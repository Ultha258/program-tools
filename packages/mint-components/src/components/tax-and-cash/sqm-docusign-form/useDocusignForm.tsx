import { useQuery, useUserIdentity } from "@saasquatch/component-boilerplate";
import { useEffect, useState } from "@saasquatch/universal-hooks";
import { gql } from "graphql-request";
import { useParent, useParentValue } from "../../../utils/useParentState";
import {
  TAX_CONTEXT_NAMESPACE,
  USER_CONTEXT_NAMESPACE,
  UserQuery,
} from "../sqm-tax-and-cash/useTaxAndCash";
import { DocusignForm } from "./sqm-docusign-form";
import { TaxDocumentType } from "../sqm-tax-document-submitted/sqm-tax-document-submitted-view";

const GET_USER_TAX_INFO = gql`
  query getUserTaxInfo {
    viewer {
      ... on User {
        id
        accountId
        firstName
        lastName
        email
        countryCode
        customFields
      }
    }
  }
`;

// TODO: Fill out when API is released
const GET_TAX_DOCUMENT = gql`
  query getTaxDocument ($vars: TaxDocumentInput) {
  }
`;

export function useDocusignForm(props: DocusignForm, el: any) {
  const [path, setPath] = useParent<string>(TAX_CONTEXT_NAMESPACE);
  const user = useParentValue<UserQuery>(USER_CONTEXT_NAMESPACE);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState({});

  const splitPath = path.split("/");
  const pathedDocumentType = splitPath.length === 3 ? splitPath[2] : undefined;

  const savedUserTaxType = user?.viewer?.customFields?.w9Type;

  // TODO: Replace with real backend data
  const {
    data: taxInfo,
    loading: taxInfoLoading,
    refetch: refetchDocument,
  } = {
    data: {
      taxForm: pathedDocumentType,
      documentUrl: "https://example.com",
    },
    loading: false,
    refetch: (_vars: any) => console.debug("REFETCHING", _vars),
  };

  useEffect(() => {
    if (pathedDocumentType === savedUserTaxType) return;

    refetchDocument({ documentType: pathedDocumentType });
  }, [pathedDocumentType, savedUserTaxType]);

  useEffect(() => {
    // Load docusign iframe with given url
    const slotted = el.querySelector("sqm-docusign-embed");
    if (slotted) {
      slotted.url = taxInfo.documentUrl;
    }
  }, [taxInfo.documentUrl]);

  const onSubmit = async () => {
    if (!formSubmitted) {
      setErrors({ submitCheckbox: true });
      return;
    }

    // TODO: Check document is actually registered in the backend
    try {
      const documentResult = true;
      if (documentResult) setPath("/submitted");
      else throw Error();
    } catch (e) {
      setErrors({ formSubission: { status: "document-error" } });
    }
  };

  return {
    text: {
      ...props,
      error: {
        generalTitle: props.generalErrorTitle,
        generalDescription: props.generalErrorDescription,
        // TODO: this prop was removed from the controller/view
        // formSubmission: props.formSubmissionError,
      },
    },
    states: {
      submitDisabled: taxInfoLoading || !formSubmitted,
      loading: taxInfoLoading,
      formState: {
        completedTaxForm: formSubmitted,
        errors,
      },
      documentType: taxInfo.taxForm?.toUpperCase() as TaxDocumentType,
    },
    data: {
      taxForm: taxInfo?.taxForm,
      documentUrl: taxInfo?.documentUrl,
    },
    callbacks: {
      onShowDocumentType: () => setPath("/3b"),
      onSubmit,
      toggleFormSubmitted: () => setFormSubmitted((x) => !x),
      onBack: () => setPath("/2"),
    },
  };
}
