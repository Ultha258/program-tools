import { h } from "@stencil/core";
import {
  PortalRegisterView,
  PortalRegisterViewProps,
} from "../components/sqm-portal-register/sqm-portal-register-view";

export default {
  title: "Portal Register",
};

const defaultProps: PortalRegisterViewProps = {
  states: {
    error: "",
    loading: false,
    confirmPassword: true,
    hideInputs: false,
    loginPath: "/login",
  },
  callbacks: {
    submit: () => console.log("Submit!"),
    inputFunction: () => {},
  },
  refs: {
    formRef: {},
  },
  content: { pageLabel: "Register", confirmPasswordLabel: "Confirm Password" },
};

const errorProps: PortalRegisterViewProps = {
  states: {
    error: "Something went wrong. Please try again.",
    loading: false,
    confirmPassword: true,
    hideInputs: false,
    loginPath: "/login",
  },
  callbacks: {
    submit: () => console.log("Submit!"),
    inputFunction: () => {},
  },
  refs: {
    formRef: {},
  },
  content: {
    pageLabel: "Register",
    confirmPasswordLabel: "Confirm Password",
  },
};

const loadingProps: PortalRegisterViewProps = {
  states: {
    error: "",
    loading: true,
    confirmPassword: true,
    hideInputs: false,
    loginPath: "/login",
  },
  callbacks: {
    submit: () => console.log("Submit!"),
    inputFunction: () => {},
  },
  refs: {
    formRef: {},
  },
  content: { pageLabel: "Register", confirmPasswordLabel: "Confirm Password" },
};

const slottedProps: PortalRegisterViewProps = {
  states: {
    error: "",
    loading: false,
    confirmPassword: true,
    hideInputs: false,
    loginPath: "/login",
  },
  callbacks: {
    submit: () => console.log("Submit!"),
    inputFunction: () => {},
  },
  refs: {
    formRef: {},
  },
  content: {
    pageLabel: "Register",
    confirmPasswordLabel: "Confirm Password",
    formData: (
      <div>
        <sl-input
          style={{ marginBottom: "var(--sl-spacing-x-large)" }}
          exportparts="label: input-label"
          label="Slotted Input"
          required
        ></sl-input>
        <sl-input
          exportparts="label: input-label"
          label="Slotted Input 2"
          required
        ></sl-input>
      </div>
    ),
  },
};

export const Default = () => <PortalRegisterView {...defaultProps} />;

export const RegisterWithError = () => <PortalRegisterView {...errorProps} />;

export const RegisterLoading = () => <PortalRegisterView {...loadingProps} />;

export const FieldsHidden = () => {
  return (
    <sqm-portal-register
      demoData={{
        states: {
          error: "",
          loading: true,
          confirmPassword: true,
          hideInputs: true,
          loginPath: "/login",
        },
      }}
    ></sqm-portal-register>
  );
};

export const SlottedInputs = () => <PortalRegisterView {...slottedProps} />;

export const TermsAndConditions = () => (
  <PortalRegisterView
    {...defaultProps}
    content={{
      ...defaultProps.content,
      terms: (
        <p>
          By signing up you agree to the{" "}
          <a href="https://example.com" target="_blank">
            Terms and Conditions
          </a>
        </p>
      ),
    }}
  />
);
