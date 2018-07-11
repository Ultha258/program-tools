/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface SqhCloseButton {
      'text': string;
    }
  }

  interface HTMLSqhCloseButtonElement extends StencilComponents.SqhCloseButton, HTMLStencilElement {}

  var HTMLSqhCloseButtonElement: {
    prototype: HTMLSqhCloseButtonElement;
    new (): HTMLSqhCloseButtonElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-close-button': HTMLSqhCloseButtonElement;
  }
  interface ElementTagNameMap {
    'sqh-close-button': HTMLSqhCloseButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-close-button': JSXElements.SqhCloseButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhCloseButtonAttributes extends HTMLAttributes {
      'text'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhCopyLinkButton {
      'buttoncolor': string;
      'hidden': boolean;
      'text': string;
      'textcolor': string;
    }
  }

  interface HTMLSqhCopyLinkButtonElement extends StencilComponents.SqhCopyLinkButton, HTMLStencilElement {}

  var HTMLSqhCopyLinkButtonElement: {
    prototype: HTMLSqhCopyLinkButtonElement;
    new (): HTMLSqhCopyLinkButtonElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-copy-link-button': HTMLSqhCopyLinkButtonElement;
  }
  interface ElementTagNameMap {
    'sqh-copy-link-button': HTMLSqhCopyLinkButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-copy-link-button': JSXElements.SqhCopyLinkButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhCopyLinkButtonAttributes extends HTMLAttributes {
      'buttoncolor'?: string;
      'hidden'?: boolean;
      'text'?: string;
      'textcolor'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhEmailShareButton {
      'backgroundcolor': string;
      'displayrule': string;
      'emailbody': string;
      'emailsubject': string;
      'text': string;
      'textcolor': string;
    }
  }

  interface HTMLSqhEmailShareButtonElement extends StencilComponents.SqhEmailShareButton, HTMLStencilElement {}

  var HTMLSqhEmailShareButtonElement: {
    prototype: HTMLSqhEmailShareButtonElement;
    new (): HTMLSqhEmailShareButtonElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-email-share-button': HTMLSqhEmailShareButtonElement;
  }
  interface ElementTagNameMap {
    'sqh-email-share-button': HTMLSqhEmailShareButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-email-share-button': JSXElements.SqhEmailShareButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhEmailShareButtonAttributes extends HTMLAttributes {
      'backgroundcolor'?: string;
      'displayrule'?: string;
      'emailbody'?: string;
      'emailsubject'?: string;
      'text'?: string;
      'textcolor'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhFacebookShareButton {
      'backgroundcolor': string;
      'displayrule': string;
      'text': string;
      'textcolor': string;
    }
  }

  interface HTMLSqhFacebookShareButtonElement extends StencilComponents.SqhFacebookShareButton, HTMLStencilElement {}

  var HTMLSqhFacebookShareButtonElement: {
    prototype: HTMLSqhFacebookShareButtonElement;
    new (): HTMLSqhFacebookShareButtonElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-facebook-share-button': HTMLSqhFacebookShareButtonElement;
  }
  interface ElementTagNameMap {
    'sqh-facebook-share-button': HTMLSqhFacebookShareButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-facebook-share-button': JSXElements.SqhFacebookShareButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhFacebookShareButtonAttributes extends HTMLAttributes {
      'backgroundcolor'?: string;
      'displayrule'?: string;
      'text'?: string;
      'textcolor'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhGlobalContainer {
      'background': string;
      'fontcolor': string;
      'fontfamily': string;
      'fontsize': string;
      'width': string;
    }
  }

  interface HTMLSqhGlobalContainerElement extends StencilComponents.SqhGlobalContainer, HTMLStencilElement {}

  var HTMLSqhGlobalContainerElement: {
    prototype: HTMLSqhGlobalContainerElement;
    new (): HTMLSqhGlobalContainerElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-global-container': HTMLSqhGlobalContainerElement;
  }
  interface ElementTagNameMap {
    'sqh-global-container': HTMLSqhGlobalContainerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-global-container': JSXElements.SqhGlobalContainerAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhGlobalContainerAttributes extends HTMLAttributes {
      'background'?: string;
      'fontcolor'?: string;
      'fontfamily'?: string;
      'fontsize'?: string;
      'width'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhLinkedinShareButton {
      'backgroundcolor': string;
      'displayrule': string;
      'link': string;
      'linktitle': string;
      'redirecturl': string;
      'sharebody': string;
      'shareimage': string;
      'summary': string;
      'text': string;
      'textcolor': string;
    }
  }

  interface HTMLSqhLinkedinShareButtonElement extends StencilComponents.SqhLinkedinShareButton, HTMLStencilElement {}

  var HTMLSqhLinkedinShareButtonElement: {
    prototype: HTMLSqhLinkedinShareButtonElement;
    new (): HTMLSqhLinkedinShareButtonElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-linkedin-share-button': HTMLSqhLinkedinShareButtonElement;
  }
  interface ElementTagNameMap {
    'sqh-linkedin-share-button': HTMLSqhLinkedinShareButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-linkedin-share-button': JSXElements.SqhLinkedinShareButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhLinkedinShareButtonAttributes extends HTMLAttributes {
      'backgroundcolor'?: string;
      'displayrule'?: string;
      'link'?: string;
      'linktitle'?: string;
      'redirecturl'?: string;
      'sharebody'?: string;
      'shareimage'?: string;
      'summary'?: string;
      'text'?: string;
      'textcolor'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhReferralComponent {
      'locale': string;
      'referral': any;
    }
  }

  interface HTMLSqhReferralComponentElement extends StencilComponents.SqhReferralComponent, HTMLStencilElement {}

  var HTMLSqhReferralComponentElement: {
    prototype: HTMLSqhReferralComponentElement;
    new (): HTMLSqhReferralComponentElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-referral-component': HTMLSqhReferralComponentElement;
  }
  interface ElementTagNameMap {
    'sqh-referral-component': HTMLSqhReferralComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-referral-component': JSXElements.SqhReferralComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhReferralComponentAttributes extends HTMLAttributes {
      'locale'?: string;
      'referral'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhReferralList {
      'dateformatting': string;
      'showreferrer': boolean;
      'userisreferred': boolean;
    }
  }

  interface HTMLSqhReferralListElement extends StencilComponents.SqhReferralList, HTMLStencilElement {}

  var HTMLSqhReferralListElement: {
    prototype: HTMLSqhReferralListElement;
    new (): HTMLSqhReferralListElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-referral-list': HTMLSqhReferralListElement;
  }
  interface ElementTagNameMap {
    'sqh-referral-list': HTMLSqhReferralListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-referral-list': JSXElements.SqhReferralListAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhReferralListAttributes extends HTMLAttributes {
      'dateformatting'?: string;
      'showreferrer'?: boolean;
      'userisreferred'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhRewardsActions {
      'hidetext': string;
      'nexttext': string;
      'previoustext': string;
    }
  }

  interface HTMLSqhRewardsActionsElement extends StencilComponents.SqhRewardsActions, HTMLStencilElement {}

  var HTMLSqhRewardsActionsElement: {
    prototype: HTMLSqhRewardsActionsElement;
    new (): HTMLSqhRewardsActionsElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-rewards-actions': HTMLSqhRewardsActionsElement;
  }
  interface ElementTagNameMap {
    'sqh-rewards-actions': HTMLSqhRewardsActionsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-rewards-actions': JSXElements.SqhRewardsActionsAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhRewardsActionsAttributes extends HTMLAttributes {
      'hidetext'?: string;
      'nexttext'?: string;
      'previoustext'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhShareButtonContainer {
      'emailcolor': string;
      'emaildisplayrule': string;
      'emailtext': string;
      'facebookcolor': string;
      'facebookdisplayrule': string;
      'facebooktext': string;
      'hidden': boolean;
      'maxwidth': string;
      'smscolor': string;
      'smsdisplayrule': string;
      'smstext': string;
      'twittercolor': string;
      'twitterdisplayrule': string;
      'twittertext': string;
      'whatsappcolor': string;
      'whatsappdisplayrule': string;
      'whatsapptext': string;
    }
  }

  interface HTMLSqhShareButtonContainerElement extends StencilComponents.SqhShareButtonContainer, HTMLStencilElement {}

  var HTMLSqhShareButtonContainerElement: {
    prototype: HTMLSqhShareButtonContainerElement;
    new (): HTMLSqhShareButtonContainerElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-share-button-container': HTMLSqhShareButtonContainerElement;
  }
  interface ElementTagNameMap {
    'sqh-share-button-container': HTMLSqhShareButtonContainerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-share-button-container': JSXElements.SqhShareButtonContainerAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhShareButtonContainerAttributes extends HTMLAttributes {
      'emailcolor'?: string;
      'emaildisplayrule'?: string;
      'emailtext'?: string;
      'facebookcolor'?: string;
      'facebookdisplayrule'?: string;
      'facebooktext'?: string;
      'hidden'?: boolean;
      'maxwidth'?: string;
      'smscolor'?: string;
      'smsdisplayrule'?: string;
      'smstext'?: string;
      'twittercolor'?: string;
      'twitterdisplayrule'?: string;
      'twittertext'?: string;
      'whatsappcolor'?: string;
      'whatsappdisplayrule'?: string;
      'whatsapptext'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhSmsShareButton {
      'backgroundcolor': string;
      'displayrule': string;
      'sharebody': string;
      'text': string;
      'textcolor': string;
    }
  }

  interface HTMLSqhSmsShareButtonElement extends StencilComponents.SqhSmsShareButton, HTMLStencilElement {}

  var HTMLSqhSmsShareButtonElement: {
    prototype: HTMLSqhSmsShareButtonElement;
    new (): HTMLSqhSmsShareButtonElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-sms-share-button': HTMLSqhSmsShareButtonElement;
  }
  interface ElementTagNameMap {
    'sqh-sms-share-button': HTMLSqhSmsShareButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-sms-share-button': JSXElements.SqhSmsShareButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhSmsShareButtonAttributes extends HTMLAttributes {
      'backgroundcolor'?: string;
      'displayrule'?: string;
      'sharebody'?: string;
      'text'?: string;
      'textcolor'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhStatsComponent {
      'friendsreferred': string;
      'rewardsearned': string;
      'rewardspending': string;
      'text': string;
    }
  }

  interface HTMLSqhStatsComponentElement extends StencilComponents.SqhStatsComponent, HTMLStencilElement {}

  var HTMLSqhStatsComponentElement: {
    prototype: HTMLSqhStatsComponentElement;
    new (): HTMLSqhStatsComponentElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-stats-component': HTMLSqhStatsComponentElement;
  }
  interface ElementTagNameMap {
    'sqh-stats-component': HTMLSqhStatsComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-stats-component': JSXElements.SqhStatsComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhStatsComponentAttributes extends HTMLAttributes {
      'friendsreferred'?: string;
      'rewardsearned'?: string;
      'rewardspending'?: string;
      'text'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhTextComponent {
      'background': string;
      'color': string;
      'fontfamily': string;
      'fontsize': string;
      'height': string;
      'hidden': boolean;
      'ismarkdown': boolean;
      'padding': string;
      'text': string;
      'textalign': string;
    }
  }

  interface HTMLSqhTextComponentElement extends StencilComponents.SqhTextComponent, HTMLStencilElement {}

  var HTMLSqhTextComponentElement: {
    prototype: HTMLSqhTextComponentElement;
    new (): HTMLSqhTextComponentElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-text-component': HTMLSqhTextComponentElement;
  }
  interface ElementTagNameMap {
    'sqh-text-component': HTMLSqhTextComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-text-component': JSXElements.SqhTextComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhTextComponentAttributes extends HTMLAttributes {
      'background'?: string;
      'color'?: string;
      'fontfamily'?: string;
      'fontsize'?: string;
      'height'?: string;
      'hidden'?: boolean;
      'ismarkdown'?: boolean;
      'padding'?: string;
      'text'?: string;
      'textalign'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhTwitterShareButton {
      'backgroundcolor': string;
      'displayrule': string;
      'text': string;
      'textcolor': string;
      'twmessage': string;
    }
  }

  interface HTMLSqhTwitterShareButtonElement extends StencilComponents.SqhTwitterShareButton, HTMLStencilElement {}

  var HTMLSqhTwitterShareButtonElement: {
    prototype: HTMLSqhTwitterShareButtonElement;
    new (): HTMLSqhTwitterShareButtonElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-twitter-share-button': HTMLSqhTwitterShareButtonElement;
  }
  interface ElementTagNameMap {
    'sqh-twitter-share-button': HTMLSqhTwitterShareButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-twitter-share-button': JSXElements.SqhTwitterShareButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhTwitterShareButtonAttributes extends HTMLAttributes {
      'backgroundcolor'?: string;
      'displayrule'?: string;
      'text'?: string;
      'textcolor'?: string;
      'twmessage'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SqhWhatsappShareButton {
      'backgroundcolor': string;
      'bordercolor': string;
      'displayrule': string;
      'sharebody': string;
      'text': string;
      'textcolor': string;
    }
  }

  interface HTMLSqhWhatsappShareButtonElement extends StencilComponents.SqhWhatsappShareButton, HTMLStencilElement {}

  var HTMLSqhWhatsappShareButtonElement: {
    prototype: HTMLSqhWhatsappShareButtonElement;
    new (): HTMLSqhWhatsappShareButtonElement;
  };
  interface HTMLElementTagNameMap {
    'sqh-whatsapp-share-button': HTMLSqhWhatsappShareButtonElement;
  }
  interface ElementTagNameMap {
    'sqh-whatsapp-share-button': HTMLSqhWhatsappShareButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'sqh-whatsapp-share-button': JSXElements.SqhWhatsappShareButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SqhWhatsappShareButtonAttributes extends HTMLAttributes {
      'backgroundcolor'?: string;
      'bordercolor'?: string;
      'displayrule'?: string;
      'sharebody'?: string;
      'text'?: string;
      'textcolor'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;