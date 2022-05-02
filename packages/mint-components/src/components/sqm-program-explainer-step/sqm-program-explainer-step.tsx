import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop } from "@stencil/core";
import { getProps } from "../../utils/utils";
import { ProgramExplainerStepView } from "./sqm-program-explainer-step-view";

/**
 * @uiName Program Explainer Step
 * @exampleGroup Common Components
 * @example Program Explainer Step - <sqm-program-explainer-step description="Complete tasks like uploading your first video or sharing videos with friends" header="Earn points" icon="cash-stack" text-color="#000000"></sqm-program-explainer-step>
 * @validParents ["sqm-program-explainer"]
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
   * @uiWidget textArea
   */
  @Prop() description: string;

  /**
   * @uiName Text Color
   * @uiWidget color
   * @format color
   */
  @Prop() textColor: string;

  /**
   * @uiName Background Color
   * @uiWidget color
   * @format color
   */
  @Prop() backgroundColor: string;

  /**
   * Displayed in place of an icon
   * 
   * @uiName Image Url
   * @uiWidget imageUpload
   * @format url
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
