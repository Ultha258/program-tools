import { Component, Prop, Event, EventEmitter, Element, Watch } from '@stencil/core';

@Component({
  tag: 'sqh-stat-component',
  styleUrl: 'stat-component.scss'
})
export class StatComponent {
  @Element() elem: HTMLElement;
  @Prop() ishidden: boolean = false;
  @Prop() stattype: string;
  @Prop() rewardbalancepath: string;
  @Prop() statvalue: string = "0";
  @Prop() statdescription: string;
  @Prop() statcolor: string;
  @Event() statTypeUpdated: EventEmitter;
  @Event() statAdded: EventEmitter;

  componentWillLoad() {
    this.statAddedHandler(this.elem);
  }

  @Watch('stattype')
  stattypeHandler(newValue: string, oldValue: string) {
    if (newValue !== oldValue) this.statTypeUpdatedHandler(this.elem)
  }

  statAddedHandler(stat: HTMLElement) {
    this.statAdded.emit(stat);
  }

  statTypeUpdatedHandler(stat: HTMLElement) {
    this.statTypeUpdated.emit(stat);
  }

  render() {
    return (
      this.ishidden
      ? ''
      : (
        <div style={{color: this.statcolor}}>
          <div class="stat-value">{this.statvalue}</div>
          <div class="stat-description">{this.statdescription}</div>
        </div>
      )
    );
  }
}