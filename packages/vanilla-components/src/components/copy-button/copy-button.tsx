import { h, Component, Prop, State } from "@stencil/core";
import { shadeColor, addClass, removeClass } from "../../utilities";
import { css } from "emotion";
import { API } from "../../services/WidgetHost";
import Clipboard from "clipboard";
/**
 * @uiName Copy Button
 * @canvasRenderer always-replace
 * @exampleGroup Common Components
 * @example Fuel Tank Copy Button - <sqh-copy-button ishidden="false" copysuccess="copied!" copyfailure="Press Ctrl+C to copy" codefontcolor="#000000" codefontsize="14" text="COPY CODE" fontsize="14" width="170" backgroundcolor="#35b21e" textcolor="#ffffff" borderradius="4" rewardkey="referredReward" codefontsize="14" codefontcolor="#000000"></sqh-copy-button>
 */
@Component({
  tag: "sqh-copy-button",
  styleUrl: "copy-button.scss",
})
export class CopyButton {
  /**
   * @uiName Hide Button
   * @undocumented
   */
  @Prop() ishidden: boolean;
  /**
   * @uiName Button Text
   * @default "COPY CODE"
   */
  @Prop() text: string;
  /**
   * @uiName Button Max Width
   * @default 170
   */
  @Prop() width: number;
  /**
   * @uiName Button Color
   * @uiWidget color
   * @format color
   * @default #35b21e
   */
  @Prop() backgroundcolor: string;
  /**
   * Define the radius of the corners with a pixel amount.
   *
   * @uiName Border Radius
   * @default 4
   */
  @Prop() borderradius: number;
  /**
   * @uiName Button Text Color
   * @uiWidget color
   * @format color
   * @default #ffffff
   */
  @Prop() textcolor: string;
  /**
   * @uiName Font Size
   * @default 14
   */
  @Prop() fontsize: number;
  /**
   * Shown when the code is successfully copied to the users clipboard.
   *
   * @uiName Copy Success Text
   * @default "copied!"
   */
  @Prop() copysuccess: string;
  /**
   * Shown when the button has failed to copy the code to the users clipboard.
   *
   * @uiName Copy Failure Text
   * @default "Press Ctrl+C to copy"
   */
  @Prop() copyfailure: string;
  /**
   * The rewardKey of a fuel tank reward. This is used to get the fuel tank code for a user.
   *
   * @uiName Reward Key
   * @default "referredReward"
   */
  @Prop() rewardkey: string;
  /**
   * Font size of the fuel tank code.
   *
   * @uiName Code Font Size
   * @default 14
   */
  @Prop() codefontsize: number;
  /**
   * @uiName Fuel Tank Code Color
   * @uiWidget color
   * @format color
   * @default #000000
   */
  @Prop() codefontcolor: string;

  @State() fueltankcode: string;

  componentWillLoad() {
    if (!this.ishidden) {
      return API.graphql
        .getFueltankCode(this.rewardkey)
        .then((res) => {
          const fuelTank =
            res.rewards.data.length > 0
              ? res.rewards.data[0].fuelTankCode
              : null;
          this.fueltankcode =
            fuelTank || res.referredByReferral.referrerUser.referralCode;
        })
        .catch((e) => {
          this.onError(e);
        });
    }
  }

  onError(e: Error) {
    console.log("Error loading via GraphQL.", e);
  }

  notify(clipboardNotification, notificationText) {
    const notification = document.getElementById(
      clipboardNotification.slice(1)
    );
    notification.textContent = notificationText;

    addClass(notification, "in");

    setTimeout(() => {
      removeClass(notification, "in");
    }, 1400);
  }

  notifySuccess(e: Clipboard.Event) {
    this.notify(
      (e.trigger as HTMLElement).dataset.clipboardNotification,
      this.copysuccess
    );
  }

  notifyFailure(e: Clipboard.Event) {
    this.notify(
      (e.trigger as HTMLElement).dataset.clipboardNotification,
      this.copyfailure
    );
  }

  componentDidLoad() {
    const clipboard = new Clipboard("button");
    clipboard.on("success", this.notifySuccess.bind(this));
    clipboard.on("error", this.notifyFailure.bind(this));
  }

  render() {
    const style = css`
      max-width: ${this.width}px;
      background-color: ${this.backgroundcolor};
      border: ${this.backgroundcolor};
      color: ${this.textcolor};
      border-radius: ${this.borderradius}px;
      font-size: ${this.fontsize}px;

      &:hover {
        background-color: ${shadeColor(this.backgroundcolor, 10)};
        border-color: ${shadeColor(this.backgroundcolor, 12)};
        color: ${this.textcolor};
      }

      &:focus {
        color: ${this.textcolor};
      }
    `;

    const code = css`
      text-align: center;
      font-weight: bold;
      font-size: ${this.codefontsize};
      color: ${this.codefontcolor};
    `;
    const classes = [`sqh-copy-button`, style].join(" ");

    return (
      !this.ishidden && (
        <div>
          <div class={code}>{this.fueltankcode}</div>
          <div class="sqh-align-button">
            <span class="label fade" id="squatch-copy-notification">
              {this.copysuccess}
            </span>
            <button
              class={classes}
              data-clipboard-text={this.fueltankcode}
              data-clipboard-notification="#squatch-copy-notification"
            >
              {this.text}
            </button>
          </div>
        </div>
      )
    );
  }
}
