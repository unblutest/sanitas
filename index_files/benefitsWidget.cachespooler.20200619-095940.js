(function(e){function t(t){for(var n,i,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={benefitsWidget:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/etc/clientlibs/frontend/sanitas-ovp-webpack/";var u=window["webpackOVP2"]=window["webpackOVP2"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;a.push([3,"chunk-vendors","chunk-common"]),r()})({3:function(e,t,r){e.exports=r("fcd0")},fcd0:function(e,t,r){"use strict";r.r(t);var n=r("690a"),o=r("2f62"),a=r("4461"),i=r("4606");n["a"].use(o["a"]);var u=!1,c=new o["a"].Store({state:function(){return{language:null}},getters:{language:function(e){return e.language}},mutations:{SET_LANGUAGE:function(e,t){n["a"].set(e,"language",t)}},actions:{setLanguage:function(e,t){var r=e.commit,n=e.dispatch;return Object(a["x"])("ovp",{language:t}),r("SET_LANGUAGE",t),n("updateContent",{language:t})}},modules:{content:i["a"]},strict:u}),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.benefits&&e.labelsLoaded?r("benefits-table",{attrs:{"app-version":e.$ovpVersion,columns:e.columns,benefits:e.benefits}}):e._e()},l=[],f=r("dd9f"),p=r("748a"),b=r("72bf"),g=r.n(b);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=n["a"].extend({name:"Wrapper",components:{"benefits-table":f["a"]},props:{microserviceBaseUrl:{type:String,required:!0},resourceBaseUrl:{type:String,required:!0},language:{type:String,default:"de"},benefitColumns:{type:String,required:!0},benefitPath:{type:String,required:!0}},data:function(){return{columns:this.benefitColumns.split(","),benefits:null}},created:function(){if(!this.$store.$backend){var e=new p["a"]({store:this.$store,microserviceBaseUrl:this.microserviceBaseUrl,resourceBaseUrl:this.resourceBaseUrl});n["a"].use(e),this.$store.$backend=e}var t=window.location.hash,r=g.a.parse(t.substr(t.indexOf("?"))),o=r.language||this.language;this.benefitsLanguage&&this.benefitsLanguage===o&&this.labelsLoaded||this.setLanguage(o)},mounted:function(){var e=this;this.$backend.resources.getContentByPath(this.benefitPath).then((function(t){e.benefits=t.data||t}))},computed:O({},Object(o["c"])({benefitsLanguage:"language"}),{},Object(o["c"])(["labelsLoaded"])),methods:O({},Object(o["b"])(["setLanguage"]))}),v=y,j=r("2877"),m=Object(j["a"])(v,s,l,!1,null,null,null),w=m.exports;function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}for(var _=document.querySelectorAll(".benefitsWidget"),k=0;k<_.length;k++){var x=_[k];new w({el:x,propsData:S({},x.dataset),store:c})}}});
//# sourceMappingURL=benefitsWidget.js.map