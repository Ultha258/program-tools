import { h } from "@stencil/core";
import { AssetCardView } from "../components/sqm-asset-card/sqm-asset-card-view";
import { DividedLayoutView } from "../components/sqm-divided-layout/sqm-divided-layout-view";
import { NavigationSidebarItemView } from "../components/sqm-navigation-sidebar-item/sqm-navigation-sidebar-item-view";
import { NavigationSidebarView } from "../components/sqm-navigation-sidebar/sqm-navigation-sidebar-view";
import { PortalSectionView } from "../components/sqm-titled-section/sqm-portal-section-view";

export default {
  title: "Divided Layout",
};

const barProps = {
  data: {
    programs: [
      {
        key: "program1",
        label: "My Referral Program",
      },
      {
        key: "program2",
        label: "My Rewards Program",
      },
    ],
  },
};

const item1Props = {
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

const item2Props = {
  states: {
    active: true,
  },
  data: {
    label: "Activity",
    icon: "bar-chart",
  },
  callbacks: {
    onClick: (e: MouseEvent) => console.log(e),
  },
};

const Sidebar = () => {
  return (
    <NavigationSidebarView {...barProps}>
      <NavigationSidebarItemView {...item1Props} />
      <NavigationSidebarItemView {...item2Props} />
    </NavigationSidebarView>
  );
};

export const Row = () => {
  return (
    <DividedLayoutView {...{ direction: "row" }}>
      <Sidebar />
      <div style={{ padding: "48px" }}>
        <PortalSectionView
          {...{
            labelMargin: "xx-small",
            padding: "none",
            label: (
              <sqm-text>
                <p>Welcome back,</p>
              </sqm-text>
            ),
            content: (
              <sqm-text>
                <h1>Joe Smith</h1>
              </sqm-text>
            ),
          }}
        />
      </div>
    </DividedLayoutView>
  );
};

export const Column = () => {
  return (
    <DividedLayoutView {...{ direction: "column" }}>
      <Sidebar />
      <div style={{ padding: "48px" }}>
        <PortalSectionView
          {...{
            labelMargin: "xx-small",
            padding: "none",
            label: (
              <sqm-text>
                <p>Welcome back,</p>
              </sqm-text>
            ),
            content: (
              <sqm-text>
                <h1>Joe Smith</h1>
              </sqm-text>
            ),
          }}
        />
      </div>
    </DividedLayoutView>
  );
};
