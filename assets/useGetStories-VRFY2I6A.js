import{g as S,r as d,h as x,u as T,a as $,b as B,c as A,q as G,e as H,d as k}from"./index.esm2017-DscHeoXZ.js";import{r as f,bc as w,bd as Q,cB as U,_ as m,b as V}from"./index-WDWOvq0Z.js";import{l as D}from"./lodash-Dj2gdF6r.js";function I(c){const[g,o]=f.useState(!1);return{loading:g,onDeleteSlide:async(l,e=()=>{})=>{try{const r=S();o(!0);const p=w(Q,l.contentUrl);await U(p);const u=d(r,`stories/${l.id}`);x(u),o(!1),e()}catch(r){m.error("There was an error on delete story, please try again later"),o(!1),e(),console.log(r)}},onRemoveHighlight:async l=>{try{o(!0),c(!1);const e=S(),r=d(e,`stories/${l.id}`);T(r,{highlightRef:null,title:null}),m.success("highlight removed successfully"),o(!1),c(!0)}catch(e){m.error("There was an error on remove highlight, please try again later"),o(!1),c(!1),console.log(e)}}}}const J=(c,g)=>{const[o,h]=f.useState(!1),[b,l]=f.useState([]),e=S(),{userId:r,loading:p}=V(a=>a.userData),u=f.useRef(),E=()=>{const a=d(e,"stories"),s=c?G(a,k("authorId"),H(c)):a;B(s,y=>{const t=Object.values(y.val()||{});l(t)})},L=a=>{const s=D.groupBy(a,"authorId");Object.keys(s).forEach(t=>{s[t]=s[t].map(i=>{var n;return{...i,isSeen:(n=i.seenBy)==null?void 0:n.includes(r)}})});const y=D.orderBy(Object.keys(s),[t=>t===r,t=>s[t].every(i=>i.isSeen||i.authorId===c)],["desc","asc"]);return u.current=g?u.current:y,u.current.map((t,i)=>{var v,R,_,O,j;const n=s[t];return{authorId:t,first_name:(R=(v=n[0])==null?void 0:v.author)==null?void 0:R.first_name,last_name:(O=(_=n[0])==null?void 0:_.author)==null?void 0:O.last_name,profile_pic:(j=n[0])==null?void 0:j.authorProfilePic,slides:n,isSeen:n.every(({isSeen:q})=>q),listIndex:i}})};return f.useEffect(()=>{$(e);const a=d(e,".info/connected");return B(a,s=>{s.val()===!0&&!p?(E(),h(!1)):h(!0)}),()=>{A(e)}},[r]),{loading:o,groupedStories:L(b)}};export{I as a,J as u};