import { isDemo } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { useRef, useState } from "@saasquatch/universal-hooks";
import { Component, h, Host, Prop, State } from "@stencil/core";
import { getProps } from "../../utils/utils";
import {
  AccountDetailsView,
  AccountDetailsViewProps,
} from "./sqp-account-details-view";
import { AccountFormView, AccountFormViewProps } from "./sqp-account-form-view";
import { useAccountDetails } from "./useAccountDetails";
import deepmerge from "deepmerge";
import { DemoData } from "../../global/demo";
import { Upcoming } from "./DetailsCard.stories";
import { Default } from "./ScheduleCard.stories";
/**
 * @uiName PayPal Account Details
 * @exampleGroup PayPal Components
 * @example PayPal Account Details - <sqp-account-details></sqp-account-details>
 */
@Component({
  tag: "sqp-account-details",
  shadow: true,
})
export class PaypalAccountDetails {
  @State()
  ignored = true;

  /**
   * @uiName Header Text
   * @uiGroup Details
   */
  @Prop() headerText: string = "PayPal account";
  /**
   * @uiName Account Label
   * @uiGroup Details
   */
  @Prop() accountLabel: string = "Account";
  /**
   * @uiName Recent Payment Label
   * @uiGroup Details
   */
  @Prop() recentPaymentLabel: string = "Recent payment";
  /**
   * @uiName Next Payment Label
   * @uiGroup Details
   */
  @Prop() nextPaymentLabel: string = "Next payment";
  /**
   * @uiName Other Currencies Label
   * @uiGroup Details
   */
  @Prop() otherCurrenciesLabel: string =
    "{amount} {amount, plural, =0 {other currencies} =1 {other currency} other {other currencies}}";
  /**
   * @uiName W9 Tax Label
   * @uiGroup Details
   */
  @Prop() w9TaxLabel: string = "Awaiting W-9 tax form";
  /**
   * @uiName  Upcoming Payout Label
   * @uiGroup Details
   */
  @Prop() upcomingPaymentLabel: string = "Upcoming";
  /**
   * @uiName  Next Payout Label
   * @uiGroup Details
   */
  @Prop() nextPayoutLabel: string = "Next payout";
  /**
   * @uiName Edit Text
   * @uiGroup Details
   */
  @Prop() editText: string = "Edit";
  /**
   * @uiName Integration Domain
   * @uiGroup Details
   */
  @Prop() integrationDomain: string =
    "https://paypal-payouts-staging.herokuapp.com/graphql";
  /**
   * @uiName Connect Button Text
   * @uiGroup Connect
   */
  @Prop() connectPayPalAccountButtonText: string = "Connect account";
  /**
   * @uiName Subheader Text
   * @uiGroup Connect
   */
  @Prop() connectPayPalDescriptionText: string =
    "Connect your PayPal account to automatically receive payments/cash rewards.";
  /**
   * @uiName Header Text
   * @uiGroup Connect
   */
  @Prop() payPalAccountHeaderText: string = "PayPal account";
  /**
   * @uiName Modal Header
   * @uiGroup Form
   */
  @Prop() modalConnectPayPalAccountHeader: string = "Connect PayPal account";
  /**
   * @uiName Cancel Text
   * @uiGroup Form
   */
  @Prop() cancelText: string = "Cancel";
  /**
   * @uiName Submit Button Text
   * @uiGroup Form
   */
  @Prop() submitPayPalAccountButtonText: string = "Connect account";
  /**
   * @uiName Paypal Email Label
   * @uiGroup Form
   */
  @Prop() payPalEmailLabel: string = "PayPal email";
  /**
   * @uiName Email Help Text
   * @uiGroup Form
   */
  @Prop() payPalEmailLabelHelpText: string =
    "Enter the email used for your PayPal account.";
  /**
   * @uiName Confirmation Email Text
   * @uiGroup Form
   */
  @Prop() confirmPayPalEmailLabel: string = "Confirm email";
  /**
   * @uiName Success Message
   * @uiGroup Form
   */
  @Prop() successMessage: string = "Success!";
  /**
   * @uiName Edit Account Form Header
   * @uiGroup Form
   */
  @Prop() connectAccountModalHeaderText: string = "Connected account settings";

  /**
   * @uiName Change Account Button Text
   * @uiGroup Form
   */
  @Prop() connectAccountModalButtonText: string = "Change account";
  /**
   * @uiName Disconnect Account Header Text
   * @uiGroup Form
   */
  @Prop() disconnectAccountHeaderText: string = "Disconnect account";
  /**
   * @uiName Disconnect Account Description Text
   * @uiGroup Form
   */
  @Prop() disconnectAccountDescriptionText: string =
    "You will not be able to receive payments if you disconnect your PayPal account.";

  /**
   * @uiName Disconnect Account Button Text
   * @uiGroup Form
   */
  @Prop() disconnectAccountButtonText: string = "Disconnect account";
  /**
   * @uiName Integration Disabled Alert Header Text
   * @uiGroup Alert
   */
  @Prop() integrationDisabledHeader: string =
    "PayPal payouts are currently disabled";
  /**
   * @uiName Integration Disabled Alert Body Text
   * @uiGroup Alert
   */
  @Prop() integrationDisabledText: string =
    "Looks like this feature is turned off at the moment. Come back later to see if it’s enabled. ";
  /**
   * @uiName Integration Paused Alert Header Text
   * @uiGroup Alert
   */
  @Prop() integrationPausedHeader: string = "PayPal payouts are paused";
  /**
   * @uiName Integration Paused Alert Body Text
   * @uiGroup Alert
   */
  @Prop() integrationPausedText: string =
    "This feature is paused at the moment, but dont worry—your rewards are still being tracked! Once this feature resumes, your payouts will continue on the next payout date.";
  /**
   * @uiName Integration Disabled Flag
   * @uiGroup Alert
   */
  @Prop() integrationDisabled: boolean = false;
  /**
   * @uiName Integration Paused Flag
   * @uiGroup Alert
   */
  @Prop() integrationPaused: boolean = false;
  /**
   * @uiName Label above payout details card
   * @uiGroup Alert
   */
  @Prop() detailsHeaderText: string = "Payout details";
  /**
   * @uiName Label above scheduled payouts card(s)
   * @uiGroup Alert
   */
  @Prop() scheduleHeaderText: string = "Schedule";

