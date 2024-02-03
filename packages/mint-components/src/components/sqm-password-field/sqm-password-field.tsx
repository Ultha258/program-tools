import { isDemo } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { useState } from "@saasquatch/universal-hooks";
import { Component, h, Prop, State, VNode } from "@stencil/core";
import deepmerge from "deepmerge";
import { RegistrationFormState } from "../sqm-portal-registration-form/useRegistrationFormState";
import { validateNewPassword } from "./passwordValidation";
import {
  PortalPasswordFieldViewProps,
  PortalResetPasswordView,
} from "./sqm-password-field-view";
import { usePasswordField } from "./usePasswordField";

export interface PasswordFieldViewDemoProps {
  initValue: string;
  states: {
    enableValidation: boolean;
    registrationFormState: RegistrationFormState;
    content: {
      fieldLabel: string;
    };
  };
}

/**
 * @uiName Form Password Field
 * @validParents ["sqm-portal-register","sqm-portal-registration-form"]
 * @exampleGroup Microsite Components
 * @example Form Password Field - <sqm-password-field field-label="Password"></sqm-password-field>
 */
@Component({
  tag: "sqm-password-field",
})
export class PortalPasswordField {
  @State()
  ignored = true;

  /**
   * Label for password field
   *
   * @uiName Password label
   */
  @Prop()
  fieldLabel: string = "Password";

  /**
   * Disable live password validation
   * @uiName Disable validation
   */
  @Prop() disableValidation: boolean = false;

  @Prop() meetsRequirementsText: string = "Password has met all requirements";

  @Prop() doesNotMeetRequirementsText: string =
    "Password must meet the following requirements:";

  @Prop() minError: string = "be a minimum of 8 characters";
  @Prop() uppercaseError: string = "contain at least 1 uppercase character";
  @Prop() lowercaseError: string = "contain at least 1 lowercase character";
  @Prop() hasError: string = "contain at least 1 number or symbol";

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: PasswordFieldViewDemoProps;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const { states, callbacks } = isDemo()
      ? usePasswordFieldDemo(this)
      : usePasswordField(this);
    return <PortalResetPasswordView states={states} callbacks={callbacks} />;
  }
}

function usePasswordFieldDemo(
  props: PortalPasswordField
): PortalPasswordFieldViewProps {
  const [dynamicValidation, setDynamicValidation] = useState<VNode | string>(
    ""
  );
  const [lastValidated, setLastValidated] = useState<string>("");

  if (props.demoData && lastValidated != props?.demoData?.initValue) {
    const validation = validateNewPassword(
      props?.demoData?.initValue || "",
      props
    );
    setDynamicValidation(props?.demoData?.initValue === "" ? "" : validation);
    setLastValidated(props?.demoData?.initValue);
  }

  function onInput(input: Event) {
    const validation = validateNewPassword(
      (input.target as HTMLInputElement).value,
      props
    );
    setDynamicValidation(validation);
  }

  return deepmerge(
    {
      states: {
        enableValidation: !props.disableValidation,
        dynamicValidation,
        registrationFormState:
          props?.demoData?.states?.registrationFormState || {},
        content: {
          fieldLabel: props.fieldLabel,
        },
      },
      callbacks: {
        onInput,
      },
    },
    props?.demoData?.states || {},
    { arrayMerge: (_, a) => a }
  );
}
