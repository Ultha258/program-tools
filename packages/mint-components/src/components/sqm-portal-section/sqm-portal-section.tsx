import { Component, h, Prop, State } from "@stencil/core";
import { withHooks } from "@saasquatch/stencil-hooks";
import { PortalSectionView } from "./sqm-portal-section-view";
import { getProps } from "../../utils/utils";

/**
 * @uiName Portal Section
 */
@Component({
  tag: "sqm-portal-section",
  shadow: true,
})
export class PortalSection {
  @State()
  ignored = true;

  /**@uiName Label margin style */
  @Prop() labelMargin: string = "0 0 20px";
  /** @uiName Section padding */
  @Prop() padding: string = "0";

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    const label = <slot name="label" />;
    const content = <slot name="content" />;
    return <PortalSectionView {...{ ...getProps(this), label, content }} />;
  }
}
