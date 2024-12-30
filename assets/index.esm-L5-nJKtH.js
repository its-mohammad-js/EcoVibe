import{R as C}from"./index-BktEY0AR.js";var oe=e=>e.type==="checkbox",se=e=>e instanceof Date,L=e=>e==null;const Ye=e=>typeof e=="object";var E=e=>!L(e)&&!Array.isArray(e)&&Ye(e)&&!se(e),gt=e=>E(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,ht=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,vt=(e,s)=>e.has(ht(s)),_t=e=>{const s=e.constructor&&e.constructor.prototype;return E(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function p(e){let s;const r=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||e instanceof FileList))&&(r||E(e)))if(s=r?[]:{},!r&&!_t(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=p(e[n]));else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],x=e=>e===void 0,d=(e,s,r)=>{if(!s||!E(e))return r;const n=fe(s.split(/[,[\].]+?/)).reduce((a,u)=>L(a)?a:a[u],e);return x(n)||n===e?x(e[s])?r:e[s]:n},j=e=>typeof e=="boolean";const We={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},K={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ze=C.createContext(null),pt=()=>C.useContext(Ze),Pt=e=>{const{children:s,...r}=e;return C.createElement(Ze.Provider,{value:r},s)};var bt=(e,s,r,n=!0)=>{const a={defaultValues:s._defaultValues};for(const u in e)Object.defineProperty(a,u,{get:()=>{const g=u;return s._proxyFormState[g]!==I.all&&(s._proxyFormState[g]=!n||I.all),e[g]}});return a},U=e=>E(e)&&!Object.keys(e).length,Ft=(e,s,r,n)=>{r(e);const{name:a,...u}=e;return U(u)||Object.keys(u).length>=Object.keys(s).length||Object.keys(u).find(g=>s[g]===I.all)},ke=e=>Array.isArray(e)?e:[e];function Vt(e){const s=C.useRef(e);s.current=e,C.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var H=e=>typeof e=="string",At=(e,s,r,n,a)=>H(e)?(n&&s.watch.add(e),d(r,e,a)):Array.isArray(e)?e.map(u=>(n&&s.watch.add(u),d(r,u))):(n&&(s.watchAll=!0),r),Le=e=>/^\w*$/.test(e),et=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,r)=>{let n=-1;const a=Le(s)?[s]:et(s),u=a.length,g=u-1;for(;++n<u;){const h=a[n];let P=r;if(n!==g){const q=e[h];P=E(q)||Array.isArray(q)?q:isNaN(+a[n+1])?{}:[]}e[h]=P,e=e[h]}return e},xt=(e,s,r,n,a)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:a||!0}}:{},$e=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),Ke=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const ae=(e,s,r,n)=>{for(const a of r||Object.keys(e)){const u=d(e,a);if(u){const{_f:g,...h}=u;if(g){if(g.refs&&g.refs[0]&&s(g.refs[0],a)&&!n)break;if(g.ref&&s(g.ref,g.name)&&!n)break;ae(h,s)}else E(h)&&ae(h,s)}}};var wt=(e,s,r)=>{const n=fe(d(e,r));return A(n,"root",s[r]),A(e,r,n),e},Ce=e=>e.type==="file",Q=e=>typeof e=="function",ve=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},he=e=>H(e),Oe=e=>e.type==="radio",_e=e=>e instanceof RegExp;const je={value:!1,isValid:!1},ze={value:!0,isValid:!0};var tt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!x(e[0].attributes.value)?x(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:je}return je};const Ge={isValid:!1,value:null};var rt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,Ge):Ge;function Je(e,s,r="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||j(e)&&!e)return{type:r,message:he(e)?e:"",ref:s}}var re=e=>E(e)&&!_e(e)?e:{value:e,message:""},Qe=async(e,s,r,n,a)=>{const{ref:u,refs:g,required:h,maxLength:P,minLength:q,min:w,max:_,pattern:ce,validate:z,name:O,valueAsNumber:Ve,mount:G,disabled:J}=e._f,b=d(s,O);if(!G||J)return{};const W=g?g[0]:u,$=v=>{n&&W.reportValidity&&(W.setCustomValidity(j(v)?"":v||""),W.reportValidity())},D={},Z=Oe(u),de=oe(u),X=Z||de,ee=(Ve||Ce(u))&&x(u.value)&&x(b)||ve(u)&&u.value===""||b===""||Array.isArray(b)&&!b.length,M=xt.bind(null,O,r,D),ye=(v,F,k,T=K.maxLength,B=K.minLength)=>{const N=v?F:k;D[O]={type:v?T:B,message:N,ref:u,...M(v?T:B,N)}};if(a?!Array.isArray(b)||!b.length:h&&(!X&&(ee||L(b))||j(b)&&!b||de&&!tt(g).isValid||Z&&!rt(g).isValid)){const{value:v,message:F}=he(h)?{value:!!h,message:h}:re(h);if(v&&(D[O]={type:K.required,message:F,ref:W,...M(K.required,F)},!r))return $(F),D}if(!ee&&(!L(w)||!L(_))){let v,F;const k=re(_),T=re(w);if(!L(b)&&!isNaN(b)){const B=u.valueAsNumber||b&&+b;L(k.value)||(v=B>k.value),L(T.value)||(F=B<T.value)}else{const B=u.valueAsDate||new Date(b),N=ue=>new Date(new Date().toDateString()+" "+ue),ie=u.type=="time",le=u.type=="week";H(k.value)&&b&&(v=ie?N(b)>N(k.value):le?b>k.value:B>new Date(k.value)),H(T.value)&&b&&(F=ie?N(b)<N(T.value):le?b<T.value:B<new Date(T.value))}if((v||F)&&(ye(!!v,k.message,T.message,K.max,K.min),!r))return $(D[O].message),D}if((P||q)&&!ee&&(H(b)||a&&Array.isArray(b))){const v=re(P),F=re(q),k=!L(v.value)&&b.length>+v.value,T=!L(F.value)&&b.length<+F.value;if((k||T)&&(ye(k,v.message,F.message),!r))return $(D[O].message),D}if(ce&&!ee&&H(b)){const{value:v,message:F}=re(ce);if(_e(v)&&!b.match(v)&&(D[O]={type:K.pattern,message:F,ref:u,...M(K.pattern,F)},!r))return $(F),D}if(z){if(Q(z)){const v=await z(b,s),F=Je(v,W);if(F&&(D[O]={...F,...M(K.validate,F.message)},!r))return $(F.message),D}else if(E(z)){let v={};for(const F in z){if(!U(v)&&!r)break;const k=Je(await z[F](b,s),W,F);k&&(v={...k,...M(F,k.message)},$(k.message),r&&(D[O]=v))}if(!U(v)&&(D[O]={ref:W,...v},!r))return D}}return $(!0),D};function Dt(e,s){const r=s.slice(0,-1).length;let n=0;for(;n<r;)e=x(e)?n++:e[s[n++]];return e}function kt(e){for(const s in e)if(e.hasOwnProperty(s)&&!x(e[s]))return!1;return!0}function m(e,s){const r=Array.isArray(s)?s:Le(s)?[s]:et(s),n=r.length===1?e:Dt(e,r),a=r.length-1,u=r[a];return n&&delete n[u],a!==0&&(E(n)&&U(n)||Array.isArray(n)&&kt(n))&&m(e,r.slice(0,-1)),e}var me=()=>{let e=[];return{get observers(){return e},next:a=>{for(const u of e)u.next&&u.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(u=>u!==a)}}),unsubscribe:()=>{e=[]}}},be=e=>L(e)||!Ye(e);function Y(e,s){if(be(e)||be(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const r=Object.keys(e),n=Object.keys(s);if(r.length!==n.length)return!1;for(const a of r){const u=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const g=s[a];if(se(u)&&se(g)||E(u)&&E(g)||Array.isArray(u)&&Array.isArray(g)?!Y(u,g):u!==g)return!1}}return!0}var st=e=>e.type==="select-multiple",mt=e=>Oe(e)||oe(e),Ee=e=>ve(e)&&e.isConnected,it=e=>{for(const s in e)if(Q(e[s]))return!0;return!1};function Fe(e,s={}){const r=Array.isArray(e);if(E(e)||r)for(const n in e)Array.isArray(e[n])||E(e[n])&&!it(e[n])?(s[n]=Array.isArray(e[n])?[]:{},Fe(e[n],s[n])):L(e[n])||(s[n]=!0);return s}function lt(e,s,r){const n=Array.isArray(e);if(E(e)||n)for(const a in e)Array.isArray(e[a])||E(e[a])&&!it(e[a])?x(s)||be(r[a])?r[a]=Array.isArray(e[a])?Fe(e[a],[]):{...Fe(e[a])}:lt(e[a],L(s)?{}:s[a],r[a]):r[a]=!Y(e[a],s[a]);return r}var ge=(e,s)=>lt(e,s,Fe(s)),ut=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:n})=>x(e)?e:s?e===""?NaN:e&&+e:r&&H(e)?new Date(e):n?n(e):e;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):s.disabled))return Ce(s)?s.files:Oe(s)?rt(e.refs).value:st(s)?[...s.selectedOptions].map(({value:r})=>r):oe(s)?tt(e.refs).value:ut(x(s.value)?e.ref.value:s.value,e)}var Et=(e,s,r,n)=>{const a={};for(const u of e){const g=d(s,u);g&&A(a,u,g._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:n}},ne=e=>x(e)?e:_e(e)?e.source:E(e)?_e(e.value)?e.value.source:e.value:e,St=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Xe(e,s,r){const n=d(e,r);if(n||Le(r))return{error:n,name:r};const a=r.split(".");for(;a.length;){const u=a.join("."),g=d(s,u),h=d(e,u);if(g&&!Array.isArray(g)&&r!==u)return{name:r};if(h&&h.type)return{name:u,error:h};a.pop()}return{name:r}}var Tt=(e,s,r,n,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(s||e):(r?n.isOnBlur:a.isOnBlur)?!e:(r?n.isOnChange:a.isOnChange)?e:!0,Lt=(e,s)=>!fe(d(e,s)).length&&m(e,s);const Ct={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Ot(e={}){let s={...Ct,...e},r={submitCount:0,isDirty:!1,isLoading:Q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},n={},a=E(s.defaultValues)||E(s.values)?p(s.defaultValues||s.values)||{}:{},u=s.shouldUnregister?{}:p(a),g={action:!1,mount:!1,watch:!1},h={mount:new Set,unMount:new Set,array:new Set,watch:new Set},P,q=0;const w={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:me(),array:me(),state:me()},ce=$e(s.mode),z=$e(s.reValidateMode),O=s.criteriaMode===I.all,Ve=t=>i=>{clearTimeout(q),q=setTimeout(t,i)},G=async t=>{if(w.isValid||t){const i=s.resolver?U((await X()).errors):await M(n,!0);i!==r.isValid&&_.state.next({isValid:i})}},J=(t,i)=>{(w.isValidating||w.validatingFields)&&((t||Array.from(h.mount)).forEach(l=>{l&&(i?A(r.validatingFields,l,i):m(r.validatingFields,l))}),_.state.next({validatingFields:r.validatingFields,isValidating:!U(r.validatingFields)}))},b=(t,i=[],l,c,f=!0,o=!0)=>{if(c&&l){if(g.action=!0,o&&Array.isArray(d(n,t))){const y=l(d(n,t),c.argA,c.argB);f&&A(n,t,y)}if(o&&Array.isArray(d(r.errors,t))){const y=l(d(r.errors,t),c.argA,c.argB);f&&A(r.errors,t,y),Lt(r.errors,t)}if(w.touchedFields&&o&&Array.isArray(d(r.touchedFields,t))){const y=l(d(r.touchedFields,t),c.argA,c.argB);f&&A(r.touchedFields,t,y)}w.dirtyFields&&(r.dirtyFields=ge(a,u)),_.state.next({name:t,isDirty:v(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else A(u,t,i)},W=(t,i)=>{A(r.errors,t,i),_.state.next({errors:r.errors})},$=t=>{r.errors=t,_.state.next({errors:r.errors,isValid:!1})},D=(t,i,l,c)=>{const f=d(n,t);if(f){const o=d(u,t,x(l)?d(a,t):l);x(o)||c&&c.defaultChecked||i?A(u,t,i?o:Se(f._f)):T(t,o),g.mount&&G()}},Z=(t,i,l,c,f)=>{let o=!1,y=!1;const V={name:t},S=!!(d(n,t)&&d(n,t)._f.disabled);if(!l||c){w.isDirty&&(y=r.isDirty,r.isDirty=V.isDirty=v(),o=y!==V.isDirty);const R=S||Y(d(a,t),i);y=!!(!S&&d(r.dirtyFields,t)),R||S?m(r.dirtyFields,t):A(r.dirtyFields,t,!0),V.dirtyFields=r.dirtyFields,o=o||w.dirtyFields&&y!==!R}if(l){const R=d(r.touchedFields,t);R||(A(r.touchedFields,t,l),V.touchedFields=r.touchedFields,o=o||w.touchedFields&&R!==l)}return o&&f&&_.state.next(V),o?V:{}},de=(t,i,l,c)=>{const f=d(r.errors,t),o=w.isValid&&j(i)&&r.isValid!==i;if(e.delayError&&l?(P=Ve(()=>W(t,l)),P(e.delayError)):(clearTimeout(q),P=null,l?A(r.errors,t,l):m(r.errors,t)),(l?!Y(f,l):f)||!U(c)||o){const y={...c,...o&&j(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...y},_.state.next(y)}},X=async t=>{J(t,!0);const i=await s.resolver(u,s.context,Et(t||h.mount,n,s.criteriaMode,s.shouldUseNativeValidation));return J(t),i},ee=async t=>{const{errors:i}=await X(t);if(t)for(const l of t){const c=d(i,l);c?A(r.errors,l,c):m(r.errors,l)}else r.errors=i;return i},M=async(t,i,l={valid:!0})=>{for(const c in t){const f=t[c];if(f){const{_f:o,...y}=f;if(o){const V=h.array.has(o.name);J([c],!0);const S=await Qe(f,u,O,s.shouldUseNativeValidation&&!i,V);if(J([c]),S[o.name]&&(l.valid=!1,i))break;!i&&(d(S,o.name)?V?wt(r.errors,S,o.name):A(r.errors,o.name,S[o.name]):m(r.errors,o.name))}y&&await M(y,i,l)}}return l.valid},ye=()=>{for(const t of h.unMount){const i=d(n,t);i&&(i._f.refs?i._f.refs.every(l=>!Ee(l)):!Ee(i._f.ref))&&Ae(t)}h.unMount=new Set},v=(t,i)=>(t&&i&&A(u,t,i),!Y(Re(),a)),F=(t,i,l)=>At(t,h,{...g.mount?u:x(i)?a:H(t)?{[t]:i}:i},l,i),k=t=>fe(d(g.mount?u:a,t,e.shouldUnregister?d(a,t,[]):[])),T=(t,i,l={})=>{const c=d(n,t);let f=i;if(c){const o=c._f;o&&(!o.disabled&&A(u,t,ut(i,o)),f=ve(o.ref)&&L(i)?"":i,st(o.ref)?[...o.ref.options].forEach(y=>y.selected=f.includes(y.value)):o.refs?oe(o.ref)?o.refs.length>1?o.refs.forEach(y=>(!y.defaultChecked||!y.disabled)&&(y.checked=Array.isArray(f)?!!f.find(V=>V===y.value):f===y.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(y=>y.checked=y.value===f):Ce(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||_.values.next({name:t,values:{...u}})))}(l.shouldDirty||l.shouldTouch)&&Z(t,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ue(t)},B=(t,i,l)=>{for(const c in i){const f=i[c],o=`${t}.${c}`,y=d(n,o);(h.array.has(t)||!be(f)||y&&!y._f)&&!se(f)?B(o,f,l):T(o,f,l)}},N=(t,i,l={})=>{const c=d(n,t),f=h.array.has(t),o=p(i);A(u,t,o),f?(_.array.next({name:t,values:{...u}}),(w.isDirty||w.dirtyFields)&&l.shouldDirty&&_.state.next({name:t,dirtyFields:ge(a,u),isDirty:v(t,o)})):c&&!c._f&&!L(o)?B(t,o,l):T(t,o,l),Ke(t,h)&&_.state.next({...r}),_.values.next({name:g.mount?t:void 0,values:{...u}})},ie=async t=>{g.mount=!0;const i=t.target;let l=i.name,c=!0;const f=d(n,l),o=()=>i.type?Se(f._f):gt(t),y=V=>{c=Number.isNaN(V)||V===d(u,l,V)};if(f){let V,S;const R=o(),te=t.type===We.BLUR||t.type===We.FOCUS_OUT,ct=!St(f._f)&&!s.resolver&&!d(r.errors,l)&&!f._f.deps||Tt(te,d(r.touchedFields,l),r.isSubmitted,z,ce),we=Ke(l,h,te);A(u,l,R),te?(f._f.onBlur&&f._f.onBlur(t),P&&P(0)):f._f.onChange&&f._f.onChange(t);const De=Z(l,R,te,!1),dt=!U(De)||we;if(!te&&_.values.next({name:l,type:t.type,values:{...u}}),ct)return w.isValid&&G(),dt&&_.state.next({name:l,...we?{}:De});if(!te&&we&&_.state.next({...r}),s.resolver){const{errors:qe}=await X([l]);if(y(R),c){const yt=Xe(r.errors,n,l),He=Xe(qe,n,yt.name||l);V=He.error,l=He.name,S=U(qe)}}else J([l],!0),V=(await Qe(f,u,O,s.shouldUseNativeValidation))[l],J([l]),y(R),c&&(V?S=!1:w.isValid&&(S=await M(n,!0)));c&&(f._f.deps&&ue(f._f.deps),de(l,S,V,De))}},le=(t,i)=>{if(d(r.errors,i)&&t.focus)return t.focus(),1},ue=async(t,i={})=>{let l,c;const f=ke(t);if(s.resolver){const o=await ee(x(t)?t:f);l=U(o),c=t?!f.some(y=>d(o,y)):l}else t?(c=(await Promise.all(f.map(async o=>{const y=d(n,o);return await M(y&&y._f?{[o]:y}:y)}))).every(Boolean),!(!c&&!r.isValid)&&G()):c=l=await M(n);return _.state.next({...!H(t)||w.isValid&&l!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:l}:{},errors:r.errors}),i.shouldFocus&&!c&&ae(n,le,t?f:h.mount),c},Re=t=>{const i={...a,...g.mount?u:{}};return x(t)?i:H(t)?d(i,t):t.map(l=>d(i,l))},Ue=(t,i)=>({invalid:!!d((i||r).errors,t),isDirty:!!d((i||r).dirtyFields,t),isTouched:!!d((i||r).touchedFields,t),isValidating:!!d((i||r).validatingFields,t),error:d((i||r).errors,t)}),nt=t=>{t&&ke(t).forEach(i=>m(r.errors,i)),_.state.next({errors:t?r.errors:{}})},Me=(t,i,l)=>{const c=(d(n,t,{_f:{}})._f||{}).ref;A(r.errors,t,{...i,ref:c}),_.state.next({name:t,errors:r.errors,isValid:!1}),l&&l.shouldFocus&&c&&c.focus&&c.focus()},at=(t,i)=>Q(t)?_.values.subscribe({next:l=>t(F(void 0,i),l)}):F(t,i,!0),Ae=(t,i={})=>{for(const l of t?ke(t):h.mount)h.mount.delete(l),h.array.delete(l),i.keepValue||(m(n,l),m(u,l)),!i.keepError&&m(r.errors,l),!i.keepDirty&&m(r.dirtyFields,l),!i.keepTouched&&m(r.touchedFields,l),!i.keepIsValidating&&m(r.validatingFields,l),!s.shouldUnregister&&!i.keepDefaultValue&&m(a,l);_.values.next({values:{...u}}),_.state.next({...r,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&G()},Ne=({disabled:t,name:i,field:l,fields:c,value:f})=>{if(j(t)){const o=t?void 0:x(f)?Se(l?l._f:d(c,i)._f):f;A(u,i,o),Z(i,o,!1,!1,!0)}},xe=(t,i={})=>{let l=d(n,t);const c=j(i.disabled);return A(n,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...i}}),h.mount.add(t),l?Ne({field:l,disabled:i.disabled,name:t,value:i.value}):D(t,!0,i.value),{...c?{disabled:i.disabled}:{},...s.progressive?{required:!!i.required,min:ne(i.min),max:ne(i.max),minLength:ne(i.minLength),maxLength:ne(i.maxLength),pattern:ne(i.pattern)}:{},name:t,onChange:ie,onBlur:ie,ref:f=>{if(f){xe(t,i),l=d(n,t);const o=x(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,y=mt(o),V=l._f.refs||[];if(y?V.find(S=>S===o):o===l._f.ref)return;A(n,t,{_f:{...l._f,...y?{refs:[...V.filter(Ee),o,...Array.isArray(d(a,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),D(t,!1,void 0,o)}else l=d(n,t,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(vt(h.array,t)&&g.action)&&h.unMount.add(t)}}},pe=()=>s.shouldFocusError&&ae(n,le,h.mount),ot=t=>{j(t)&&(_.state.next({disabled:t}),ae(n,(i,l)=>{let c=t;const f=d(n,l);f&&j(f._f.disabled)&&(c||(c=f._f.disabled)),i.disabled=c},0,!1))},Pe=(t,i)=>async l=>{let c;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let f=p(u);if(_.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:y}=await X();r.errors=o,f=y}else await M(n);if(m(r.errors,"root"),U(r.errors)){_.state.next({errors:{}});try{await t(f,l)}catch(o){c=o}}else i&&await i({...r.errors},l),pe(),setTimeout(pe);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(r.errors)&&!c,submitCount:r.submitCount+1,errors:r.errors}),c)throw c},ft=(t,i={})=>{d(n,t)&&(x(i.defaultValue)?N(t,p(d(a,t))):(N(t,i.defaultValue),A(a,t,p(i.defaultValue))),i.keepTouched||m(r.touchedFields,t),i.keepDirty||(m(r.dirtyFields,t),r.isDirty=i.defaultValue?v(t,p(d(a,t))):v()),i.keepError||(m(r.errors,t),w.isValid&&G()),_.state.next({...r}))},Be=(t,i={})=>{const l=t?p(t):a,c=p(l),f=U(t),o=f?a:c;if(i.keepDefaultValues||(a=l),!i.keepValues){if(i.keepDirtyValues)for(const y of h.mount)d(r.dirtyFields,y)?A(o,y,d(u,y)):N(y,d(o,y));else{if(Te&&x(t))for(const y of h.mount){const V=d(n,y);if(V&&V._f){const S=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;if(ve(S)){const R=S.closest("form");if(R){R.reset();break}}}}n={}}u=e.shouldUnregister?i.keepDefaultValues?p(a):{}:p(o),_.array.next({values:{...o}}),_.values.next({values:{...o}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!w.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,_.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:f?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!Y(t,a)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:f?[]:i.keepDirtyValues?i.keepDefaultValues&&u?ge(a,u):r.dirtyFields:i.keepDefaultValues&&t?ge(a,t):{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Ie=(t,i)=>Be(Q(t)?t(u):t,i);return{control:{register:xe,unregister:Ae,getFieldState:Ue,handleSubmit:Pe,setError:Me,_executeSchema:X,_getWatch:F,_getDirty:v,_updateValid:G,_removeUnmounted:ye,_updateFieldArray:b,_updateDisabledField:Ne,_getFieldArray:k,_reset:Be,_resetDefaultValues:()=>Q(s.defaultValues)&&s.defaultValues().then(t=>{Ie(t,s.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:ot,_subjects:_,_proxyFormState:w,_setErrors:$,get _fields(){return n},get _formValues(){return u},get _state(){return g},set _state(t){g=t},get _defaultValues(){return a},get _names(){return h},set _names(t){h=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ue,register:xe,handleSubmit:Pe,watch:at,setValue:N,getValues:Re,reset:Ie,resetField:ft,clearErrors:nt,unregister:Ae,setError:Me,setFocus:(t,i={})=>{const l=d(n,t),c=l&&l._f;if(c){const f=c.refs?c.refs[0]:c.ref;f.focus&&(f.focus(),i.shouldSelect&&f.select())}},getFieldState:Ue}}function Bt(e={}){const s=C.useRef(),r=C.useRef(),[n,a]=C.useState({isDirty:!1,isValidating:!1,isLoading:Q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Ot(e),formState:n});const u=s.current.control;return u._options=e,Vt({subject:u._subjects.state,next:g=>{Ft(g,u._proxyFormState,u._updateFormState)&&a({...u._formState})}}),C.useEffect(()=>u._disableForm(e.disabled),[u,e.disabled]),C.useEffect(()=>{if(u._proxyFormState.isDirty){const g=u._getDirty();g!==n.isDirty&&u._subjects.state.next({isDirty:g})}},[u,n.isDirty]),C.useEffect(()=>{e.values&&!Y(e.values,r.current)?(u._reset(e.values,u._options.resetOptions),r.current=e.values,a(g=>({...g}))):u._resetDefaultValues()},[e.values,u]),C.useEffect(()=>{e.errors&&u._setErrors(e.errors)},[e.errors,u]),C.useEffect(()=>{u._state.mount||(u._updateValid(),u._state.mount=!0),u._state.watch&&(u._state.watch=!1,u._subjects.state.next({...u._formState})),u._removeUnmounted()}),C.useEffect(()=>{e.shouldUnregister&&u._subjects.values.next({values:u._getWatch()})},[e.shouldUnregister,u]),s.current.formState=bt(n,u),s.current}export{Pt as F,pt as a,Bt as u};
