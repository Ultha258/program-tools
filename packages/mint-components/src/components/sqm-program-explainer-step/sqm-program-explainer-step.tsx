import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop } from "@stencil/core";
import { getProps } from "../../utils/utils";
import { ProgramExplainerStepView } from "./sqm-program-explainer-step-view";

/**
 * @uiName Program Explainer Step
 */
@Component({
  tag: "sqm-program-explainer-step",
  shadow: true,
})
export class ProgramExplainerStep {
  /**
   * @uiName Title
   */
  @Prop() header: string;

  /**
   * @uiName Description
   */
  @Prop() description: string;

  /**
   * @uiName Text Color
   * @uiWidget color
   */
  @Prop() textColor: string;

  /**
   * @uiName Background Color
   */
  @Prop() backgroundColor: string;

  /**
   * Displayed in place of an icon
   * 
   * @uiName Image URl
   */
  @Prop() imageUrl?: string;

  /**
   * Options available at https://shoelace.style/components/icon 
   * 
   * @uiName Icon
   */
  @Prop() icon?: string;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    return <ProgramExplainerStepView {...getProps(this)} />;
  }
}
