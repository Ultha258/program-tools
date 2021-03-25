import { h, VNode } from "@stencil/core";

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
    | "info"
    | "warning"
    | "danger"
    | "default"
    | "text";
  size?: "small" | "medium" | "large";

  icon?: string;
  hideicon?: boolean;
  iconslot?: "prefix" | "suffix";

  onClick?: () => void;

  hide?: boolean;
}

export function ShareButtonView(props: ShareButtonViewProps, children: VNode) {
  return props.hide ? (
    <span />
  ) : (
    <sl-button
      loading={props.loading}
      disabled={props.disabled}
      pill={props.pill}
      size={props.size}
      type={props.type}
      onClick={props.onClick}
    >
      {!props.hideicon && (
        <sl-icon slot={props.iconslot} name={props.icon ? props.icon : props.medium}></sl-icon>
      )}
      {children}
    </sl-button>
  );
}
