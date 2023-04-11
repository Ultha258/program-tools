import { h } from "@stencil/core";
import { createStyleSheet } from "../../styling/JSS";
import { HostBlock, P } from "../../global/mixins";

export interface CopyTextViewProps {
  copyString: string;
  tooltiptext: string;
  open: boolean;
  copyButtonLabel?: string;
  disabled?: boolean;
  textAlign?: "left" | "center";
  buttonStyle?: "button inside" | "button outside" | "button below" | "icon";
  error?: boolean;
  errorText?: string;

  onClick?: () => void;
}

const style = {
  HostBlock: HostBlock,
  inputStyle: {
    "&::part(base)": { background: "white", opacity: "1", cursor: "pointer" },
    "&::part(input)": { textOverflow: "ellipsis" },
    width: "100%",
  },
  inputErrorStyle: {
    "&::part(base)": {
      border: "2px solid red",
    },
  },
  containerStyle: {
    display: "flex",
    gap: "8px",
  },
  errorTextStyle: {
    margin: "0",
    color: "red",
  },
  helptextStyle: {
    display: "flex",
    flexDirection: "column",
    marginTop: "8px",
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
  const { buttonStyle = "icon", errorText = "An error occurred" } = props;

  const copyButton =
    buttonStyle === "icon" ? null : (
      <sl-button
        onClick={() => props.onClick?.()}
        size={buttonStyle === "button outside" ? "medium" : "small"}
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
        <div
          class={sheet.classes.containerStyle}
          style={{
            flexDirection: `${
              buttonStyle === "button below" ? "column" : "row"
            }`,
            width: "100%",
          }}
        >
          <sl-input
            class={`${sheet.classes.inputStyle} ${
              props.error ? sheet.classes.inputErrorStyle : ""
            }`}
            exportparts="label: input-label"
            value={props.copyString}
            readonly
            style={{}}
          >
            {buttonStyle === "icon" ? (
              <sl-icon-button
                onClick={() => props.onClick?.()}
                slot="suffix"
                name="files"
                disabled={props.disabled}
              />
            ) : (
              buttonStyle === "button inside" && copyButton
            )}
            <div slot="help-text" class={sheet.classes.helptextStyle}>
              {(buttonStyle === "button outside" ||
                buttonStyle === "button below") &&
                copyButton}
              {props.error && (
                <p class={sheet.classes.errorTextStyle}>{errorText}</p>
              )}
            </div>
          </sl-input>
        </div>
      </sl-tooltip>
    </div>
  );
}
