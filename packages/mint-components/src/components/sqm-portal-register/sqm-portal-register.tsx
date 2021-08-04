import { isDemo, navigation } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop, State } from "@stencil/core";
import deepmerge from "deepmerge";
import { DemoData } from "../../global/demo";
import {
  PortalRegisterView,
  PortalRegisterViewProps,
} from "./sqm-portal-register-view";
import { usePortalRegister } from "./usePortalRegister";

/**
 * @uiName Portal Register
 */
@Component({
  tag: "sqm-portal-register",
  shadow: true,
})
export class PortalRegister {
  @State()
  ignored = true;

  /**
   * @uiName Page navigated to after registration
   */
  @Prop()
  nextPage = "/";

  /**
   * @uiName Label for email field
   */
  @Prop()
  emailLabel = "Email";

  /**
   * @uiName Label for password field
   */
  @Prop()
  passwordLabel = "Password";

  /**
   * @uiName Label for submit button
   */
  @Prop()
  submitLabel = "Register";

  /**
   * @uiName Label for login navigation button
   */
  @Prop()
  loginLabel = "Sign in";

  /**
   * @uiName Show confirm password field
   */
  @Prop()
  confirmPassword: boolean = false;

  /**
   * @uiName Hide default input fields to use custom fields
   */
  @Prop()
  hideInputs: boolean = false;

  /**
   * @uiName Heading label
   */
  @Prop()
  pageLabel: string = "Register";

  /** @undocumented */
  @Prop() demoData?: DemoData<PortalRegisterViewProps>;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const { states, callbacks, refs } = isDemo()
      ? useRegisterDemo(this)
      : usePortalRegister(this);
    const content = {
      formData: <slot name="formData"></slot>,
      secondaryButton: (
        <slot name="secondaryButton">
          <sl-button
            type="text"
            disabled={states.loading}
            onClick={() => navigation.push("/login")}
          >
            {this.loginLabel}
          </sl-button>
        </slot>
      ),
      emailLabel: this.emailLabel,
      passwordLabel: this.passwordLabel,
      submitLabel: this.submitLabel,
      pageLabel: this.pageLabel,
    };

    return (
      <PortalRegisterView
        states={states}
        callbacks={callbacks}
        content={content}
        refs={refs}
      ></PortalRegisterView>
    );
  }
}
function useRegisterDemo(
  props: PortalRegister
): Pick<PortalRegisterViewProps, "states" | "callbacks" | "refs"> {
  return deepmerge(
    {
      states: {
        error: "",
        loading: false,
        confirmPassword: true,
        hideInputs: false,
      },
      callbacks: {
        submit: async (_event) => {
          console.log("submit");
        },
        inputFunction: () => {},
      },
      refs: {
        formRef: {},
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
