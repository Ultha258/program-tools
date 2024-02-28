import { isDemo } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { useState } from "@saasquatch/universal-hooks";
import { Component, Host, Prop, h } from "@stencil/core";
import deepmerge from "deepmerge";
import { DemoData } from "../../../global/demo";
import { getProps } from "../../../utils/utils";
import { OtherRegionSlotView } from "../sqm-user-info-form/small-views/IndirectTaxDetailsView";
import { IndirectTaxFormView } from "./sqm-indirect-tax-form-view";
import {
  UseIndirectTaxFormResult,
  useIndirectTaxForm,
} from "./useIndirectTaxForm";
import {
  INDIRECT_TAX_PROVINCES,
  INDIRECT_TAX_SPAIN_REGIONS,
} from "../subregions";

/**
 * @uiName Indirect Tax Form
 * @exampleGroup Tax and Cash Components
 */
@Component({
  tag: "sqm-indirect-tax-form",
  shadow: true,
})
export class IndirectTaxForm {
  /**
   * Subtext shown at the top of the page, used to show the current step of the tax form.
   * @uiName Form step text
   */
  @Prop() formStep: string = "Step 2 of 4";

  /**
   * Heading text shown at the top of the page
   * @uiName Indirect tax heading text
   */
  @Prop() indirectTax: string = "Indirect Tax";

  /**
   * Text shown at the top of the page below to the indirect tax header
   * @uiName Indirect tax label text
   */
  @Prop() indirectTaxDescription: string =
    "Indirect taxes (e.g. VAT, HST, GST) are transactional based taxes collected by business and retailers on behalf of governments. Any rewards you receive may be subject to indirect taxes based on your country.";

  /**
   * Heading text for the indirect tax details section
   * @uiName Indirect tax details heading text
   */
  @Prop() indirectTaxDetails: string = "Indirect Tax Details";

  /**
   * Text shown below the indirect tax details heading text
   * @uiName Indirect tax details subtext
   */
  @Prop() indirectTaxDetailsDescription: string =
    "If you represent a business entity, you may be registered for indirect tax. If you are based in the US you are most likely not registered. Not sure if you’re registered? Contact our Support team to find out more.";

  /**
   * Text for the option indicating registration for indirect tax in a different region
   * @uiName Registered for indirect tax in a different region option text
   */
  @Prop() otherRegion: string =
    "I am registered for Indirect Tax in a different Country / Region";

  /**
   * Text for the option indicating not being registered for indirect tax
   * @uiName Not registered for indirect tax option text
   */
  @Prop() notRegistered: string = "I am not registered for Indirect Tax";

  /**
   * Label text for the country/region select input
   * @uiName Selected country/region label
   */
  @Prop() selectedRegion: string = "Country / Region of Indirect Tax";

  /**
   * Label text for the province input
   * @uiName Province input label
   */
  @Prop() province: string = "Province";

  /**
   * Label text for the indirect tax number input with a dynamic placeholder based on tax type
   * @uiName Indirect tax number input label
   */
  @Prop() indirectTaxNumber: string =
    "{taxType, select, GST {GST Number} HST {HST Number} VAT {VAT Number} CT {CT Number} SST {SST Number} GENERAL {Indirect Tax Number}}";

  /**
   * Header text for the alert when the user is identified as a partner
   * @uiName Partner identification alert header
   */
  @Prop() isPartnerAlertHeader: string =
    "An account with this email already exists with our referral program provider, impact.com";

  /**
   * Description text for the alert when the user is identified as a partner
   * @uiName Partner identification alert description
   */
  @Prop() isPartnerAlertDescription: string =
    "If you don’t recognize this referral program provider or believe this is a mistake, please contact Support or sign up for this referral program with a different email.";

  /**
   * Text for the continue button in the form
   * @uiName Continue button text
   */
  @Prop() submitButton: string = "Continue";

  /**
   * Text for the back button in the form
   * @uiName Back button text
   */
  @Prop() backButton: string = "Back";

  /**
   * Error message for the tax details input field
   * @uiName Tax details error message
   */
  @Prop() taxDetailsError: string = "This field is required";

  /**
   * Title text for a general form submission error
   * @uiName General form submission error title
   */
  @Prop() generalErrorTitle: string =
    "There was a problem submitting your information";

  /**
   * Description text for a general form submission error
   * @uiName General form submission error description
   */
  @Prop() generalErrorDescription: string =
    "Please review your information and try again. If this problem continues, contact Support.";

  /**
   * Error message for the selected region input field
   * @uiName Selected region error message
   */
  @Prop() selectedRegionError: string = "Country is required";

  /**
   * Error message for the province input field
   * @uiName Province error message
   */
  @Prop() provinceError: string = "Province is required";

