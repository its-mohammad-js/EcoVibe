import{g as S,r as g,h as A,u as B,a as T,b as D,c as $,q as G,e as H,d as k}from"./index.esm2017-Dzdnhjb1.js";import{r as f,ba as w,bb as Q,cA as U,_ as m,b as V}from"./index-D-03quZq.js";import{l as E}from"./lodash-CHr0VgFw.js";function I(c){const[d,o]=f.useState(!1);return{loading:d,onDeleteSlide:async(l,e=()=>{})=>{try{const r=S();o(!0);const p=w(Q,l.contentUrl);await U(p);const u=g(r,`stories/${l.id}`);A(u),o(!1),e()}catch(r){m.error("There was an error on delete story, please try again later"),o(!1),e(),console.log(r)}},onRemoveHighlight:async l=>{try{o(!0),c(!1);const e=S(),r=g(e,`stories/${l.id}`);B(r,{highlightRef:null,title:null}),m.success("highlight removed successfully"),o(!1),c(!0)}catch(e){m.error("There was an error on remove highlight, please try again later"),o(!1),c(!1),console.log(e)}}}}const J=(c,d)=>{const[o,h]=f.useState(!1),[b,l]=f.useState([]),e=S(),{userId:r,loading:p}=V(a=>a.userData),u=f.useRef(),L=()=>{const a=g(e,"stories"),s=c?G(a,k("authorId"),H(c)):a;D(s,y=>{const t=Object.values(y.val()||{});l(t)})},q=a=>{const s=E.groupBy(a,"authorId");Object.keys(s).forEach(t=>{s[t]=s[t].map(i=>{var n;return{...i,isSeen:(n=i.seenBy)==null?void 0:n.includes(r)}})});const y=E.orderBy(Object.keys(s),[t=>t===r,t=>s[t].every(i=>i.isSeen||i.authorId===c)],["desc","asc"]);return u.current=d?u.current:y,u.current.map((t,i)=>{var v,R,_,O,j;const n=s[t];return{authorId:t,first_name:(R=(v=n[0])==null?void 0:v.author)==null?void 0:R.first_name,last_name:(O=(_=n[0])==null?void 0:_.author)==null?void 0:O.last_name,profile_pic:(j=n[0])==null?void 0:j.authorProfilePic,slides:n,isSeen:n.every(({isSeen:x})=>x),listIndex:i}})};return f.useEffect(()=>{T(e);const a=g(e,".info/connected");return D(a,s=>{s.val()===!0&&!p?(L(),h(!1)):h(!0)}),()=>{$(e)}},[r]),{loading:o,groupedStories:q(b)}};export{I as a,J as u};
