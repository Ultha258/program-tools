import { h, Component, Prop, State, Element, Listen } from "@stencil/core";
import { API } from "../../services/WidgetHost";
import { pathToRegexp } from "path-to-regexp";
import { css } from "emotion";

/**
 * @uiName Stats Container
 * @canvasRenderer always-replace
 * @slots [{"name":"","title":"Stats"}]
 */
@Component({
  tag: "sqh-stats-container",
  styleUrl: "stats-container.scss",
})
export class StatsContainer {
  @Element() container: HTMLElement;
  /**
   * Hide the component
   *
   * @uiName Is Hidden
   */
  @Prop() ishidden: boolean = false;
  /**
   * Configure the padding top of the container
   *
   * @uiName Padding Top
   * @default "0"
   */
  @Prop() paddingtop: string;
  /**
   * Configure the padding bottom of the container
   *
   * @uiName Padding Bottom
   * @default "0"
   */
  @Prop() paddingbottom: string;

  @State() loading: boolean;

  @State() stats: object;

  constructor() {
    this.loading = true;
  }

  componentWillLoad() {
    if (!this.ishidden) {
      return API.graphql
        .getStats()
        .then((res) => {
          this.stats = {
            referralsCount: res.referralsCount.totalCount,
            referralsMonth: res.referralsMonth.totalCount,
            referralsWeek: res.referralsWeek.totalCount,
            rewardsCount: res.rewardsCount.totalCount,
            rewardsMonth: res.rewardsMonth.totalCount,
            rewardsWeek: res.rewardsWeek.totalCount,
            rewardBalance: res.rewardBalances,
            rewardBalanceGlobal: res.rewardBalancesGlobal,
          };
          this.loading = false;
        })
        .then(() => {
          const children = Array.from(
            this.container.querySelectorAll("[stattype]")
          );
          children.map((child) => {
            this.setStatValue(child);
          });
        })
        .catch((e) => {
          this.onError(e);
        });
    }
  }

  @Listen("statTypeUpdated")
  statTypeUpdatedHandler(event: CustomEvent) {
    this.setStatValue(event.detail);
  }

  @Listen("statAdded")
  statAddedHandler(event: CustomEvent) {
    if (this.stats) this.setStatValue(event.detail);
  }

  statPaths = [
    "/rewardBalance/:type/:unit/:valuetype?/:isGlobal?",
    "/:statName",
  ];

  statPathRegexp = this.statPaths.map((path) => {
    const keys = [];
    const regexp = pathToRegexp(path, keys);
    return { regexp, keys };
  });

  setStatValue(child: HTMLElement | Element) {
    const path = child.getAttribute("stattype");
    const stat = this.getStatFromPath(path);
    child.setAttribute("statvalue", `${stat}`);
    return child;
  }

  getStatFromPath(path) {
    const statPath = this.statPathRegexp.find((stat) => stat.regexp.test(path));
    if (!statPath) return 0;
    const { keys, regexp } = statPath;
    const res = regexp.exec(path);
    const statVariables = {};
    keys.forEach((k, i) => (statVariables[k.name] = res[i + 1]));
    return this.getStatValue(statVariables);
  }

  getStatValue(statVariables) {
    if (statVariables.statName) return this.stats[statVariables.statName] || 0;
    return this.getRewardBalance(statVariables);
  }

  getRewardBalance(statVariables) {
    const { type, unit, valuetype, isGlobal } = statVariables;
    // passing in CASH/USD as CASH_USD into this webcomponent so pathToRegexp doesn't split it and it stays all in unit.
    // this converts the _ back to / so it matches the unit from the backend.
    // possibly change the unit in the backend to avoid this?
    const newUnit = unit.replace(/_/, "/");
    const rewardBalance = this.stats[
      isGlobal ? "rewardBalanceGlobal" : "rewardBalance"
    ].find((rb) => rb.type === type && rb.unit === newUnit);
    if (!rewardBalance) return 0;
    if (valuetype) return rewardBalance[valuetype];
    return rewardBalance.value;
  }

  onError(e: Error) {
    console.log("Error loading via GraphQL.", e);
    this.loading = false;
  }

  render() {
    const containerStyle = css`
      display: ${this.ishidden ? "none" : "inherit"};
      padding-top: ${this.paddingtop}px;
      padding-bottom: ${this.paddingbottom}px;
    `;

    return (
      <div class={containerStyle}>
        <slot />
      </div>
    );
  }
}
