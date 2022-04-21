import { Component, h, Host, Prop } from "@stencil/core";
import { EmptyStateView } from "./sqm-empty-view";

/**
 * @uiName Empty State Content
 * @validParents ["sqm-referral-table","sqm-rewards-table","sqm-leaderboard"]
 */
@Component({
  tag: "sqm-empty",
  shadow: true,
})
export class HeroImage {
  /**
   * @uiWidget ImageUpload
   * @uiName Empty State Image Link  */
  @Prop() emptyStateImage: string;

  /** @uiName Empty State Title  */
  @Prop() emptyStateHeader: string;

  /** @uiName Empty State Text  */
  @Prop() emptyStateText: string;

  render() {
    return (
      <Host slot="empty">
        <EmptyStateView
          emptyStateImage={this.emptyStateImage}
          emptyStateHeader={this.emptyStateHeader}
          emptyStateText={this.emptyStateText}
        />
      </Host>
    );
  }
}
