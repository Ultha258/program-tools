/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FunctionalComponent } from "@stencil/core";
export namespace Components {
    interface SqmAssetCard {
        /**
          * @uiName Banner image
         */
        "imgUrl": string;
        /**
          * @uiName Banner title
         */
        "titleText": string;
    }
    interface SqmBigStat {
        /**
          * Select what type of stat to display. Manual paths are also supported.
          * @uiWidget StatTypeSelectWidget
          * @uiName Stat Type
          * @uiOptions {"showGoals": true}
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
          * @uiName Show or hide current region
         */
        "showregion": boolean;
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
          * @uiName Leaderboard time interval
          * @uiWidget DateRange
          * @uiOptions {"allowPastDates":true, "months": 1}
         */
        "interval": string;
        /**
          * @uiName Leaderboard type
          * @uiType string
         */
        "leaderboardType": "topStartedReferrers" | "topConvertedReferrers";
        /**
          * @uiName Rank type
          * @uiType string
         */
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
          * @uiName Leaderboard time interval
          * @uiWidget DateRange
          * @uiOptions {"allowPastDates":true, "months": 1}
         */
        "interval": string;
        /**
          * @uiName Leaderboard type
          * @uiType string
         */
        "leaderboardType": "topStartedReferrers" | "topConvertedReferrers";
        "rankText": string;
        /**
          * @uiName Default rank
          * @uiType string
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
    interface SqmNavigationSidebar {
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
          * @uiType string
         */
        "embedPadding"?: "none" | "small" | "medium" | "large";
        /**
          * @uiName Specify padding on the popup contents when in popup mode
          * @uiType string
         */
        "popupPadding"?: "none" | "small" | "medium" | "large";
        /**
          * @uiName Show SaaSquatch Powered By messaging
         */
        "poweredBy": boolean;
    }
    interface SqmPortalContainer {
        /**
          * @uiName Direction
         */
        "direction": "row" | "column";
        /**
          * @uiName Gap
         */
        "gap": string;
        /**
          * @uiName Padding
         */
        "padding": string;
    }
    interface SqmPortalEmailVerification {
        "nextPageUrlParameter": string;
    }
    interface SqmPortalForgotPassword {
        "emailLabel": string;
        "nextPageUrlParameter": string;
        "submitLabel": string;
    }
    interface SqmPortalFrame {
    }
    interface SqmPortalLayout {
        /**
          * @uiName Direction
         */
        "direction": "row" | "column";
    }
    interface SqmPortalLogin {
        "emailLabel": string;
        "nextPage": string;
        "nextPageUrlParameter": string;
        "passwordLabel": string;
        "submitLabel": string;
    }
    interface SqmPortalLogout {
        "logoutOnRender": boolean;
        "nextPage": string;
    }
    interface SqmPortalProtectedRoute {
        "authenticated": any;
        "redirectTo": any;
        "redirectToUnverified": any;
        "verified": any;
    }
    interface SqmPortalRegister {
        "emailLabel": string;
        "nextPage": string;
        "nextPageUrlParameter": string;
        "passwordLabel": string;
        "submitLabel": string;
    }
    interface SqmPortalResetPassword {
        "nextPage": string;
        "nextPageUrlParameter": string;
    }
    interface SqmPortalSection {
        /**
          * @uiName Label margin style
         */
        "labelMargin": string;
        /**
          * @uiName Section padding
         */
        "padding": string;
    }
    interface SqmPortalVerifyEmail {
        "nextPage": string;
        "nextPageUrlParameter": string;
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
    interface SqmSidebarItem {
        /**
          * @uiName Icon
         */
        "icon": string;
        /**
          * @uiName Label
         */
        "label": string;
        /**
          * @uiName Navigation path
         */
        "path": string;
    }
    interface SqmStencilbook {
    }
    interface SqmText {
        /**
          * @uiName Text style
         */
        "type": "p" | "pLight" | "h1" | "h2" | "h3";
    }
}
declare global {
    interface HTMLSqmAssetCardElement extends Components.SqmAssetCard, HTMLStencilElement {
    }
    var HTMLSqmAssetCardElement: {
        prototype: HTMLSqmAssetCardElement;
        new (): HTMLSqmAssetCardElement;
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
    interface HTMLSqmNavigationSidebarElement extends Components.SqmNavigationSidebar, HTMLStencilElement {
    }
    var HTMLSqmNavigationSidebarElement: {
        prototype: HTMLSqmNavigationSidebarElement;
        new (): HTMLSqmNavigationSidebarElement;
    };
    interface HTMLSqmPopupContainerElement extends Components.SqmPopupContainer, HTMLStencilElement {
    }
    var HTMLSqmPopupContainerElement: {
        prototype: HTMLSqmPopupContainerElement;
        new (): HTMLSqmPopupContainerElement;
    };
    interface HTMLSqmPortalContainerElement extends Components.SqmPortalContainer, HTMLStencilElement {
    }
    var HTMLSqmPortalContainerElement: {
        prototype: HTMLSqmPortalContainerElement;
        new (): HTMLSqmPortalContainerElement;
    };
    interface HTMLSqmPortalEmailVerificationElement extends Components.SqmPortalEmailVerification, HTMLStencilElement {
    }
    var HTMLSqmPortalEmailVerificationElement: {
        prototype: HTMLSqmPortalEmailVerificationElement;
        new (): HTMLSqmPortalEmailVerificationElement;
    };
    interface HTMLSqmPortalForgotPasswordElement extends Components.SqmPortalForgotPassword, HTMLStencilElement {
    }
    var HTMLSqmPortalForgotPasswordElement: {
        prototype: HTMLSqmPortalForgotPasswordElement;
        new (): HTMLSqmPortalForgotPasswordElement;
    };
    interface HTMLSqmPortalFrameElement extends Components.SqmPortalFrame, HTMLStencilElement {
    }
    var HTMLSqmPortalFrameElement: {
        prototype: HTMLSqmPortalFrameElement;
        new (): HTMLSqmPortalFrameElement;
    };
    interface HTMLSqmPortalLayoutElement extends Components.SqmPortalLayout, HTMLStencilElement {
    }
    var HTMLSqmPortalLayoutElement: {
        prototype: HTMLSqmPortalLayoutElement;
        new (): HTMLSqmPortalLayoutElement;
    };
    interface HTMLSqmPortalLoginElement extends Components.SqmPortalLogin, HTMLStencilElement {
    }
    var HTMLSqmPortalLoginElement: {
        prototype: HTMLSqmPortalLoginElement;
        new (): HTMLSqmPortalLoginElement;
    };
    interface HTMLSqmPortalLogoutElement extends Components.SqmPortalLogout, HTMLStencilElement {
    }
    var HTMLSqmPortalLogoutElement: {
        prototype: HTMLSqmPortalLogoutElement;
        new (): HTMLSqmPortalLogoutElement;
    };
    interface HTMLSqmPortalProtectedRouteElement extends Components.SqmPortalProtectedRoute, HTMLStencilElement {
    }
    var HTMLSqmPortalProtectedRouteElement: {
        prototype: HTMLSqmPortalProtectedRouteElement;
        new (): HTMLSqmPortalProtectedRouteElement;
    };
    interface HTMLSqmPortalRegisterElement extends Components.SqmPortalRegister, HTMLStencilElement {
    }
    var HTMLSqmPortalRegisterElement: {
        prototype: HTMLSqmPortalRegisterElement;
        new (): HTMLSqmPortalRegisterElement;
    };
    interface HTMLSqmPortalResetPasswordElement extends Components.SqmPortalResetPassword, HTMLStencilElement {
    }
    var HTMLSqmPortalResetPasswordElement: {
        prototype: HTMLSqmPortalResetPasswordElement;
        new (): HTMLSqmPortalResetPasswordElement;
    };
    interface HTMLSqmPortalSectionElement extends Components.SqmPortalSection, HTMLStencilElement {
    }
    var HTMLSqmPortalSectionElement: {
        prototype: HTMLSqmPortalSectionElement;
        new (): HTMLSqmPortalSectionElement;
    };
    interface HTMLSqmPortalVerifyEmailElement extends Components.SqmPortalVerifyEmail, HTMLStencilElement {
    }
    var HTMLSqmPortalVerifyEmailElement: {
        prototype: HTMLSqmPortalVerifyEmailElement;
        new (): HTMLSqmPortalVerifyEmailElement;
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
    interface HTMLSqmSidebarItemElement extends Components.SqmSidebarItem, HTMLStencilElement {
    }
    var HTMLSqmSidebarItemElement: {
        prototype: HTMLSqmSidebarItemElement;
        new (): HTMLSqmSidebarItemElement;
    };
    interface HTMLSqmStencilbookElement extends Components.SqmStencilbook, HTMLStencilElement {
    }
    var HTMLSqmStencilbookElement: {
        prototype: HTMLSqmStencilbookElement;
        new (): HTMLSqmStencilbookElement;
    };
    interface HTMLSqmTextElement extends Components.SqmText, HTMLStencilElement {
    }
    var HTMLSqmTextElement: {
        prototype: HTMLSqmTextElement;
        new (): HTMLSqmTextElement;
    };
    interface HTMLElementTagNameMap {
        "sqm-asset-card": HTMLSqmAssetCardElement;
        "sqm-big-stat": HTMLSqmBigStatElement;
        "sqm-edit-profile": HTMLSqmEditProfileElement;
        "sqm-form-message": HTMLSqmFormMessageElement;
        "sqm-hook-story-container": HTMLSqmHookStoryContainerElement;
        "sqm-leaderboard": HTMLSqmLeaderboardElement;
        "sqm-leaderboard-rank": HTMLSqmLeaderboardRankElement;
        "sqm-navigation-menu": HTMLSqmNavigationMenuElement;
        "sqm-navigation-sidebar": HTMLSqmNavigationSidebarElement;
        "sqm-popup-container": HTMLSqmPopupContainerElement;
        "sqm-portal-container": HTMLSqmPortalContainerElement;
        "sqm-portal-email-verification": HTMLSqmPortalEmailVerificationElement;
        "sqm-portal-forgot-password": HTMLSqmPortalForgotPasswordElement;
        "sqm-portal-frame": HTMLSqmPortalFrameElement;
        "sqm-portal-layout": HTMLSqmPortalLayoutElement;
        "sqm-portal-login": HTMLSqmPortalLoginElement;
        "sqm-portal-logout": HTMLSqmPortalLogoutElement;
        "sqm-portal-protected-route": HTMLSqmPortalProtectedRouteElement;
        "sqm-portal-register": HTMLSqmPortalRegisterElement;
        "sqm-portal-reset-password": HTMLSqmPortalResetPasswordElement;
        "sqm-portal-section": HTMLSqmPortalSectionElement;
        "sqm-portal-verify-email": HTMLSqmPortalVerifyEmailElement;
        "sqm-route": HTMLSqmRouteElement;
        "sqm-router": HTMLSqmRouterElement;
        "sqm-share-button": HTMLSqmShareButtonElement;
        "sqm-share-link": HTMLSqmShareLinkElement;
        "sqm-sidebar-item": HTMLSqmSidebarItemElement;
        "sqm-stencilbook": HTMLSqmStencilbookElement;
        "sqm-text": HTMLSqmTextElement;
    }
}
declare namespace LocalJSX {
    interface SqmAssetCard {
        /**
          * @uiName Banner image
         */
        "imgUrl"?: string;
        /**
          * @uiName Banner title
         */
        "titleText"?: string;
    }
    interface SqmBigStat {
        /**
          * Select what type of stat to display. Manual paths are also supported.
          * @uiWidget StatTypeSelectWidget
          * @uiName Stat Type
          * @uiOptions {"showGoals": true}
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
          * @uiName Show or hide current region
         */
        "showregion"?: boolean;
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
          * @uiName Leaderboard time interval
          * @uiWidget DateRange
          * @uiOptions {"allowPastDates":true, "months": 1}
         */
        "interval"?: string;
        /**
          * @uiName Leaderboard type
          * @uiType string
         */
        "leaderboardType"?: "topStartedReferrers" | "topConvertedReferrers";
        /**
          * @uiName Rank type
          * @uiType string
         */
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
          * @uiName Leaderboard time interval
          * @uiWidget DateRange
          * @uiOptions {"allowPastDates":true, "months": 1}
         */
        "interval"?: string;
        /**
          * @uiName Leaderboard type
          * @uiType string
         */
        "leaderboardType"?: "topStartedReferrers" | "topConvertedReferrers";
        "rankText"?: string;
        /**
          * @uiName Default rank
          * @uiType string
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
    interface SqmNavigationSidebar {
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
          * @uiType string
         */
        "embedPadding"?: "none" | "small" | "medium" | "large";
        /**
          * @uiName Specify padding on the popup contents when in popup mode
          * @uiType string
         */
        "popupPadding"?: "none" | "small" | "medium" | "large";
        /**
          * @uiName Show SaaSquatch Powered By messaging
         */
        "poweredBy"?: boolean;
    }
    interface SqmPortalContainer {
        /**
          * @uiName Direction
         */
        "direction"?: "row" | "column";
        /**
          * @uiName Gap
         */
        "gap"?: string;
        /**
          * @uiName Padding
         */
        "padding"?: string;
    }
    interface SqmPortalEmailVerification {
        "nextPageUrlParameter"?: string;
    }
    interface SqmPortalForgotPassword {
        "emailLabel"?: string;
        "nextPageUrlParameter"?: string;
        "submitLabel"?: string;
    }
    interface SqmPortalFrame {
    }
    interface SqmPortalLayout {
        /**
          * @uiName Direction
         */
        "direction"?: "row" | "column";
    }
    interface SqmPortalLogin {
        "emailLabel"?: string;
        "nextPage"?: string;
        "nextPageUrlParameter"?: string;
        "passwordLabel"?: string;
        "submitLabel"?: string;
    }
    interface SqmPortalLogout {
        "logoutOnRender"?: boolean;
        "nextPage"?: string;
    }
    interface SqmPortalProtectedRoute {
        "authenticated"?: any;
        "redirectTo"?: any;
        "redirectToUnverified"?: any;
        "verified"?: any;
    }
    interface SqmPortalRegister {
        "emailLabel"?: string;
        "nextPage"?: string;
        "nextPageUrlParameter"?: string;
        "passwordLabel"?: string;
        "submitLabel"?: string;
    }
    interface SqmPortalResetPassword {
        "nextPage"?: string;
        "nextPageUrlParameter"?: string;
    }
    interface SqmPortalSection {
        /**
          * @uiName Label margin style
         */
        "labelMargin"?: string;
        /**
          * @uiName Section padding
         */
        "padding"?: string;
    }
    interface SqmPortalVerifyEmail {
        "nextPage"?: string;
        "nextPageUrlParameter"?: string;
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
    interface SqmSidebarItem {
        /**
          * @uiName Icon
         */
        "icon"?: string;
        /**
          * @uiName Label
         */
        "label"?: string;
        /**
          * @uiName Navigation path
         */
        "path"?: string;
    }
    interface SqmStencilbook {
    }
    interface SqmText {
        /**
          * @uiName Text style
         */
        "type"?: "p" | "pLight" | "h1" | "h2" | "h3";
    }
    interface IntrinsicElements {
        "sqm-asset-card": SqmAssetCard;
        "sqm-big-stat": SqmBigStat;
        "sqm-edit-profile": SqmEditProfile;
        "sqm-form-message": SqmFormMessage;
        "sqm-hook-story-container": SqmHookStoryContainer;
        "sqm-leaderboard": SqmLeaderboard;
        "sqm-leaderboard-rank": SqmLeaderboardRank;
        "sqm-navigation-menu": SqmNavigationMenu;
        "sqm-navigation-sidebar": SqmNavigationSidebar;
        "sqm-popup-container": SqmPopupContainer;
        "sqm-portal-container": SqmPortalContainer;
        "sqm-portal-email-verification": SqmPortalEmailVerification;
        "sqm-portal-forgot-password": SqmPortalForgotPassword;
        "sqm-portal-frame": SqmPortalFrame;
        "sqm-portal-layout": SqmPortalLayout;
        "sqm-portal-login": SqmPortalLogin;
        "sqm-portal-logout": SqmPortalLogout;
        "sqm-portal-protected-route": SqmPortalProtectedRoute;
        "sqm-portal-register": SqmPortalRegister;
        "sqm-portal-reset-password": SqmPortalResetPassword;
        "sqm-portal-section": SqmPortalSection;
        "sqm-portal-verify-email": SqmPortalVerifyEmail;
        "sqm-route": SqmRoute;
        "sqm-router": SqmRouter;
        "sqm-share-button": SqmShareButton;
        "sqm-share-link": SqmShareLink;
        "sqm-sidebar-item": SqmSidebarItem;
        "sqm-stencilbook": SqmStencilbook;
        "sqm-text": SqmText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sqm-asset-card": LocalJSX.SqmAssetCard & JSXBase.HTMLAttributes<HTMLSqmAssetCardElement>;
            "sqm-big-stat": LocalJSX.SqmBigStat & JSXBase.HTMLAttributes<HTMLSqmBigStatElement>;
            "sqm-edit-profile": LocalJSX.SqmEditProfile & JSXBase.HTMLAttributes<HTMLSqmEditProfileElement>;
            "sqm-form-message": LocalJSX.SqmFormMessage & JSXBase.HTMLAttributes<HTMLSqmFormMessageElement>;
            "sqm-hook-story-container": LocalJSX.SqmHookStoryContainer & JSXBase.HTMLAttributes<HTMLSqmHookStoryContainerElement>;
            "sqm-leaderboard": LocalJSX.SqmLeaderboard & JSXBase.HTMLAttributes<HTMLSqmLeaderboardElement>;
            "sqm-leaderboard-rank": LocalJSX.SqmLeaderboardRank & JSXBase.HTMLAttributes<HTMLSqmLeaderboardRankElement>;
            "sqm-navigation-menu": LocalJSX.SqmNavigationMenu & JSXBase.HTMLAttributes<HTMLSqmNavigationMenuElement>;
            "sqm-navigation-sidebar": LocalJSX.SqmNavigationSidebar & JSXBase.HTMLAttributes<HTMLSqmNavigationSidebarElement>;
            "sqm-popup-container": LocalJSX.SqmPopupContainer & JSXBase.HTMLAttributes<HTMLSqmPopupContainerElement>;
            "sqm-portal-container": LocalJSX.SqmPortalContainer & JSXBase.HTMLAttributes<HTMLSqmPortalContainerElement>;
            "sqm-portal-email-verification": LocalJSX.SqmPortalEmailVerification & JSXBase.HTMLAttributes<HTMLSqmPortalEmailVerificationElement>;
            "sqm-portal-forgot-password": LocalJSX.SqmPortalForgotPassword & JSXBase.HTMLAttributes<HTMLSqmPortalForgotPasswordElement>;
            "sqm-portal-frame": LocalJSX.SqmPortalFrame & JSXBase.HTMLAttributes<HTMLSqmPortalFrameElement>;
            "sqm-portal-layout": LocalJSX.SqmPortalLayout & JSXBase.HTMLAttributes<HTMLSqmPortalLayoutElement>;
            "sqm-portal-login": LocalJSX.SqmPortalLogin & JSXBase.HTMLAttributes<HTMLSqmPortalLoginElement>;
            "sqm-portal-logout": LocalJSX.SqmPortalLogout & JSXBase.HTMLAttributes<HTMLSqmPortalLogoutElement>;
            "sqm-portal-protected-route": LocalJSX.SqmPortalProtectedRoute & JSXBase.HTMLAttributes<HTMLSqmPortalProtectedRouteElement>;
            "sqm-portal-register": LocalJSX.SqmPortalRegister & JSXBase.HTMLAttributes<HTMLSqmPortalRegisterElement>;
            "sqm-portal-reset-password": LocalJSX.SqmPortalResetPassword & JSXBase.HTMLAttributes<HTMLSqmPortalResetPasswordElement>;
            "sqm-portal-section": LocalJSX.SqmPortalSection & JSXBase.HTMLAttributes<HTMLSqmPortalSectionElement>;
            "sqm-portal-verify-email": LocalJSX.SqmPortalVerifyEmail & JSXBase.HTMLAttributes<HTMLSqmPortalVerifyEmailElement>;
            "sqm-route": LocalJSX.SqmRoute & JSXBase.HTMLAttributes<HTMLSqmRouteElement>;
            "sqm-router": LocalJSX.SqmRouter & JSXBase.HTMLAttributes<HTMLSqmRouterElement>;
            "sqm-share-button": LocalJSX.SqmShareButton & JSXBase.HTMLAttributes<HTMLSqmShareButtonElement>;
            "sqm-share-link": LocalJSX.SqmShareLink & JSXBase.HTMLAttributes<HTMLSqmShareLinkElement>;
            "sqm-sidebar-item": LocalJSX.SqmSidebarItem & JSXBase.HTMLAttributes<HTMLSqmSidebarItemElement>;
            "sqm-stencilbook": LocalJSX.SqmStencilbook & JSXBase.HTMLAttributes<HTMLSqmStencilbookElement>;
            "sqm-text": LocalJSX.SqmText & JSXBase.HTMLAttributes<HTMLSqmTextElement>;
        }
    }
}
