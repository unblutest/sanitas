(window["webpackOVP2"]=window["webpackOVP2"]||[]).push([["entry-screen"],{b3d3f:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("container",{attrs:{id:"entryScreen"}},[e.hasPartner?t("partner-message",{staticClass:"configurator__message"}):e._e(),t("persons",{staticClass:"persons",attrs:{source:e.$options.name},on:{save:e.enter}})],1)},o=[],s=t("2f62"),a=t("8953"),c=t("9f91"),i=t("21ce");function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var b={name:"Entry",components:{Container:a["a"],PartnerMessage:c["a"],Persons:i["a"]},computed:p({},Object(s["c"])(["hasPartner"])),methods:{enter:function(){this.$router.push({name:"Configurator"})}}},l=b,O=t("2877"),y=Object(O["a"])(l,n,o,!1,null,null,null);r["default"]=y.exports}}]);
//# sourceMappingURL=entry-screen.js.map