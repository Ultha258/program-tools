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
   * @uiName Color
   * @uiWidget color
   */
  @Prop() textColor: string;

  /**
   * @uiName Background
   */
  @Prop() backgroundColor: string;

  /**
   * @uiName Icon
   */
  @Prop() imageUrl: string;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    return <ProgramExplainerStepView {...getProps(this)} />;
  }
}
