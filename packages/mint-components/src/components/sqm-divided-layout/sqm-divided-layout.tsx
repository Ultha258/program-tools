import { Component, h, Prop } from "@stencil/core";
import { withHooks } from "@saasquatch/stencil-hooks";
import { DividedLayoutView } from "./sqm-divided-layout-view";
import { getProps } from "../../utils/utils";

/**
 * Shows it's children as either a row or a column, with a division in between them.
 * Spacing is left up to the child
 *
 * @uiName Divided Layout
 */
@Component({
  tag: "sqm-divided-layout",
  shadow: true,
})
export class DividedLayout {
  /**
   * @uiName Direction
   * @uiType string
   * @uiEnum ["row", "column"]
   * @uiEnumNames ["Row", "Column"]
   */
  @Prop() direction: "row" | "column";

  /**
   * Uses Shorthand CSS border syntax
   * @uiName Border Style
   */
  @Prop() dividerStyle: string = "1px solid #EAEAEA";

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    return (
      <DividedLayoutView {...getProps(this)}>
        <slot />
      </DividedLayoutView>
    );
  }
}
