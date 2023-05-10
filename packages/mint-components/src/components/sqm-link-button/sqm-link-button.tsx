import { Component, h, Prop } from "@stencil/core";
import { getProps } from "../../utils/utils";
import { ButtonType, LinkButtonView } from "./sqm-link-button-view";

/**
 * @uiName Link Button
 * @exampleGroup Common Components
 * @example Link Button - <sqm-link-button link="https://www.example.com" open-in-new-tab="true">Click here</sqm-link-button>
 */
@Component({
  tag: "sqm-link-button",
  shadow: true,
})
export class LinkButton {
  /**
   * URL that your button redirects to. Be sure to include the entire URL path (example: https://www.example.com)
   *
   * @required
   * @uiName Link
   */
  @Prop() link: string;
  /**
   * @uiName Open link in new tab
   */
  @Prop() openInNewTab: boolean = false;
  /**
   * @uiName Button type
   * @uiType string
   * @uiEnum ["default", "primary", "success", "neutral", "warning", "danger"]
   * @uiEnumNames ["Default", "Primary", "Success", "Neutral", "Warning", "Danger"]
   */
  @Prop() buttonType?:
    | "default"
    | "primary"
    | "success"
    | "neutral"
    | "warning"
    | "danger" = "primary";
  /**
   * @uiName Button text
   * @uiType string
   */
  @Prop() buttonText?: string = "Click here";

  render() {
    const onClick = () => {
      const url = this.link;
      const target = this.openInNewTab ? "_blank" : "_parent";
      window.open(url, target);
    };

    return (
      <LinkButtonView {...{ ...getProps(this), onClick }}></LinkButtonView>
    );
  }
}

//TODO: Write a hook to resolve ICU strings
