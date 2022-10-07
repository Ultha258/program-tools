/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Spacing } from "./global/mixins";
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
         */
        "accountLabel": string;
        /**
          * @uiName Edit Text
         */
        "editText": string;
        /**
          * @uiName Header Text
         */
        "headerText": string;
        /**
          * @uiName Next Payment Label
         */
        "nextPaymentLabel": string;
        /**
          * @uiName Recent Payment Label
         */
        "recentPaymentLabel": string;
    }
    interface SqpAccountForm {
        /**
          * @uiName Cancel Text
         */
        "cancelText": string;
        /**
          * @uiName Confirmation Email Text
         */
        "confirmPayPalEmailLabel": string;
        /**
          * @uiName Connect Button Text
         */
        "connectPayPalAccountButtonText": string;
        /**
          * @uiName Subheader Text
         */
        "connectPayPalDescriptionText": string;
        /**
          * @uiName Modal Header
         */
        "modalConnectPayPalAccountHeader": string;
        /**
          * @uiName Header Text
         */
        "payPalAccountHeaderText": string;
        /**
          * @uiName Paypal Email Label
         */
        "payPalEmailLabel": string;
        /**
          * @uiName Email Help Text
         */
        "payPalEmailLabelHelpText": string;
        /**
          * @uiName Success Message
         */
        "successMessage": string;
    }
    interface SqpHookStoryContainer {
        "hookStory": FunctionalComponent;
    }
    interface SqpRewardColumn {
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
        "renderCell": (data: Referral, locale: string) => Promise<any>;
        "renderLabel": () => Promise<string>;
        "renderReferrerCell": (data: Referrer) => Promise<any>;
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
    interface SqpRewardsCell {
        "rewards": Reward[];
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
    interface HTMLSqpAccountFormElement extends Components.SqpAccountForm, HTMLStencilElement {
    }
    var HTMLSqpAccountFormElement: {
        prototype: HTMLSqpAccountFormElement;
        new (): HTMLSqpAccountFormElement;
    };
    interface HTMLSqpHookStoryContainerElement extends Components.SqpHookStoryContainer, HTMLStencilElement {
    }
    var HTMLSqpHookStoryContainerElement: {
        prototype: HTMLSqpHookStoryContainerElement;
        new (): HTMLSqpHookStoryContainerElement;
    };
    interface HTMLSqpRewardColumnElement extends Components.SqpRewardColumn, HTMLStencilElement {
    }
    var HTMLSqpRewardColumnElement: {
        prototype: HTMLSqpRewardColumnElement;
        new (): HTMLSqpRewardColumnElement;
    };
    interface HTMLSqpRewardsCellElement extends Components.SqpRewardsCell, HTMLStencilElement {
    }
    var HTMLSqpRewardsCellElement: {
        prototype: HTMLSqpRewardsCellElement;
        new (): HTMLSqpRewardsCellElement;
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
        "sqp-account-form": HTMLSqpAccountFormElement;
        "sqp-hook-story-container": HTMLSqpHookStoryContainerElement;
        "sqp-reward-column": HTMLSqpRewardColumnElement;
        "sqp-rewards-cell": HTMLSqpRewardsCellElement;
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
         */
        "accountLabel"?: string;
        /**
          * @uiName Edit Text
         */
        "editText"?: string;
        /**
          * @uiName Header Text
         */
        "headerText"?: string;
        /**
          * @uiName Next Payment Label
         */
        "nextPaymentLabel"?: string;
        /**
          * @uiName Recent Payment Label
         */
        "recentPaymentLabel"?: string;
    }
    interface SqpAccountForm {
        /**
          * @uiName Cancel Text
         */
        "cancelText"?: string;
        /**
          * @uiName Confirmation Email Text
         */
        "confirmPayPalEmailLabel"?: string;
        /**
          * @uiName Connect Button Text
         */
        "connectPayPalAccountButtonText"?: string;
        /**
          * @uiName Subheader Text
         */
        "connectPayPalDescriptionText"?: string;
        /**
          * @uiName Modal Header
         */
        "modalConnectPayPalAccountHeader"?: string;
        /**
          * @uiName Header Text
         */
        "payPalAccountHeaderText"?: string;
        /**
          * @uiName Paypal Email Label
         */
        "payPalEmailLabel"?: string;
        /**
          * @uiName Email Help Text
         */
        "payPalEmailLabelHelpText"?: string;
        /**
          * @uiName Success Message
         */
        "successMessage"?: string;
    }
    interface SqpHookStoryContainer {
        "hookStory"?: FunctionalComponent;
    }
    interface SqpRewardColumn {
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
    interface SqpRewardsCell {
        "rewards"?: Reward[];
    }
    interface SqpStencilbook {
    }
    interface IntrinsicElements {
        "sqm-titled-section": SqmTitledSection;
        "sqp-account-details": SqpAccountDetails;
        "sqp-account-form": SqpAccountForm;
        "sqp-hook-story-container": SqpHookStoryContainer;
        "sqp-reward-column": SqpRewardColumn;
        "sqp-rewards-cell": SqpRewardsCell;
        "sqp-stencilbook": SqpStencilbook;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sqm-titled-section": LocalJSX.SqmTitledSection & JSXBase.HTMLAttributes<HTMLSqmTitledSectionElement>;
            "sqp-account-details": LocalJSX.SqpAccountDetails & JSXBase.HTMLAttributes<HTMLSqpAccountDetailsElement>;
            "sqp-account-form": LocalJSX.SqpAccountForm & JSXBase.HTMLAttributes<HTMLSqpAccountFormElement>;
            "sqp-hook-story-container": LocalJSX.SqpHookStoryContainer & JSXBase.HTMLAttributes<HTMLSqpHookStoryContainerElement>;
            "sqp-reward-column": LocalJSX.SqpRewardColumn & JSXBase.HTMLAttributes<HTMLSqpRewardColumnElement>;
            "sqp-rewards-cell": LocalJSX.SqpRewardsCell & JSXBase.HTMLAttributes<HTMLSqpRewardsCellElement>;
            "sqp-stencilbook": LocalJSX.SqpStencilbook & JSXBase.HTMLAttributes<HTMLSqpStencilbookElement>;
        }
    }
}
