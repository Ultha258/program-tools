import { h } from "@stencil/core";
import {
  AuthButtonsContainer,
  AuthColumn,
  AuthWrapper,
  ErrorStyles,
  HostBlock,
} from "../../global/mixins";
import jss from "jss";
import preset from "jss-preset-default";
import { TextSpanView } from "../sqm-text-span/sqm-text-span-view";
import { FormState } from "./useValidationState";

export interface PortalRegisterViewProps {
  states: {
    error: string;
    loading: boolean;
    confirmPassword: boolean;
    hideInputs: boolean;
    validationState?: FormState;
  };
  callbacks: {
    submit: Function;
    inputFunction: Function;
  };
  content: {
    formData?: any;
    secondaryButton?: any;
    emailLabel?: string;
    passwordLabel?: string;
    submitLabel?: string;
    pageLabel?: string;
  };
  refs: {
    formRef: any;
  };
}

const style = {
  Wrapper: { ...AuthWrapper, "max-width": "600px" },
  Column: AuthColumn,
  HostBlock: HostBlock,

  ":host": {
    margin: "0 auto",
    width: "100%",
  },

  ButtonsContainer: AuthButtonsContainer,
  ErrorStyle: ErrorStyles,
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
  const { states, refs, callbacks, content } = props;

  if (states.error) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <div class={sheet.classes.Wrapper}>
      <style type="text/css">
        {vanillaStyle}
        {styleString}
      </style>
      <TextSpanView type="h3">{content.pageLabel}</TextSpanView>
      <sl-form
        class={sheet.classes.Column}
        onSl-submit={callbacks.submit}
        ref={(el: HTMLFormElement) => (refs.formRef.current = el)}
        novalidate
      >
        {states.error && (
          <sqm-form-message type="error" exportparts="erroralert-icon">
            <div part="erroralert-text">{props.states.error}</div>
          </sqm-form-message>
        )}
        {!states.hideInputs && (
          <sl-input
            exportparts="label: input-label"
            type="email"
            name="/email"
            label={content.emailLabel || "Email"}
            disabled={states.loading}
            required
            validationError={({ value }: { value: string }) => {
              if (!value) {
                return "Cannot be empty";
              }
              // this matches shoelace validation, but could be better
              if (!value.includes("@")) {
                return "Must be a valid email address";
              }
            }}
            {...(states.validationState?.validationErrors?.email
              ? {
                  class: sheet.classes.ErrorStyle,
                  helpText:
                    states.validationState?.validationErrors?.email ||
                    "Cannot be empty",
                }
              : [])}
          ></sl-input>
        )}
        {!states.hideInputs && (
          <sl-input
            exportparts="label: input-label"
            type="password"
            name="/password"
            label={content.passwordLabel || "Password"}
            disabled={states.loading}
            required
            validationError={({ value }) => {
              if (!value) {
                return "Cannot be empty";
              }
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
            }}
            {...(states.validationState?.validationErrors?.password
              ? {
                  class: sheet.classes.ErrorStyle,
                  helpText:
                    states.validationState?.validationErrors?.password ||
                    "Cannot be empty",
                }
              : [])}
          ></sl-input>
        )}
        {!states.hideInputs && states.confirmPassword && (
          <sl-input
            exportparts="label: input-label"
            type="password"
            name="/confirmPassword"
            label="Confirm Password"
            disabled={states.loading}
            required
            {...(states.validationState?.validationErrors?.confirmPassword
              ? {
                  class: sheet.classes.ErrorStyle,
                  helpText:
                    states.validationState?.validationErrors?.confirmPassword ||
                    "Cannot be empty",
                }
              : [])}
          ></sl-input>
        )}
        {/* Must use inline styling to target slotted element here */}
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
