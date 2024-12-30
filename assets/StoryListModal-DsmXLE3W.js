import{r as x,a as N,j as e,V as z,_ as y,t as A,v as O}from"./index-BktEY0AR.js";import{h as P}from"./index-B8vJLAzm.js";import{g as w,r as C,w as k,B as $,C as B,f as H,x as M,s as _,D as F,E as X,u as T}from"./index.esm2017-k721lsQk.js";import{u as U}from"./useMediaQuery-sTwrKcTY.js";import{u as V}from"./UseDisableScroll-CkfVoSi8.js";import{C as q}from"./ContentSwitcher-DOKLWGZP.js";import{a as K,s as Q,u as W,b as G,m as J}from"./motion-BBjPZyOW.js";import{d as Y}from"./index-UzGScAa8.js";import{D as Z}from"./index-B_HFf_np.js";import{b as I}from"./index-DYJY0DtV.js";import{u as E}from"./UseOutsideClick-BBAhdokL.js";import{c as L}from"./index-9utHU4C5.js";import{a as ee}from"./useGetStories-my4NPDQv.js";import{e as te}from"./index-CQhbJd4H.js";function se(t){t.values.forEach(n=>n.stop())}function le(){const t=new Set,n={subscribe(s){return t.add(s),()=>void t.delete(s)},start(s,r){const i=[];return t.forEach(o=>{i.push(K(o,s,{transitionOverride:r}))}),Promise.all(i)},set(s){return t.forEach(r=>{Q(r,s)})},stop(){t.forEach(s=>{se(s)})},mount(){return()=>{n.stop()}}};return n}function ae(){const t=W(le);return G(t.mount,[]),t}const ne=ae;function ie(t,n){const[s,r]=x.useState(t),[i,o]=x.useState(!0),a=x.useRef(),m=x.useRef();return x.useEffect(()=>{if(!i)return m.current=Date.now(),a.current=setTimeout(()=>{n()},s),()=>clearTimeout(a.current)},[s,i,n]),{remainingTime:s,pause:i,handlePause:l=>{o(u=>l||!u)},setRemainingTime:r,setPause:o}}function re({setRemainingTime:t,loading:n,changeStoryHandler:s,pause:r,handlePause:i,contextMenuShow:o}){const{story:a,slideindex:m,currentSlideIndex:c}=S(),[l,u]=x.useState(!1),{userId:d}=N(b=>b.userData);function g(){var f;u(!0),i();const b=w(),R=C(b,`stories/${a.id}`),h=(f=a==null?void 0:a.seenBy)==null?void 0:f.filter(p=>p!==d);k(R,{seenBy:[...h||[],d]})}return e.jsxs("div",{className:"size-full relative z-40 overflow-hidden flex items-center justify-center p-6",children:[!l&&e.jsx(z,{style:{position:"absolute"}}),e.jsx(q,{pause:r,loadingCallBack:g,contentUrl:a.contentUrl,contentType:a.type,autoPlayCondition:c===m,setRemainingTime:t}),n&&e.jsxs("div",{className:"absolute z-50 inset-0 flex flex-col text-gray-200 gap-y-4 font-medium bg-gray-900/80 rounded-xl items-center justify-center",children:[e.jsx(z,{}),e.jsx("p",{children:"Deleting story, please dont refresh page"})]}),e.jsxs("div",{onTouchStart:()=>i(!0),onTouchEnd:()=>i(!1),className:"absolute z-40 inset-0 flex lg:hidden",children:[e.jsx("div",{onClick:()=>!o&&!n&&s("prev"),className:"h-full w-2/5"}),e.jsx("div",{onClick:()=>!o&&!n&&s("next"),className:"h-full w-3/5"})]})]})}function oe({remainingTime:t,pause:n}){const s=ne(),{list:r,currentSlideIndex:i}=S();return x.useEffect(()=>{n?s.stop():s.start({translateX:"0%",transition:{duration:t/1e3,ease:"linear"}})},[n,t]),e.jsx("div",{className:"flex gap-2 p-2",children:r.map((o,a)=>e.jsx("p",{className:`${a===i?"bg-gray-50":"bg-gray-400"} w-full h-1 rounded-xl overflow-hidden relative`,children:a===i&&e.jsx(J.div,{className:"bg-primary-300 h-1 absolute left-0 top-0 w-full",initial:{translateX:"-100%"},animate:s,transition:{duration:t/1e3,ease:"linear"}})},a))})}function ce({onRemoveHighlight:t,pause:n,handlePause:s,onDeleteSlide:r,loading:i,contextMenuShow:o,setContextMenu:a}){const{changeStoryHandler:m,story:c}=S(),l=x.useRef();E(l,d,!o);const{userId:u}=N(b=>b.userData);function d(){s(),a(!1)}async function g(){try{s(!0),await r(c,()=>m("close")),y.success("story removed successfully"),s(!1)}catch(b){y.remove(),y.error("There was an error on delete story, please try again later"),s(!1),console.log(b)}}return e.jsxs("div",{ref:l,className:"flex items-center gap-x-2 relative",children:[e.jsx("button",{onClick:()=>s(),className:"text-gray-50",children:n?e.jsx(Z,{className:"text-xl"}):e.jsx(I,{className:"text-2xl"})}),e.jsx("button",{onClick:()=>{s(!0),a(!0)},className:"text-3xl text-gray-50",children:e.jsx($,{className:"rotate-90"})}),e.jsxs("div",{className:`${o?"opacity-100 visible":"opacity-0 invisible"} ${i&&"hidden"} text-base flex top-8 p-1 flex-col bg-gray-50 text-gray-950 absolute right-0 rounded-lg overflow-hidden`,children:[e.jsxs("button",{onClick:()=>{t(c),a(!1)},disabled:!(c!=null&&c.highlightRef)||c.authorId!==u,className:"flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all items-center gap-x-2 text-center text-nowrap px-4 py-2",children:[e.jsx(L,{className:"text-xl"}),e.jsx("p",{children:"Remove highlight"})]}),e.jsxs("button",{disabled:c.authorId!==u,onClick:()=>{g(),a(!1)},className:"flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all items-center gap-x-2 text-center text-nowrap px-4 py-2",children:[e.jsx("p",{children:e.jsx(Y,{})}),e.jsx("p",{children:"Delete story"})]}),e.jsxs("button",{onClick:()=>{m("close")},className:"flex disabled:hidden hover:bg-gray-800 rounded-md hover:text-gray-50 transition-all text-red-500 items-center gap-x-2 text-center text-nowrap px-4 py-2",children:[e.jsx(B,{className:"rotate-45 text-xl"}),e.jsx("p",{children:"Close"})]})]})]})}function de({story:t,showComments:n}){var m,c;const{personalInformation:s,userId:r}=N(l=>l.userData),[i,o]=x.useState("");function a(){const l=w(),u=C(l,`stories/${t.id}`);k(u,{comments:[...(t==null?void 0:t.comments)||[],{createdAt:_(),authorId:r,content:i,authorProfile:s==null?void 0:s.profilePic,authorName:(s==null?void 0:s.first_name)+" "+(s==null?void 0:s.last_name)}]}),o("")}return e.jsxs("div",{className:`${n?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-10"} absolute bottom-0 grid grid-rows-8 transition-all rounded-t-3xl px-2 pb-1 pt-3 overflow-hidden h-[25rem] w-full left-0 bg-gray-900/85 backdrop-blur-xl`,children:[e.jsx("div",{className:"w-full row-span-7 overflow-auto styled-scroll-bar flex flex-col gap-y-4",children:(m=t==null?void 0:t.comments)!=null&&m.length?(c=t==null?void 0:t.comments)==null?void 0:c.map((l,u)=>e.jsxs("div",{className:"w-full flex items-start",children:[e.jsx("div",{className:"size-14 rounded-full overflow-hidden flex items-center justify-center",children:l!=null&&l.authorProfile?e.jsx("img",{className:"mt-1",src:l==null?void 0:l.authorProfile}):e.jsx(H,{className:"text-4xl text-gray-400"})}),e.jsxs("div",{className:"flex-col p-1 w-11/12",children:[e.jsx("h4",{className:"text-lg font-semibold text-gray-300 line-clamp-1",children:l.authorName}),e.jsx("p",{className:"text-gray-400 text-sm line-clamp-6",children:l.content})]})]},u)):e.jsx("h2",{className:"my-auto w-full text-center text-gray-300",children:"no comments yet..."})}),e.jsxs("div",{className:"flex items-center border border-gray-400 rounded-2xl pl-1 pr-2",children:[e.jsx("input",{onKeyDown:l=>{l.key==="Enter"&&i.length>0&&(l.preventDefault(),a())},type:"text",onChange:({target:l})=>o(l.value),value:i,className:"bg-transparent w-full outline-none border-transparent flex-1 px-2 py-2 text-gray-300",placeholder:"comment something"}),e.jsx("button",{onClick:()=>a(),disabled:i.length<=0,className:"text-gray-300 disabled:opacity-0 transition-all text-3xl opacity-80 hover:opacity-100",children:e.jsx(M,{})})]})]})}function ue({story:t,handlePause:n}){var u,d;const{userId:s,auth_status:r}=N(g=>g.userData),[i,o]=x.useState(!1),[a,m]=x.useState(null),c=x.useRef();E(c,()=>{m(!1),a!==null&&n()},a===null),x.useEffect(()=>{var g;o((g=t==null?void 0:t.likes)==null?void 0:g.includes(s))},[t]);function l(){const g=w(),b=C(g,`stories/${t.id}`);k(b,{likes:A(t==null?void 0:t.likes,s)})}return e.jsx(e.Fragment,{children:e.jsxs("div",{ref:c,className:"absolute w-full bottom-0 left-0 h-5 items-end flex gap-y-3 flex-col pb-36 gap-x-2 z-50 p-2",children:[e.jsxs("button",{onClick:l,className:"text-gray-400 text-4xl",children:[i?e.jsx(F,{className:"text-red-500"}):e.jsx(X,{className:"text-gray-400"}),e.jsx("p",{className:"text-lg",children:((u=t==null?void 0:t.likes)==null?void 0:u.length)||0})]}),e.jsxs("button",{disabled:r!==200,onClick:()=>{n(!0),m(!0)},className:"text-gray-400 text-4xl",children:[e.jsx(te,{}),e.jsx("p",{className:"text-lg",children:((d=t==null?void 0:t.comments)==null?void 0:d.length)||0})]}),e.jsx(de,{story:t,showComments:a})]})})}function xe(){const{changeStoryHandler:t,listIndex:n,currentListIndex:s,story:r}=S(),{remainingTime:i,pause:o,handlePause:a,setRemainingTime:m}=ie(5e3,()=>t("next")),[c,l]=x.useState(!1),{onDeleteSlide:u,loading:d,onRemoveHighlight:g}=ee(a);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"size-full relative z-50 bg-gray-950 lg:rounded-xl flex items-center",children:[e.jsx("div",{className:"z-50 absolute -left-4 h-1/2 hidden xl:flex items-center",children:e.jsx("button",{disabled:d,onClick:()=>t("prev"),className:"text-2xl disabled:hidden rounded-full p-1.5 hover:bg-opacity-100 bg-gray-50 bg-opacity-50 transition-all top-1/2 rotate-180",children:e.jsx(T,{})})}),e.jsxs("div",{className:`${n===s?"block":"hidden"} absolute z-50 top-0 w-full p-1`,children:[e.jsx(oe,{pause:o,remainingTime:i}),e.jsxs("div",{className:"w-full flex items-center justify-between px-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"size-10 bg-gray-50/20 rounded-full overflow-hidden flex items-center justify-center",children:r!=null&&r.authorProfilePic?e.jsx("img",{src:r==null?void 0:r.authorProfilePic,className:"object-cover"}):e.jsx(P,{className:"text-4xl mt-2 text-gray-50"})}),e.jsx("h6",{className:"text-gray-50 text-lg",children:r.author.first_name})]}),e.jsx(ce,{pause:o,onRemoveHighlight:g,handlePause:a,onDeleteSlide:u,loading:d,contextMenuShow:c,setContextMenu:l})]})]}),e.jsx(re,{setRemainingTime:m,loading:d,changeStoryHandler:t,handlePause:a,pause:o,contextMenuShow:c}),e.jsx(ue,{story:r,handlePause:a}),e.jsx("div",{className:`${n!==s&&"!hidden"} absolute -right-4 h-1/2 hidden xl:flex items-center`,children:e.jsx("button",{disabled:d,onClick:()=>t("next"),className:"text-2xl disabled:hidden disabled:bg-gray-500 disabled:opacity-50 rounded-full p-1.5 z-40 hover:bg-opacity-100 bg-gray-50 bg-opacity-50 transition-all top-1/2",children:e.jsx(T,{})})})]}),d&&e.jsx("div",{className:"fixed inset-0 z-40"})]})}const fe=(t,n,s)=>{const[r,i]=x.useState(0),o=x.useRef(),a=U({maxWidth:768}),[m,c]=x.useState(null),[l,u]=x.useState(!1);V(780,!1);const d=O();return x.useEffect(()=>{var f,p;const h=(p=(f=s[t])==null?void 0:f.slides)==null?void 0:p.findIndex(({isSeen:j})=>!j);i(h>=0?h:0)},[t]),x.useEffect(()=>{const h=document.querySelector(".currentSlide"),f=new IntersectionObserver(([p])=>{if(!p.isIntersecting&&m!==null){const j=m==="next"?t<s.length-1?t+1:null:t-1;u(!0),n(j),i(0),c(null)}},{threshold:.05});return h&&f.observe(h),()=>f.disconnect()},[m,t]),x.useEffect(()=>{if(l){const h=setTimeout(()=>u(!1),500);return()=>clearTimeout(h)}},[l]),x.useEffect(()=>{(()=>{if(!o.current)return;const f=document.querySelector(".currentSlide");if(!f)return;const p=f.getBoundingClientRect(),j=o.current.getBoundingClientRect(),v=p.left+p.width/2-(j.left+j.width/2);o.current.scrollLeft+=v})()},[t,a,l]),{containerRef:o,isChangingSlide:l,changeStory:h=>{const f=s[t],p=h==="next";if(h==="close"){n(null),i(0);return}else{let j=r+(p?1:-1);const v=t+(p?1:-1);(j<0||j>=f.slides.length)&&(n(v>=0&&v<s.length?v:null),j=0),i(j)}},handleTouch:(h,f)=>{if(f==="start")c(null),o.current.dataset.touchStart=h.touches[0].clientX;else if(f==="move"){const p=h.touches[0].clientX-o.current.dataset.touchStart;c(p>20?"prev":"next")}},getPaginatedLists:()=>d!=null&&d.id?s:s.map((h,f)=>({...h,listIndex:f})).filter((h,f)=>f===t-1||f===t||f===t+1),currentSlideIndex:r}},D=x.createContext();function ze({currentListIndex:t,setList:n,storiesList:s}){const{containerRef:r,isChangingSlide:i,changeStory:o,handleTouch:a,getPaginatedLists:m,currentSlideIndex:c}=fe(t,n,s);return e.jsx("div",{ref:r,className:`${i?"overflow-hidden":"overflow-auto"} fixed bg-gray-950/80 hidden-scroll-bar inset-0 z-50 lg:flex items-center justify-center snap-x snap-mandatory lg:snap-none`,children:e.jsxs("div",{onTouchMove:l=>a(l,"move"),onTouchStart:l=>a(l,"start"),className:"inline-flex items-center lg:gap-x-8 size-full lg:px-[500vw]",children:[m().map(({slides:l,listIndex:u})=>{if(l)return e.jsx("div",{className:`${u===t?"lg:h-[95vh] currentSlide":"lg:h-[80vh]"} flex-none h-full select-none w-full lg:relative lg:w-96 transition-all duration-500 z-40 snap-end`,children:l.map((d,g)=>{var b;return t===u?c===g&&e.jsx(D.Provider,{value:{changeStoryHandler:o,listIndex:u,currentListIndex:t,list:l,currentSlideIndex:c,slideindex:g,story:d},children:e.jsx(xe,{},g)}):e.jsx("div",{className:"size-full first-of-type:flex hidden relative bg-gray-950 lg:rounded-xl items-center",children:e.jsxs("div",{onClick:()=>n(u),className:"size-full select-none flex flex-col gap-y-2 items-center justify-center",children:[e.jsx("div",{className:"size-28 bg-gray-50/20 overflow-hidden rounded-full",children:d!=null&&d.authorProfilePic?e.jsx("img",{src:d==null?void 0:d.authorProfilePic,className:"object-cover"}):e.jsx(P,{className:"text-4xl mt-2 text-gray-50"})}),e.jsx("h4",{className:"text-gray-50",children:(b=d.author)==null?void 0:b.first_name})]})},g)})},u)}),e.jsx("div",{className:`${i?"opacity-100 visible":"invisible opacity-0"} fixed inset-0 z-50 transition-all`}),e.jsx("div",{onClick:()=>n(null),id:"list-background",className:"fixed inset-0 bg-gray-950/80 hidden lg:block"})]})})}const S=()=>x.useContext(D);export{ze as S};
