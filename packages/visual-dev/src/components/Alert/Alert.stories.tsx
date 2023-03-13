import React from "react";
import { AlertView } from ".";

export default {
  title: "Components / Alert",
  component: AlertView,
};

export const critical = () => (
  <AlertView type="critical" title="A critical alert">
    An explanation of what this alert is.
  </AlertView>
);
export const textCritical = () => (
  <AlertView type="textCritical">
    An explanation of what this alert is.
  </AlertView>
);
export const textCriticalLongText = () => (
  <AlertView type="textCritical">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab id
    facilis consequatur dolorum excepturi quae, ratione asperiores ducimus
    molestiae sit dignissimos reprehenderit natus doloremque ex quisquam totam
    molestias amet.
  </AlertView>
);
export const warning = () => (
  <AlertView type="warning" title="A warning alert">
    An explanation of what this alert is.
  </AlertView>
);
export const textWarning = () => (
  <AlertView type="textWarning">
    An explanation of what this alert is.
  </AlertView>
);
export const success = () => (
  <AlertView type="success" title="A success alert">
    An explanation of what this alert is.
  </AlertView>
);
export const info = () => (
  <AlertView type="info" title="An info alert">
    An explanation of what this alert is in multiple lines.
  </AlertView>
);
export const customCSS = () => (
  <AlertView
    type="success"
    title="An info alert"
    customCSS="background:red !important;"
  >
    An explanation of what this alert is in multiple lines.
  </AlertView>
);
