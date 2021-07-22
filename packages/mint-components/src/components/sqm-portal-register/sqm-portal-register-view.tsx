import { h } from "@stencil/core";
import {
  AuthButtonsContainer,
  AuthWrapper,
  Column,
  gap,
  HostBlock,
} from "../../global/mixins";
import jss from "jss";
import preset from "jss-preset-default";
import { TextSpanView } from "../sqm-text-span/sqm-text-span-view";

export interface PortalRegisterViewProps {
  states: {
    error: string;
    loading: boolean;
    confirmPassword?: boolean;
  };
  callbacks: {
    submit;
  };
  content: {
    formData?: any;
    messageBanner?: any;
    secondaryButton?: any;
    emailLabel?: string;
    passwordLabel?: string;
    submitLabel?: string;
    pageLabel?: string;
  };
}

const style = {
  Wrapper: { ...AuthWrapper, "max-width": "600px" },
  Column: {
    ...Column,
    ...gap({ direction: "column", size: "var(--sl-spacing-xx-large)" }),
  },
  HostBlock: HostBlock,

  ":host": {
    margin: "0 auto",
    width: "100%",
  },

  ButtonsContainer: AuthButtonsContainer,
};

const vanillaStyle = `
:host{
  margin: 0 auto;
  width: 100%;
  display: block;
}

:host([hidden]) {
  display: none;
}
`;

jss.setup(preset());
const sheet = jss.createStyleSheet(style);
const styleString = sheet.toString();

export function PortalRegisterView(props: PortalRegisterViewProps) {
  const { states, callbacks, content } = props;
  return (
    <div class={sheet.classes.Wrapper}>
      <style type="text/css">
        {vanillaStyle}
        {styleString}
      </style>
      <TextSpanView type="h3">{content.pageLabel}</TextSpanView>
      <sl-form class={sheet.classes.Column} onSl-submit={callbacks.submit}>
        {props.states.error && (
          <sqm-form-message type="error" exportparts="erroralert-icon">
            <div part="erroralert-text">{props.states.error}</div>
          </sqm-form-message>
        )}
        {content.messageBanner}
        <sl-input
          exportparts="label: input-label"
          type="email"
          name="/email"
          label={content.emailLabel || "Email"}
          disabled={states.loading}
          required
        ></sl-input>
        <sl-input
          exportparts="label: input-label"
          type="password"
          name="/password"
          label={content.passwordLabel || "Password"}
          disabled={states.loading}
          required
        ></sl-input>
        {states.confirmPassword && (
          <sl-input
            exportparts="label: input-label"
            type="password"
            name="/confirmPassword"
            label="Confirm Password"
            disabled={states.loading}
            required
          ></sl-input>
        )}
        {content.formData}
        <div class={sheet.classes.ButtonsContainer}>
          <sl-button
            submit
            loading={states.loading}
            exportparts="base: primarybutton-base"
            type="primary"
          >
            {content.submitLabel || "Register"}
          </sl-button>
          {content.secondaryButton}
        </div>
      </sl-form>
    </div>
  );
}
