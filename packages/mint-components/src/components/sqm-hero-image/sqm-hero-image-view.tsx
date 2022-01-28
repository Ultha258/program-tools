import { h, VNode } from "@stencil/core";
import { Spacing } from "../../global/mixins";
import { createStyleSheet } from "../../styling/JSS";

export interface HeroImageViewProps {
  layout: "overlay" | "columns";
  imageUrl: string;
  overlayColor: string;
  overlayOpacity: string;
  textColor?: string;
  backgroundColor?: string;
  imagePercentage?: number;
  minHeight?: string;
  maxHeight?: string;
  maxWidth?: string;
  header?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonNewTab?: boolean;
  paddingText?: Spacing;
  paddingImage?: Spacing;
  imagePos: "left" | "center" | "right";
  imageMobilePos: "top" | "bottom";
}

export function HeroImageView(props: HeroImageViewProps, children: VNode) {
  const overlay = Boolean(
    (props.header || props.description || props.buttonText) &&
      props.layout === "overlay"
  );
  const style = {
    Container: {
      position: "relative",
      "&:before": {
        content: overlay ? '""' : "",
        width: "100%",
        height: "100%",
        position: "absolute",
        background: props.overlayColor || "var(--sl-color-primary-900)",
        opacity: props.overlayOpacity || "0.75",
      },
    },
    Image: {
      display: "block",
      maxWidth: props.maxWidth || "100%",
      minHeight: props.minHeight || "300px",
      objectFit: "cover",
      margin: "auto",
    },
    Background: {
      minHeight: props.minHeight,
      backgroundImage: `url(${props.imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: props.imagePos || "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    Overlay: {
      zIndex: "1",
      padding: "var(--sl-spacing-" + props.paddingText + ")",
      textAlign: "center",
      color: props.textColor || "var(--sl-color-neutral-0)",
      lineHeight: "var(--sl-line-height-dense)",
    },
    Column: {
      display: "flex",
      background: props.backgroundColor || "",
      flexDirection: props.imagePos === "right" ? "row-reverse" : "row",
      lineHeight: "var(--sl-line-height-dense)",
      color: props.textColor || "var(--sl-color-neutral-900)",
      "& .image-area": {
        width: props.imagePercentage ? props.imagePercentage + "%" : "50%",
        padding: `var(--sl-spacing-${props.paddingImage})`,
        boxSizing: "border-box",
        margin: props.maxHeight ? "auto" : "",
        "@media (max-width: 599px)": {
          width: "100%",
        },
      },
      "& .text-area": {
        width: props.imagePercentage
          ? 100 - props.imagePercentage + "%"
          : "50%",
        padding: `var(--sl-spacing-${props.paddingText})`,
        alignSelf: "center",
        boxSizing: "border-box",
        "@media (max-width: 599px)": {
          width: "100%",
          textAlign: "center",
        },
      },
      "@media (max-width: 599px)": {
        flexDirection:
          props.imageMobilePos === "bottom" ? "column-reverse" : "column",
      },
    },
    Header: {
      fontSize: "var(--sl-font-size-xxx-large)",
      fontWeight: "var(--sl-font-weight-bold)",
      "@media (max-width: 599px)": {
        fontSize: "var(--sl-font-size-xx-large)",
      },
    },
    Description: {
      fontSize: "var(--sl-font-size-x-large)",
      margin: "var(--sl-spacing-small) 0",
      "@media (max-width: 599px)": {
        fontSize: "var(--sl-font-size-large)",
      },
    },
    Button: {
      marginTop: "var(--sl-spacing-medium)",
      "&::part(base)": {
        padding: "0 var(--sl-spacing-x-large)",
      },
      "@media (max-width: 599px)": {
        width: "100%",
      },
    },
  };

  const sheet = createStyleSheet(style);
  const styleString = sheet.toString();

  const vanillaStyle = `
  :host{
    display: block;
  }`;

  return (
    <div class={sheet.classes.Container}>
      <style type="text/css">
        {vanillaStyle}
        {styleString}
      </style>

      {props.layout === "overlay" && OverlayView()}
      {props.layout === "columns" && ColumnView()}
    </div>
  );

  function OverlayView() {
    return (
      <div class={sheet.classes.Background}>
        <div class={sheet.classes.Overlay}>
          {props.header && (
            <div class={sheet.classes.Header}>{props.header}</div>
          )}
          {props.description && (
            <div class={sheet.classes.Description}>{props.description}</div>
          )}
          {props.buttonText && (
            <sl-button
              class={sheet.classes.Button}
              type="primary"
              onClick={() =>
                props.buttonNewTab
                  ? window.open(props.buttonLink)
                  : window.open(props.buttonLink, "_parent")
              }
            >
              {props.buttonText}
            </sl-button>
          )}
          {children && children}
        </div>
      </div>
    );
  }

  function ColumnView() {
    return (
      <div>
        <div class={sheet.classes.Column}>
          <div class="image-area">
            <img
              class={sheet.classes.Image}
              src={props.imageUrl}
              style={{
                minHeight: props.minHeight || "100%",
                maxHeight: props.maxHeight,
              }}
            ></img>
          </div>
          <div class="text-area">
            {props.header && (
              <div class={sheet.classes.Header}>{props.header}</div>
            )}
            {props.description && (
              <div class={sheet.classes.Description}>{props.description}</div>
            )}
            {props.buttonText && (
              <sl-button
                class={sheet.classes.Button}
                type="primary"
                onClick={() =>
                  props.buttonNewTab
                    ? window.open(props.buttonLink)
                    : window.open(props.buttonLink, "_parent")
                }
              >
                {props.buttonText}
              </sl-button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
