import { h } from "@stencil/core";
import { createStyleSheet } from "../../styling/JSS";
import { HostBlock } from "../../global/mixins";

export interface CopyTextViewProps {
  copyString: string;
  tooltiptext: string;
  open: boolean;
  copyButtonLabel?: string;
  disabled?: boolean;
  isCopyIcon?: boolean;
  textAlign?: "left" | "center";
  buttonOutside?: boolean;

  onClick?: () => void;
}

const style = {
  HostBlock: HostBlock,
  inputStyle: {
    "&::part(base)": { background: "white", opacity: "1", cursor: "pointer" },
  },
  containerStyle: {
    display: "flex",
    columnGap: "8px",
  },
};

const textAlignStyle = `
  :host{
    display: block;   
  }
  sl-input::part(input){
    text-align: center;
  }
`;

const sheet = createStyleSheet(style);
const styleString = sheet.toString();

export function CopyTextView(props: CopyTextViewProps) {
  const { isCopyIcon = true } = props;

  const copyButton = isCopyIcon ? null : (
    <sl-button
      onClick={() => props.onClick?.()}
      size={props.buttonOutside ? "medium" : "small"}
      disabled={props.disabled}
      slot="suffix"
      type="primary"
    >
      {props.copyButtonLabel || "Copy"}
    </sl-button>
  );

  return (
    <div>
      <style type="text/css">
        {styleString}
        {props.textAlign === "center" && textAlignStyle}
      </style>
      <sl-tooltip
        trigger="manual"
        content={props.tooltiptext}
        placement="top-end"
        disabled={props.disabled}
        open={props.open}
        skidding={-20}
      >
        <div class={sheet.classes.containerStyle}>
          <sl-input
            class={sheet.classes.inputStyle}
            exportparts="label: input-label"
            value={props.copyString}
            readonly
          >
            {isCopyIcon ? (
              <sl-icon-button
                onClick={() => props.onClick?.()}
                slot="suffix"
                name="files"
                disabled={props.disabled}
              />
            ) : (
              !props.buttonOutside && copyButton
            )}
          </sl-input>
          {props.buttonOutside && copyButton}
        </div>
      </sl-tooltip>
    </div>
  );
}
