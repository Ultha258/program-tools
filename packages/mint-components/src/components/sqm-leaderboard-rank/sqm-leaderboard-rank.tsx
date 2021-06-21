import { createIntl } from "@formatjs/intl";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, Prop, h } from "@stencil/core";
import { isDemo } from "@saasquatch/component-boilerplate";
import {
  LeaderboardRankView,
  LeaderboardRankViewProps,
} from "./sqm-leaderboard-rank-view";
import { LeaderboardRankProps, useLeaderboardRank } from "./useLeaderboardRank";

/**
 * @uiName Leaderboard Rank
 */
@Component({
  tag: "sqm-leaderboard-rank",
  styleUrl: "sqm-leaderboard-rank.scss",
  shadow: true,
})
export class LeaderboardRank {
  /**
   * @uiName Default rank
   */
  @Prop() rankType: "rowNumber" | "rank" | "denseRank";
  @Prop() rankText: string;
  /**
   * @uiName Leaderboard type
   */
  @Prop() leaderboardType: "topStartedReferrers" | "topConvertedReferrers";
  @Prop() unrankedText: string;
  /**
   * @uiName Leaderboard time interval
   */
  @Prop() interval: string;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    const props = isDemo()
      ? useLeaderboardRankDemo(this)
      : useLeaderboardRank(this);
    return <LeaderboardRankView {...props} />;
  }
}

function useLeaderboardRankDemo(
  props: LeaderboardRankProps
): LeaderboardRankViewProps {
  const intl = createIntl({
    locale: "en",
  });

  const rank =
    intl.formatMessage(
      { id: "rankText", defaultMessage: props.rankText },
      {
        rank: 1,
      }
    ) || "1st";
  return {
    data: {
      rank,
    },
  };
}
