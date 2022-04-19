import React from "react";
import { IconView } from ".";

export default {
  title: "Components / Icon",
  component: IconView,
};

export const add = () => <IconView icon={"add"} />;
export const SizeSmall = () => <IconView size="small" icon={"add"} />;
export const SizeMedium = () => <IconView size="medium" icon={"add"} />;
export const SizeLarge = () => <IconView size="large" icon={"add"} />;
export const SizeBadge = () => <IconView size="badge" icon={"add"} />;
export const SizeCustom = () => <IconView size="88px" icon={"add"} />;
export const CSSCustom = () => (
  <IconView
    customCSS="color: red; width: 50px; height: 50px; margin-left: 50px;"
    icon={"add"}
  />
);
export const close = () => <IconView icon={"close"} />;
export const ChevronDown = () => <IconView icon={"chevron_down"} />;
export const ChevronUp = () => <IconView icon={"chevron_up"} />;
export const calendar = () => <IconView icon={"calendar"} />;
export const block = () => <IconView icon={"block"} />;
export const edit = () => <IconView icon={"edit"} />;
export const checkmark = () => <IconView icon={"checkmark"} />;
export const CheckmarkCircle = () => <IconView icon={"checkmark_circle"} />;
export const actions = () => <IconView icon={"actions"} />;
export const ChevronLeft = () => <IconView icon={"chevron_left"} />;
export const ChevronRight = () => <IconView icon={"chevron_right"} />;
export const DoubleChevronLeft = () => (
  <IconView icon={"double_chevron_left"} />
);
export const DoubleChevronRight = () => (
  <IconView icon={"double_chevron_right"} />
);
export const mail = () => <IconView icon={"mail"} />;
export const action = () => <IconView icon={"action"} />;
export const arrowDropdown = () => <IconView icon={"arrow_dropdown"} />;
export const help = () => <IconView icon={"help"} />;
export const loading = () => (
  <IconView color="var(--sq-action-primary)" icon={"loading"} />
);
export const gift = () => <IconView icon={"gift"} />;
export const copy = () => (
  <IconView color="var(--sq-action-primary)" icon={"copy"} />
);
export const alert = () => <IconView icon={"alert"} />;
export const search = () => <IconView icon={"search"} />;
export const filter = () => <IconView icon={"filter"} />;
export const trash = () => <IconView icon={"trash"} />;
export const info = () => <IconView icon={"info"} />;
export const settings = () => <IconView icon={"settings"} />;
export const avatar = () => <IconView icon={"avatar"} />;
export const leftwardArrow = () => <IconView icon={"leftward_arrow"} />;
export const visibility = () => <IconView icon={"visibility"} />;
export const layers = () => <IconView icon={"layers"} />;
