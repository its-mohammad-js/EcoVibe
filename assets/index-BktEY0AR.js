const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-B8AacdPT.js","assets/index-B_HFf_np.js","assets/iconBase-BL6_KYrt.js","assets/index-7ZH8PQa-.js","assets/index-UzGScAa8.js","assets/index-DYJY0DtV.js","assets/index-9utHU4C5.js","assets/index-B8vJLAzm.js","assets/react-stars-CR7EJkWY.js","assets/index-Chjiymov.js","assets/useMediaQuery-sTwrKcTY.js","assets/index-BmBMlcbE.js","assets/motion-BBjPZyOW.js","assets/ProductsContainer-Blbk5mWa.js","assets/useTouchScroll-DeWiXXKX.js","assets/StoryListModal-DsmXLE3W.js","assets/index.esm2017-k721lsQk.js","assets/UseDisableScroll-CkfVoSi8.js","assets/ContentSwitcher-DOKLWGZP.js","assets/UseOutsideClick-BBAhdokL.js","assets/useGetStories-my4NPDQv.js","assets/lodash-f6c8T4ME.js","assets/index-CQhbJd4H.js","assets/AddStoryModal-C2gjga_V.js","assets/ShopPage-Co_3Nu8n.js","assets/ExploreProductsPage-CuH717S0.js","assets/useGetOptions-BQftlqTC.js","assets/ProductDetailsPage-DJxEElrA.js","assets/Select-49a62830.esm-PKmHK7Zp.js","assets/index-CnyDuYXe.js","assets/ChatPage-BF_4T7V9.js","assets/index-Ck2mnqgW.js","assets/generateCategoricalChart-BB-49P_s.js","assets/index.esm-enC4ECWF.js","assets/useCreateChatRoom-DQaUmZBs.js","assets/SignUpCustomer-uxKm2aNZ.js","assets/index.esm-L5-nJKtH.js","assets/index-BdIHs_yd.js","assets/TextInput-CMklU4ei.js","assets/formInputsInfo-S6NU7B-M.js","assets/PersonalDetailsForm-BgBP-NqP.js","assets/ProfileImagePicker-OnQarAg-.js","assets/react-select.esm-BGlIssT-.js","assets/UserInterestsForm-DNbDq4t1.js","assets/SignUpSeller-DXhs-dez.js","assets/BusinessInfoForm-Cd56riv0.js","assets/SignInPage-FbRlaXO1.js","assets/WishListPage-D-ovphb8.js","assets/CartPage-Dz9B_qkv.js","assets/CheckoutPage-BK9Rteml.js","assets/AddCreditCardForm-CAKL2Eub.js","assets/OrdersPage-BweHC--E.js","assets/index-Cz5Hziye.js","assets/IconicAlert-B2PqUVVG.js","assets/CustomerProfilePage-DOlbM3m6.js","assets/index-DGdsehoN.js","assets/sellerSolutionsPage-BNI1LCUT.js","assets/SellerDashboardPage-xzD8IGIU.js","assets/AddEditProductForm-Cn7YrhVD.js","assets/DashboardContext-C7-_orKa.js","assets/SellerProfilePage-DMxbhfDl.js","assets/MainTab-c1DxphKx.js","assets/ProductTab-Cr8dc7Ro.js","assets/OrdersTab-BiA_Naqk.js"])))=>i.map(i=>d[i]);
var TI=Object.defineProperty;var II=(n,e,t)=>e in n?TI(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var af=(n,e,t)=>II(n,typeof e!="symbol"?e+"":e,t);function SI(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var Kx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Gx(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var o=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:function(){return n[i]}})}),t}var lf={exports:{}},Ga={},uf={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y;function RI(){if($y)return Ae;$y=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function T(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function P(V,G,pe){this.props=V,this.context=G,this.refs=M,this.updater=pe||C}P.prototype.isReactComponent={},P.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},P.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function z(){}z.prototype=P.prototype;function K(V,G,pe){this.props=V,this.context=G,this.refs=M,this.updater=pe||C}var q=K.prototype=new z;q.constructor=K,N(q,P.prototype),q.isPureReactComponent=!0;var Y=Array.isArray,se=Object.prototype.hasOwnProperty,re={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(V,G,pe){var Se,Re={},Ne=null,Ve=null;if(G!=null)for(Se in G.ref!==void 0&&(Ve=G.ref),G.key!==void 0&&(Ne=""+G.key),G)se.call(G,Se)&&!D.hasOwnProperty(Se)&&(Re[Se]=G[Se]);var Me=arguments.length-2;if(Me===1)Re.children=pe;else if(1<Me){for(var Be=Array(Me),wt=0;wt<Me;wt++)Be[wt]=arguments[wt+2];Re.children=Be}if(V&&V.defaultProps)for(Se in Me=V.defaultProps,Me)Re[Se]===void 0&&(Re[Se]=Me[Se]);return{$$typeof:n,type:V,key:Ne,ref:Ve,props:Re,_owner:re.current}}function A(V,G){return{$$typeof:n,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function x(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function L(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(pe){return G[pe]})}var U=/\/+/g;function k(V,G){return typeof V=="object"&&V!==null&&V.key!=null?L(""+V.key):G.toString(36)}function it(V,G,pe,Se,Re){var Ne=typeof V;(Ne==="undefined"||Ne==="boolean")&&(V=null);var Ve=!1;if(V===null)Ve=!0;else switch(Ne){case"string":case"number":Ve=!0;break;case"object":switch(V.$$typeof){case n:case e:Ve=!0}}if(Ve)return Ve=V,Re=Re(Ve),V=Se===""?"."+k(Ve,0):Se,Y(Re)?(pe="",V!=null&&(pe=V.replace(U,"$&/")+"/"),it(Re,G,pe,"",function(wt){return wt})):Re!=null&&(x(Re)&&(Re=A(Re,pe+(!Re.key||Ve&&Ve.key===Re.key?"":(""+Re.key).replace(U,"$&/")+"/")+V)),G.push(Re)),1;if(Ve=0,Se=Se===""?".":Se+":",Y(V))for(var Me=0;Me<V.length;Me++){Ne=V[Me];var Be=Se+k(Ne,Me);Ve+=it(Ne,G,pe,Be,Re)}else if(Be=T(V),typeof Be=="function")for(V=Be.call(V),Me=0;!(Ne=V.next()).done;)Ne=Ne.value,Be=Se+k(Ne,Me++),Ve+=it(Ne,G,pe,Be,Re);else if(Ne==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Ve}function Lt(V,G,pe){if(V==null)return V;var Se=[],Re=0;return it(V,Se,"","",function(Ne){return G.call(pe,Ne,Re++)}),Se}function Vt(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(pe){(V._status===0||V._status===-1)&&(V._status=1,V._result=pe)},function(pe){(V._status===0||V._status===-1)&&(V._status=2,V._result=pe)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var Fe={current:null},ie={transition:null},ge={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ie,ReactCurrentOwner:re};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Lt,forEach:function(V,G,pe){Lt(V,function(){G.apply(this,arguments)},pe)},count:function(V){var G=0;return Lt(V,function(){G++}),G},toArray:function(V){return Lt(V,function(G){return G})||[]},only:function(V){if(!x(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ae.Component=P,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=K,Ae.StrictMode=i,Ae.Suspense=f,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Ae.act=ae,Ae.cloneElement=function(V,G,pe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Se=N({},V.props),Re=V.key,Ne=V.ref,Ve=V._owner;if(G!=null){if(G.ref!==void 0&&(Ne=G.ref,Ve=re.current),G.key!==void 0&&(Re=""+G.key),V.type&&V.type.defaultProps)var Me=V.type.defaultProps;for(Be in G)se.call(G,Be)&&!D.hasOwnProperty(Be)&&(Se[Be]=G[Be]===void 0&&Me!==void 0?Me[Be]:G[Be])}var Be=arguments.length-2;if(Be===1)Se.children=pe;else if(1<Be){Me=Array(Be);for(var wt=0;wt<Be;wt++)Me[wt]=arguments[wt+2];Se.children=Me}return{$$typeof:n,type:V.type,key:Re,ref:Ne,props:Se,_owner:Ve}},Ae.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},Ae.createElement=S,Ae.createFactory=function(V){var G=S.bind(null,V);return G.type=V,G},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(V){return{$$typeof:d,render:V}},Ae.isValidElement=x,Ae.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:Vt}},Ae.memo=function(V,G){return{$$typeof:g,type:V,compare:G===void 0?null:G}},Ae.startTransition=function(V){var G=ie.transition;ie.transition={};try{V()}finally{ie.transition=G}},Ae.unstable_act=ae,Ae.useCallback=function(V,G){return Fe.current.useCallback(V,G)},Ae.useContext=function(V){return Fe.current.useContext(V)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(V){return Fe.current.useDeferredValue(V)},Ae.useEffect=function(V,G){return Fe.current.useEffect(V,G)},Ae.useId=function(){return Fe.current.useId()},Ae.useImperativeHandle=function(V,G,pe){return Fe.current.useImperativeHandle(V,G,pe)},Ae.useInsertionEffect=function(V,G){return Fe.current.useInsertionEffect(V,G)},Ae.useLayoutEffect=function(V,G){return Fe.current.useLayoutEffect(V,G)},Ae.useMemo=function(V,G){return Fe.current.useMemo(V,G)},Ae.useReducer=function(V,G,pe){return Fe.current.useReducer(V,G,pe)},Ae.useRef=function(V){return Fe.current.useRef(V)},Ae.useState=function(V){return Fe.current.useState(V)},Ae.useSyncExternalStore=function(V,G,pe){return Fe.current.useSyncExternalStore(V,G,pe)},Ae.useTransition=function(){return Fe.current.useTransition()},Ae.version="18.3.1",Ae}var Wy;function th(){return Wy||(Wy=1,uf.exports=RI()),uf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy;function AI(){if(Hy)return Ga;Hy=1;var n=th(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,g){var v,E={},T=null,C=null;g!==void 0&&(T=""+g),f.key!==void 0&&(T=""+f.key),f.ref!==void 0&&(C=f.ref);for(v in f)i.call(f,v)&&!a.hasOwnProperty(v)&&(E[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)E[v]===void 0&&(E[v]=f[v]);return{$$typeof:e,type:d,key:T,ref:C,props:E,_owner:o.current}}return Ga.Fragment=t,Ga.jsx=c,Ga.jsxs=c,Ga}var qy;function CI(){return qy||(qy=1,lf.exports=AI()),lf.exports}var Kn=CI(),uc={},cf={exports:{}},sn={},hf={exports:{}},df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky;function PI(){return Ky||(Ky=1,function(n){function e(ie,ge){var ae=ie.length;ie.push(ge);e:for(;0<ae;){var V=ae-1>>>1,G=ie[V];if(0<o(G,ge))ie[V]=ge,ie[ae]=G,ae=V;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var ge=ie[0],ae=ie.pop();if(ae!==ge){ie[0]=ae;e:for(var V=0,G=ie.length,pe=G>>>1;V<pe;){var Se=2*(V+1)-1,Re=ie[Se],Ne=Se+1,Ve=ie[Ne];if(0>o(Re,ae))Ne<G&&0>o(Ve,Re)?(ie[V]=Ve,ie[Ne]=ae,V=Ne):(ie[V]=Re,ie[Se]=ae,V=Se);else if(Ne<G&&0>o(Ve,ae))ie[V]=Ve,ie[Ne]=ae,V=Ne;else break e}}return ge}function o(ie,ge){var ae=ie.sortIndex-ge.sortIndex;return ae!==0?ae:ie.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var f=[],g=[],v=1,E=null,T=3,C=!1,N=!1,M=!1,P=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(ie){for(var ge=t(g);ge!==null;){if(ge.callback===null)i(g);else if(ge.startTime<=ie)i(g),ge.sortIndex=ge.expirationTime,e(f,ge);else break;ge=t(g)}}function Y(ie){if(M=!1,q(ie),!N)if(t(f)!==null)N=!0,Vt(se);else{var ge=t(g);ge!==null&&Fe(Y,ge.startTime-ie)}}function se(ie,ge){N=!1,M&&(M=!1,z(S),S=-1),C=!0;var ae=T;try{for(q(ge),E=t(f);E!==null&&(!(E.expirationTime>ge)||ie&&!L());){var V=E.callback;if(typeof V=="function"){E.callback=null,T=E.priorityLevel;var G=V(E.expirationTime<=ge);ge=n.unstable_now(),typeof G=="function"?E.callback=G:E===t(f)&&i(f),q(ge)}else i(f);E=t(f)}if(E!==null)var pe=!0;else{var Se=t(g);Se!==null&&Fe(Y,Se.startTime-ge),pe=!1}return pe}finally{E=null,T=ae,C=!1}}var re=!1,D=null,S=-1,A=5,x=-1;function L(){return!(n.unstable_now()-x<A)}function U(){if(D!==null){var ie=n.unstable_now();x=ie;var ge=!0;try{ge=D(!0,ie)}finally{ge?k():(re=!1,D=null)}}else re=!1}var k;if(typeof K=="function")k=function(){K(U)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Lt=it.port2;it.port1.onmessage=U,k=function(){Lt.postMessage(null)}}else k=function(){P(U,0)};function Vt(ie){D=ie,re||(re=!0,k())}function Fe(ie,ge){S=P(function(){ie(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){N||C||(N=!0,Vt(se))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return T},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(ie){switch(T){case 1:case 2:case 3:var ge=3;break;default:ge=T}var ae=T;T=ge;try{return ie()}finally{T=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ge){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ae=T;T=ie;try{return ge()}finally{T=ae}},n.unstable_scheduleCallback=function(ie,ge,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,ie){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ae+G,ie={id:v++,callback:ge,priorityLevel:ie,startTime:ae,expirationTime:G,sortIndex:-1},ae>V?(ie.sortIndex=ae,e(g,ie),t(f)===null&&ie===t(g)&&(M?(z(S),S=-1):M=!0,Fe(Y,ae-V))):(ie.sortIndex=G,e(f,ie),N||C||(N=!0,Vt(se))),ie},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(ie){var ge=T;return function(){var ae=T;T=ge;try{return ie.apply(this,arguments)}finally{T=ae}}}}(df)),df}var Gy;function kI(){return Gy||(Gy=1,hf.exports=PI()),hf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qy;function NI(){if(Qy)return sn;Qy=1;var n=th(),e=kI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function T(r){return f.call(E,r)?!0:f.call(v,r)?!1:g.test(r)?E[r]=!0:(v[r]=!0,!1)}function C(r,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function N(r,s,l,h){if(s===null||typeof s>"u"||C(r,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(r,s,l,h,p,y,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=y,this.removeEmptyString=w}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){P[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];P[s]=new M(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){P[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){P[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){P[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){P[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){P[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){P[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){P[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function K(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(z,K);P[s]=new M(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(z,K);P[s]=new M(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(z,K);P[s]=new M(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){P[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),P.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){P[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function q(r,s,l,h){var p=P.hasOwnProperty(s)?P[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(N(s,l,p,h)&&(l=null),h||p===null?T(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):p.mustUseProperty?r[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?r.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?r.setAttributeNS(h,s,l):r.setAttribute(s,l))))}var Y=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,se=Symbol.for("react.element"),re=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),Lt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ge(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,V;function G(r){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var pe=!1;function Se(r,s){if(!r||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch($){var h=$}Reflect.construct(r,[],s)}else{try{s.call()}catch($){h=$}r.call(s.prototype)}else{try{throw Error()}catch($){h=$}r()}}catch($){if($&&h&&typeof $.stack=="string"){for(var p=$.stack.split(`
`),y=h.stack.split(`
`),w=p.length-1,R=y.length-1;1<=w&&0<=R&&p[w]!==y[R];)R--;for(;1<=w&&0<=R;w--,R--)if(p[w]!==y[R]){if(w!==1||R!==1)do if(w--,R--,0>R||p[w]!==y[R]){var b=`
`+p[w].replace(" at new "," at ");return r.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",r.displayName)),b}while(1<=w&&0<=R);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?G(r):""}function Re(r){switch(r.tag){case 5:return G(r.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return r=Se(r.type,!1),r;case 11:return r=Se(r.type.render,!1),r;case 1:return r=Se(r.type,!0),r;default:return""}}function Ne(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case re:return"Portal";case A:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case it:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case L:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case U:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Lt:return s=r.displayName||null,s!==null?s:Ne(r.type)||"Memo";case Vt:s=r._payload,r=r._init;try{return Ne(r(s))}catch{}}return null}function Ve(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Me(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Be(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function wt(r){var s=Be(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){h=""+w,y.call(this,w)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Er(r){r._valueTracker||(r._valueTracker=wt(r))}function Fs(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return r&&(h=Be(r)?r.checked?"true":"false":r.value),r=h,r!==l?(s.setValue(r),!0):!1}function ei(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ki(r,s){var l=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function js(r,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Me(s.value!=null?s.value:l),r._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ea(r,s){s=s.checked,s!=null&&q(r,"checked",s,!1)}function ta(r,s){ea(r,s);var l=Me(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?zs(r,s.type,l):s.hasOwnProperty("defaultValue")&&zs(r,s.type,Me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Gl(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function zs(r,s,l){(s!=="number"||ei(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var Tr=Array.isArray;function Ir(r,s,l,h){if(r=r.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<r.length;l++)p=s.hasOwnProperty("$"+r[l].value),r[l].selected!==p&&(r[l].selected=p),p&&h&&(r[l].defaultSelected=!0)}else{for(l=""+Me(l),s=null,p=0;p<r.length;p++){if(r[p].value===l){r[p].selected=!0,h&&(r[p].defaultSelected=!0);return}s!==null||r[p].disabled||(s=r[p])}s!==null&&(s.selected=!0)}}function na(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Bs(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Tr(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:Me(l)}}function $s(r,s){var l=Me(s.value),h=Me(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),h!=null&&(r.defaultValue=""+h)}function ra(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ft(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ft(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Sr,ia=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return r(s,l,h,p)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Sr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ti(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qi=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(r){Qi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Gi[s]=Gi[r]})});function sa(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Gi.hasOwnProperty(r)&&Gi[r]?(""+s).trim():s+"px"}function oa(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=sa(l,s[l],h);l==="float"&&(l="cssFloat"),h?r.setProperty(l,p):r[l]=p}}var aa=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(r,s){if(s){if(aa[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ua(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=null;function Ws(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Hs=null,wn=null,er=null;function qs(r){if(r=xa(r)){if(typeof Hs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Su(s),Hs(r.stateNode,r.type,s))}}function tr(r){wn?er?er.push(r):er=[r]:wn=r}function ca(){if(wn){var r=wn,s=er;if(er=wn=null,qs(r),s)for(r=0;r<s.length;r++)qs(s[r])}}function Xi(r,s){return r(s)}function ha(){}var Rr=!1;function da(r,s,l){if(Rr)return r(s,l);Rr=!0;try{return Xi(r,s,l)}finally{Rr=!1,(wn!==null||er!==null)&&(ha(),ca())}}function st(r,s){var l=r.stateNode;if(l===null)return null;var h=Su(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ks=!1;if(d)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Dn,Dn),window.removeEventListener("test",Dn,Dn)}catch{Ks=!1}function Ji(r,s,l,h,p,y,w,R,b){var $=Array.prototype.slice.call(arguments,3);try{s.apply(l,$)}catch(J){this.onError(J)}}var Zi=!1,Gs=null,bn=!1,fa=null,Oh={onError:function(r){Zi=!0,Gs=r}};function Qs(r,s,l,h,p,y,w,R,b){Zi=!1,Gs=null,Ji.apply(Oh,arguments)}function Ql(r,s,l,h,p,y,w,R,b){if(Qs.apply(this,arguments),Zi){if(Zi){var $=Gs;Zi=!1,Gs=null}else throw Error(t(198));bn||(bn=!0,fa=$)}}function xn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function es(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function On(r){if(xn(r)!==r)throw Error(t(188))}function Yl(r){var s=r.alternate;if(!s){if(s=xn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,h=s;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return On(p),r;if(y===h)return On(p),s;y=y.sibling}throw Error(t(188))}if(l.return!==h.return)l=p,h=y;else{for(var w=!1,R=p.child;R;){if(R===l){w=!0,l=p,h=y;break}if(R===h){w=!0,h=p,l=y;break}R=R.sibling}if(!w){for(R=y.child;R;){if(R===l){w=!0,l=y,h=p;break}if(R===h){w=!0,h=y,l=p;break}R=R.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function pa(r){return r=Yl(r),r!==null?Ys(r):null}function Ys(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ys(r);if(s!==null)return s;r=r.sibling}return null}var Xs=e.unstable_scheduleCallback,ma=e.unstable_cancelCallback,Xl=e.unstable_shouldYield,Lh=e.unstable_requestPaint,$e=e.unstable_now,Jl=e.unstable_getCurrentPriorityLevel,ts=e.unstable_ImmediatePriority,ni=e.unstable_UserBlockingPriority,En=e.unstable_NormalPriority,ga=e.unstable_LowPriority,Zl=e.unstable_IdlePriority,ns=null,ln=null;function eu(r){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(ns,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:nu,ya=Math.log,tu=Math.LN2;function nu(r){return r>>>=0,r===0?32:31-(ya(r)/tu|0)|0}var Js=64,Zs=4194304;function ri(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function rs(r,s){var l=r.pendingLanes;if(l===0)return 0;var h=0,p=r.suspendedLanes,y=r.pingedLanes,w=l&268435455;if(w!==0){var R=w&~p;R!==0?h=ri(R):(y&=w,y!==0&&(h=ri(y)))}else w=l&~p,w!==0?h=ri(w):y!==0&&(h=ri(y));if(h===0)return 0;if(s!==0&&s!==h&&!(s&p)&&(p=h&-h,y=s&-s,p>=y||p===16&&(y&4194240)!==0))return s;if(h&4&&(h|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)l=31-Ht(s),p=1<<l,h|=r[l],s&=~p;return h}function Vh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(r,s){for(var l=r.suspendedLanes,h=r.pingedLanes,p=r.expirationTimes,y=r.pendingLanes;0<y;){var w=31-Ht(y),R=1<<w,b=p[w];b===-1?(!(R&l)||R&h)&&(p[w]=Vh(R,s)):b<=s&&(r.expiredLanes|=R),y&=~R}}function un(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function is(){var r=Js;return Js<<=1,!(Js&4194240)&&(Js=64),r}function ii(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function si(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ht(s),r[s]=l}function je(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<l;){var p=31-Ht(l),y=1<<p;s[p]=0,h[p]=-1,r[p]=-1,l&=~y}}function oi(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var h=31-Ht(l),p=1<<h;p&s|r[h]&s&&(r[h]|=s),l&=~p}}var Pe=0;function ai(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var ru,eo,iu,su,ou,_a=!1,nr=[],At=null,Ln=null,Vn=null,li=new Map,Tn=new Map,rr=[],Mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function au(r,s){switch(r){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":li.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(s.pointerId)}}function Xt(r,s,l,h,p,y){return r===null||r.nativeEvent!==y?(r={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:y,targetContainers:[p]},s!==null&&(s=xa(s),s!==null&&eo(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),r)}function Uh(r,s,l,h,p){switch(s){case"focusin":return At=Xt(At,r,s,l,h,p),!0;case"dragenter":return Ln=Xt(Ln,r,s,l,h,p),!0;case"mouseover":return Vn=Xt(Vn,r,s,l,h,p),!0;case"pointerover":var y=p.pointerId;return li.set(y,Xt(li.get(y)||null,r,s,l,h,p)),!0;case"gotpointercapture":return y=p.pointerId,Tn.set(y,Xt(Tn.get(y)||null,r,s,l,h,p)),!0}return!1}function lu(r){var s=us(r.target);if(s!==null){var l=xn(s);if(l!==null){if(s=l.tag,s===13){if(s=es(l),s!==null){r.blockedOn=s,ou(r.priority,function(){iu(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ir(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=to(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var h=new l.constructor(l.type,l);Yi=h,l.target.dispatchEvent(h),Yi=null}else return s=xa(l),s!==null&&eo(s),r.blockedOn=l,!1;s.shift()}return!0}function ss(r,s,l){ir(r)&&l.delete(s)}function uu(){_a=!1,At!==null&&ir(At)&&(At=null),Ln!==null&&ir(Ln)&&(Ln=null),Vn!==null&&ir(Vn)&&(Vn=null),li.forEach(ss),Tn.forEach(ss)}function Mn(r,s){r.blockedOn===s&&(r.blockedOn=null,_a||(_a=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,uu)))}function Un(r){function s(p){return Mn(p,r)}if(0<nr.length){Mn(nr[0],r);for(var l=1;l<nr.length;l++){var h=nr[l];h.blockedOn===r&&(h.blockedOn=null)}}for(At!==null&&Mn(At,r),Ln!==null&&Mn(Ln,r),Vn!==null&&Mn(Vn,r),li.forEach(s),Tn.forEach(s),l=0;l<rr.length;l++)h=rr[l],h.blockedOn===r&&(h.blockedOn=null);for(;0<rr.length&&(l=rr[0],l.blockedOn===null);)lu(l),l.blockedOn===null&&rr.shift()}var Cr=Y.ReactCurrentBatchConfig,ui=!0;function Ge(r,s,l,h){var p=Pe,y=Cr.transition;Cr.transition=null;try{Pe=1,va(r,s,l,h)}finally{Pe=p,Cr.transition=y}}function Fh(r,s,l,h){var p=Pe,y=Cr.transition;Cr.transition=null;try{Pe=4,va(r,s,l,h)}finally{Pe=p,Cr.transition=y}}function va(r,s,l,h){if(ui){var p=to(r,s,l,h);if(p===null)Yh(r,s,h,os,l),au(r,h);else if(Uh(p,r,s,l,h))h.stopPropagation();else if(au(r,h),s&4&&-1<Mh.indexOf(r)){for(;p!==null;){var y=xa(p);if(y!==null&&ru(y),y=to(r,s,l,h),y===null&&Yh(r,s,h,os,l),y===p)break;p=y}p!==null&&h.stopPropagation()}else Yh(r,s,h,null,l)}}var os=null;function to(r,s,l,h){if(os=null,r=Ws(h),r=us(r),r!==null)if(s=xn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=es(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return os=r,null}function wa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jl()){case ts:return 1;case ni:return 4;case En:case ga:return 16;case Zl:return 536870912;default:return 16}default:return 16}}var cn=null,no=null,Jt=null;function Ea(){if(Jt)return Jt;var r,s=no,l=s.length,h,p="value"in cn?cn.value:cn.textContent,y=p.length;for(r=0;r<l&&s[r]===p[r];r++);var w=l-r;for(h=1;h<=w&&s[l-h]===p[y-h];h++);return Jt=p.slice(r,1<h?1-h:void 0)}function ro(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function sr(){return!0}function Ta(){return!1}function Ct(r){function s(l,h,p,y,w){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=y,this.target=w,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(l=r[R],this[R]=l?l(y):y[R]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?sr:Ta,this.isPropagationStopped=Ta,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),s}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=Ct(Fn),or=ae({},Fn,{view:0,detail:0}),jh=Ct(or),so,Pr,ci,as=ae({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ci&&(ci&&r.type==="mousemove"?(so=r.screenX-ci.screenX,Pr=r.screenY-ci.screenY):Pr=so=0,ci=r),so)},movementY:function(r){return"movementY"in r?r.movementY:Pr}}),oo=Ct(as),Ia=ae({},as,{dataTransfer:0}),cu=Ct(Ia),ao=ae({},or,{relatedTarget:0}),lo=Ct(ao),hu=ae({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),kr=Ct(hu),du=ae({},Fn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),fu=Ct(du),pu=ae({},Fn,{data:0}),Sa=Ct(pu),uo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=mu[r])?!!s[r]:!1}function ar(){return gu}var u=ae({},or,{key:function(r){if(r.key){var s=uo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=ro(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(r){return r.type==="keypress"?ro(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ro(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Ct(u),_=ae({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Ct(_),F=ae({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),H=Ct(F),ne=ae({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Ct(ne),mt=ae({},as,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),De=Ct(mt),Et=[9,13,27,32],ut=d&&"CompositionEvent"in window,In=null;d&&"documentMode"in document&&(In=document.documentMode);var hn=d&&"TextEvent"in window&&!In,ls=d&&(!ut||In&&8<In&&11>=In),co=" ",Mm=!1;function Um(r,s){switch(r){case"keyup":return Et.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ho=!1;function vT(r,s){switch(r){case"compositionend":return Fm(s);case"keypress":return s.which!==32?null:(Mm=!0,co);case"textInput":return r=s.data,r===co&&Mm?null:r;default:return null}}function wT(r,s){if(ho)return r==="compositionend"||!ut&&Um(r,s)?(r=Ea(),Jt=no=cn=null,ho=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ls&&s.locale!=="ko"?null:s.data;default:return null}}var ET={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!ET[r.type]:s==="textarea"}function zm(r,s,l,h){tr(h),s=Eu(s,"onChange"),0<s.length&&(l=new io("onChange","change",null,l,h),r.push({event:l,listeners:s}))}var Ra=null,Aa=null;function TT(r){sg(r,0)}function yu(r){var s=yo(r);if(Fs(s))return r}function IT(r,s){if(r==="change")return s}var Bm=!1;if(d){var zh;if(d){var Bh="oninput"in document;if(!Bh){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),Bh=typeof $m.oninput=="function"}zh=Bh}else zh=!1;Bm=zh&&(!document.documentMode||9<document.documentMode)}function Wm(){Ra&&(Ra.detachEvent("onpropertychange",Hm),Aa=Ra=null)}function Hm(r){if(r.propertyName==="value"&&yu(Aa)){var s=[];zm(s,Aa,r,Ws(r)),da(TT,s)}}function ST(r,s,l){r==="focusin"?(Wm(),Ra=s,Aa=l,Ra.attachEvent("onpropertychange",Hm)):r==="focusout"&&Wm()}function RT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return yu(Aa)}function AT(r,s){if(r==="click")return yu(s)}function CT(r,s){if(r==="input"||r==="change")return yu(s)}function PT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var jn=typeof Object.is=="function"?Object.is:PT;function Ca(r,s){if(jn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!jn(r[p],s[p]))return!1}return!0}function qm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Km(r,s){var l=qm(r);r=0;for(var h;l;){if(l.nodeType===3){if(h=r+l.textContent.length,r<=s&&h>=s)return{node:l,offset:s-r};r=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qm(l)}}function Gm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Gm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Qm(){for(var r=window,s=ei();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=ei(r.document)}return s}function $h(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function kT(r){var s=Qm(),l=r.focusedElem,h=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&Gm(l.ownerDocument.documentElement,l)){if(h!==null&&$h(l)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var p=l.textContent.length,y=Math.min(h.start,p);h=h.end===void 0?y:Math.min(h.end,p),!r.extend&&y>h&&(p=h,h=y,y=p),p=Km(l,y);var w=Km(l,h);p&&w&&(r.rangeCount!==1||r.anchorNode!==p.node||r.anchorOffset!==p.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),r.removeAllRanges(),y>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var NT=d&&"documentMode"in document&&11>=document.documentMode,fo=null,Wh=null,Pa=null,Hh=!1;function Ym(r,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Hh||fo==null||fo!==ei(h)||(h=fo,"selectionStart"in h&&$h(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Pa&&Ca(Pa,h)||(Pa=h,h=Eu(Wh,"onSelect"),0<h.length&&(s=new io("onSelect","select",null,s,l),r.push({event:s,listeners:h}),s.target=fo)))}function _u(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var po={animationend:_u("Animation","AnimationEnd"),animationiteration:_u("Animation","AnimationIteration"),animationstart:_u("Animation","AnimationStart"),transitionend:_u("Transition","TransitionEnd")},qh={},Xm={};d&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function vu(r){if(qh[r])return qh[r];if(!po[r])return r;var s=po[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Xm)return qh[r]=s[l];return r}var Jm=vu("animationend"),Zm=vu("animationiteration"),eg=vu("animationstart"),tg=vu("transitionend"),ng=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hi(r,s){ng.set(r,s),a(s,[r])}for(var Kh=0;Kh<rg.length;Kh++){var Gh=rg[Kh],DT=Gh.toLowerCase(),bT=Gh[0].toUpperCase()+Gh.slice(1);hi(DT,"on"+bT)}hi(Jm,"onAnimationEnd"),hi(Zm,"onAnimationIteration"),hi(eg,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(tg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function ig(r,s,l){var h=r.type||"unknown-event";r.currentTarget=l,Ql(h,s,void 0,r),r.currentTarget=null}function sg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var h=r[l],p=h.event;h=h.listeners;e:{var y=void 0;if(s)for(var w=h.length-1;0<=w;w--){var R=h[w],b=R.instance,$=R.currentTarget;if(R=R.listener,b!==y&&p.isPropagationStopped())break e;ig(p,R,$),y=b}else for(w=0;w<h.length;w++){if(R=h[w],b=R.instance,$=R.currentTarget,R=R.listener,b!==y&&p.isPropagationStopped())break e;ig(p,R,$),y=b}}}if(bn)throw r=fa,bn=!1,fa=null,r}function He(r,s){var l=s[nd];l===void 0&&(l=s[nd]=new Set);var h=r+"__bubble";l.has(h)||(og(s,r,2,!1),l.add(h))}function Qh(r,s,l){var h=0;s&&(h|=4),og(l,r,h,s)}var wu="_reactListening"+Math.random().toString(36).slice(2);function Na(r){if(!r[wu]){r[wu]=!0,i.forEach(function(l){l!=="selectionchange"&&(xT.has(l)||Qh(l,!1,r),Qh(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[wu]||(s[wu]=!0,Qh("selectionchange",!1,s))}}function og(r,s,l,h){switch(wa(s)){case 1:var p=Ge;break;case 4:p=Fh;break;default:p=va}l=p.bind(null,s,l,r),p=void 0,!Ks||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?r.addEventListener(s,l,{capture:!0,passive:p}):r.addEventListener(s,l,!0):p!==void 0?r.addEventListener(s,l,{passive:p}):r.addEventListener(s,l,!1)}function Yh(r,s,l,h,p){var y=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===p||R.nodeType===8&&R.parentNode===p)break;if(w===4)for(w=h.return;w!==null;){var b=w.tag;if((b===3||b===4)&&(b=w.stateNode.containerInfo,b===p||b.nodeType===8&&b.parentNode===p))return;w=w.return}for(;R!==null;){if(w=us(R),w===null)return;if(b=w.tag,b===5||b===6){h=y=w;continue e}R=R.parentNode}}h=h.return}da(function(){var $=y,J=Ws(l),ee=[];e:{var X=ng.get(r);if(X!==void 0){var oe=io,ce=r;switch(r){case"keypress":if(ro(l)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":ce="focus",oe=lo;break;case"focusout":ce="blur",oe=lo;break;case"beforeblur":case"afterblur":oe=lo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=H;break;case Jm:case Zm:case eg:oe=kr;break;case tg:oe=Ue;break;case"scroll":oe=jh;break;case"wheel":oe=De;break;case"copy":case"cut":case"paste":oe=fu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=I}var he=(s&4)!==0,ot=!he&&r==="scroll",j=he?X!==null?X+"Capture":null:X;he=[];for(var O=$,B;O!==null;){B=O;var te=B.stateNode;if(B.tag===5&&te!==null&&(B=te,j!==null&&(te=st(O,j),te!=null&&he.push(Da(O,te,B)))),ot)break;O=O.return}0<he.length&&(X=new oe(X,ce,null,l,J),ee.push({event:X,listeners:he}))}}if(!(s&7)){e:{if(X=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",X&&l!==Yi&&(ce=l.relatedTarget||l.fromElement)&&(us(ce)||ce[Nr]))break e;if((oe||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,oe?(ce=l.relatedTarget||l.toElement,oe=$,ce=ce?us(ce):null,ce!==null&&(ot=xn(ce),ce!==ot||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(oe=null,ce=$),oe!==ce)){if(he=oo,te="onMouseLeave",j="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(he=I,te="onPointerLeave",j="onPointerEnter",O="pointer"),ot=oe==null?X:yo(oe),B=ce==null?X:yo(ce),X=new he(te,O+"leave",oe,l,J),X.target=ot,X.relatedTarget=B,te=null,us(J)===$&&(he=new he(j,O+"enter",ce,l,J),he.target=B,he.relatedTarget=ot,te=he),ot=te,oe&&ce)t:{for(he=oe,j=ce,O=0,B=he;B;B=mo(B))O++;for(B=0,te=j;te;te=mo(te))B++;for(;0<O-B;)he=mo(he),O--;for(;0<B-O;)j=mo(j),B--;for(;O--;){if(he===j||j!==null&&he===j.alternate)break t;he=mo(he),j=mo(j)}he=null}else he=null;oe!==null&&ag(ee,X,oe,he,!1),ce!==null&&ot!==null&&ag(ee,ot,ce,he,!0)}}e:{if(X=$?yo($):window,oe=X.nodeName&&X.nodeName.toLowerCase(),oe==="select"||oe==="input"&&X.type==="file")var fe=IT;else if(jm(X))if(Bm)fe=CT;else{fe=RT;var ye=ST}else(oe=X.nodeName)&&oe.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(fe=AT);if(fe&&(fe=fe(r,$))){zm(ee,fe,l,J);break e}ye&&ye(r,X,$),r==="focusout"&&(ye=X._wrapperState)&&ye.controlled&&X.type==="number"&&zs(X,"number",X.value)}switch(ye=$?yo($):window,r){case"focusin":(jm(ye)||ye.contentEditable==="true")&&(fo=ye,Wh=$,Pa=null);break;case"focusout":Pa=Wh=fo=null;break;case"mousedown":Hh=!0;break;case"contextmenu":case"mouseup":case"dragend":Hh=!1,Ym(ee,l,J);break;case"selectionchange":if(NT)break;case"keydown":case"keyup":Ym(ee,l,J)}var _e;if(ut)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else ho?Um(r,l)&&(we="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(we="onCompositionStart");we&&(ls&&l.locale!=="ko"&&(ho||we!=="onCompositionStart"?we==="onCompositionEnd"&&ho&&(_e=Ea()):(cn=J,no="value"in cn?cn.value:cn.textContent,ho=!0)),ye=Eu($,we),0<ye.length&&(we=new Sa(we,r,null,l,J),ee.push({event:we,listeners:ye}),_e?we.data=_e:(_e=Fm(l),_e!==null&&(we.data=_e)))),(_e=hn?vT(r,l):wT(r,l))&&($=Eu($,"onBeforeInput"),0<$.length&&(J=new Sa("onBeforeInput","beforeinput",null,l,J),ee.push({event:J,listeners:$}),J.data=_e))}sg(ee,s)})}function Da(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Eu(r,s){for(var l=s+"Capture",h=[];r!==null;){var p=r,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=st(r,l),y!=null&&h.unshift(Da(r,y,p)),y=st(r,s),y!=null&&h.push(Da(r,y,p))),r=r.return}return h}function mo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function ag(r,s,l,h,p){for(var y=s._reactName,w=[];l!==null&&l!==h;){var R=l,b=R.alternate,$=R.stateNode;if(b!==null&&b===h)break;R.tag===5&&$!==null&&(R=$,p?(b=st(l,y),b!=null&&w.unshift(Da(l,b,R))):p||(b=st(l,y),b!=null&&w.push(Da(l,b,R)))),l=l.return}w.length!==0&&r.push({event:s,listeners:w})}var OT=/\r\n?/g,LT=/\u0000|\uFFFD/g;function lg(r){return(typeof r=="string"?r:""+r).replace(OT,`
`).replace(LT,"")}function Tu(r,s,l){if(s=lg(s),lg(r)!==s&&l)throw Error(t(425))}function Iu(){}var Xh=null,Jh=null;function Zh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,VT=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,MT=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(r){return ug.resolve(null).then(r).catch(UT)}:ed;function UT(r){setTimeout(function(){throw r})}function td(r,s){var l=s,h=0;do{var p=l.nextSibling;if(r.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){r.removeChild(p),Un(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);Un(s)}function di(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function cg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var go=Math.random().toString(36).slice(2),lr="__reactFiber$"+go,ba="__reactProps$"+go,Nr="__reactContainer$"+go,nd="__reactEvents$"+go,FT="__reactListeners$"+go,jT="__reactHandles$"+go;function us(r){var s=r[lr];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Nr]||l[lr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=cg(r);r!==null;){if(l=r[lr])return l;r=cg(r)}return s}r=l,l=r.parentNode}return null}function xa(r){return r=r[lr]||r[Nr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function yo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Su(r){return r[ba]||null}var rd=[],_o=-1;function fi(r){return{current:r}}function qe(r){0>_o||(r.current=rd[_o],rd[_o]=null,_o--)}function We(r,s){_o++,rd[_o]=r.current,r.current=s}var pi={},Mt=fi(pi),Zt=fi(!1),cs=pi;function vo(r,s){var l=r.type.contextTypes;if(!l)return pi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=s[y];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=p),p}function en(r){return r=r.childContextTypes,r!=null}function Ru(){qe(Zt),qe(Mt)}function hg(r,s,l){if(Mt.current!==pi)throw Error(t(168));We(Mt,s),We(Zt,l)}function dg(r,s,l){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(t(108,Ve(r)||"Unknown",p));return ae({},l,h)}function Au(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||pi,cs=Mt.current,We(Mt,r),We(Zt,Zt.current),!0}function fg(r,s,l){var h=r.stateNode;if(!h)throw Error(t(169));l?(r=dg(r,s,cs),h.__reactInternalMemoizedMergedChildContext=r,qe(Zt),qe(Mt),We(Mt,r)):qe(Zt),We(Zt,l)}var Dr=null,Cu=!1,id=!1;function pg(r){Dr===null?Dr=[r]:Dr.push(r)}function zT(r){Cu=!0,pg(r)}function mi(){if(!id&&Dr!==null){id=!0;var r=0,s=Pe;try{var l=Dr;for(Pe=1;r<l.length;r++){var h=l[r];do h=h(!0);while(h!==null)}Dr=null,Cu=!1}catch(p){throw Dr!==null&&(Dr=Dr.slice(r+1)),Xs(ts,mi),p}finally{Pe=s,id=!1}}return null}var wo=[],Eo=0,Pu=null,ku=0,Sn=[],Rn=0,hs=null,br=1,xr="";function ds(r,s){wo[Eo++]=ku,wo[Eo++]=Pu,Pu=r,ku=s}function mg(r,s,l){Sn[Rn++]=br,Sn[Rn++]=xr,Sn[Rn++]=hs,hs=r;var h=br;r=xr;var p=32-Ht(h)-1;h&=~(1<<p),l+=1;var y=32-Ht(s)+p;if(30<y){var w=p-p%5;y=(h&(1<<w)-1).toString(32),h>>=w,p-=w,br=1<<32-Ht(s)+p|l<<p|h,xr=y+r}else br=1<<y|l<<p|h,xr=r}function sd(r){r.return!==null&&(ds(r,1),mg(r,1,0))}function od(r){for(;r===Pu;)Pu=wo[--Eo],wo[Eo]=null,ku=wo[--Eo],wo[Eo]=null;for(;r===hs;)hs=Sn[--Rn],Sn[Rn]=null,xr=Sn[--Rn],Sn[Rn]=null,br=Sn[--Rn],Sn[Rn]=null}var dn=null,fn=null,Qe=!1,zn=null;function gg(r,s){var l=kn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function yg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,dn=r,fn=di(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,dn=r,fn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=hs!==null?{id:br,overflow:xr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=kn(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,dn=r,fn=null,!0):!1;default:return!1}}function ad(r){return(r.mode&1)!==0&&(r.flags&128)===0}function ld(r){if(Qe){var s=fn;if(s){var l=s;if(!yg(r,s)){if(ad(r))throw Error(t(418));s=di(l.nextSibling);var h=dn;s&&yg(r,s)?gg(h,l):(r.flags=r.flags&-4097|2,Qe=!1,dn=r)}}else{if(ad(r))throw Error(t(418));r.flags=r.flags&-4097|2,Qe=!1,dn=r}}}function _g(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;dn=r}function Nu(r){if(r!==dn)return!1;if(!Qe)return _g(r),Qe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Zh(r.type,r.memoizedProps)),s&&(s=fn)){if(ad(r))throw vg(),Error(t(418));for(;s;)gg(r,s),s=di(s.nextSibling)}if(_g(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){fn=di(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}fn=null}}else fn=dn?di(r.stateNode.nextSibling):null;return!0}function vg(){for(var r=fn;r;)r=di(r.nextSibling)}function To(){fn=dn=null,Qe=!1}function ud(r){zn===null?zn=[r]:zn.push(r)}var BT=Y.ReactCurrentBatchConfig;function Oa(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,r));var p=h,y=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(w){var R=p.refs;w===null?delete R[y]:R[y]=w},s._stringRef=y,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function Du(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function wg(r){var s=r._init;return s(r._payload)}function Eg(r){function s(j,O){if(r){var B=j.deletions;B===null?(j.deletions=[O],j.flags|=16):B.push(O)}}function l(j,O){if(!r)return null;for(;O!==null;)s(j,O),O=O.sibling;return null}function h(j,O){for(j=new Map;O!==null;)O.key!==null?j.set(O.key,O):j.set(O.index,O),O=O.sibling;return j}function p(j,O){return j=Ii(j,O),j.index=0,j.sibling=null,j}function y(j,O,B){return j.index=B,r?(B=j.alternate,B!==null?(B=B.index,B<O?(j.flags|=2,O):B):(j.flags|=2,O)):(j.flags|=1048576,O)}function w(j){return r&&j.alternate===null&&(j.flags|=2),j}function R(j,O,B,te){return O===null||O.tag!==6?(O=ef(B,j.mode,te),O.return=j,O):(O=p(O,B),O.return=j,O)}function b(j,O,B,te){var fe=B.type;return fe===D?J(j,O,B.props.children,te,B.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Vt&&wg(fe)===O.type)?(te=p(O,B.props),te.ref=Oa(j,O,B),te.return=j,te):(te=tc(B.type,B.key,B.props,null,j.mode,te),te.ref=Oa(j,O,B),te.return=j,te)}function $(j,O,B,te){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=tf(B,j.mode,te),O.return=j,O):(O=p(O,B.children||[]),O.return=j,O)}function J(j,O,B,te,fe){return O===null||O.tag!==7?(O=ws(B,j.mode,te,fe),O.return=j,O):(O=p(O,B),O.return=j,O)}function ee(j,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return O=ef(""+O,j.mode,B),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case se:return B=tc(O.type,O.key,O.props,null,j.mode,B),B.ref=Oa(j,null,O),B.return=j,B;case re:return O=tf(O,j.mode,B),O.return=j,O;case Vt:var te=O._init;return ee(j,te(O._payload),B)}if(Tr(O)||ge(O))return O=ws(O,j.mode,B,null),O.return=j,O;Du(j,O)}return null}function X(j,O,B,te){var fe=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return fe!==null?null:R(j,O,""+B,te);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case se:return B.key===fe?b(j,O,B,te):null;case re:return B.key===fe?$(j,O,B,te):null;case Vt:return fe=B._init,X(j,O,fe(B._payload),te)}if(Tr(B)||ge(B))return fe!==null?null:J(j,O,B,te,null);Du(j,B)}return null}function oe(j,O,B,te,fe){if(typeof te=="string"&&te!==""||typeof te=="number")return j=j.get(B)||null,R(O,j,""+te,fe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case se:return j=j.get(te.key===null?B:te.key)||null,b(O,j,te,fe);case re:return j=j.get(te.key===null?B:te.key)||null,$(O,j,te,fe);case Vt:var ye=te._init;return oe(j,O,B,ye(te._payload),fe)}if(Tr(te)||ge(te))return j=j.get(B)||null,J(O,j,te,fe,null);Du(O,te)}return null}function ce(j,O,B,te){for(var fe=null,ye=null,_e=O,we=O=0,St=null;_e!==null&&we<B.length;we++){_e.index>we?(St=_e,_e=null):St=_e.sibling;var Oe=X(j,_e,B[we],te);if(Oe===null){_e===null&&(_e=St);break}r&&_e&&Oe.alternate===null&&s(j,_e),O=y(Oe,O,we),ye===null?fe=Oe:ye.sibling=Oe,ye=Oe,_e=St}if(we===B.length)return l(j,_e),Qe&&ds(j,we),fe;if(_e===null){for(;we<B.length;we++)_e=ee(j,B[we],te),_e!==null&&(O=y(_e,O,we),ye===null?fe=_e:ye.sibling=_e,ye=_e);return Qe&&ds(j,we),fe}for(_e=h(j,_e);we<B.length;we++)St=oe(_e,j,we,B[we],te),St!==null&&(r&&St.alternate!==null&&_e.delete(St.key===null?we:St.key),O=y(St,O,we),ye===null?fe=St:ye.sibling=St,ye=St);return r&&_e.forEach(function(Si){return s(j,Si)}),Qe&&ds(j,we),fe}function he(j,O,B,te){var fe=ge(B);if(typeof fe!="function")throw Error(t(150));if(B=fe.call(B),B==null)throw Error(t(151));for(var ye=fe=null,_e=O,we=O=0,St=null,Oe=B.next();_e!==null&&!Oe.done;we++,Oe=B.next()){_e.index>we?(St=_e,_e=null):St=_e.sibling;var Si=X(j,_e,Oe.value,te);if(Si===null){_e===null&&(_e=St);break}r&&_e&&Si.alternate===null&&s(j,_e),O=y(Si,O,we),ye===null?fe=Si:ye.sibling=Si,ye=Si,_e=St}if(Oe.done)return l(j,_e),Qe&&ds(j,we),fe;if(_e===null){for(;!Oe.done;we++,Oe=B.next())Oe=ee(j,Oe.value,te),Oe!==null&&(O=y(Oe,O,we),ye===null?fe=Oe:ye.sibling=Oe,ye=Oe);return Qe&&ds(j,we),fe}for(_e=h(j,_e);!Oe.done;we++,Oe=B.next())Oe=oe(_e,j,we,Oe.value,te),Oe!==null&&(r&&Oe.alternate!==null&&_e.delete(Oe.key===null?we:Oe.key),O=y(Oe,O,we),ye===null?fe=Oe:ye.sibling=Oe,ye=Oe);return r&&_e.forEach(function(EI){return s(j,EI)}),Qe&&ds(j,we),fe}function ot(j,O,B,te){if(typeof B=="object"&&B!==null&&B.type===D&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case se:e:{for(var fe=B.key,ye=O;ye!==null;){if(ye.key===fe){if(fe=B.type,fe===D){if(ye.tag===7){l(j,ye.sibling),O=p(ye,B.props.children),O.return=j,j=O;break e}}else if(ye.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Vt&&wg(fe)===ye.type){l(j,ye.sibling),O=p(ye,B.props),O.ref=Oa(j,ye,B),O.return=j,j=O;break e}l(j,ye);break}else s(j,ye);ye=ye.sibling}B.type===D?(O=ws(B.props.children,j.mode,te,B.key),O.return=j,j=O):(te=tc(B.type,B.key,B.props,null,j.mode,te),te.ref=Oa(j,O,B),te.return=j,j=te)}return w(j);case re:e:{for(ye=B.key;O!==null;){if(O.key===ye)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){l(j,O.sibling),O=p(O,B.children||[]),O.return=j,j=O;break e}else{l(j,O);break}else s(j,O);O=O.sibling}O=tf(B,j.mode,te),O.return=j,j=O}return w(j);case Vt:return ye=B._init,ot(j,O,ye(B._payload),te)}if(Tr(B))return ce(j,O,B,te);if(ge(B))return he(j,O,B,te);Du(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,O!==null&&O.tag===6?(l(j,O.sibling),O=p(O,B),O.return=j,j=O):(l(j,O),O=ef(B,j.mode,te),O.return=j,j=O),w(j)):l(j,O)}return ot}var Io=Eg(!0),Tg=Eg(!1),bu=fi(null),xu=null,So=null,cd=null;function hd(){cd=So=xu=null}function dd(r){var s=bu.current;qe(bu),r._currentValue=s}function fd(r,s,l){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===l)break;r=r.return}}function Ro(r,s){xu=r,cd=So=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(tn=!0),r.firstContext=null)}function An(r){var s=r._currentValue;if(cd!==r)if(r={context:r,memoizedValue:s,next:null},So===null){if(xu===null)throw Error(t(308));So=r,xu.dependencies={lanes:0,firstContext:r}}else So=So.next=r;return s}var fs=null;function pd(r){fs===null?fs=[r]:fs.push(r)}function Ig(r,s,l,h){var p=s.interleaved;return p===null?(l.next=l,pd(s)):(l.next=p.next,p.next=l),s.interleaved=l,Or(r,h)}function Or(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var gi=!1;function md(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Lr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function yi(r,s,l){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,xe&2){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,Or(r,l)}return p=h.interleaved,p===null?(s.next=s,pd(h)):(s.next=p.next,p.next=s),h.interleaved=s,Or(r,l)}function Ou(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,oi(r,l)}}function Rg(r,s){var l=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=w:y=y.next=w,l=l.next}while(l!==null);y===null?p=y=s:y=y.next=s}else p=y=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:h.shared,effects:h.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Lu(r,s,l,h){var p=r.updateQueue;gi=!1;var y=p.firstBaseUpdate,w=p.lastBaseUpdate,R=p.shared.pending;if(R!==null){p.shared.pending=null;var b=R,$=b.next;b.next=null,w===null?y=$:w.next=$,w=b;var J=r.alternate;J!==null&&(J=J.updateQueue,R=J.lastBaseUpdate,R!==w&&(R===null?J.firstBaseUpdate=$:R.next=$,J.lastBaseUpdate=b))}if(y!==null){var ee=p.baseState;w=0,J=$=b=null,R=y;do{var X=R.lane,oe=R.eventTime;if((h&X)===X){J!==null&&(J=J.next={eventTime:oe,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ce=r,he=R;switch(X=s,oe=l,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){ee=ce.call(oe,ee,X);break e}ee=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,X=typeof ce=="function"?ce.call(oe,ee,X):ce,X==null)break e;ee=ae({},ee,X);break e;case 2:gi=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,X=p.effects,X===null?p.effects=[R]:X.push(R))}else oe={eventTime:oe,lane:X,tag:R.tag,payload:R.payload,callback:R.callback,next:null},J===null?($=J=oe,b=ee):J=J.next=oe,w|=X;if(R=R.next,R===null){if(R=p.shared.pending,R===null)break;X=R,R=X.next,X.next=null,p.lastBaseUpdate=X,p.shared.pending=null}}while(!0);if(J===null&&(b=ee),p.baseState=b,p.firstBaseUpdate=$,p.lastBaseUpdate=J,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else y===null&&(p.shared.lanes=0);gs|=w,r.lanes=w,r.memoizedState=ee}}function Ag(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(t(191,p));p.call(h)}}}var La={},ur=fi(La),Va=fi(La),Ma=fi(La);function ps(r){if(r===La)throw Error(t(174));return r}function gd(r,s){switch(We(Ma,s),We(Va,r),We(ur,La),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:pt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=pt(s,r)}qe(ur),We(ur,s)}function Ao(){qe(ur),qe(Va),qe(Ma)}function Cg(r){ps(Ma.current);var s=ps(ur.current),l=pt(s,r.type);s!==l&&(We(Va,r),We(ur,l))}function yd(r){Va.current===r&&(qe(ur),qe(Va))}var Je=fi(0);function Vu(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _d=[];function vd(){for(var r=0;r<_d.length;r++)_d[r]._workInProgressVersionPrimary=null;_d.length=0}var Mu=Y.ReactCurrentDispatcher,wd=Y.ReactCurrentBatchConfig,ms=0,Ze=null,gt=null,Tt=null,Uu=!1,Ua=!1,Fa=0,$T=0;function Ut(){throw Error(t(321))}function Ed(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!jn(r[l],s[l]))return!1;return!0}function Td(r,s,l,h,p,y){if(ms=y,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Mu.current=r===null||r.memoizedState===null?KT:GT,r=l(h,p),Ua){y=0;do{if(Ua=!1,Fa=0,25<=y)throw Error(t(301));y+=1,Tt=gt=null,s.updateQueue=null,Mu.current=QT,r=l(h,p)}while(Ua)}if(Mu.current=zu,s=gt!==null&&gt.next!==null,ms=0,Tt=gt=Ze=null,Uu=!1,s)throw Error(t(300));return r}function Id(){var r=Fa!==0;return Fa=0,r}function cr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?Ze.memoizedState=Tt=r:Tt=Tt.next=r,Tt}function Cn(){if(gt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=Tt===null?Ze.memoizedState:Tt.next;if(s!==null)Tt=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Tt===null?Ze.memoizedState=Tt=r:Tt=Tt.next=r}return Tt}function ja(r,s){return typeof s=="function"?s(r):s}function Sd(r){var s=Cn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=gt,p=h.baseQueue,y=l.pending;if(y!==null){if(p!==null){var w=p.next;p.next=y.next,y.next=w}h.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,h=h.baseState;var R=w=null,b=null,$=y;do{var J=$.lane;if((ms&J)===J)b!==null&&(b=b.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),h=$.hasEagerState?$.eagerState:r(h,$.action);else{var ee={lane:J,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};b===null?(R=b=ee,w=h):b=b.next=ee,Ze.lanes|=J,gs|=J}$=$.next}while($!==null&&$!==y);b===null?w=h:b.next=R,jn(h,s.memoizedState)||(tn=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=b,l.lastRenderedState=h}if(r=l.interleaved,r!==null){p=r;do y=p.lane,Ze.lanes|=y,gs|=y,p=p.next;while(p!==r)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Rd(r){var s=Cn(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var h=l.dispatch,p=l.pending,y=s.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do y=r(y,w.action),w=w.next;while(w!==p);jn(y,s.memoizedState)||(tn=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,h]}function Pg(){}function kg(r,s){var l=Ze,h=Cn(),p=s(),y=!jn(h.memoizedState,p);if(y&&(h.memoizedState=p,tn=!0),h=h.queue,Ad(bg.bind(null,l,h,r),[r]),h.getSnapshot!==s||y||Tt!==null&&Tt.memoizedState.tag&1){if(l.flags|=2048,za(9,Dg.bind(null,l,h,p,s),void 0,null),It===null)throw Error(t(349));ms&30||Ng(l,s,p)}return p}function Ng(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function Dg(r,s,l,h){s.value=l,s.getSnapshot=h,xg(s)&&Og(r)}function bg(r,s,l){return l(function(){xg(s)&&Og(r)})}function xg(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!jn(r,l)}catch{return!0}}function Og(r){var s=Or(r,1);s!==null&&Hn(s,r,1,-1)}function Lg(r){var s=cr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:r},s.queue=r,r=r.dispatch=qT.bind(null,Ze,r),[s.memoizedState,r]}function za(r,s,l,h){return r={tag:r,create:s,destroy:l,deps:h,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(h=l.next,l.next=r,r.next=h,s.lastEffect=r)),r}function Vg(){return Cn().memoizedState}function Fu(r,s,l,h){var p=cr();Ze.flags|=r,p.memoizedState=za(1|s,l,void 0,h===void 0?null:h)}function ju(r,s,l,h){var p=Cn();h=h===void 0?null:h;var y=void 0;if(gt!==null){var w=gt.memoizedState;if(y=w.destroy,h!==null&&Ed(h,w.deps)){p.memoizedState=za(s,l,y,h);return}}Ze.flags|=r,p.memoizedState=za(1|s,l,y,h)}function Mg(r,s){return Fu(8390656,8,r,s)}function Ad(r,s){return ju(2048,8,r,s)}function Ug(r,s){return ju(4,2,r,s)}function Fg(r,s){return ju(4,4,r,s)}function jg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function zg(r,s,l){return l=l!=null?l.concat([r]):null,ju(4,4,jg.bind(null,s,r),l)}function Cd(){}function Bg(r,s){var l=Cn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Ed(s,h[1])?h[0]:(l.memoizedState=[r,s],r)}function $g(r,s){var l=Cn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Ed(s,h[1])?h[0]:(r=r(),l.memoizedState=[r,s],r)}function Wg(r,s,l){return ms&21?(jn(l,s)||(l=is(),Ze.lanes|=l,gs|=l,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,tn=!0),r.memoizedState=l)}function WT(r,s){var l=Pe;Pe=l!==0&&4>l?l:4,r(!0);var h=wd.transition;wd.transition={};try{r(!1),s()}finally{Pe=l,wd.transition=h}}function Hg(){return Cn().memoizedState}function HT(r,s,l){var h=Ei(r);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},qg(r))Kg(s,l);else if(l=Ig(r,s,l,h),l!==null){var p=Gt();Hn(l,r,h,p),Gg(l,s,h)}}function qT(r,s,l){var h=Ei(r),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(qg(r))Kg(s,p);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var w=s.lastRenderedState,R=y(w,l);if(p.hasEagerState=!0,p.eagerState=R,jn(R,w)){var b=s.interleaved;b===null?(p.next=p,pd(s)):(p.next=b.next,b.next=p),s.interleaved=p;return}}catch{}finally{}l=Ig(r,s,p,h),l!==null&&(p=Gt(),Hn(l,r,h,p),Gg(l,s,h))}}function qg(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Kg(r,s){Ua=Uu=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function Gg(r,s,l){if(l&4194240){var h=s.lanes;h&=r.pendingLanes,l|=h,s.lanes=l,oi(r,l)}}var zu={readContext:An,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},KT={readContext:An,useCallback:function(r,s){return cr().memoizedState=[r,s===void 0?null:s],r},useContext:An,useEffect:Mg,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,Fu(4194308,4,jg.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Fu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Fu(4,2,r,s)},useMemo:function(r,s){var l=cr();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var h=cr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=HT.bind(null,Ze,r),[h.memoizedState,r]},useRef:function(r){var s=cr();return r={current:r},s.memoizedState=r},useState:Lg,useDebugValue:Cd,useDeferredValue:function(r){return cr().memoizedState=r},useTransition:function(){var r=Lg(!1),s=r[0];return r=WT.bind(null,r[1]),cr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var h=Ze,p=cr();if(Qe){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),It===null)throw Error(t(349));ms&30||Ng(h,s,l)}p.memoizedState=l;var y={value:l,getSnapshot:s};return p.queue=y,Mg(bg.bind(null,h,y,r),[r]),h.flags|=2048,za(9,Dg.bind(null,h,y,l,s),void 0,null),l},useId:function(){var r=cr(),s=It.identifierPrefix;if(Qe){var l=xr,h=br;l=(h&~(1<<32-Ht(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=Fa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=$T++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},GT={readContext:An,useCallback:Bg,useContext:An,useEffect:Ad,useImperativeHandle:zg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:$g,useReducer:Sd,useRef:Vg,useState:function(){return Sd(ja)},useDebugValue:Cd,useDeferredValue:function(r){var s=Cn();return Wg(s,gt.memoizedState,r)},useTransition:function(){var r=Sd(ja)[0],s=Cn().memoizedState;return[r,s]},useMutableSource:Pg,useSyncExternalStore:kg,useId:Hg,unstable_isNewReconciler:!1},QT={readContext:An,useCallback:Bg,useContext:An,useEffect:Ad,useImperativeHandle:zg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:$g,useReducer:Rd,useRef:Vg,useState:function(){return Rd(ja)},useDebugValue:Cd,useDeferredValue:function(r){var s=Cn();return gt===null?s.memoizedState=r:Wg(s,gt.memoizedState,r)},useTransition:function(){var r=Rd(ja)[0],s=Cn().memoizedState;return[r,s]},useMutableSource:Pg,useSyncExternalStore:kg,useId:Hg,unstable_isNewReconciler:!1};function Bn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function Pd(r,s,l,h){s=r.memoizedState,l=l(h,s),l=l==null?s:ae({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Bu={isMounted:function(r){return(r=r._reactInternals)?xn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var h=Gt(),p=Ei(r),y=Lr(h,p);y.payload=s,l!=null&&(y.callback=l),s=yi(r,y,p),s!==null&&(Hn(s,r,p,h),Ou(s,r,p))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var h=Gt(),p=Ei(r),y=Lr(h,p);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=yi(r,y,p),s!==null&&(Hn(s,r,p,h),Ou(s,r,p))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Gt(),h=Ei(r),p=Lr(l,h);p.tag=2,s!=null&&(p.callback=s),s=yi(r,p,h),s!==null&&(Hn(s,r,h,l),Ou(s,r,h))}};function Qg(r,s,l,h,p,y,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,y,w):s.prototype&&s.prototype.isPureReactComponent?!Ca(l,h)||!Ca(p,y):!0}function Yg(r,s,l){var h=!1,p=pi,y=s.contextType;return typeof y=="object"&&y!==null?y=An(y):(p=en(s)?cs:Mt.current,h=s.contextTypes,y=(h=h!=null)?vo(r,p):pi),s=new s(l,y),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Bu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=p,r.__reactInternalMemoizedMaskedChildContext=y),s}function Xg(r,s,l,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==r&&Bu.enqueueReplaceState(s,s.state,null)}function kd(r,s,l,h){var p=r.stateNode;p.props=l,p.state=r.memoizedState,p.refs={},md(r);var y=s.contextType;typeof y=="object"&&y!==null?p.context=An(y):(y=en(s)?cs:Mt.current,p.context=vo(r,y)),p.state=r.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(Pd(r,s,y,l),p.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Bu.enqueueReplaceState(p,p.state,null),Lu(r,l,p,h),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308)}function Co(r,s){try{var l="",h=s;do l+=Re(h),h=h.return;while(h);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:s,stack:p,digest:null}}function Nd(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function Dd(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var YT=typeof WeakMap=="function"?WeakMap:Map;function Jg(r,s,l){l=Lr(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Qu||(Qu=!0,qd=h),Dd(r,s)},l}function Zg(r,s,l){l=Lr(-1,l),l.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){Dd(r,s)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){Dd(r,s),typeof h!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function ey(r,s,l){var h=r.pingCache;if(h===null){h=r.pingCache=new YT;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),r=cI.bind(null,r,s,l),s.then(r,r))}function ty(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function ny(r,s,l,h,p){return r.mode&1?(r.flags|=65536,r.lanes=p,r):(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Lr(-1,1),s.tag=2,yi(l,s,1))),l.lanes|=1),r)}var XT=Y.ReactCurrentOwner,tn=!1;function Kt(r,s,l,h){s.child=r===null?Tg(s,null,l,h):Io(s,r.child,l,h)}function ry(r,s,l,h,p){l=l.render;var y=s.ref;return Ro(s,p),h=Td(r,s,l,h,y,p),l=Id(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,Vr(r,s,p)):(Qe&&l&&sd(s),s.flags|=1,Kt(r,s,h,p),s.child)}function iy(r,s,l,h,p){if(r===null){var y=l.type;return typeof y=="function"&&!Zd(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,sy(r,s,y,h,p)):(r=tc(l.type,null,h,s,s.mode,p),r.ref=s.ref,r.return=s,s.child=r)}if(y=r.child,!(r.lanes&p)){var w=y.memoizedProps;if(l=l.compare,l=l!==null?l:Ca,l(w,h)&&r.ref===s.ref)return Vr(r,s,p)}return s.flags|=1,r=Ii(y,h),r.ref=s.ref,r.return=s,s.child=r}function sy(r,s,l,h,p){if(r!==null){var y=r.memoizedProps;if(Ca(y,h)&&r.ref===s.ref)if(tn=!1,s.pendingProps=h=y,(r.lanes&p)!==0)r.flags&131072&&(tn=!0);else return s.lanes=r.lanes,Vr(r,s,p)}return bd(r,s,l,h,p)}function oy(r,s,l){var h=s.pendingProps,p=h.children,y=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(ko,pn),pn|=l;else{if(!(l&1073741824))return r=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(ko,pn),pn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=y!==null?y.baseLanes:l,We(ko,pn),pn|=h}else y!==null?(h=y.baseLanes|l,s.memoizedState=null):h=l,We(ko,pn),pn|=h;return Kt(r,s,p,l),s.child}function ay(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function bd(r,s,l,h,p){var y=en(l)?cs:Mt.current;return y=vo(s,y),Ro(s,p),l=Td(r,s,l,h,y,p),h=Id(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~p,Vr(r,s,p)):(Qe&&h&&sd(s),s.flags|=1,Kt(r,s,l,p),s.child)}function ly(r,s,l,h,p){if(en(l)){var y=!0;Au(s)}else y=!1;if(Ro(s,p),s.stateNode===null)Wu(r,s),Yg(s,l,h),kd(s,l,h,p),h=!0;else if(r===null){var w=s.stateNode,R=s.memoizedProps;w.props=R;var b=w.context,$=l.contextType;typeof $=="object"&&$!==null?$=An($):($=en(l)?cs:Mt.current,$=vo(s,$));var J=l.getDerivedStateFromProps,ee=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||b!==$)&&Xg(s,w,h,$),gi=!1;var X=s.memoizedState;w.state=X,Lu(s,h,w,p),b=s.memoizedState,R!==h||X!==b||Zt.current||gi?(typeof J=="function"&&(Pd(s,l,J,h),b=s.memoizedState),(R=gi||Qg(s,l,R,h,X,b,$))?(ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=b),w.props=h,w.state=b,w.context=$,h=R):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,Sg(r,s),R=s.memoizedProps,$=s.type===s.elementType?R:Bn(s.type,R),w.props=$,ee=s.pendingProps,X=w.context,b=l.contextType,typeof b=="object"&&b!==null?b=An(b):(b=en(l)?cs:Mt.current,b=vo(s,b));var oe=l.getDerivedStateFromProps;(J=typeof oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==ee||X!==b)&&Xg(s,w,h,b),gi=!1,X=s.memoizedState,w.state=X,Lu(s,h,w,p);var ce=s.memoizedState;R!==ee||X!==ce||Zt.current||gi?(typeof oe=="function"&&(Pd(s,l,oe,h),ce=s.memoizedState),($=gi||Qg(s,l,$,h,X,ce,b)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ce,b),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ce,b)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),w.props=h,w.state=ce,w.context=b,h=$):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),h=!1)}return xd(r,s,l,h,y,p)}function xd(r,s,l,h,p,y){ay(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return p&&fg(s,l,!1),Vr(r,s,y);h=s.stateNode,XT.current=s;var R=w&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=Io(s,r.child,null,y),s.child=Io(s,null,R,y)):Kt(r,s,R,y),s.memoizedState=h.state,p&&fg(s,l,!0),s.child}function uy(r){var s=r.stateNode;s.pendingContext?hg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&hg(r,s.context,!1),gd(r,s.containerInfo)}function cy(r,s,l,h,p){return To(),ud(p),s.flags|=256,Kt(r,s,l,h),s.child}var Od={dehydrated:null,treeContext:null,retryLane:0};function Ld(r){return{baseLanes:r,cachePool:null,transitions:null}}function hy(r,s,l){var h=s.pendingProps,p=Je.current,y=!1,w=(s.flags&128)!==0,R;if((R=w)||(R=r!==null&&r.memoizedState===null?!1:(p&2)!==0),R?(y=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(p|=1),We(Je,p&1),r===null)return ld(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=h.children,r=h.fallback,y?(h=s.mode,y=s.child,w={mode:"hidden",children:w},!(h&1)&&y!==null?(y.childLanes=0,y.pendingProps=w):y=nc(w,h,0,null),r=ws(r,h,l,null),y.return=s,r.return=s,y.sibling=r,s.child=y,s.child.memoizedState=Ld(l),s.memoizedState=Od,r):Vd(s,w));if(p=r.memoizedState,p!==null&&(R=p.dehydrated,R!==null))return JT(r,s,w,h,R,p,l);if(y){y=h.fallback,w=s.mode,p=r.child,R=p.sibling;var b={mode:"hidden",children:h.children};return!(w&1)&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=b,s.deletions=null):(h=Ii(p,b),h.subtreeFlags=p.subtreeFlags&14680064),R!==null?y=Ii(R,y):(y=ws(y,w,l,null),y.flags|=2),y.return=s,h.return=s,h.sibling=y,s.child=h,h=y,y=s.child,w=r.child.memoizedState,w=w===null?Ld(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},y.memoizedState=w,y.childLanes=r.childLanes&~l,s.memoizedState=Od,h}return y=r.child,r=y.sibling,h=Ii(y,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=l),h.return=s,h.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=h,s.memoizedState=null,h}function Vd(r,s){return s=nc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function $u(r,s,l,h){return h!==null&&ud(h),Io(s,r.child,null,l),r=Vd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function JT(r,s,l,h,p,y,w){if(l)return s.flags&256?(s.flags&=-257,h=Nd(Error(t(422))),$u(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(y=h.fallback,p=s.mode,h=nc({mode:"visible",children:h.children},p,0,null),y=ws(y,p,w,null),y.flags|=2,h.return=s,y.return=s,h.sibling=y,s.child=h,s.mode&1&&Io(s,r.child,null,w),s.child.memoizedState=Ld(w),s.memoizedState=Od,y);if(!(s.mode&1))return $u(r,s,w,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var R=h.dgst;return h=R,y=Error(t(419)),h=Nd(y,h,void 0),$u(r,s,w,h)}if(R=(w&r.childLanes)!==0,tn||R){if(h=It,h!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(h.suspendedLanes|w)?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,Or(r,p),Hn(h,r,p,-1))}return Jd(),h=Nd(Error(t(421))),$u(r,s,w,h)}return p.data==="$?"?(s.flags|=128,s.child=r.child,s=hI.bind(null,r),p._reactRetry=s,null):(r=y.treeContext,fn=di(p.nextSibling),dn=s,Qe=!0,zn=null,r!==null&&(Sn[Rn++]=br,Sn[Rn++]=xr,Sn[Rn++]=hs,br=r.id,xr=r.overflow,hs=s),s=Vd(s,h.children),s.flags|=4096,s)}function dy(r,s,l){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),fd(r.return,s,l)}function Md(r,s,l,h,p){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=l,y.tailMode=p)}function fy(r,s,l){var h=s.pendingProps,p=h.revealOrder,y=h.tail;if(Kt(r,s,h.children,l),h=Je.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&dy(r,l,s);else if(r.tag===19)dy(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(Je,h),!(s.mode&1))s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)r=l.alternate,r!==null&&Vu(r)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Md(s,!1,p,l,y);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(r=p.alternate,r!==null&&Vu(r)===null){s.child=p;break}r=p.sibling,p.sibling=l,l=p,p=r}Md(s,!0,l,null,y);break;case"together":Md(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Wu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Vr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),gs|=s.lanes,!(l&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Ii(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Ii(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function ZT(r,s,l){switch(s.tag){case 3:uy(s),To();break;case 5:Cg(s);break;case 1:en(s.type)&&Au(s);break;case 4:gd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;We(bu,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(Je,Je.current&1),s.flags|=128,null):l&s.child.childLanes?hy(r,s,l):(We(Je,Je.current&1),r=Vr(r,s,l),r!==null?r.sibling:null);We(Je,Je.current&1);break;case 19:if(h=(l&s.childLanes)!==0,r.flags&128){if(h)return fy(r,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),We(Je,Je.current),h)break;return null;case 22:case 23:return s.lanes=0,oy(r,s,l)}return Vr(r,s,l)}var py,Ud,my,gy;py=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ud=function(){},my=function(r,s,l,h){var p=r.memoizedProps;if(p!==h){r=s.stateNode,ps(ur.current);var y=null;switch(l){case"input":p=Ki(r,p),h=Ki(r,h),y=[];break;case"select":p=ae({},p,{value:void 0}),h=ae({},h,{value:void 0}),y=[];break;case"textarea":p=na(r,p),h=na(r,h),y=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Iu)}la(l,h);var w;l=null;for($ in p)if(!h.hasOwnProperty($)&&p.hasOwnProperty($)&&p[$]!=null)if($==="style"){var R=p[$];for(w in R)R.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(o.hasOwnProperty($)?y||(y=[]):(y=y||[]).push($,null));for($ in h){var b=h[$];if(R=p!=null?p[$]:void 0,h.hasOwnProperty($)&&b!==R&&(b!=null||R!=null))if($==="style")if(R){for(w in R)!R.hasOwnProperty(w)||b&&b.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in b)b.hasOwnProperty(w)&&R[w]!==b[w]&&(l||(l={}),l[w]=b[w])}else l||(y||(y=[]),y.push($,l)),l=b;else $==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,R=R?R.__html:void 0,b!=null&&R!==b&&(y=y||[]).push($,b)):$==="children"?typeof b!="string"&&typeof b!="number"||(y=y||[]).push($,""+b):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(o.hasOwnProperty($)?(b!=null&&$==="onScroll"&&He("scroll",r),y||R===b||(y=[])):(y=y||[]).push($,b))}l&&(y=y||[]).push("style",l);var $=y;(s.updateQueue=$)&&(s.flags|=4)}},gy=function(r,s,l,h){l!==h&&(s.flags|=4)};function Ba(r,s){if(!Qe)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,h=0;if(s)for(var p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=r,p=p.sibling;else for(p=r.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=r,p=p.sibling;return r.subtreeFlags|=h,r.childLanes=l,s}function eI(r,s,l){var h=s.pendingProps;switch(od(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return en(s.type)&&Ru(),Ft(s),null;case 3:return h=s.stateNode,Ao(),qe(Zt),qe(Mt),vd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Nu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,zn!==null&&(Qd(zn),zn=null))),Ud(r,s),Ft(s),null;case 5:yd(s);var p=ps(Ma.current);if(l=s.type,r!==null&&s.stateNode!=null)my(r,s,l,h,p),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=ps(ur.current),Nu(s)){h=s.stateNode,l=s.type;var y=s.memoizedProps;switch(h[lr]=s,h[ba]=y,r=(s.mode&1)!==0,l){case"dialog":He("cancel",h),He("close",h);break;case"iframe":case"object":case"embed":He("load",h);break;case"video":case"audio":for(p=0;p<ka.length;p++)He(ka[p],h);break;case"source":He("error",h);break;case"img":case"image":case"link":He("error",h),He("load",h);break;case"details":He("toggle",h);break;case"input":js(h,y),He("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!y.multiple},He("invalid",h);break;case"textarea":Bs(h,y),He("invalid",h)}la(l,y),p=null;for(var w in y)if(y.hasOwnProperty(w)){var R=y[w];w==="children"?typeof R=="string"?h.textContent!==R&&(y.suppressHydrationWarning!==!0&&Tu(h.textContent,R,r),p=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(y.suppressHydrationWarning!==!0&&Tu(h.textContent,R,r),p=["children",""+R]):o.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&He("scroll",h)}switch(l){case"input":Er(h),Gl(h,y,!0);break;case"textarea":Er(h),ra(h);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(h.onclick=Iu)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ft(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(l,{is:h.is}):(r=w.createElement(l),l==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,l),r[lr]=s,r[ba]=h,py(r,s,!1,!1),s.stateNode=r;e:{switch(w=ua(l,h),l){case"dialog":He("cancel",r),He("close",r),p=h;break;case"iframe":case"object":case"embed":He("load",r),p=h;break;case"video":case"audio":for(p=0;p<ka.length;p++)He(ka[p],r);p=h;break;case"source":He("error",r),p=h;break;case"img":case"image":case"link":He("error",r),He("load",r),p=h;break;case"details":He("toggle",r),p=h;break;case"input":js(r,h),p=Ki(r,h),He("invalid",r);break;case"option":p=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},p=ae({},h,{value:void 0}),He("invalid",r);break;case"textarea":Bs(r,h),p=na(r,h),He("invalid",r);break;default:p=h}la(l,p),R=p;for(y in R)if(R.hasOwnProperty(y)){var b=R[y];y==="style"?oa(r,b):y==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&ia(r,b)):y==="children"?typeof b=="string"?(l!=="textarea"||b!=="")&&ti(r,b):typeof b=="number"&&ti(r,""+b):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?b!=null&&y==="onScroll"&&He("scroll",r):b!=null&&q(r,y,b,w))}switch(l){case"input":Er(r),Gl(r,h,!1);break;case"textarea":Er(r),ra(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Me(h.value));break;case"select":r.multiple=!!h.multiple,y=h.value,y!=null?Ir(r,!!h.multiple,y,!1):h.defaultValue!=null&&Ir(r,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(r.onclick=Iu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)gy(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=ps(Ma.current),ps(ur.current),Nu(s)){if(h=s.stateNode,l=s.memoizedProps,h[lr]=s,(y=h.nodeValue!==l)&&(r=dn,r!==null))switch(r.tag){case 3:Tu(h.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Tu(h.nodeValue,l,(r.mode&1)!==0)}y&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[lr]=s,s.stateNode=h}return Ft(s),null;case 13:if(qe(Je),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Qe&&fn!==null&&s.mode&1&&!(s.flags&128))vg(),To(),s.flags|=98560,y=!1;else if(y=Nu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[lr]=s}else To(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Ft(s),y=!1}else zn!==null&&(Qd(zn),zn=null),y=!0;if(!y)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||Je.current&1?yt===0&&(yt=3):Jd())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return Ao(),Ud(r,s),r===null&&Na(s.stateNode.containerInfo),Ft(s),null;case 10:return dd(s.type._context),Ft(s),null;case 17:return en(s.type)&&Ru(),Ft(s),null;case 19:if(qe(Je),y=s.memoizedState,y===null)return Ft(s),null;if(h=(s.flags&128)!==0,w=y.rendering,w===null)if(h)Ba(y,!1);else{if(yt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(w=Vu(r),w!==null){for(s.flags|=128,Ba(y,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)y=l,r=h,y.flags&=14680066,w=y.alternate,w===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=w.childLanes,y.lanes=w.lanes,y.child=w.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=w.memoizedProps,y.memoizedState=w.memoizedState,y.updateQueue=w.updateQueue,y.type=w.type,r=w.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return We(Je,Je.current&1|2),s.child}r=r.sibling}y.tail!==null&&$e()>No&&(s.flags|=128,h=!0,Ba(y,!1),s.lanes=4194304)}else{if(!h)if(r=Vu(w),r!==null){if(s.flags|=128,h=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ba(y,!0),y.tail===null&&y.tailMode==="hidden"&&!w.alternate&&!Qe)return Ft(s),null}else 2*$e()-y.renderingStartTime>No&&l!==1073741824&&(s.flags|=128,h=!0,Ba(y,!1),s.lanes=4194304);y.isBackwards?(w.sibling=s.child,s.child=w):(l=y.last,l!==null?l.sibling=w:s.child=w,y.last=w)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=$e(),s.sibling=null,l=Je.current,We(Je,h?l&1|2:l&1),s):(Ft(s),null);case 22:case 23:return Xd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?pn&1073741824&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function tI(r,s){switch(od(s),s.tag){case 1:return en(s.type)&&Ru(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ao(),qe(Zt),qe(Mt),vd(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return yd(s),null;case 13:if(qe(Je),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));To()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return qe(Je),null;case 4:return Ao(),null;case 10:return dd(s.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var Hu=!1,jt=!1,nI=typeof WeakSet=="function"?WeakSet:Set,le=null;function Po(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){tt(r,s,h)}else l.current=null}function Fd(r,s,l){try{l()}catch(h){tt(r,s,h)}}var yy=!1;function rI(r,s){if(Xh=ui,r=Qm(),$h(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var w=0,R=-1,b=-1,$=0,J=0,ee=r,X=null;t:for(;;){for(var oe;ee!==l||p!==0&&ee.nodeType!==3||(R=w+p),ee!==y||h!==0&&ee.nodeType!==3||(b=w+h),ee.nodeType===3&&(w+=ee.nodeValue.length),(oe=ee.firstChild)!==null;)X=ee,ee=oe;for(;;){if(ee===r)break t;if(X===l&&++$===p&&(R=w),X===y&&++J===h&&(b=w),(oe=ee.nextSibling)!==null)break;ee=X,X=ee.parentNode}ee=oe}l=R===-1||b===-1?null:{start:R,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(Jh={focusedElem:r,selectionRange:l},ui=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ce=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,ot=ce.memoizedState,j=s.stateNode,O=j.getSnapshotBeforeUpdate(s.elementType===s.type?he:Bn(s.type,he),ot);j.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){tt(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ce=yy,yy=!1,ce}function $a(r,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&r)===r){var y=p.destroy;p.destroy=void 0,y!==void 0&&Fd(s,l,y)}p=p.next}while(p!==h)}}function qu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function jd(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function _y(r){var s=r.alternate;s!==null&&(r.alternate=null,_y(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[lr],delete s[ba],delete s[nd],delete s[FT],delete s[jT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function vy(r){return r.tag===5||r.tag===3||r.tag===4}function wy(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||vy(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function zd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Iu));else if(h!==4&&(r=r.child,r!==null))for(zd(r,s,l),r=r.sibling;r!==null;)zd(r,s,l),r=r.sibling}function Bd(r,s,l){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Bd(r,s,l),r=r.sibling;r!==null;)Bd(r,s,l),r=r.sibling}var Pt=null,$n=!1;function _i(r,s,l){for(l=l.child;l!==null;)Ey(r,s,l),l=l.sibling}function Ey(r,s,l){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(ns,l)}catch{}switch(l.tag){case 5:jt||Po(l,s);case 6:var h=Pt,p=$n;Pt=null,_i(r,s,l),Pt=h,$n=p,Pt!==null&&($n?(r=Pt,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Pt.removeChild(l.stateNode));break;case 18:Pt!==null&&($n?(r=Pt,l=l.stateNode,r.nodeType===8?td(r.parentNode,l):r.nodeType===1&&td(r,l),Un(r)):td(Pt,l.stateNode));break;case 4:h=Pt,p=$n,Pt=l.stateNode.containerInfo,$n=!0,_i(r,s,l),Pt=h,$n=p;break;case 0:case 11:case 14:case 15:if(!jt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var y=p,w=y.destroy;y=y.tag,w!==void 0&&(y&2||y&4)&&Fd(l,s,w),p=p.next}while(p!==h)}_i(r,s,l);break;case 1:if(!jt&&(Po(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(R){tt(l,s,R)}_i(r,s,l);break;case 21:_i(r,s,l);break;case 22:l.mode&1?(jt=(h=jt)||l.memoizedState!==null,_i(r,s,l),jt=h):_i(r,s,l);break;default:_i(r,s,l)}}function Ty(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new nI),s.forEach(function(h){var p=dI.bind(null,r,h);l.has(h)||(l.add(h),h.then(p,p))})}}function Wn(r,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var y=r,w=s,R=w;e:for(;R!==null;){switch(R.tag){case 5:Pt=R.stateNode,$n=!1;break e;case 3:Pt=R.stateNode.containerInfo,$n=!0;break e;case 4:Pt=R.stateNode.containerInfo,$n=!0;break e}R=R.return}if(Pt===null)throw Error(t(160));Ey(y,w,p),Pt=null,$n=!1;var b=p.alternate;b!==null&&(b.return=null),p.return=null}catch($){tt(p,s,$)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Iy(s,r),s=s.sibling}function Iy(r,s){var l=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Wn(s,r),hr(r),h&4){try{$a(3,r,r.return),qu(3,r)}catch(he){tt(r,r.return,he)}try{$a(5,r,r.return)}catch(he){tt(r,r.return,he)}}break;case 1:Wn(s,r),hr(r),h&512&&l!==null&&Po(l,l.return);break;case 5:if(Wn(s,r),hr(r),h&512&&l!==null&&Po(l,l.return),r.flags&32){var p=r.stateNode;try{ti(p,"")}catch(he){tt(r,r.return,he)}}if(h&4&&(p=r.stateNode,p!=null)){var y=r.memoizedProps,w=l!==null?l.memoizedProps:y,R=r.type,b=r.updateQueue;if(r.updateQueue=null,b!==null)try{R==="input"&&y.type==="radio"&&y.name!=null&&ea(p,y),ua(R,w);var $=ua(R,y);for(w=0;w<b.length;w+=2){var J=b[w],ee=b[w+1];J==="style"?oa(p,ee):J==="dangerouslySetInnerHTML"?ia(p,ee):J==="children"?ti(p,ee):q(p,J,ee,$)}switch(R){case"input":ta(p,y);break;case"textarea":$s(p,y);break;case"select":var X=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var oe=y.value;oe!=null?Ir(p,!!y.multiple,oe,!1):X!==!!y.multiple&&(y.defaultValue!=null?Ir(p,!!y.multiple,y.defaultValue,!0):Ir(p,!!y.multiple,y.multiple?[]:"",!1))}p[ba]=y}catch(he){tt(r,r.return,he)}}break;case 6:if(Wn(s,r),hr(r),h&4){if(r.stateNode===null)throw Error(t(162));p=r.stateNode,y=r.memoizedProps;try{p.nodeValue=y}catch(he){tt(r,r.return,he)}}break;case 3:if(Wn(s,r),hr(r),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Un(s.containerInfo)}catch(he){tt(r,r.return,he)}break;case 4:Wn(s,r),hr(r);break;case 13:Wn(s,r),hr(r),p=r.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(Hd=$e())),h&4&&Ty(r);break;case 22:if(J=l!==null&&l.memoizedState!==null,r.mode&1?(jt=($=jt)||J,Wn(s,r),jt=$):Wn(s,r),hr(r),h&8192){if($=r.memoizedState!==null,(r.stateNode.isHidden=$)&&!J&&r.mode&1)for(le=r,J=r.child;J!==null;){for(ee=le=J;le!==null;){switch(X=le,oe=X.child,X.tag){case 0:case 11:case 14:case 15:$a(4,X,X.return);break;case 1:Po(X,X.return);var ce=X.stateNode;if(typeof ce.componentWillUnmount=="function"){h=X,l=X.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){tt(h,l,he)}}break;case 5:Po(X,X.return);break;case 22:if(X.memoizedState!==null){Ay(ee);continue}}oe!==null?(oe.return=X,le=oe):Ay(ee)}J=J.sibling}e:for(J=null,ee=r;;){if(ee.tag===5){if(J===null){J=ee;try{p=ee.stateNode,$?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(R=ee.stateNode,b=ee.memoizedProps.style,w=b!=null&&b.hasOwnProperty("display")?b.display:null,R.style.display=sa("display",w))}catch(he){tt(r,r.return,he)}}}else if(ee.tag===6){if(J===null)try{ee.stateNode.nodeValue=$?"":ee.memoizedProps}catch(he){tt(r,r.return,he)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===r)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===r)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===r)break e;J===ee&&(J=null),ee=ee.return}J===ee&&(J=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:Wn(s,r),hr(r),h&4&&Ty(r);break;case 21:break;default:Wn(s,r),hr(r)}}function hr(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(vy(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(ti(p,""),h.flags&=-33);var y=wy(r);Bd(r,y,p);break;case 3:case 4:var w=h.stateNode.containerInfo,R=wy(r);zd(r,R,w);break;default:throw Error(t(161))}}catch(b){tt(r,r.return,b)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function iI(r,s,l){le=r,Sy(r)}function Sy(r,s,l){for(var h=(r.mode&1)!==0;le!==null;){var p=le,y=p.child;if(p.tag===22&&h){var w=p.memoizedState!==null||Hu;if(!w){var R=p.alternate,b=R!==null&&R.memoizedState!==null||jt;R=Hu;var $=jt;if(Hu=w,(jt=b)&&!$)for(le=p;le!==null;)w=le,b=w.child,w.tag===22&&w.memoizedState!==null?Cy(p):b!==null?(b.return=w,le=b):Cy(p);for(;y!==null;)le=y,Sy(y),y=y.sibling;le=p,Hu=R,jt=$}Ry(r)}else p.subtreeFlags&8772&&y!==null?(y.return=p,le=y):Ry(r)}}function Ry(r){for(;le!==null;){var s=le;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:jt||qu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!jt)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Bn(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&Ag(s,y,h);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Ag(s,w,l)}break;case 5:var R=s.stateNode;if(l===null&&s.flags&4){l=R;var b=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&l.focus();break;case"img":b.src&&(l.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var $=s.alternate;if($!==null){var J=$.memoizedState;if(J!==null){var ee=J.dehydrated;ee!==null&&Un(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&jd(s)}catch(X){tt(s,s.return,X)}}if(s===r){le=null;break}if(l=s.sibling,l!==null){l.return=s.return,le=l;break}le=s.return}}function Ay(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var l=s.sibling;if(l!==null){l.return=s.return,le=l;break}le=s.return}}function Cy(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{qu(4,s)}catch(b){tt(s,l,b)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(b){tt(s,p,b)}}var y=s.return;try{jd(s)}catch(b){tt(s,y,b)}break;case 5:var w=s.return;try{jd(s)}catch(b){tt(s,w,b)}}}catch(b){tt(s,s.return,b)}if(s===r){le=null;break}var R=s.sibling;if(R!==null){R.return=s.return,le=R;break}le=s.return}}var sI=Math.ceil,Ku=Y.ReactCurrentDispatcher,$d=Y.ReactCurrentOwner,Pn=Y.ReactCurrentBatchConfig,xe=0,It=null,ct=null,kt=0,pn=0,ko=fi(0),yt=0,Wa=null,gs=0,Gu=0,Wd=0,Ha=null,nn=null,Hd=0,No=1/0,Mr=null,Qu=!1,qd=null,vi=null,Yu=!1,wi=null,Xu=0,qa=0,Kd=null,Ju=-1,Zu=0;function Gt(){return xe&6?$e():Ju!==-1?Ju:Ju=$e()}function Ei(r){return r.mode&1?xe&2&&kt!==0?kt&-kt:BT.transition!==null?(Zu===0&&(Zu=is()),Zu):(r=Pe,r!==0||(r=window.event,r=r===void 0?16:wa(r.type)),r):1}function Hn(r,s,l,h){if(50<qa)throw qa=0,Kd=null,Error(t(185));si(r,l,h),(!(xe&2)||r!==It)&&(r===It&&(!(xe&2)&&(Gu|=l),yt===4&&Ti(r,kt)),rn(r,h),l===1&&xe===0&&!(s.mode&1)&&(No=$e()+500,Cu&&mi()))}function rn(r,s){var l=r.callbackNode;Ar(r,s);var h=rs(r,r===It?kt:0);if(h===0)l!==null&&ma(l),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(l!=null&&ma(l),s===1)r.tag===0?zT(ky.bind(null,r)):pg(ky.bind(null,r)),MT(function(){!(xe&6)&&mi()}),l=null;else{switch(ai(h)){case 1:l=ts;break;case 4:l=ni;break;case 16:l=En;break;case 536870912:l=Zl;break;default:l=En}l=My(l,Py.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function Py(r,s){if(Ju=-1,Zu=0,xe&6)throw Error(t(327));var l=r.callbackNode;if(Do()&&r.callbackNode!==l)return null;var h=rs(r,r===It?kt:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=ec(r,h);else{s=h;var p=xe;xe|=2;var y=Dy();(It!==r||kt!==s)&&(Mr=null,No=$e()+500,_s(r,s));do try{lI();break}catch(R){Ny(r,R)}while(!0);hd(),Ku.current=y,xe=p,ct!==null?s=0:(It=null,kt=0,s=yt)}if(s!==0){if(s===2&&(p=un(r),p!==0&&(h=p,s=Gd(r,p))),s===1)throw l=Wa,_s(r,0),Ti(r,h),rn(r,$e()),l;if(s===6)Ti(r,h);else{if(p=r.current.alternate,!(h&30)&&!oI(p)&&(s=ec(r,h),s===2&&(y=un(r),y!==0&&(h=y,s=Gd(r,y))),s===1))throw l=Wa,_s(r,0),Ti(r,h),rn(r,$e()),l;switch(r.finishedWork=p,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:vs(r,nn,Mr);break;case 3:if(Ti(r,h),(h&130023424)===h&&(s=Hd+500-$e(),10<s)){if(rs(r,0)!==0)break;if(p=r.suspendedLanes,(p&h)!==h){Gt(),r.pingedLanes|=r.suspendedLanes&p;break}r.timeoutHandle=ed(vs.bind(null,r,nn,Mr),s);break}vs(r,nn,Mr);break;case 4:if(Ti(r,h),(h&4194240)===h)break;for(s=r.eventTimes,p=-1;0<h;){var w=31-Ht(h);y=1<<w,w=s[w],w>p&&(p=w),h&=~y}if(h=p,h=$e()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*sI(h/1960))-h,10<h){r.timeoutHandle=ed(vs.bind(null,r,nn,Mr),h);break}vs(r,nn,Mr);break;case 5:vs(r,nn,Mr);break;default:throw Error(t(329))}}}return rn(r,$e()),r.callbackNode===l?Py.bind(null,r):null}function Gd(r,s){var l=Ha;return r.current.memoizedState.isDehydrated&&(_s(r,s).flags|=256),r=ec(r,s),r!==2&&(s=nn,nn=l,s!==null&&Qd(s)),r}function Qd(r){nn===null?nn=r:nn.push.apply(nn,r)}function oI(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],y=p.getSnapshot;p=p.value;try{if(!jn(y(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ti(r,s){for(s&=~Wd,s&=~Gu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-Ht(s),h=1<<l;r[l]=-1,s&=~h}}function ky(r){if(xe&6)throw Error(t(327));Do();var s=rs(r,0);if(!(s&1))return rn(r,$e()),null;var l=ec(r,s);if(r.tag!==0&&l===2){var h=un(r);h!==0&&(s=h,l=Gd(r,h))}if(l===1)throw l=Wa,_s(r,0),Ti(r,s),rn(r,$e()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,vs(r,nn,Mr),rn(r,$e()),null}function Yd(r,s){var l=xe;xe|=1;try{return r(s)}finally{xe=l,xe===0&&(No=$e()+500,Cu&&mi())}}function ys(r){wi!==null&&wi.tag===0&&!(xe&6)&&Do();var s=xe;xe|=1;var l=Pn.transition,h=Pe;try{if(Pn.transition=null,Pe=1,r)return r()}finally{Pe=h,Pn.transition=l,xe=s,!(xe&6)&&mi()}}function Xd(){pn=ko.current,qe(ko)}function _s(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,VT(l)),ct!==null)for(l=ct.return;l!==null;){var h=l;switch(od(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ru();break;case 3:Ao(),qe(Zt),qe(Mt),vd();break;case 5:yd(h);break;case 4:Ao();break;case 13:qe(Je);break;case 19:qe(Je);break;case 10:dd(h.type._context);break;case 22:case 23:Xd()}l=l.return}if(It=r,ct=r=Ii(r.current,null),kt=pn=s,yt=0,Wa=null,Wd=Gu=gs=0,nn=Ha=null,fs!==null){for(s=0;s<fs.length;s++)if(l=fs[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,y=l.pending;if(y!==null){var w=y.next;y.next=p,h.next=w}l.pending=h}fs=null}return r}function Ny(r,s){do{var l=ct;try{if(hd(),Mu.current=zu,Uu){for(var h=Ze.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Uu=!1}if(ms=0,Tt=gt=Ze=null,Ua=!1,Fa=0,$d.current=null,l===null||l.return===null){yt=1,Wa=s,ct=null;break}e:{var y=r,w=l.return,R=l,b=s;if(s=kt,R.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var $=b,J=R,ee=J.tag;if(!(J.mode&1)&&(ee===0||ee===11||ee===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var oe=ty(w);if(oe!==null){oe.flags&=-257,ny(oe,w,R,y,s),oe.mode&1&&ey(y,$,s),s=oe,b=$;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(b),s.updateQueue=he}else ce.add(b);break e}else{if(!(s&1)){ey(y,$,s),Jd();break e}b=Error(t(426))}}else if(Qe&&R.mode&1){var ot=ty(w);if(ot!==null){!(ot.flags&65536)&&(ot.flags|=256),ny(ot,w,R,y,s),ud(Co(b,R));break e}}y=b=Co(b,R),yt!==4&&(yt=2),Ha===null?Ha=[y]:Ha.push(y),y=w;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var j=Jg(y,b,s);Rg(y,j);break e;case 1:R=b;var O=y.type,B=y.stateNode;if(!(y.flags&128)&&(typeof O.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(vi===null||!vi.has(B)))){y.flags|=65536,s&=-s,y.lanes|=s;var te=Zg(y,R,s);Rg(y,te);break e}}y=y.return}while(y!==null)}xy(l)}catch(fe){s=fe,ct===l&&l!==null&&(ct=l=l.return);continue}break}while(!0)}function Dy(){var r=Ku.current;return Ku.current=zu,r===null?zu:r}function Jd(){(yt===0||yt===3||yt===2)&&(yt=4),It===null||!(gs&268435455)&&!(Gu&268435455)||Ti(It,kt)}function ec(r,s){var l=xe;xe|=2;var h=Dy();(It!==r||kt!==s)&&(Mr=null,_s(r,s));do try{aI();break}catch(p){Ny(r,p)}while(!0);if(hd(),xe=l,Ku.current=h,ct!==null)throw Error(t(261));return It=null,kt=0,yt}function aI(){for(;ct!==null;)by(ct)}function lI(){for(;ct!==null&&!Xl();)by(ct)}function by(r){var s=Vy(r.alternate,r,pn);r.memoizedProps=r.pendingProps,s===null?xy(r):ct=s,$d.current=null}function xy(r){var s=r;do{var l=s.alternate;if(r=s.return,s.flags&32768){if(l=tI(l,s),l!==null){l.flags&=32767,ct=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,ct=null;return}}else if(l=eI(l,s,pn),l!==null){ct=l;return}if(s=s.sibling,s!==null){ct=s;return}ct=s=r}while(s!==null);yt===0&&(yt=5)}function vs(r,s,l){var h=Pe,p=Pn.transition;try{Pn.transition=null,Pe=1,uI(r,s,l,h)}finally{Pn.transition=p,Pe=h}return null}function uI(r,s,l,h){do Do();while(wi!==null);if(xe&6)throw Error(t(327));l=r.finishedWork;var p=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=l.lanes|l.childLanes;if(je(r,y),r===It&&(ct=It=null,kt=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Yu||(Yu=!0,My(En,function(){return Do(),null})),y=(l.flags&15990)!==0,l.subtreeFlags&15990||y){y=Pn.transition,Pn.transition=null;var w=Pe;Pe=1;var R=xe;xe|=4,$d.current=null,rI(r,l),Iy(l,r),kT(Jh),ui=!!Xh,Jh=Xh=null,r.current=l,iI(l),Lh(),xe=R,Pe=w,Pn.transition=y}else r.current=l;if(Yu&&(Yu=!1,wi=r,Xu=p),y=r.pendingLanes,y===0&&(vi=null),eu(l.stateNode),rn(r,$e()),s!==null)for(h=r.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Qu)throw Qu=!1,r=qd,qd=null,r;return Xu&1&&r.tag!==0&&Do(),y=r.pendingLanes,y&1?r===Kd?qa++:(qa=0,Kd=r):qa=0,mi(),null}function Do(){if(wi!==null){var r=ai(Xu),s=Pn.transition,l=Pe;try{if(Pn.transition=null,Pe=16>r?16:r,wi===null)var h=!1;else{if(r=wi,wi=null,Xu=0,xe&6)throw Error(t(331));var p=xe;for(xe|=4,le=r.current;le!==null;){var y=le,w=y.child;if(le.flags&16){var R=y.deletions;if(R!==null){for(var b=0;b<R.length;b++){var $=R[b];for(le=$;le!==null;){var J=le;switch(J.tag){case 0:case 11:case 15:$a(8,J,y)}var ee=J.child;if(ee!==null)ee.return=J,le=ee;else for(;le!==null;){J=le;var X=J.sibling,oe=J.return;if(_y(J),J===$){le=null;break}if(X!==null){X.return=oe,le=X;break}le=oe}}}var ce=y.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var ot=he.sibling;he.sibling=null,he=ot}while(he!==null)}}le=y}}if(y.subtreeFlags&2064&&w!==null)w.return=y,le=w;else e:for(;le!==null;){if(y=le,y.flags&2048)switch(y.tag){case 0:case 11:case 15:$a(9,y,y.return)}var j=y.sibling;if(j!==null){j.return=y.return,le=j;break e}le=y.return}}var O=r.current;for(le=O;le!==null;){w=le;var B=w.child;if(w.subtreeFlags&2064&&B!==null)B.return=w,le=B;else e:for(w=O;le!==null;){if(R=le,R.flags&2048)try{switch(R.tag){case 0:case 11:case 15:qu(9,R)}}catch(fe){tt(R,R.return,fe)}if(R===w){le=null;break e}var te=R.sibling;if(te!==null){te.return=R.return,le=te;break e}le=R.return}}if(xe=p,mi(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(ns,r)}catch{}h=!0}return h}finally{Pe=l,Pn.transition=s}}return!1}function Oy(r,s,l){s=Co(l,s),s=Jg(r,s,1),r=yi(r,s,1),s=Gt(),r!==null&&(si(r,1,s),rn(r,s))}function tt(r,s,l){if(r.tag===3)Oy(r,r,l);else for(;s!==null;){if(s.tag===3){Oy(s,r,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(vi===null||!vi.has(h))){r=Co(l,r),r=Zg(s,r,1),s=yi(s,r,1),r=Gt(),s!==null&&(si(s,1,r),rn(s,r));break}}s=s.return}}function cI(r,s,l){var h=r.pingCache;h!==null&&h.delete(s),s=Gt(),r.pingedLanes|=r.suspendedLanes&l,It===r&&(kt&l)===l&&(yt===4||yt===3&&(kt&130023424)===kt&&500>$e()-Hd?_s(r,0):Wd|=l),rn(r,s)}function Ly(r,s){s===0&&(r.mode&1?(s=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):s=1);var l=Gt();r=Or(r,s),r!==null&&(si(r,s,l),rn(r,l))}function hI(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),Ly(r,l)}function dI(r,s){var l=0;switch(r.tag){case 13:var h=r.stateNode,p=r.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Ly(r,l)}var Vy;Vy=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||Zt.current)tn=!0;else{if(!(r.lanes&l)&&!(s.flags&128))return tn=!1,ZT(r,s,l);tn=!!(r.flags&131072)}else tn=!1,Qe&&s.flags&1048576&&mg(s,ku,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Wu(r,s),r=s.pendingProps;var p=vo(s,Mt.current);Ro(s,l),p=Td(null,s,h,r,p,l);var y=Id();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,en(h)?(y=!0,Au(s)):y=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,md(s),p.updater=Bu,s.stateNode=p,p._reactInternals=s,kd(s,h,r,l),s=xd(null,s,h,!0,y,l)):(s.tag=0,Qe&&y&&sd(s),Kt(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Wu(r,s),r=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=pI(h),r=Bn(h,r),p){case 0:s=bd(null,s,h,r,l);break e;case 1:s=ly(null,s,h,r,l);break e;case 11:s=ry(null,s,h,r,l);break e;case 14:s=iy(null,s,h,Bn(h.type,r),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Bn(h,p),bd(r,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Bn(h,p),ly(r,s,h,p,l);case 3:e:{if(uy(s),r===null)throw Error(t(387));h=s.pendingProps,y=s.memoizedState,p=y.element,Sg(r,s),Lu(s,h,null,l);var w=s.memoizedState;if(h=w.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){p=Co(Error(t(423)),s),s=cy(r,s,h,l,p);break e}else if(h!==p){p=Co(Error(t(424)),s),s=cy(r,s,h,l,p);break e}else for(fn=di(s.stateNode.containerInfo.firstChild),dn=s,Qe=!0,zn=null,l=Tg(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(To(),h===p){s=Vr(r,s,l);break e}Kt(r,s,h,l)}s=s.child}return s;case 5:return Cg(s),r===null&&ld(s),h=s.type,p=s.pendingProps,y=r!==null?r.memoizedProps:null,w=p.children,Zh(h,p)?w=null:y!==null&&Zh(h,y)&&(s.flags|=32),ay(r,s),Kt(r,s,w,l),s.child;case 6:return r===null&&ld(s),null;case 13:return hy(r,s,l);case 4:return gd(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Io(s,null,h,l):Kt(r,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Bn(h,p),ry(r,s,h,p,l);case 7:return Kt(r,s,s.pendingProps,l),s.child;case 8:return Kt(r,s,s.pendingProps.children,l),s.child;case 12:return Kt(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,y=s.memoizedProps,w=p.value,We(bu,h._currentValue),h._currentValue=w,y!==null)if(jn(y.value,w)){if(y.children===p.children&&!Zt.current){s=Vr(r,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var R=y.dependencies;if(R!==null){w=y.child;for(var b=R.firstContext;b!==null;){if(b.context===h){if(y.tag===1){b=Lr(-1,l&-l),b.tag=2;var $=y.updateQueue;if($!==null){$=$.shared;var J=$.pending;J===null?b.next=b:(b.next=J.next,J.next=b),$.pending=b}}y.lanes|=l,b=y.alternate,b!==null&&(b.lanes|=l),fd(y.return,l,s),R.lanes|=l;break}b=b.next}}else if(y.tag===10)w=y.type===s.type?null:y.child;else if(y.tag===18){if(w=y.return,w===null)throw Error(t(341));w.lanes|=l,R=w.alternate,R!==null&&(R.lanes|=l),fd(w,l,s),w=y.sibling}else w=y.child;if(w!==null)w.return=y;else for(w=y;w!==null;){if(w===s){w=null;break}if(y=w.sibling,y!==null){y.return=w.return,w=y;break}w=w.return}y=w}Kt(r,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,Ro(s,l),p=An(p),h=h(p),s.flags|=1,Kt(r,s,h,l),s.child;case 14:return h=s.type,p=Bn(h,s.pendingProps),p=Bn(h.type,p),iy(r,s,h,p,l);case 15:return sy(r,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:Bn(h,p),Wu(r,s),s.tag=1,en(h)?(r=!0,Au(s)):r=!1,Ro(s,l),Yg(s,h,p),kd(s,h,p,l),xd(null,s,h,!0,r,l);case 19:return fy(r,s,l);case 22:return oy(r,s,l)}throw Error(t(156,s.tag))};function My(r,s){return Xs(r,s)}function fI(r,s,l,h){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(r,s,l,h){return new fI(r,s,l,h)}function Zd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function pI(r){if(typeof r=="function")return Zd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===U)return 11;if(r===Lt)return 14}return 2}function Ii(r,s){var l=r.alternate;return l===null?(l=kn(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function tc(r,s,l,h,p,y){var w=2;if(h=r,typeof r=="function")Zd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case D:return ws(l.children,p,y,s);case S:w=8,p|=8;break;case A:return r=kn(12,l,s,p|2),r.elementType=A,r.lanes=y,r;case k:return r=kn(13,l,s,p),r.elementType=k,r.lanes=y,r;case it:return r=kn(19,l,s,p),r.elementType=it,r.lanes=y,r;case Fe:return nc(l,p,y,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:w=10;break e;case L:w=9;break e;case U:w=11;break e;case Lt:w=14;break e;case Vt:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=kn(w,l,s,p),s.elementType=r,s.type=h,s.lanes=y,s}function ws(r,s,l,h){return r=kn(7,r,h,s),r.lanes=l,r}function nc(r,s,l,h){return r=kn(22,r,h,s),r.elementType=Fe,r.lanes=l,r.stateNode={isHidden:!1},r}function ef(r,s,l){return r=kn(6,r,null,s),r.lanes=l,r}function tf(r,s,l){return s=kn(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function mI(r,s,l,h,p){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function nf(r,s,l,h,p,y,w,R,b){return r=new mI(r,s,l,R,b),s===1?(s=1,y===!0&&(s|=8)):s=0,y=kn(3,null,null,s),r.current=y,y.stateNode=r,y.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(y),r}function gI(r,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:h==null?null:""+h,children:r,containerInfo:s,implementation:l}}function Uy(r){if(!r)return pi;r=r._reactInternals;e:{if(xn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(en(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(en(l))return dg(r,l,s)}return s}function Fy(r,s,l,h,p,y,w,R,b){return r=nf(l,h,!0,r,p,y,w,R,b),r.context=Uy(null),l=r.current,h=Gt(),p=Ei(l),y=Lr(h,p),y.callback=s??null,yi(l,y,p),r.current.lanes=p,si(r,p,h),rn(r,h),r}function rc(r,s,l,h){var p=s.current,y=Gt(),w=Ei(p);return l=Uy(l),s.context===null?s.context=l:s.pendingContext=l,s=Lr(y,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=yi(p,s,w),r!==null&&(Hn(r,p,w,y),Ou(r,p,w)),w}function ic(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function jy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function rf(r,s){jy(r,s),(r=r.alternate)&&jy(r,s)}function yI(){return null}var zy=typeof reportError=="function"?reportError:function(r){console.error(r)};function sf(r){this._internalRoot=r}sc.prototype.render=sf.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));rc(r,s,null,null)},sc.prototype.unmount=sf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ys(function(){rc(null,r,null,null)}),s[Nr]=null}};function sc(r){this._internalRoot=r}sc.prototype.unstable_scheduleHydration=function(r){if(r){var s=su();r={blockedOn:null,target:r,priority:s};for(var l=0;l<rr.length&&s!==0&&s<rr[l].priority;l++);rr.splice(l,0,r),l===0&&lu(r)}};function of(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function oc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function By(){}function _I(r,s,l,h,p){if(p){if(typeof h=="function"){var y=h;h=function(){var $=ic(w);y.call($)}}var w=Fy(s,h,r,0,null,!1,!1,"",By);return r._reactRootContainer=w,r[Nr]=w.current,Na(r.nodeType===8?r.parentNode:r),ys(),w}for(;p=r.lastChild;)r.removeChild(p);if(typeof h=="function"){var R=h;h=function(){var $=ic(b);R.call($)}}var b=nf(r,0,!1,null,null,!1,!1,"",By);return r._reactRootContainer=b,r[Nr]=b.current,Na(r.nodeType===8?r.parentNode:r),ys(function(){rc(s,b,l,h)}),b}function ac(r,s,l,h,p){var y=l._reactRootContainer;if(y){var w=y;if(typeof p=="function"){var R=p;p=function(){var b=ic(w);R.call(b)}}rc(s,w,r,p)}else w=_I(l,s,r,p,h);return ic(w)}ru=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=ri(s.pendingLanes);l!==0&&(oi(s,l|1),rn(s,$e()),!(xe&6)&&(No=$e()+500,mi()))}break;case 13:ys(function(){var h=Or(r,1);if(h!==null){var p=Gt();Hn(h,r,1,p)}}),rf(r,1)}},eo=function(r){if(r.tag===13){var s=Or(r,134217728);if(s!==null){var l=Gt();Hn(s,r,134217728,l)}rf(r,134217728)}},iu=function(r){if(r.tag===13){var s=Ei(r),l=Or(r,s);if(l!==null){var h=Gt();Hn(l,r,s,h)}rf(r,s)}},su=function(){return Pe},ou=function(r,s){var l=Pe;try{return Pe=r,s()}finally{Pe=l}},Hs=function(r,s,l){switch(s){case"input":if(ta(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==r&&h.form===r.form){var p=Su(h);if(!p)throw Error(t(90));Fs(h),ta(h,p)}}}break;case"textarea":$s(r,l);break;case"select":s=l.value,s!=null&&Ir(r,!!l.multiple,s,!1)}},Xi=Yd,ha=ys;var vI={usingClientEntryPoint:!1,Events:[xa,yo,Su,tr,ca,Yd]},Ka={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wI={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Y.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=pa(r),r===null?null:r.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||yI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{ns=lc.inject(wI),ln=lc}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vI,sn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!of(s))throw Error(t(200));return gI(r,s,null,l)},sn.createRoot=function(r,s){if(!of(r))throw Error(t(299));var l=!1,h="",p=zy;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=nf(r,1,!1,null,null,l,!1,h,p),r[Nr]=s.current,Na(r.nodeType===8?r.parentNode:r),new sf(s)},sn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=pa(s),r=r===null?null:r.stateNode,r},sn.flushSync=function(r){return ys(r)},sn.hydrate=function(r,s,l){if(!oc(s))throw Error(t(200));return ac(null,r,s,!0,l)},sn.hydrateRoot=function(r,s,l){if(!of(r))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,p=!1,y="",w=zy;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=Fy(s,null,r,1,l??null,p,!1,y,w),r[Nr]=s.current,Na(r),h)for(r=0;r<h.length;r++)l=h[r],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new sc(s)},sn.render=function(r,s,l){if(!oc(s))throw Error(t(200));return ac(null,r,s,!1,l)},sn.unmountComponentAtNode=function(r){if(!oc(r))throw Error(t(40));return r._reactRootContainer?(ys(function(){ac(null,null,r,!1,function(){r._reactRootContainer=null,r[Nr]=null})}),!0):!1},sn.unstable_batchedUpdates=Yd,sn.unstable_renderSubtreeIntoContainer=function(r,s,l,h){if(!oc(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return ac(r,s,l,!1,h)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var Yy;function DI(){if(Yy)return cf.exports;Yy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),cf.exports=NI(),cf.exports}var Xy;function bI(){if(Xy)return uc;Xy=1;var n=DI();return uc.createRoot=n.createRoot,uc.hydrateRoot=n.hydrateRoot,uc}var xI=bI();const OI=Kv(xI);var W=th();const Gv=Kv(W),Jy=SI({__proto__:null,default:Gv},[W]);var Qa={},Zy;function LI(){if(Zy)return Qa;Zy=1,Object.defineProperty(Qa,"__esModule",{value:!0}),Qa.parse=c,Qa.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const T=function(){};return T.prototype=Object.create(null),T})();function c(T,C){const N=new a,M=T.length;if(M<2)return N;const P=(C==null?void 0:C.decode)||v;let z=0;do{const K=T.indexOf("=",z);if(K===-1)break;const q=T.indexOf(";",z),Y=q===-1?M:q;if(K>Y){z=T.lastIndexOf(";",K-1)+1;continue}const se=d(T,z,K),re=f(T,K,se),D=T.slice(se,re);if(N[D]===void 0){let S=d(T,K+1,Y),A=f(T,Y,S);const x=P(T.slice(S,A));N[D]=x}z=Y+1}while(z<M);return N}function d(T,C,N){do{const M=T.charCodeAt(C);if(M!==32&&M!==9)return C}while(++C<N);return N}function f(T,C,N){for(;C>N;){const M=T.charCodeAt(--C);if(M!==32&&M!==9)return C+1}return N}function g(T,C,N){const M=(N==null?void 0:N.encode)||encodeURIComponent;if(!n.test(T))throw new TypeError(`argument name is invalid: ${T}`);const P=M(C);if(!e.test(P))throw new TypeError(`argument val is invalid: ${C}`);let z=T+"="+P;if(!N)return z;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);z+="; Max-Age="+N.maxAge}if(N.domain){if(!t.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);z+="; Domain="+N.domain}if(N.path){if(!i.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);z+="; Path="+N.path}if(N.expires){if(!E(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);z+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&(z+="; HttpOnly"),N.secure&&(z+="; Secure"),N.partitioned&&(z+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":z+="; Priority=Low";break;case"medium":z+="; Priority=Medium";break;case"high":z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":z+="; SameSite=Strict";break;case"lax":z+="; SameSite=Lax";break;case"none":z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return z}function v(T){if(T.indexOf("%")===-1)return T;try{return decodeURIComponent(T)}catch{return T}}function E(T){return o.call(T)==="[object Date]"}return Qa}LI();/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var e_="popstate";function VI(n={}){function e(i,o){let{pathname:a,search:c,hash:d}=i.location;return jf("",{pathname:a,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:dl(o)}return UI(e,t,null,n)}function _t(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function zi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function MI(){return Math.random().toString(36).substring(2,10)}function t_(n,e){return{usr:n.state,key:n.key,idx:e}}function jf(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Pl(e):e,state:t,key:e&&e.key||i||MI()}}function dl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Pl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function UI(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,d="POP",f=null,g=v();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function v(){return(c.state||{idx:null}).idx}function E(){d="POP";let P=v(),z=P==null?null:P-g;g=P,f&&f({action:d,location:M.location,delta:z})}function T(P,z){d="PUSH";let K=jf(M.location,P,z);g=v()+1;let q=t_(K,g),Y=M.createHref(K);try{c.pushState(q,"",Y)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;o.location.assign(Y)}a&&f&&f({action:d,location:M.location,delta:1})}function C(P,z){d="REPLACE";let K=jf(M.location,P,z);g=v();let q=t_(K,g),Y=M.createHref(K);c.replaceState(q,"",Y),a&&f&&f({action:d,location:M.location,delta:0})}function N(P){let z=o.location.origin!=="null"?o.location.origin:o.location.href,K=typeof P=="string"?P:dl(P);return K=K.replace(/ $/,"%20"),_t(z,`No window.location.(origin|href) available to create URL for href: ${K}`),new URL(K,z)}let M={get action(){return d},get location(){return n(o,c)},listen(P){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(e_,E),f=P,()=>{o.removeEventListener(e_,E),f=null}},createHref(P){return e(o,P)},createURL:N,encodeLocation(P){let z=N(P);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:T,replace:C,go(P){return c.go(P)}};return M}function Qv(n,e,t="/"){return FI(n,e,t,!1)}function FI(n,e,t,i){let o=typeof e=="string"?Pl(e):e,a=Oi(o.pathname||"/",t);if(a==null)return null;let c=Yv(n);jI(c);let d=null;for(let f=0;d==null&&f<c.length;++f){let g=XI(a);d=QI(c[f],g,i)}return d}function Yv(n,e=[],t=[],i=""){let o=(a,c,d)=>{let f={relativePath:d===void 0?a.path||"":d,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};f.relativePath.startsWith("/")&&(_t(f.relativePath.startsWith(i),`Absolute route path "${f.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(i.length));let g=Wr([i,f.relativePath]),v=t.concat(f);a.children&&a.children.length>0&&(_t(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Yv(a.children,e,v,g)),!(a.path==null&&!a.index)&&e.push({path:g,score:KI(g,a.index),routesMeta:v})};return n.forEach((a,c)=>{var d;if(a.path===""||!((d=a.path)!=null&&d.includes("?")))o(a,c);else for(let f of Xv(a.path))o(a,c,f)}),e}function Xv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=Xv(i.join("/")),d=[];return d.push(...c.map(f=>f===""?a:[a,f].join("/"))),o&&d.push(...c),d.map(f=>n.startsWith("/")&&f===""?"/":f)}function jI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:GI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var zI=/^:[\w-]+$/,BI=3,$I=2,WI=1,HI=10,qI=-2,n_=n=>n==="*";function KI(n,e){let t=n.split("/"),i=t.length;return t.some(n_)&&(i+=qI),e&&(i+=$I),t.filter(o=>!n_(o)).reduce((o,a)=>o+(zI.test(a)?BI:a===""?WI:HI),i)}function GI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function QI(n,e,t=!1){let{routesMeta:i}=n,o={},a="/",c=[];for(let d=0;d<i.length;++d){let f=i[d],g=d===i.length-1,v=a==="/"?e:e.slice(a.length)||"/",E=Oc({path:f.relativePath,caseSensitive:f.caseSensitive,end:g},v),T=f.route;if(!E&&g&&t&&!i[i.length-1].route.index&&(E=Oc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},v)),!E)return null;Object.assign(o,E.params),c.push({params:o,pathname:Wr([a,E.pathname]),pathnameBase:t1(Wr([a,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(a=Wr([a,E.pathnameBase]))}return c}function Oc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=YI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((g,{paramName:v,isOptional:E},T)=>{if(v==="*"){let N=d[T]||"";c=a.slice(0,a.length-N.length).replace(/(.)\/+$/,"$1")}const C=d[T];return E&&!C?g[v]=void 0:g[v]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:a,pathnameBase:c,pattern:n}}function YI(n,e=!1,t=!0){zi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,f)=>(i.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function XI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zi(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Oi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function JI(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Pl(n):n;return{pathname:t?t.startsWith("/")?t:ZI(t,e):e,search:n1(i),hash:r1(o)}}function ZI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ff(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function e1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Jv(n){let e=e1(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Zv(n,e,t,i=!1){let o;typeof n=="string"?o=Pl(n):(o={...n},_t(!o.pathname||!o.pathname.includes("?"),ff("?","pathname","search",o)),_t(!o.pathname||!o.pathname.includes("#"),ff("#","pathname","hash",o)),_t(!o.search||!o.search.includes("#"),ff("#","search","hash",o)));let a=n===""||o.pathname==="",c=a?"/":o.pathname,d;if(c==null)d=t;else{let E=e.length-1;if(!i&&c.startsWith("..")){let T=c.split("/");for(;T[0]==="..";)T.shift(),E-=1;o.pathname=T.join("/")}d=E>=0?e[E]:"/"}let f=JI(o,d),g=c&&c!=="/"&&c.endsWith("/"),v=(a||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(g||v)&&(f.pathname+="/"),f}var Wr=n=>n.join("/").replace(/\/\/+/g,"/"),t1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),n1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,r1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function i1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var e0=["POST","PUT","PATCH","DELETE"];new Set(e0);var s1=["GET",...e0];new Set(s1);var Ko=W.createContext(null);Ko.displayName="DataRouter";var nh=W.createContext(null);nh.displayName="DataRouterState";var t0=W.createContext({isTransitioning:!1});t0.displayName="ViewTransition";var o1=W.createContext(new Map);o1.displayName="Fetchers";var a1=W.createContext(null);a1.displayName="Await";var vr=W.createContext(null);vr.displayName="Navigation";var rh=W.createContext(null);rh.displayName="Location";var Zn=W.createContext({outlet:null,matches:[],isDataRoute:!1});Zn.displayName="Route";var Tp=W.createContext(null);Tp.displayName="RouteError";function l1(n,{relative:e}={}){_t(kl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=W.useContext(vr),{hash:o,pathname:a,search:c}=Nl(n,{relative:e}),d=a;return t!=="/"&&(d=a==="/"?t:Wr([t,a])),i.createHref({pathname:d,search:c,hash:o})}function kl(){return W.useContext(rh)!=null}function Ls(){return _t(kl(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(rh).location}var n0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function r0(n){W.useContext(vr).static||W.useLayoutEffect(n)}function u1(){let{isDataRoute:n}=W.useContext(Zn);return n?S1():c1()}function c1(){_t(kl(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Ko),{basename:e,navigator:t}=W.useContext(vr),{matches:i}=W.useContext(Zn),{pathname:o}=Ls(),a=JSON.stringify(Jv(i)),c=W.useRef(!1);return r0(()=>{c.current=!0}),W.useCallback((f,g={})=>{if(zi(c.current,n0),!c.current)return;if(typeof f=="number"){t.go(f);return}let v=Zv(f,JSON.parse(a),o,g.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Wr([e,v.pathname])),(g.replace?t.replace:t.push)(v,g.state,g)},[e,t,a,o,n])}var h1=W.createContext(null);function d1(n){let e=W.useContext(Zn).outlet;return e&&W.createElement(h1.Provider,{value:n},e)}function Qx(){let{matches:n}=W.useContext(Zn),e=n[n.length-1];return e?e.params:{}}function Nl(n,{relative:e}={}){let{matches:t}=W.useContext(Zn),{pathname:i}=Ls(),o=JSON.stringify(Jv(t));return W.useMemo(()=>Zv(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function f1(n,e,t,i){_t(kl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=W.useContext(vr),{matches:a}=W.useContext(Zn),c=a[a.length-1],d=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let g=Ls(),v;v=g;let E=v.pathname||"/",T=E;if(f!=="/"){let M=f.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(M.length).join("/")}let C=Qv(n,{pathname:T});return _1(C&&C.map(M=>Object.assign({},M,{params:Object.assign({},d,M.params),pathname:Wr([f,o.encodeLocation?o.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?f:Wr([f,o.encodeLocation?o.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),a,t,i)}function p1(){let n=I1(),e=i1(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,null)}var m1=W.createElement(p1,null),g1=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(Zn.Provider,{value:this.props.routeContext},W.createElement(Tp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function y1({routeContext:n,match:e,children:t}){let i=W.useContext(Ko);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(Zn.Provider,{value:n},t)}function _1(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=t==null?void 0:t.errors;if(a!=null){let f=o.findIndex(g=>g.route.id&&(a==null?void 0:a[g.route.id])!==void 0);_t(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,d=-1;if(t)for(let f=0;f<o.length;f++){let g=o[f];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=f),g.route.id){let{loaderData:v,errors:E}=t,T=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!E||E[g.route.id]===void 0);if(g.route.lazy||T){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,g,v)=>{let E,T=!1,C=null,N=null;t&&(E=a&&g.route.id?a[g.route.id]:void 0,C=g.route.errorElement||m1,c&&(d<0&&v===0?(R1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,N=null):d===v&&(T=!0,N=g.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,v+1)),P=()=>{let z;return E?z=C:T?z=N:g.route.Component?z=W.createElement(g.route.Component,null):g.route.element?z=g.route.element:z=f,W.createElement(y1,{match:g,routeContext:{outlet:f,matches:M,isDataRoute:t!=null},children:z})};return t&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?W.createElement(g1,{location:t.location,revalidation:t.revalidation,component:C,error:E,children:P(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):P()},null)}function Ip(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function v1(n){let e=W.useContext(Ko);return _t(e,Ip(n)),e}function w1(n){let e=W.useContext(nh);return _t(e,Ip(n)),e}function E1(n){let e=W.useContext(Zn);return _t(e,Ip(n)),e}function Sp(n){let e=E1(n),t=e.matches[e.matches.length-1];return _t(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function T1(){return Sp("useRouteId")}function I1(){var i;let n=W.useContext(Tp),e=w1("useRouteError"),t=Sp("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function S1(){let{router:n}=v1("useNavigate"),e=Sp("useNavigate"),t=W.useRef(!1);return r0(()=>{t.current=!0}),W.useCallback(async(o,a={})=>{zi(t.current,n0),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...a}))},[n,e])}var r_={};function R1(n,e,t){r_[n]||(r_[n]=!0,zi(!1,t))}W.memo(A1);function A1({routes:n,future:e,state:t}){return f1(n,void 0,t,e)}function Yx(n){return d1(n.context)}function C1({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){_t(!kl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=W.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof t=="string"&&(t=Pl(t));let{pathname:f="/",search:g="",hash:v="",state:E=null,key:T="default"}=t,C=W.useMemo(()=>{let N=Oi(f,c);return N==null?null:{location:{pathname:N,search:g,hash:v,state:E,key:T},navigationType:i}},[c,f,g,v,E,T,i]);return zi(C!=null,`<Router basename="${c}"> is not able to match the URL "${f}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:W.createElement(vr.Provider,{value:d},W.createElement(rh.Provider,{children:e,value:C}))}var Ec="get",Tc="application/x-www-form-urlencoded";function ih(n){return n!=null&&typeof n.tagName=="string"}function P1(n){return ih(n)&&n.tagName.toLowerCase()==="button"}function k1(n){return ih(n)&&n.tagName.toLowerCase()==="form"}function N1(n){return ih(n)&&n.tagName.toLowerCase()==="input"}function D1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function b1(n,e){return n.button===0&&(!e||e==="_self")&&!D1(n)}var cc=null;function x1(){if(cc===null)try{new FormData(document.createElement("form"),0),cc=!1}catch{cc=!0}return cc}var O1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pf(n){return n!=null&&!O1.has(n)?(zi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tc}"`),null):n}function L1(n,e){let t,i,o,a,c;if(k1(n)){let d=n.getAttribute("action");i=d?Oi(d,e):null,t=n.getAttribute("method")||Ec,o=pf(n.getAttribute("enctype"))||Tc,a=new FormData(n)}else if(P1(n)||N1(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||d.getAttribute("action");if(i=f?Oi(f,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Ec,o=pf(n.getAttribute("formenctype"))||pf(d.getAttribute("enctype"))||Tc,a=new FormData(d,n),!x1()){let{name:g,type:v,value:E}=n;if(v==="image"){let T=g?`${g}.`:"";a.append(`${T}x`,"0"),a.append(`${T}y`,"0")}else g&&a.append(g,E)}}else{if(ih(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ec,i=null,o=Tc,c=n}return a&&o==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:c}}function Rp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function V1(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function M1(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function U1(n,e,t){let i=await Promise.all(n.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await V1(a,t);return c.links?c.links():[]}return[]}));return B1(i.flat(1).filter(M1).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function i_(n,e,t,i,o,a){let c=(f,g)=>t[g]?f.route.id!==t[g].route.id:!0,d=(f,g)=>{var v;return t[g].pathname!==f.pathname||((v=t[g].route.path)==null?void 0:v.endsWith("*"))&&t[g].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,g)=>c(f,g)||d(f,g)):a==="data"?e.filter((f,g)=>{var E;let v=i.routes[f.route.id];if(!v||!v.hasLoader)return!1;if(c(f,g)||d(f,g))return!0;if(f.route.shouldRevalidate){let T=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function F1(n,e){return j1(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function j1(n){return[...new Set(n)]}function z1(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function B1(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let a=JSON.stringify(z1(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function $1(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function W1(){let n=W.useContext(Ko);return Rp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function H1(){let n=W.useContext(nh);return Rp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ap=W.createContext(void 0);Ap.displayName="FrameworkContext";function i0(){let n=W.useContext(Ap);return Rp(n,"You must render this element inside a <HydratedRouter> element"),n}function q1(n,e){let t=W.useContext(Ap),[i,o]=W.useState(!1),[a,c]=W.useState(!1),{onFocus:d,onBlur:f,onMouseEnter:g,onMouseLeave:v,onTouchStart:E}=e,T=W.useRef(null);W.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let M=z=>{z.forEach(K=>{c(K.isIntersecting)})},P=new IntersectionObserver(M,{threshold:.5});return T.current&&P.observe(T.current),()=>{P.disconnect()}}},[n]),W.useEffect(()=>{if(i){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[i]);let C=()=>{o(!0)},N=()=>{o(!1),c(!1)};return t?n!=="intent"?[a,T,{}]:[a,T,{onFocus:Ya(d,C),onBlur:Ya(f,N),onMouseEnter:Ya(g,C),onMouseLeave:Ya(v,N),onTouchStart:Ya(E,C)}]:[!1,T,{}]}function Ya(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function K1({page:n,...e}){let{router:t}=W1(),i=W.useMemo(()=>Qv(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?W.createElement(Q1,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function G1(n){let{manifest:e,routeModules:t}=i0(),[i,o]=W.useState([]);return W.useEffect(()=>{let a=!1;return U1(n,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[n,e,t]),i}function Q1({page:n,matches:e,...t}){let i=Ls(),{manifest:o,routeModules:a}=i0(),{loaderData:c,matches:d}=H1(),f=W.useMemo(()=>i_(n,e,d,o,i,"data"),[n,e,d,o,i]),g=W.useMemo(()=>i_(n,e,d,o,i,"assets"),[n,e,d,o,i]),v=W.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let C=new Set,N=!1;if(e.forEach(P=>{var K;let z=o.routes[P.route.id];!z||!z.hasLoader||(!f.some(q=>q.route.id===P.route.id)&&P.route.id in c&&((K=a[P.route.id])!=null&&K.shouldRevalidate)||z.hasClientLoader?N=!0:C.add(P.route.id))}),C.size===0)return[];let M=$1(n);return N&&C.size>0&&M.searchParams.set("_routes",e.filter(P=>C.has(P.route.id)).map(P=>P.route.id).join(",")),[M.pathname+M.search]},[c,i,o,f,e,n,a]),E=W.useMemo(()=>F1(g,o),[g,o]),T=G1(g);return W.createElement(W.Fragment,null,v.map(C=>W.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...t})),E.map(C=>W.createElement("link",{key:C,rel:"modulepreload",href:C,...t})),T.map(({key:C,link:N})=>W.createElement("link",{key:C,...N})))}function Y1(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var s0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{s0&&(window.__reactRouterVersion="7.0.1")}catch{}function X1({basename:n,children:e,window:t}){let i=W.useRef();i.current==null&&(i.current=VI({window:t,v5Compat:!0}));let o=i.current,[a,c]=W.useState({action:o.action,location:o.location}),d=W.useCallback(f=>{W.startTransition(()=>c(f))},[c]);return W.useLayoutEffect(()=>o.listen(d),[o,d]),W.createElement(C1,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:o})}var o0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,a0=W.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:c,state:d,target:f,to:g,preventScrollReset:v,viewTransition:E,...T},C){let{basename:N}=W.useContext(vr),M=typeof g=="string"&&o0.test(g),P,z=!1;if(typeof g=="string"&&M&&(P=g,s0))try{let A=new URL(window.location.href),x=g.startsWith("//")?new URL(A.protocol+g):new URL(g),L=Oi(x.pathname,N);x.origin===A.origin&&L!=null?g=L+x.search+x.hash:z=!0}catch{zi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=l1(g,{relative:o}),[q,Y,se]=q1(i,T),re=tS(g,{replace:c,state:d,target:f,preventScrollReset:v,relative:o,viewTransition:E});function D(A){e&&e(A),A.defaultPrevented||re(A)}let S=W.createElement("a",{...T,...se,href:P||K,onClick:z||a?e:D,ref:Y1(C,Y),target:f,"data-discover":!M&&t==="render"?"true":void 0});return q&&!M?W.createElement(W.Fragment,null,S,W.createElement(K1,{page:K})):S});a0.displayName="Link";var J1=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:c,viewTransition:d,children:f,...g},v){let E=Nl(c,{relative:g.relative}),T=Ls(),C=W.useContext(nh),{navigator:N,basename:M}=W.useContext(vr),P=C!=null&&oS(E)&&d===!0,z=N.encodeLocation?N.encodeLocation(E).pathname:E.pathname,K=T.pathname,q=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;t||(K=K.toLowerCase(),q=q?q.toLowerCase():null,z=z.toLowerCase()),q&&M&&(q=Oi(q,M)||q);const Y=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let se=K===z||!o&&K.startsWith(z)&&K.charAt(Y)==="/",re=q!=null&&(q===z||!o&&q.startsWith(z)&&q.charAt(z.length)==="/"),D={isActive:se,isPending:re,isTransitioning:P},S=se?e:void 0,A;typeof i=="function"?A=i(D):A=[i,se?"active":null,re?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let x=typeof a=="function"?a(D):a;return W.createElement(a0,{...g,"aria-current":S,className:A,ref:v,style:x,to:c,viewTransition:d},typeof f=="function"?f(D):f)});J1.displayName="NavLink";var Z1=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:c=Ec,action:d,onSubmit:f,relative:g,preventScrollReset:v,viewTransition:E,...T},C)=>{let N=iS(),M=sS(d,{relative:g}),P=c.toLowerCase()==="get"?"get":"post",z=typeof d=="string"&&o0.test(d),K=q=>{if(f&&f(q),q.defaultPrevented)return;q.preventDefault();let Y=q.nativeEvent.submitter,se=(Y==null?void 0:Y.getAttribute("formmethod"))||c;N(Y||q.currentTarget,{fetcherKey:e,method:se,navigate:t,replace:o,state:a,relative:g,preventScrollReset:v,viewTransition:E})};return W.createElement("form",{ref:C,method:P,action:M,onSubmit:i?f:K,...T,"data-discover":!z&&n==="render"?"true":void 0})});Z1.displayName="Form";function eS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l0(n){let e=W.useContext(Ko);return _t(e,eS(n)),e}function tS(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:c}={}){let d=u1(),f=Ls(),g=Nl(n,{relative:a});return W.useCallback(v=>{if(b1(v,e)){v.preventDefault();let E=t!==void 0?t:dl(f)===dl(g);d(n,{replace:E,state:i,preventScrollReset:o,relative:a,viewTransition:c})}},[f,d,g,t,i,e,n,o,a,c])}var nS=0,rS=()=>`__${String(++nS)}__`;function iS(){let{router:n}=l0("useSubmit"),{basename:e}=W.useContext(vr),t=T1();return W.useCallback(async(i,o={})=>{let{action:a,method:c,encType:d,formData:f,body:g}=L1(i,e);if(o.navigate===!1){let v=o.fetcherKey||rS();await n.fetch(v,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:f,body:g,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:f,body:g,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function sS(n,{relative:e}={}){let{basename:t}=W.useContext(vr),i=W.useContext(Zn);_t(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Nl(n||".",{relative:e})},c=Ls();if(n==null){a.search=c.search;let d=new URLSearchParams(a.search),f=d.getAll("index");if(f.some(v=>v==="")){d.delete("index"),f.filter(E=>E).forEach(E=>d.append("index",E));let v=d.toString();a.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Wr([t,a.pathname])),dl(a)}function oS(n,e={}){let t=W.useContext(t0);_t(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=l0("useViewTransitionState"),o=Nl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=Oi(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Oi(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Oc(o.pathname,c)!=null||Oc(o.pathname,a)!=null}new TextEncoder;var mf={exports:{}},gf={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function aS(){if(s_)return gf;s_=1;var n=th();function e(f,g){return f===g&&(f!==0||1/f===1/g)||f!==f&&g!==g}var t=typeof Object.is=="function"?Object.is:e,i=n.useSyncExternalStore,o=n.useRef,a=n.useEffect,c=n.useMemo,d=n.useDebugValue;return gf.useSyncExternalStoreWithSelector=function(f,g,v,E,T){var C=o(null);if(C.current===null){var N={hasValue:!1,value:null};C.current=N}else N=C.current;C=c(function(){function P(se){if(!z){if(z=!0,K=se,se=E(se),T!==void 0&&N.hasValue){var re=N.value;if(T(re,se))return q=re}return q=se}if(re=q,t(K,se))return re;var D=E(se);return T!==void 0&&T(re,D)?re:(K=se,q=D)}var z=!1,K,q,Y=v===void 0?null:v;return[function(){return P(g())},Y===null?void 0:function(){return P(Y())}]},[g,v,E,T]);var M=i(f,C[0],C[1]);return a(function(){N.hasValue=!0,N.value=M},[M]),d(M),M},gf}var o_;function lS(){return o_||(o_=1,mf.exports=aS()),mf.exports}var uS=lS(),mn="default"in Jy?Gv:Jy,a_=Symbol.for("react-redux-context"),l_=typeof globalThis<"u"?globalThis:{};function cS(){if(!mn.createContext)return{};const n=l_[a_]??(l_[a_]=new Map);let e=n.get(mn.createContext);return e||(e=mn.createContext(null),n.set(mn.createContext,e)),e}var Li=cS(),hS=()=>{throw new Error("uSES not initialized!")};function Cp(n=Li){return function(){return mn.useContext(n)}}var u0=Cp(),c0=hS,dS=n=>{c0=n},fS=(n,e)=>n===e;function pS(n=Li){const e=n===Li?u0:Cp(n),t=(i,o={})=>{const{equalityFn:a=fS,devModeChecks:c={}}=typeof o=="function"?{equalityFn:o}:o,{store:d,subscription:f,getServerState:g,stabilityCheck:v,identityFunctionCheck:E}=e();mn.useRef(!0);const T=mn.useCallback({[i.name](N){return i(N)}}[i.name],[i,v,c.stabilityCheck]),C=c0(f.addNestedSub,d.getState,g||d.getState,T,a);return mn.useDebugValue(C),C};return Object.assign(t,{withTypes:()=>t}),t}var mS=pS();function gS(n){n()}function yS(){let n=null,e=null;return{clear(){n=null,e=null},notify(){gS(()=>{let t=n;for(;t;)t.callback(),t=t.next})},get(){const t=[];let i=n;for(;i;)t.push(i),i=i.next;return t},subscribe(t){let i=!0;const o=e={callback:t,next:null,prev:e};return o.prev?o.prev.next=o:n=o,function(){!i||n===null||(i=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}var u_={notify(){},get:()=>[]};function _S(n,e){let t,i=u_,o=0,a=!1;function c(M){v();const P=i.subscribe(M);let z=!1;return()=>{z||(z=!0,P(),E())}}function d(){i.notify()}function f(){N.onStateChange&&N.onStateChange()}function g(){return a}function v(){o++,t||(t=n.subscribe(f),i=yS())}function E(){o--,t&&o===0&&(t(),t=void 0,i.clear(),i=u_)}function T(){a||(a=!0,v())}function C(){a&&(a=!1,E())}const N={addNestedSub:c,notifyNestedSubs:d,handleChangeWrapper:f,isSubscribed:g,trySubscribe:T,tryUnsubscribe:C,getListeners:()=>i};return N}var vS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wS=vS?mn.useLayoutEffect:mn.useEffect;function ES({store:n,context:e,children:t,serverState:i,stabilityCheck:o="once",identityFunctionCheck:a="once"}){const c=mn.useMemo(()=>{const g=_S(n);return{store:n,subscription:g,getServerState:i?()=>i:void 0,stabilityCheck:o,identityFunctionCheck:a}},[n,i,o,a]),d=mn.useMemo(()=>n.getState(),[n]);wS(()=>{const{subscription:g}=c;return g.onStateChange=g.notifyNestedSubs,g.trySubscribe(),d!==n.getState()&&g.notifyNestedSubs(),()=>{g.tryUnsubscribe(),g.onStateChange=void 0}},[c,d]);const f=e||Li;return mn.createElement(f.Provider,{value:c},t)}var TS=ES;function h0(n=Li){const e=n===Li?u0:Cp(n),t=()=>{const{store:i}=e();return i};return Object.assign(t,{withTypes:()=>t}),t}var IS=h0();function SS(n=Li){const e=n===Li?IS:h0(n),t=()=>e().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var RS=SS();dS(uS.useSyncExternalStoreWithSelector);let AS={data:""},CS=n=>typeof window=="object"?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||AS,PS=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,kS=/\/\*[^]*?\*\/|  +/g,c_=/\n+/g,Ai=(n,e)=>{let t="",i="",o="";for(let a in n){let c=n[a];a[0]=="@"?a[1]=="i"?t=a+" "+c+";":i+=a[1]=="f"?Ai(c,a):a+"{"+Ai(c,a[1]=="k"?"":e)+"}":typeof c=="object"?i+=Ai(c,e?e.replace(/([^,])+/g,d=>a.replace(/(^:.*)|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,d):d?d+" "+f:f)):a):c!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Ai.p?Ai.p(a,c):a+":"+c+";")}return t+(e&&o?e+"{"+o+"}":o)+i},Ur={},d0=n=>{if(typeof n=="object"){let e="";for(let t in n)e+=t+d0(n[t]);return e}return n},NS=(n,e,t,i,o)=>{let a=d0(n),c=Ur[a]||(Ur[a]=(f=>{let g=0,v=11;for(;g<f.length;)v=101*v+f.charCodeAt(g++)>>>0;return"go"+v})(a));if(!Ur[c]){let f=a!==n?n:(g=>{let v,E,T=[{}];for(;v=PS.exec(g.replace(kS,""));)v[4]?T.shift():v[3]?(E=v[3].replace(c_," ").trim(),T.unshift(T[0][E]=T[0][E]||{})):T[0][v[1]]=v[2].replace(c_," ").trim();return T[0]})(n);Ur[c]=Ai(o?{["@keyframes "+c]:f}:f,t?"":"."+c)}let d=t&&Ur.g?Ur.g:null;return t&&(Ur.g=Ur[c]),((f,g,v,E)=>{E?g.data=g.data.replace(E,f):g.data.indexOf(f)===-1&&(g.data=v?f+g.data:g.data+f)})(Ur[c],e,i,d),c},DS=(n,e,t)=>n.reduce((i,o,a)=>{let c=e[a];if(c&&c.call){let d=c(t),f=d&&d.props&&d.props.className||/^go/.test(d)&&d;c=f?"."+f:d&&typeof d=="object"?d.props?"":Ai(d,""):d===!1?"":d}return i+o+(c??"")},"");function sh(n){let e=this||{},t=n.call?n(e.p):n;return NS(t.unshift?t.raw?DS(t,[].slice.call(arguments,1),e.p):t.reduce((i,o)=>Object.assign(i,o&&o.call?o(e.p):o),{}):t,CS(e.target),e.g,e.o,e.k)}let f0,zf,Bf;sh.bind({g:1});let Gr=sh.bind({k:1});function bS(n,e,t,i){Ai.p=e,f0=n,zf=t,Bf=i}function Bi(n,e){let t=this||{};return function(){let i=arguments;function o(a,c){let d=Object.assign({},a),f=d.className||o.className;t.p=Object.assign({theme:zf&&zf()},d),t.o=/ *go\d+/.test(f),d.className=sh.apply(t,i)+(f?" "+f:"");let g=n;return n[0]&&(g=d.as||n,delete d.as),Bf&&g[0]&&Bf(d),f0(g,d)}return o}}var xS=n=>typeof n=="function",$f=(n,e)=>xS(n)?n(e):n,OS=(()=>{let n=0;return()=>(++n).toString()})(),LS=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),VS=20,Ic=new Map,MS=1e3,h_=n=>{if(Ic.has(n))return;let e=setTimeout(()=>{Ic.delete(n),oh({type:4,toastId:n})},MS);Ic.set(n,e)},US=n=>{let e=Ic.get(n);e&&clearTimeout(e)},Wf=(n,e)=>{switch(e.type){case 0:return{...n,toasts:[e.toast,...n.toasts].slice(0,VS)};case 1:return e.toast.id&&US(e.toast.id),{...n,toasts:n.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:t}=e;return n.toasts.find(a=>a.id===t.id)?Wf(n,{type:1,toast:t}):Wf(n,{type:0,toast:t});case 3:let{toastId:i}=e;return i?h_(i):n.toasts.forEach(a=>{h_(a.id)}),{...n,toasts:n.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...n,pausedAt:e.time};case 6:let o=e.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},FS=[],yf={toasts:[],pausedAt:void 0},oh=n=>{yf=Wf(yf,n),FS.forEach(e=>{e(yf)})},jS=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||OS()}),Dl=n=>(e,t)=>{let i=jS(e,n,t);return oh({type:2,toast:i}),i.id},Gn=(n,e)=>Dl("blank")(n,e);Gn.error=Dl("error");Gn.success=Dl("success");Gn.loading=Dl("loading");Gn.custom=Dl("custom");Gn.dismiss=n=>{oh({type:3,toastId:n})};Gn.remove=n=>oh({type:4,toastId:n});Gn.promise=(n,e,t)=>{let i=Gn.loading(e.loading,{...t,...t==null?void 0:t.loading});return n.then(o=>(Gn.success($f(e.success,o),{id:i,...t,...t==null?void 0:t.success}),o)).catch(o=>{Gn.error($f(e.error,o),{id:i,...t,...t==null?void 0:t.error})}),n};var zS=Gr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,BS=Gr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$S=Gr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,WS=Bi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zS} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${BS} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${$S} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,HS=Gr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,p0=Bi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${HS} 1s linear infinite;
`,qS=Gr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,KS=Gr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,GS=Bi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qS} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${KS} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,QS=Bi("div")`
  position: absolute;
`,YS=Bi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,XS=Gr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,JS=Bi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${XS} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ZS=({toast:n})=>{let{icon:e,type:t,iconTheme:i}=n;return e!==void 0?typeof e=="string"?W.createElement(JS,null,e):e:t==="blank"?null:W.createElement(YS,null,W.createElement(p0,{...i}),t!=="loading"&&W.createElement(QS,null,t==="error"?W.createElement(WS,{...i}):W.createElement(GS,{...i})))},eR=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,tR=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,nR="0%{opacity:0;} 100%{opacity:1;}",rR="0%{opacity:1;} 100%{opacity:0;}",iR=Bi("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,sR=Bi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,oR=(n,e)=>{let t=n.includes("top")?1:-1,[i,o]=LS()?[nR,rR]:[eR(t),tR(t)];return{animation:e?`${Gr(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Gr(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};W.memo(({toast:n,position:e,style:t,children:i})=>{let o=n.height?oR(n.position||e||"top-center",n.visible):{opacity:0},a=W.createElement(ZS,{toast:n}),c=W.createElement(sR,{...n.ariaProps},$f(n.message,n));return W.createElement(iR,{className:n.className,style:{...o,...t,...n.style}},typeof i=="function"?i({icon:a,message:c}):W.createElement(W.Fragment,null,a,c))});bS(W.createElement);sh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var fl=Gn,d_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=function(n,e){if(!n)throw lR(e)},lR=function(n){return new Error("Firebase Database ("+m0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},uR=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[t++];e[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=n[t++],c=n[t++],d=n[t++],f=((o&7)<<18|(a&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(f>>10)),e[i++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|c&63)}}return e.join("")},y0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const a=n[o],c=o+1<n.length,d=c?n[o+1]:0,f=o+2<n.length,g=f?n[o+2]:0,v=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|g>>6,C=g&63;f||(C=64,c||(T=64)),i.push(t[v],t[E],t[T],t[C])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(g0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):uR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const a=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const g=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,a==null||d==null||g==null||E==null)throw new cR;const T=a<<2|d>>4;if(i.push(T),g!==64){const C=d<<4&240|g>>2;if(i.push(C),E!==64){const N=g<<6&192|E;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class cR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hR=function(n){const e=g0(n);return y0.encodeByteArray(e,!0)},Lc=function(n){return hR(n).replace(/\./g,"")},Vc=function(n){try{return y0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(n){return _0(void 0,n)}function _0(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!dR(t)||(n[t]=_0(n[t],e[t]));return n}function dR(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=()=>fR().__FIREBASE_DEFAULTS__,mR=()=>{if(typeof process>"u"||typeof d_>"u")return;const n=d_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vc(n[1]);return e&&JSON.parse(e)},ah=()=>{try{return pR()||mR()||gR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},v0=n=>{var e,t;return(t=(e=ah())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},w0=n=>{const e=v0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},E0=()=>{var n;return(n=ah())===null||n===void 0?void 0:n.config},T0=n=>{var e;return(e=ah())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Lc(JSON.stringify(t)),Lc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _R(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function vR(){var n;const e=(n=ah())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ER(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TR(){const n=Wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jx(){return m0.NODE_ADMIN===!0}function IR(){return!vR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function SR(){try{return typeof indexedDB=="object"}catch{return!1}}function RR(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="FirebaseError";class wr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=AR,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bl.prototype.create)}}class bl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,a=this.errors[e],c=a?CR(a,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new wr(o,d,i)}}function CR(n,e){return n.replace(PR,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const PR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n){return JSON.parse(n)}function Zx(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=function(n){let e={},t={},i={},o="";try{const a=n.split(".");e=f_(Vc(a[0])||""),t=f_(Vc(a[1])||""),o=a[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:o}},eO=function(n){const e=S0(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},tO=function(n){const e=S0(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function rO(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function kR(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function iO(n,e,t){const i={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=e.call(t,n[o],o,n));return i}function Mc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const a=n[o],c=e[o];if(p_(a)&&p_(c)){if(!Mc(a,c))return!1}else if(a!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function p_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,a]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function el(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)i[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)i[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const T=i[E-3]^i[E-8]^i[E-14]^i[E-16];i[E]=(T<<1|T>>>31)&4294967295}let o=this.chain_[0],a=this.chain_[1],c=this.chain_[2],d=this.chain_[3],f=this.chain_[4],g,v;for(let E=0;E<80;E++){E<40?E<20?(g=d^a&(c^d),v=1518500249):(g=a^c^d,v=1859775393):E<60?(g=a&c|d&(a|c),v=2400959708):(g=a^c^d,v=3395469782);const T=(o<<5|o>>>27)+g+f+v+i[E]&4294967295;f=d,d=c,c=(a<<30|a>>>2)&4294967295,a=o,o=T}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let o=0;const a=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=i;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(a[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(a),c=0;break}}else for(;o<t;)if(a[c]=e[o],++c,++o,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let a=24;a>=0;a-=8)e[i]=this.chain_[o]>>a&255,++i;return e}}function NR(n,e){const t=new DR(n,e);return t.subscribe.bind(t)}class DR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");bR(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=_f),o.error===void 0&&(o.error=_f),o.complete===void 0&&(o.complete=_f);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _f(){}function oO(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);if(o>=55296&&o<=56319){const a=o-55296;i++,aR(i<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(i)-56320;o=65536+(a<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},lO=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n){return n&&n._delegate?n._delegate:n}class Vi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new yR;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LR(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:o});i.resolve(a)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[a,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),a=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;a.add(e),this.onInitCallbacks.set(o,a);const c=this.instances.get(o);return c&&e(c,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:OR(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OR(n){return n===Es?void 0:n}function LR(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const MR={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},UR=ke.INFO,FR={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},jR=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=FR[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pp{constructor(e){this.name=e,this._logLevel=UR,this._logHandler=jR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const zR=(n,e)=>e.some(t=>n instanceof t);let m_,g_;function BR(){return m_||(m_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $R(){return g_||(g_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R0=new WeakMap,Hf=new WeakMap,A0=new WeakMap,vf=new WeakMap,kp=new WeakMap;function WR(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Di(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&R0.set(t,n)}).catch(()=>{}),kp.set(e,n),e}function HR(n){if(Hf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Hf.set(n,e)}let qf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||A0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Di(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qR(n){qf=n(qf)}function KR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(wf(this),e,...t);return A0.set(i,e.sort?e.sort():[e]),Di(i)}:$R().includes(n)?function(...e){return n.apply(wf(this),e),Di(R0.get(this))}:function(...e){return Di(n.apply(wf(this),e))}}function GR(n){return typeof n=="function"?KR(n):(n instanceof IDBTransaction&&HR(n),zR(n,BR())?new Proxy(n,qf):n)}function Di(n){if(n instanceof IDBRequest)return WR(n);if(vf.has(n))return vf.get(n);const e=GR(n);return e!==n&&(vf.set(n,e),kp.set(e,n)),e}const wf=n=>kp.get(n);function QR(n,e,{blocked:t,upgrade:i,blocking:o,terminated:a}={}){const c=indexedDB.open(n,e),d=Di(c);return i&&c.addEventListener("upgradeneeded",f=>{i(Di(c.result),f.oldVersion,f.newVersion,Di(c.transaction),f)}),t&&c.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const YR=["get","getKey","getAll","getAllKeys","count"],XR=["put","add","delete","clear"],Ef=new Map;function y_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ef.get(e))return Ef.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=XR.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||YR.includes(t)))return;const a=async function(c,...d){const f=this.transaction(c,o?"readwrite":"readonly");let g=f.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),o&&f.done]))[0]};return Ef.set(e,a),a}qR(n=>({...n,get:(e,t,i)=>y_(e,t)||n.get(e,t,i),has:(e,t)=>!!y_(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ZR(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ZR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kf="@firebase/app",__="0.10.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Pp("@firebase/app"),eA="@firebase/app-compat",tA="@firebase/analytics-compat",nA="@firebase/analytics",rA="@firebase/app-check-compat",iA="@firebase/app-check",sA="@firebase/auth",oA="@firebase/auth-compat",aA="@firebase/database",lA="@firebase/database-compat",uA="@firebase/functions",cA="@firebase/functions-compat",hA="@firebase/installations",dA="@firebase/installations-compat",fA="@firebase/messaging",pA="@firebase/messaging-compat",mA="@firebase/performance",gA="@firebase/performance-compat",yA="@firebase/remote-config",_A="@firebase/remote-config-compat",vA="@firebase/storage",wA="@firebase/storage-compat",EA="@firebase/firestore",TA="@firebase/vertexai-preview",IA="@firebase/firestore-compat",SA="firebase",RA="10.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="[DEFAULT]",AA={[Kf]:"fire-core",[eA]:"fire-core-compat",[nA]:"fire-analytics",[tA]:"fire-analytics-compat",[iA]:"fire-app-check",[rA]:"fire-app-check-compat",[sA]:"fire-auth",[oA]:"fire-auth-compat",[aA]:"fire-rtdb",[lA]:"fire-rtdb-compat",[uA]:"fire-fn",[cA]:"fire-fn-compat",[hA]:"fire-iid",[dA]:"fire-iid-compat",[fA]:"fire-fcm",[pA]:"fire-fcm-compat",[mA]:"fire-perf",[gA]:"fire-perf-compat",[yA]:"fire-rc",[_A]:"fire-rc-compat",[vA]:"fire-gcs",[wA]:"fire-gcs-compat",[EA]:"fire-fst",[IA]:"fire-fst-compat",[TA]:"fire-vertex","fire-js":"fire-js",[SA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new Map,CA=new Map,Qf=new Map;function v_(n,e){try{n.container.addComponent(e)}catch(t){Qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cs(n){const e=n.name;if(Qf.has(e))return Qr.debug(`There were multiple attempts to register component ${e}.`),!1;Qf.set(e,n);for(const t of Uc.values())v_(t,n);for(const t of CA.values())v_(t,n);return!0}function lh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bi=new bl("app","Firebase",PA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=RA;function C0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Gf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw bi.create("bad-app-name",{appName:String(o)});if(t||(t=E0()),!t)throw bi.create("no-options");const a=Uc.get(o);if(a){if(Mc(t,a.options)&&Mc(i,a.config))return a;throw bi.create("duplicate-app",{appName:o})}const c=new VR(o);for(const f of Qf.values())c.addComponent(f);const d=new kA(t,i,c);return Uc.set(o,d),d}function Np(n=Gf){const e=Uc.get(n);if(!e&&n===Gf&&E0())return C0();if(!e)throw bi.create("no-app",{appName:n});return e}function fr(n,e,t){var i;let o=(i=AA[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const a=o.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qr.warn(d.join(" "));return}Cs(new Vi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="firebase-heartbeat-database",DA=1,pl="firebase-heartbeat-store";let Tf=null;function P0(){return Tf||(Tf=QR(NA,DA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pl)}catch(t){console.warn(t)}}}}).catch(n=>{throw bi.create("idb-open",{originalErrorMessage:n.message})})),Tf}async function bA(n){try{const t=(await P0()).transaction(pl),i=await t.objectStore(pl).get(k0(n));return await t.done,i}catch(e){if(e instanceof wr)Qr.warn(e.message);else{const t=bi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qr.warn(t.message)}}}async function w_(n,e){try{const i=(await P0()).transaction(pl,"readwrite");await i.objectStore(pl).put(e,k0(n)),await i.done}catch(t){if(t instanceof wr)Qr.warn(t.message);else{const i=bi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qr.warn(i.message)}}}function k0(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=1024,OA=30*24*60*60*1e3;class LA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new MA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t,i;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=E_();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=OA}),this._storage.overwrite(this._heartbeatsCache))}catch(o){Qr.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=E_(),{heartbeatsToSend:i,unsentEntries:o}=VA(this._heartbeatsCache.heartbeats),a=Lc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Qr.warn(t),""}}}function E_(){return new Date().toISOString().substring(0,10)}function VA(n,e=xA){const t=[];let i=n.slice();for(const o of n){const a=t.find(c=>c.agent===o.agent);if(a){if(a.dates.push(o.date),T_(t)>e){a.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),T_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class MA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SR()?RR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return w_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return w_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function T_(n){return Lc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(n){Cs(new Vi("platform-logger",e=>new JR(e),"PRIVATE")),Cs(new Vi("heartbeat",e=>new LA(e),"PRIVATE")),fr(Kf,__,n),fr(Kf,__,"esm2017"),fr("fire-js","")}UA("");var I_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rs,N0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function A(){}A.prototype=S.prototype,D.D=S.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(x,L,U){for(var k=Array(arguments.length-2),it=2;it<arguments.length;it++)k[it-2]=arguments[it];return S.prototype[L].apply(x,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,S,A){A||(A=0);var x=Array(16);if(typeof S=="string")for(var L=0;16>L;++L)x[L]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(L=0;16>L;++L)x[L]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=D.g[0],A=D.g[1],L=D.g[2];var U=D.g[3],k=S+(U^A&(L^U))+x[0]+3614090360&4294967295;S=A+(k<<7&4294967295|k>>>25),k=U+(L^S&(A^L))+x[1]+3905402710&4294967295,U=S+(k<<12&4294967295|k>>>20),k=L+(A^U&(S^A))+x[2]+606105819&4294967295,L=U+(k<<17&4294967295|k>>>15),k=A+(S^L&(U^S))+x[3]+3250441966&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(U^A&(L^U))+x[4]+4118548399&4294967295,S=A+(k<<7&4294967295|k>>>25),k=U+(L^S&(A^L))+x[5]+1200080426&4294967295,U=S+(k<<12&4294967295|k>>>20),k=L+(A^U&(S^A))+x[6]+2821735955&4294967295,L=U+(k<<17&4294967295|k>>>15),k=A+(S^L&(U^S))+x[7]+4249261313&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(U^A&(L^U))+x[8]+1770035416&4294967295,S=A+(k<<7&4294967295|k>>>25),k=U+(L^S&(A^L))+x[9]+2336552879&4294967295,U=S+(k<<12&4294967295|k>>>20),k=L+(A^U&(S^A))+x[10]+4294925233&4294967295,L=U+(k<<17&4294967295|k>>>15),k=A+(S^L&(U^S))+x[11]+2304563134&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(U^A&(L^U))+x[12]+1804603682&4294967295,S=A+(k<<7&4294967295|k>>>25),k=U+(L^S&(A^L))+x[13]+4254626195&4294967295,U=S+(k<<12&4294967295|k>>>20),k=L+(A^U&(S^A))+x[14]+2792965006&4294967295,L=U+(k<<17&4294967295|k>>>15),k=A+(S^L&(U^S))+x[15]+1236535329&4294967295,A=L+(k<<22&4294967295|k>>>10),k=S+(L^U&(A^L))+x[1]+4129170786&4294967295,S=A+(k<<5&4294967295|k>>>27),k=U+(A^L&(S^A))+x[6]+3225465664&4294967295,U=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(U^S))+x[11]+643717713&4294967295,L=U+(k<<14&4294967295|k>>>18),k=A+(U^S&(L^U))+x[0]+3921069994&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(L^U&(A^L))+x[5]+3593408605&4294967295,S=A+(k<<5&4294967295|k>>>27),k=U+(A^L&(S^A))+x[10]+38016083&4294967295,U=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(U^S))+x[15]+3634488961&4294967295,L=U+(k<<14&4294967295|k>>>18),k=A+(U^S&(L^U))+x[4]+3889429448&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(L^U&(A^L))+x[9]+568446438&4294967295,S=A+(k<<5&4294967295|k>>>27),k=U+(A^L&(S^A))+x[14]+3275163606&4294967295,U=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(U^S))+x[3]+4107603335&4294967295,L=U+(k<<14&4294967295|k>>>18),k=A+(U^S&(L^U))+x[8]+1163531501&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(L^U&(A^L))+x[13]+2850285829&4294967295,S=A+(k<<5&4294967295|k>>>27),k=U+(A^L&(S^A))+x[2]+4243563512&4294967295,U=S+(k<<9&4294967295|k>>>23),k=L+(S^A&(U^S))+x[7]+1735328473&4294967295,L=U+(k<<14&4294967295|k>>>18),k=A+(U^S&(L^U))+x[12]+2368359562&4294967295,A=L+(k<<20&4294967295|k>>>12),k=S+(A^L^U)+x[5]+4294588738&4294967295,S=A+(k<<4&4294967295|k>>>28),k=U+(S^A^L)+x[8]+2272392833&4294967295,U=S+(k<<11&4294967295|k>>>21),k=L+(U^S^A)+x[11]+1839030562&4294967295,L=U+(k<<16&4294967295|k>>>16),k=A+(L^U^S)+x[14]+4259657740&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(A^L^U)+x[1]+2763975236&4294967295,S=A+(k<<4&4294967295|k>>>28),k=U+(S^A^L)+x[4]+1272893353&4294967295,U=S+(k<<11&4294967295|k>>>21),k=L+(U^S^A)+x[7]+4139469664&4294967295,L=U+(k<<16&4294967295|k>>>16),k=A+(L^U^S)+x[10]+3200236656&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(A^L^U)+x[13]+681279174&4294967295,S=A+(k<<4&4294967295|k>>>28),k=U+(S^A^L)+x[0]+3936430074&4294967295,U=S+(k<<11&4294967295|k>>>21),k=L+(U^S^A)+x[3]+3572445317&4294967295,L=U+(k<<16&4294967295|k>>>16),k=A+(L^U^S)+x[6]+76029189&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(A^L^U)+x[9]+3654602809&4294967295,S=A+(k<<4&4294967295|k>>>28),k=U+(S^A^L)+x[12]+3873151461&4294967295,U=S+(k<<11&4294967295|k>>>21),k=L+(U^S^A)+x[15]+530742520&4294967295,L=U+(k<<16&4294967295|k>>>16),k=A+(L^U^S)+x[2]+3299628645&4294967295,A=L+(k<<23&4294967295|k>>>9),k=S+(L^(A|~U))+x[0]+4096336452&4294967295,S=A+(k<<6&4294967295|k>>>26),k=U+(A^(S|~L))+x[7]+1126891415&4294967295,U=S+(k<<10&4294967295|k>>>22),k=L+(S^(U|~A))+x[14]+2878612391&4294967295,L=U+(k<<15&4294967295|k>>>17),k=A+(U^(L|~S))+x[5]+4237533241&4294967295,A=L+(k<<21&4294967295|k>>>11),k=S+(L^(A|~U))+x[12]+1700485571&4294967295,S=A+(k<<6&4294967295|k>>>26),k=U+(A^(S|~L))+x[3]+2399980690&4294967295,U=S+(k<<10&4294967295|k>>>22),k=L+(S^(U|~A))+x[10]+4293915773&4294967295,L=U+(k<<15&4294967295|k>>>17),k=A+(U^(L|~S))+x[1]+2240044497&4294967295,A=L+(k<<21&4294967295|k>>>11),k=S+(L^(A|~U))+x[8]+1873313359&4294967295,S=A+(k<<6&4294967295|k>>>26),k=U+(A^(S|~L))+x[15]+4264355552&4294967295,U=S+(k<<10&4294967295|k>>>22),k=L+(S^(U|~A))+x[6]+2734768916&4294967295,L=U+(k<<15&4294967295|k>>>17),k=A+(U^(L|~S))+x[13]+1309151649&4294967295,A=L+(k<<21&4294967295|k>>>11),k=S+(L^(A|~U))+x[4]+4149444226&4294967295,S=A+(k<<6&4294967295|k>>>26),k=U+(A^(S|~L))+x[11]+3174756917&4294967295,U=S+(k<<10&4294967295|k>>>22),k=L+(S^(U|~A))+x[2]+718787259&4294967295,L=U+(k<<15&4294967295|k>>>17),k=A+(U^(L|~S))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(L+(k<<21&4294967295|k>>>11))&4294967295,D.g[2]=D.g[2]+L&4294967295,D.g[3]=D.g[3]+U&4294967295}i.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var A=S-this.blockSize,x=this.B,L=this.h,U=0;U<S;){if(L==0)for(;U<=A;)o(this,D,U),U+=this.blockSize;if(typeof D=="string"){for(;U<S;)if(x[L++]=D.charCodeAt(U++),L==this.blockSize){o(this,x),L=0;break}}else for(;U<S;)if(x[L++]=D[U++],L==this.blockSize){o(this,x),L=0;break}}this.h=L,this.o+=S},i.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var A=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=A&255,A/=256;for(this.u(D),D=Array(16),S=A=0;4>S;++S)for(var x=0;32>x;x+=8)D[A++]=this.g[S]>>>x&255;return D};function a(D,S){var A=d;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=S(D)}function c(D,S){this.h=S;for(var A=[],x=!0,L=D.length-1;0<=L;L--){var U=D[L]|0;x&&U==S||(A[L]=U,x=!1)}this.g=A}var d={};function f(D){return-128<=D&&128>D?a(D,function(S){return new c([S|0],0>S?-1:0)}):new c([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return E;if(0>D)return P(g(-D));for(var S=[],A=1,x=0;D>=A;x++)S[x]=D/A|0,A*=4294967296;return new c(S,0)}function v(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return P(v(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=g(Math.pow(S,8)),x=E,L=0;L<D.length;L+=8){var U=Math.min(8,D.length-L),k=parseInt(D.substring(L,L+U),S);8>U?(U=g(Math.pow(S,U)),x=x.j(U).add(g(k))):(x=x.j(A),x=x.add(g(k)))}return x}var E=f(0),T=f(1),C=f(16777216);n=c.prototype,n.m=function(){if(M(this))return-P(this).m();for(var D=0,S=1,A=0;A<this.g.length;A++){var x=this.i(A);D+=(0<=x?x:4294967296+x)*S,S*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(N(this))return"0";if(M(this))return"-"+P(this).toString(D);for(var S=g(Math.pow(D,6)),A=this,x="";;){var L=Y(A,S).g;A=z(A,L.j(S));var U=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=L,N(A))return U+x;for(;6>U.length;)U="0"+U;x=U+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function N(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function M(D){return D.h==-1}n.l=function(D){return D=z(this,D),M(D)?-1:N(D)?0:1};function P(D){for(var S=D.g.length,A=[],x=0;x<S;x++)A[x]=~D.g[x];return new c(A,~D.h).add(T)}n.abs=function(){return M(this)?P(this):this},n.add=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],x=0,L=0;L<=S;L++){var U=x+(this.i(L)&65535)+(D.i(L)&65535),k=(U>>>16)+(this.i(L)>>>16)+(D.i(L)>>>16);x=k>>>16,U&=65535,k&=65535,A[L]=k<<16|U}return new c(A,A[A.length-1]&-2147483648?-1:0)};function z(D,S){return D.add(P(S))}n.j=function(D){if(N(this)||N(D))return E;if(M(this))return M(D)?P(this).j(P(D)):P(P(this).j(D));if(M(D))return P(this.j(P(D)));if(0>this.l(C)&&0>D.l(C))return g(this.m()*D.m());for(var S=this.g.length+D.g.length,A=[],x=0;x<2*S;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(var L=0;L<D.g.length;L++){var U=this.i(x)>>>16,k=this.i(x)&65535,it=D.i(L)>>>16,Lt=D.i(L)&65535;A[2*x+2*L]+=k*Lt,K(A,2*x+2*L),A[2*x+2*L+1]+=U*Lt,K(A,2*x+2*L+1),A[2*x+2*L+1]+=k*it,K(A,2*x+2*L+1),A[2*x+2*L+2]+=U*it,K(A,2*x+2*L+2)}for(x=0;x<S;x++)A[x]=A[2*x+1]<<16|A[2*x];for(x=S;x<2*S;x++)A[x]=0;return new c(A,0)};function K(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function q(D,S){this.g=D,this.h=S}function Y(D,S){if(N(S))throw Error("division by zero");if(N(D))return new q(E,E);if(M(D))return S=Y(P(D),S),new q(P(S.g),P(S.h));if(M(S))return S=Y(D,P(S)),new q(P(S.g),S.h);if(30<D.g.length){if(M(D)||M(S))throw Error("slowDivide_ only works with positive integers.");for(var A=T,x=S;0>=x.l(D);)A=se(A),x=se(x);var L=re(A,1),U=re(x,1);for(x=re(x,2),A=re(A,2);!N(x);){var k=U.add(x);0>=k.l(D)&&(L=L.add(A),U=k),x=re(x,1),A=re(A,1)}return S=z(D,L.j(S)),new q(L,S)}for(L=E;0<=D.l(S);){for(A=Math.max(1,Math.floor(D.m()/S.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),U=g(A),k=U.j(S);M(k)||0<k.l(D);)A-=x,U=g(A),k=U.j(S);N(U)&&(U=T),L=L.add(U),D=z(D,k)}return new q(L,D)}n.A=function(D){return Y(this,D).h},n.and=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],x=0;x<S;x++)A[x]=this.i(x)&D.i(x);return new c(A,this.h&D.h)},n.or=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],x=0;x<S;x++)A[x]=this.i(x)|D.i(x);return new c(A,this.h|D.h)},n.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),A=[],x=0;x<S;x++)A[x]=this.i(x)^D.i(x);return new c(A,this.h^D.h)};function se(D){for(var S=D.g.length+1,A=[],x=0;x<S;x++)A[x]=D.i(x)<<1|D.i(x-1)>>>31;return new c(A,D.h)}function re(D,S){var A=S>>5;S%=32;for(var x=D.g.length-A,L=[],U=0;U<x;U++)L[U]=0<S?D.i(U+A)>>>S|D.i(U+A+1)<<32-S:D.i(U+A);return new c(L,D.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,N0=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Rs=c}).apply(typeof I_<"u"?I_:typeof self<"u"?self:typeof window<"u"?window:{});var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D0,b0,tl,x0,Sc,Yf,O0,L0,V0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof hc=="object"&&hc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var I=0;I<u.length-1;I++){var F=u[I];if(!(F in _))break e;_=_[F]}u=u[u.length-1],I=_[u],m=m(I),m!=I&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function a(u,m){u instanceof String&&(u+="");var _=0,I=!1,F={next:function(){if(!I&&_<u.length){var H=_++;return{value:m(H,u[H]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return a(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function f(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function g(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function E(u,m,_){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function T(u,m,_){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,T.apply(null,arguments)}function C(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var I=_.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function N(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(I,F,H){for(var ne=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ne[Ue-2]=arguments[Ue];return m.prototype[F].apply(I,ne)}}function M(u){const m=u.length;if(0<m){const _=Array(m);for(let I=0;I<m;I++)_[I]=u[I];return _}return[]}function P(u,m){for(let _=1;_<arguments.length;_++){const I=arguments[_];if(f(I)){const F=u.length||0,H=I.length||0;u.length=F+H;for(let ne=0;ne<H;ne++)u[F+ne]=I[ne]}else u.push(I)}}class z{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function K(u){return/^[\s\xa0]*$/.test(u)}function q(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function Y(u){return Y[" "](u),u}Y[" "]=function(){};var se=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function re(u,m,_){for(const I in u)m.call(_,u[I],I,u)}function D(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,m){let _,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(_ in I)u[_]=I[_];for(let H=0;H<A.length;H++)_=A[H],Object.prototype.hasOwnProperty.call(I,_)&&(u[_]=I[_])}}function L(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function U(u){d.setTimeout(()=>{throw u},0)}function k(){var u=ge;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class it{constructor(){this.h=this.g=null}add(m,_){const I=Lt.get();I.set(m,_),this.h?this.h.next=I:this.g=I,this.h=I}}var Lt=new z(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,ie=!1,ge=new it,ae=()=>{const u=d.Promise.resolve(void 0);Fe=()=>{u.then(V)}};var V=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(_){U(_)}var m=Lt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Re(u,m){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(se){e:{try{Y(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ne[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}N(Re,pe);var Ne={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(u,m,_,I,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!I,this.ha=F,this.key=++Me,this.da=this.fa=!1}function wt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Er(u){this.src=u,this.g={},this.h=0}Er.prototype.add=function(u,m,_,I,F){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var ne=ei(u,m,I,F);return-1<ne?(m=u[ne],_||(m.fa=!1)):(m=new Be(m,this.src,H,!!I,F),m.fa=_,u.push(m)),m};function Fs(u,m){var _=m.type;if(_ in u.g){var I=u.g[_],F=Array.prototype.indexOf.call(I,m,void 0),H;(H=0<=F)&&Array.prototype.splice.call(I,F,1),H&&(wt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ei(u,m,_,I){for(var F=0;F<u.length;++F){var H=u[F];if(!H.da&&H.listener==m&&H.capture==!!_&&H.ha==I)return F}return-1}var Ki="closure_lm_"+(1e6*Math.random()|0),js={};function ea(u,m,_,I,F){if(Array.isArray(m)){for(var H=0;H<m.length;H++)ea(u,m[H],_,I,F);return null}return _=ra(_),u&&u[Ve]?u.K(m,_,g(I)?!!I.capture:!!I,F):ta(u,m,_,!1,I,F)}function ta(u,m,_,I,F,H){if(!m)throw Error("Invalid event type");var ne=g(F)?!!F.capture:!!F,Ue=Bs(u);if(Ue||(u[Ki]=Ue=new Er(u)),_=Ue.add(m,_,I,ne,H),_.proxy)return _;if(I=Gl(),_.proxy=I,I.src=u,I.listener=_,u.addEventListener)Se||(F=ne),F===void 0&&(F=!1),u.addEventListener(m.toString(),I,F);else if(u.attachEvent)u.attachEvent(Ir(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Gl(){function u(_){return m.call(u.src,u.listener,_)}const m=na;return u}function zs(u,m,_,I,F){if(Array.isArray(m))for(var H=0;H<m.length;H++)zs(u,m[H],_,I,F);else I=g(I)?!!I.capture:!!I,_=ra(_),u&&u[Ve]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],_=ei(H,_,I,F),-1<_&&(wt(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=Bs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ei(m,_,I,F)),(_=-1<u?m[u]:null)&&Tr(_))}function Tr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ve])Fs(m.i,u);else{var _=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(_,I,u.capture):m.detachEvent?m.detachEvent(Ir(_),I):m.addListener&&m.removeListener&&m.removeListener(I),(_=Bs(m))?(Fs(_,u),_.h==0&&(_.src=null,m[Ki]=null)):wt(u)}}}function Ir(u){return u in js?js[u]:js[u]="on"+u}function na(u,m){if(u.da)u=!0;else{m=new Re(m,this);var _=u.listener,I=u.ha||u.src;u.fa&&Tr(u),u=_.call(I,m)}return u}function Bs(u){return u=u[Ki],u instanceof Er?u:null}var $s="__closure_events_fn_"+(1e9*Math.random()>>>0);function ra(u){return typeof u=="function"?u:(u[$s]||(u[$s]=function(m){return u.handleEvent(m)}),u[$s])}function ft(){G.call(this),this.i=new Er(this),this.M=this,this.F=null}N(ft,G),ft.prototype[Ve]=!0,ft.prototype.removeEventListener=function(u,m,_,I){zs(this,u,m,_,I)};function pt(u,m){var _,I=u.F;if(I)for(_=[];I;I=I.F)_.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new pe(m,u);else if(m instanceof pe)m.target=m.target||u;else{var F=m;m=new pe(I,u),x(m,F)}if(F=!0,_)for(var H=_.length-1;0<=H;H--){var ne=m.g=_[H];F=Sr(ne,I,!0,m)&&F}if(ne=m.g=u,F=Sr(ne,I,!0,m)&&F,F=Sr(ne,I,!1,m)&&F,_)for(H=0;H<_.length;H++)ne=m.g=_[H],F=Sr(ne,I,!1,m)&&F}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],I=0;I<_.length;I++)wt(_[I]);delete u.g[m],u.h--}}this.F=null},ft.prototype.K=function(u,m,_,I){return this.i.add(String(u),m,!1,_,I)},ft.prototype.L=function(u,m,_,I){return this.i.add(String(u),m,!0,_,I)};function Sr(u,m,_,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,H=0;H<m.length;++H){var ne=m[H];if(ne&&!ne.da&&ne.capture==_){var Ue=ne.listener,mt=ne.ha||ne.src;ne.fa&&Fs(u.i,ne),F=Ue.call(mt,I)!==!1&&F}}return F&&!I.defaultPrevented}function ia(u,m,_){if(typeof u=="function")_&&(u=T(u,_));else if(u&&typeof u.handleEvent=="function")u=T(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function ti(u){u.g=ia(()=>{u.g=null,u.i&&(u.i=!1,ti(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Gi extends G{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ti(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(u){G.call(this),this.h=u,this.g={}}N(Qi,G);var sa=[];function oa(u){re(u.g,function(m,_){this.g.hasOwnProperty(_)&&Tr(m)},u),u.g={}}Qi.prototype.N=function(){Qi.aa.N.call(this),oa(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var aa=d.JSON.stringify,la=d.JSON.parse,ua=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Yi(){}Yi.prototype.h=null;function Ws(u){return u.h||(u.h=u.i())}function Hs(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function er(){pe.call(this,"d")}N(er,pe);function qs(){pe.call(this,"c")}N(qs,pe);var tr={},ca=null;function Xi(){return ca=ca||new ft}tr.La="serverreachability";function ha(u){pe.call(this,tr.La,u)}N(ha,pe);function Rr(u){const m=Xi();pt(m,new ha(m))}tr.STAT_EVENT="statevent";function da(u,m){pe.call(this,tr.STAT_EVENT,u),this.stat=m}N(da,pe);function st(u){const m=Xi();pt(m,new da(m,u))}tr.Ma="timingevent";function Ks(u,m){pe.call(this,tr.Ma,u),this.size=m}N(Ks,pe);function Dn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Ji(){this.g=!0}Ji.prototype.xa=function(){this.g=!1};function Zi(u,m,_,I,F,H){u.info(function(){if(u.g)if(H)for(var ne="",Ue=H.split("&"),mt=0;mt<Ue.length;mt++){var De=Ue[mt].split("=");if(1<De.length){var Et=De[0];De=De[1];var ut=Et.split("_");ne=2<=ut.length&&ut[1]=="type"?ne+(Et+"="+De+"&"):ne+(Et+"=redacted&")}}else ne=null;else ne=H;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+m+`
`+_+`
`+ne})}function Gs(u,m,_,I,F,H,ne){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+m+`
`+_+`
`+H+" "+ne})}function bn(u,m,_,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Oh(u,_)+(I?" "+I:"")})}function fa(u,m){u.info(function(){return"TIMEOUT: "+m})}Ji.prototype.info=function(){};function Oh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var I=_[u];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var H=F[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ne=1;ne<F.length;ne++)F[ne]=""}}}}return aa(_)}catch{return m}}var Qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ql={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xn;function es(){}N(es,Yi),es.prototype.g=function(){return new XMLHttpRequest},es.prototype.i=function(){return{}},xn=new es;function On(u,m,_,I){this.j=u,this.i=m,this.l=_,this.R=I||1,this.U=new Qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yl}function Yl(){this.i=null,this.g="",this.h=!1}var pa={},Ys={};function Xs(u,m,_){u.L=1,u.v=oi(un(m)),u.m=_,u.P=!0,ma(u,null)}function ma(u,m){u.F=Date.now(),$e(u),u.A=un(u.v);var _=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),li(_.i,"t",I),u.C=0,_=u.j.J,u.h=new Yl,u.g=pu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Gi(T(u.Y,u,u.g),u.O)),m=u.U,_=u.g,I=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(sa[0]=F.toString()),F=sa);for(var H=0;H<F.length;H++){var ne=ea(_,F[H],I||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Rr(),Zi(u.i,u.u,u.A,u.l,u.R,u.m)}On.prototype.ca=function(u){u=u.target;const m=this.M;m&&Jt(u)==3?m.j():this.Y(u)},On.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Jt(this.g);var m=this.g.Ba();const In=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Ea(this.g)))){this.J||ut!=4||m==7||(m==8||0>=In?Rr(3):Rr(2)),ts(this);var _=this.g.Z();this.X=_;t:if(Xl(this)){var I=Ea(this.g);u="";var F=I.length,H=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),ni(this);var ne="";break t}this.h.i=new d.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!(H&&m==F-1)});I.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,Gs(this.i,this.u,this.A,this.l,this.R,ut,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,mt=this.g;if((Ue=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Ue)){var De=Ue;break t}}De=null}if(_=De)bn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ga(this,_);else{this.o=!1,this.s=3,st(12),En(this),ni(this);break e}}if(this.P){_=!0;let hn;for(;!this.J&&this.C<ne.length;)if(hn=Lh(this,ne),hn==Ys){ut==4&&(this.s=4,st(14),_=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==pa){this.s=4,st(15),bn(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else bn(this.i,this.l,hn,null),ga(this,hn);if(Xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||ne.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)bn(this.i,this.l,ne,"[Invalid Chunked Response]"),En(this),ni(this);else if(0<ne.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Ia(Et),Et.M=!0,st(11))}}else bn(this.i,this.l,ne,null),ga(this,ne);ut==4&&En(this),this.o&&!this.J&&(ut==4?lo(this.j,this):(this.o=!1,$e(this)))}else ro(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),En(this),ni(this)}}}catch{}finally{}};function Xl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Lh(u,m){var _=u.C,I=m.indexOf(`
`,_);return I==-1?Ys:(_=Number(m.substring(_,I)),isNaN(_)?pa:(I+=1,I+_>m.length?Ys:(m=m.slice(I,I+_),u.C=I+_,m)))}On.prototype.cancel=function(){this.J=!0,En(this)};function $e(u){u.S=Date.now()+u.I,Jl(u,u.I)}function Jl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Dn(T(u.ba,u),m)}function ts(u){u.B&&(d.clearTimeout(u.B),u.B=null)}On.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(fa(this.i,this.A),this.L!=2&&(Rr(),st(17)),En(this),this.s=2,ni(this)):Jl(this,this.S-u)};function ni(u){u.j.G==0||u.J||lo(u.j,u)}function En(u){ts(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,oa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ga(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Ht(_.h,u))){if(!u.K&&Ht(_.h,u)&&_.G==3){try{var I=_.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ao(_),Fn(_);else break e;oo(_),st(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=Dn(T(_.Za,_),6e3));if(1>=eu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else kr(_,11)}else if((u.K||_.g==u)&&ao(_),!K(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let De=F[m];if(_.T=De[0],De=De[1],_.G==2)if(De[0]=="c"){_.K=De[1],_.ia=De[2];const Et=De[3];Et!=null&&(_.la=Et,_.j.info("VER="+_.la));const ut=De[4];ut!=null&&(_.Aa=ut,_.j.info("SVER="+_.Aa));const In=De[5];In!=null&&typeof In=="number"&&0<In&&(I=1.5*In,_.L=I,_.j.info("backChannelRequestTimeoutMs_="+I)),I=_;const hn=u.g;if(hn){const ls=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ls){var H=I.h;H.g||ls.indexOf("spdy")==-1&&ls.indexOf("quic")==-1&&ls.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(ya(H,H.h),H.h=null))}if(I.D){const co=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;co&&(I.ya=co,je(I.I,I.D,co))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),I=_;var ne=u;if(I.qa=fu(I,I.J?I.ia:null,I.W),ne.K){tu(I.h,ne);var Ue=ne,mt=I.L;mt&&(Ue.I=mt),Ue.B&&(ts(Ue),$e(Ue)),I.g=ne}else as(I);0<_.i.length&&or(_)}else De[0]!="stop"&&De[0]!="close"||kr(_,7);else _.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?kr(_,7):Ct(_):De[0]!="noop"&&_.l&&_.l.ta(De),_.v=0)}}Rr(4)}catch{}}var Zl=class{constructor(u,m){this.g=u,this.map=m}};function ns(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function eu(u){return u.h?1:u.g?u.g.size:0}function Ht(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ya(u,m){u.g?u.g.add(m):u.h=m}function tu(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ns.prototype.cancel=function(){if(this.i=nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function nu(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return M(u.i)}function Js(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(f(u)){for(var m=[],_=u.length,I=0;I<_;I++)m.push(u[I]);return m}m=[],_=0;for(I in u)m[_++]=u[I];return m}function Zs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(f(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const I in u)m[_++]=I;return m}}}function ri(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(f(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Zs(u),I=Js(u),F=I.length,H=0;H<F;H++)m.call(void 0,I[H],_&&_[H],u)}var rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var I=u[_].indexOf("="),F=null;if(0<=I){var H=u[_].substring(0,I);F=u[_].substring(I+1)}else H=u[_];m(H,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ar(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ar){this.h=u.h,is(this,u.j),this.o=u.o,this.g=u.g,ii(this,u.s),this.l=u.l;var m=u.i,_=new nr;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),si(this,_),this.m=u.m}else u&&(m=String(u).match(rs))?(this.h=!1,is(this,m[1]||"",!0),this.o=Pe(m[2]||""),this.g=Pe(m[3]||"",!0),ii(this,m[4]),this.l=Pe(m[5]||"",!0),si(this,m[6]||"",!0),this.m=Pe(m[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Ar.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ai(m,eo,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ai(m,eo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ai(_,_.charAt(0)=="/"?su:iu,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ai(_,_a)),u.join("")};function un(u){return new Ar(u)}function is(u,m,_){u.j=_?Pe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ii(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function si(u,m,_){m instanceof nr?(u.i=m,rr(u.i,u.h)):(_||(m=ai(m,ou)),u.i=new nr(m,u.h))}function je(u,m,_){u.i.set(m,_)}function oi(u){return je(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Pe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ai(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,ru),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ru(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var eo=/[#\/\?@]/g,iu=/[#\?:]/g,su=/[#\?]/g,ou=/[#\?@]/g,_a=/#/g;function nr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&Vh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=nr.prototype,n.add=function(u,m){At(this),this.i=null,u=Tn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Ln(u,m){At(u),m=Tn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Vn(u,m){return At(u),m=Tn(u,m),u.g.has(m)}n.forEach=function(u,m){At(this),this.g.forEach(function(_,I){_.forEach(function(F){u.call(m,F,I,this)},this)},this)},n.na=function(){At(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let I=0;I<m.length;I++){const F=u[I];for(let H=0;H<F.length;H++)_.push(m[I])}return _},n.V=function(u){At(this);let m=[];if(typeof u=="string")Vn(this,u)&&(m=m.concat(this.g.get(Tn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return At(this),this.i=null,u=Tn(this,u),Vn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function li(u,m,_){Ln(u,m),0<_.length&&(u.i=null,u.g.set(Tn(u,m),M(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var I=m[_];const H=encodeURIComponent(String(I)),ne=this.V(I);for(I=0;I<ne.length;I++){var F=H;ne[I]!==""&&(F+="="+encodeURIComponent(String(ne[I]))),u.push(F)}}return this.i=u.join("&")};function Tn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function rr(u,m){m&&!u.j&&(At(u),u.i=null,u.g.forEach(function(_,I){var F=I.toLowerCase();I!=F&&(Ln(this,I),li(this,F,_))},u)),u.j=m}function Mh(u,m){const _=new Ji;if(d.Image){const I=new Image;I.onload=C(Xt,_,"TestLoadImage: loaded",!0,m,I),I.onerror=C(Xt,_,"TestLoadImage: error",!1,m,I),I.onabort=C(Xt,_,"TestLoadImage: abort",!1,m,I),I.ontimeout=C(Xt,_,"TestLoadImage: timeout",!1,m,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function au(u,m){const _=new Ji,I=new AbortController,F=setTimeout(()=>{I.abort(),Xt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then(H=>{clearTimeout(F),H.ok?Xt(_,"TestPingServer: ok",!0,m):Xt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Xt(_,"TestPingServer: error",!1,m)})}function Xt(u,m,_,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(_)}catch{}}function Uh(){this.g=new ua}function lu(u,m,_){const I=_||"";try{ri(u,function(F,H){let ne=F;g(F)&&(ne=aa(F)),m.push(I+H+"="+encodeURIComponent(ne))})}catch(F){throw m.push(I+"type="+encodeURIComponent("_badmap")),F}}function ir(u){this.l=u.Ub||null,this.j=u.eb||!1}N(ir,Yi),ir.prototype.g=function(){return new ss(this.l,this.j)},ir.prototype.i=function(u){return function(){return u}}({});function ss(u,m){ft.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ss,ft),n=ss.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Un(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function uu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Mn(this):Un(this),this.readyState==3&&uu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Mn(this))},n.Qa=function(u){this.g&&(this.response=u,Mn(this))},n.ga=function(){this.g&&Mn(this)};function Mn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Un(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Un(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Cr(u){let m="";return re(u,function(_,I){m+=I,m+=":",m+=_,m+=`\r
`}),m}function ui(u,m,_){e:{for(I in _){var I=!1;break e}I=!0}I||(_=Cr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):je(u,m,_))}function Ge(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Ge,ft);var Fh=/^https?$/i,va=["POST","PUT"];n=Ge.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xn.g(),this.v=this.o?Ws(this.o):Ws(xn),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){os(this,H);return}if(u=_||"",_=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)_.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const H of I.keys())_.set(H,I.get(H));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),F=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(va,m,void 0))||I||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ne]of _)this.g.setRequestHeader(H,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{no(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){os(this,H)}};function os(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,to(u),cn(u)}function to(u){u.A||(u.A=!0,pt(u,"complete"),pt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,pt(this,"complete"),pt(this,"abort"),cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),Ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?wa(this):this.bb())},n.bb=function(){wa(this)};function wa(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Jt(u)!=4||u.Z()!=2)){if(u.u&&Jt(u)==4)ia(u.Ea,0,u);else if(pt(u,"readystatechange"),Jt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var I;if(I=ne===0){var F=String(u.D).match(rs)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!Fh.test(F?F.toLowerCase():"")}_=I}if(_)pt(u,"complete"),pt(u,"success");else{u.m=6;try{var H=2<Jt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",to(u)}}finally{cn(u)}}}}function cn(u,m){if(u.g){no(u);const _=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||pt(u,"ready");try{_.onreadystatechange=I}catch{}}}function no(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Jt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),la(m)}};function Ea(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ro(u){const m={};u=(u.g&&2<=Jt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(K(u[I]))continue;var _=L(u[I]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=m[F]||[];m[F]=H,H.push(_)}D(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Ta(u){this.Aa=0,this.i=[],this.j=new Ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,u),this.cb=sr("retryDelaySeedMs",1e4,u),this.Wa=sr("forwardChannelMaxRetries",2,u),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ns(u&&u.concurrentRequestLimit),this.Da=new Uh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ta.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,I){st(0),this.W=u,this.H=m||{},_&&I!==void 0&&(this.H.OSID=_,this.H.OAID=I),this.F=this.X,this.I=fu(this,null,this.W),or(this)};function Ct(u){if(io(u),u.G==3){var m=u.U++,_=un(u.I);if(je(_,"SID",u.K),je(_,"RID",m),je(_,"TYPE","terminate"),Pr(u,_),m=new On(u,u.j,m),m.L=2,m.v=oi(un(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=pu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),$e(m)}du(u)}function Fn(u){u.g&&(Ia(u),u.g.cancel(),u.g=null)}function io(u){Fn(u),u.u&&(d.clearTimeout(u.u),u.u=null),ao(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function or(u){if(!ln(u.h)&&!u.s){u.s=!0;var m=u.Ga;Fe||ae(),ie||(Fe(),ie=!0),ge.add(m,u),u.B=0}}function jh(u,m){return eu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Dn(T(u.Ga,u,m),hu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new On(this,this.j,u);let H=this.o;if(this.S&&(H?(H=S(H),x(H,this.S)):H=this.S),this.m!==null||this.O||(F.H=H,H=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var I=this.i[_];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ci(this,F,m),_=un(this.I),je(_,"RID",u),je(_,"CVER",22),this.D&&je(_,"X-HTTP-Session-Id",this.D),Pr(this,_),H&&(this.O?m="headers="+encodeURIComponent(String(Cr(H)))+"&"+m:this.m&&ui(_,this.m,H)),ya(this.h,F),this.Ua&&je(_,"TYPE","init"),this.P?(je(_,"$req",m),je(_,"SID","null"),F.T=!0,Xs(F,_,null)):Xs(F,_,m),this.G=2}}else this.G==3&&(u?so(this,u):this.i.length==0||ln(this.h)||so(this))};function so(u,m){var _;m?_=m.l:_=u.U++;const I=un(u.I);je(I,"SID",u.K),je(I,"RID",_),je(I,"AID",u.T),Pr(u,I),u.m&&u.o&&ui(I,u.m,u.o),_=new On(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ci(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ya(u.h,_),Xs(_,I,m)}function Pr(u,m){u.H&&re(u.H,function(_,I){je(m,I,_)}),u.l&&ri({},function(_,I){je(m,I,_)})}function ci(u,m,_){_=Math.min(u.i.length,_);var I=u.l?T(u.l.Na,u.l,u):null;e:{var F=u.i;let H=-1;for(;;){const ne=["count="+_];H==-1?0<_?(H=F[0].g,ne.push("ofs="+H)):H=0:ne.push("ofs="+H);let Ue=!0;for(let mt=0;mt<_;mt++){let De=F[mt].g;const Et=F[mt].map;if(De-=H,0>De)H=Math.max(0,F[mt].g-100),Ue=!1;else try{lu(Et,ne,"req"+De+"_")}catch{I&&I(Et)}}if(Ue){I=ne.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,I}function as(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Fe||ae(),ie||(Fe(),ie=!0),ge.add(m,u),u.v=0}}function oo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Dn(T(u.Fa,u),hu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Dn(T(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Fn(this),cu(this))};function Ia(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function cu(u){u.g=new On(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=un(u.qa);je(m,"RID","rpc"),je(m,"SID",u.K),je(m,"AID",u.T),je(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&je(m,"TO",u.ja),je(m,"TYPE","xmlhttp"),Pr(u,m),u.m&&u.o&&ui(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=oi(un(m)),_.m=null,_.P=!0,ma(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Fn(this),oo(this),st(19))};function ao(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function lo(u,m){var _=null;if(u.g==m){ao(u),Ia(u),u.g=null;var I=2}else if(Ht(u.h,m))_=m.D,tu(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;I=Xi(),pt(I,new Ks(I,_)),or(u)}else as(u);else if(F=m.s,F==3||F==0&&0<m.X||!(I==1&&jh(u,m)||I==2&&oo(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:kr(u,5);break;case 4:kr(u,10);break;case 3:kr(u,6);break;default:kr(u,2)}}}function hu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function kr(u,m){if(u.j.info("Error code "+m),m==2){var _=T(u.fb,u),I=u.Xa;const F=!I;I=new Ar(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||is(I,"https"),oi(I),F?Mh(I.toString(),_):au(I.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(m),du(u),io(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function du(u){if(u.G=0,u.ka=[],u.l){const m=nu(u.h);(m.length!=0||u.i.length!=0)&&(P(u.ka,m),P(u.ka,u.i),u.h.i.length=0,M(u.i),u.i.length=0),u.l.ra()}}function fu(u,m,_){var I=_ instanceof Ar?un(_):new Ar(_);if(I.g!="")m&&(I.g=m+"."+I.g),ii(I,I.s);else{var F=d.location;I=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var H=new Ar(null);I&&is(H,I),m&&(H.g=m),F&&ii(H,F),_&&(H.l=_),I=H}return _=u.D,m=u.ya,_&&m&&je(I,_,m),je(I,"VER",u.la),Pr(u,I),I}function pu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ge(new ir({eb:_})):new Ge(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sa(){}n=Sa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function uo(){}uo.prototype.g=function(u,m){return new qt(u,m)};function qt(u,m){ft.call(this),this.g=new Ta(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!K(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!K(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ar(this)}N(qt,ft),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Ct(this.g)},qt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=aa(u),u=_);m.i.push(new Zl(m.Ya++,u)),m.G==3&&or(m)},qt.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,qt.aa.N.call(this)};function mu(u){er.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}N(mu,er);function gu(){qs.call(this),this.status=1}N(gu,qs);function ar(u){this.g=u}N(ar,Sa),ar.prototype.ua=function(){pt(this.g,"a")},ar.prototype.ta=function(u){pt(this.g,new mu(u))},ar.prototype.sa=function(u){pt(this.g,new gu)},ar.prototype.ra=function(){pt(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,V0=function(){return new uo},L0=function(){return Xi()},O0=tr,Yf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qs.NO_ERROR=0,Qs.TIMEOUT=8,Qs.HTTP_ERROR=6,Sc=Qs,Ql.COMPLETE="complete",x0=Ql,Hs.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,tl=Hs,b0=ir,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,D0=Ge}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});const S_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go="10.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Pp("@firebase/firestore");function Xa(){return Ps.logLevel}function de(n,...e){if(Ps.logLevel<=ke.DEBUG){const t=e.map(Dp);Ps.debug(`Firestore (${Go}): ${n}`,...t)}}function Yr(n,...e){if(Ps.logLevel<=ke.ERROR){const t=e.map(Dp);Ps.error(`Firestore (${Go}): ${n}`,...t)}}function Fo(n,...e){if(Ps.logLevel<=ke.WARN){const t=e.map(Dp);Ps.warn(`Firestore (${Go}): ${n}`,...t)}}function Dp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+n;throw Yr(e),new Error(e)}function ze(n,e){n||Ee()}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends wr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Bt.UNAUTHENTICATED))}shutdown(){}}class jA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class zA{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const o=f=>this.i!==i?(i=this.i,t(f)):Promise.resolve();let a=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Hr,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await o(this.currentUser)})},d=f=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),c()};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Hr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ze(typeof i.accessToken=="string"),new M0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new Bt(e)}}class BA{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $A{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new BA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=a=>{a.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.R;return this.R=a.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>i(a))};const o=a=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?o(a):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ze(typeof t.token=="string"),this.R=t.token,new WA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=qA(40);for(let a=0;a<o.length;++a)i.length<20&&o[a]<t&&(i+=e.charAt(o[a]%e.length))}return i}}function Le(n,e){return n<e?-1:n>e?1:0}function jo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new vt(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Te(e)}static min(){return new Te(new vt(0,0))}static max(){return new Te(new vt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(),i===void 0?i=e.length-t:i>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ml.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ml?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const a=e.get(o),c=t.get(o);if(a<c)return-1;if(a>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ke extends ml{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue(Q.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ke(t)}static emptyPath(){return new Ke([])}}const KA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bt extends ml{construct(e,t,i){return new bt(e,t,i)}static isValidIdentifier(e){return KA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new bt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const a=()=>{if(i.length===0)throw new ue(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ue(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ue(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=f,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(a(),o++)}if(a(),c)throw new ue(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bt(t)}static emptyPath(){return new bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(Ke.fromString(e))}static fromName(e){return new me(Ke.fromString(e).popFirst(5))}static empty(){return new me(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new Ke(e.slice()))}}function GA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(i===1e9?new vt(t+1,0):new vt(t,i));return new Mi(o,me.empty(),e)}function QA(n){return new Mi(n.readTime,n.key,-1)}class Mi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Mi(Te.min(),me.empty(),-1)}static max(){return new Mi(Te.max(),me.empty(),-1)}}function YA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=me.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==XA)throw n;de("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((i,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(i,o)},this.catchCallback=a=>{this.wrapFailure(t,a).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,i)=>{t(e)})}static reject(e){return new Z((t,i)=>{i(e)})}static waitFor(e){return new Z((t,i)=>{let o=0,a=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++a,c&&a===o&&t()},f=>i(f))}),c=!0,a===o&&t()})}static or(e){let t=Z.resolve(!1);for(const i of e)t=t.next(o=>o?Z.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,a)=>{i.push(t.call(this,o,a))}),this.waitFor(i)}static mapArray(e,t){return new Z((i,o)=>{const a=e.length,c=new Array(a);let d=0;for(let f=0;f<a;f++){const g=f;t(e[g]).next(v=>{c[g]=v,++d,d===a&&i(c)},v=>o(v))}})}static doWhile(e,t){return new Z((i,o)=>{const a=()=>{e()===!0?t().next(()=>{a()},o):i()};a()})}}function ZA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ll(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bp.oe=-1;function uh(n){return n==null}function Fc(n){return n===0&&1/n==-1/0}function eC(n){return typeof n=="number"&&Number.isInteger(n)&&!Fc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ms(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function F0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dc(this.root,e,this.comparator,!0)}}class dc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?i(e.key,t):1,t&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,i,o,a){this.key=e,this.value=t,this.color=i??Dt.RED,this.left=o??Dt.EMPTY,this.right=a??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,a){return new Dt(e??this.key,t??this.value,i??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const a=i(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,t,i),null):a===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,i,o,a){return this}insert(e,t,i){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new A_(this.data.getIterator())}getIteratorFrom(e){return new A_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class A_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(bt.comparator)}static empty(){return new gn([])}unionWith(e){let t=new xt(bt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new j0("Invalid base64 string: "+a):a}}(e);return new Ot(t)}static fromUint8Array(e){const t=function(o){let a="";for(let c=0;c<o.length;++c)a+=String.fromCharCode(o[c]);return a}(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const tC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(n){if(ze(!!n),typeof n=="string"){let e=0;const t=tC.exec(n);if(ze(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ks(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Op(n){const e=n.mapValue.fields.__previous_value__;return xp(e)?Op(e):e}function gl(n){const e=Ui(n.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t,i,o,a,c,d,f,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=g}}class yl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new yl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ns(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?xp(n)?4:iC(n)?9007199254740991:rC(n)?10:11:Ee()}function yr(n,e){if(n===e)return!0;const t=Ns(n);if(t!==Ns(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gl(n).isEqual(gl(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const c=Ui(o.timestampValue),d=Ui(a.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,a){return ks(o.bytesValue).isEqual(ks(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,a){return at(o.geoPointValue.latitude)===at(a.geoPointValue.latitude)&&at(o.geoPointValue.longitude)===at(a.geoPointValue.longitude)}(n,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return at(o.integerValue)===at(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const c=at(o.doubleValue),d=at(a.doubleValue);return c===d?Fc(c)===Fc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return jo(n.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:case 11:return function(o,a){const c=o.mapValue.fields||{},d=a.mapValue.fields||{};if(R_(c)!==R_(d))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(d[f]===void 0||!yr(c[f],d[f])))return!1;return!0}(n,e);default:return Ee()}}function _l(n,e){return(n.values||[]).find(t=>yr(t,e))!==void 0}function zo(n,e){if(n===e)return 0;const t=Ns(n),i=Ns(e);if(t!==i)return Le(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return function(a,c){const d=at(a.integerValue||a.doubleValue),f=at(c.integerValue||c.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(n,e);case 3:return C_(n.timestampValue,e.timestampValue);case 4:return C_(gl(n),gl(e));case 5:return Le(n.stringValue,e.stringValue);case 6:return function(a,c){const d=ks(a),f=ks(c);return d.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,c){const d=a.split("/"),f=c.split("/");for(let g=0;g<d.length&&g<f.length;g++){const v=Le(d[g],f[g]);if(v!==0)return v}return Le(d.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,c){const d=Le(at(a.latitude),at(c.latitude));return d!==0?d:Le(at(a.longitude),at(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return P_(n.arrayValue,e.arrayValue);case 10:return function(a,c){var d,f,g,v;const E=a.fields||{},T=c.fields||{},C=(d=E.value)===null||d===void 0?void 0:d.arrayValue,N=(f=T.value)===null||f===void 0?void 0:f.arrayValue,M=Le(((g=C==null?void 0:C.values)===null||g===void 0?void 0:g.length)||0,((v=N==null?void 0:N.values)===null||v===void 0?void 0:v.length)||0);return M!==0?M:P_(C,N)}(n.mapValue,e.mapValue);case 11:return function(a,c){if(a===fc.mapValue&&c===fc.mapValue)return 0;if(a===fc.mapValue)return 1;if(c===fc.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),g=c.fields||{},v=Object.keys(g);f.sort(),v.sort();for(let E=0;E<f.length&&E<v.length;++E){const T=Le(f[E],v[E]);if(T!==0)return T;const C=zo(d[f[E]],g[v[E]]);if(C!==0)return C}return Le(f.length,v.length)}(n.mapValue,e.mapValue);default:throw Ee()}}function C_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=Ui(n),i=Ui(e),o=Le(t.seconds,i.seconds);return o!==0?o:Le(t.nanos,i.nanos)}function P_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const a=zo(t[o],i[o]);if(a)return a}return Le(t.length,i.length)}function Bo(n){return Xf(n)}function Xf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ui(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ks(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return me.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const a of t.values||[])o?o=!1:i+=",",i+=Xf(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",a=!0;for(const c of i)a?a=!1:o+=",",o+=`${c}:${Xf(t.fields[c])}`;return o+"}"}(n.mapValue):Ee()}function k_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Jf(n){return!!n&&"integerValue"in n}function Lp(n){return!!n&&"arrayValue"in n}function N_(n){return!!n&&"nullValue"in n}function D_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rc(n){return!!n&&"mapValue"in n}function rC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ol(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ms(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ol(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ol(n.arrayValue.values[t]);return e}return Object.assign({},n)}function iC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Rc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ol(t)}setAll(e){let t=bt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const f=this.getFieldsMap(t);this.applyChanges(f,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=ol(c):o.push(d.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,i,o)}delete(e){const t=this.field(e.popLast());Rc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Rc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ms(t,(o,a)=>e[o]=a);for(const o of i)delete e[o]}clone(){return new on(ol(this.value))}}function z0(n){const e=[];return Ms(n.fields,(t,i)=>{const o=new bt([t]);if(Rc(i)){const a=z0(i.mapValue).fields;if(a.length===0)e.push(o);else for(const c of a)e.push(o.child(c))}else e.push(o)}),new gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,i,o,a,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=a,this.data=c,this.documentState=d}static newInvalidDocument(e){return new $t(e,0,Te.min(),Te.min(),Te.min(),on.empty(),0)}static newFoundDocument(e,t,i,o){return new $t(e,1,t,Te.min(),i,o,0)}static newNoDocument(e,t){return new $t(e,2,t,Te.min(),Te.min(),on.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,Te.min(),Te.min(),on.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.position=e,this.inclusive=t}}function b_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const a=e[o],c=n.position[o];if(a.field.isKeyField()?i=me.comparator(me.fromName(c.referenceValue),t.key):i=zo(c,t.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function x_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!yr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t="asc"){this.field=e,this.dir=t}}function sC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{}class dt extends B0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new aC(e,t,i):t==="array-contains"?new cC(e,i):t==="in"?new hC(e,i):t==="not-in"?new dC(e,i):t==="array-contains-any"?new fC(e,i):new dt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new lC(e,i):new uC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(zo(t,this.value)):t!==null&&Ns(this.value)===Ns(t)&&this.matchesComparison(zo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jn extends B0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Jn(e,t)}matches(e){return $0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $0(n){return n.op==="and"}function W0(n){return oC(n)&&$0(n)}function oC(n){for(const e of n.filters)if(e instanceof Jn)return!1;return!0}function Zf(n){if(n instanceof dt)return n.field.canonicalString()+n.op.toString()+Bo(n.value);if(W0(n))return n.filters.map(e=>Zf(e)).join(",");{const e=n.filters.map(t=>Zf(t)).join(",");return`${n.op}(${e})`}}function H0(n,e){return n instanceof dt?function(i,o){return o instanceof dt&&i.op===o.op&&i.field.isEqual(o.field)&&yr(i.value,o.value)}(n,e):n instanceof Jn?function(i,o){return o instanceof Jn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((a,c,d)=>a&&H0(c,o.filters[d]),!0):!1}(n,e):void Ee()}function q0(n){return n instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${Bo(t.value)}`}(n):n instanceof Jn?function(t){return t.op.toString()+" {"+t.getFilters().map(q0).join(" ,")+"}"}(n):"Filter"}class aC extends dt{constructor(e,t,i){super(e,t,i),this.key=me.fromName(i.referenceValue)}matches(e){const t=me.comparator(e.key,this.key);return this.matchesComparison(t)}}class lC extends dt{constructor(e,t){super(e,"in",t),this.keys=K0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class uC extends dt{constructor(e,t){super(e,"not-in",t),this.keys=K0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function K0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>me.fromName(i.referenceValue))}class cC extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Lp(t)&&_l(t.arrayValue,this.value)}}class hC extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_l(this.value.arrayValue,t)}}class dC extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(_l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!_l(this.value.arrayValue,t)}}class fC extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Lp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>_l(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,t=null,i=[],o=[],a=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=a,this.startAt=c,this.endAt=d,this.ue=null}}function O_(n,e=null,t=[],i=[],o=null,a=null,c=null){return new pC(n,e,t,i,o,a,c)}function Vp(n){const e=Ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Zf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),uh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Bo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Bo(i)).join(",")),e.ue=t}return e.ue}function Mp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!H0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!x_(n.startAt,e.startAt)&&x_(n.endAt,e.endAt)}function ep(n){return me.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t=null,i=[],o=[],a=null,c="F",d=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=a,this.limitType=c,this.startAt=d,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mC(n,e,t,i,o,a,c,d){return new Vl(n,e,t,i,o,a,c,d)}function Up(n){return new Vl(n)}function L_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function G0(n){return n.collectionGroup!==null}function al(n){const e=Ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new xt(bt.comparator);return c.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new zc(a,i))}),t.has(bt.keyField().canonicalString())||e.ce.push(new zc(bt.keyField(),i))}return e.ce}function pr(n){const e=Ie(n);return e.le||(e.le=gC(e,al(n))),e.le}function gC(n,e){if(n.limitType==="F")return O_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new zc(o.field,a)});const t=n.endAt?new jc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new jc(n.startAt.position,n.startAt.inclusive):null;return O_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function tp(n,e){const t=n.filters.concat([e]);return new Vl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function np(n,e,t){return new Vl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ch(n,e){return Mp(pr(n),pr(e))&&n.limitType===e.limitType}function Q0(n){return`${Vp(pr(n))}|lt:${n.limitType}`}function bo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>q0(o)).join(", ")}]`),uh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Bo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Bo(o)).join(",")),`Target(${i})`}(pr(n))}; limitType=${n.limitType})`}function hh(n,e){return e.isFoundDocument()&&function(i,o){const a=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):me.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(n,e)&&function(i,o){for(const a of al(i))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const a of i.filters)if(!a.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,f){const g=b_(c,d,f);return c.inclusive?g<=0:g<0}(i.startAt,al(i),o)||i.endAt&&!function(c,d,f){const g=b_(c,d,f);return c.inclusive?g>=0:g>0}(i.endAt,al(i),o))}(n,e)}function yC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Y0(n){return(e,t)=>{let i=!1;for(const o of al(n)){const a=_C(o,e,t);if(a!==0)return a;i=i||o.field.isKeyField()}return 0}}function _C(n,e,t){const i=n.field.isKeyField()?me.comparator(e.key,t.key):function(a,c,d){const f=c.data.field(a),g=d.data.field(a);return f!==null&&g!==null?zo(f,g):Ee()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,a]of i)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,(t,i)=>{for(const[o,a]of i)e(o,a)})}isEmpty(){return F0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new et(me.comparator);function Xr(){return vC}const X0=new et(me.comparator);function nl(...n){let e=X0;for(const t of n)e=e.insert(t.key,t);return e}function J0(n){let e=X0;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Is(){return ll()}function Z0(){return ll()}function ll(){return new Qo(n=>n.toString(),(n,e)=>n.isEqual(e))}const wC=new et(me.comparator),EC=new xt(me.comparator);function Ce(...n){let e=EC;for(const t of n)e=e.add(t);return e}const TC=new xt(Le);function IC(){return TC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fc(e)?"-0":e}}function ew(n){return{integerValue:""+n}}function SC(n,e){return eC(e)?ew(e):Fp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this._=void 0}}function RC(n,e,t){return n instanceof vl?function(o,a){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&xp(a)&&(a=Op(a)),a&&(c.fields.__previous_value__=a),{mapValue:c}}(t,e):n instanceof wl?nw(n,e):n instanceof El?rw(n,e):function(o,a){const c=tw(o,a),d=V_(c)+V_(o.Pe);return Jf(c)&&Jf(o.Pe)?ew(d):Fp(o.serializer,d)}(n,e)}function AC(n,e,t){return n instanceof wl?nw(n,e):n instanceof El?rw(n,e):t}function tw(n,e){return n instanceof Bc?function(i){return Jf(i)||function(a){return!!a&&"doubleValue"in a}(i)}(e)?e:{integerValue:0}:null}class vl extends dh{}class wl extends dh{constructor(e){super(),this.elements=e}}function nw(n,e){const t=iw(e);for(const i of n.elements)t.some(o=>yr(o,i))||t.push(i);return{arrayValue:{values:t}}}class El extends dh{constructor(e){super(),this.elements=e}}function rw(n,e){let t=iw(e);for(const i of n.elements)t=t.filter(o=>!yr(o,i));return{arrayValue:{values:t}}}class Bc extends dh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function V_(n){return at(n.integerValue||n.doubleValue)}function iw(n){return Lp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,t){this.field=e,this.transform=t}}function PC(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof wl&&o instanceof wl||i instanceof El&&o instanceof El?jo(i.elements,o.elements,yr):i instanceof Bc&&o instanceof Bc?yr(i.Pe,o.Pe):i instanceof vl&&o instanceof vl}(n.transform,e.transform)}class kC{constructor(e,t){this.version=e,this.transformResults=t}}class Yn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ac(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class fh{}function sw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jp(n.key,Yn.none()):new Ml(n.key,n.data,Yn.none());{const t=n.data,i=on.empty();let o=new xt(bt.comparator);for(let a of e.fields)if(!o.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?i.delete(a):i.set(a,c),o=o.add(a)}return new $i(n.key,i,new gn(o.toArray()),Yn.none())}}function NC(n,e,t){n instanceof Ml?function(o,a,c){const d=o.value.clone(),f=U_(o.fieldTransforms,a,c.transformResults);d.setAll(f),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof $i?function(o,a,c){if(!Ac(o.precondition,a))return void a.convertToUnknownDocument(c.version);const d=U_(o.fieldTransforms,a,c.transformResults),f=a.data;f.setAll(ow(o)),f.setAll(d),a.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(n,e,t):function(o,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function ul(n,e,t,i){return n instanceof Ml?function(a,c,d,f){if(!Ac(a.precondition,c))return d;const g=a.value.clone(),v=F_(a.fieldTransforms,f,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,i):n instanceof $i?function(a,c,d,f){if(!Ac(a.precondition,c))return d;const g=F_(a.fieldTransforms,f,c),v=c.data;return v.setAll(ow(a)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(E=>E.field))}(n,e,t,i):function(a,c,d){return Ac(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function DC(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),a=tw(i.transform,o||null);a!=null&&(t===null&&(t=on.empty()),t.set(i.field,a))}return t||null}function M_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&jo(i,o,(a,c)=>PC(a,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ml extends fh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class $i extends fh{constructor(e,t,i,o,a=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function ow(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function U_(n,e,t){const i=new Map;ze(n.length===t.length);for(let o=0;o<t.length;o++){const a=n[o],c=a.transform,d=e.data.field(a.field);i.set(a.field,AC(c,d,t[o]))}return i}function F_(n,e,t){const i=new Map;for(const o of n){const a=o.transform,c=t.data.field(o.field);i.set(o.field,RC(a,c,e))}return i}class jp extends fh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bC extends fh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&NC(a,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ul(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ul(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Z0();return this.mutations.forEach(o=>{const a=e.get(o.key),c=a.overlayedDocument;let d=this.applyToLocalView(c,a.mutatedFields);d=t.has(o.key)?null:d;const f=sw(c,d);f!==null&&i.set(o.key,f),c.isValidDocument()||c.convertToNoDocument(Te.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&jo(this.mutations,e.mutations,(t,i)=>M_(t,i))&&jo(this.baseMutations,e.baseMutations,(t,i)=>M_(t,i))}}class zp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){ze(e.mutations.length===i.length);let o=function(){return wC}();const a=e.mutations;for(let c=0;c<a.length;c++)o=o.insert(a[c].key,i[c].version);return new zp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,be;function VC(n){switch(n){default:return Ee();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0}}function aw(n){if(n===void 0)return Yr("GRPC error has no .code"),Q.UNKNOWN;switch(n){case ht.OK:return Q.OK;case ht.CANCELLED:return Q.CANCELLED;case ht.UNKNOWN:return Q.UNKNOWN;case ht.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case ht.INTERNAL:return Q.INTERNAL;case ht.UNAVAILABLE:return Q.UNAVAILABLE;case ht.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case ht.NOT_FOUND:return Q.NOT_FOUND;case ht.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case ht.ABORTED:return Q.ABORTED;case ht.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case ht.DATA_LOSS:return Q.DATA_LOSS;default:return Ee()}}(be=ht||(ht={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new Rs([4294967295,4294967295],0);function j_(n){const e=MC().encode(n),t=new N0;return t.update(e),new Uint8Array(t.digest())}function z_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Rs([t,i],0),new Rs([o,a],0)]}class Bp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new rl(`Invalid padding: ${t}`);if(i<0)throw new rl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new rl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new rl(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Rs.fromNumber(this.Ie)}Ee(e,t,i){let o=e.add(t.multiply(Rs.fromNumber(i)));return o.compare(UC)===1&&(o=new Rs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=j_(e),[i,o]=z_(t);for(let a=0;a<this.hashCount;a++){const c=this.Ee(i,o,a);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new Bp(a,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Ie===0)return;const t=j_(e),[i,o]=z_(t);for(let a=0;a<this.hashCount;a++){const c=this.Ee(i,o,a);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t,i,o,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Ul.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ph(Te.min(),o,new et(Le),Xr(),Ce())}}class Ul{constructor(e,t,i,o,a){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ul(i,t,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class lw{constructor(e,t){this.targetId=e,this.me=t}}class uw{constructor(e,t,i=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class B_{constructor(){this.fe=0,this.ge=W_(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),t=Ce(),i=Ce();return this.ge.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee()}}),new Ul(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=W_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ze(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class FC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xr(),this.qe=$_(),this.Qe=new et(Le)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:Ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,i=e.me.count,o=this.Je(t);if(o){const a=o.target;if(ep(a))if(i===0){const c=new me(a.path);this.Ue(t,c,$t.newNoDocument(c,Te.min()))}else ze(i===1);else{const c=this.Ye(t);if(c!==i){const d=this.Ze(e),f=d?this.Xe(d,e,c):1;if(f!==0){this.je(t);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,g)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=t;let c,d;try{c=ks(i).toUint8Array()}catch(f){if(f instanceof j0)return Fo("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Bp(c,o,a)}catch(f){return Fo(f instanceof rl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.Ie===0?null:d}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(a=>{const c=this.Le.tt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Ue(t,a,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((a,c)=>{const d=this.Je(c);if(d){if(a.current&&ep(d.target)){const f=new me(d.target.path);this.ke.get(f)!==null||this.it(c,f)||this.Ue(c,f,$t.newNoDocument(f,e))}a.be&&(t.set(c,a.ve()),a.Ce())}});let i=Ce();this.qe.forEach((a,c)=>{let d=!0;c.forEachWhile(f=>{const g=this.Je(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(a))}),this.ke.forEach((a,c)=>c.setReadTime(e));const o=new ph(e,t,this.Qe,this.ke,i);return this.ke=Xr(),this.qe=$_(),this.Qe=new et(Le),o}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new B_,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new xt(Le),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new B_),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function $_(){return new et(me.comparator)}function W_(){return new et(me.comparator)}const jC={asc:"ASCENDING",desc:"DESCENDING"},zC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BC={and:"AND",or:"OR"};class $C{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rp(n,e){return n.useProto3Json||uh(e)?e:{value:e}}function $c(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function WC(n,e){return $c(n,e.toTimestamp())}function mr(n){return ze(!!n),Te.fromTimestamp(function(t){const i=Ui(t);return new vt(i.seconds,i.nanos)}(n))}function $p(n,e){return ip(n,e).canonicalString()}function ip(n,e){const t=function(o){return new Ke(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hw(n){const e=Ke.fromString(n);return ze(gw(e)),e}function sp(n,e){return $p(n.databaseId,e.path)}function If(n,e){const t=hw(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new me(fw(t))}function dw(n,e){return $p(n.databaseId,e)}function HC(n){const e=hw(n);return e.length===4?Ke.emptyPath():fw(e)}function op(n){return new Ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fw(n){return ze(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function H_(n,e,t){return{name:sp(n,e),fields:t.value.mapValue.fields}}function qC(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(g,v){return g.useProto3Json?(ze(v===void 0||typeof v=="string"),Ot.fromBase64String(v||"")):(ze(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Ot.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const v=g.code===void 0?Q.UNKNOWN:aw(g.code);return new ue(v,g.message||"")}(c);t=new uw(i,o,a,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=If(n,i.document.name),a=mr(i.document.updateTime),c=i.document.createTime?mr(i.document.createTime):Te.min(),d=new on({mapValue:{fields:i.document.fields}}),f=$t.newFoundDocument(o,a,c,d),g=i.targetIds||[],v=i.removedTargetIds||[];t=new Cc(g,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=If(n,i.document),a=i.readTime?mr(i.readTime):Te.min(),c=$t.newNoDocument(o,a),d=i.removedTargetIds||[];t=new Cc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=If(n,i.document),a=i.removedTargetIds||[];t=new Cc([],a,o,null)}else{if(!("filter"in e))return Ee();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:a}=i,c=new LC(o,a),d=i.targetId;t=new lw(d,c)}}return t}function KC(n,e){let t;if(e instanceof Ml)t={update:H_(n,e.key,e.value)};else if(e instanceof jp)t={delete:sp(n,e.key)};else if(e instanceof $i)t={update:H_(n,e.key,e.data),updateMask:nP(e.fieldMask)};else{if(!(e instanceof bC))return Ee();t={verify:sp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(a,c){const d=c.transform;if(d instanceof vl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof wl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof El)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Bc)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Ee()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:WC(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ee()}(n,e.precondition)),t}function GC(n,e){return n&&n.length>0?(ze(e!==void 0),n.map(t=>function(o,a){let c=o.updateTime?mr(o.updateTime):mr(a);return c.isEqual(Te.min())&&(c=mr(a)),new kC(c,o.transformResults||[])}(t,e))):[]}function QC(n,e){return{documents:[dw(n,e.path)]}}function YC(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=dw(n,o);const a=function(g){if(g.length!==0)return mw(Jn.create(g,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const c=function(g){if(g.length!==0)return g.map(v=>function(T){return{field:xo(T.field),direction:ZC(T.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=rp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{_t:t,parent:o}}function XC(n){let e=HC(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){ze(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=function(E){const T=pw(E);return T instanceof Jn&&W0(T)?T.getFilters():[T]}(t.where));let c=[];t.orderBy&&(c=function(E){return E.map(T=>function(N){return new zc(Oo(N.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(T))}(t.orderBy));let d=null;t.limit&&(d=function(E){let T;return T=typeof E=="object"?E.value:E,uh(T)?null:T}(t.limit));let f=null;t.startAt&&(f=function(E){const T=!!E.before,C=E.values||[];return new jc(C,T)}(t.startAt));let g=null;return t.endAt&&(g=function(E){const T=!E.before,C=E.values||[];return new jc(C,T)}(t.endAt)),mC(e,o,c,a,d,"F",f,g)}function JC(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Oo(t.unaryFilter.field);return dt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Oo(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Oo(t.unaryFilter.field);return dt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Oo(t.unaryFilter.field);return dt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(n):n.fieldFilter!==void 0?function(t){return dt.create(Oo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Jn.create(t.compositeFilter.filters.map(i=>pw(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(n):Ee()}function ZC(n){return jC[n]}function eP(n){return zC[n]}function tP(n){return BC[n]}function xo(n){return{fieldPath:n.canonicalString()}}function Oo(n){return bt.fromServerFormat(n.fieldPath)}function mw(n){return n instanceof dt?function(t){if(t.op==="=="){if(D_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NAN"}};if(N_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(D_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NAN"}};if(N_(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(t.field),op:eP(t.op),value:t.value}}}(n):n instanceof Jn?function(t){const i=t.getFilters().map(o=>mw(o));return i.length===1?i[0]:{compositeFilter:{op:tP(t.op),filters:i}}}(n):Ee()}function nP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,i,o,a=Te.min(),c=Te.min(),d=Ot.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.ct=e}}function iP(n){const e=XC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?np(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.un=new oP}addToCollectionParentIndex(e,t){return this.un.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Mi.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Mi.min())}updateCollectionGroup(e,t,i){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class oP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new xt(Ke.comparator),a=!o.has(i);return this.index[t]=o.add(i),a}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new xt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new $o(0)}static kn(){return new $o(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(){this.changes=new Qo(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Z.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&ul(i.mutation,o,gn.empty(),vt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ce()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ce()){const o=Is();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(a=>{let c=nl();return a.forEach((d,f)=>{c=c.insert(d,f.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Is();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ce()))}populateOverlays(e,t,i){const o=[];return i.forEach(a=>{t.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let a=Xr();const c=ll(),d=function(){return ll()}();return t.forEach((f,g)=>{const v=i.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof $i)?a=a.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),ul(v.mutation,g,v.mutation.getFieldMask(),vt.now())):c.set(g.key,gn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((g,v)=>c.set(g,v)),t.forEach((g,v)=>{var E;return d.set(g,new lP(v,(E=c.get(g))!==null&&E!==void 0?E:null))}),d))}recalculateAndSaveOverlays(e,t){const i=ll();let o=new et((c,d)=>c-d),a=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(f=>{const g=t.get(f);if(g===null)return;let v=i.get(f)||gn.empty();v=d.applyToLocalView(g,v),i.set(f,v);const E=(o.get(d.batchId)||Ce()).add(f);o=o.insert(d.batchId,E)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),g=f.key,v=f.value,E=Z0();v.forEach(T=>{if(!a.has(T)){const C=sw(t.get(T),i.get(T));C!==null&&E.set(T,C),a=a.add(T)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,E))}return Z.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return me.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):G0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(a=>{const c=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-a.size):Z.resolve(Is());let d=-1,f=a;return c.next(g=>Z.forEach(g,(v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),a.get(v)?Z.resolve():this.remoteDocumentCache.getEntry(e,v).next(T=>{f=f.insert(v,T)}))).next(()=>this.populateOverlays(e,g,a)).next(()=>this.computeViews(e,f,g,Ce())).next(v=>({batchId:d,changes:J0(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new me(t)).next(i=>{let o=nl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const a=t.collectionGroup;let c=nl();return this.indexManager.getCollectionParents(e,a).next(d=>Z.forEach(d,f=>{const g=function(E,T){return new Vl(T,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,i,o).next(v=>{v.forEach((E,T)=>{c=c.insert(E,T)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,a,o))).next(c=>{a.forEach((f,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,$t.newInvalidDocument(v)))});let d=nl();return c.forEach((f,g)=>{const v=a.get(f);v!==void 0&&ul(v.mutation,g,gn.empty(),vt.now()),hh(t,g)&&(d=d.insert(f,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Z.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:mr(o.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:iP(o.bundledQuery),readTime:mr(o.readTime)}}(t)),Z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(){this.overlays=new et(me.comparator),this.Ir=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Is();return Z.forEach(t,o=>this.getOverlay(e,o).next(a=>{a!==null&&i.set(o,a)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,a)=>{this.ht(e,t,a)}),Z.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.Ir.delete(i)),Z.resolve()}getOverlaysForCollection(e,t,i){const o=Is(),a=t.length+1,c=new me(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const f=d.getNext().value,g=f.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===a&&f.largestBatchId>i&&o.set(f.getKey(),f)}return Z.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let a=new et((g,v)=>g-v);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let v=a.get(g.largestBatchId);v===null&&(v=Is(),a=a.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const d=Is(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,v)=>d.set(g,v)),!(d.size()>=o)););return Z.resolve(d)}ht(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new OC(t,i));let a=this.Ir.get(t);a===void 0&&(a=Ce(),this.Ir.set(t,a)),this.Ir.set(t,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this.Tr=new xt(Rt.Er),this.dr=new xt(Rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new Rt(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new Rt(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new me(new Ke([])),i=new Rt(t,e),o=new Rt(t,e+1),a=[];return this.dr.forEachInRange([i,o],c=>{this.Vr(c),a.push(c.key)}),a}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new me(new Ke([])),i=new Rt(t,e),o=new Rt(t,e+1);let a=Ce();return this.dr.forEachInRange([i,o],c=>{a=a.add(c.key)}),a}containsKey(e){const t=new Rt(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Rt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return me.comparator(e.key,t.key)||Le(e.wr,t.wr)}static Ar(e,t){return Le(e.wr,t.wr)||me.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new xt(Rt.Er)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const a=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new xC(a,t,i,o);this.mutationQueue.push(c);for(const d of o)this.br=this.br.add(new Rt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.vr(i),a=o<0?0:o;return Z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),a=[];return this.br.forEachInRange([i,o],c=>{const d=this.Dr(c.wr);a.push(d)}),Z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new xt(Le);return t.forEach(o=>{const a=new Rt(o,0),c=new Rt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([a,c],d=>{i=i.add(d.wr)})}),Z.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let a=i;me.isDocumentKey(a)||(a=a.child(""));const c=new Rt(new me(a),0);let d=new xt(Le);return this.br.forEachWhile(f=>{const g=f.key.path;return!!i.isPrefixOf(g)&&(g.length===o&&(d=d.add(f.wr)),!0)},c),Z.resolve(this.Cr(d))}Cr(e){const t=[];return e.forEach(i=>{const o=this.Dr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){ze(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return Z.forEach(t.mutations,o=>{const a=new Rt(o.key,t.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new Rt(t,0),o=this.br.firstAfterOrEqual(i);return Z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.Mr=e,this.docs=function(){return new et(me.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),a=o?o.size:0,c=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Z.resolve(i?i.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let i=Xr();return t.forEach(o=>{const a=this.docs.get(o);i=i.insert(o,a?a.document.mutableCopy():$t.newInvalidDocument(o))}),Z.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let a=Xr();const c=t.path,d=new me(c.child("")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:g,value:{document:v}}=f.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||YA(QA(v),i)<=0||(o.has(v.key)||hh(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return Z.resolve(a)}getAllFromCollectionGroup(e,t,i,o){Ee()}Or(e,t){return Z.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new mP(this)}getSize(e){return Z.resolve(this.size)}}class mP extends aP{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(i)}),Z.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.persistence=e,this.Nr=new Qo(t=>Vp(t),Mp),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Wp,this.targetCount=0,this.kr=$o.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,o)=>t(o)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),Z.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new $o(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Kn(t),Z.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,i){let o=0;const a=[];return this.Nr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Nr.delete(c),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),Z.waitFor(a).next(()=>o)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return Z.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),Z.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const o=this.persistence.referenceDelegate,a=[];return o&&t.forEach(c=>{a.push(o.markPotentiallyOrphaned(e,c))}),Z.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return Z.resolve(i)}containsKey(e,t){return Z.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e,t){this.qr={},this.overlays={},this.Qr=new bp(0),this.Kr=!1,this.Kr=!0,this.$r=new dP,this.referenceDelegate=e(this),this.Ur=new gP(this),this.indexManager=new sP,this.remoteDocumentCache=function(o){return new pP(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new rP(t),this.Gr=new cP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new fP(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){de("MemoryPersistence","Starting transaction:",e);const o=new _P(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(a=>this.referenceDelegate.jr(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Hr(e,t){return Z.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class _P extends JA{constructor(e){super(),this.currentSequenceNumber=e}}class Hp{constructor(e){this.persistence=e,this.Jr=new Wp,this.Yr=null}static Zr(e){return new Hp(e)}get Xr(){if(this.Yr)return this.Yr;throw Ee()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),Z.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(a=>this.Xr.add(a.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.Xr,i=>{const o=me.fromPath(i);return this.ei(e,o).next(a=>{a||t.removeEntry(o,Te.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Z.or([()=>Z.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=o}static Wi(e,t){let i=Ce(),o=Ce();for(const a of t.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new qp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return IR()?8:ZA(Wt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,o){const a={result:null};return this.Yi(e,t).next(c=>{a.result=c}).next(()=>{if(!a.result)return this.Zi(e,t,o,i).next(c=>{a.result=c})}).next(()=>{if(a.result)return;const c=new vP;return this.Xi(e,t,c).next(d=>{if(a.result=d,this.zi)return this.es(e,t,c,d.size)})}).next(()=>a.result)}es(e,t,i,o){return i.documentReadCount<this.ji?(Xa()<=ke.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",bo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Z.resolve()):(Xa()<=ke.DEBUG&&de("QueryEngine","Query:",bo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(Xa()<=ke.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",bo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pr(t))):Z.resolve())}Yi(e,t){if(L_(t))return Z.resolve(null);let i=pr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=np(t,null,"F"),i=pr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const c=Ce(...a);return this.Ji.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(f=>{const g=this.ts(t,d);return this.ns(t,g,c,f.readTime)?this.Yi(e,np(t,null,"F")):this.rs(e,g,t,f)}))})))}Zi(e,t,i,o){return L_(t)||o.isEqual(Te.min())?Z.resolve(null):this.Ji.getDocuments(e,i).next(a=>{const c=this.ts(t,a);return this.ns(t,c,i,o)?Z.resolve(null):(Xa()<=ke.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),bo(t)),this.rs(e,c,t,GA(o,-1)).next(d=>d))})}ts(e,t){let i=new xt(Y0(e));return t.forEach((o,a)=>{hh(e,a)&&(i=i.add(a))}),i}ns(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}Xi(e,t,i){return Xa()<=ke.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",bo(t)),this.Ji.getDocumentsMatchingQuery(e,t,Mi.min(),i)}rs(e,t,i,o){return this.Ji.getDocumentsMatchingQuery(e,i,o).next(a=>(t.forEach(c=>{a=a.insert(c.key,c)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,t,i,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new et(Le),this._s=new Qo(a=>Vp(a),Mp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function TP(n,e,t,i){return new EP(n,e,t,i)}async function yw(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(a=>(o=a,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(a=>{const c=[],d=[];let f=Ce();for(const g of o){c.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}for(const g of a){d.push(g.batchId);for(const v of g.mutations)f=f.add(v.key)}return t.localDocuments.getDocuments(i,f).next(g=>({hs:g,removedBatchIds:c,addedBatchIds:d}))})})}function IP(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),a=t.cs.newChangeBuffer({trackRemovals:!0});return function(d,f,g,v){const E=g.batch,T=E.keys();let C=Z.resolve();return T.forEach(N=>{C=C.next(()=>v.getEntry(f,N)).next(M=>{const P=g.docVersions.get(N);ze(P!==null),M.version.compareTo(P)<0&&(E.applyToRemoteDocument(M,g),M.isValidDocument()&&(M.setReadTime(g.commitVersion),v.addEntry(M)))})}),C.next(()=>d.mutationQueue.removeMutationBatch(f,E))}(t,i,e,a).next(()=>a.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let f=Ce();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(f=f.add(d.batch.mutations[g].key));return f}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function _w(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function SP(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const d=[];e.targetChanges.forEach((v,E)=>{const T=o.get(E);if(!T)return;d.push(t.Ur.removeMatchingKeys(a,v.removedDocuments,E).next(()=>t.Ur.addMatchingKeys(a,v.addedDocuments,E)));let C=T.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(E)!==null?C=C.withResumeToken(Ot.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):v.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(v.resumeToken,i)),o=o.insert(E,C),function(M,P,z){return M.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(T,C,v)&&d.push(t.Ur.updateTargetData(a,C))});let f=Xr(),g=Ce();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))}),d.push(RP(a,c,e.documentUpdates).next(v=>{f=v.Ps,g=v.Is})),!i.isEqual(Te.min())){const v=t.Ur.getLastRemoteSnapshotVersion(a).next(E=>t.Ur.setTargetsMetadata(a,a.currentSequenceNumber,i));d.push(v)}return Z.waitFor(d).next(()=>c.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,g)).next(()=>f)}).then(a=>(t.os=o,a))}function RP(n,e,t){let i=Ce(),o=Ce();return t.forEach(a=>i=i.add(a)),e.getEntries(n,i).next(a=>{let c=Xr();return t.forEach((d,f)=>{const g=a.get(d);f.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(d)),f.isNoDocument()&&f.version.isEqual(Te.min())?(e.removeEntry(d,f.readTime),c=c.insert(d,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),c=c.insert(d,f)):de("LocalStore","Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",f.version)}),{Ps:c,Is:o}})}function AP(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function CP(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Ur.getTargetData(i,e).next(a=>a?(o=a,Z.resolve(o)):t.Ur.allocateTargetId(i).next(c=>(o=new Ni(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function ap(n,e,t){const i=Ie(n),o=i.os.get(e),a=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",a,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Ll(c))throw c;de("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.os=i.os.remove(e),i._s.delete(o.target)}function q_(n,e,t){const i=Ie(n);let o=Te.min(),a=Ce();return i.persistence.runTransaction("Execute query","readwrite",c=>function(f,g,v){const E=Ie(f),T=E._s.get(v);return T!==void 0?Z.resolve(E.os.get(T)):E.Ur.getTargetData(g,v)}(i,c,pr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(c,d.targetId).next(f=>{a=f})}).next(()=>i.ss.getDocumentsMatchingQuery(c,e,t?o:Te.min(),t?a:Ce())).next(d=>(PP(i,yC(e),d),{documents:d,Ts:a})))}function PP(n,e,t){let i=n.us.get(e)||Te.min();t.forEach((o,a)=>{a.readTime.compareTo(i)>0&&(i=a.readTime)}),n.us.set(e,i)}class K_{constructor(){this.activeTargetIds=IC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kP{constructor(){this.so=new K_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new K_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){de("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){de("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc=null;function Sf(){return pc===null?pc=function(){return 268435456+Math.round(2147483648*Math.random())}():pc++,"0x"+pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="WebChannelConnection";class xP extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${o}/databases/${a}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${a}`}get Fo(){return!1}Mo(t,i,o,a,c){const d=Sf(),f=this.xo(t,i.toUriEncodedString());de("RestConnection",`Sending RPC '${t}' ${d}:`,f,o);const g={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(g,a,c),this.No(t,f,g,o).then(v=>(de("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw Fo("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",f,"request:",o),v})}Lo(t,i,o,a,c,d){return this.Mo(t,i,o,a,c)}Oo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Go}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,c)=>t[c]=a),o&&o.headers.forEach((a,c)=>t[c]=a)}xo(t,i){const o=DP[t];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,o){const a=Sf();return new Promise((c,d)=>{const f=new D0;f.setWithCredentials(!0),f.listenOnce(x0.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Sc.NO_ERROR:const v=f.getResponseJson();de(zt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),c(v);break;case Sc.TIMEOUT:de(zt,`RPC '${e}' ${a} timed out`),d(new ue(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Sc.HTTP_ERROR:const E=f.getStatus();if(de(zt,`RPC '${e}' ${a} failed with status:`,E,"response text:",f.getResponseText()),E>0){let T=f.getResponseJson();Array.isArray(T)&&(T=T[0]);const C=T==null?void 0:T.error;if(C&&C.status&&C.message){const N=function(P){const z=P.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(z)>=0?z:Q.UNKNOWN}(C.status);d(new ue(N,C.message))}else d(new ue(Q.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new ue(Q.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{de(zt,`RPC '${e}' ${a} completed.`)}});const g=JSON.stringify(o);de(zt,`RPC '${e}' ${a} sending request:`,o),f.send(t,"POST",g,i,15)})}Bo(e,t,i){const o=Sf(),a=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=V0(),d=L0(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.xmlHttpFactory=new b0({})),this.Oo(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const v=a.join("");de(zt,`Creating RPC '${e}' stream ${o}: ${v}`,f);const E=c.createWebChannel(v,f);let T=!1,C=!1;const N=new bP({Io:P=>{C?de(zt,`Not sending because RPC '${e}' stream ${o} is closed:`,P):(T||(de(zt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),T=!0),de(zt,`RPC '${e}' stream ${o} sending:`,P),E.send(P))},To:()=>E.close()}),M=(P,z,K)=>{P.listen(z,q=>{try{K(q)}catch(Y){setTimeout(()=>{throw Y},0)}})};return M(E,tl.EventType.OPEN,()=>{C||(de(zt,`RPC '${e}' stream ${o} transport opened.`),N.yo())}),M(E,tl.EventType.CLOSE,()=>{C||(C=!0,de(zt,`RPC '${e}' stream ${o} transport closed`),N.So())}),M(E,tl.EventType.ERROR,P=>{C||(C=!0,Fo(zt,`RPC '${e}' stream ${o} transport errored:`,P),N.So(new ue(Q.UNAVAILABLE,"The operation could not be completed")))}),M(E,tl.EventType.MESSAGE,P=>{var z;if(!C){const K=P.data[0];ze(!!K);const q=K,Y=q.error||((z=q[0])===null||z===void 0?void 0:z.error);if(Y){de(zt,`RPC '${e}' stream ${o} received error:`,Y);const se=Y.status;let re=function(A){const x=ht[A];if(x!==void 0)return aw(x)}(se),D=Y.message;re===void 0&&(re=Q.INTERNAL,D="Unknown error status: "+se+" with message "+Y.message),C=!0,N.So(new ue(re,D)),E.close()}else de(zt,`RPC '${e}' stream ${o} received:`,K),N.bo(K)}}),M(d,O0.STAT_EVENT,P=>{P.stat===Yf.PROXY?de(zt,`RPC '${e}' stream ${o} detected buffering proxy`):P.stat===Yf.NOPROXY&&de(zt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Rf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n){return new $C(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t,i=1e3,o=1.5,a=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=o,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-i);o>0&&de("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t,i,o,a,c,d,f){this.ui=e,this.Ho=i,this.Jo=o,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new vw(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Yr(t.toString()),Yr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===t&&this.P_(i,o)},i=>{e(()=>{const o=new ue(Q.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return de("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(de("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OP extends ww{constructor(e,t,i,o,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=qC(this.serializer,e),i=function(a){if(!("targetChange"in a))return Te.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?Te.min():c.readTime?mr(c.readTime):Te.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=op(this.serializer),t.addTarget=function(a,c){let d;const f=c.target;if(d=ep(f)?{documents:QC(a,f)}:{query:YC(a,f)._t},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=cw(a,c.resumeToken);const g=rp(a,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Te.min())>0){d.readTime=$c(a,c.snapshotVersion.toTimestamp());const g=rp(a,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=JC(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=op(this.serializer),t.removeTarget=e,this.a_(t)}}class LP extends ww{constructor(e,t,i,o,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=a}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ze(!!e.streamToken),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=GC(e.writeResults,e.commitTime),i=mr(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=op(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>KC(this.serializer,i))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ue(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Mo(e,ip(t,i),o,a,c)).catch(a=>{throw a.name==="FirebaseError"?(a.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ue(Q.UNKNOWN,a.toString())})}Lo(e,t,i,o,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Lo(e,ip(t,i),o,c,d,a)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(Q.UNKNOWN,c.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class MP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Yr(t),this.D_=!1):de("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,t,i,o,a){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=a,this.k_._o(c=>{i.enqueueAndForget(async()=>{Us(this)&&(de("RemoteStore","Restarting streams for network reachability change."),await async function(f){const g=Ie(f);g.L_.add(4),await Fl(g),g.q_.set("Unknown"),g.L_.delete(4),await gh(g)}(this))})}),this.q_=new MP(i,o)}}async function gh(n){if(Us(n))for(const e of n.B_)await e(!0)}async function Fl(n){for(const e of n.B_)await e(!1)}function Ew(n,e){const t=Ie(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Yp(t)?Qp(t):Yo(t).r_()&&Gp(t,e))}function Kp(n,e){const t=Ie(n),i=Yo(t);t.N_.delete(e),i.r_()&&Tw(t,e),t.N_.size===0&&(i.r_()?i.o_():Us(t)&&t.q_.set("Unknown"))}function Gp(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yo(n).A_(e)}function Tw(n,e){n.Q_.xe(e),Yo(n).R_(e)}function Qp(n){n.Q_=new FC({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Yo(n).start(),n.q_.v_()}function Yp(n){return Us(n)&&!Yo(n).n_()&&n.N_.size>0}function Us(n){return Ie(n).L_.size===0}function Iw(n){n.Q_=void 0}async function FP(n){n.q_.set("Online")}async function jP(n){n.N_.forEach((e,t)=>{Gp(n,e)})}async function zP(n,e){Iw(n),Yp(n)?(n.q_.M_(e),Qp(n)):n.q_.set("Unknown")}async function BP(n,e,t){if(n.q_.set("Online"),e instanceof uw&&e.state===2&&e.cause)try{await async function(o,a){const c=a.cause;for(const d of a.targetIds)o.N_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.N_.delete(d),o.Q_.removeTarget(d))}(n,e)}catch(i){de("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Wc(n,i)}else if(e instanceof Cc?n.Q_.Ke(e):e instanceof lw?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Te.min()))try{const i=await _w(n.localStore);t.compareTo(i)>=0&&await function(a,c){const d=a.Q_.rt(c);return d.targetChanges.forEach((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const v=a.N_.get(g);v&&a.N_.set(g,v.withResumeToken(f.resumeToken,c))}}),d.targetMismatches.forEach((f,g)=>{const v=a.N_.get(f);if(!v)return;a.N_.set(f,v.withResumeToken(Ot.EMPTY_BYTE_STRING,v.snapshotVersion)),Tw(a,f);const E=new Ni(v.target,f,g,v.sequenceNumber);Gp(a,E)}),a.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){de("RemoteStore","Failed to raise snapshot:",i),await Wc(n,i)}}async function Wc(n,e,t){if(!Ll(e))throw e;n.L_.add(1),await Fl(n),n.q_.set("Offline"),t||(t=()=>_w(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{de("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await gh(n)})}function Sw(n,e){return e().catch(t=>Wc(n,t,e))}async function yh(n){const e=Ie(n),t=Fi(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;$P(e);)try{const o=await AP(e.localStore,i);if(o===null){e.O_.length===0&&t.o_();break}i=o.batchId,WP(e,o)}catch(o){await Wc(e,o)}Rw(e)&&Aw(e)}function $P(n){return Us(n)&&n.O_.length<10}function WP(n,e){n.O_.push(e);const t=Fi(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Rw(n){return Us(n)&&!Fi(n).n_()&&n.O_.length>0}function Aw(n){Fi(n).start()}async function HP(n){Fi(n).p_()}async function qP(n){const e=Fi(n);for(const t of n.O_)e.m_(t.mutations)}async function KP(n,e,t){const i=n.O_.shift(),o=zp.from(i,e,t);await Sw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await yh(n)}async function GP(n,e){e&&Fi(n).V_&&await async function(i,o){if(function(c){return VC(c)&&c!==Q.ABORTED}(o.code)){const a=i.O_.shift();Fi(i).s_(),await Sw(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,o)),await yh(i)}}(n,e),Rw(n)&&Aw(n)}async function Q_(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),de("RemoteStore","RemoteStore received new credentials");const i=Us(t);t.L_.add(3),await Fl(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await gh(t)}async function QP(n,e){const t=Ie(n);e?(t.L_.delete(2),await gh(t)):e||(t.L_.add(2),await Fl(t),t.q_.set("Unknown"))}function Yo(n){return n.K_||(n.K_=function(t,i,o){const a=Ie(t);return a.w_(),new OP(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Eo:FP.bind(null,n),Ro:jP.bind(null,n),mo:zP.bind(null,n),d_:BP.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Yp(n)?Qp(n):n.q_.set("Unknown")):(await n.K_.stop(),Iw(n))})),n.K_}function Fi(n){return n.U_||(n.U_=function(t,i,o){const a=Ie(t);return a.w_(),new LP(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:HP.bind(null,n),mo:GP.bind(null,n),f_:qP.bind(null,n),g_:KP.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await yh(n)):(await n.U_.stop(),n.O_.length>0&&(de("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t,i,o,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,a){const c=Date.now()+i,d=new Xp(e,t,c,o,a);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jp(n,e){if(Yr("AsyncQueue",`${e}: ${n}`),Ll(n))return new ue(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.comparator=e?(t,i)=>e(t,i)||me.comparator(t.key,i.key):(t,i)=>me.comparator(t.key,i.key),this.keyedMap=nl(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new Lo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,a=i.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Lo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.W_=new et(me.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Ee():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Wo{constructor(e,t,i,o,a,c,d,f,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,o,a){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Wo(e,t,Lo.emptySet(t),c,i,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ch(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class XP{constructor(){this.queries=X_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const o=Ie(t),a=o.queries;o.queries=X_(),a.forEach((c,d)=>{for(const f of d.j_)f.onError(i)})})(this,new ue(Q.ABORTED,"Firestore shutting down"))}}function X_(){return new Qo(n=>Q0(n),ch)}async function Cw(n,e){const t=Ie(n);let i=3;const o=e.query;let a=t.queries.get(o);a?!a.H_()&&e.J_()&&(i=2):(a=new YP,i=e.J_()?0:1);try{switch(i){case 0:a.z_=await t.onListen(o,!0);break;case 1:a.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=Jp(c,`Initialization of query '${bo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,a),a.j_.push(e),e.Z_(t.onlineState),a.z_&&e.X_(a.z_)&&Zp(t)}async function Pw(n,e){const t=Ie(n),i=e.query;let o=3;const a=t.queries.get(i);if(a){const c=a.j_.indexOf(e);c>=0&&(a.j_.splice(c,1),a.j_.length===0?o=e.J_()?0:1:!a.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function JP(n,e){const t=Ie(n);let i=!1;for(const o of e){const a=o.query,c=t.queries.get(a);if(c){for(const d of c.j_)d.X_(o)&&(i=!0);c.z_=o}}i&&Zp(t)}function ZP(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const a of o.j_)a.onError(t);i.queries.delete(e)}function Zp(n){n.Y_.forEach(e=>{e.next()})}var lp,J_;(J_=lp||(lp={})).ea="default",J_.Cache="cache";class kw{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Wo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==lp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.key=e}}class Dw{constructor(e){this.key=e}}class ek{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ce(),this.mutatedKeys=Ce(),this.Aa=Y0(e),this.Ra=new Lo(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new Y_,o=t?t.Ra:this.Ra;let a=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,E)=>{const T=o.get(v),C=hh(this.query,E)?E:null,N=!!T&&this.mutatedKeys.has(T.key),M=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let P=!1;T&&C?T.data.isEqual(C.data)?N!==M&&(i.track({type:3,doc:C}),P=!0):this.ga(T,C)||(i.track({type:2,doc:C}),P=!0,(f&&this.Aa(C,f)>0||g&&this.Aa(C,g)<0)&&(d=!0)):!T&&C?(i.track({type:0,doc:C}),P=!0):T&&!C&&(i.track({type:1,doc:T}),P=!0,(f||g)&&(d=!0)),P&&(C?(c=c.add(C),a=M?a.add(v):a.delete(v)):(c=c.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),a=a.delete(v.key),i.track({type:1,doc:v})}return{Ra:c,fa:i,ns:d,mutatedKeys:a}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const a=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort((v,E)=>function(C,N){const M=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return M(C)-M(N)}(v.type,E.type)||this.Aa(v.doc,E.doc)),this.pa(i),o=o!=null&&o;const d=t&&!o?this.ya():[],f=this.da.size===0&&this.current&&!o?1:0,g=f!==this.Ea;return this.Ea=f,c.length!==0||g?{snapshot:new Wo(this.query,e.Ra,a,c,e.mutatedKeys,f===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:d}:{wa:d}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Y_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ce(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new Dw(i))}),this.da.forEach(i=>{e.has(i)||t.push(new Nw(i))}),t}ba(e){this.Ta=e.Ts,this.da=Ce();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Wo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class tk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class nk{constructor(e){this.key=e,this.va=!1}}class rk{constructor(e,t,i,o,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new Qo(d=>Q0(d),ch),this.Ma=new Map,this.xa=new Set,this.Oa=new et(me.comparator),this.Na=new Map,this.La=new Wp,this.Ba={},this.ka=new Map,this.qa=$o.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ik(n,e,t=!0){const i=Mw(n);let o;const a=i.Fa.get(e);return a?(i.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.Da()):o=await bw(i,e,t,!0),o}async function sk(n,e){const t=Mw(n);await bw(t,e,!0,!1)}async function bw(n,e,t,i){const o=await CP(n.localStore,pr(e)),a=o.targetId,c=t?n.sharedClientState.addLocalQueryTarget(a):"not-current";let d;return i&&(d=await ok(n,e,a,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&Ew(n.remoteStore,o),d}async function ok(n,e,t,i,o){n.Ka=(E,T,C)=>async function(M,P,z,K){let q=P.view.ma(z);q.ns&&(q=await q_(M.localStore,P.query,!1).then(({documents:D})=>P.view.ma(D,q)));const Y=K&&K.targetChanges.get(P.targetId),se=K&&K.targetMismatches.get(P.targetId)!=null,re=P.view.applyChanges(q,M.isPrimaryClient,Y,se);return ev(M,P.targetId,re.wa),re.snapshot}(n,E,T,C);const a=await q_(n.localStore,e,!0),c=new ek(e,a.Ts),d=c.ma(a.documents),f=Ul.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),g=c.applyChanges(d,n.isPrimaryClient,f);ev(n,t,g.wa);const v=new tk(e,t,c);return n.Fa.set(e,v),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),g.snapshot}async function ak(n,e,t){const i=Ie(n),o=i.Fa.get(e),a=i.Ma.get(o.targetId);if(a.length>1)return i.Ma.set(o.targetId,a.filter(c=>!ch(c,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await ap(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Kp(i.remoteStore,o.targetId),up(i,o.targetId)}).catch(Ol)):(up(i,o.targetId),await ap(i.localStore,o.targetId,!0))}async function lk(n,e){const t=Ie(n),i=t.Fa.get(e),o=t.Ma.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Kp(t.remoteStore,i.targetId))}async function uk(n,e,t){const i=gk(n);try{const o=await function(c,d){const f=Ie(c),g=vt.now(),v=d.reduce((C,N)=>C.add(N.key),Ce());let E,T;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Xr(),M=Ce();return f.cs.getEntries(C,v).next(P=>{N=P,N.forEach((z,K)=>{K.isValidDocument()||(M=M.add(z))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,N)).next(P=>{E=P;const z=[];for(const K of d){const q=DC(K,E.get(K.key).overlayedDocument);q!=null&&z.push(new $i(K.key,q,z0(q.value.mapValue),Yn.exists(!0)))}return f.mutationQueue.addMutationBatch(C,g,z,d)}).next(P=>{T=P;const z=P.applyToLocalDocumentSet(E,M);return f.documentOverlayCache.saveOverlays(C,P.batchId,z)})}).then(()=>({batchId:T.batchId,changes:J0(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,f){let g=c.Ba[c.currentUser.toKey()];g||(g=new et(Le)),g=g.insert(d,f),c.Ba[c.currentUser.toKey()]=g}(i,o.batchId,t),await jl(i,o.changes),await yh(i.remoteStore)}catch(o){const a=Jp(o,"Failed to persist write");t.reject(a)}}async function xw(n,e){const t=Ie(n);try{const i=await SP(t.localStore,e);e.targetChanges.forEach((o,a)=>{const c=t.Na.get(a);c&&(ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.va=!0:o.modifiedDocuments.size>0?ze(c.va):o.removedDocuments.size>0&&(ze(c.va),c.va=!1))}),await jl(t,i,e)}catch(i){await Ol(i)}}function Z_(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Fa.forEach((a,c)=>{const d=c.view.Z_(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const f=Ie(c);f.onlineState=d;let g=!1;f.queries.forEach((v,E)=>{for(const T of E.j_)T.Z_(d)&&(g=!0)}),g&&Zp(f)}(i.eventManager,e),o.length&&i.Ca.d_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ck(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Na.get(e),a=o&&o.key;if(a){let c=new et(me.comparator);c=c.insert(a,$t.newNoDocument(a,Te.min()));const d=Ce().add(a),f=new ph(Te.min(),new Map,new et(Le),c,d);await xw(i,f),i.Oa=i.Oa.remove(a),i.Na.delete(e),em(i)}else await ap(i.localStore,e,!1).then(()=>up(i,e,t)).catch(Ol)}async function hk(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await IP(t.localStore,e);Lw(t,i,null),Ow(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await jl(t,o)}catch(o){await Ol(o)}}async function dk(n,e,t){const i=Ie(n);try{const o=await function(c,d){const f=Ie(c);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return f.mutationQueue.lookupMutationBatch(g,d).next(E=>(ze(E!==null),v=E.keys(),f.mutationQueue.removeMutationBatch(g,E))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,v,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>f.localDocuments.getDocuments(g,v))})}(i.localStore,e);Lw(i,e,t),Ow(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await jl(i,o)}catch(o){await Ol(o)}}function Ow(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Lw(n,e,t){const i=Ie(n);let o=i.Ba[i.currentUser.toKey()];if(o){const a=o.get(e);a&&(t?a.reject(t):a.resolve(),o=o.remove(e)),i.Ba[i.currentUser.toKey()]=o}}function up(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||Vw(n,i)})}function Vw(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Kp(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),em(n))}function ev(n,e,t){for(const i of t)i instanceof Nw?(n.La.addReference(i.key,e),fk(n,i)):i instanceof Dw?(de("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||Vw(n,i.key)):Ee()}function fk(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(de("SyncEngine","New document in limbo: "+t),n.xa.add(i),em(n))}function em(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new me(Ke.fromString(e)),i=n.qa.next();n.Na.set(i,new nk(t)),n.Oa=n.Oa.insert(t,i),Ew(n.remoteStore,new Ni(pr(Up(t.path)),i,"TargetPurposeLimboResolution",bp.oe))}}async function jl(n,e,t){const i=Ie(n),o=[],a=[],c=[];i.Fa.isEmpty()||(i.Fa.forEach((d,f)=>{c.push(i.Ka(f,e,t).then(g=>{var v;if((g||t)&&i.isPrimaryClient){const E=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(f.targetId,E?"current":"not-current")}if(g){o.push(g);const E=qp.Wi(f.targetId,g);a.push(E)}}))}),await Promise.all(c),i.Ca.d_(o),await async function(f,g){const v=Ie(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>Z.forEach(g,T=>Z.forEach(T.$i,C=>v.persistence.referenceDelegate.addReference(E,T.targetId,C)).next(()=>Z.forEach(T.Ui,C=>v.persistence.referenceDelegate.removeReference(E,T.targetId,C)))))}catch(E){if(!Ll(E))throw E;de("LocalStore","Failed to update sequence numbers: "+E)}for(const E of g){const T=E.targetId;if(!E.fromCache){const C=v.os.get(T),N=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(N);v.os=v.os.insert(T,M)}}}(i.localStore,a))}async function pk(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){de("SyncEngine","User change. New user:",e.toKey());const i=await yw(t.localStore,e);t.currentUser=e,function(a,c){a.ka.forEach(d=>{d.forEach(f=>{f.reject(new ue(Q.CANCELLED,c))})}),a.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await jl(t,i.hs)}}function mk(n,e){const t=Ie(n),i=t.Na.get(e);if(i&&i.va)return Ce().add(i.key);{let o=Ce();const a=t.Ma.get(e);if(!a)return o;for(const c of a){const d=t.Fa.get(c);o=o.unionWith(d.view.Va)}return o}}function Mw(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ck.bind(null,e),e.Ca.d_=JP.bind(null,e.eventManager),e.Ca.$a=ZP.bind(null,e.eventManager),e}function gk(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dk.bind(null,e),e}class tv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=mh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return TP(this.persistence,new wP,e.initialUser,this.serializer)}createPersistence(e){return new yP(Hp.Zr,this.serializer)}createSharedClientState(e){return new kP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yk{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Z_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=pk.bind(null,this.syncEngine),await QP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XP}()}createDatastore(e){const t=mh(e.databaseInfo.databaseId),i=function(a){return new xP(a)}(e.databaseInfo);return function(a,c,d,f){return new VP(a,c,d,f)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,a,c,d){return new UP(i,o,a,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>Z_(this.syncEngine,t,0),function(){return G_.D()?new G_:new NP}())}createSyncEngine(e,t){return function(o,a,c,d,f,g,v){const E=new rk(o,a,c,d,f,g);return v&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const a=Ie(o);de("RemoteStore","RemoteStore shutting down."),a.L_.add(5),await Fl(a),a.k_.shutdown(),a.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Yr("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,t,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Bt.UNAUTHENTICATED,this.clientId=U0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async a=>{de("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(de("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ue(Q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Jp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Af(n,e){n.asyncQueue.verifyOperationInProgress(),de("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await yw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function nv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wk(n);de("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Q_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Q_(e.remoteStore,o)),n._onlineComponents=e}function vk(n){return n.name==="FirebaseError"?n.code===Q.FAILED_PRECONDITION||n.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function wk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de("FirestoreClient","Using user provided OfflineComponentProvider");try{await Af(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!vk(t))throw t;Fo("Error using user provided cache. Falling back to memory cache: "+t),await Af(n,new tv)}}else de("FirestoreClient","Using default OfflineComponentProvider"),await Af(n,new tv);return n._offlineComponents}async function Fw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(de("FirestoreClient","Using user provided OnlineComponentProvider"),await nv(n,n._uninitializedComponentsProvider._online)):(de("FirestoreClient","Using default OnlineComponentProvider"),await nv(n,new yk))),n._onlineComponents}function Ek(n){return Fw(n).then(e=>e.syncEngine)}async function jw(n){const e=await Fw(n),t=e.eventManager;return t.onListen=ik.bind(null,e.syncEngine),t.onUnlisten=ak.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lk.bind(null,e.syncEngine),t}function Tk(n,e,t={}){const i=new Hr;return n.asyncQueue.enqueueAndForget(async()=>function(a,c,d,f,g){const v=new Uw({next:T=>{c.enqueueAndForget(()=>Pw(a,E));const C=T.docs.has(d);!C&&T.fromCache?g.reject(new ue(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&T.fromCache&&f&&f.source==="server"?g.reject(new ue(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new kw(Up(d.path),v,{includeMetadataChanges:!0,_a:!0});return Cw(a,E)}(await jw(n),n.asyncQueue,e,t,i)),i.promise}function Ik(n,e,t={}){const i=new Hr;return n.asyncQueue.enqueueAndForget(async()=>function(a,c,d,f,g){const v=new Uw({next:T=>{c.enqueueAndForget(()=>Pw(a,E)),T.fromCache&&f.source==="server"?g.reject(new ue(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(T)},error:T=>g.reject(T)}),E=new kw(d,v,{includeMetadataChanges:!0,_a:!0});return Cw(a,E)}(await jw(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(n,e,t){if(!t)throw new ue(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Sk(n,e,t,i){if(e===!0&&i===!0)throw new ue(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function iv(n){if(!me.isDocumentKey(n))throw new ue(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sv(n){if(me.isDocumentKey(n))throw new ue(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _h(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee()}function _r(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_h(n);throw new ue(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ue(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ov({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ue(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ue(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ov(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new FA;switch(i.type){case"firstParty":return new $A(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ue(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=rv.get(t);i&&(de("ComponentProvider","Removing Datastore"),rv.delete(t),i.terminate())}(this),Promise.resolve()}}function Rk(n,e,t,i={}){var o;const a=(n=_r(n,vh))._getSettings(),c=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==c&&Fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:c,ssl:!1})),i.mockUserToken){let d,f;if(typeof i.mockUserToken=="string")d=i.mockUserToken,f=Bt.MOCK_USER;else{d=I0(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new ue(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Bt(g)}n._authCredentials=new jA(new M0(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Xo(this.firestore,e,this._query)}}class Yt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class xi extends Xo{constructor(e,t,i){super(e,t,Up(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new me(e))}withConverter(e){return new xi(this.firestore,e,this._path)}}function Ak(n,e,...t){if(n=lt(n),Bw("collection","path",e),n instanceof vh){const i=Ke.fromString(e,...t);return sv(i),new xi(n,null,i)}{if(!(n instanceof Yt||n instanceof xi))throw new ue(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return sv(i),new xi(n.firestore,null,i)}}function wh(n,e,...t){if(n=lt(n),arguments.length===1&&(e=U0.newId()),Bw("doc","path",e),n instanceof vh){const i=Ke.fromString(e,...t);return iv(i),new Yt(n,null,new me(i))}{if(!(n instanceof Yt||n instanceof xi))throw new ue(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return iv(i),new Yt(n.firestore,n instanceof xi?n.converter:null,new me(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new vw(this,"async_queue_retry"),this.Eu=()=>{const t=Rf();t&&de("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const e=Rf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=Rf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const t=new Hr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Ll(e))throw e;de("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const t=this.au.then(()=>(this.Pu=!0,e().catch(i=>{this.hu=i,this.Pu=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Yr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Pu=!1,i))));return this.au=t,t}enqueueAfterDelay(e,t,i){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const o=Xp.createAndSchedule(this,e,t,i,a=>this.Vu(a));return this.lu.push(o),o}du(){this.hu&&Ee()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.lu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}class Jo extends vh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=function(){return new Ck}(),this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$w(this),this._firestoreClient.terminate()}}function Pk(n,e){const t=typeof n=="object"?n:Np(),i=typeof n=="string"?n:"(default)",o=lh(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const a=w0("firestore");a&&Rk(o,...a)}return o}function tm(n){return n._firestoreClient||$w(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function $w(n){var e,t,i;const o=n._freezeSettings(),a=function(d,f,g,v){return new nC(d,f,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,zw(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._firestoreClient=new _k(n._authCredentials,n._appCheckCredentials,n._queue,a),!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ho(Ot.fromBase64String(e))}catch(t){throw new ue(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ho(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==o[a])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=/^__.*__$/;class Nk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new $i(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ml(e,this.data,t,this.fieldTransforms)}}class Ww{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new $i(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class im{constructor(e,t,i,o,a,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,a===void 0&&this.yu(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new im(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Su({path:i,Du:!1});return o.vu(e),o}Cu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Su({path:i,Du:!1});return o.yu(),o}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Hc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Hw(this.wu)&&kk.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class Dk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||mh(e)}Nu(e,t,i,o=!1){return new im({wu:e,methodName:t,Ou:i,path:bt.emptyPath(),Du:!1,xu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sm(n){const e=n._freezeSettings(),t=mh(n._databaseId);return new Dk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function bk(n,e,t,i,o,a={}){const c=n.Nu(a.merge||a.mergeFields?2:0,e,t,o);am("Data must be an object, but it was:",c,i);const d=qw(i,c);let f,g;if(a.merge)f=new gn(c.fieldMask),g=c.fieldTransforms;else if(a.mergeFields){const v=[];for(const E of a.mergeFields){const T=cp(e,E,t);if(!c.contains(T))throw new ue(Q.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Gw(v,T)||v.push(T)}f=new gn(v),g=c.fieldTransforms.filter(E=>f.covers(E.field))}else f=null,g=c.fieldTransforms;return new Nk(new on(d),f,g)}class Ih extends Th{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ih}}class om extends Th{_toFieldTransform(e){return new CC(e.path,new vl)}isEqual(e){return e instanceof om}}function xk(n,e,t,i){const o=n.Nu(1,e,t);am("Data must be an object, but it was:",o,i);const a=[],c=on.empty();Ms(i,(f,g)=>{const v=lm(e,f,t);g=lt(g);const E=o.Cu(v);if(g instanceof Ih)a.push(v);else{const T=zl(g,E);T!=null&&(a.push(v),c.set(v,T))}});const d=new gn(a);return new Ww(c,d,o.fieldTransforms)}function Ok(n,e,t,i,o,a){const c=n.Nu(1,e,t),d=[cp(e,i,t)],f=[o];if(a.length%2!=0)throw new ue(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<a.length;T+=2)d.push(cp(e,a[T])),f.push(a[T+1]);const g=[],v=on.empty();for(let T=d.length-1;T>=0;--T)if(!Gw(g,d[T])){const C=d[T];let N=f[T];N=lt(N);const M=c.Cu(C);if(N instanceof Ih)g.push(C);else{const P=zl(N,M);P!=null&&(g.push(C),v.set(C,P))}}const E=new gn(g);return new Ww(v,E,c.fieldTransforms)}function Lk(n,e,t,i=!1){return zl(t,n.Nu(i?4:3,e))}function zl(n,e){if(Kw(n=lt(n)))return am("Unsupported field value:",e,n),qw(n,e);if(n instanceof Th)return function(i,o){if(!Hw(o.wu))throw o.Mu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Mu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(i,o){const a=[];let c=0;for(const d of i){let f=zl(d,o.Fu(c));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),c++}return{arrayValue:{values:a}}}(n,e)}return function(i,o){if((i=lt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return SC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=vt.fromDate(i);return{timestampValue:$c(o.serializer,a)}}if(i instanceof vt){const a=new vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:$c(o.serializer,a)}}if(i instanceof nm)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ho)return{bytesValue:cw(o.serializer,i._byteString)};if(i instanceof Yt){const a=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(a))throw o.Mu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:$p(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof rm)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(f=>{if(typeof f!="number")throw d.Mu("VectorValues must only contain numeric values.");return Fp(d.serializer,f)})}}}}}}(i,o);throw o.Mu(`Unsupported field value: ${_h(i)}`)}(n,e)}function qw(n,e){const t={};return F0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(n,(i,o)=>{const a=zl(o,e.bu(i));a!=null&&(t[i]=a)}),{mapValue:{fields:t}}}function Kw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof nm||n instanceof Ho||n instanceof Yt||n instanceof Th||n instanceof rm)}function am(n,e,t){if(!Kw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=_h(t);throw i==="an object"?e.Mu(n+" a custom object"):e.Mu(n+" "+i)}}function cp(n,e,t){if((e=lt(e))instanceof Eh)return e._internalPath;if(typeof e=="string")return lm(n,e);throw Hc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Vk=new RegExp("[~\\*/\\[\\]]");function lm(n,e,t){if(e.search(Vk)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Eh(...e.split("."))._internalPath}catch{throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Hc(n,e,t,i,o){const a=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||c)&&(f+=" (found",a&&(f+=` in field ${i}`),c&&(f+=` in document ${o}`),f+=")"),new ue(Q.INVALID_ARGUMENT,d+n+f)}function Gw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,t,i,o,a){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(um("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Mk extends Qw{data(){return super.data()}}function um(n,e){return typeof e=="string"?lm(n,e):e instanceof Eh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cm{}class Fk extends cm{}function dO(n,e,...t){let i=[];e instanceof cm&&i.push(e),i=i.concat(t),function(a){const c=a.filter(f=>f instanceof hm).length,d=a.filter(f=>f instanceof Sh).length;if(c>1||c>0&&d>0)throw new ue(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class Sh extends Fk{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Sh(e,t,i)}_apply(e){const t=this._parse(e);return Yw(e._query,t),new Xo(e.firestore,e.converter,tp(e._query,t))}_parse(e){const t=sm(e.firestore);return function(a,c,d,f,g,v,E){let T;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ue(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){lv(E,v);const C=[];for(const N of E)C.push(av(f,a,N));T={arrayValue:{values:C}}}else T=av(f,a,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||lv(E,v),T=Lk(d,c,E,v==="in"||v==="not-in");return dt.create(g,v,T)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function fO(n,e,t){const i=e,o=um("where",n);return Sh._create(o,i,t)}class hm extends cm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hm(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Jn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,a){let c=o;const d=a.getFlattenedFilters();for(const f of d)Yw(c,f),c=tp(c,f)}(e._query,t),new Xo(e.firestore,e.converter,tp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function av(n,e,t){if(typeof(t=lt(t))=="string"){if(t==="")throw new ue(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!G0(e)&&t.indexOf("/")!==-1)throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!me.isDocumentKey(i))throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return k_(n,new me(i))}if(t instanceof Yt)return k_(n,t._key);throw new ue(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_h(t)}.`)}function lv(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Yw(n,e){const t=function(o,a){for(const c of o)for(const d of c.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class jk{convertValue(e,t="none"){switch(Ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ks(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ms(e,(o,a)=>{i[o]=this.convertValue(a,t)}),i}convertVectorValue(e){var t,i,o;const a=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>at(c.doubleValue));return new rm(a)}convertGeoPoint(e){return new nm(at(e.latitude),at(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Op(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(gl(e));default:return null}}convertTimestamp(e){const t=Ui(e);return new vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);ze(gw(i));const o=new yl(i.get(1),i.get(3)),a=new me(i.popFirst(5));return o.isEqual(t)||Yr(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xw extends Qw{constructor(e,t,i,o,a,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(um("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Pc extends Xw{data(e={}){return super.data(e)}}class Bk{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new il(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Pc(this._firestore,this._userDataWriter,i.key,i,new il(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const f=new Pc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new il(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new Pc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new il(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:$k(d.type),doc:f,oldIndex:g,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function $k(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(n){n=_r(n,Yt);const e=_r(n.firestore,Jo);return Tk(tm(e),n._key).then(t=>Kk(e,n,t))}class Zw extends jk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ho(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,t)}}function Wk(n){n=_r(n,Xo);const e=_r(n.firestore,Jo),t=tm(e),i=new Zw(e);return Uk(n._query),Ik(t,n._query).then(o=>new Bk(e,i,n,o))}function Hk(n,e,t){n=_r(n,Yt);const i=_r(n.firestore,Jo),o=zk(n.converter,e);return dm(i,[bk(sm(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Yn.none())])}function qk(n,e,t,...i){n=_r(n,Yt);const o=_r(n.firestore,Jo),a=sm(o);let c;return c=typeof(e=lt(e))=="string"||e instanceof Eh?Ok(a,"updateDoc",n._key,e,t,i):xk(a,"updateDoc",n._key,e),dm(o,[c.toMutation(n._key,Yn.exists(!0))])}function pO(n){return dm(_r(n.firestore,Jo),[new jp(n._key,Yn.none())])}function dm(n,e){return function(i,o){const a=new Hr;return i.asyncQueue.enqueueAndForget(async()=>uk(await Ek(i),o,a)),a.promise}(tm(n),e)}function Kk(n,e,t){const i=t.docs.get(e._key),o=new Zw(n);return new Xw(n,o,e._key,i,new il(t.hasPendingWrites,t.fromCache),e.converter)}function mO(){return new om("serverTimestamp")}(function(e,t=!0){(function(o){Go=o})(Vs),Cs(new Vi("firestore",(i,{instanceIdentifier:o,options:a})=>{const c=i.getProvider("app").getImmediate(),d=new Jo(new zA(i.getProvider("auth-internal")),new HA(i.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ue(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yl(g.options.projectId,v)}(c,o),c);return a=Object.assign({useFetchStreams:t},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),fr(S_,"4.7.0",e),fr(S_,"4.7.0","esm2017")})();var Gk="firebase",Qk="10.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(Gk,Qk,"app");function fm(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function eE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yk=eE,tE=new bl("auth","Firebase",eE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Pp("@firebase/auth");function Xk(n,...e){qc.logLevel<=ke.WARN&&qc.warn(`Auth (${Vs}): ${n}`,...e)}function kc(n,...e){qc.logLevel<=ke.ERROR&&qc.error(`Auth (${Vs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(n,...e){throw mm(n,...e)}function Xn(n,...e){return mm(n,...e)}function pm(n,e,t){const i=Object.assign(Object.assign({},Yk()),{[e]:t});return new bl("auth","Firebase",i).create(e,{appName:n.name})}function qr(n){return pm(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jk(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Nn(n,"argument-error"),pm(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mm(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return tE.create(n,...e)}function ve(n,e,...t){if(!n)throw mm(e,...t)}function zr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw kc(e),new Error(e)}function Jr(n,e){n||zr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zk(){return uv()==="http:"||uv()==="https:"}function uv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zk()||wR()||"connection"in navigator)?navigator.onLine:!0}function tN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jr(t>e,"Short delay should be less than long delay!"),this.isMobile=_R()||ER()}get(){return eN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n,e){Jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=new Bl(3e4,6e4);function Wi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Hi(n,e,t,i,o={}){return rE(n,o,async()=>{let a={},c={};i&&(e==="GET"?c=i:a={body:JSON.stringify(i)});const d=xl(Object.assign({key:n.config.apiKey},c)).slice(1),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode),nE.fetch()(iE(n,n.config.apiHost,t,d),Object.assign({method:e,headers:f,referrerPolicy:"no-referrer"},a))})}async function rE(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},nN),e);try{const o=new sN(n),a=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw mc(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const d=a.ok?c.errorMessage:c.error.message,[f,g]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw mc(n,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw mc(n,"email-already-in-use",c);if(f==="USER_DISABLED")throw mc(n,"user-disabled",c);const v=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw pm(n,v,g);Nn(n,v)}}catch(o){if(o instanceof wr)throw o;Nn(n,"network-request-failed",{message:String(o)})}}async function $l(n,e,t,i,o={}){const a=await Hi(n,e,t,i,o);return"mfaPendingCredential"in a&&Nn(n,"multi-factor-auth-required",{_serverResponse:a}),a}function iE(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?gm(n.config,o):`${n.config.apiScheme}://${o}`}function iN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Xn(this.auth,"network-request-failed")),rN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=Xn(n,e,i);return o.customData._tokenResponse=t,o}function cv(n){return n!==void 0&&n.enterprise!==void 0}class oN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return iN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function aN(n,e){return Hi(n,"GET","/v2/recaptchaConfig",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(n,e){return Hi(n,"POST","/v1/accounts:delete",e)}async function sE(n,e){return Hi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uN(n,e=!1){const t=lt(n),i=await t.getIdToken(e),o=ym(i);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:cl(Cf(o.auth_time)),issuedAtTime:cl(Cf(o.iat)),expirationTime:cl(Cf(o.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Cf(n){return Number(n)*1e3}function ym(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return kc("JWT malformed, contained fewer than 3 sections"),null;try{const o=Vc(t);return o?JSON.parse(o):(kc("Failed to decode base64 JWT payload"),null)}catch(o){return kc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function hv(n){const e=ym(n);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof wr&&cN(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function cN({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Tl(n,sE(t,{idToken:i}));ve(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?oE(a.providerUserInfo):[],d=fN(n.providerData,c),f=n.isAnonymous,g=!(n.email&&a.passwordHash)&&!(d!=null&&d.length),v=f?g:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new dp(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function dN(n){const e=lt(n);await Kc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fN(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function oE(n){return n.map(e=>{var{providerId:t}=e,i=fm(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(n,e){const t=await rE(n,{},async()=>{const i=xl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=n.config,c=iE(n,o,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",nE.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mN(n,e){return Hi(n,"POST","/v2/accounts:revokeToken",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=hv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:a}=await pN(e,t);this.updateTokensAndExpiration(i,o,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:a}=t,c=new Vo;return i&&(ve(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(ve(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),a&&(ve(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vo,this.toJSON())}_performRefresh(){return zr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n,e){ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Br{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,a=fm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new dp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Tl(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uN(this,e)}reload(){return dN(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Kc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(qr(this.auth));const e=await this.getIdToken();return await Tl(this,lN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,a,c,d,f,g,v;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,T=(o=t.email)!==null&&o!==void 0?o:void 0,C=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,N=(c=t.photoURL)!==null&&c!==void 0?c:void 0,M=(d=t.tenantId)!==null&&d!==void 0?d:void 0,P=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,z=(g=t.createdAt)!==null&&g!==void 0?g:void 0,K=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:q,emailVerified:Y,isAnonymous:se,providerData:re,stsTokenManager:D}=t;ve(q&&D,e,"internal-error");const S=Vo.fromJSON(this.name,D);ve(typeof q=="string",e,"internal-error"),Ri(E,e.name),Ri(T,e.name),ve(typeof Y=="boolean",e,"internal-error"),ve(typeof se=="boolean",e,"internal-error"),Ri(C,e.name),Ri(N,e.name),Ri(M,e.name),Ri(P,e.name),Ri(z,e.name),Ri(K,e.name);const A=new Br({uid:q,auth:e,email:T,emailVerified:Y,displayName:E,isAnonymous:se,photoURL:N,phoneNumber:C,tenantId:M,stsTokenManager:S,createdAt:z,lastLoginAt:K});return re&&Array.isArray(re)&&(A.providerData=re.map(x=>Object.assign({},x))),P&&(A._redirectEventId=P),A}static async _fromIdTokenResponse(e,t,i=!1){const o=new Vo;o.updateFromServerResponse(t);const a=new Br({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Kc(a),a}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?oE(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new Vo;d.updateFromIdToken(i);const f=new Br({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new dp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,g),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new Map;function $r(n){Jr(n instanceof Function,"Expected a class definition");let e=dv.get(n);return e?(Jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}aE.type="NONE";const fv=aE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n,e,t){return`firebase:${n}:${e}:${t}`}class Mo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:a}=this.auth;this.fullUserKey=Nc(this.userKey,o.apiKey,a),this.fullPersistenceKey=Nc("persistence",o.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Mo($r(fv),e,i);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=o[0]||$r(fv);const c=Nc(i,e.config.apiKey,e.name);let d=null;for(const g of t)try{const v=await g._get(c);if(v){const E=Br._fromJSON(e,v);g!==a&&(d=E),a=g;break}}catch{}const f=o.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Mo(a,e,i):(a=f[0],d&&await a._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==a)try{await g._remove(c)}catch{}})),new Mo(a,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fE(e))return"Blackberry";if(pE(e))return"Webos";if(uE(e))return"Safari";if((e.includes("chrome/")||cE(e))&&!e.includes("edge/"))return"Chrome";if(dE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function lE(n=Wt()){return/firefox\//i.test(n)}function uE(n=Wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cE(n=Wt()){return/crios\//i.test(n)}function hE(n=Wt()){return/iemobile/i.test(n)}function dE(n=Wt()){return/android/i.test(n)}function fE(n=Wt()){return/blackberry/i.test(n)}function pE(n=Wt()){return/webos/i.test(n)}function _m(n=Wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gN(n=Wt()){var e;return _m(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yN(){return TR()&&document.documentMode===10}function mE(n=Wt()){return _m(n)||dE(n)||pE(n)||fE(n)||/windows phone/i.test(n)||hE(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(n,e=[]){let t;switch(n){case"Browser":t=pv(Wt());break;case"Worker":t=`${pv(Wt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=a=>new Promise((c,d)=>{try{const f=e(a);c(f)}catch(f){d(f)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vN(n,e={}){return Hi(n,"GET","/v2/passwordPolicy",Wi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=6;class EN{constructor(e){var t,i,o,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:wN,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,a,c,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(i=f.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(c=f.containsNumericCharacter)!==null&&c!==void 0?c:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mv(this),this.idTokenSubscription=new mv(this),this.beforeStateQueue=new _N(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$r(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Mo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await sE(this,{idToken:e}),i=await Br._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===d)&&(f!=null&&f.user)&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(qr(this));const t=e?lt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vN(this),t=new EN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await mN(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$r(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await Mo.create(this,[$r(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(d,this,"internal-error"),d.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,i,o);return()=>{c=!0,f()}}else{const f=e.addObserver(t);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Xk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function qi(n){return lt(n)}class mv{constructor(e){this.auth=e,this.observer=null,this.addObserver=NR(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IN(n){Rh=n}function yE(n){return Rh.loadJS(n)}function SN(){return Rh.recaptchaEnterpriseScript}function RN(){return Rh.gapiScript}function AN(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const CN="recaptcha-enterprise",PN="NO_RECAPTCHA";class kN{constructor(e){this.type=CN,this.auth=qi(e)}async verify(e="verify",t=!1){async function i(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,d)=>{aN(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new oN(f);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,c(g.siteKey)}}).catch(f=>{d(f)})})}function o(a,c,d){const f=window.grecaptcha;cv(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(g=>{c(g)}).catch(()=>{c(PN)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,c)=>{i(this.auth).then(d=>{if(!t&&cv(window.grecaptcha))o(d,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let f=SN();f.length!==0&&(f+=d),yE(f).then(()=>{o(d,a,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function gv(n,e,t,i=!1){const o=new kN(n);let a;try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function fp(n,e,t,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await gv(n,e,t,t==="getOobCode");return i(n,a)}else return i(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await gv(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(n,e){const t=lh(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),a=t.getOptions();if(Mc(a,e??{}))return o;Nn(o,"already-initialized")}return t.initialize({options:e})}function DN(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map($r);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function bN(n,e,t){const i=qi(n);ve(i._canInitEmulator,i,"emulator-config-failed"),ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,a=_E(e),{host:c,port:d}=xN(e),f=d===null?"":`:${d}`;i.config.emulator={url:`${a}//${c}${f}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),ON()}function _E(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xN(n){const e=_E(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const a=o[1];return{host:a,port:yv(i.substr(a.length+1))}}else{const[a,c]=i.split(":");return{host:a,port:yv(c)}}}function yv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ON(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return zr("not implemented")}_getIdTokenResponse(e){return zr("not implemented")}_linkToIdToken(e,t){return zr("not implemented")}_getReauthenticationResolver(e){return zr("not implemented")}}async function LN(n,e){return Hi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(n,e){return $l(n,"POST","/v1/accounts:signInWithPassword",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(n,e){return $l(n,"POST","/v1/accounts:signInWithEmailLink",Wi(n,e))}async function UN(n,e){return $l(n,"POST","/v1/accounts:signInWithEmailLink",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends vm{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Il(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Il(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fp(e,t,"signInWithPassword",VN);case"emailLink":return MN(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fp(e,i,"signUpPassword",LN);case"emailLink":return UN(e,{idToken:t,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(n,e){return $l(n,"POST","/v1/accounts:signInWithIdp",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN="http://localhost";class Ds extends vm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Nn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,a=fm(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Ds(i,o);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Uo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Uo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Uo(e,t)}buildRequest(){const e={requestUri:FN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zN(n){const e=Za(el(n)).link,t=e?Za(el(e)).deep_link_id:null,i=Za(el(n)).deep_link_id;return(i?Za(el(i)).link:null)||i||t||e||n}class wm{constructor(e){var t,i,o,a,c,d;const f=Za(el(e)),g=(t=f.apiKey)!==null&&t!==void 0?t:null,v=(i=f.oobCode)!==null&&i!==void 0?i:null,E=jN((o=f.mode)!==null&&o!==void 0?o:null);ve(g&&v&&E,"argument-error"),this.apiKey=g,this.operation=E,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=f.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=zN(e);try{return new wm(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this.providerId=Zo.PROVIDER_ID}static credential(e,t){return Il._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=wm.parseLink(t);return ve(i,"argument-error"),Il._fromEmailAndCode(e,i.code,i.tenantId)}}Zo.PROVIDER_ID="password";Zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends Em{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Wl{constructor(){super("facebook.com")}static credential(e){return Ds._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ci.credential(e.oauthAccessToken)}catch{return null}}}Ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ci.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ds._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Fr.credential(t,i)}catch{return null}}}Fr.GOOGLE_SIGN_IN_METHOD="google.com";Fr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Wl{constructor(){super("github.com")}static credential(e){return Ds._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com";jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Wl{constructor(){super("twitter.com")}static credential(e,t){return Ds._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Pi.credential(t,i)}catch{return null}}}Pi.TWITTER_SIGN_IN_METHOD="twitter.com";Pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(n,e){return $l(n,"POST","/v1/accounts:signUp",Wi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const a=await Br._fromIdTokenResponse(e,i,o),c=_v(i);return new bs({user:a,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=_v(i);return new bs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function _v(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends wr{constructor(e,t,i,o){var a;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Gc(e,t,i,o)}}function vE(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(n,a,e,i):a})}async function $N(n,e,t=!1){const i=await Tl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return bs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(n,e,t=!1){const{auth:i}=n;if(Qn(i.app))return Promise.reject(qr(i));const o="reauthenticate";try{const a=await Tl(n,vE(i,o,e,n),t);ve(a.idToken,i,"internal-error");const c=ym(a.idToken);ve(c,i,"internal-error");const{sub:d}=c;return ve(n.uid===d,i,"user-mismatch"),bs._forOperation(n,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Nn(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(n,e,t=!1){if(Qn(n.app))return Promise.reject(qr(n));const i="signIn",o=await vE(n,i,e),a=await bs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(a.user),a}async function HN(n,e){return wE(qi(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(n){const e=qi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qN(n,e,t){if(Qn(n.app))return Promise.reject(qr(n));const i=qi(n),c=await fp(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BN).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&EE(n),f}),d=await bs._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function KN(n,e,t){return Qn(n.app)?Promise.reject(qr(n)):HN(lt(n),Zo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&EE(n),i})}function GN(n,e,t,i){return lt(n).onIdTokenChanged(e,t,i)}function QN(n,e,t){return lt(n).beforeAuthStateChanged(e,t)}const Qc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qc,"1"),this.storage.removeItem(Qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=1e3,XN=10;class IE extends TE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,f)=>{this.notifyListeners(c,f)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},a=this.storage.getItem(i);yN()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,XN):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},YN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}IE.type="LOCAL";const JN=IE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE extends TE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}SE.type="SESSION";const RE=SE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Ah(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:a}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async g=>g(t.origin,a)),f=await ZN(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ah.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,c;return new Promise((d,f)=>{const g=Tm("",20);o.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const T=E;if(T.data.eventId===g)switch(T.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(){return window}function t2(n){gr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(){return typeof gr().WorkerGlobalScope<"u"&&typeof gr().importScripts=="function"}async function n2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r2(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function i2(){return AE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="firebaseLocalStorageDb",s2=1,Yc="firebaseLocalStorage",PE="fbase_key";class Hl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ch(n,e){return n.transaction([Yc],e?"readwrite":"readonly").objectStore(Yc)}function o2(){const n=indexedDB.deleteDatabase(CE);return new Hl(n).toPromise()}function pp(){const n=indexedDB.open(CE,s2);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Yc,{keyPath:PE})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Yc)?e(i):(i.close(),await o2(),e(await pp()))})})}async function vv(n,e,t){const i=Ch(n,!0).put({[PE]:e,value:t});return new Hl(i).toPromise()}async function a2(n,e){const t=Ch(n,!1).get(e),i=await new Hl(t).toPromise();return i===void 0?null:i.value}function wv(n,e){const t=Ch(n,!0).delete(e);return new Hl(t).toPromise()}const l2=800,u2=3;class kE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>u2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ah._getInstance(i2()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await n2(),!this.activeServiceWorker)return;this.sender=new e2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pp();return await vv(e,Qc,"1"),await wv(e,Qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>vv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>a2(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>wv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Ch(o,!1).getAll();return new Hl(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kE.type="LOCAL";const c2=kE;new Bl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(n,e){return e?$r(e):(ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im extends vm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Uo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Uo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function h2(n){return wE(n.auth,new Im(n),n.bypassAuthState)}function d2(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),WN(t,new Im(n),n.bypassAuthState)}async function f2(n){const{auth:e,user:t}=n;return ve(t,e,"internal-error"),$N(t,new Im(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,t,i,o,a=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:a,error:c,type:d}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return h2;case"linkViaPopup":case"linkViaRedirect":return f2;case"reauthViaPopup":case"reauthViaRedirect":return d2;default:Nn(this.auth,"internal-error")}}resolve(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=new Bl(2e3,1e4);async function Ev(n,e,t){if(Qn(n.app))return Promise.reject(Xn(n,"operation-not-supported-in-this-environment"));const i=qi(n);Jk(n,e,Em);const o=NE(i,t);return new Ss(i,"signInViaPopup",e,o).executeNotNull()}class Ss extends DE{constructor(e,t,i,o,a){super(e,t,o,a),this.provider=i,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Jr(this.filter.length===1,"Popup operations only handle one event");const e=Tm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,p2.get())};e()}}Ss.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2="pendingRedirect",Dc=new Map;class g2 extends DE{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Dc.get(this.auth._key());if(!e){try{const i=await y2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Dc.set(this.auth._key(),e)}return this.bypassAuthState||Dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y2(n,e){const t=w2(e),i=v2(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function _2(n,e){Dc.set(n._key(),e)}function v2(n){return $r(n._redirectPersistence)}function w2(n){return Nc(m2,n.config.apiKey,n.name)}async function E2(n,e,t=!1){if(Qn(n.app))return Promise.reject(qr(n));const i=qi(n),o=NE(i,e),c=await new g2(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=10*60*1e3;class I2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!S2(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!bE(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Xn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=T2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tv(e))}saveEventToCache(e){this.cachedEventUids.add(Tv(e)),this.lastProcessedEventTime=Date.now()}}function Tv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function S2(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(n,e={}){return Hi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,C2=/^https?/;async function P2(n){if(n.config.emulator)return;const{authorizedDomains:e}=await R2(n);for(const t of e)try{if(k2(t))return}catch{}Nn(n,"unauthorized-domain")}function k2(n){const e=hp(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!C2.test(t))return!1;if(A2.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=new Bl(3e4,6e4);function Iv(){const n=gr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function D2(n){return new Promise((e,t)=>{var i,o,a;function c(){Iv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iv(),t(Xn(n,"network-request-failed"))},timeout:N2.get()})}if(!((o=(i=gr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=gr().gapi)===null||a===void 0)&&a.load)c();else{const d=AN("iframefcb");return gr()[d]=()=>{gapi.load?c():t(Xn(n,"network-request-failed"))},yE(`${RN()}?onload=${d}`).catch(f=>t(f))}}).catch(e=>{throw bc=null,e})}let bc=null;function b2(n){return bc=bc||D2(n),bc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=new Bl(5e3,15e3),O2="__/auth/iframe",L2="emulator/auth/iframe",V2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},M2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U2(n){const e=n.config;ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gm(e,L2):`https://${n.config.authDomain}/${O2}`,i={apiKey:e.apiKey,appName:n.name,v:Vs},o=M2.get(n.config.apiHost);o&&(i.eid=o);const a=n._getFrameworks();return a.length&&(i.fw=a.join(",")),`${t}?${xl(i).slice(1)}`}async function F2(n){const e=await b2(n),t=gr().gapi;return ve(t,n,"internal-error"),e.open({where:document.body,url:U2(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:V2,dontclear:!0},i=>new Promise(async(o,a)=>{await i.restyle({setHideOnLeave:!1});const c=Xn(n,"network-request-failed"),d=gr().setTimeout(()=>{a(c)},x2.get());function f(){gr().clearTimeout(d),o(i)}i.ping(f).then(f,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z2=500,B2=600,$2="_blank",W2="http://localhost";class Sv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H2(n,e,t,i=z2,o=B2){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const f=Object.assign(Object.assign({},j2),{width:i.toString(),height:o.toString(),top:a,left:c}),g=Wt().toLowerCase();t&&(d=cE(g)?$2:t),lE(g)&&(e=e||W2,f.scrollbars="yes");const v=Object.entries(f).reduce((T,[C,N])=>`${T}${C}=${N},`,"");if(gN(g)&&d!=="_self")return q2(e||"",d),new Sv(null);const E=window.open(e||"",d,v);ve(E,n,"popup-blocked");try{E.focus()}catch{}return new Sv(E)}function q2(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2="__/auth/handler",G2="emulator/auth/handler",Q2=encodeURIComponent("fac");async function Rv(n,e,t,i,o,a){ve(n.config.authDomain,n,"auth-domain-config-required"),ve(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Vs,eventId:o};if(e instanceof Em){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",kR(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))c[v]=E}if(e instanceof Wl){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const f=await n._getAppCheckToken(),g=f?`#${Q2}=${encodeURIComponent(f)}`:"";return`${Y2(n)}?${xl(d).slice(1)}${g}`}function Y2({config:n}){return n.emulator?gm(n,G2):`https://${n.authDomain}/${K2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="webStorageSupport";class X2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RE,this._completeRedirectFn=E2,this._overrideRedirectResult=_2}async _openPopup(e,t,i,o){var a;Jr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Rv(e,t,i,hp(),o);return H2(e,c,Tm())}async _openRedirect(e,t,i,o){await this._originValidation(e);const a=await Rv(e,t,i,hp(),o);return t2(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:a}=this.eventManagers[t];return o?Promise.resolve(o):(Jr(a,"If manager is not set, promise should be"),a)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await F2(e),i=new I2(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pf,{type:Pf},o=>{var a;const c=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[Pf];c!==void 0&&t(!!c),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=P2(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return mE()||uE()||_m()}}const J2=X2;var Av="@firebase/auth",Cv="1.7.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tD(n){Cs(new Vi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;ve(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const f={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gE(n)},g=new TN(i,o,a,f);return DN(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Cs(new Vi("auth-internal",e=>{const t=qi(e.getProvider("auth").getImmediate());return(i=>new Z2(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(Av,Cv,eD(n)),fr(Av,Cv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=5*60,rD=T0("authIdTokenMaxAge")||nD;let Pv=null;const iD=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>rD)return;const o=t==null?void 0:t.token;Pv!==o&&(Pv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sD(n=Np()){const e=lh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=NN(n,{popupRedirectResolver:J2,persistence:[c2,JN,RE]}),i=T0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(i,location.origin);if(location.origin===a.origin){const c=iD(a.toString());QN(t,c,()=>c(t.currentUser)),GN(t,d=>c(d))}}const o=v0("auth");return o&&bN(t,`http://${o}`),t}function oD(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}IN({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const a=Xn("internal-error");a.customData=o,t(a)},i.type="text/javascript",i.charset="UTF-8",oD().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tD("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="firebasestorage.googleapis.com",OE="storageBucket",aD=2*60*1e3,lD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends wr{constructor(e,t,i=0){super(kf(e),`Firebase Storage: ${t} (${kf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,rt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function kf(n){return"storage/"+n}function Sm(){const n="An unknown error occurred, please check the error payload for server response.";return new rt(nt.UNKNOWN,n)}function uD(n){return new rt(nt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function cD(n){return new rt(nt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hD(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new rt(nt.UNAUTHENTICATED,n)}function dD(){return new rt(nt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function fD(n){return new rt(nt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function pD(){return new rt(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mD(){return new rt(nt.CANCELED,"User canceled the upload/download.")}function gD(n){return new rt(nt.INVALID_URL,"Invalid URL '"+n+"'.")}function yD(n){return new rt(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function _D(){return new rt(nt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+OE+"' property when initializing the app?")}function vD(){return new rt(nt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wD(){return new rt(nt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ED(n){return new rt(nt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function mp(n){return new rt(nt.INVALID_ARGUMENT,n)}function LE(){return new rt(nt.APP_DELETED,"The Firebase app was deleted.")}function TD(n){return new rt(nt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hl(n,e){return new rt(nt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ja(n){throw new rt(nt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=yn.makeFromUrl(e,t)}catch{return new yn(e,"")}if(i.path==="")return i;throw yD(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function a(Y){Y.path.charAt(Y.path.length-1)==="/"&&(Y.path_=Y.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),f={bucket:1,path:3};function g(Y){Y.path_=decodeURIComponent(Y.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",C=new RegExp(`^https?://${E}/${v}/b/${o}/o${T}`,"i"),N={bucket:1,path:3},M=t===xE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",z=new RegExp(`^https?://${M}/${o}/${P}`,"i"),q=[{regex:d,indices:f,postModify:a},{regex:C,indices:N,postModify:g},{regex:z,indices:{bucket:1,path:2},postModify:g}];for(let Y=0;Y<q.length;Y++){const se=q[Y],re=se.regex.exec(e);if(re){const D=re[se.indices.bucket];let S=re[se.indices.path];S||(S=""),i=new yn(D,S),se.postModify(i);break}}if(i==null)throw gD(e);return i}}class ID{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(n,e,t){let i=1,o=null,a=null,c=!1,d=0;function f(){return d===2}let g=!1;function v(...P){g||(g=!0,e.apply(null,P))}function E(P){o=setTimeout(()=>{o=null,n(C,f())},P)}function T(){a&&clearTimeout(a)}function C(P,...z){if(g){T();return}if(P){T(),v.call(null,P,...z);return}if(f()||c){T(),v.call(null,P,...z);return}i<64&&(i*=2);let q;d===1?(d=2,q=0):q=(i+Math.random())*1e3,E(q)}let N=!1;function M(P){N||(N=!0,T(),!g&&(o!==null?(P||(d=2),clearTimeout(o),E(0)):P||(d=1)))}return E(0),a=setTimeout(()=>{c=!0,M(!0)},t),M}function RD(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(n){return n!==void 0}function CD(n){return typeof n=="object"&&!Array.isArray(n)}function Rm(n){return typeof n=="string"||n instanceof String}function kv(n){return Am()&&n instanceof Blob}function Am(){return typeof Blob<"u"}function Nv(n,e,t,i){if(i<e)throw mp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw mp(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function VE(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var As;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(As||(As={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||o||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,t,i,o,a,c,d,f,g,v,E,T=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=f,this.timeout_=g,this.progressCallback_=v,this.connectionFactory_=E,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,N)=>{this.resolve_=C,this.reject_=N,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new gc(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=d=>{const f=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,g)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const d=a.getErrorCode()===As.NO_ERROR,f=a.getStatus();if(!d||PD(f,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===As.ABORT;i(!1,new gc(!1,null,v));return}const g=this.successCodes_.indexOf(f)!==-1;i(!0,new gc(g,a))})},t=(i,o)=>{const a=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const f=this.callback_(d,d.getResponse());AD(f)?a(f):a()}catch(f){c(f)}else if(d!==null){const f=Sm();f.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,f)):c(f)}else if(o.canceled){const f=this.appDelete_?LE():mD();c(f)}else{const f=pD();c(f)}};this.canceled_?t(!1,new gc(!1,null,!0)):this.backoffId_=SD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&RD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function ND(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function DD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function xD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function OD(n,e,t,i,o,a,c=!0){const d=VE(n.urlParams),f=n.url+d,g=Object.assign({},n.headers);return bD(g,e),ND(g,t),DD(g,a),xD(g,i),new kD(f,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VD(...n){const e=LD();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Am())return new Blob(n);throw new rt(nt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function MD(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(n){if(typeof atob>"u")throw ED("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Nf{constructor(e,t){this.data=e,this.contentType=t||null}}function FD(n,e){switch(n){case dr.RAW:return new Nf(ME(e));case dr.BASE64:case dr.BASE64URL:return new Nf(UE(n,e));case dr.DATA_URL:return new Nf(zD(e),BD(e))}throw Sm()}function ME(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=i,c=n.charCodeAt(++t);i=65536|(a&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function jD(n){let e;try{e=decodeURIComponent(n)}catch{throw hl(dr.DATA_URL,"Malformed data URL.")}return ME(e)}function UE(n,e){switch(n){case dr.BASE64:{const o=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(o||a)throw hl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case dr.BASE64URL:{const o=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(o||a)throw hl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=UD(e)}catch(o){throw o.message.includes("polyfill")?o:hl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class FE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw hl(dr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=$D(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function zD(n){const e=new FE(n);return e.base64?UE(dr.BASE64,e.rest):jD(e.rest)}function BD(n){return new FE(n).contentType}function $D(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){let i=0,o="";kv(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(kv(this.data_)){const i=this.data_,o=MD(i,e,t);return o===null?null:new ki(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new ki(i,!0)}}static getBlob(...e){if(Am()){const t=e.map(i=>i instanceof ki?i.data_:i);return new ki(VD.apply(null,t))}else{const t=e.map(c=>Rm(c)?FD(dr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let a=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[a++]=c[d]}),new ki(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(n){let e;try{e=JSON.parse(n)}catch{return null}return CD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function HD(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function zE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(n,e){return e}class Qt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||qD}}let yc=null;function KD(n){return!Rm(n)||n.length<2?n:zE(n)}function BE(){if(yc)return yc;const n=[];n.push(new Qt("bucket")),n.push(new Qt("generation")),n.push(new Qt("metageneration")),n.push(new Qt("name","fullPath",!0));function e(a,c){return KD(c)}const t=new Qt("name");t.xform=e,n.push(t);function i(a,c){return c!==void 0?Number(c):c}const o=new Qt("size");return o.xform=i,n.push(o),n.push(new Qt("timeCreated")),n.push(new Qt("updated")),n.push(new Qt("md5Hash",null,!0)),n.push(new Qt("cacheControl",null,!0)),n.push(new Qt("contentDisposition",null,!0)),n.push(new Qt("contentEncoding",null,!0)),n.push(new Qt("contentLanguage",null,!0)),n.push(new Qt("contentType",null,!0)),n.push(new Qt("metadata","customMetadata",!0)),yc=n,yc}function GD(n,e){function t(){const i=n.bucket,o=n.fullPath,a=new yn(i,o);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function QD(n,e,t){const i={};i.type="file";const o=t.length;for(let a=0;a<o;a++){const c=t[a];i[c.local]=c.xform(i,e[c.server])}return GD(i,n),i}function $E(n,e,t){const i=jE(e);return i===null?null:QD(n,i,t)}function YD(n,e,t,i){const o=jE(e);if(o===null||!Rm(o.downloadTokens))return null;const a=o.downloadTokens;if(a.length===0)return null;const c=encodeURIComponent;return a.split(",").map(g=>{const v=n.bucket,E=n.fullPath,T="/b/"+c(v)+"/o/"+c(E),C=Ph(T,t,i),N=VE({alt:"media",token:g});return C+N})[0]}function XD(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const a=e[o];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class Cm{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(n){if(!n)throw Sm()}function JD(n,e){function t(i,o){const a=$E(n,o,e);return WE(a!==null),a}return t}function ZD(n,e){function t(i,o){const a=$E(n,o,e);return WE(a!==null),YD(a,o,n.host,n._protocol)}return t}function HE(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=dD():o=hD():t.getStatus()===402?o=cD(n.bucket):t.getStatus()===403?o=fD(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function qE(n){const e=HE(n);function t(i,o){let a=e(i,o);return i.getStatus()===404&&(a=uD(n.path)),a.serverResponse=o.serverResponse,a}return t}function eb(n,e,t){const i=e.fullServerUrl(),o=Ph(i,n.host,n._protocol),a="GET",c=n.maxOperationRetryTime,d=new Cm(o,a,ZD(n,t),c);return d.errorHandler=qE(e),d}function tb(n,e){const t=e.fullServerUrl(),i=Ph(t,n.host,n._protocol),o="DELETE",a=n.maxOperationRetryTime;function c(f,g){}const d=new Cm(i,o,c,a);return d.successCodes=[200,204],d.errorHandler=qE(e),d}function nb(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function rb(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=nb(null,e)),i}function ib(n,e,t,i,o){const a=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let q="";for(let Y=0;Y<2;Y++)q=q+Math.random().toString().slice(2);return q}const f=d();c["Content-Type"]="multipart/related; boundary="+f;const g=rb(e,i,o),v=XD(g,t),E="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+f+`\r
Content-Type: `+g.contentType+`\r
\r
`,T=`\r
--`+f+"--",C=ki.getBlob(E,i,T);if(C===null)throw vD();const N={name:g.fullPath},M=Ph(a,n.host,n._protocol),P="POST",z=n.maxUploadRetryTime,K=new Cm(M,P,JD(n,t),z);return K.urlParams=N,K.headers=c,K.body=C.uploadData(),K.errorHandler=HE(e),K}class sb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Ja("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ja("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ja("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ja("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ja("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ob extends sb{initXhr(){this.xhr_.responseType="text"}}function Pm(){return new ob}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t){this._service=e,t instanceof yn?this._location=t:this._location=yn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new xs(e,t)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zE(this._location.path)}get storage(){return this._service}get parent(){const e=WD(this._location.path);if(e===null)return null;const t=new yn(this._location.bucket,e);return new xs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw TD(e)}}function ab(n,e,t){n._throwIfRoot("uploadBytes");const i=ib(n.storage,n._location,BE(),new ki(e,!0),t);return n.storage.makeRequestWithTokens(i,Pm).then(o=>({metadata:o,ref:n}))}function lb(n){n._throwIfRoot("getDownloadURL");const e=eb(n.storage,n._location,BE());return n.storage.makeRequestWithTokens(e,Pm).then(t=>{if(t===null)throw wD();return t})}function ub(n){n._throwIfRoot("deleteObject");const e=tb(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Pm)}function cb(n,e){const t=HD(n._location.path,e),i=new yn(n._location.bucket,t);return new xs(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(n){return/^[A-Za-z]+:\/\//.test(n)}function db(n,e){return new xs(n,e)}function KE(n,e){if(n instanceof km){const t=n;if(t._bucket==null)throw _D();const i=new xs(t,t._bucket);return e!=null?KE(i,e):i}else return e!==void 0?cb(n,e):n}function fb(n,e){if(e&&hb(e)){if(n instanceof km)return db(n,e);throw mp("To use ref(service, url), the first argument must be a Storage instance.")}else return KE(n,e)}function Dv(n,e){const t=e==null?void 0:e[OE];return t==null?null:yn.makeFromBucketSpec(t,n)}function pb(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:I0(o,n.app.options.projectId))}class km{constructor(e,t,i,o,a){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=a,this._bucket=null,this._host=xE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=aD,this._maxUploadRetryTime=lD,this._requests=new Set,o!=null?this._bucket=yn.makeFromBucketSpec(o,this._host):this._bucket=Dv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=Dv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Nv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Nv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xs(this,e)}_makeRequest(e,t,i,o,a=!0){if(this._deleted)return new ID(LE());{const c=OD(e,this._appId,i,o,t,this._firebaseVersion,a);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const bv="@firebase/storage",xv="0.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="storage";function gO(n,e,t){return n=lt(n),ab(n,e,t)}function yO(n){return n=lt(n),lb(n)}function _O(n){return n=lt(n),ub(n)}function vO(n,e){return n=lt(n),fb(n,e)}function mb(n=Np(),e){n=lt(n);const i=lh(n,GE).getImmediate({identifier:e}),o=w0("storage");return o&&gb(i,...o),i}function gb(n,e,t,i={}){pb(n,e,t,i)}function yb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new km(t,i,o,e,Vs)}function _b(){Cs(new Vi(GE,yb,"PUBLIC").setMultipleInstances(!0)),fr(bv,xv,""),fr(bv,xv,"esm2017")}_b();const vb={apiKey:"AIzaSyCdnuxel4imeAOVQVogRiHvqvrXb5qVRQw",authDomain:"ecovibe-c6720.firebaseapp.com",projectId:"ecovibe-c6720",storageBucket:"ecovibe-c6720.appspot.com",messagingSenderId:"944059551615",appId:"1:944059551615:web:2f96d7e9a67d0065e9544a",databaseURL:"https://ecovibe-c6720-default-rtdb.firebaseio.com"},Nm=C0(vb),ql=Pk(Nm),_c=sD(Nm),wb=new Fr,Eb=new jr,wO=mb(Nm),Df=(n=[],e)=>{const t=n.findIndex(o=>o===e);let i=[...n];return t===-1?i.push(e):i.splice(t,1),i},QE=(n,e)=>{if(!(!n||!e))return n.findIndex(i=>JSON.stringify(i).toLocaleLowerCase()===JSON.stringify(e).toLocaleLowerCase())!==-1},EO=n=>{for(var e=[],t=0;t<n;t++)e.push(t);return e};function TO(n,e){const t=e,i=Math.ceil(n.length/t),o=[];for(let a=0;a<i;a++){const c=a*t,d=c+t,f=n.slice(c,d);o.push({items:f,page:a+1})}return o}async function IO(n,e){try{const t=await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${n}%2C${e}&key=7824a4d19fa84afab5426170dc768cef`).then(i=>i.json());return t.results[0].distance_from_q.meters>0&&t.results[0].components._type!=="body_of_water"}catch(t){console.log(t)}}function SO(n,e){switch(e.classList.add("scroll-smooth"),n){case"right":e.scrollLeft+=200;break;case"left":e.scrollLeft-=200;break}e.classList.remove("scroll-smooth")}function RO(n){switch(n){case 200:break;case 204:throw Error("Please try again a few seconds later or refresh page");case 401:throw Error("You Have To Sign-up First...")}}function AO(n,e,t="firestore"){const i={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return(t==="firestore"?new Date(n.seconds*1e3+n.nanoseconds/1e6):new Date(n)).toLocaleDateString("en-US",e||i)}function Tb(n=""){return`${n}${Date.now()}${Math.random()}`}function Ov(n){const e=n.reduce((o,a)=>Number(o)+Number(a),0),t=n.length;return Math.round(e/t)}const Ib=[{title:"Fashion",productTypes:[{title:"T-Shirts"},{title:"Jeans"},{title:"Dresses"},{title:"Shoes"}],collections:[{title:"Men"},{title:"Women"},{title:"Kids"},{title:"Summer",used:!0},{title:"November outfits"},{title:"Cashmere set"},{title:"New nordic"},{title:"Leather"},{title:"Sneakers"}],iconURl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffashion%20icon.png?alt=media&token=dbda043b-0da0-4db3-ab84-108c30458858",bannerUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(1).webp?alt=media&token=f82da5a4-9b48-42e3-b463-28bf39f069d4"},{title:"Electronics",collections:[{title:"Game on"},{title:"World of sounds"},{title:"Electra"},{title:"Voltix"},{title:"Tech trend"}],productTypes:[{title:"Smart Phones"},{title:"Laptops"},{title:"Headphones"},{title:"Smart Watches"}],iconURl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FElectronics%20Icon.png?alt=media&token=9c895c63-7407-4ac4-91aa-8f7773f05bfc",bannerUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(2).webp?alt=media&token=755ce2e1-12bf-422e-a3aa-34e128db1385"},{title:"Home Decor",collections:[{title:"Kitchen"},{title:"living room"},{title:"Bedroom"},{title:"Natural Vibes"}],productTypes:[{title:"Wall Art"},{title:"Throw Pillows"},{title:"Vases"},{title:"Candles"}],iconURl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FHome%20Decor%20Icon.png?alt=media&token=8e12c6f6-b906-4d19-935f-1682ba47e2c6",bannerUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(3).webp?alt=media&token=be4ac31d-065f-45aa-bea4-b3c884bd724a"},{title:"Health and Wellness",collections:[{title:"Vita boost"},{title:"Glow life"},{title:"Zen Fuel"},{title:"Healty Routine"}],productTypes:[{title:"Vitamins"},{title:"Fitness Trackers"},{title:"Yoga Blocks"},{title:"Resistance Bands"}],iconURl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FHealth%20Icon.png?alt=media&token=9f25a2a6-014b-4dd1-bfad-8da910d4f57c",bannerUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(4).webp?alt=media&token=75fcc7d4-2e79-463f-92fb-119b3500ab61"},{title:"Beauty and Personal Care",collections:[{title:"Organic oil"},{title:"Skincare collection"},{title:"Hair care collection"},{title:"Fragrance"},{title:"Beauty 2024"}],productTypes:[{title:"Skincare Sets"},{title:"Lipsticks"},{title:"Hair Styling Tools"},{title:"Perfumes"}],iconURl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FBeauty%20Icon.png?alt=media&token=b295adaa-c91c-4406-9e76-105e5e438d64",bannerUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(5).webp?alt=media&token=e40fdb29-7f67-4fe8-8d76-0bd2b1e4067f"}],CO="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FError%20Ilustration.png?alt=media&token=44e6f168-e69d-4f7b-8f82-b5129fdf535b",YE=["https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(1).webp?alt=media&token=208a6a73-f31d-436a-b416-98752a90c7a9","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(2).webp?alt=media&token=5fb1eddd-e6e8-4f79-97b6-1db11d7391a9","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(3).webp?alt=media&token=85d7fa87-7582-4448-b7d8-21d3f90f2d90","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(4).webp?alt=media&token=32ddcde1-d894-4728-9216-9ea17380b277","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(5).webp?alt=media&token=5a4b12ac-30ef-4040-8d8e-44409f67f249","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(6).webp?alt=media&token=17962c08-7ae4-4d9a-bd02-76ffce915e0c","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(7).webp?alt=media&token=fe2d9a0d-14dd-4c54-808d-7b88f4873927","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(8).webp?alt=media&token=e1edd546-1f06-4422-9ca4-7c3db381023b","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(9).webp?alt=media&token=a7ce6cd5-c425-47d1-8723-6f6c9e861259"],Sb={900:{label:"Cancelled",color:"#DC3F14",value:900},100:{label:"Pending",color:"#F0A202",value:100},200:{label:"Packed",color:"purple",value:200},300:{label:"Shipped",color:"#344FA9",value:300},400:{label:"Delivered",color:"#2DBA2D",value:400},getOptions:n=>Object.entries(Sb).filter(([e])=>e<900&&e!=="getOptions"&&e>n).map(([,e])=>e)},PO=[{title:"Popular"},{title:"Special"},{title:"Trend"},{title:"2024"},{title:"New Release"},{title:"Best Sell"},{title:"Coming Soon"},{title:"Featured"}];function Rb(n,e){var N,M;if(!e)return n;const{category:t="",tags:i=[],searchQuery:o="",collections:a=[],productTypes:c=[],priceRange:d={min:0,max:1e3},seller:f="",selectedOptions:g=[],sortBy:v="",relevant:E="most",idList:T=[]}=e;let C=[];for(let P of n){let z=!0;i.length>0&&!((N=P==null?void 0:P.Tags)!=null&&N.some(K=>e.tags.includes(K.toLowerCase())))&&(z=!1),t!==""&&P.Category.toLowerCase()!==t&&(z=!1),o!==""&&!P.Name.toLowerCase().includes(o.toLowerCase())&&(z=!1),a.length>0&&!a.includes((M=P.Collection)==null?void 0:M.toLowerCase())&&(z=!1),c.length>0&&!c.includes(P.Type.toLowerCase())&&(z=!1),Number(d.min)>-1&&Number(d.max)>0&&(Number(P.Price)<Number(d.min)||Number(P.Price)>Number(d.max))&&(z=!1),f[0]&&f[0]!=="All"&&P.SellerId!==f[0]&&(z=!1),g.length>0&&P.Options&&(P.Options.some(({title:q,options:Y})=>g.some(se=>se.title.toLowerCase()===q.toLowerCase()&&Y.some(re=>re.toLowerCase()===se.selectedOption.toLowerCase())))||(z=!1)),T.length&&T&&!QE(T,P==null?void 0:P.id)&&(z=!1),z&&C.push(P)}if(v!==""&&(C=C.sort((P,z)=>{switch(v){case"Popular":if(P!=null&&P.Stars&&(z!=null&&z.Stars))return Ov(z==null?void 0:z.Stars)-Ov(P==null?void 0:P.Stars);break;case"High To Low":return Number(z.Price)-Number(P.Price);case"Low To High":return Number(P.Price)-Number(z.Price);case"Best Sell":return P.Tags.find(K=>K.toLowerCase()==="trend");default:return P}})),E)switch(E){case"most":return C;case"least":return C.reverse()}return C}function Nt(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var Ab=typeof Symbol=="function"&&Symbol.observable||"@@observable",Lv=Ab,bf=()=>Math.random().toString(36).substring(7).split("").join("."),Cb={INIT:`@@redux/INIT${bf()}`,REPLACE:`@@redux/REPLACE${bf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${bf()}`},Xc=Cb;function Dm(n){if(typeof n!="object"||n===null)return!1;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e||Object.getPrototypeOf(n)===null}function XE(n,e,t){if(typeof n!="function")throw new Error(Nt(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(Nt(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(Nt(1));return t(XE)(n,e)}let i=n,o=e,a=new Map,c=a,d=0,f=!1;function g(){c===a&&(c=new Map,a.forEach((P,z)=>{c.set(z,P)}))}function v(){if(f)throw new Error(Nt(3));return o}function E(P){if(typeof P!="function")throw new Error(Nt(4));if(f)throw new Error(Nt(5));let z=!0;g();const K=d++;return c.set(K,P),function(){if(z){if(f)throw new Error(Nt(6));z=!1,g(),c.delete(K),a=null}}}function T(P){if(!Dm(P))throw new Error(Nt(7));if(typeof P.type>"u")throw new Error(Nt(8));if(typeof P.type!="string")throw new Error(Nt(17));if(f)throw new Error(Nt(9));try{f=!0,o=i(o,P)}finally{f=!1}return(a=c).forEach(K=>{K()}),P}function C(P){if(typeof P!="function")throw new Error(Nt(10));i=P,T({type:Xc.REPLACE})}function N(){const P=E;return{subscribe(z){if(typeof z!="object"||z===null)throw new Error(Nt(11));function K(){const Y=z;Y.next&&Y.next(v())}return K(),{unsubscribe:P(K)}},[Lv](){return this}}}return T({type:Xc.INIT}),{dispatch:T,subscribe:E,getState:v,replaceReducer:C,[Lv]:N}}function Pb(n){Object.keys(n).forEach(e=>{const t=n[e];if(typeof t(void 0,{type:Xc.INIT})>"u")throw new Error(Nt(12));if(typeof t(void 0,{type:Xc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Nt(13))})}function kb(n){const e=Object.keys(n),t={};for(let a=0;a<e.length;a++){const c=e[a];typeof n[c]=="function"&&(t[c]=n[c])}const i=Object.keys(t);let o;try{Pb(t)}catch(a){o=a}return function(c={},d){if(o)throw o;let f=!1;const g={};for(let v=0;v<i.length;v++){const E=i[v],T=t[E],C=c[E],N=T(C,d);if(typeof N>"u")throw d&&d.type,new Error(Nt(14));g[E]=N,f=f||N!==C}return f=f||i.length!==Object.keys(c).length,f?g:c}}function Jc(...n){return n.length===0?e=>e:n.length===1?n[0]:n.reduce((e,t)=>(...i)=>e(t(...i)))}function Nb(...n){return e=>(t,i)=>{const o=e(t,i);let a=()=>{throw new Error(Nt(15))};const c={getState:o.getState,dispatch:(f,...g)=>a(f,...g)},d=n.map(f=>f(c));return a=Jc(...d)(o.dispatch),{...o,dispatch:a}}}function Db(n){return Dm(n)&&"type"in n&&typeof n.type=="string"}var JE=Symbol.for("immer-nothing"),Vv=Symbol.for("immer-draftable"),_n=Symbol.for("immer-state");function qn(n,...e){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var qo=Object.getPrototypeOf;function ji(n){return!!n&&!!n[_n]}function Zr(n){var e;return n?ZE(n)||Array.isArray(n)||!!n[Vv]||!!((e=n.constructor)!=null&&e[Vv])||Nh(n)||Dh(n):!1}var bb=Object.prototype.constructor.toString();function ZE(n){if(!n||typeof n!="object")return!1;const e=qo(n);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===bb}function Sl(n,e){kh(n)===0?Object.entries(n).forEach(([t,i])=>{e(t,i,n)}):n.forEach((t,i)=>e(i,t,n))}function kh(n){const e=n[_n];return e?e.type_:Array.isArray(n)?1:Nh(n)?2:Dh(n)?3:0}function gp(n,e){return kh(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function eT(n,e,t){const i=kh(n);i===2?n.set(e,t):i===3?n.add(t):n[e]=t}function xb(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function Nh(n){return n instanceof Map}function Dh(n){return n instanceof Set}function Ts(n){return n.copy_||n.base_}function yp(n,e){if(Nh(n))return new Map(n);if(Dh(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);if(!e&&ZE(n))return qo(n)?{...n}:Object.assign(Object.create(null),n);const t=Object.getOwnPropertyDescriptors(n);delete t[_n];let i=Reflect.ownKeys(t);for(let o=0;o<i.length;o++){const a=i[o],c=t[a];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(t[a]={configurable:!0,writable:!0,enumerable:c.enumerable,value:n[a]})}return Object.create(qo(n),t)}function bm(n,e=!1){return bh(n)||ji(n)||!Zr(n)||(kh(n)>1&&(n.set=n.add=n.clear=n.delete=Ob),Object.freeze(n),e&&Sl(n,(t,i)=>bm(i,!0))),n}function Ob(){qn(2)}function bh(n){return Object.isFrozen(n)}var Lb={};function Os(n){const e=Lb[n];return e||qn(0,n),e}var Rl;function tT(){return Rl}function Vb(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Mv(n,e){e&&(Os("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function _p(n){vp(n),n.drafts_.forEach(Mb),n.drafts_=null}function vp(n){n===Rl&&(Rl=n.parent_)}function Uv(n){return Rl=Vb(Rl,n)}function Mb(n){const e=n[_n];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Fv(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[_n].modified_&&(_p(e),qn(4)),Zr(n)&&(n=Zc(e,n),e.parent_||eh(e,n)),e.patches_&&Os("Patches").generateReplacementPatches_(t[_n].base_,n,e.patches_,e.inversePatches_)):n=Zc(e,t,[]),_p(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==JE?n:void 0}function Zc(n,e,t){if(bh(e))return e;const i=e[_n];if(!i)return Sl(e,(o,a)=>jv(n,i,e,o,a,t)),e;if(i.scope_!==n)return e;if(!i.modified_)return eh(n,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const o=i.copy_;let a=o,c=!1;i.type_===3&&(a=new Set(o),o.clear(),c=!0),Sl(a,(d,f)=>jv(n,i,o,d,f,t,c)),eh(n,o,!1),t&&n.patches_&&Os("Patches").generatePatches_(i,t,n.patches_,n.inversePatches_)}return i.copy_}function jv(n,e,t,i,o,a,c){if(ji(o)){const d=a&&e&&e.type_!==3&&!gp(e.assigned_,i)?a.concat(i):void 0,f=Zc(n,o,d);if(eT(t,i,f),ji(f))n.canAutoFreeze_=!1;else return}else c&&t.add(o);if(Zr(o)&&!bh(o)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;Zc(n,o),(!e||!e.scope_.parent_)&&eh(n,o)}}function eh(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&bm(e,t)}function Ub(n,e){const t=Array.isArray(n),i={type_:t?1:0,scope_:e?e.scope_:tT(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,a=xm;t&&(o=[i],a=Al);const{revoke:c,proxy:d}=Proxy.revocable(o,a);return i.draft_=d,i.revoke_=c,d}var xm={get(n,e){if(e===_n)return n;const t=Ts(n);if(!gp(t,e))return Fb(n,t,e);const i=t[e];return n.finalized_||!Zr(i)?i:i===xf(n.base_,e)?(Of(n),n.copy_[e]=Ep(i,n)):i},has(n,e){return e in Ts(n)},ownKeys(n){return Reflect.ownKeys(Ts(n))},set(n,e,t){const i=nT(Ts(n),e);if(i!=null&&i.set)return i.set.call(n.draft_,t),!0;if(!n.modified_){const o=xf(Ts(n),e),a=o==null?void 0:o[_n];if(a&&a.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(xb(t,o)&&(t!==void 0||gp(n.base_,e)))return!0;Of(n),wp(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return xf(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,Of(n),wp(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=Ts(n),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:i.enumerable,value:t[e]}},defineProperty(){qn(11)},getPrototypeOf(n){return qo(n.base_)},setPrototypeOf(){qn(12)}},Al={};Sl(xm,(n,e)=>{Al[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Al.deleteProperty=function(n,e){return Al.set.call(this,n,e,void 0)};Al.set=function(n,e,t){return xm.set.call(this,n[0],e,t,n[0])};function xf(n,e){const t=n[_n];return(t?Ts(t):n)[e]}function Fb(n,e,t){var o;const i=nT(e,t);return i?"value"in i?i.value:(o=i.get)==null?void 0:o.call(n.draft_):void 0}function nT(n,e){if(!(e in n))return;let t=qo(n);for(;t;){const i=Object.getOwnPropertyDescriptor(t,e);if(i)return i;t=qo(t)}}function wp(n){n.modified_||(n.modified_=!0,n.parent_&&wp(n.parent_))}function Of(n){n.copy_||(n.copy_=yp(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var jb=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,i)=>{if(typeof e=="function"&&typeof t!="function"){const a=t;t=e;const c=this;return function(f=a,...g){return c.produce(f,v=>t.call(this,v,...g))}}typeof t!="function"&&qn(6),i!==void 0&&typeof i!="function"&&qn(7);let o;if(Zr(e)){const a=Uv(this),c=Ep(e,void 0);let d=!0;try{o=t(c),d=!1}finally{d?_p(a):vp(a)}return Mv(a,i),Fv(o,a)}else if(!e||typeof e!="object"){if(o=t(e),o===void 0&&(o=e),o===JE&&(o=void 0),this.autoFreeze_&&bm(o,!0),i){const a=[],c=[];Os("Patches").generateReplacementPatches_(e,o,a,c),i(a,c)}return o}else qn(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(c,...d)=>this.produceWithPatches(c,f=>e(f,...d));let i,o;return[this.produce(e,t,(c,d)=>{i=c,o=d}),i,o]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){Zr(n)||qn(8),ji(n)&&(n=rT(n));const e=Uv(this),t=Ep(n,void 0);return t[_n].isManual_=!0,vp(e),t}finishDraft(n,e){const t=n&&n[_n];(!t||!t.isManual_)&&qn(9);const{scope_:i}=t;return Mv(i,e),Fv(void 0,i)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const o=e[t];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}t>-1&&(e=e.slice(t+1));const i=Os("Patches").applyPatches_;return ji(n)?i(n,e):this.produce(n,o=>i(o,e))}};function Ep(n,e){const t=Nh(n)?Os("MapSet").proxyMap_(n,e):Dh(n)?Os("MapSet").proxySet_(n,e):Ub(n,e);return(e?e.scope_:tT()).drafts_.push(t),t}function rT(n){return ji(n)||qn(10,n),iT(n)}function iT(n){if(!Zr(n)||bh(n))return n;const e=n[_n];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=yp(n,e.scope_.immer_.useStrictShallowCopy_)}else t=yp(n,!0);return Sl(t,(i,o)=>{eT(t,i,iT(o))}),e&&(e.finalized_=!1),t}var vn=new jb,sT=vn.produce;vn.produceWithPatches.bind(vn);vn.setAutoFreeze.bind(vn);vn.setUseStrictShallowCopy.bind(vn);vn.applyPatches.bind(vn);vn.createDraft.bind(vn);vn.finishDraft.bind(vn);function zb(n,e=`expected a function, instead received ${typeof n}`){if(typeof n!="function")throw new TypeError(e)}function Bb(n,e=`expected an object, instead received ${typeof n}`){if(typeof n!="object")throw new TypeError(e)}function $b(n,e="expected all items to be functions, instead received the following types: "){if(!n.every(t=>typeof t=="function")){const t=n.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${e}[${t}]`)}}var zv=n=>Array.isArray(n)?n:[n];function Wb(n){const e=Array.isArray(n[0])?n[0]:n;return $b(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function Hb(n,e){const t=[],{length:i}=n;for(let o=0;o<i;o++)t.push(n[o].apply(null,e));return t}var qb=class{constructor(n){this.value=n}deref(){return this.value}},Kb=typeof WeakRef<"u"?WeakRef:qb,Gb=0,Bv=1;function vc(){return{s:Gb,v:void 0,o:null,p:null}}function Om(n,e={}){let t=vc();const{resultEqualityCheck:i}=e;let o,a=0;function c(){var E;let d=t;const{length:f}=arguments;for(let T=0,C=f;T<C;T++){const N=arguments[T];if(typeof N=="function"||typeof N=="object"&&N!==null){let M=d.o;M===null&&(d.o=M=new WeakMap);const P=M.get(N);P===void 0?(d=vc(),M.set(N,d)):d=P}else{let M=d.p;M===null&&(d.p=M=new Map);const P=M.get(N);P===void 0?(d=vc(),M.set(N,d)):d=P}}const g=d;let v;if(d.s===Bv?v=d.v:(v=n.apply(null,arguments),a++),g.s=Bv,i){const T=((E=o==null?void 0:o.deref)==null?void 0:E.call(o))??o;T!=null&&i(T,v)&&(v=T,a!==0&&a--),o=typeof v=="object"&&v!==null||typeof v=="function"?new Kb(v):v}return g.v=v,v}return c.clearCache=()=>{t=vc(),c.resetResultsCount()},c.resultsCount=()=>a,c.resetResultsCount=()=>{a=0},c}function oT(n,...e){const t=typeof n=="function"?{memoize:n,memoizeOptions:e}:n,i=(...o)=>{let a=0,c=0,d,f={},g=o.pop();typeof g=="object"&&(f=g,g=o.pop()),zb(g,`createSelector expects an output function after the inputs, but received: [${typeof g}]`);const v={...t,...f},{memoize:E,memoizeOptions:T=[],argsMemoize:C=Om,argsMemoizeOptions:N=[],devModeChecks:M={}}=v,P=zv(T),z=zv(N),K=Wb(o),q=E(function(){return a++,g.apply(null,arguments)},...P),Y=C(function(){c++;const re=Hb(K,arguments);return d=q.apply(null,re),d},...z);return Object.assign(Y,{resultFunc:g,memoizedResultFunc:q,dependencies:K,dependencyRecomputations:()=>c,resetDependencyRecomputations:()=>{c=0},lastResult:()=>d,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:E,argsMemoize:C})};return Object.assign(i,{withTypes:()=>i}),i}var Qb=oT(Om),Yb=Object.assign((n,e=Qb)=>{Bb(n,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof n}`);const t=Object.keys(n),i=t.map(a=>n[a]);return e(i,(...a)=>a.reduce((c,d,f)=>(c[t[f]]=d,c),{}))},{withTypes:()=>Yb});function aT(n){return({dispatch:t,getState:i})=>o=>a=>typeof a=="function"?a(t,i,n):o(a)}var Xb=aT(),Jb=aT,Zb=(...n)=>{const e=oT(...n),t=Object.assign((...i)=>{const o=e(...i),a=(c,...d)=>o(ji(c)?rT(c):c,...d);return Object.assign(a,o),a},{withTypes:()=>t});return t};Zb(Om);var ex=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Jc:Jc.apply(null,arguments)},tx=n=>n&&typeof n.match=="function";function Kr(n,e){function t(...i){if(e){let o=e(...i);if(!o)throw new Error(an(0));return{type:n,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:n,payload:i[0]}}return t.toString=()=>`${n}`,t.type=n,t.match=i=>Db(i)&&i.type===n,t}var lT=class sl extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,sl.prototype)}static get[Symbol.species](){return sl}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new sl(...e[0].concat(this)):new sl(...e.concat(this))}};function $v(n){return Zr(n)?sT(n,()=>{}):n}function Wv(n,e,t){if(n.has(e)){let o=n.get(e);return t.update&&(o=t.update(o,e,n),n.set(e,o)),o}if(!t.insert)throw new Error(an(10));const i=t.insert(e,n);return n.set(e,i),i}function nx(n){return typeof n=="boolean"}var rx=()=>function(e){const{thunk:t=!0,immutableCheck:i=!0,serializableCheck:o=!0,actionCreatorCheck:a=!0}=e??{};let c=new lT;return t&&(nx(t)?c.push(Xb):c.push(Jb(t.extraArgument))),c},ix="RTK_autoBatch",uT=n=>e=>{setTimeout(e,n)},sx=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:uT(10),ox=(n={type:"raf"})=>e=>(...t)=>{const i=e(...t);let o=!0,a=!1,c=!1;const d=new Set,f=n.type==="tick"?queueMicrotask:n.type==="raf"?sx:n.type==="callback"?n.queueNotification:uT(n.timeout),g=()=>{c=!1,a&&(a=!1,d.forEach(v=>v()))};return Object.assign({},i,{subscribe(v){const E=()=>o&&v(),T=i.subscribe(E);return d.add(v),()=>{T(),d.delete(v)}},dispatch(v){var E;try{return o=!((E=v==null?void 0:v.meta)!=null&&E[ix]),a=!o,a&&(c||(c=!0,f(g))),i.dispatch(v)}finally{o=!0}}})},ax=n=>function(t){const{autoBatch:i=!0}=t??{};let o=new lT(n);return i&&o.push(ox(typeof i=="object"?i:void 0)),o},lx=!0;function ux(n){const e=rx(),{reducer:t=void 0,middleware:i,devTools:o=!0,preloadedState:a=void 0,enhancers:c=void 0}=n||{};let d;if(typeof t=="function")d=t;else if(Dm(t))d=kb(t);else throw new Error(an(1));let f;typeof i=="function"?f=i(e):f=e();let g=Jc;o&&(g=ex({trace:!lx,...typeof o=="object"&&o}));const v=Nb(...f),E=ax(v);let T=typeof c=="function"?c(E):E();const C=g(...T);return XE(d,a,C)}function cT(n){const e={},t=[];let i;const o={addCase(a,c){const d=typeof a=="string"?a:a.type;if(!d)throw new Error(an(28));if(d in e)throw new Error(an(29));return e[d]=c,o},addMatcher(a,c){return t.push({matcher:a,reducer:c}),o},addDefaultCase(a){return i=a,o}};return n(o),[e,t,i]}function cx(n){return typeof n=="function"}function hx(n,e){let[t,i,o]=cT(e),a;if(cx(n))a=()=>$v(n());else{const d=$v(n);a=()=>d}function c(d=a(),f){let g=[t[f.type],...i.filter(({matcher:v})=>v(f)).map(({reducer:v})=>v)];return g.filter(v=>!!v).length===0&&(g=[o]),g.reduce((v,E)=>{if(E)if(ji(v)){const C=E(v,f);return C===void 0?v:C}else{if(Zr(v))return sT(v,T=>E(T,f));{const T=E(v,f);if(T===void 0){if(v===null)return v;throw new Error(an(9))}return T}}return v},d)}return c.getInitialState=a,c}var dx="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",hT=(n=21)=>{let e="",t=n;for(;t--;)e+=dx[Math.random()*64|0];return e},fx=(n,e)=>tx(n)?n.match(e):n(e);function px(...n){return e=>n.some(t=>fx(t,e))}var mx=["name","message","stack","code"],Lf=class{constructor(n,e){af(this,"_type");this.payload=n,this.meta=e}},Hv=class{constructor(n,e){af(this,"_type");this.payload=n,this.meta=e}},gx=n=>{if(typeof n=="object"&&n!==null){const e={};for(const t of mx)typeof n[t]=="string"&&(e[t]=n[t]);return e}return{message:String(n)}},Kl=(()=>{function n(e,t,i){const o=Kr(e+"/fulfilled",(f,g,v,E)=>({payload:f,meta:{...E||{},arg:v,requestId:g,requestStatus:"fulfilled"}})),a=Kr(e+"/pending",(f,g,v)=>({payload:void 0,meta:{...v||{},arg:g,requestId:f,requestStatus:"pending"}})),c=Kr(e+"/rejected",(f,g,v,E,T)=>({payload:E,error:(i&&i.serializeError||gx)(f||"Rejected"),meta:{...T||{},arg:v,requestId:g,rejectedWithValue:!!E,requestStatus:"rejected",aborted:(f==null?void 0:f.name)==="AbortError",condition:(f==null?void 0:f.name)==="ConditionError"}}));function d(f){return(g,v,E)=>{const T=i!=null&&i.idGenerator?i.idGenerator(f):hT(),C=new AbortController;let N,M;function P(K){M=K,C.abort()}const z=async function(){var Y,se;let K;try{let re=(Y=i==null?void 0:i.condition)==null?void 0:Y.call(i,f,{getState:v,extra:E});if(_x(re)&&(re=await re),re===!1||C.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const D=new Promise((S,A)=>{N=()=>{A({name:"AbortError",message:M||"Aborted"})},C.signal.addEventListener("abort",N)});g(a(T,f,(se=i==null?void 0:i.getPendingMeta)==null?void 0:se.call(i,{requestId:T,arg:f},{getState:v,extra:E}))),K=await Promise.race([D,Promise.resolve(t(f,{dispatch:g,getState:v,extra:E,requestId:T,signal:C.signal,abort:P,rejectWithValue:(S,A)=>new Lf(S,A),fulfillWithValue:(S,A)=>new Hv(S,A)})).then(S=>{if(S instanceof Lf)throw S;return S instanceof Hv?o(S.payload,T,f,S.meta):o(S,T,f)})])}catch(re){K=re instanceof Lf?c(null,T,f,re.payload,re.meta):c(re,T,f)}finally{N&&C.signal.removeEventListener("abort",N)}return i&&!i.dispatchConditionRejection&&c.match(K)&&K.meta.condition||g(K),K}();return Object.assign(z,{abort:P,requestId:T,arg:f,unwrap(){return z.then(yx)}})}}return Object.assign(d,{pending:a,rejected:c,fulfilled:o,settled:px(c,o),typePrefix:e})}return n.withTypes=()=>n,n})();function yx(n){if(n.meta&&n.meta.rejectedWithValue)throw n.payload;if(n.error)throw n.error;return n.payload}function _x(n){return n!==null&&typeof n=="object"&&typeof n.then=="function"}var vx=Symbol.for("rtk-slice-createasyncthunk");function wx(n,e){return`${n}/${e}`}function Ex({creators:n}={}){var t;const e=(t=n==null?void 0:n.asyncThunk)==null?void 0:t[vx];return function(o){const{name:a,reducerPath:c=a}=o;if(!a)throw new Error(an(11));typeof process<"u";const d=(typeof o.reducers=="function"?o.reducers(Ix()):o.reducers)||{},f=Object.keys(d),g={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},v={addCase(q,Y){const se=typeof q=="string"?q:q.type;if(!se)throw new Error(an(12));if(se in g.sliceCaseReducersByType)throw new Error(an(13));return g.sliceCaseReducersByType[se]=Y,v},addMatcher(q,Y){return g.sliceMatchers.push({matcher:q,reducer:Y}),v},exposeAction(q,Y){return g.actionCreators[q]=Y,v},exposeCaseReducer(q,Y){return g.sliceCaseReducersByName[q]=Y,v}};f.forEach(q=>{const Y=d[q],se={reducerName:q,type:wx(a,q),createNotation:typeof o.reducers=="function"};Rx(Y)?Cx(se,Y,v,e):Sx(se,Y,v)});function E(){const[q={},Y=[],se=void 0]=typeof o.extraReducers=="function"?cT(o.extraReducers):[o.extraReducers],re={...q,...g.sliceCaseReducersByType};return hx(o.initialState,D=>{for(let S in re)D.addCase(S,re[S]);for(let S of g.sliceMatchers)D.addMatcher(S.matcher,S.reducer);for(let S of Y)D.addMatcher(S.matcher,S.reducer);se&&D.addDefaultCase(se)})}const T=q=>q,C=new Map;let N;function M(q,Y){return N||(N=E()),N(q,Y)}function P(){return N||(N=E()),N.getInitialState()}function z(q,Y=!1){function se(D){let S=D[q];return typeof S>"u"&&Y&&(S=P()),S}function re(D=T){const S=Wv(C,Y,{insert:()=>new WeakMap});return Wv(S,D,{insert:()=>{const A={};for(const[x,L]of Object.entries(o.selectors??{}))A[x]=Tx(L,D,P,Y);return A}})}return{reducerPath:q,getSelectors:re,get selectors(){return re(se)},selectSlice:se}}const K={name:a,reducer:M,actions:g.actionCreators,caseReducers:g.sliceCaseReducersByName,getInitialState:P,...z(c),injectInto(q,{reducerPath:Y,...se}={}){const re=Y??c;return q.inject({reducerPath:re,reducer:M},se),{...K,...z(re,!0)}}};return K}}function Tx(n,e,t,i){function o(a,...c){let d=e(a);return typeof d>"u"&&i&&(d=t()),n(d,...c)}return o.unwrapped=n,o}var Lm=Ex();function Ix(){function n(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return n.withTypes=()=>n,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}},asyncThunk:n}}function Sx({type:n,reducerName:e,createNotation:t},i,o){let a,c;if("reducer"in i){if(t&&!Ax(i))throw new Error(an(17));a=i.reducer,c=i.prepare}else a=i;o.addCase(n,a).exposeCaseReducer(e,a).exposeAction(e,c?Kr(n,c):Kr(n))}function Rx(n){return n._reducerDefinitionType==="asyncThunk"}function Ax(n){return n._reducerDefinitionType==="reducerWithPrepare"}function Cx({type:n,reducerName:e},t,i,o){if(!o)throw new Error(an(18));const{payloadCreator:a,fulfilled:c,pending:d,rejected:f,settled:g,options:v}=t,E=o(n,a,v);i.exposeAction(e,E),c&&i.addCase(E.fulfilled,c),d&&i.addCase(E.pending,d),f&&i.addCase(E.rejected,f),g&&i.addMatcher(E.settled,g),i.exposeCaseReducer(e,{fulfilled:c||wc,pending:d||wc,rejected:f||wc,settled:g||wc})}function wc(){}var Px=(n,e)=>{if(typeof n!="function")throw new Error(an(32))},Vm="listenerMiddleware",kx=n=>{let{type:e,actionCreator:t,matcher:i,predicate:o,effect:a}=n;if(e)o=Kr(e).match;else if(t)e=t.type,o=t.match;else if(i)o=i;else if(!o)throw new Error(an(21));return Px(a),{predicate:o,type:e,effect:a}},Nx=Object.assign(n=>{const{type:e,predicate:t,effect:i}=kx(n);return{id:hT(),effect:i,type:e,predicate:t,pending:new Set,unsubscribe:()=>{throw new Error(an(22))}}},{withTypes:()=>Nx}),Dx=Object.assign(Kr(`${Vm}/add`),{withTypes:()=>Dx});Kr(`${Vm}/removeAll`);var bx=Object.assign(Kr(`${Vm}/remove`),{withTypes:()=>bx});function an(n){return`Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}const Vf=Kl("products/getAsyncProducts",async(n,{rejectWithValue:e,fulfillWithValue:t})=>{try{const i=Ak(ql,"Products"),a=(await Wk(i)).docs.map(d=>({...d.data(),id:d.id}));if(!(a!=null&&a.length))throw new Error(420);const c=Rb(a,n);if(!c.length)throw new Error(404);return c}catch(i){return e(i.message)}}),xx={loading:!1,data:[],error:""},dT=Lm({name:"products",initialState:xx,reducers:{resetProductsState:()=>({loading:!1,data:[],error:""})},extraReducers:n=>{n.addCase(Vf.pending,e=>{e.loading=!0,e.data=[],e.error=""}),n.addCase(Vf.fulfilled,(e,t)=>{e.loading=!1,e.data=t.payload,e.error=""}),n.addCase(Vf.rejected,(e,t)=>{e.loading=!1,e.data=[],e.error=t.payload})}}),{resetProductsState:kO}=dT.actions,Ox=dT.reducer;Ib.flatMap(({collections:n})=>n.map(({title:e})=>e));const Lx="modulepreload",Vx=function(n){return"/EcoVibe/"+n},qv={},Ye=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.allSettled(t.map(f=>{if(f=Vx(f),f in qv)return;qv[f]=!0;const g=f.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${v}`))return;const E=document.createElement("link");if(E.rel=g?"stylesheet":Lx,g||(E.as="script"),E.crossOrigin="",E.href=f,d&&E.setAttribute("nonce",d),document.head.appendChild(E),g)return new Promise((T,C)=>{E.addEventListener("load",T),E.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return o.then(c=>{for(const d of c||[])d.status==="rejected"&&a(d.reason);return e().catch(a)})},Xe=n=>{const e=t=>Kn.jsx(W.Suspense,{fallback:Kn.jsx("div",{className:"h-screen flex items-center justify-center",children:Kn.jsx(p0,{className:"size-20"})}),children:Kn.jsx(n,{...t})});return e.displayName=`WithSuspense(${n.displayName||n.name||"Component"})`,e};Xe(W.lazy(()=>Ye(()=>import("./HomePage-B8AacdPT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]))));Xe(W.lazy(()=>Ye(()=>import("./ShopPage-Co_3Nu8n.js"),__vite__mapDeps([24,13,7,2,8,9,1,14,10,12,11]))));Xe(W.lazy(()=>Ye(()=>import("./ExploreProductsPage-CuH717S0.js"),__vite__mapDeps([25,1,2,19,7,22,3,17,10,26,21,4]))));Xe(W.lazy(()=>Ye(()=>import("./ProductDetailsPage-DJxEElrA.js"),__vite__mapDeps([27,8,9,1,2,7,11,14,28,29,3,21]))));Xe(W.lazy(()=>Ye(()=>import("./ChatPage-BF_4T7V9.js"),__vite__mapDeps([30,16,2,19,6,14,31,21,32,29,9,33,4,22,34]))));Xe(W.lazy(()=>Ye(()=>import("./CustomerAuthPage-B5rdw5CR.js"),[])));Xe(W.lazy(()=>Ye(()=>import("./SignUpCustomer-uxKm2aNZ.js"),__vite__mapDeps([35,36,7,2,4,37,38,39]))));Xe(W.lazy(()=>Ye(()=>import("./PersonalDetailsForm-BgBP-NqP.js"),__vite__mapDeps([40,36,1,2,41,38,39,42,28,29]))));Xe(W.lazy(()=>Ye(()=>import("./UserInterestsForm-DNbDq4t1.js"),__vite__mapDeps([43,1,2]))));Xe(W.lazy(()=>Ye(()=>import("./SellerAuthPage-BDQxxPiT.js"),[])));Xe(W.lazy(()=>Ye(()=>import("./SignUpSeller-DXhs-dez.js"),__vite__mapDeps([44,36,2,38]))));Xe(W.lazy(()=>Ye(()=>import("./BusinessInfoForm-Cd56riv0.js"),__vite__mapDeps([45,33,22,2,1,36,38]))));Xe(W.lazy(()=>Ye(()=>import("./SignInPage-FbRlaXO1.js"),__vite__mapDeps([46,36,1,2,38]))));const fT=async n=>{try{let e={};switch(n==null?void 0:n.method){case"signUpEmail":await qN(_c,n.email,n.password).then(t=>e=t.user);break;case"signInEmail":await KN(_c,n.email,n.password).then(t=>e=t.user);break;case"gitHub":await Ev(_c,Eb).then(({user:{uid:t,photoURL:i,email:o}})=>e={uid:t,photoURL:i,email:o});break;case"google":await Ev(_c,wb).then(({user:{uid:t,photoURL:i,email:o}})=>e={uid:t,photoURL:i,email:o});break;default:throw new Error("Error : Unknown Sign Up Method !")}return e}catch(e){throw new Error(e||"an error occurred")}};async function pT(n,e,t){try{await Hk(wh(ql,"users",n),{customer_step:"second-step",seller_step:"second-step",userId:n,personalInformation:(e==null?void 0:e.personalInformation)||{},userType:t})}catch(i){throw console.log(i),new Error(i==null?void 0:i.message)}}function Cl(n){const e=xh()||Tb("guest-user-"),t=new Date;t.setTime(t.getTime()+20*24*60*60*1e3),document.cookie=`${n?"userId":"guestUserId"}=${n||e}; expires=${t.toUTCString()}; path=/; SameSite=Lax`}function xh(n){const e=document.cookie.match(new RegExp(`(^| )${n?"guestUserId":"userId"}=([^;]+)`));return e?e[2]:null}const xc=Kl("userData/getUserData",async(n,{fulfillWithValue:e,rejectWithValue:t})=>{const i=xh();if(i)try{const o=wh(ql,"users",i),a=await Jw(o).then(c=>c.data());return e({...a,lastActivity:null})}catch(o){return t({error:o,code:204})}else return t({code:401})}),Mx=n=>{n.addCase(xc.pending,e=>{e.loading=!0}),n.addCase(xc.fulfilled,(e,{payload:t})=>{e.loading=!1,Cl(t==null?void 0:t.userId),Object.assign(e,t),e.auth_status=200,document.cookie="guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}),n.addCase(xc.rejected,(e,{payload:t})=>{e.loading=!1,t.code===401?(document.cookie="userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",console.log("user isn't logged in"),Cl(),e.userId=xh(!0),e.auth_status=t.code):(e.error=t.error,e.auth_status=t.code)})};function mT(){return Kn.jsx(mT,{style:{...style,width:"6rem",height:"6rem"}})}Xe(W.lazy(()=>Ye(()=>import("./WishListPage-D-ovphb8.js"),__vite__mapDeps([47,2,7,4]))));Xe(W.lazy(()=>Ye(()=>import("./CartPage-Dz9B_qkv.js"),__vite__mapDeps([48,1,2,42,28,29,10]))));Xe(W.lazy(()=>Ye(()=>import("./CheckoutPage-BK9Rteml.js"),__vite__mapDeps([49,7,2,36,10,50,42,28,29,38,3,11,1,21]))));Xe(W.lazy(()=>Ye(()=>import("./OrdersPage-BweHC--E.js"),__vite__mapDeps([51,1,2,52,6,17,10,7,53,3]))));Xe(W.lazy(()=>Ye(()=>import("./CustomerProfilePage-DOlbM3m6.js"),__vite__mapDeps([54,41,1,2,55,36,38,11,7,50,42,28,29,3]))));Xe(W.lazy(()=>Ye(()=>import("./sellerSolutionsPage-BNI1LCUT.js"),__vite__mapDeps([56,12,55,2,22]))));Xe(W.lazy(()=>Ye(()=>import("./SellerDashboardPage-xzD8IGIU.js"),__vite__mapDeps([57,7,2,37,1,5,31,19,55,12,58,36,17,10,3,52,42,28,29,21,26,59,23,22,16,18]))));Xe(W.lazy(()=>Ye(()=>import("./SellerProfilePage-DMxbhfDl.js"),__vite__mapDeps([60,52,2,38,36,16,15,7,10,17,18,12,4,1,5,19,6,20,21,22,23,3,34,14]))));Xe(W.lazy(()=>Ye(()=>import("./MainTab-c1DxphKx.js"),__vite__mapDeps([61,7,2,5,59,3,14,42,28,29,32,9,8,33,22,17,10,11,4,53,20,16,21,18]))));Xe(W.lazy(()=>Ye(()=>import("./ProductTab-Cr8dc7Ro.js"),__vite__mapDeps([62,7,2,59,28,29,58,36,17,10,5,3,52,42,21,26,53]))));Xe(W.lazy(()=>Ye(()=>import("./OrdersTab-BiA_Naqk.js"),__vite__mapDeps([63,1,2,52,17,10,42,28,29,21,59]))));function Ux(){const n=RS();return mS(e=>e.userData),W.useEffect(()=>{n(xc())},[]),Kn.jsxs("div",{className:"flex-col flex items-center justify-center size-full",children:[Kn.jsx("h4",{children:"test mode"}),Kn.jsx(mT,{})]})}const Fx={searchQuery:"",category:[""],productTypes:[],sortBy:"Popular",priceRange:{min:0,max:1e3},collections:[],tags:[],seller:["All"],selectedOptions:[],relevant:"most",page:0,pagination:!0},gT=Lm({name:"filters",initialState:Fx,reducers:{changeFilterReducer:(n,{payload:{type:e,payload:t}})=>{switch(e){case"searchQuery":n.page=0,n.searchQuery=t;break;case"category":n.page=0,n.category[0]===t?n.category=[""]:n.category=[t],n.productTypes=[],n.selectedOptions=[];break;case"productTypes":{n.page=0;const i=Df(n.productTypes,t);n.productTypes=i,n.selectedOptions=[];break}case"priceRange":n.page=0,n.priceRange=t;break;case"collections":{n.page=0;const i=Df(n.collections,t);n.collections=i;break}case"tags":{n.page=0;const i=Df(n.tags,t);n.tags=i;break}case"sortBy":n.sortBy=t;break;case"selectedOptions":{n.page=0;const i=QE(n.selectedOptions,t),o=n.selectedOptions.filter(a=>JSON.stringify(a)!==JSON.stringify(t));n.selectedOptions=i?o:[...n.selectedOptions,t];break}case"seller":{n.page=0,n.seller[0]=t;break}case"clear":n.searchQuery="",n.category=[""],n.productTypes=[],n.sortBy="Popular",n.priceRange={min:0,max:1e3},n.collections=[],n.tags=[],n.seller=["All"],n.selectedOptions=[],n.relevant="most",n.page=0,n.pagination=!0;break;case"relevant":n.page=0,n.relevant=t==="most"?"least":"most";break;case"nextPage":n.page=n.page+1;break;case"prevPage":n.page=n.page-1;break;case"changePage":n.page=t;break;default:throw Error("Unknown Action !")}}}}),{changeFilterReducer:NO}=gT.actions,jx=gT.reducer,Mf=Kl("userData/signInUser",async(n,{fulfillWithValue:e,rejectWithValue:t})=>{try{const i=await fT(n),o=wh(ql,"users",i==null?void 0:i.uid),a=await Jw(o);if(a.data()){const c={...a.data(),auth_status:200};return Cl(i==null?void 0:i.uid),e(c)}else{const c={userId:i==null?void 0:i.uid,personalInformation:{email:i==null?void 0:i.email,profilePic:i.photoURL||YE[2],first_name:(i==null?void 0:i.name)||(i==null?void 0:i.email)||"not set"},customer_step:"second-step",seller_step:"second-step",userType:"customer",auth_status:200};return await pT(i==null?void 0:i.uid,{personalInformation:c==null?void 0:c.personalInformation},c==null?void 0:c.userType),Cl(i==null?void 0:i.uid),localStorage.setItem("isNewUser",JSON.stringify(!0)),e({...c,isNewUser:!0})}}catch(i){return fl.error(i==null?void 0:i.message),console.log(i),t(i.message)}}),zx=n=>{n.addCase(Mf.pending,e=>{e.loading=!0}),n.addCase(Mf.fulfilled,(e,{payload:t})=>{fl.success(t!=null&&t.isNewUser?"Welcome to eco vibe family":"Welcome back"),document.cookie="guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",t&&Object.assign(e,t),e.loading=!1,document.cookie="guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}),n.addCase(Mf.rejected,(e,t)=>{e.loading=!1,e.error=t.payload})},Uf=Kl("userData/signInEmail",async(n,{fulfillWithValue:e,rejectWithValue:t})=>{try{const i=await fT(n),o=(n==null?void 0:n.personalInformation)||{email:i.email,profilePic:i.photoURL||YE[2],first_name:i.email||null};await pT(i==null?void 0:i.uid,{personalInformation:o},n.userType);const a={...yT,userType:n.userType,userId:i==null?void 0:i.uid,personalInformation:o,customer_step:"second-step",seller_step:"second-step",auth_status:200};return Cl(i==null?void 0:i.uid),console.log("signed up successfuly !"),e(a)}catch(i){return console.log(i),t(i==null?void 0:i.message)}}),Bx=n=>{n.addCase(Uf.pending,e=>{e.loading=!0}),n.addCase(Uf.fulfilled,(e,{payload:t})=>{document.cookie="guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",fl.success("Welcome to eco vibe"),Object.assign(e,t),e.loading=!1,e.error=""}),n.addCase(Uf.rejected,(e,t)=>{fl.error(t.payload),e.loading=!1,e.error=t.payload})},Ff=Kl("userData/updateUserData",async(n,{rejectWithValue:e,fulfillWithValue:t,getState:i})=>{try{const{userData:{customer_step:o,seller_step:a,userType:c}}=i(),d=xh();if(d){const f=wh(ql,"users",d);await qk(f,{[n.field]:n.data,customer_step:(n==null?void 0:n.customer_step)||o,seller_step:(n==null?void 0:n.seller_step)||a,userType:(n==null?void 0:n.userType)||c})}return t(n)}catch(o){return console.log(o==null?void 0:o.message),e(o==null?void 0:o.message)}}),$x=n=>{n.addCase(Ff.pending,e=>{e.loading=!0}),n.addCase(Ff.fulfilled,(e,{payload:t})=>{e.loading=!1,Object.assign(e,{[t.field]:t.data,customer_step:(t==null?void 0:t.customer_step)||e.customer_step,seller_step:(t==null?void 0:t.seller_step)||e.seller_step,userType:(t==null?void 0:t.userType)||e.userType}),e.userType=(t==null?void 0:t.userType)||e.userType}),n.addCase(Ff.rejected,(e,t)=>{e.loading=!1,e.error=t.payload})},yT={personalInformation:{},cartData:[],interests:[],wishlist:[],customer_step:"first-step",businessInformation:{},stories:[],seller_step:"first-step",userType:"",userId:null,notifications:[],auth_status:204},_T=Lm({name:"userData",initialState:{...yT,loading:!1,error:""},reducers:{logout:()=>{document.cookie="userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",fl.success("You logged out successfully")}},extraReducers:n=>{Mx(n),Bx(n),zx(n),$x(n)}}),{logout:DO}=_T.actions,Wx=_T.reducer,Hx=ux({reducer:{products:Ox,filters:jx,userData:Wx}});OI.createRoot(document.getElementById("root")).render(Kn.jsx(X1,{children:Kn.jsx(TS,{store:Hx,children:Kn.jsx(Ux,{})})}));export{Gx as $,fO as A,Wk as B,AO as C,dO as D,Uf as E,YE as F,IO as G,Mf as H,wh as I,Hk as J,Sb as K,a0 as L,DO as M,mT as N,Yx as O,vO as P,wO as Q,Gv as R,gO as S,vt as T,yO as U,p0 as V,xc as W,Jw as X,th as Y,Kx as Z,fl as _,mS as a,_O as a0,Pp as a1,aR as a2,Cs as a3,Vi as a4,fr as a5,Zx as a6,f_ as a7,nO as a8,aO as a9,mO as aA,DI as aB,Jy as aC,sO as aa,y0 as ab,rO as ac,iO as ad,lt as ae,yR as af,lh as ag,w0 as ah,Np as ai,I0 as aj,lR as ak,lO as al,oO as am,ke as an,Jx as ao,tO as ap,eO as aq,kR as ar,_R as as,ER as at,xl as au,Xx as av,Vs as aw,hR as ax,pO as ay,J1 as az,RS as b,Ov as c,RO as d,Ff as e,Rb as f,Tb as g,EO as h,QE as i,Kn as j,Vf as k,kO as l,SO as m,PO as n,NO as o,TO as p,CO as q,W as r,Ib as s,Df as t,u1 as u,Qx as v,Kv as w,Ls as x,Ak as y,ql as z};
