/*! Built with http://stenciljs.com */
const{h:t}=window.WidgetComponents;import{a as e}from"./chunk-4e957c27.js";import"./chunk-7081a6f1.js";class s{constructor(){this.ishidden=!1}componentWillLoad(){this.statAddedHandler(this.elem)}stattypeHandler(t,e){t!==e&&this.statTypeUpdatedHandler(this.elem)}statAddedHandler(t){this.statAdded.emit(t)}statTypeUpdatedHandler(t){this.statTypeUpdated.emit(t)}render(){const s=e`
      color: ${this.statcolor};
    `;return!this.ishidden&&t("div",{class:s},t("div",{class:"stat-value"},this.statvalue),t("div",{class:"stat-description"},this.statdescription))}static get is(){return"sqh-stat-component"}static get properties(){return{elem:{elementRef:!0},ishidden:{type:Boolean,attr:"ishidden"},statcolor:{type:String,attr:"statcolor"},statdescription:{type:String,attr:"statdescription"},stattype:{type:String,attr:"stattype",watchCallbacks:["stattypeHandler"]},statvalue:{type:String,attr:"statvalue"}}}static get events(){return[{name:"statTypeUpdated",method:"statTypeUpdated",bubbles:!0,cancelable:!0,composed:!0},{name:"statAdded",method:"statAdded",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"sqh-stat-component{text-align:center;width:140px;float:left}sqh-stat-component>div{padding:10px}sqh-stat-component .stat-value{white-space:nowrap;font-size:30px;line-height:20px;margin-top:20px;margin-bottom:8px;font-weight:300}sqh-stat-component .stat-description{text-transform:uppercase;font-size:12px}\@media (max-width:499px){sqh-stat-component{width:100%;text-align:left;background:#f2f2f2;border:1px solid #ddd}sqh-stat-component:first-child{border-radius:4px 4px 0 0}sqh-stat-component:last-child{border-radius:0 0 4px 4px}sqh-stat-component .stat-value{font-size:22px;float:left;width:60px;text-align:center;margin:0 10px 0 0}sqh-stat-component .stat-description{line-height:20px;padding-left:100px;overflow-wrap:break-word}}"}}export{s as SqhStatComponent};