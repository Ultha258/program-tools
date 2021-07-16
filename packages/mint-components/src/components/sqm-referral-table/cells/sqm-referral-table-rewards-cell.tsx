import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "sqm-referral-table-rewards-cell",
  styleUrl: "../sqm-referral-table.scss",
  shadow: true,
})
export class ReferralTableRewardsCell {
  @Prop() reward: string;

  render() {
    return <div class="MyStyle">{this.reward}</div>;
  }
}
