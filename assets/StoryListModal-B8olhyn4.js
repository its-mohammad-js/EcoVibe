import{bs as O,bt as $,bu as D,bv as B,r as x,b as N,j as e,aK as z,n as H,O as E,bw as M,bx as _,by as F,bz as X,_ as y,aj as U,aH as V,bA as q,bB as K,bC as I,t as Q,u as W,aE as T,aM as P,m as G,a8 as J,a9 as Y}from"./index-D-03quZq.js";import{g as C,r as w,u as k,s as Z}from"./index.esm2017-Dzdnhjb1.js";import{C as L}from"./ContentSwitcher-BzEWxusp.js";import{b as ee}from"./index-BfzeEHqg.js";import{c as te}from"./index-Dc-NjWFK.js";import{a as se}from"./useGetStories-BisQd5mG.js";function le(t){t.values.forEach(n=>n.stop())}function ae(){const t=new Set,n={subscribe(s){return t.add(s),()=>void t.delete(s)},start(s,i){const r=[];return t.forEach(c=>{r.push(O(c,s,{transitionOverride:i}))}),Promise.all(r)},set(s){return t.forEach(i=>{$(i,s)})},stop(){t.forEach(s=>{le(s)})},mount(){return()=>{n.stop()}}};return n}function ne(){const t=D(ae);return B(t.mount,[]),t}const ie=ne;function re(t,n){const[s,i]=x.useState(t),[r,c]=x.useState(!0),a=x.useRef(),m=x.useRef();return x.useEffect(()=>{if(!r)return m.current=Date.now(),a.current=setTimeout(()=>{n()},s),()=>clearTimeout(a.current)},[s,r,n]),{remainingTime:s,pause:r,handlePause:l=>{c(u=>l||!u)},setRemainingTime:i,setPause:c}}function ce({setRemainingTime:t,loading:n,changeStoryHandler:s,pause:i,handlePause:r,contextMenuShow:c}){const{story:a,slideindex:m,currentSlideIndex:o}=S(),[l,u]=x.useState(!1),{userId:d}=N(p=>p.userData);function g(){var f;u(!0),r();const p=C(),R=w(p,`stories/${a.id}`),h=(f=a==null?void 0:a.seenBy)==null?void 0:f.filter(b=>b!==d);k(R,{seenBy:[...h||[],d]})}return e.jsxs("div",{className:"size-full relative z-40 overflow-hidden flex items-center justify-center p-6",children:[!l&&e.jsx(z,{style:{position:"absolute"}}),e.jsx(L,{pause:i,loadingCallBack:g,contentUrl:a.contentUrl,contentType:a.type,autoPlayCondition:o===m,setRemainingTime:t}),n&&e.jsxs("div",{className:"absolute z-50 inset-0 flex flex-col text-gray-200 gap-y-4 font-medium bg-gray-900/80 rounded-xl items-center justify-center",children:[e.jsx(z,{}),e.jsx("p",{children:"Deleting story, please dont refresh page"})]}),e.jsxs("div",{onTouchStart:()=>r(!0),onTouchEnd:()=>r(!1),className:"absolute z-40 inset-0 flex lg:hidden",children:[e.jsx("div",{onClick:()=>!c&&!n&&s("prev"),className:"h-full w-2/5"}),e.jsx("div",{onClick:()=>!c&&!n&&s("next"),className:"h-full w-3/5"})]})]})}function oe({remainingTime:t,pause:n}){const s=ie(),{list:i,currentSlideIndex:r}=S();return x.useEffect(()=>{n?s.stop():s.start({translateX:"0%",transition:{duration:t/1e3,ease:"linear"}})},[n,t]),e.jsx("div",{className:"flex gap-2 p-2",children:i.map((c,a)=>e.jsx("p",{className:`${a===r?"bg-gray-50":"bg-gray-400"} w-full h-1 rounded-xl overflow-hidden relative`,children:a===r&&e.jsx(H.div,{className:"bg-primary-300 h-1 absolute left-0 top-0 w-full",initial:{translateX:"-100%"},animate:s,transition:{duration:t/1e3,ease:"linear"}})},a))})}function de({onRemoveHighlight:t,pause:n,handlePause:s,onDeleteSlide:i,loading:r,contextMenuShow:c,setContextMenu:a}){const{changeStoryHandler:m,story:o}=S(),l=x.useRef();E(l,d,!c);const{userId:u}=N(p=>p.userData);function d(){s(),a(!1)}async function g(){try{s(!0),await i(o,()=>m("close")),y.success("story removed successfully"),s(!1)}catch(p){y.remove(),y.error("There was an error on delete story, please try again later"),s(!1),console.log(p)}}return e.jsxs("div",{ref:l,className:"flex items-center gap-x-2 relative",children:[e.jsx("button",{onClick:()=>s(),className:"text-gray-50",children:n?e.jsx(M,{className:"text-xl"}):e.jsx(ee,{className:"text-2xl"})}),e.jsx("button",{onClick:()=>{s(!0),a(!0)},className:"text-3xl text-gray-50",children:e.jsx(_,{className:"rotate-90"})}),e.jsxs("div",{className:`${c?"opacity-100 visible":"opacity-0 invisible"} ${r&&"hidden"} text-base flex top-8 p-1 flex-col bg-gray-50 text-gray-950 absolute right-0 rounded-lg overflow-hidden`,children:[e.jsxs("button",{onClick:()=>{t(o),a(!1)},disabled:!(o!=null&&o.highlightRef)||o.authorId!==u,className:"flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all items-center gap-x-2 text-center text-nowrap px-4 py-2",children:[e.jsx(te,{className:"text-xl"}),e.jsx("p",{children:"Remove highlight"})]}),e.jsxs("button",{disabled:o.authorId!==u,onClick:()=>{g(),a(!1)},className:"flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all items-center gap-x-2 text-center text-nowrap px-4 py-2",children:[e.jsx("p",{children:e.jsx(F,{})}),e.jsx("p",{children:"Delete story"})]}),e.jsxs("button",{onClick:()=>{m("close")},className:"flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all text-red-500 items-center gap-x-2 text-center text-nowrap px-4 py-2",children:[e.jsx(X,{className:"rotate-45 text-xl"}),e.jsx("p",{children:"Close"})]})]})]})}function ue({story:t,showComments:n}){var m,o;const{personalInformation:s,userId:i}=N(l=>l.userData),[r,c]=x.useState("");function a(){const l=C(),u=w(l,`stories/${t.id}`);k(u,{comments:[...(t==null?void 0:t.comments)||[],{createdAt:Z(),authorId:i,content:r,authorProfile:s==null?void 0:s.profilePic,authorName:(s==null?void 0:s.first_name)+" "+(s==null?void 0:s.last_name)}]}),c("")}return e.jsxs("div",{className:`${n?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-10"} absolute bottom-0 grid grid-rows-8 transition-all rounded-t-3xl px-2 pb-1 pt-3 overflow-hidden h-[25rem] w-full left-0 bg-gray-900/85 backdrop-blur-xl`,children:[e.jsx("div",{className:"w-full row-span-7 overflow-auto styled-scroll-bar flex flex-col gap-y-4",children:(m=t==null?void 0:t.comments)!=null&&m.length?(o=t==null?void 0:t.comments)==null?void 0:o.map((l,u)=>e.jsxs("div",{className:"w-full flex items-start",children:[e.jsx("div",{className:"size-14 rounded-full overflow-hidden flex items-center justify-center",children:l!=null&&l.authorProfile?e.jsx("img",{className:"mt-1",src:l==null?void 0:l.authorProfile}):e.jsx(U,{className:"text-4xl text-gray-400"})}),e.jsxs("div",{className:"flex-col p-1 w-11/12",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-300 line-clamp-1",children:l.authorName}),e.jsx("p",{className:"text-gray-400 text-sm line-clamp-6",children:l.content})]})]},u)):e.jsx("h2",{className:"my-auto w-full text-center text-gray-300",children:"no comments yet..."})}),e.jsxs("div",{className:"flex items-center border border-gray-400 rounded-2xl pl-1 pr-2",children:[e.jsx("input",{onKeyDown:l=>{l.key==="Enter"&&r.length>0&&(l.preventDefault(),a())},type:"text",onChange:({target:l})=>c(l.value),value:r,className:"bg-transparent w-full outline-none border-transparent flex-1 px-2 py-2 text-gray-300",placeholder:"comment something"}),e.jsx("button",{onClick:()=>a(),disabled:r.length<=0,className:"text-gray-300 disabled:opacity-0 transition-all text-3xl opacity-80 hover:opacity-100",children:e.jsx(V,{})})]})]})}function xe({story:t,handlePause:n}){var u,d;const{userId:s,auth_status:i}=N(g=>g.userData),[r,c]=x.useState(!1),[a,m]=x.useState(null),o=x.useRef();E(o,()=>{m(!1),a!==null&&n()},a===null),x.useEffect(()=>{var g;c((g=t==null?void 0:t.likes)==null?void 0:g.includes(s))},[t]);function l(){const g=C(),p=w(g,`stories/${t.id}`);k(p,{likes:Q(t==null?void 0:t.likes,s)})}return e.jsx(e.Fragment,{children:e.jsxs("div",{ref:o,className:"absolute w-full bottom-0 left-0 h-5 items-end flex gap-y-3 flex-col pb-36 gap-x-2 z-50 p-2",children:[e.jsxs("button",{onClick:l,className:"text-gray-400 text-4xl",children:[r?e.jsx(q,{className:"text-red-500"}):e.jsx(K,{className:"text-gray-400"}),e.jsx("p",{className:"text-lg",children:((u=t==null?void 0:t.likes)==null?void 0:u.length)||0})]}),e.jsxs("button",{disabled:i!==200,onClick:()=>{n(!0),m(!0)},className:"text-gray-400 text-4xl",children:[e.jsx(I,{}),e.jsx("p",{className:"text-lg",children:((d=t==null?void 0:t.comments)==null?void 0:d.length)||0})]}),e.jsx(ue,{story:t,showComments:a})]})})}function fe(){const{changeStoryHandler:t,listIndex:n,currentListIndex:s,story:i}=S(),{remainingTime:r,pause:c,handlePause:a,setRemainingTime:m}=re(5e3,()=>t("next")),[o,l]=x.useState(!1),{onDeleteSlide:u,loading:d,onRemoveHighlight:g}=se(a),p=W();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"size-full relative z-50 bg-gray-950 lg:rounded-xl flex items-center",children:[e.jsx("div",{className:"z-50 absolute -left-4 h-1/2 hidden xl:flex items-center",children:e.jsx("button",{disabled:d,onClick:()=>t("prev"),className:"text-2xl disabled:hidden rounded-full p-1.5 hover:bg-opacity-100 bg-gray-50 bg-opacity-50 transition-all top-1/2 rotate-180",children:e.jsx(T,{})})}),e.jsxs("div",{className:`${n===s?"block":"hidden"} absolute z-50 top-0 w-full p-1`,children:[e.jsx(oe,{pause:c,remainingTime:r}),e.jsxs("div",{className:"w-full flex items-center justify-between px-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"size-10 bg-gray-50/20 rounded-full overflow-hidden flex items-center justify-center",children:i!=null&&i.authorProfilePic?e.jsx("img",{src:i==null?void 0:i.authorProfilePic,className:"object-cover"}):e.jsx(P,{className:"text-4xl mt-2 text-gray-50"})}),e.jsx("h6",{onClick:()=>p(`/EcoVibe/seller/${i==null?void 0:i.authorId}`),className:"text-gray-50 text-lg cursor-pointer",children:i.author.first_name})]}),e.jsx(de,{pause:c,onRemoveHighlight:g,handlePause:a,onDeleteSlide:u,loading:d,contextMenuShow:o,setContextMenu:l})]})]}),e.jsx(ce,{setRemainingTime:m,loading:d,changeStoryHandler:t,handlePause:a,pause:c,contextMenuShow:o}),e.jsx(xe,{story:i,handlePause:a}),e.jsx("div",{className:`${n!==s&&"!hidden"} absolute -right-4 h-1/2 hidden xl:flex items-center`,children:e.jsx("button",{disabled:d,onClick:()=>t("next"),className:"text-2xl disabled:hidden disabled:bg-gray-500 disabled:opacity-50 rounded-full p-1.5 z-40 hover:bg-opacity-100 bg-gray-50 bg-opacity-50 transition-all top-1/2",children:e.jsx(T,{})})})]}),d&&e.jsx("div",{className:"fixed inset-0 z-40"})]})}const me=(t,n,s)=>{const[i,r]=x.useState(0),c=x.useRef(),a=G({maxWidth:768}),[m,o]=x.useState(null),[l,u]=x.useState(!1);J(780,!1);const d=Y();return x.useEffect(()=>{var f,b;const h=(b=(f=s[t])==null?void 0:f.slides)==null?void 0:b.findIndex(({isSeen:j})=>!j);r(h>=0?h:0)},[t]),x.useEffect(()=>{const h=document.querySelector(".currentSlide"),f=new IntersectionObserver(([b])=>{if(!b.isIntersecting&&m!==null){const j=m==="next"?t<s.length-1?t+1:null:t-1;u(!0),n(j),r(0),o(null)}},{threshold:.05});return h&&f.observe(h),()=>f.disconnect()},[m,t]),x.useEffect(()=>{if(l){const h=setTimeout(()=>u(!1),500);return()=>clearTimeout(h)}},[l]),x.useEffect(()=>{(()=>{if(!c.current)return;const f=document.querySelector(".currentSlide");if(!f)return;const b=f.getBoundingClientRect(),j=c.current.getBoundingClientRect(),v=b.left+b.width/2-(j.left+j.width/2);c.current.scrollLeft+=v})()},[t,a,l]),{containerRef:c,isChangingSlide:l,changeStory:h=>{const f=s[t],b=h==="next";if(h==="close"){n(null),r(0);return}else{let j=i+(b?1:-1);const v=t+(b?1:-1);(j<0||j>=f.slides.length)&&(n(v>=0&&v<s.length?v:null),j=0),r(j)}},handleTouch:(h,f)=>{if(f==="start")o(null),c.current.dataset.touchStart=h.touches[0].clientX;else if(f==="move"){const b=h.touches[0].clientX-c.current.dataset.touchStart;o(b>20?"prev":"next")}},getPaginatedLists:()=>d!=null&&d.id?s:s.map((h,f)=>({...h,listIndex:f})).filter((h,f)=>f===t-1||f===t||f===t+1),currentSlideIndex:i}},A=x.createContext();function Ne({currentListIndex:t,setList:n,storiesList:s}){const{containerRef:i,isChangingSlide:r,changeStory:c,handleTouch:a,getPaginatedLists:m,currentSlideIndex:o}=me(t,n,s);return e.jsx("div",{ref:i,className:`${r?"overflow-hidden":"overflow-auto"} fixed bg-gray-950/80 hidden-scroll-bar inset-0 z-50 lg:flex items-center justify-center snap-x snap-mandatory lg:snap-none`,children:e.jsxs("div",{onTouchMove:l=>a(l,"move"),onTouchStart:l=>a(l,"start"),className:"inline-flex items-center lg:gap-x-8 size-full lg:px-[500vw]",children:[m().map(({slides:l,listIndex:u})=>{if(l)return e.jsx("div",{className:`${u===t?"lg:h-[95vh] currentSlide":"lg:h-[80vh]"} flex-none h-full select-none w-full lg:relative lg:w-96 transition-all duration-500 z-40 snap-end`,children:l.map((d,g)=>{var p;return t===u?o===g&&e.jsx(A.Provider,{value:{changeStoryHandler:c,listIndex:u,currentListIndex:t,list:l,currentSlideIndex:o,slideindex:g,story:d},children:e.jsx(fe,{},g)}):e.jsx("div",{className:"size-full first-of-type:flex hidden relative bg-gray-950 lg:rounded-xl items-center",children:e.jsxs("div",{onClick:()=>n(u),className:"size-full select-none flex flex-col gap-y-2 items-center justify-center",children:[e.jsx("div",{className:"size-28 bg-gray-50/20 overflow-hidden rounded-full",children:d!=null&&d.authorProfilePic?e.jsx("img",{src:d==null?void 0:d.authorProfilePic,className:"object-cover"}):e.jsx(P,{className:"text-4xl mt-2 text-gray-50"})}),e.jsx("h4",{className:"text-gray-50",children:(p=d.author)==null?void 0:p.first_name})]})},g)})},u)}),e.jsx("div",{className:`${r?"opacity-100 visible":"invisible opacity-0"} fixed inset-0 z-50 transition-all`}),e.jsx("div",{onClick:()=>n(null),id:"list-background",className:"fixed inset-0 bg-gray-950/80 hidden lg:block"})]})})}const S=()=>x.useContext(A);export{Ne as S};
