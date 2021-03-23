import { withHooks } from '@saasquatch/stencil-hooks';
import { Component, Prop, h } from '@stencil/core';
import { isDemo } from '../../utils/isDemo';
import { LeaderboardRankView, LeaderboardRankViewProps } from './leaderboard-rank-view';
import { LeaderboardRankProps, useLeaderboardRank } from './useLeaderboardRank';

/**
 * @uiName Leaderboard Rank
 */
@Component({
  tag: 'sqm-leaderboard-rank',
  styleUrl: 'leaderboard-rank.scss',
  shadow: true,
})
export class LeaderboardRank {
  /**
   * @uiName Default rank
   */
  @Prop() rank?: string;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    const props = isDemo() ? useLeaderboardRankDemo(this) : useLeaderboardRank(this);;
    return <LeaderboardRankView {...props} />;
  }
}

function useLeaderboardRankDemo(props: LeaderboardRankProps): LeaderboardRankViewProps {
  return {
    rank: props.rank ? props.rank : "1st"
  };
}
