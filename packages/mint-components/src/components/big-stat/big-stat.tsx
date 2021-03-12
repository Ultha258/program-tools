import { Component, h } from '@stencil/core';
import { BigStatView } from './big-stat-view';
import { useBigStat } from './useBigStat';

/**
 *
 *
 * @slot the description of the component
 */
@Component({
  tag: 'sqm-big-stat',
  styleUrl: 'big-stat.css',
  shadow: true,
})
export class BigStat {
  render() {
    return (
      <BigStatView {...useBigStat()}>
        <slot />
      </BigStatView>
    );
  }
}
