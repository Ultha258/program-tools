import { Host, h } from "@stencil/core";
import { createStyleSheet } from "../../styling/JSS";
import { HostBlock, P } from "../../global/mixins";

export interface CloseButtonViewProps {
  onClick?: () => void;
}

const style = {
  HostBlock: HostBlock,
};

const sheet = createStyleSheet(style);
const styleString = sheet.toString();

export function CloseButtonView(props: CloseButtonViewProps) {
  const { onClick } = props;

  return (
    <div>
      <style type="text/css">{styleString}</style>
      <span style={{ fontSize: "24px", cursor: "pointer" }} onClick={onClick}>
        X
      </span>
    </div>
  );
}
