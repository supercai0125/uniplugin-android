(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,n){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"===typeof __channelId__&&__channelId__}function i(t,e){switch(o(e)){case"Function":return"function() { [native code] }";default:return e}}function c(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];console[t].apply(console,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var c=e.shift();if(r())return e.push(e.pop().replace("at ","uni-app:///")),console[c].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(r){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=o(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),a="";if(u.length>1){var f=u.pop();a=u.join("---COMMA---"),0===f.indexOf(" at ")?a+=f:a+="---COMMA---"+f}else a=u[0];console[c](a)}n.r(e),n.d(e,"log",(function(){return c})),n.d(e,"default",(function(){return u}))},"3d73":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("f3a3").default)}))},"78f4":function(t,e,n){"use strict";n.r(e);var o=n("a7ba"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"7b4a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=uni.requireNativePlugin("Phone-Authority"),r={data:function(){return{code:"",msg:""}},methods:{openFloatWindow:function(){o.openFloatWindow()},ignoreBatteryOptimizations:function(){var t=this;o.ignoreBatteryOptimizations({},(function(e){t.code=e.code,t.msg=e.msg}))},openSlefRestart:function(){var t=this;o.openSlefRestart({appName:"\u6218\u529fapp"},(function(e){t.code=e.code}))},openProtection:function(){var t=this;o.openProtection({},(function(e){t.code=e.code}))}}};e.default=r},"8bbf":function(t,e){t.exports=Vue},"996d":function(t,e,n){"use strict";n.r(e);var o=n("7b4a"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},a7ba:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},b498:function(t,e,n){"use strict";n.r(e);var o=n("78f4");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var i,c,u,a,f=n("f0c5"),s=Object(f["a"])(o["default"],i,c,!1,null,null,null,!1,u,a);e["default"]=s.exports},d8ce:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","container"),attrs:{_i:0}},[n("button",{attrs:{_i:1},on:{click:t.openFloatWindow}}),n("button",{attrs:{_i:2},on:{click:t.ignoreBatteryOptimizations}}),n("button",{attrs:{_i:3},on:{click:t.openSlefRestart}}),n("button",{attrs:{_i:4},on:{click:t.openProtection}}),n("view",[t._v(t._$s(5,"t0-0",t._s(t.code)))]),n("view",[t._v(t._$s(6,"t0-0",t._s(t.msg)))])])},i=[]},f0c5:function(t,e,n){"use strict";function o(t,e,n,o,r,i,c,u,a,f){var s,l="function"===typeof t?t.options:t;if(a){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in a)p.call(a,d)&&!p.call(l.components,d)&&(l.components[d]=a[d])}if(f&&((f.beforeCreate||(f.beforeCreate=[])).unshift((function(){this[f.__module]=this})),(l.mixins||(l.mixins=[])).push(f)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),c?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},l._ssrRegister=s):r&&(s=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r),s)if(l.functional){l._injectStyles=s;var v=l.render;l.render=function(t,e){return s.call(e),v(t,e)}}else{var b=l.beforeCreate;l.beforeCreate=b?[].concat(b,s):[s]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))},f3a3:function(t,e,n){"use strict";n.r(e);var o=n("d8ce"),r=n("996d");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var c,u=n("f0c5"),a=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=a.exports},fc5c:function(t,e,n){"use strict";n("3d73");var o=i(n("8bbf")),r=i(n("b498"));function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,r.default.mpType="app";var f=new o.default(u({},r.default));f.$mount()}},[["fc5c","app-config"]]]);