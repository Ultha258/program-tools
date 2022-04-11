import { isDemo } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop, State } from "@stencil/core";
import deepmerge from "deepmerge";
import { DemoData } from "../../global/demo";
import { getProps } from "../../utils/utils";
import {
  CheckboxFieldView,
  CheckboxFieldViewProps,
} from "./sqm-checkbox-field-view";
import { useCheckboxField } from "./useCheckboxField";

/**
 * @uiName Checkbox Field
 */
@Component({
  tag: "sqm-checkbox-field",
})
export class CheckboxField {
  @State()
  ignored = true;

  /**
   * @uiName Checkbox Name Attribute
   */
  @Prop() checkboxName: string;

  /**
   * @uiName Checkbox Label
   */
  @Prop() checkboxLabel: string = "By signing up you agree to the {labelLink}";

  /**
   * Used with link text if the checkbox label contains {labelLink}
   *
   * @uiName Checkbox Label Link
   */
  @Prop() checkboxLabelLink: string = "https://example.com";

  /**
   * @uiName Checkbox Label Link Text
   */
  @Prop() checkboxLabelLinkText: string = "Terms and Conditions";
  /**
   * @uiName Unchecked Error Message
   */
  @Prop() errorMessage: string = "Must be checked";

  /**
   * @uiName Checkbox Required
   */
  @Prop() checkboxRequired?: boolean = true;

  /** @undocumented */
  @Prop() demoData?: DemoData<CheckboxFieldViewProps>;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const content = {
      ...getProps(this),
    };

    const { states, callbacks } = isDemo()
      ? useCheckboxFieldDemo(this)
      : useCheckboxField();
    return (
      <CheckboxFieldView
        states={states}
        content={content}
        callbacks={callbacks}
      ></CheckboxFieldView>
    );
  }
}
function useCheckboxFieldDemo(
  props: CheckboxField
): Partial<CheckboxFieldViewProps> {
  return deepmerge(
    {
      states: {
        validationErrors: [],
        checked: false,
      },
      callbacks: {
        setChecked: () => {},
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
