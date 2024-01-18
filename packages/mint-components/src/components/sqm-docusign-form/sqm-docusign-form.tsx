import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Host, Prop, State } from "@stencil/core";
import deepmerge from "deepmerge";
import { DemoData } from "../../global/demo";
import { UserNameViewProps } from "../sqm-tax-and-cash/sqm-tax-and-cash-view";

import { LoadingSkeleton } from "../../tables/TableSlots";
import { useTaxForm } from "../sqm-tax-form/useTaxForm";

/**
 * @uiName Tax And Cash
 * @exampleGroup Common Components
 * @example User Name Display - <sqm-user-name fallback="Anonymous User" loading-text="..."></sqm-user-name>
 */
@Component({
  tag: "sqm-docusign-form",
  shadow: false,
})
export class TaxForm {
  @State() ignored = true;

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<UserNameViewProps>;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    // const props = isDemo() ? useUserNameDemo(this) : useUserName();
    const props = useTaxForm();

    console.log({ props });
    if (props.loading) return <LoadingSkeleton />;
    return (
      <Host>
        Step 2<sl-button onClick={() => props.setStep("/1")}>back</sl-button>
        <sl-button onClick={() => props.setStep("/3")}>continue</sl-button>
      </Host>
    );
  }
}

function useTaxAndCashDemo(props: TaxForm) {
  return deepmerge({}, props.demoData || {}, { arrayMerge: (_, a) => a });
}
