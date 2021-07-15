import { Component, h, Prop, State } from "@stencil/core";
import { withHooks } from "@saasquatch/stencil-hooks";
import { BigStatView } from "./sqm-big-stat-view";
import { useBigStat } from "./useBigStat";
import { useDemoBigStat } from "./useDemoBigStat";
import { isDemo } from "@saasquatch/component-boilerplate";
import { EnumValueNode } from "graphql";

/**
 *
 * @uiName Big Stat
 * @slot the description of the component
 */
@Component({
  tag: "sqm-big-stat",
  shadow: true,
})
export class BigStat {
  // uiEnum ["/rewardBalance/CREDIT/CASH_CAD/prettyPendingCredit",
  //  "/rewardBalance/CREDIT/CASH_CAD/prettyValue",
  //  "/rewardBalance/CREDIT/CASH_CAD/prettyRedeemedCredit",
  //  "/rewardBalance/CREDIT/CASH_USD/prettyPendingCredit",
  //  "/rewardBalance/CREDIT/CASH_USD/prettyValue",
  //  "/rewardBalance/CREDIT/CASH_USD/prettyRedeemedCredit",
  // "/rewardBalance/CREDIT/CASH_USD/prettyRedeemedCredit"]
  /**
   * Select what type of stat to display. Manual paths are also supported.
   *
   * @uiWidget StatTypeSelectWidget
   * @uiName Stat Type
   * @uiOptions {"showGoals": true}
   */
  @Prop() statType: string;

  /**
   * @uiName Flex Reverse - controls the order of the stat value & description column
   */
  @Prop() flexReverse?: boolean = false;
  /**
   * @uiName Alignment - controls the alignment of the flexbox
   */
  @Prop() alignment?: "left" | "right" | "center";

  @State()
  ignored = true;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    const { props, label } = isDemo() ? useDemoBigStat(this) : useBigStat(this);
    return (
      <BigStatView {...props}>
        <slot>{label}</slot>
      </BigStatView>
    );
  }
}
