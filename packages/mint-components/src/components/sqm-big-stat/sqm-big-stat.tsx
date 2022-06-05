import { Component, h, Prop, State } from "@stencil/core";
import { withHooks } from "@saasquatch/stencil-hooks";
import { BigStatView, BigStatViewProps } from "./sqm-big-stat-view";
import { useBigStat } from "./useBigStat";
import { useDemoBigStat } from "./useDemoBigStat";
import { isDemo, useHost } from "@saasquatch/component-boilerplate";
import { DemoData } from "../../global/demo";
import { FontSize } from "../../global/mixins";

/**
 *
 * @uiName Big Stat
 * @slot the description of the component
 */
@Component({
  tag: "sqm-big-stat",
  shadow: true,
})
export class BigStat {
  /**
   * Select what type of stat to display. Manual paths are also supported.
   *
   * @uiWidget StatTypeSelectWidget
   * @uiName Stat Type
   * @uiOptions {"version": 1.1}
   */
  @Prop() statType: string;

  /**
   * @uiName Flex Reverse - controls the order of the stat value & description column
   */
  @Prop() flexReverse?: boolean = false;
  /**
   * @uiName Alignment - controls the alignment of the flexbox
   * @uiType string
   * @uiEnum ["left", "right", "center"]
   * @uiEnumNames ["Left", "Right", "Center"]
   */
  @Prop() alignment?: "left" | "right" | "center";

  /**
   * @uiName Stat Color
   * @uiWidget color
   */
  @Prop() statColor?: string;

  /**
   * @uiName Stat Description Color
   * @uiWidget color
   */
  @Prop() statDescriptionColor?: string;

  /**
   * @uiName Stat Font Size
   * @uiType string
   * @uiEnum ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large"]
   * @uiEnumNames ["None", "XXX-Small", "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large", "XXXX-Large"]
   */
  @Prop() statFontSize?: FontSize = "x-large";

  /**
   * @uiName Stat Description Font Size
   * @uiType string
   * @uiEnum ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large"]
   * @uiEnumNames ["None", "XXX-Small", "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large", "XXXX-Large"]
   */
  @Prop() statDescriptionFontSize?: FontSize = "small";

  /**
   * The ID of the program that is used to scope stats. Defaults to the program context when no ID is specified.
   *
   * @uiName Program ID
   */
  @Prop() programId?: string;

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<BigStatViewProps>;

  @State()
  ignored = true;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    const { props, label } = isDemo() ? useDemoBigStat(this) : useBigStat(this);
    console.log(props);
    const host = useHost();
    const hasLabel = !!host.innerHTML?.trim();
    const labelSlot = <slot name="label">{hasLabel ? <slot /> : label}</slot>;

    return <BigStatView {...props} labelSlot={labelSlot}></BigStatView>;
  }
}
