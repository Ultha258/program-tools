import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Host, Method, Prop } from "@stencil/core";
import { useRequestRerender } from "../../../tables/re-render";
import { RewardTableColumn } from "./RewardTableColumn";

/**
 * @uiName Reward Table Source Column
 */
@Component({
  tag: "sqm-rewards-table-source-column",
  shadow: true,
})
export class RewardTableUserColumn implements RewardTableColumn {
  /**
   * @uiName Soruce Column Title
   */
  @Prop() columnTitle: string = "Source";

  /**
   * Name displayed for unknown users
   *
   * @uiName Anonymous User Text
   */
  @Prop() anonymousUser: string = "Anonymous User";
  /**
   * Name displayed for deleted users
   *
   * @uiName Deleted User Text
   */
  @Prop() deletedUser: string = "Deleted User";

  /**
   * @uiName Reward Exchange Label
   */
  @Prop() rewardExchangeText: string = "Reward Exchange";

  /**
   * Shown when a reward has been created by a referral
   *
   * @uiName Referral Text
   */
  @Prop() referralText: string =
    "{rewardSource, select, FRIEND_SIGNUP {Referral to} REFERRED {Referred by} other {}}";

  /**
   * @uiName Reward Source Text
   */
  @Prop() rewardSourceText: string =
    "{rewardSource, select, MANUAL {Manual} AUTOMATED {{programName}} other {}}";

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  @Method()
  async renderCell(data: Reward, locale) {
    return (
      <sqm-rewards-table-source-cell
        reward={data}
        anonymousUserText={this.anonymousUser}
        deletedUserText={this.deletedUser}
        rewardExchangeText={this.rewardExchangeText}
        referralText={this.referralText}
        rewardSourceText={this.rewardSourceText}
        locale={locale}
      ></sqm-rewards-table-source-cell>
    );
  }

  @Method()
  async renderLabel() {
    return this.columnTitle;
  }

  render() {
    useRequestRerender([
      this.deletedUser,
      this.anonymousUser,
      this.columnTitle,
      this.rewardExchangeText,
      this.referralText,
      this.rewardSourceText,
    ]);
    return <Host style={{ display: "none" }} />;
  }
}
