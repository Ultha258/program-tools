/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


import {
  CopyLinkButton as CopyLinkButton
} from './components/copy-link-button/copy-link-button';

declare global {
  interface HTMLCopyLinkButtonElement extends CopyLinkButton, HTMLElement {
  }
  var HTMLCopyLinkButtonElement: {
    prototype: HTMLCopyLinkButtonElement;
    new (): HTMLCopyLinkButtonElement;
  };
  interface HTMLElementTagNameMap {
    "copy-link-button": HTMLCopyLinkButtonElement;
  }
  interface ElementTagNameMap {
    "copy-link-button": HTMLCopyLinkButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "copy-link-button": JSXElements.CopyLinkButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface CopyLinkButtonAttributes extends HTMLAttributes {
      shareLink?: string;
    }
  }
}


import {
  StatsComponent as RewardsActions
} from './components/rewards-actions/rewards-actions';

declare global {
  interface HTMLRewardsActionsElement extends RewardsActions, HTMLElement {
  }
  var HTMLRewardsActionsElement: {
    prototype: HTMLRewardsActionsElement;
    new (): HTMLRewardsActionsElement;
  };
  interface HTMLElementTagNameMap {
    "rewards-actions": HTMLRewardsActionsElement;
  }
  interface ElementTagNameMap {
    "rewards-actions": HTMLRewardsActionsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "rewards-actions": JSXElements.RewardsActionsAttributes;
    }
  }
  namespace JSXElements {
    export interface RewardsActionsAttributes extends HTMLAttributes {
      hideText?: string;
      nextText?: string;
      previousText?: string;
    }
  }
}


import {
  RewardsList as RewardsList
} from './components/rewards-list/rewards-list';

declare global {
  interface HTMLRewardsListElement extends RewardsList, HTMLElement {
  }
  var HTMLRewardsListElement: {
    prototype: HTMLRewardsListElement;
    new (): HTMLRewardsListElement;
  };
  interface HTMLElementTagNameMap {
    "rewards-list": HTMLRewardsListElement;
  }
  interface ElementTagNameMap {
    "rewards-list": HTMLRewardsListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "rewards-list": JSXElements.RewardsListAttributes;
    }
  }
  namespace JSXElements {
    export interface RewardsListAttributes extends HTMLAttributes {
      dateFormatting?: string;
      showReferrer?: boolean;
      userIsReferred?: boolean;
    }
  }
}


import {
  StatsComponent as StatsComponent
} from './components/stats-component/stats-component';

declare global {
  interface HTMLStatsComponentElement extends StatsComponent, HTMLElement {
  }
  var HTMLStatsComponentElement: {
    prototype: HTMLStatsComponentElement;
    new (): HTMLStatsComponentElement;
  };
  interface HTMLElementTagNameMap {
    "stats-component": HTMLStatsComponentElement;
  }
  interface ElementTagNameMap {
    "stats-component": HTMLStatsComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stats-component": JSXElements.StatsComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface StatsComponentAttributes extends HTMLAttributes {
      friendsReferred?: string;
      rewardsEarned?: string;
      rewardsPending?: string;
      text?: string;
    }
  }
}


import {
  TextComponent as TextComponent
} from './components/text-component/text-component';

declare global {
  interface HTMLTextComponentElement extends TextComponent, HTMLElement {
  }
  var HTMLTextComponentElement: {
    prototype: HTMLTextComponentElement;
    new (): HTMLTextComponentElement;
  };
  interface HTMLElementTagNameMap {
    "text-component": HTMLTextComponentElement;
  }
  interface ElementTagNameMap {
    "text-component": HTMLTextComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "text-component": JSXElements.TextComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface TextComponentAttributes extends HTMLAttributes {
      fontSize?: string;
      text?: string;
      textAlign?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
