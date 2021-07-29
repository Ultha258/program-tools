import { useEffect, useState } from "@saasquatch/universal-hooks";
import {
  navigation,
  useUserIdentity,
  useVerifyEmailMutation,
} from "@saasquatch/component-boilerplate";

export function usePortalVerifyEmail({ nextPage }) {
  const [verified, setVerified] = useState(false);
  const [disableContinue, setDisableContinue] = useState(true);
  const userIdent = useUserIdentity();
  const [request, { loading, data, errors }] = useVerifyEmailMutation();

  const urlParams = new URLSearchParams(window.location.search);
  const oobCode = urlParams.get("oobCode");
  const nextPageOverride = urlParams.get("nextPage");

  urlParams.delete("oobCode");

  const failed = () => {
    return navigation.push({
      pathname: "/",
      search: urlParams.toString() && "?" + urlParams.toString(),
    });
  };

  const gotoNextPage = () => {
    urlParams.delete("nextPage");
    return navigation.push({
      pathname: nextPageOverride || nextPage,
      search: urlParams.toString() && "?" + urlParams.toString(),
    });
  };

  const submit = async () => {
    if (oobCode) {
      await request({ oobCode });
    }
  };

  useEffect(() => {
    if (data?.verifyManagedIdentityEmail?.success) {
      setVerified(true);
    }
  }, [data?.verifyManagedIdentityEmail?.success]);

  useEffect(() => {
    submit();
  }, []);

  useEffect(() => {
    if (userIdent.managedIdentity.emailVerified) {
      setDisableContinue(false);
      setTimeout(() => {
        gotoNextPage();
      }, 3000);
    }
  }, [userIdent.managedIdentity.emailVerified]);

  return {
    states: {
      loading: loading || disableContinue,
      error: errors?.response?.errors?.[0]?.message,
      verified,
    },
    callbacks: {
      failed,
      gotoNextPage,
    },
  };
}
