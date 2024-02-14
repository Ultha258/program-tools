import {
  USER_CONTEXT_NAME,
  UserIdentity,
  getUserIdentity,
} from "@saasquatch/component-environment";
import { useEffect } from "@saasquatch/universal-hooks";
import { equal as deepEqual } from "@wry/equality";
import debugFn from "debug";
import { ContextProvider } from "dom-context";
import { gql } from "graphql-request";
import {
  useEngagementMedium,
  useProgramId,
  useUserIdentity,
} from "./environment";
import { useMutation } from "./graphql/useMutation";
import { useDomContext } from "@saasquatch/dom-context-hooks";
import { useHost } from "./useHost";

const LOAD_EVENT_CONTEXT_NAME = "sq:load-event";
export const debug = debugFn(LOAD_EVENT_CONTEXT_NAME);

declare global {
  interface Window {
    squatchLoadEvent?: ContextProvider<EventContext>;
  }
}

type EventContext = {
  userIdentity?: UserIdentity;
  programId?: string;
};

const FIRE_EVENT = gql`
  mutation loadEvent($eventMeta: UserAnalyticsEvent!) {
    createUserAnalyticsEvent(eventMeta: $eventMeta)
  }
`;

export function lazilyStartLoadEventContext() {
  let globalProvider = window.squatchLoadEvent;

  if (!globalProvider) {
    debug("Creating load event provider");

    globalProvider = new ContextProvider<EventContext>({
      element: document.documentElement,
      initialState: {
        userIdentity: undefined,
        programId: undefined,
      },
      contextName: LOAD_EVENT_CONTEXT_NAME,
    }).start();

    window.squatchLoadEvent = globalProvider;
  }

  return globalProvider;
}

export function useLoadEvent() {
  const host = useHost();
  const globalProvider = lazilyStartLoadEventContext();
  debug("useLoadEvent", { host, globalProvider });

  const engagementMedium = useEngagementMedium();
  debug("engagementMedium", { engagementMedium });

  // const userIdentity = useDomContext(host, USER_CONTEXT_NAME) as
  //   | UserIdentity
  //   | undefined;
  const userIdentity = getUserIdentity();
  debug("userIdentity", { userIdentity });

  const programId = useProgramId();
  debug("programId", { programId });

  const [dispatch] = useMutation(FIRE_EVENT);

  debug("useLoadEvent retrieved data", {
    engagementMedium,
    userIdentity,
    programId,
    globalProvider,
    dispatch,
  });

  useEffect(() => {
    debug("use effect triggered", {
      context: globalProvider?.context,
      userIdentity,
      programId,
    });

    if (!userIdentity || !programId || !globalProvider?.context) return;

    debug("check for data updates", {
      userIdentity: globalProvider.context.userIdentity,
      programChanged: programId !== globalProvider.context.programId,
      userChanged: !deepEqual(
        userIdentity,
        globalProvider.context.userIdentity
      ),
    });

    if (
      // First time loading
      !globalProvider.context.userIdentity ||
      // User changed
      !deepEqual(userIdentity, globalProvider.context.userIdentity) ||
      // Different programId
      programId !== globalProvider.context.programId
    ) {
      const variables = {
        eventMeta: {
          programId,
          id: userIdentity.id,
          accountId: userIdentity.accountId,
          type: "USER_REFERRAL_PROGRAM_LOADED_EVENT",
          meta: {
            engagementMedium,
          },
        },
      };
      dispatch(variables);

      debug("Event sent", { variables, globalProvider });

      globalProvider.context = { userIdentity, programId };
    }
  }, [userIdentity?.id, userIdentity?.accountId, programId]);
}
