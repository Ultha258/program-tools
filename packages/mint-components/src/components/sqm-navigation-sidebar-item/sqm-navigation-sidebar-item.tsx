import { isDemo } from "@saasquatch/component-boilerplate";
import { withHooks } from "@saasquatch/stencil-hooks";
import { Component, h, Prop } from "@stencil/core";
import { getProps } from "../../utils/utils";
import { NavigationSidebarItemView, NavigationSidebarItemViewProps } from "./sqm-navigation-sidebar-item-view";
import { useNavigationSidebarItem } from "./useNavigationSidebarItem";

/**
 * @uiName Navigation Link
 */
@Component({
  tag: "sqm-navigation-sidebar-item",
  shadow: true,
})
export class NavigationSidebarItem {

  /**
   * @uiName Navigation path
   */
  @Prop() path: string;
  /**
   * @uiName Icon
   */
  @Prop() icon: string;
  /**
   * @uiName Label
   */
  @Prop() label: string;

  constructor() {
    withHooks(this);
  }
  disconnectedCallback() {}

  render() {
    const props = isDemo()
      ? useSidebarItemDemo(getProps(this))
      : useNavigationSidebarItem(getProps(this));
    return <NavigationSidebarItemView {...props} />;
  }
}

function useSidebarItemDemo(props: NavigationSidebarItem): NavigationSidebarItemViewProps {
  return {
    states: {
      active: false,
    },
    data: {
      label: "Dashboard",
      icon: "house",
    },
    callbacks: {
      onClick: (e: MouseEvent) => console.log(e),
    },
  };
}
