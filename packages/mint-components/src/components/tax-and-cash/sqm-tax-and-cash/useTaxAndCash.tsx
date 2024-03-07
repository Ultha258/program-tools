import {
  setUserIdentity,
  useHost,
  useUserIdentity,
} from "@saasquatch/component-boilerplate";
import { useEffect, useMemo } from "@saasquatch/universal-hooks";
import { useParentQuery } from "../../../utils/useParentQuery";
import {
  getContextValueName,
  useParentState,
} from "../../../utils/useParentState";
import {
  COUNTRIES_NAMESPACE,
  COUNTRIES_QUERY_NAMESPACE,
  CURRENCIES_NAMESPACE,
  CURRENCIES_QUERY_NAMESPACE,
  CountriesQuery,
  Currencies,
  CurrenciesQuery,
  FINANCE_NETWORK_SETTINGS_NAMESPACE,
  FinanceNetworkSettingsQuery,
  GET_COUNTRIES,
  GET_CURRENCIES,
  GET_FINANCE_NETWORK_SETTINGS,
  GET_USER,
  TAX_CONTEXT_NAMESPACE,
  TAX_FORM_CONTEXT_NAMESPACE,
  TaxContext,
  TaxCountry,
  USER_FORM_CONTEXT_NAMESPACE,
  USER_QUERY_NAMESPACE,
  UserFormContext,
  UserQuery,
} from "./data";

function getCurrentStep(user: UserQuery["user"]) {
  if (
    !user.impactConnection?.publisher?.taxInformation ||
    !user.impactConnection?.connected
  ) {
    return "/1";
  }

  const { requiredTaxDocumentType, currentTaxDocument, withdrawalSettings } =
    user.impactConnection.publisher;

  // If they do have a required document, look at current document
  if (
    requiredTaxDocumentType &&
    (!currentTaxDocument ||
      currentTaxDocument?.status === "INACTIVE" ||
      currentTaxDocument?.status === "NEW")
  ) {
    return "/3";
  }

  if (!withdrawalSettings) return "/4";

  return "/submitted";
}

