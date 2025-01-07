const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-Dd28a2e7.js","assets/index-D2KwTCy3.js","assets/iconBase-BjT7-JSx.js","assets/index-Cu83_0OT.js","assets/index-eQA-TLJd.js","assets/index-BlPRvbTm.js","assets/index-DXMGeYIN.js","assets/index-B8wYaixu.js","assets/react-stars-CdI8AnjW.js","assets/index-Chjiymov.js","assets/useMediaQuery-C871FCBM.js","assets/index-CA9fTB3r.js","assets/motion-CYfok9gC.js","assets/ProductsContainer-BujTEl97.js","assets/useTouchScroll-CI4-53CI.js","assets/StoryListModal-YPC_5ZsF.js","assets/index-Df5ojLS1.js","assets/UseDisableScroll-Ch5h4ZdA.js","assets/ContentSwitcher-B2xr-ENS.js","assets/UseOutsideClick-DHalajvh.js","assets/useGetStories-BGWm6Orx.js","assets/lodash-Bnzkoa5x.js","assets/index-CWWRrNA8.js","assets/AddStoryModal-mPmNyoXm.js","assets/ShopPage-CMkOEx9B.js","assets/ExploreProductsPage-r8Z587jS.js","assets/useGetOptions-3YS-2Iru.js","assets/ProductDetailsPage-BK8r1nYg.js","assets/index.esm-D4l8IZhJ.js","assets/TextInput-CZHRG0Bj.js","assets/react-select.esm-KnjoS3QK.js","assets/index-CnyDuYXe.js","assets/index-CbHdAtlf.js","assets/ChatPage-DrhryOLy.js","assets/index-DCGtWzdk.js","assets/generateCategoricalChart-BOE_PK87.js","assets/index.esm-B9UMMl0V.js","assets/useCreateChatRoom-BMPW-ScS.js","assets/SignUpCustomer-C3rMvk7r.js","assets/index-DDaXD1ye.js","assets/formInputsInfo-KFJ55Zrl.js","assets/PersonalDetailsForm-CEA8o3rJ.js","assets/ProfileImagePicker-CB7PYZ5L.js","assets/UserInterestsForm-DfxSGgV9.js","assets/SignUpSeller-DeMz3-A9.js","assets/BusinessInfoForm-Du1amhCe.js","assets/SignInPage-B_QhLNsX.js","assets/WishListPage-BPIeLphI.js","assets/CartPage-DQZwsYdP.js","assets/CheckoutPage-0kA3a-zi.js","assets/AddCreditCardForm-Db8B4iY1.js","assets/OrdersPage-CxmzcHBn.js","assets/index-D_5r5S_j.js","assets/IconicAlert-J7rMXFsn.js","assets/CustomerProfilePage-DcTAicNj.js","assets/index-C2PE0DAq.js","assets/sellerSolutionsPage-D-kn3oaR.js","assets/SellerDashboardPage-ow1UmQDe.js","assets/AddEditProductForm-DqNmxjSR.js","assets/DashboardContext-EUa4i4fj.js","assets/SellerProfilePage-7EU8ao3h.js","assets/MainTab-BaLk5APR.js","assets/ProductTab-Bm9T2YT8.js","assets/OrdersTab-j0trKFq8.js"])))=>i.map(i=>d[i]);
var V1=Object.defineProperty;var F1=(n,e,t)=>e in n?V1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Tm=(n,e,t)=>F1(n,typeof e!="symbol"?e+"":e,t);function U1(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in n)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(n,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var k3=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function GT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function N3(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),t}var Im={exports:{}},lu={},Sm={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function B1(){if(c0)return Ne;c0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function E(V){return V===null||typeof V!="object"?null:(V=v&&V[v]||V["@@iterator"],typeof V=="function"?V:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,O={};function A(V,G,me){this.props=V,this.context=G,this.refs=O,this.updater=me||S}A.prototype.isReactComponent={},A.prototype.setState=function(V,G){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,G,"setState")},A.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function B(){}B.prototype=A.prototype;function K(V,G,me){this.props=V,this.context=G,this.refs=O,this.updater=me||S}var q=K.prototype=new B;q.constructor=K,R(q,A.prototype),q.isPureReactComponent=!0;var Q=Array.isArray,oe=Object.prototype.hasOwnProperty,ie={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function C(V,G,me){var Re,ke={},Le=null,je=null;if(G!=null)for(Re in G.ref!==void 0&&(je=G.ref),G.key!==void 0&&(Le=""+G.key),G)oe.call(G,Re)&&!b.hasOwnProperty(Re)&&(ke[Re]=G[Re]);var $e=arguments.length-2;if($e===1)ke.children=me;else if(1<$e){for(var Xe=Array($e),Dt=0;Dt<$e;Dt++)Xe[Dt]=arguments[Dt+2];ke.children=Xe}if(V&&V.defaultProps)for(Re in $e=V.defaultProps,$e)ke[Re]===void 0&&(ke[Re]=$e[Re]);return{$$typeof:n,type:V,key:Le,ref:je,props:ke,_owner:ie.current}}function k(V,G){return{$$typeof:n,type:V.type,key:G,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function M(V){var G={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(me){return G[me]})}var F=/\/+/g;function N(V,G){return typeof V=="object"&&V!==null&&V.key!=null?M(""+V.key):G.toString(36)}function gt(V,G,me,Re,ke){var Le=typeof V;(Le==="undefined"||Le==="boolean")&&(V=null);var je=!1;if(V===null)je=!0;else switch(Le){case"string":case"number":je=!0;break;case"object":switch(V.$$typeof){case n:case e:je=!0}}if(je)return je=V,ke=ke(je),V=Re===""?"."+N(je,0):Re,Q(ke)?(me="",V!=null&&(me=V.replace(F,"$&/")+"/"),gt(ke,G,me,"",function(Dt){return Dt})):ke!=null&&(D(ke)&&(ke=k(ke,me+(!ke.key||je&&je.key===ke.key?"":(""+ke.key).replace(F,"$&/")+"/")+V)),G.push(ke)),1;if(je=0,Re=Re===""?".":Re+":",Q(V))for(var $e=0;$e<V.length;$e++){Le=V[$e];var Xe=Re+N(Le,$e);je+=gt(Le,G,me,Xe,ke)}else if(Xe=E(V),typeof Xe=="function")for(V=Xe.call(V),$e=0;!(Le=V.next()).done;)Le=Le.value,Xe=Re+N(Le,$e++),je+=gt(Le,G,me,Xe,ke);else if(Le==="object")throw G=String(V),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return je}function Xt(V,G,me){if(V==null)return V;var Re=[],ke=0;return gt(V,Re,"","",function(Le){return G.call(me,Le,ke++)}),Re}function Jt(V){if(V._status===-1){var G=V._result;G=G(),G.then(function(me){(V._status===0||V._status===-1)&&(V._status=1,V._result=me)},function(me){(V._status===0||V._status===-1)&&(V._status=2,V._result=me)}),V._status===-1&&(V._status=0,V._result=G)}if(V._status===1)return V._result.default;throw V._result}var Ke={current:null},se={transition:null},_e={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:se,ReactCurrentOwner:ie};function le(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:Xt,forEach:function(V,G,me){Xt(V,function(){G.apply(this,arguments)},me)},count:function(V){var G=0;return Xt(V,function(){G++}),G},toArray:function(V){return Xt(V,function(G){return G})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ne.Component=A,Ne.Fragment=t,Ne.Profiler=i,Ne.PureComponent=K,Ne.StrictMode=r,Ne.Suspense=f,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,Ne.act=le,Ne.cloneElement=function(V,G,me){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Re=R({},V.props),ke=V.key,Le=V.ref,je=V._owner;if(G!=null){if(G.ref!==void 0&&(Le=G.ref,je=ie.current),G.key!==void 0&&(ke=""+G.key),V.type&&V.type.defaultProps)var $e=V.type.defaultProps;for(Xe in G)oe.call(G,Xe)&&!b.hasOwnProperty(Xe)&&(Re[Xe]=G[Xe]===void 0&&$e!==void 0?$e[Xe]:G[Xe])}var Xe=arguments.length-2;if(Xe===1)Re.children=me;else if(1<Xe){$e=Array(Xe);for(var Dt=0;Dt<Xe;Dt++)$e[Dt]=arguments[Dt+2];Re.children=$e}return{$$typeof:n,type:V.type,key:ke,ref:Le,props:Re,_owner:je}},Ne.createContext=function(V){return V={$$typeof:l,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},Ne.createElement=C,Ne.createFactory=function(V){var G=C.bind(null,V);return G.type=V,G},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(V){return{$$typeof:c,render:V}},Ne.isValidElement=D,Ne.lazy=function(V){return{$$typeof:y,_payload:{_status:-1,_result:V},_init:Jt}},Ne.memo=function(V,G){return{$$typeof:p,type:V,compare:G===void 0?null:G}},Ne.startTransition=function(V){var G=se.transition;se.transition={};try{V()}finally{se.transition=G}},Ne.unstable_act=le,Ne.useCallback=function(V,G){return Ke.current.useCallback(V,G)},Ne.useContext=function(V){return Ke.current.useContext(V)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(V){return Ke.current.useDeferredValue(V)},Ne.useEffect=function(V,G){return Ke.current.useEffect(V,G)},Ne.useId=function(){return Ke.current.useId()},Ne.useImperativeHandle=function(V,G,me){return Ke.current.useImperativeHandle(V,G,me)},Ne.useInsertionEffect=function(V,G){return Ke.current.useInsertionEffect(V,G)},Ne.useLayoutEffect=function(V,G){return Ke.current.useLayoutEffect(V,G)},Ne.useMemo=function(V,G){return Ke.current.useMemo(V,G)},Ne.useReducer=function(V,G,me){return Ke.current.useReducer(V,G,me)},Ne.useRef=function(V){return Ke.current.useRef(V)},Ne.useState=function(V){return Ke.current.useState(V)},Ne.useSyncExternalStore=function(V,G,me){return Ke.current.useSyncExternalStore(V,G,me)},Ne.useTransition=function(){return Ke.current.useTransition()},Ne.version="18.3.1",Ne}var h0;function nf(){return h0||(h0=1,Sm.exports=B1()),Sm.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function z1(){if(d0)return lu;d0=1;var n=nf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,f,p){var y,v={},E=null,S=null;p!==void 0&&(E=""+p),f.key!==void 0&&(E=""+f.key),f.ref!==void 0&&(S=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(v[y]=f[y]);if(c&&c.defaultProps)for(y in f=c.defaultProps,f)v[y]===void 0&&(v[y]=f[y]);return{$$typeof:e,type:c,key:E,ref:S,props:v,_owner:i.current}}return lu.Fragment=t,lu.jsx=l,lu.jsxs=l,lu}var f0;function j1(){return f0||(f0=1,Im.exports=z1()),Im.exports}var Vr=j1(),qh={},Cm={exports:{}},In={},Rm={exports:{}},Am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function $1(){return p0||(p0=1,function(n){function e(se,_e){var le=se.length;se.push(_e);e:for(;0<le;){var V=le-1>>>1,G=se[V];if(0<i(G,_e))se[V]=_e,se[le]=G,le=V;else break e}}function t(se){return se.length===0?null:se[0]}function r(se){if(se.length===0)return null;var _e=se[0],le=se.pop();if(le!==_e){se[0]=le;e:for(var V=0,G=se.length,me=G>>>1;V<me;){var Re=2*(V+1)-1,ke=se[Re],Le=Re+1,je=se[Le];if(0>i(ke,le))Le<G&&0>i(je,ke)?(se[V]=je,se[Le]=le,V=Le):(se[V]=ke,se[Re]=le,V=Re);else if(Le<G&&0>i(je,le))se[V]=je,se[Le]=le,V=Le;else break e}}return _e}function i(se,_e){var le=se.sortIndex-_e.sortIndex;return le!==0?le:se.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();n.unstable_now=function(){return l.now()-c}}var f=[],p=[],y=1,v=null,E=3,S=!1,R=!1,O=!1,A=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(se){for(var _e=t(p);_e!==null;){if(_e.callback===null)r(p);else if(_e.startTime<=se)r(p),_e.sortIndex=_e.expirationTime,e(f,_e);else break;_e=t(p)}}function Q(se){if(O=!1,q(se),!R)if(t(f)!==null)R=!0,Jt(oe);else{var _e=t(p);_e!==null&&Ke(Q,_e.startTime-se)}}function oe(se,_e){R=!1,O&&(O=!1,B(C),C=-1),S=!0;var le=E;try{for(q(_e),v=t(f);v!==null&&(!(v.expirationTime>_e)||se&&!M());){var V=v.callback;if(typeof V=="function"){v.callback=null,E=v.priorityLevel;var G=V(v.expirationTime<=_e);_e=n.unstable_now(),typeof G=="function"?v.callback=G:v===t(f)&&r(f),q(_e)}else r(f);v=t(f)}if(v!==null)var me=!0;else{var Re=t(p);Re!==null&&Ke(Q,Re.startTime-_e),me=!1}return me}finally{v=null,E=le,S=!1}}var ie=!1,b=null,C=-1,k=5,D=-1;function M(){return!(n.unstable_now()-D<k)}function F(){if(b!==null){var se=n.unstable_now();D=se;var _e=!0;try{_e=b(!0,se)}finally{_e?N():(ie=!1,b=null)}}else ie=!1}var N;if(typeof K=="function")N=function(){K(F)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,Xt=gt.port2;gt.port1.onmessage=F,N=function(){Xt.postMessage(null)}}else N=function(){A(F,0)};function Jt(se){b=se,ie||(ie=!0,N())}function Ke(se,_e){C=A(function(){se(n.unstable_now())},_e)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){R||S||(R=!0,Jt(oe))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(se){switch(E){case 1:case 2:case 3:var _e=3;break;default:_e=E}var le=E;E=_e;try{return se()}finally{E=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,_e){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var le=E;E=se;try{return _e()}finally{E=le}},n.unstable_scheduleCallback=function(se,_e,le){var V=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?V+le:V):le=V,se){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=le+G,se={id:y++,callback:_e,priorityLevel:se,startTime:le,expirationTime:G,sortIndex:-1},le>V?(se.sortIndex=le,e(p,se),t(f)===null&&se===t(p)&&(O?(B(C),C=-1):O=!0,Ke(Q,le-V))):(se.sortIndex=G,e(f,se),R||S||(R=!0,Jt(oe))),se},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(se){var _e=E;return function(){var le=E;E=_e;try{return se.apply(this,arguments)}finally{E=le}}}}(Am)),Am}var m0;function W1(){return m0||(m0=1,Rm.exports=$1()),Rm.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function H1(){if(g0)return In;g0=1;var n=nf(),e=W1();function t(s){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+s,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+s+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(s,o){l(s,o),l(s+"Capture",o)}function l(s,o){for(i[s]=o,s=0;s<o.length;s++)r.add(o[s])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function E(s){return f.call(v,s)?!0:f.call(y,s)?!1:p.test(s)?v[s]=!0:(y[s]=!0,!1)}function S(s,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function R(s,o,u,d){if(o===null||typeof o>"u"||S(s,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function O(s,o,u,d,m,_,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=u,this.propertyName=s,this.type=o,this.sanitizeURL=_,this.removeEmptyString=T}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){A[s]=new O(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var o=s[0];A[o]=new O(o,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){A[s]=new O(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){A[s]=new O(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){A[s]=new O(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){A[s]=new O(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){A[s]=new O(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){A[s]=new O(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){A[s]=new O(s,5,!1,s.toLowerCase(),null,!1,!1)});var B=/[\-:]([a-z])/g;function K(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var o=s.replace(B,K);A[o]=new O(o,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var o=s.replace(B,K);A[o]=new O(o,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var o=s.replace(B,K);A[o]=new O(o,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){A[s]=new O(s,1,!1,s.toLowerCase(),null,!1,!1)}),A.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){A[s]=new O(s,1,!1,s.toLowerCase(),null,!0,!0)});function q(s,o,u,d){var m=A.hasOwnProperty(o)?A[o]:null;(m!==null?m.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(R(o,u,m,d)&&(u=null),d||m===null?E(o)&&(u===null?s.removeAttribute(o):s.setAttribute(o,""+u)):m.mustUseProperty?s[m.propertyName]=u===null?m.type===3?!1:"":u:(o=m.attributeName,d=m.attributeNamespace,u===null?s.removeAttribute(o):(m=m.type,u=m===3||m===4&&u===!0?"":""+u,d?s.setAttributeNS(d,o,u):s.setAttribute(o,u))))}var Q=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ie=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),M=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),gt=Symbol.for("react.suspense_list"),Xt=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),Ke=Symbol.for("react.offscreen"),se=Symbol.iterator;function _e(s){return s===null||typeof s!="object"?null:(s=se&&s[se]||s["@@iterator"],typeof s=="function"?s:null)}var le=Object.assign,V;function G(s){if(V===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+s}var me=!1;function Re(s,o){if(!s||me)return"";me=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch($){var d=$}Reflect.construct(s,[],o)}else{try{o.call()}catch($){d=$}s.call(o.prototype)}else{try{throw Error()}catch($){d=$}s()}}catch($){if($&&d&&typeof $.stack=="string"){for(var m=$.stack.split(`
`),_=d.stack.split(`
`),T=m.length-1,P=_.length-1;1<=T&&0<=P&&m[T]!==_[P];)P--;for(;1<=T&&0<=P;T--,P--)if(m[T]!==_[P]){if(T!==1||P!==1)do if(T--,P--,0>P||m[T]!==_[P]){var x=`
`+m[T].replace(" at new "," at ");return s.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",s.displayName)),x}while(1<=T&&0<=P);break}}}finally{me=!1,Error.prepareStackTrace=u}return(s=s?s.displayName||s.name:"")?G(s):""}function ke(s){switch(s.tag){case 5:return G(s.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return s=Re(s.type,!1),s;case 11:return s=Re(s.type.render,!1),s;case 1:return s=Re(s.type,!0),s;default:return""}}function Le(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case b:return"Fragment";case ie:return"Portal";case k:return"Profiler";case C:return"StrictMode";case N:return"Suspense";case gt:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case M:return(s.displayName||"Context")+".Consumer";case D:return(s._context.displayName||"Context")+".Provider";case F:var o=s.render;return s=s.displayName,s||(s=o.displayName||o.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case Xt:return o=s.displayName||null,o!==null?o:Le(s.type)||"Memo";case Jt:o=s._payload,s=s._init;try{return Le(s(o))}catch{}}return null}function je(s){var o=s.type;switch(s.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=o.render,s=s.displayName||s.name||"",o.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Le(o);case 8:return o===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function $e(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Xe(s){var o=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Dt(s){var o=Xe(s)?"checked":"value",u=Object.getOwnPropertyDescriptor(s.constructor.prototype,o),d=""+s[o];if(!s.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var m=u.get,_=u.set;return Object.defineProperty(s,o,{configurable:!0,get:function(){return m.call(this)},set:function(T){d=""+T,_.call(this,T)}}),Object.defineProperty(s,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){s._valueTracker=null,delete s[o]}}}}function Kr(s){s._valueTracker||(s._valueTracker=Dt(s))}function Lo(s){if(!s)return!1;var o=s._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return s&&(d=Xe(s)?s.checked?"true":"false":s.value),s=d,s!==u?(o.setValue(s),!0):!1}function xi(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function Ls(s,o){var u=o.checked;return le({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??s._wrapperState.initialChecked})}function Mo(s,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=$e(o.value!=null?o.value:u),s._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function pl(s,o){o=o.checked,o!=null&&q(s,"checked",o,!1)}function ml(s,o){pl(s,o);var u=$e(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&s.value===""||s.value!=u)&&(s.value=""+u):s.value!==""+u&&(s.value=""+u);else if(d==="submit"||d==="reset"){s.removeAttribute("value");return}o.hasOwnProperty("value")?Vo(s,o.type,u):o.hasOwnProperty("defaultValue")&&Vo(s,o.type,$e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(s.defaultChecked=!!o.defaultChecked)}function bc(s,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+s._wrapperState.initialValue,u||o===s.value||(s.value=o),s.defaultValue=o}u=s.name,u!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,u!==""&&(s.name=u)}function Vo(s,o,u){(o!=="number"||xi(s.ownerDocument)!==s)&&(u==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+u&&(s.defaultValue=""+u))}var Gr=Array.isArray;function Qr(s,o,u,d){if(s=s.options,o){o={};for(var m=0;m<u.length;m++)o["$"+u[m]]=!0;for(u=0;u<s.length;u++)m=o.hasOwnProperty("$"+s[u].value),s[u].selected!==m&&(s[u].selected=m),m&&d&&(s[u].defaultSelected=!0)}else{for(u=""+$e(u),o=null,m=0;m<s.length;m++){if(s[m].value===u){s[m].selected=!0,d&&(s[m].defaultSelected=!0);return}o!==null||s[m].disabled||(o=s[m])}o!==null&&(o.selected=!0)}}function gl(s,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},o,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Fo(s,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(Gr(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}s._wrapperState={initialValue:$e(u)}}function Uo(s,o){var u=$e(o.value),d=$e(o.defaultValue);u!=null&&(u=""+u,u!==s.value&&(s.value=u),o.defaultValue==null&&s.defaultValue!==u&&(s.defaultValue=u)),d!=null&&(s.defaultValue=""+d)}function _l(s){var o=s.textContent;o===s._wrapperState.initialValue&&o!==""&&o!==null&&(s.value=o)}function Ct(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rt(s,o){return s==null||s==="http://www.w3.org/1999/xhtml"?Ct(o):s==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Yr,yl=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,m){MSApp.execUnsafeLocalFunction(function(){return s(o,u,d,m)})}:s}(function(s,o){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=o;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Yr.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;o.firstChild;)s.appendChild(o.firstChild)}});function Di(s,o){if(o){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=o;return}}s.textContent=o}var Ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vs=["Webkit","ms","Moz","O"];Object.keys(Ms).forEach(function(s){Vs.forEach(function(o){o=o+s.charAt(0).toUpperCase()+s.substring(1),Ms[o]=Ms[s]})});function vl(s,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||Ms.hasOwnProperty(s)&&Ms[s]?(""+o).trim():o+"px"}function wl(s,o){s=s.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,m=vl(u,o[u],d);u==="float"&&(u="cssFloat"),d?s.setProperty(u,m):s[u]=m}}var El=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(s,o){if(o){if(El[s]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,s));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Il(s,o){if(s.indexOf("-")===-1)return typeof o.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fs=null;function Bo(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var zo=null,Un=null,Sr=null;function jo(s){if(s=Kl(s)){if(typeof zo!="function")throw Error(t(280));var o=s.stateNode;o&&(o=ah(o),zo(s.stateNode,s.type,o))}}function Cr(s){Un?Sr?Sr.push(s):Sr=[s]:Un=s}function Sl(){if(Un){var s=Un,o=Sr;if(Sr=Un=null,jo(s),o)for(s=0;s<o.length;s++)jo(o[s])}}function Us(s,o){return s(o)}function Cl(){}var Xr=!1;function Rl(s,o,u){if(Xr)return s(o,u);Xr=!0;try{return Us(s,o,u)}finally{Xr=!1,(Un!==null||Sr!==null)&&(Cl(),Sl())}}function _t(s,o){var u=s.stateNode;if(u===null)return null;var d=ah(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(s=s.type,d=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!d;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var $o=!1;if(c)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){$o=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{$o=!1}function Bs(s,o,u,d,m,_,T,P,x){var $=Array.prototype.slice.call(arguments,3);try{o.apply(u,$)}catch(J){this.onError(J)}}var zs=!1,Wo=null,er=!1,Al=null,Yf={onError:function(s){zs=!0,Wo=s}};function Ho(s,o,u,d,m,_,T,P,x){zs=!1,Wo=null,Bs.apply(Yf,arguments)}function xc(s,o,u,d,m,_,T,P,x){if(Ho.apply(this,arguments),zs){if(zs){var $=Wo;zs=!1,Wo=null}else throw Error(t(198));er||(er=!0,Al=$)}}function tr(s){var o=s,u=s;if(s.alternate)for(;o.return;)o=o.return;else{s=o;do o=s,o.flags&4098&&(u=o.return),s=o.return;while(s)}return o.tag===3?u:null}function js(s){if(s.tag===13){var o=s.memoizedState;if(o===null&&(s=s.alternate,s!==null&&(o=s.memoizedState)),o!==null)return o.dehydrated}return null}function nr(s){if(tr(s)!==s)throw Error(t(188))}function Dc(s){var o=s.alternate;if(!o){if(o=tr(s),o===null)throw Error(t(188));return o!==s?null:s}for(var u=s,d=o;;){var m=u.return;if(m===null)break;var _=m.alternate;if(_===null){if(d=m.return,d!==null){u=d;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===u)return nr(m),s;if(_===d)return nr(m),o;_=_.sibling}throw Error(t(188))}if(u.return!==d.return)u=m,d=_;else{for(var T=!1,P=m.child;P;){if(P===u){T=!0,u=m,d=_;break}if(P===d){T=!0,d=m,u=_;break}P=P.sibling}if(!T){for(P=_.child;P;){if(P===u){T=!0,u=_,d=m;break}if(P===d){T=!0,d=_,u=m;break}P=P.sibling}if(!T)throw Error(t(189))}}if(u.alternate!==d)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?s:o}function Pl(s){return s=Dc(s),s!==null?qo(s):null}function qo(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var o=qo(s);if(o!==null)return o;s=s.sibling}return null}var Ko=e.unstable_scheduleCallback,kl=e.unstable_cancelCallback,Oc=e.unstable_shouldYield,Xf=e.unstable_requestPaint,Je=e.unstable_now,Lc=e.unstable_getCurrentPriorityLevel,$s=e.unstable_ImmediatePriority,Oi=e.unstable_UserBlockingPriority,Bn=e.unstable_NormalPriority,Nl=e.unstable_LowPriority,Mc=e.unstable_IdlePriority,Ws=null,An=null;function Vc(s){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Ws,s,void 0,(s.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:Uc,bl=Math.log,Fc=Math.LN2;function Uc(s){return s>>>=0,s===0?32:31-(bl(s)/Fc|0)|0}var Go=64,Qo=4194304;function Li(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function Hs(s,o){var u=s.pendingLanes;if(u===0)return 0;var d=0,m=s.suspendedLanes,_=s.pingedLanes,T=u&268435455;if(T!==0){var P=T&~m;P!==0?d=Li(P):(_&=T,_!==0&&(d=Li(_)))}else T=u&~m,T!==0?d=Li(T):_!==0&&(d=Li(_));if(d===0)return 0;if(o!==0&&o!==d&&!(o&m)&&(m=d&-d,_=o&-o,m>=_||m===16&&(_&4194240)!==0))return o;if(d&4&&(d|=u&16),o=s.entangledLanes,o!==0)for(s=s.entanglements,o&=d;0<o;)u=31-ln(o),m=1<<u,d|=s[u],o&=~m;return d}function Jf(s,o){switch(s){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jr(s,o){for(var u=s.suspendedLanes,d=s.pingedLanes,m=s.expirationTimes,_=s.pendingLanes;0<_;){var T=31-ln(_),P=1<<T,x=m[T];x===-1?(!(P&u)||P&d)&&(m[T]=Jf(P,o)):x<=o&&(s.expiredLanes|=P),_&=~P}}function Pn(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function qs(){var s=Go;return Go<<=1,!(Go&4194240)&&(Go=64),s}function Mi(s){for(var o=[],u=0;31>u;u++)o.push(s);return o}function Vi(s,o,u){s.pendingLanes|=o,o!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,o=31-ln(o),s[o]=u}function Ge(s,o){var u=s.pendingLanes&~o;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=o,s.mutableReadLanes&=o,s.entangledLanes&=o,o=s.entanglements;var d=s.eventTimes;for(s=s.expirationTimes;0<u;){var m=31-ln(u),_=1<<m;o[m]=0,d[m]=-1,s[m]=-1,u&=~_}}function Fi(s,o){var u=s.entangledLanes|=o;for(s=s.entanglements;u;){var d=31-ln(u),m=1<<d;m&o|s[d]&o&&(s[d]|=o),u&=~m}}var Oe=0;function Ui(s){return s&=-s,1<s?4<s?s&268435455?16:536870912:4:1}var Bc,Yo,zc,jc,$c,xl=!1,Rr=[],$t=null,rr=null,ir=null,Bi=new Map,zn=new Map,Ar=[],Zf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wc(s,o){switch(s){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Bi.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(o.pointerId)}}function gn(s,o,u,d,m,_){return s===null||s.nativeEvent!==_?(s={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:_,targetContainers:[m]},o!==null&&(o=Kl(o),o!==null&&Yo(o)),s):(s.eventSystemFlags|=d,o=s.targetContainers,m!==null&&o.indexOf(m)===-1&&o.push(m),s)}function ep(s,o,u,d,m){switch(o){case"focusin":return $t=gn($t,s,o,u,d,m),!0;case"dragenter":return rr=gn(rr,s,o,u,d,m),!0;case"mouseover":return ir=gn(ir,s,o,u,d,m),!0;case"pointerover":var _=m.pointerId;return Bi.set(_,gn(Bi.get(_)||null,s,o,u,d,m)),!0;case"gotpointercapture":return _=m.pointerId,zn.set(_,gn(zn.get(_)||null,s,o,u,d,m)),!0}return!1}function Hc(s){var o=Xs(s.target);if(o!==null){var u=tr(o);if(u!==null){if(o=u.tag,o===13){if(o=js(u),o!==null){s.blockedOn=o,$c(s.priority,function(){zc(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Pr(s){if(s.blockedOn!==null)return!1;for(var o=s.targetContainers;0<o.length;){var u=Xo(s.domEventName,s.eventSystemFlags,o[0],s.nativeEvent);if(u===null){u=s.nativeEvent;var d=new u.constructor(u.type,u);Fs=d,u.target.dispatchEvent(d),Fs=null}else return o=Kl(u),o!==null&&Yo(o),s.blockedOn=u,!1;o.shift()}return!0}function Ks(s,o,u){Pr(s)&&u.delete(o)}function qc(){xl=!1,$t!==null&&Pr($t)&&($t=null),rr!==null&&Pr(rr)&&(rr=null),ir!==null&&Pr(ir)&&(ir=null),Bi.forEach(Ks),zn.forEach(Ks)}function sr(s,o){s.blockedOn===o&&(s.blockedOn=null,xl||(xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qc)))}function or(s){function o(m){return sr(m,s)}if(0<Rr.length){sr(Rr[0],s);for(var u=1;u<Rr.length;u++){var d=Rr[u];d.blockedOn===s&&(d.blockedOn=null)}}for($t!==null&&sr($t,s),rr!==null&&sr(rr,s),ir!==null&&sr(ir,s),Bi.forEach(o),zn.forEach(o),u=0;u<Ar.length;u++)d=Ar[u],d.blockedOn===s&&(d.blockedOn=null);for(;0<Ar.length&&(u=Ar[0],u.blockedOn===null);)Hc(u),u.blockedOn===null&&Ar.shift()}var Zr=Q.ReactCurrentBatchConfig,zi=!0;function it(s,o,u,d){var m=Oe,_=Zr.transition;Zr.transition=null;try{Oe=1,Dl(s,o,u,d)}finally{Oe=m,Zr.transition=_}}function tp(s,o,u,d){var m=Oe,_=Zr.transition;Zr.transition=null;try{Oe=4,Dl(s,o,u,d)}finally{Oe=m,Zr.transition=_}}function Dl(s,o,u,d){if(zi){var m=Xo(s,o,u,d);if(m===null)dp(s,o,d,Gs,u),Wc(s,d);else if(ep(m,s,o,u,d))d.stopPropagation();else if(Wc(s,d),o&4&&-1<Zf.indexOf(s)){for(;m!==null;){var _=Kl(m);if(_!==null&&Bc(_),_=Xo(s,o,u,d),_===null&&dp(s,o,d,Gs,u),_===m)break;m=_}m!==null&&d.stopPropagation()}else dp(s,o,d,null,u)}}var Gs=null;function Xo(s,o,u,d){if(Gs=null,s=Bo(d),s=Xs(s),s!==null)if(o=tr(s),o===null)s=null;else if(u=o.tag,u===13){if(s=js(o),s!==null)return s;s=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;s=null}else o!==s&&(s=null);return Gs=s,null}function Ol(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lc()){case $s:return 1;case Oi:return 4;case Bn:case Nl:return 16;case Mc:return 536870912;default:return 16}default:return 16}}var kn=null,Jo=null,_n=null;function Ll(){if(_n)return _n;var s,o=Jo,u=o.length,d,m="value"in kn?kn.value:kn.textContent,_=m.length;for(s=0;s<u&&o[s]===m[s];s++);var T=u-s;for(d=1;d<=T&&o[u-d]===m[_-d];d++);return _n=m.slice(s,1<d?1-d:void 0)}function Zo(s){var o=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&o===13&&(s=13)):s=o,s===10&&(s=13),32<=s||s===13?s:0}function kr(){return!0}function Ml(){return!1}function Wt(s){function o(u,d,m,_,T){this._reactName=u,this._targetInst=m,this.type=d,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var P in s)s.hasOwnProperty(P)&&(u=s[P],this[P]=u?u(_):_[P]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?kr:Ml,this.isPropagationStopped=Ml,this}return le(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),o}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Wt(ar),Nr=le({},ar,{view:0,detail:0}),np=Wt(Nr),ta,ei,ji,Qs=le({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:br,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==ji&&(ji&&s.type==="mousemove"?(ta=s.screenX-ji.screenX,ei=s.screenY-ji.screenY):ei=ta=0,ji=s),ta)},movementY:function(s){return"movementY"in s?s.movementY:ei}}),na=Wt(Qs),Vl=le({},Qs,{dataTransfer:0}),Kc=Wt(Vl),ra=le({},Nr,{relatedTarget:0}),ia=Wt(ra),Gc=le({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),ti=Wt(Gc),Qc=le({},ar,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),Yc=Wt(Qc),Xc=le({},ar,{data:0}),Fl=Wt(Xc),sa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},un={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zc(s){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(s):(s=Jc[s])?!!o[s]:!1}function br(){return Zc}var h=le({},Nr,{key:function(s){if(s.key){var o=sa[s.key]||s.key;if(o!=="Unidentified")return o}return s.type==="keypress"?(s=Zo(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?un[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:br,charCode:function(s){return s.type==="keypress"?Zo(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Zo(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),g=Wt(h),w=le({},Qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=Wt(w),U=le({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:br}),H=Wt(U),re=le({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),qe=Wt(re),At=le({},Qs,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=Wt(At),Ot=[9,13,27,32],wt=c&&"CompositionEvent"in window,jn=null;c&&"documentMode"in document&&(jn=document.documentMode);var Nn=c&&"TextEvent"in window&&!jn,Ys=c&&(!wt||jn&&8<jn&&11>=jn),oa=" ",iv=!1;function sv(s,o){switch(s){case"keyup":return Ot.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ov(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var aa=!1;function OA(s,o){switch(s){case"compositionend":return ov(o);case"keypress":return o.which!==32?null:(iv=!0,oa);case"textInput":return s=o.data,s===oa&&iv?null:s;default:return null}}function LA(s,o){if(aa)return s==="compositionend"||!wt&&sv(s,o)?(s=Ll(),_n=Jo=kn=null,aa=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Ys&&o.locale!=="ko"?null:o.data;default:return null}}var MA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o==="input"?!!MA[s.type]:o==="textarea"}function lv(s,o,u,d){Cr(d),o=ih(o,"onChange"),0<o.length&&(u=new ea("onChange","change",null,u,d),s.push({event:u,listeners:o}))}var Ul=null,Bl=null;function VA(s){Rv(s,0)}function eh(s){var o=da(s);if(Lo(o))return s}function FA(s,o){if(s==="change")return o}var uv=!1;if(c){var rp;if(c){var ip="oninput"in document;if(!ip){var cv=document.createElement("div");cv.setAttribute("oninput","return;"),ip=typeof cv.oninput=="function"}rp=ip}else rp=!1;uv=rp&&(!document.documentMode||9<document.documentMode)}function hv(){Ul&&(Ul.detachEvent("onpropertychange",dv),Bl=Ul=null)}function dv(s){if(s.propertyName==="value"&&eh(Bl)){var o=[];lv(o,Bl,s,Bo(s)),Rl(VA,o)}}function UA(s,o,u){s==="focusin"?(hv(),Ul=o,Bl=u,Ul.attachEvent("onpropertychange",dv)):s==="focusout"&&hv()}function BA(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return eh(Bl)}function zA(s,o){if(s==="click")return eh(o)}function jA(s,o){if(s==="input"||s==="change")return eh(o)}function $A(s,o){return s===o&&(s!==0||1/s===1/o)||s!==s&&o!==o}var lr=typeof Object.is=="function"?Object.is:$A;function zl(s,o){if(lr(s,o))return!0;if(typeof s!="object"||s===null||typeof o!="object"||o===null)return!1;var u=Object.keys(s),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var m=u[d];if(!f.call(o,m)||!lr(s[m],o[m]))return!1}return!0}function fv(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function pv(s,o){var u=fv(s);s=0;for(var d;u;){if(u.nodeType===3){if(d=s+u.textContent.length,s<=o&&d>=o)return{node:u,offset:o-s};s=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=fv(u)}}function mv(s,o){return s&&o?s===o?!0:s&&s.nodeType===3?!1:o&&o.nodeType===3?mv(s,o.parentNode):"contains"in s?s.contains(o):s.compareDocumentPosition?!!(s.compareDocumentPosition(o)&16):!1:!1}function gv(){for(var s=window,o=xi();o instanceof s.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)s=o.contentWindow;else break;o=xi(s.document)}return o}function sp(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o&&(o==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||o==="textarea"||s.contentEditable==="true")}function WA(s){var o=gv(),u=s.focusedElem,d=s.selectionRange;if(o!==u&&u&&u.ownerDocument&&mv(u.ownerDocument.documentElement,u)){if(d!==null&&sp(u)){if(o=d.start,s=d.end,s===void 0&&(s=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(s,u.value.length);else if(s=(o=u.ownerDocument||document)&&o.defaultView||window,s.getSelection){s=s.getSelection();var m=u.textContent.length,_=Math.min(d.start,m);d=d.end===void 0?_:Math.min(d.end,m),!s.extend&&_>d&&(m=d,d=_,_=m),m=pv(u,_);var T=pv(u,d);m&&T&&(s.rangeCount!==1||s.anchorNode!==m.node||s.anchorOffset!==m.offset||s.focusNode!==T.node||s.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(m.node,m.offset),s.removeAllRanges(),_>d?(s.addRange(o),s.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),s.addRange(o)))}}for(o=[],s=u;s=s.parentNode;)s.nodeType===1&&o.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)s=o[u],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var HA=c&&"documentMode"in document&&11>=document.documentMode,la=null,op=null,jl=null,ap=!1;function _v(s,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;ap||la==null||la!==xi(d)||(d=la,"selectionStart"in d&&sp(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),jl&&zl(jl,d)||(jl=d,d=ih(op,"onSelect"),0<d.length&&(o=new ea("onSelect","select",null,o,u),s.push({event:o,listeners:d}),o.target=la)))}function th(s,o){var u={};return u[s.toLowerCase()]=o.toLowerCase(),u["Webkit"+s]="webkit"+o,u["Moz"+s]="moz"+o,u}var ua={animationend:th("Animation","AnimationEnd"),animationiteration:th("Animation","AnimationIteration"),animationstart:th("Animation","AnimationStart"),transitionend:th("Transition","TransitionEnd")},lp={},yv={};c&&(yv=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function nh(s){if(lp[s])return lp[s];if(!ua[s])return s;var o=ua[s],u;for(u in o)if(o.hasOwnProperty(u)&&u in yv)return lp[s]=o[u];return s}var vv=nh("animationend"),wv=nh("animationiteration"),Ev=nh("animationstart"),Tv=nh("transitionend"),Iv=new Map,Sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(s,o){Iv.set(s,o),a(o,[s])}for(var up=0;up<Sv.length;up++){var cp=Sv[up],qA=cp.toLowerCase(),KA=cp[0].toUpperCase()+cp.slice(1);$i(qA,"on"+KA)}$i(vv,"onAnimationEnd"),$i(wv,"onAnimationIteration"),$i(Ev,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Tv,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GA=new Set("cancel close invalid load scroll toggle".split(" ").concat($l));function Cv(s,o,u){var d=s.type||"unknown-event";s.currentTarget=u,xc(d,o,void 0,s),s.currentTarget=null}function Rv(s,o){o=(o&4)!==0;for(var u=0;u<s.length;u++){var d=s[u],m=d.event;d=d.listeners;e:{var _=void 0;if(o)for(var T=d.length-1;0<=T;T--){var P=d[T],x=P.instance,$=P.currentTarget;if(P=P.listener,x!==_&&m.isPropagationStopped())break e;Cv(m,P,$),_=x}else for(T=0;T<d.length;T++){if(P=d[T],x=P.instance,$=P.currentTarget,P=P.listener,x!==_&&m.isPropagationStopped())break e;Cv(m,P,$),_=x}}}if(er)throw s=Al,er=!1,Al=null,s}function tt(s,o){var u=o[yp];u===void 0&&(u=o[yp]=new Set);var d=s+"__bubble";u.has(d)||(Av(o,s,2,!1),u.add(d))}function hp(s,o,u){var d=0;o&&(d|=4),Av(u,s,d,o)}var rh="_reactListening"+Math.random().toString(36).slice(2);function Wl(s){if(!s[rh]){s[rh]=!0,r.forEach(function(u){u!=="selectionchange"&&(GA.has(u)||hp(u,!1,s),hp(u,!0,s))});var o=s.nodeType===9?s:s.ownerDocument;o===null||o[rh]||(o[rh]=!0,hp("selectionchange",!1,o))}}function Av(s,o,u,d){switch(Ol(o)){case 1:var m=it;break;case 4:m=tp;break;default:m=Dl}u=m.bind(null,o,u,s),m=void 0,!$o||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(m=!0),d?m!==void 0?s.addEventListener(o,u,{capture:!0,passive:m}):s.addEventListener(o,u,!0):m!==void 0?s.addEventListener(o,u,{passive:m}):s.addEventListener(o,u,!1)}function dp(s,o,u,d,m){var _=d;if(!(o&1)&&!(o&2)&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var P=d.stateNode.containerInfo;if(P===m||P.nodeType===8&&P.parentNode===m)break;if(T===4)for(T=d.return;T!==null;){var x=T.tag;if((x===3||x===4)&&(x=T.stateNode.containerInfo,x===m||x.nodeType===8&&x.parentNode===m))return;T=T.return}for(;P!==null;){if(T=Xs(P),T===null)return;if(x=T.tag,x===5||x===6){d=_=T;continue e}P=P.parentNode}}d=d.return}Rl(function(){var $=_,J=Bo(u),ee=[];e:{var X=Iv.get(s);if(X!==void 0){var ae=ea,he=s;switch(s){case"keypress":if(Zo(u)===0)break e;case"keydown":case"keyup":ae=g;break;case"focusin":he="focus",ae=ia;break;case"focusout":he="blur",ae=ia;break;case"beforeblur":case"afterblur":ae=ia;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Kc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=H;break;case vv:case wv:case Ev:ae=ti;break;case Tv:ae=qe;break;case"scroll":ae=np;break;case"wheel":ae=Me;break;case"copy":case"cut":case"paste":ae=Yc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=I}var de=(o&4)!==0,yt=!de&&s==="scroll",z=de?X!==null?X+"Capture":null:X;de=[];for(var L=$,j;L!==null;){j=L;var te=j.stateNode;if(j.tag===5&&te!==null&&(j=te,z!==null&&(te=_t(L,z),te!=null&&de.push(Hl(L,te,j)))),yt)break;L=L.return}0<de.length&&(X=new ae(X,he,null,u,J),ee.push({event:X,listeners:de}))}}if(!(o&7)){e:{if(X=s==="mouseover"||s==="pointerover",ae=s==="mouseout"||s==="pointerout",X&&u!==Fs&&(he=u.relatedTarget||u.fromElement)&&(Xs(he)||he[ni]))break e;if((ae||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,ae?(he=u.relatedTarget||u.toElement,ae=$,he=he?Xs(he):null,he!==null&&(yt=tr(he),he!==yt||he.tag!==5&&he.tag!==6)&&(he=null)):(ae=null,he=$),ae!==he)){if(de=na,te="onMouseLeave",z="onMouseEnter",L="mouse",(s==="pointerout"||s==="pointerover")&&(de=I,te="onPointerLeave",z="onPointerEnter",L="pointer"),yt=ae==null?X:da(ae),j=he==null?X:da(he),X=new de(te,L+"leave",ae,u,J),X.target=yt,X.relatedTarget=j,te=null,Xs(J)===$&&(de=new de(z,L+"enter",he,u,J),de.target=j,de.relatedTarget=yt,te=de),yt=te,ae&&he)t:{for(de=ae,z=he,L=0,j=de;j;j=ca(j))L++;for(j=0,te=z;te;te=ca(te))j++;for(;0<L-j;)de=ca(de),L--;for(;0<j-L;)z=ca(z),j--;for(;L--;){if(de===z||z!==null&&de===z.alternate)break t;de=ca(de),z=ca(z)}de=null}else de=null;ae!==null&&Pv(ee,X,ae,de,!1),he!==null&&yt!==null&&Pv(ee,yt,he,de,!0)}}e:{if(X=$?da($):window,ae=X.nodeName&&X.nodeName.toLowerCase(),ae==="select"||ae==="input"&&X.type==="file")var pe=FA;else if(av(X))if(uv)pe=jA;else{pe=BA;var ye=UA}else(ae=X.nodeName)&&ae.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(pe=zA);if(pe&&(pe=pe(s,$))){lv(ee,pe,u,J);break e}ye&&ye(s,X,$),s==="focusout"&&(ye=X._wrapperState)&&ye.controlled&&X.type==="number"&&Vo(X,"number",X.value)}switch(ye=$?da($):window,s){case"focusin":(av(ye)||ye.contentEditable==="true")&&(la=ye,op=$,jl=null);break;case"focusout":jl=op=la=null;break;case"mousedown":ap=!0;break;case"contextmenu":case"mouseup":case"dragend":ap=!1,_v(ee,u,J);break;case"selectionchange":if(HA)break;case"keydown":case"keyup":_v(ee,u,J)}var ve;if(wt)e:{switch(s){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else aa?sv(s,u)&&(Te="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(Te="onCompositionStart");Te&&(Ys&&u.locale!=="ko"&&(aa||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&aa&&(ve=Ll()):(kn=J,Jo="value"in kn?kn.value:kn.textContent,aa=!0)),ye=ih($,Te),0<ye.length&&(Te=new Fl(Te,s,null,u,J),ee.push({event:Te,listeners:ye}),ve?Te.data=ve:(ve=ov(u),ve!==null&&(Te.data=ve)))),(ve=Nn?OA(s,u):LA(s,u))&&($=ih($,"onBeforeInput"),0<$.length&&(J=new Fl("onBeforeInput","beforeinput",null,u,J),ee.push({event:J,listeners:$}),J.data=ve))}Rv(ee,o)})}function Hl(s,o,u){return{instance:s,listener:o,currentTarget:u}}function ih(s,o){for(var u=o+"Capture",d=[];s!==null;){var m=s,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=_t(s,u),_!=null&&d.unshift(Hl(s,_,m)),_=_t(s,o),_!=null&&d.push(Hl(s,_,m))),s=s.return}return d}function ca(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function Pv(s,o,u,d,m){for(var _=o._reactName,T=[];u!==null&&u!==d;){var P=u,x=P.alternate,$=P.stateNode;if(x!==null&&x===d)break;P.tag===5&&$!==null&&(P=$,m?(x=_t(u,_),x!=null&&T.unshift(Hl(u,x,P))):m||(x=_t(u,_),x!=null&&T.push(Hl(u,x,P)))),u=u.return}T.length!==0&&s.push({event:o,listeners:T})}var QA=/\r\n?/g,YA=/\u0000|\uFFFD/g;function kv(s){return(typeof s=="string"?s:""+s).replace(QA,`
`).replace(YA,"")}function sh(s,o,u){if(o=kv(o),kv(s)!==o&&u)throw Error(t(425))}function oh(){}var fp=null,pp=null;function mp(s,o){return s==="textarea"||s==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var gp=typeof setTimeout=="function"?setTimeout:void 0,XA=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,JA=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(s){return Nv.resolve(null).then(s).catch(ZA)}:gp;function ZA(s){setTimeout(function(){throw s})}function _p(s,o){var u=o,d=0;do{var m=u.nextSibling;if(s.removeChild(u),m&&m.nodeType===8)if(u=m.data,u==="/$"){if(d===0){s.removeChild(m),or(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=m}while(u);or(o)}function Wi(s){for(;s!=null;s=s.nextSibling){var o=s.nodeType;if(o===1||o===3)break;if(o===8){if(o=s.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return s}function bv(s){s=s.previousSibling;for(var o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return s;o--}else u==="/$"&&o++}s=s.previousSibling}return null}var ha=Math.random().toString(36).slice(2),xr="__reactFiber$"+ha,ql="__reactProps$"+ha,ni="__reactContainer$"+ha,yp="__reactEvents$"+ha,e1="__reactListeners$"+ha,t1="__reactHandles$"+ha;function Xs(s){var o=s[xr];if(o)return o;for(var u=s.parentNode;u;){if(o=u[ni]||u[xr]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(s=bv(s);s!==null;){if(u=s[xr])return u;s=bv(s)}return o}s=u,u=s.parentNode}return null}function Kl(s){return s=s[xr]||s[ni],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function da(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(t(33))}function ah(s){return s[ql]||null}var vp=[],fa=-1;function Hi(s){return{current:s}}function nt(s){0>fa||(s.current=vp[fa],vp[fa]=null,fa--)}function Ze(s,o){fa++,vp[fa]=s.current,s.current=o}var qi={},Zt=Hi(qi),yn=Hi(!1),Js=qi;function pa(s,o){var u=s.type.contextTypes;if(!u)return qi;var d=s.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in u)m[_]=o[_];return d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=o,s.__reactInternalMemoizedMaskedChildContext=m),m}function vn(s){return s=s.childContextTypes,s!=null}function lh(){nt(yn),nt(Zt)}function xv(s,o,u){if(Zt.current!==qi)throw Error(t(168));Ze(Zt,o),Ze(yn,u)}function Dv(s,o,u){var d=s.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var m in d)if(!(m in o))throw Error(t(108,je(s)||"Unknown",m));return le({},u,d)}function uh(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||qi,Js=Zt.current,Ze(Zt,s),Ze(yn,yn.current),!0}function Ov(s,o,u){var d=s.stateNode;if(!d)throw Error(t(169));u?(s=Dv(s,o,Js),d.__reactInternalMemoizedMergedChildContext=s,nt(yn),nt(Zt),Ze(Zt,s)):nt(yn),Ze(yn,u)}var ri=null,ch=!1,wp=!1;function Lv(s){ri===null?ri=[s]:ri.push(s)}function n1(s){ch=!0,Lv(s)}function Ki(){if(!wp&&ri!==null){wp=!0;var s=0,o=Oe;try{var u=ri;for(Oe=1;s<u.length;s++){var d=u[s];do d=d(!0);while(d!==null)}ri=null,ch=!1}catch(m){throw ri!==null&&(ri=ri.slice(s+1)),Ko($s,Ki),m}finally{Oe=o,wp=!1}}return null}var ma=[],ga=0,hh=null,dh=0,$n=[],Wn=0,Zs=null,ii=1,si="";function eo(s,o){ma[ga++]=dh,ma[ga++]=hh,hh=s,dh=o}function Mv(s,o,u){$n[Wn++]=ii,$n[Wn++]=si,$n[Wn++]=Zs,Zs=s;var d=ii;s=si;var m=32-ln(d)-1;d&=~(1<<m),u+=1;var _=32-ln(o)+m;if(30<_){var T=m-m%5;_=(d&(1<<T)-1).toString(32),d>>=T,m-=T,ii=1<<32-ln(o)+m|u<<m|d,si=_+s}else ii=1<<_|u<<m|d,si=s}function Ep(s){s.return!==null&&(eo(s,1),Mv(s,1,0))}function Tp(s){for(;s===hh;)hh=ma[--ga],ma[ga]=null,dh=ma[--ga],ma[ga]=null;for(;s===Zs;)Zs=$n[--Wn],$n[Wn]=null,si=$n[--Wn],$n[Wn]=null,ii=$n[--Wn],$n[Wn]=null}var bn=null,xn=null,st=!1,ur=null;function Vv(s,o){var u=Gn(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=s,o=s.deletions,o===null?(s.deletions=[u],s.flags|=16):o.push(u)}function Fv(s,o){switch(s.tag){case 5:var u=s.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(s.stateNode=o,bn=s,xn=Wi(o.firstChild),!0):!1;case 6:return o=s.pendingProps===""||o.nodeType!==3?null:o,o!==null?(s.stateNode=o,bn=s,xn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=Zs!==null?{id:ii,overflow:si}:null,s.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Gn(18,null,null,0),u.stateNode=o,u.return=s,s.child=u,bn=s,xn=null,!0):!1;default:return!1}}function Ip(s){return(s.mode&1)!==0&&(s.flags&128)===0}function Sp(s){if(st){var o=xn;if(o){var u=o;if(!Fv(s,o)){if(Ip(s))throw Error(t(418));o=Wi(u.nextSibling);var d=bn;o&&Fv(s,o)?Vv(d,u):(s.flags=s.flags&-4097|2,st=!1,bn=s)}}else{if(Ip(s))throw Error(t(418));s.flags=s.flags&-4097|2,st=!1,bn=s}}}function Uv(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;bn=s}function fh(s){if(s!==bn)return!1;if(!st)return Uv(s),st=!0,!1;var o;if((o=s.tag!==3)&&!(o=s.tag!==5)&&(o=s.type,o=o!=="head"&&o!=="body"&&!mp(s.type,s.memoizedProps)),o&&(o=xn)){if(Ip(s))throw Bv(),Error(t(418));for(;o;)Vv(s,o),o=Wi(o.nextSibling)}if(Uv(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(t(317));e:{for(s=s.nextSibling,o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"){if(o===0){xn=Wi(s.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}s=s.nextSibling}xn=null}}else xn=bn?Wi(s.stateNode.nextSibling):null;return!0}function Bv(){for(var s=xn;s;)s=Wi(s.nextSibling)}function _a(){xn=bn=null,st=!1}function Cp(s){ur===null?ur=[s]:ur.push(s)}var r1=Q.ReactCurrentBatchConfig;function Gl(s,o,u){if(s=u.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var d=u.stateNode}if(!d)throw Error(t(147,s));var m=d,_=""+s;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===_?o.ref:(o=function(T){var P=m.refs;T===null?delete P[_]:P[_]=T},o._stringRef=_,o)}if(typeof s!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,s))}return s}function ph(s,o){throw s=Object.prototype.toString.call(o),Error(t(31,s==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":s))}function zv(s){var o=s._init;return o(s._payload)}function jv(s){function o(z,L){if(s){var j=z.deletions;j===null?(z.deletions=[L],z.flags|=16):j.push(L)}}function u(z,L){if(!s)return null;for(;L!==null;)o(z,L),L=L.sibling;return null}function d(z,L){for(z=new Map;L!==null;)L.key!==null?z.set(L.key,L):z.set(L.index,L),L=L.sibling;return z}function m(z,L){return z=ts(z,L),z.index=0,z.sibling=null,z}function _(z,L,j){return z.index=j,s?(j=z.alternate,j!==null?(j=j.index,j<L?(z.flags|=2,L):j):(z.flags|=2,L)):(z.flags|=1048576,L)}function T(z){return s&&z.alternate===null&&(z.flags|=2),z}function P(z,L,j,te){return L===null||L.tag!==6?(L=gm(j,z.mode,te),L.return=z,L):(L=m(L,j),L.return=z,L)}function x(z,L,j,te){var pe=j.type;return pe===b?J(z,L,j.props.children,te,j.key):L!==null&&(L.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Jt&&zv(pe)===L.type)?(te=m(L,j.props),te.ref=Gl(z,L,j),te.return=z,te):(te=Fh(j.type,j.key,j.props,null,z.mode,te),te.ref=Gl(z,L,j),te.return=z,te)}function $(z,L,j,te){return L===null||L.tag!==4||L.stateNode.containerInfo!==j.containerInfo||L.stateNode.implementation!==j.implementation?(L=_m(j,z.mode,te),L.return=z,L):(L=m(L,j.children||[]),L.return=z,L)}function J(z,L,j,te,pe){return L===null||L.tag!==7?(L=lo(j,z.mode,te,pe),L.return=z,L):(L=m(L,j),L.return=z,L)}function ee(z,L,j){if(typeof L=="string"&&L!==""||typeof L=="number")return L=gm(""+L,z.mode,j),L.return=z,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case oe:return j=Fh(L.type,L.key,L.props,null,z.mode,j),j.ref=Gl(z,null,L),j.return=z,j;case ie:return L=_m(L,z.mode,j),L.return=z,L;case Jt:var te=L._init;return ee(z,te(L._payload),j)}if(Gr(L)||_e(L))return L=lo(L,z.mode,j,null),L.return=z,L;ph(z,L)}return null}function X(z,L,j,te){var pe=L!==null?L.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return pe!==null?null:P(z,L,""+j,te);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case oe:return j.key===pe?x(z,L,j,te):null;case ie:return j.key===pe?$(z,L,j,te):null;case Jt:return pe=j._init,X(z,L,pe(j._payload),te)}if(Gr(j)||_e(j))return pe!==null?null:J(z,L,j,te,null);ph(z,j)}return null}function ae(z,L,j,te,pe){if(typeof te=="string"&&te!==""||typeof te=="number")return z=z.get(j)||null,P(L,z,""+te,pe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case oe:return z=z.get(te.key===null?j:te.key)||null,x(L,z,te,pe);case ie:return z=z.get(te.key===null?j:te.key)||null,$(L,z,te,pe);case Jt:var ye=te._init;return ae(z,L,j,ye(te._payload),pe)}if(Gr(te)||_e(te))return z=z.get(j)||null,J(L,z,te,pe,null);ph(L,te)}return null}function he(z,L,j,te){for(var pe=null,ye=null,ve=L,Te=L=0,Vt=null;ve!==null&&Te<j.length;Te++){ve.index>Te?(Vt=ve,ve=null):Vt=ve.sibling;var Ue=X(z,ve,j[Te],te);if(Ue===null){ve===null&&(ve=Vt);break}s&&ve&&Ue.alternate===null&&o(z,ve),L=_(Ue,L,Te),ye===null?pe=Ue:ye.sibling=Ue,ye=Ue,ve=Vt}if(Te===j.length)return u(z,ve),st&&eo(z,Te),pe;if(ve===null){for(;Te<j.length;Te++)ve=ee(z,j[Te],te),ve!==null&&(L=_(ve,L,Te),ye===null?pe=ve:ye.sibling=ve,ye=ve);return st&&eo(z,Te),pe}for(ve=d(z,ve);Te<j.length;Te++)Vt=ae(ve,z,Te,j[Te],te),Vt!==null&&(s&&Vt.alternate!==null&&ve.delete(Vt.key===null?Te:Vt.key),L=_(Vt,L,Te),ye===null?pe=Vt:ye.sibling=Vt,ye=Vt);return s&&ve.forEach(function(ns){return o(z,ns)}),st&&eo(z,Te),pe}function de(z,L,j,te){var pe=_e(j);if(typeof pe!="function")throw Error(t(150));if(j=pe.call(j),j==null)throw Error(t(151));for(var ye=pe=null,ve=L,Te=L=0,Vt=null,Ue=j.next();ve!==null&&!Ue.done;Te++,Ue=j.next()){ve.index>Te?(Vt=ve,ve=null):Vt=ve.sibling;var ns=X(z,ve,Ue.value,te);if(ns===null){ve===null&&(ve=Vt);break}s&&ve&&ns.alternate===null&&o(z,ve),L=_(ns,L,Te),ye===null?pe=ns:ye.sibling=ns,ye=ns,ve=Vt}if(Ue.done)return u(z,ve),st&&eo(z,Te),pe;if(ve===null){for(;!Ue.done;Te++,Ue=j.next())Ue=ee(z,Ue.value,te),Ue!==null&&(L=_(Ue,L,Te),ye===null?pe=Ue:ye.sibling=Ue,ye=Ue);return st&&eo(z,Te),pe}for(ve=d(z,ve);!Ue.done;Te++,Ue=j.next())Ue=ae(ve,z,Te,Ue.value,te),Ue!==null&&(s&&Ue.alternate!==null&&ve.delete(Ue.key===null?Te:Ue.key),L=_(Ue,L,Te),ye===null?pe=Ue:ye.sibling=Ue,ye=Ue);return s&&ve.forEach(function(M1){return o(z,M1)}),st&&eo(z,Te),pe}function yt(z,L,j,te){if(typeof j=="object"&&j!==null&&j.type===b&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case oe:e:{for(var pe=j.key,ye=L;ye!==null;){if(ye.key===pe){if(pe=j.type,pe===b){if(ye.tag===7){u(z,ye.sibling),L=m(ye,j.props.children),L.return=z,z=L;break e}}else if(ye.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Jt&&zv(pe)===ye.type){u(z,ye.sibling),L=m(ye,j.props),L.ref=Gl(z,ye,j),L.return=z,z=L;break e}u(z,ye);break}else o(z,ye);ye=ye.sibling}j.type===b?(L=lo(j.props.children,z.mode,te,j.key),L.return=z,z=L):(te=Fh(j.type,j.key,j.props,null,z.mode,te),te.ref=Gl(z,L,j),te.return=z,z=te)}return T(z);case ie:e:{for(ye=j.key;L!==null;){if(L.key===ye)if(L.tag===4&&L.stateNode.containerInfo===j.containerInfo&&L.stateNode.implementation===j.implementation){u(z,L.sibling),L=m(L,j.children||[]),L.return=z,z=L;break e}else{u(z,L);break}else o(z,L);L=L.sibling}L=_m(j,z.mode,te),L.return=z,z=L}return T(z);case Jt:return ye=j._init,yt(z,L,ye(j._payload),te)}if(Gr(j))return he(z,L,j,te);if(_e(j))return de(z,L,j,te);ph(z,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,L!==null&&L.tag===6?(u(z,L.sibling),L=m(L,j),L.return=z,z=L):(u(z,L),L=gm(j,z.mode,te),L.return=z,z=L),T(z)):u(z,L)}return yt}var ya=jv(!0),$v=jv(!1),mh=Hi(null),gh=null,va=null,Rp=null;function Ap(){Rp=va=gh=null}function Pp(s){var o=mh.current;nt(mh),s._currentValue=o}function kp(s,o,u){for(;s!==null;){var d=s.alternate;if((s.childLanes&o)!==o?(s.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),s===u)break;s=s.return}}function wa(s,o){gh=s,Rp=va=null,s=s.dependencies,s!==null&&s.firstContext!==null&&(s.lanes&o&&(wn=!0),s.firstContext=null)}function Hn(s){var o=s._currentValue;if(Rp!==s)if(s={context:s,memoizedValue:o,next:null},va===null){if(gh===null)throw Error(t(308));va=s,gh.dependencies={lanes:0,firstContext:s}}else va=va.next=s;return o}var to=null;function Np(s){to===null?to=[s]:to.push(s)}function Wv(s,o,u,d){var m=o.interleaved;return m===null?(u.next=u,Np(o)):(u.next=m.next,m.next=u),o.interleaved=u,oi(s,d)}function oi(s,o){s.lanes|=o;var u=s.alternate;for(u!==null&&(u.lanes|=o),u=s,s=s.return;s!==null;)s.childLanes|=o,u=s.alternate,u!==null&&(u.childLanes|=o),u=s,s=s.return;return u.tag===3?u.stateNode:null}var Gi=!1;function bp(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hv(s,o){s=s.updateQueue,o.updateQueue===s&&(o.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function ai(s,o){return{eventTime:s,lane:o,tag:0,payload:null,callback:null,next:null}}function Qi(s,o,u){var d=s.updateQueue;if(d===null)return null;if(d=d.shared,Fe&2){var m=d.pending;return m===null?o.next=o:(o.next=m.next,m.next=o),d.pending=o,oi(s,u)}return m=d.interleaved,m===null?(o.next=o,Np(d)):(o.next=m.next,m.next=o),d.interleaved=o,oi(s,u)}function _h(s,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,Fi(s,u)}}function qv(s,o){var u=s.updateQueue,d=s.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var m=null,_=null;if(u=u.firstBaseUpdate,u!==null){do{var T={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};_===null?m=_=T:_=_.next=T,u=u.next}while(u!==null);_===null?m=_=o:_=_.next=o}else m=_=o;u={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:d.shared,effects:d.effects},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=o:s.next=o,u.lastBaseUpdate=o}function yh(s,o,u,d){var m=s.updateQueue;Gi=!1;var _=m.firstBaseUpdate,T=m.lastBaseUpdate,P=m.shared.pending;if(P!==null){m.shared.pending=null;var x=P,$=x.next;x.next=null,T===null?_=$:T.next=$,T=x;var J=s.alternate;J!==null&&(J=J.updateQueue,P=J.lastBaseUpdate,P!==T&&(P===null?J.firstBaseUpdate=$:P.next=$,J.lastBaseUpdate=x))}if(_!==null){var ee=m.baseState;T=0,J=$=x=null,P=_;do{var X=P.lane,ae=P.eventTime;if((d&X)===X){J!==null&&(J=J.next={eventTime:ae,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var he=s,de=P;switch(X=o,ae=u,de.tag){case 1:if(he=de.payload,typeof he=="function"){ee=he.call(ae,ee,X);break e}ee=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=de.payload,X=typeof he=="function"?he.call(ae,ee,X):he,X==null)break e;ee=le({},ee,X);break e;case 2:Gi=!0}}P.callback!==null&&P.lane!==0&&(s.flags|=64,X=m.effects,X===null?m.effects=[P]:X.push(P))}else ae={eventTime:ae,lane:X,tag:P.tag,payload:P.payload,callback:P.callback,next:null},J===null?($=J=ae,x=ee):J=J.next=ae,T|=X;if(P=P.next,P===null){if(P=m.shared.pending,P===null)break;X=P,P=X.next,X.next=null,m.lastBaseUpdate=X,m.shared.pending=null}}while(!0);if(J===null&&(x=ee),m.baseState=x,m.firstBaseUpdate=$,m.lastBaseUpdate=J,o=m.shared.interleaved,o!==null){m=o;do T|=m.lane,m=m.next;while(m!==o)}else _===null&&(m.shared.lanes=0);io|=T,s.lanes=T,s.memoizedState=ee}}function Kv(s,o,u){if(s=o.effects,o.effects=null,s!==null)for(o=0;o<s.length;o++){var d=s[o],m=d.callback;if(m!==null){if(d.callback=null,d=u,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var Ql={},Dr=Hi(Ql),Yl=Hi(Ql),Xl=Hi(Ql);function no(s){if(s===Ql)throw Error(t(174));return s}function xp(s,o){switch(Ze(Xl,o),Ze(Yl,s),Ze(Dr,Ql),s=o.nodeType,s){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Rt(null,"");break;default:s=s===8?o.parentNode:o,o=s.namespaceURI||null,s=s.tagName,o=Rt(o,s)}nt(Dr),Ze(Dr,o)}function Ea(){nt(Dr),nt(Yl),nt(Xl)}function Gv(s){no(Xl.current);var o=no(Dr.current),u=Rt(o,s.type);o!==u&&(Ze(Yl,s),Ze(Dr,u))}function Dp(s){Yl.current===s&&(nt(Dr),nt(Yl))}var ut=Hi(0);function vh(s){for(var o=s;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Op=[];function Lp(){for(var s=0;s<Op.length;s++)Op[s]._workInProgressVersionPrimary=null;Op.length=0}var wh=Q.ReactCurrentDispatcher,Mp=Q.ReactCurrentBatchConfig,ro=0,ct=null,Pt=null,Lt=null,Eh=!1,Jl=!1,Zl=0,i1=0;function en(){throw Error(t(321))}function Vp(s,o){if(o===null)return!1;for(var u=0;u<o.length&&u<s.length;u++)if(!lr(s[u],o[u]))return!1;return!0}function Fp(s,o,u,d,m,_){if(ro=_,ct=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,wh.current=s===null||s.memoizedState===null?l1:u1,s=u(d,m),Jl){_=0;do{if(Jl=!1,Zl=0,25<=_)throw Error(t(301));_+=1,Lt=Pt=null,o.updateQueue=null,wh.current=c1,s=u(d,m)}while(Jl)}if(wh.current=Sh,o=Pt!==null&&Pt.next!==null,ro=0,Lt=Pt=ct=null,Eh=!1,o)throw Error(t(300));return s}function Up(){var s=Zl!==0;return Zl=0,s}function Or(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ct.memoizedState=Lt=s:Lt=Lt.next=s,Lt}function qn(){if(Pt===null){var s=ct.alternate;s=s!==null?s.memoizedState:null}else s=Pt.next;var o=Lt===null?ct.memoizedState:Lt.next;if(o!==null)Lt=o,Pt=s;else{if(s===null)throw Error(t(310));Pt=s,s={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Lt===null?ct.memoizedState=Lt=s:Lt=Lt.next=s}return Lt}function eu(s,o){return typeof o=="function"?o(s):o}function Bp(s){var o=qn(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=s;var d=Pt,m=d.baseQueue,_=u.pending;if(_!==null){if(m!==null){var T=m.next;m.next=_.next,_.next=T}d.baseQueue=m=_,u.pending=null}if(m!==null){_=m.next,d=d.baseState;var P=T=null,x=null,$=_;do{var J=$.lane;if((ro&J)===J)x!==null&&(x=x.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),d=$.hasEagerState?$.eagerState:s(d,$.action);else{var ee={lane:J,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};x===null?(P=x=ee,T=d):x=x.next=ee,ct.lanes|=J,io|=J}$=$.next}while($!==null&&$!==_);x===null?T=d:x.next=P,lr(d,o.memoizedState)||(wn=!0),o.memoizedState=d,o.baseState=T,o.baseQueue=x,u.lastRenderedState=d}if(s=u.interleaved,s!==null){m=s;do _=m.lane,ct.lanes|=_,io|=_,m=m.next;while(m!==s)}else m===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function zp(s){var o=qn(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=s;var d=u.dispatch,m=u.pending,_=o.memoizedState;if(m!==null){u.pending=null;var T=m=m.next;do _=s(_,T.action),T=T.next;while(T!==m);lr(_,o.memoizedState)||(wn=!0),o.memoizedState=_,o.baseQueue===null&&(o.baseState=_),u.lastRenderedState=_}return[_,d]}function Qv(){}function Yv(s,o){var u=ct,d=qn(),m=o(),_=!lr(d.memoizedState,m);if(_&&(d.memoizedState=m,wn=!0),d=d.queue,jp(Zv.bind(null,u,d,s),[s]),d.getSnapshot!==o||_||Lt!==null&&Lt.memoizedState.tag&1){if(u.flags|=2048,tu(9,Jv.bind(null,u,d,m,o),void 0,null),Mt===null)throw Error(t(349));ro&30||Xv(u,o,m)}return m}function Xv(s,o,u){s.flags|=16384,s={getSnapshot:o,value:u},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.stores=[s]):(u=o.stores,u===null?o.stores=[s]:u.push(s))}function Jv(s,o,u,d){o.value=u,o.getSnapshot=d,ew(o)&&tw(s)}function Zv(s,o,u){return u(function(){ew(o)&&tw(s)})}function ew(s){var o=s.getSnapshot;s=s.value;try{var u=o();return!lr(s,u)}catch{return!0}}function tw(s){var o=oi(s,1);o!==null&&fr(o,s,1,-1)}function nw(s){var o=Or();return typeof s=="function"&&(s=s()),o.memoizedState=o.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eu,lastRenderedState:s},o.queue=s,s=s.dispatch=a1.bind(null,ct,s),[o.memoizedState,s]}function tu(s,o,u,d){return s={tag:s,create:o,destroy:u,deps:d,next:null},o=ct.updateQueue,o===null?(o={lastEffect:null,stores:null},ct.updateQueue=o,o.lastEffect=s.next=s):(u=o.lastEffect,u===null?o.lastEffect=s.next=s:(d=u.next,u.next=s,s.next=d,o.lastEffect=s)),s}function rw(){return qn().memoizedState}function Th(s,o,u,d){var m=Or();ct.flags|=s,m.memoizedState=tu(1|o,u,void 0,d===void 0?null:d)}function Ih(s,o,u,d){var m=qn();d=d===void 0?null:d;var _=void 0;if(Pt!==null){var T=Pt.memoizedState;if(_=T.destroy,d!==null&&Vp(d,T.deps)){m.memoizedState=tu(o,u,_,d);return}}ct.flags|=s,m.memoizedState=tu(1|o,u,_,d)}function iw(s,o){return Th(8390656,8,s,o)}function jp(s,o){return Ih(2048,8,s,o)}function sw(s,o){return Ih(4,2,s,o)}function ow(s,o){return Ih(4,4,s,o)}function aw(s,o){if(typeof o=="function")return s=s(),o(s),function(){o(null)};if(o!=null)return s=s(),o.current=s,function(){o.current=null}}function lw(s,o,u){return u=u!=null?u.concat([s]):null,Ih(4,4,aw.bind(null,o,s),u)}function $p(){}function uw(s,o){var u=qn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&Vp(o,d[1])?d[0]:(u.memoizedState=[s,o],s)}function cw(s,o){var u=qn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&Vp(o,d[1])?d[0]:(s=s(),u.memoizedState=[s,o],s)}function hw(s,o,u){return ro&21?(lr(u,o)||(u=qs(),ct.lanes|=u,io|=u,s.baseState=!0),o):(s.baseState&&(s.baseState=!1,wn=!0),s.memoizedState=u)}function s1(s,o){var u=Oe;Oe=u!==0&&4>u?u:4,s(!0);var d=Mp.transition;Mp.transition={};try{s(!1),o()}finally{Oe=u,Mp.transition=d}}function dw(){return qn().memoizedState}function o1(s,o,u){var d=Zi(s);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},fw(s))pw(o,u);else if(u=Wv(s,o,u,d),u!==null){var m=hn();fr(u,s,d,m),mw(u,o,d)}}function a1(s,o,u){var d=Zi(s),m={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(fw(s))pw(o,m);else{var _=s.alternate;if(s.lanes===0&&(_===null||_.lanes===0)&&(_=o.lastRenderedReducer,_!==null))try{var T=o.lastRenderedState,P=_(T,u);if(m.hasEagerState=!0,m.eagerState=P,lr(P,T)){var x=o.interleaved;x===null?(m.next=m,Np(o)):(m.next=x.next,x.next=m),o.interleaved=m;return}}catch{}finally{}u=Wv(s,o,m,d),u!==null&&(m=hn(),fr(u,s,d,m),mw(u,o,d))}}function fw(s){var o=s.alternate;return s===ct||o!==null&&o===ct}function pw(s,o){Jl=Eh=!0;var u=s.pending;u===null?o.next=o:(o.next=u.next,u.next=o),s.pending=o}function mw(s,o,u){if(u&4194240){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,Fi(s,u)}}var Sh={readContext:Hn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},l1={readContext:Hn,useCallback:function(s,o){return Or().memoizedState=[s,o===void 0?null:o],s},useContext:Hn,useEffect:iw,useImperativeHandle:function(s,o,u){return u=u!=null?u.concat([s]):null,Th(4194308,4,aw.bind(null,o,s),u)},useLayoutEffect:function(s,o){return Th(4194308,4,s,o)},useInsertionEffect:function(s,o){return Th(4,2,s,o)},useMemo:function(s,o){var u=Or();return o=o===void 0?null:o,s=s(),u.memoizedState=[s,o],s},useReducer:function(s,o,u){var d=Or();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:o},d.queue=s,s=s.dispatch=o1.bind(null,ct,s),[d.memoizedState,s]},useRef:function(s){var o=Or();return s={current:s},o.memoizedState=s},useState:nw,useDebugValue:$p,useDeferredValue:function(s){return Or().memoizedState=s},useTransition:function(){var s=nw(!1),o=s[0];return s=s1.bind(null,s[1]),Or().memoizedState=s,[o,s]},useMutableSource:function(){},useSyncExternalStore:function(s,o,u){var d=ct,m=Or();if(st){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),Mt===null)throw Error(t(349));ro&30||Xv(d,o,u)}m.memoizedState=u;var _={value:u,getSnapshot:o};return m.queue=_,iw(Zv.bind(null,d,_,s),[s]),d.flags|=2048,tu(9,Jv.bind(null,d,_,u,o),void 0,null),u},useId:function(){var s=Or(),o=Mt.identifierPrefix;if(st){var u=si,d=ii;u=(d&~(1<<32-ln(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=Zl++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=i1++,o=":"+o+"r"+u.toString(32)+":";return s.memoizedState=o},unstable_isNewReconciler:!1},u1={readContext:Hn,useCallback:uw,useContext:Hn,useEffect:jp,useImperativeHandle:lw,useInsertionEffect:sw,useLayoutEffect:ow,useMemo:cw,useReducer:Bp,useRef:rw,useState:function(){return Bp(eu)},useDebugValue:$p,useDeferredValue:function(s){var o=qn();return hw(o,Pt.memoizedState,s)},useTransition:function(){var s=Bp(eu)[0],o=qn().memoizedState;return[s,o]},useMutableSource:Qv,useSyncExternalStore:Yv,useId:dw,unstable_isNewReconciler:!1},c1={readContext:Hn,useCallback:uw,useContext:Hn,useEffect:jp,useImperativeHandle:lw,useInsertionEffect:sw,useLayoutEffect:ow,useMemo:cw,useReducer:zp,useRef:rw,useState:function(){return zp(eu)},useDebugValue:$p,useDeferredValue:function(s){var o=qn();return Pt===null?o.memoizedState=s:hw(o,Pt.memoizedState,s)},useTransition:function(){var s=zp(eu)[0],o=qn().memoizedState;return[s,o]},useMutableSource:Qv,useSyncExternalStore:Yv,useId:dw,unstable_isNewReconciler:!1};function cr(s,o){if(s&&s.defaultProps){o=le({},o),s=s.defaultProps;for(var u in s)o[u]===void 0&&(o[u]=s[u]);return o}return o}function Wp(s,o,u,d){o=s.memoizedState,u=u(d,o),u=u==null?o:le({},o,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var Ch={isMounted:function(s){return(s=s._reactInternals)?tr(s)===s:!1},enqueueSetState:function(s,o,u){s=s._reactInternals;var d=hn(),m=Zi(s),_=ai(d,m);_.payload=o,u!=null&&(_.callback=u),o=Qi(s,_,m),o!==null&&(fr(o,s,m,d),_h(o,s,m))},enqueueReplaceState:function(s,o,u){s=s._reactInternals;var d=hn(),m=Zi(s),_=ai(d,m);_.tag=1,_.payload=o,u!=null&&(_.callback=u),o=Qi(s,_,m),o!==null&&(fr(o,s,m,d),_h(o,s,m))},enqueueForceUpdate:function(s,o){s=s._reactInternals;var u=hn(),d=Zi(s),m=ai(u,d);m.tag=2,o!=null&&(m.callback=o),o=Qi(s,m,d),o!==null&&(fr(o,s,d,u),_h(o,s,d))}};function gw(s,o,u,d,m,_,T){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(d,_,T):o.prototype&&o.prototype.isPureReactComponent?!zl(u,d)||!zl(m,_):!0}function _w(s,o,u){var d=!1,m=qi,_=o.contextType;return typeof _=="object"&&_!==null?_=Hn(_):(m=vn(o)?Js:Zt.current,d=o.contextTypes,_=(d=d!=null)?pa(s,m):qi),o=new o(u,_),s.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ch,s.stateNode=o,o._reactInternals=s,d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=m,s.__reactInternalMemoizedMaskedChildContext=_),o}function yw(s,o,u,d){s=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==s&&Ch.enqueueReplaceState(o,o.state,null)}function Hp(s,o,u,d){var m=s.stateNode;m.props=u,m.state=s.memoizedState,m.refs={},bp(s);var _=o.contextType;typeof _=="object"&&_!==null?m.context=Hn(_):(_=vn(o)?Js:Zt.current,m.context=pa(s,_)),m.state=s.memoizedState,_=o.getDerivedStateFromProps,typeof _=="function"&&(Wp(s,o,_,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(o=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),o!==m.state&&Ch.enqueueReplaceState(m,m.state,null),yh(s,u,m,d),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308)}function Ta(s,o){try{var u="",d=o;do u+=ke(d),d=d.return;while(d);var m=u}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:s,source:o,stack:m,digest:null}}function qp(s,o,u){return{value:s,source:null,stack:u??null,digest:o??null}}function Kp(s,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var h1=typeof WeakMap=="function"?WeakMap:Map;function vw(s,o,u){u=ai(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){xh||(xh=!0,lm=d),Kp(s,o)},u}function ww(s,o,u){u=ai(-1,u),u.tag=3;var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=o.value;u.payload=function(){return d(m)},u.callback=function(){Kp(s,o)}}var _=s.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(u.callback=function(){Kp(s,o),typeof d!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),u}function Ew(s,o,u){var d=s.pingCache;if(d===null){d=s.pingCache=new h1;var m=new Set;d.set(o,m)}else m=d.get(o),m===void 0&&(m=new Set,d.set(o,m));m.has(u)||(m.add(u),s=C1.bind(null,s,o,u),o.then(s,s))}function Tw(s){do{var o;if((o=s.tag===13)&&(o=s.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return s;s=s.return}while(s!==null);return null}function Iw(s,o,u,d,m){return s.mode&1?(s.flags|=65536,s.lanes=m,s):(s===o?s.flags|=65536:(s.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=ai(-1,1),o.tag=2,Qi(u,o,1))),u.lanes|=1),s)}var d1=Q.ReactCurrentOwner,wn=!1;function cn(s,o,u,d){o.child=s===null?$v(o,null,u,d):ya(o,s.child,u,d)}function Sw(s,o,u,d,m){u=u.render;var _=o.ref;return wa(o,m),d=Fp(s,o,u,d,_,m),u=Up(),s!==null&&!wn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~m,li(s,o,m)):(st&&u&&Ep(o),o.flags|=1,cn(s,o,d,m),o.child)}function Cw(s,o,u,d,m){if(s===null){var _=u.type;return typeof _=="function"&&!mm(_)&&_.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=_,Rw(s,o,_,d,m)):(s=Fh(u.type,null,d,o,o.mode,m),s.ref=o.ref,s.return=o,o.child=s)}if(_=s.child,!(s.lanes&m)){var T=_.memoizedProps;if(u=u.compare,u=u!==null?u:zl,u(T,d)&&s.ref===o.ref)return li(s,o,m)}return o.flags|=1,s=ts(_,d),s.ref=o.ref,s.return=o,o.child=s}function Rw(s,o,u,d,m){if(s!==null){var _=s.memoizedProps;if(zl(_,d)&&s.ref===o.ref)if(wn=!1,o.pendingProps=d=_,(s.lanes&m)!==0)s.flags&131072&&(wn=!0);else return o.lanes=s.lanes,li(s,o,m)}return Gp(s,o,u,d,m)}function Aw(s,o,u){var d=o.pendingProps,m=d.children,_=s!==null?s.memoizedState:null;if(d.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(Sa,Dn),Dn|=u;else{if(!(u&1073741824))return s=_!==null?_.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:s,cachePool:null,transitions:null},o.updateQueue=null,Ze(Sa,Dn),Dn|=s,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:u,Ze(Sa,Dn),Dn|=d}else _!==null?(d=_.baseLanes|u,o.memoizedState=null):d=u,Ze(Sa,Dn),Dn|=d;return cn(s,o,m,u),o.child}function Pw(s,o){var u=o.ref;(s===null&&u!==null||s!==null&&s.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Gp(s,o,u,d,m){var _=vn(u)?Js:Zt.current;return _=pa(o,_),wa(o,m),u=Fp(s,o,u,d,_,m),d=Up(),s!==null&&!wn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~m,li(s,o,m)):(st&&d&&Ep(o),o.flags|=1,cn(s,o,u,m),o.child)}function kw(s,o,u,d,m){if(vn(u)){var _=!0;uh(o)}else _=!1;if(wa(o,m),o.stateNode===null)Ah(s,o),_w(o,u,d),Hp(o,u,d,m),d=!0;else if(s===null){var T=o.stateNode,P=o.memoizedProps;T.props=P;var x=T.context,$=u.contextType;typeof $=="object"&&$!==null?$=Hn($):($=vn(u)?Js:Zt.current,$=pa(o,$));var J=u.getDerivedStateFromProps,ee=typeof J=="function"||typeof T.getSnapshotBeforeUpdate=="function";ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(P!==d||x!==$)&&yw(o,T,d,$),Gi=!1;var X=o.memoizedState;T.state=X,yh(o,d,T,m),x=o.memoizedState,P!==d||X!==x||yn.current||Gi?(typeof J=="function"&&(Wp(o,u,J,d),x=o.memoizedState),(P=Gi||gw(o,u,P,d,X,x,$))?(ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=x),T.props=d,T.state=x,T.context=$,d=P):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{T=o.stateNode,Hv(s,o),P=o.memoizedProps,$=o.type===o.elementType?P:cr(o.type,P),T.props=$,ee=o.pendingProps,X=T.context,x=u.contextType,typeof x=="object"&&x!==null?x=Hn(x):(x=vn(u)?Js:Zt.current,x=pa(o,x));var ae=u.getDerivedStateFromProps;(J=typeof ae=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(P!==ee||X!==x)&&yw(o,T,d,x),Gi=!1,X=o.memoizedState,T.state=X,yh(o,d,T,m);var he=o.memoizedState;P!==ee||X!==he||yn.current||Gi?(typeof ae=="function"&&(Wp(o,u,ae,d),he=o.memoizedState),($=Gi||gw(o,u,$,d,X,he,x)||!1)?(J||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,he,x),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,he,x)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||P===s.memoizedProps&&X===s.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||P===s.memoizedProps&&X===s.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=he),T.props=d,T.state=he,T.context=x,d=$):(typeof T.componentDidUpdate!="function"||P===s.memoizedProps&&X===s.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||P===s.memoizedProps&&X===s.memoizedState||(o.flags|=1024),d=!1)}return Qp(s,o,u,d,_,m)}function Qp(s,o,u,d,m,_){Pw(s,o);var T=(o.flags&128)!==0;if(!d&&!T)return m&&Ov(o,u,!1),li(s,o,_);d=o.stateNode,d1.current=o;var P=T&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,s!==null&&T?(o.child=ya(o,s.child,null,_),o.child=ya(o,null,P,_)):cn(s,o,P,_),o.memoizedState=d.state,m&&Ov(o,u,!0),o.child}function Nw(s){var o=s.stateNode;o.pendingContext?xv(s,o.pendingContext,o.pendingContext!==o.context):o.context&&xv(s,o.context,!1),xp(s,o.containerInfo)}function bw(s,o,u,d,m){return _a(),Cp(m),o.flags|=256,cn(s,o,u,d),o.child}var Yp={dehydrated:null,treeContext:null,retryLane:0};function Xp(s){return{baseLanes:s,cachePool:null,transitions:null}}function xw(s,o,u){var d=o.pendingProps,m=ut.current,_=!1,T=(o.flags&128)!==0,P;if((P=T)||(P=s!==null&&s.memoizedState===null?!1:(m&2)!==0),P?(_=!0,o.flags&=-129):(s===null||s.memoizedState!==null)&&(m|=1),Ze(ut,m&1),s===null)return Sp(o),s=o.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?(o.mode&1?s.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(T=d.children,s=d.fallback,_?(d=o.mode,_=o.child,T={mode:"hidden",children:T},!(d&1)&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Uh(T,d,0,null),s=lo(s,d,u,null),_.return=o,s.return=o,_.sibling=s,o.child=_,o.child.memoizedState=Xp(u),o.memoizedState=Yp,s):Jp(o,T));if(m=s.memoizedState,m!==null&&(P=m.dehydrated,P!==null))return f1(s,o,T,d,P,m,u);if(_){_=d.fallback,T=o.mode,m=s.child,P=m.sibling;var x={mode:"hidden",children:d.children};return!(T&1)&&o.child!==m?(d=o.child,d.childLanes=0,d.pendingProps=x,o.deletions=null):(d=ts(m,x),d.subtreeFlags=m.subtreeFlags&14680064),P!==null?_=ts(P,_):(_=lo(_,T,u,null),_.flags|=2),_.return=o,d.return=o,d.sibling=_,o.child=d,d=_,_=o.child,T=s.child.memoizedState,T=T===null?Xp(u):{baseLanes:T.baseLanes|u,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=s.childLanes&~u,o.memoizedState=Yp,d}return _=s.child,s=_.sibling,d=ts(_,{mode:"visible",children:d.children}),!(o.mode&1)&&(d.lanes=u),d.return=o,d.sibling=null,s!==null&&(u=o.deletions,u===null?(o.deletions=[s],o.flags|=16):u.push(s)),o.child=d,o.memoizedState=null,d}function Jp(s,o){return o=Uh({mode:"visible",children:o},s.mode,0,null),o.return=s,s.child=o}function Rh(s,o,u,d){return d!==null&&Cp(d),ya(o,s.child,null,u),s=Jp(o,o.pendingProps.children),s.flags|=2,o.memoizedState=null,s}function f1(s,o,u,d,m,_,T){if(u)return o.flags&256?(o.flags&=-257,d=qp(Error(t(422))),Rh(s,o,T,d)):o.memoizedState!==null?(o.child=s.child,o.flags|=128,null):(_=d.fallback,m=o.mode,d=Uh({mode:"visible",children:d.children},m,0,null),_=lo(_,m,T,null),_.flags|=2,d.return=o,_.return=o,d.sibling=_,o.child=d,o.mode&1&&ya(o,s.child,null,T),o.child.memoizedState=Xp(T),o.memoizedState=Yp,_);if(!(o.mode&1))return Rh(s,o,T,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var P=d.dgst;return d=P,_=Error(t(419)),d=qp(_,d,void 0),Rh(s,o,T,d)}if(P=(T&s.childLanes)!==0,wn||P){if(d=Mt,d!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(d.suspendedLanes|T)?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,oi(s,m),fr(d,s,m,-1))}return pm(),d=qp(Error(t(421))),Rh(s,o,T,d)}return m.data==="$?"?(o.flags|=128,o.child=s.child,o=R1.bind(null,s),m._reactRetry=o,null):(s=_.treeContext,xn=Wi(m.nextSibling),bn=o,st=!0,ur=null,s!==null&&($n[Wn++]=ii,$n[Wn++]=si,$n[Wn++]=Zs,ii=s.id,si=s.overflow,Zs=o),o=Jp(o,d.children),o.flags|=4096,o)}function Dw(s,o,u){s.lanes|=o;var d=s.alternate;d!==null&&(d.lanes|=o),kp(s.return,o,u)}function Zp(s,o,u,d,m){var _=s.memoizedState;_===null?s.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:m}:(_.isBackwards=o,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=u,_.tailMode=m)}function Ow(s,o,u){var d=o.pendingProps,m=d.revealOrder,_=d.tail;if(cn(s,o,d.children,u),d=ut.current,d&2)d=d&1|2,o.flags|=128;else{if(s!==null&&s.flags&128)e:for(s=o.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&Dw(s,u,o);else if(s.tag===19)Dw(s,u,o);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===o)break e;for(;s.sibling===null;){if(s.return===null||s.return===o)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}d&=1}if(Ze(ut,d),!(o.mode&1))o.memoizedState=null;else switch(m){case"forwards":for(u=o.child,m=null;u!==null;)s=u.alternate,s!==null&&vh(s)===null&&(m=u),u=u.sibling;u=m,u===null?(m=o.child,o.child=null):(m=u.sibling,u.sibling=null),Zp(o,!1,m,u,_);break;case"backwards":for(u=null,m=o.child,o.child=null;m!==null;){if(s=m.alternate,s!==null&&vh(s)===null){o.child=m;break}s=m.sibling,m.sibling=u,u=m,m=s}Zp(o,!0,u,null,_);break;case"together":Zp(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Ah(s,o){!(o.mode&1)&&s!==null&&(s.alternate=null,o.alternate=null,o.flags|=2)}function li(s,o,u){if(s!==null&&(o.dependencies=s.dependencies),io|=o.lanes,!(u&o.childLanes))return null;if(s!==null&&o.child!==s.child)throw Error(t(153));if(o.child!==null){for(s=o.child,u=ts(s,s.pendingProps),o.child=u,u.return=o;s.sibling!==null;)s=s.sibling,u=u.sibling=ts(s,s.pendingProps),u.return=o;u.sibling=null}return o.child}function p1(s,o,u){switch(o.tag){case 3:Nw(o),_a();break;case 5:Gv(o);break;case 1:vn(o.type)&&uh(o);break;case 4:xp(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,m=o.memoizedProps.value;Ze(mh,d._currentValue),d._currentValue=m;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(Ze(ut,ut.current&1),o.flags|=128,null):u&o.child.childLanes?xw(s,o,u):(Ze(ut,ut.current&1),s=li(s,o,u),s!==null?s.sibling:null);Ze(ut,ut.current&1);break;case 19:if(d=(u&o.childLanes)!==0,s.flags&128){if(d)return Ow(s,o,u);o.flags|=128}if(m=o.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ze(ut,ut.current),d)break;return null;case 22:case 23:return o.lanes=0,Aw(s,o,u)}return li(s,o,u)}var Lw,em,Mw,Vw;Lw=function(s,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},em=function(){},Mw=function(s,o,u,d){var m=s.memoizedProps;if(m!==d){s=o.stateNode,no(Dr.current);var _=null;switch(u){case"input":m=Ls(s,m),d=Ls(s,d),_=[];break;case"select":m=le({},m,{value:void 0}),d=le({},d,{value:void 0}),_=[];break;case"textarea":m=gl(s,m),d=gl(s,d),_=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(s.onclick=oh)}Tl(u,d);var T;u=null;for($ in m)if(!d.hasOwnProperty($)&&m.hasOwnProperty($)&&m[$]!=null)if($==="style"){var P=m[$];for(T in P)P.hasOwnProperty(T)&&(u||(u={}),u[T]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(i.hasOwnProperty($)?_||(_=[]):(_=_||[]).push($,null));for($ in d){var x=d[$];if(P=m!=null?m[$]:void 0,d.hasOwnProperty($)&&x!==P&&(x!=null||P!=null))if($==="style")if(P){for(T in P)!P.hasOwnProperty(T)||x&&x.hasOwnProperty(T)||(u||(u={}),u[T]="");for(T in x)x.hasOwnProperty(T)&&P[T]!==x[T]&&(u||(u={}),u[T]=x[T])}else u||(_||(_=[]),_.push($,u)),u=x;else $==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,P=P?P.__html:void 0,x!=null&&P!==x&&(_=_||[]).push($,x)):$==="children"?typeof x!="string"&&typeof x!="number"||(_=_||[]).push($,""+x):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(i.hasOwnProperty($)?(x!=null&&$==="onScroll"&&tt("scroll",s),_||P===x||(_=[])):(_=_||[]).push($,x))}u&&(_=_||[]).push("style",u);var $=_;(o.updateQueue=$)&&(o.flags|=4)}},Vw=function(s,o,u,d){u!==d&&(o.flags|=4)};function nu(s,o){if(!st)switch(s.tailMode){case"hidden":o=s.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||s.tail===null?s.tail=null:s.tail.sibling=null:d.sibling=null}}function tn(s){var o=s.alternate!==null&&s.alternate.child===s.child,u=0,d=0;if(o)for(var m=s.child;m!==null;)u|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=s,m=m.sibling;else for(m=s.child;m!==null;)u|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=s,m=m.sibling;return s.subtreeFlags|=d,s.childLanes=u,o}function m1(s,o,u){var d=o.pendingProps;switch(Tp(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(o),null;case 1:return vn(o.type)&&lh(),tn(o),null;case 3:return d=o.stateNode,Ea(),nt(yn),nt(Zt),Lp(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(s===null||s.child===null)&&(fh(o)?o.flags|=4:s===null||s.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,ur!==null&&(hm(ur),ur=null))),em(s,o),tn(o),null;case 5:Dp(o);var m=no(Xl.current);if(u=o.type,s!==null&&o.stateNode!=null)Mw(s,o,u,d,m),s.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return tn(o),null}if(s=no(Dr.current),fh(o)){d=o.stateNode,u=o.type;var _=o.memoizedProps;switch(d[xr]=o,d[ql]=_,s=(o.mode&1)!==0,u){case"dialog":tt("cancel",d),tt("close",d);break;case"iframe":case"object":case"embed":tt("load",d);break;case"video":case"audio":for(m=0;m<$l.length;m++)tt($l[m],d);break;case"source":tt("error",d);break;case"img":case"image":case"link":tt("error",d),tt("load",d);break;case"details":tt("toggle",d);break;case"input":Mo(d,_),tt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},tt("invalid",d);break;case"textarea":Fo(d,_),tt("invalid",d)}Tl(u,_),m=null;for(var T in _)if(_.hasOwnProperty(T)){var P=_[T];T==="children"?typeof P=="string"?d.textContent!==P&&(_.suppressHydrationWarning!==!0&&sh(d.textContent,P,s),m=["children",P]):typeof P=="number"&&d.textContent!==""+P&&(_.suppressHydrationWarning!==!0&&sh(d.textContent,P,s),m=["children",""+P]):i.hasOwnProperty(T)&&P!=null&&T==="onScroll"&&tt("scroll",d)}switch(u){case"input":Kr(d),bc(d,_,!0);break;case"textarea":Kr(d),_l(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=oh)}d=m,o.updateQueue=d,d!==null&&(o.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=Ct(u)),s==="http://www.w3.org/1999/xhtml"?u==="script"?(s=T.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof d.is=="string"?s=T.createElement(u,{is:d.is}):(s=T.createElement(u),u==="select"&&(T=s,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):s=T.createElementNS(s,u),s[xr]=o,s[ql]=d,Lw(s,o,!1,!1),o.stateNode=s;e:{switch(T=Il(u,d),u){case"dialog":tt("cancel",s),tt("close",s),m=d;break;case"iframe":case"object":case"embed":tt("load",s),m=d;break;case"video":case"audio":for(m=0;m<$l.length;m++)tt($l[m],s);m=d;break;case"source":tt("error",s),m=d;break;case"img":case"image":case"link":tt("error",s),tt("load",s),m=d;break;case"details":tt("toggle",s),m=d;break;case"input":Mo(s,d),m=Ls(s,d),tt("invalid",s);break;case"option":m=d;break;case"select":s._wrapperState={wasMultiple:!!d.multiple},m=le({},d,{value:void 0}),tt("invalid",s);break;case"textarea":Fo(s,d),m=gl(s,d),tt("invalid",s);break;default:m=d}Tl(u,m),P=m;for(_ in P)if(P.hasOwnProperty(_)){var x=P[_];_==="style"?wl(s,x):_==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&yl(s,x)):_==="children"?typeof x=="string"?(u!=="textarea"||x!=="")&&Di(s,x):typeof x=="number"&&Di(s,""+x):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(i.hasOwnProperty(_)?x!=null&&_==="onScroll"&&tt("scroll",s):x!=null&&q(s,_,x,T))}switch(u){case"input":Kr(s),bc(s,d,!1);break;case"textarea":Kr(s),_l(s);break;case"option":d.value!=null&&s.setAttribute("value",""+$e(d.value));break;case"select":s.multiple=!!d.multiple,_=d.value,_!=null?Qr(s,!!d.multiple,_,!1):d.defaultValue!=null&&Qr(s,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(s.onclick=oh)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return tn(o),null;case 6:if(s&&o.stateNode!=null)Vw(s,o,s.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(u=no(Xl.current),no(Dr.current),fh(o)){if(d=o.stateNode,u=o.memoizedProps,d[xr]=o,(_=d.nodeValue!==u)&&(s=bn,s!==null))switch(s.tag){case 3:sh(d.nodeValue,u,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&sh(d.nodeValue,u,(s.mode&1)!==0)}_&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[xr]=o,o.stateNode=d}return tn(o),null;case 13:if(nt(ut),d=o.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(st&&xn!==null&&o.mode&1&&!(o.flags&128))Bv(),_a(),o.flags|=98560,_=!1;else if(_=fh(o),d!==null&&d.dehydrated!==null){if(s===null){if(!_)throw Error(t(318));if(_=o.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[xr]=o}else _a(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;tn(o),_=!1}else ur!==null&&(hm(ur),ur=null),_=!0;if(!_)return o.flags&65536?o:null}return o.flags&128?(o.lanes=u,o):(d=d!==null,d!==(s!==null&&s.memoizedState!==null)&&d&&(o.child.flags|=8192,o.mode&1&&(s===null||ut.current&1?kt===0&&(kt=3):pm())),o.updateQueue!==null&&(o.flags|=4),tn(o),null);case 4:return Ea(),em(s,o),s===null&&Wl(o.stateNode.containerInfo),tn(o),null;case 10:return Pp(o.type._context),tn(o),null;case 17:return vn(o.type)&&lh(),tn(o),null;case 19:if(nt(ut),_=o.memoizedState,_===null)return tn(o),null;if(d=(o.flags&128)!==0,T=_.rendering,T===null)if(d)nu(_,!1);else{if(kt!==0||s!==null&&s.flags&128)for(s=o.child;s!==null;){if(T=vh(s),T!==null){for(o.flags|=128,nu(_,!1),d=T.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)_=u,s=d,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=s,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,s=T.dependencies,_.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),u=u.sibling;return Ze(ut,ut.current&1|2),o.child}s=s.sibling}_.tail!==null&&Je()>Ca&&(o.flags|=128,d=!0,nu(_,!1),o.lanes=4194304)}else{if(!d)if(s=vh(T),s!==null){if(o.flags|=128,d=!0,u=s.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),nu(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!st)return tn(o),null}else 2*Je()-_.renderingStartTime>Ca&&u!==1073741824&&(o.flags|=128,d=!0,nu(_,!1),o.lanes=4194304);_.isBackwards?(T.sibling=o.child,o.child=T):(u=_.last,u!==null?u.sibling=T:o.child=T,_.last=T)}return _.tail!==null?(o=_.tail,_.rendering=o,_.tail=o.sibling,_.renderingStartTime=Je(),o.sibling=null,u=ut.current,Ze(ut,d?u&1|2:u&1),o):(tn(o),null);case 22:case 23:return fm(),d=o.memoizedState!==null,s!==null&&s.memoizedState!==null!==d&&(o.flags|=8192),d&&o.mode&1?Dn&1073741824&&(tn(o),o.subtreeFlags&6&&(o.flags|=8192)):tn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function g1(s,o){switch(Tp(o),o.tag){case 1:return vn(o.type)&&lh(),s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 3:return Ea(),nt(yn),nt(Zt),Lp(),s=o.flags,s&65536&&!(s&128)?(o.flags=s&-65537|128,o):null;case 5:return Dp(o),null;case 13:if(nt(ut),s=o.memoizedState,s!==null&&s.dehydrated!==null){if(o.alternate===null)throw Error(t(340));_a()}return s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 19:return nt(ut),null;case 4:return Ea(),null;case 10:return Pp(o.type._context),null;case 22:case 23:return fm(),null;case 24:return null;default:return null}}var Ph=!1,nn=!1,_1=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Ia(s,o){var u=s.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){dt(s,o,d)}else u.current=null}function tm(s,o,u){try{u()}catch(d){dt(s,o,d)}}var Fw=!1;function y1(s,o){if(fp=zi,s=gv(),sp(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var m=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{u.nodeType,_.nodeType}catch{u=null;break e}var T=0,P=-1,x=-1,$=0,J=0,ee=s,X=null;t:for(;;){for(var ae;ee!==u||m!==0&&ee.nodeType!==3||(P=T+m),ee!==_||d!==0&&ee.nodeType!==3||(x=T+d),ee.nodeType===3&&(T+=ee.nodeValue.length),(ae=ee.firstChild)!==null;)X=ee,ee=ae;for(;;){if(ee===s)break t;if(X===u&&++$===m&&(P=T),X===_&&++J===d&&(x=T),(ae=ee.nextSibling)!==null)break;ee=X,X=ee.parentNode}ee=ae}u=P===-1||x===-1?null:{start:P,end:x}}else u=null}u=u||{start:0,end:0}}else u=null;for(pp={focusedElem:s,selectionRange:u},zi=!1,ue=o;ue!==null;)if(o=ue,s=o.child,(o.subtreeFlags&1028)!==0&&s!==null)s.return=o,ue=s;else for(;ue!==null;){o=ue;try{var he=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var de=he.memoizedProps,yt=he.memoizedState,z=o.stateNode,L=z.getSnapshotBeforeUpdate(o.elementType===o.type?de:cr(o.type,de),yt);z.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var j=o.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){dt(o,o.return,te)}if(s=o.sibling,s!==null){s.return=o.return,ue=s;break}ue=o.return}return he=Fw,Fw=!1,he}function ru(s,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&s)===s){var _=m.destroy;m.destroy=void 0,_!==void 0&&tm(o,u,_)}m=m.next}while(m!==d)}}function kh(s,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&s)===s){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function nm(s){var o=s.ref;if(o!==null){var u=s.stateNode;switch(s.tag){case 5:s=u;break;default:s=u}typeof o=="function"?o(s):o.current=s}}function Uw(s){var o=s.alternate;o!==null&&(s.alternate=null,Uw(o)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(o=s.stateNode,o!==null&&(delete o[xr],delete o[ql],delete o[yp],delete o[e1],delete o[t1])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function Bw(s){return s.tag===5||s.tag===3||s.tag===4}function zw(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||Bw(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function rm(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(s,o):u.insertBefore(s,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(s,u)):(o=u,o.appendChild(s)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=oh));else if(d!==4&&(s=s.child,s!==null))for(rm(s,o,u),s=s.sibling;s!==null;)rm(s,o,u),s=s.sibling}function im(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.insertBefore(s,o):u.appendChild(s);else if(d!==4&&(s=s.child,s!==null))for(im(s,o,u),s=s.sibling;s!==null;)im(s,o,u),s=s.sibling}var Ht=null,hr=!1;function Yi(s,o,u){for(u=u.child;u!==null;)jw(s,o,u),u=u.sibling}function jw(s,o,u){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Ws,u)}catch{}switch(u.tag){case 5:nn||Ia(u,o);case 6:var d=Ht,m=hr;Ht=null,Yi(s,o,u),Ht=d,hr=m,Ht!==null&&(hr?(s=Ht,u=u.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)):Ht.removeChild(u.stateNode));break;case 18:Ht!==null&&(hr?(s=Ht,u=u.stateNode,s.nodeType===8?_p(s.parentNode,u):s.nodeType===1&&_p(s,u),or(s)):_p(Ht,u.stateNode));break;case 4:d=Ht,m=hr,Ht=u.stateNode.containerInfo,hr=!0,Yi(s,o,u),Ht=d,hr=m;break;case 0:case 11:case 14:case 15:if(!nn&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var _=m,T=_.destroy;_=_.tag,T!==void 0&&(_&2||_&4)&&tm(u,o,T),m=m.next}while(m!==d)}Yi(s,o,u);break;case 1:if(!nn&&(Ia(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(P){dt(u,o,P)}Yi(s,o,u);break;case 21:Yi(s,o,u);break;case 22:u.mode&1?(nn=(d=nn)||u.memoizedState!==null,Yi(s,o,u),nn=d):Yi(s,o,u);break;default:Yi(s,o,u)}}function $w(s){var o=s.updateQueue;if(o!==null){s.updateQueue=null;var u=s.stateNode;u===null&&(u=s.stateNode=new _1),o.forEach(function(d){var m=A1.bind(null,s,d);u.has(d)||(u.add(d),d.then(m,m))})}}function dr(s,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var m=u[d];try{var _=s,T=o,P=T;e:for(;P!==null;){switch(P.tag){case 5:Ht=P.stateNode,hr=!1;break e;case 3:Ht=P.stateNode.containerInfo,hr=!0;break e;case 4:Ht=P.stateNode.containerInfo,hr=!0;break e}P=P.return}if(Ht===null)throw Error(t(160));jw(_,T,m),Ht=null,hr=!1;var x=m.alternate;x!==null&&(x.return=null),m.return=null}catch($){dt(m,o,$)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Ww(o,s),o=o.sibling}function Ww(s,o){var u=s.alternate,d=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(dr(o,s),Lr(s),d&4){try{ru(3,s,s.return),kh(3,s)}catch(de){dt(s,s.return,de)}try{ru(5,s,s.return)}catch(de){dt(s,s.return,de)}}break;case 1:dr(o,s),Lr(s),d&512&&u!==null&&Ia(u,u.return);break;case 5:if(dr(o,s),Lr(s),d&512&&u!==null&&Ia(u,u.return),s.flags&32){var m=s.stateNode;try{Di(m,"")}catch(de){dt(s,s.return,de)}}if(d&4&&(m=s.stateNode,m!=null)){var _=s.memoizedProps,T=u!==null?u.memoizedProps:_,P=s.type,x=s.updateQueue;if(s.updateQueue=null,x!==null)try{P==="input"&&_.type==="radio"&&_.name!=null&&pl(m,_),Il(P,T);var $=Il(P,_);for(T=0;T<x.length;T+=2){var J=x[T],ee=x[T+1];J==="style"?wl(m,ee):J==="dangerouslySetInnerHTML"?yl(m,ee):J==="children"?Di(m,ee):q(m,J,ee,$)}switch(P){case"input":ml(m,_);break;case"textarea":Uo(m,_);break;case"select":var X=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var ae=_.value;ae!=null?Qr(m,!!_.multiple,ae,!1):X!==!!_.multiple&&(_.defaultValue!=null?Qr(m,!!_.multiple,_.defaultValue,!0):Qr(m,!!_.multiple,_.multiple?[]:"",!1))}m[ql]=_}catch(de){dt(s,s.return,de)}}break;case 6:if(dr(o,s),Lr(s),d&4){if(s.stateNode===null)throw Error(t(162));m=s.stateNode,_=s.memoizedProps;try{m.nodeValue=_}catch(de){dt(s,s.return,de)}}break;case 3:if(dr(o,s),Lr(s),d&4&&u!==null&&u.memoizedState.isDehydrated)try{or(o.containerInfo)}catch(de){dt(s,s.return,de)}break;case 4:dr(o,s),Lr(s);break;case 13:dr(o,s),Lr(s),m=s.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(am=Je())),d&4&&$w(s);break;case 22:if(J=u!==null&&u.memoizedState!==null,s.mode&1?(nn=($=nn)||J,dr(o,s),nn=$):dr(o,s),Lr(s),d&8192){if($=s.memoizedState!==null,(s.stateNode.isHidden=$)&&!J&&s.mode&1)for(ue=s,J=s.child;J!==null;){for(ee=ue=J;ue!==null;){switch(X=ue,ae=X.child,X.tag){case 0:case 11:case 14:case 15:ru(4,X,X.return);break;case 1:Ia(X,X.return);var he=X.stateNode;if(typeof he.componentWillUnmount=="function"){d=X,u=X.return;try{o=d,he.props=o.memoizedProps,he.state=o.memoizedState,he.componentWillUnmount()}catch(de){dt(d,u,de)}}break;case 5:Ia(X,X.return);break;case 22:if(X.memoizedState!==null){Kw(ee);continue}}ae!==null?(ae.return=X,ue=ae):Kw(ee)}J=J.sibling}e:for(J=null,ee=s;;){if(ee.tag===5){if(J===null){J=ee;try{m=ee.stateNode,$?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(P=ee.stateNode,x=ee.memoizedProps.style,T=x!=null&&x.hasOwnProperty("display")?x.display:null,P.style.display=vl("display",T))}catch(de){dt(s,s.return,de)}}}else if(ee.tag===6){if(J===null)try{ee.stateNode.nodeValue=$?"":ee.memoizedProps}catch(de){dt(s,s.return,de)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===s)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===s)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===s)break e;J===ee&&(J=null),ee=ee.return}J===ee&&(J=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:dr(o,s),Lr(s),d&4&&$w(s);break;case 21:break;default:dr(o,s),Lr(s)}}function Lr(s){var o=s.flags;if(o&2){try{e:{for(var u=s.return;u!==null;){if(Bw(u)){var d=u;break e}u=u.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(Di(m,""),d.flags&=-33);var _=zw(s);im(s,_,m);break;case 3:case 4:var T=d.stateNode.containerInfo,P=zw(s);rm(s,P,T);break;default:throw Error(t(161))}}catch(x){dt(s,s.return,x)}s.flags&=-3}o&4096&&(s.flags&=-4097)}function v1(s,o,u){ue=s,Hw(s)}function Hw(s,o,u){for(var d=(s.mode&1)!==0;ue!==null;){var m=ue,_=m.child;if(m.tag===22&&d){var T=m.memoizedState!==null||Ph;if(!T){var P=m.alternate,x=P!==null&&P.memoizedState!==null||nn;P=Ph;var $=nn;if(Ph=T,(nn=x)&&!$)for(ue=m;ue!==null;)T=ue,x=T.child,T.tag===22&&T.memoizedState!==null?Gw(m):x!==null?(x.return=T,ue=x):Gw(m);for(;_!==null;)ue=_,Hw(_),_=_.sibling;ue=m,Ph=P,nn=$}qw(s)}else m.subtreeFlags&8772&&_!==null?(_.return=m,ue=_):qw(s)}}function qw(s){for(;ue!==null;){var o=ue;if(o.flags&8772){var u=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:nn||kh(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!nn)if(u===null)d.componentDidMount();else{var m=o.elementType===o.type?u.memoizedProps:cr(o.type,u.memoizedProps);d.componentDidUpdate(m,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=o.updateQueue;_!==null&&Kv(o,_,d);break;case 3:var T=o.updateQueue;if(T!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}Kv(o,T,u)}break;case 5:var P=o.stateNode;if(u===null&&o.flags&4){u=P;var x=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&u.focus();break;case"img":x.src&&(u.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var $=o.alternate;if($!==null){var J=$.memoizedState;if(J!==null){var ee=J.dehydrated;ee!==null&&or(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}nn||o.flags&512&&nm(o)}catch(X){dt(o,o.return,X)}}if(o===s){ue=null;break}if(u=o.sibling,u!==null){u.return=o.return,ue=u;break}ue=o.return}}function Kw(s){for(;ue!==null;){var o=ue;if(o===s){ue=null;break}var u=o.sibling;if(u!==null){u.return=o.return,ue=u;break}ue=o.return}}function Gw(s){for(;ue!==null;){var o=ue;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{kh(4,o)}catch(x){dt(o,u,x)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var m=o.return;try{d.componentDidMount()}catch(x){dt(o,m,x)}}var _=o.return;try{nm(o)}catch(x){dt(o,_,x)}break;case 5:var T=o.return;try{nm(o)}catch(x){dt(o,T,x)}}}catch(x){dt(o,o.return,x)}if(o===s){ue=null;break}var P=o.sibling;if(P!==null){P.return=o.return,ue=P;break}ue=o.return}}var w1=Math.ceil,Nh=Q.ReactCurrentDispatcher,sm=Q.ReactCurrentOwner,Kn=Q.ReactCurrentBatchConfig,Fe=0,Mt=null,Et=null,qt=0,Dn=0,Sa=Hi(0),kt=0,iu=null,io=0,bh=0,om=0,su=null,En=null,am=0,Ca=1/0,ui=null,xh=!1,lm=null,Xi=null,Dh=!1,Ji=null,Oh=0,ou=0,um=null,Lh=-1,Mh=0;function hn(){return Fe&6?Je():Lh!==-1?Lh:Lh=Je()}function Zi(s){return s.mode&1?Fe&2&&qt!==0?qt&-qt:r1.transition!==null?(Mh===0&&(Mh=qs()),Mh):(s=Oe,s!==0||(s=window.event,s=s===void 0?16:Ol(s.type)),s):1}function fr(s,o,u,d){if(50<ou)throw ou=0,um=null,Error(t(185));Vi(s,u,d),(!(Fe&2)||s!==Mt)&&(s===Mt&&(!(Fe&2)&&(bh|=u),kt===4&&es(s,qt)),Tn(s,d),u===1&&Fe===0&&!(o.mode&1)&&(Ca=Je()+500,ch&&Ki()))}function Tn(s,o){var u=s.callbackNode;Jr(s,o);var d=Hs(s,s===Mt?qt:0);if(d===0)u!==null&&kl(u),s.callbackNode=null,s.callbackPriority=0;else if(o=d&-d,s.callbackPriority!==o){if(u!=null&&kl(u),o===1)s.tag===0?n1(Yw.bind(null,s)):Lv(Yw.bind(null,s)),JA(function(){!(Fe&6)&&Ki()}),u=null;else{switch(Ui(d)){case 1:u=$s;break;case 4:u=Oi;break;case 16:u=Bn;break;case 536870912:u=Mc;break;default:u=Bn}u=i0(u,Qw.bind(null,s))}s.callbackPriority=o,s.callbackNode=u}}function Qw(s,o){if(Lh=-1,Mh=0,Fe&6)throw Error(t(327));var u=s.callbackNode;if(Ra()&&s.callbackNode!==u)return null;var d=Hs(s,s===Mt?qt:0);if(d===0)return null;if(d&30||d&s.expiredLanes||o)o=Vh(s,d);else{o=d;var m=Fe;Fe|=2;var _=Jw();(Mt!==s||qt!==o)&&(ui=null,Ca=Je()+500,oo(s,o));do try{I1();break}catch(P){Xw(s,P)}while(!0);Ap(),Nh.current=_,Fe=m,Et!==null?o=0:(Mt=null,qt=0,o=kt)}if(o!==0){if(o===2&&(m=Pn(s),m!==0&&(d=m,o=cm(s,m))),o===1)throw u=iu,oo(s,0),es(s,d),Tn(s,Je()),u;if(o===6)es(s,d);else{if(m=s.current.alternate,!(d&30)&&!E1(m)&&(o=Vh(s,d),o===2&&(_=Pn(s),_!==0&&(d=_,o=cm(s,_))),o===1))throw u=iu,oo(s,0),es(s,d),Tn(s,Je()),u;switch(s.finishedWork=m,s.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:ao(s,En,ui);break;case 3:if(es(s,d),(d&130023424)===d&&(o=am+500-Je(),10<o)){if(Hs(s,0)!==0)break;if(m=s.suspendedLanes,(m&d)!==d){hn(),s.pingedLanes|=s.suspendedLanes&m;break}s.timeoutHandle=gp(ao.bind(null,s,En,ui),o);break}ao(s,En,ui);break;case 4:if(es(s,d),(d&4194240)===d)break;for(o=s.eventTimes,m=-1;0<d;){var T=31-ln(d);_=1<<T,T=o[T],T>m&&(m=T),d&=~_}if(d=m,d=Je()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*w1(d/1960))-d,10<d){s.timeoutHandle=gp(ao.bind(null,s,En,ui),d);break}ao(s,En,ui);break;case 5:ao(s,En,ui);break;default:throw Error(t(329))}}}return Tn(s,Je()),s.callbackNode===u?Qw.bind(null,s):null}function cm(s,o){var u=su;return s.current.memoizedState.isDehydrated&&(oo(s,o).flags|=256),s=Vh(s,o),s!==2&&(o=En,En=u,o!==null&&hm(o)),s}function hm(s){En===null?En=s:En.push.apply(En,s)}function E1(s){for(var o=s;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var m=u[d],_=m.getSnapshot;m=m.value;try{if(!lr(_(),m))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function es(s,o){for(o&=~om,o&=~bh,s.suspendedLanes|=o,s.pingedLanes&=~o,s=s.expirationTimes;0<o;){var u=31-ln(o),d=1<<u;s[u]=-1,o&=~d}}function Yw(s){if(Fe&6)throw Error(t(327));Ra();var o=Hs(s,0);if(!(o&1))return Tn(s,Je()),null;var u=Vh(s,o);if(s.tag!==0&&u===2){var d=Pn(s);d!==0&&(o=d,u=cm(s,d))}if(u===1)throw u=iu,oo(s,0),es(s,o),Tn(s,Je()),u;if(u===6)throw Error(t(345));return s.finishedWork=s.current.alternate,s.finishedLanes=o,ao(s,En,ui),Tn(s,Je()),null}function dm(s,o){var u=Fe;Fe|=1;try{return s(o)}finally{Fe=u,Fe===0&&(Ca=Je()+500,ch&&Ki())}}function so(s){Ji!==null&&Ji.tag===0&&!(Fe&6)&&Ra();var o=Fe;Fe|=1;var u=Kn.transition,d=Oe;try{if(Kn.transition=null,Oe=1,s)return s()}finally{Oe=d,Kn.transition=u,Fe=o,!(Fe&6)&&Ki()}}function fm(){Dn=Sa.current,nt(Sa)}function oo(s,o){s.finishedWork=null,s.finishedLanes=0;var u=s.timeoutHandle;if(u!==-1&&(s.timeoutHandle=-1,XA(u)),Et!==null)for(u=Et.return;u!==null;){var d=u;switch(Tp(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&lh();break;case 3:Ea(),nt(yn),nt(Zt),Lp();break;case 5:Dp(d);break;case 4:Ea();break;case 13:nt(ut);break;case 19:nt(ut);break;case 10:Pp(d.type._context);break;case 22:case 23:fm()}u=u.return}if(Mt=s,Et=s=ts(s.current,null),qt=Dn=o,kt=0,iu=null,om=bh=io=0,En=su=null,to!==null){for(o=0;o<to.length;o++)if(u=to[o],d=u.interleaved,d!==null){u.interleaved=null;var m=d.next,_=u.pending;if(_!==null){var T=_.next;_.next=m,d.next=T}u.pending=d}to=null}return s}function Xw(s,o){do{var u=Et;try{if(Ap(),wh.current=Sh,Eh){for(var d=ct.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}Eh=!1}if(ro=0,Lt=Pt=ct=null,Jl=!1,Zl=0,sm.current=null,u===null||u.return===null){kt=1,iu=o,Et=null;break}e:{var _=s,T=u.return,P=u,x=o;if(o=qt,P.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var $=x,J=P,ee=J.tag;if(!(J.mode&1)&&(ee===0||ee===11||ee===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var ae=Tw(T);if(ae!==null){ae.flags&=-257,Iw(ae,T,P,_,o),ae.mode&1&&Ew(_,$,o),o=ae,x=$;var he=o.updateQueue;if(he===null){var de=new Set;de.add(x),o.updateQueue=de}else he.add(x);break e}else{if(!(o&1)){Ew(_,$,o),pm();break e}x=Error(t(426))}}else if(st&&P.mode&1){var yt=Tw(T);if(yt!==null){!(yt.flags&65536)&&(yt.flags|=256),Iw(yt,T,P,_,o),Cp(Ta(x,P));break e}}_=x=Ta(x,P),kt!==4&&(kt=2),su===null?su=[_]:su.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,o&=-o,_.lanes|=o;var z=vw(_,x,o);qv(_,z);break e;case 1:P=x;var L=_.type,j=_.stateNode;if(!(_.flags&128)&&(typeof L.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Xi===null||!Xi.has(j)))){_.flags|=65536,o&=-o,_.lanes|=o;var te=ww(_,P,o);qv(_,te);break e}}_=_.return}while(_!==null)}e0(u)}catch(pe){o=pe,Et===u&&u!==null&&(Et=u=u.return);continue}break}while(!0)}function Jw(){var s=Nh.current;return Nh.current=Sh,s===null?Sh:s}function pm(){(kt===0||kt===3||kt===2)&&(kt=4),Mt===null||!(io&268435455)&&!(bh&268435455)||es(Mt,qt)}function Vh(s,o){var u=Fe;Fe|=2;var d=Jw();(Mt!==s||qt!==o)&&(ui=null,oo(s,o));do try{T1();break}catch(m){Xw(s,m)}while(!0);if(Ap(),Fe=u,Nh.current=d,Et!==null)throw Error(t(261));return Mt=null,qt=0,kt}function T1(){for(;Et!==null;)Zw(Et)}function I1(){for(;Et!==null&&!Oc();)Zw(Et)}function Zw(s){var o=r0(s.alternate,s,Dn);s.memoizedProps=s.pendingProps,o===null?e0(s):Et=o,sm.current=null}function e0(s){var o=s;do{var u=o.alternate;if(s=o.return,o.flags&32768){if(u=g1(u,o),u!==null){u.flags&=32767,Et=u;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{kt=6,Et=null;return}}else if(u=m1(u,o,Dn),u!==null){Et=u;return}if(o=o.sibling,o!==null){Et=o;return}Et=o=s}while(o!==null);kt===0&&(kt=5)}function ao(s,o,u){var d=Oe,m=Kn.transition;try{Kn.transition=null,Oe=1,S1(s,o,u,d)}finally{Kn.transition=m,Oe=d}return null}function S1(s,o,u,d){do Ra();while(Ji!==null);if(Fe&6)throw Error(t(327));u=s.finishedWork;var m=s.finishedLanes;if(u===null)return null;if(s.finishedWork=null,s.finishedLanes=0,u===s.current)throw Error(t(177));s.callbackNode=null,s.callbackPriority=0;var _=u.lanes|u.childLanes;if(Ge(s,_),s===Mt&&(Et=Mt=null,qt=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||Dh||(Dh=!0,i0(Bn,function(){return Ra(),null})),_=(u.flags&15990)!==0,u.subtreeFlags&15990||_){_=Kn.transition,Kn.transition=null;var T=Oe;Oe=1;var P=Fe;Fe|=4,sm.current=null,y1(s,u),Ww(u,s),WA(pp),zi=!!fp,pp=fp=null,s.current=u,v1(u),Xf(),Fe=P,Oe=T,Kn.transition=_}else s.current=u;if(Dh&&(Dh=!1,Ji=s,Oh=m),_=s.pendingLanes,_===0&&(Xi=null),Vc(u.stateNode),Tn(s,Je()),o!==null)for(d=s.onRecoverableError,u=0;u<o.length;u++)m=o[u],d(m.value,{componentStack:m.stack,digest:m.digest});if(xh)throw xh=!1,s=lm,lm=null,s;return Oh&1&&s.tag!==0&&Ra(),_=s.pendingLanes,_&1?s===um?ou++:(ou=0,um=s):ou=0,Ki(),null}function Ra(){if(Ji!==null){var s=Ui(Oh),o=Kn.transition,u=Oe;try{if(Kn.transition=null,Oe=16>s?16:s,Ji===null)var d=!1;else{if(s=Ji,Ji=null,Oh=0,Fe&6)throw Error(t(331));var m=Fe;for(Fe|=4,ue=s.current;ue!==null;){var _=ue,T=_.child;if(ue.flags&16){var P=_.deletions;if(P!==null){for(var x=0;x<P.length;x++){var $=P[x];for(ue=$;ue!==null;){var J=ue;switch(J.tag){case 0:case 11:case 15:ru(8,J,_)}var ee=J.child;if(ee!==null)ee.return=J,ue=ee;else for(;ue!==null;){J=ue;var X=J.sibling,ae=J.return;if(Uw(J),J===$){ue=null;break}if(X!==null){X.return=ae,ue=X;break}ue=ae}}}var he=_.alternate;if(he!==null){var de=he.child;if(de!==null){he.child=null;do{var yt=de.sibling;de.sibling=null,de=yt}while(de!==null)}}ue=_}}if(_.subtreeFlags&2064&&T!==null)T.return=_,ue=T;else e:for(;ue!==null;){if(_=ue,_.flags&2048)switch(_.tag){case 0:case 11:case 15:ru(9,_,_.return)}var z=_.sibling;if(z!==null){z.return=_.return,ue=z;break e}ue=_.return}}var L=s.current;for(ue=L;ue!==null;){T=ue;var j=T.child;if(T.subtreeFlags&2064&&j!==null)j.return=T,ue=j;else e:for(T=L;ue!==null;){if(P=ue,P.flags&2048)try{switch(P.tag){case 0:case 11:case 15:kh(9,P)}}catch(pe){dt(P,P.return,pe)}if(P===T){ue=null;break e}var te=P.sibling;if(te!==null){te.return=P.return,ue=te;break e}ue=P.return}}if(Fe=m,Ki(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Ws,s)}catch{}d=!0}return d}finally{Oe=u,Kn.transition=o}}return!1}function t0(s,o,u){o=Ta(u,o),o=vw(s,o,1),s=Qi(s,o,1),o=hn(),s!==null&&(Vi(s,1,o),Tn(s,o))}function dt(s,o,u){if(s.tag===3)t0(s,s,u);else for(;o!==null;){if(o.tag===3){t0(o,s,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Xi===null||!Xi.has(d))){s=Ta(u,s),s=ww(o,s,1),o=Qi(o,s,1),s=hn(),o!==null&&(Vi(o,1,s),Tn(o,s));break}}o=o.return}}function C1(s,o,u){var d=s.pingCache;d!==null&&d.delete(o),o=hn(),s.pingedLanes|=s.suspendedLanes&u,Mt===s&&(qt&u)===u&&(kt===4||kt===3&&(qt&130023424)===qt&&500>Je()-am?oo(s,0):om|=u),Tn(s,o)}function n0(s,o){o===0&&(s.mode&1?(o=Qo,Qo<<=1,!(Qo&130023424)&&(Qo=4194304)):o=1);var u=hn();s=oi(s,o),s!==null&&(Vi(s,o,u),Tn(s,u))}function R1(s){var o=s.memoizedState,u=0;o!==null&&(u=o.retryLane),n0(s,u)}function A1(s,o){var u=0;switch(s.tag){case 13:var d=s.stateNode,m=s.memoizedState;m!==null&&(u=m.retryLane);break;case 19:d=s.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),n0(s,u)}var r0;r0=function(s,o,u){if(s!==null)if(s.memoizedProps!==o.pendingProps||yn.current)wn=!0;else{if(!(s.lanes&u)&&!(o.flags&128))return wn=!1,p1(s,o,u);wn=!!(s.flags&131072)}else wn=!1,st&&o.flags&1048576&&Mv(o,dh,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;Ah(s,o),s=o.pendingProps;var m=pa(o,Zt.current);wa(o,u),m=Fp(null,o,d,s,m,u);var _=Up();return o.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,vn(d)?(_=!0,uh(o)):_=!1,o.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,bp(o),m.updater=Ch,o.stateNode=m,m._reactInternals=o,Hp(o,d,s,u),o=Qp(null,o,d,!0,_,u)):(o.tag=0,st&&_&&Ep(o),cn(null,o,m,u),o=o.child),o;case 16:d=o.elementType;e:{switch(Ah(s,o),s=o.pendingProps,m=d._init,d=m(d._payload),o.type=d,m=o.tag=k1(d),s=cr(d,s),m){case 0:o=Gp(null,o,d,s,u);break e;case 1:o=kw(null,o,d,s,u);break e;case 11:o=Sw(null,o,d,s,u);break e;case 14:o=Cw(null,o,d,cr(d.type,s),u);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:cr(d,m),Gp(s,o,d,m,u);case 1:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:cr(d,m),kw(s,o,d,m,u);case 3:e:{if(Nw(o),s===null)throw Error(t(387));d=o.pendingProps,_=o.memoizedState,m=_.element,Hv(s,o),yh(o,d,null,u);var T=o.memoizedState;if(d=T.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=_,o.memoizedState=_,o.flags&256){m=Ta(Error(t(423)),o),o=bw(s,o,d,u,m);break e}else if(d!==m){m=Ta(Error(t(424)),o),o=bw(s,o,d,u,m);break e}else for(xn=Wi(o.stateNode.containerInfo.firstChild),bn=o,st=!0,ur=null,u=$v(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(_a(),d===m){o=li(s,o,u);break e}cn(s,o,d,u)}o=o.child}return o;case 5:return Gv(o),s===null&&Sp(o),d=o.type,m=o.pendingProps,_=s!==null?s.memoizedProps:null,T=m.children,mp(d,m)?T=null:_!==null&&mp(d,_)&&(o.flags|=32),Pw(s,o),cn(s,o,T,u),o.child;case 6:return s===null&&Sp(o),null;case 13:return xw(s,o,u);case 4:return xp(o,o.stateNode.containerInfo),d=o.pendingProps,s===null?o.child=ya(o,null,d,u):cn(s,o,d,u),o.child;case 11:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:cr(d,m),Sw(s,o,d,m,u);case 7:return cn(s,o,o.pendingProps,u),o.child;case 8:return cn(s,o,o.pendingProps.children,u),o.child;case 12:return cn(s,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,m=o.pendingProps,_=o.memoizedProps,T=m.value,Ze(mh,d._currentValue),d._currentValue=T,_!==null)if(lr(_.value,T)){if(_.children===m.children&&!yn.current){o=li(s,o,u);break e}}else for(_=o.child,_!==null&&(_.return=o);_!==null;){var P=_.dependencies;if(P!==null){T=_.child;for(var x=P.firstContext;x!==null;){if(x.context===d){if(_.tag===1){x=ai(-1,u&-u),x.tag=2;var $=_.updateQueue;if($!==null){$=$.shared;var J=$.pending;J===null?x.next=x:(x.next=J.next,J.next=x),$.pending=x}}_.lanes|=u,x=_.alternate,x!==null&&(x.lanes|=u),kp(_.return,u,o),P.lanes|=u;break}x=x.next}}else if(_.tag===10)T=_.type===o.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=u,P=T.alternate,P!==null&&(P.lanes|=u),kp(T,u,o),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===o){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}cn(s,o,m.children,u),o=o.child}return o;case 9:return m=o.type,d=o.pendingProps.children,wa(o,u),m=Hn(m),d=d(m),o.flags|=1,cn(s,o,d,u),o.child;case 14:return d=o.type,m=cr(d,o.pendingProps),m=cr(d.type,m),Cw(s,o,d,m,u);case 15:return Rw(s,o,o.type,o.pendingProps,u);case 17:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:cr(d,m),Ah(s,o),o.tag=1,vn(d)?(s=!0,uh(o)):s=!1,wa(o,u),_w(o,d,m),Hp(o,d,m,u),Qp(null,o,d,!0,s,u);case 19:return Ow(s,o,u);case 22:return Aw(s,o,u)}throw Error(t(156,o.tag))};function i0(s,o){return Ko(s,o)}function P1(s,o,u,d){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(s,o,u,d){return new P1(s,o,u,d)}function mm(s){return s=s.prototype,!(!s||!s.isReactComponent)}function k1(s){if(typeof s=="function")return mm(s)?1:0;if(s!=null){if(s=s.$$typeof,s===F)return 11;if(s===Xt)return 14}return 2}function ts(s,o){var u=s.alternate;return u===null?(u=Gn(s.tag,o,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=o,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&14680064,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,o=s.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u}function Fh(s,o,u,d,m,_){var T=2;if(d=s,typeof s=="function")mm(s)&&(T=1);else if(typeof s=="string")T=5;else e:switch(s){case b:return lo(u.children,m,_,o);case C:T=8,m|=8;break;case k:return s=Gn(12,u,o,m|2),s.elementType=k,s.lanes=_,s;case N:return s=Gn(13,u,o,m),s.elementType=N,s.lanes=_,s;case gt:return s=Gn(19,u,o,m),s.elementType=gt,s.lanes=_,s;case Ke:return Uh(u,m,_,o);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case D:T=10;break e;case M:T=9;break e;case F:T=11;break e;case Xt:T=14;break e;case Jt:T=16,d=null;break e}throw Error(t(130,s==null?s:typeof s,""))}return o=Gn(T,u,o,m),o.elementType=s,o.type=d,o.lanes=_,o}function lo(s,o,u,d){return s=Gn(7,s,d,o),s.lanes=u,s}function Uh(s,o,u,d){return s=Gn(22,s,d,o),s.elementType=Ke,s.lanes=u,s.stateNode={isHidden:!1},s}function gm(s,o,u){return s=Gn(6,s,null,o),s.lanes=u,s}function _m(s,o,u){return o=Gn(4,s.children!==null?s.children:[],s.key,o),o.lanes=u,o.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},o}function N1(s,o,u,d,m){this.tag=o,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function ym(s,o,u,d,m,_,T,P,x){return s=new N1(s,o,u,P,x),o===1?(o=1,_===!0&&(o|=8)):o=0,_=Gn(3,null,null,o),s.current=_,_.stateNode=s,_.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},bp(_),s}function b1(s,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ie,key:d==null?null:""+d,children:s,containerInfo:o,implementation:u}}function s0(s){if(!s)return qi;s=s._reactInternals;e:{if(tr(s)!==s||s.tag!==1)throw Error(t(170));var o=s;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(vn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(s.tag===1){var u=s.type;if(vn(u))return Dv(s,u,o)}return o}function o0(s,o,u,d,m,_,T,P,x){return s=ym(u,d,!0,s,m,_,T,P,x),s.context=s0(null),u=s.current,d=hn(),m=Zi(u),_=ai(d,m),_.callback=o??null,Qi(u,_,m),s.current.lanes=m,Vi(s,m,d),Tn(s,d),s}function Bh(s,o,u,d){var m=o.current,_=hn(),T=Zi(m);return u=s0(u),o.context===null?o.context=u:o.pendingContext=u,o=ai(_,T),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Qi(m,o,T),s!==null&&(fr(s,m,T,_),_h(s,m,T)),T}function zh(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function a0(s,o){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<o?u:o}}function vm(s,o){a0(s,o),(s=s.alternate)&&a0(s,o)}function x1(){return null}var l0=typeof reportError=="function"?reportError:function(s){console.error(s)};function wm(s){this._internalRoot=s}jh.prototype.render=wm.prototype.render=function(s){var o=this._internalRoot;if(o===null)throw Error(t(409));Bh(s,o,null,null)},jh.prototype.unmount=wm.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var o=s.containerInfo;so(function(){Bh(null,s,null,null)}),o[ni]=null}};function jh(s){this._internalRoot=s}jh.prototype.unstable_scheduleHydration=function(s){if(s){var o=jc();s={blockedOn:null,target:s,priority:o};for(var u=0;u<Ar.length&&o!==0&&o<Ar[u].priority;u++);Ar.splice(u,0,s),u===0&&Hc(s)}};function Em(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function $h(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function u0(){}function D1(s,o,u,d,m){if(m){if(typeof d=="function"){var _=d;d=function(){var $=zh(T);_.call($)}}var T=o0(o,d,s,0,null,!1,!1,"",u0);return s._reactRootContainer=T,s[ni]=T.current,Wl(s.nodeType===8?s.parentNode:s),so(),T}for(;m=s.lastChild;)s.removeChild(m);if(typeof d=="function"){var P=d;d=function(){var $=zh(x);P.call($)}}var x=ym(s,0,!1,null,null,!1,!1,"",u0);return s._reactRootContainer=x,s[ni]=x.current,Wl(s.nodeType===8?s.parentNode:s),so(function(){Bh(o,x,u,d)}),x}function Wh(s,o,u,d,m){var _=u._reactRootContainer;if(_){var T=_;if(typeof m=="function"){var P=m;m=function(){var x=zh(T);P.call(x)}}Bh(o,T,s,m)}else T=D1(u,o,s,m,d);return zh(T)}Bc=function(s){switch(s.tag){case 3:var o=s.stateNode;if(o.current.memoizedState.isDehydrated){var u=Li(o.pendingLanes);u!==0&&(Fi(o,u|1),Tn(o,Je()),!(Fe&6)&&(Ca=Je()+500,Ki()))}break;case 13:so(function(){var d=oi(s,1);if(d!==null){var m=hn();fr(d,s,1,m)}}),vm(s,1)}},Yo=function(s){if(s.tag===13){var o=oi(s,134217728);if(o!==null){var u=hn();fr(o,s,134217728,u)}vm(s,134217728)}},zc=function(s){if(s.tag===13){var o=Zi(s),u=oi(s,o);if(u!==null){var d=hn();fr(u,s,o,d)}vm(s,o)}},jc=function(){return Oe},$c=function(s,o){var u=Oe;try{return Oe=s,o()}finally{Oe=u}},zo=function(s,o,u){switch(o){case"input":if(ml(s,u),o=u.name,u.type==="radio"&&o!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==s&&d.form===s.form){var m=ah(d);if(!m)throw Error(t(90));Lo(d),ml(d,m)}}}break;case"textarea":Uo(s,u);break;case"select":o=u.value,o!=null&&Qr(s,!!u.multiple,o,!1)}},Us=dm,Cl=so;var O1={usingClientEntryPoint:!1,Events:[Kl,da,ah,Cr,Sl,dm]},au={findFiberByHostInstance:Xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L1={bundleType:au.bundleType,version:au.version,rendererPackageName:au.rendererPackageName,rendererConfig:au.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=Pl(s),s===null?null:s.stateNode},findFiberByHostInstance:au.findFiberByHostInstance||x1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hh.isDisabled&&Hh.supportsFiber)try{Ws=Hh.inject(L1),An=Hh}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O1,In.createPortal=function(s,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Em(o))throw Error(t(200));return b1(s,o,null,u)},In.createRoot=function(s,o){if(!Em(s))throw Error(t(299));var u=!1,d="",m=l0;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),o=ym(s,1,!1,null,null,u,!1,d,m),s[ni]=o.current,Wl(s.nodeType===8?s.parentNode:s),new wm(o)},In.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var o=s._reactInternals;if(o===void 0)throw typeof s.render=="function"?Error(t(188)):(s=Object.keys(s).join(","),Error(t(268,s)));return s=Pl(o),s=s===null?null:s.stateNode,s},In.flushSync=function(s){return so(s)},In.hydrate=function(s,o,u){if(!$h(o))throw Error(t(200));return Wh(null,s,o,!0,u)},In.hydrateRoot=function(s,o,u){if(!Em(s))throw Error(t(405));var d=u!=null&&u.hydratedSources||null,m=!1,_="",T=l0;if(u!=null&&(u.unstable_strictMode===!0&&(m=!0),u.identifierPrefix!==void 0&&(_=u.identifierPrefix),u.onRecoverableError!==void 0&&(T=u.onRecoverableError)),o=o0(o,null,s,1,u??null,m,!1,_,T),s[ni]=o.current,Wl(s),d)for(s=0;s<d.length;s++)u=d[s],m=u._getVersion,m=m(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,m]:o.mutableSourceEagerHydrationData.push(u,m);return new jh(o)},In.render=function(s,o,u){if(!$h(o))throw Error(t(200));return Wh(null,s,o,!1,u)},In.unmountComponentAtNode=function(s){if(!$h(s))throw Error(t(40));return s._reactRootContainer?(so(function(){Wh(null,null,s,!1,function(){s._reactRootContainer=null,s[ni]=null})}),!0):!1},In.unstable_batchedUpdates=dm,In.unstable_renderSubtreeIntoContainer=function(s,o,u,d){if(!$h(u))throw Error(t(200));if(s==null||s._reactInternals===void 0)throw Error(t(38));return Wh(s,o,u,!1,d)},In.version="18.3.1-next-f1338f8080-20240426",In}var _0;function q1(){if(_0)return Cm.exports;_0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Cm.exports=H1(),Cm.exports}var y0;function K1(){if(y0)return qh;y0=1;var n=q1();return qh.createRoot=n.createRoot,qh.hydrateRoot=n.hydrateRoot,qh}var G1=K1();const Q1=GT(G1);var W=nf();const QT=GT(W),v0=U1({__proto__:null,default:QT},[W]);var uu={},w0;function Y1(){if(w0)return uu;w0=1,Object.defineProperty(uu,"__esModule",{value:!0}),uu.parse=l,uu.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,a=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function l(E,S){const R=new a,O=E.length;if(O<2)return R;const A=(S==null?void 0:S.decode)||y;let B=0;do{const K=E.indexOf("=",B);if(K===-1)break;const q=E.indexOf(";",B),Q=q===-1?O:q;if(K>Q){B=E.lastIndexOf(";",K-1)+1;continue}const oe=c(E,B,K),ie=f(E,K,oe),b=E.slice(oe,ie);if(R[b]===void 0){let C=c(E,K+1,Q),k=f(E,Q,C);const D=A(E.slice(C,k));R[b]=D}B=Q+1}while(B<O);return R}function c(E,S,R){do{const O=E.charCodeAt(S);if(O!==32&&O!==9)return S}while(++S<R);return R}function f(E,S,R){for(;S>R;){const O=E.charCodeAt(--S);if(O!==32&&O!==9)return S+1}return R}function p(E,S,R){const O=(R==null?void 0:R.encode)||encodeURIComponent;if(!n.test(E))throw new TypeError(`argument name is invalid: ${E}`);const A=O(S);if(!e.test(A))throw new TypeError(`argument val is invalid: ${S}`);let B=E+"="+A;if(!R)return B;if(R.maxAge!==void 0){if(!Number.isInteger(R.maxAge))throw new TypeError(`option maxAge is invalid: ${R.maxAge}`);B+="; Max-Age="+R.maxAge}if(R.domain){if(!t.test(R.domain))throw new TypeError(`option domain is invalid: ${R.domain}`);B+="; Domain="+R.domain}if(R.path){if(!r.test(R.path))throw new TypeError(`option path is invalid: ${R.path}`);B+="; Path="+R.path}if(R.expires){if(!v(R.expires)||!Number.isFinite(R.expires.valueOf()))throw new TypeError(`option expires is invalid: ${R.expires}`);B+="; Expires="+R.expires.toUTCString()}if(R.httpOnly&&(B+="; HttpOnly"),R.secure&&(B+="; Secure"),R.partitioned&&(B+="; Partitioned"),R.priority)switch(typeof R.priority=="string"?R.priority.toLowerCase():void 0){case"low":B+="; Priority=Low";break;case"medium":B+="; Priority=Medium";break;case"high":B+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${R.priority}`)}if(R.sameSite)switch(typeof R.sameSite=="string"?R.sameSite.toLowerCase():R.sameSite){case!0:case"strict":B+="; SameSite=Strict";break;case"lax":B+="; SameSite=Lax";break;case"none":B+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${R.sameSite}`)}return B}function y(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function v(E){return i.call(E)==="[object Date]"}return uu}Y1();/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var E0="popstate";function X1(n={}){function e(r,i){let{pathname:a,search:l,hash:c}=r.location;return ug("",{pathname:a,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:Lu(i)}return Z1(e,t,null,n)}function bt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Ps(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function J1(){return Math.random().toString(36).substring(2,10)}function T0(n,e){return{usr:n.state,key:n.key,idx:e}}function ug(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?sc(e):e,state:t,key:e&&e.key||r||J1()}}function Lu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function sc(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Z1(n,e,t,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,c="POP",f=null,p=y();p==null&&(p=0,l.replaceState({...l.state,idx:p},""));function y(){return(l.state||{idx:null}).idx}function v(){c="POP";let A=y(),B=A==null?null:A-p;p=A,f&&f({action:c,location:O.location,delta:B})}function E(A,B){c="PUSH";let K=ug(O.location,A,B);p=y()+1;let q=T0(K,p),Q=O.createHref(K);try{l.pushState(q,"",Q)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;i.location.assign(Q)}a&&f&&f({action:c,location:O.location,delta:1})}function S(A,B){c="REPLACE";let K=ug(O.location,A,B);p=y();let q=T0(K,p),Q=O.createHref(K);l.replaceState(q,"",Q),a&&f&&f({action:c,location:O.location,delta:0})}function R(A){let B=i.location.origin!=="null"?i.location.origin:i.location.href,K=typeof A=="string"?A:Lu(A);return K=K.replace(/ $/,"%20"),bt(B,`No window.location.(origin|href) available to create URL for href: ${K}`),new URL(K,B)}let O={get action(){return c},get location(){return n(i,l)},listen(A){if(f)throw new Error("A history only accepts one active listener");return i.addEventListener(E0,v),f=A,()=>{i.removeEventListener(E0,v),f=null}},createHref(A){return e(i,A)},createURL:R,encodeLocation(A){let B=R(A);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:E,replace:S,go(A){return l.go(A)}};return O}function YT(n,e,t="/"){return eP(n,e,t,!1)}function eP(n,e,t,r){let i=typeof e=="string"?sc(e):e,a=gs(i.pathname||"/",t);if(a==null)return null;let l=XT(n);tP(l);let c=null;for(let f=0;c==null&&f<l.length;++f){let p=dP(a);c=cP(l[f],p,r)}return c}function XT(n,e=[],t=[],r=""){let i=(a,l,c)=>{let f={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};f.relativePath.startsWith("/")&&(bt(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let p=yi([r,f.relativePath]),y=t.concat(f);a.children&&a.children.length>0&&(bt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),XT(a.children,e,y,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:lP(p,a.index),routesMeta:y})};return n.forEach((a,l)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,l);else for(let f of JT(a.path))i(a,l,f)}),e}function JT(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=JT(r.join("/")),c=[];return c.push(...l.map(f=>f===""?a:[a,f].join("/"))),i&&c.push(...l),c.map(f=>n.startsWith("/")&&f===""?"/":f)}function tP(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:uP(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var nP=/^:[\w-]+$/,rP=3,iP=2,sP=1,oP=10,aP=-2,I0=n=>n==="*";function lP(n,e){let t=n.split("/"),r=t.length;return t.some(I0)&&(r+=aP),e&&(r+=iP),t.filter(i=>!I0(i)).reduce((i,a)=>i+(nP.test(a)?rP:a===""?sP:oP),r)}function uP(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function cP(n,e,t=!1){let{routesMeta:r}=n,i={},a="/",l=[];for(let c=0;c<r.length;++c){let f=r[c],p=c===r.length-1,y=a==="/"?e:e.slice(a.length)||"/",v=vd({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y),E=f.route;if(!v&&p&&t&&!r[r.length-1].route.index&&(v=vd({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},y)),!v)return null;Object.assign(i,v.params),l.push({params:i,pathname:yi([a,v.pathname]),pathnameBase:gP(yi([a,v.pathnameBase])),route:E}),v.pathnameBase!=="/"&&(a=yi([a,v.pathnameBase]))}return l}function vd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=hP(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((p,{paramName:y,isOptional:v},E)=>{if(y==="*"){let R=c[E]||"";l=a.slice(0,a.length-R.length).replace(/(.)\/+$/,"$1")}const S=c[E];return v&&!S?p[y]=void 0:p[y]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:l,pattern:n}}function hP(n,e=!1,t=!0){Ps(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,f)=>(r.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function dP(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ps(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function gs(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function fP(n,e="/"){let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?sc(n):n;return{pathname:t?t.startsWith("/")?t:pP(t,e):e,search:_P(r),hash:yP(i)}}function pP(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Pm(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mP(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ZT(n){let e=mP(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function eI(n,e,t,r=!1){let i;typeof n=="string"?i=sc(n):(i={...n},bt(!i.pathname||!i.pathname.includes("?"),Pm("?","pathname","search",i)),bt(!i.pathname||!i.pathname.includes("#"),Pm("#","pathname","hash",i)),bt(!i.search||!i.search.includes("#"),Pm("#","search","hash",i)));let a=n===""||i.pathname==="",l=a?"/":i.pathname,c;if(l==null)c=t;else{let v=e.length-1;if(!r&&l.startsWith("..")){let E=l.split("/");for(;E[0]==="..";)E.shift(),v-=1;i.pathname=E.join("/")}c=v>=0?e[v]:"/"}let f=fP(i,c),p=l&&l!=="/"&&l.endsWith("/"),y=(a||l===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||y)&&(f.pathname+="/"),f}var yi=n=>n.join("/").replace(/\/\/+/g,"/"),gP=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),_P=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,yP=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function vP(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var tI=["POST","PUT","PATCH","DELETE"];new Set(tI);var wP=["GET",...tI];new Set(wP);var Za=W.createContext(null);Za.displayName="DataRouter";var rf=W.createContext(null);rf.displayName="DataRouterState";var nI=W.createContext({isTransitioning:!1});nI.displayName="ViewTransition";var EP=W.createContext(new Map);EP.displayName="Fetchers";var TP=W.createContext(null);TP.displayName="Await";var Wr=W.createContext(null);Wr.displayName="Navigation";var sf=W.createContext(null);sf.displayName="Location";var Ir=W.createContext({outlet:null,matches:[],isDataRoute:!1});Ir.displayName="Route";var o_=W.createContext(null);o_.displayName="RouteError";function IP(n,{relative:e}={}){bt(oc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=W.useContext(Wr),{hash:i,pathname:a,search:l}=ac(n,{relative:e}),c=a;return t!=="/"&&(c=a==="/"?t:yi([t,a])),r.createHref({pathname:c,search:l,hash:i})}function oc(){return W.useContext(sf)!=null}function No(){return bt(oc(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(sf).location}var rI="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function iI(n){W.useContext(Wr).static||W.useLayoutEffect(n)}function SP(){let{isDataRoute:n}=W.useContext(Ir);return n?UP():CP()}function CP(){bt(oc(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Za),{basename:e,navigator:t}=W.useContext(Wr),{matches:r}=W.useContext(Ir),{pathname:i}=No(),a=JSON.stringify(ZT(r)),l=W.useRef(!1);return iI(()=>{l.current=!0}),W.useCallback((f,p={})=>{if(Ps(l.current,rI),!l.current)return;if(typeof f=="number"){t.go(f);return}let y=eI(f,JSON.parse(a),i,p.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:yi([e,y.pathname])),(p.replace?t.replace:t.push)(y,p.state,p)},[e,t,a,i,n])}var RP=W.createContext(null);function AP(n){let e=W.useContext(Ir).outlet;return e&&W.createElement(RP.Provider,{value:n},e)}function b3(){let{matches:n}=W.useContext(Ir),e=n[n.length-1];return e?e.params:{}}function ac(n,{relative:e}={}){let{matches:t}=W.useContext(Ir),{pathname:r}=No(),i=JSON.stringify(ZT(t));return W.useMemo(()=>eI(n,JSON.parse(i),r,e==="path"),[n,i,r,e])}function PP(n,e,t,r){bt(oc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=W.useContext(Wr),{matches:a}=W.useContext(Ir),l=a[a.length-1],c=l?l.params:{};l&&l.pathname;let f=l?l.pathnameBase:"/";l&&l.route;let p=No(),y;y=p;let v=y.pathname||"/",E=v;if(f!=="/"){let O=f.replace(/^\//,"").split("/");E="/"+v.replace(/^\//,"").split("/").slice(O.length).join("/")}let S=YT(n,{pathname:E});return DP(S&&S.map(O=>Object.assign({},O,{params:Object.assign({},c,O.params),pathname:yi([f,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?f:yi([f,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),a,t,r)}function kP(){let n=FP(),e=vP(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:i},t):null,null)}var NP=W.createElement(kP,null),bP=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(Ir.Provider,{value:this.props.routeContext},W.createElement(o_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xP({routeContext:n,match:e,children:t}){let r=W.useContext(Za);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(Ir.Provider,{value:n},t)}function DP(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,a=t==null?void 0:t.errors;if(a!=null){let f=i.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);bt(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,f+1))}let l=!1,c=-1;if(t)for(let f=0;f<i.length;f++){let p=i[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:y,errors:v}=t,E=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||E){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((f,p,y)=>{let v,E=!1,S=null,R=null;t&&(v=a&&p.route.id?a[p.route.id]:void 0,S=p.route.errorElement||NP,l&&(c<0&&y===0?(BP("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,R=null):c===y&&(E=!0,R=p.route.hydrateFallbackElement||null)));let O=e.concat(i.slice(0,y+1)),A=()=>{let B;return v?B=S:E?B=R:p.route.Component?B=W.createElement(p.route.Component,null):p.route.element?B=p.route.element:B=f,W.createElement(xP,{match:p,routeContext:{outlet:f,matches:O,isDataRoute:t!=null},children:B})};return t&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?W.createElement(bP,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:A(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):A()},null)}function a_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OP(n){let e=W.useContext(Za);return bt(e,a_(n)),e}function LP(n){let e=W.useContext(rf);return bt(e,a_(n)),e}function MP(n){let e=W.useContext(Ir);return bt(e,a_(n)),e}function l_(n){let e=MP(n),t=e.matches[e.matches.length-1];return bt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function VP(){return l_("useRouteId")}function FP(){var r;let n=W.useContext(o_),e=LP("useRouteError"),t=l_("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function UP(){let{router:n}=OP("useNavigate"),e=l_("useNavigate"),t=W.useRef(!1);return iI(()=>{t.current=!0}),W.useCallback(async(i,a={})=>{Ps(t.current,rI),t.current&&(typeof i=="number"?n.navigate(i):await n.navigate(i,{fromRouteId:e,...a}))},[n,e])}var S0={};function BP(n,e,t){S0[n]||(S0[n]=!0,Ps(!1,t))}W.memo(zP);function zP({routes:n,future:e,state:t}){return PP(n,void 0,t,e)}function x3(n){return AP(n.context)}function jP({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:i,static:a=!1}){bt(!oc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=n.replace(/^\/*/,"/"),c=W.useMemo(()=>({basename:l,navigator:i,static:a,future:{}}),[l,i,a]);typeof t=="string"&&(t=sc(t));let{pathname:f="/",search:p="",hash:y="",state:v=null,key:E="default"}=t,S=W.useMemo(()=>{let R=gs(f,l);return R==null?null:{location:{pathname:R,search:p,hash:y,state:v,key:E},navigationType:r}},[l,f,p,y,v,E,r]);return Ps(S!=null,`<Router basename="${l}"> is not able to match the URL "${f}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:W.createElement(Wr.Provider,{value:c},W.createElement(sf.Provider,{children:e,value:S}))}var od="get",ad="application/x-www-form-urlencoded";function of(n){return n!=null&&typeof n.tagName=="string"}function $P(n){return of(n)&&n.tagName.toLowerCase()==="button"}function WP(n){return of(n)&&n.tagName.toLowerCase()==="form"}function HP(n){return of(n)&&n.tagName.toLowerCase()==="input"}function qP(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function KP(n,e){return n.button===0&&(!e||e==="_self")&&!qP(n)}var Kh=null;function GP(){if(Kh===null)try{new FormData(document.createElement("form"),0),Kh=!1}catch{Kh=!0}return Kh}var QP=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function km(n){return n!=null&&!QP.has(n)?(Ps(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ad}"`),null):n}function YP(n,e){let t,r,i,a,l;if(WP(n)){let c=n.getAttribute("action");r=c?gs(c,e):null,t=n.getAttribute("method")||od,i=km(n.getAttribute("enctype"))||ad,a=new FormData(n)}else if($P(n)||HP(n)&&(n.type==="submit"||n.type==="image")){let c=n.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||c.getAttribute("action");if(r=f?gs(f,e):null,t=n.getAttribute("formmethod")||c.getAttribute("method")||od,i=km(n.getAttribute("formenctype"))||km(c.getAttribute("enctype"))||ad,a=new FormData(c,n),!GP()){let{name:p,type:y,value:v}=n;if(y==="image"){let E=p?`${p}.`:"";a.append(`${E}x`,"0"),a.append(`${E}y`,"0")}else p&&a.append(p,v)}}else{if(of(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=od,r=null,i=ad,l=n}return a&&i==="text/plain"&&(l=a,a=void 0),{action:r,method:t.toLowerCase(),encType:i,formData:a,body:l}}function u_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function XP(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function JP(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function ZP(n,e,t){let r=await Promise.all(n.map(async i=>{let a=e.routes[i.route.id];if(a){let l=await XP(a,t);return l.links?l.links():[]}return[]}));return rk(r.flat(1).filter(JP).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function C0(n,e,t,r,i,a){let l=(f,p)=>t[p]?f.route.id!==t[p].route.id:!0,c=(f,p)=>{var y;return t[p].pathname!==f.pathname||((y=t[p].route.path)==null?void 0:y.endsWith("*"))&&t[p].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,p)=>l(f,p)||c(f,p)):a==="data"?e.filter((f,p)=>{var v;let y=r.routes[f.route.id];if(!y||!y.hasLoader)return!1;if(l(f,p)||c(f,p))return!0;if(f.route.shouldRevalidate){let E=f.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function ek(n,e){return tk(n.map(t=>{let r=e.routes[t.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function tk(n){return[...new Set(n)]}function nk(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function rk(n,e){let t=new Set;return new Set(e),n.reduce((r,i)=>{let a=JSON.stringify(nk(i));return t.has(a)||(t.add(a),r.push({key:a,link:i})),r},[])}function ik(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function sk(){let n=W.useContext(Za);return u_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function ok(){let n=W.useContext(rf);return u_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var c_=W.createContext(void 0);c_.displayName="FrameworkContext";function sI(){let n=W.useContext(c_);return u_(n,"You must render this element inside a <HydratedRouter> element"),n}function ak(n,e){let t=W.useContext(c_),[r,i]=W.useState(!1),[a,l]=W.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:p,onMouseLeave:y,onTouchStart:v}=e,E=W.useRef(null);W.useEffect(()=>{if(n==="render"&&l(!0),n==="viewport"){let O=B=>{B.forEach(K=>{l(K.isIntersecting)})},A=new IntersectionObserver(O,{threshold:.5});return E.current&&A.observe(E.current),()=>{A.disconnect()}}},[n]),W.useEffect(()=>{if(r){let O=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(O)}}},[r]);let S=()=>{i(!0)},R=()=>{i(!1),l(!1)};return t?n!=="intent"?[a,E,{}]:[a,E,{onFocus:cu(c,S),onBlur:cu(f,R),onMouseEnter:cu(p,S),onMouseLeave:cu(y,R),onTouchStart:cu(v,S)}]:[!1,E,{}]}function cu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function lk({page:n,...e}){let{router:t}=sk(),r=W.useMemo(()=>YT(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?W.createElement(ck,{page:n,matches:r,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function uk(n){let{manifest:e,routeModules:t}=sI(),[r,i]=W.useState([]);return W.useEffect(()=>{let a=!1;return ZP(n,e,t).then(l=>{a||i(l)}),()=>{a=!0}},[n,e,t]),r}function ck({page:n,matches:e,...t}){let r=No(),{manifest:i,routeModules:a}=sI(),{loaderData:l,matches:c}=ok(),f=W.useMemo(()=>C0(n,e,c,i,r,"data"),[n,e,c,i,r]),p=W.useMemo(()=>C0(n,e,c,i,r,"assets"),[n,e,c,i,r]),y=W.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let S=new Set,R=!1;if(e.forEach(A=>{var K;let B=i.routes[A.route.id];!B||!B.hasLoader||(!f.some(q=>q.route.id===A.route.id)&&A.route.id in l&&((K=a[A.route.id])!=null&&K.shouldRevalidate)||B.hasClientLoader?R=!0:S.add(A.route.id))}),S.size===0)return[];let O=ik(n);return R&&S.size>0&&O.searchParams.set("_routes",e.filter(A=>S.has(A.route.id)).map(A=>A.route.id).join(",")),[O.pathname+O.search]},[l,r,i,f,e,n,a]),v=W.useMemo(()=>ek(p,i),[p,i]),E=uk(p);return W.createElement(W.Fragment,null,y.map(S=>W.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),v.map(S=>W.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),E.map(({key:S,link:R})=>W.createElement("link",{key:S,...R})))}function hk(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var oI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{oI&&(window.__reactRouterVersion="7.0.1")}catch{}function dk({basename:n,children:e,window:t}){let r=W.useRef();r.current==null&&(r.current=X1({window:t,v5Compat:!0}));let i=r.current,[a,l]=W.useState({action:i.action,location:i.location}),c=W.useCallback(f=>{W.startTransition(()=>l(f))},[l]);return W.useLayoutEffect(()=>i.listen(c),[i,c]),W.createElement(jP,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:i})}var aI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lI=W.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:i,reloadDocument:a,replace:l,state:c,target:f,to:p,preventScrollReset:y,viewTransition:v,...E},S){let{basename:R}=W.useContext(Wr),O=typeof p=="string"&&aI.test(p),A,B=!1;if(typeof p=="string"&&O&&(A=p,oI))try{let k=new URL(window.location.href),D=p.startsWith("//")?new URL(k.protocol+p):new URL(p),M=gs(D.pathname,R);D.origin===k.origin&&M!=null?p=M+D.search+D.hash:B=!0}catch{Ps(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=IP(p,{relative:i}),[q,Q,oe]=ak(r,E),ie=gk(p,{replace:l,state:c,target:f,preventScrollReset:y,relative:i,viewTransition:v});function b(k){e&&e(k),k.defaultPrevented||ie(k)}let C=W.createElement("a",{...E,...oe,href:A||K,onClick:B||a?e:b,ref:hk(S,Q),target:f,"data-discover":!O&&t==="render"?"true":void 0});return q&&!O?W.createElement(W.Fragment,null,C,W.createElement(lk,{page:K})):C});lI.displayName="Link";var fk=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:i=!1,style:a,to:l,viewTransition:c,children:f,...p},y){let v=ac(l,{relative:p.relative}),E=No(),S=W.useContext(rf),{navigator:R,basename:O}=W.useContext(Wr),A=S!=null&&Ek(v)&&c===!0,B=R.encodeLocation?R.encodeLocation(v).pathname:v.pathname,K=E.pathname,q=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(K=K.toLowerCase(),q=q?q.toLowerCase():null,B=B.toLowerCase()),q&&O&&(q=gs(q,O)||q);const Q=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let oe=K===B||!i&&K.startsWith(B)&&K.charAt(Q)==="/",ie=q!=null&&(q===B||!i&&q.startsWith(B)&&q.charAt(B.length)==="/"),b={isActive:oe,isPending:ie,isTransitioning:A},C=oe?e:void 0,k;typeof r=="function"?k=r(b):k=[r,oe?"active":null,ie?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(b):a;return W.createElement(lI,{...p,"aria-current":C,className:k,ref:y,style:D,to:l,viewTransition:c},typeof f=="function"?f(b):f)});fk.displayName="NavLink";var pk=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:i,state:a,method:l=od,action:c,onSubmit:f,relative:p,preventScrollReset:y,viewTransition:v,...E},S)=>{let R=vk(),O=wk(c,{relative:p}),A=l.toLowerCase()==="get"?"get":"post",B=typeof c=="string"&&aI.test(c),K=q=>{if(f&&f(q),q.defaultPrevented)return;q.preventDefault();let Q=q.nativeEvent.submitter,oe=(Q==null?void 0:Q.getAttribute("formmethod"))||l;R(Q||q.currentTarget,{fetcherKey:e,method:oe,navigate:t,replace:i,state:a,relative:p,preventScrollReset:y,viewTransition:v})};return W.createElement("form",{ref:S,method:A,action:O,onSubmit:r?f:K,...E,"data-discover":!B&&n==="render"?"true":void 0})});pk.displayName="Form";function mk(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uI(n){let e=W.useContext(Za);return bt(e,mk(n)),e}function gk(n,{target:e,replace:t,state:r,preventScrollReset:i,relative:a,viewTransition:l}={}){let c=SP(),f=No(),p=ac(n,{relative:a});return W.useCallback(y=>{if(KP(y,e)){y.preventDefault();let v=t!==void 0?t:Lu(f)===Lu(p);c(n,{replace:v,state:r,preventScrollReset:i,relative:a,viewTransition:l})}},[f,c,p,t,r,e,n,i,a,l])}var _k=0,yk=()=>`__${String(++_k)}__`;function vk(){let{router:n}=uI("useSubmit"),{basename:e}=W.useContext(Wr),t=VP();return W.useCallback(async(r,i={})=>{let{action:a,method:l,encType:c,formData:f,body:p}=YP(r,e);if(i.navigate===!1){let y=i.fetcherKey||yk();await n.fetch(y,t,i.action||a,{preventScrollReset:i.preventScrollReset,formData:f,body:p,formMethod:i.method||l,formEncType:i.encType||c,flushSync:i.flushSync})}else await n.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:f,body:p,formMethod:i.method||l,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:t,flushSync:i.flushSync,viewTransition:i.viewTransition})},[n,e,t])}function wk(n,{relative:e}={}){let{basename:t}=W.useContext(Wr),r=W.useContext(Ir);bt(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),a={...ac(n||".",{relative:e})},l=No();if(n==null){a.search=l.search;let c=new URLSearchParams(a.search),f=c.getAll("index");if(f.some(y=>y==="")){c.delete("index"),f.filter(v=>v).forEach(v=>c.append("index",v));let y=c.toString();a.search=y?`?${y}`:""}}return(!n||n===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:yi([t,a.pathname])),Lu(a)}function Ek(n,e={}){let t=W.useContext(nI);bt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=uI("useViewTransitionState"),i=ac(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=gs(t.currentLocation.pathname,r)||t.currentLocation.pathname,l=gs(t.nextLocation.pathname,r)||t.nextLocation.pathname;return vd(i.pathname,l)!=null||vd(i.pathname,a)!=null}new TextEncoder;var Nm={exports:{}},bm={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function Tk(){if(R0)return bm;R0=1;var n=nf();function e(f,p){return f===p&&(f!==0||1/f===1/p)||f!==f&&p!==p}var t=typeof Object.is=="function"?Object.is:e,r=n.useSyncExternalStore,i=n.useRef,a=n.useEffect,l=n.useMemo,c=n.useDebugValue;return bm.useSyncExternalStoreWithSelector=function(f,p,y,v,E){var S=i(null);if(S.current===null){var R={hasValue:!1,value:null};S.current=R}else R=S.current;S=l(function(){function A(oe){if(!B){if(B=!0,K=oe,oe=v(oe),E!==void 0&&R.hasValue){var ie=R.value;if(E(ie,oe))return q=ie}return q=oe}if(ie=q,t(K,oe))return ie;var b=v(oe);return E!==void 0&&E(ie,b)?ie:(K=oe,q=b)}var B=!1,K,q,Q=y===void 0?null:y;return[function(){return A(p())},Q===null?void 0:function(){return A(Q())}]},[p,y,v,E]);var O=r(f,S[0],S[1]);return a(function(){R.hasValue=!0,R.value=O},[O]),c(O),O},bm}var A0;function Ik(){return A0||(A0=1,Nm.exports=Tk()),Nm.exports}var Sk=Ik(),On="default"in v0?QT:v0,P0=Symbol.for("react-redux-context"),k0=typeof globalThis<"u"?globalThis:{};function Ck(){if(!On.createContext)return{};const n=k0[P0]??(k0[P0]=new Map);let e=n.get(On.createContext);return e||(e=On.createContext(null),n.set(On.createContext,e)),e}var _s=Ck(),Rk=()=>{throw new Error("uSES not initialized!")};function h_(n=_s){return function(){return On.useContext(n)}}var cI=h_(),hI=Rk,Ak=n=>{hI=n},Pk=(n,e)=>n===e;function kk(n=_s){const e=n===_s?cI:h_(n),t=(r,i={})=>{const{equalityFn:a=Pk,devModeChecks:l={}}=typeof i=="function"?{equalityFn:i}:i,{store:c,subscription:f,getServerState:p,stabilityCheck:y,identityFunctionCheck:v}=e();On.useRef(!0);const E=On.useCallback({[r.name](R){return r(R)}}[r.name],[r,y,l.stabilityCheck]),S=hI(f.addNestedSub,c.getState,p||c.getState,E,a);return On.useDebugValue(S),S};return Object.assign(t,{withTypes:()=>t}),t}var D3=kk();function Nk(n){n()}function bk(){let n=null,e=null;return{clear(){n=null,e=null},notify(){Nk(()=>{let t=n;for(;t;)t.callback(),t=t.next})},get(){const t=[];let r=n;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let r=!0;const i=e={callback:t,next:null,prev:e};return i.prev?i.prev.next=i:n=i,function(){!r||n===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:n=i.next)}}}}var N0={notify(){},get:()=>[]};function xk(n,e){let t,r=N0,i=0,a=!1;function l(O){y();const A=r.subscribe(O);let B=!1;return()=>{B||(B=!0,A(),v())}}function c(){r.notify()}function f(){R.onStateChange&&R.onStateChange()}function p(){return a}function y(){i++,t||(t=n.subscribe(f),r=bk())}function v(){i--,t&&i===0&&(t(),t=void 0,r.clear(),r=N0)}function E(){a||(a=!0,y())}function S(){a&&(a=!1,v())}const R={addNestedSub:l,notifyNestedSubs:c,handleChangeWrapper:f,isSubscribed:p,trySubscribe:E,tryUnsubscribe:S,getListeners:()=>r};return R}var Dk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ok=Dk?On.useLayoutEffect:On.useEffect;function Lk({store:n,context:e,children:t,serverState:r,stabilityCheck:i="once",identityFunctionCheck:a="once"}){const l=On.useMemo(()=>{const p=xk(n);return{store:n,subscription:p,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:a}},[n,r,i,a]),c=On.useMemo(()=>n.getState(),[n]);Ok(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),c!==n.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,c]);const f=e||_s;return On.createElement(f.Provider,{value:l},t)}var Mk=Lk;function dI(n=_s){const e=n===_s?cI:h_(n),t=()=>{const{store:r}=e();return r};return Object.assign(t,{withTypes:()=>t}),t}var Vk=dI();function Fk(n=_s){const e=n===_s?Vk:dI(n),t=()=>e().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var O3=Fk();Ak(Sk.useSyncExternalStoreWithSelector);let Uk={data:""},Bk=n=>typeof window=="object"?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||Uk,zk=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,jk=/\/\*[^]*?\*\/|  +/g,b0=/\n+/g,is=(n,e)=>{let t="",r="",i="";for(let a in n){let l=n[a];a[0]=="@"?a[1]=="i"?t=a+" "+l+";":r+=a[1]=="f"?is(l,a):a+"{"+is(l,a[1]=="k"?"":e)+"}":typeof l=="object"?r+=is(l,e?e.replace(/([^,])+/g,c=>a.replace(/(^:.*)|([^,])+/g,f=>/&/.test(f)?f.replace(/&/g,c):c?c+" "+f:f)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=is.p?is.p(a,l):a+":"+l+";")}return t+(e&&i?e+"{"+i+"}":i)+r},ci={},fI=n=>{if(typeof n=="object"){let e="";for(let t in n)e+=t+fI(n[t]);return e}return n},$k=(n,e,t,r,i)=>{let a=fI(n),l=ci[a]||(ci[a]=(f=>{let p=0,y=11;for(;p<f.length;)y=101*y+f.charCodeAt(p++)>>>0;return"go"+y})(a));if(!ci[l]){let f=a!==n?n:(p=>{let y,v,E=[{}];for(;y=zk.exec(p.replace(jk,""));)y[4]?E.shift():y[3]?(v=y[3].replace(b0," ").trim(),E.unshift(E[0][v]=E[0][v]||{})):E[0][y[1]]=y[2].replace(b0," ").trim();return E[0]})(n);ci[l]=is(i?{["@keyframes "+l]:f}:f,t?"":"."+l)}let c=t&&ci.g?ci.g:null;return t&&(ci.g=ci[l]),((f,p,y,v)=>{v?p.data=p.data.replace(v,f):p.data.indexOf(f)===-1&&(p.data=y?f+p.data:p.data+f)})(ci[l],e,r,c),l},Wk=(n,e,t)=>n.reduce((r,i,a)=>{let l=e[a];if(l&&l.call){let c=l(t),f=c&&c.props&&c.props.className||/^go/.test(c)&&c;l=f?"."+f:c&&typeof c=="object"?c.props?"":is(c,""):c===!1?"":c}return r+i+(l??"")},"");function af(n){let e=this||{},t=n.call?n(e.p):n;return $k(t.unshift?t.raw?Wk(t,[].slice.call(arguments,1),e.p):t.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):t,Bk(e.target),e.g,e.o,e.k)}let pI,cg,hg;af.bind({g:1});let Ii=af.bind({k:1});function Hk(n,e,t,r){is.p=e,pI=n,cg=t,hg=r}function ks(n,e){let t=this||{};return function(){let r=arguments;function i(a,l){let c=Object.assign({},a),f=c.className||i.className;t.p=Object.assign({theme:cg&&cg()},c),t.o=/ *go\d+/.test(f),c.className=af.apply(t,r)+(f?" "+f:"");let p=n;return n[0]&&(p=c.as||n,delete c.as),hg&&p[0]&&hg(c),pI(p,c)}return i}}var qk=n=>typeof n=="function",dg=(n,e)=>qk(n)?n(e):n,Kk=(()=>{let n=0;return()=>(++n).toString()})(),Gk=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),Qk=20,ld=new Map,Yk=1e3,x0=n=>{if(ld.has(n))return;let e=setTimeout(()=>{ld.delete(n),lf({type:4,toastId:n})},Yk);ld.set(n,e)},Xk=n=>{let e=ld.get(n);e&&clearTimeout(e)},fg=(n,e)=>{switch(e.type){case 0:return{...n,toasts:[e.toast,...n.toasts].slice(0,Qk)};case 1:return e.toast.id&&Xk(e.toast.id),{...n,toasts:n.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:t}=e;return n.toasts.find(a=>a.id===t.id)?fg(n,{type:1,toast:t}):fg(n,{type:0,toast:t});case 3:let{toastId:r}=e;return r?x0(r):n.toasts.forEach(a=>{x0(a.id)}),{...n,toasts:n.toasts.map(a=>a.id===r||r===void 0?{...a,visible:!1}:a)};case 4:return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...n,pausedAt:e.time};case 6:let i=e.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},Jk=[],xm={toasts:[],pausedAt:void 0},lf=n=>{xm=fg(xm,n),Jk.forEach(e=>{e(xm)})},Zk=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||Kk()}),lc=n=>(e,t)=>{let r=Zk(e,n,t);return lf({type:2,toast:r}),r.id},gr=(n,e)=>lc("blank")(n,e);gr.error=lc("error");gr.success=lc("success");gr.loading=lc("loading");gr.custom=lc("custom");gr.dismiss=n=>{lf({type:3,toastId:n})};gr.remove=n=>lf({type:4,toastId:n});gr.promise=(n,e,t)=>{let r=gr.loading(e.loading,{...t,...t==null?void 0:t.loading});return n.then(i=>(gr.success(dg(e.success,i),{id:r,...t,...t==null?void 0:t.success}),i)).catch(i=>{gr.error(dg(e.error,i),{id:r,...t,...t==null?void 0:t.error})}),n};var eN=Ii`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,tN=Ii`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,nN=Ii`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,rN=ks("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${eN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${tN} 0.15s ease-out forwards;
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
    animation: ${nN} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,iN=Ii`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,mI=ks("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${iN} 1s linear infinite;
`,sN=Ii`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,oN=Ii`
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
}`,aN=ks("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${sN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${oN} 0.2s ease-out forwards;
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
`,lN=ks("div")`
  position: absolute;
`,uN=ks("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,cN=Ii`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,hN=ks("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${cN} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,dN=({toast:n})=>{let{icon:e,type:t,iconTheme:r}=n;return e!==void 0?typeof e=="string"?W.createElement(hN,null,e):e:t==="blank"?null:W.createElement(uN,null,W.createElement(mI,{...r}),t!=="loading"&&W.createElement(lN,null,t==="error"?W.createElement(rN,{...r}):W.createElement(aN,{...r})))},fN=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pN=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,mN="0%{opacity:0;} 100%{opacity:1;}",gN="0%{opacity:1;} 100%{opacity:0;}",_N=ks("div")`
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
`,yN=ks("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,vN=(n,e)=>{let t=n.includes("top")?1:-1,[r,i]=Gk()?[mN,gN]:[fN(t),pN(t)];return{animation:e?`${Ii(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ii(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};W.memo(({toast:n,position:e,style:t,children:r})=>{let i=n.height?vN(n.position||e||"top-center",n.visible):{opacity:0},a=W.createElement(dN,{toast:n}),l=W.createElement(yN,{...n.ariaProps},dg(n.message,n));return W.createElement(_N,{className:n.className,style:{...i,...t,...n.style}},typeof r=="function"?r({icon:a,message:l}):W.createElement(W.Fragment,null,a,l))});Hk(W.createElement);af`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var vo=gr;const Dm=(n=[],e)=>{const t=n.findIndex(i=>i===e);let r=[...n];return t===-1?r.push(e):r.splice(t,1),r},gI=(n,e)=>{if(!(!n||!e))return n.findIndex(r=>JSON.stringify(r).toLocaleLowerCase()===JSON.stringify(e).toLocaleLowerCase())!==-1},L3=n=>{for(var e=[],t=0;t<n;t++)e.push(t);return e};function M3(n,e){const t=e,r=Math.ceil(n.length/t),i=[];for(let a=0;a<r;a++){const l=a*t,c=l+t,f=n.slice(l,c);i.push({items:f,page:a+1})}return i}async function V3(n,e){try{const t=await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${n}%2C${e}&key=7824a4d19fa84afab5426170dc768cef`).then(r=>r.json());return t.results[0].distance_from_q.meters>0&&t.results[0].components._type!=="body_of_water"}catch(t){console.log(t)}}function F3(n,e){switch(e.classList.add("scroll-smooth"),n){case"right":e.scrollLeft+=200;break;case"left":e.scrollLeft-=200;break}e.classList.remove("scroll-smooth")}function U3(n){switch(n){case 200:break;case 204:throw Error("Please try again a few seconds later or refresh page");case 401:throw Error("You Have To Sign-up First...")}}function B3(n,e,t="firestore"){const r={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return(t==="firestore"?new Date(n.seconds*1e3+n.nanoseconds/1e6):new Date(n)).toLocaleDateString("en-US",e||r)}function wN(n=""){return`${n}${Date.now()}${Math.random()}`}function D0(n){const e=n.reduce((i,a)=>Number(i)+Number(a),0),t=n.length;return Math.round(e/t)}function z3(n,e,t){const r=["image/jpeg","image/webp","image/png","image/gif","video/mp4","video/webm","video/ogg"];if(n.size>e*1024*1024){vo.error(`File size exceeds ${e}MB limit.`);return}if(r.includes(n.type))t(n);else{vo.error("Only image, GIF, and video files are allowed.");return}}var O0={};/**
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
 */const _I={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ne=function(n,e){if(!n)throw el(e)},el=function(n){return new Error("Firebase Database ("+_I.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const yI=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},EN=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],l=n[t++],c=n[t++],f=((i&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=n[t++],l=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return e.join("")},d_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],l=i+1<n.length,c=l?n[i+1]:0,f=i+2<n.length,p=f?n[i+2]:0,y=a>>2,v=(a&3)<<4|c>>4;let E=(c&15)<<2|p>>6,S=p&63;f||(S=64,l||(E=64)),r.push(t[y],t[v],t[E],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yI(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):EN(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const p=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||c==null||p==null||v==null)throw new TN;const E=a<<2|c>>4;if(r.push(E),p!==64){const S=c<<4&240|p>>2;if(r.push(S),v!==64){const R=p<<6&192|v;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class TN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vI=function(n){const e=yI(n);return d_.encodeByteArray(e,!0)},wd=function(n){return vI(n).replace(/\./g,"")},Ed=function(n){try{return d_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function IN(n){return wI(void 0,n)}function wI(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!SN(t)||(n[t]=wI(n[t],e[t]));return n}function SN(n){return n!=="__proto__"}/**
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
 */function CN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RN=()=>CN().__FIREBASE_DEFAULTS__,AN=()=>{if(typeof process>"u"||typeof O0>"u")return;const n=O0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},PN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ed(n[1]);return e&&JSON.parse(e)},uf=()=>{try{return RN()||AN()||PN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},EI=n=>{var e,t;return(t=(e=uf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},f_=n=>{const e=EI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},TI=()=>{var n;return(n=uf())===null||n===void 0?void 0:n.config},II=n=>{var e;return(e=uf())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Mr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function p_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wd(JSON.stringify(t)),wd(JSON.stringify(l)),""].join(".")}/**
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
 */function an(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function m_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(an())}function kN(){var n;const e=(n=uf())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NN(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function SI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bN(){const n=an();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function CI(){return _I.NODE_ADMIN===!0}function xN(){return!kN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function DN(){try{return typeof indexedDB=="object"}catch{return!1}}function ON(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const LN="FirebaseError";class Hr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=LN,Object.setPrototypeOf(this,Hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uc.prototype.create)}}class uc{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],l=a?MN(a,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Hr(i,c,r)}}function MN(n,e){return n.replace(VN,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VN=/\{\$([^}]+)}/g;/**
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
 */function Mu(n){return JSON.parse(n)}function Nt(n){return JSON.stringify(n)}/**
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
 */const RI=function(n){let e={},t={},r={},i="";try{const a=n.split(".");e=Mu(Ed(a[0])||""),t=Mu(Ed(a[1])||""),i=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},FN=function(n){const e=RI(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},UN=function(n){const e=RI(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function qr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Fa(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Td(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Id(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Sd(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],l=e[i];if(L0(a)&&L0(l)){if(!Sd(a,l))return!1}else if(a!==l)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function L0(n){return n!==null&&typeof n=="object"}/**
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
 */function tl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _u(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function yu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class BN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)r[v]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let v=0;v<16;v++)r[v]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let v=16;v<80;v++){const E=r[v-3]^r[v-8]^r[v-14]^r[v-16];r[v]=(E<<1|E>>>31)&4294967295}let i=this.chain_[0],a=this.chain_[1],l=this.chain_[2],c=this.chain_[3],f=this.chain_[4],p,y;for(let v=0;v<80;v++){v<40?v<20?(p=c^a&(l^c),y=1518500249):(p=a^l^c,y=1859775393):v<60?(p=a&l|c&(a|l),y=2400959708):(p=a^l^c,y=3395469782);const E=(i<<5|i>>>27)+p+f+y+r[v]&4294967295;f=c,c=l,l=(a<<30|a>>>2)&4294967295,a=i,i=E}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const a=this.buf_;let l=this.inbuf_;for(;i<t;){if(l===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(a[l]=e.charCodeAt(i),++l,++i,l===this.blockSize){this.compress_(a),l=0;break}}else for(;i<t;)if(a[l]=e[i],++l,++i,l===this.blockSize){this.compress_(a),l=0;break}}this.inbuf_=l,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}function zN(n,e){const t=new jN(n,e);return t.subscribe.bind(t)}class jN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$N(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Om),i.error===void 0&&(i.error=Om),i.complete===void 0&&(i.complete=Om);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $N(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Om(){}function Ua(n,e){return`${n} failed: ${e} argument `}/**
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
 */const WN=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const a=i-55296;r++,ne(r<n.length,"Surrogate pair missing trail surrogate.");const l=n.charCodeAt(r)-56320;i=65536+(a<<10)+l}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},cf=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function We(n){return n&&n._delegate?n._delegate:n}class Si{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const uo="[DEFAULT]";/**
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
 */class HN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Mr;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KN(e))try{this.getOrInitializeService({instanceIdentifier:uo})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=uo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=uo){return this.instances.has(e)}getOptions(e=uo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);r===c&&l.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qN(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=uo){return this.component?this.component.multipleInstances?e:uo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qN(n){return n===uo?void 0:n}function KN(n){return n.instantiationMode==="EAGER"}/**
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
 */class GN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(xe||(xe={}));const QN={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},YN=xe.INFO,XN={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},JN=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=XN[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hf{constructor(e){this.name=e,this._logLevel=YN,this._logHandler=JN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const ZN=(n,e)=>e.some(t=>n instanceof t);let M0,V0;function eb(){return M0||(M0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tb(){return V0||(V0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AI=new WeakMap,pg=new WeakMap,PI=new WeakMap,Lm=new WeakMap,g_=new WeakMap;function nb(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(cs(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&AI.set(t,n)}).catch(()=>{}),g_.set(e,n),e}function rb(n){if(pg.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});pg.set(n,e)}let mg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return pg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||PI.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return cs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ib(n){mg=n(mg)}function sb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Mm(this),e,...t);return PI.set(r,e.sort?e.sort():[e]),cs(r)}:tb().includes(n)?function(...e){return n.apply(Mm(this),e),cs(AI.get(this))}:function(...e){return cs(n.apply(Mm(this),e))}}function ob(n){return typeof n=="function"?sb(n):(n instanceof IDBTransaction&&rb(n),ZN(n,eb())?new Proxy(n,mg):n)}function cs(n){if(n instanceof IDBRequest)return nb(n);if(Lm.has(n))return Lm.get(n);const e=ob(n);return e!==n&&(Lm.set(n,e),g_.set(e,n)),e}const Mm=n=>g_.get(n);function ab(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const l=indexedDB.open(n,e),c=cs(l);return r&&l.addEventListener("upgradeneeded",f=>{r(cs(l.result),f.oldVersion,f.newVersion,cs(l.transaction),f)}),t&&l.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),c.then(f=>{a&&f.addEventListener("close",()=>a()),i&&f.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const lb=["get","getKey","getAll","getAllKeys","count"],ub=["put","add","delete","clear"],Vm=new Map;function F0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vm.get(e))return Vm.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ub.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lb.includes(t)))return;const a=async function(l,...c){const f=this.transaction(l,i?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(c.shift())),(await Promise.all([p[t](...c),i&&f.done]))[0]};return Vm.set(e,a),a}ib(n=>({...n,get:(e,t,r)=>F0(e,t)||n.get(e,t,r),has:(e,t)=>!!F0(e,t)||n.has(e,t)}));/**
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
 */class cb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hb(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function hb(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gg="@firebase/app",U0="0.10.9";/**
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
 */const Ci=new hf("@firebase/app"),db="@firebase/app-compat",fb="@firebase/analytics-compat",pb="@firebase/analytics",mb="@firebase/app-check-compat",gb="@firebase/app-check",_b="@firebase/auth",yb="@firebase/auth-compat",vb="@firebase/database",wb="@firebase/database-compat",Eb="@firebase/functions",Tb="@firebase/functions-compat",Ib="@firebase/installations",Sb="@firebase/installations-compat",Cb="@firebase/messaging",Rb="@firebase/messaging-compat",Ab="@firebase/performance",Pb="@firebase/performance-compat",kb="@firebase/remote-config",Nb="@firebase/remote-config-compat",bb="@firebase/storage",xb="@firebase/storage-compat",Db="@firebase/firestore",Ob="@firebase/vertexai-preview",Lb="@firebase/firestore-compat",Mb="firebase",Vb="10.13.0";/**
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
 */const _g="[DEFAULT]",Fb={[gg]:"fire-core",[db]:"fire-core-compat",[pb]:"fire-analytics",[fb]:"fire-analytics-compat",[gb]:"fire-app-check",[mb]:"fire-app-check-compat",[_b]:"fire-auth",[yb]:"fire-auth-compat",[vb]:"fire-rtdb",[wb]:"fire-rtdb-compat",[Eb]:"fire-fn",[Tb]:"fire-fn-compat",[Ib]:"fire-iid",[Sb]:"fire-iid-compat",[Cb]:"fire-fcm",[Rb]:"fire-fcm-compat",[Ab]:"fire-perf",[Pb]:"fire-perf-compat",[kb]:"fire-rc",[Nb]:"fire-rc-compat",[bb]:"fire-gcs",[xb]:"fire-gcs-compat",[Db]:"fire-fst",[Lb]:"fire-fst-compat",[Ob]:"fire-vertex","fire-js":"fire-js",[Mb]:"fire-js-all"};/**
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
 */const Cd=new Map,Ub=new Map,yg=new Map;function B0(n,e){try{n.container.addComponent(e)}catch(t){Ci.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ys(n){const e=n.name;if(yg.has(e))return Ci.debug(`There were multiple attempts to register component ${e}.`),!1;yg.set(e,n);for(const t of Cd.values())B0(t,n);for(const t of Ub.values())B0(t,n);return!0}function cc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function _r(n){return n.settings!==void 0}/**
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
 */const Bb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hs=new uc("app","Firebase",Bb);/**
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
 */class zb{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=Vb;function kI(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_g,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hs.create("bad-app-name",{appName:String(i)});if(t||(t=TI()),!t)throw hs.create("no-options");const a=Cd.get(i);if(a){if(Sd(t,a.options)&&Sd(r,a.config))return a;throw hs.create("duplicate-app",{appName:i})}const l=new GN(i);for(const f of yg.values())l.addComponent(f);const c=new zb(t,r,l);return Cd.set(i,c),c}function df(n=_g){const e=Cd.get(n);if(!e&&n===_g&&TI())return kI();if(!e)throw hs.create("no-app",{appName:n});return e}function Yn(n,e,t){var r;let i=(r=Fb[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ci.warn(c.join(" "));return}ys(new Si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const jb="firebase-heartbeat-database",$b=1,Vu="firebase-heartbeat-store";let Fm=null;function NI(){return Fm||(Fm=ab(jb,$b,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vu)}catch(t){console.warn(t)}}}}).catch(n=>{throw hs.create("idb-open",{originalErrorMessage:n.message})})),Fm}async function Wb(n){try{const t=(await NI()).transaction(Vu),r=await t.objectStore(Vu).get(bI(n));return await t.done,r}catch(e){if(e instanceof Hr)Ci.warn(e.message);else{const t=hs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ci.warn(t.message)}}}async function z0(n,e){try{const r=(await NI()).transaction(Vu,"readwrite");await r.objectStore(Vu).put(e,bI(n)),await r.done}catch(t){if(t instanceof Hr)Ci.warn(t.message);else{const r=hs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ci.warn(r.message)}}}function bI(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Hb=1024,qb=30*24*60*60*1e3;class Kb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t,r;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=j0();return console.log("heartbeats",(e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats),((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=qb}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ci.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=j0(),{heartbeatsToSend:r,unsentEntries:i}=Gb(this._heartbeatsCache.heartbeats),a=wd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Ci.warn(t),""}}}function j0(){return new Date().toISOString().substring(0,10)}function Gb(n,e=Hb){const t=[];let r=n.slice();for(const i of n){const a=t.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),$0(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),$0(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Qb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DN()?ON().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Wb(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return z0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return z0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $0(n){return wd(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Yb(n){ys(new Si("platform-logger",e=>new cb(e),"PRIVATE")),ys(new Si("heartbeat",e=>new Kb(e),"PRIVATE")),Yn(gg,U0,n),Yn(gg,U0,"esm2017"),Yn("fire-js","")}Yb("");var W0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var go,xI;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,C){function k(){}k.prototype=C.prototype,b.D=C.prototype,b.prototype=new k,b.prototype.constructor=b,b.C=function(D,M,F){for(var N=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)N[gt-2]=arguments[gt];return C.prototype[M].apply(D,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,C,k){k||(k=0);var D=Array(16);if(typeof C=="string")for(var M=0;16>M;++M)D[M]=C.charCodeAt(k++)|C.charCodeAt(k++)<<8|C.charCodeAt(k++)<<16|C.charCodeAt(k++)<<24;else for(M=0;16>M;++M)D[M]=C[k++]|C[k++]<<8|C[k++]<<16|C[k++]<<24;C=b.g[0],k=b.g[1],M=b.g[2];var F=b.g[3],N=C+(F^k&(M^F))+D[0]+3614090360&4294967295;C=k+(N<<7&4294967295|N>>>25),N=F+(M^C&(k^M))+D[1]+3905402710&4294967295,F=C+(N<<12&4294967295|N>>>20),N=M+(k^F&(C^k))+D[2]+606105819&4294967295,M=F+(N<<17&4294967295|N>>>15),N=k+(C^M&(F^C))+D[3]+3250441966&4294967295,k=M+(N<<22&4294967295|N>>>10),N=C+(F^k&(M^F))+D[4]+4118548399&4294967295,C=k+(N<<7&4294967295|N>>>25),N=F+(M^C&(k^M))+D[5]+1200080426&4294967295,F=C+(N<<12&4294967295|N>>>20),N=M+(k^F&(C^k))+D[6]+2821735955&4294967295,M=F+(N<<17&4294967295|N>>>15),N=k+(C^M&(F^C))+D[7]+4249261313&4294967295,k=M+(N<<22&4294967295|N>>>10),N=C+(F^k&(M^F))+D[8]+1770035416&4294967295,C=k+(N<<7&4294967295|N>>>25),N=F+(M^C&(k^M))+D[9]+2336552879&4294967295,F=C+(N<<12&4294967295|N>>>20),N=M+(k^F&(C^k))+D[10]+4294925233&4294967295,M=F+(N<<17&4294967295|N>>>15),N=k+(C^M&(F^C))+D[11]+2304563134&4294967295,k=M+(N<<22&4294967295|N>>>10),N=C+(F^k&(M^F))+D[12]+1804603682&4294967295,C=k+(N<<7&4294967295|N>>>25),N=F+(M^C&(k^M))+D[13]+4254626195&4294967295,F=C+(N<<12&4294967295|N>>>20),N=M+(k^F&(C^k))+D[14]+2792965006&4294967295,M=F+(N<<17&4294967295|N>>>15),N=k+(C^M&(F^C))+D[15]+1236535329&4294967295,k=M+(N<<22&4294967295|N>>>10),N=C+(M^F&(k^M))+D[1]+4129170786&4294967295,C=k+(N<<5&4294967295|N>>>27),N=F+(k^M&(C^k))+D[6]+3225465664&4294967295,F=C+(N<<9&4294967295|N>>>23),N=M+(C^k&(F^C))+D[11]+643717713&4294967295,M=F+(N<<14&4294967295|N>>>18),N=k+(F^C&(M^F))+D[0]+3921069994&4294967295,k=M+(N<<20&4294967295|N>>>12),N=C+(M^F&(k^M))+D[5]+3593408605&4294967295,C=k+(N<<5&4294967295|N>>>27),N=F+(k^M&(C^k))+D[10]+38016083&4294967295,F=C+(N<<9&4294967295|N>>>23),N=M+(C^k&(F^C))+D[15]+3634488961&4294967295,M=F+(N<<14&4294967295|N>>>18),N=k+(F^C&(M^F))+D[4]+3889429448&4294967295,k=M+(N<<20&4294967295|N>>>12),N=C+(M^F&(k^M))+D[9]+568446438&4294967295,C=k+(N<<5&4294967295|N>>>27),N=F+(k^M&(C^k))+D[14]+3275163606&4294967295,F=C+(N<<9&4294967295|N>>>23),N=M+(C^k&(F^C))+D[3]+4107603335&4294967295,M=F+(N<<14&4294967295|N>>>18),N=k+(F^C&(M^F))+D[8]+1163531501&4294967295,k=M+(N<<20&4294967295|N>>>12),N=C+(M^F&(k^M))+D[13]+2850285829&4294967295,C=k+(N<<5&4294967295|N>>>27),N=F+(k^M&(C^k))+D[2]+4243563512&4294967295,F=C+(N<<9&4294967295|N>>>23),N=M+(C^k&(F^C))+D[7]+1735328473&4294967295,M=F+(N<<14&4294967295|N>>>18),N=k+(F^C&(M^F))+D[12]+2368359562&4294967295,k=M+(N<<20&4294967295|N>>>12),N=C+(k^M^F)+D[5]+4294588738&4294967295,C=k+(N<<4&4294967295|N>>>28),N=F+(C^k^M)+D[8]+2272392833&4294967295,F=C+(N<<11&4294967295|N>>>21),N=M+(F^C^k)+D[11]+1839030562&4294967295,M=F+(N<<16&4294967295|N>>>16),N=k+(M^F^C)+D[14]+4259657740&4294967295,k=M+(N<<23&4294967295|N>>>9),N=C+(k^M^F)+D[1]+2763975236&4294967295,C=k+(N<<4&4294967295|N>>>28),N=F+(C^k^M)+D[4]+1272893353&4294967295,F=C+(N<<11&4294967295|N>>>21),N=M+(F^C^k)+D[7]+4139469664&4294967295,M=F+(N<<16&4294967295|N>>>16),N=k+(M^F^C)+D[10]+3200236656&4294967295,k=M+(N<<23&4294967295|N>>>9),N=C+(k^M^F)+D[13]+681279174&4294967295,C=k+(N<<4&4294967295|N>>>28),N=F+(C^k^M)+D[0]+3936430074&4294967295,F=C+(N<<11&4294967295|N>>>21),N=M+(F^C^k)+D[3]+3572445317&4294967295,M=F+(N<<16&4294967295|N>>>16),N=k+(M^F^C)+D[6]+76029189&4294967295,k=M+(N<<23&4294967295|N>>>9),N=C+(k^M^F)+D[9]+3654602809&4294967295,C=k+(N<<4&4294967295|N>>>28),N=F+(C^k^M)+D[12]+3873151461&4294967295,F=C+(N<<11&4294967295|N>>>21),N=M+(F^C^k)+D[15]+530742520&4294967295,M=F+(N<<16&4294967295|N>>>16),N=k+(M^F^C)+D[2]+3299628645&4294967295,k=M+(N<<23&4294967295|N>>>9),N=C+(M^(k|~F))+D[0]+4096336452&4294967295,C=k+(N<<6&4294967295|N>>>26),N=F+(k^(C|~M))+D[7]+1126891415&4294967295,F=C+(N<<10&4294967295|N>>>22),N=M+(C^(F|~k))+D[14]+2878612391&4294967295,M=F+(N<<15&4294967295|N>>>17),N=k+(F^(M|~C))+D[5]+4237533241&4294967295,k=M+(N<<21&4294967295|N>>>11),N=C+(M^(k|~F))+D[12]+1700485571&4294967295,C=k+(N<<6&4294967295|N>>>26),N=F+(k^(C|~M))+D[3]+2399980690&4294967295,F=C+(N<<10&4294967295|N>>>22),N=M+(C^(F|~k))+D[10]+4293915773&4294967295,M=F+(N<<15&4294967295|N>>>17),N=k+(F^(M|~C))+D[1]+2240044497&4294967295,k=M+(N<<21&4294967295|N>>>11),N=C+(M^(k|~F))+D[8]+1873313359&4294967295,C=k+(N<<6&4294967295|N>>>26),N=F+(k^(C|~M))+D[15]+4264355552&4294967295,F=C+(N<<10&4294967295|N>>>22),N=M+(C^(F|~k))+D[6]+2734768916&4294967295,M=F+(N<<15&4294967295|N>>>17),N=k+(F^(M|~C))+D[13]+1309151649&4294967295,k=M+(N<<21&4294967295|N>>>11),N=C+(M^(k|~F))+D[4]+4149444226&4294967295,C=k+(N<<6&4294967295|N>>>26),N=F+(k^(C|~M))+D[11]+3174756917&4294967295,F=C+(N<<10&4294967295|N>>>22),N=M+(C^(F|~k))+D[2]+718787259&4294967295,M=F+(N<<15&4294967295|N>>>17),N=k+(F^(M|~C))+D[9]+3951481745&4294967295,b.g[0]=b.g[0]+C&4294967295,b.g[1]=b.g[1]+(M+(N<<21&4294967295|N>>>11))&4294967295,b.g[2]=b.g[2]+M&4294967295,b.g[3]=b.g[3]+F&4294967295}r.prototype.u=function(b,C){C===void 0&&(C=b.length);for(var k=C-this.blockSize,D=this.B,M=this.h,F=0;F<C;){if(M==0)for(;F<=k;)i(this,b,F),F+=this.blockSize;if(typeof b=="string"){for(;F<C;)if(D[M++]=b.charCodeAt(F++),M==this.blockSize){i(this,D),M=0;break}}else for(;F<C;)if(D[M++]=b[F++],M==this.blockSize){i(this,D),M=0;break}}this.h=M,this.o+=C},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var C=1;C<b.length-8;++C)b[C]=0;var k=8*this.o;for(C=b.length-8;C<b.length;++C)b[C]=k&255,k/=256;for(this.u(b),b=Array(16),C=k=0;4>C;++C)for(var D=0;32>D;D+=8)b[k++]=this.g[C]>>>D&255;return b};function a(b,C){var k=c;return Object.prototype.hasOwnProperty.call(k,b)?k[b]:k[b]=C(b)}function l(b,C){this.h=C;for(var k=[],D=!0,M=b.length-1;0<=M;M--){var F=b[M]|0;D&&F==C||(k[M]=F,D=!1)}this.g=k}var c={};function f(b){return-128<=b&&128>b?a(b,function(C){return new l([C|0],0>C?-1:0)}):new l([b|0],0>b?-1:0)}function p(b){if(isNaN(b)||!isFinite(b))return v;if(0>b)return A(p(-b));for(var C=[],k=1,D=0;b>=k;D++)C[D]=b/k|0,k*=4294967296;return new l(C,0)}function y(b,C){if(b.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(b.charAt(0)=="-")return A(y(b.substring(1),C));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=p(Math.pow(C,8)),D=v,M=0;M<b.length;M+=8){var F=Math.min(8,b.length-M),N=parseInt(b.substring(M,M+F),C);8>F?(F=p(Math.pow(C,F)),D=D.j(F).add(p(N))):(D=D.j(k),D=D.add(p(N)))}return D}var v=f(0),E=f(1),S=f(16777216);n=l.prototype,n.m=function(){if(O(this))return-A(this).m();for(var b=0,C=1,k=0;k<this.g.length;k++){var D=this.i(k);b+=(0<=D?D:4294967296+D)*C,C*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R(this))return"0";if(O(this))return"-"+A(this).toString(b);for(var C=p(Math.pow(b,6)),k=this,D="";;){var M=Q(k,C).g;k=B(k,M.j(C));var F=((0<k.g.length?k.g[0]:k.h)>>>0).toString(b);if(k=M,R(k))return F+D;for(;6>F.length;)F="0"+F;D=F+D}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function R(b){if(b.h!=0)return!1;for(var C=0;C<b.g.length;C++)if(b.g[C]!=0)return!1;return!0}function O(b){return b.h==-1}n.l=function(b){return b=B(this,b),O(b)?-1:R(b)?0:1};function A(b){for(var C=b.g.length,k=[],D=0;D<C;D++)k[D]=~b.g[D];return new l(k,~b.h).add(E)}n.abs=function(){return O(this)?A(this):this},n.add=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],D=0,M=0;M<=C;M++){var F=D+(this.i(M)&65535)+(b.i(M)&65535),N=(F>>>16)+(this.i(M)>>>16)+(b.i(M)>>>16);D=N>>>16,F&=65535,N&=65535,k[M]=N<<16|F}return new l(k,k[k.length-1]&-2147483648?-1:0)};function B(b,C){return b.add(A(C))}n.j=function(b){if(R(this)||R(b))return v;if(O(this))return O(b)?A(this).j(A(b)):A(A(this).j(b));if(O(b))return A(this.j(A(b)));if(0>this.l(S)&&0>b.l(S))return p(this.m()*b.m());for(var C=this.g.length+b.g.length,k=[],D=0;D<2*C;D++)k[D]=0;for(D=0;D<this.g.length;D++)for(var M=0;M<b.g.length;M++){var F=this.i(D)>>>16,N=this.i(D)&65535,gt=b.i(M)>>>16,Xt=b.i(M)&65535;k[2*D+2*M]+=N*Xt,K(k,2*D+2*M),k[2*D+2*M+1]+=F*Xt,K(k,2*D+2*M+1),k[2*D+2*M+1]+=N*gt,K(k,2*D+2*M+1),k[2*D+2*M+2]+=F*gt,K(k,2*D+2*M+2)}for(D=0;D<C;D++)k[D]=k[2*D+1]<<16|k[2*D];for(D=C;D<2*C;D++)k[D]=0;return new l(k,0)};function K(b,C){for(;(b[C]&65535)!=b[C];)b[C+1]+=b[C]>>>16,b[C]&=65535,C++}function q(b,C){this.g=b,this.h=C}function Q(b,C){if(R(C))throw Error("division by zero");if(R(b))return new q(v,v);if(O(b))return C=Q(A(b),C),new q(A(C.g),A(C.h));if(O(C))return C=Q(b,A(C)),new q(A(C.g),C.h);if(30<b.g.length){if(O(b)||O(C))throw Error("slowDivide_ only works with positive integers.");for(var k=E,D=C;0>=D.l(b);)k=oe(k),D=oe(D);var M=ie(k,1),F=ie(D,1);for(D=ie(D,2),k=ie(k,2);!R(D);){var N=F.add(D);0>=N.l(b)&&(M=M.add(k),F=N),D=ie(D,1),k=ie(k,1)}return C=B(b,M.j(C)),new q(M,C)}for(M=v;0<=b.l(C);){for(k=Math.max(1,Math.floor(b.m()/C.m())),D=Math.ceil(Math.log(k)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),F=p(k),N=F.j(C);O(N)||0<N.l(b);)k-=D,F=p(k),N=F.j(C);R(F)&&(F=E),M=M.add(F),b=B(b,N)}return new q(M,b)}n.A=function(b){return Q(this,b).h},n.and=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],D=0;D<C;D++)k[D]=this.i(D)&b.i(D);return new l(k,this.h&b.h)},n.or=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],D=0;D<C;D++)k[D]=this.i(D)|b.i(D);return new l(k,this.h|b.h)},n.xor=function(b){for(var C=Math.max(this.g.length,b.g.length),k=[],D=0;D<C;D++)k[D]=this.i(D)^b.i(D);return new l(k,this.h^b.h)};function oe(b){for(var C=b.g.length+1,k=[],D=0;D<C;D++)k[D]=b.i(D)<<1|b.i(D-1)>>>31;return new l(k,b.h)}function ie(b,C){var k=C>>5;C%=32;for(var D=b.g.length-k,M=[],F=0;F<D;F++)M[F]=0<C?b.i(F+k)>>>C|b.i(F+k+1)<<32-C:b.i(F+k);return new l(M,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xI=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=y,go=l}).apply(typeof W0<"u"?W0:typeof self<"u"?self:typeof window<"u"?window:{});var Gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var DI,OI,vu,LI,ud,vg,MI,VI,FI;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,g,w){return h==Array.prototype||h==Object.prototype||(h[g]=w.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gh=="object"&&Gh];for(var g=0;g<h.length;++g){var w=h[g];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}var r=t(this);function i(h,g){if(g)e:{var w=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var U=h[I];if(!(U in w))break e;w=w[U]}h=h[h.length-1],I=w[h],g=g(I),g!=I&&g!=null&&e(w,h,{configurable:!0,writable:!0,value:g})}}function a(h,g){h instanceof String&&(h+="");var w=0,I=!1,U={next:function(){if(!I&&w<h.length){var H=w++;return{value:g(H,h[H]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}i("Array.prototype.values",function(h){return h||function(){return a(this,function(g,w){return w})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(h){var g=typeof h;return g=g!="object"?g:h?Array.isArray(h)?"array":g:"null",g=="array"||g=="object"&&typeof h.length=="number"}function p(h){var g=typeof h;return g=="object"&&h!=null||g=="function"}function y(h,g,w){return h.call.apply(h.bind,arguments)}function v(h,g,w){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),h.apply(g,U)}}return function(){return h.apply(g,arguments)}}function E(h,g,w){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,E.apply(null,arguments)}function S(h,g){var w=Array.prototype.slice.call(arguments,1);return function(){var I=w.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function R(h,g){function w(){}w.prototype=g.prototype,h.aa=g.prototype,h.prototype=new w,h.prototype.constructor=h,h.Qb=function(I,U,H){for(var re=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)re[qe-2]=arguments[qe];return g.prototype[U].apply(I,re)}}function O(h){const g=h.length;if(0<g){const w=Array(g);for(let I=0;I<g;I++)w[I]=h[I];return w}return[]}function A(h,g){for(let w=1;w<arguments.length;w++){const I=arguments[w];if(f(I)){const U=h.length||0,H=I.length||0;h.length=U+H;for(let re=0;re<H;re++)h[U+re]=I[re]}else h.push(I)}}class B{constructor(g,w){this.i=g,this.j=w,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function K(h){return/^[\s\xa0]*$/.test(h)}function q(){var h=c.navigator;return h&&(h=h.userAgent)?h:""}function Q(h){return Q[" "](h),h}Q[" "]=function(){};var oe=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ie(h,g,w){for(const I in h)g.call(w,h[I],I,h)}function b(h,g){for(const w in h)g.call(void 0,h[w],w,h)}function C(h){const g={};for(const w in h)g[w]=h[w];return g}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(h,g){let w,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(w in I)h[w]=I[w];for(let H=0;H<k.length;H++)w=k[H],Object.prototype.hasOwnProperty.call(I,w)&&(h[w]=I[w])}}function M(h){var g=1;h=h.split(":");const w=[];for(;0<g&&h.length;)w.push(h.shift()),g--;return h.length&&w.push(h.join(":")),w}function F(h){c.setTimeout(()=>{throw h},0)}function N(){var h=_e;let g=null;return h.g&&(g=h.g,h.g=h.g.next,h.g||(h.h=null),g.next=null),g}class gt{constructor(){this.h=this.g=null}add(g,w){const I=Xt.get();I.set(g,w),this.h?this.h.next=I:this.g=I,this.h=I}}var Xt=new B(()=>new Jt,h=>h.reset());class Jt{constructor(){this.next=this.g=this.h=null}set(g,w){this.h=g,this.g=w,this.next=null}reset(){this.next=this.g=this.h=null}}let Ke,se=!1,_e=new gt,le=()=>{const h=c.Promise.resolve(void 0);Ke=()=>{h.then(V)}};var V=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(w){F(w)}var g=Xt;g.j(h),100>g.h&&(g.h++,h.next=g.g,g.g=h)}se=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(h,g){this.type=h,this.g=this.target=g,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var h=!1,g=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const w=()=>{};c.addEventListener("test",w,g),c.removeEventListener("test",w,g)}catch{}return h}();function ke(h,g){if(me.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var w=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=g,g=h.relatedTarget){if(oe){e:{try{Q(g.nodeName);var U=!0;break e}catch{}U=!1}U||(g=null)}}else w=="mouseover"?g=h.fromElement:w=="mouseout"&&(g=h.toElement);this.relatedTarget=g,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Le[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&ke.aa.h.call(this)}}R(ke,me);var Le={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),$e=0;function Xe(h,g,w,I,U){this.listener=h,this.proxy=null,this.src=g,this.type=w,this.capture=!!I,this.ha=U,this.key=++$e,this.da=this.fa=!1}function Dt(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Kr(h){this.src=h,this.g={},this.h=0}Kr.prototype.add=function(h,g,w,I,U){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var re=xi(h,g,I,U);return-1<re?(g=h[re],w||(g.fa=!1)):(g=new Xe(g,this.src,H,!!I,U),g.fa=w,h.push(g)),g};function Lo(h,g){var w=g.type;if(w in h.g){var I=h.g[w],U=Array.prototype.indexOf.call(I,g,void 0),H;(H=0<=U)&&Array.prototype.splice.call(I,U,1),H&&(Dt(g),h.g[w].length==0&&(delete h.g[w],h.h--))}}function xi(h,g,w,I){for(var U=0;U<h.length;++U){var H=h[U];if(!H.da&&H.listener==g&&H.capture==!!w&&H.ha==I)return U}return-1}var Ls="closure_lm_"+(1e6*Math.random()|0),Mo={};function pl(h,g,w,I,U){if(Array.isArray(g)){for(var H=0;H<g.length;H++)pl(h,g[H],w,I,U);return null}return w=_l(w),h&&h[je]?h.K(g,w,p(I)?!!I.capture:!!I,U):ml(h,g,w,!1,I,U)}function ml(h,g,w,I,U,H){if(!g)throw Error("Invalid event type");var re=p(U)?!!U.capture:!!U,qe=Fo(h);if(qe||(h[Ls]=qe=new Kr(h)),w=qe.add(g,w,I,re,H),w.proxy)return w;if(I=bc(),w.proxy=I,I.src=h,I.listener=w,h.addEventListener)Re||(U=re),U===void 0&&(U=!1),h.addEventListener(g.toString(),I,U);else if(h.attachEvent)h.attachEvent(Qr(g.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return w}function bc(){function h(w){return g.call(h.src,h.listener,w)}const g=gl;return h}function Vo(h,g,w,I,U){if(Array.isArray(g))for(var H=0;H<g.length;H++)Vo(h,g[H],w,I,U);else I=p(I)?!!I.capture:!!I,w=_l(w),h&&h[je]?(h=h.i,g=String(g).toString(),g in h.g&&(H=h.g[g],w=xi(H,w,I,U),-1<w&&(Dt(H[w]),Array.prototype.splice.call(H,w,1),H.length==0&&(delete h.g[g],h.h--)))):h&&(h=Fo(h))&&(g=h.g[g.toString()],h=-1,g&&(h=xi(g,w,I,U)),(w=-1<h?g[h]:null)&&Gr(w))}function Gr(h){if(typeof h!="number"&&h&&!h.da){var g=h.src;if(g&&g[je])Lo(g.i,h);else{var w=h.type,I=h.proxy;g.removeEventListener?g.removeEventListener(w,I,h.capture):g.detachEvent?g.detachEvent(Qr(w),I):g.addListener&&g.removeListener&&g.removeListener(I),(w=Fo(g))?(Lo(w,h),w.h==0&&(w.src=null,g[Ls]=null)):Dt(h)}}}function Qr(h){return h in Mo?Mo[h]:Mo[h]="on"+h}function gl(h,g){if(h.da)h=!0;else{g=new ke(g,this);var w=h.listener,I=h.ha||h.src;h.fa&&Gr(h),h=w.call(I,g)}return h}function Fo(h){return h=h[Ls],h instanceof Kr?h:null}var Uo="__closure_events_fn_"+(1e9*Math.random()>>>0);function _l(h){return typeof h=="function"?h:(h[Uo]||(h[Uo]=function(g){return h.handleEvent(g)}),h[Uo])}function Ct(){G.call(this),this.i=new Kr(this),this.M=this,this.F=null}R(Ct,G),Ct.prototype[je]=!0,Ct.prototype.removeEventListener=function(h,g,w,I){Vo(this,h,g,w,I)};function Rt(h,g){var w,I=h.F;if(I)for(w=[];I;I=I.F)w.push(I);if(h=h.M,I=g.type||g,typeof g=="string")g=new me(g,h);else if(g instanceof me)g.target=g.target||h;else{var U=g;g=new me(I,h),D(g,U)}if(U=!0,w)for(var H=w.length-1;0<=H;H--){var re=g.g=w[H];U=Yr(re,I,!0,g)&&U}if(re=g.g=h,U=Yr(re,I,!0,g)&&U,U=Yr(re,I,!1,g)&&U,w)for(H=0;H<w.length;H++)re=g.g=w[H],U=Yr(re,I,!1,g)&&U}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var h=this.i,g;for(g in h.g){for(var w=h.g[g],I=0;I<w.length;I++)Dt(w[I]);delete h.g[g],h.h--}}this.F=null},Ct.prototype.K=function(h,g,w,I){return this.i.add(String(h),g,!1,w,I)},Ct.prototype.L=function(h,g,w,I){return this.i.add(String(h),g,!0,w,I)};function Yr(h,g,w,I){if(g=h.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,H=0;H<g.length;++H){var re=g[H];if(re&&!re.da&&re.capture==w){var qe=re.listener,At=re.ha||re.src;re.fa&&Lo(h.i,re),U=qe.call(At,I)!==!1&&U}}return U&&!I.defaultPrevented}function yl(h,g,w){if(typeof h=="function")w&&(h=E(h,w));else if(h&&typeof h.handleEvent=="function")h=E(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:c.setTimeout(h,g||0)}function Di(h){h.g=yl(()=>{h.g=null,h.i&&(h.i=!1,Di(h))},h.l);const g=h.h;h.h=null,h.m.apply(null,g)}class Ms extends G{constructor(g,w){super(),this.m=g,this.l=w,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Di(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vs(h){G.call(this),this.h=h,this.g={}}R(Vs,G);var vl=[];function wl(h){ie(h.g,function(g,w){this.g.hasOwnProperty(w)&&Gr(g)},h),h.g={}}Vs.prototype.N=function(){Vs.aa.N.call(this),wl(this)},Vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var El=c.JSON.stringify,Tl=c.JSON.parse,Il=class{stringify(h){return c.JSON.stringify(h,void 0)}parse(h){return c.JSON.parse(h,void 0)}};function Fs(){}Fs.prototype.h=null;function Bo(h){return h.h||(h.h=h.i())}function zo(){}var Un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sr(){me.call(this,"d")}R(Sr,me);function jo(){me.call(this,"c")}R(jo,me);var Cr={},Sl=null;function Us(){return Sl=Sl||new Ct}Cr.La="serverreachability";function Cl(h){me.call(this,Cr.La,h)}R(Cl,me);function Xr(h){const g=Us();Rt(g,new Cl(g))}Cr.STAT_EVENT="statevent";function Rl(h,g){me.call(this,Cr.STAT_EVENT,h),this.stat=g}R(Rl,me);function _t(h){const g=Us();Rt(g,new Rl(g,h))}Cr.Ma="timingevent";function $o(h,g){me.call(this,Cr.Ma,h),this.size=g}R($o,me);function Zn(h,g){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){h()},g)}function Bs(){this.g=!0}Bs.prototype.xa=function(){this.g=!1};function zs(h,g,w,I,U,H){h.info(function(){if(h.g)if(H)for(var re="",qe=H.split("&"),At=0;At<qe.length;At++){var Me=qe[At].split("=");if(1<Me.length){var Ot=Me[0];Me=Me[1];var wt=Ot.split("_");re=2<=wt.length&&wt[1]=="type"?re+(Ot+"="+Me+"&"):re+(Ot+"=redacted&")}}else re=null;else re=H;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+g+`
`+w+`
`+re})}function Wo(h,g,w,I,U,H,re){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+g+`
`+w+`
`+H+" "+re})}function er(h,g,w,I){h.info(function(){return"XMLHTTP TEXT ("+g+"): "+Yf(h,w)+(I?" "+I:"")})}function Al(h,g){h.info(function(){return"TIMEOUT: "+g})}Bs.prototype.info=function(){};function Yf(h,g){if(!h.g)return g;if(!g)return null;try{var w=JSON.parse(g);if(w){for(h=0;h<w.length;h++)if(Array.isArray(w[h])){var I=w[h];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return El(w)}catch{return g}}var Ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tr;function js(){}R(js,Fs),js.prototype.g=function(){return new XMLHttpRequest},js.prototype.i=function(){return{}},tr=new js;function nr(h,g,w,I){this.j=h,this.i=g,this.l=w,this.R=I||1,this.U=new Vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dc}function Dc(){this.i=null,this.g="",this.h=!1}var Pl={},qo={};function Ko(h,g,w){h.L=1,h.v=Fi(Pn(g)),h.m=w,h.P=!0,kl(h,null)}function kl(h,g){h.F=Date.now(),Je(h),h.A=Pn(h.v);var w=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),Bi(w.i,"t",I),h.C=0,w=h.j.J,h.h=new Dc,h.g=Xc(h.j,w?g:null,!h.m),0<h.O&&(h.M=new Ms(E(h.Y,h,h.g),h.O)),g=h.U,w=h.g,I=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(vl[0]=U.toString()),U=vl);for(var H=0;H<U.length;H++){var re=pl(w,U[H],I||g.handleEvent,!1,g.h||g);if(!re)break;g.g[re.key]=re}g=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,g)):(h.u="GET",h.g.ea(h.A,h.u,null,g)),Xr(),zs(h.i,h.u,h.A,h.l,h.R,h.m)}nr.prototype.ca=function(h){h=h.target;const g=this.M;g&&_n(h)==3?g.j():this.Y(h)},nr.prototype.Y=function(h){try{if(h==this.g)e:{const wt=_n(this.g);var g=this.g.Ba();const jn=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Ll(this.g)))){this.J||wt!=4||g==7||(g==8||0>=jn?Xr(3):Xr(2)),$s(this);var w=this.g.Z();this.X=w;t:if(Oc(this)){var I=Ll(this.g);h="";var U=I.length,H=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bn(this),Oi(this);var re="";break t}this.h.i=new c.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,h+=this.h.i.decode(I[g],{stream:!(H&&g==U-1)});I.length=0,this.h.g+=h,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=w==200,Wo(this.i,this.u,this.A,this.l,this.R,wt,w),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,At=this.g;if((qe=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(qe)){var Me=qe;break t}}Me=null}if(w=Me)er(this.i,this.l,w,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nl(this,w);else{this.o=!1,this.s=3,_t(12),Bn(this),Oi(this);break e}}if(this.P){w=!0;let Nn;for(;!this.J&&this.C<re.length;)if(Nn=Xf(this,re),Nn==qo){wt==4&&(this.s=4,_t(14),w=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(Nn==Pl){this.s=4,_t(15),er(this.i,this.l,re,"[Invalid Chunk]"),w=!1;break}else er(this.i,this.l,Nn,null),Nl(this,Nn);if(Oc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||re.length!=0||this.h.h||(this.s=1,_t(16),w=!1),this.o=this.o&&w,!w)er(this.i,this.l,re,"[Invalid Chunked Response]"),Bn(this),Oi(this);else if(0<re.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Vl(Ot),Ot.M=!0,_t(11))}}else er(this.i,this.l,re,null),Nl(this,re);wt==4&&Bn(this),this.o&&!this.J&&(wt==4?ia(this.j,this):(this.o=!1,Je(this)))}else Zo(this.g),w==400&&0<re.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Bn(this),Oi(this)}}}catch{}finally{}};function Oc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Xf(h,g){var w=h.C,I=g.indexOf(`
`,w);return I==-1?qo:(w=Number(g.substring(w,I)),isNaN(w)?Pl:(I+=1,I+w>g.length?qo:(g=g.slice(I,I+w),h.C=I+w,g)))}nr.prototype.cancel=function(){this.J=!0,Bn(this)};function Je(h){h.S=Date.now()+h.I,Lc(h,h.I)}function Lc(h,g){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Zn(E(h.ba,h),g)}function $s(h){h.B&&(c.clearTimeout(h.B),h.B=null)}nr.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Al(this.i,this.A),this.L!=2&&(Xr(),_t(17)),Bn(this),this.s=2,Oi(this)):Lc(this,this.S-h)};function Oi(h){h.j.G==0||h.J||ia(h.j,h)}function Bn(h){$s(h);var g=h.M;g&&typeof g.ma=="function"&&g.ma(),h.M=null,wl(h.U),h.g&&(g=h.g,h.g=null,g.abort(),g.ma())}function Nl(h,g){try{var w=h.j;if(w.G!=0&&(w.g==h||ln(w.h,h))){if(!h.K&&ln(w.h,h)&&w.G==3){try{var I=w.Da.g.parse(g)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!w.u){if(w.g)if(w.g.F+3e3<h.F)ra(w),ar(w);else break e;na(w),_t(18)}}else w.za=U[1],0<w.za-w.T&&37500>U[2]&&w.F&&w.v==0&&!w.C&&(w.C=Zn(E(w.Za,w),6e3));if(1>=Vc(w.h)&&w.ca){try{w.ca()}catch{}w.ca=void 0}}else ti(w,11)}else if((h.K||w.g==h)&&ra(w),!K(g))for(U=w.Da.g.parse(g),g=0;g<U.length;g++){let Me=U[g];if(w.T=Me[0],Me=Me[1],w.G==2)if(Me[0]=="c"){w.K=Me[1],w.ia=Me[2];const Ot=Me[3];Ot!=null&&(w.la=Ot,w.j.info("VER="+w.la));const wt=Me[4];wt!=null&&(w.Aa=wt,w.j.info("SVER="+w.Aa));const jn=Me[5];jn!=null&&typeof jn=="number"&&0<jn&&(I=1.5*jn,w.L=I,w.j.info("backChannelRequestTimeoutMs_="+I)),I=w;const Nn=h.g;if(Nn){const Ys=Nn.g?Nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var H=I.h;H.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(bl(H,H.h),H.h=null))}if(I.D){const oa=Nn.g?Nn.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(I.ya=oa,Ge(I.I,I.D,oa))}}w.G=3,w.l&&w.l.ua(),w.ba&&(w.R=Date.now()-h.F,w.j.info("Handshake RTT: "+w.R+"ms")),I=w;var re=h;if(I.qa=Yc(I,I.J?I.ia:null,I.W),re.K){Fc(I.h,re);var qe=re,At=I.L;At&&(qe.I=At),qe.B&&($s(qe),Je(qe)),I.g=re}else Qs(I);0<w.i.length&&Nr(w)}else Me[0]!="stop"&&Me[0]!="close"||ti(w,7);else w.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?ti(w,7):Wt(w):Me[0]!="noop"&&w.l&&w.l.ta(Me),w.v=0)}}Xr(4)}catch{}}var Mc=class{constructor(h,g){this.g=h,this.map=g}};function Ws(h){this.l=h||10,c.PerformanceNavigationTiming?(h=c.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function An(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Vc(h){return h.h?1:h.g?h.g.size:0}function ln(h,g){return h.h?h.h==g:h.g?h.g.has(g):!1}function bl(h,g){h.g?h.g.add(g):h.h=g}function Fc(h,g){h.h&&h.h==g?h.h=null:h.g&&h.g.has(g)&&h.g.delete(g)}Ws.prototype.cancel=function(){if(this.i=Uc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Uc(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let g=h.i;for(const w of h.g.values())g=g.concat(w.D);return g}return O(h.i)}function Go(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(f(h)){for(var g=[],w=h.length,I=0;I<w;I++)g.push(h[I]);return g}g=[],w=0;for(I in h)g[w++]=h[I];return g}function Qo(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(f(h)||typeof h=="string"){var g=[];h=h.length;for(var w=0;w<h;w++)g.push(w);return g}g=[],w=0;for(const I in h)g[w++]=I;return g}}}function Li(h,g){if(h.forEach&&typeof h.forEach=="function")h.forEach(g,void 0);else if(f(h)||typeof h=="string")Array.prototype.forEach.call(h,g,void 0);else for(var w=Qo(h),I=Go(h),U=I.length,H=0;H<U;H++)g.call(void 0,I[H],w&&w[H],h)}var Hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jf(h,g){if(h){h=h.split("&");for(var w=0;w<h.length;w++){var I=h[w].indexOf("="),U=null;if(0<=I){var H=h[w].substring(0,I);U=h[w].substring(I+1)}else H=h[w];g(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Jr(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Jr){this.h=h.h,qs(this,h.j),this.o=h.o,this.g=h.g,Mi(this,h.s),this.l=h.l;var g=h.i,w=new Rr;w.i=g.i,g.g&&(w.g=new Map(g.g),w.h=g.h),Vi(this,w),this.m=h.m}else h&&(g=String(h).match(Hs))?(this.h=!1,qs(this,g[1]||"",!0),this.o=Oe(g[2]||""),this.g=Oe(g[3]||"",!0),Mi(this,g[4]),this.l=Oe(g[5]||"",!0),Vi(this,g[6]||"",!0),this.m=Oe(g[7]||"")):(this.h=!1,this.i=new Rr(null,this.h))}Jr.prototype.toString=function(){var h=[],g=this.j;g&&h.push(Ui(g,Yo,!0),":");var w=this.g;return(w||g=="file")&&(h.push("//"),(g=this.o)&&h.push(Ui(g,Yo,!0),"@"),h.push(encodeURIComponent(String(w)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),w=this.s,w!=null&&h.push(":",String(w))),(w=this.l)&&(this.g&&w.charAt(0)!="/"&&h.push("/"),h.push(Ui(w,w.charAt(0)=="/"?jc:zc,!0))),(w=this.i.toString())&&h.push("?",w),(w=this.m)&&h.push("#",Ui(w,xl)),h.join("")};function Pn(h){return new Jr(h)}function qs(h,g,w){h.j=w?Oe(g,!0):g,h.j&&(h.j=h.j.replace(/:$/,""))}function Mi(h,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);h.s=g}else h.s=null}function Vi(h,g,w){g instanceof Rr?(h.i=g,Ar(h.i,h.h)):(w||(g=Ui(g,$c)),h.i=new Rr(g,h.h))}function Ge(h,g,w){h.i.set(g,w)}function Fi(h){return Ge(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Oe(h,g){return h?g?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Ui(h,g,w){return typeof h=="string"?(h=encodeURI(h).replace(g,Bc),w&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Bc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Yo=/[#\/\?@]/g,zc=/[#\?:]/g,jc=/[#\?]/g,$c=/[#\?@]/g,xl=/#/g;function Rr(h,g){this.h=this.g=null,this.i=h||null,this.j=!!g}function $t(h){h.g||(h.g=new Map,h.h=0,h.i&&Jf(h.i,function(g,w){h.add(decodeURIComponent(g.replace(/\+/g," ")),w)}))}n=Rr.prototype,n.add=function(h,g){$t(this),this.i=null,h=zn(this,h);var w=this.g.get(h);return w||this.g.set(h,w=[]),w.push(g),this.h+=1,this};function rr(h,g){$t(h),g=zn(h,g),h.g.has(g)&&(h.i=null,h.h-=h.g.get(g).length,h.g.delete(g))}function ir(h,g){return $t(h),g=zn(h,g),h.g.has(g)}n.forEach=function(h,g){$t(this),this.g.forEach(function(w,I){w.forEach(function(U){h.call(g,U,I,this)},this)},this)},n.na=function(){$t(this);const h=Array.from(this.g.values()),g=Array.from(this.g.keys()),w=[];for(let I=0;I<g.length;I++){const U=h[I];for(let H=0;H<U.length;H++)w.push(g[I])}return w},n.V=function(h){$t(this);let g=[];if(typeof h=="string")ir(this,h)&&(g=g.concat(this.g.get(zn(this,h))));else{h=Array.from(this.g.values());for(let w=0;w<h.length;w++)g=g.concat(h[w])}return g},n.set=function(h,g){return $t(this),this.i=null,h=zn(this,h),ir(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[g]),this.h+=1,this},n.get=function(h,g){return h?(h=this.V(h),0<h.length?String(h[0]):g):g};function Bi(h,g,w){rr(h,g),0<w.length&&(h.i=null,h.g.set(zn(h,g),O(w)),h.h+=w.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],g=Array.from(this.g.keys());for(var w=0;w<g.length;w++){var I=g[w];const H=encodeURIComponent(String(I)),re=this.V(I);for(I=0;I<re.length;I++){var U=H;re[I]!==""&&(U+="="+encodeURIComponent(String(re[I]))),h.push(U)}}return this.i=h.join("&")};function zn(h,g){return g=String(g),h.j&&(g=g.toLowerCase()),g}function Ar(h,g){g&&!h.j&&($t(h),h.i=null,h.g.forEach(function(w,I){var U=I.toLowerCase();I!=U&&(rr(this,I),Bi(this,U,w))},h)),h.j=g}function Zf(h,g){const w=new Bs;if(c.Image){const I=new Image;I.onload=S(gn,w,"TestLoadImage: loaded",!0,g,I),I.onerror=S(gn,w,"TestLoadImage: error",!1,g,I),I.onabort=S(gn,w,"TestLoadImage: abort",!1,g,I),I.ontimeout=S(gn,w,"TestLoadImage: timeout",!1,g,I),c.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else g(!1)}function Wc(h,g){const w=new Bs,I=new AbortController,U=setTimeout(()=>{I.abort(),gn(w,"TestPingServer: timeout",!1,g)},1e4);fetch(h,{signal:I.signal}).then(H=>{clearTimeout(U),H.ok?gn(w,"TestPingServer: ok",!0,g):gn(w,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),gn(w,"TestPingServer: error",!1,g)})}function gn(h,g,w,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(w)}catch{}}function ep(){this.g=new Il}function Hc(h,g,w){const I=w||"";try{Li(h,function(U,H){let re=U;p(U)&&(re=El(U)),g.push(I+H+"="+encodeURIComponent(re))})}catch(U){throw g.push(I+"type="+encodeURIComponent("_badmap")),U}}function Pr(h){this.l=h.Ub||null,this.j=h.eb||!1}R(Pr,Fs),Pr.prototype.g=function(){return new Ks(this.l,this.j)},Pr.prototype.i=function(h){return function(){return h}}({});function Ks(h,g){Ct.call(this),this.D=h,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ks,Ct),n=Ks.prototype,n.open=function(h,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=g,this.readyState=1,or(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(g.body=h),(this.D||c).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,or(this)),this.g&&(this.readyState=3,or(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qc(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function qc(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var g=h.value?h.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!h.done}))&&(this.response=this.responseText+=g)}h.done?sr(this):or(this),this.readyState==3&&qc(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,sr(this))},n.Qa=function(h){this.g&&(this.response=h,sr(this))},n.ga=function(){this.g&&sr(this)};function sr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,or(h)}n.setRequestHeader=function(h,g){this.u.append(h,g)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],g=this.h.entries();for(var w=g.next();!w.done;)w=w.value,h.push(w[0]+": "+w[1]),w=g.next();return h.join(`\r
`)};function or(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Zr(h){let g="";return ie(h,function(w,I){g+=I,g+=":",g+=w,g+=`\r
`}),g}function zi(h,g,w){e:{for(I in w){var I=!1;break e}I=!0}I||(w=Zr(w),typeof h=="string"?w!=null&&encodeURIComponent(String(w)):Ge(h,g,w))}function it(h){Ct.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(it,Ct);var tp=/^https?$/i,Dl=["POST","PUT"];n=it.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,g,w,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);g=g?g.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tr.g(),this.v=this.o?Bo(this.o):Bo(tr),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(g,String(h),!0),this.B=!1}catch(H){Gs(this,H);return}if(h=w||"",w=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)w.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const H of I.keys())w.set(H,I.get(H));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(w.keys()).find(H=>H.toLowerCase()=="content-type"),U=c.FormData&&h instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Dl,g,void 0))||I||U||w.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of w)this.g.setRequestHeader(H,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jo(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){Gs(this,H)}};function Gs(h,g){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=g,h.m=5,Xo(h),kn(h)}function Xo(h){h.A||(h.A=!0,Rt(h,"complete"),Rt(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Rt(this,"complete"),Rt(this,"abort"),kn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kn(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ol(this):this.bb())},n.bb=function(){Ol(this)};function Ol(h){if(h.h&&typeof l<"u"&&(!h.v[1]||_n(h)!=4||h.Z()!=2)){if(h.u&&_n(h)==4)yl(h.Ea,0,h);else if(Rt(h,"readystatechange"),_n(h)==4){h.h=!1;try{const re=h.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var w;if(!(w=g)){var I;if(I=re===0){var U=String(h.D).match(Hs)[1]||null;!U&&c.self&&c.self.location&&(U=c.self.location.protocol.slice(0,-1)),I=!tp.test(U?U.toLowerCase():"")}w=I}if(w)Rt(h,"complete"),Rt(h,"success");else{h.m=6;try{var H=2<_n(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",Xo(h)}}finally{kn(h)}}}}function kn(h,g){if(h.g){Jo(h);const w=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,g||Rt(h,"ready");try{w.onreadystatechange=I}catch{}}}function Jo(h){h.I&&(c.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function _n(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var g=this.g.responseText;return h&&g.indexOf(h)==0&&(g=g.substring(h.length)),Tl(g)}};function Ll(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Zo(h){const g={};h=(h.g&&2<=_n(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(K(h[I]))continue;var w=M(h[I]);const U=w[0];if(w=w[1],typeof w!="string")continue;w=w.trim();const H=g[U]||[];g[U]=H,H.push(w)}b(g,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kr(h,g,w){return w&&w.internalChannelParams&&w.internalChannelParams[h]||g}function Ml(h){this.Aa=0,this.i=[],this.j=new Bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kr("baseRetryDelayMs",5e3,h),this.cb=kr("retryDelaySeedMs",1e4,h),this.Wa=kr("forwardChannelMaxRetries",2,h),this.wa=kr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Ws(h&&h.concurrentRequestLimit),this.Da=new ep,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ml.prototype,n.la=8,n.G=1,n.connect=function(h,g,w,I){_t(0),this.W=h,this.H=g||{},w&&I!==void 0&&(this.H.OSID=w,this.H.OAID=I),this.F=this.X,this.I=Yc(this,null,this.W),Nr(this)};function Wt(h){if(ea(h),h.G==3){var g=h.U++,w=Pn(h.I);if(Ge(w,"SID",h.K),Ge(w,"RID",g),Ge(w,"TYPE","terminate"),ei(h,w),g=new nr(h,h.j,g),g.L=2,g.v=Fi(Pn(w)),w=!1,c.navigator&&c.navigator.sendBeacon)try{w=c.navigator.sendBeacon(g.v.toString(),"")}catch{}!w&&c.Image&&(new Image().src=g.v,w=!0),w||(g.g=Xc(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Je(g)}Qc(h)}function ar(h){h.g&&(Vl(h),h.g.cancel(),h.g=null)}function ea(h){ar(h),h.u&&(c.clearTimeout(h.u),h.u=null),ra(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&c.clearTimeout(h.s),h.s=null)}function Nr(h){if(!An(h.h)&&!h.s){h.s=!0;var g=h.Ga;Ke||le(),se||(Ke(),se=!0),_e.add(g,h),h.B=0}}function np(h,g){return Vc(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=g.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Zn(E(h.Ga,h,g),Gc(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new nr(this,this.j,h);let H=this.o;if(this.S&&(H?(H=C(H),D(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var g=0,w=0;w<this.i.length;w++){t:{var I=this.i[w];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(g+=I,4096<g){g=w;break e}if(g===4096||w===this.i.length-1){g=w+1;break e}}g=1e3}else g=1e3;g=ji(this,U,g),w=Pn(this.I),Ge(w,"RID",h),Ge(w,"CVER",22),this.D&&Ge(w,"X-HTTP-Session-Id",this.D),ei(this,w),H&&(this.O?g="headers="+encodeURIComponent(String(Zr(H)))+"&"+g:this.m&&zi(w,this.m,H)),bl(this.h,U),this.Ua&&Ge(w,"TYPE","init"),this.P?(Ge(w,"$req",g),Ge(w,"SID","null"),U.T=!0,Ko(U,w,null)):Ko(U,w,g),this.G=2}}else this.G==3&&(h?ta(this,h):this.i.length==0||An(this.h)||ta(this))};function ta(h,g){var w;g?w=g.l:w=h.U++;const I=Pn(h.I);Ge(I,"SID",h.K),Ge(I,"RID",w),Ge(I,"AID",h.T),ei(h,I),h.m&&h.o&&zi(I,h.m,h.o),w=new nr(h,h.j,w,h.B+1),h.m===null&&(w.H=h.o),g&&(h.i=g.D.concat(h.i)),g=ji(h,w,1e3),w.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),bl(h.h,w),Ko(w,I,g)}function ei(h,g){h.H&&ie(h.H,function(w,I){Ge(g,I,w)}),h.l&&Li({},function(w,I){Ge(g,I,w)})}function ji(h,g,w){w=Math.min(h.i.length,w);var I=h.l?E(h.l.Na,h.l,h):null;e:{var U=h.i;let H=-1;for(;;){const re=["count="+w];H==-1?0<w?(H=U[0].g,re.push("ofs="+H)):H=0:re.push("ofs="+H);let qe=!0;for(let At=0;At<w;At++){let Me=U[At].g;const Ot=U[At].map;if(Me-=H,0>Me)H=Math.max(0,U[At].g-100),qe=!1;else try{Hc(Ot,re,"req"+Me+"_")}catch{I&&I(Ot)}}if(qe){I=re.join("&");break e}}}return h=h.i.splice(0,w),g.D=h,I}function Qs(h){if(!h.g&&!h.u){h.Y=1;var g=h.Fa;Ke||le(),se||(Ke(),se=!0),_e.add(g,h),h.v=0}}function na(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Zn(E(h.Fa,h),Gc(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Kc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Zn(E(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),ar(this),Kc(this))};function Vl(h){h.A!=null&&(c.clearTimeout(h.A),h.A=null)}function Kc(h){h.g=new nr(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var g=Pn(h.qa);Ge(g,"RID","rpc"),Ge(g,"SID",h.K),Ge(g,"AID",h.T),Ge(g,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ge(g,"TO",h.ja),Ge(g,"TYPE","xmlhttp"),ei(h,g),h.m&&h.o&&zi(g,h.m,h.o),h.L&&(h.g.I=h.L);var w=h.g;h=h.ia,w.L=1,w.v=Fi(Pn(g)),w.m=null,w.P=!0,kl(w,h)}n.Za=function(){this.C!=null&&(this.C=null,ar(this),na(this),_t(19))};function ra(h){h.C!=null&&(c.clearTimeout(h.C),h.C=null)}function ia(h,g){var w=null;if(h.g==g){ra(h),Vl(h),h.g=null;var I=2}else if(ln(h.h,g))w=g.D,Fc(h.h,g),I=1;else return;if(h.G!=0){if(g.o)if(I==1){w=g.m?g.m.length:0,g=Date.now()-g.F;var U=h.B;I=Us(),Rt(I,new $o(I,w)),Nr(h)}else Qs(h);else if(U=g.s,U==3||U==0&&0<g.X||!(I==1&&np(h,g)||I==2&&na(h)))switch(w&&0<w.length&&(g=h.h,g.i=g.i.concat(w)),U){case 1:ti(h,5);break;case 4:ti(h,10);break;case 3:ti(h,6);break;default:ti(h,2)}}}function Gc(h,g){let w=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(w*=2),w*g}function ti(h,g){if(h.j.info("Error code "+g),g==2){var w=E(h.fb,h),I=h.Xa;const U=!I;I=new Jr(I||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||qs(I,"https"),Fi(I),U?Zf(I.toString(),w):Wc(I.toString(),w)}else _t(2);h.G=0,h.l&&h.l.sa(g),Qc(h),ea(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Qc(h){if(h.G=0,h.ka=[],h.l){const g=Uc(h.h);(g.length!=0||h.i.length!=0)&&(A(h.ka,g),A(h.ka,h.i),h.h.i.length=0,O(h.i),h.i.length=0),h.l.ra()}}function Yc(h,g,w){var I=w instanceof Jr?Pn(w):new Jr(w);if(I.g!="")g&&(I.g=g+"."+I.g),Mi(I,I.s);else{var U=c.location;I=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var H=new Jr(null);I&&qs(H,I),g&&(H.g=g),U&&Mi(H,U),w&&(H.l=w),I=H}return w=h.D,g=h.ya,w&&g&&Ge(I,w,g),Ge(I,"VER",h.la),ei(h,I),I}function Xc(h,g,w){if(g&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=h.Ca&&!h.pa?new it(new Pr({eb:w})):new it(h.pa),g.Ha(h.J),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fl(){}n=Fl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function sa(){}sa.prototype.g=function(h,g){return new un(h,g)};function un(h,g){Ct.call(this),this.g=new Ml(g),this.l=h,this.h=g&&g.messageUrlParams||null,h=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(h?h["X-WebChannel-Content-Type"]=g.messageContentType:h={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(h?h["X-WebChannel-Client-Profile"]=g.va:h={"X-WebChannel-Client-Profile":g.va}),this.g.S=h,(h=g&&g.Sb)&&!K(h)&&(this.g.m=h),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!K(g)&&(this.g.D=g,h=this.h,h!==null&&g in h&&(h=this.h,g in h&&delete h[g])),this.j=new br(this)}R(un,Ct),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){Wt(this.g)},un.prototype.o=function(h){var g=this.g;if(typeof h=="string"){var w={};w.__data__=h,h=w}else this.u&&(w={},w.__data__=El(h),h=w);g.i.push(new Mc(g.Ya++,h)),g.G==3&&Nr(g)},un.prototype.N=function(){this.g.l=null,delete this.j,Wt(this.g),delete this.g,un.aa.N.call(this)};function Jc(h){Sr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var g=h.__sm__;if(g){e:{for(const w in g){h=w;break e}h=void 0}(this.i=h)&&(h=this.i,g=g!==null&&h in g?g[h]:void 0),this.data=g}else this.data=h}R(Jc,Sr);function Zc(){jo.call(this),this.status=1}R(Zc,jo);function br(h){this.g=h}R(br,Fl),br.prototype.ua=function(){Rt(this.g,"a")},br.prototype.ta=function(h){Rt(this.g,new Jc(h))},br.prototype.sa=function(h){Rt(this.g,new Zc)},br.prototype.ra=function(){Rt(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,FI=function(){return new sa},VI=function(){return Us()},MI=Cr,vg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,ud=Ho,xc.COMPLETE="complete",LI=xc,zo.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,vu=zo,OI=Pr,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,DI=it}).apply(typeof Gh<"u"?Gh:typeof self<"u"?self:typeof window<"u"?window:{});const H0="@firebase/firestore";/**
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
 */class sn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
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
 */let nl="10.13.0";/**
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
 */const wo=new hf("@firebase/firestore");function hu(){return wo.logLevel}function fe(n,...e){if(wo.logLevel<=xe.DEBUG){const t=e.map(__);wo.debug(`Firestore (${nl}): ${n}`,...t)}}function Ri(n,...e){if(wo.logLevel<=xe.ERROR){const t=e.map(__);wo.error(`Firestore (${nl}): ${n}`,...t)}}function Ba(n,...e){if(wo.logLevel<=xe.WARN){const t=e.map(__);wo.warn(`Firestore (${nl}): ${n}`,...t)}}function __(n){if(typeof n=="string")return n;try{/**
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
 */function Ie(n="Unexpected state"){const e=`FIRESTORE (${nl}) INTERNAL ASSERTION FAILED: `+n;throw Ri(e),new Error(e)}function Ye(n,e){n||Ie()}function Ce(n,e){return n}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Hr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class UI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(sn.UNAUTHENTICATED))}shutdown(){}}class Jb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Zb{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let a=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new vi,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},c=f=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new vi)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ye(typeof r.accessToken=="string"),new UI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new sn(e)}}class ex{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tx{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ex(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(sn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=a=>{a.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,fe("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const i=a=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?i(a):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string"),this.R=t.token,new nx(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ix(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class BI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ix(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%e.length))}return r}}function Be(n,e){return n<e?-1:n>e?1:0}function za(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class xt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ce(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xt.fromMillis(Date.now())}static fromDate(e){return xt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new xt(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Se(e)}static min(){return new Se(new xt(0,0))}static max(){return new Se(new xt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fu{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ie(),r===void 0?r=e.length-t:r>e.length-t&&Ie(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Fu.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fu?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=e.get(i),l=t.get(i);if(a<l)return-1;if(a>l)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class rt extends Fu{construct(e,t,r){return new rt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(Y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new rt(t)}static emptyPath(){return new rt([])}}const sx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends Fu{construct(e,t,r){return new Gt(e,t,r)}static isValidIdentifier(e){return sx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Gt(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new ce(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new ce(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ce(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(r+=c,i++):(a(),i++)}if(a(),l)throw new ce(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(t)}static emptyPath(){return new Gt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(rt.fromString(e))}static fromName(e){return new ge(rt.fromString(e).popFirst(5))}static empty(){return new ge(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new rt(e.slice()))}}function ox(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Se.fromTimestamp(r===1e9?new xt(t+1,0):new xt(t,r));return new vs(i,ge.empty(),e)}function ax(n){return new vs(n.readTime,n.key,-1)}class vs{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new vs(Se.min(),ge.empty(),-1)}static max(){return new vs(Se.max(),ge.empty(),-1)}}function lx(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(n.documentKey,e.documentKey),t!==0?t:Be(n.largestBatchId,e.largestBatchId))}/**
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
 */const ux="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function hc(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==ux)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,r)=>{t(e)})}static reject(e){return new Z((t,r)=>{r(e)})}static waitFor(e){return new Z((t,r)=>{let i=0,a=0,l=!1;e.forEach(c=>{++i,c.next(()=>{++a,l&&a===i&&t()},f=>r(f))}),l=!0,a===i&&t()})}static or(e){let t=Z.resolve(!1);for(const r of e)t=t.next(i=>i?Z.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,a)=>{r.push(t.call(this,i,a))}),this.waitFor(r)}static mapArray(e,t){return new Z((r,i)=>{const a=e.length,l=new Array(a);let c=0;for(let f=0;f<a;f++){const p=f;t(e[p]).next(y=>{l[p]=y,++c,c===a&&r(l)},y=>i(y))}})}static doWhile(e,t){return new Z((r,i)=>{const a=()=>{e()===!0?t().next(()=>{a()},i):r()};a()})}}function hx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function dc(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class y_{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}y_.oe=-1;function ff(n){return n==null}function Rd(n){return n===0&&1/n==-1/0}function dx(n){return typeof n=="number"&&Number.isInteger(n)&&!Rd(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function q0(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function zI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let St=class wg{constructor(e,t){this.comparator=e,this.root=t||ds.EMPTY}insert(e,t){return new wg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ds.BLACK,null,null))}remove(e){return new wg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ds.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qh(this.root,e,this.comparator,!0)}},Qh=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ds=class hi{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??hi.RED,this.left=i??hi.EMPTY,this.right=a??hi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new hi(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return hi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return hi.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,hi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,hi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}};ds.EMPTY=null,ds.RED=!0,ds.BLACK=!1;ds.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,t,r,i,a){return this}insert(e,t,r){return new ds(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qt{constructor(e){this.comparator=e,this.data=new St(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new K0(this.data.getIterator())}getIteratorFrom(e){return new K0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Qt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Qt(this.comparator);return t.data=e,t}}class K0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ln{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new Ln([])}unionWith(e){let t=new Qt(Gt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return za(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class jI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new jI("Invalid base64 string: "+a):a}}(e);return new Yt(t)}static fromUint8Array(e){const t=function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a}(e);return new Yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const fx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ws(n){if(Ye(!!n),typeof n=="string"){let e=0;const t=fx.exec(n);if(Ye(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:vt(n.seconds),nanos:vt(n.nanos)}}function vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Eo(n){return typeof n=="string"?Yt.fromBase64String(n):Yt.fromUint8Array(n)}/**
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
 */function v_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function w_(n){const e=n.mapValue.fields.__previous_value__;return v_(e)?w_(e):e}function Uu(n){const e=ws(n.mapValue.fields.__local_write_time__.timestampValue);return new xt(e.seconds,e.nanos)}/**
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
 */class px{constructor(e,t,r,i,a,l,c,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=p}}class Bu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Bu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Yh={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function To(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?v_(n)?4:gx(n)?9007199254740991:mx(n)?10:11:Ie()}function jr(n,e){if(n===e)return!0;const t=To(n);if(t!==To(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Uu(n).isEqual(Uu(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=ws(i.timestampValue),c=ws(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return Eo(i.bytesValue).isEqual(Eo(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return vt(i.geoPointValue.latitude)===vt(a.geoPointValue.latitude)&&vt(i.geoPointValue.longitude)===vt(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a){if("integerValue"in i&&"integerValue"in a)return vt(i.integerValue)===vt(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const l=vt(i.doubleValue),c=vt(a.doubleValue);return l===c?Rd(l)===Rd(c):isNaN(l)&&isNaN(c)}return!1}(n,e);case 9:return za(n.arrayValue.values||[],e.arrayValue.values||[],jr);case 10:case 11:return function(i,a){const l=i.mapValue.fields||{},c=a.mapValue.fields||{};if(q0(l)!==q0(c))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(c[f]===void 0||!jr(l[f],c[f])))return!1;return!0}(n,e);default:return Ie()}}function zu(n,e){return(n.values||[]).find(t=>jr(t,e))!==void 0}function ja(n,e){if(n===e)return 0;const t=To(n),r=To(e);if(t!==r)return Be(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(n.booleanValue,e.booleanValue);case 2:return function(a,l){const c=vt(a.integerValue||a.doubleValue),f=vt(l.integerValue||l.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,e);case 3:return G0(n.timestampValue,e.timestampValue);case 4:return G0(Uu(n),Uu(e));case 5:return Be(n.stringValue,e.stringValue);case 6:return function(a,l){const c=Eo(a),f=Eo(l);return c.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(a,l){const c=a.split("/"),f=l.split("/");for(let p=0;p<c.length&&p<f.length;p++){const y=Be(c[p],f[p]);if(y!==0)return y}return Be(c.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(a,l){const c=Be(vt(a.latitude),vt(l.latitude));return c!==0?c:Be(vt(a.longitude),vt(l.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Q0(n.arrayValue,e.arrayValue);case 10:return function(a,l){var c,f,p,y;const v=a.fields||{},E=l.fields||{},S=(c=v.value)===null||c===void 0?void 0:c.arrayValue,R=(f=E.value)===null||f===void 0?void 0:f.arrayValue,O=Be(((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0,((y=R==null?void 0:R.values)===null||y===void 0?void 0:y.length)||0);return O!==0?O:Q0(S,R)}(n.mapValue,e.mapValue);case 11:return function(a,l){if(a===Yh.mapValue&&l===Yh.mapValue)return 0;if(a===Yh.mapValue)return 1;if(l===Yh.mapValue)return-1;const c=a.fields||{},f=Object.keys(c),p=l.fields||{},y=Object.keys(p);f.sort(),y.sort();for(let v=0;v<f.length&&v<y.length;++v){const E=Be(f[v],y[v]);if(E!==0)return E;const S=ja(c[f[v]],p[y[v]]);if(S!==0)return S}return Be(f.length,y.length)}(n.mapValue,e.mapValue);default:throw Ie()}}function G0(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Be(n,e);const t=ws(n),r=ws(e),i=Be(t.seconds,r.seconds);return i!==0?i:Be(t.nanos,r.nanos)}function Q0(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=ja(t[i],r[i]);if(a)return a}return Be(t.length,r.length)}function $a(n){return Eg(n)}function Eg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ws(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Eo(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ge.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=Eg(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const l of r)a?a=!1:i+=",",i+=`${l}:${Eg(t.fields[l])}`;return i+"}"}(n.mapValue):Ie()}function Y0(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Tg(n){return!!n&&"integerValue"in n}function E_(n){return!!n&&"arrayValue"in n}function X0(n){return!!n&&"nullValue"in n}function J0(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cd(n){return!!n&&"mapValue"in n}function mx(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Su(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bo(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Su(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Su(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!cd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Su(t)}setAll(e){let t=Gt.emptyPath(),r={},i=[];e.forEach((l,c)=>{if(!t.isImmediateParentOf(c)){const f=this.getFieldsMap(t);this.applyChanges(f,r,i),r={},i=[],t=c.popLast()}l?r[c.lastSegment()]=Su(l):i.push(c.lastSegment())});const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());cd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];cd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){bo(t,(i,a)=>e[i]=a);for(const i of r)delete e[i]}clone(){return new Sn(Su(this.value))}}function $I(n){const e=[];return bo(n.fields,(t,r)=>{const i=new Gt([t]);if(cd(r)){const a=$I(r.mapValue).fields;if(a.length===0)e.push(i);else for(const l of a)e.push(i.child(l))}else e.push(i)}),new Ln(e)}/**
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
 */class on{constructor(e,t,r,i,a,l,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=l,this.documentState=c}static newInvalidDocument(e){return new on(e,0,Se.min(),Se.min(),Se.min(),Sn.empty(),0)}static newFoundDocument(e,t,r,i){return new on(e,1,t,Se.min(),r,i,0)}static newNoDocument(e,t){return new on(e,2,t,Se.min(),Se.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new on(e,3,t,Se.min(),Se.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof on&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ad{constructor(e,t){this.position=e,this.inclusive=t}}function Z0(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],l=n.position[i];if(a.field.isKeyField()?r=ge.comparator(ge.fromName(l.referenceValue),t.key):r=ja(l,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function eE(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!jr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Pd{constructor(e,t="asc"){this.field=e,this.dir=t}}function _x(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class WI{}class It extends WI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new vx(e,t,r):t==="array-contains"?new Tx(e,r):t==="in"?new Ix(e,r):t==="not-in"?new Sx(e,r):t==="array-contains-any"?new Cx(e,r):new It(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new wx(e,r):new Ex(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ja(t,this.value)):t!==null&&To(this.value)===To(t)&&this.matchesComparison(ja(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tr extends WI{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Tr(e,t)}matches(e){return HI(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function HI(n){return n.op==="and"}function qI(n){return yx(n)&&HI(n)}function yx(n){for(const e of n.filters)if(e instanceof Tr)return!1;return!0}function Ig(n){if(n instanceof It)return n.field.canonicalString()+n.op.toString()+$a(n.value);if(qI(n))return n.filters.map(e=>Ig(e)).join(",");{const e=n.filters.map(t=>Ig(t)).join(",");return`${n.op}(${e})`}}function KI(n,e){return n instanceof It?function(r,i){return i instanceof It&&r.op===i.op&&r.field.isEqual(i.field)&&jr(r.value,i.value)}(n,e):n instanceof Tr?function(r,i){return i instanceof Tr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((a,l,c)=>a&&KI(l,i.filters[c]),!0):!1}(n,e):void Ie()}function GI(n){return n instanceof It?function(t){return`${t.field.canonicalString()} ${t.op} ${$a(t.value)}`}(n):n instanceof Tr?function(t){return t.op.toString()+" {"+t.getFilters().map(GI).join(" ,")+"}"}(n):"Filter"}class vx extends It{constructor(e,t,r){super(e,t,r),this.key=ge.fromName(r.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class wx extends It{constructor(e,t){super(e,"in",t),this.keys=QI("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ex extends It{constructor(e,t){super(e,"not-in",t),this.keys=QI("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function QI(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ge.fromName(r.referenceValue))}class Tx extends It{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return E_(t)&&zu(t.arrayValue,this.value)}}class Ix extends It{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zu(this.value.arrayValue,t)}}class Sx extends It{constructor(e,t){super(e,"not-in",t)}matches(e){if(zu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zu(this.value.arrayValue,t)}}class Cx extends It{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!E_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zu(this.value.arrayValue,r))}}/**
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
 */class Rx{constructor(e,t=null,r=[],i=[],a=null,l=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=l,this.endAt=c,this.ue=null}}function tE(n,e=null,t=[],r=[],i=null,a=null,l=null){return new Rx(n,e,t,r,i,a,l)}function T_(n){const e=Ce(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ig(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),ff(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>$a(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>$a(r)).join(",")),e.ue=t}return e.ue}function I_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_x(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!KI(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!eE(n.startAt,e.startAt)&&eE(n.endAt,e.endAt)}function Sg(n){return ge.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class fc{constructor(e,t=null,r=[],i=[],a=null,l="F",c=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=l,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ax(n,e,t,r,i,a,l,c){return new fc(n,e,t,r,i,a,l,c)}function S_(n){return new fc(n)}function nE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function YI(n){return n.collectionGroup!==null}function Cu(n){const e=Ce(n);if(e.ce===null){e.ce=[];const t=new Set;for(const a of e.explicitOrderBy)e.ce.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Qt(Gt.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(e).forEach(a=>{t.has(a.canonicalString())||a.isKeyField()||e.ce.push(new Pd(a,r))}),t.has(Gt.keyField().canonicalString())||e.ce.push(new Pd(Gt.keyField(),r))}return e.ce}function Ur(n){const e=Ce(n);return e.le||(e.le=Px(e,Cu(n))),e.le}function Px(n,e){if(n.limitType==="F")return tE(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const a=i.dir==="desc"?"asc":"desc";return new Pd(i.field,a)});const t=n.endAt?new Ad(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ad(n.startAt.position,n.startAt.inclusive):null;return tE(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cg(n,e){const t=n.filters.concat([e]);return new fc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Rg(n,e,t){return new fc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function pf(n,e){return I_(Ur(n),Ur(e))&&n.limitType===e.limitType}function XI(n){return`${T_(Ur(n))}|lt:${n.limitType}`}function Pa(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>GI(i)).join(", ")}]`),ff(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>$a(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>$a(i)).join(",")),`Target(${r})`}(Ur(n))}; limitType=${n.limitType})`}function mf(n,e){return e.isFoundDocument()&&function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ge.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,e)&&function(r,i){for(const a of Cu(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(l,c,f){const p=Z0(l,c,f);return l.inclusive?p<=0:p<0}(r.startAt,Cu(r),i)||r.endAt&&!function(l,c,f){const p=Z0(l,c,f);return l.inclusive?p>=0:p>0}(r.endAt,Cu(r),i))}(n,e)}function kx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function JI(n){return(e,t)=>{let r=!1;for(const i of Cu(n)){const a=Nx(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function Nx(n,e,t){const r=n.field.isKeyField()?ge.comparator(e.key,t.key):function(a,l,c){const f=l.data.field(a),p=c.data.field(a);return f!==null&&p!==null?ja(f,p):Ie()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ie()}}/**
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
 */class rl{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bo(this.inner,(t,r)=>{for(const[i,a]of r)e(i,a)})}isEmpty(){return zI(this.inner)}size(){return this.innerSize}}/**
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
 */const bx=new St(ge.comparator);function Ai(){return bx}const ZI=new St(ge.comparator);function wu(...n){let e=ZI;for(const t of n)e=e.insert(t.key,t);return e}function eS(n){let e=ZI;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function fo(){return Ru()}function tS(){return Ru()}function Ru(){return new rl(n=>n.toString(),(n,e)=>n.isEqual(e))}const xx=new St(ge.comparator),Dx=new Qt(ge.comparator);function De(...n){let e=Dx;for(const t of n)e=e.add(t);return e}const Ox=new Qt(Be);function Lx(){return Ox}/**
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
 */function C_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rd(e)?"-0":e}}function nS(n){return{integerValue:""+n}}function Mx(n,e){return dx(e)?nS(e):C_(n,e)}/**
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
 */class gf{constructor(){this._=void 0}}function Vx(n,e,t){return n instanceof ju?function(i,a){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&v_(a)&&(a=w_(a)),a&&(l.fields.__previous_value__=a),{mapValue:l}}(t,e):n instanceof $u?iS(n,e):n instanceof Wu?sS(n,e):function(i,a){const l=rS(i,a),c=rE(l)+rE(i.Pe);return Tg(l)&&Tg(i.Pe)?nS(c):C_(i.serializer,c)}(n,e)}function Fx(n,e,t){return n instanceof $u?iS(n,e):n instanceof Wu?sS(n,e):t}function rS(n,e){return n instanceof kd?function(r){return Tg(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class ju extends gf{}class $u extends gf{constructor(e){super(),this.elements=e}}function iS(n,e){const t=oS(e);for(const r of n.elements)t.some(i=>jr(i,r))||t.push(r);return{arrayValue:{values:t}}}class Wu extends gf{constructor(e){super(),this.elements=e}}function sS(n,e){let t=oS(e);for(const r of n.elements)t=t.filter(i=>!jr(i,r));return{arrayValue:{values:t}}}class kd extends gf{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function rE(n){return vt(n.integerValue||n.doubleValue)}function oS(n){return E_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ux{constructor(e,t){this.field=e,this.transform=t}}function Bx(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof $u&&i instanceof $u||r instanceof Wu&&i instanceof Wu?za(r.elements,i.elements,jr):r instanceof kd&&i instanceof kd?jr(r.Pe,i.Pe):r instanceof ju&&i instanceof ju}(n.transform,e.transform)}class zx{constructor(e,t){this.version=e,this.transformResults=t}}class vr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _f{}function aS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new R_(n.key,vr.none()):new pc(n.key,n.data,vr.none());{const t=n.data,r=Sn.empty();let i=new Qt(Gt.comparator);for(let a of e.fields)if(!i.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?r.delete(a):r.set(a,l),i=i.add(a)}return new bs(n.key,r,new Ln(i.toArray()),vr.none())}}function jx(n,e,t){n instanceof pc?function(i,a,l){const c=i.value.clone(),f=sE(i.fieldTransforms,a,l.transformResults);c.setAll(f),a.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,e,t):n instanceof bs?function(i,a,l){if(!hd(i.precondition,a))return void a.convertToUnknownDocument(l.version);const c=sE(i.fieldTransforms,a,l.transformResults),f=a.data;f.setAll(lS(i)),f.setAll(c),a.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(n,e,t):function(i,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function Au(n,e,t,r){return n instanceof pc?function(a,l,c,f){if(!hd(a.precondition,l))return c;const p=a.value.clone(),y=oE(a.fieldTransforms,f,l);return p.setAll(y),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof bs?function(a,l,c,f){if(!hd(a.precondition,l))return c;const p=oE(a.fieldTransforms,f,l),y=l.data;return y.setAll(lS(a)),y.setAll(p),l.convertToFoundDocument(l.version,y).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(a,l,c){return hd(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,e,t)}function $x(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=rS(r.transform,i||null);a!=null&&(t===null&&(t=Sn.empty()),t.set(r.field,a))}return t||null}function iE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&za(r,i,(a,l)=>Bx(a,l))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class pc extends _f{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bs extends _f{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function lS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function sE(n,e,t){const r=new Map;Ye(n.length===t.length);for(let i=0;i<t.length;i++){const a=n[i],l=a.transform,c=e.data.field(a.field);r.set(a.field,Fx(l,c,t[i]))}return r}function oE(n,e,t){const r=new Map;for(const i of n){const a=i.transform,l=t.data.field(i.field);r.set(i.field,Vx(a,l,e))}return r}class R_ extends _f{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wx extends _f{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Hx{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&jx(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Au(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Au(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=tS();return this.mutations.forEach(i=>{const a=e.get(i.key),l=a.overlayedDocument;let c=this.applyToLocalView(l,a.mutatedFields);c=t.has(i.key)?null:c;const f=aS(l,c);f!==null&&r.set(i.key,f),l.isValidDocument()||l.convertToNoDocument(Se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),De())}isEqual(e){return this.batchId===e.batchId&&za(this.mutations,e.mutations,(t,r)=>iE(t,r))&&za(this.baseMutations,e.baseMutations,(t,r)=>iE(t,r))}}class A_{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ye(e.mutations.length===r.length);let i=function(){return xx}();const a=e.mutations;for(let l=0;l<a.length;l++)i=i.insert(a[l].key,r[l].version);return new A_(e,t,r,i)}}/**
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
 */class qx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Tt,Ve;function Gx(n){switch(n){default:return Ie();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function uS(n){if(n===void 0)return Ri("GRPC error has no .code"),Y.UNKNOWN;switch(n){case Tt.OK:return Y.OK;case Tt.CANCELLED:return Y.CANCELLED;case Tt.UNKNOWN:return Y.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return Y.INTERNAL;case Tt.UNAVAILABLE:return Y.UNAVAILABLE;case Tt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case Tt.NOT_FOUND:return Y.NOT_FOUND;case Tt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case Tt.ABORTED:return Y.ABORTED;case Tt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case Tt.DATA_LOSS:return Y.DATA_LOSS;default:return Ie()}}(Ve=Tt||(Tt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Qx(){return new TextEncoder}/**
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
 */const Yx=new go([4294967295,4294967295],0);function aE(n){const e=Qx().encode(n),t=new xI;return t.update(e),new Uint8Array(t.digest())}function lE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new go([t,r],0),new go([i,a],0)]}class P_{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Eu(`Invalid padding: ${t}`);if(r<0)throw new Eu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Eu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Eu(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=go.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(go.fromNumber(r)));return i.compare(Yx)===1&&(i=new go([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=aE(e),[r,i]=lE(t);for(let a=0;a<this.hashCount;a++){const l=this.Ee(r,i,a);if(!this.de(l))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new P_(a,i,t);return r.forEach(c=>l.insert(c)),l}insert(e){if(this.Ie===0)return;const t=aE(e),[r,i]=lE(t);for(let a=0;a<this.hashCount;a++){const l=this.Ee(r,i,a);this.Ae(l)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Eu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yf{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,mc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yf(Se.min(),i,new St(Be),Ai(),De())}}class mc{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new mc(r,t,De(),De(),De())}}/**
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
 */class dd{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class cS{constructor(e,t){this.targetId=e,this.me=t}}class hS{constructor(e,t,r=Yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class uE{constructor(){this.fe=0,this.ge=hE(),this.pe=Yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=De(),t=De(),r=De();return this.ge.forEach((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Ie()}}),new mc(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=hE()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ye(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Xx{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ai(),this.qe=cE(),this.Qe=new St(Be)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Ie()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const a=i.target;if(Sg(a))if(r===0){const l=new ge(a.path);this.Ue(t,l,on.newNoDocument(l,Se.min()))}else Ye(r===1);else{const l=this.Ye(t);if(l!==r){const c=this.Ze(e),f=c?this.Xe(c,e,l):1;if(f!==0){this.je(t);const p=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,p)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let l,c;try{l=Eo(r).toUint8Array()}catch(f){if(f instanceof jI)return Ba("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{c=new P_(l,i,a)}catch(f){return Ba(f instanceof Eu?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(a=>{const l=this.Le.tt(),c=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,a,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((a,l)=>{const c=this.Je(l);if(c){if(a.current&&Sg(c.target)){const f=new ge(c.target.path);this.ke.get(f)!==null||this.it(l,f)||this.Ue(l,f,on.newNoDocument(f,e))}a.be&&(t.set(l,a.ve()),a.Ce())}});let r=De();this.qe.forEach((a,l)=>{let c=!0;l.forEachWhile(f=>{const p=this.Je(f);return!p||p.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(a))}),this.ke.forEach((a,l)=>l.setReadTime(e));const i=new yf(e,t,this.Qe,this.ke,r);return this.ke=Ai(),this.qe=cE(),this.Qe=new St(Be),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new uE,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Qt(Be),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new uE),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function cE(){return new St(ge.comparator)}function hE(){return new St(ge.comparator)}const Jx={asc:"ASCENDING",desc:"DESCENDING"},Zx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eD={and:"AND",or:"OR"};class tD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ag(n,e){return n.useProto3Json||ff(e)?e:{value:e}}function Nd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function nD(n,e){return Nd(n,e.toTimestamp())}function Br(n){return Ye(!!n),Se.fromTimestamp(function(t){const r=ws(t);return new xt(r.seconds,r.nanos)}(n))}function k_(n,e){return Pg(n,e).canonicalString()}function Pg(n,e){const t=function(i){return new rt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function fS(n){const e=rt.fromString(n);return Ye(yS(e)),e}function kg(n,e){return k_(n.databaseId,e.path)}function Um(n,e){const t=fS(e);if(t.get(1)!==n.databaseId.projectId)throw new ce(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ce(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ge(mS(t))}function pS(n,e){return k_(n.databaseId,e)}function rD(n){const e=fS(n);return e.length===4?rt.emptyPath():mS(e)}function Ng(n){return new rt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mS(n){return Ye(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function dE(n,e,t){return{name:kg(n,e),fields:t.value.mapValue.fields}}function iD(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Ie()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=function(p,y){return p.useProto3Json?(Ye(y===void 0||typeof y=="string"),Yt.fromBase64String(y||"")):(Ye(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Yt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&function(p){const y=p.code===void 0?Y.UNKNOWN:uS(p.code);return new ce(y,p.message||"")}(l);t=new hS(r,i,a,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Um(n,r.document.name),a=Br(r.document.updateTime),l=r.document.createTime?Br(r.document.createTime):Se.min(),c=new Sn({mapValue:{fields:r.document.fields}}),f=on.newFoundDocument(i,a,l,c),p=r.targetIds||[],y=r.removedTargetIds||[];t=new dd(p,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Um(n,r.document),a=r.readTime?Br(r.readTime):Se.min(),l=on.newNoDocument(i,a),c=r.removedTargetIds||[];t=new dd([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Um(n,r.document),a=r.removedTargetIds||[];t=new dd([],a,i,null)}else{if(!("filter"in e))return Ie();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,l=new Kx(i,a),c=r.targetId;t=new cS(c,l)}}return t}function sD(n,e){let t;if(e instanceof pc)t={update:dE(n,e.key,e.value)};else if(e instanceof R_)t={delete:kg(n,e.key)};else if(e instanceof bs)t={update:dE(n,e.key,e.data),updateMask:pD(e.fieldMask)};else{if(!(e instanceof Wx))return Ie();t={verify:kg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(a,l){const c=l.transform;if(c instanceof ju)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof $u)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Wu)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof kd)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw Ie()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,a){return a.updateTime!==void 0?{updateTime:nD(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ie()}(n,e.precondition)),t}function oD(n,e){return n&&n.length>0?(Ye(e!==void 0),n.map(t=>function(i,a){let l=i.updateTime?Br(i.updateTime):Br(a);return l.isEqual(Se.min())&&(l=Br(a)),new zx(l,i.transformResults||[])}(t,e))):[]}function aD(n,e){return{documents:[pS(n,e.path)]}}function lD(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=pS(n,i);const a=function(p){if(p.length!==0)return _S(Tr.create(p,"and"))}(e.filters);a&&(t.structuredQuery.where=a);const l=function(p){if(p.length!==0)return p.map(y=>function(E){return{field:ka(E.field),direction:hD(E.dir)}}(y))}(e.orderBy);l&&(t.structuredQuery.orderBy=l);const c=Ag(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{_t:t,parent:i}}function uD(n){let e=rD(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ye(r===1);const y=t.from[0];y.allDescendants?i=y.collectionId:e=e.child(y.collectionId)}let a=[];t.where&&(a=function(v){const E=gS(v);return E instanceof Tr&&qI(E)?E.getFilters():[E]}(t.where));let l=[];t.orderBy&&(l=function(v){return v.map(E=>function(R){return new Pd(Na(R.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(v){let E;return E=typeof v=="object"?v.value:v,ff(E)?null:E}(t.limit));let f=null;t.startAt&&(f=function(v){const E=!!v.before,S=v.values||[];return new Ad(S,E)}(t.startAt));let p=null;return t.endAt&&(p=function(v){const E=!v.before,S=v.values||[];return new Ad(S,E)}(t.endAt)),Ax(e,i,l,a,c,"F",f,p)}function cD(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Na(t.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Na(t.unaryFilter.field);return It.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Na(t.unaryFilter.field);return It.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Na(t.unaryFilter.field);return It.create(l,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(n):n.fieldFilter!==void 0?function(t){return It.create(Na(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Tr.create(t.compositeFilter.filters.map(r=>gS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ie()}}(t.compositeFilter.op))}(n):Ie()}function hD(n){return Jx[n]}function dD(n){return Zx[n]}function fD(n){return eD[n]}function ka(n){return{fieldPath:n.canonicalString()}}function Na(n){return Gt.fromServerFormat(n.fieldPath)}function _S(n){return n instanceof It?function(t){if(t.op==="=="){if(J0(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NAN"}};if(X0(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(J0(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NOT_NAN"}};if(X0(t.value))return{unaryFilter:{field:ka(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ka(t.field),op:dD(t.op),value:t.value}}}(n):n instanceof Tr?function(t){const r=t.getFilters().map(i=>_S(i));return r.length===1?r[0]:{compositeFilter:{op:fD(t.op),filters:r}}}(n):Ie()}function pD(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ls{constructor(e,t,r,i,a=Se.min(),l=Se.min(),c=Yt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=f}withSequenceNumber(e){return new ls(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mD{constructor(e){this.ct=e}}function gD(n){const e=uD({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rg(e,e.limit,"L"):e}/**
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
 */class _D{constructor(){this.un=new yD}addToCollectionParentIndex(e,t){return this.un.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(vs.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(vs.min())}updateCollectionGroup(e,t,r){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class yD{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Qt(rt.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qt(rt.comparator)).toArray()}}/**
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
 */class Wa{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Wa(0)}static kn(){return new Wa(-1)}}/**
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
 */class vD{constructor(){this.changes=new rl(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,on.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ED{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Au(r.mutation,i,Ln.empty(),xt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,De()).next(()=>r))}getLocalViewOfDocuments(e,t,r=De()){const i=fo();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(a=>{let l=wu();return a.forEach((c,f)=>{l=l.insert(c,f.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const r=fo();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,De()))}populateOverlays(e,t,r){const i=[];return r.forEach(a=>{t.has(a)||i.push(a)}),this.documentOverlayCache.getOverlays(e,i).next(a=>{a.forEach((l,c)=>{t.set(l,c)})})}computeViews(e,t,r,i){let a=Ai();const l=Ru(),c=function(){return Ru()}();return t.forEach((f,p)=>{const y=r.get(p.key);i.has(p.key)&&(y===void 0||y.mutation instanceof bs)?a=a.insert(p.key,p):y!==void 0?(l.set(p.key,y.mutation.getFieldMask()),Au(y.mutation,p,y.mutation.getFieldMask(),xt.now())):l.set(p.key,Ln.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((p,y)=>l.set(p,y)),t.forEach((p,y)=>{var v;return c.set(p,new wD(y,(v=l.get(p))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Ru();let i=new St((l,c)=>l-c),a=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const c of l)c.keys().forEach(f=>{const p=t.get(f);if(p===null)return;let y=r.get(f)||Ln.empty();y=c.applyToLocalView(p,y),r.set(f,y);const v=(i.get(c.batchId)||De()).add(f);i=i.insert(c.batchId,v)})}).next(()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),p=f.key,y=f.value,v=tS();y.forEach(E=>{if(!a.has(E)){const S=aS(t.get(E),r.get(E));S!==null&&v.set(E,S),a=a.add(E)}}),l.push(this.documentOverlayCache.saveOverlays(e,p,v))}return Z.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(l){return ge.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):YI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(a=>{const l=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):Z.resolve(fo());let c=-1,f=a;return l.next(p=>Z.forEach(p,(y,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),a.get(y)?Z.resolve():this.remoteDocumentCache.getEntry(e,y).next(E=>{f=f.insert(y,E)}))).next(()=>this.populateOverlays(e,p,a)).next(()=>this.computeViews(e,f,p,De())).next(y=>({batchId:c,changes:eS(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(r=>{let i=wu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let l=wu();return this.indexManager.getCollectionParents(e,a).next(c=>Z.forEach(c,f=>{const p=function(v,E){return new fc(E,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,p,r,i).next(y=>{y.forEach((v,E)=>{l=l.insert(v,E)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i))).next(l=>{a.forEach((f,p)=>{const y=p.getKey();l.get(y)===null&&(l=l.insert(y,on.newInvalidDocument(y)))});let c=wu();return l.forEach((f,p)=>{const y=a.get(f);y!==void 0&&Au(y.mutation,p,Ln.empty(),xt.now()),mf(t,p)&&(c=c.insert(f,p))}),c})}}/**
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
 */class TD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Z.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Br(i.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:gD(i.bundledQuery),readTime:Br(i.readTime)}}(t)),Z.resolve()}}/**
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
 */class ID{constructor(){this.overlays=new St(ge.comparator),this.Ir=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=fo();return Z.forEach(t,i=>this.getOverlay(e,i).next(a=>{a!==null&&r.set(i,a)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,a)=>{this.ht(e,t,a)}),Z.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(a=>this.overlays=this.overlays.remove(a)),this.Ir.delete(r)),Z.resolve()}getOverlaysForCollection(e,t,r){const i=fo(),a=t.length+1,l=new ge(t.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const f=c.getNext().value,p=f.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===a&&f.largestBatchId>r&&i.set(f.getKey(),f)}return Z.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new St((p,y)=>p-y);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let y=a.get(p.largestBatchId);y===null&&(y=fo(),a=a.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const c=fo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,y)=>c.set(p,y)),!(c.size()>=i)););return Z.resolve(c)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new qx(t,r));let a=this.Ir.get(t);a===void 0&&(a=De(),this.Ir.set(t,a)),this.Ir.set(t,a.add(r.key))}}/**
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
 */class SD{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
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
 */class N_{constructor(){this.Tr=new Qt(Ut.Er),this.dr=new Qt(Ut.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Ut(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Ut(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new ge(new rt([])),r=new Ut(t,e),i=new Ut(t,e+1),a=[];return this.dr.forEachInRange([r,i],l=>{this.Vr(l),a.push(l.key)}),a}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ge(new rt([])),r=new Ut(t,e),i=new Ut(t,e+1);let a=De();return this.dr.forEachInRange([r,i],l=>{a=a.add(l.key)}),a}containsKey(e){const t=new Ut(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ut{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ge.comparator(e.key,t.key)||Be(e.wr,t.wr)}static Ar(e,t){return Be(e.wr,t.wr)||ge.comparator(e.key,t.key)}}/**
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
 */class CD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Qt(Ut.Er)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Hx(a,t,r,i);this.mutationQueue.push(l);for(const c of i)this.br=this.br.add(new Ut(c.key,a)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return Z.resolve(l)}lookupMutationBatch(e,t){return Z.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),a=i<0?0:i;return Z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ut(t,0),i=new Ut(t,Number.POSITIVE_INFINITY),a=[];return this.br.forEachInRange([r,i],l=>{const c=this.Dr(l.wr);a.push(c)}),Z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Qt(Be);return t.forEach(i=>{const a=new Ut(i,0),l=new Ut(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([a,l],c=>{r=r.add(c.wr)})}),Z.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ge.isDocumentKey(a)||(a=a.child(""));const l=new Ut(new ge(a),0);let c=new Qt(Be);return this.br.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(c=c.add(f.wr)),!0)},l),Z.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ye(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return Z.forEach(t.mutations,i=>{const a=new Ut(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Ut(t,0),i=this.br.firstAfterOrEqual(r);return Z.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class RD{constructor(e){this.Mr=e,this.docs=function(){return new St(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,l=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Z.resolve(r?r.document.mutableCopy():on.newInvalidDocument(t))}getEntries(e,t){let r=Ai();return t.forEach(i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():on.newInvalidDocument(i))}),Z.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Ai();const l=t.path,c=new ge(l.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:p,value:{document:y}}=f.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||lx(ax(y),r)<=0||(i.has(y.key)||mf(t,y))&&(a=a.insert(y.key,y.mutableCopy()))}return Z.resolve(a)}getAllFromCollectionGroup(e,t,r,i){Ie()}Or(e,t){return Z.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new AD(this)}getSize(e){return Z.resolve(this.size)}}class AD extends vD{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),Z.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class PD{constructor(e){this.persistence=e,this.Nr=new rl(t=>T_(t),I_),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new N_,this.targetCount=0,this.kr=Wa.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),Z.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Wa(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Kn(t),Z.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.Nr.forEach((l,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(l),a.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),Z.waitFor(a).next(()=>i)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return Z.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),Z.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach(l=>{a.push(i.markPotentiallyOrphaned(e,l))}),Z.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return Z.resolve(r)}containsKey(e,t){return Z.resolve(this.Br.containsKey(t))}}/**
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
 */class kD{constructor(e,t){this.qr={},this.overlays={},this.Qr=new y_(0),this.Kr=!1,this.Kr=!0,this.$r=new SD,this.referenceDelegate=e(this),this.Ur=new PD(this),this.indexManager=new _D,this.remoteDocumentCache=function(i){return new RD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mD(t),this.Gr=new TD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ID,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new CD(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){fe("MemoryPersistence","Starting transaction:",e);const i=new ND(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(a=>this.referenceDelegate.jr(i).next(()=>a)).toPromise().then(a=>(i.raiseOnCommittedEvent(),a))}Hr(e,t){return Z.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class ND extends cx{constructor(e){super(),this.currentSequenceNumber=e}}class b_{constructor(e){this.persistence=e,this.Jr=new N_,this.Yr=null}static Zr(e){return new b_(e)}get Xr(){if(this.Yr)return this.Yr;throw Ie()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),Z.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(a=>this.Xr.add(a.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.Xr,r=>{const i=ge.fromPath(r);return this.ei(e,i).next(a=>{a||t.removeEntry(i,Se.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Z.or([()=>Z.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class x_{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=De(),i=De();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new x_(e,t.fromCache,r,i)}}/**
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
 */class bD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return xN()?8:hx(an())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.Yi(e,t).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.Zi(e,t,i,r).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new bD;return this.Xi(e,t,l).next(c=>{if(a.result=c,this.zi)return this.es(e,t,l,c.size)})}).next(()=>a.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(hu()<=xe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Pa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Z.resolve()):(hu()<=xe.DEBUG&&fe("QueryEngine","Query:",Pa(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(hu()<=xe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Pa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ur(t))):Z.resolve())}Yi(e,t){if(nE(t))return Z.resolve(null);let r=Ur(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Rg(t,null,"F"),r=Ur(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const l=De(...a);return this.Ji.getDocuments(e,l).next(c=>this.indexManager.getMinOffset(e,r).next(f=>{const p=this.ts(t,c);return this.ns(t,p,l,f.readTime)?this.Yi(e,Rg(t,null,"F")):this.rs(e,p,t,f)}))})))}Zi(e,t,r,i){return nE(t)||i.isEqual(Se.min())?Z.resolve(null):this.Ji.getDocuments(e,r).next(a=>{const l=this.ts(t,a);return this.ns(t,l,r,i)?Z.resolve(null):(hu()<=xe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pa(t)),this.rs(e,l,t,ox(i,-1)).next(c=>c))})}ts(e,t){let r=new Qt(JI(e));return t.forEach((i,a)=>{mf(e,a)&&(r=r.add(a))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Xi(e,t,r){return hu()<=xe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Pa(t)),this.Ji.getDocumentsMatchingQuery(e,t,vs.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(a=>(t.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
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
 */class DD{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new St(Be),this._s=new rl(a=>T_(a),I_),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ED(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function OD(n,e,t,r){return new DD(n,e,t,r)}async function vS(n,e){const t=Ce(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(a=>(i=a,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(a=>{const l=[],c=[];let f=De();for(const p of i){l.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}for(const p of a){c.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next(p=>({hs:p,removedBatchIds:l,addedBatchIds:c}))})})}function LD(n,e){const t=Ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),a=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,f,p,y){const v=p.batch,E=v.keys();let S=Z.resolve();return E.forEach(R=>{S=S.next(()=>y.getEntry(f,R)).next(O=>{const A=p.docVersions.get(R);Ye(A!==null),O.version.compareTo(A)<0&&(v.applyToRemoteDocument(O,p),O.isValidDocument()&&(O.setReadTime(p.commitVersion),y.addEntry(O)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(f,v))}(t,r,e,a).next(()=>a.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let f=De();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(f=f.add(c.batch.mutations[p].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function wS(n){const e=Ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function MD(n,e){const t=Ce(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const l=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const c=[];e.targetChanges.forEach((y,v)=>{const E=i.get(v);if(!E)return;c.push(t.Ur.removeMatchingKeys(a,y.removedDocuments,v).next(()=>t.Ur.addMatchingKeys(a,y.addedDocuments,v)));let S=E.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(Yt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),i=i.insert(v,S),function(O,A,B){return O.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(E,S,y)&&c.push(t.Ur.updateTargetData(a,S))});let f=Ai(),p=De();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(a,y))}),c.push(VD(a,l,e.documentUpdates).next(y=>{f=y.Ps,p=y.Is})),!r.isEqual(Se.min())){const y=t.Ur.getLastRemoteSnapshotVersion(a).next(v=>t.Ur.setTargetsMetadata(a,a.currentSequenceNumber,r));c.push(y)}return Z.waitFor(c).next(()=>l.apply(a)).next(()=>t.localDocuments.getLocalViewOfDocuments(a,f,p)).next(()=>f)}).then(a=>(t.os=i,a))}function VD(n,e,t){let r=De(),i=De();return t.forEach(a=>r=r.add(a)),e.getEntries(n,r).next(a=>{let l=Ai();return t.forEach((c,f)=>{const p=a.get(c);f.isFoundDocument()!==p.isFoundDocument()&&(i=i.add(c)),f.isNoDocument()&&f.version.isEqual(Se.min())?(e.removeEntry(c,f.readTime),l=l.insert(c,f)):!p.isValidDocument()||f.version.compareTo(p.version)>0||f.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(f),l=l.insert(c,f)):fe("LocalStore","Ignoring outdated watch update for ",c,". Current version:",p.version," Watch version:",f.version)}),{Ps:l,Is:i}})}function FD(n,e){const t=Ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UD(n,e){const t=Ce(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(a=>a?(i=a,Z.resolve(i)):t.Ur.allocateTargetId(r).next(l=>(i=new ls(e,l,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function bg(n,e,t){const r=Ce(n),i=r.os.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!dc(l))throw l;fe("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function fE(n,e,t){const r=Ce(n);let i=Se.min(),a=De();return r.persistence.runTransaction("Execute query","readwrite",l=>function(f,p,y){const v=Ce(f),E=v._s.get(y);return E!==void 0?Z.resolve(v.os.get(E)):v.Ur.getTargetData(p,y)}(r,l,Ur(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(l,c.targetId).next(f=>{a=f})}).next(()=>r.ss.getDocumentsMatchingQuery(l,e,t?i:Se.min(),t?a:De())).next(c=>(BD(r,kx(e),c),{documents:c,Ts:a})))}function BD(n,e,t){let r=n.us.get(e)||Se.min();t.forEach((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.us.set(e,r)}class pE{constructor(){this.activeTargetIds=Lx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zD{constructor(){this.so=new pE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new pE,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jD{_o(e){}shutdown(){}}/**
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
 */class mE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){fe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){fe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xh=null;function Bm(){return Xh===null?Xh=function(){return 268435456+Math.round(2147483648*Math.random())}():Xh++,"0x"+Xh.toString(16)}/**
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
 */const $D={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class WD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const rn="WebChannelConnection";class HD extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${a}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${a}`}get Fo(){return!1}Mo(t,r,i,a,l){const c=Bm(),f=this.xo(t,r.toUriEncodedString());fe("RestConnection",`Sending RPC '${t}' ${c}:`,f,i);const p={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(p,a,l),this.No(t,f,p,i).then(y=>(fe("RestConnection",`Received RPC '${t}' ${c}: `,y),y),y=>{throw Ba("RestConnection",`RPC '${t}' ${c} failed with error: `,y,"url: ",f,"request:",i),y})}Lo(t,r,i,a,l,c){return this.Mo(t,r,i,a,l)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nl}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((a,l)=>t[l]=a),i&&i.headers.forEach((a,l)=>t[l]=a)}xo(t,r){const i=$D[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const a=Bm();return new Promise((l,c)=>{const f=new DI;f.setWithCredentials(!0),f.listenOnce(LI.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case ud.NO_ERROR:const y=f.getResponseJson();fe(rn,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),l(y);break;case ud.TIMEOUT:fe(rn,`RPC '${e}' ${a} timed out`),c(new ce(Y.DEADLINE_EXCEEDED,"Request time out"));break;case ud.HTTP_ERROR:const v=f.getStatus();if(fe(rn,`RPC '${e}' ${a} failed with status:`,v,"response text:",f.getResponseText()),v>0){let E=f.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E==null?void 0:E.error;if(S&&S.status&&S.message){const R=function(A){const B=A.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(B)>=0?B:Y.UNKNOWN}(S.status);c(new ce(R,S.message))}else c(new ce(Y.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new ce(Y.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{fe(rn,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);fe(rn,`RPC '${e}' ${a} sending request:`,i),f.send(t,"POST",p,r,15)})}Bo(e,t,r){const i=Bm(),a=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=FI(),c=VI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.xmlHttpFactory=new OI({})),this.Oo(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=a.join("");fe(rn,`Creating RPC '${e}' stream ${i}: ${y}`,f);const v=l.createWebChannel(y,f);let E=!1,S=!1;const R=new WD({Io:A=>{S?fe(rn,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(E||(fe(rn,`Opening RPC '${e}' stream ${i} transport.`),v.open(),E=!0),fe(rn,`RPC '${e}' stream ${i} sending:`,A),v.send(A))},To:()=>v.close()}),O=(A,B,K)=>{A.listen(B,q=>{try{K(q)}catch(Q){setTimeout(()=>{throw Q},0)}})};return O(v,vu.EventType.OPEN,()=>{S||(fe(rn,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),O(v,vu.EventType.CLOSE,()=>{S||(S=!0,fe(rn,`RPC '${e}' stream ${i} transport closed`),R.So())}),O(v,vu.EventType.ERROR,A=>{S||(S=!0,Ba(rn,`RPC '${e}' stream ${i} transport errored:`,A),R.So(new ce(Y.UNAVAILABLE,"The operation could not be completed")))}),O(v,vu.EventType.MESSAGE,A=>{var B;if(!S){const K=A.data[0];Ye(!!K);const q=K,Q=q.error||((B=q[0])===null||B===void 0?void 0:B.error);if(Q){fe(rn,`RPC '${e}' stream ${i} received error:`,Q);const oe=Q.status;let ie=function(k){const D=Tt[k];if(D!==void 0)return uS(D)}(oe),b=Q.message;ie===void 0&&(ie=Y.INTERNAL,b="Unknown error status: "+oe+" with message "+Q.message),S=!0,R.So(new ce(ie,b)),v.close()}else fe(rn,`RPC '${e}' stream ${i} received:`,K),R.bo(K)}}),O(c,MI.STAT_EVENT,A=>{A.stat===vg.PROXY?fe(rn,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===vg.NOPROXY&&fe(rn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function zm(){return typeof document<"u"?document:null}/**
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
 */function vf(n){return new tD(n,!0)}/**
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
 */class ES{constructor(e,t,r=1e3,i=1.5,a=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&fe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class TS{constructor(e,t,r,i,a,l,c,f){this.ui=e,this.Ho=r,this.Jo=i,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ES(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Ri(t.toString()),Ri("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new ce(Y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return fe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(fe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qD extends TS{constructor(e,t,r,i,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,l),this.serializer=a}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=iD(this.serializer,e),r=function(a){if(!("targetChange"in a))return Se.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Se.min():l.readTime?Br(l.readTime):Se.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ng(this.serializer),t.addTarget=function(a,l){let c;const f=l.target;if(c=Sg(f)?{documents:aD(a,f)}:{query:lD(a,f)._t},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=dS(a,l.resumeToken);const p=Ag(a,l.expectedCount);p!==null&&(c.expectedCount=p)}else if(l.snapshotVersion.compareTo(Se.min())>0){c.readTime=Nd(a,l.snapshotVersion.toTimestamp());const p=Ag(a,l.expectedCount);p!==null&&(c.expectedCount=p)}return c}(this.serializer,e);const r=cD(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ng(this.serializer),t.removeTarget=e,this.a_(t)}}class KD extends TS{constructor(e,t,r,i,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,l),this.serializer=a}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=oD(e.writeResults,e.commitTime),r=Br(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ng(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>sD(this.serializer,r))};this.a_(t)}}/**
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
 */class GD extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new ce(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Mo(e,Pg(t,r),i,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ce(Y.UNKNOWN,a.toString())})}Lo(e,t,r,i,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Lo(e,Pg(t,r),i,l,c,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(Y.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class QD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ri(t),this.D_=!1):fe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class YD{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=a,this.k_._o(l=>{r.enqueueAndForget(async()=>{xo(this)&&(fe("RemoteStore","Restarting streams for network reachability change."),await async function(f){const p=Ce(f);p.L_.add(4),await gc(p),p.q_.set("Unknown"),p.L_.delete(4),await wf(p)}(this))})}),this.q_=new QD(r,i)}}async function wf(n){if(xo(n))for(const e of n.B_)await e(!0)}async function gc(n){for(const e of n.B_)await e(!1)}function IS(n,e){const t=Ce(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),M_(t)?L_(t):il(t).r_()&&O_(t,e))}function D_(n,e){const t=Ce(n),r=il(t);t.N_.delete(e),r.r_()&&SS(t,e),t.N_.size===0&&(r.r_()?r.o_():xo(t)&&t.q_.set("Unknown"))}function O_(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}il(n).A_(e)}function SS(n,e){n.Q_.xe(e),il(n).R_(e)}function L_(n){n.Q_=new Xx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),il(n).start(),n.q_.v_()}function M_(n){return xo(n)&&!il(n).n_()&&n.N_.size>0}function xo(n){return Ce(n).L_.size===0}function CS(n){n.Q_=void 0}async function XD(n){n.q_.set("Online")}async function JD(n){n.N_.forEach((e,t)=>{O_(n,e)})}async function ZD(n,e){CS(n),M_(n)?(n.q_.M_(e),L_(n)):n.q_.set("Unknown")}async function eO(n,e,t){if(n.q_.set("Online"),e instanceof hS&&e.state===2&&e.cause)try{await async function(i,a){const l=a.cause;for(const c of a.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,l),i.N_.delete(c),i.Q_.removeTarget(c))}(n,e)}catch(r){fe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bd(n,r)}else if(e instanceof dd?n.Q_.Ke(e):e instanceof cS?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Se.min()))try{const r=await wS(n.localStore);t.compareTo(r)>=0&&await function(a,l){const c=a.Q_.rt(l);return c.targetChanges.forEach((f,p)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.N_.get(p);y&&a.N_.set(p,y.withResumeToken(f.resumeToken,l))}}),c.targetMismatches.forEach((f,p)=>{const y=a.N_.get(f);if(!y)return;a.N_.set(f,y.withResumeToken(Yt.EMPTY_BYTE_STRING,y.snapshotVersion)),SS(a,f);const v=new ls(y.target,f,p,y.sequenceNumber);O_(a,v)}),a.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){fe("RemoteStore","Failed to raise snapshot:",r),await bd(n,r)}}async function bd(n,e,t){if(!dc(e))throw e;n.L_.add(1),await gc(n),n.q_.set("Offline"),t||(t=()=>wS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{fe("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await wf(n)})}function RS(n,e){return e().catch(t=>bd(n,t,e))}async function Ef(n){const e=Ce(n),t=Es(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;tO(e);)try{const i=await FD(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,nO(e,i)}catch(i){await bd(e,i)}AS(e)&&PS(e)}function tO(n){return xo(n)&&n.O_.length<10}function nO(n,e){n.O_.push(e);const t=Es(n);t.r_()&&t.V_&&t.m_(e.mutations)}function AS(n){return xo(n)&&!Es(n).n_()&&n.O_.length>0}function PS(n){Es(n).start()}async function rO(n){Es(n).p_()}async function iO(n){const e=Es(n);for(const t of n.O_)e.m_(t.mutations)}async function sO(n,e,t){const r=n.O_.shift(),i=A_.from(r,e,t);await RS(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ef(n)}async function oO(n,e){e&&Es(n).V_&&await async function(r,i){if(function(l){return Gx(l)&&l!==Y.ABORTED}(i.code)){const a=r.O_.shift();Es(r).s_(),await RS(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i)),await Ef(r)}}(n,e),AS(n)&&PS(n)}async function gE(n,e){const t=Ce(n);t.asyncQueue.verifyOperationInProgress(),fe("RemoteStore","RemoteStore received new credentials");const r=xo(t);t.L_.add(3),await gc(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await wf(t)}async function aO(n,e){const t=Ce(n);e?(t.L_.delete(2),await wf(t)):e||(t.L_.add(2),await gc(t),t.q_.set("Unknown"))}function il(n){return n.K_||(n.K_=function(t,r,i){const a=Ce(t);return a.w_(),new qD(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(n.datastore,n.asyncQueue,{Eo:XD.bind(null,n),Ro:JD.bind(null,n),mo:ZD.bind(null,n),d_:eO.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),M_(n)?L_(n):n.q_.set("Unknown")):(await n.K_.stop(),CS(n))})),n.K_}function Es(n){return n.U_||(n.U_=function(t,r,i){const a=Ce(t);return a.w_(),new KD(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:rO.bind(null,n),mo:oO.bind(null,n),f_:iO.bind(null,n),g_:sO.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ef(n)):(await n.U_.stop(),n.O_.length>0&&(fe("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class V_{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const l=Date.now()+r,c=new V_(e,t,l,i,a);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function F_(n,e){if(Ri("AsyncQueue",`${e}: ${n}`),dc(n))return new ce(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Da{constructor(e){this.comparator=e?(t,r)=>e(t,r)||ge.comparator(t.key,r.key):(t,r)=>ge.comparator(t.key,r.key),this.keyedMap=wu(),this.sortedSet=new St(this.comparator)}static emptySet(e){return new Da(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Da)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Da;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class _E{constructor(){this.W_=new St(ge.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Ie():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ha{constructor(e,t,r,i,a,l,c,f,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=f,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,i,a){const l=[];return t.forEach(c=>{l.push({type:0,doc:c})}),new Ha(e,t,Da.emptySet(t),l,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class lO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class uO{constructor(){this.queries=yE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=Ce(t),a=i.queries;i.queries=yE(),a.forEach((l,c)=>{for(const f of c.j_)f.onError(r)})})(this,new ce(Y.ABORTED,"Firestore shutting down"))}}function yE(){return new rl(n=>XI(n),pf)}async function kS(n,e){const t=Ce(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.H_()&&e.J_()&&(r=2):(a=new lO,r=e.J_()?0:1);try{switch(r){case 0:a.z_=await t.onListen(i,!0);break;case 1:a.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(l){const c=F_(l,`Initialization of query '${Pa(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,a),a.j_.push(e),e.Z_(t.onlineState),a.z_&&e.X_(a.z_)&&U_(t)}async function NS(n,e){const t=Ce(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const l=a.j_.indexOf(e);l>=0&&(a.j_.splice(l,1),a.j_.length===0?i=e.J_()?0:1:!a.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function cO(n,e){const t=Ce(n);let r=!1;for(const i of e){const a=i.query,l=t.queries.get(a);if(l){for(const c of l.j_)c.X_(i)&&(r=!0);l.z_=i}}r&&U_(t)}function hO(n,e,t){const r=Ce(n),i=r.queries.get(e);if(i)for(const a of i.j_)a.onError(t);r.queries.delete(e)}function U_(n){n.Y_.forEach(e=>{e.next()})}var xg,vE;(vE=xg||(xg={})).ea="default",vE.Cache="cache";class bS{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ha(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Ha.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==xg.Cache}}/**
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
 */class xS{constructor(e){this.key=e}}class DS{constructor(e){this.key=e}}class dO{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=De(),this.mutatedKeys=De(),this.Aa=JI(e),this.Ra=new Da(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new _E,i=t?t.Ra:this.Ra;let a=t?t.mutatedKeys:this.mutatedKeys,l=i,c=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,p=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((y,v)=>{const E=i.get(y),S=mf(this.query,v)?v:null,R=!!E&&this.mutatedKeys.has(E.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let A=!1;E&&S?E.data.isEqual(S.data)?R!==O&&(r.track({type:3,doc:S}),A=!0):this.ga(E,S)||(r.track({type:2,doc:S}),A=!0,(f&&this.Aa(S,f)>0||p&&this.Aa(S,p)<0)&&(c=!0)):!E&&S?(r.track({type:0,doc:S}),A=!0):E&&!S&&(r.track({type:1,doc:E}),A=!0,(f||p)&&(c=!0)),A&&(S?(l=l.add(S),a=O?a.add(y):a.delete(y)):(l=l.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const y=this.query.limitType==="F"?l.last():l.first();l=l.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{Ra:l,fa:r,ns:c,mutatedKeys:a}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const l=e.fa.G_();l.sort((y,v)=>function(S,R){const O=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie()}};return O(S)-O(R)}(y.type,v.type)||this.Aa(y.doc,v.doc)),this.pa(r),i=i!=null&&i;const c=t&&!i?this.ya():[],f=this.da.size===0&&this.current&&!i?1:0,p=f!==this.Ea;return this.Ea=f,l.length!==0||p?{snapshot:new Ha(this.query,e.Ra,a,l,e.mutatedKeys,f===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _E,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=De(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new DS(r))}),this.da.forEach(r=>{e.has(r)||t.push(new xS(r))}),t}ba(e){this.Ta=e.Ts,this.da=De();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ha.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class fO{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class pO{constructor(e){this.key=e,this.va=!1}}class mO{constructor(e,t,r,i,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new rl(c=>XI(c),pf),this.Ma=new Map,this.xa=new Set,this.Oa=new St(ge.comparator),this.Na=new Map,this.La=new N_,this.Ba={},this.ka=new Map,this.qa=Wa.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gO(n,e,t=!0){const r=US(n);let i;const a=r.Fa.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.Da()):i=await OS(r,e,t,!0),i}async function _O(n,e){const t=US(n);await OS(t,e,!0,!1)}async function OS(n,e,t,r){const i=await UD(n.localStore,Ur(e)),a=i.targetId,l=t?n.sharedClientState.addLocalQueryTarget(a):"not-current";let c;return r&&(c=await yO(n,e,a,l==="current",i.resumeToken)),n.isPrimaryClient&&t&&IS(n.remoteStore,i),c}async function yO(n,e,t,r,i){n.Ka=(v,E,S)=>async function(O,A,B,K){let q=A.view.ma(B);q.ns&&(q=await fE(O.localStore,A.query,!1).then(({documents:b})=>A.view.ma(b,q)));const Q=K&&K.targetChanges.get(A.targetId),oe=K&&K.targetMismatches.get(A.targetId)!=null,ie=A.view.applyChanges(q,O.isPrimaryClient,Q,oe);return EE(O,A.targetId,ie.wa),ie.snapshot}(n,v,E,S);const a=await fE(n.localStore,e,!0),l=new dO(e,a.Ts),c=l.ma(a.documents),f=mc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),p=l.applyChanges(c,n.isPrimaryClient,f);EE(n,t,p.wa);const y=new fO(e,t,l);return n.Fa.set(e,y),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),p.snapshot}async function vO(n,e,t){const r=Ce(n),i=r.Fa.get(e),a=r.Ma.get(i.targetId);if(a.length>1)return r.Ma.set(i.targetId,a.filter(l=>!pf(l,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bg(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&D_(r.remoteStore,i.targetId),Dg(r,i.targetId)}).catch(hc)):(Dg(r,i.targetId),await bg(r.localStore,i.targetId,!0))}async function wO(n,e){const t=Ce(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),D_(t.remoteStore,r.targetId))}async function EO(n,e,t){const r=PO(n);try{const i=await function(l,c){const f=Ce(l),p=xt.now(),y=c.reduce((S,R)=>S.add(R.key),De());let v,E;return f.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=Ai(),O=De();return f.cs.getEntries(S,y).next(A=>{R=A,R.forEach((B,K)=>{K.isValidDocument()||(O=O.add(B))})}).next(()=>f.localDocuments.getOverlayedDocuments(S,R)).next(A=>{v=A;const B=[];for(const K of c){const q=$x(K,v.get(K.key).overlayedDocument);q!=null&&B.push(new bs(K.key,q,$I(q.value.mapValue),vr.exists(!0)))}return f.mutationQueue.addMutationBatch(S,p,B,c)}).next(A=>{E=A;const B=A.applyToLocalDocumentSet(v,O);return f.documentOverlayCache.saveOverlays(S,A.batchId,B)})}).then(()=>({batchId:E.batchId,changes:eS(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(l,c,f){let p=l.Ba[l.currentUser.toKey()];p||(p=new St(Be)),p=p.insert(c,f),l.Ba[l.currentUser.toKey()]=p}(r,i.batchId,t),await _c(r,i.changes),await Ef(r.remoteStore)}catch(i){const a=F_(i,"Failed to persist write");t.reject(a)}}async function LS(n,e){const t=Ce(n);try{const r=await MD(t.localStore,e);e.targetChanges.forEach((i,a)=>{const l=t.Na.get(a);l&&(Ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?l.va=!0:i.modifiedDocuments.size>0?Ye(l.va):i.removedDocuments.size>0&&(Ye(l.va),l.va=!1))}),await _c(t,r,e)}catch(r){await hc(r)}}function wE(n,e,t){const r=Ce(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((a,l)=>{const c=l.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(l,c){const f=Ce(l);f.onlineState=c;let p=!1;f.queries.forEach((y,v)=>{for(const E of v.j_)E.Z_(c)&&(p=!0)}),p&&U_(f)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TO(n,e,t){const r=Ce(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),a=i&&i.key;if(a){let l=new St(ge.comparator);l=l.insert(a,on.newNoDocument(a,Se.min()));const c=De().add(a),f=new yf(Se.min(),new Map,new St(Be),l,c);await LS(r,f),r.Oa=r.Oa.remove(a),r.Na.delete(e),B_(r)}else await bg(r.localStore,e,!1).then(()=>Dg(r,e,t)).catch(hc)}async function IO(n,e){const t=Ce(n),r=e.batch.batchId;try{const i=await LD(t.localStore,e);VS(t,r,null),MS(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await _c(t,i)}catch(i){await hc(i)}}async function SO(n,e,t){const r=Ce(n);try{const i=await function(l,c){const f=Ce(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return f.mutationQueue.lookupMutationBatch(p,c).next(v=>(Ye(v!==null),y=v.keys(),f.mutationQueue.removeMutationBatch(p,v))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,y,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>f.localDocuments.getDocuments(p,y))})}(r.localStore,e);VS(r,e,t),MS(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await _c(r,i)}catch(i){await hc(i)}}function MS(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function VS(n,e,t){const r=Ce(n);let i=r.Ba[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Dg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||FS(n,r)})}function FS(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(D_(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),B_(n))}function EE(n,e,t){for(const r of t)r instanceof xS?(n.La.addReference(r.key,e),CO(n,r)):r instanceof DS?(fe("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||FS(n,r.key)):Ie()}function CO(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(fe("SyncEngine","New document in limbo: "+t),n.xa.add(r),B_(n))}function B_(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ge(rt.fromString(e)),r=n.qa.next();n.Na.set(r,new pO(t)),n.Oa=n.Oa.insert(t,r),IS(n.remoteStore,new ls(Ur(S_(t.path)),r,"TargetPurposeLimboResolution",y_.oe))}}async function _c(n,e,t){const r=Ce(n),i=[],a=[],l=[];r.Fa.isEmpty()||(r.Fa.forEach((c,f)=>{l.push(r.Ka(f,e,t).then(p=>{var y;if((p||t)&&r.isPrimaryClient){const v=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,v?"current":"not-current")}if(p){i.push(p);const v=x_.Wi(f.targetId,p);a.push(v)}}))}),await Promise.all(l),r.Ca.d_(i),await async function(f,p){const y=Ce(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>Z.forEach(p,E=>Z.forEach(E.$i,S=>y.persistence.referenceDelegate.addReference(v,E.targetId,S)).next(()=>Z.forEach(E.Ui,S=>y.persistence.referenceDelegate.removeReference(v,E.targetId,S)))))}catch(v){if(!dc(v))throw v;fe("LocalStore","Failed to update sequence numbers: "+v)}for(const v of p){const E=v.targetId;if(!v.fromCache){const S=y.os.get(E),R=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(R);y.os=y.os.insert(E,O)}}}(r.localStore,a))}async function RO(n,e){const t=Ce(n);if(!t.currentUser.isEqual(e)){fe("SyncEngine","User change. New user:",e.toKey());const r=await vS(t.localStore,e);t.currentUser=e,function(a,l){a.ka.forEach(c=>{c.forEach(f=>{f.reject(new ce(Y.CANCELLED,l))})}),a.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _c(t,r.hs)}}function AO(n,e){const t=Ce(n),r=t.Na.get(e);if(r&&r.va)return De().add(r.key);{let i=De();const a=t.Ma.get(e);if(!a)return i;for(const l of a){const c=t.Fa.get(l);i=i.unionWith(c.view.Va)}return i}}function US(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=LS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TO.bind(null,e),e.Ca.d_=cO.bind(null,e.eventManager),e.Ca.$a=hO.bind(null,e.eventManager),e}function PO(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SO.bind(null,e),e}class TE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return OD(this.persistence,new xD,e.initialUser,this.serializer)}createPersistence(e){return new kD(b_.Zr,this.serializer)}createSharedClientState(e){return new zD}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kO{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RO.bind(null,this.syncEngine),await aO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uO}()}createDatastore(e){const t=vf(e.databaseInfo.databaseId),r=function(a){return new HD(a)}(e.databaseInfo);return function(a,l,c,f){return new GD(a,l,c,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,a,l,c){return new YD(r,i,a,l,c)}(this.localStore,this.datastore,e.asyncQueue,t=>wE(this.syncEngine,t,0),function(){return mE.D()?new mE:new jD}())}createSyncEngine(e,t){return function(i,a,l,c,f,p,y){const v=new mO(i,a,l,c,f,p);return y&&(v.Qa=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const a=Ce(i);fe("RemoteStore","RemoteStore shutting down."),a.L_.add(5),await gc(a),a.k_.shutdown(),a.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
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
 */class BS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):Ri("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class NO{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=sn.UNAUTHENTICATED,this.clientId=BI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async a=>{fe("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(fe("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ce(Y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=F_(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jm(n,e){n.asyncQueue.verifyOperationInProgress(),fe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function IE(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xO(n);fe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>gE(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>gE(e.remoteStore,i)),n._onlineComponents=e}function bO(n){return n.name==="FirebaseError"?n.code===Y.FAILED_PRECONDITION||n.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function xO(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe("FirestoreClient","Using user provided OfflineComponentProvider");try{await jm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!bO(t))throw t;Ba("Error using user provided cache. Falling back to memory cache: "+t),await jm(n,new TE)}}else fe("FirestoreClient","Using default OfflineComponentProvider"),await jm(n,new TE);return n._offlineComponents}async function zS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe("FirestoreClient","Using user provided OnlineComponentProvider"),await IE(n,n._uninitializedComponentsProvider._online)):(fe("FirestoreClient","Using default OnlineComponentProvider"),await IE(n,new kO))),n._onlineComponents}function DO(n){return zS(n).then(e=>e.syncEngine)}async function jS(n){const e=await zS(n),t=e.eventManager;return t.onListen=gO.bind(null,e.syncEngine),t.onUnlisten=vO.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_O.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=wO.bind(null,e.syncEngine),t}function OO(n,e,t={}){const r=new vi;return n.asyncQueue.enqueueAndForget(async()=>function(a,l,c,f,p){const y=new BS({next:E=>{l.enqueueAndForget(()=>NS(a,v));const S=E.docs.has(c);!S&&E.fromCache?p.reject(new ce(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&f&&f.source==="server"?p.reject(new ce(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(E)},error:E=>p.reject(E)}),v=new bS(S_(c.path),y,{includeMetadataChanges:!0,_a:!0});return kS(a,v)}(await jS(n),n.asyncQueue,e,t,r)),r.promise}function LO(n,e,t={}){const r=new vi;return n.asyncQueue.enqueueAndForget(async()=>function(a,l,c,f,p){const y=new BS({next:E=>{l.enqueueAndForget(()=>NS(a,v)),E.fromCache&&f.source==="server"?p.reject(new ce(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(E)},error:E=>p.reject(E)}),v=new bS(c,y,{includeMetadataChanges:!0,_a:!0});return kS(a,v)}(await jS(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function $S(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const SE=new Map;/**
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
 */function WS(n,e,t){if(!t)throw new ce(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function MO(n,e,t,r){if(e===!0&&r===!0)throw new ce(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function CE(n){if(!ge.isDocumentKey(n))throw new ce(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function RE(n){if(ge.isDocumentKey(n))throw new ce(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Tf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ie()}function $r(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ce(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Tf(n);throw new ce(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class AE{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$S((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ce(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ce(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ce(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class If{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new AE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ce(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ce(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new AE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xb;switch(r.type){case"firstParty":return new tx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=SE.get(t);r&&(fe("ComponentProvider","Removing Datastore"),SE.delete(t),r.terminate())}(this),Promise.resolve()}}function VO(n,e,t,r={}){var i;const a=(n=$r(n,If))._getSettings(),l=`${e}:${t}`;if(a.host!=="firestore.googleapis.com"&&a.host!==l&&Ba("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},a),{host:l,ssl:!1})),r.mockUserToken){let c,f;if(typeof r.mockUserToken=="string")c=r.mockUserToken,f=sn.MOCK_USER;else{c=p_(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new ce(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new sn(p)}n._authCredentials=new Jb(new UI(c,f))}}/**
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
 */class sl{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sl(this.firestore,e,this._query)}}class pn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pn(this.firestore,e,this._key)}}class fs extends sl{constructor(e,t,r){super(e,t,S_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pn(this.firestore,null,new ge(e))}withConverter(e){return new fs(this.firestore,e,this._path)}}function FO(n,e,...t){if(n=We(n),WS("collection","path",e),n instanceof If){const r=rt.fromString(e,...t);return RE(r),new fs(n,null,r)}{if(!(n instanceof pn||n instanceof fs))throw new ce(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(rt.fromString(e,...t));return RE(r),new fs(n.firestore,null,r)}}function yc(n,e,...t){if(n=We(n),arguments.length===1&&(e=BI.newId()),WS("doc","path",e),n instanceof If){const r=rt.fromString(e,...t);return CE(r),new pn(n,null,new ge(r))}{if(!(n instanceof pn||n instanceof fs))throw new ce(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(rt.fromString(e,...t));return CE(r),new pn(n.firestore,n instanceof fs?n.converter:null,new ge(r))}}/**
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
 */class UO{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new ES(this,"async_queue_retry"),this.Eu=()=>{const t=zm();t&&fe("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const e=zm();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=zm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const t=new vi;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!dc(e))throw e;fe("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const t=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw Ri("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Pu=!1,r))));return this.au=t,t}enqueueAfterDelay(e,t,r){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const i=V_.createAndSchedule(this,e,t,r,a=>this.Vu(a));return this.lu.push(i),i}du(){this.hu&&Ie()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.lu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}class ol extends If{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new UO}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||HS(this),this._firestoreClient.terminate()}}function BO(n,e){const t=typeof n=="object"?n:df(),r=typeof n=="string"?n:"(default)",i=cc(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=f_("firestore");a&&VO(i,...a)}return i}function z_(n){return n._firestoreClient||HS(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function HS(n){var e,t,r;const i=n._freezeSettings(),a=function(c,f,p,y){return new px(c,f,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,$S(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new NO(n._authCredentials,n._appCheckCredentials,n._queue,a),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class qa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qa(Yt.fromBase64String(e))}catch(t){throw new ce(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qa(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Sf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cf{constructor(e){this._methodName=e}}/**
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
 */class j_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}}/**
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
 */class $_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const zO=/^__.*__$/;class jO{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new bs(e,this.data,this.fieldMask,t,this.fieldTransforms):new pc(e,this.data,t,this.fieldTransforms)}}class qS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new bs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function KS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class W_{constructor(e,t,r,i,a,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.yu(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new W_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Su({path:r,Du:!1});return i.vu(e),i}Cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Su({path:r,Du:!1});return i.yu(),i}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return xd(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(KS(this.wu)&&zO.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class $O{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||vf(e)}Nu(e,t,r,i=!1){return new W_({wu:e,methodName:t,Ou:r,path:Gt.emptyPath(),Du:!1,xu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function H_(n){const e=n._freezeSettings(),t=vf(n._databaseId);return new $O(n._databaseId,!!e.ignoreUndefinedProperties,t)}function WO(n,e,t,r,i,a={}){const l=n.Nu(a.merge||a.mergeFields?2:0,e,t,i);K_("Data must be an object, but it was:",l,r);const c=GS(r,l);let f,p;if(a.merge)f=new Ln(l.fieldMask),p=l.fieldTransforms;else if(a.mergeFields){const y=[];for(const v of a.mergeFields){const E=Og(e,v,t);if(!l.contains(E))throw new ce(Y.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);YS(y,E)||y.push(E)}f=new Ln(y),p=l.fieldTransforms.filter(v=>f.covers(v.field))}else f=null,p=l.fieldTransforms;return new jO(new Sn(c),f,p)}class Rf extends Cf{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Rf}}class q_ extends Cf{_toFieldTransform(e){return new Ux(e.path,new ju)}isEqual(e){return e instanceof q_}}function HO(n,e,t,r){const i=n.Nu(1,e,t);K_("Data must be an object, but it was:",i,r);const a=[],l=Sn.empty();bo(r,(f,p)=>{const y=G_(e,f,t);p=We(p);const v=i.Cu(y);if(p instanceof Rf)a.push(y);else{const E=vc(p,v);E!=null&&(a.push(y),l.set(y,E))}});const c=new Ln(a);return new qS(l,c,i.fieldTransforms)}function qO(n,e,t,r,i,a){const l=n.Nu(1,e,t),c=[Og(e,r,t)],f=[i];if(a.length%2!=0)throw new ce(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)c.push(Og(e,a[E])),f.push(a[E+1]);const p=[],y=Sn.empty();for(let E=c.length-1;E>=0;--E)if(!YS(p,c[E])){const S=c[E];let R=f[E];R=We(R);const O=l.Cu(S);if(R instanceof Rf)p.push(S);else{const A=vc(R,O);A!=null&&(p.push(S),y.set(S,A))}}const v=new Ln(p);return new qS(y,v,l.fieldTransforms)}function KO(n,e,t,r=!1){return vc(t,n.Nu(r?4:3,e))}function vc(n,e){if(QS(n=We(n)))return K_("Unsupported field value:",e,n),GS(n,e);if(n instanceof Cf)return function(r,i){if(!KS(i.wu))throw i.Mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Mu(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,i){const a=[];let l=0;for(const c of r){let f=vc(c,i.Fu(l));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),l++}return{arrayValue:{values:a}}}(n,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=xt.fromDate(r);return{timestampValue:Nd(i.serializer,a)}}if(r instanceof xt){const a=new xt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nd(i.serializer,a)}}if(r instanceof j_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qa)return{bytesValue:dS(i.serializer,r._byteString)};if(r instanceof pn){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.Mu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:k_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $_)return function(l,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw c.Mu("VectorValues must only contain numeric values.");return C_(c.serializer,f)})}}}}}}(r,i);throw i.Mu(`Unsupported field value: ${Tf(r)}`)}(n,e)}function GS(n,e){const t={};return zI(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bo(n,(r,i)=>{const a=vc(i,e.bu(r));a!=null&&(t[r]=a)}),{mapValue:{fields:t}}}function QS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xt||n instanceof j_||n instanceof qa||n instanceof pn||n instanceof Cf||n instanceof $_)}function K_(n,e,t){if(!QS(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Tf(t);throw r==="an object"?e.Mu(n+" a custom object"):e.Mu(n+" "+r)}}function Og(n,e,t){if((e=We(e))instanceof Sf)return e._internalPath;if(typeof e=="string")return G_(n,e);throw xd("Field path arguments must be of type string or ",n,!1,void 0,t)}const GO=new RegExp("[~\\*/\\[\\]]");function G_(n,e,t){if(e.search(GO)>=0)throw xd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Sf(...e.split("."))._internalPath}catch{throw xd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xd(n,e,t,r,i){const a=r&&!r.isEmpty(),l=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(a||l)&&(f+=" (found",a&&(f+=` in field ${r}`),l&&(f+=` in document ${i}`),f+=")"),new ce(Y.INVALID_ARGUMENT,c+n+f)}function YS(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class XS{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Q_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QO extends XS{data(){return super.data()}}function Q_(n,e){return typeof e=="string"?G_(n,e):e instanceof Sf?e._internalPath:e._delegate._internalPath}/**
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
 */function YO(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ce(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Y_{}let XO=class extends Y_{};function K3(n,e,...t){let r=[];e instanceof Y_&&r.push(e),r=r.concat(t),function(a){const l=a.filter(f=>f instanceof X_).length,c=a.filter(f=>f instanceof Af).length;if(l>1||l>0&&c>0)throw new ce(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Af extends XO{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Af(e,t,r)}_apply(e){const t=this._parse(e);return JS(e._query,t),new sl(e.firestore,e.converter,Cg(e._query,t))}_parse(e){const t=H_(e.firestore);return function(a,l,c,f,p,y,v){let E;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new ce(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){kE(v,y);const S=[];for(const R of v)S.push(PE(f,a,R));E={arrayValue:{values:S}}}else E=PE(f,a,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||kE(v,y),E=KO(c,l,v,y==="in"||y==="not-in");return It.create(p,y,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function G3(n,e,t){const r=e,i=Q_("where",n);return Af._create(i,r,t)}class X_ extends Y_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new X_(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Tr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,a){let l=i;const c=a.getFlattenedFilters();for(const f of c)JS(l,f),l=Cg(l,f)}(e._query,t),new sl(e.firestore,e.converter,Cg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function PE(n,e,t){if(typeof(t=We(t))=="string"){if(t==="")throw new ce(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!YI(e)&&t.indexOf("/")!==-1)throw new ce(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(rt.fromString(t));if(!ge.isDocumentKey(r))throw new ce(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Y0(n,new ge(r))}if(t instanceof pn)return Y0(n,t._key);throw new ce(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tf(t)}.`)}function kE(n,e){if(!Array.isArray(n)||n.length===0)throw new ce(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function JS(n,e){const t=function(i,a){for(const l of i)for(const c of l.getFlattenedFilters())if(a.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class JO{convertValue(e,t="none"){switch(To(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Eo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return bo(e,(i,a)=>{r[i]=this.convertValue(a,t)}),r}convertVectorValue(e){var t,r,i;const a=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(l=>vt(l.doubleValue));return new $_(a)}convertGeoPoint(e){return new j_(vt(e.latitude),vt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=w_(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Uu(e));default:return null}}convertTimestamp(e){const t=ws(e);return new xt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=rt.fromString(e);Ye(yS(r));const i=new Bu(r.get(1),r.get(3)),a=new ge(r.popFirst(5));return i.isEqual(t)||Ri(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function ZO(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Tu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ZS extends XS{constructor(e,t,r,i,a,l){super(e,t,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Q_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class fd extends ZS{data(e={}){return super.data(e)}}class eL{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Tu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fd(this._firestore,this._userDataWriter,r.key,r,new Tu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,a){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(c=>{const f=new fd(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Tu(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>a||c.type!==3).map(c=>{const f=new fd(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Tu(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,y=-1;return c.type!==0&&(p=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),y=l.indexOf(c.doc.key)),{type:tL(c.type),doc:f,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function tL(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie()}}/**
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
 */function eC(n){n=$r(n,pn);const e=$r(n.firestore,ol);return OO(z_(e),n._key).then(t=>iL(e,n,t))}class tC extends JO{constructor(e){super(),this.firestore=e}convertBytes(e){return new qa(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pn(this.firestore,null,t)}}function nL(n){n=$r(n,sl);const e=$r(n.firestore,ol),t=z_(e),r=new tC(e);return YO(n._query),LO(t,n._query).then(i=>new eL(e,r,n,i))}function rL(n,e,t){n=$r(n,pn);const r=$r(n.firestore,ol),i=ZO(n.converter,e);return J_(r,[WO(H_(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,vr.none())])}function nC(n,e,t,...r){n=$r(n,pn);const i=$r(n.firestore,ol),a=H_(i);let l;return l=typeof(e=We(e))=="string"||e instanceof Sf?qO(a,"updateDoc",n._key,e,t,r):HO(a,"updateDoc",n._key,e),J_(i,[l.toMutation(n._key,vr.exists(!0))])}function Q3(n){return J_($r(n.firestore,ol),[new R_(n._key,vr.none())])}function J_(n,e){return function(r,i){const a=new vi;return r.asyncQueue.enqueueAndForget(async()=>EO(await DO(r),i,a)),a.promise}(z_(n),e)}function iL(n,e,t){const r=t.docs.get(e._key),i=new tC(n);return new ZS(n,i,e._key,r,new Tu(t.hasPendingWrites,t.fromCache),e.converter)}function sL(){return new q_("serverTimestamp")}(function(e,t=!0){(function(i){nl=i})(Ns),ys(new Si("firestore",(r,{instanceIdentifier:i,options:a})=>{const l=r.getProvider("app").getImmediate(),c=new ol(new Zb(r.getProvider("auth-internal")),new rx(r.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new ce(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bu(p.options.projectId,y)}(l,i),l);return a=Object.assign({useFetchStreams:t},a),c._setSettings(a),c},"PUBLIC").setMultipleInstances(!0)),Yn(H0,"4.7.0",e),Yn(H0,"4.7.0","esm2017")})();var NE={};const bE="@firebase/database",xE="1.0.7";/**
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
 */let rC="";function oL(n){rC=n}/**
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
 */class aL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Nt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Mu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class lL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return qr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const iC=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aL(e)}}catch{}return new lL},po=iC("localStorage"),uL=iC("sessionStorage");/**
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
 */const Oa=new hf("@firebase/database"),cL=function(){let n=1;return function(){return n++}}(),sC=function(n){const e=WN(n),t=new BN;t.update(e);const r=t.digest();return d_.encodeByteArray(r)},wc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=wc.apply(null,r):typeof r=="object"?e+=Nt(r):e+=r,e+=" "}return e};let Pu=null,DE=!0;const hL=function(n,e){ne(!e,"Can't turn on custom loggers persistently."),Oa.logLevel=xe.VERBOSE,Pu=Oa.log.bind(Oa)},zt=function(...n){if(DE===!0&&(DE=!1,Pu===null&&uL.get("logging_enabled")===!0&&hL()),Pu){const e=wc.apply(null,n);Pu(e)}},Ec=function(n){return function(...e){zt(n,...e)}},Lg=function(...n){const e="FIREBASE INTERNAL ERROR: "+wc(...n);Oa.error(e)},Pi=function(...n){const e=`FIREBASE FATAL ERROR: ${wc(...n)}`;throw Oa.error(e),new Error(e)},mn=function(...n){const e="FIREBASE WARNING: "+wc(...n);Oa.warn(e)},dL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pf=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},fL=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Io="[MIN_NAME]",Ts="[MAX_NAME]",Do=function(n,e){if(n===e)return 0;if(n===Io||e===Ts)return-1;if(e===Io||n===Ts)return 1;{const t=OE(n),r=OE(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},pL=function(n,e){return n===e?0:n<e?-1:1},du=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Nt(e))},Z_=function(n){if(typeof n!="object"||n===null)return Nt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Nt(e[r]),t+=":",t+=Z_(n[e[r]]);return t+="}",t},oC=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function jt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const aC=function(n){ne(!Pf(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,a,l,c,f;n===0?(a=0,l=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=c+r,l=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(a=0,l=Math.round(n/Math.pow(2,1-r-t))));const p=[];for(f=t;f;f-=1)p.push(l%2?1:0),l=Math.floor(l/2);for(f=e;f;f-=1)p.push(a%2?1:0),a=Math.floor(a/2);p.push(i?1:0),p.reverse();const y=p.join("");let v="";for(f=0;f<64;f+=8){let E=parseInt(y.substr(f,8),2).toString(16);E.length===1&&(E="0"+E),v=v+E}return v.toLowerCase()},mL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _L(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const yL=new RegExp("^-?(0*)\\d{1,10}$"),vL=-2147483648,wL=2147483647,OE=function(n){if(yL.test(n)){const e=Number(n);if(e>=vL&&e<=wL)return e}return null},al=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw mn("Exception was thrown by user callback.",t),e},Math.floor(0))}},EL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ku=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class TL{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){mn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class IL{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(zt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mn(e)}}class pd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pd.OWNER="owner";/**
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
 */const ey="5",lC="v",uC="s",cC="r",hC="f",dC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fC="ls",pC="p",Mg="ac",mC="websocket",gC="long_polling";/**
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
 */class _C{constructor(e,t,r,i,a=!1,l="",c=!1,f=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=a,this.persistenceKey=l,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=f,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=po.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&po.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function SL(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function yC(n,e,t){ne(typeof e=="string","typeof type must == string"),ne(typeof t=="object","typeof params must == object");let r;if(e===mC)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===gC)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);SL(n)&&(t.ns=n.namespace);const i=[];return jt(t,(a,l)=>{i.push(a+"="+l)}),r+i.join("&")}/**
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
 */class CL{constructor(){this.counters_={}}incrementCounter(e,t=1){qr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return IN(this.counters_)}}/**
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
 */const $m={},Wm={};function ty(n){const e=n.toString();return $m[e]||($m[e]=new CL),$m[e]}function RL(n,e){const t=n.toString();return Wm[t]||(Wm[t]=e()),Wm[t]}/**
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
 */class AL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&al(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const LE="start",PL="close",kL="pLPCommand",NL="pRTLPCB",vC="id",wC="pw",EC="ser",bL="cb",xL="seg",DL="ts",OL="d",LL="dframe",TC=1870,IC=30,ML=TC-IC,VL=25e3,FL=3e4;class ba{constructor(e,t,r,i,a,l,c){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.transportSessionId=l,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ec(e),this.stats_=ty(t),this.urlFn=f=>(this.appCheckToken&&(f[Mg]=this.appCheckToken),yC(t,gC,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new AL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FL)),fL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ny((...a)=>{const[l,c,f,p,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===LE)this.id=c,this.password=f;else if(l===PL)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...a)=>{const[l,c]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(l,c)},()=>{this.onClosed_()},this.urlFn);const r={};r[LE]="t",r[EC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[bL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[lC]=ey,this.transportSessionId&&(r[uC]=this.transportSessionId),this.lastSessionId&&(r[fC]=this.lastSessionId),this.applicationId&&(r[pC]=this.applicationId),this.appCheckToken&&(r[Mg]=this.appCheckToken),typeof location<"u"&&location.hostname&&dC.test(location.hostname)&&(r[cC]=hC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ba.forceAllow_=!0}static forceDisallow(){ba.forceDisallow_=!0}static isAvailable(){return ba.forceAllow_?!0:!ba.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mL()&&!gL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Nt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=vI(t),i=oC(r,ML);for(let a=0;a<i.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[LL]="t",r[vC]=e,r[wC]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Nt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ny{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cL(),window[kL+this.uniqueCallbackIdentifier]=e,window[NL+this.uniqueCallbackIdentifier]=t,this.myIFrame=ny.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(c){zt("frame writing exception"),c.stack&&zt(c.stack),zt(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||zt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vC]=this.myID,e[wC]=this.myPW,e[EC]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+IC+r.length<=TC;){const l=this.pendingSegs.shift();r=r+"&"+xL+i+"="+l.seg+"&"+DL+i+"="+l.ts+"&"+OL+i+"="+l.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(VL)),a=()=>{clearTimeout(i),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{zt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const UL=16384,BL=45e3;let Dd=null;typeof MozWebSocket<"u"?Dd=MozWebSocket:typeof WebSocket<"u"&&(Dd=WebSocket);class pr{constructor(e,t,r,i,a,l,c){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ec(this.connId),this.stats_=ty(t),this.connURL=pr.connectionURL_(t,l,c,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,a){const l={};return l[lC]=ey,typeof location<"u"&&location.hostname&&dC.test(location.hostname)&&(l[cC]=hC),t&&(l[uC]=t),r&&(l[fC]=r),i&&(l[Mg]=i),a&&(l[pC]=a),yC(e,mC,l)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,po.set("previous_websocket_failure",!0);try{let r;CI(),this.mySock=new Dd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){pr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Dd!==null&&!pr.forceDisallow_}static previouslyFailed(){return po.isInMemoryStorage||po.get("previous_websocket_failure")===!0}markConnectionHealthy(){po.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Mu(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ne(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Nt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=oC(t,UL);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BL))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pr.responsesRequiredToBeHealthy=2;pr.healthyTimeout=3e4;/**
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
 */class Hu{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ba,pr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=pr&&pr.isAvailable();let r=t&&!pr.previouslyFailed();if(e.webSocketOnly&&(t||mn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[pr];else{const i=this.transports_=[];for(const a of Hu.ALL_TRANSPORTS)a&&a.isAvailable()&&i.push(a);Hu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hu.globalTransportInitialized_=!1;/**
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
 */const zL=6e4,jL=5e3,$L=10*1024,WL=100*1024,Hm="t",ME="d",HL="s",VE="r",qL="e",FE="o",UE="a",BE="n",zE="p",KL="h";class GL{constructor(e,t,r,i,a,l,c,f,p,y){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=a,this.onMessage_=l,this.onReady_=c,this.onDisconnect_=f,this.onKill_=p,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ec("c:"+this.id+":"),this.transportManager_=new Hu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ku(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$L?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hm in e){const t=e[Hm];t===UE?this.upgradeIfSecondaryHealthy_():t===VE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===FE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=du("t",e),r=du("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:UE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:BE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=du("t",e),r=du("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=du(Hm,e);if(ME in e){const r=e[ME];if(t===KL){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===BE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===HL?this.onConnectionShutdown_(r):t===VE?this.onReset_(r):t===qL?Lg("Server Error: "+r):t===FE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ey!==r&&mn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),ku(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ku(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(po.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class SC{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class CC{constructor(e){this.allowedEvents_=e,this.listeners_={},ne(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let a=0;a<i.length;a++)if(i[a].callback===t&&(!r||r===i[a].context)){i.splice(a,1);return}}validateEventType_(e){ne(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Od extends CC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!m_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Od}getInitialEvent(e){return ne(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const jE=32,$E=768;class He{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ze(){return new He("")}function Ae(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Is(n){return n.pieces_.length-n.pieceNum_}function Qe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new He(n.pieces_,e)}function ry(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function QL(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function qu(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function RC(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new He(e,0)}function ht(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof He)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new He(t,0)}function Pe(n){return n.pieceNum_>=n.pieces_.length}function fn(n,e){const t=Ae(n),r=Ae(e);if(t===null)return e;if(t===r)return fn(Qe(n),Qe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function YL(n,e){const t=qu(n,0),r=qu(e,0);for(let i=0;i<t.length&&i<r.length;i++){const a=Do(t[i],r[i]);if(a!==0)return a}return t.length===r.length?0:t.length<r.length?-1:1}function iy(n,e){if(Is(n)!==Is(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Qn(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Is(n)>Is(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class XL{constructor(e,t){this.errorPrefix_=t,this.parts_=qu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=cf(this.parts_[r]);AC(this)}}function JL(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=cf(e),AC(n)}function ZL(n){const e=n.parts_.pop();n.byteLength_-=cf(e),n.parts_.length>0&&(n.byteLength_-=1)}function AC(n){if(n.byteLength_>$E)throw new Error(n.errorPrefix_+"has a key path longer than "+$E+" bytes ("+n.byteLength_+").");if(n.parts_.length>jE)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jE+") or object contains a cycle "+co(n))}function co(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class sy extends CC{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new sy}getInitialEvent(e){return ne(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const fu=1e3,eM=60*5*1e3,WE=30*1e3,tM=1.3,nM=3e4,rM="server_kill",HE=3;class wi extends SC{constructor(e,t,r,i,a,l,c,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=a,this.authTokenProvider_=l,this.appCheckTokenProvider_=c,this.authOverride_=f,this.id=wi.nextPersistentConnectionId_++,this.log_=Ec("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fu,this.maxReconnectDelay_=eM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f&&!CI())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Od.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,a={r:i,a:e,b:t};this.log_(Nt(a)),ne(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Mr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const c=l.d;l.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,i){this.initConnection_();const a=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+a),this.listens.has(l)||this.listens.set(l,new Map),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ne(!this.listens.get(l).has(a),"listen() called twice for same path/queryId.");const c={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(l).set(a,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const a={p:r},l="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(l,a,c=>{const f=c.d,p=c.s;wi.warnOnListenWarnings_(f,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",c),p!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(p,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&qr(e,"w")){const r=Fa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();mn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||UN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=WE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=FN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const a=i.s,l=i.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),ne(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const a={p:e},l="n";i&&(a.q=r,a.t=i),this.sendRequest(l,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,l=>{i&&setTimeout(()=>{i(l.s,l.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,a){this.initConnection_();const l={p:t,d:r};a!==void 0&&(l.h=a),this.outstandingPuts_.push({action:e,request:l,onComplete:i}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Nt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Lg("Unrecognized action received from server: "+Nt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ne(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nM&&(this.reconnectDelay_=fu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+wi.nextConnectionId_++,a=this.lastSessionId;let l=!1,c=null;const f=function(){c?c.close():(l=!0,r())},p=function(v){ne(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(v)};this.realtime_={close:f,sendRequest:p};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,E]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);l?zt("getToken() completed but was canceled"):(zt("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=E&&E.token,c=new GL(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,S=>{mn(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(rM)},a))}catch(v){this.log_("Failed to get token: "+v),l||(this.repoInfo_.nodeAdmin&&mn(v),f())}}}interrupt(e){zt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){zt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Td(this.interruptReasons_)&&(this.reconnectDelay_=fu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>Z_(a)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new He(e).toString();let i;if(this.listens.has(r)){const a=this.listens.get(r);i=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){zt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=HE&&(this.reconnectDelay_=WE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){zt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=HE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+rC.replace(/\./g,"-")]=1,m_()?e["framework.cordova"]=1:SI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Od.getInstance().currentlyOnline();return Td(this.interruptReasons_)&&e}}wi.nextPersistentConnectionId_=0;wi.nextConnectionId_=0;/**
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
 */class be{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new be(e,t)}}/**
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
 */class kf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new be(Io,e),i=new be(Io,t);return this.compare(r,i)!==0}minPost(){return be.MIN}}/**
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
 */let Jh;class PC extends kf{static get __EMPTY_NODE(){return Jh}static set __EMPTY_NODE(e){Jh=e}compare(e,t){return Do(e.name,t.name)}isDefinedOn(e){throw el("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return be.MIN}maxPost(){return new be(Ts,Jh)}makePost(e,t){return ne(typeof e=="string","KeyIndex indexValue must always be a string."),new be(e,Jh)}toString(){return".key"}}const _o=new PC;/**
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
 */class Zh{constructor(e,t,r,i,a=null){this.isReverse_=i,this.resultGenerator_=a,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=t?r(e.key,t):1,i&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??Bt.RED,this.left=i??Cn.EMPTY_NODE,this.right=a??Cn.EMPTY_NODE}copy(e,t,r,i,a){return new Bt(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return a<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Cn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Cn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0;Bt.BLACK=!1;class iM{copy(e,t,r,i,a){return this}insert(e,t,r){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Cn{constructor(e,t=Cn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Cn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new Cn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Zh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Zh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Zh(this.root_,null,this.comparator_,!0,e)}}Cn.EMPTY_NODE=new iM;/**
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
 */function sM(n,e){return Do(n.name,e.name)}function oy(n,e){return Do(n,e)}/**
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
 */let Vg;function oM(n){Vg=n}const kC=function(n){return typeof n=="number"?"number:"+aC(n):"string:"+n},NC=function(n){if(n.isLeafNode()){const e=n.val();ne(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qr(e,".sv"),"Priority must be a string or number.")}else ne(n===Vg||n.isEmpty(),"priority of unexpected type.");ne(n===Vg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let qE;class Ft{constructor(e,t=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ne(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),NC(this.priorityNode_)}static set __childrenNodeConstructor(e){qE=e}static get __childrenNodeConstructor(){return qE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Pe(e)?this:Ae(e)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ae(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(ne(r!==".priority"||Is(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(Qe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kC(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=aC(this.value_):e+=this.value_,this.lazyHash_=sC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ft.__childrenNodeConstructor?-1:(ne(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Ft.VALUE_TYPE_ORDER.indexOf(t),a=Ft.VALUE_TYPE_ORDER.indexOf(r);return ne(i>=0,"Unknown leaf type: "+t),ne(a>=0,"Unknown leaf type: "+r),i===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let bC,xC;function aM(n){bC=n}function lM(n){xC=n}class uM extends kf{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),a=r.compareTo(i);return a===0?Do(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return be.MIN}maxPost(){return new be(Ts,new Ft("[PRIORITY-POST]",xC))}makePost(e,t){const r=bC(e);return new be(t,new Ft("[PRIORITY-POST]",r))}toString(){return".priority"}}const ot=new uM;/**
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
 */const cM=Math.log(2);class hM{constructor(e){const t=a=>parseInt(Math.log(a)/cM,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ld=function(n,e,t,r){n.sort(e);const i=function(f,p){const y=p-f;let v,E;if(y===0)return null;if(y===1)return v=n[f],E=t?t(v):v,new Bt(E,v.node,Bt.BLACK,null,null);{const S=parseInt(y/2,10)+f,R=i(f,S),O=i(S+1,p);return v=n[S],E=t?t(v):v,new Bt(E,v.node,Bt.BLACK,R,O)}},a=function(f){let p=null,y=null,v=n.length;const E=function(R,O){const A=v-R,B=v;v-=R;const K=i(A+1,B),q=n[A],Q=t?t(q):q;S(new Bt(Q,q.node,O,null,K))},S=function(R){p?(p.left=R,p=R):(y=R,p=R)};for(let R=0;R<f.count;++R){const O=f.nextBitIsOne(),A=Math.pow(2,f.count-(R+1));O?E(A,Bt.BLACK):(E(A,Bt.BLACK),E(A,Bt.RED))}return y},l=new hM(n.length),c=a(l);return new Cn(r||e,c)};/**
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
 */let qm;const Aa={};class pi{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return ne(Aa&&ot,"ChildrenNode.ts has not been loaded"),qm=qm||new pi({".priority":Aa},{".priority":ot}),qm}get(e){const t=Fa(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Cn?t:null}hasIndex(e){return qr(this.indexSet_,e.toString())}addIndex(e,t){ne(e!==_o,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const a=t.getIterator(be.Wrap);let l=a.getNext();for(;l;)i=i||e.isDefinedOn(l.node),r.push(l),l=a.getNext();let c;i?c=Ld(r,e.getCompare()):c=Aa;const f=e.toString(),p=Object.assign({},this.indexSet_);p[f]=e;const y=Object.assign({},this.indexes_);return y[f]=c,new pi(y,p)}addToIndexes(e,t){const r=Id(this.indexes_,(i,a)=>{const l=Fa(this.indexSet_,a);if(ne(l,"Missing index implementation for "+a),i===Aa)if(l.isDefinedOn(e.node)){const c=[],f=t.getIterator(be.Wrap);let p=f.getNext();for(;p;)p.name!==e.name&&c.push(p),p=f.getNext();return c.push(e),Ld(c,l.getCompare())}else return Aa;else{const c=t.get(e.name);let f=i;return c&&(f=f.remove(new be(e.name,c))),f.insert(e,e.node)}});return new pi(r,this.indexSet_)}removeFromIndexes(e,t){const r=Id(this.indexes_,i=>{if(i===Aa)return i;{const a=t.get(e.name);return a?i.remove(new be(e.name,a)):i}});return new pi(r,this.indexSet_)}}/**
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
 */let pu;class we{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&NC(this.priorityNode_),this.children_.isEmpty()&&ne(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pu||(pu=new we(new Cn(oy),null,pi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pu}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?pu:t}}getChild(e){const t=Ae(e);return t===null?this:this.getImmediateChild(t).getChild(Qe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ne(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new be(e,t);let i,a;t.isEmpty()?(i=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const l=i.isEmpty()?pu:this.priorityNode_;return new we(i,l,a)}}updateChild(e,t){const r=Ae(e);if(r===null)return t;{ne(Ae(e)!==".priority"||Is(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Qe(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,a=!0;if(this.forEachChild(ot,(l,c)=>{t[l]=c.val(e),r++,a&&we.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):a=!1}),!e&&a&&i<2*r){const l=[];for(const c in t)l[c]=t[c];return l}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kC(this.getPriority().val())+":"),this.forEachChild(ot,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":sC(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const a=i.getPredecessorKey(new be(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new be(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new be(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,be.Wrap);let a=i.peek();for(;a!=null&&t.compare(a,e)<0;)i.getNext(),a=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,be.Wrap);let a=i.peek();for(;a!=null&&t.compare(a,e)>0;)i.getNext(),a=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Tc?-1:0}withIndex(e){if(e===_o||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===_o||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ot),i=t.getIterator(ot);let a=r.getNext(),l=i.getNext();for(;a&&l;){if(a.name!==l.name||!a.node.equals(l.node))return!1;a=r.getNext(),l=i.getNext()}return a===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===_o?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dM extends we{constructor(){super(new Cn(oy),we.EMPTY_NODE,pi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Tc=new dM;Object.defineProperties(be,{MIN:{value:new be(Io,we.EMPTY_NODE)},MAX:{value:new be(Ts,Tc)}});PC.__EMPTY_NODE=we.EMPTY_NODE;Ft.__childrenNodeConstructor=we;oM(Tc);lM(Tc);/**
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
 */const fM=!0;function ft(n,e=null){if(n===null)return we.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ne(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ft(t,ft(e))}if(!(n instanceof Array)&&fM){const t=[];let r=!1;if(jt(n,(l,c)=>{if(l.substring(0,1)!=="."){const f=ft(c);f.isEmpty()||(r=r||!f.getPriority().isEmpty(),t.push(new be(l,f)))}}),t.length===0)return we.EMPTY_NODE;const a=Ld(t,sM,l=>l.name,oy);if(r){const l=Ld(t,ot.getCompare());return new we(a,ft(e),new pi({".priority":l},{".priority":ot}))}else return new we(a,ft(e),pi.Default)}else{let t=we.EMPTY_NODE;return jt(n,(r,i)=>{if(qr(n,r)&&r.substring(0,1)!=="."){const a=ft(i);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(ft(e))}}aM(ft);/**
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
 */class ay extends kf{constructor(e){super(),this.indexPath_=e,ne(!Pe(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),a=r.compareTo(i);return a===0?Do(e.name,t.name):a}makePost(e,t){const r=ft(e),i=we.EMPTY_NODE.updateChild(this.indexPath_,r);return new be(t,i)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Tc);return new be(Ts,e)}toString(){return qu(this.indexPath_,0).join("/")}}/**
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
 */class pM extends kf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Do(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return be.MIN}maxPost(){return be.MAX}makePost(e,t){const r=ft(e);return new be(t,r)}toString(){return".value"}}const DC=new pM;/**
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
 */function OC(n){return{type:"value",snapshotNode:n}}function Ka(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ku(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Gu(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function mM(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ly{constructor(e){this.index_=e}updateChild(e,t,r,i,a,l){ne(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(t);return c.getChild(i).equals(r.getChild(i))&&c.isEmpty()===r.isEmpty()||(l!=null&&(r.isEmpty()?e.hasChild(t)?l.trackChildChange(Ku(t,c)):ne(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?l.trackChildChange(Ka(t,r)):l.trackChildChange(Gu(t,r,c))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ot,(i,a)=>{t.hasChild(i)||r.trackChildChange(Ku(i,a))}),t.isLeafNode()||t.forEachChild(ot,(i,a)=>{if(e.hasChild(i)){const l=e.getImmediateChild(i);l.equals(a)||r.trackChildChange(Gu(i,a,l))}else r.trackChildChange(Ka(i,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?we.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Qu{constructor(e){this.indexedFilter_=new ly(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qu.getStartPost_(e),this.endPost_=Qu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,a,l){return this.matches(new be(t,r))||(r=we.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,a,l)}updateFullNode(e,t,r){t.isLeafNode()&&(t=we.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(we.EMPTY_NODE);const a=this;return t.forEachChild(ot,(l,c)=>{a.matches(new be(l,c))||(i=i.updateImmediateChild(l,we.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class gM{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Qu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,a,l){return this.rangedFilter_.matches(new be(t,r))||(r=we.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,a,l):this.fullLimitUpdateChild_(e,t,r,a,l)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=we.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=we.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let l=0;for(;a.hasNext()&&l<this.limit_;){const c=a.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))i=i.updateImmediateChild(c.name,c.node),l++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(we.EMPTY_NODE);let a;this.reverse_?a=i.getReverseIterator(this.index_):a=i.getIterator(this.index_);let l=0;for(;a.hasNext();){const c=a.getNext();l<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?l++:i=i.updateImmediateChild(c.name,we.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,a){let l;if(this.reverse_){const v=this.index_.getCompare();l=(E,S)=>v(S,E)}else l=this.index_.getCompare();const c=e;ne(c.numChildren()===this.limit_,"");const f=new be(t,r),p=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(c.hasChild(t)){const v=c.getImmediateChild(t);let E=i.getChildAfterChild(this.index_,p,this.reverse_);for(;E!=null&&(E.name===t||c.hasChild(E.name));)E=i.getChildAfterChild(this.index_,E,this.reverse_);const S=E==null?1:l(E,f);if(y&&!r.isEmpty()&&S>=0)return a!=null&&a.trackChildChange(Gu(t,r,v)),c.updateImmediateChild(t,r);{a!=null&&a.trackChildChange(Ku(t,v));const O=c.updateImmediateChild(t,we.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(a!=null&&a.trackChildChange(Ka(E.name,E.node)),O.updateImmediateChild(E.name,E.node)):O}}else return r.isEmpty()?e:y&&l(p,f)>=0?(a!=null&&(a.trackChildChange(Ku(p.name,p.node)),a.trackChildChange(Ka(t,r))),c.updateImmediateChild(t,r).updateImmediateChild(p.name,we.EMPTY_NODE)):e}}/**
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
 */class uy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ne(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ne(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Io}hasEnd(){return this.endSet_}getIndexEndValue(){return ne(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ne(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ne(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ot}copy(){const e=new uy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _M(n){return n.loadsAllData()?new ly(n.getIndex()):n.hasLimit()?new gM(n):new Qu(n)}function yM(n,e,t){const r=n.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,t!=null?(r.startNameSet_=!0,r.indexStartName_=t):(r.startNameSet_=!1,r.indexStartName_=""),r}function vM(n,e,t){const r=n.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,t!==void 0?(r.endNameSet_=!0,r.indexEndName_=t):(r.endNameSet_=!1,r.indexEndName_=""),r}function wM(n,e){const t=n.copy();return t.index_=e,t}function KE(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ot?t="$priority":n.index_===DC?t="$value":n.index_===_o?t="$key":(ne(n.index_ instanceof ay,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Nt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Nt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Nt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Nt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Nt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function GE(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ot&&(e.i=n.index_.toString()),e}/**
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
 */class Md extends SC{constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ec("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ne(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,i){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const l=Md.getListenId_(e,r),c={};this.listens_[l]=c;const f=KE(e._queryParams);this.restRequest_(a+".json",f,(p,y)=>{let v=y;if(p===404&&(v=null,p=null),p===null&&this.onDataUpdate_(a,v,!1,r),Fa(this.listens_,l)===c){let E;p?p===401?E="permission_denied":E="rest_error:"+p:E="ok",i(E,null)}})}unlisten(e,t){const r=Md.getListenId_(e,t);delete this.listens_[r]}get(e){const t=KE(e._queryParams),r=e._path.toString(),i=new Mr;return this.restRequest_(r+".json",t,(a,l)=>{let c=l;a===404&&(c=null,a=null),a===null?(this.onDataUpdate_(r,c,!1,null),i.resolve(c)):i.reject(new Error(c))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,a])=>{i&&i.accessToken&&(t.auth=i.accessToken),a&&a.token&&(t.ac=a.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tl(t);this.log_("Sending REST request for "+l);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(r&&c.readyState===4){this.log_("REST Response for "+l+" received. status:",c.status,"response:",c.responseText);let f=null;if(c.status>=200&&c.status<300){try{f=Mu(c.responseText)}catch{mn("Failed to parse JSON response for "+l+": "+c.responseText)}r(null,f)}else c.status!==401&&c.status!==404&&mn("Got unsuccessful REST response for "+l+" Status: "+c.status),r(c.status);r=null}},c.open("GET",l,!0),c.send()})}}/**
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
 */class EM{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Vd(){return{value:null,children:new Map}}function ll(n,e,t){if(Pe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ae(e);n.children.has(r)||n.children.set(r,Vd());const i=n.children.get(r);e=Qe(e),ll(i,e,t)}}function Fg(n,e){if(Pe(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(ot,(r,i)=>{ll(n,new He(r),i)}),Fg(n,e)}}else if(n.children.size>0){const t=Ae(e);return e=Qe(e),n.children.has(t)&&Fg(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function Ug(n,e,t){n.value!==null?t(e,n.value):TM(n,(r,i)=>{const a=new He(e.toString()+"/"+r);Ug(i,a,t)})}function TM(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class IM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&jt(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
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
 */const QE=10*1e3,SM=30*1e3,CM=5*60*1e3;class RM{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new IM(e);const r=QE+(SM-QE)*Math.random();ku(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;jt(e,(i,a)=>{a>0&&qr(this.statsToReport_,i)&&(t[i]=a,r=!0)}),r&&this.server_.reportStats(t),ku(this.reportStats_.bind(this),Math.floor(Math.random()*2*CM))}}/**
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
 */var yr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yr||(yr={}));function cy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dy(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Fd{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=yr.ACK_USER_WRITE,this.source=cy()}operationForChild(e){if(Pe(this.path)){if(this.affectedTree.value!=null)return ne(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new He(e));return new Fd(ze(),t,this.revert)}}else return ne(Ae(this.path)===e,"operationForChild called for unrelated child."),new Fd(Qe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Yu{constructor(e,t){this.source=e,this.path=t,this.type=yr.LISTEN_COMPLETE}operationForChild(e){return Pe(this.path)?new Yu(this.source,ze()):new Yu(this.source,Qe(this.path))}}/**
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
 */class So{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=yr.OVERWRITE}operationForChild(e){return Pe(this.path)?new So(this.source,ze(),this.snap.getImmediateChild(e)):new So(this.source,Qe(this.path),this.snap)}}/**
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
 */class Ga{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=yr.MERGE}operationForChild(e){if(Pe(this.path)){const t=this.children.subtree(new He(e));return t.isEmpty()?null:t.value?new So(this.source,ze(),t.value):new Ga(this.source,ze(),t)}else return ne(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ga(this.source,Qe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ss{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Pe(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ae(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class AM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function PM(n,e,t,r){const i=[],a=[];return e.forEach(l=>{l.type==="child_changed"&&n.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&a.push(mM(l.childName,l.snapshotNode))}),mu(n,i,"child_removed",e,r,t),mu(n,i,"child_added",e,r,t),mu(n,i,"child_moved",a,r,t),mu(n,i,"child_changed",e,r,t),mu(n,i,"value",e,r,t),i}function mu(n,e,t,r,i,a){const l=r.filter(c=>c.type===t);l.sort((c,f)=>NM(n,c,f)),l.forEach(c=>{const f=kM(n,c,a);i.forEach(p=>{p.respondsTo(c.type)&&e.push(p.createEvent(f,n.query_))})})}function kM(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function NM(n,e,t){if(e.childName==null||t.childName==null)throw el("Should only compare child_ events.");const r=new be(e.childName,e.snapshotNode),i=new be(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function Nf(n,e){return{eventCache:n,serverCache:e}}function Nu(n,e,t,r){return Nf(new Ss(e,t,r),n.serverCache)}function LC(n,e,t,r){return Nf(n.eventCache,new Ss(e,t,r))}function Ud(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Co(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Km;const bM=()=>(Km||(Km=new Cn(pL)),Km);class et{constructor(e,t=bM()){this.value=e,this.children=t}static fromObject(e){let t=new et(null);return jt(e,(r,i)=>{t=t.set(new He(r),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ze(),value:this.value};if(Pe(e))return null;{const r=Ae(e),i=this.children.get(r);if(i!==null){const a=i.findRootMostMatchingPathAndValue(Qe(e),t);return a!=null?{path:ht(new He(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Pe(e))return this;{const t=Ae(e),r=this.children.get(t);return r!==null?r.subtree(Qe(e)):new et(null)}}set(e,t){if(Pe(e))return new et(t,this.children);{const r=Ae(e),a=(this.children.get(r)||new et(null)).set(Qe(e),t),l=this.children.insert(r,a);return new et(this.value,l)}}remove(e){if(Pe(e))return this.children.isEmpty()?new et(null):new et(null,this.children);{const t=Ae(e),r=this.children.get(t);if(r){const i=r.remove(Qe(e));let a;return i.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,i),this.value===null&&a.isEmpty()?new et(null):new et(this.value,a)}else return this}}get(e){if(Pe(e))return this.value;{const t=Ae(e),r=this.children.get(t);return r?r.get(Qe(e)):null}}setTree(e,t){if(Pe(e))return t;{const r=Ae(e),a=(this.children.get(r)||new et(null)).setTree(Qe(e),t);let l;return a.isEmpty()?l=this.children.remove(r):l=this.children.insert(r,a),new et(this.value,l)}}fold(e){return this.fold_(ze(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,a)=>{r[i]=a.fold_(ht(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,ze(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(Pe(e))return null;{const a=Ae(e),l=this.children.get(a);return l?l.findOnPath_(Qe(e),ht(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ze(),t)}foreachOnPath_(e,t,r){if(Pe(e))return this;{this.value&&r(t,this.value);const i=Ae(e),a=this.children.get(i);return a?a.foreachOnPath_(Qe(e),ht(t,i),r):new et(null)}}foreach(e){this.foreach_(ze(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(ht(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class wr{constructor(e){this.writeTree_=e}static empty(){return new wr(new et(null))}}function bu(n,e,t){if(Pe(e))return new wr(new et(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let a=r.value;const l=fn(i,e);return a=a.updateChild(l,t),new wr(n.writeTree_.set(i,a))}else{const i=new et(t),a=n.writeTree_.setTree(e,i);return new wr(a)}}}function Bg(n,e,t){let r=n;return jt(t,(i,a)=>{r=bu(r,ht(e,i),a)}),r}function YE(n,e){if(Pe(e))return wr.empty();{const t=n.writeTree_.setTree(e,new et(null));return new wr(t)}}function zg(n,e){return Oo(n,e)!=null}function Oo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(fn(t.path,e)):null}function XE(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ot,(r,i)=>{e.push(new be(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new be(r,i.value))}),e}function ps(n,e){if(Pe(e))return n;{const t=Oo(n,e);return t!=null?new wr(new et(t)):new wr(n.writeTree_.subtree(e))}}function jg(n){return n.writeTree_.isEmpty()}function Qa(n,e){return MC(ze(),n.writeTree_,e)}function MC(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,a)=>{i===".priority"?(ne(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=MC(ht(n,i),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(ht(n,".priority"),r)),t}}/**
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
 */function bf(n,e){return BC(e,n)}function xM(n,e,t,r,i){ne(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=bu(n.visibleWrites,e,t)),n.lastWriteId=r}function DM(n,e,t,r){ne(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=Bg(n.visibleWrites,e,t),n.lastWriteId=r}function OM(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function LM(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);ne(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,a=!1,l=n.allWrites.length-1;for(;i&&l>=0;){const c=n.allWrites[l];c.visible&&(l>=t&&MM(c,r.path)?i=!1:Qn(r.path,c.path)&&(a=!0)),l--}if(i){if(a)return VM(n),!0;if(r.snap)n.visibleWrites=YE(n.visibleWrites,r.path);else{const c=r.children;jt(c,f=>{n.visibleWrites=YE(n.visibleWrites,ht(r.path,f))})}return!0}else return!1}function MM(n,e){if(n.snap)return Qn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Qn(ht(n.path,t),e))return!0;return!1}function VM(n){n.visibleWrites=VC(n.allWrites,FM,ze()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function FM(n){return n.visible}function VC(n,e,t){let r=wr.empty();for(let i=0;i<n.length;++i){const a=n[i];if(e(a)){const l=a.path;let c;if(a.snap)Qn(t,l)?(c=fn(t,l),r=bu(r,c,a.snap)):Qn(l,t)&&(c=fn(l,t),r=bu(r,ze(),a.snap.getChild(c)));else if(a.children){if(Qn(t,l))c=fn(t,l),r=Bg(r,c,a.children);else if(Qn(l,t))if(c=fn(l,t),Pe(c))r=Bg(r,ze(),a.children);else{const f=Fa(a.children,Ae(c));if(f){const p=f.getChild(Qe(c));r=bu(r,ze(),p)}}}else throw el("WriteRecord should have .snap or .children")}}return r}function FC(n,e,t,r,i){if(!r&&!i){const a=Oo(n.visibleWrites,e);if(a!=null)return a;{const l=ps(n.visibleWrites,e);if(jg(l))return t;if(t==null&&!zg(l,ze()))return null;{const c=t||we.EMPTY_NODE;return Qa(l,c)}}}else{const a=ps(n.visibleWrites,e);if(!i&&jg(a))return t;if(!i&&t==null&&!zg(a,ze()))return null;{const l=function(p){return(p.visible||i)&&(!r||!~r.indexOf(p.writeId))&&(Qn(p.path,e)||Qn(e,p.path))},c=VC(n.allWrites,l,e),f=t||we.EMPTY_NODE;return Qa(c,f)}}}function UM(n,e,t){let r=we.EMPTY_NODE;const i=Oo(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ot,(a,l)=>{r=r.updateImmediateChild(a,l)}),r;if(t){const a=ps(n.visibleWrites,e);return t.forEachChild(ot,(l,c)=>{const f=Qa(ps(a,new He(l)),c);r=r.updateImmediateChild(l,f)}),XE(a).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}else{const a=ps(n.visibleWrites,e);return XE(a).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}}function BM(n,e,t,r,i){ne(r||i,"Either existingEventSnap or existingServerSnap must exist");const a=ht(e,t);if(zg(n.visibleWrites,a))return null;{const l=ps(n.visibleWrites,a);return jg(l)?i.getChild(t):Qa(l,i.getChild(t))}}function zM(n,e,t,r){const i=ht(e,t),a=Oo(n.visibleWrites,i);if(a!=null)return a;if(r.isCompleteForChild(t)){const l=ps(n.visibleWrites,i);return Qa(l,r.getNode().getImmediateChild(t))}else return null}function jM(n,e){return Oo(n.visibleWrites,e)}function $M(n,e,t,r,i,a,l){let c;const f=ps(n.visibleWrites,e),p=Oo(f,ze());if(p!=null)c=p;else if(t!=null)c=Qa(f,t);else return[];if(c=c.withIndex(l),!c.isEmpty()&&!c.isLeafNode()){const y=[],v=l.getCompare(),E=a?c.getReverseIteratorFrom(r,l):c.getIteratorFrom(r,l);let S=E.getNext();for(;S&&y.length<i;)v(S,r)!==0&&y.push(S),S=E.getNext();return y}else return[]}function WM(){return{visibleWrites:wr.empty(),allWrites:[],lastWriteId:-1}}function Bd(n,e,t,r){return FC(n.writeTree,n.treePath,e,t,r)}function fy(n,e){return UM(n.writeTree,n.treePath,e)}function JE(n,e,t,r){return BM(n.writeTree,n.treePath,e,t,r)}function zd(n,e){return jM(n.writeTree,ht(n.treePath,e))}function HM(n,e,t,r,i,a){return $M(n.writeTree,n.treePath,e,t,r,i,a)}function py(n,e,t){return zM(n.writeTree,n.treePath,e,t)}function UC(n,e){return BC(ht(n.treePath,e),n.writeTree)}function BC(n,e){return{treePath:n,writeTree:e}}/**
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
 */class qM{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;ne(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ne(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const a=i.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Gu(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,Ku(r,i.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,Ka(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Gu(r,e.snapshotNode,i.oldSnap));else throw el("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class KM{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const zC=new KM;class my{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ss(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return py(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Co(this.viewCache_),a=HM(this.writes_,i,t,1,r,e);return a.length===0?null:a[0]}}/**
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
 */function GM(n){return{filter:n}}function QM(n,e){ne(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ne(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function YM(n,e,t,r,i){const a=new qM;let l,c;if(t.type===yr.OVERWRITE){const p=t;p.source.fromUser?l=$g(n,e,p.path,p.snap,r,i,a):(ne(p.source.fromServer,"Unknown source."),c=p.source.tagged||e.serverCache.isFiltered()&&!Pe(p.path),l=jd(n,e,p.path,p.snap,r,i,c,a))}else if(t.type===yr.MERGE){const p=t;p.source.fromUser?l=JM(n,e,p.path,p.children,r,i,a):(ne(p.source.fromServer,"Unknown source."),c=p.source.tagged||e.serverCache.isFiltered(),l=Wg(n,e,p.path,p.children,r,i,c,a))}else if(t.type===yr.ACK_USER_WRITE){const p=t;p.revert?l=t2(n,e,p.path,r,i,a):l=ZM(n,e,p.path,p.affectedTree,r,i,a)}else if(t.type===yr.LISTEN_COMPLETE)l=e2(n,e,t.path,r,a);else throw el("Unknown operation type: "+t.type);const f=a.getChanges();return XM(e,l,f),{viewCache:l,changes:f}}function XM(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Ud(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(OC(Ud(e)))}}function jC(n,e,t,r,i,a){const l=e.eventCache;if(zd(r,t)!=null)return e;{let c,f;if(Pe(t))if(ne(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const p=Co(e),y=p instanceof we?p:we.EMPTY_NODE,v=fy(r,y);c=n.filter.updateFullNode(e.eventCache.getNode(),v,a)}else{const p=Bd(r,Co(e));c=n.filter.updateFullNode(e.eventCache.getNode(),p,a)}else{const p=Ae(t);if(p===".priority"){ne(Is(t)===1,"Can't have a priority with additional path components");const y=l.getNode();f=e.serverCache.getNode();const v=JE(r,t,y,f);v!=null?c=n.filter.updatePriority(y,v):c=l.getNode()}else{const y=Qe(t);let v;if(l.isCompleteForChild(p)){f=e.serverCache.getNode();const E=JE(r,t,l.getNode(),f);E!=null?v=l.getNode().getImmediateChild(p).updateChild(y,E):v=l.getNode().getImmediateChild(p)}else v=py(r,p,e.serverCache);v!=null?c=n.filter.updateChild(l.getNode(),p,v,y,i,a):c=l.getNode()}}return Nu(e,c,l.isFullyInitialized()||Pe(t),n.filter.filtersNodes())}}function jd(n,e,t,r,i,a,l,c){const f=e.serverCache;let p;const y=l?n.filter:n.filter.getIndexedFilter();if(Pe(t))p=y.updateFullNode(f.getNode(),r,null);else if(y.filtersNodes()&&!f.isFiltered()){const S=f.getNode().updateChild(t,r);p=y.updateFullNode(f.getNode(),S,null)}else{const S=Ae(t);if(!f.isCompleteForPath(t)&&Is(t)>1)return e;const R=Qe(t),A=f.getNode().getImmediateChild(S).updateChild(R,r);S===".priority"?p=y.updatePriority(f.getNode(),A):p=y.updateChild(f.getNode(),S,A,R,zC,null)}const v=LC(e,p,f.isFullyInitialized()||Pe(t),y.filtersNodes()),E=new my(i,v,a);return jC(n,v,t,i,E,c)}function $g(n,e,t,r,i,a,l){const c=e.eventCache;let f,p;const y=new my(i,e,a);if(Pe(t))p=n.filter.updateFullNode(e.eventCache.getNode(),r,l),f=Nu(e,p,!0,n.filter.filtersNodes());else{const v=Ae(t);if(v===".priority")p=n.filter.updatePriority(e.eventCache.getNode(),r),f=Nu(e,p,c.isFullyInitialized(),c.isFiltered());else{const E=Qe(t),S=c.getNode().getImmediateChild(v);let R;if(Pe(E))R=r;else{const O=y.getCompleteChild(v);O!=null?ry(E)===".priority"&&O.getChild(RC(E)).isEmpty()?R=O:R=O.updateChild(E,r):R=we.EMPTY_NODE}if(S.equals(R))f=e;else{const O=n.filter.updateChild(c.getNode(),v,R,E,y,l);f=Nu(e,O,c.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function ZE(n,e){return n.eventCache.isCompleteForChild(e)}function JM(n,e,t,r,i,a,l){let c=e;return r.foreach((f,p)=>{const y=ht(t,f);ZE(e,Ae(y))&&(c=$g(n,c,y,p,i,a,l))}),r.foreach((f,p)=>{const y=ht(t,f);ZE(e,Ae(y))||(c=$g(n,c,y,p,i,a,l))}),c}function eT(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Wg(n,e,t,r,i,a,l,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,p;Pe(t)?p=r:p=new et(null).setTree(t,r);const y=e.serverCache.getNode();return p.children.inorderTraversal((v,E)=>{if(y.hasChild(v)){const S=e.serverCache.getNode().getImmediateChild(v),R=eT(n,S,E);f=jd(n,f,new He(v),R,i,a,l,c)}}),p.children.inorderTraversal((v,E)=>{const S=!e.serverCache.isCompleteForChild(v)&&E.value===null;if(!y.hasChild(v)&&!S){const R=e.serverCache.getNode().getImmediateChild(v),O=eT(n,R,E);f=jd(n,f,new He(v),O,i,a,l,c)}}),f}function ZM(n,e,t,r,i,a,l){if(zd(i,t)!=null)return e;const c=e.serverCache.isFiltered(),f=e.serverCache;if(r.value!=null){if(Pe(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return jd(n,e,t,f.getNode().getChild(t),i,a,c,l);if(Pe(t)){let p=new et(null);return f.getNode().forEachChild(_o,(y,v)=>{p=p.set(new He(y),v)}),Wg(n,e,t,p,i,a,c,l)}else return e}else{let p=new et(null);return r.foreach((y,v)=>{const E=ht(t,y);f.isCompleteForPath(E)&&(p=p.set(y,f.getNode().getChild(E)))}),Wg(n,e,t,p,i,a,c,l)}}function e2(n,e,t,r,i){const a=e.serverCache,l=LC(e,a.getNode(),a.isFullyInitialized()||Pe(t),a.isFiltered());return jC(n,l,t,r,zC,i)}function t2(n,e,t,r,i,a){let l;if(zd(r,t)!=null)return e;{const c=new my(r,e,i),f=e.eventCache.getNode();let p;if(Pe(t)||Ae(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Bd(r,Co(e));else{const v=e.serverCache.getNode();ne(v instanceof we,"serverChildren would be complete if leaf node"),y=fy(r,v)}y=y,p=n.filter.updateFullNode(f,y,a)}else{const y=Ae(t);let v=py(r,y,e.serverCache);v==null&&e.serverCache.isCompleteForChild(y)&&(v=f.getImmediateChild(y)),v!=null?p=n.filter.updateChild(f,y,v,Qe(t),c,a):e.eventCache.getNode().hasChild(y)?p=n.filter.updateChild(f,y,we.EMPTY_NODE,Qe(t),c,a):p=f,p.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=Bd(r,Co(e)),l.isLeafNode()&&(p=n.filter.updateFullNode(p,l,a)))}return l=e.serverCache.isFullyInitialized()||zd(r,ze())!=null,Nu(e,p,l,n.filter.filtersNodes())}}/**
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
 */class n2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ly(r.getIndex()),a=_M(r);this.processor_=GM(a);const l=t.serverCache,c=t.eventCache,f=i.updateFullNode(we.EMPTY_NODE,l.getNode(),null),p=a.updateFullNode(we.EMPTY_NODE,c.getNode(),null),y=new Ss(f,l.isFullyInitialized(),i.filtersNodes()),v=new Ss(p,c.isFullyInitialized(),a.filtersNodes());this.viewCache_=Nf(v,y),this.eventGenerator_=new AM(this.query_)}get query(){return this.query_}}function r2(n){return n.viewCache_.serverCache.getNode()}function i2(n){return Ud(n.viewCache_)}function s2(n,e){const t=Co(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Pe(e)&&!t.getImmediateChild(Ae(e)).isEmpty())?t.getChild(e):null}function tT(n){return n.eventRegistrations_.length===0}function o2(n,e){n.eventRegistrations_.push(e)}function nT(n,e,t){const r=[];if(t){ne(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(a=>{const l=a.createCancelEvent(t,i);l&&r.push(l)})}if(e){let i=[];for(let a=0;a<n.eventRegistrations_.length;++a){const l=n.eventRegistrations_[a];if(!l.matches(e))i.push(l);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function rT(n,e,t,r){e.type===yr.MERGE&&e.source.queryId!==null&&(ne(Co(n.viewCache_),"We should always have a full cache before handling merges"),ne(Ud(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,a=YM(n.processor_,i,e,t,r);return QM(n.processor_,a.viewCache),ne(a.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,$C(n,a.changes,a.viewCache.eventCache.getNode(),null)}function a2(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(ot,(a,l)=>{r.push(Ka(a,l))}),t.isFullyInitialized()&&r.push(OC(t.getNode())),$C(n,r,t.getNode(),e)}function $C(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return PM(n.eventGenerator_,e,t,i)}/**
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
 */let $d;class WC{constructor(){this.views=new Map}}function l2(n){ne(!$d,"__referenceConstructor has already been defined"),$d=n}function u2(){return ne($d,"Reference.ts has not been loaded"),$d}function c2(n){return n.views.size===0}function gy(n,e,t,r){const i=e.source.queryId;if(i!==null){const a=n.views.get(i);return ne(a!=null,"SyncTree gave us an op for an invalid query."),rT(a,e,t,r)}else{let a=[];for(const l of n.views.values())a=a.concat(rT(l,e,t,r));return a}}function HC(n,e,t,r,i){const a=e._queryIdentifier,l=n.views.get(a);if(!l){let c=Bd(t,i?r:null),f=!1;c?f=!0:r instanceof we?(c=fy(t,r),f=!1):(c=we.EMPTY_NODE,f=!1);const p=Nf(new Ss(c,f,!1),new Ss(r,i,!1));return new n2(e,p)}return l}function h2(n,e,t,r,i,a){const l=HC(n,e,r,i,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,l),o2(l,t),a2(l,t)}function d2(n,e,t,r){const i=e._queryIdentifier,a=[];let l=[];const c=Cs(n);if(i==="default")for(const[f,p]of n.views.entries())l=l.concat(nT(p,t,r)),tT(p)&&(n.views.delete(f),p.query._queryParams.loadsAllData()||a.push(p.query));else{const f=n.views.get(i);f&&(l=l.concat(nT(f,t,r)),tT(f)&&(n.views.delete(i),f.query._queryParams.loadsAllData()||a.push(f.query)))}return c&&!Cs(n)&&a.push(new(u2())(e._repo,e._path)),{removed:a,events:l}}function qC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ms(n,e){let t=null;for(const r of n.views.values())t=t||s2(r,e);return t}function KC(n,e){if(e._queryParams.loadsAllData())return xf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function GC(n,e){return KC(n,e)!=null}function Cs(n){return xf(n)!=null}function xf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Wd;function f2(n){ne(!Wd,"__referenceConstructor has already been defined"),Wd=n}function p2(){return ne(Wd,"Reference.ts has not been loaded"),Wd}let m2=1;class iT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new et(null),this.pendingWriteTree_=WM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function QC(n,e,t,r,i){return xM(n.pendingWriteTree_,e,t,r,i),i?ul(n,new So(cy(),e,t)):[]}function g2(n,e,t,r){DM(n.pendingWriteTree_,e,t,r);const i=et.fromObject(t);return ul(n,new Ga(cy(),e,i))}function us(n,e,t=!1){const r=OM(n.pendingWriteTree_,e);if(LM(n.pendingWriteTree_,e)){let a=new et(null);return r.snap!=null?a=a.set(ze(),!0):jt(r.children,l=>{a=a.set(new He(l),!0)}),ul(n,new Fd(r.path,a,t))}else return[]}function Ic(n,e,t){return ul(n,new So(hy(),e,t))}function _2(n,e,t){const r=et.fromObject(t);return ul(n,new Ga(hy(),e,r))}function y2(n,e){return ul(n,new Yu(hy(),e))}function v2(n,e,t){const r=yy(n,t);if(r){const i=vy(r),a=i.path,l=i.queryId,c=fn(a,e),f=new Yu(dy(l),c);return wy(n,a,f)}else return[]}function Hd(n,e,t,r,i=!1){const a=e._path,l=n.syncPointTree_.get(a);let c=[];if(l&&(e._queryIdentifier==="default"||GC(l,e))){const f=d2(l,e,t,r);c2(l)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const p=f.removed;if(c=f.events,!i){const y=p.findIndex(E=>E._queryParams.loadsAllData())!==-1,v=n.syncPointTree_.findOnPath(a,(E,S)=>Cs(S));if(y&&!v){const E=n.syncPointTree_.subtree(a);if(!E.isEmpty()){const S=T2(E);for(let R=0;R<S.length;++R){const O=S[R],A=O.query,B=ZC(n,O);n.listenProvider_.startListening(xu(A),Xu(n,A),B.hashFn,B.onComplete)}}}!v&&p.length>0&&!r&&(y?n.listenProvider_.stopListening(xu(e),null):p.forEach(E=>{const S=n.queryToTagMap.get(Df(E));n.listenProvider_.stopListening(xu(E),S)}))}I2(n,p)}return c}function YC(n,e,t,r){const i=yy(n,r);if(i!=null){const a=vy(i),l=a.path,c=a.queryId,f=fn(l,e),p=new So(dy(c),f,t);return wy(n,l,p)}else return[]}function w2(n,e,t,r){const i=yy(n,r);if(i){const a=vy(i),l=a.path,c=a.queryId,f=fn(l,e),p=et.fromObject(t),y=new Ga(dy(c),f,p);return wy(n,l,y)}else return[]}function Hg(n,e,t,r=!1){const i=e._path;let a=null,l=!1;n.syncPointTree_.foreachOnPath(i,(E,S)=>{const R=fn(E,i);a=a||ms(S,R),l=l||Cs(S)});let c=n.syncPointTree_.get(i);c?(l=l||Cs(c),a=a||ms(c,ze())):(c=new WC,n.syncPointTree_=n.syncPointTree_.set(i,c));let f;a!=null?f=!0:(f=!1,a=we.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((S,R)=>{const O=ms(R,ze());O&&(a=a.updateImmediateChild(S,O))}));const p=GC(c,e);if(!p&&!e._queryParams.loadsAllData()){const E=Df(e);ne(!n.queryToTagMap.has(E),"View does not exist, but we have a tag");const S=S2();n.queryToTagMap.set(E,S),n.tagToQueryMap.set(S,E)}const y=bf(n.pendingWriteTree_,i);let v=h2(c,e,t,y,a,f);if(!p&&!l&&!r){const E=KC(c,e);v=v.concat(C2(n,e,E))}return v}function _y(n,e,t){const i=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(l,c)=>{const f=fn(l,e),p=ms(c,f);if(p)return p});return FC(i,e,a,t,!0)}function E2(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(p,y)=>{const v=fn(p,t);r=r||ms(y,v)});let i=n.syncPointTree_.get(t);i?r=r||ms(i,ze()):(i=new WC,n.syncPointTree_=n.syncPointTree_.set(t,i));const a=r!=null,l=a?new Ss(r,!0,!1):null,c=bf(n.pendingWriteTree_,e._path),f=HC(i,e,c,a?l.getNode():we.EMPTY_NODE,a);return i2(f)}function ul(n,e){return XC(e,n.syncPointTree_,null,bf(n.pendingWriteTree_,ze()))}function XC(n,e,t,r){if(Pe(n.path))return JC(n,e,t,r);{const i=e.get(ze());t==null&&i!=null&&(t=ms(i,ze()));let a=[];const l=Ae(n.path),c=n.operationForChild(l),f=e.children.get(l);if(f&&c){const p=t?t.getImmediateChild(l):null,y=UC(r,l);a=a.concat(XC(c,f,p,y))}return i&&(a=a.concat(gy(i,n,r,t))),a}}function JC(n,e,t,r){const i=e.get(ze());t==null&&i!=null&&(t=ms(i,ze()));let a=[];return e.children.inorderTraversal((l,c)=>{const f=t?t.getImmediateChild(l):null,p=UC(r,l),y=n.operationForChild(l);y&&(a=a.concat(JC(y,c,f,p)))}),i&&(a=a.concat(gy(i,n,r,t))),a}function ZC(n,e){const t=e.query,r=Xu(n,t);return{hashFn:()=>(r2(e)||we.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?v2(n,t._path,r):y2(n,t._path);{const a=_L(i,t);return Hd(n,t,null,a)}}}}function Xu(n,e){const t=Df(e);return n.queryToTagMap.get(t)}function Df(n){return n._path.toString()+"$"+n._queryIdentifier}function yy(n,e){return n.tagToQueryMap.get(e)}function vy(n){const e=n.indexOf("$");return ne(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new He(n.substr(0,e))}}function wy(n,e,t){const r=n.syncPointTree_.get(e);ne(r,"Missing sync point for query tag that we're tracking");const i=bf(n.pendingWriteTree_,e);return gy(r,t,i,null)}function T2(n){return n.fold((e,t,r)=>{if(t&&Cs(t))return[xf(t)];{let i=[];return t&&(i=qC(t)),jt(r,(a,l)=>{i=i.concat(l)}),i}})}function xu(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(p2())(n._repo,n._path):n}function I2(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=Df(r),a=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(a)}}}function S2(){return m2++}function C2(n,e,t){const r=e._path,i=Xu(n,e),a=ZC(n,t),l=n.listenProvider_.startListening(xu(e),i,a.hashFn,a.onComplete),c=n.syncPointTree_.subtree(r);if(i)ne(!Cs(c.value),"If we're adding a query, it shouldn't be shadowed");else{const f=c.fold((p,y,v)=>{if(!Pe(p)&&y&&Cs(y))return[xf(y).query];{let E=[];return y&&(E=E.concat(qC(y).map(S=>S.query))),jt(v,(S,R)=>{E=E.concat(R)}),E}});for(let p=0;p<f.length;++p){const y=f[p];n.listenProvider_.stopListening(xu(y),Xu(n,y))}}return l}/**
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
 */class Ey{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ey(t)}node(){return this.node_}}class Ty{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ht(this.path_,e);return new Ty(this.syncTree_,t)}node(){return _y(this.syncTree_,this.path_)}}const R2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},sT=function(n,e,t){if(!n||typeof n!="object")return n;if(ne(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return A2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return P2(n[".sv"],e);ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},A2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ne(!1,"Unexpected server value: "+n)}},P2=function(n,e,t){n.hasOwnProperty("increment")||ne(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&ne(!1,"Unexpected increment value: "+r);const i=e.node();if(ne(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const l=i.getValue();return typeof l!="number"?r:l+r},eR=function(n,e,t,r){return Iy(e,new Ty(t,n),r)},tR=function(n,e,t){return Iy(n,new Ey(e),t)};function Iy(n,e,t){const r=n.getPriority().val(),i=sT(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const l=n,c=sT(l.getValue(),e,t);return c!==l.getValue()||i!==l.getPriority().val()?new Ft(c,ft(i)):n}else{const l=n;return a=l,i!==l.getPriority().val()&&(a=a.updatePriority(new Ft(i))),l.forEachChild(ot,(c,f)=>{const p=Iy(f,e.getImmediateChild(c),t);p!==f&&(a=a.updateImmediateChild(c,p))}),a}}/**
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
 */class Sy{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Cy(n,e){let t=e instanceof He?e:new He(e),r=n,i=Ae(t);for(;i!==null;){const a=Fa(r.node.children,i)||{children:{},childCount:0};r=new Sy(i,r,a),t=Qe(t),i=Ae(t)}return r}function cl(n){return n.node.value}function nR(n,e){n.node.value=e,qg(n)}function rR(n){return n.node.childCount>0}function k2(n){return cl(n)===void 0&&!rR(n)}function Of(n,e){jt(n.node.children,(t,r)=>{e(new Sy(t,n,r))})}function iR(n,e,t,r){t&&!r&&e(n),Of(n,i=>{iR(i,e,!0,r)}),t&&r&&e(n)}function N2(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Sc(n){return new He(n.parent===null?n.name:Sc(n.parent)+"/"+n.name)}function qg(n){n.parent!==null&&b2(n.parent,n.name,n)}function b2(n,e,t){const r=k2(t),i=qr(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,qg(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,qg(n))}/**
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
 */const x2=/[\[\].#$\/\u0000-\u001F\u007F]/,D2=/[\[\].#$\u0000-\u001F\u007F]/,Gm=10*1024*1024,Ry=function(n){return typeof n=="string"&&n.length!==0&&!x2.test(n)},sR=function(n){return typeof n=="string"&&n.length!==0&&!D2.test(n)},O2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sR(n)},qd=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Pf(n)||n&&typeof n=="object"&&qr(n,".sv")},Ya=function(n,e,t,r){r&&e===void 0||Lf(Ua(n,"value"),e,t)},Lf=function(n,e,t){const r=t instanceof He?new XL(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+co(r));if(typeof e=="function")throw new Error(n+"contains a function "+co(r)+" with contents = "+e.toString());if(Pf(e))throw new Error(n+"contains "+e.toString()+" "+co(r));if(typeof e=="string"&&e.length>Gm/3&&cf(e)>Gm)throw new Error(n+"contains a string greater than "+Gm+" utf8 bytes "+co(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,a=!1;if(jt(e,(l,c)=>{if(l===".value")i=!0;else if(l!==".priority"&&l!==".sv"&&(a=!0,!Ry(l)))throw new Error(n+" contains an invalid key ("+l+") "+co(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JL(r,l),Lf(n,c,r),ZL(r)}),i&&a)throw new Error(n+' contains ".value" child '+co(r)+" in addition to actual children.")}},L2=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const a=qu(r);for(let l=0;l<a.length;l++)if(!(a[l]===".priority"&&l===a.length-1)){if(!Ry(a[l]))throw new Error(n+"contains an invalid key ("+a[l]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(YL);let i=null;for(t=0;t<e.length;t++){if(r=e[t],i!==null&&Qn(i,r))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},oR=function(n,e,t,r){const i=Ua(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const a=[];jt(e,(l,c)=>{const f=new He(l);if(Lf(i,c,ht(t,f)),ry(f)===".priority"&&!qd(c))throw new Error(i+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(f)}),L2(i,a)},M2=function(n,e,t){if(Pf(e))throw new Error(Ua(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!qd(e))throw new Error(Ua(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Ay=function(n,e,t,r){if(!sR(t))throw new Error(Ua(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},V2=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ay(n,e,t)},xa=function(n,e){if(Ae(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},F2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ry(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!O2(t))throw new Error(Ua(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class U2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mf(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],a=i.getPath();t!==null&&!iy(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(i)}t&&n.eventLists_.push(t)}function aR(n,e,t){Mf(n,t),lR(n,r=>iy(r,e))}function Xn(n,e,t){Mf(n,t),lR(n,r=>Qn(r,e)||Qn(e,r))}function lR(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const a=i.path;e(a)?(B2(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function B2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Pu&&zt("event: "+t.toString()),al(r)}}}/**
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
 */const uR="repo_interrupt",z2=25;class j2{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new U2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vd(),this.transactionQueueTree_=new Sy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $2(n,e,t){if(n.stats_=ty(n.repoInfo_),n.forceRestClient_||EL())n.server_=new Md(n.repoInfo_,(r,i,a,l)=>{oT(n,r,i,a,l)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>aT(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Nt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new wi(n.repoInfo_,e,(r,i,a,l)=>{oT(n,r,i,a,l)},r=>{aT(n,r)},r=>{H2(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=RL(n.repoInfo_,()=>new RM(n.stats_,n.server_)),n.infoData_=new EM,n.infoSyncTree_=new iT({startListening:(r,i,a,l)=>{let c=[];const f=n.infoData_.getNode(r._path);return f.isEmpty()||(c=Ic(n.infoSyncTree_,r._path,f),setTimeout(()=>{l("ok")},0)),c},stopListening:()=>{}}),Py(n,"connected",!1),n.serverSyncTree_=new iT({startListening:(r,i,a,l)=>(n.server_.listen(r,a,i,(c,f)=>{const p=l(c,f);Xn(n.eventQueue_,r._path,p)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function W2(n){const t=n.infoData_.getNode(new He(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Vf(n){return R2({timestamp:W2(n)})}function oT(n,e,t,r,i){n.dataUpdateCount++;const a=new He(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let l=[];if(i)if(r){const f=Id(t,p=>ft(p));l=w2(n.serverSyncTree_,a,f,i)}else{const f=ft(t);l=YC(n.serverSyncTree_,a,f,i)}else if(r){const f=Id(t,p=>ft(p));l=_2(n.serverSyncTree_,a,f)}else{const f=ft(t);l=Ic(n.serverSyncTree_,a,f)}let c=a;l.length>0&&(c=Xa(n,a)),Xn(n.eventQueue_,c,l)}function aT(n,e){Py(n,"connected",e),e===!1&&Q2(n)}function H2(n,e){jt(e,(t,r)=>{Py(n,t,r)})}function Py(n,e,t){const r=new He("/.info/"+e),i=ft(t);n.infoData_.updateSnapshot(r,i);const a=Ic(n.infoSyncTree_,r,i);Xn(n.eventQueue_,r,a)}function ky(n){return n.nextWriteId_++}function q2(n,e,t){const r=E2(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(i=>{const a=ft(i).withIndex(e._queryParams.getIndex());Hg(n.serverSyncTree_,e,t,!0);let l;if(e._queryParams.loadsAllData())l=Ic(n.serverSyncTree_,e._path,a);else{const c=Xu(n.serverSyncTree_,e);l=YC(n.serverSyncTree_,e._path,a,c)}return Xn(n.eventQueue_,e._path,l),Hd(n.serverSyncTree_,e,t,null,!0),a},i=>(Cc(n,"get for query "+Nt(e)+" failed: "+i),Promise.reject(new Error(i))))}function K2(n,e,t,r,i){Cc(n,"set",{path:e.toString(),value:t,priority:r});const a=Vf(n),l=ft(t,r),c=_y(n.serverSyncTree_,e),f=tR(l,c,a),p=ky(n),y=QC(n.serverSyncTree_,e,f,p,!0);Mf(n.eventQueue_,y),n.server_.put(e.toString(),l.val(!0),(E,S)=>{const R=E==="ok";R||mn("set at "+e+" failed: "+E);const O=us(n.serverSyncTree_,p,!R);Xn(n.eventQueue_,e,O),Rs(n,i,E,S)});const v=by(n,e);Xa(n,v),Xn(n.eventQueue_,v,[])}function G2(n,e,t,r){Cc(n,"update",{path:e.toString(),value:t});let i=!0;const a=Vf(n),l={};if(jt(t,(c,f)=>{i=!1,l[c]=eR(ht(e,c),ft(f),n.serverSyncTree_,a)}),i)zt("update() called with empty data.  Don't do anything."),Rs(n,r,"ok",void 0);else{const c=ky(n),f=g2(n.serverSyncTree_,e,l,c);Mf(n.eventQueue_,f),n.server_.merge(e.toString(),t,(p,y)=>{const v=p==="ok";v||mn("update at "+e+" failed: "+p);const E=us(n.serverSyncTree_,c,!v),S=E.length>0?Xa(n,e):e;Xn(n.eventQueue_,S,E),Rs(n,r,p,y)}),jt(t,p=>{const y=by(n,ht(e,p));Xa(n,y)}),Xn(n.eventQueue_,e,[])}}function Q2(n){Cc(n,"onDisconnectEvents");const e=Vf(n),t=Vd();Ug(n.onDisconnect_,ze(),(i,a)=>{const l=eR(i,a,n.serverSyncTree_,e);ll(t,i,l)});let r=[];Ug(t,ze(),(i,a)=>{r=r.concat(Ic(n.serverSyncTree_,i,a));const l=by(n,i);Xa(n,l)}),n.onDisconnect_=Vd(),Xn(n.eventQueue_,ze(),r)}function Y2(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Fg(n.onDisconnect_,e),Rs(n,t,r,i)})}function lT(n,e,t,r){const i=ft(t);n.server_.onDisconnectPut(e.toString(),i.val(!0),(a,l)=>{a==="ok"&&ll(n.onDisconnect_,e,i),Rs(n,r,a,l)})}function X2(n,e,t,r,i){const a=ft(t,r);n.server_.onDisconnectPut(e.toString(),a.val(!0),(l,c)=>{l==="ok"&&ll(n.onDisconnect_,e,a),Rs(n,i,l,c)})}function J2(n,e,t,r){if(Td(t)){zt("onDisconnect().update() called with empty data.  Don't do anything."),Rs(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(i,a)=>{i==="ok"&&jt(t,(l,c)=>{const f=ft(c);ll(n.onDisconnect_,ht(e,l),f)}),Rs(n,r,i,a)})}function Z2(n,e,t){let r;Ae(e._path)===".info"?r=Hg(n.infoSyncTree_,e,t):r=Hg(n.serverSyncTree_,e,t),aR(n.eventQueue_,e._path,r)}function uT(n,e,t){let r;Ae(e._path)===".info"?r=Hd(n.infoSyncTree_,e,t):r=Hd(n.serverSyncTree_,e,t),aR(n.eventQueue_,e._path,r)}function cR(n){n.persistentConnection_&&n.persistentConnection_.interrupt(uR)}function eV(n){n.persistentConnection_&&n.persistentConnection_.resume(uR)}function Cc(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),zt(t,...e)}function Rs(n,e,t,r){e&&al(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let a=i;r&&(a+=": "+r);const l=new Error(a);l.code=i,e(l)}})}function hR(n,e,t){return _y(n.serverSyncTree_,e,t)||we.EMPTY_NODE}function Ny(n,e=n.transactionQueueTree_){if(e||Ff(n,e),cl(e)){const t=fR(n,e);ne(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&tV(n,Sc(e),t)}else rR(e)&&Of(e,t=>{Ny(n,t)})}function tV(n,e,t){const r=t.map(p=>p.currentWriteId),i=hR(n,e,r);let a=i;const l=i.hash();for(let p=0;p<t.length;p++){const y=t[p];ne(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const v=fn(e,y.path);a=a.updateChild(v,y.currentOutputSnapshotRaw)}const c=a.val(!0),f=e;n.server_.put(f.toString(),c,p=>{Cc(n,"transaction put response",{path:f.toString(),status:p});let y=[];if(p==="ok"){const v=[];for(let E=0;E<t.length;E++)t[E].status=2,y=y.concat(us(n.serverSyncTree_,t[E].currentWriteId)),t[E].onComplete&&v.push(()=>t[E].onComplete(null,!0,t[E].currentOutputSnapshotResolved)),t[E].unwatcher();Ff(n,Cy(n.transactionQueueTree_,e)),Ny(n,n.transactionQueueTree_),Xn(n.eventQueue_,e,y);for(let E=0;E<v.length;E++)al(v[E])}else{if(p==="datastale")for(let v=0;v<t.length;v++)t[v].status===3?t[v].status=4:t[v].status=0;else{mn("transaction at "+f.toString()+" failed: "+p);for(let v=0;v<t.length;v++)t[v].status=4,t[v].abortReason=p}Xa(n,e)}},l)}function Xa(n,e){const t=dR(n,e),r=Sc(t),i=fR(n,t);return nV(n,i,r),r}function nV(n,e,t){if(e.length===0)return;const r=[];let i=[];const l=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const f=e[c],p=fn(t,f.path);let y=!1,v;if(ne(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,v=f.abortReason,i=i.concat(us(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=z2)y=!0,v="maxretry",i=i.concat(us(n.serverSyncTree_,f.currentWriteId,!0));else{const E=hR(n,f.path,l);f.currentInputSnapshot=E;const S=e[c].update(E.val());if(S!==void 0){Lf("transaction failed: Data returned ",S,f.path);let R=ft(S);typeof S=="object"&&S!=null&&qr(S,".priority")||(R=R.updatePriority(E.getPriority()));const A=f.currentWriteId,B=Vf(n),K=tR(R,E,B);f.currentOutputSnapshotRaw=R,f.currentOutputSnapshotResolved=K,f.currentWriteId=ky(n),l.splice(l.indexOf(A),1),i=i.concat(QC(n.serverSyncTree_,f.path,K,f.currentWriteId,f.applyLocally)),i=i.concat(us(n.serverSyncTree_,A,!0))}else y=!0,v="nodata",i=i.concat(us(n.serverSyncTree_,f.currentWriteId,!0))}Xn(n.eventQueue_,t,i),i=[],y&&(e[c].status=2,function(E){setTimeout(E,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(v==="nodata"?r.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):r.push(()=>e[c].onComplete(new Error(v),!1,null))))}Ff(n,n.transactionQueueTree_);for(let c=0;c<r.length;c++)al(r[c]);Ny(n,n.transactionQueueTree_)}function dR(n,e){let t,r=n.transactionQueueTree_;for(t=Ae(e);t!==null&&cl(r)===void 0;)r=Cy(r,t),e=Qe(e),t=Ae(e);return r}function fR(n,e){const t=[];return pR(n,e,t),t.sort((r,i)=>r.order-i.order),t}function pR(n,e,t){const r=cl(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);Of(e,i=>{pR(n,i,t)})}function Ff(n,e){const t=cl(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,nR(e,t.length>0?t:void 0)}Of(e,r=>{Ff(n,r)})}function by(n,e){const t=Sc(dR(n,e)),r=Cy(n.transactionQueueTree_,e);return N2(r,i=>{Qm(n,i)}),Qm(n,r),iR(r,i=>{Qm(n,i)}),t}function Qm(n,e){const t=cl(e);if(t){const r=[];let i=[],a=-1;for(let l=0;l<t.length;l++)t[l].status===3||(t[l].status===1?(ne(a===l-1,"All SENT items should be at beginning of queue."),a=l,t[l].status=3,t[l].abortReason="set"):(ne(t[l].status===0,"Unexpected transaction status in abort"),t[l].unwatcher(),i=i.concat(us(n.serverSyncTree_,t[l].currentWriteId,!0)),t[l].onComplete&&r.push(t[l].onComplete.bind(null,new Error("set"),!1,null))));a===-1?nR(e,void 0):t.length=a+1,Xn(n.eventQueue_,Sc(e),i);for(let l=0;l<r.length;l++)al(r[l])}}/**
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
 */function rV(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iV(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):mn(`Invalid query segment '${t}' in query '${n}'`)}return e}const cT=function(n,e){const t=sV(n),r=t.namespace;t.domain==="firebase.com"&&Pi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Pi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||dL();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new _C(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new He(t.pathString)}},sV=function(n){let e="",t="",r="",i="",a="",l=!0,c="https",f=443;if(typeof n=="string"){let p=n.indexOf("//");p>=0&&(c=n.substring(0,p-1),n=n.substring(p+2));let y=n.indexOf("/");y===-1&&(y=n.length);let v=n.indexOf("?");v===-1&&(v=n.length),e=n.substring(0,Math.min(y,v)),y<v&&(i=rV(n.substring(y,v)));const E=iV(n.substring(Math.min(n.length,v)));p=e.indexOf(":"),p>=0?(l=c==="https"||c==="wss",f=parseInt(e.substring(p+1),10)):p=e.length;const S=e.slice(0,p);if(S.toLowerCase()==="localhost")t="localhost";else if(S.split(".").length<=2)t=S;else{const R=e.indexOf(".");r=e.substring(0,R).toLowerCase(),t=e.substring(R+1),a=r}"ns"in E&&(a=E.ns)}return{host:e,port:f,domain:t,subdomain:r,secure:l,scheme:c,pathString:i,namespace:a}};/**
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
 */class oV{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Nt(this.snapshot.exportVal())}}class aV{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class mR{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ne(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class lV{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new Mr;return Y2(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){xa("OnDisconnect.remove",this._path);const e=new Mr;return lT(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){xa("OnDisconnect.set",this._path),Ya("OnDisconnect.set",e,this._path,!1);const t=new Mr;return lT(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){xa("OnDisconnect.setWithPriority",this._path),Ya("OnDisconnect.setWithPriority",e,this._path,!1),M2("OnDisconnect.setWithPriority",t);const r=new Mr;return X2(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){xa("OnDisconnect.update",this._path),oR("OnDisconnect.update",e,this._path);const t=new Mr;return J2(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class hl{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return Pe(this._path)?null:ry(this._path)}get ref(){return new bi(this._repo,this._path)}get _queryIdentifier(){const e=GE(this._queryParams),t=Z_(e);return t==="{}"?"default":t}get _queryObject(){return GE(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof hl))return!1;const t=this._repo===e._repo,r=iy(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+QL(this._path)}}function uV(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function xy(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===_o){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Io)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(n.hasEnd()){if(n.getIndexEndName()!==Ts)throw new Error(r);if(typeof t!="string")throw new Error(i)}}else if(n.getIndex()===ot){if(e!=null&&!qd(e)||t!=null&&!qd(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(ne(n.getIndex()instanceof ay||n.getIndex()===DC,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function gR(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class bi extends hl{constructor(e,t){super(e,t,new uy,!1)}get parent(){const e=RC(this._path);return e===null?null:new bi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ju{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new He(e),r=Kg(this.ref,e);return new Ju(this._node.getChild(t),r,ot)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ju(i,Kg(this.ref,r),ot)))}hasChild(e){const t=new He(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cV(n,e){return n=We(n),n._checkNotDeleted("ref"),e!==void 0?Kg(n._root,e):n._root}function Kg(n,e){return n=We(n),Ae(n._path)===null?V2("child","path",e):Ay("child","path",e),new bi(n._repo,ht(n._path,e))}function Y3(n){return n=We(n),new lV(n._repo,n._path)}function X3(n){return xa("remove",n._path),hV(n,null)}function hV(n,e){n=We(n),xa("set",n._path),Ya("set",e,n._path,!1);const t=new Mr;return K2(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function J3(n,e){oR("update",e,n._path);const t=new Mr;return G2(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Z3(n){n=We(n);const e=new mR(()=>{}),t=new Uf(e);return q2(n._repo,n,t).then(r=>new Ju(r,new bi(n._repo,n._path),n._queryParams.getIndex()))}class Uf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new oV("value",this,new Ju(e.snapshotNode,new bi(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new aV(this,e,t):null}matches(e){return e instanceof Uf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function dV(n,e,t,r,i){let a;if(typeof r=="object"&&(a=void 0,i=r),typeof r=="function"&&(a=r),i&&i.onlyOnce){const f=t,p=(y,v)=>{uT(n._repo,n,c),f(y,v)};p.userCallback=t.userCallback,p.context=t.context,t=p}const l=new mR(t,a||void 0),c=new Uf(l);return Z2(n._repo,n,c),()=>uT(n._repo,n,c)}function fV(n,e,t,r){return dV(n,"value",e,t,r)}class Bf{}class pV extends Bf{constructor(e,t){super(),this._value=e,this._key=t,this.type="endAt"}_apply(e){Ya("endAt",this._value,e._path,!0);const t=vM(e._queryParams,this._value,this._key);if(gR(t),xy(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new hl(e._repo,e._path,t,e._orderByCalled)}}class mV extends Bf{constructor(e,t){super(),this._value=e,this._key=t,this.type="startAt"}_apply(e){Ya("startAt",this._value,e._path,!0);const t=yM(e._queryParams,this._value,this._key);if(gR(t),xy(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new hl(e._repo,e._path,t,e._orderByCalled)}}class gV extends Bf{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){uV(e,"orderByChild");const t=new He(this._path);if(Pe(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new ay(t),i=wM(e._queryParams,r);return xy(i),new hl(e._repo,e._path,i,!0)}}function e6(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Ay("orderByChild","path",n),new gV(n)}class _V extends Bf{constructor(e,t){super(),this._value=e,this._key=t,this.type="equalTo"}_apply(e){if(Ya("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new pV(this._value,this._key)._apply(new mV(this._value,this._key)._apply(e))}}function t6(n,e){return new _V(n,e)}function n6(n,...e){let t=We(n);for(const r of e)t=r._apply(t);return t}l2(bi);f2(bi);/**
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
 */const yV="FIREBASE_DATABASE_EMULATOR_HOST",Gg={};let vV=!1;function wV(n,e,t,r){n.repoInfo_=new _C(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),r&&(n.authTokenProvider_=r)}function EV(n,e,t,r,i){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Pi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),zt("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let l=cT(a,i),c=l.repoInfo,f;typeof process<"u"&&NE&&(f=NE[yV]),f?(a=`http://${f}?ns=${c.namespace}`,l=cT(a,i),c=l.repoInfo):l.repoInfo.secure;const p=new IL(n.name,n.options,e);F2("Invalid Firebase Database URL",l),Pe(l.path)||Pi("Database URL must point to the root of a Firebase Database (not including a child path).");const y=IV(c,n,p,new TL(n.name,t));return new SV(y,n)}function TV(n,e){const t=Gg[e];(!t||t[n.key]!==n)&&Pi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),cR(n),delete t[n.key]}function IV(n,e,t,r){let i=Gg[e.name];i||(i={},Gg[e.name]=i);let a=i[n.toURLString()];return a&&Pi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new j2(n,vV,t,r),i[n.toURLString()]=a,a}class SV{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bi(this._repo,ze())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pi("Cannot call "+e+" on a deleted database.")}}function CV(n=df(),e){const t=cc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=f_("database");r&&RV(t,...r)}return t}function RV(n,e,t,r={}){n=We(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Pi("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let a;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Pi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),a=new pd(pd.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:p_(r.mockUserToken,n.app.options.projectId);a=new pd(l)}wV(i,e,t,a)}function AV(n){n=We(n),n._checkNotDeleted("goOffline"),cR(n._repo)}function r6(n){n=We(n),n._checkNotDeleted("goOnline"),eV(n._repo)}/**
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
 */function PV(n){oL(Ns),ys(new Si("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return EV(r,i,a,t)},"PUBLIC").setMultipleInstances(!0)),Yn(bE,xE,n),Yn(bE,xE,"esm2017")}/**
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
 */const kV={".sv":"timestamp"};function i6(){return kV}wi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};wi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};PV();const NV=[{title:"Fashion",productTypes:[{title:"T-Shirts"},{title:"Jeans"},{title:"Dresses"},{title:"Shoes"}],collections:[{title:"Men"},{title:"Women"},{title:"Kids"},{title:"Summer",used:!0},{title:"November outfits"},{title:"Cashmere set"},{title:"New nordic"},{title:"Leather"},{title:"Sneakers"}],iconURl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffashion%20icon.png?alt=media&token=dbda043b-0da0-4db3-ab84-108c30458858",bannerUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(1).webp?alt=media&token=f82da5a4-9b48-42e3-b463-28bf39f069d4"},{title:"Electronics",collections:[{title:"Game on"},{title:"World of sounds"},{title:"Electra"},{title:"Voltix"},{title:"Tech trend"}],productTypes:[{title:"Smart Phones"},{title:"Laptops"},{title:"Headphones"},{title:"Smart Watches"}],iconURl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FElectronics%20Icon.png?alt=media&token=9c895c63-7407-4ac4-91aa-8f7773f05bfc",bannerUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(2).webp?alt=media&token=755ce2e1-12bf-422e-a3aa-34e128db1385"},{title:"Home Decor",collections:[{title:"Kitchen"},{title:"living room"},{title:"Bedroom"},{title:"Natural Vibes"}],productTypes:[{title:"Wall Art"},{title:"Throw Pillows"},{title:"Vases"},{title:"Candles"}],iconURl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FHome%20Decor%20Icon.png?alt=media&token=8e12c6f6-b906-4d19-935f-1682ba47e2c6",bannerUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(3).webp?alt=media&token=be4ac31d-065f-45aa-bea4-b3c884bd724a"},{title:"Health and Wellness",collections:[{title:"Vita boost"},{title:"Glow life"},{title:"Zen Fuel"},{title:"Healty Routine"}],productTypes:[{title:"Vitamins"},{title:"Fitness Trackers"},{title:"Yoga Blocks"},{title:"Resistance Bands"}],iconURl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FHealth%20Icon.png?alt=media&token=9f25a2a6-014b-4dd1-bfad-8da910d4f57c",bannerUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(4).webp?alt=media&token=75fcc7d4-2e79-463f-92fb-119b3500ab61"},{title:"Beauty and Personal Care",collections:[{title:"Organic oil"},{title:"Skincare collection"},{title:"Hair care collection"},{title:"Fragrance"},{title:"Beauty 2024"}],productTypes:[{title:"Skincare Sets"},{title:"Lipsticks"},{title:"Hair Styling Tools"},{title:"Perfumes"}],iconURl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FBeauty%20Icon.png?alt=media&token=b295adaa-c91c-4406-9e76-105e5e438d64",bannerUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fsub-menu-banner%20(5).webp?alt=media&token=e40fdb29-7f67-4fe8-8d76-0bd2b1e4067f"}],s6="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2FError%20Ilustration.png?alt=media&token=44e6f168-e69d-4f7b-8f82-b5129fdf535b",_R=["https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(1).webp?alt=media&token=208a6a73-f31d-436a-b416-98752a90c7a9","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(2).webp?alt=media&token=5fb1eddd-e6e8-4f79-97b6-1db11d7391a9","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(3).webp?alt=media&token=85d7fa87-7582-4448-b7d8-21d3f90f2d90","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(4).webp?alt=media&token=32ddcde1-d894-4728-9216-9ea17380b277","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(5).webp?alt=media&token=5a4b12ac-30ef-4040-8d8e-44409f67f249","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(6).webp?alt=media&token=17962c08-7ae4-4d9a-bd02-76ffce915e0c","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(7).webp?alt=media&token=fe2d9a0d-14dd-4c54-808d-7b88f4873927","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(8).webp?alt=media&token=e1edd546-1f06-4422-9ca4-7c3db381023b","https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/Profile%20Images%2FPrimary%20pics%2Favatar%20%20(9).webp?alt=media&token=a7ce6cd5-c425-47d1-8723-6f6c9e861259"],bV={900:{label:"Cancelled",color:"#DC3F14",value:900},100:{label:"Pending",color:"#F0A202",value:100},200:{label:"Packed",color:"purple",value:200},300:{label:"Shipped",color:"#344FA9",value:300},400:{label:"Delivered",color:"#2DBA2D",value:400},getOptions:n=>Object.entries(bV).filter(([e])=>e<900&&e!=="getOptions"&&e>n).map(([,e])=>e)},o6=[{title:"Popular"},{title:"Special"},{title:"Trend"},{title:"2025"},{title:"New Release"},{title:"Best Sell"},{title:"Coming Soon"},{title:"Featured"}],a6=async()=>{const n=CV(),e=cV(n,".info/serverTimeOffset");let t=null;fV(e,i=>{t=i.val()},{onlyOnce:!0});const r=Date.now()+t;return AV(n),r};var xV="firebase",DV="10.13.0";/**
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
 */Yn(xV,DV,"app");function Dy(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function yR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OV=yR,vR=new uc("auth","Firebase",yR());/**
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
 */const Kd=new hf("@firebase/auth");function LV(n,...e){Kd.logLevel<=xe.WARN&&Kd.warn(`Auth (${Ns}): ${n}`,...e)}function md(n,...e){Kd.logLevel<=xe.ERROR&&Kd.error(`Auth (${Ns}): ${n}`,...e)}/**
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
 */function Jn(n,...e){throw Ly(n,...e)}function Er(n,...e){return Ly(n,...e)}function Oy(n,e,t){const r=Object.assign(Object.assign({},OV()),{[e]:t});return new uc("auth","Firebase",r).create(e,{appName:n.name})}function Ei(n){return Oy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function MV(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jn(n,"argument-error"),Oy(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ly(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return vR.create(n,...e)}function Ee(n,e,...t){if(!n)throw Ly(e,...t)}function mi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw md(e),new Error(e)}function ki(n,e){n||mi(e)}/**
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
 */function Qg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function VV(){return hT()==="http:"||hT()==="https:"}function hT(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function FV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VV()||NN()||"connection"in navigator)?navigator.onLine:!0}function UV(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Rc{constructor(e,t){this.shortDelay=e,this.longDelay=t,ki(t>e,"Short delay should be less than long delay!"),this.isMobile=m_()||SI()}get(){return FV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function My(n,e){ki(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const BV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zV=new Rc(3e4,6e4);function xs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ds(n,e,t,r,i={}){return ER(n,i,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const c=tl(Object.assign({key:n.config.apiKey},l)).slice(1),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode),wR.fetch()(TR(n,n.config.apiHost,t,c),Object.assign({method:e,headers:f,referrerPolicy:"no-referrer"},a))})}async function ER(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},BV),e);try{const i=new $V(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw ed(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const c=a.ok?l.errorMessage:l.error.message,[f,p]=c.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw ed(n,"credential-already-in-use",l);if(f==="EMAIL_EXISTS")throw ed(n,"email-already-in-use",l);if(f==="USER_DISABLED")throw ed(n,"user-disabled",l);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Oy(n,y,p);Jn(n,y)}}catch(i){if(i instanceof Hr)throw i;Jn(n,"network-request-failed",{message:String(i)})}}async function Ac(n,e,t,r,i={}){const a=await Ds(n,e,t,r,i);return"mfaPendingCredential"in a&&Jn(n,"multi-factor-auth-required",{_serverResponse:a}),a}function TR(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?My(n.config,i):`${n.config.apiScheme}://${i}`}function jV(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Er(this.auth,"network-request-failed")),zV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ed(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Er(n,e,r);return i.customData._tokenResponse=t,i}function dT(n){return n!==void 0&&n.enterprise!==void 0}class WV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jV(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function HV(n,e){return Ds(n,"GET","/v2/recaptchaConfig",xs(n,e))}/**
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
 */async function qV(n,e){return Ds(n,"POST","/v1/accounts:delete",e)}async function IR(n,e){return Ds(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Du(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KV(n,e=!1){const t=We(n),r=await t.getIdToken(e),i=Vy(r);Ee(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Du(Ym(i.auth_time)),issuedAtTime:Du(Ym(i.iat)),expirationTime:Du(Ym(i.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ym(n){return Number(n)*1e3}function Vy(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return md("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ed(t);return i?JSON.parse(i):(md("Failed to decode base64 JWT payload"),null)}catch(i){return md("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fT(n){const e=Vy(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zu(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Hr&&GV(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function GV({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class QV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Du(this.lastLoginAt),this.creationTime=Du(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gd(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Zu(n,IR(t,{idToken:r}));Ee(i==null?void 0:i.users.length,t,"internal-error");const a=i.users[0];n._notifyReloadListener(a);const l=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?SR(a.providerUserInfo):[],c=XV(n.providerData,l),f=n.isAnonymous,p=!(n.email&&a.passwordHash)&&!(c!=null&&c.length),y=f?p:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Yg(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function YV(n){const e=We(n);await Gd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XV(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SR(n){return n.map(e=>{var{providerId:t}=e,r=Dy(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function JV(n,e){const t=await ER(n,{},async()=>{const r=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,l=TR(n,i,"/v1/token",`key=${a}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",wR.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZV(n,e){return Ds(n,"POST","/v2/accounts:revokeToken",xs(n,e))}/**
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
 */class La{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=fT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await JV(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,l=new La;return r&&(Ee(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(Ee(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),a&&(Ee(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new La,this.toJSON())}_performRefresh(){return mi("not implemented")}}/**
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
 */function rs(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gi{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,a=Dy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Yg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Zu(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return KV(this,e)}reload(){return YV(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Gd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_r(this.auth.app))return Promise.reject(Ei(this.auth));const e=await this.getIdToken();return await Zu(this,qV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,a,l,c,f,p,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,S=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,R=(l=t.photoURL)!==null&&l!==void 0?l:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,A=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,B=(p=t.createdAt)!==null&&p!==void 0?p:void 0,K=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:q,emailVerified:Q,isAnonymous:oe,providerData:ie,stsTokenManager:b}=t;Ee(q&&b,e,"internal-error");const C=La.fromJSON(this.name,b);Ee(typeof q=="string",e,"internal-error"),rs(v,e.name),rs(E,e.name),Ee(typeof Q=="boolean",e,"internal-error"),Ee(typeof oe=="boolean",e,"internal-error"),rs(S,e.name),rs(R,e.name),rs(O,e.name),rs(A,e.name),rs(B,e.name),rs(K,e.name);const k=new gi({uid:q,auth:e,email:E,emailVerified:Q,displayName:v,isAnonymous:oe,photoURL:R,phoneNumber:S,tenantId:O,stsTokenManager:C,createdAt:B,lastLoginAt:K});return ie&&Array.isArray(ie)&&(k.providerData=ie.map(D=>Object.assign({},D))),A&&(k._redirectEventId=A),k}static async _fromIdTokenResponse(e,t,r=!1){const i=new La;i.updateFromServerResponse(t);const a=new gi({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Gd(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Ee(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?SR(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),c=new La;c.updateFromIdToken(r);const f=new gi({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Yg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,p),f}}/**
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
 */const pT=new Map;function _i(n){ki(n instanceof Function,"Expected a class definition");let e=pT.get(n);return e?(ki(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pT.set(n,e),e)}/**
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
 */class CR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}CR.type="NONE";const mT=CR;/**
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
 */function gd(n,e,t){return`firebase:${n}:${e}:${t}`}class Ma{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=gd(this.userKey,i.apiKey,a),this.fullPersistenceKey=gd("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ma(_i(mT),e,r);const i=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=i[0]||_i(mT);const l=gd(r,e.config.apiKey,e.name);let c=null;for(const p of t)try{const y=await p._get(l);if(y){const v=gi._fromJSON(e,y);p!==a&&(c=v),a=p;break}}catch{}const f=i.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Ma(a,e,r):(a=f[0],c&&await a._set(l,c.toJSON()),await Promise.all(t.map(async p=>{if(p!==a)try{await p._remove(l)}catch{}})),new Ma(a,e,r))}}/**
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
 */function gT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bR(e))return"Blackberry";if(xR(e))return"Webos";if(AR(e))return"Safari";if((e.includes("chrome/")||PR(e))&&!e.includes("edge/"))return"Chrome";if(NR(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RR(n=an()){return/firefox\//i.test(n)}function AR(n=an()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PR(n=an()){return/crios\//i.test(n)}function kR(n=an()){return/iemobile/i.test(n)}function NR(n=an()){return/android/i.test(n)}function bR(n=an()){return/blackberry/i.test(n)}function xR(n=an()){return/webos/i.test(n)}function Fy(n=an()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function eF(n=an()){var e;return Fy(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tF(){return bN()&&document.documentMode===10}function DR(n=an()){return Fy(n)||NR(n)||xR(n)||bR(n)||/windows phone/i.test(n)||kR(n)}/**
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
 */function OR(n,e=[]){let t;switch(n){case"Browser":t=gT(an());break;case"Worker":t=`${gT(an())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ns}/${r}`}/**
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
 */class nF{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((l,c)=>{try{const f=e(a);l(f)}catch(f){c(f)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rF(n,e={}){return Ds(n,"GET","/v2/passwordPolicy",xs(n,e))}/**
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
 */const iF=6;class sF{constructor(e){var t,r,i,a;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:iF,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,a,l,c;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(i=f.containsLowercaseLetter)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(l=f.containsNumericCharacter)!==null&&l!==void 0?l:!0),f.isValid&&(f.isValid=(c=f.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class oF{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _T(this),this.idTokenSubscription=new _T(this),this.beforeStateQueue=new nF(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_i(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ma.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await IR(this,{idToken:e}),r=await gi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_r(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,f=await this.tryRedirectSignIn(e);(!l||l===c)&&(f!=null&&f.user)&&(i=f.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_r(this.app))return Promise.reject(Ei(this));const t=e?We(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _r(this.app)?Promise.reject(Ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _r(this.app)?Promise.reject(Ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_i(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rF(this),t=new sF(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new uc("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_i(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Ma.create(this,[_i(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(c,this,"internal-error"),c.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,i);return()=>{l=!0,f()}}else{const f=e.addObserver(t);return()=>{l=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&LV(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Os(n){return We(n)}class _T{constructor(e){this.auth=e,this.observer=null,this.addObserver=zN(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aF(n){zf=n}function LR(n){return zf.loadJS(n)}function lF(){return zf.recaptchaEnterpriseScript}function uF(){return zf.gapiScript}function cF(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const hF="recaptcha-enterprise",dF="NO_RECAPTCHA";class fF{constructor(e){this.type=hF,this.auth=Os(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,c)=>{HV(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const p=new WV(f);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,l(p.siteKey)}}).catch(f=>{c(f)})})}function i(a,l,c){const f=window.grecaptcha;dT(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(p=>{l(p)}).catch(()=>{l(dF)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,l)=>{r(this.auth).then(c=>{if(!t&&dT(window.grecaptcha))i(c,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let f=lF();f.length!==0&&(f+=c),LR(f).then(()=>{i(c,a,l)}).catch(p=>{l(p)})}}).catch(c=>{l(c)})})}}async function yT(n,e,t,r=!1){const i=new fF(n);let a;try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Xg(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await yT(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await yT(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
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
 */function pF(n,e){const t=cc(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Sd(a,e??{}))return i;Jn(i,"already-initialized")}return t.initialize({options:e})}function mF(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_i);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gF(n,e,t){const r=Os(n);Ee(r._canInitEmulator,r,"emulator-config-failed"),Ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=MR(e),{host:l,port:c}=_F(e),f=c===null?"":`:${c}`;r.config.emulator={url:`${a}//${l}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),yF()}function MR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _F(n){const e=MR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:vT(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:vT(l)}}}function vT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function yF(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Uy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mi("not implemented")}_getIdTokenResponse(e){return mi("not implemented")}_linkToIdToken(e,t){return mi("not implemented")}_getReauthenticationResolver(e){return mi("not implemented")}}async function vF(n,e){return Ds(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function wF(n,e){return Ac(n,"POST","/v1/accounts:signInWithPassword",xs(n,e))}/**
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
 */async function EF(n,e){return Ac(n,"POST","/v1/accounts:signInWithEmailLink",xs(n,e))}async function TF(n,e){return Ac(n,"POST","/v1/accounts:signInWithEmailLink",xs(n,e))}/**
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
 */class ec extends Uy{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ec(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ec(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xg(e,t,"signInWithPassword",wF);case"emailLink":return EF(e,{email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xg(e,r,"signUpPassword",vF);case"emailLink":return TF(e,{idToken:t,email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Va(n,e){return Ac(n,"POST","/v1/accounts:signInWithIdp",xs(n,e))}/**
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
 */const IF="http://localhost";class Ro extends Uy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ro(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,a=Dy(t,["providerId","signInMethod"]);if(!r||!i)return null;const l=new Ro(r,i);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Va(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Va(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Va(e,t)}buildRequest(){const e={requestUri:IF,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
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
 */function SF(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CF(n){const e=_u(yu(n)).link,t=e?_u(yu(e)).deep_link_id:null,r=_u(yu(n)).deep_link_id;return(r?_u(yu(r)).link:null)||r||t||e||n}class By{constructor(e){var t,r,i,a,l,c;const f=_u(yu(e)),p=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,v=SF((i=f.mode)!==null&&i!==void 0?i:null);Ee(p&&y&&v,"argument-error"),this.apiKey=p,this.operation=v,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=f.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=f.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=CF(e);try{return new By(t)}catch{return null}}}/**
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
 */class dl{constructor(){this.providerId=dl.PROVIDER_ID}static credential(e,t){return ec._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=By.parseLink(t);return Ee(r,"argument-error"),ec._fromEmailAndCode(e,r.code,r.tenantId)}}dl.PROVIDER_ID="password";dl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pc extends zy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ss extends Pc{constructor(){super("facebook.com")}static credential(e){return Ro._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ss.credential(e.oauthAccessToken)}catch{return null}}}ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";ss.PROVIDER_ID="facebook.com";/**
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
 */class di extends Pc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ro._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return di.credential(t,r)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
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
 */class fi extends Pc{constructor(){super("github.com")}static credential(e){return Ro._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
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
 */class os extends Pc{constructor(){super("twitter.com")}static credential(e,t){return Ro._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return os.credential(t,r)}catch{return null}}}os.TWITTER_SIGN_IN_METHOD="twitter.com";os.PROVIDER_ID="twitter.com";/**
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
 */async function RF(n,e){return Ac(n,"POST","/v1/accounts:signUp",xs(n,e))}/**
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
 */class Ao{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await gi._fromIdTokenResponse(e,r,i),l=wT(r);return new Ao({user:a,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=wT(r);return new Ao({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function wT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Qd extends Hr{constructor(e,t,r,i){var a;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Qd(e,t,r,i)}}function VR(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Qd._fromErrorAndOperation(n,a,e,r):a})}async function AF(n,e,t=!1){const r=await Zu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ao._forOperation(n,"link",r)}/**
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
 */async function PF(n,e,t=!1){const{auth:r}=n;if(_r(r.app))return Promise.reject(Ei(r));const i="reauthenticate";try{const a=await Zu(n,VR(r,i,e,n),t);Ee(a.idToken,r,"internal-error");const l=Vy(a.idToken);Ee(l,r,"internal-error");const{sub:c}=l;return Ee(n.uid===c,r,"user-mismatch"),Ao._forOperation(n,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Jn(r,"user-mismatch"),a}}/**
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
 */async function FR(n,e,t=!1){if(_r(n.app))return Promise.reject(Ei(n));const r="signIn",i=await VR(n,r,e),a=await Ao._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function kF(n,e){return FR(Os(n),e)}/**
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
 */async function UR(n){const e=Os(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NF(n,e,t){if(_r(n.app))return Promise.reject(Ei(n));const r=Os(n),l=await Xg(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RF).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&UR(n),f}),c=await Ao._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function bF(n,e,t){return _r(n.app)?Promise.reject(Ei(n)):kF(We(n),dl.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&UR(n),r})}function xF(n,e,t,r){return We(n).onIdTokenChanged(e,t,r)}function DF(n,e,t){return We(n).beforeAuthStateChanged(e,t)}const Yd="__sak";/**
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
 */class BR{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yd,"1"),this.storage.removeItem(Yd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OF=1e3,LF=10;class zR extends BR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=DR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,c,f)=>{this.notifyListeners(l,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);tF()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LF):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},OF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zR.type="LOCAL";const MF=zR;/**
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
 */class jR extends BR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jR.type="SESSION";const $R=jR;/**
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
 */function VF(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new jf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async p=>p(t.origin,a)),f=await VF(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jf.receivers=[];/**
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
 */function jy(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class FF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,l;return new Promise((c,f)=>{const p=jy("",20);i.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(v){const E=v;if(E.data.eventId===p)switch(E.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(E.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function zr(){return window}function UF(n){zr().location.href=n}/**
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
 */function WR(){return typeof zr().WorkerGlobalScope<"u"&&typeof zr().importScripts=="function"}async function BF(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zF(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jF(){return WR()?self:null}/**
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
 */const HR="firebaseLocalStorageDb",$F=1,Xd="firebaseLocalStorage",qR="fbase_key";class kc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $f(n,e){return n.transaction([Xd],e?"readwrite":"readonly").objectStore(Xd)}function WF(){const n=indexedDB.deleteDatabase(HR);return new kc(n).toPromise()}function Jg(){const n=indexedDB.open(HR,$F);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xd,{keyPath:qR})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xd)?e(r):(r.close(),await WF(),e(await Jg()))})})}async function ET(n,e,t){const r=$f(n,!0).put({[qR]:e,value:t});return new kc(r).toPromise()}async function HF(n,e){const t=$f(n,!1).get(e),r=await new kc(t).toPromise();return r===void 0?null:r.value}function TT(n,e){const t=$f(n,!0).delete(e);return new kc(t).toPromise()}const qF=800,KF=3;class KR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>KF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jf._getInstance(jF()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await BF(),!this.activeServiceWorker)return;this.sender=new FF(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jg();return await ET(e,Yd,"1"),await TT(e,Yd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ET(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>HF(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>TT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=$f(i,!1).getAll();return new kc(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KR.type="LOCAL";const GF=KR;new Rc(3e4,6e4);/**
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
 */function GR(n,e){return e?_i(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class $y extends Uy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Va(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Va(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Va(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function QF(n){return FR(n.auth,new $y(n),n.bypassAuthState)}function YF(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),PF(t,new $y(n),n.bypassAuthState)}async function XF(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),AF(t,new $y(n),n.bypassAuthState)}/**
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
 */class QR{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:l,type:c}=e;if(l){this.reject(l);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(f))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QF;case"linkViaPopup":case"linkViaRedirect":return XF;case"reauthViaPopup":case"reauthViaRedirect":return YF;default:Jn(this.auth,"internal-error")}}resolve(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const JF=new Rc(2e3,1e4);async function IT(n,e,t){if(_r(n.app))return Promise.reject(Er(n,"operation-not-supported-in-this-environment"));const r=Os(n);MV(n,e,zy);const i=GR(r,t);return new mo(r,"signInViaPopup",e,i).executeNotNull()}class mo extends QR{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,mo.currentPopupAction&&mo.currentPopupAction.cancel(),mo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){ki(this.filter.length===1,"Popup operations only handle one event");const e=jy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JF.get())};e()}}mo.currentPopupAction=null;/**
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
 */const ZF="pendingRedirect",_d=new Map;class eU extends QR{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_d.get(this.auth._key());if(!e){try{const r=await tU(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_d.set(this.auth._key(),e)}return this.bypassAuthState||_d.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tU(n,e){const t=iU(e),r=rU(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function nU(n,e){_d.set(n._key(),e)}function rU(n){return _i(n._redirectPersistence)}function iU(n){return gd(ZF,n.config.apiKey,n.name)}async function sU(n,e,t=!1){if(_r(n.app))return Promise.reject(Ei(n));const r=Os(n),i=GR(r,e),l=await new eU(r,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const oU=10*60*1e3;class aU{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lU(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!YR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Er(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oU&&this.cachedEventUids.clear(),this.cachedEventUids.has(ST(e))}saveEventToCache(e){this.cachedEventUids.add(ST(e)),this.lastProcessedEventTime=Date.now()}}function ST(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function YR({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lU(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YR(n);default:return!1}}/**
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
 */async function uU(n,e={}){return Ds(n,"GET","/v1/projects",e)}/**
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
 */const cU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hU=/^https?/;async function dU(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uU(n);for(const t of e)try{if(fU(t))return}catch{}Jn(n,"unauthorized-domain")}function fU(n){const e=Qg(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!hU.test(t))return!1;if(cU.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const pU=new Rc(3e4,6e4);function CT(){const n=zr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function mU(n){return new Promise((e,t)=>{var r,i,a;function l(){CT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{CT(),t(Er(n,"network-request-failed"))},timeout:pU.get()})}if(!((i=(r=zr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=zr().gapi)===null||a===void 0)&&a.load)l();else{const c=cF("iframefcb");return zr()[c]=()=>{gapi.load?l():t(Er(n,"network-request-failed"))},LR(`${uF()}?onload=${c}`).catch(f=>t(f))}}).catch(e=>{throw yd=null,e})}let yd=null;function gU(n){return yd=yd||mU(n),yd}/**
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
 */const _U=new Rc(5e3,15e3),yU="__/auth/iframe",vU="emulator/auth/iframe",wU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TU(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?My(e,vU):`https://${n.config.authDomain}/${yU}`,r={apiKey:e.apiKey,appName:n.name,v:Ns},i=EU.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${tl(r).slice(1)}`}async function IU(n){const e=await gU(n),t=zr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:TU(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wU,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const l=Er(n,"network-request-failed"),c=zr().setTimeout(()=>{a(l)},_U.get());function f(){zr().clearTimeout(c),i(r)}r.ping(f).then(f,()=>{a(l)})}))}/**
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
 */const SU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CU=500,RU=600,AU="_blank",PU="http://localhost";class RT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kU(n,e,t,r=CU,i=RU){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const f=Object.assign(Object.assign({},SU),{width:r.toString(),height:i.toString(),top:a,left:l}),p=an().toLowerCase();t&&(c=PR(p)?AU:t),RR(p)&&(e=e||PU,f.scrollbars="yes");const y=Object.entries(f).reduce((E,[S,R])=>`${E}${S}=${R},`,"");if(eF(p)&&c!=="_self")return NU(e||"",c),new RT(null);const v=window.open(e||"",c,y);Ee(v,n,"popup-blocked");try{v.focus()}catch{}return new RT(v)}function NU(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const bU="__/auth/handler",xU="emulator/auth/handler",DU=encodeURIComponent("fac");async function AT(n,e,t,r,i,a){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ns,eventId:i};if(e instanceof zy){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",Td(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries({}))l[y]=v}if(e instanceof Pc){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(l.scopes=y.join(","))}n.tenantId&&(l.tid=n.tenantId);const c=l;for(const y of Object.keys(c))c[y]===void 0&&delete c[y];const f=await n._getAppCheckToken(),p=f?`#${DU}=${encodeURIComponent(f)}`:"";return`${OU(n)}?${tl(c).slice(1)}${p}`}function OU({config:n}){return n.emulator?My(n,xU):`https://${n.authDomain}/${bU}`}/**
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
 */const Xm="webStorageSupport";class LU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$R,this._completeRedirectFn=sU,this._overrideRedirectResult=nU}async _openPopup(e,t,r,i){var a;ki((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await AT(e,t,r,Qg(),i);return kU(e,l,jy())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await AT(e,t,r,Qg(),i);return UF(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(ki(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await IU(e),r=new aU(e);return t.register("authEvent",i=>(Ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xm,{type:Xm},i=>{var a;const l=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Xm];l!==void 0&&t(!!l),Jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dU(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return DR()||AR()||Fy()}}const MU=LU;var PT="@firebase/auth",kT="1.7.7";/**
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
 */class VU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FU(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UU(n){ys(new Si("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;Ee(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:l,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OR(n)},p=new oF(r,i,a,f);return mF(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ys(new Si("auth-internal",e=>{const t=Os(e.getProvider("auth").getImmediate());return(r=>new VU(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(PT,kT,FU(n)),Yn(PT,kT,"esm2017")}/**
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
 */const BU=5*60,zU=II("authIdTokenMaxAge")||BU;let NT=null;const jU=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zU)return;const i=t==null?void 0:t.token;NT!==i&&(NT=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $U(n=df()){const e=cc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=pF(n,{popupRedirectResolver:MU,persistence:[GF,MF,$R]}),r=II("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=jU(a.toString());DF(t,l,()=>l(t.currentUser)),xF(t,c=>l(c))}}const i=EI("auth");return i&&gF(t,`http://${i}`),t}function WU(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}aF({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=Er("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",WU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UU("Browser");/**
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
 */const XR="firebasestorage.googleapis.com",JR="storageBucket",HU=2*60*1e3,qU=10*60*1e3;/**
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
 */class mt extends Hr{constructor(e,t,r=0){super(Jm(e),`Firebase Storage: ${t} (${Jm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pt||(pt={}));function Jm(n){return"storage/"+n}function Wy(){const n="An unknown error occurred, please check the error payload for server response.";return new mt(pt.UNKNOWN,n)}function KU(n){return new mt(pt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function GU(n){return new mt(pt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QU(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new mt(pt.UNAUTHENTICATED,n)}function YU(){return new mt(pt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function XU(n){return new mt(pt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function JU(){return new mt(pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZU(){return new mt(pt.CANCELED,"User canceled the upload/download.")}function e4(n){return new mt(pt.INVALID_URL,"Invalid URL '"+n+"'.")}function t4(n){return new mt(pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function n4(){return new mt(pt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+JR+"' property when initializing the app?")}function r4(){return new mt(pt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function i4(){return new mt(pt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function s4(n){return new mt(pt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Zg(n){return new mt(pt.INVALID_ARGUMENT,n)}function ZR(){return new mt(pt.APP_DELETED,"The Firebase app was deleted.")}function o4(n){return new mt(pt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ou(n,e){return new mt(pt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function gu(n){throw new mt(pt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Mn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Mn.makeFromUrl(e,t)}catch{return new Mn(e,"")}if(r.path==="")return r;throw t4(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function a(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+i+l,"i"),f={bucket:1,path:3};function p(Q){Q.path_=decodeURIComponent(Q.path)}const y="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",S=new RegExp(`^https?://${v}/${y}/b/${i}/o${E}`,"i"),R={bucket:1,path:3},O=t===XR?"(?:storage.googleapis.com|storage.cloud.google.com)":t,A="([^?#]*)",B=new RegExp(`^https?://${O}/${i}/${A}`,"i"),q=[{regex:c,indices:f,postModify:a},{regex:S,indices:R,postModify:p},{regex:B,indices:{bucket:1,path:2},postModify:p}];for(let Q=0;Q<q.length;Q++){const oe=q[Q],ie=oe.regex.exec(e);if(ie){const b=ie[oe.indices.bucket];let C=ie[oe.indices.path];C||(C=""),r=new Mn(b,C),oe.postModify(r);break}}if(r==null)throw e4(e);return r}}class a4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function l4(n,e,t){let r=1,i=null,a=null,l=!1,c=0;function f(){return c===2}let p=!1;function y(...A){p||(p=!0,e.apply(null,A))}function v(A){i=setTimeout(()=>{i=null,n(S,f())},A)}function E(){a&&clearTimeout(a)}function S(A,...B){if(p){E();return}if(A){E(),y.call(null,A,...B);return}if(f()||l){E(),y.call(null,A,...B);return}r<64&&(r*=2);let q;c===1?(c=2,q=0):q=(r+Math.random())*1e3,v(q)}let R=!1;function O(A){R||(R=!0,E(),!p&&(i!==null?(A||(c=2),clearTimeout(i),v(0)):A||(c=1)))}return v(0),a=setTimeout(()=>{l=!0,O(!0)},t),O}function u4(n){n(!1)}/**
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
 */function c4(n){return n!==void 0}function h4(n){return typeof n=="object"&&!Array.isArray(n)}function Hy(n){return typeof n=="string"||n instanceof String}function bT(n){return qy()&&n instanceof Blob}function qy(){return typeof Blob<"u"}function xT(n,e,t,r){if(r<e)throw Zg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Zg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Wf(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function eA(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var yo;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(yo||(yo={}));/**
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
 */function d4(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||i||a}/**
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
 */class f4{constructor(e,t,r,i,a,l,c,f,p,y,v,E=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=a,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=f,this.timeout_=p,this.progressCallback_=y,this.connectionFactory_=v,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,R)=>{this.resolve_=S,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new td(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const l=c=>{const f=c.loaded,p=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,p)};this.progressCallback_!==null&&a.addUploadProgressListener(l),a.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(l),this.pendingConnection_=null;const c=a.getErrorCode()===yo.NO_ERROR,f=a.getStatus();if(!c||d4(f,this.additionalRetryCodes_)&&this.retry){const y=a.getErrorCode()===yo.ABORT;r(!1,new td(!1,null,y));return}const p=this.successCodes_.indexOf(f)!==-1;r(!0,new td(p,a))})},t=(r,i)=>{const a=this.resolve_,l=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const f=this.callback_(c,c.getResponse());c4(f)?a(f):a()}catch(f){l(f)}else if(c!==null){const f=Wy();f.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,f)):l(f)}else if(i.canceled){const f=this.appDelete_?ZR():ZU();l(f)}else{const f=JU();l(f)}};this.canceled_?t(!1,new td(!1,null,!0)):this.backoffId_=l4(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&u4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class td{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function p4(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function m4(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function g4(n,e){e&&(n["X-Firebase-GMPID"]=e)}function _4(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function y4(n,e,t,r,i,a,l=!0){const c=eA(n.urlParams),f=n.url+c,p=Object.assign({},n.headers);return g4(p,e),p4(p,t),m4(p,a),_4(p,r),new f4(f,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,l)}/**
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
 */function v4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function w4(...n){const e=v4();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(qy())return new Blob(n);throw new mt(pt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function E4(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function T4(n){if(typeof atob>"u")throw s4("base-64");return atob(n)}/**
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
 */const Fr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Zm{constructor(e,t){this.data=e,this.contentType=t||null}}function I4(n,e){switch(n){case Fr.RAW:return new Zm(tA(e));case Fr.BASE64:case Fr.BASE64URL:return new Zm(nA(n,e));case Fr.DATA_URL:return new Zm(C4(e),R4(e))}throw Wy()}function tA(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const a=r,l=n.charCodeAt(++t);r=65536|(a&1023)<<10|l&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function S4(n){let e;try{e=decodeURIComponent(n)}catch{throw Ou(Fr.DATA_URL,"Malformed data URL.")}return tA(e)}function nA(n,e){switch(n){case Fr.BASE64:{const i=e.indexOf("-")!==-1,a=e.indexOf("_")!==-1;if(i||a)throw Ou(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Fr.BASE64URL:{const i=e.indexOf("+")!==-1,a=e.indexOf("/")!==-1;if(i||a)throw Ou(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=T4(e)}catch(i){throw i.message.includes("polyfill")?i:Ou(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class rA{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ou(Fr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=A4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function C4(n){const e=new rA(n);return e.base64?nA(Fr.BASE64,e.rest):S4(e.rest)}function R4(n){return new rA(n).contentType}function A4(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class as{constructor(e,t){let r=0,i="";bT(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(bT(this.data_)){const r=this.data_,i=E4(r,e,t);return i===null?null:new as(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new as(r,!0)}}static getBlob(...e){if(qy()){const t=e.map(r=>r instanceof as?r.data_:r);return new as(w4.apply(null,t))}else{const t=e.map(l=>Hy(l)?I4(Fr.RAW,l).data:l.data_);let r=0;t.forEach(l=>{r+=l.byteLength});const i=new Uint8Array(r);let a=0;return t.forEach(l=>{for(let c=0;c<l.length;c++)i[a++]=l[c]}),new as(i,!0)}}uploadData(){return this.data_}}/**
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
 */function iA(n){let e;try{e=JSON.parse(n)}catch{return null}return h4(e)?e:null}/**
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
 */function P4(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function k4(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function sA(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function N4(n,e){return e}class dn{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||N4}}let nd=null;function b4(n){return!Hy(n)||n.length<2?n:sA(n)}function oA(){if(nd)return nd;const n=[];n.push(new dn("bucket")),n.push(new dn("generation")),n.push(new dn("metageneration")),n.push(new dn("name","fullPath",!0));function e(a,l){return b4(l)}const t=new dn("name");t.xform=e,n.push(t);function r(a,l){return l!==void 0?Number(l):l}const i=new dn("size");return i.xform=r,n.push(i),n.push(new dn("timeCreated")),n.push(new dn("updated")),n.push(new dn("md5Hash",null,!0)),n.push(new dn("cacheControl",null,!0)),n.push(new dn("contentDisposition",null,!0)),n.push(new dn("contentEncoding",null,!0)),n.push(new dn("contentLanguage",null,!0)),n.push(new dn("contentType",null,!0)),n.push(new dn("metadata","customMetadata",!0)),nd=n,nd}function x4(n,e){function t(){const r=n.bucket,i=n.fullPath,a=new Mn(r,i);return e._makeStorageReference(a)}Object.defineProperty(n,"ref",{get:t})}function D4(n,e,t){const r={};r.type="file";const i=t.length;for(let a=0;a<i;a++){const l=t[a];r[l.local]=l.xform(r,e[l.server])}return x4(r,n),r}function aA(n,e,t){const r=iA(e);return r===null?null:D4(n,r,t)}function O4(n,e,t,r){const i=iA(e);if(i===null||!Hy(i.downloadTokens))return null;const a=i.downloadTokens;if(a.length===0)return null;const l=encodeURIComponent;return a.split(",").map(p=>{const y=n.bucket,v=n.fullPath,E="/b/"+l(y)+"/o/"+l(v),S=Wf(E,t,r),R=eA({alt:"media",token:p});return S+R})[0]}function L4(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const a=e[i];a.writable&&(t[a.server]=n[a.local])}return JSON.stringify(t)}class Ky{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function lA(n){if(!n)throw Wy()}function M4(n,e){function t(r,i){const a=aA(n,i,e);return lA(a!==null),a}return t}function V4(n,e){function t(r,i){const a=aA(n,i,e);return lA(a!==null),O4(a,i,n.host,n._protocol)}return t}function uA(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=YU():i=QU():t.getStatus()===402?i=GU(n.bucket):t.getStatus()===403?i=XU(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function cA(n){const e=uA(n);function t(r,i){let a=e(r,i);return r.getStatus()===404&&(a=KU(n.path)),a.serverResponse=i.serverResponse,a}return t}function F4(n,e,t){const r=e.fullServerUrl(),i=Wf(r,n.host,n._protocol),a="GET",l=n.maxOperationRetryTime,c=new Ky(i,a,V4(n,t),l);return c.errorHandler=cA(e),c}function U4(n,e){const t=e.fullServerUrl(),r=Wf(t,n.host,n._protocol),i="DELETE",a=n.maxOperationRetryTime;function l(f,p){}const c=new Ky(r,i,l,a);return c.successCodes=[200,204],c.errorHandler=cA(e),c}function B4(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function z4(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=B4(null,e)),r}function j4(n,e,t,r,i){const a=e.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};function c(){let q="";for(let Q=0;Q<2;Q++)q=q+Math.random().toString().slice(2);return q}const f=c();l["Content-Type"]="multipart/related; boundary="+f;const p=z4(e,r,i),y=L4(p,t),v="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+f+`\r
Content-Type: `+p.contentType+`\r
\r
`,E=`\r
--`+f+"--",S=as.getBlob(v,r,E);if(S===null)throw r4();const R={name:p.fullPath},O=Wf(a,n.host,n._protocol),A="POST",B=n.maxUploadRetryTime,K=new Ky(O,A,M4(n,t),B);return K.urlParams=R,K.headers=l,K.body=S.uploadData(),K.errorHandler=uA(e),K}class $4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw gu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class W4 extends $4{initXhr(){this.xhr_.responseType="text"}}function Gy(){return new W4}/**
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
 */class Po{constructor(e,t){this._service=e,t instanceof Mn?this._location=t:this._location=Mn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Po(e,t)}get root(){const e=new Mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sA(this._location.path)}get storage(){return this._service}get parent(){const e=P4(this._location.path);if(e===null)return null;const t=new Mn(this._location.bucket,e);return new Po(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw o4(e)}}function H4(n,e,t){n._throwIfRoot("uploadBytes");const r=j4(n.storage,n._location,oA(),new as(e,!0),t);return n.storage.makeRequestWithTokens(r,Gy).then(i=>({metadata:i,ref:n}))}function q4(n){n._throwIfRoot("getDownloadURL");const e=F4(n.storage,n._location,oA());return n.storage.makeRequestWithTokens(e,Gy).then(t=>{if(t===null)throw i4();return t})}function K4(n){n._throwIfRoot("deleteObject");const e=U4(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Gy)}function G4(n,e){const t=k4(n._location.path,e),r=new Mn(n._location.bucket,t);return new Po(n.storage,r)}/**
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
 */function Q4(n){return/^[A-Za-z]+:\/\//.test(n)}function Y4(n,e){return new Po(n,e)}function hA(n,e){if(n instanceof Qy){const t=n;if(t._bucket==null)throw n4();const r=new Po(t,t._bucket);return e!=null?hA(r,e):r}else return e!==void 0?G4(n,e):n}function X4(n,e){if(e&&Q4(e)){if(n instanceof Qy)return Y4(n,e);throw Zg("To use ref(service, url), the first argument must be a Storage instance.")}else return hA(n,e)}function DT(n,e){const t=e==null?void 0:e[JR];return t==null?null:Mn.makeFromBucketSpec(t,n)}function J4(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:p_(i,n.app.options.projectId))}class Qy{constructor(e,t,r,i,a){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=a,this._bucket=null,this._host=XR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=HU,this._maxUploadRetryTime=qU,this._requests=new Set,i!=null?this._bucket=Mn.makeFromBucketSpec(i,this._host):this._bucket=DT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mn.makeFromBucketSpec(this._url,e):this._bucket=DT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Po(this,e)}_makeRequest(e,t,r,i,a=!0){if(this._deleted)return new a4(ZR());{const l=y4(e,this._appId,r,i,t,this._firebaseVersion,a);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const OT="@firebase/storage",LT="0.13.0";/**
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
 */const dA="storage";function l6(n,e,t){return n=We(n),H4(n,e,t)}function u6(n){return n=We(n),q4(n)}function c6(n){return n=We(n),K4(n)}function h6(n,e){return n=We(n),X4(n,e)}function Z4(n=df(),e){n=We(n);const r=cc(n,dA).getImmediate({identifier:e}),i=f_("storage");return i&&e9(r,...i),r}function e9(n,e,t,r={}){J4(n,e,t,r)}function t9(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Qy(t,r,i,e,Ns)}function n9(){ys(new Si(dA,t9,"PUBLIC").setMultipleInstances(!0)),Yn(OT,LT,""),Yn(OT,LT,"esm2017")}n9();const r9={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",databaseURL:""},Yy=kI(r9),fl=BO(Yy),rd=$U(Yy),i9=new di,s9=new fi,d6=Z4(Yy);function o9(n,e){var R,O;if(!e)return n;const{category:t="",tags:r=[],searchQuery:i="",collections:a=[],productTypes:l=[],priceRange:c={min:0,max:1e3},seller:f="",selectedOptions:p=[],sortBy:y="",relevant:v="most",idList:E=[]}=e;let S=[];for(let A of n){let B=!0;r.length>0&&!((R=A==null?void 0:A.Tags)!=null&&R.some(K=>e.tags.includes(K.toLowerCase())))&&(B=!1),t!==""&&A.Category.toLowerCase()!==t&&(B=!1),i!==""&&!A.Name.toLowerCase().includes(i.toLowerCase())&&(B=!1),a.length>0&&!a.includes((O=A.Collection)==null?void 0:O.toLowerCase())&&(B=!1),l.length>0&&!l.includes(A.Type.toLowerCase())&&(B=!1),Number(c.min)>-1&&Number(c.max)>0&&(Number(A.Price)<Number(c.min)||Number(A.Price)>Number(c.max))&&(B=!1),f[0]&&f[0]!=="All"&&A.SellerId!==f[0]&&(B=!1),p.length>0&&A.Options&&(A.Options.some(({title:q,options:Q})=>p.some(oe=>oe.title.toLowerCase()===q.toLowerCase()&&Q.some(ie=>ie.toLowerCase()===oe.selectedOption.toLowerCase())))||(B=!1)),E.length&&E&&!gI(E,A==null?void 0:A.id)&&(B=!1),B&&S.push(A)}if(y!==""&&(S=S.sort((A,B)=>{switch(y){case"Popular":if(A!=null&&A.Stars&&(B!=null&&B.Stars))return D0(B==null?void 0:B.Stars)-D0(A==null?void 0:A.Stars);break;case"High To Low":return Number(B.Price)-Number(A.Price);case"Low To High":return Number(A.Price)-Number(B.Price);case"Best Sell":return A.Tags.find(K=>K.toLowerCase()==="trend");default:return A}})),v)switch(v){case"most":return S;case"least":return S.reverse()}return S}function Kt(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var a9=typeof Symbol=="function"&&Symbol.observable||"@@observable",MT=a9,eg=()=>Math.random().toString(36).substring(7).split("").join("."),l9={INIT:`@@redux/INIT${eg()}`,REPLACE:`@@redux/REPLACE${eg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${eg()}`},Jd=l9;function Xy(n){if(typeof n!="object"||n===null)return!1;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e||Object.getPrototypeOf(n)===null}function fA(n,e,t){if(typeof n!="function")throw new Error(Kt(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(Kt(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(Kt(1));return t(fA)(n,e)}let r=n,i=e,a=new Map,l=a,c=0,f=!1;function p(){l===a&&(l=new Map,a.forEach((A,B)=>{l.set(B,A)}))}function y(){if(f)throw new Error(Kt(3));return i}function v(A){if(typeof A!="function")throw new Error(Kt(4));if(f)throw new Error(Kt(5));let B=!0;p();const K=c++;return l.set(K,A),function(){if(B){if(f)throw new Error(Kt(6));B=!1,p(),l.delete(K),a=null}}}function E(A){if(!Xy(A))throw new Error(Kt(7));if(typeof A.type>"u")throw new Error(Kt(8));if(typeof A.type!="string")throw new Error(Kt(17));if(f)throw new Error(Kt(9));try{f=!0,i=r(i,A)}finally{f=!1}return(a=l).forEach(K=>{K()}),A}function S(A){if(typeof A!="function")throw new Error(Kt(10));r=A,E({type:Jd.REPLACE})}function R(){const A=v;return{subscribe(B){if(typeof B!="object"||B===null)throw new Error(Kt(11));function K(){const Q=B;Q.next&&Q.next(y())}return K(),{unsubscribe:A(K)}},[MT](){return this}}}return E({type:Jd.INIT}),{dispatch:E,subscribe:v,getState:y,replaceReducer:S,[MT]:R}}function u9(n){Object.keys(n).forEach(e=>{const t=n[e];if(typeof t(void 0,{type:Jd.INIT})>"u")throw new Error(Kt(12));if(typeof t(void 0,{type:Jd.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Kt(13))})}function c9(n){const e=Object.keys(n),t={};for(let a=0;a<e.length;a++){const l=e[a];typeof n[l]=="function"&&(t[l]=n[l])}const r=Object.keys(t);let i;try{u9(t)}catch(a){i=a}return function(l={},c){if(i)throw i;let f=!1;const p={};for(let y=0;y<r.length;y++){const v=r[y],E=t[v],S=l[v],R=E(S,c);if(typeof R>"u")throw c&&c.type,new Error(Kt(14));p[v]=R,f=f||R!==S}return f=f||r.length!==Object.keys(l).length,f?p:l}}function Zd(...n){return n.length===0?e=>e:n.length===1?n[0]:n.reduce((e,t)=>(...r)=>e(t(...r)))}function h9(...n){return e=>(t,r)=>{const i=e(t,r);let a=()=>{throw new Error(Kt(15))};const l={getState:i.getState,dispatch:(f,...p)=>a(f,...p)},c=n.map(f=>f(l));return a=Zd(...c)(i.dispatch),{...i,dispatch:a}}}function d9(n){return Xy(n)&&"type"in n&&typeof n.type=="string"}var pA=Symbol.for("immer-nothing"),VT=Symbol.for("immer-draftable"),Vn=Symbol.for("immer-state");function mr(n,...e){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var Ja=Object.getPrototypeOf;function As(n){return!!n&&!!n[Vn]}function Ni(n){var e;return n?mA(n)||Array.isArray(n)||!!n[VT]||!!((e=n.constructor)!=null&&e[VT])||qf(n)||Kf(n):!1}var f9=Object.prototype.constructor.toString();function mA(n){if(!n||typeof n!="object")return!1;const e=Ja(n);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===f9}function tc(n,e){Hf(n)===0?Object.entries(n).forEach(([t,r])=>{e(t,r,n)}):n.forEach((t,r)=>e(r,t,n))}function Hf(n){const e=n[Vn];return e?e.type_:Array.isArray(n)?1:qf(n)?2:Kf(n)?3:0}function e_(n,e){return Hf(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function gA(n,e,t){const r=Hf(n);r===2?n.set(e,t):r===3?n.add(t):n[e]=t}function p9(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function qf(n){return n instanceof Map}function Kf(n){return n instanceof Set}function ho(n){return n.copy_||n.base_}function t_(n,e){if(qf(n))return new Map(n);if(Kf(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);if(!e&&mA(n))return Ja(n)?{...n}:Object.assign(Object.create(null),n);const t=Object.getOwnPropertyDescriptors(n);delete t[Vn];let r=Reflect.ownKeys(t);for(let i=0;i<r.length;i++){const a=r[i],l=t[a];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(t[a]={configurable:!0,writable:!0,enumerable:l.enumerable,value:n[a]})}return Object.create(Ja(n),t)}function Jy(n,e=!1){return Gf(n)||As(n)||!Ni(n)||(Hf(n)>1&&(n.set=n.add=n.clear=n.delete=m9),Object.freeze(n),e&&tc(n,(t,r)=>Jy(r,!0))),n}function m9(){mr(2)}function Gf(n){return Object.isFrozen(n)}var g9={};function ko(n){const e=g9[n];return e||mr(0,n),e}var nc;function _A(){return nc}function _9(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function FT(n,e){e&&(ko("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function n_(n){r_(n),n.drafts_.forEach(y9),n.drafts_=null}function r_(n){n===nc&&(nc=n.parent_)}function UT(n){return nc=_9(nc,n)}function y9(n){const e=n[Vn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function BT(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[Vn].modified_&&(n_(e),mr(4)),Ni(n)&&(n=ef(e,n),e.parent_||tf(e,n)),e.patches_&&ko("Patches").generateReplacementPatches_(t[Vn].base_,n,e.patches_,e.inversePatches_)):n=ef(e,t,[]),n_(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==pA?n:void 0}function ef(n,e,t){if(Gf(e))return e;const r=e[Vn];if(!r)return tc(e,(i,a)=>zT(n,r,e,i,a,t)),e;if(r.scope_!==n)return e;if(!r.modified_)return tf(n,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let a=i,l=!1;r.type_===3&&(a=new Set(i),i.clear(),l=!0),tc(a,(c,f)=>zT(n,r,i,c,f,t,l)),tf(n,i,!1),t&&n.patches_&&ko("Patches").generatePatches_(r,t,n.patches_,n.inversePatches_)}return r.copy_}function zT(n,e,t,r,i,a,l){if(As(i)){const c=a&&e&&e.type_!==3&&!e_(e.assigned_,r)?a.concat(r):void 0,f=ef(n,i,c);if(gA(t,r,f),As(f))n.canAutoFreeze_=!1;else return}else l&&t.add(i);if(Ni(i)&&!Gf(i)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;ef(n,i),(!e||!e.scope_.parent_)&&tf(n,i)}}function tf(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&Jy(e,t)}function v9(n,e){const t=Array.isArray(n),r={type_:t?1:0,scope_:e?e.scope_:_A(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=Zy;t&&(i=[r],a=rc);const{revoke:l,proxy:c}=Proxy.revocable(i,a);return r.draft_=c,r.revoke_=l,c}var Zy={get(n,e){if(e===Vn)return n;const t=ho(n);if(!e_(t,e))return w9(n,t,e);const r=t[e];return n.finalized_||!Ni(r)?r:r===tg(n.base_,e)?(ng(n),n.copy_[e]=s_(r,n)):r},has(n,e){return e in ho(n)},ownKeys(n){return Reflect.ownKeys(ho(n))},set(n,e,t){const r=yA(ho(n),e);if(r!=null&&r.set)return r.set.call(n.draft_,t),!0;if(!n.modified_){const i=tg(ho(n),e),a=i==null?void 0:i[Vn];if(a&&a.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(p9(t,i)&&(t!==void 0||e_(n.base_,e)))return!0;ng(n),i_(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return tg(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,ng(n),i_(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=ho(n),r=Reflect.getOwnPropertyDescriptor(t,e);return r&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:r.enumerable,value:t[e]}},defineProperty(){mr(11)},getPrototypeOf(n){return Ja(n.base_)},setPrototypeOf(){mr(12)}},rc={};tc(Zy,(n,e)=>{rc[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});rc.deleteProperty=function(n,e){return rc.set.call(this,n,e,void 0)};rc.set=function(n,e,t){return Zy.set.call(this,n[0],e,t,n[0])};function tg(n,e){const t=n[Vn];return(t?ho(t):n)[e]}function w9(n,e,t){var i;const r=yA(e,t);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(n.draft_):void 0}function yA(n,e){if(!(e in n))return;let t=Ja(n);for(;t;){const r=Object.getOwnPropertyDescriptor(t,e);if(r)return r;t=Ja(t)}}function i_(n){n.modified_||(n.modified_=!0,n.parent_&&i_(n.parent_))}function ng(n){n.copy_||(n.copy_=t_(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var E9=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if(typeof e=="function"&&typeof t!="function"){const a=t;t=e;const l=this;return function(f=a,...p){return l.produce(f,y=>t.call(this,y,...p))}}typeof t!="function"&&mr(6),r!==void 0&&typeof r!="function"&&mr(7);let i;if(Ni(e)){const a=UT(this),l=s_(e,void 0);let c=!0;try{i=t(l),c=!1}finally{c?n_(a):r_(a)}return FT(a,r),BT(i,a)}else if(!e||typeof e!="object"){if(i=t(e),i===void 0&&(i=e),i===pA&&(i=void 0),this.autoFreeze_&&Jy(i,!0),r){const a=[],l=[];ko("Patches").generateReplacementPatches_(e,i,a,l),r(a,l)}return i}else mr(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(l,...c)=>this.produceWithPatches(l,f=>e(f,...c));let r,i;return[this.produce(e,t,(l,c)=>{r=l,i=c}),r,i]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){Ni(n)||mr(8),As(n)&&(n=vA(n));const e=UT(this),t=s_(n,void 0);return t[Vn].isManual_=!0,r_(e),t}finishDraft(n,e){const t=n&&n[Vn];(!t||!t.isManual_)&&mr(9);const{scope_:r}=t;return FT(r,e),BT(void 0,r)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const i=e[t];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}t>-1&&(e=e.slice(t+1));const r=ko("Patches").applyPatches_;return As(n)?r(n,e):this.produce(n,i=>r(i,e))}};function s_(n,e){const t=qf(n)?ko("MapSet").proxyMap_(n,e):Kf(n)?ko("MapSet").proxySet_(n,e):v9(n,e);return(e?e.scope_:_A()).drafts_.push(t),t}function vA(n){return As(n)||mr(10,n),wA(n)}function wA(n){if(!Ni(n)||Gf(n))return n;const e=n[Vn];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=t_(n,e.scope_.immer_.useStrictShallowCopy_)}else t=t_(n,!0);return tc(t,(r,i)=>{gA(t,r,wA(i))}),e&&(e.finalized_=!1),t}var Fn=new E9,EA=Fn.produce;Fn.produceWithPatches.bind(Fn);Fn.setAutoFreeze.bind(Fn);Fn.setUseStrictShallowCopy.bind(Fn);Fn.applyPatches.bind(Fn);Fn.createDraft.bind(Fn);Fn.finishDraft.bind(Fn);function T9(n,e=`expected a function, instead received ${typeof n}`){if(typeof n!="function")throw new TypeError(e)}function I9(n,e=`expected an object, instead received ${typeof n}`){if(typeof n!="object")throw new TypeError(e)}function S9(n,e="expected all items to be functions, instead received the following types: "){if(!n.every(t=>typeof t=="function")){const t=n.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${t}]`)}}var jT=n=>Array.isArray(n)?n:[n];function C9(n){const e=Array.isArray(n[0])?n[0]:n;return S9(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function R9(n,e){const t=[],{length:r}=n;for(let i=0;i<r;i++)t.push(n[i].apply(null,e));return t}var A9=class{constructor(n){this.value=n}deref(){return this.value}},P9=typeof WeakRef<"u"?WeakRef:A9,k9=0,$T=1;function id(){return{s:k9,v:void 0,o:null,p:null}}function ev(n,e={}){let t=id();const{resultEqualityCheck:r}=e;let i,a=0;function l(){var v;let c=t;const{length:f}=arguments;for(let E=0,S=f;E<S;E++){const R=arguments[E];if(typeof R=="function"||typeof R=="object"&&R!==null){let O=c.o;O===null&&(c.o=O=new WeakMap);const A=O.get(R);A===void 0?(c=id(),O.set(R,c)):c=A}else{let O=c.p;O===null&&(c.p=O=new Map);const A=O.get(R);A===void 0?(c=id(),O.set(R,c)):c=A}}const p=c;let y;if(c.s===$T?y=c.v:(y=n.apply(null,arguments),a++),p.s=$T,r){const E=((v=i==null?void 0:i.deref)==null?void 0:v.call(i))??i;E!=null&&r(E,y)&&(y=E,a!==0&&a--),i=typeof y=="object"&&y!==null||typeof y=="function"?new P9(y):y}return p.v=y,y}return l.clearCache=()=>{t=id(),l.resetResultsCount()},l.resultsCount=()=>a,l.resetResultsCount=()=>{a=0},l}function TA(n,...e){const t=typeof n=="function"?{memoize:n,memoizeOptions:e}:n,r=(...i)=>{let a=0,l=0,c,f={},p=i.pop();typeof p=="object"&&(f=p,p=i.pop()),T9(p,`createSelector expects an output function after the inputs, but received: [${typeof p}]`);const y={...t,...f},{memoize:v,memoizeOptions:E=[],argsMemoize:S=ev,argsMemoizeOptions:R=[],devModeChecks:O={}}=y,A=jT(E),B=jT(R),K=C9(i),q=v(function(){return a++,p.apply(null,arguments)},...A),Q=S(function(){l++;const ie=R9(K,arguments);return c=q.apply(null,ie),c},...B);return Object.assign(Q,{resultFunc:p,memoizedResultFunc:q,dependencies:K,dependencyRecomputations:()=>l,resetDependencyRecomputations:()=>{l=0},lastResult:()=>c,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:v,argsMemoize:S})};return Object.assign(r,{withTypes:()=>r}),r}var N9=TA(ev),b9=Object.assign((n,e=N9)=>{I9(n,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof n}`);const t=Object.keys(n),r=t.map(a=>n[a]);return e(r,(...a)=>a.reduce((l,c,f)=>(l[t[f]]=c,l),{}))},{withTypes:()=>b9});function IA(n){return({dispatch:t,getState:r})=>i=>a=>typeof a=="function"?a(t,r,n):i(a)}var x9=IA(),D9=IA,O9=(...n)=>{const e=TA(...n),t=Object.assign((...r)=>{const i=e(...r),a=(l,...c)=>i(As(l)?vA(l):l,...c);return Object.assign(a,i),a},{withTypes:()=>t});return t};O9(ev);var L9=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Zd:Zd.apply(null,arguments)},M9=n=>n&&typeof n.match=="function";function Ti(n,e){function t(...r){if(e){let i=e(...r);if(!i)throw new Error(Rn(0));return{type:n,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:n,payload:r[0]}}return t.toString=()=>`${n}`,t.type=n,t.match=r=>d9(r)&&r.type===n,t}var SA=class Iu extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Iu.prototype)}static get[Symbol.species](){return Iu}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Iu(...e[0].concat(this)):new Iu(...e.concat(this))}};function WT(n){return Ni(n)?EA(n,()=>{}):n}function HT(n,e,t){if(n.has(e)){let i=n.get(e);return t.update&&(i=t.update(i,e,n),n.set(e,i)),i}if(!t.insert)throw new Error(Rn(10));const r=t.insert(e,n);return n.set(e,r),r}function V9(n){return typeof n=="boolean"}var F9=()=>function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:a=!0}=e??{};let l=new SA;return t&&(V9(t)?l.push(x9):l.push(D9(t.extraArgument))),l},U9="RTK_autoBatch",CA=n=>e=>{setTimeout(e,n)},B9=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:CA(10),z9=(n={type:"raf"})=>e=>(...t)=>{const r=e(...t);let i=!0,a=!1,l=!1;const c=new Set,f=n.type==="tick"?queueMicrotask:n.type==="raf"?B9:n.type==="callback"?n.queueNotification:CA(n.timeout),p=()=>{l=!1,a&&(a=!1,c.forEach(y=>y()))};return Object.assign({},r,{subscribe(y){const v=()=>i&&y(),E=r.subscribe(v);return c.add(y),()=>{E(),c.delete(y)}},dispatch(y){var v;try{return i=!((v=y==null?void 0:y.meta)!=null&&v[U9]),a=!i,a&&(l||(l=!0,f(p))),r.dispatch(y)}finally{i=!0}}})},j9=n=>function(t){const{autoBatch:r=!0}=t??{};let i=new SA(n);return r&&i.push(z9(typeof r=="object"?r:void 0)),i},$9=!0;function W9(n){const e=F9(),{reducer:t=void 0,middleware:r,devTools:i=!0,preloadedState:a=void 0,enhancers:l=void 0}=n||{};let c;if(typeof t=="function")c=t;else if(Xy(t))c=c9(t);else throw new Error(Rn(1));let f;typeof r=="function"?f=r(e):f=e();let p=Zd;i&&(p=L9({trace:!$9,...typeof i=="object"&&i}));const y=h9(...f),v=j9(y);let E=typeof l=="function"?l(v):v();const S=p(...E);return fA(c,a,S)}function RA(n){const e={},t=[];let r;const i={addCase(a,l){const c=typeof a=="string"?a:a.type;if(!c)throw new Error(Rn(28));if(c in e)throw new Error(Rn(29));return e[c]=l,i},addMatcher(a,l){return t.push({matcher:a,reducer:l}),i},addDefaultCase(a){return r=a,i}};return n(i),[e,t,r]}function H9(n){return typeof n=="function"}function q9(n,e){let[t,r,i]=RA(e),a;if(H9(n))a=()=>WT(n());else{const c=WT(n);a=()=>c}function l(c=a(),f){let p=[t[f.type],...r.filter(({matcher:y})=>y(f)).map(({reducer:y})=>y)];return p.filter(y=>!!y).length===0&&(p=[i]),p.reduce((y,v)=>{if(v)if(As(y)){const S=v(y,f);return S===void 0?y:S}else{if(Ni(y))return EA(y,E=>v(E,f));{const E=v(y,f);if(E===void 0){if(y===null)return y;throw new Error(Rn(9))}return E}}return y},c)}return l.getInitialState=a,l}var K9="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",AA=(n=21)=>{let e="",t=n;for(;t--;)e+=K9[Math.random()*64|0];return e},G9=(n,e)=>M9(n)?n.match(e):n(e);function Q9(...n){return e=>n.some(t=>G9(t,e))}var Y9=["name","message","stack","code"],rg=class{constructor(n,e){Tm(this,"_type");this.payload=n,this.meta=e}},qT=class{constructor(n,e){Tm(this,"_type");this.payload=n,this.meta=e}},X9=n=>{if(typeof n=="object"&&n!==null){const e={};for(const t of Y9)typeof n[t]=="string"&&(e[t]=n[t]);return e}return{message:String(n)}},Nc=(()=>{function n(e,t,r){const i=Ti(e+"/fulfilled",(f,p,y,v)=>({payload:f,meta:{...v||{},arg:y,requestId:p,requestStatus:"fulfilled"}})),a=Ti(e+"/pending",(f,p,y)=>({payload:void 0,meta:{...y||{},arg:p,requestId:f,requestStatus:"pending"}})),l=Ti(e+"/rejected",(f,p,y,v,E)=>({payload:v,error:(r&&r.serializeError||X9)(f||"Rejected"),meta:{...E||{},arg:y,requestId:p,rejectedWithValue:!!v,requestStatus:"rejected",aborted:(f==null?void 0:f.name)==="AbortError",condition:(f==null?void 0:f.name)==="ConditionError"}}));function c(f){return(p,y,v)=>{const E=r!=null&&r.idGenerator?r.idGenerator(f):AA(),S=new AbortController;let R,O;function A(K){O=K,S.abort()}const B=async function(){var Q,oe;let K;try{let ie=(Q=r==null?void 0:r.condition)==null?void 0:Q.call(r,f,{getState:y,extra:v});if(Z9(ie)&&(ie=await ie),ie===!1||S.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const b=new Promise((C,k)=>{R=()=>{k({name:"AbortError",message:O||"Aborted"})},S.signal.addEventListener("abort",R)});p(a(E,f,(oe=r==null?void 0:r.getPendingMeta)==null?void 0:oe.call(r,{requestId:E,arg:f},{getState:y,extra:v}))),K=await Promise.race([b,Promise.resolve(t(f,{dispatch:p,getState:y,extra:v,requestId:E,signal:S.signal,abort:A,rejectWithValue:(C,k)=>new rg(C,k),fulfillWithValue:(C,k)=>new qT(C,k)})).then(C=>{if(C instanceof rg)throw C;return C instanceof qT?i(C.payload,E,f,C.meta):i(C,E,f)})])}catch(ie){K=ie instanceof rg?l(null,E,f,ie.payload,ie.meta):l(ie,E,f)}finally{R&&S.signal.removeEventListener("abort",R)}return r&&!r.dispatchConditionRejection&&l.match(K)&&K.meta.condition||p(K),K}();return Object.assign(B,{abort:A,requestId:E,arg:f,unwrap(){return B.then(J9)}})}}return Object.assign(c,{pending:a,rejected:l,fulfilled:i,settled:Q9(l,i),typePrefix:e})}return n.withTypes=()=>n,n})();function J9(n){if(n.meta&&n.meta.rejectedWithValue)throw n.payload;if(n.error)throw n.error;return n.payload}function Z9(n){return n!==null&&typeof n=="object"&&typeof n.then=="function"}var e3=Symbol.for("rtk-slice-createasyncthunk");function t3(n,e){return`${n}/${e}`}function n3({creators:n}={}){var t;const e=(t=n==null?void 0:n.asyncThunk)==null?void 0:t[e3];return function(i){const{name:a,reducerPath:l=a}=i;if(!a)throw new Error(Rn(11));typeof process<"u";const c=(typeof i.reducers=="function"?i.reducers(i3()):i.reducers)||{},f=Object.keys(c),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},y={addCase(q,Q){const oe=typeof q=="string"?q:q.type;if(!oe)throw new Error(Rn(12));if(oe in p.sliceCaseReducersByType)throw new Error(Rn(13));return p.sliceCaseReducersByType[oe]=Q,y},addMatcher(q,Q){return p.sliceMatchers.push({matcher:q,reducer:Q}),y},exposeAction(q,Q){return p.actionCreators[q]=Q,y},exposeCaseReducer(q,Q){return p.sliceCaseReducersByName[q]=Q,y}};f.forEach(q=>{const Q=c[q],oe={reducerName:q,type:t3(a,q),createNotation:typeof i.reducers=="function"};o3(Q)?l3(oe,Q,y,e):s3(oe,Q,y)});function v(){const[q={},Q=[],oe=void 0]=typeof i.extraReducers=="function"?RA(i.extraReducers):[i.extraReducers],ie={...q,...p.sliceCaseReducersByType};return q9(i.initialState,b=>{for(let C in ie)b.addCase(C,ie[C]);for(let C of p.sliceMatchers)b.addMatcher(C.matcher,C.reducer);for(let C of Q)b.addMatcher(C.matcher,C.reducer);oe&&b.addDefaultCase(oe)})}const E=q=>q,S=new Map;let R;function O(q,Q){return R||(R=v()),R(q,Q)}function A(){return R||(R=v()),R.getInitialState()}function B(q,Q=!1){function oe(b){let C=b[q];return typeof C>"u"&&Q&&(C=A()),C}function ie(b=E){const C=HT(S,Q,{insert:()=>new WeakMap});return HT(C,b,{insert:()=>{const k={};for(const[D,M]of Object.entries(i.selectors??{}))k[D]=r3(M,b,A,Q);return k}})}return{reducerPath:q,getSelectors:ie,get selectors(){return ie(oe)},selectSlice:oe}}const K={name:a,reducer:O,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:A,...B(l),injectInto(q,{reducerPath:Q,...oe}={}){const ie=Q??l;return q.inject({reducerPath:ie,reducer:O},oe),{...K,...B(ie,!0)}}};return K}}function r3(n,e,t,r){function i(a,...l){let c=e(a);return typeof c>"u"&&r&&(c=t()),n(c,...l)}return i.unwrapped=n,i}var tv=n3();function i3(){function n(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return n.withTypes=()=>n,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}},asyncThunk:n}}function s3({type:n,reducerName:e,createNotation:t},r,i){let a,l;if("reducer"in r){if(t&&!a3(r))throw new Error(Rn(17));a=r.reducer,l=r.prepare}else a=r;i.addCase(n,a).exposeCaseReducer(e,a).exposeAction(e,l?Ti(n,l):Ti(n))}function o3(n){return n._reducerDefinitionType==="asyncThunk"}function a3(n){return n._reducerDefinitionType==="reducerWithPrepare"}function l3({type:n,reducerName:e},t,r,i){if(!i)throw new Error(Rn(18));const{payloadCreator:a,fulfilled:l,pending:c,rejected:f,settled:p,options:y}=t,v=i(n,a,y);r.exposeAction(e,v),l&&r.addCase(v.fulfilled,l),c&&r.addCase(v.pending,c),f&&r.addCase(v.rejected,f),p&&r.addMatcher(v.settled,p),r.exposeCaseReducer(e,{fulfilled:l||sd,pending:c||sd,rejected:f||sd,settled:p||sd})}function sd(){}var u3=(n,e)=>{if(typeof n!="function")throw new Error(Rn(32))},nv="listenerMiddleware",c3=n=>{let{type:e,actionCreator:t,matcher:r,predicate:i,effect:a}=n;if(e)i=Ti(e).match;else if(t)e=t.type,i=t.match;else if(r)i=r;else if(!i)throw new Error(Rn(21));return u3(a),{predicate:i,type:e,effect:a}},h3=Object.assign(n=>{const{type:e,predicate:t,effect:r}=c3(n);return{id:AA(),effect:r,type:e,predicate:t,pending:new Set,unsubscribe:()=>{throw new Error(Rn(22))}}},{withTypes:()=>h3}),d3=Object.assign(Ti(`${nv}/add`),{withTypes:()=>d3});Ti(`${nv}/removeAll`);var f3=Object.assign(Ti(`${nv}/remove`),{withTypes:()=>f3});function Rn(n){return`Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}const ig=Nc("products/getAsyncProducts",async(n,{rejectWithValue:e,fulfillWithValue:t})=>{try{const r=FO(fl,"Products"),a=(await nL(r)).docs.map(c=>({...c.data(),id:c.id,createdAt:null}));if(!(a!=null&&a.length))throw new Error(420);const l=o9(a,n);if(!l.length)throw new Error(404);return t(l)}catch(r){return e(r.message)}}),p3={loading:!1,data:[],error:""},PA=tv({name:"products",initialState:p3,reducers:{resetProductsState:()=>({loading:!1,data:[],error:""})},extraReducers:n=>{n.addCase(ig.pending,e=>{e.loading=!0,e.data=[],e.error=""}),n.addCase(ig.fulfilled,(e,t)=>{e.loading=!1,e.data=t.payload,e.error=""}),n.addCase(ig.rejected,(e,t)=>{e.loading=!1,e.data=[],e.error=t.payload})}}),{resetProductsState:f6}=PA.actions,m3=PA.reducer;NV.flatMap(({collections:n})=>n.map(({title:e})=>e));const kA=async n=>{try{let e={};switch(n==null?void 0:n.method){case"signUpEmail":await NF(rd,n.email,n.password).then(t=>e=t.user);break;case"signInEmail":await bF(rd,n.email,n.password).then(t=>e=t.user);break;case"gitHub":await IT(rd,s9).then(({user:{uid:t,photoURL:r,email:i}})=>e={uid:t,photoURL:r,email:i});break;case"google":await IT(rd,i9).then(({user:{uid:t,photoURL:r,email:i}})=>e={uid:t,photoURL:r,email:i});break;default:throw new Error("Error : Unknown Sign Up Method !")}return e}catch(e){throw new Error(e||"an error occurred")}};async function NA(n,e,t){try{await rL(yc(fl,"users",n),{customer_step:"second-step",seller_step:"second-step",userId:n,personalInformation:(e==null?void 0:e.personalInformation)||{},userType:t})}catch(r){throw console.log(r),new Error(r==null?void 0:r.message)}}function ic(n){const e=Qf(!0)||wN("guest-user-"),t=new Date;t.setTime(t.getTime()+20*24*60*60*1e3),document.cookie=`${n?"userId":"guestUserId"}=${n||e}; expires=${t.toUTCString()}; path=/; SameSite=Lax`}function Qf(n){const e=document.cookie.match(new RegExp(`(^| )${n?"guestUserId":"userId"}=([^;]+)`));return e?e[2]:null}async function rv(n){const e=yc(fl,"users",n);await nC(e,{lastActivity:sL()})}const g3="modulepreload",_3=function(n){return"/EcoVibe/"+n},KT={},at=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(t.map(f=>{if(f=_3(f),f in KT)return;KT[f]=!0;const p=f.endsWith(".css"),y=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${y}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":g3,p||(v.as="script"),v.crossOrigin="",v.href=f,c&&v.setAttribute("nonce",c),document.head.appendChild(v),p)return new Promise((E,S)=>{v.addEventListener("load",E),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};function y3({style:n}){return Vr.jsx(mI,{style:{...n,width:"6rem",height:"6rem"}})}const lt=n=>{const e=t=>Vr.jsx(W.Suspense,{fallback:Vr.jsx("div",{className:"h-screen flex items-center justify-center",children:Vr.jsx(y3,{className:"size-20"})}),children:Vr.jsx(n,{...t})});return e.displayName=`WithSuspense(${n.displayName||n.name||"Component"})`,e};lt(W.lazy(()=>at(()=>import("./HomePage-Dd28a2e7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]))));lt(W.lazy(()=>at(()=>import("./ShopPage-CMkOEx9B.js"),__vite__mapDeps([24,13,7,2,8,9,1,14,10,12,11]))));lt(W.lazy(()=>at(()=>import("./ExploreProductsPage-r8Z587jS.js"),__vite__mapDeps([25,1,2,19,7,22,3,17,10,26,21,4]))));lt(W.lazy(()=>at(()=>import("./ProductDetailsPage-BK8r1nYg.js"),__vite__mapDeps([27,28,29,8,9,10,1,2,7,11,14,30,31,3,21,32]))));lt(W.lazy(()=>at(()=>import("./ChatPage-DrhryOLy.js"),__vite__mapDeps([33,16,2,19,6,14,34,21,35,31,9,36,4,22,37]))));lt(W.lazy(()=>at(()=>import("./CustomerAuthPage-ChBci-LP.js"),[])));lt(W.lazy(()=>at(()=>import("./SignUpCustomer-C3rMvk7r.js"),__vite__mapDeps([38,28,7,2,4,39,29,40]))));lt(W.lazy(()=>at(()=>import("./PersonalDetailsForm-CEA8o3rJ.js"),__vite__mapDeps([41,28,1,2,42,29,40,30,31]))));lt(W.lazy(()=>at(()=>import("./UserInterestsForm-DfxSGgV9.js"),__vite__mapDeps([43,1,2]))));lt(W.lazy(()=>at(()=>import("./SellerAuthPage-CbSfmpZS.js"),[])));lt(W.lazy(()=>at(()=>import("./SignUpSeller-DeMz3-A9.js"),__vite__mapDeps([44,28,2,29]))));lt(W.lazy(()=>at(()=>import("./BusinessInfoForm-Du1amhCe.js"),__vite__mapDeps([45,36,22,2,1,28,29]))));lt(W.lazy(()=>at(()=>import("./SignInPage-B_QhLNsX.js"),__vite__mapDeps([46,28,1,2,29]))));const sg=Nc("userData/getUserData",async(n,{fulfillWithValue:e,rejectWithValue:t})=>{const r=Qf();if(r)try{const i=yc(fl,"users",r),a=await eC(i).then(l=>l.data());return rv(r),e({...a,lastActivity:null})}catch(i){return t({error:i,code:204})}else return t({code:401})}),v3=n=>{n.addCase(sg.pending,e=>{e.loading=!0}),n.addCase(sg.fulfilled,(e,{payload:t})=>{e.loading=!1,ic(t==null?void 0:t.userId),Object.assign(e,t),e.auth_status=200,document.cookie="guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}),n.addCase(sg.rejected,(e,{payload:t})=>{e.loading=!1,t.code===401?(document.cookie="userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",console.log("user isn't logged in"),ic(),e.userId=Qf(!0),e.auth_status=t.code):(e.error=t.error,e.auth_status=t.code)})};lt(W.lazy(()=>at(()=>import("./WishListPage-BPIeLphI.js"),__vite__mapDeps([47,2,7,4,1]))));lt(W.lazy(()=>at(()=>import("./CartPage-DQZwsYdP.js"),__vite__mapDeps([48,1,2,30,31,10]))));lt(W.lazy(()=>at(()=>import("./CheckoutPage-0kA3a-zi.js"),__vite__mapDeps([49,7,2,32,28,10,50,30,31,29,3,11,1,21]))));lt(W.lazy(()=>at(()=>import("./OrdersPage-CxmzcHBn.js"),__vite__mapDeps([51,1,2,52,6,17,10,32,7,53,3]))));lt(W.lazy(()=>at(()=>import("./CustomerProfilePage-DcTAicNj.js"),__vite__mapDeps([54,42,1,2,55,28,29,11,7,50,30,31,3]))));lt(W.lazy(()=>at(()=>import("./sellerSolutionsPage-D-kn3oaR.js"),__vite__mapDeps([56,12,55,2,22]))));lt(W.lazy(()=>at(()=>import("./SellerDashboardPage-ow1UmQDe.js"),__vite__mapDeps([57,7,2,39,1,5,34,19,55,12,58,28,17,10,3,52,30,31,21,26,59,23,22,18]))));lt(W.lazy(()=>at(()=>import("./SellerProfilePage-7EU8ao3h.js"),__vite__mapDeps([60,52,2,29,28,16,15,7,10,17,18,12,4,1,5,19,6,20,21,22,23,3,37,14]))));lt(W.lazy(()=>at(()=>import("./MainTab-BaLk5APR.js"),__vite__mapDeps([61,7,2,5,59,3,14,30,31,35,9,8,36,22,17,10,11,4,53,20,21,16,18]))));lt(W.lazy(()=>at(()=>import("./ProductTab-Bm9T2YT8.js"),__vite__mapDeps([62,7,2,59,30,31,58,28,17,10,5,3,52,21,26,53,32,14]))));lt(W.lazy(()=>at(()=>import("./OrdersTab-j0trKFq8.js"),__vite__mapDeps([63,1,2,52,17,10,30,31,21,19,4,59]))));function w3(){return Vr.jsx(Vr.Fragment,{children:"test mode"})}const E3={searchQuery:"",category:[""],productTypes:[],sortBy:"Popular",priceRange:{min:0,max:1e3},collections:[],tags:[],seller:["All"],selectedOptions:[],relevant:"most",page:0,pagination:!0},bA=tv({name:"filters",initialState:E3,reducers:{changeFilterReducer:(n,{payload:{type:e,payload:t}})=>{switch(e){case"searchQuery":n.page=0,n.searchQuery=t;break;case"category":n.page=0,n.category[0]===t?n.category=[""]:n.category=[t],n.productTypes=[],n.selectedOptions=[];break;case"productTypes":{n.page=0;const r=Dm(n.productTypes,t);n.productTypes=r,n.selectedOptions=[];break}case"priceRange":n.page=0,n.priceRange=t;break;case"collections":{n.page=0;const r=Dm(n.collections,t);n.collections=r;break}case"tags":{n.page=0;const r=Dm(n.tags,t);n.tags=r;break}case"sortBy":n.sortBy=t;break;case"selectedOptions":{n.page=0;const r=gI(n.selectedOptions,t),i=n.selectedOptions.filter(a=>JSON.stringify(a)!==JSON.stringify(t));n.selectedOptions=r?i:[...n.selectedOptions,t];break}case"seller":{n.page=0,n.seller[0]=t;break}case"clear":n.searchQuery="",n.category=[""],n.productTypes=[],n.sortBy="Popular",n.priceRange={min:0,max:1e3},n.collections=[],n.tags=[],n.seller=["All"],n.selectedOptions=[],n.relevant="most",n.page=0,n.pagination=!0;break;case"relevant":n.page=0,n.relevant=t==="most"?"least":"most";break;case"nextPage":n.page=n.page+1;break;case"prevPage":n.page=n.page-1;break;case"changePage":n.page=t;break;default:throw Error("Unknown Action !")}}}}),{changeFilterReducer:p6}=bA.actions,T3=bA.reducer,og=Nc("userData/signInUser",async(n,{fulfillWithValue:e,rejectWithValue:t})=>{try{const r=await kA(n);rv(r==null?void 0:r.uid);const i=yc(fl,"users",r==null?void 0:r.uid),a=await eC(i);if(a.data()){const l={...a.data(),auth_status:200};return ic(r==null?void 0:r.uid),e(l)}else{const l={userId:r==null?void 0:r.uid,personalInformation:{email:r==null?void 0:r.email,profilePic:r.photoURL||_R[2],first_name:(r==null?void 0:r.name)||(r==null?void 0:r.email)||"not set"},customer_step:"second-step",seller_step:"second-step",userType:"customer",auth_status:200};return await NA(r==null?void 0:r.uid,{personalInformation:l==null?void 0:l.personalInformation},l==null?void 0:l.userType),ic(r==null?void 0:r.uid),localStorage.setItem("isNewUser",JSON.stringify(!0)),e({...l,isNewUser:!0})}}catch(r){console.log(r);let i=()=>{var a,l;return(a=r==null?void 0:r.message)!=null&&a.includes("auth/invalid-credential")?"Email or password wrong":(l=r==null?void 0:r.message)!=null&&l.includes("auth/network-request-failed")?"Network error please try again later":"Unknown error"};return vo.error(i()),t(i())}}),I3=n=>{n.addCase(og.pending,e=>{e.loading=!0}),n.addCase(og.fulfilled,(e,{payload:t})=>{vo.success(t!=null&&t.isNewUser?"Welcome to eco vibe family":"Welcome back"),document.cookie="guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",t&&Object.assign(e,t),e.loading=!1,document.cookie="guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}),n.addCase(og.rejected,(e,t)=>{console.log(t.payload),e.loading=!1,e.error=t.payload})},ag=Nc("userData/signInEmail",async(n,{fulfillWithValue:e,rejectWithValue:t})=>{try{const r=await kA(n);rv(r==null?void 0:r.uid);const i=(n==null?void 0:n.personalInformation)||{email:r.email,profilePic:r.photoURL||_R[2],first_name:r.email||null};await NA(r==null?void 0:r.uid,{personalInformation:i},n.userType);const a={...xA,userType:n.userType,userId:r==null?void 0:r.uid,personalInformation:i,customer_step:"second-step",seller_step:"second-step",auth_status:200};return ic(r==null?void 0:r.uid),console.log("signed up successfuly !"),e(a)}catch(r){console.log(r);let i=()=>{var a,l,c;return(a=r==null?void 0:r.message)!=null&&a.includes("auth/invalid-credential")?"Email or password wrong":(l=r==null?void 0:r.message)!=null&&l.includes("auth/network-request-failed")?"Network error please try again later":(c=r==null?void 0:r.message)!=null&&c.includes("auth/email-already-in-use")?"Email is already in use please sign-in instead.":"Unknown error"};return vo.error(i()),t(i())}}),S3=n=>{n.addCase(ag.pending,e=>{e.loading=!0}),n.addCase(ag.fulfilled,(e,{payload:t})=>{document.cookie="guestUserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",vo.success("Welcome to eco vibe"),Object.assign(e,t),e.loading=!1,e.error=""}),n.addCase(ag.rejected,(e,t)=>{e.loading=!1,e.error=t.payload})},lg=Nc("userData/updateUserData",async(n,{rejectWithValue:e,fulfillWithValue:t,getState:r})=>{try{const{userData:{customer_step:i,seller_step:a,userType:l}}=r(),c=Qf();if(c){const f=yc(fl,"users",c);await nC(f,{[n.field]:n.data,customer_step:(n==null?void 0:n.customer_step)||i,seller_step:(n==null?void 0:n.seller_step)||a,userType:(n==null?void 0:n.userType)||l})}return t(n)}catch(i){return console.log(i==null?void 0:i.message),e(i==null?void 0:i.message)}}),C3=n=>{n.addCase(lg.pending,e=>{e.loading=!0}),n.addCase(lg.fulfilled,(e,{payload:t})=>{e.loading=!1,Object.assign(e,{[t.field]:t.data,customer_step:(t==null?void 0:t.customer_step)||e.customer_step,seller_step:(t==null?void 0:t.seller_step)||e.seller_step,userType:(t==null?void 0:t.userType)||e.userType}),e.userType=(t==null?void 0:t.userType)||e.userType}),n.addCase(lg.rejected,(e,t)=>{e.loading=!1,e.error=t.payload})},xA={personalInformation:{},cartData:[],interests:[],wishlist:[],customer_step:"first-step",businessInformation:{},stories:[],seller_step:"first-step",userType:"",userId:null,auth_status:204},DA=tv({name:"userData",initialState:{...xA,loading:!1,error:""},reducers:{logout:()=>{document.cookie="userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",vo.success("You logged out successfully")}},extraReducers:n=>{v3(n),S3(n),I3(n),C3(n)}}),{logout:m6}=DA.actions,R3=DA.reducer,A3=W9({reducer:{products:m3,filters:T3,userData:R3}});Q1.createRoot(document.getElementById("root")).render(Vr.jsx(dk,{children:Vr.jsx(Mk,{store:A3,children:Vr.jsx(w3,{})})}));export{x3 as $,rL as A,a6 as B,K3 as C,FO as D,G3 as E,nL as F,eC as G,GT as H,CV as I,Y3 as J,cV as K,lI as L,i6 as M,r6 as N,fV as O,AV as P,n6 as Q,QT as R,t6 as S,e6 as T,No as U,B3 as V,hV as W,J3 as X,X3 as Y,y3 as Z,vo as _,D3 as a,og as a0,ag as a1,_R as a2,V3 as a3,xt as a4,bV as a5,m6 as a6,h6 as a7,d6 as a8,l6 as a9,u6 as aa,sg as ab,Z3 as ac,z3 as ad,nf as ae,k3 as af,N3 as ag,c6 as ah,Q3 as ai,fk as aj,q1 as ak,v0 as al,O3 as b,D0 as c,U3 as d,lg as e,o9 as f,wN as g,L3 as h,gI as i,Vr as j,ig as k,f6 as l,F3 as m,o6 as n,p6 as o,M3 as p,s6 as q,W as r,NV as s,Dm as t,SP as u,b3 as v,sL as w,nC as x,yc as y,fl as z};
