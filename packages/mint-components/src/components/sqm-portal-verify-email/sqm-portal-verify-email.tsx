import { isDemo } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop, State } from "@stencil/core";
import deepmerge from "deepmerge";
import { DemoData } from "../../global/demo";
import {
  PortalVerifyEmailView,
  PortalVerifyEmailViewProps,
} from "./sqm-portal-verify-email-view";
import { usePortalVerifyEmail } from "./usePortalVerifyEmail";

/**
 * @uiName Microsite Verify Email
 */
@Component({
  tag: "sqm-portal-verify-email",
  shadow: true,
})
export class PortalVerifyEmail {
  @State()
  ignored = true;

  /**
   * The page that participants are redirected to when the verification succeeds.
   *
   * @uiName Verification Redirect Path
   * @uiWidget pageSelect
   */
  @Prop()
  nextPage: string = "/";

  /**
   * The page that participants are redirected to if verification fails due to outdated verification attempt.
   *
   * @uiName Verification Failed Redirect Path
   * @uiWidget pageSelect
   */
  @Prop()
  failedPage: string = "/";

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<PortalVerifyEmailViewProps>;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const { states, data, callbacks } = isDemo()
      ? usePortalVerifyEmailDemo(this)
      : usePortalVerifyEmail(this);
    return (
      <PortalVerifyEmailView
        states={states}
        data={data}
        callbacks={callbacks}
      />
    );
  }
}
function usePortalVerifyEmailDemo(
  props: PortalVerifyEmail
): PortalVerifyEmailViewProps {
  return deepmerge(
    {
      states: { error: "", loading: false, verified: true },
      data: {
        oobCode: "code",
      },
      callbacks: {
        failed: () => {
          console.log("failed");
        },
        gotoNextPage: () => {},
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
