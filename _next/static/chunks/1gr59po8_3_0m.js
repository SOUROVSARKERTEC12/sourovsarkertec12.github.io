(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28298,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useRouterBFCache",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t,r){let[o,i]=(0,n.useState)(()=>({tree:e,cacheNode:t,stateKey:r,next:null}));if(o.tree===e)return o;let a={tree:e,cacheNode:t,stateKey:r,next:null},u=1,l=o,c=a;for(;null!==l&&u<1;){if(l.stateKey===r){c.next=l.next;break}{u++;let e={tree:l.tree,cacheNode:l.cacheNode,stateKey:l.stateKey,next:null};c.next=e,c=e}l=l.next}return i(a),a}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},47257,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ClientPageRoot",{enumerable:!0,get:function(){return c}});let n=e.r(43476),o=e.r(8372),i=e.r(71645),a=e.r(33906),u=e.r(61994),l=e.r(15783);function c({Component:e,serverProvidedParams:t}){let r,f;if(null!==t)r=t.searchParams,f=t.params;else{let e=(0,i.use)(o.LayoutRouterContext);f=null!==e?e.parentParams:{},r=(0,a.urlSearchParamsToParsedUrlQuery)((0,i.use)(u.SearchParamsContext))}let s=(0,l.createClientSearchParams)(r),d=(0,l.createClientParams)(f);return(0,n.jsx)(e,{params:d,searchParams:s})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},92825,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ClientSegmentRoot",{enumerable:!0,get:function(){return u}});let n=e.r(43476),o=e.r(8372),i=e.r(71645),a=e.r(15783);function u({Component:e,slots:t,serverProvidedParams:r}){let l;if(null!==r)l=r.params;else{let e=(0,i.use)(o.LayoutRouterContext);l=null!==e?e.parentParams:{}}let c=(0,a.createClientParams)(l);return(0,n.jsx)(e,{...t,params:c})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},68017,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HTTPAccessFallbackBoundary",{enumerable:!0,get:function(){return f}});let n=e.r(90809),o=e.r(43476),i=n._(e.r(71645)),a=e.r(90373),u=e.r(54394),l=e.r(8372);class c extends i.default.Component{constructor(e){super(e),this.state={triggeredStatus:void 0,previousPathname:e.pathname}}componentDidCatch(){}static getDerivedStateFromError(e){if((0,u.isHTTPAccessFallbackError)(e))return{triggeredStatus:(0,u.getAccessFallbackHTTPStatus)(e)};throw e}static getDerivedStateFromProps(e,t){return e.pathname!==t.previousPathname&&t.triggeredStatus?{triggeredStatus:void 0,previousPathname:e.pathname}:{triggeredStatus:t.triggeredStatus,previousPathname:e.pathname}}render(){let{notFound:e,forbidden:t,unauthorized:r,children:n}=this.props,{triggeredStatus:i}=this.state,a={[u.HTTPAccessErrorStatus.NOT_FOUND]:e,[u.HTTPAccessErrorStatus.FORBIDDEN]:t,[u.HTTPAccessErrorStatus.UNAUTHORIZED]:r};if(i){let l=i===u.HTTPAccessErrorStatus.NOT_FOUND&&e,c=i===u.HTTPAccessErrorStatus.FORBIDDEN&&t,f=i===u.HTTPAccessErrorStatus.UNAUTHORIZED&&r;return l||c||f?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"robots",content:"noindex"}),!1,a[i]]}):n}return n}}function f({notFound:e,forbidden:t,unauthorized:r,children:n}){let u=(0,a.useUntrackedPathname)(),s=(0,i.useContext)(l.MissingSlotContext);return e||t||r?(0,o.jsx)(c,{pathname:u,notFound:e,forbidden:t,unauthorized:r,missingSlots:s,children:n}):(0,o.jsx)(o.Fragment,{children:n})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},22976,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={InstantValidationBoundaryContext:function(){return i},PlaceValidationBoundaryBelowThisLevel:function(){return a},RenderValidationBoundaryAtThisLevel:function(){return u},SlotMarker:function(){return l}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=null,a=null,u=null,l=null;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},77694,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={InstantValidationBoundaryContext:function(){return i.InstantValidationBoundaryContext},PlaceValidationBoundaryBelowThisLevel:function(){return i.PlaceValidationBoundaryBelowThisLevel},RenderValidationBoundaryAtThisLevel:function(){return i.RenderValidationBoundaryAtThisLevel},SlotMarker:function(){return i.SlotMarker}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(22976);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},39756,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0});var n={LoadingBoundaryProvider:function(){return S},default:function(){return D}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(55682),a=e.r(90809),u=e.r(43476),l=a._(e.r(71645)),c=i._(e.r(74080)),f=e.r(8372),s=e.r(1244),d=e.r(72383),v=e.r(91915),m=e.r(58442),h=e.r(68017);e.r(77694);let g=e.r(70725),p=e.r(28298);e.r(74180);let x=e.r(61994),T=e.r(33906),y=e.r(95871);c.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(e,t,r){let n=e.getClientRects();if(0===n.length)return 0;let o=1/0;for(let e=0;e<n.length;e++){let t=n[e];t.top<o&&(o=t.top)}return o>=r()&&o<=t?1:2}l.default.Component;let _=function(e){let t=l.default.useRef(null);return(0,l.useLayoutEffect)(()=>{let{focusAndScrollRef:r,cacheNode:n}=e,o=r.forceScroll?r.scrollRef:n.scrollRef;if(null===o||!o.current)return;let i=null,a=r.hashFragment;if(a){var u;if(null===(i="top"===(u=a)?document.body:document.getElementById(u)??document.getElementsByName(u)[0]??null)){o.current=!1,r.onlyHashChange=!1,r.hashFragment=null;return}}else i=t.current;if(null===i)return;let l=!1;(0,v.disableSmoothScrollDuringRouteTransition)(()=>{let e=document.documentElement,t=null,r=null,n=null,u=()=>{var r,o;let i,a;return null===n&&(r=e,o=t,n=!Number.isFinite(a=Number.parseFloat(i=getComputedStyle(r).scrollPaddingTop))||a<0?0:i.endsWith("px")?a:i.endsWith("%")?a/100*o:0),n};(a||(t=e.clientHeight,0!==(r=R(i,t,u))))&&((l=!0,o.current=!1,a)?i.scrollIntoView():1!==r&&(e.scrollTop=0,2===R(i,t,u)&&i.scrollIntoView()))},{dontForceLayout:!0,onlyHashChange:r.onlyHashChange}),l&&(r.onlyHashChange=!1,r.hashFragment=null)},void 0),(0,u.jsx)(l.Fragment,{ref:t,children:e.children})};function E({children:e,cacheNode:t}){let r=(0,l.useContext)(f.GlobalLayoutRouterContext);if(!r)throw Object.defineProperty(Error("invariant global layout router not mounted"),"__NEXT_ERROR_CODE",{value:"E473",enumerable:!1,configurable:!0});return(0,u.jsx)(_,{focusAndScrollRef:r.focusAndScrollRef,cacheNode:t,children:e})}function b({tree:e,segmentPath:t,debugNameContext:r,cacheNode:n,params:o,url:i,isActive:a}){let c,d=(0,l.useContext)(f.GlobalLayoutRouterContext);if((0,l.useContext)(x.NavigationPromisesContext),!d)throw Object.defineProperty(Error("invariant global layout router not mounted"),"__NEXT_ERROR_CODE",{value:"E473",enumerable:!1,configurable:!0});let v=null!==n?n:(0,l.use)(s.unresolvedThenable),m=null!==v.prefetchRsc?v.prefetchRsc:v.rsc,h=(0,l.useDeferredValue)(v.rsc,m);if((0,y.isDeferredRsc)(h)){let e=(0,l.use)(h);null===e&&(0,l.use)(s.unresolvedThenable),c=e}else null===h&&(0,l.use)(s.unresolvedThenable),c=h;let g=c;return(0,u.jsx)(f.LayoutRouterContext.Provider,{value:{parentTree:e,parentCacheNode:v,parentSegmentPath:t,parentParams:o,parentLoadingData:null,debugNameContext:r,url:i,isActive:a},children:g})}function S({loading:e,children:t}){let r=(0,l.use)(f.LayoutRouterContext);return null===r?t:(0,u.jsx)(f.LayoutRouterContext.Provider,{value:{parentTree:r.parentTree,parentCacheNode:r.parentCacheNode,parentSegmentPath:r.parentSegmentPath,parentParams:r.parentParams,parentLoadingData:e,debugNameContext:r.debugNameContext,url:r.url,isActive:r.isActive},children:t})}function P({name:e,loading:t,children:r}){if(null!==t){let n=t[0],o=t[1],i=t[2];return(0,u.jsx)(l.Suspense,{name:e,fallback:(0,u.jsxs)(u.Fragment,{children:[o,i,n]}),children:r})}return(0,u.jsx)(u.Fragment,{children:r})}function D({parallelRouterKey:e,error:t,errorStyles:r,errorScripts:n,templateStyles:o,templateScripts:i,template:a,notFound:c,forbidden:v,unauthorized:x,segmentViewBoundaries:y}){let R=(0,l.useContext)(f.LayoutRouterContext);if(!R)throw Object.defineProperty(Error("invariant expected layout router to be mounted"),"__NEXT_ERROR_CODE",{value:"E56",enumerable:!1,configurable:!0});let{parentTree:_,parentCacheNode:S,parentSegmentPath:A,parentParams:F,parentLoadingData:O,url:C,isActive:w,debugNameContext:L}=R,B=_[0],U=null===A?[e]:A.concat([B,e]),M=_[1][e],j=S.slots;(void 0===M||null===j)&&(0,l.use)(s.unresolvedThenable);let N=M[0],I=j[e]??null,X=(0,g.createRouterCacheKey)(N,!0),G=(0,p.useRouterBFCache)(M,I,X),z=[];do{let e=G.tree,l=G.cacheNode,s=G.stateKey,g=e[0],p=F;if(Array.isArray(g)){let e=g[0],t=g[1],r=g[2],n=(0,T.getParamValueFromCacheKey)(t,r);null!==n&&(p={...F,[e]:n})}let y=function(e){if("/"===e)return"/";if("string"==typeof e)if("(__SLOT__)"===e)return;else return e+"/";return e[1]+"/"}(g),R=y??L,_=void 0===y?void 0:L,S=(0,u.jsxs)(E,{cacheNode:l,children:[(0,u.jsx)(d.ErrorBoundary,{errorComponent:t,errorStyles:r,errorScripts:n,children:(0,u.jsx)(P,{name:_,loading:O,children:(0,u.jsx)(h.HTTPAccessFallbackBoundary,{notFound:c,forbidden:v,unauthorized:x,children:(0,u.jsxs)(m.RedirectBoundary,{children:[(0,u.jsx)(b,{url:C,tree:e,params:p,cacheNode:l,segmentPath:U,debugNameContext:R,isActive:w&&s===X}),null]})})})}),null]}),D=(0,u.jsxs)(f.TemplateContext.Provider,{value:S,children:[o,i,a]},s);z.push(D),G=G.next}while(null!==G)return z}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},37457,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return u}});let n=e.r(90809),o=e.r(43476),i=n._(e.r(71645)),a=e.r(8372);function u(){let e=(0,i.useContext)(a.TemplateContext);return(0,o.jsx)(o.Fragment,{children:e})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},6831,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderParamsFromClient",{enumerable:!0,get:function(){return o}});let n=new WeakMap;function o(e){let t=n.get(e);if(t)return t;let r=Promise.resolve(e);return n.set(e,r),r}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},97689,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderParamsFromClient",{enumerable:!0,get:function(){return n}});let n=e.r(6831).createRenderParamsFromClient;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},93504,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderSearchParamsFromClient",{enumerable:!0,get:function(){return o}});let n=new WeakMap;function o(e){let t=n.get(e);if(t)return t;let r=Promise.resolve(e);return n.set(e,r),r}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},66996,(e,t,r)=>{"use strict";e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createRenderSearchParamsFromClient",{enumerable:!0,get:function(){return n}});let n=e.r(93504).createRenderSearchParamsFromClient;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},15783,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={createClientParams:function(){return i.createRenderParamsFromClient},createClientSearchParams:function(){return a.createRenderSearchParamsFromClient}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(97689),a=e.r(66996);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},27201,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"IconMark",{enumerable:!0,get:function(){return o}});let n=e.r(43476),o=()=>"u">typeof window?null:(0,n.jsx)("meta",{name:"«nxt-icon»"})},91915,(e,t,r)=>{"use strict";function n(e,t={}){if(t.onlyHashChange)return void e();let r=document.documentElement;if("smooth"!==r.dataset.scrollBehavior)return void e();let o=r.style.scrollBehavior;r.style.scrollBehavior="auto",t.dontForceLayout||r.getClientRects(),e(),r.style.scrollBehavior=o}e.i(47167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"disableSmoothScrollDuringRouteTransition",{enumerable:!0,get:function(){return n}})},87779,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let n={cyber:"#06b6d4",matrix:"#10b981",nebula:"#d946ef",light:"#2563eb"};function o(e){if(e&&"auto"!==e)return e;let t=document.documentElement.getAttribute("data-theme")||"cyber";if(n[t])return n[t];let r=getComputedStyle(document.documentElement).getPropertyValue("--accent-primary").trim();return r&&r.startsWith("#")?r:"#06b6d4"}e.s(["default",0,function({SIM_RESOLUTION:e=128,DYE_RESOLUTION:n=1440,CAPTURE_RESOLUTION:i=512,DENSITY_DISSIPATION:a=3.5,VELOCITY_DISSIPATION:u=2,PRESSURE:l=.1,PRESSURE_ITERATIONS:c=20,CURL:f=3,SPLAT_RADIUS:s=.2,SPLAT_FORCE:d=6e3,SHADING:v=!0,COLOR_UPDATE_SPEED:m=10,BACK_COLOR:h={r:.5,g:0,b:0},TRANSPARENT:g=!0,RAINBOW_MODE:p=!1,COLOR:x="auto"}){let T=(0,r.useRef)(null),y=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t,r,i,h,g,R,_=T.current;if(!_)return;let E=!0,b={SIM_RESOLUTION:e,DYE_RESOLUTION:n,DENSITY_DISSIPATION:a,VELOCITY_DISSIPATION:u,PRESSURE:l,PRESSURE_ITERATIONS:c,CURL:f,SPLAT_RADIUS:s,SPLAT_FORCE:d,SHADING:v,COLOR_UPDATE_SPEED:m,RAINBOW_MODE:p,COLOR:o(x)},S=[{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}];function P(e,t,r,n){var o,i,a,u;let l,c;if(o=e,i=t,a=r,u=n,l=o.createTexture(),o.bindTexture(o.TEXTURE_2D,l),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_2D,0,i,4,4,0,a,u,null),c=o.createFramebuffer(),o.bindFramebuffer(o.FRAMEBUFFER,c),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,l,0),o.checkFramebufferStatus(o.FRAMEBUFFER)!==o.FRAMEBUFFER_COMPLETE)switch(t){case e.R16F:return P(e,e.RG16F??e.RGBA,e.RG??e.RGBA,n);case e.RG16F:return P(e,e.RGBA16F??e.RGBA,e.RGBA,n);default:return null}return{internalFormat:t,format:r}}let D=function(e){let t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},r=e.getContext("webgl2",t)||e.getContext("webgl",t)||e.getContext("experimental-webgl",t);if(!r)return null;let n="u">typeof WebGL2RenderingContext&&r instanceof WebGL2RenderingContext,o=null,i=null;n?(r.getExtension("EXT_color_buffer_float"),i=r.getExtension("OES_texture_float_linear")):(o=r.getExtension("OES_texture_half_float"),i=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);let a=n?r.HALF_FLOAT??5131:o?o.HALF_FLOAT_OES:5131,u=null,l=null,c=null;return n?(u=P(r,r.RGBA16F??r.RGBA,r.RGBA,a),l=P(r,r.RG16F??r.RG??r.RGBA,r.RG??r.RGBA,a),c=P(r,r.R16F??r.RED??r.RGBA,r.RED??r.RGBA,a)):(u=P(r,r.RGBA,r.RGBA,a),l=P(r,r.RGBA,r.RGBA,a),c=P(r,r.RGBA,r.RGBA,a)),{gl:r,ext:{formatRGBA:u,formatRG:l,formatR:c,halfFloatTexType:a,supportLinearFiltering:!!i}}}(_);if(!D)return;let{gl:A,ext:F}=D;F.supportLinearFiltering||(b.DYE_RESOLUTION=256,b.SHADING=!1);class O{program;uniforms;constructor(e,t){this.program=C(e,t),this.uniforms=this.program?w(this.program):{}}bind(){this.program&&A.useProgram(this.program)}}function C(e,t){let r=A.createProgram();return r?(A.attachShader(r,e),A.attachShader(r,t),A.linkProgram(r),A.getProgramParameter(r,A.LINK_STATUS)||console.error(A.getProgramInfoLog(r)),r):null}function w(e){let t={},r=A.getProgramParameter(e,A.ACTIVE_UNIFORMS);for(let n=0;n<r;n++){let r=A.getActiveUniform(e,n);r&&(t[r.name]=A.getUniformLocation(e,r.name))}return t}function L(e,t,r=null){t=function(e,t){if(!t)return e;let r="";return t.forEach(e=>{r+="#define "+e+"\n"}),r+e}(t,r);let n=A.createShader(e);return n?(A.shaderSource(n,t),A.compileShader(n),A.getShaderParameter(n,A.COMPILE_STATUS)||console.error(A.getShaderInfoLog(n)),n):null}let B=L(A.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),U=L(A.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),M=L(A.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),j=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,N=L(A.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `),I=L(A.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `,F.supportLinearFiltering?null:["MANUAL_FILTERING"]),X=L(A.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),G=L(A.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),z=L(A.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),H=L(A.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),V=L(A.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `);if(!B||!U||!M||!N||!I||!X||!G||!z||!H||!V)return;let Y=(A.bindBuffer(A.ARRAY_BUFFER,A.createBuffer()),A.bufferData(A.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),A.STATIC_DRAW),A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,A.createBuffer()),A.bufferData(A.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),A.STATIC_DRAW),A.vertexAttribPointer(0,2,A.FLOAT,!1,0,0),A.enableVertexAttribArray(0),(e,t=!1)=>{null==e?(A.viewport(0,0,A.drawingBufferWidth,A.drawingBufferHeight),A.bindFramebuffer(A.FRAMEBUFFER,null)):(A.viewport(0,0,e.width,e.height),A.bindFramebuffer(A.FRAMEBUFFER,e.fbo)),t&&(A.clearColor(0,0,0,1),A.clear(A.COLOR_BUFFER_BIT)),A.drawElements(A.TRIANGLES,6,A.UNSIGNED_SHORT,0)}),k=new O(B,U),W=new O(B,M),K=new O(B,N),Z=new O(B,I),q=new O(B,X),Q=new O(B,G),J=new O(B,z),$=new O(B,H),ee=new O(B,V),et=new class{vertexShader;fragmentShaderSource;programs;activeProgram;uniforms;constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(e){let t=0;if(e)for(let r=0;r<e.length;r++)t+=function(e){if(0===e.length)return 0;let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e[r]);let r=this.programs[t];if(null==r){let n=L(A.FRAGMENT_SHADER,this.fragmentShaderSource,e);if(!n)return;(r=C(this.vertexShader,n))&&(this.programs[t]=r)}r!==this.activeProgram&&r&&(this.uniforms=w(r),this.activeProgram=r)}bind(){this.activeProgram&&A.useProgram(this.activeProgram)}}(B,j);function er(){let e=ed(b.SIM_RESOLUTION),n=ed(b.DYE_RESOLUTION),o=F.halfFloatTexType,a=F.formatRGBA,u=F.formatRG,l=F.formatR;if(!a||!u||!l)return;let c=F.supportLinearFiltering?A.LINEAR:A.NEAREST;A.disable(A.BLEND),t=t?ei(t,n.width,n.height,a.internalFormat,a.format,o,c):eo(n.width,n.height,a.internalFormat,a.format,o,c),r=r?ei(r,e.width,e.height,u.internalFormat,u.format,o,c):eo(e.width,e.height,u.internalFormat,u.format,o,c),i=en(e.width,e.height,l.internalFormat,l.format,o,A.NEAREST),h=en(e.width,e.height,l.internalFormat,l.format,o,A.NEAREST),g=eo(e.width,e.height,l.internalFormat,l.format,o,A.NEAREST)}function en(e,t,r,n,o,i){A.activeTexture(A.TEXTURE0);let a=A.createTexture();A.bindTexture(A.TEXTURE_2D,a),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,i),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MAG_FILTER,i),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_WRAP_S,A.CLAMP_TO_EDGE),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_WRAP_T,A.CLAMP_TO_EDGE),A.texImage2D(A.TEXTURE_2D,0,r,e,t,0,n,o,null);let u=A.createFramebuffer();A.bindFramebuffer(A.FRAMEBUFFER,u),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,a,0),A.viewport(0,0,e,t),A.clear(A.COLOR_BUFFER_BIT);let l=1/e,c=1/t;return{texture:a,fbo:u,width:e,height:t,texelSizeX:l,texelSizeY:c,attach:e=>(A.activeTexture(A.TEXTURE0+e),A.bindTexture(A.TEXTURE_2D,a),e)}}function eo(e,t,r,n,o,i){let a=en(e,t,r,n,o,i),u=en(e,t,r,n,o,i);return{width:e,height:t,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a},set read(value){a=value},get write(){return u},set write(value){u=value},swap(){let e=a;a=u,u=e}}}function ei(e,t,r,n,o,i,a){var u;let l;return e.width===t&&e.height===r?e:(u=e.read,l=en(t,r,n,o,i,a),k.bind(),A.uniform1i(k.uniforms.uTexture,u.attach(0)),Y(l),e.read=l,e.write=en(t,r,n,o,i,a),e.width=t,e.height=r,e.texelSizeX=1/t,e.texelSizeY=1/r,e)}R=[],b.SHADING&&R.push("SHADING"),et.setKeywords(R),er();let ea=Date.now(),eu=0;function el(e,n,o,i,a){_&&(K.bind(),A.uniform1i(K.uniforms.uTarget,r.read.attach(0)),A.uniform1f(K.uniforms.aspectRatio,_.width/_.height),A.uniform2f(K.uniforms.point,e,n),A.uniform3f(K.uniforms.color,o,i,0),A.uniform1f(K.uniforms.radius,function(e){if(!_)return e;let t=_.width/_.height;return t>1&&(e*=t),e}(b.SPLAT_RADIUS/100)),Y(r.write),r.swap(),A.uniform1i(K.uniforms.uTarget,t.read.attach(0)),A.uniform3f(K.uniforms.color,a.r,a.g,a.b),Y(t.write),t.swap())}function ec(e,t,r,n){_&&(e.id=t,e.down=!0,e.moved=!1,e.texcoordX=r/_.width,e.texcoordY=1-n/_.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=es())}function ef(e,t,r,n){_&&(e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=t/_.width,e.texcoordY=1-r/_.height,e.deltaX=function(e){if(!_)return e;let t=_.width/_.height;return t<1&&(e*=t),e}(e.texcoordX-e.prevTexcoordX),e.deltaY=function(e){if(!_)return e;let t=_.width/_.height;return t>1&&(e/=t),e}(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=n)}function es(){if(!b.RAINBOW_MODE){let e,t,r,n;return e=b.COLOR.replace("#",""),t=0,r=0,n=0,3===e.length?(t=parseInt(e[0]+e[0],16)/255,r=parseInt(e[1]+e[1],16)/255,n=parseInt(e[2]+e[2],16)/255):6===e.length&&(t=parseInt(e.slice(0,2),16)/255,r=parseInt(e.slice(2,4),16)/255,n=parseInt(e.slice(4,6),16)/255),{r:.15*t,g:.15*r,b:.15*n}}let e=function(e){let t=0,r=0,n=0,o=Math.floor(6*e),i=6*e-o,a=0,u=+(1-i),l=+(1-(1-i)*1);switch(o%6){case 0:t=1,r=l,n=a;break;case 1:t=u,r=1,n=a;break;case 2:t=a,r=1,n=l;break;case 3:t=a,r=u,n=1;break;case 4:t=l,r=a,n=1;break;case 5:t=1,r=a,n=u}return{r:t,g:r,b:n}}(Math.random());return e.r*=.15,e.g*=.15,e.b*=.15,e}function ed(e){let t=A.drawingBufferWidth/A.drawingBufferHeight;t<1&&(t=1/t);let r=Math.round(e),n=Math.round(e*t);return A.drawingBufferWidth>A.drawingBufferHeight?{width:n,height:r}:{width:r,height:n}}function ev(e){return Math.floor(e*(window.devicePixelRatio||1))}function em(e){let t,r,n,o=S[0];ec(o,-1,ev(e.clientX),ev(e.clientY)),t=es(),t.r*=10,t.g*=10,t.b*=10,r=10*(Math.random()-.5),n=30*(Math.random()-.5),el(o.texcoordX,o.texcoordY,r,n,t)}let eh=!1;function eg(e){let t=S[0],r=ev(e.clientX),n=ev(e.clientY);eh?ef(t,r,n,t.color):(ef(t,r,n,es()),eh=!0)}function ep(e){let t=e.targetTouches,r=S[0];for(let e=0;e<t.length;e++){let n=ev(t[e].clientX),o=ev(t[e].clientY);ec(r,t[e].identifier,n,o)}}function ex(e){let t=e.targetTouches,r=S[0];for(let e=0;e<t.length;e++)ef(r,ev(t[e].clientX),ev(t[e].clientY),r.color)}function eT(e){let t=e.changedTouches,r=S[0];for(let e=0;e<t.length;e++)r.down=!1}let ey=new MutationObserver(()=>{b.COLOR=o(x),S.forEach(e=>{e.color=es()})});return ey.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),window.addEventListener("mousedown",em),window.addEventListener("mousemove",eg),window.addEventListener("touchstart",ep),window.addEventListener("touchmove",ex,!1),window.addEventListener("touchend",eT),!function e(){var n,o;let a,u,l,c,f;if(!E)return;let s=(u=Math.min(u=((a=Date.now())-ea)/1e3,.016666),ea=a,u);(function(){if(!_)return!1;let e=ev(_.clientWidth),t=ev(_.clientHeight);return(_.width!==e||_.height!==t)&&(_.width=e,_.height=t,!0)})()&&er(),(eu+=s*b.COLOR_UPDATE_SPEED)>=1&&(n=eu,eu=0==(l=1)?0:(n-0)%l+0,S.forEach(e=>{e.color=es()})),S.forEach(e=>{var t;let r,n;e.moved&&(e.moved=!1,r=(t=e).deltaX*b.SPLAT_FORCE,n=t.deltaY*b.SPLAT_FORCE,el(t.texcoordX,t.texcoordY,r,n,t.color))}),function(e){A.disable(A.BLEND),Q.bind(),A.uniform2f(Q.uniforms.texelSize,r.texelSizeX,r.texelSizeY),A.uniform1i(Q.uniforms.uVelocity,r.read.attach(0)),Y(h),J.bind(),A.uniform2f(J.uniforms.texelSize,r.texelSizeX,r.texelSizeY),A.uniform1i(J.uniforms.uVelocity,r.read.attach(0)),A.uniform1i(J.uniforms.uCurl,h.attach(1)),A.uniform1f(J.uniforms.curl,b.CURL),A.uniform1f(J.uniforms.dt,e),Y(r.write),r.swap(),q.bind(),A.uniform2f(q.uniforms.texelSize,r.texelSizeX,r.texelSizeY),A.uniform1i(q.uniforms.uVelocity,r.read.attach(0)),Y(i),W.bind(),A.uniform1i(W.uniforms.uTexture,g.read.attach(0)),A.uniform1f(W.uniforms.value,b.PRESSURE),Y(g.write),g.swap(),$.bind(),A.uniform2f($.uniforms.texelSize,r.texelSizeX,r.texelSizeY),A.uniform1i($.uniforms.uDivergence,i.attach(0));for(let e=0;e<b.PRESSURE_ITERATIONS;e++)A.uniform1i($.uniforms.uPressure,g.read.attach(1)),Y(g.write),g.swap();ee.bind(),A.uniform2f(ee.uniforms.texelSize,r.texelSizeX,r.texelSizeY),A.uniform1i(ee.uniforms.uPressure,g.read.attach(0)),A.uniform1i(ee.uniforms.uVelocity,r.read.attach(1)),Y(r.write),r.swap(),Z.bind(),A.uniform2f(Z.uniforms.texelSize,r.texelSizeX,r.texelSizeY),F.supportLinearFiltering||A.uniform2f(Z.uniforms.dyeTexelSize,r.texelSizeX,r.texelSizeY);let n=r.read.attach(0);A.uniform1i(Z.uniforms.uVelocity,n),A.uniform1i(Z.uniforms.uSource,n),A.uniform1f(Z.uniforms.dt,e),A.uniform1f(Z.uniforms.dissipation,b.VELOCITY_DISSIPATION),Y(r.write),r.swap(),F.supportLinearFiltering||A.uniform2f(Z.uniforms.dyeTexelSize,t.texelSizeX,t.texelSizeY),A.uniform1i(Z.uniforms.uVelocity,r.read.attach(0)),A.uniform1i(Z.uniforms.uSource,t.read.attach(1)),A.uniform1f(Z.uniforms.dissipation,b.DENSITY_DISSIPATION),Y(t.write),t.swap()}(s),A.blendFunc(A.ONE,A.ONE_MINUS_SRC_ALPHA),A.enable(A.BLEND),c=(o=null,A.drawingBufferWidth),f=null==o?A.drawingBufferHeight:o.height,et.bind(),b.SHADING&&A.uniform2f(et.uniforms.texelSize,1/c,1/f),A.uniform1i(et.uniforms.uTexture,t.read.attach(0)),Y(o),y.current=requestAnimationFrame(e)}(),()=>{E=!1,ey.disconnect(),y.current&&(cancelAnimationFrame(y.current),y.current=null),window.removeEventListener("mousedown",em),window.removeEventListener("mousemove",eg),window.removeEventListener("touchstart",ep),window.removeEventListener("touchmove",ex),window.removeEventListener("touchend",eT)}},[e,n,i,a,u,l,c,f,s,d,v,m,h,g,p,x]),(0,t.jsx)("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:(0,t.jsx)("canvas",{ref:T,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})}])}]);