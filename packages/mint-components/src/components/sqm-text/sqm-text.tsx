import { Component, h, State } from "@stencil/core";
import { withHooks } from "@saasquatch/stencil-hooks";

const vanillaStyle = `
  sqm-text {
    display: block;
  }

  sqm-text h1 {
    font-size: var(--sl-font-size-xxx-large);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-800);
    margin: 0;
  }

  sqm-text h2 {
    font-size: var(--sl-font-size-xx-large);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-800);
    margin: 0;
  }

  sqm-text h3 {
    font-size: var(--sl-font-size-x-large);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-800);
    margin: 0;
  }

  sqm-text h4 {
    font-size: var(--sl-font-size-large);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-800);
    margin: 0;
  }

  sqm-text p {
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-800);
    margin: 0;
  }

  sqm-text sub {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-400);
    margin: 0;
  }
`;

/**
 * @uiName Text
 * @slots [{"name":"", "title":"Text"}]
 * @slotEditor richText
 * @canvasRenderer always-replace
 * @exampleGroup Typography
 * @example H1 - <h1>H1 Header Text</h1>
 * @example H2 - <h2>H2 Header Text</h2>
 * @example H3 - <h3>H3 Header Text</h3>
 * @example H4 - <h4>H4 Header Text</h4>
 * @example Paragraph - <p>Paragraph Text</p>
 */
@Component({
  tag: "sqm-text",
  shadow: false,
})
export class Text {
  @State()
  ignored = true;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  componentWillLoad() {}

  render() {
    return (
      <div>
        <style>{vanillaStyle}</style>
        <slot />
      </div>
    );
  }
}
