import { createIntl } from "@formatjs/intl";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, Prop, h } from "@stencil/core";
import { isDemo } from "@saasquatch/component-boilerplate";
import {
  LeaderboardRankView,
  LeaderboardRankViewProps,
} from "./sqm-leaderboard-rank-view";
import { useLeaderboardRank } from "./useLeaderboardRank";
import { DemoData } from "../../global/demo";
import deepmerge from "deepmerge";
import { intl } from "../../global/global";

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
   * @uiName Default Rank
   * @uiType string
   * @uiEnum ["rowNumber", "rank", "denseRank"]
   * @uiEnumNames ["Row Number", "Rank", "Dense Rank"]
   */
  @Prop() rankType: "rowNumber" | "rank" | "denseRank";

  /**
   * @uiName Rank Text
   */
  @Prop() rankText: string =
    "You are currently in {rank, selectordinal, one {#st} two {#nd} few {#rd} other {#th} } place!";
  /**
   * @uiName Leaderboard Type
   * @uiType string
   * @uiEnum ["topStartedReferrers", "topConvertedReferrers"]
   * @uiEnumNames ["Top Started Referrers", "Top Converted Referrers"]
   */
  @Prop() leaderboardType: "topStartedReferrers" | "topConvertedReferrers";
  /**
   * @uiName Unranked Text
   */
  @Prop() unrankedText: string;
  /**
   * @uiName Leaderboard Time Interval
   * @uiWidget DateRange
   * @uiWidgetOptions {"allowPastDates":true, "months": 1}
   */
  @Prop() interval: string;

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<LeaderboardRankViewProps>;

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
  props: LeaderboardRank
): LeaderboardRankViewProps {
  const rank =
    intl.formatMessage(
      { id: "rankText", defaultMessage: props.rankText },
      {
        rank: 1,
      }
    ) || "1st";
  return deepmerge(
    {
      data: {
        rank,
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
