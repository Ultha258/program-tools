import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop, State } from "@stencil/core";
import { getProps } from "../../utils/utils";
import { Spacing } from "../../global/mixins";
import { ReferralCardView } from "./sqm-referral-card-view";

/**
 * @uiName Referral Card
 */
@Component({
  tag: "sqm-referral-card",
  shadow: true,
})
export class ReferralCard {
  @State()
  ignored = true;

  /**
   * @uiName Vertical Aligment
   * @uiType string
   * @uiEnum ["start", "center", "end"]
   * @uiEnumNames ["Start", "Center", "End"]
   */
  @Prop() verticalAlignment: "start" | "center" | "end" = "start";

  /**
   * @uiName Background Color
   * @uiWidget color
   */
  @Prop() backgroundColor?: string;

  /**
   * @uiName Text Color
   * @uiWidget color
   */
  @Prop() textColor?: string;

  /**
   * @uiName Configure border radius with pixel amount
   */
  @Prop() borderRadius?: number;

  /**
   * @uiName Padding
   * @uiType string
   * @uiEnum ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large"]
   * @uiEnumNames ["None", "XXX-Small", "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large", "XXXX-Large"]
   */
  @Prop() padding?: Spacing;

  /**
   * @uiName Border Color
   * @uiWidget color
   */
  @Prop() borderColor?: string;

  // /**
  //  * @uiName Mobile Padding
  //  * @uiType string
  //  * @uiEnum ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large"]
  //  * @uiEnumNames ["None", "XXX-Small", "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large", "XXXX-Large"]
  //  */
  // @Prop() mobilePadding?: Spacing;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    const slots = {
      left: <slot name="left" />,
      right: <slot name="right" />,
    };

    return (
      <ReferralCardView {...getProps(this)} slots={slots}>
        <slot />
      </ReferralCardView>
    );
  }
}
