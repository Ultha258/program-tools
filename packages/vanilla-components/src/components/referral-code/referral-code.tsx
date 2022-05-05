import { h, Component, State } from "@stencil/core";
import { API } from "../../services/WidgetHost";
/**
 * @uiName Referral Code
 * @canvasRenderer always-replace
 * @exampleGroup Referrals
 * @example Referral Code - <sqh-referral-code />
 */
@Component({
  tag: "sqh-referral-code",
  styleUrl: "referral-code.scss",
})
export class ReferralCode {
  @State() referralcode: string;

  componentWillLoad() {
    return API.graphql
      .getReferralCode()
      .then((res) => {
        this.referralcode = res;
      })
      .catch((e) => {
        this.onError(e);
      });
  }

  onError(e: Error) {
    console.log("Error loading via GraphQL.", e);
  }

  render() {
    return <span>{this.referralcode}</span>;
  }
}
