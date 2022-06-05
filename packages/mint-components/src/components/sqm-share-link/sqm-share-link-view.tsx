import { h } from "@stencil/core";
import { createStyleSheet } from "../../styling/JSS";
import { HostBlock } from "../../global/mixins";

export interface ShareLinkViewProps {
  shareString: string;
  open: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  size?: "small" | "medium" | "large";
  borderRadius?: number;
  tooltiptext: string;
  onClick?: () => void;
}

export function ShareLinkView(props: ShareLinkViewProps) {
  const style = {
    HostBlock: HostBlock,
    inputStyle: {
      "&::part(input)": {
        color: props.textColor,
      },
      "& sl-icon-button::part(base)": {
        color: props.textColor,
      },
      "&::part(base)": {
        background: props.backgroundColor || "white",
        borderRadius: props.borderRadius,
        borderColor: props.borderColor,
        opacity: "1",
        cursor: "pointer",
      },
    },
  };
  const sheet = createStyleSheet(style);
  const styleString = sheet.toString();

  console.log(props.borderColor);

  return (
    <div>
      <style type="text/css">{styleString}</style>
      <sl-tooltip
        trigger="manual"
        content={props.tooltiptext}
        placement="top-end"
        disabled={props.disabled}
        open={props.open}
        skidding={-20}
      >
        <sl-input
          size={props.size}
          class={sheet.classes.inputStyle}
          exportparts="label: input-label"
          value={props.shareString}
          readonly
        >
          <sl-icon-button
            onClick={() => props.onClick?.()}
            slot="suffix"
            name="files"
            disabled={props.disabled}
          />
        </sl-input>
      </sl-tooltip>
    </div>
  );
}
