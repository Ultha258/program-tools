import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop } from "@stencil/core";
import { Spacing } from "../../global/mixins";
import { getProps } from "../../utils/utils";
import { HeroImageView } from "./sqm-hero-image-view";

/**
 * @uiName Hero Image
 * @example Two Column Layout - <sqm-hero-image image-url="https://res.cloudinary.com/saasquatch/image/upload/v1644000275/squatch-assets/yr6ER3R.png" header="MyCompany Rewards" description="Refer a friend and earn up to $1200 in rewards" layout="columns" image-pos="right" background-color="#F9F9F9"></sqm-hero-image>
 * @example Overlay - <sqm-hero-image image-url="https://res.cloudinary.com/saasquatch/image/upload/v1644000275/squatch-assets/yr6ER3R.png" header="MyCompany Rewards" description="Refer a friend and earn up to $1200 in rewards" layout="overlay" image-pos="center" background-color="#F9F9F9" button-link="https://www.example.com" button-new-tab button-text="Earn!" image-percentage="45" overlay-opacity=".5" padding-image="small" padding-text="xxxx-large"></sqm-hero-image>
 */
@Component({
  tag: "sqm-hero-image",
  shadow: true,
})
export class HeroImage {
  /**
   * @uiWidget ImageUpload
   * @uiName Image Link
   */
  @Prop() imageUrl: string;

  /**
   * @uiName Overlay Color
   * @uiWidget color
   */
  @Prop() overlayColor?: string;

  /**
   * @uiName Overlay Opacity
   */
  @Prop() overlayOpacity: string = "0.75";

  /**
   * @uiName Text Color
   * @uiWidget color
   */
  @Prop() textColor?: string;

  /**
   * @uiName Background Color
   * @uiWidget color
   */
  @Prop() backgroundColor?: string;

  /**
   * @uiName Image Layout
   * @uiType string
   * @uiEnum ["overlay", "columns"]
   * @uiEnumNames ["Overlay", "Two-column"]
   */
  @Prop() layout: "overlay" | "columns" = "overlay";

  /**
   * @uiName Image Percentage
   * @uiType number
   */
  @Prop() imagePercentage: number = 50;

  /**
   * @uiName Image Position
   * @uiType string
   * @uiEnum ["left", "center", "right"]
   * @uiEnumNames ["Left", "Center", "Right"]
   */
  @Prop() imagePos: "left" | "center" | "right" = "center";

  /**
   * @uiName Image Mobile Position
   * @uiType string
   * @uiEnum ["top", "bottom"]
   * @uiEnumNames ["Top", "Bottom"]
   */
  @Prop() imageMobilePos: "top" | "bottom" = "top";

  /**
   * @uiName Title Text
   */
  @Prop() header?: string;

  /**
   * @uiName Description Text
   */
  @Prop() description?: string;

  /**
   * @uiName CTA Button Text
   */
  @Prop() buttonText?: string;

  /**
   * @uiName CTA Button Link
   */
  @Prop() buttonLink?: string;

  /**
   * CTA Button Opens Link in New Tab
   *
   * @uiName Button New Tab
   */
  @Prop() buttonNewTab?: boolean = false;

  /**
   * @uiName Text Padding
   * @uiType string
   * @uiEnum ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large"]
   * @uiEnumNames ["None", "XXX-Small", "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large", "XXXX-Large"]
   */
  @Prop() paddingText: Spacing = "xxxx-large";

  /**
   * @uiName Image Padding
   * @uiType string
   * @uiEnum ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large"]
   * @uiEnumNames ["None", "XXX-Small", "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large", "XXXX-Large"]
   */
  @Prop() paddingImage: Spacing = "none";

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    return (
      <HeroImageView {...getProps(this)}>
        <slot />
      </HeroImageView>
    );
  }
}
