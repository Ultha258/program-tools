import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, Host, Prop, h } from "@stencil/core";
import { getProps } from "../../../utils/utils";
import {
  indirectDetailsSlotText,
  indirectTaxFormText,
} from "../sqm-user-info-form/defaultTextCopy";
import {
  IndirectDetailsSlotView,
  OtherRegionSlotView,
} from "../sqm-user-info-form/small-views/IndirectTaxDetailsView";
import {
  IndirectTaxFormView,
  IndirectTaxFormViewProps,
} from "./sqm-indirect-tax-form-view";
import { useIndirectTaxForm } from "./useIndirectTaxForm";
import { DemoData } from "../../../global/demo";
import deepmerge from "deepmerge";
import { useState } from "@saasquatch/universal-hooks";
import { isDemo } from "@saasquatch/component-boilerplate";

@Component({
  tag: "sqm-indirect-tax-form",
  shadow: true,
})
export class IndirectTaxForm {
  @Prop() formStep: string = indirectTaxFormText.formStep;
  @Prop() indirectTax: string = indirectTaxFormText.indirectTax;
  @Prop() indirectTaxDescription: string =
    indirectTaxFormText.indirectTaxDescription;
  @Prop() indirectTaxDetails: string = indirectTaxFormText.indirectTaxDetails;
  @Prop() indirectTaxDetailsDescription: string =
    indirectTaxFormText.indirectTaxDetailsDescription;
  @Prop() hstCanada: string = indirectTaxFormText.hstCanada;
  @Prop() otherRegion: string = indirectTaxFormText.otherRegion;
  @Prop() notRegistered: string = indirectTaxFormText.notRegistered;
  @Prop() submitButton: string = indirectTaxFormText.submitButton;
  @Prop() backButton: string = indirectTaxFormText.backButton;
  @Prop() taxDetailsError: string = indirectTaxFormText.error.taxDetails;
  @Prop() generalErrorTitle: string = indirectTaxFormText.error.generalTitle;
  @Prop() generalErrorDescription: string =
    indirectTaxFormText.error.generalDescription;

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<IndirectTaxFormViewProps>;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const props = isDemo()
      ? useDemoIndirectTaxForm(getProps(this))
      : useIndirectTaxForm(getProps(this));

    console.log({ props });

    const hstSlot = (
      <IndirectDetailsSlotView
        states={{
          formState: {
            ...props.formState,
            errors: props.errors,
          },
          loading: props.loading,
          hide: props.option !== "hstCanada",
        }}
        data={{ countries: props.countries }}
        text={indirectDetailsSlotText}
      ></IndirectDetailsSlotView>
    );

    const otherRegionSlot = (
      <OtherRegionSlotView
        states={{
          hide: props.option !== "otherRegion",
          formState: {
            ...props.formState,
            errors: props.errors,
          },
          loading: props.loading,
        }}
        data={{ countries: props.countries }}
        text={indirectDetailsSlotText}
      />
    );

    return (
      <Host>
        <IndirectTaxFormView
          callbacks={{
            onBack: props.onBack,
            onChange: props.onChange,
            onSubmit: props.onSubmit,
          }}
          states={{
            formState: { checked: props.option },
            loading: props.loading,
            registeredInCanadaDetailsSlot: hstSlot,
            registeredInDifferentCountryDetailsSlot: otherRegionSlot,
            disabled: props.loading,
          }}
          //@ts-ignore
          text={props.text}
          refs={{ formRef: props.formRef }}
        />
      </Host>
    );
  }
}

function useDemoIndirectTaxForm(
  props: IndirectTaxForm
): ReturnType<typeof useIndirectTaxForm> {
  const [option, setOption] = useState(null);

  return deepmerge(
    {
      loading: false,
      countries: [{ countryCode: "CA", displayName: "Canada" }],
      text: {
        ...props,
        error: {
          generalTitle: props.generalErrorTitle,
          generalDescription: props.generalErrorDescription,
          taxDetails: props.taxDetailsError,
        },
      },
      errors: {},
      onBack: () => {},
      onSubmit: async () => {},
      submitDisabled: false,
      option: option,
      onChange: setOption,
      formRef: { current: null },
      formState: {
        countryCode: "CA",
        indirectTaxNumber: "1234",
        province: "BC",
        vatNumber: undefined,
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
