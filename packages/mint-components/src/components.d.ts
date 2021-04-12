/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FunctionalComponent } from "@stencil/core";
export namespace Components {
    interface SelectTest {
    }
    interface SqmBigStat {
        /**
          * Select what type of stat to display. Manual paths are also supported.
          * @uiWidget StatTypeSelectWidget
          * @uiName Stat Type
         */
        "statType": string;
    }
    interface SqmEditProfile {
        /**
          * @uiName Cancel button text
         */
        "canceltext": string;
        /**
          * @uiName Region field label
         */
        "currentregiontext": string;
        /**
          * @uiName Heading
         */
        "editprofileheader": string;
        /**
          * @uiName Enable editing button text
         */
        "editprofiletext": string;
        /**
          * @uiName First name field label
         */
        "firstnametext": string;
        /**
          * @uiName Last name field label
         */
        "lastnametext": string;
        /**
          * @uiName Update info button text
         */
        "updatetext": string;
    }
    interface SqmFormMessage {
        /**
          * @uiName Icon to use in alert
         */
        "icon"?: string;
        /**
          * @uiName Type of alert
         */
        "type": string;
    }
    interface SqmHookStoryContainer {
        "hookStory": FunctionalComponent;
    }
    interface SqmLeaderboard {
        /**
          * @uiName Leaderboard type
         */
        "leaderboardType": "topStartedReferrers" | "topConvertedReferrers";
        "rankType": "rowNumber" | "rank" | "denseRank";
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
          * @uiName Leaderboard type
         */
        "leaderboardType": "topStartedReferrers" | "topConvertedReferrers";
        "rankText": string;
        /**
          * @uiName Default rank
         */
        "rankType": "rowNumber" | "rank" | "denseRank";
        "unrankedText": string;
    }
    interface SqmNavigationMenu {
        /**
          * @uiName Include dropdown menu
         */
        "includeDropdown": boolean;
        /**
          * @uiName Label on the header menu
         */
        "menuLabel": string;
    }
    interface SqmPopupContainer {
        /**
          * @uiName Display a close button on the popup
         */
        "closeButton": boolean;
        /**
          * @uiName Text to be used as the close button
         */
        "closeButtonText": string;
        /**
          * @uiName Specify padding on the popup contents when in embedded mode
         */
        "embedPadding"?: "none" | "small" | "medium" | "large";
        /**
          * @uiName Specify padding on the popup contents when in popup mode
         */
        "popupPadding"?: "none" | "small" | "medium" | "large";
        /**
          * @uiName Show SaaSquatch Powered By messaging
         */
        "poweredBy": boolean;
    }
    interface SqmPortalFrame {
        /**
          * @uiName Description text
         */
        "description": string;
        /**
          * @uiName Heading text
         */
        "headertext": string;
    }
    interface SqmRoute {
        /**
          * @uiName Navigation path name
         */
        "path": string;
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
          * @uiName Icon used in button. Will try to select an icon based on the share medium if left empty.
         */
        "icon"?: string;
        /**
          * @uiName Icon Location
          * @uiType string
          * @uiEnum ["prefix", "suffix" ]
          * @uiEnumNames ["Prefix", "Suffix"]
         */
        "iconslot"?: "prefix" | "suffix";
        /**
          * The social medium to share on. Share messages and links will be pulled from your program config and tagged for analytics.
          * @uiName Share Medium
          * @uiType string
          * @uiEnum ["facebook", "twitter", "email", "direct", "linkedin", "sms", "fbmessenger", "whatsapp", "linemessenger", "pinterest", "reminder", "unknown" ]
          * @uiEnumNames ["Facebook", "Twitter", "Email", "Web Share Sheet", "Linkedin", "SMS", "Facebook Messenger", "Whatsapp", "Line Messenger", "Pinterest", "Reminder", "Unknown"]
         */
        "medium": | "facebook"
    | "twitter"
    | "email"
    | "direct"
    | "linkedin"
    | "sms"
    | "fbmessenger"
    | "whatsapp"
    | "linemessenger"
    | "pinterest"
    | "reminder"
    | "unknown";
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
        "size"?: "small" | "medium" | "large";
        /**
          * @uiType string
          * @uiName Button Style
          * @uiEnum ["primary" , "success", "info", "warning", "danger", "default", "text" ]
         */
        "type"?: | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "default"
    | "text";
    }
    interface SqmShareLink {
        /**
          * The ID of the program that should generate the link. Defaults to the program ID in context where this widget is loaded.
          * @uiName Program ID
         */
        "programId"?: string;
        /**
          * The number of milliseconds that the tooltip will appear for
          * @uiName Tooltip lifespan
         */
        "tooltiplifespan": number;
        /**
          * This is shown after someone has successfully copied the link to the clipboard.
          * @uiName Tooltip text
         */
        "tooltiptext": string;
    }
    interface SqmStencilbook {
    }
}
declare global {
    interface HTMLSelectTestElement extends Components.SelectTest, HTMLStencilElement {
    }
    var HTMLSelectTestElement: {
        prototype: HTMLSelectTestElement;
        new (): HTMLSelectTestElement;
    };
    interface HTMLSqmBigStatElement extends Components.SqmBigStat, HTMLStencilElement {
    }
    var HTMLSqmBigStatElement: {
        prototype: HTMLSqmBigStatElement;
        new (): HTMLSqmBigStatElement;
    };
    interface HTMLSqmEditProfileElement extends Components.SqmEditProfile, HTMLStencilElement {
    }
    var HTMLSqmEditProfileElement: {
        prototype: HTMLSqmEditProfileElement;
        new (): HTMLSqmEditProfileElement;
    };
    interface HTMLSqmFormMessageElement extends Components.SqmFormMessage, HTMLStencilElement {
    }
    var HTMLSqmFormMessageElement: {
        prototype: HTMLSqmFormMessageElement;
        new (): HTMLSqmFormMessageElement;
    };
    interface HTMLSqmHookStoryContainerElement extends Components.SqmHookStoryContainer, HTMLStencilElement {
    }
    var HTMLSqmHookStoryContainerElement: {
        prototype: HTMLSqmHookStoryContainerElement;
        new (): HTMLSqmHookStoryContainerElement;
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
    interface HTMLSqmNavigationMenuElement extends Components.SqmNavigationMenu, HTMLStencilElement {
    }
    var HTMLSqmNavigationMenuElement: {
        prototype: HTMLSqmNavigationMenuElement;
        new (): HTMLSqmNavigationMenuElement;
    };
    interface HTMLSqmPopupContainerElement extends Components.SqmPopupContainer, HTMLStencilElement {
    }
    var HTMLSqmPopupContainerElement: {
        prototype: HTMLSqmPopupContainerElement;
        new (): HTMLSqmPopupContainerElement;
    };
    interface HTMLSqmPortalFrameElement extends Components.SqmPortalFrame, HTMLStencilElement {
    }
    var HTMLSqmPortalFrameElement: {
        prototype: HTMLSqmPortalFrameElement;
        new (): HTMLSqmPortalFrameElement;
    };
    interface HTMLSqmRouteElement extends Components.SqmRoute, HTMLStencilElement {
    }
    var HTMLSqmRouteElement: {
        prototype: HTMLSqmRouteElement;
        new (): HTMLSqmRouteElement;
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
        "select-test": HTMLSelectTestElement;
        "sqm-big-stat": HTMLSqmBigStatElement;
        "sqm-edit-profile": HTMLSqmEditProfileElement;
        "sqm-form-message": HTMLSqmFormMessageElement;
        "sqm-hook-story-container": HTMLSqmHookStoryContainerElement;
        "sqm-leaderboard": HTMLSqmLeaderboardElement;
        "sqm-leaderboard-rank": HTMLSqmLeaderboardRankElement;
        "sqm-navigation-menu": HTMLSqmNavigationMenuElement;
        "sqm-popup-container": HTMLSqmPopupContainerElement;
        "sqm-portal-frame": HTMLSqmPortalFrameElement;
        "sqm-route": HTMLSqmRouteElement;
        "sqm-router": HTMLSqmRouterElement;
        "sqm-share-button": HTMLSqmShareButtonElement;
        "sqm-share-link": HTMLSqmShareLinkElement;
        "sqm-stencilbook": HTMLSqmStencilbookElement;
    }
}
declare namespace LocalJSX {
    interface SelectTest {
    }
    interface SqmBigStat {
        /**
          * Select what type of stat to display. Manual paths are also supported.
          * @uiWidget StatTypeSelectWidget
          * @uiName Stat Type
         */
        "statType"?: string;
    }
    interface SqmEditProfile {
        /**
          * @uiName Cancel button text
         */
        "canceltext"?: string;
        /**
          * @uiName Region field label
         */
        "currentregiontext"?: string;
        /**
          * @uiName Heading
         */
        "editprofileheader"?: string;
        /**
          * @uiName Enable editing button text
         */
        "editprofiletext"?: string;
        /**
          * @uiName First name field label
         */
        "firstnametext"?: string;
        /**
          * @uiName Last name field label
         */
        "lastnametext"?: string;
        /**
          * @uiName Update info button text
         */
        "updatetext"?: string;
    }
    interface SqmFormMessage {
        /**
          * @uiName Icon to use in alert
         */
        "icon"?: string;
        /**
          * @uiName Type of alert
         */
        "type"?: string;
    }
    interface SqmHookStoryContainer {
        "hookStory"?: FunctionalComponent;
    }
    interface SqmLeaderboard {
        /**
          * @uiName Leaderboard type
         */
        "leaderboardType"?: "topStartedReferrers" | "topConvertedReferrers";
        "rankType"?: "rowNumber" | "rank" | "denseRank";
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
          * @uiName Leaderboard type
         */
        "leaderboardType"?: "topStartedReferrers" | "topConvertedReferrers";
        "rankText"?: string;
        /**
          * @uiName Default rank
         */
        "rankType"?: "rowNumber" | "rank" | "denseRank";
        "unrankedText"?: string;
    }
    interface SqmNavigationMenu {
        /**
          * @uiName Include dropdown menu
         */
        "includeDropdown"?: boolean;
        /**
          * @uiName Label on the header menu
         */
        "menuLabel"?: string;
    }
    interface SqmPopupContainer {
        /**
          * @uiName Display a close button on the popup
         */
        "closeButton"?: boolean;
        /**
          * @uiName Text to be used as the close button
         */
        "closeButtonText"?: string;
        /**
          * @uiName Specify padding on the popup contents when in embedded mode
         */
        "embedPadding"?: "none" | "small" | "medium" | "large";
        /**
          * @uiName Specify padding on the popup contents when in popup mode
         */
        "popupPadding"?: "none" | "small" | "medium" | "large";
        /**
          * @uiName Show SaaSquatch Powered By messaging
         */
        "poweredBy"?: boolean;
    }
    interface SqmPortalFrame {
        /**
          * @uiName Description text
         */
        "description"?: string;
        /**
          * @uiName Heading text
         */
        "headertext"?: string;
    }
    interface SqmRoute {
        /**
          * @uiName Navigation path name
         */
        "path"?: string;
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
          * @uiName Icon used in button. Will try to select an icon based on the share medium if left empty.
         */
        "icon"?: string;
        /**
          * @uiName Icon Location
          * @uiType string
          * @uiEnum ["prefix", "suffix" ]
          * @uiEnumNames ["Prefix", "Suffix"]
         */
        "iconslot"?: "prefix" | "suffix";
        /**
          * The social medium to share on. Share messages and links will be pulled from your program config and tagged for analytics.
          * @uiName Share Medium
          * @uiType string
          * @uiEnum ["facebook", "twitter", "email", "direct", "linkedin", "sms", "fbmessenger", "whatsapp", "linemessenger", "pinterest", "reminder", "unknown" ]
          * @uiEnumNames ["Facebook", "Twitter", "Email", "Web Share Sheet", "Linkedin", "SMS", "Facebook Messenger", "Whatsapp", "Line Messenger", "Pinterest", "Reminder", "Unknown"]
         */
        "medium"?: | "facebook"
    | "twitter"
    | "email"
    | "direct"
    | "linkedin"
    | "sms"
    | "fbmessenger"
    | "whatsapp"
    | "linemessenger"
    | "pinterest"
    | "reminder"
    | "unknown";
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
        "size"?: "small" | "medium" | "large";
        /**
          * @uiType string
          * @uiName Button Style
          * @uiEnum ["primary" , "success", "info", "warning", "danger", "default", "text" ]
         */
        "type"?: | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "default"
    | "text";
    }
    interface SqmShareLink {
        /**
          * The ID of the program that should generate the link. Defaults to the program ID in context where this widget is loaded.
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
        "select-test": SelectTest;
        "sqm-big-stat": SqmBigStat;
        "sqm-edit-profile": SqmEditProfile;
        "sqm-form-message": SqmFormMessage;
        "sqm-hook-story-container": SqmHookStoryContainer;
        "sqm-leaderboard": SqmLeaderboard;
        "sqm-leaderboard-rank": SqmLeaderboardRank;
        "sqm-navigation-menu": SqmNavigationMenu;
        "sqm-popup-container": SqmPopupContainer;
        "sqm-portal-frame": SqmPortalFrame;
        "sqm-route": SqmRoute;
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
            "select-test": LocalJSX.SelectTest & JSXBase.HTMLAttributes<HTMLSelectTestElement>;
            "sqm-big-stat": LocalJSX.SqmBigStat & JSXBase.HTMLAttributes<HTMLSqmBigStatElement>;
            "sqm-edit-profile": LocalJSX.SqmEditProfile & JSXBase.HTMLAttributes<HTMLSqmEditProfileElement>;
            "sqm-form-message": LocalJSX.SqmFormMessage & JSXBase.HTMLAttributes<HTMLSqmFormMessageElement>;
            "sqm-hook-story-container": LocalJSX.SqmHookStoryContainer & JSXBase.HTMLAttributes<HTMLSqmHookStoryContainerElement>;
            "sqm-leaderboard": LocalJSX.SqmLeaderboard & JSXBase.HTMLAttributes<HTMLSqmLeaderboardElement>;
            "sqm-leaderboard-rank": LocalJSX.SqmLeaderboardRank & JSXBase.HTMLAttributes<HTMLSqmLeaderboardRankElement>;
            "sqm-navigation-menu": LocalJSX.SqmNavigationMenu & JSXBase.HTMLAttributes<HTMLSqmNavigationMenuElement>;
            "sqm-popup-container": LocalJSX.SqmPopupContainer & JSXBase.HTMLAttributes<HTMLSqmPopupContainerElement>;
            "sqm-portal-frame": LocalJSX.SqmPortalFrame & JSXBase.HTMLAttributes<HTMLSqmPortalFrameElement>;
            "sqm-route": LocalJSX.SqmRoute & JSXBase.HTMLAttributes<HTMLSqmRouteElement>;
            "sqm-router": LocalJSX.SqmRouter & JSXBase.HTMLAttributes<HTMLSqmRouterElement>;
            "sqm-share-button": LocalJSX.SqmShareButton & JSXBase.HTMLAttributes<HTMLSqmShareButtonElement>;
            "sqm-share-link": LocalJSX.SqmShareLink & JSXBase.HTMLAttributes<HTMLSqmShareLinkElement>;
            "sqm-stencilbook": LocalJSX.SqmStencilbook & JSXBase.HTMLAttributes<HTMLSqmStencilbookElement>;
        }
    }
}
