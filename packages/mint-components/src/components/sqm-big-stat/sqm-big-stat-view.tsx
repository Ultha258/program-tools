import { h, VNode } from "@stencil/core";
import jss from "jss";
import preset from "jss-preset-default";

export interface BigStatViewProps {
  statvalue: string;
}

const style = {
  Stat: {
    "font-size": "var(--sl-font-size-x-large)",
    "text-align": "center",
  },
  Description: {
    "font-size": "var(--sl-font-size-x-small)",
    "font-weight": "var(--sl-font-weight-semibold)",
    color: "var(--sl-color-gray-600)",
    "text-transform": "uppercase",
    "text-align": "center",
  },
};

jss.setup(preset());
const sheet = jss.createStyleSheet(style);
const styleString = sheet.toString();

export function BigStatView(props: BigStatViewProps, children: VNode) {
  return (
    <div part="stat-wrapper">
      <style type="text/css">{styleString}</style>
      <div part="stat-value" class={sheet.classes.Stat}>
        {props.statvalue}
      </div>
      <div part="stat-description" class={sheet.classes.Description}>
        {children}
      </div>
    </div>
  );
}