  /**
   * Error message for the indirect tax number input field with a dynamic placeholder based on tax type
   * @uiName Indirect tax number error message
   */
  @Prop() indirectTaxNumberError: string =
    "{taxType, select, GST {GST Number} HST {HST Number} VAT {VAT Number} CT {CT Number} SST {SST Number} GENERAL {Indirect Tax Number}} is required";

  /**
   * Error message for the sub-region tax number input field
   * @uiName Sub-region tax number error message
   */
  @Prop() subRegionTaxNumberError: string = "Income Tax Number is required";

  /**
   * Error message for the QST tax number input field
   * @uiName QST tax number error message
   */
  @Prop() qstTaxNumberError: string = "QST Number is required";

  /**
   * Label text for the sub-region input field
   * @uiName Sub-region input label
   */
  @Prop() subRegion: string = "Sub-region";

  /**
   * Error message for the sub-region input field
   * @uiName Sub-region error message
   */
  @Prop() subRegionError: string = "Sub-region is required";

  /**
   * Label text for the QST number input field
   * @uiName QST number input label
   */
  @Prop() qstNumber: string = "QST Number";

  /**
   * Label text for the sub-region tax number input field
   * @uiName Sub-region tax number input label
   */
  @Prop() subRegionTaxNumberLabel: string = "Income Tax Number";

  /**
   * Text for the option indicating registration for QST tax
   * @uiName Registered for QST tax option text
   */
  @Prop() isRegisteredQST: string = "I am registered for QST Tax";

  /**
   * Text for the option indicating registration for sub-region income tax
   * @uiName Registered for sub-region income tax option text
   */
  @Prop() isRegisteredSubRegionIncomeTax: string =
    "I am an individual registered for Income Tax purposes in Spain, and withholding tax will apply to any payments made to me.";

  /**
   * @undocumented
   */
  @Prop() demoData?: DemoData<UseIndirectTaxFormResult>;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  getTextProps() {
    const props = getProps(this);

    return {
      ...props,
      error: {
        generalTitle: props.generalErrorTitle,
        generalDescription: props.generalErrorDescription,
        taxDetails: props.taxDetailsError,
      },
      slotText: {
        isRegisteredQST: props.isRegisteredQST,
        isRegisteredSubRegionIncomeTax: props.isRegisteredSubRegionIncomeTax,
        qstNumber: props.qstNumber,
        subRegion: props.subRegion,
        subRegionTaxNumberLabel: props.subRegionTaxNumberLabel,
        selectedRegion: props.selectedRegion,
        province: props.province,
        indirectTaxNumber: props.indirectTaxNumber,
        error: {
          subRegionTaxNumber: props.subRegionTaxNumberError,
          selectedRegion: props.selectedRegionError,
          province: props.provinceError,
          indirectTaxNumber: props.indirectTaxNumberError,
          subRegion: props.subRegionError,
          qstNumber: props.qstTaxNumberError,
        },
      },
    };
  }

  render() {
    const props = isDemo()
      ? useDemoIndirectTaxForm(this)
      : useIndirectTaxForm(this);

    const registeredInDifferentCountryDetailsSlot = (
      <OtherRegionSlotView
        states={{
          hide: props.states.formState.checked !== "otherRegion",
          disabled: props.states.disabled || props.states.isPartner,
          formState: props.slotProps.formState,
          loading: props.states.loading,
        }}
        callbacks={props.callbacks}
        data={{
          esRegions: props.data.esRegions,
          countries: props.data.countries,
          provinces: props.data.provinces,
        }}
        text={props.text.slotText}
      />
    );

    return (
      <Host>
        <IndirectTaxFormView
          callbacks={props.callbacks}
          states={props.states}
          refs={props.refs}
          text={props.text}
          slots={{
            registeredInDifferentCountryDetailsSlot,
          }}
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
      states: {
        disabled: false,
        loading: false,
        isPartner: false,
        errors: {},
        formState: {
          checked: option,
          errors: {
            general: false,
          },
        },
      },
      callbacks: {
        onFormChange: (field: string, e: CustomEvent) =>
          console.log({ field, e }),
        onBack: () => {},
        onSubmit: async () => {},
        onQstToggle: () => {},
        onSpainToggle: () => {},
        onChange: setOption,
        setCountrySearch: (c) => console.log(c),
      },
      data: {
        esRegions: INDIRECT_TAX_SPAIN_REGIONS,
        countries: [
          {
            countryCode: "CA",
            displayName: "Canada",
          },
          {
            countryCode: "ES",
            displayName: "Spain",
          },
          {
            countryCode: "UK",
            displayName: "United Kingdom",
          },
          {
            countryCode: "US",
            displayName: "United States",
          },
        ],
        provinces: INDIRECT_TAX_PROVINCES,
      },
      text: props.getTextProps(),
      refs: {
        formRef: { current: null },
      },
      slotProps: {
        formState: {
          errors: {},
        },
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
