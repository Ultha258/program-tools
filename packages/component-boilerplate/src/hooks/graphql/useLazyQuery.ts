import { useRef, useCallback } from "@saasquatch/universal-hooks";
import { useRefreshListener } from "./Refresh";
import {
  BaseQueryData,
  GqlType,
  QueryData,
  useBaseQuery,
} from "./useBaseQuery";

const initialLazyQueryState: BaseQueryData = {
  loading: false,
  data: undefined,
  errors: undefined,
} as const;

const NOTLOADED = Symbol();
export function useLazyQuery<T = any>(
  query: GqlType
): [(e: unknown) => Promise<T | Error>, QueryData<T>] {
  const [state, update] = useBaseQuery<T>(
    query,
    initialLazyQueryState as BaseQueryData<T>
  );

  const variablesRef = useRef<unknown>(NOTLOADED);
  // To preserve laziness, this query will not refresh if the query has not already been run at least once
  const skip = variablesRef.current === NOTLOADED;
  useRefreshListener({
    skip,
    update,
    variables: variablesRef.current,
  });

  // can override props when refetching for new pagination, offset, etc
  const refetch = useCallback(
    (variables) => {
      variablesRef.current = variables;
      return update(variables);
    },
    [update]
  );

  return [
    update,
    {
      ...state,
      refetch,
    },
  ];
}
