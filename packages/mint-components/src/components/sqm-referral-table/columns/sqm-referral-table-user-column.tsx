import { Component, h, Host, Method, Prop } from "@stencil/core";
import { useRequestRerender } from "../re-render";
import { ReferralTableColumn } from "./ReferralTableColumn";

@Component({
  tag: "sqm-referral-table-user-column",
  styleUrl: "../sqm-referral-table.scss",
  shadow: true,
})
export class ReferralTableUserColumn implements ReferralTableColumn {
  @Prop() columnTitle: string = "Customer";
  /**
   * @uiName Name displayed for anonymous users
   */
  @Prop() anonymousUser: string = "Anonymous User";
  /**
   * @uiName Name displayed for deleted users
   */
  @Prop() deletedUser: string = "Deleted User";

  @Method()
  async renderCell(data: Referral) {
    let name: string;
    if (!data) {
      name = this.deletedUser;
    } else if (!data?.referredUser?.firstName && !data.referredUser?.lastName) {
      name = this.anonymousUser;
    } else {
      name = `${data?.referredUser?.firstName} ${data?.referredUser?.lastName}`;
    }

    return (
      <sqm-referral-table-user-cell name={name}></sqm-referral-table-user-cell>
    );
  }

  @Method()
  async renderLabel() {
    return this.columnTitle;
  }

  render() {
    useRequestRerender([
      this.deletedUser,
      this.anonymousUser,
      this.columnTitle,
    ]);
    return <Host style={{ display: "none" }} />;
  }
}
