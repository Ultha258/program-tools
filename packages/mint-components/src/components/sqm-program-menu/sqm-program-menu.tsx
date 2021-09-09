import { Component, h, Host, Prop, State } from "@stencil/core";
import { withHooks } from "@saasquatch/stencil-hooks";
import { useProgramMenu } from "./useProgramMenu";
import { getProps } from "../../utils/utils";

/**
 * @uiName Portal Menu
 */
@Component({
  tag: "sqm-program-menu",
  styleUrl: "sqm-program-menu.scss",
  shadow: false,
})
export class ProgramMenu {
  @State()
  ignored = true;

  /**
   * @uiName Label on the header menu
   */
  @Prop() menuLabel: string;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    const { data, ref } = useProgramMenu(getProps(this));
    // const props = isDemo()
    //   ? useProgramMenuDemo(getProps(this))
    //   : useProgramMenu(getProps(this));
    return (
      <Host style={{ display: "contents" }}>
        <sl-select
          style={{ paddingBottom: "var(--sl-spacing-large)" }}
          value={data.programId}
          ref={(r) => (ref.current = r)}
        >
          <slot />
        </sl-select>
      </Host>
    );
  }
}
