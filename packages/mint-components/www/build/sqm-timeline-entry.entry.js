import { h, r as registerInstance } from './index-832bd454.js';
import { n as h$1 } from './stencil-hooks.module-f4b05383.js';
import { c as createStyleSheet } from './JSS-f59933eb.js';
import { u as useRequestRerender } from './re-render-22c375e6.js';
import './extends-c31f1eff.js';
import './index.module-b74a7f69.js';

const Gift = () => (h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  h("path", { d: "M22.5 7.5H18.6761H13.5V24H20.75C21.3023 24 21.75 23.5523 21.75 23V22.5V13.5H22.5H23C23.5523 13.5 24 13.0523 24 12.5V12V9V8.5C24 7.94772 23.5523 7.5 23 7.5H22.5Z", fill: "#F2C94C" }),
  h("path", { d: "M2.25 22.5V23C2.25 23.5523 2.69772 24 3.25 24H10.5V7.5H6.96363H1.5H1C0.447715 7.5 0 7.94772 0 8.5V9V12V12.5C0 13.0523 0.447715 13.5 1 13.5H1.5H2.25V22.5Z", fill: "#F2C94C" }),
  h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.25 13.5V15H21.75V13.5H2.25Z", fill: "#BE9720" }),
  h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21 4.06424C21 5.39348 19.0041 7.4062 18 7.5H13.5V24H10.5027V7.5H6.88188C4.8187 7.05273 3 5.46806 3 3.78109C3 2.1371 3.71404 0.835051 5.01276 0.273062C6.25382 -0.26398 7.68678 0.0304991 8.81964 0.817C10.2101 1.78237 10.9902 3.59446 11.6978 5.2384C11.7599 5.38268 11.8215 5.52566 11.8828 5.66667C11.9426 5.53298 12.0028 5.3969 12.0638 5.25912C12.7649 3.67422 13.5654 1.86488 14.9106 0.893444C16.0997 0.0347157 17.6114 -0.289736 18.9181 0.298417C20.2693 0.906596 21 2.3018 21 4.06424ZM15.9185 2.25C16.6392 1.72957 17.502 1.63518 18.2396 2.25C18.8819 2.78542 18.9162 3.03745 18.9987 3.64389L19.0133 3.75C19.0133 4.64776 18.2396 6 17.4659 6C16.9177 6 16.4871 5.99537 16.0836 5.99103C15.3479 5.98312 14.702 5.97618 13.5974 6C13.808 5.59179 13.9761 5.20003 14.1365 4.82641C14.5654 3.82715 14.9386 2.95763 15.9185 2.25ZM7.40792 2.25C7.05911 2.00783 6.25921 2.11591 5.92748 2.25945C5.65341 2.37805 5.24403 2.73987 5.24403 3.78109C5.24403 4.79286 6.88188 5.66667 6.88188 5.66667C6.88188 5.66667 8.18161 6 10.5027 6C9.71258 4.04177 8.59336 3.073 7.40792 2.25Z", fill: "#EB5757" })));
const Circle = () => (h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  h("circle", { cx: "12", cy: "12", r: "9", fill: "currentColor", stroke: "currentColor", "stroke-width": "2" })));
const Line = () => (h("svg", { width: "4", height: "90", viewBox: "0 0 4 90", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
  h("line", { x1: "2", y1: "82", x2: "2", y2: "2", stroke: "currentColor", "stroke-width": "4", "stroke-linecap": "round" })));

let TimelineReward = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ignored = true;
    /**
     * @uiName Icon
     * @uiType string
     * @uiEnum ["gift", "circle"]
     */
    this.icon = "gift";
    h$1(this);
  }
  disconnectedCallback() { }
  render() {
    const style = {
      TimelineReward: {
        color: "var(--sl-color-neutral-900)",
        lineHeight: "var(--sl-line-height-dense)",
        "& .container": {
          display: "flex",
        },
        "& .line": {
          color: "transparent",
          userSelect: "none",
          background: "var(--sl-color-primary-300)",
          width: "4px",
          borderRadius: "4px",
          margin: "-2px",
          position: "relative",
          left: "12px",
          transform: "scaleY(0.95)",
          top: "16px",
        },
        "& .step": {
          display: "flex",
          minHeight: "100px",
        },
        "& .icon": {
          position: "relative",
          top: "4px",
          zIndex: "1",
          color: "var(--sl-color-primary-300)",
          marginRight: "var(--sl-spacing-large)",
        },
        "& .reward": {
          marginRight: "var(--sl-spacing-x-small)",
          fontSize: "var(--sl-font-size-x-large)",
          fontWeight: "var(--sl-font-weight-semibold)",
        },
        "& .unit": {
          textTransform: "uppercase",
          fontSize: "var(--sl-font-size-medium)",
        },
        "& .description": {
          fontSize: "var(--sl-font-size-large)",
          marginBottom: "var(--sl-spacing-xx-large)",
        },
      },
    };
    const sheet = createStyleSheet(style);
    const styleString = sheet.toString();
    const vanillaStyle = `
	:host{
		display: block;   
	}
	`;
    useRequestRerender([this.reward]);
    return (h("div", { class: sheet.classes.TimelineReward }, h("style", { type: "text/css" }, styleString, vanillaStyle), h("div", { class: "container" }, this.line && h("div", { class: "line" }, "."), h("div", { class: "step" }, this.icon === "gift" && (h("div", { class: "icon" }, h(Gift, null))), this.icon === "circle" && (h("div", { class: "icon" }, h(Circle, null))), h("div", null, h("div", null, h("span", { class: "reward" }, this.reward), h("span", { class: "unit" }, this.unit)), h("div", { class: "description" }, this.desc))))));
  }
};

export { TimelineReward as sqm_timeline_entry };
