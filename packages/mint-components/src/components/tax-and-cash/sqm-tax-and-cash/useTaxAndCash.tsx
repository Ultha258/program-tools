import {
  setUserIdentity,
  useHost,
  useUserIdentity,
} from "@saasquatch/component-boilerplate";
import { useEffect } from "@saasquatch/universal-hooks";
import { useParentQuery } from "../../../utils/useParentQuery";
import {
  getContextValueName,
  useParentState,
} from "../../../utils/useParentState";
import {
  COUNTRIES_NAMESPACE,
  CURRENCIES_NAMESPACE,
  CountriesQuery,
  CurrenciesQuery,
  GET_COUNTRIES,
  GET_CURRENCIES,
  GET_USER,
  TAX_CONTEXT_NAMESPACE,
  TAX_FORM_CONTEXT_NAMESPACE,
  TaxContext,
  USER_FORM_CONTEXT_NAMESPACE,
  USER_QUERY_NAMESPACE,
  UserFormContext,
  UserQuery,
} from "./data";

function getCurrentStep(user: UserQuery["user"]) {
  if (
    !user.impactPartner ||
    user.impactPartner?.connectionStatus === "NOT_CONNECTED"
  ) {
    return "/1";
  }

  // Prioritise sending them to dashboard if no required document
  if (!user.impactPartner.requiredTaxDocumentType) {
    return "/submitted";
  }

  // If they do have a required document, look at current document
  if (user.impactPartner.currentTaxDocument) {
    const { status } = user.impactPartner.currentTaxDocument;

    if (status === "ACTIVE" || status === "NOT_VERIFIED") return "/submitted";

    return "/3";
  }

  // Catchall
  return "/error";
}

export function useTaxAndCash() {
  const host = useHost();

  /**** DEMO DATA */

  const id = "640b0771601fa92fc6532e8a018885d5fa106f8ebb9235a46b5d88d3352254fa";
  const accountId =
    "640b0771601fa92fc6532e8a018885d5fa106f8ebb9235a46b5d88d3352254fa";
  const programId = "22514";

  //@ts-ignore
  window.widgetIdent = {
    tenantAlias: "aprh0cfq6y8tk",
    appDomain: "https://staging.referralsaasquatch.com",
    programId,
  };

  useEffect(() => {
    setUserIdentity({
      accountId,
      id,
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IklSTVhzWXk2WVlxcTQ2OTQzN21HOEVSUXQ4UW9LRkJhRzEifQ.eyJ1c2VyIjp7ImlkIjoiNjQwYjA3NzE2MDFmYTkyZmM2NTMyZThhMDE4ODg1ZDVmYTEwNmY4ZWJiOTIzNWE0NmI1ZDg4ZDMzNTIyNTRmYSIsImFjY291bnRJZCI6IjY0MGIwNzcxNjAxZmE5MmZjNjUzMmU4YTAxODg4NWQ1ZmExMDZmOGViYjkyMzVhNDZiNWQ4OGQzMzUyMjU0ZmEifX0.K-BIpxqDGIQc1Rch3U_Lv7wn_Gsgt8Hr1zcYjd4F-Os",
    });
  }, []);

  const user = useUserIdentity();

  // State for current step of form
  const [step, setStep] = useParentState<string>({
    namespace: TAX_CONTEXT_NAMESPACE,
    initialValue: "/loading",
  });

  // State for when to hide steps, or override certain actions
  const [context, setContext] = useParentState<TaxContext>({
    namespace: TAX_FORM_CONTEXT_NAMESPACE,
    initialValue: {} as TaxContext,
  });

  // State to carry user form information into step 2
  const [userFormContext, setUserFormContext] = useParentState<UserFormContext>(
    {
      namespace: USER_FORM_CONTEXT_NAMESPACE,
      initialValue: {} as UserFormContext,
    }
  );

  const { data } = useParentQuery<UserQuery>({
    namespace: USER_QUERY_NAMESPACE,
    query: GET_USER,
    skip: !user,
  });

  useParentQuery<CountriesQuery>({
    namespace: COUNTRIES_NAMESPACE,
    query: GET_COUNTRIES,
    skip: !user,
  });

  useParentQuery<CurrenciesQuery>({
    namespace: CURRENCIES_NAMESPACE,
    query: GET_CURRENCIES,
    skip: !user,
  });

  useEffect(() => {
    if (!host || !user) return;

    if (data) {
      const user = data?.user;
      if (!user || step !== "/loading") return;

      setStep("/1");
      // const currentStep = getCurrentStep(user);
      // setStep(currentStep);
    }
  }, [host, user, data?.user?.email]);

  return {
    step,
    setStep,
    context,
    namespace: getContextValueName(TAX_CONTEXT_NAMESPACE),
    loading: step === "/loading",
  };
}

export type UseTaxAndCashResultType = ReturnType<typeof useTaxAndCash>;
