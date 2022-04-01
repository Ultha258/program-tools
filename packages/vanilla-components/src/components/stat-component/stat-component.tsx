import {
  h,
  Component,
  Prop,
  Event,
  EventEmitter,
  Element,
  Watch,
} from "@stencil/core";
import { css } from "emotion";

/**
 * @uiName Stat Component
 */
@Component({
  tag: "sqh-stat-component",
  styleUrl: "stat-component.scss",
})
export class StatComponent {
  @Element() elem: HTMLElement;
  /**
   * Hide the component
   *
   * @uiName Is Hidden
   */
  @Prop() ishidden: boolean;
  /**
   * Type of stat being displayed. e.g /rewardsCount
   *
   * @uiName Stat Type
   * @uiGroup stat
   */
  @Prop() stattype: string;
  /**
   * Value shown inside stat
   *
   * @uiName Stat Value
   * @uiGroup stat
   */
  @Prop() statvalue: string;
  /**
   * Description shown underneath stat value
   *
   * @uiName Stat Description
   * @uiGroup stat
   */
  @Prop() statdescription: string;
  /**
   * Text color of the stat
   *
   * @uiName Stat Color
   * @uiGroup stat
   */
  @Prop() statcolor: string;

  @Event() statTypeUpdated: EventEmitter;
  @Event() statAdded: EventEmitter;

  componentWillLoad() {
    this.statAddedHandler(this.elem);
  }

  @Watch("stattype")
  stattypeHandler(newValue: string, oldValue: string) {
    if (newValue !== oldValue) this.statTypeUpdatedHandler(this.elem);
  }

  statAddedHandler(stat: HTMLElement) {
    this.statAdded.emit(stat);
  }

  statTypeUpdatedHandler(stat: HTMLElement) {
    this.statTypeUpdated.emit(stat);
  }

  render() {
    const clz = css`
      color: ${this.statcolor};
    `;

    return (
      !this.ishidden && (
        <div class={clz}>
          <div class="stat-value">{this.statvalue}</div>
          <div class="stat-description">{this.statdescription}</div>
        </div>
      )
    );
  }
}
