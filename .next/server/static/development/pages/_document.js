module.exports=function(e){var t=require("../../../ssr-module-cache.js");function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}},o=!0;try{e[r].call(s.exports,s,s.exports,n),o=!1}finally{o&&delete t[r]}return s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}({"./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":function(e,t,n){e.exports=n("core-js/library/fn/array/is-array")},"./node_modules/@babel/runtime-corejs2/core-js/date/now.js":function(e,t,n){e.exports=n("core-js/library/fn/date/now")},"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":function(e,t,n){e.exports=n("core-js/library/fn/json/stringify")},"./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":function(e,t,n){e.exports=n("core-js/library/fn/object/assign")},"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":function(e,t,n){e.exports=n("core-js/library/fn/object/define-property")},"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":function(e,t,n){e.exports=n("core-js/library/fn/object/get-own-property-descriptor")},"./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":function(e,t,n){e.exports=n("core-js/library/fn/object/get-own-property-symbols")},"./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":function(e,t,n){e.exports=n("core-js/library/fn/object/keys")},"./node_modules/@babel/runtime-corejs2/core-js/promise.js":function(e,t,n){e.exports=n("core-js/library/fn/promise")},"./node_modules/@babel/runtime-corejs2/core-js/set.js":function(e,t,n){e.exports=n("core-js/library/fn/set")},"./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":function(e,t,n){var r=n("./node_modules/@babel/runtime-corejs2/core-js/promise.js");function s(e,t,n,s,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):r.resolve(l).then(s,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new r((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,c,"next",e)}function c(e){s(i,r,o,a,c,"throw",e)}a(void 0)}))}}},"./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n("./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"),s=n.n(r);function o(e,t,n){return t in e?s()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js"),s=n.n(r),o=n("./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js"),i=n.n(o),a=n("./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"),c=n.n(a),l=n("./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=c()(n);"function"==typeof i.a&&(r=r.concat(i()(n).filter((function(e){return s()(n,e).enumerable})))),r.forEach((function(t){Object(l.default)(e,t,n[t])}))}return e}},"./node_modules/@babel/runtime-corejs2/helpers/extends.js":function(e,t,n){var r=n("./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");function s(){return e.exports=s=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}e.exports=s},"./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":function(e,t,n){var r=n("./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js"),s=n("./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=s&&r?r(e,n):{};o.get||o.set?s(t,n,o):t[n]=e[n]}return t.default=e,t}},"./node_modules/next/dist/next-server/lib/constants.js":function(e,t,n){"use strict";n("./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js")(t,"__esModule",{value:!0}),t.PHASE_EXPORT="phase-export",t.PHASE_PRODUCTION_BUILD="phase-production-build",t.PHASE_PRODUCTION_SERVER="phase-production-server",t.PHASE_DEVELOPMENT_SERVER="phase-development-server",t.PAGES_MANIFEST="pages-manifest.json",t.BUILD_MANIFEST="build-manifest.json",t.PRERENDER_MANIFEST="prerender-manifest.json",t.REACT_LOADABLE_MANIFEST="react-loadable-manifest.json",t.SERVER_DIRECTORY="server",t.SERVERLESS_DIRECTORY="serverless",t.CONFIG_FILE="next.config.js",t.BUILD_ID_FILE="BUILD_ID",t.BLOCKED_PAGES=["/_document","/_app"],t.CLIENT_PUBLIC_FILES_PATH="public",t.CLIENT_STATIC_FILES_PATH="static",t.CLIENT_STATIC_FILES_RUNTIME="runtime",t.CLIENT_STATIC_FILES_RUNTIME_PATH=`${t.CLIENT_STATIC_FILES_PATH}/${t.CLIENT_STATIC_FILES_RUNTIME}`,t.CLIENT_STATIC_FILES_RUNTIME_MAIN=`${t.CLIENT_STATIC_FILES_RUNTIME_PATH}/main.js`,t.CLIENT_STATIC_FILES_RUNTIME_AMP=`${t.CLIENT_STATIC_FILES_RUNTIME_PATH}/amp.js`,t.CLIENT_STATIC_FILES_RUNTIME_WEBPACK=`${t.CLIENT_STATIC_FILES_RUNTIME_PATH}/webpack.js`,t.IS_BUNDLED_PAGE_REGEX=/^static[\/\\][^\/\\]+[\/\\]pages.*\.js$/,t.ROUTE_NAME_REGEX=/^static[\/\\][^\/\\]+[\/\\]pages[\/\\](.*)\.js$/,t.SERVERLESS_ROUTE_NAME_REGEX=/^pages[\/\\](.*)\.js$/},"./node_modules/next/dist/next-server/lib/utils.js":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");n("./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js")(t,"__esModule",{value:!0});const s=n("url");function o(){const{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function a(e){return e.finished||e.headersSent}t.execOnce=function(e){let t=!1;return(...n)=>{t||(t=!0,e.apply(this,n))}},t.getLocationOrigin=o,t.getURL=function(){const{href:e}=window.location,t=o();return e.substring(t.length)},t.getDisplayName=i,t.isResSent=a,t.loadGetInitialProps=async function(e,t){if(e.prototype&&e.prototype.getInitialProps){const t=`"${i(e)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;throw new Error(t)}const n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return{};const s=await e.getInitialProps(t);if(n&&a(n))return s;if(!s){const t=`"${i(e)}.getInitialProps()" should resolve to an object. But found "${s}" instead.`;throw new Error(t)}return 0!==r(s).length||t.ctx||console.warn(`${i(e)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`),s},t.urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"],t.formatWithValidation=function(e,n){return null!==e&&"object"==typeof e&&r(e).forEach(e=>{-1===t.urlObjectKeys.indexOf(e)&&console.warn(`Unknown key passed via urlObject into url.format: ${e}`)}),s.format(e,n)},t.SUPPORTS_PERFORMANCE="undefined"!=typeof performance,t.SUPPORTS_PERFORMANCE_USER_TIMING=t.SUPPORTS_PERFORMANCE&&"function"==typeof performance.mark&&"function"==typeof performance.measure},"./node_modules/next/dist/next-server/server/utils.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("./node_modules/next/dist/next-server/lib/constants.js"),s=[/^\/_next\//,/^\/static\//];t.isInternalUrl=function(e){for(const t of s)if(t.test(e))return!0;return!1},t.isBlockedPage=function(e){return-1!==r.BLOCKED_PAGES.indexOf(e)},t.cleanAmpPath=function(e){return e.match(/\?amp=(y|yes|true|1)/)&&(e=e.replace(/\?amp=(y|yes|true|1)/,"?")),e.match(/&amp=(y|yes|true|1)/)&&(e=e.replace(/\?amp=(y|yes|true|1)/,"")),e.replace(/\?$/,"")}},"./node_modules/next/dist/pages/_document.js":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js"),s=n("./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");t.__esModule=!0,t.middleware=function(e){return b.apply(this,arguments)},t.NextScript=t.Main=t.Head=t.Html=t.default=void 0;var o=s(n("./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js")),i=s(n("./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js")),a=s(n("./node_modules/@babel/runtime-corejs2/core-js/object/keys.js")),c=s(n("./node_modules/@babel/runtime-corejs2/helpers/extends.js")),l=s(n("./node_modules/@babel/runtime-corejs2/core-js/date/now.js")),u=s(n("./node_modules/@babel/runtime-corejs2/core-js/set.js")),d=s(n("./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js")),p=s(n("prop-types")),m=r(n("react")),f=n("./node_modules/next/dist/next-server/server/utils.js"),_=n("./node_modules/next/dist/next-server/lib/utils.js");t.DocumentContext=_.DocumentContext,t.DocumentInitialProps=_.DocumentInitialProps,t.DocumentProps=_.DocumentProps;var y=n("./node_modules/next/dist/server/htmlescape.js"),j=s(n("styled-jsx/server")),h=n("./node_modules/next/dist/next-server/lib/constants.js");function b(){return(b=(0,d.default)((function*(e){let{req:t,res:n}=e}))).apply(this,arguments)}function g(e){const t=new u.default,n=[];for(const r of e)t.has(r.file)||(t.add(r.file),n.push(r));return n}function E(e){return e}class x extends m.Component{constructor(){super(...arguments),this.context=void 0}static getInitialProps(e){return(0,d.default)((function*(){let{renderPage:t}=e;const{html:n,head:r,dataOnly:s}=yield t();return{html:n,head:r,styles:(0,j.default)(),dataOnly:s}}))()}getChildContext(){return{_documentProps:this.props,_devOnlyInvalidateCacheQueryString:"?ts="+(0,l.default)()}}render(){return m.default.createElement(v,null,m.default.createElement(I,null),m.default.createElement("body",null,m.default.createElement(T,null),m.default.createElement(S,null)))}}t.default=x,x.childContextTypes={_documentProps:p.default.any,_devOnlyInvalidateCacheQueryString:p.default.string};class v extends m.Component{constructor(){super(...arguments),this.context=void 0}render(){const{inAmpMode:e}=this.context._documentProps;return m.default.createElement("html",(0,c.default)({},this.props,{amp:e?"":void 0,"data-ampdevmode":e?"":void 0}))}}t.Html=v,v.contextTypes={_documentProps:p.default.any},v.propTypes={children:p.default.node.isRequired};class I extends m.Component{constructor(){super(...arguments),this.context=void 0}getCssLinks(){const{assetPrefix:e,files:t}=this.context._documentProps,n=t&&t.length?t.filter(e=>/\.css$/.test(e)):[];return 0===n.length?null:n.map(t=>m.default.createElement("link",{key:t,nonce:this.props.nonce,rel:"stylesheet",href:e+"/_next/"+encodeURI(t),crossOrigin:this.props.crossOrigin||void 0}))}getPreloadDynamicChunks(){const{dynamicImports:e,assetPrefix:t}=this.context._documentProps,{_devOnlyInvalidateCacheQueryString:n}=this.context;return g(e).map(e=>e.file.endsWith(E(".js"))?m.default.createElement("link",{rel:"preload",key:e.file,href:t+"/_next/"+encodeURI(e.file)+n,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||void 0}):null).filter(Boolean)}getPreloadMainLinks(){const{assetPrefix:e,files:t}=this.context._documentProps;if(!t||0===t.length)return null;const{_devOnlyInvalidateCacheQueryString:n}=this.context;return t.map(t=>t.endsWith(E(".js"))?m.default.createElement("link",{key:t,nonce:this.props.nonce,rel:"preload",href:e+"/_next/"+encodeURI(t)+n,as:"script",crossOrigin:this.props.crossOrigin||void 0}):null).filter(Boolean)}render(){const{styles:e,ampPath:t,inAmpMode:n,assetPrefix:r,hybridAmp:s,canonicalBase:o,__NEXT_DATA__:c,dangerousAsPath:l}=this.context._documentProps,{_devOnlyInvalidateCacheQueryString:u}=this.context,{page:d,buildId:p}=c;let{head:_}=this.context._documentProps,y=this.props.children;y=m.default.Children.map(y,e=>{const t=e&&e.props&&e.props["data-react-helmet"];return e&&"title"===e.type&&!t&&console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title"),e}),this.props.crossOrigin&&console.warn("Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated");let j=!1,h=!1;_=n?m.default.Children.map(_||[],e=>{if(!e)return e;const{type:t,props:n}=e;let r="";return"meta"===t&&"viewport"===n.name?r='name="viewport"':"link"===t&&"canonical"===n.rel?h=!0:"link"===t&&"amphtml"===n.rel?j=!0:"script"===t&&(n.src&&n.src.indexOf("ampproject")<-1||n.dangerouslySetInnerHTML&&(!n.type||"text/javascript"===n.type))&&(r="<script",(0,a.default)(n).forEach(e=>{r+=" "+e+'="'+n[e]+'"'}),r+="/>"),r?(console.warn('Found conflicting amp tag "'+e.type+'" with conflicting prop '+r+" in "+c.page+". https://err.sh/next.js/conflicting-amp-tag"),null):e}):_;const b=(0,i.default)(e)?e:[];if(n&&e&&e.props&&(0,i.default)(e.props.children)){const t=e=>e&&e.props&&e.props.dangerouslySetInnerHTML&&e.props.dangerouslySetInnerHTML.__html;e.props.children.map(e=>{(0,i.default)(e)?e.map(e=>t(e)&&b.push(e)):t(e)&&b.push(e)})}return m.default.createElement("head",this.props,this.context._documentProps.isDevelopment&&this.context._documentProps.hasCssMode&&m.default.createElement(m.default.Fragment,null,m.default.createElement("style",{"data-next-hide-fouc":!0,dangerouslySetInnerHTML:{__html:"body{display:none}"}}),m.default.createElement("noscript",{"data-next-hide-fouc":!0},m.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{display:block}"}}))),y,_,m.default.createElement("meta",{name:"next-head-count",content:m.default.Children.count(_||[]).toString()}),n&&m.default.createElement(m.default.Fragment,null,m.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),!h&&m.default.createElement("link",{rel:"canonical",href:o+(0,f.cleanAmpPath)(l)}),m.default.createElement("link",{rel:"preload",as:"script",href:"https://cdn.ampproject.org/v0.js"}),e&&m.default.createElement("style",{"amp-custom":"",dangerouslySetInnerHTML:{__html:b.map(e=>e.props.dangerouslySetInnerHTML.__html).join("").replace(/\/\*# sourceMappingURL=.*\*\//g,"").replace(/\/\*@ sourceURL=.*?\*\//g,"")}}),m.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"}}),m.default.createElement("noscript",null,m.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"}})),m.default.createElement("script",{async:!0,src:"https://cdn.ampproject.org/v0.js"})),!n&&m.default.createElement(m.default.Fragment,null,!j&&s&&m.default.createElement("link",{rel:"amphtml",href:o+P(t,l)}),"/_error"!==d&&m.default.createElement("link",{rel:"preload",href:r+E(encodeURI("/_next/static/"+p+"/pages"+O(d)))+u,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||void 0}),m.default.createElement("link",{rel:"preload",href:r+E(encodeURI("/_next/static/"+p+"/pages/_app.js"))+u,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||void 0}),this.getPreloadDynamicChunks(),this.getPreloadMainLinks(),this.context._documentProps.isDevelopment&&this.context._documentProps.hasCssMode&&m.default.createElement("noscript",{id:"__next_css__DO_NOT_USE__"}),this.getCssLinks(),e||null))}}t.Head=I,I.contextTypes={_documentProps:p.default.any,_devOnlyInvalidateCacheQueryString:p.default.string},I.propTypes={nonce:p.default.string,crossOrigin:p.default.string};class T extends m.Component{constructor(){super(...arguments),this.context=void 0}render(){const{inAmpMode:e,html:t}=this.context._documentProps;return e?"__NEXT_AMP_RENDER_TARGET__":m.default.createElement("div",{id:"__next",dangerouslySetInnerHTML:{__html:t}})}}t.Main=T,T.contextTypes={_documentProps:p.default.any,_devOnlyInvalidateCacheQueryString:p.default.string};class S extends m.Component{constructor(){super(...arguments),this.context=void 0}getDynamicChunks(){const{dynamicImports:e,assetPrefix:t,files:n}=this.context._documentProps,{_devOnlyInvalidateCacheQueryString:r}=this.context;return g(e).map(e=>!/\.js$/.test(e.file)||n.includes(e.file)?null:m.default.createElement("script",(0,c.default)({async:!0,key:e.file,src:t+"/_next/"+encodeURI(e.file)+r,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||void 0},{})))}getScripts(){const{assetPrefix:e,files:t}=this.context._documentProps;if(!t||0===t.length)return null;const{_devOnlyInvalidateCacheQueryString:n}=this.context;return t.map(t=>/\.js$/.test(t)?m.default.createElement("script",(0,c.default)({key:t,src:e+"/_next/"+encodeURI(t)+n,nonce:this.props.nonce,async:!0,crossOrigin:this.props.crossOrigin||void 0},{})):null)}static getInlineScriptSource(e){const{__NEXT_DATA__:t}=e;try{const e=(0,o.default)(t);return(0,y.htmlEscapeJsonString)(e)}catch(e){if(e.message.indexOf("circular structure"))throw new Error('Circular structure in "getInitialProps" result of page "'+t.page+'". https://err.sh/zeit/next.js/circular-structure');throw e}}render(){const{staticMarkup:e,assetPrefix:t,inAmpMode:n,devFiles:r,__NEXT_DATA__:s}=this.context._documentProps,{_devOnlyInvalidateCacheQueryString:o}=this.context;if(n){const n=[h.CLIENT_STATIC_FILES_RUNTIME_AMP,h.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];return m.default.createElement(m.default.Fragment,null,e?null:m.default.createElement("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||void 0,dangerouslySetInnerHTML:{__html:S.getInlineScriptSource(this.context._documentProps)},"data-ampdevmode":!0}),n?n.map(e=>m.default.createElement("script",{key:e,src:t+"/_next/"+e+o,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||void 0,"data-ampdevmode":!0})):null)}const{page:i,buildId:a}=s;this.props.crossOrigin&&console.warn("Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated");const l=[m.default.createElement("script",(0,c.default)({async:!0,"data-next-page":i,key:i,src:t+encodeURI("/_next/static/"+a+"/pages"+O(i))+o,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||void 0},{})),!1],u=[m.default.createElement("script",(0,c.default)({async:!0,"data-next-page":"/_app",src:t+"/_next/static/"+a+"/pages/_app.js"+o,key:"_app",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||void 0},{})),!1];return m.default.createElement(m.default.Fragment,null,r?r.map(e=>!e.match(/\.js\.map/)&&m.default.createElement("script",{key:e,src:t+"/_next/"+encodeURI(e)+o,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||void 0})):null,e?null:m.default.createElement("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||void 0,dangerouslySetInnerHTML:{__html:S.getInlineScriptSource(this.context._documentProps)}}),null,"/_error"!==i&&l,u,e?null:this.getDynamicChunks(),e?null:this.getScripts())}}function P(e,t){return e||t+(t.includes("?")?"&":"?")+"amp=1"}function O(e,t){return"/"===e?t?"/index."+t+".js":"/index.js":t?e+"."+t+".js":e+".js"}t.NextScript=S,S.contextTypes={_documentProps:p.default.any,_devOnlyInvalidateCacheQueryString:p.default.string},S.propTypes={nonce:p.default.string,crossOrigin:p.default.string},S.safariNomoduleFix='!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();'},"./node_modules/next/dist/server/htmlescape.js":function(e,t,n){"use strict";t.__esModule=!0,t.htmlEscapeJsonString=function(e){return e.replace(s,e=>r[e])};const r={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},s=/[&><\u2028\u2029]/g},"./node_modules/next/document.js":function(e,t,n){e.exports=n("./node_modules/next/dist/pages/_document.js")},"./pages/_document.js":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js"),s=n("react"),o=n.n(s),i=n("./node_modules/next/document.js"),a=n.n(i),c=n("styled-components"),l=o.a.createElement;t.default=class extends a.a{static getInitialProps({renderPage:e}){const t=new c.ServerStyleSheet,n=e(e=>n=>t.collectStyles(l(e,n))),s=t.getStyleElement();return Object(r.default)({},n,{styleTags:s})}render(){return l("html",{lang:"en"},l(i.Head,null,l("link",{media:"screen",rel:"stylesheet",href:"/css/style.css"}),this.props.styleTags,l("link",{rel:"shortcut icon",href:"icons/favicon.ico",type:"image/x-icon"}),l("link",{rel:"manifest",href:"/manifest.json"}),l("meta",{name:"description",content:"Full stack developer building amazing applications and bringing their ideas to life."}),l("meta",{name:"theme-color",content:"#ffffff"})),l("body",null,l(i.Main,null),l(i.NextScript,null)))}}},1:function(e,t,n){e.exports=n("./pages/_document.js")},"core-js/library/fn/array/is-array":function(e,t){e.exports=require("core-js/library/fn/array/is-array")},"core-js/library/fn/date/now":function(e,t){e.exports=require("core-js/library/fn/date/now")},"core-js/library/fn/json/stringify":function(e,t){e.exports=require("core-js/library/fn/json/stringify")},"core-js/library/fn/object/assign":function(e,t){e.exports=require("core-js/library/fn/object/assign")},"core-js/library/fn/object/define-property":function(e,t){e.exports=require("core-js/library/fn/object/define-property")},"core-js/library/fn/object/get-own-property-descriptor":function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-descriptor")},"core-js/library/fn/object/get-own-property-symbols":function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-symbols")},"core-js/library/fn/object/keys":function(e,t){e.exports=require("core-js/library/fn/object/keys")},"core-js/library/fn/promise":function(e,t){e.exports=require("core-js/library/fn/promise")},"core-js/library/fn/set":function(e,t){e.exports=require("core-js/library/fn/set")},"prop-types":function(e,t){e.exports=require("prop-types")},react:function(e,t){e.exports=require("react")},"styled-components":function(e,t){e.exports=require("styled-components")},"styled-jsx/server":function(e,t){e.exports=require("styled-jsx/server")},url:function(e,t){e.exports=require("url")}});