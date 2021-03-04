import { GraphQLClient } from "graphql-request";
import memoize from "memoizee";
import {
  useAppDomain,
  useTenantAlias,
  useToken,
} from "../../environment/environment";

function createGraphQlCLient(
  appDomain: string,
  tenantAlias: string,
  token?: string
): GraphQLClient {
  const uri = appDomain + "/api/v1/" + tenantAlias + "/graphql";
  const headers = {
    Authorization: `Bearer ${token || ""}`,
  };
  const newClient = new GraphQLClient(uri, {
    headers,
  });
  return newClient;
}

const memoizedClient = memoize(createGraphQlCLient, {
  primitive: true,
  // Assuming log-out, log-in flows this should be acceptably small
  max: 5,
});

export function useGraphQLClient(): GraphQLClient {
  const token = useToken();
  const appDomain = useAppDomain();
  const tenantAlias = useTenantAlias();

  // Memoization is shared. One client per domain, tenant and token (or null)
  const client: GraphQLClient = memoizedClient(appDomain, tenantAlias, token);
  return client;
}
