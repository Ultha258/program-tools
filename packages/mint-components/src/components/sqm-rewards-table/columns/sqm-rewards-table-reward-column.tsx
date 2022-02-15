import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Host, Method, Prop } from "@stencil/core";
import { useRequestRerender } from "../../../tables/re-render";
import { RewardTableColumn } from "./RewardTableColumn";
/**
 * @uiName Rewards Table Reward Column
 */
@Component({
  tag: "sqm-rewards-table-reward-column",
  shadow: true,
})
export class RewardsTableColumn implements RewardTableColumn {
  /**
   * @uiName Reward column title
   */
  @Prop() columnTitle: string = "Reward";

  /**
   * @uiName Redeemed Amount Text
   */
  @Prop() redeemedText: string = "{redeemedAmount} redeemed";

  /**
   * @uiName Remaining Amount Text
   */
  @Prop() availableText: string = "{availableAmount} remaining";

  /**
   * @uiName Copied Fuel Tank Text
   */
  @Prop() copyText: string = "Copied!";

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  @Method()
  async renderCell(data: Reward[], locale: string) {
    return (
      <sqm-rewards-table-reward-cell
        reward={data?.[0]}
        redeemedText={this.redeemedText}
        availableText={this.availableText}
        copyText={this.copyText}
        locale={locale}
      ></sqm-rewards-table-reward-cell>
    );
  }

  @Method()
  async renderLabel() {
    return this.columnTitle;
  }

  render() {
    useRequestRerender([
      this.columnTitle,
      this.redeemedText,
      this.availableText,
      this.copyText,
    ]);
    return <Host style={{ display: "none" }} />;
  }
}
