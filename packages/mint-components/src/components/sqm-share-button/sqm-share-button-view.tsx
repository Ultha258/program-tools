import { h, Host, VNode } from "@stencil/core";
import { createStyleSheet } from "../../styling/JSS";
import { HostBlock } from "../../global/mixins";

export interface ShareButtonViewProps {
  medium:
    | "facebook"
    | "twitter"
    | "email"
    | "direct"
    | "linkedin"
    | "sms"
    | "fbmessenger"
    | "whatsapp"
    | "linemessenger"
    | "pinterest"
    | "reminder"
    | "unknown";

  loading?: boolean;
  disabled?: boolean;
  pill?: boolean;
  type?:
    | "primary"
    | "success"
    | "neutral"
    | "warning"
    | "danger"
    | "default"
    | "text";
  size?: "small" | "medium" | "large";

  icon?: string;
  hideicon?: boolean;
  hidetext?: boolean;
  iconslot?: "prefix" | "suffix";
  onClick?: () => void;
  hide?: boolean;
  borderradius?: number;
  backgroundcolor?: string;
  textcolor?: string;
}

export function ShareButtonView(props: ShareButtonViewProps, children: VNode) {
  const vanillaStyle = `
    *::part(base) {
      background: ${props.backgroundcolor ? props.backgroundcolor : ""};
      color: ${props.textcolor ? props.textcolor : ""};
      border-radius: ${props.borderradius ? props.borderradius + "px" : ""};
    }
    *::part(label) {
    //   position: relative;
	//   top: 5%;
    }
  `;

  const style = {
    HostBlock: HostBlock,
    buttonStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: "0",
    },
  };

  const sheet = createStyleSheet(style);
  const styleString = sheet.toString();

  return props.hide ? (
    <Host style={{ display: "none" }}></Host>
  ) : (
    <div>
      <style type="text/css">{styleString}</style>
      <style type="text/css">{vanillaStyle}</style>
      <sl-button
        class={sheet.classes.buttonStyle}
        loading={props.loading}
        disabled={props.disabled}
        pill={props.pill}
        size={props.size}
        variant={props.type}
        onClick={props.onClick}
        exportparts={`base: ${props.type}sharebutton-base`}
      >
        {!props.hideicon && (
          <sl-icon
            slot={props.iconslot}
            name={props.icon ? props.icon : props.medium}
            exportparts="icon"
          ></sl-icon>
        )}
        {!props.hidetext && children}
      </sl-button>
    </div>
  );
}
