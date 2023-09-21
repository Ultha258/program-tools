/*! Built with http://stenciljs.com */
import{h}from"./widget-components.core.js";var RewardsActions=function(){function t(){this.previoustext="Previous",this.hidetext="Hide",this.nexttext="Next"}return t.prototype.render=function(){return h("div",{class:"squatch-referrals-actions"},h("button",{class:"btn btn-default disabled","data-scroll-element":"#squatch-referrals-scroll","data-scroll-increment":"-3"},this.previoustext),h("button",{class:"btn btn-default","data-close-panel":"#squatch-panel","data-scroll-reset":"#squatch-referrals-scroll"},this.hidetext),h("button",{class:"btn btn-default disabled","data-scroll-element":"#squatch-referrals-scroll","data-scroll-increment":"3"},this.nexttext))},Object.defineProperty(t,"is",{get:function(){return"sqh-rewards-actions"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{hidetext:{type:String,attr:"hidetext"},nexttext:{type:String,attr:"nexttext"},previoustext:{type:String,attr:"previoustext"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"sqh-rewards-actions .squatch-referrals-actions{text-align:center}sqh-rewards-actions .squatch-referrals-actions .btn{margin-left:10px;width:120px}sqh-rewards-actions .squatch-referrals-actions .btn:first-child{margin-left:0}\@media (max-width:499px){sqh-rewards-actions .squatch-referrals-actions .btn{font-size:13px;width:85px;padding-left:6px;padding-right:6px;margin-left:7px}}"},enumerable:!0,configurable:!0}),t}();export{RewardsActions as SqhRewardsActions};