export function useTaxAndCash() {
  const host = useHost();

  function setupDemo() {
    // coleton
    // const id =
    //   "0a1e1fa178d52ded03e86b6bd01a8a02046d8bef3367634e192746e7119c41e3";
    // const accountId =
    //   "0a1e1fa178d52ded03e86b6bd01a8a02046d8bef3367634e192746e7119c41e3";

    // // andy
    // const id = "12345";
    // const accountId = "12345";

    // andy2
    const id =
      "80d24e8d6133bdcf859844ca1fc7552c57d5d0661a7f46f791ea0785827a70ed";
    const accountId =
      "80d24e8d6133bdcf859844ca1fc7552c57d5d0661a7f46f791ea0785827a70ed";

    // sam
    // const id =
    //   "ea9c677dda4e031bcb559541007ff61179fbe8bf8f6c32e478d97f09d069fd5b";
    // const accountId =
    //   "ea9c677dda4e031bcb559541007ff61179fbe8bf8f6c32e478d97f09d069fd5b";
    // const programId = "22514";
    const programId = "22999";

    //@ts-ignore
    window.widgetIdent = {
      // tenantAlias: "aprh0cfq6y8tk",
      tenantAlias: "aswi7zpxl6rjp",
      appDomain: "https://staging.referralsaasquatch.com",
      programId,
    };

    // coleton
    // useEffect(() => {
    //   setUserIdentity({
    //     accountId,
    //     id,
    //     jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IklSTVhzWXk2WVlxcTQ2OTQzN21HOEVSUXQ4UW9LRkJhRzEifQ.eyJ1c2VyIjp7ImlkIjoiMGExZTFmYTE3OGQ1MmRlZDAzZTg2YjZiZDAxYThhMDIwNDZkOGJlZjMzNjc2MzRlMTkyNzQ2ZTcxMTljNDFlMyIsImFjY291bnRJZCI6IjBhMWUxZmExNzhkNTJkZWQwM2U4NmI2YmQwMWE4YTAyMDQ2ZDhiZWYzMzY3NjM0ZTE5Mjc0NmU3MTE5YzQxZTMifX0.OO18YDc8LG3XeKJAug1oahqapmHY61RncrbRiK7Yer4",
    //   });
    // }, []);

    // andy
    useEffect(() => {
      setUserIdentity({
        accountId,
        id,
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IklSZkFUVEdOZXRqUDUwNzYxMDNERjVub0d0TDRnQ0hjYjEifQ.eyJ1c2VyIjp7ImlkIjoiODBkMjRlOGQ2MTMzYmRjZjg1OTg0NGNhMWZjNzU1MmM1N2Q1ZDA2NjFhN2Y0NmY3OTFlYTA3ODU4MjdhNzBlZCIsImFjY291bnRJZCI6IjgwZDI0ZThkNjEzM2JkY2Y4NTk4NDRjYTFmYzc1NTJjNTdkNWQwNjYxYTdmNDZmNzkxZWEwNzg1ODI3YTcwZWQifX0.8VWa3R_pSeRJeNw07AZPjCdTuTiwBYXOAc-ouVItuYs",
      });
    }, []);

    // sam
    // useEffect(() => {
    //   setUserIdentity({
    //     accountId,
    //     id,
    //     jwt: "eyJraWQiOiJJUk1Yc1l5NllZcXE0Njk0MzdtRzhFUlF0OFFvS0ZCYUcxIiwidHlwIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJqdGkiOiI2NWRkMjE3YjVhYmE1MjI2MDAxMDhmZTciLCJpYXQiOjE3MDg5OTA4NDMsImV4cCI6MTcwOTA3NzI0Mywic3ViIjoiWldFNVl6WTNOMlJrWVRSbE1ETXhZbU5pTlRVNU5UUXhNREEzWm1ZMk1URTNPV1ppWlRoaVpqaG1ObU16TW1VME56aGtPVGRtTURsa01EWTVabVExWWc9PTpaV0U1WXpZM04yUmtZVFJsTURNeFltTmlOVFU1TlRReE1EQTNabVkyTVRFM09XWmlaVGhpWmpobU5tTXpNbVUwTnpoa09UZG1NRGxrTURZNVptUTFZZz09QGFwcmgwY2ZxNnk4dGs6dXNlcnMiLCJ1c2VyIjp7ImlkIjoiZWE5YzY3N2RkYTRlMDMxYmNiNTU5NTQxMDA3ZmY2MTE3OWZiZThiZjhmNmMzMmU0NzhkOTdmMDlkMDY5ZmQ1YiIsImFjY291bnRJZCI6ImVhOWM2NzdkZGE0ZTAzMWJjYjU1OTU0MTAwN2ZmNjExNzlmYmU4YmY4ZjZjMzJlNDc4ZDk3ZjA5ZDA2OWZkNWIiLCJkYXRlQmxvY2tlZCI6bnVsbH19.4d48e9AT21uCR-yA7rkn1TuBpHz8a56vI0pHpRtio0M",
    //   });
    // }, []);
  }

  setupDemo();

  /** END DEMO DATA */

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
      initialValue: {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        countryCode: undefined,
        currency: undefined,
      } as UserFormContext,
    }
  );

  const [_currenciesContext, setCurrenciesContext] = useParentState<Currencies>(
    {
      namespace: CURRENCIES_NAMESPACE,
      initialValue: [],
    }
  );

  const [_countriesContext, setCountriesContext] = useParentState<TaxCountry[]>(
    {
      namespace: COUNTRIES_NAMESPACE,
      initialValue: [],
    }
  );

  const { data } = useParentQuery<UserQuery>({
    namespace: USER_QUERY_NAMESPACE,
    query: GET_USER,
    skip: !user,
  });

  const countryCode =
    data?.user?.impactConnection?.publisher?.countryCode ||
    userFormContext.countryCode;

  useParentQuery<CountriesQuery>({
    namespace: COUNTRIES_QUERY_NAMESPACE,
    query: GET_COUNTRIES,
    skip: !user,
  });

  const { data: financeNetworkData, refetch } =
    useParentQuery<FinanceNetworkSettingsQuery>({
      namespace: FINANCE_NETWORK_SETTINGS_NAMESPACE,
      query: GET_FINANCE_NETWORK_SETTINGS,
      skip: !user,
      variables: {
        filter: getFinanceNetworkFilter(),
      },
    });

  const { data: currenciesData } = useParentQuery<CurrenciesQuery>({
    namespace: CURRENCIES_QUERY_NAMESPACE,
    query: GET_CURRENCIES,
    skip: !user,
  });

  const supportedCurrencies = useMemo(() => {
    // Filter out any currencies not supported by finance network settings
    const allValidCurrencies =
      financeNetworkData?.impactFinanceNetworkSettings?.data?.reduce(
        (agg, settings) => {
          const currency = currenciesData?.currencies?.data?.find(
            (currency) => currency.currencyCode === settings.currency
          );
          // Currency not in supported list
          if (!currency) return agg;
          // Currency already added to list
          if (
            agg.find((currency) => currency.currencyCode === settings.currency)
          )
            return agg;
          // Currency not supported by selected country
          if (
            userFormContext.countryCode &&
            settings.countryCode !== countryCode
          )
            return agg;

          return [...agg, currency];
        },
        []
      );
    return allValidCurrencies;
  }, [financeNetworkData, countryCode]);

  useEffect(() => {
    if (supportedCurrencies) setCurrenciesContext(supportedCurrencies);
  }, [supportedCurrencies]);

  useEffect(() => {
    if (!host || !user) return;

    if (data) {
      const user = data?.user;
      if (!user || step !== "/loading") return;

      const currentStep = getCurrentStep(user);
      setStep(currentStep);
      // setStep("/4");
    }
  }, [host, user, data?.user?.email]);

  function getFinanceNetworkFilter() {
    if (step === "/4")
      return { currency_eq: data?.user?.impactConnection?.publisher?.currency };

    if (countryCode)
      return {
        countryCode_eq: countryCode,
      };
    return {};
  }

  return {
    step,
    setStep,
    context,
    namespace: getContextValueName(TAX_CONTEXT_NAMESPACE),
    loading: step === "/loading",
  };
}

export type UseTaxAndCashResultType = ReturnType<typeof useTaxAndCash>;
