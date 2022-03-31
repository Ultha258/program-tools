import { isDemo } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop, State } from "@stencil/core";
import deepmerge from "deepmerge";
import { DemoData } from "../../global/demo";
import { RequiredPropsError } from "../../utils/RequiredPropsError";
import { getMissingProps, getProps } from "../../utils/utils";
import { InputFieldView, InputFieldViewProps } from "./sqm-input-field-view";
import { useInputField } from "./useInputField";

/**
 * @uiName Input Field
 */
@Component({
  tag: "sqm-input-field",
})
export class InputField {
  @State()
  ignored = true;

  /**
   * @uiName Input name attribute
   */
  @Prop() fieldName: string;

  /**
   * @uiName Input label
   */
  @Prop() fieldLabel: string;

  /**
   * @uiName Input Type
   * @uiType string
   * @uiEnum ["text", "date", "tel"]
   * @uiEnumNames ["Text", "Date", "Phone Number"]
   */
  @Prop() fieldType: "text" | "date" | "tel" = "text";

  /**
   * @uiName Empty error message
   */
  @Prop() errorMessage: string = "Cannot be empty";

  /**
   * @uiName Optional
   */
  @Prop() fieldOptional?: boolean = false;

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<InputFieldViewProps>;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const content = {
      ...getProps(this),
    };

    const missingProps = getMissingProps([
      {
        attribute: "field-name",
        value: this.fieldName,
      },
    ]);

    if (!isDemo() && missingProps) {
      return (
        <RequiredPropsError
          missingProps={missingProps}
          heading={"An error occured while loading this form"}
          subheading={
            "A technical problem prevented this input field from loading. Please contact us with the link to this page."
          }
          description={"Values for the following attributes are missing:"}
        />
      );
    }
    const { states } = isDemo() ? useInputFieldDemo(this) : useInputField();
    return <InputFieldView states={states} content={content}></InputFieldView>;
  }
}
function useInputFieldDemo(props: InputField): Partial<InputFieldViewProps> {
  return deepmerge(
    {
      states: {
        validationErrors: [],
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
