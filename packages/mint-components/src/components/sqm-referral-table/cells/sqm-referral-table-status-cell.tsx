import { Component, h, Prop } from "@stencil/core";
import { createStyleSheet } from "../../../styling/JSS";

const style = {
  Badge: {
    "&::part(base)": {
      fontSize: "var(--sl-font-size-small)",
      padding: "4px 8px",
      whiteSpace: "pre-line",
    },
  },
  SubText: {
    fontSize: "var(--sl-font-size-small)",
    color: "var(--sl-color-neutral-500)",
    margin: "0",
  },
};

const sheet = createStyleSheet(style);
const styleString = sheet.toString();

@Component({
  tag: "sqm-referral-table-status-cell",
  shadow: true,
})
export class ReferralTableStatusCell {
  @Prop() statusText: string;
  @Prop() fraudStatus?: "APPROVED" | "PENDING" | "DENIED";
  @Prop() converted: boolean;
  @Prop() pendingReviewSubtext: string = "Awaiting review";
  @Prop() deniedSubtext: string = "Detected self-referral";

  render() {
    const getBadgeType = (fraudStatus) => {
      switch (fraudStatus) {
        case this.converted:
        case "APPROVED":
          return "success";
        case "PENDING":
          return "warning";
        case "DENIED":
          return "danger";
        default:
          return "warning";
      }
    };

    return (
      <div>
        <style type="text/css">{styleString}</style>
        <sl-badge
          pill
          type={getBadgeType(this.fraudStatus)}
          class={sheet.classes.Badge}
        >
          {this.statusText}
        </sl-badge>
        {this.fraudStatus === "PENDING" ? (
          <p class={sheet.classes.SubText}>{this.pendingReviewSubtext}</p>
        ) : this.fraudStatus === "DENIED" ? (
          <p class={sheet.classes.SubText}>{this.deniedSubtext}</p>
        ) : null}
      </div>
    );
  }
}
