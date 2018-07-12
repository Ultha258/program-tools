import { Component, Prop, State} from '@stencil/core';
import FormatJs from '../../services/FormatJs';

const API: MyAPI = window["WidgetHost"];
const userFragment = `referrals(limit: 10, offset: $offset) {
  count
  totalCount
  data {
    id
    dateReferralStarted
    dateReferralPaid
    dateReferralEnded
    referrerReward {
      type
      value
      unit
      name
    }
    moderationStatus
    referredUser {
      firstName
      lastName
      imageUrl
    }
    rewards {
      value
    }
  }
}
referredByReferral {
  referredUser {
    firstName
    lastName
    imageUrl
  }
  dateReferralStarted
}`;

@Component({
  tag: 'sqh-referral-list',
  styleUrl: 'referral-list.scss'
})
export class ReferralList {
  @Prop() userisreferred: boolean = false;
  @Prop() showreferrer: boolean = true;
  @Prop() dateformatting: string = `{value, date, medium}`;
  @Prop() rewardColor: string = "#4BB543";
  @Prop() pendingColor: string = "#DDDDDD";
  @State() referrals: Referral[];
  @State() referralsCount: number;
  @State() referredBy: any;
  @State() rewards: Array<any>;
  @State() loading: boolean;

  constructor() {
    this.loading = true;
    this.getUserPayLoad().then(res => {
      console.log('res', res);
      this.referrals = res.data.user.referrals.data;
      this.referralsCount = res.data.user.referrals.totalCount;
      this.referredBy = res.data.user.referredByReferral;
      this.loading = false;
    }).catch(e => {
      this.onError(e);
    });
  }

  addStyle() {
    const el = document.getElementById("squatch-referrals-style");
    const css = `
      .squatch-referrals-icon.icon-ok-circled {
        color: ${ this.rewardColor };
      }
      .squatch-referrals-icon.icon-attention {
        color: ${ this.pendingColor };
      }
      .squatch-referrals-value {
        color: ${ this.rewardColor };
        font-size: 20px;
      }
      .squatch-referrals-value.pending {
        color: ${ this.pendingColor };
        font-size: 15px;
      }
    `;
    
    if (el) {
      el.textContent = css;
    } else {
      const style = document.createElement("style")
      style.setAttribute('id', 'squatch-referrals-style');
      style.textContent = css;
      document.getElementsByTagName('head')[0].appendChild(style);
    }
  }

  componentDidLoad() {
    this.addStyle();
  }

  componentWillUpdate() {
    this.addStyle();
  }

  getUserPayLoad(offset = 0) {
    return API.graphql.getUserFragment(userFragment, { offset });
  }

  onError(e: Error) {
    console.log("Error loading via GraphQL.", e);
    this.loading = false;
  }

  render() {
    let content;
    let referredByRow;
    let referralsRow;
    
    if(this.loading) {
      content = 'Is loading';
    } else { 
      if (this.referrals) {
        referralsRow = (
          this.referrals.map((ref, index) => {
            let i = this.referredBy && this.showreferrer ? `${index + 1}` : `${index}`;
            return (
              <div>
                <sqh-referral-component id={ i } referral={ ref }></sqh-referral-component>
              </div>
            );
          })
        );
      }if (this.referredBy && this.showreferrer) {
        referredByRow = (
          <tr id="0">
            <td>
              {this.referredBy.referredUser.imageUrl 
              ? <img class="img-circle squatch-referrals-avatar" src={this.referredBy.referredUser.imageUrl}></img>
              : <img class="img-circle squatch-referrals-avatar" src="http://www.gravatar.com/avatar/3a99ddeabe3bcca7f64938b753005735?s=40&d=mm&r=pg"></img>
              }

              <div class="squatch-referrals-heading">{this.referredBy.referredUser.firstName}</div>

              <div class="squatch-referrals-description">
                <span class="hidden-sm">
                  Referring User
                </span>

                <span class="hidden-md text-green">
                  $10
                </span>
              </div>
            </td>

            <td class="hidden-sm">
              <div class="squatch-referrals-heading">
                Referred You
              </div>

              <div class="squatch-referrals-description" data-moment="true">{FormatJs.format(this.dateformatting, {value:this.referredBy.dateReferralStarted})}</div>
            </td>

            <td>

            <i class="icon squatch-referrals-icon icon-ok-circled text-green"></i>

            <div class="squatch-referrals-heading hidden-sm">
              {/* TODO: logic here */}
              $10
            </div>

            <div class="squatch-referrals-description hidden-sm text-green">
              Free Credit
            </div>
            </td>
          </tr>
        );
      }
    }

    return (
      <div class="squatch-referrals" id="squatch-referrals-scroll" data-scroll-offset="0" data-scroll-limit={this.referralsCount}>
        {referredByRow}
        {referralsRow}
        {content}
      </div>
    );
  }
}