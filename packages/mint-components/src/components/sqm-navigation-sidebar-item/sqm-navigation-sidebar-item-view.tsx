import { h } from "@stencil/core";
import { createStyleSheet } from "../../styling/JSS";
import { gap } from "../../global/mixins";
import { navigation } from "@saasquatch/component-boilerplate";

export interface NavigationSidebarItemViewProps {
  states: {
    active: boolean;
  };
  data: {
    label: string;
    icon: string;
    path: string;
  };
}

export function NavigationSidebarItemView(
  props: NavigationSidebarItemViewProps
) {
  const { states, data } = props;

  const style = {
    ItemContainer: {
      display: "flex",
      "background-color": `${
        states.active ? "var(--sl-color-gray-200)" : "var(--sl-color-white)"
      }`,
      "border-radius": "8px",
      padding: "8px",
      "text-decoration": "none",
      color: "#454444",
      "align-items": "center",
      ...gap({ direction: "row" as const, size: "var(--sl-font-size-small)" }),
      "&:hover": {
        cursor: "pointer",
        background: states.active
          ? "var(--sl-color-gray-300)"
          : "var(--sl-color-gray-50)",
      },
    },
    Label: {
      margin: "0",
    },
    Icon: {
      "flex-shrink": "0",
    },
  };

  const sheet = createStyleSheet(style);
  const styleString = sheet.toString();

  return (
    <a
      part="sqm-navigation-item-link"
      href={data.path}
      onClick={(e) => {
        e.preventDefault();
        navigation.push(data.path);
      }}
      class={sheet.classes.ItemContainer}
    >
      <style type="text/css">{styleString}</style>
      <sl-icon class={sheet.classes.Icon} name={data.icon}></sl-icon>
      <p class={sheet.classes.Label} part="sqm-navigation-item-label">
        {data.label}
      </p>
    </a>
  );
}
