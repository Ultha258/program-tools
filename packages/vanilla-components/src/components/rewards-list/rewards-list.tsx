import { Component, Prop, State} from '@stencil/core';

const API: MyAPI = window["WidgetHost"];

@Component({
  tag: 'rewards-list',
  styleUrl: 'rewards-list.scss'
})
export class RewardsList {
  @Prop() userIsReferred: boolean = false;
  @State() rewards: Array<any>;
  @State() loading: boolean;

  constructor() {
    if (API) {
      API.graphql.getReferrals().then(res => {
        console.log(res);
      }).catch(e => {
        this.onError(e);
      });
    }
  }

  componentDidLoad() {
    if (API) {
      let a_client = API.graphql.getClient();
      console.log(a_client);
      
    }
  }

  onError(e: Error) {
    console.log("Error loading via GraphQL.", e);
    this.loading = false;
  }

  render() {
    let content;

    if (!this.rewards) {
      content = "No Rewards Yet...";
    } else {
      content = (
        <div>
          {this.rewards.map(r => {
            return (
              <div class="referral-row">
                <b>Name:</b> {r.referredUser.firstName}{" "}{r.referredUser.lastName} <br />
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div class="squatch-referrals" id="squatch-referrals-scroll" data-scroll-offset="0" data-scroll-limit="{{nonCancelledReferralAndRewardsListLength}}">

        <table class="squatch-referrals-list">
          {this.userIsReferred
            ? <tr id="0">was Referred</tr>
            : <tr>was not referred</tr>
          }

          
          {content}

          {/* <tr id="{{#if options.showReferrer}}{{#if ../referredBy.dateReferred}}{{#if ../referredBy.hasCancelledReferredReward}}{{math @index}}{{else}}{{math @index '+ 1'}}{{/if}}{{else}}{{math @index}}{{/if}}{{else}}{{math @index}}{{/if}}">
            <referral-item></referral-item>
          </tr> */}


          {/* <tr id="{{#if options.showReferrer}}{{#if ../referredBy.dateReferred}}{{#if ../referredBy.hasCancelledReferredReward}}{{math @index '+' referralsLength}}{{else}}{{math @index '+ 1 +' referralsLength}}{{/if}}{{else}}{{math @index '+' referralsLength}}{{/if}}{{else}}{{math @index '+' referralsLength}}{{/if}}">
            <reward-item></reward-item>
          </tr> */}
        </table>
      </div>
    );
  }
}