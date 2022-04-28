import { isDemo } from '@saasquatch/component-boilerplate';
import { withHooks } from '@saasquatch/stencil-hooks';
import { Component, Host, h, Prop } from '@stencil/core';
import { useConditionalSection, UseConditionalSection } from './useConditonalSection';

/**
 * Only displayed for certain users. Hides content if not available.
 *
 * @uiName Conditional Section
 * @exampleGroup Advanced
 * @slots [{"name":"","title":"Section Content"}]
 * @example Conditional Section On Segment - <sqb-conditional-section condition="'vip' in user.segments">Add your conditional content here!</sqb-conditional-section>
 * @example Conditional Section On Custom Field - <sqb-conditional-section condition="user.customFields.foo = true">Add your conditional content here!</sqb-conditional-section>
 */
@Component({
  tag: 'sqb-conditional-section',
  shadow: true,
})
export class SqbConditionalSection {
  /**
   * Conditionally show child content when a user meets specified criteria.
   * Logic is created with JSONata, a user's segments, customField and email can be used.
   *
   * @uiName Condition
   * @uiWidget textArea
   * @required
   * @minLength 1
   */
  @Prop()
  condition: string;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    const props = isDemo() ? useDemoHook() : useConditionalSection({ expression: this.condition });
    const display = props.shouldDisplay ? 'contents' : 'none';
    return (
      <Host style={{ display }}>
        <slot />
      </Host>
    );
  }
}

function useDemoHook(): UseConditionalSection {
  return {
    shouldDisplay: true,
  };
}