  /**
   * @undocumented
   * @uiType object
   */
  @Prop() demoData?: DemoData<AccountDetailsViewProps & AccountFormViewProps>;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}
  render() {
    const props = isDemo()
      ? useAccountDetailsDemo(getProps(this))
      : useAccountDetails(getProps(this));

    return (
      <Host>
        <AccountFormView
          formRef={props.formRef}
          states={props.states}
          callbacks={props.callbacks}
          formContent={props.formContent}
          hasAccount={props.hasAccount}
        />
        <sqp-graphql-client-provider domain={this.integrationDomain}>
          <sqp-paypal-details
            hasAccount={props.hasAccount}
            loading={props.states.loading}
            setOpen={props.callbacks.setOpen}
            integrationDisabled={props.integrationDisabled}
            integrationPaused={props.integrationPaused}
            detailsHeaderText={props.overviewContent.detailsHeaderText}
            scheduleHeaderText={props.overviewContent.scheduleHeaderText}
            editText={props.formContent.editText}
            integrationDisabledHeader={
              props.alertContent.integrationDisabledHeader
            }
            integrationDisabledText={props.alertContent.integrationDisabledText}
            integrationPausedHeader={props.alertContent.integrationPausedHeader}
            integrationPausedText={props.alertContent.integrationPausedText}
            payPalAccountHeaderText={props.formContent.payPalAccountHeaderText}
            connectPayPalDescriptionText={
              props.formContent.connectPayPalDescriptionText
            }
            connectPayPalAccountButtonText={
              props.formContent.connectPayPalAccountButtonText
            }
            nextPayoutLabel={props.overviewContent.nextPayoutLabel}
            upcomingPaymentLabel={props.overviewContent.upcomingPaymentLabel}
            otherCurrenciesLabel={props.overviewContent.otherCurrenciesLabel}
            w9TaxLabel={props.overviewContent.w9TaxLabel}
          />
        </sqp-graphql-client-provider>
        {/* <AccountDetailsView
          loading={props.states.loading}
          hasAccount={props.hasAccount}
          overviewContent={props.overviewContent}
          setOpen={props.callbacks.setOpen}
          integrationDisabled={props.integrationDisabled}
        ></AccountDetailsView> */}
      </Host>
    );
  }
}

function useAccountDetailsDemo(props: PaypalAccountDetails) {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  return deepmerge(
    {
      formRef,
      setupAccount: () => {},
      hasAccount: false,
      integrationDisabled: false,
      integrationPaused: false,
      callbacks: { submit: () => {}, setOpen, disconnect: () => {} },
      states: {
        editingAccount: false,
        loading: false,
        error: undefined,
        success: false,
        open,
      },
      detailsContent: {
        headerText: props.headerText,
        accountLabel: props.accountLabel,
        recentPaymentLabel: props.recentPaymentLabel,
        nextPaymentLabel: props.nextPaymentLabel,
        editText: props.editText,
      },
      formContent: {
        modalConnectPayPalAccountHeader: props.modalConnectPayPalAccountHeader,
        cancelText: props.cancelText,
        connectPayPalAccountButtonText: props.connectPayPalAccountButtonText,
        submitPayPalAccountButtonText: props.submitPayPalAccountButtonText,
        payPalEmailLabel: props.payPalEmailLabel,
        payPalEmailLabelHelpText: props.payPalEmailLabelHelpText,
        confirmPayPalEmailLabel: props.confirmPayPalEmailLabel,
        successMessage: props.successMessage,
        payPalAccountHeaderText: props.payPalAccountHeaderText,
        connectPayPalDescriptionText: props.connectPayPalDescriptionText,
        connectAccountModalHeaderText: props.connectAccountModalHeaderText,
        connectAccountModalButtonText: props.connectAccountModalButtonText,
        disconnectAccountHeaderText: props.disconnectAccountHeaderText,
        disconnectAccountDescriptionText:
          props.disconnectAccountDescriptionText,
        disconnectAccountButtonText: props.disconnectAccountButtonText,
        editText: props.editText,
      },
      alertContent: {
        integrationDisabledHeader: props.integrationDisabledHeader,
        integrationDisabledText: props.integrationDisabledText,
        integrationPausedHeader: props.integrationPausedHeader,
        integrationPausedText: props.integrationPausedText,
      },
      overviewContent: {
        detailsHeaderText: props.detailsHeaderText,
        scheduleHeaderText: props.scheduleHeaderText,
        otherCurrenciesLabel: props.otherCurrenciesLabel,
        w9TaxLabel: props.w9TaxLabel,
        upcomingPaymentLabel: props.upcomingPaymentLabel,
        nextPayoutLabel: props.nextPayoutLabel,
        detailsContent: <Upcoming />,
        ScheduleContent: [<Default />],
      },
    },
    props.demoData || {},
    { arrayMerge: (_, a) => a }
  );
}
