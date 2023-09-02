/*! Built with http://stenciljs.com */
var __makeTemplateObject=this&&this.__makeTemplateObject||function(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e};import{h}from"./widget-components.core.js";import{a as FormatJS}from"./chunk-2b5ffdc4.js";import{a as css}from"./chunk-4e957c27.js";import{d as uuid}from"./chunk-bf7ffeb2.js";import{a as API}from"./chunk-eeb26f85.js";import"./chunk-7081a6f1.js";var templateObject_1,ReferralComponent=function(){function e(){}return e.prototype.getName=function(){var e=this.referral,r=this.referral;return e.referredUser?e.referredUser.firstName||this.unknownuser:r.referrerUser&&r.referrerUser.firstName||this.unknownuser},e.prototype.getIcon=function(){return"converted"!==this.referraltype&&"referrer"!==this.referraltype||this.rewardIsExpired()||this.rewardIsCancelled()?"icon-attention":"icon-ok-circled"},e.prototype.getContent=function(e){return this.rewardIsExpired()&&this.referralvariables.expiredcontent?FormatJS.format(this.referralvariables.expiredcontent,e):this.rewardIsCancelled()&&this.referralvariables.cancelledcontent?FormatJS.format(this.referralvariables.cancelledcontent,e):this.referraltype?FormatJS.format(this.referralvariables[this.referraltype+"content"],e):""},e.prototype.rewardIsExpired=function(){var e=this.referral.rewards;return 1==e.length&&e[0].statuses&&e[0].statuses.indexOf("EXPIRED")>-1},e.prototype.rewardIsCancelled=function(){var e=this.referral.rewards;return 1==e.length&&e[0].statuses&&e[0].statuses.indexOf("CANCELLED")>-1},e.prototype.getValue=function(){var e=this.referral.rewards,r=this.referralvariables.referrervalue,t=this.referralvariables.pendingvalue;return 0==e.length?"referrer"===this.referraltype?r:t:e.length>0&&this.referralvariables.usefirstreward&&e[e.length-1].prettyValue||e[0].prettyValue},e.prototype.getValueContent=function(e){var r=this.referral.rewards;return 1==r.length&&this.rewardIsExpired()?FormatJS.format(this.referralvariables.expiredvalue,e):1==r.length&&this.rewardIsCancelled()?FormatJS.format(this.referralvariables.cancelledvalue,e):r.length<=1?"":FormatJS.format(this.referralvariables.valuecontent,e)},e.prototype.render=function(){var e=this.referral,r=e.dateReferralStarted,t=e.rewards,n={date:FormatJS.formatRelative(r.toString()),extrarewards:t.length-1},a=this.getName(),s=this.getIcon(),l=this.getContent(n),o=this.getValue(),i=this.getValueContent(n);return h("div",{class:"squatch-referrals-row"},h("div",null,h("div",{class:"squatch-referrals-heading"},a),h("div",{class:"squatch-referrals-description"},l)),h("i",{class:"icon squatch-referrals-icon "+s+" "+(this.rewardIsExpired()&&"expired")+" "+(this.rewardIsCancelled()&&"cancelled")}),h("div",{class:"sqh-column-two"},h("div",{class:"squatch-referrals-value "+(this.rewardIsCancelled()&&"cancelled")+" "+(t.length>0?this.rewardIsExpired()?"expired":"":"referrer"===this.referraltype?"referrer":"pending")},o),h("div",{class:"squatch-value-contents "+(this.rewardIsExpired()&&"expired")+" "+(this.rewardIsCancelled()&&"cancelled")},i)))},Object.defineProperty(e,"is",{get:function(){return"sqh-referral-component"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{referral:{type:"Any",attr:"referral"},referraltype:{type:String,attr:"referraltype"},referralvariables:{type:"Any",attr:"referralvariables"},unknownuser:{type:"Any",attr:"unknownuser"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"sqh-referral-component:nth-child(3) .squatch-referrals-row{border-bottom:none}sqh-referral-component .squatch-referrals-row{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;height:80px;border-bottom:1px solid #ececec;max-width:500px;margin:0 auto;padding:0 20px;line-height:1.6}sqh-referral-component .squatch-referrals-row>div:first-of-type{-ms-flex:1;-webkit-box-flex:1;flex:1}sqh-referral-component .squatch-referrals-row .icon{float:left;font-size:32px}sqh-referral-component .squatch-referrals-row .sqh-column-two{padding:10px 0}sqh-referral-component .squatch-referrals-value{width:175px;font-size:16px;float:left;line-height:49px}sqh-referral-component .squatch-value-contents{font-size:13px;line-height:0;padding-bottom:25px}sqh-referral-component .squatch-referrals-heading{font-size:16px}sqh-referral-component .squatch-referrals-description{font-size:13px}\@media (max-width:499px){sqh-referral-component .squatch-referrals-description{display:none}sqh-referral-component .squatch-referrals-row{padding:0}sqh-referral-component .squatch-referrals-row>div:first-of-type{width:100px;overflow:hidden}}"},enumerable:!0,configurable:!0}),e}(),ReferralList=function(){function e(){this.ishidden=!1,this.showreferrer=!0,this.usefirstreward=!1,this.offset=0,this.loading=!0}return e.prototype.componentWillLoad=function(){var e=this;if(!this.ishidden)return this.getReferrals().then(function(r){e.referrals=r.referrals.data,e.referredBy=r.referredByReferral,e.referralsCount=r.referrals.totalCount,e.loading=!1}).catch(function(r){e.onError(r)})},e.prototype.getReferrals=function(e){return void 0===e&&(e=0),API.graphql.getReferrals(e)},e.prototype.paginate=function(e,r){var t=this;if(this.loading)return null;var n=this.referralsCount;if(this.showreferrer&&this.referredBy&&n++,e>=n||e<0)return null;this.loading=!0;var a=r.target;a.innerText="...",this.getReferrals(e).then(function(r){a.innerText=e>t.offset?t.paginatemore:t.paginateless,t.referrals=r.referrals.data,t.offset=e,t.loading=!1})},e.prototype.onError=function(e){console.error(e),this.loading=!1},e.prototype.render=function(){var e,r,t=this,n={usefirstreward:this.usefirstreward,referrercontent:this.referrercontent,convertedcontent:this.convertedcontent,pendingcontent:this.pendingcontent,pendingvalue:this.pendingvalue,referrervalue:this.referrervalue,valuecontent:this.valuecontent,expiredcontent:this.expiredcontent,expiredvalue:this.expiredvalue,cancelledvalue:this.cancelledvalue,cancelledcontent:this.cancelledcontent};this.referrals&&(r=this.referrals.map(function(e){var r=e.rewards.length>0?"converted":"pending";return h("sqh-referral-component",{id:uuid(),referral:e,referralvariables:n,referraltype:r,unknownuser:t.unknownuser})})),this.referrals.length<3&&this.referredBy&&this.showreferrer&&(e=h("sqh-referral-component",{id:uuid(),referral:this.referredBy,referralvariables:n,referraltype:"referrer",unknownuser:this.unknownuser}));var a=css(templateObject_1||(templateObject_1=__makeTemplateObject(["\n      .squatch-referrals-icon.icon-ok-circled {\n        color: ",";\n      }\n      .squatch-referrals-icon.icon-attention {\n        color: ",";\n      }\n      .squatch-referrals-value {\n        color: ",";\n      }\n      .squatch-referrals-value.pending {\n        color: ",";\n      }\n      .squatch-referrals-value.referrer {\n        color: ",";\n      }\n      .squatch-referrals-value.expired {\n        color: ",";\n      }\n      .squatch-value-contents.expired {\n        color: ","\n      }\n      .squatch-referrals-icon.icon-attention.expired {\n        color: ","\n      }\n      .squatch-referrals-value.cancelled {\n        color: ",";\n      }\n      .squatch-value-contents.cancelled {\n        color: ","\n      }\n      .squatch-referrals-icon.icon-attention.cancelled {\n        color: ","\n      }\n      .squatch-referrals-heading {\n        color: ",";\n      }\n      .squatch-referrals-description,\n      .squatch-referrals-value-content {\n        color: ",";\n      }\n      .squatch-referrals-scroll-action {\n        font-family: ",";\n      }\n    "],["\n      .squatch-referrals-icon.icon-ok-circled {\n        color: ",";\n      }\n      .squatch-referrals-icon.icon-attention {\n        color: ",";\n      }\n      .squatch-referrals-value {\n        color: ",";\n      }\n      .squatch-referrals-value.pending {\n        color: ",";\n      }\n      .squatch-referrals-value.referrer {\n        color: ",";\n      }\n      .squatch-referrals-value.expired {\n        color: ",";\n      }\n      .squatch-value-contents.expired {\n        color: ","\n      }\n      .squatch-referrals-icon.icon-attention.expired {\n        color: ","\n      }\n      .squatch-referrals-value.cancelled {\n        color: ",";\n      }\n      .squatch-value-contents.cancelled {\n        color: ","\n      }\n      .squatch-referrals-icon.icon-attention.cancelled {\n        color: ","\n      }\n      .squatch-referrals-heading {\n        color: ",";\n      }\n      .squatch-referrals-description,\n      .squatch-referrals-value-content {\n        color: ",";\n      }\n      .squatch-referrals-scroll-action {\n        font-family: ",";\n      }\n    "])),this.rewardcolor,this.pendingcolor,this.rewardcolor,this.pendingcolor,this.rewardcolor,this.expiredcolor,this.expiredcolor,this.expiredcolor,this.cancelledcolor,this.cancelledcolor,this.cancelledcolor,this.referralnamecolor,this.referraltextcolor,"inherit"),s=this.showreferrer&&this.referredBy?this.referralsCount+1:this.referralsCount;return!this.ishidden&&s>0?h("div",{class:"squatch-referrals "+a},h("div",{class:"squatch-referrals-scroll-container"},r,e),h("div",{class:"squatch-referrals-scroll-action-container"},h("button",{class:"\n                squatch-referrals-scroll-action previous "+(this.loading?"disabled":0===this.offset?"disabled":"")+"\n              ",onClick:function(e){return t.paginate(t.offset-3,e)}},this.paginateless),h("button",{class:"\n                squatch-referrals-scroll-action view-more "+(this.loading?"disabled":this.showreferrer&&this.referredBy?this.offset>=this.referralsCount-2?"disabled":"":this.offset>=this.referralsCount-3?"disabled":"")+"\n              ","view-more":!0,onClick:function(e){return t.paginate(t.offset+3,e)}},this.paginatemore))):h("div",{class:"squatch-referrals-scroll-action-container"},h("button",{disabled:!0,class:"squatch-no-referrals-yet"},this.noreferralsyet))},Object.defineProperty(e,"is",{get:function(){return"sqh-referral-list"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cancelledcolor:{type:String,attr:"cancelledcolor"},cancelledcontent:{type:String,attr:"cancelledcontent"},cancelledvalue:{type:String,attr:"cancelledvalue"},convertedcontent:{type:String,attr:"convertedcontent"},expiredcolor:{type:String,attr:"expiredcolor"},expiredcontent:{type:String,attr:"expiredcontent"},expiredvalue:{type:String,attr:"expiredvalue"},ishidden:{type:Boolean,attr:"ishidden"},loading:{state:!0},noreferralsyet:{type:String,attr:"noreferralsyet"},offset:{state:!0},paginateless:{type:String,attr:"paginateless"},paginatemore:{type:String,attr:"paginatemore"},pendingcolor:{type:String,attr:"pendingcolor"},pendingcontent:{type:String,attr:"pendingcontent"},pendingvalue:{type:String,attr:"pendingvalue"},referralnamecolor:{type:String,attr:"referralnamecolor"},referrals:{state:!0},referralsCount:{state:!0},referraltextcolor:{type:String,attr:"referraltextcolor"},referredBy:{state:!0},referrercontent:{type:String,attr:"referrercontent"},referrervalue:{type:String,attr:"referrervalue"},rewardcolor:{type:String,attr:"rewardcolor"},rewards:{state:!0},showreferrer:{type:Boolean,attr:"showreferrer"},unknownuser:{type:String,attr:"unknownuser"},usefirstreward:{type:Boolean,attr:"usefirstreward"},valuecontent:{type:String,attr:"valuecontent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"sqh-referral-list{display:block}sqh-referral-list .squatch-no-referrals-yet{background:#fff;border:1px solid #ccc;border-radius:4px;font-size:14px;line-height:20px;margin:5px;padding:6px 12px;width:165px}sqh-referral-list .squatch-referrals-scroll-container{min-height:255px}sqh-referral-list .squatch-referrals-scroll-action-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:5px 0}sqh-referral-list .squatch-referrals-scroll-action-container .squatch-referrals-scroll-action{background:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;font-size:14px;line-height:20px;margin:5px;padding:6px 12px;width:120px}sqh-referral-list .squatch-referrals-scroll-action-container .squatch-referrals-scroll-action.disabled{cursor:default;opacity:.5}sqh-referral-list .squatch-referrals-scroll-action-container .squatch-referrals-scroll-action.disabled:hover{background:#fff;border-color:#ccc}sqh-referral-list .squatch-referrals-scroll-action-container .squatch-referrals-scroll-action.disabled:active{border-style:solid}sqh-referral-list .squatch-referrals-scroll-action-container .squatch-referrals-scroll-action:hover{background:#e6e6e6;border-color:#adadad}sqh-referral-list .squatch-referrals-scroll-action-container .squatch-referrals-scroll-action:active,sqh-referral-list .squatch-referrals-scroll-action-container .squatch-referrals-scroll-action:focus{outline:0}"},enumerable:!0,configurable:!0}),e}();export{ReferralComponent as SqhReferralComponent,ReferralList as SqhReferralList};