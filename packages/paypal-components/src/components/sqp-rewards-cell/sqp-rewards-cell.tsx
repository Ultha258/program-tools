import { Component, h, Prop } from "@stencil/core";
import { DateTime } from "luxon";
import { intl } from "../../global/global";
import { luxonLocale } from "../../utils/utils";
import { createStyleSheet } from "../../styling/JSS";
import { TextSpanView } from "./text-span-view";
import { PaypalBadge } from "../../Icons/PaypalBadge";

const paypalStatuses = ["TRANSFERRED", "FAILED", "INPROGRESS"];

@Component({
  tag: "sqp-rewards-cell",
  shadow: true,
})
export class ReferralTableRewardsCell {
  @Prop() rewards: Reward[];
  @Prop() hideDetails: boolean;
  @Prop() statusText: string;
  @Prop() statusLongText: string;
  @Prop() fuelTankText: string;
  @Prop() rewardReceivedText: string;
  @Prop() expiringText: string;
  @Prop() pendingForText: string;
  @Prop() rewardPaidOutText: string;
  @Prop() rewardPayoutInProgressText: string;
  @Prop() rewardPayoutFailedText: string;
  @Prop() locale: string = "en";
  render() {
    console.log(
      "ye",
      this.rewardPaidOutText,
      this.rewardPayoutFailedText,
      this.rewardPayoutFailedText
    );
    intl.locale = this.locale;
    const style = {
      "@keyframes slideRight": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      DetailsContainer: {
        width: "100%",
        display: "flex",
        "align-items": "center",
        "justify-content": "space-between",
        "margin-right": "var(--sl-spacing-small)",
        "flex-wrap": "wrap",
      },

      Details: {
        "padding-bottom": "var(--sl-spacing-small)",
        "max-width": "500px",
        // "padding-right": "var(--sl-spacing-x-small)",
        "&::part(header)": {
          padding: "var(--sl-spacing-x-small)",
          cursor: `${this.hideDetails ? "default" : "pointer"}`,
        },
        "&::part(content)": {
          padding: "var(--sl-spacing-x-small) var(--sl-spacing-medium)",
        },
        "&::part(base)": {
          opacity: "1",
        },
        "&::part(summary-icon)": {
          display: `${this.hideDetails ? "none" : "flex"}`,
        },

        "&::part(summary-icon[open])": {
          transform: "rotate(-90deg)",
          background: "red",
        },
      },

      BadgeContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
      },

      BoldText: {
        "font-weight": "var(--sl-font-weight-semibold)",
      },
      StatusBadge: {
        paddingLeft: "var(--sl-spacing-xxx-small)",
        "&::part(base)": {
          textAlign: "center",
          maxWidth: "170px",
          whiteSpace: "pre-line",
        },
      },
      RedeemBadge: {
        paddingLeft: "var(--sl-spacing-xxx-small)",
        "&::part(base)": {
          background: "var(--sl-color-blue-600)",
        },
      },
    };

    const sheet = createStyleSheet(style);
    const styleString = sheet.toString();

    const getState = (reward: Reward): string => {
      if (
        reward.meta?.customMeta?.datePaidOut &&
        reward.statuses.includes("REDEEMED")
      ) {
        return "TRANSFERRED";
      }
      if (reward.meta?.status === "ERROR") {
        return "FAILED";
      }
      if (
        reward.meta?.customMeta?.dateLastAttempted &&
        !reward.meta?.customMeta?.datePaidOut
      ) {
        return "INPROGRESS";
      }
      const states = reward.statuses;

      const possibleStates = [
        "REDEEMED",
        "CANCELLED",
        "EXPIRED",
        "PENDING",
        "AVAILABLE",
      ];

      if (states.length === 1) return states[0];

      return possibleStates.find((state) => states.includes(state) && state);
    };

    const getSLBadgeType = (state: string): string => {
      switch (state) {
        case "REDEEMED":
          return "primary";
        case "TRANSFERRED":
          return "primary";
        case "INPROGRESS":
          return "warning";
        case "FAILED":
          return "danger";
        case "EXPIRED":
          return "danger";
        case "CANCELLED":
          return "danger";
        case "PENDING":
          return "warning";
        case "AVAILABLE":
          return "success";
      }
    };

    const getTimeDiff = (endTime: number): string => {
      // Current implementation only calculates the difference from current time
      return DateTime.fromMillis(endTime)
        .setLocale(luxonLocale(this.locale))
        .toRelative()
        .replace("in", "")
        .trim();
    };

