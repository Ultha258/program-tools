import { Component, h, Prop } from "@stencil/core";
import { TextSpanView } from "../../sqm-text-span/sqm-text-span-view";

@Component({
  tag: "sqm-rewards-table-source-cell",
  shadow: true,
})
export class RewardTableSourceCell {
  @Prop() reward: Reward;

  render() {
    function capitalize(str: string) {
      if (typeof str !== "string") {
        console.error(`Cannot capitalize parameter of type ${typeof str}`);
        return null;
      }
      return str.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
    }

    function RewardSource({ reward }: { reward: Reward }) {
      const rewardSource =
        capitalize(reward.rewardSource?.replace("_", " ") || "") ?? "-";
      return <span>{rewardSource}</span>;
    }

    const SOURCE_COLUMN_LENGTH = 21;
    function RewardExchangeBadge({ reward }: { reward: Reward }) {
      const rewardExchange = (
        <div>
          Reward Exchange
          <br />
          {/* <Data> */}
          {reward.exchangedRewardRedemptionTransaction?.prettyRedeemedCredit}
          {" → "}
          {reward.prettyValue}
          {/* </Data> */}
        </div>
      );

      return reward.exchangedRewardRedemptionTransaction.prettyRedeemedCredit
        .length +
        reward.prettyValue.length <
        SOURCE_COLUMN_LENGTH ? (
        rewardExchange
      ) : (
        <div
          style={{
            display: "inline-block",
            verticalAlign: "top",
            maxWidth: "120px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {rewardExchange}
        </div>
      );
    }

    // TODO: user type
    function getFullName(user: any) {
      if (!user) return "Deleted User";
      if (!user.firstName && !user.lastName) return "Anonymous User";

      if (!user.firstName) return `${user.lastName}`;
      if (!user.lastName) return `${user.firstName}`;

      return `${user.firstName} ${user.lastName}`;
    }

    const source = () =>
      this.reward.rewardSource === "FRIEND_SIGNUP" ||
      this.reward.rewardSource === "REFERRED" ? (
        <div>
          {this.reward.rewardSource === "FRIEND_SIGNUP" && "Referral to"}
          {this.reward.rewardSource === "REFERRED" && "Referred by"}
          <br />
          <b>{getFullName(this.reward.referral.referredUser)}</b>
        </div>
      ) : this.reward.exchangedRewardRedemptionTransaction ? (
        <RewardExchangeBadge reward={this.reward} />
      ) : (
        <RewardSource reward={this.reward} />
      );

    return <TextSpanView type="p">{source()}</TextSpanView>;
  }
}
