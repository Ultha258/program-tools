import { h, Component, Prop } from "@stencil/core";
import FormatJS from "../../services/FormatJs";
/**
 * @uiName Referral Component
 * @canvasRenderer always-replace
 */
@Component({
  tag: "sqh-referral-component",
  styleUrl: "referral-component.scss",
})
export class ReferralComponent {
  /**
   * Referral object
   *
   * @uiName Referral
   */
  @Prop() referral: Referral | ReferredByReferral;
  /**
   * Type of referral
   *
   * @uiName Referral Type
   */
  @Prop() referraltype: "converted" | "pending" | "referrer";
  /**
   * Referral variables used to format the row in the referral list
   *
   * @uiName Referral Variables
   */
  @Prop() referralvariables: ReferralVariables;
  /**
   * Text shown when the name of a user is unknown
   *
   * @uiName Unknown User
   */
  @Prop() unknownuser: String;
  /**
   * Configure the local
   *
   * @uiName Local
   */
  @Prop() locale: string;

  getName() {
    const referral = this.referral as Referral;
    const referredByReferral = this.referral as ReferredByReferral;

    // Referred User
    if (referral.referredUser) {
      return referral.referredUser.firstName || this.unknownuser;
    }

    // Referrer User
    if (referredByReferral.referrerUser) {
      return referredByReferral.referrerUser.firstName || this.unknownuser;
    }

    return this.unknownuser;
  }

  getIcon() {
    if (
      (this.referraltype === "converted" || this.referraltype === "referrer") &&
      !this.rewardIsExpired() &&
      !this.rewardIsCancelled()
    ) {
      return `icon-ok-circled`;
    }

    return `icon-attention`;
  }

  getContent(formatVariables) {
    // When reward is expired and Expired Content was set
    if (this.rewardIsExpired() && this.referralvariables.expiredcontent) {
      return FormatJS.format(
        this.referralvariables.expiredcontent,
        formatVariables,
        this.locale
      );
    }

    // When reward is cancelled and Cancelled Content was set
    if (this.rewardIsCancelled() && this.referralvariables.cancelledcontent) {
      return FormatJS.format(
        this.referralvariables.cancelledcontent,
        formatVariables,
        this.locale
      );
    }

    if (this.referraltype) {
      return FormatJS.format(
        this.referralvariables[`${this.referraltype}content`],
        formatVariables,
        this.locale
      );
    }

    return ``;
  }

  rewardIsExpired() {
    const { rewards } = this.referral;
    const hasExpiry = rewards.length == 1 && rewards[0].statuses;
    const isExpired = hasExpiry && rewards[0].statuses.indexOf("EXPIRED") > -1;

    return isExpired;
  }

  rewardIsCancelled() {
    const { rewards } = this.referral;
    const hasStatuses = rewards.length == 1 && rewards[0].statuses;
    const isCancelled =
      hasStatuses && rewards[0].statuses.indexOf("CANCELLED") > -1;

    return isCancelled;
  }

  rewardIsRedeemed() {
    const { rewards } = this.referral;
    const hasStatuses = rewards.length == 1 && rewards[0].statuses;
    const isRedeemed =
      hasStatuses && rewards[0].statuses.indexOf("REDEEMED") > -1;

    return isRedeemed;
  }

  getValue() {
    const { rewards } = this.referral;
    const referrer = this.referralvariables.referrervalue;
    const pending = this.referralvariables.pendingvalue;
    // When we have no reward values to show
    if (rewards.length == 0) {
      return this.referraltype === "referrer" ||
        this.referraltype === "converted"
        ? referrer
        : pending;
    }

    // When we want to use the first reward pretty value
    if (rewards.length > 0 && this.referralvariables.usefirstreward) {
      return rewards[rewards.length - 1].prettyValue || rewards[0].prettyValue;
    }

    // Use last reward pretty value
    return rewards[0].prettyValue;
  }

  getValueContent(formatVariables) {
    const { rewards } = this.referral;

    // When the reward is pending and there are no other rewards
    if (!rewards.length) return "";

    if (rewards.length == 1) {
      // Expired content only applies when there is 1 reward in the referral
      if (this.rewardIsExpired())
        return FormatJS.format(
          this.referralvariables.expiredvalue,
          formatVariables,
          this.locale
        );

      // Cancelled content only applies when there is 1 reward in the referral
      if (this.rewardIsCancelled())
        return FormatJS.format(
          this.referralvariables.cancelledvalue,
          formatVariables,
          this.locale
        );

      // Redeemed content only applies when there is 1 reward in the referral
      if (this.rewardIsRedeemed())
        return FormatJS.format(
          this.referralvariables.redeemedvalue || "Redeemed",
          formatVariables,
          this.locale
        );

      // Expiry date only shown if there is 1 reward with dateExpires set in the referral
      if (this.referralvariables.showexpiry && rewards[0].dateExpires) {
        const expiryDate = FormatJS.formatRelative(
          rewards[0].dateExpires,
          this.locale
        );
        return FormatJS.format(
          this.referralvariables.expiresvalue || `Expires ${expiryDate}`,
          { ...formatVariables, expiryDate },
          this.locale
        );
      }

      return "";
    }
    return FormatJS.format(
      this.referralvariables.valuecontent,
      formatVariables,
      this.locale
    );
  }

  getNote() {
    const { rewards } = this.referral;
    const note = rewards[0] && rewards[0].meta && rewards[0].meta.message;
    return note || "";
  }

  render() {
    const { dateReferralStarted, rewards } = this.referral;

    const formatVariables = {
      date: FormatJS.formatRelative(dateReferralStarted, this.locale),
      extrarewards: rewards.length - 1,
    };
    const name = this.getName();
    const icon = this.getIcon();
    const content = this.getContent(formatVariables);
    const value = this.getValue();
    const valuecontent = this.getValueContent(formatVariables);
    const customernote = this.getNote();
    return (
      <div class="squatch-referrals-row">
        {/* first column */}
        <div>
          <div class="squatch-referrals-heading">{name}</div>
          <div class="squatch-referrals-description">{content}</div>
          {this.referralvariables.shownotes && customernote && (
            <div
              class="squatch-referrals-description squatch-customer-note"
              title={customernote}
            >
              {customernote}
            </div>
          )}
        </div>

        <i
          class={`icon squatch-referrals-icon ${icon} ${
            this.rewardIsExpired() && "expired"
          } ${this.rewardIsCancelled() && "cancelled"}`}
        ></i>

        {/* second column */}
        <div class="sqh-column-two">
          <div
            class={`squatch-referrals-value ${
              this.rewardIsCancelled() && "cancelled"
            } ${
              rewards.length > 0
                ? this.rewardIsExpired()
                  ? "expired"
                  : ""
                : this.referraltype === "referrer" ||
                  this.referraltype === "converted"
                ? "referrer"
                : "pending"
            }`}
          >
            {value}
          </div>
          <div
            class={`squatch-value-contents ${
              this.rewardIsExpired() && "expired"
            } ${this.rewardIsCancelled() && "cancelled"}`}
          >
            {valuecontent}
          </div>
        </div>
      </div>
    );
  }
}
