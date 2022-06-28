import { isDemo } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop, State } from "@stencil/core";
import deepmerge from "deepmerge";
import { DemoData } from "../../global/demo";
import {
  PortalEmailVerificationView,
  PortalEmailVerificationViewProps,
} from "./sqm-portal-email-verification-view";
import { usePortalEmailVerification } from "./usePortalEmailVerification";

/**
 * @uiName Microsite Email Verification
 */
@Component({
  tag: "sqm-portal-email-verification",
  shadow: true,
})
export class PortalEmailVerification {
  @State()
  ignored = true;

  /**
   * The microsite page that participants are redirected to from the verification email.
   *
   * @uiName Email Redirection Path
   */
  @Prop()
  redirectPath: string = "/verifyEmail";

  /**
   * @uiName Email Verification Header Text
   */
  @Prop() emailVerificationHeader: string = "Verify your email";

  /**
   * @uiName Re-send Email Button Text
   */
  @Prop() resendEmailButtonText: string = "Re-send Email";

  /**
   * @uiName Email Verification Body Text
   * @uiWidget textArea
   */
  @Prop() verifyMessage: string =
    "A verification email was sent to {email}. Please verify your email to continue to the portal.";

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<PortalEmailVerificationViewProps>;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const { states, callbacks, content } = isDemo()
      ? usePortalEmailVerificationDemo(this)
      : usePortalEmailVerification(this);
    return (
      <PortalEmailVerificationView
        states={states}
        callbacks={callbacks}
        content={content}
      />
    );
  }
}
function usePortalEmailVerificationDemo(
  props: PortalEmailVerification
): PortalEmailVerificationViewProps {
  return deepmerge(
    {
      states: { error: "", loading: false, success: false },
      callbacks: {
        submit: async (_event) => {},
      },
      content: {
        email: "test@example.com",
        verifyMessage:
          "A verification email was sent to {email}. Please verify your email to continue to the portal.",
        emailVerificationHeader: "Verify your email",
        resendEmailButtonText: "Re-send Email",
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
