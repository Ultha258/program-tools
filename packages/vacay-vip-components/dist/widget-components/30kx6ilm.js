/*! Built with http://stenciljs.com */
const{h:t}=window.WidgetComponents;import{a as e}from"./chunk-eeb26f85.js";import{a as r}from"./chunk-4e957c27.js";import"./chunk-7081a6f1.js";var n=function t(e,r,n){return e instanceof RegExp?function(t,e){if(!e)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(e,r):Array.isArray(e)?function(e,r,n){for(var a=[],i=0;i<e.length;i++)a.push(t(e[i],r,n).source);return new RegExp("(?:"+a.join("|")+")",g(n))}(e,r,n):function(t,e,r){return f(d(t,r),e,r)}(e,r,n)},a=d,i=h,o=f,s="/",p="./",l=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function d(t,e){for(var r,n=[],a=0,i=0,o="",d=e&&e.delimiter||s,h=e&&e.delimiters||p,g=!1;null!==(r=l.exec(t));){var f=r[0],m=r[1],y=r.index;if(o+=t.slice(i,y),i=y+f.length,m)o+=m[1],g=!0;else{var w="",x=t[i],v=r[2],E=r[3],b=r[4],S=r[5];if(!g&&o.length){var C=o.length-1;h.indexOf(o[C])>-1&&(w=o[C],o=o.slice(0,C))}o&&(n.push(o),o="",g=!1);var A=""!==w&&void 0!==x&&x!==w,R="+"===S||"*"===S,$="?"===S||"*"===S,k=w||d,T=E||b;n.push({name:v||a++,prefix:w,delimiter:k,optional:$,repeat:R,partial:A,pattern:T?c(T):"[^"+u(k)+"]+?"})}}return(o||i<t.length)&&n.push(o+t.substr(i)),n}function h(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var a="",i=n&&n.encode||encodeURIComponent,o=0;o<t.length;o++){var s=t[o];if("string"!=typeof s){var p,l=r?r[s.name]:void 0;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===l.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=i(l[d],s),!e[o].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');a+=(0===d?s.prefix:s.delimiter)+p}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"));s.partial&&(a+=s.prefix)}else{if(p=i(String(l),s),!e[o].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+p+'"');a+=s.prefix+p}}else a+=s}return a}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function c(t){return t.replace(/([=!:$/()])/g,"\\$1")}function g(t){return t&&t.sensitive?"":"i"}function f(t,e,r){for(var n=(r=r||{}).strict,a=!1!==r.end,i=u(r.delimiter||s),o=r.delimiters||p,l=[].concat(r.endsWith||[]).map(u).concat("$").join("|"),d="",h=0===t.length,c=0;c<t.length;c++){var f=t[c];if("string"==typeof f)d+=u(f),h=c===t.length-1&&o.indexOf(f[f.length-1])>-1;else{var m=u(f.prefix),y=f.repeat?"(?:"+f.pattern+")(?:"+m+"(?:"+f.pattern+"))*":f.pattern;e&&e.push(f),f.optional?f.partial?d+=m+"("+y+")?":d+="(?:"+m+"("+y+"))?":d+=m+"("+y+")"}}return a?(n||(d+="(?:"+i+")?"),d+="$"===l?"$":"(?="+l+")"):(n||(d+="(?:"+i+"(?="+l+"))?"),h||(d+="(?="+i+"|"+l+")")),new RegExp("^"+d,g(r))}n.parse=a,n.compile=function(t,e){return h(d(t,e))},n.tokensToFunction=i,n.tokensToRegExp=o;class m{constructor(){this.ishidden=!1,this.statPaths=["/rewardBalance/:type/:unit/:valuetype?","/:statName"],this.statPathRegexp=this.statPaths.map(t=>{const e=[];return{regexp:n(t,e),keys:e}}),this.loading=!0}componentWillLoad(){if(!this.ishidden)return e.graphql.getStats().then(t=>{this.stats={referralsCount:t.referralsCount.totalCount,referralsMonth:t.referralsMonth.totalCount,referralsWeek:t.referralsWeek.totalCount,rewardsCount:t.rewardsCount.totalCount,rewardsMonth:t.rewardsMonth.totalCount,rewardsWeek:t.rewardsWeek.totalCount,rewardBalances:t.rewardBalances},this.loading=!1}).then(()=>{Array.from(this.container.querySelectorAll("sqh-stat-component")).map(t=>{this.setStatValue(t)})}).catch(t=>{this.onError(t)})}statTypeUpdatedHandler(t){this.setStatValue(t.detail)}statAddedHandler(t){this.stats&&this.setStatValue(t.detail)}setStatValue(t){const e=t.getAttribute("stattype"),r=this.getStatFromPath(e);return t.setAttribute("statvalue",`${r}`),t}getStatFromPath(t){const e=this.statPathRegexp.find(e=>e.regexp.test(t));if(!e)return 0;const{keys:r,regexp:n}=e,a=n.exec(t),i={};return r.forEach((t,e)=>i[t.name]=a[e+1]),this.getStatValue(i)}getStatValue(t){return t.statName?this.stats[t.statName]||0:this.getRewardBalance(t)}getRewardBalance(t){const{type:e,unit:r,valuetype:n}=t,a=r.replace(/_/,"/"),i=this.stats.rewardBalances.find(t=>t.type===e&&t.unit===a);return i?n?i[n]:i.value:0}onError(t){console.log("Error loading via GraphQL.",t),this.loading=!1}render(){const e=r`
      display: ${this.ishidden?"none":"inherit"};
      padding-top: ${this.paddingtop}px;
      padding-bottom: ${this.paddingbottom}px;
    `;return t("div",{class:e},t("slot",null))}static get is(){return"sqh-stats-container"}static get properties(){return{container:{elementRef:!0},ishidden:{type:Boolean,attr:"ishidden"},loading:{state:!0},paddingbottom:{type:String,attr:"paddingbottom"},paddingtop:{type:String,attr:"paddingtop"},stats:{state:!0}}}static get listeners(){return[{name:"statTypeUpdated",method:"statTypeUpdatedHandler"},{name:"statAdded",method:"statAddedHandler"}]}static get style(){return"sqh-stats-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}\@media (max-width:499px){sqh-stats-container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}sqh-stats-container div{-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}}"}}export{m as SqhStatsContainer};