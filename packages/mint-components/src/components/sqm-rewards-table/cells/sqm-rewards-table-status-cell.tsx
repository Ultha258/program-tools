import { Component, h, Prop } from "@stencil/core";
import { DateTime } from "luxon";
import { intl } from "../../../global/global";
import { createStyleSheet } from "../../../styling/JSS";
import { luxonLocale } from "../../../utils/utils";

const style = {
  Badge: {
    "&::part(base)": {
      fontSize: "var(--sl-font-size-small)",
      padding: "4px 8px",
      paddingLeft: "10px",
      whiteSpace: "pre-line",
    },
  },
  RedeemBadge: {
    "&::part(base)": {
      fontSize: "var(--sl-font-size-small)",
      padding: "4px 8px",
      background: "var(--sl-color-blue-600)",
    },
  },

  Date: {
    fontSize: "var(--sl-font-size-small)",
    color: "var(--sl-color-neutral-500)",
    margin: "0",
  },
};

const sheet = createStyleSheet(style);
const styleString = sheet.toString();
@Component({
  tag: "sqm-rewards-table-status-cell",
  shadow: true,
})
export class RewardTableStatusCell {
  @Prop() statusText: string;
  @Prop() reward: Reward;
  @Prop() taxConnection: ImpactConnection;
  @Prop() expiryText: string = "Expires";
  @Prop() locale: string = "en";
  @Prop() pendingUsTax: string = "W-9 required";
  @Prop() pendingTaxReview: string = "Awaiting tax form review.";
  @Prop() pendingNewTaxForm: string =
    "Invalid tax form. Submit a new form to receive your rewards.";
  @Prop() pendingTaxSubmission: string =
    "Submit your tax documents to receive your rewards.";
  @Prop() pendingPartnerCreation: string =
    "Complete your tax and cash payout setup to receive your rewards.";
  @Prop() pendingScheduled: string = "Until";
  @Prop() pendingUnhandled: string = "Fulfillment error";
  @Prop() pendingReviewText: string = "Awaiting review";
  @Prop() deniedText: string = "Detected self-referral";
  @Prop() payoutFailed: string = "This payout will be retried on {date}";
  @Prop() payoutSent: string =
    "Payout process started on {date}. Expected payout on {date}.";

  rewardStatus(reward: Reward): string {
    const fraudStatus = reward.referral?.fraudData?.moderationStatus;
    const hasExpired = reward.statuses?.includes("EXPIRED");
    const isPending = reward.statuses?.includes("PENDING");
    const integrationOrFueltankReward =
      reward.type === "INTEGRATION" || reward.type === "FUELTANK";

    if (fraudStatus === "DENIED") return "DENIED";
    if (fraudStatus === "PENDING") return "PENDING_REVIEW";
    if (reward.dateCancelled) return "CANCELLED";
    if (hasExpired) return "EXPIRED";
    if (isPending) return "PENDING";

    if (reward.type === "CREDIT") {
      return reward.statuses?.includes("REDEEMED") ? "REDEEMED" : "AVAILABLE";
    }

    if (
      reward.type === "PCT_DISCOUNT" &&
      reward.statuses?.includes("AVAILABLE")
    ) {
      return "AVAILABLE";
    }

    if (integrationOrFueltankReward && isPending) {
      return "PENDING";
    }

    if (integrationOrFueltankReward && reward.statuses?.includes("CANCELLED")) {
      return "CANCELLED";
    }

    if (integrationOrFueltankReward && reward.statuses?.includes("AVAILABLE")) {
      return "AVAILABLE";
    }

    return "";
  }

