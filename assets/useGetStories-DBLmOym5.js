import{r as f,as as S,bs as A,bt as T,cS as $,au as g,b1 as q,_ as m,aX as w,b as G,aw as H,ax as x,ay as k,az as z,aA as Q,aB as U}from"./index-Bc-LpspM.js";import{l as B}from"./lodash-BgJ17PjB.js";function C(c){const[d,o]=f.useState(!1);return{loading:d,onDeleteSlide:async(l,e=()=>{})=>{try{const r=S();o(!0);const y=A(T,l.contentUrl);await $(y);const u=g(r,`stories/${l.id}`);q(u),o(!1),e()}catch(r){m.error("There was an error on delete story, please try again later"),o(!1),e(),console.log(r)}},onRemoveHighlight:async l=>{try{o(!0),c(!1);const e=S(),r=g(e,`stories/${l.id}`);w(r,{highlightRef:null,title:null}),m.success("highlight removed successfully"),o(!1),c(!0)}catch(e){m.error("There was an error on remove highlight, please try again later"),o(!1),c(!1),console.log(e)}}}}const F=(c,d)=>{const[o,h]=f.useState(!1),[b,l]=f.useState([]),e=S(),{userId:r,loading:y}=G(a=>a.userData),u=f.useRef(),D=()=>{const a=g(e,"stories"),t=c?z(a,U("authorId"),Q(c)):a;x(t,p=>{const s=Object.values(p.val()||{});l(s)})},E=a=>{const t=B.groupBy(a,"authorId");Object.keys(t).forEach(s=>{t[s]=t[s].map(i=>{var n;return{...i,isSeen:(n=i.seenBy)==null?void 0:n.includes(r)}})});const p=B.orderBy(Object.keys(t),[s=>s===r,s=>t[s].every(i=>i.isSeen||i.authorId===c)],["desc","asc"]);return u.current=d?u.current:p,u.current.map((s,i)=>{var v,R,_,O,j;const n=t[s];return{authorId:s,first_name:(R=(v=n[0])==null?void 0:v.author)==null?void 0:R.first_name,last_name:(O=(_=n[0])==null?void 0:_.author)==null?void 0:O.last_name,profile_pic:(j=n[0])==null?void 0:j.authorProfilePic,slides:n,isSeen:n.every(({isSeen:L})=>L),listIndex:i}})};return f.useEffect(()=>{H(e);const a=g(e,".info/connected");return x(a,t=>{t.val()===!0&&!y?(D(),h(!1)):h(!0)}),()=>{k(e)}},[r]),{loading:o,groupedStories:E(b)}};export{C as a,F as u};
