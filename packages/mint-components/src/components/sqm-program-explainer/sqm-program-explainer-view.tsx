import { h, VNode } from "@stencil/core";

import jss from "jss";
import preset from "jss-preset-default";

export interface ProgramExplainerViewProps {
  header: string;
  cardTitle: string;
  description: string;
  color: string;
  background: string;
}
export function ProgramExplainerView(
  props: ProgramExplainerViewProps,
  children: VNode
) {
  const style = {
    Container: {
      display: "flex",
      flexDirection: "row",
      "@media (max-width: 768px)": {
        flexDirection: "column",
      },
    },
    Card: {
      padding: "24px",
      color: props.color,
      background: props.background,
    },
    Title: {
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: "700",
    },
    Description: {
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: "400",
      marginTop: "8px",
    },
  };

  jss.setup(preset());
  const sheet = jss.createStyleSheet(style);
  const styleString = sheet.toString();

  console.log(props);

  return (
    <div>
      <style type="text/css">{styleString}</style>
      <div class={sheet.classes.Card}>
        <div class={sheet.classes.Title}>{props.header}</div>
      </div>
      <div class={sheet.classes.Container}>{children}</div>
      <div class={sheet.classes.Card}>
        <div class={sheet.classes.Title}>{props.cardTitle}</div>
        <div class={sheet.classes.Description}>{props.description}</div>
      </div>
    </div>
  );
}