  getTaxPendingReason(taxConnection: ImpactConnection) {
    if (!taxConnection.taxHandlingEnabled) return this.pendingUsTax;
    if (!taxConnection.connected) return this.pendingPartnerCreation;
    if (taxConnection.publisher?.requiredTaxDocumentType) {
      if (!taxConnection.publisher.currentTaxDocument) {
        this.pendingTaxSubmission;
      }

      const status = taxConnection.publisher.currentTaxDocument.status;
      if (status === "INACTIVE") return this.pendingNewTaxForm;
      if (status === "NOT_VERIFIED") return this.pendingTaxReview;
    }
    if (!taxConnection?.publisher?.withdrawalSettings)
      return this.pendingPartnerCreation;

    // TODO: Payout enums

    return "";
  }

  getBadgeType(rewardStatus: string) {
    switch (rewardStatus) {
      case "AVAILABLE":
        return "success";
      case "REDEEMED":
      case "PAYOUT_SENT":
        return "primary";
      case "PENDING":
      case "PENDING_REVIEW":
        return "warning";
      default:
        return "danger";
    }
  }

  getPayoutStatusText(taxStatus: string) {
    switch (taxStatus) {
      case "US_TAX":
        return this.pendingUsTax;
      case "PAYOUT_SENT":
        return this.payoutSent;
      case "PAYOUT_FAILED":
        return this.payoutFailed;
      case "PENDING_TAX_REVIEW":
        return this.pendingTaxReview;
      case "PENDING_NEW_TAX_FORM":
        return this.pendingNewTaxForm;
      case "PENDING_TAX_SUBMISSION":
        return this.pendingTaxSubmission;
      case "PENDING_PARTNER_CREATION":
        return this.pendingPartnerCreation;
    }
  }

  render() {
    intl.locale = this.locale;

    const rewardStatus = this.rewardStatus(this.reward);
    const statusText = intl.formatMessage(
      { id: "statusMessage", defaultMessage: this.statusText },
      {
        status: rewardStatus,
      }
    );

    const badgeType = this.getBadgeType(rewardStatus);

    const dateShown =
      this.reward.dateCancelled ||
      this.reward.dateExpires ||
      this.reward.dateRedeemed ||
      "";

    const date =
      dateShown &&
      `${
        rewardStatus === "AVAILABLE" && this.reward.dateExpires
          ? this.expiryText + " "
          : ""
      }${DateTime.fromMillis(dateShown)
        ?.setLocale(luxonLocale(luxonLocale(this.locale)))
        .toLocaleString(DateTime.DATE_MED)}`;

    const pendingReasons =
      rewardStatus === "PENDING" ? getRewardPendingReasons(this) : null;

    const fraudStatusText =
      rewardStatus === "PENDING_REVIEW"
        ? this.pendingReviewText
        : rewardStatus === "DENIED"
        ? this.deniedText
        : null;

    return (
      <div style={{ display: "contents" }}>
        <style type="text/css">{styleString}</style>
        <sl-badge
          type={badgeType}
          pill
          class={
            rewardStatus === "REDEEMED"
              ? sheet.classes.RedeemBadge
              : sheet.classes.Badge
          }
        >
          {statusText}
        </sl-badge>
        <p class={sheet.classes.Date}>
          {fraudStatusText || pendingReasons || date}
        </p>
      </div>
    );

    function getRewardPendingReasons(prop) {
      const pendingCodeMap: { [code: string]: string } = {
        SCHEDULED:
          prop.reward.dateScheduledFor &&
          prop.pendingScheduled +
            " " +
            DateTime.fromMillis(prop.reward.dateScheduledFor)
              ?.setLocale(luxonLocale(luxonLocale(prop.locale || "en")))
              .toLocaleString(DateTime.DATE_MED),
        UNHANDLED_ERROR: prop.pendingUnhandled,
        SUSPECTED_FRAUD: prop.pendingReview,
        PAYOUT_CONFIGURATION_MISSING: prop.pendingPartnerCreation,
        US_TAX: prop.getPendingTaxReason(prop.taxConnection),
      };
      return [prop.reward.pendingReasons]
        .map((s: string): string => pendingCodeMap[s] ?? s)
        .join(", ");
    }
  }
}
