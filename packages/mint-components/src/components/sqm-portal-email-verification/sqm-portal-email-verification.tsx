import { isDemo } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, State } from "@stencil/core";
import {
  PortalEmailVerificationView,
  PortalEmailVerificationViewProps,
} from "./sqm-portal-email-verification-view";
import { usePortalEmailVerification } from "./usePortalEmailVerification";

/**
 * @uiName Portal Email Verification
 */
@Component({
  tag: "sqm-portal-email-verification",
  shadow: true,
})
export class PortalEmailVerification {
  @State()
  ignored = true;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const { states, callbacks, content } = isDemo()
      ? usePortalEmailVerificationDemo()
      : usePortalEmailVerification();
    return (
      <PortalEmailVerificationView
        states={states}
        callbacks={callbacks}
        content={content}
      />
    );
  }
}
function usePortalEmailVerificationDemo(): PortalEmailVerificationViewProps {
  return {
    states: { error: "", loading: false, success: false },
    callbacks: {
      submit: async (_event) => {},
    },
    content: {
      email: "test@example.com",
    },
  };
}
