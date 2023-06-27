import { h, VNode } from "@stencil/core";
import { Spacing } from "../../global/mixins";
import { createStyleSheet } from "../../styling/JSS";

export interface PortalSectionProps {
  labelMargin: Spacing;
  padding: Spacing;
  label: VNode;
  content: VNode;
  textAlign?: "left" | "center" | "right";
}

export function PortalSectionView(props: PortalSectionProps) {
  // Due to sole usage of props, not feasiable to move out of render function
  const style = {
    LabelContainer: {
      "margin-bottom":
        props.labelMargin === "none"
          ? props.labelMargin
          : `var(--sl-spacing-${props.labelMargin})`,
    },
    SectionContainer: {
      textAlign: props.textAlign || "left",
      padding:
        props.padding === "none" ? "0" : `var(--sl-spacing-${props.padding})`,
    },
  };

  const sheet = createStyleSheet(style);
  const styleString = sheet.toString();

  return (
    <div class={sheet.classes.SectionContainer} part="sqm-base">
      <style type="text/css">{styleString}</style>
      <div class={sheet.classes.LabelContainer} part="sqm-label">
        {props.label}
      </div>
      {props.content}
    </div>
  );
}
