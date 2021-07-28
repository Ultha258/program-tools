import { h } from "@stencil/core";
import { AuthColumn, AuthWrapper } from "../../global/mixins";
import jss from "jss";
import preset from "jss-preset-default";
import { TextSpanView } from "../sqm-text-span/sqm-text-span-view";

export interface PortalEmailVerificationViewProps {
  states: {
    error: string;
    loading: boolean;
    success: boolean;
  };
  callbacks: {
    submit: (event: any) => Promise<void>;
  };
  content: {
    email: string;
  };
}

const style = {
  Wrapper: AuthWrapper,
  Column: { ...AuthColumn },
};

const vanillaStyle = `
:host {
  margin: 0 auto;
  width: 100%;
  display: block;
}
:host([hidden]): {
  display: none;
}
`;

jss.setup(preset());
const sheet = jss.createStyleSheet(style);
const styleString = sheet.toString();

export function PortalEmailVerificationView(
  props: PortalEmailVerificationViewProps
) {
  const {
    states,
    callbacks,
    content: { email },
  } = props;
  return (
    <div class={sheet.classes.Wrapper}>
      <style type="text/css">
        {vanillaStyle}
        {styleString}
      </style>
      <TextSpanView type="h3">Verify your email</TextSpanView>
      <sl-form class={sheet.classes.Column} onSl-submit={callbacks.submit}>
        {props.states.error && (
          <sqm-form-message type="error" exportparts="erroralert-icon">
            <div part="erroralert-text">{props.states.error}</div>
          </sqm-form-message>
        )}
        {props.states.success && (
          <sqm-form-message type="success" exportparts="successalert-icon">
            <div part="successalert-text">
              Your verification email has been resent successfully
            </div>
          </sqm-form-message>
        )}

        <TextSpanView type="p">
          A verification email was sent to{" "}
          <span style={{ fontWeight: "var(--sl-font-weight-semibold)" }}>
            {email}
          </span>
          . Please verify your email to continue to the portal.
        </TextSpanView>
        <sl-button
          submit
          loading={states.loading}
          exportparts="base: primarybutton-base"
          type="primary"
        >
          Re-send Email
        </sl-button>
      </sl-form>
    </div>
  );
}
