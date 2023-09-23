import React from "react";
import { IconButton } from ".";

export default {
  tags: ["autodocs"],
  title: "Components / Button / IconButton",
  component: IconButton,
};

export const Functional = () => {
  const states = {
    0: false,
    1: false,
    2: false,
  };

  states[0] = true;

  return <IconButton icon="add" circle />;
};

// Text Button

export const iconMini = () => <IconButton icon="add" size="mini" />;
export const iconSmall = () => <IconButton icon="add" size="small" />;
export const iconMedium = () => <IconButton icon="add" size="medium" />;
export const iconLarge = () => <IconButton icon="add" size="large" />;

export const iconDisabledSmall = () => (
  <IconButton icon="add" size="small" disabled />
);
export const iconDisabledMedium = () => (
  <IconButton icon="add" size="medium" disabled />
);
export const iconDisabledLarge = () => (
  <IconButton icon="add" size="large" disabled />
);

export const iconCircleSmall = () => (
  <IconButton icon="add" size="small" circle />
);
export const iconCircleMedium = () => (
  <IconButton icon="add" size="medium" circle />
);
export const iconCircleLarge = () => (
  <IconButton icon="add" size="large" circle />
);

export const iconDisabledCircleSmall = () => (
  <IconButton icon="add" size="small" circle disabled />
);
export const iconDisabledCircleMedium = () => (
  <IconButton icon="add" size="medium" circle disabled />
);
export const iconDisabledCircleLarge = () => (
  <IconButton icon="add" size="large" circle disabled />
);

export const iconBorderlessSmall = () => (
  <IconButton icon="add" size="small" borderless />
);
export const iconBorderlessMedium = () => (
  <IconButton icon="add" size="medium" borderless />
);
export const iconBorderlessLarge = () => (
  <IconButton icon="add" size="large" borderless />
);

export const iconDisabledBorderlessSmall = () => (
  <IconButton icon="add" size="small" borderless disabled />
);
export const iconDisabledBorderlessMedium = () => (
  <IconButton icon="add" size="medium" borderless disabled />
);
export const iconDisabledBorderlessLarge = () => (
  <IconButton icon="add" size="large" borderless disabled />
);
