import React, { useState } from "react";
import { Switch } from ".";

export default {
  title: "Components / Switch",
  component: Switch,
};

export const Functional = () => {
  const [enabled, setEnable] = useState(false);
  return (
    <Switch
      id="switch"
      checked={enabled}
      onChange={() => setEnable(!enabled)}
    />
  );
};

export const SuccessOff = () => <Switch checked={false} />;
export const SuccessOn = () => <Switch checked={true} />;
export const CriticalOff = () => <Switch color="critical" checked={false} />;
export const CriticalOn = () => <Switch color="critical" checked={true} />;
export const CustomCSS = () => (
  <Switch
    checked={true}
    customCSS={{
      border: "2px solid blue",
      padding: "4px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  />
);
