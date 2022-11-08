/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Spacing } from "./global/mixins";
import { DemoData } from "./global/demo";
import { AccountDetailsViewProps } from "./components/sqp-account-details/sqp-account-details-view";
import { AccountFormViewProps } from "./components/sqp-account-details/sqp-account-form-view";
import { FunctionalComponent } from "@stencil/core";
export namespace Components {
    interface SqmTitledSection {
        /**
          * Text value shown when there is no label slot declared.
          * @uiName Label
         */
        "label": string;
        /**
          * Margin applied to the bottom of the label slot
          * @uiName Label Bottom Margin
          * @uiType string
          * @uiEnum ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large"]
          * @uiEnumNames ["None", "XXX-Small", "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large", "XXXX-Large"]
         */
        "labelMargin": Spacing;
        /**
          * Padding applied to all 4 sides of the container
          * @uiName Section Padding
          * @uiType string
          * @uiEnum ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large"]
          * @uiEnumNames ["None", "XXX-Small", "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large", "XXXX-Large"]
         */
        "padding": Spacing;
        /**
          * @uiName Text Alignment
          * @uiType string
          * @uiEnum ["left", "center", "right"]
          * @uiEnumNames ["Left", "Center", "Right"]
         */
        "textAlign": "left" | "center" | "right";
    }
    interface SqpAccountDetails {
        /**
          * @uiName Account Label
          * @uiGroup Details
         */
        "accountLabel": string;
        /**
          * @uiName Cancel Text
          * @uiGroup Form
         */
        "cancelText": string;
        /**
          * @uiName Confirmation Email Text
          * @uiGroup Form
         */
        "confirmPayPalEmailLabel": string;
        /**
          * @uiName Change Account Button Text
          * @uiGroup Form
         */
        "connectAccountModalButtonText": string;
        /**
          * @uiName Edit Account Form Header
          * @uiGroup Form
         */
        "connectAccountModalHeaderText": string;
        /**
          * @uiName Connect Button Text
          * @uiGroup Connect
         */
        "connectPayPalAccountButtonText": string;
        /**
          * @uiName Subheader Text
          * @uiGroup Connect
         */
        "connectPayPalDescriptionText": string;
        /**
          * @undocumented 
          * @uiType object
         */
        "demoData"?: DemoData<AccountDetailsViewProps & AccountFormViewProps>;
        /**
          * @uiName Label above payout details card
          * @uiGroup Alert
         */
        "detailsLabel": string;
        /**
          * @uiName Disconnect Account Button Text
          * @uiGroup Form
         */
        "disconnectAccountButtonText": string;
        /**
          * @uiName Disconnect Account Description Text
          * @uiGroup Form
         */
        "disconnectAccountDescriptionText": string;
        /**
          * @uiName Disconnect Account Header Text
          * @uiGroup Form
         */
        "disconnectAccountHeaderText": string;
        /**
          * @uiName Edit Text
          * @uiGroup Details
         */
        "editText": string;
        /**
          * @uiName Header Text
          * @uiGroup Details
         */
        "headerText": string;
        /**
          * @uiName Integration Disabled Alert Header Text
          * @uiGroup Alert
         */
        "integrationAlertHeader": string;
        /**
          * @uiName Integration Disabled Alert Body Text
          * @uiGroup Alert
         */
        "integrationAlertText": string;
        /**
          * @uiName Integration Disabled Flag
          * @uiGroup Alert
         */
        "integrationDisabled": boolean;
        /**
          * @uiName Integration Domain
          * @uiGroup Details
         */
        "integrationDomain": string;
        /**
          * @uiName Modal Header
          * @uiGroup Form
         */
        "modalConnectPayPalAccountHeader": string;
        /**
          * @uiName Next Payment Label
          * @uiGroup Details
         */
        "nextPaymentLabel": string;
        /**
          * @uiName Next Payout Label
          * @uiGroup Details
         */
        "nextPayoutLabel": string;
        /**
          * @uiName Other Currencies Label
          * @uiGroup Details
         */
        "otherCurrenciesLabel": string;
        /**
          * @uiName Header Text
          * @uiGroup Connect
         */
        "payPalAccountHeaderText": string;
        /**
          * @uiName Paypal Email Label
          * @uiGroup Form
         */
        "payPalEmailLabel": string;
        /**
          * @uiName Email Help Text
          * @uiGroup Form
         */
        "payPalEmailLabelHelpText": string;
        /**
          * @uiName Recent Payment Label
          * @uiGroup Details
         */
        "recentPaymentLabel": string;
        /**
          * @uiName Label above scheduled payouts card(s)
          * @uiGroup Alert
         */
        "scheduleLabel": string;
        /**
          * @uiName Submit Button Text
          * @uiGroup Form
         */
        "submitPayPalAccountButtonText": string;
        /**
          * @uiName Success Message
          * @uiGroup Form
         */
        "successMessage": string;
        /**
          * @uiName Upcoming Payout Label
          * @uiGroup Details
         */
        "upcomingPaymentLabel": string;
        /**
          * @uiName W9 Tax Label
          * @uiGroup Details
         */
        "w9TaxLabel": string;
    }
    interface SqpGraphqlClientProvider {
        /**
          * @uiName Domain
         */
        "domain": string;
    }
    interface SqpHookStoryContainer {
        "hookStory": FunctionalComponent;
    }
    interface SqpPaypalDetails {
        /**
          * @undocumented
         */
        "hasAccount": boolean;
        /**
          * @undocumented
         */
        "loading": boolean;
        /**
          * @undocumented
         */
        "overviewContent": any;
        /**
          * @undocumented
         */
        "setOpen": (open: boolean) => void;
    }
    interface SqpRewardsCell {
        "expiringText": string;
        "fuelTankText": string;
        "hideDetails": boolean;
        "locale": string;
        "pendingForText": string;
        "rewardPaidOutText": string;
        "rewardPayoutFailedText": string;
        "rewardPayoutInProgressText": string;
        "rewardReceivedText": string;
        "rewards": Reward[];
        "statusLongText": string;
        "statusText": string;
    }
    interface SqpRewardsColumn {
        /**
          * @uiName Reward column title
         */
        "columnTitle": string;
        /**
          * Shown in the dropdown details when a reward has an expiry date.
          * @uiName Reward Expiring Text
         */
        "expiringText": string;
        /**
          * Shown in the dropdown details when a reward has an associated fuel tank code.
          * @uiName Fuel Tank Code Text
         */
        "fuelTankText": string;
        /**
          * @uiName Hide dropdown details of reward
          * @default
         */
        "hideDetails": boolean;
        /**
          * Shown in the dropdown details when a reward is pending.
          * @uiName Reward Pending Text
         */
        "pendingForText": string;
        "renderCell": (data: Referral, locale: string, mintRenderer: any) => Promise<any>;
        "renderLabel": () => Promise<string>;
        "renderReferrerCell": (data: Referrer) => Promise<any>;
        /**
          * Shown in the dropdown details when a reward has been paid out.’
          * @uiName Reward Paid Out Text
         */
        "rewardPaidOutText": string;
        /**
          * Shown in the dropdown details when a reward payout has failed.’
          * @uiName Reward Payout Failed Text
         */
        "rewardPayoutFailedText": string;
        /**
          * Shown in the dropdown details when a reward is being paid out.’
          * @uiName Reward Payout In Progress Text
         */
        "rewardPayoutInProgressText": string;
        /**
          * Shown in the dropdown details when a reward has been received.’
          * @uiName Reward Received Text
         */
        "rewardReceivedText": string;
        /**
          * Additional status text shown in the details drop down.
          * @uiName Reward Status Long Text
          * @uiWidget textArea
         */
        "statusLongText": string;
        /**
          * Text shown in the reward status badge.
          * @uiName Reward Status Text
          * @uiWidget textArea
         */
        "statusText": string;
    }
    interface SqpStatusCell {
        "expiryText": string;
        "locale": string;
        "pendingScheduled": string;
        "pendingUnhandled": string;
        "pendingUsTax": string;
        "reward": Reward;
        "rewardPaidOutText": string;
        "rewardPayoutFailedText": string;
        "rewardPayoutInProgressText": string;
        "statusText": string;
    }
    interface SqpStatusColumn {
        /**
          * @uiName Column Title
         */
        "columnTitle": string;
        /**
          * Text shown before the date of an expiring reward.
          * @uiName Expiry Date Prefix
         */
        "expiryText": string;
        /**
          * Text shown before the available date of a pending reward.
          * @uiName Pending Date Prefix
         */
        "pendingScheduled": string;
        /**
          * Displayed when fulfillment error occured when creating a reward.
          * @uiName Unhandled Error Text
         */
        "pendingUnhandled": string;
        /**
          * Displayed when a reward is pending due to W9 compliance.
          * @uiName W9 Pending Text
         */
        "pendingUsTax": string;
        "renderCell": (data: Reward, locale: string, mintRenderer: any) => Promise<any>;
        "renderLabel": () => Promise<string>;
        /**
          * Shown in the dropdown details when a reward has been paid out.
          * @uiName Reward Paid Out Text
         */
        "rewardPaidOutText": string;
        /**
          * Shown in the dropdown details when a reward payout has failed.
          * @uiName Reward Payout Failed Text
         */
        "rewardPayoutFailedText": string;
        /**
          * Shown in the dropdown details when a reward is being paid out.
          * @uiName Reward Payout In Progress Text
         */
        "rewardPayoutInProgressText": string;
        /**
          * @uiName Reward Status Text
          * @uiWidget textArea
         */
        "statusText": string;
    }
    interface SqpStencilbook {
    }
}
declare global {
    interface HTMLSqmTitledSectionElement extends Components.SqmTitledSection, HTMLStencilElement {
    }
    var HTMLSqmTitledSectionElement: {
        prototype: HTMLSqmTitledSectionElement;
        new (): HTMLSqmTitledSectionElement;
    };
    interface HTMLSqpAccountDetailsElement extends Components.SqpAccountDetails, HTMLStencilElement {
    }
    var HTMLSqpAccountDetailsElement: {
        prototype: HTMLSqpAccountDetailsElement;
        new (): HTMLSqpAccountDetailsElement;
    };
    interface HTMLSqpGraphqlClientProviderElement extends Components.SqpGraphqlClientProvider, HTMLStencilElement {
    }
    var HTMLSqpGraphqlClientProviderElement: {
        prototype: HTMLSqpGraphqlClientProviderElement;
        new (): HTMLSqpGraphqlClientProviderElement;
    };
    interface HTMLSqpHookStoryContainerElement extends Components.SqpHookStoryContainer, HTMLStencilElement {
    }
    var HTMLSqpHookStoryContainerElement: {
        prototype: HTMLSqpHookStoryContainerElement;
        new (): HTMLSqpHookStoryContainerElement;
    };
    interface HTMLSqpPaypalDetailsElement extends Components.SqpPaypalDetails, HTMLStencilElement {
    }
    var HTMLSqpPaypalDetailsElement: {
        prototype: HTMLSqpPaypalDetailsElement;
        new (): HTMLSqpPaypalDetailsElement;
    };
    interface HTMLSqpRewardsCellElement extends Components.SqpRewardsCell, HTMLStencilElement {
    }
    var HTMLSqpRewardsCellElement: {
        prototype: HTMLSqpRewardsCellElement;
        new (): HTMLSqpRewardsCellElement;
    };
    interface HTMLSqpRewardsColumnElement extends Components.SqpRewardsColumn, HTMLStencilElement {
    }
    var HTMLSqpRewardsColumnElement: {
        prototype: HTMLSqpRewardsColumnElement;
        new (): HTMLSqpRewardsColumnElement;
    };
    interface HTMLSqpStatusCellElement extends Components.SqpStatusCell, HTMLStencilElement {
    }
    var HTMLSqpStatusCellElement: {
        prototype: HTMLSqpStatusCellElement;
        new (): HTMLSqpStatusCellElement;
    };
    interface HTMLSqpStatusColumnElement extends Components.SqpStatusColumn, HTMLStencilElement {
    }
    var HTMLSqpStatusColumnElement: {
        prototype: HTMLSqpStatusColumnElement;
        new (): HTMLSqpStatusColumnElement;
    };
    interface HTMLSqpStencilbookElement extends Components.SqpStencilbook, HTMLStencilElement {
    }
    var HTMLSqpStencilbookElement: {
        prototype: HTMLSqpStencilbookElement;
        new (): HTMLSqpStencilbookElement;
    };
    interface HTMLElementTagNameMap {
        "sqm-titled-section": HTMLSqmTitledSectionElement;
        "sqp-account-details": HTMLSqpAccountDetailsElement;
        "sqp-graphql-client-provider": HTMLSqpGraphqlClientProviderElement;
        "sqp-hook-story-container": HTMLSqpHookStoryContainerElement;
        "sqp-paypal-details": HTMLSqpPaypalDetailsElement;
        "sqp-rewards-cell": HTMLSqpRewardsCellElement;
        "sqp-rewards-column": HTMLSqpRewardsColumnElement;
        "sqp-status-cell": HTMLSqpStatusCellElement;
        "sqp-status-column": HTMLSqpStatusColumnElement;
        "sqp-stencilbook": HTMLSqpStencilbookElement;
    }
}
declare namespace LocalJSX {
    interface SqmTitledSection {
        /**
          * Text value shown when there is no label slot declared.
          * @uiName Label
         */
        "label"?: string;
        /**
          * Margin applied to the bottom of the label slot
          * @uiName Label Bottom Margin
          * @uiType string
          * @uiEnum ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large"]
          * @uiEnumNames ["None", "XXX-Small", "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large", "XXXX-Large"]
         */
        "labelMargin"?: Spacing;
        /**
          * Padding applied to all 4 sides of the container
          * @uiName Section Padding
          * @uiType string
          * @uiEnum ["none", "xxx-small", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large"]
          * @uiEnumNames ["None", "XXX-Small", "XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large", "XXXX-Large"]
         */
        "padding"?: Spacing;
        /**
          * @uiName Text Alignment
          * @uiType string
          * @uiEnum ["left", "center", "right"]
          * @uiEnumNames ["Left", "Center", "Right"]
         */
        "textAlign"?: "left" | "center" | "right";
    }
    interface SqpAccountDetails {
        /**
          * @uiName Account Label
          * @uiGroup Details
         */
        "accountLabel"?: string;
        /**
          * @uiName Cancel Text
          * @uiGroup Form
         */
        "cancelText"?: string;
        /**
          * @uiName Confirmation Email Text
          * @uiGroup Form
         */
        "confirmPayPalEmailLabel"?: string;
        /**
          * @uiName Change Account Button Text
          * @uiGroup Form
         */
        "connectAccountModalButtonText"?: string;
        /**
          * @uiName Edit Account Form Header
          * @uiGroup Form
         */
        "connectAccountModalHeaderText"?: string;
        /**
          * @uiName Connect Button Text
          * @uiGroup Connect
         */
        "connectPayPalAccountButtonText"?: string;
        /**
          * @uiName Subheader Text
          * @uiGroup Connect
         */
        "connectPayPalDescriptionText"?: string;
        /**
          * @undocumented 
          * @uiType object
         */
        "demoData"?: DemoData<AccountDetailsViewProps & AccountFormViewProps>;
        /**
          * @uiName Label above payout details card
          * @uiGroup Alert
         */
        "detailsLabel"?: string;
        /**
          * @uiName Disconnect Account Button Text
          * @uiGroup Form
         */
        "disconnectAccountButtonText"?: string;
        /**
          * @uiName Disconnect Account Description Text
          * @uiGroup Form
         */
        "disconnectAccountDescriptionText"?: string;
        /**
          * @uiName Disconnect Account Header Text
          * @uiGroup Form
         */
        "disconnectAccountHeaderText"?: string;
        /**
          * @uiName Edit Text
          * @uiGroup Details
         */
        "editText"?: string;
        /**
          * @uiName Header Text
          * @uiGroup Details
         */
        "headerText"?: string;
        /**
          * @uiName Integration Disabled Alert Header Text
          * @uiGroup Alert
         */
        "integrationAlertHeader"?: string;
        /**
          * @uiName Integration Disabled Alert Body Text
          * @uiGroup Alert
         */
        "integrationAlertText"?: string;
        /**
          * @uiName Integration Disabled Flag
          * @uiGroup Alert
         */
        "integrationDisabled"?: boolean;
        /**
          * @uiName Integration Domain
          * @uiGroup Details
         */
        "integrationDomain"?: string;
        /**
          * @uiName Modal Header
          * @uiGroup Form
         */
        "modalConnectPayPalAccountHeader"?: string;
        /**
          * @uiName Next Payment Label
          * @uiGroup Details
         */
        "nextPaymentLabel"?: string;
        /**
          * @uiName Next Payout Label
          * @uiGroup Details
         */
        "nextPayoutLabel"?: string;
        /**
          * @uiName Other Currencies Label
          * @uiGroup Details
         */
        "otherCurrenciesLabel"?: string;
        /**
          * @uiName Header Text
          * @uiGroup Connect
         */
        "payPalAccountHeaderText"?: string;
        /**
          * @uiName Paypal Email Label
          * @uiGroup Form
         */
        "payPalEmailLabel"?: string;
        /**
          * @uiName Email Help Text
          * @uiGroup Form
         */
        "payPalEmailLabelHelpText"?: string;
        /**
          * @uiName Recent Payment Label
          * @uiGroup Details
         */
        "recentPaymentLabel"?: string;
        /**
          * @uiName Label above scheduled payouts card(s)
          * @uiGroup Alert
         */
        "scheduleLabel"?: string;
        /**
          * @uiName Submit Button Text
          * @uiGroup Form
         */
        "submitPayPalAccountButtonText"?: string;
        /**
          * @uiName Success Message
          * @uiGroup Form
         */
        "successMessage"?: string;
        /**
          * @uiName Upcoming Payout Label
          * @uiGroup Details
         */
        "upcomingPaymentLabel"?: string;
        /**
          * @uiName W9 Tax Label
          * @uiGroup Details
         */
        "w9TaxLabel"?: string;
    }
    interface SqpGraphqlClientProvider {
        /**
          * @uiName Domain
         */
        "domain"?: string;
    }
    interface SqpHookStoryContainer {
        "hookStory"?: FunctionalComponent;
    }
    interface SqpPaypalDetails {
        /**
          * @undocumented
         */
        "hasAccount"?: boolean;
        /**
          * @undocumented
         */
        "loading"?: boolean;
        /**
          * @undocumented
         */
        "overviewContent"?: any;
        /**
          * @undocumented
         */
        "setOpen"?: (open: boolean) => void;
    }
    interface SqpRewardsCell {
        "expiringText"?: string;
        "fuelTankText"?: string;
        "hideDetails"?: boolean;
        "locale"?: string;
        "pendingForText"?: string;
        "rewardPaidOutText"?: string;
        "rewardPayoutFailedText"?: string;
        "rewardPayoutInProgressText"?: string;
        "rewardReceivedText"?: string;
        "rewards"?: Reward[];
        "statusLongText"?: string;
        "statusText"?: string;
    }
    interface SqpRewardsColumn {
        /**
          * @uiName Reward column title
         */
        "columnTitle"?: string;
        /**
          * Shown in the dropdown details when a reward has an expiry date.
          * @uiName Reward Expiring Text
         */
        "expiringText"?: string;
        /**
          * Shown in the dropdown details when a reward has an associated fuel tank code.
          * @uiName Fuel Tank Code Text
         */
        "fuelTankText"?: string;
        /**
          * @uiName Hide dropdown details of reward
          * @default
         */
        "hideDetails"?: boolean;
        /**
          * Shown in the dropdown details when a reward is pending.
          * @uiName Reward Pending Text
         */
        "pendingForText"?: string;
        /**
          * Shown in the dropdown details when a reward has been paid out.’
          * @uiName Reward Paid Out Text
         */
        "rewardPaidOutText"?: string;
        /**
          * Shown in the dropdown details when a reward payout has failed.’
          * @uiName Reward Payout Failed Text
         */
        "rewardPayoutFailedText"?: string;
        /**
          * Shown in the dropdown details when a reward is being paid out.’
          * @uiName Reward Payout In Progress Text
         */
        "rewardPayoutInProgressText"?: string;
        /**
          * Shown in the dropdown details when a reward has been received.’
          * @uiName Reward Received Text
         */
        "rewardReceivedText"?: string;
        /**
          * Additional status text shown in the details drop down.
          * @uiName Reward Status Long Text
          * @uiWidget textArea
         */
        "statusLongText"?: string;
        /**
          * Text shown in the reward status badge.
          * @uiName Reward Status Text
          * @uiWidget textArea
         */
        "statusText"?: string;
    }
    interface SqpStatusCell {
        "expiryText"?: string;
        "locale"?: string;
        "pendingScheduled"?: string;
        "pendingUnhandled"?: string;
        "pendingUsTax"?: string;
        "reward"?: Reward;
        "rewardPaidOutText"?: string;
        "rewardPayoutFailedText"?: string;
        "rewardPayoutInProgressText"?: string;
        "statusText"?: string;
    }
    interface SqpStatusColumn {
        /**
          * @uiName Column Title
         */
        "columnTitle"?: string;
        /**
          * Text shown before the date of an expiring reward.
          * @uiName Expiry Date Prefix
         */
        "expiryText"?: string;
        /**
          * Text shown before the available date of a pending reward.
          * @uiName Pending Date Prefix
         */
        "pendingScheduled"?: string;
        /**
          * Displayed when fulfillment error occured when creating a reward.
          * @uiName Unhandled Error Text
         */
        "pendingUnhandled"?: string;
        /**
          * Displayed when a reward is pending due to W9 compliance.
          * @uiName W9 Pending Text
         */
        "pendingUsTax"?: string;
        /**
          * Shown in the dropdown details when a reward has been paid out.
          * @uiName Reward Paid Out Text
         */
        "rewardPaidOutText"?: string;
        /**
          * Shown in the dropdown details when a reward payout has failed.
          * @uiName Reward Payout Failed Text
         */
        "rewardPayoutFailedText"?: string;
        /**
          * Shown in the dropdown details when a reward is being paid out.
          * @uiName Reward Payout In Progress Text
         */
        "rewardPayoutInProgressText"?: string;
        /**
          * @uiName Reward Status Text
          * @uiWidget textArea
         */
        "statusText"?: string;
    }
    interface SqpStencilbook {
    }
    interface IntrinsicElements {
        "sqm-titled-section": SqmTitledSection;
        "sqp-account-details": SqpAccountDetails;
        "sqp-graphql-client-provider": SqpGraphqlClientProvider;
        "sqp-hook-story-container": SqpHookStoryContainer;
        "sqp-paypal-details": SqpPaypalDetails;
        "sqp-rewards-cell": SqpRewardsCell;
        "sqp-rewards-column": SqpRewardsColumn;
        "sqp-status-cell": SqpStatusCell;
        "sqp-status-column": SqpStatusColumn;
        "sqp-stencilbook": SqpStencilbook;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sqm-titled-section": LocalJSX.SqmTitledSection & JSXBase.HTMLAttributes<HTMLSqmTitledSectionElement>;
            "sqp-account-details": LocalJSX.SqpAccountDetails & JSXBase.HTMLAttributes<HTMLSqpAccountDetailsElement>;
            "sqp-graphql-client-provider": LocalJSX.SqpGraphqlClientProvider & JSXBase.HTMLAttributes<HTMLSqpGraphqlClientProviderElement>;
            "sqp-hook-story-container": LocalJSX.SqpHookStoryContainer & JSXBase.HTMLAttributes<HTMLSqpHookStoryContainerElement>;
            "sqp-paypal-details": LocalJSX.SqpPaypalDetails & JSXBase.HTMLAttributes<HTMLSqpPaypalDetailsElement>;
            "sqp-rewards-cell": LocalJSX.SqpRewardsCell & JSXBase.HTMLAttributes<HTMLSqpRewardsCellElement>;
            "sqp-rewards-column": LocalJSX.SqpRewardsColumn & JSXBase.HTMLAttributes<HTMLSqpRewardsColumnElement>;
            "sqp-status-cell": LocalJSX.SqpStatusCell & JSXBase.HTMLAttributes<HTMLSqpStatusCellElement>;
            "sqp-status-column": LocalJSX.SqpStatusColumn & JSXBase.HTMLAttributes<HTMLSqpStatusColumnElement>;
            "sqp-stencilbook": LocalJSX.SqpStencilbook & JSXBase.HTMLAttributes<HTMLSqpStencilbookElement>;
        }
    }
}
