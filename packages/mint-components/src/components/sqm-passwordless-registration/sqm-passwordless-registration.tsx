import { isDemo, navigation } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop, State } from "@stencil/core";
import deepmerge from "deepmerge";
import { DemoData } from "../../global/demo";
import {
  PasswordlessRegistrationView,
  PasswordlessRegistrationViewProps,
} from "./sqm-passwordless-registration-view";

/**
 * @uiName Microsite Registration
 * @slots [{"name":"top-slot","title":"Widget Content"},{"name":"bottom-slot","title":"Widget Content"}]
 */
@Component({
  tag: "sqm-passwordless-registration",
  shadow: true,
})
export class PasswordlessRegistration {
  @State()
  ignored = true;

  /**
   * Redirect participants to this page after they successfully register.
   *
   * @uiName Registration Redirect
   * @uiWidget pageSelect
   */
  @Prop()
  nextPage: string = "/";

  /**
   * @uiName Email Field Label
   */
  @Prop()
  emailLabel: string = "Email";

  /**
   * @uiName First Name Field Label
   */
  @Prop()
  firstNameLabel: string = "First Name";

  /**
   * @uiName Last Name Field Label
   */
  @Prop()
  lastNameLabel: string = "Last Name";

  /**
   * @uiName Register Button Text
   */
  @Prop()
  registerLabel: string = "Start Referring";

  /**
   * @uiName Include name fields
   */
  @Prop() includeName: boolean = false;

  /**
   * @uiName Include name fields
   */
  @Prop() hidePoweredBy: boolean = false;

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<PasswordlessRegistrationViewProps>;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const { states, callbacks } = useRegistrationDemo(this);
    // isDemo() ? useRegistrationDemo(this) : usePasswordlessRegistration(this);
    const content = {
      emailLabel: this.emailLabel,
      registerLabel: this.registerLabel,
      firstNameLabel: this.firstNameLabel,
      lastNameLabel: this.lastNameLabel,
      includeName: this.includeName,
      hidePoweredBy: this.hidePoweredBy,

      // slots
      topSlot: <slot name="top-slot" />,
      bottomSlot: <slot name="bottom-slot" />,
    };
    return (
      <PasswordlessRegistrationView
        states={states}
        callbacks={callbacks}
        content={content}
      ></PasswordlessRegistrationView>
    );
  }
}
function useRegistrationDemo(
  props: PasswordlessRegistration
): Partial<PasswordlessRegistrationViewProps> {
  return deepmerge(
    {
      states: {
        error: "",
        loading: false,
        forgotPasswordPath: "/forgotPassword",
        registerPath: "/register",
      },
      callbacks: {
        submit: async (_event) => {
          console.log("submit");
        },
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
