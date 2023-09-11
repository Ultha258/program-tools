var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
/*! Built with http://stenciljs.com */
import { h } from './widget-components.core.js';
import { a as css } from './chunk-06494afc.js';
import './chunk-7081a6f1.js';
var GlobalContainer = /** @class */ (function () {
    function GlobalContainer() {
        this.poweredby = true;
    }
    GlobalContainer.prototype.LoadingState = function () {
        return (h("div", { class: "container-loading" }, h("div", { class: "loading-icon" }, h("div", { class: "bar1" }), h("div", { class: "bar2" }), h("div", { class: "bar3" }), h("div", { class: "bar4" }), h("div", { class: "bar5" }))));
    };
    GlobalContainer.prototype.render = function () {
        var style = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n      font-family: ", ";\n      position: relative;\n      max-width: ", ";\n    "], ["\n      background-color: ", ";\n      font-family: ", ";\n      position: relative;\n      max-width: ", ";\n    "])), this.background, this.fontfamily, this.maxwidth);
        var fontImport = h("link", { href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap', rel: 'stylesheet' });
        return h("div", { class: style }, this.fontfamily == "Roboto" ? fontImport : '', h("slot", null), this.poweredby
            ? h("a", { class: "sqh-attribution", href: "https://www.saasquatch.com/?utm_source=app&utm_medium=user-widget&utm_campaign=referral-widget", target: "_blank" }, "Powered By Saasquatch")
            : '', h(this.LoadingState, null));
    };
    Object.defineProperty(GlobalContainer, "is", {
        get: function () { return "sqh-global-container"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalContainer, "properties", {
        get: function () {
            return {
                "background": {
                    "type": String,
                    "attr": "background"
                },
                "fontfamily": {
                    "type": String,
                    "attr": "fontfamily"
                },
                "maxwidth": {
                    "type": String,
                    "attr": "maxwidth"
                },
                "poweredby": {
                    "type": Boolean,
                    "attr": "poweredby"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalContainer, "style", {
        get: function () { return "body {\n  margin: 0px;\n  padding: 0px;\n  font-family: sans-serif; }\n\nsqh-global-container {\n  display: block;\n  max-width: 500px;\n  margin: 0 auto; }\n  sqh-global-container * {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box; }\n  sqh-global-container > div {\n    width: 100%;\n    display: block;\n    padding: 0 10px; }\n  sqh-global-container .sqh-attribution {\n    display: inherit;\n    text-align: center;\n    font-size: 10px;\n    color: lightgray;\n    text-decoration: none;\n    padding-bottom: 10px; }\n  sqh-global-container .container-loading {\n    display: none;\n    left: calc(50% - 50px);\n    position: absolute;\n    text-align: center;\n    top: 45%;\n    width: 100px; }\n  sqh-global-container:not(.hydrated) .container-loading {\n    display: block;\n    visibility: visible; }\n  sqh-global-container .loading-icon {\n    height: 40px;\n    text-align: center;\n    font-size: 10px;\n    position: absolute;\n    left: 0;\n    width: 100%;\n    top: 45%;\n    z-index: 1000; }\n  sqh-global-container .loading-icon-tr .loading-icon {\n    position: relative;\n    top: 0; }\n  sqh-global-container .loading-icon > div {\n    background-color: #439B76;\n    height: 100%;\n    margin: 1px;\n    width: 6px;\n    display: inline-block;\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n  sqh-global-container .loading-icon .bar2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s; }\n  sqh-global-container .loading-icon .bar3 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s; }\n  sqh-global-container .loading-icon .bar4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s; }\n  sqh-global-container .loading-icon .bar5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s; }\n\n\@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n\@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }"; },
        enumerable: true,
        configurable: true
    });
    return GlobalContainer;
}());
export { GlobalContainer as SqhGlobalContainer };
var templateObject_1;
