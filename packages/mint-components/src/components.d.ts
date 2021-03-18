/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SqmBigStat {
        /**
          * @uiName Stat Type
          * @uiEnum ["/rewardBalance/CREDIT/CASH_CAD/prettyPendingCredit", "/rewardBalance/CREDIT/CASH_CAD/prettyValue", "/rewardBalance/CREDIT/CASH_CAD/prettyRedeemedCredit", "/rewardBalance/CREDIT/CASH_USD/prettyPendingCredit", "/rewardBalance/CREDIT/CASH_USD/prettyValue", "/rewardBalance/CREDIT/CASH_USD/prettyRedeemedCredit"]
         */
        "type": string;
    }
    interface SqmLeaderboard {
        /**
          * @uiName Stats Column Heading
         */
        "statsheading": string;
        /**
          * @uiName User Column Heading
         */
        "usersheading": string;
    }
    interface SqmLeaderboardRank {
        /**
          * @uiName Default rank
         */
        "rank"?: string;
    }
    interface SqmRouter {
    }
    interface SqmShareButton {
        /**
          * @uiName Disabled
         */
        "disabled"?: boolean;
        /**
          * @uiName Hide the icon
         */
        "hideicon"?: boolean;
        /**
          * @uiName Icon Location
          * @uiType string
          * @uiEnum ["prefix", "suffix" ]
          * @uiEnumNames ["Prefix", "Suffix"]
         */
        "iconslot"?: 'prefix' | 'suffix';
        /**
          * The social medium to share on. Share messages and links will be pulled from your program config and tagged for analytics.
          * @uiName Share Medium
          * @uiType string
          * @uiEnum ["facebook", "twitter", "email", "direct", "linkedin", "sms", "fbmessenger", "whatsapp", "linemessenger", "pinterest", "reminder", "unknown" ]
          * @uiEnumNames ["Facebook", "Twitter", "Email", "Web Share Sheet", "Linkedin", "SMS", "Facebook Messenger", "Whatsapp", "Line Messenger", "Pinterest", "Reminder", "Unknown"]
         */
        "medium": 'facebook' | 'twitter' | 'email' | 'direct' | 'linkedin' | 'sms' | 'fbmessenger' | 'whatsapp' | 'linemessenger' | 'pinterest' | 'reminder' | 'unknown';
        /**
          * @uiName Display as pill
         */
        "pill"?: boolean;
        /**
          * Optional programId, or uses the programId context where this button is rendered.
          * @uiName Program ID
         */
        "programId"?: string;
        /**
          * @uiName Text used for native sharing (mobile only)
         */
        "sharetext"?: string;
        /**
          * @uiName Title used for native sharing (mobile only)
         */
        "sharetitle"?: string;
        /**
          * @uiName Button Size
          * @uiType string
          * @uiEnum ["small", "medium", "large" ]
          * @uiEnumNames ["Small", "Medium", "Large"]
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * @uiType string
          * @uiName Button Style
          * @uiEnum ["primary" , "success", "info", "warning", "danger", "default", "text" ]
         */
        "type"?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default' | 'text';
    }
    interface SqmShareLink {
        /**
          * @uiName Icon
         */
        "icon"?: string;
        /**
          * @uiName Icon Label
         */
        "iconlabel"?: string;
        /**
          * The ID of the program that should generate the link.
          * @uiName Program ID
         */
        "programId": string;
        /**
          * The number of milliseconds that the tooltip will appear for
          * @uiName Tooltip lifespan
         */
        "tooltiplifespan"?: number;
        /**
          * This is shown after someone has successfully copied the link to the clipboard.
          * @uiName Tooltip text
         */
        "tooltiptext"?: string;
    }
    interface SqmStencilbook {
    }
}
declare global {
    interface HTMLSqmBigStatElement extends Components.SqmBigStat, HTMLStencilElement {
    }
    var HTMLSqmBigStatElement: {
        prototype: HTMLSqmBigStatElement;
        new (): HTMLSqmBigStatElement;
    };
    interface HTMLSqmLeaderboardElement extends Components.SqmLeaderboard, HTMLStencilElement {
    }
    var HTMLSqmLeaderboardElement: {
        prototype: HTMLSqmLeaderboardElement;
        new (): HTMLSqmLeaderboardElement;
    };
    interface HTMLSqmLeaderboardRankElement extends Components.SqmLeaderboardRank, HTMLStencilElement {
    }
    var HTMLSqmLeaderboardRankElement: {
        prototype: HTMLSqmLeaderboardRankElement;
        new (): HTMLSqmLeaderboardRankElement;
    };
    interface HTMLSqmRouterElement extends Components.SqmRouter, HTMLStencilElement {
    }
    var HTMLSqmRouterElement: {
        prototype: HTMLSqmRouterElement;
        new (): HTMLSqmRouterElement;
    };
    interface HTMLSqmShareButtonElement extends Components.SqmShareButton, HTMLStencilElement {
    }
    var HTMLSqmShareButtonElement: {
        prototype: HTMLSqmShareButtonElement;
        new (): HTMLSqmShareButtonElement;
    };
    interface HTMLSqmShareLinkElement extends Components.SqmShareLink, HTMLStencilElement {
    }
    var HTMLSqmShareLinkElement: {
        prototype: HTMLSqmShareLinkElement;
        new (): HTMLSqmShareLinkElement;
    };
    interface HTMLSqmStencilbookElement extends Components.SqmStencilbook, HTMLStencilElement {
    }
    var HTMLSqmStencilbookElement: {
        prototype: HTMLSqmStencilbookElement;
        new (): HTMLSqmStencilbookElement;
    };
    interface HTMLElementTagNameMap {
        "sqm-big-stat": HTMLSqmBigStatElement;
        "sqm-leaderboard": HTMLSqmLeaderboardElement;
        "sqm-leaderboard-rank": HTMLSqmLeaderboardRankElement;
        "sqm-router": HTMLSqmRouterElement;
        "sqm-share-button": HTMLSqmShareButtonElement;
        "sqm-share-link": HTMLSqmShareLinkElement;
        "sqm-stencilbook": HTMLSqmStencilbookElement;
    }
}
declare namespace LocalJSX {
    interface SqmBigStat {
        /**
          * @uiName Stat Type
          * @uiEnum ["/rewardBalance/CREDIT/CASH_CAD/prettyPendingCredit", "/rewardBalance/CREDIT/CASH_CAD/prettyValue", "/rewardBalance/CREDIT/CASH_CAD/prettyRedeemedCredit", "/rewardBalance/CREDIT/CASH_USD/prettyPendingCredit", "/rewardBalance/CREDIT/CASH_USD/prettyValue", "/rewardBalance/CREDIT/CASH_USD/prettyRedeemedCredit"]
         */
        "type"?: string;
    }
    interface SqmLeaderboard {
        /**
          * @uiName Stats Column Heading
         */
        "statsheading"?: string;
        /**
          * @uiName User Column Heading
         */
        "usersheading"?: string;
    }
    interface SqmLeaderboardRank {
        /**
          * @uiName Default rank
         */
        "rank"?: string;
    }
    interface SqmRouter {
    }
    interface SqmShareButton {
        /**
          * @uiName Disabled
         */
        "disabled"?: boolean;
        /**
          * @uiName Hide the icon
         */
        "hideicon"?: boolean;
        /**
          * @uiName Icon Location
          * @uiType string
          * @uiEnum ["prefix", "suffix" ]
          * @uiEnumNames ["Prefix", "Suffix"]
         */
        "iconslot"?: 'prefix' | 'suffix';
        /**
          * The social medium to share on. Share messages and links will be pulled from your program config and tagged for analytics.
          * @uiName Share Medium
          * @uiType string
          * @uiEnum ["facebook", "twitter", "email", "direct", "linkedin", "sms", "fbmessenger", "whatsapp", "linemessenger", "pinterest", "reminder", "unknown" ]
          * @uiEnumNames ["Facebook", "Twitter", "Email", "Web Share Sheet", "Linkedin", "SMS", "Facebook Messenger", "Whatsapp", "Line Messenger", "Pinterest", "Reminder", "Unknown"]
         */
        "medium"?: 'facebook' | 'twitter' | 'email' | 'direct' | 'linkedin' | 'sms' | 'fbmessenger' | 'whatsapp' | 'linemessenger' | 'pinterest' | 'reminder' | 'unknown';
        /**
          * @uiName Display as pill
         */
        "pill"?: boolean;
        /**
          * Optional programId, or uses the programId context where this button is rendered.
          * @uiName Program ID
         */
        "programId"?: string;
        /**
          * @uiName Text used for native sharing (mobile only)
         */
        "sharetext"?: string;
        /**
          * @uiName Title used for native sharing (mobile only)
         */
        "sharetitle"?: string;
        /**
          * @uiName Button Size
          * @uiType string
          * @uiEnum ["small", "medium", "large" ]
          * @uiEnumNames ["Small", "Medium", "Large"]
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * @uiType string
          * @uiName Button Style
          * @uiEnum ["primary" , "success", "info", "warning", "danger", "default", "text" ]
         */
        "type"?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default' | 'text';
    }
    interface SqmShareLink {
        /**
          * @uiName Icon
         */
        "icon"?: string;
        /**
          * @uiName Icon Label
         */
        "iconlabel"?: string;
        /**
          * The ID of the program that should generate the link.
          * @uiName Program ID
         */
        "programId"?: string;
        /**
          * The number of milliseconds that the tooltip will appear for
          * @uiName Tooltip lifespan
         */
        "tooltiplifespan"?: number;
        /**
          * This is shown after someone has successfully copied the link to the clipboard.
          * @uiName Tooltip text
         */
        "tooltiptext"?: string;
    }
    interface SqmStencilbook {
    }
    interface IntrinsicElements {
        "sqm-big-stat": SqmBigStat;
        "sqm-leaderboard": SqmLeaderboard;
        "sqm-leaderboard-rank": SqmLeaderboardRank;
        "sqm-router": SqmRouter;
        "sqm-share-button": SqmShareButton;
        "sqm-share-link": SqmShareLink;
        "sqm-stencilbook": SqmStencilbook;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sqm-big-stat": LocalJSX.SqmBigStat & JSXBase.HTMLAttributes<HTMLSqmBigStatElement>;
            "sqm-leaderboard": LocalJSX.SqmLeaderboard & JSXBase.HTMLAttributes<HTMLSqmLeaderboardElement>;
            "sqm-leaderboard-rank": LocalJSX.SqmLeaderboardRank & JSXBase.HTMLAttributes<HTMLSqmLeaderboardRankElement>;
            "sqm-router": LocalJSX.SqmRouter & JSXBase.HTMLAttributes<HTMLSqmRouterElement>;
            "sqm-share-button": LocalJSX.SqmShareButton & JSXBase.HTMLAttributes<HTMLSqmShareButtonElement>;
            "sqm-share-link": LocalJSX.SqmShareLink & JSXBase.HTMLAttributes<HTMLSqmShareLinkElement>;
            "sqm-stencilbook": LocalJSX.SqmStencilbook & JSXBase.HTMLAttributes<HTMLSqmStencilbookElement>;
        }
    }
}
