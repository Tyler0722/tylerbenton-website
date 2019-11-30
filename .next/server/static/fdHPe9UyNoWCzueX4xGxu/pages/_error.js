module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}},a=!0;try{e[r].call(o.exports,o,o.exports,n),a=!1}finally{a&&delete t[r]}return o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}({"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});const a=o(n("cDcd")),u=n("lwAK");function i({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(u.AmpStateContext))}},"/a9y":function(e,t,n){"use strict";var r=n("KI45");t.__esModule=!0,t.default=void 0;var o=r(n("cDcd")),a=r(n("8Kt/"));const u={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};class i extends o.default.Component{static getInitialProps(e){let{res:t,err:n}=e;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}render(){const{statusCode:e}=this.props,t=this.props.title||u[e]||"An unexpected error has occurred";return o.default.createElement("div",{style:l.error},o.default.createElement(a.default,null,o.default.createElement("title",null,e,": ",t)),o.default.createElement("div",null,o.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?o.default.createElement("h1",{style:l.h1},e):null,o.default.createElement("div",{style:l.desc},o.default.createElement("h2",{style:l.h2},t,"."))))}}t.default=i,i.displayName="ErrorPage";const l={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},5:function(e,t,n){e.exports=n("/a9y")},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),o=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});const u=a(n("cDcd")),i=a(n("Xuae")),l=n("lwAK"),c=n("FYa8"),s=n("/0+H");function d(e=!1){const t=[u.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}t.defaultHead=d;const p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((e,t)=>{const n=u.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){const e=new r,t=new r,n=new r,o={};return a=>{if(a.key&&"number"!=typeof a.key&&0===a.key.indexOf(".$"))return!e.has(a.key)&&(e.add(a.key),!0);switch(a.type){case"title":case"base":if(t.has(a.type))return!1;t.add(a.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){const t=p[e];if(a.props.hasOwnProperty(t))if("charSet"===t){if(n.has(t))return!1;n.add(t)}else{const e=a.props[t],n=o[t]||new r;if(n.has(e))return!1;n.add(e),o[t]=n}}}return!0}}()).reverse().map((e,t)=>{const n=e.key||t;return u.default.cloneElement(e,{key:n})})}const h=i.default();function y({children:e}){return u.default.createElement(l.AmpStateContext.Consumer,null,t=>u.default.createElement(c.HeadManagerContext.Consumer,null,n=>u.default.createElement(h,{reduceComponentsToState:m,handleStateChange:n,inAmpMode:s.isInAmpMode(t)},e)))}y.rewind=h.rewind,t.default=y},FYa8:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});const a=o(n("cDcd"));t.HeadManagerContext=a.createContext(null)},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},Xuae:function(e,t,n){"use strict";var r=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});const o=n("cDcd");t.default=()=>{const e=new r;let t;function n(n){t=n.props.reduceComponentsToState([...e],n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return class extends o.Component{static rewind(){const n=t;return t=void 0,e.clear(),n}constructor(t){super(t),e.add(this),n(this)}componentDidMount(){e.add(this),n(this)}componentDidUpdate(){n(this)}componentWillUnmount(){e.delete(this),n(this)}render(){return null}}}},cDcd:function(e,t){e.exports=require("react")},hfKm:function(e,t,n){e.exports=n("TUA0")},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});const a=o(n("cDcd"));t.AmpStateContext=a.createContext({})},ttDY:function(e,t,n){e.exports=n("zQQD")},zQQD:function(e,t){e.exports=require("core-js/library/fn/set")}});