    return this.rewards?.map((reward) => {
      const state = getState(reward);
      const isPayPal = paypalStatuses.includes(state);
      const slBadgeType = getSLBadgeType(state);
      const badgeText = intl.formatMessage(
        { id: "statusShortMessage", defaultMessage: this.statusText },
        {
          status: state,
        }
      );
      const statusText = intl.formatMessage(
        {
          id: "statusLongMessage",
          defaultMessage: this.statusLongText,
        },
        {
          status: state,
        }
      );

      const RewardGivenText = () =>
        state === "INPROGRESS" ? (
          <div>
            <TextSpanView type="p">
              {this.rewardPayoutInProgressText}{" "}
              <span class={sheet.classes.BoldText}>
                {DateTime.fromMillis(reward.meta?.customMeta?.datePaidOut)
                  .setLocale(luxonLocale(this.locale))
                  .toLocaleString(DateTime.DATE_MED)}
              </span>
            </TextSpanView>
          </div>
        ) : state === "TRANSFERRED" ? (
          <div>
            <TextSpanView type="p">
              {this.rewardPaidOutText}{" "}
              <span class={sheet.classes.BoldText}>
                {DateTime.fromMillis(
                  reward.meta?.customMeta?.dateLastAttempted ||
                    reward.meta?.customMeta?.dateFirstAttempted
                )
                  .setLocale(luxonLocale(this.locale))
                  .toLocaleString(DateTime.DATE_MED)}
              </span>
            </TextSpanView>
          </div>
        ) : state === "FAILED" ? (
          <div>
            <TextSpanView type="p">
              {this.rewardPayoutFailedText}{" "}
              <span class={sheet.classes.BoldText}>
                {DateTime.fromMillis(
                  reward.meta?.customMeta?.dateLastAttempted ||
                    reward.meta?.customMeta?.dateFirstAttempted
                )
                  .setLocale(luxonLocale(this.locale))
                  .toLocaleString(DateTime.DATE_MED)}
              </span>
            </TextSpanView>
          </div>
        ) : (
          <div>
            <TextSpanView type="p">
              {this.rewardReceivedText}{" "}
              <span class={sheet.classes.BoldText}>
                {DateTime.fromMillis(reward.dateGiven)
                  .setLocale(luxonLocale(this.locale))
                  .toLocaleString(DateTime.DATE_MED)}
              </span>
            </TextSpanView>
          </div>
        );

      return (
        <sl-details class={sheet.classes.Details} disabled={this.hideDetails}>
          <style type="text/css">{styleString}</style>
          <div slot="summary" class={sheet.classes.DetailsContainer}>
            <TextSpanView type="p">
              <span class={sheet.classes.BoldText}>{reward.prettyValue}</span>
            </TextSpanView>
            {/* If state is pending and reward has expiry date, display the relative time inside badge. Otherwise only display the badge text */}
            {/* Pending for W9 Tax reasons cases here */}
            <div class={sheet.classes.BadgeContainer}>
              {state === "PENDING" && reward.dateScheduledFor ? (
                <sl-badge
                  class={
                    slBadgeType === "primary"
                      ? sheet.classes.RedeemBadge
                      : sheet.classes.StatusBadge
                  }
                  type={slBadgeType}
                  pill
                >
                  {intl.formatMessage(
                    {
                      id: "pendingForText",
                      defaultMessage: this.pendingForText,
                    },
                    {
                      status: badgeText,
                      date: getTimeDiff(reward.dateScheduledFor),
                    }
                  )}
                </sl-badge>
              ) : (
                <sl-badge
                  class={
                    slBadgeType === "primary"
                      ? sheet.classes.RedeemBadge
                      : sheet.classes.StatusBadge
                  }
                  type={slBadgeType}
                  pill
                >
                  {badgeText}
                </sl-badge>
              )}
              {reward.dateExpires && state === "AVAILABLE" && (
                <sl-badge
                  class={
                    slBadgeType === "primary"
                      ? sheet.classes.RedeemBadge
                      : sheet.classes.StatusBadge
                  }
                  type="info"
                  pill
                >
                  {this.expiringText}
                  {` ${getTimeDiff(reward.dateExpires)}`}
                </sl-badge>
              )}
              {isPayPal && <PaypalBadge />}
            </div>
          </div>
          <div>
            {reward.dateGiven && <RewardGivenText />}
            {state === "EXPIRED" && reward.dateExpires && (
              <div>
                <TextSpanView type="p">
                  {statusText}{" "}
                  <span class={sheet.classes.BoldText}>
                    {DateTime.fromMillis(reward.dateExpires)
                      .setLocale(luxonLocale(this.locale))
                      .toLocaleString(DateTime.DATE_MED)}
                  </span>
                </TextSpanView>
              </div>
            )}
            {state === "CANCELLED" && reward.dateCancelled && (
              <div>
                <TextSpanView type="p">
                  {statusText}{" "}
                  <span class={sheet.classes.BoldText}>
                    {DateTime.fromMillis(reward.dateCancelled)
                      .setLocale(luxonLocale(this.locale))
                      .toLocaleString(DateTime.DATE_MED)}
                  </span>
                </TextSpanView>
              </div>
            )}
            {state === "PENDING" && reward.dateScheduledFor && (
              <div>
                <TextSpanView type="p">
                  {statusText}{" "}
                  <span class={sheet.classes.BoldText}>
                    {DateTime.fromMillis(reward.dateScheduledFor)
                      .setLocale(luxonLocale(this.locale))
                      .toLocaleString(DateTime.DATE_MED)}
                  </span>
                </TextSpanView>
              </div>
            )}{" "}
            {/* Pending for W9 Tax reasons cases here */}
            {state === "AVAILABLE" && reward.dateExpires && (
              <div>
                <TextSpanView type="p">
                  {statusText}{" "}
                  <span class={sheet.classes.BoldText}>
                    {DateTime.fromMillis(reward.dateExpires)
                      .setLocale(luxonLocale(this.locale))
                      .toLocaleString(DateTime.DATE_MED)}
                  </span>
                </TextSpanView>
              </div>
            )}
            {reward.fuelTankCode && (
              <div>
                {this.fuelTankText}{" "}
                <span class={sheet.classes.BoldText}>
                  {reward.fuelTankCode}
                </span>
              </div>
            )}
          </div>
        </sl-details>
      );
    });
  }
}
