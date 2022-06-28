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
 * @uiName Form Input Field
 * @validParents ["sqm-portal-register","sqm-portal-registration-form"]
 * @exampleGroup Microsite Components
 * @example Form Input Field - <sqm-input-field slot="formData" input-label="Field Label" field-type="text" error-message="Cannot be empty"></sqm-input-field>
 */
@Component({
  tag: "sqm-input-field",
})
export class InputField {
  @State()
  ignored = true;

  /**
   * Used as the key of the inputs value in form data.
   * 
   * @uiName Input Name Attribute
   */
  @Prop() fieldName: string;

  /**
   * @uiName Input Label
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
   * @uiName Required Error Message
   */
  @Prop() errorMessage: string = "Cannot be empty";

  /**
   * @uiName Optional
   * @default
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
