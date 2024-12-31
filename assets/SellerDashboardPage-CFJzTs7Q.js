import{r as l,u as m,b as f,O as h,j as e,bn as g,bo as b,bp as j,bq as N,x as v,n as w,ak as C,a9 as k,_ as E,br as S,aO as A}from"./index-B95hrIzf.js";import{a as F}from"./index-BihAjOUM.js";import{a as M}from"./index-zR1qXVO_.js";import{a as z}from"./index-DFzK4X_2.js";import{A as P}from"./AddEditProductForm-DHqJrQJf.js";import{D}from"./DashboardContext-D-WyzZKM.js";import{A as O}from"./AddStoryModal-Bs1gt3T0.js";import"./index.esm-dRLTr8gn.js";import"./react-select.esm-C82HClSQ.js";import"./Select-49a62830.esm-C5EPJ5nV.js";import"./lodash-CEuUnwy2.js";import"./useGetOptions-DUi1Etz4.js";import"./index.esm2017-DfI6XFI6.js";import"./ContentSwitcher-DUh862RD.js";function R({onModalChange:o}){const[t,r]=l.useState(!1),d=m(),[x,n]=l.useState({width:window.innerWidth,height:window.innerHeight}),{userId:c,loading:i,auth_status:y}=f(a=>a.userData),p=l.useRef();h(p,()=>r(!1)),l.useEffect(()=>{const a=()=>{n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]);const s=(a,u)=>{a?o(u):d(u),r(!1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{ref:p,className:`${t?"translate-x-0":"-translate-x-24"} fixed shadow-xl shadow-gray-800 top-14 lg:top-20 h-[35rem] px-2 py-2 border-y-4 border-primary-500 rounded-r-lg bg-gray-50 z-50 transition-all duration-500 flex flex-col justify-between`,children:[e.jsxs("div",{className:"flex flex-col transition-all",children:[e.jsxs("button",{onClick:()=>s(!1,"Analytics"),className:"flex flex-col items-center justify-center gap-y-1 text-primary-500 group",children:[e.jsx("p",{className:"p-2 text-xl rounded-full border border-gray-50 group-hover:border-primary-500",children:e.jsx(F,{})}),e.jsx("p",{className:"text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full",children:"Analytics"})]}),e.jsxs("button",{onClick:()=>s(!1,"Products"),className:"flex flex-col items-center justify-center gap-y-1 text-primary-500 group",children:[e.jsx("p",{className:"p-2 text-xl rounded-full border border-gray-50 group-hover:border-primary-500",children:e.jsx(g,{})}),e.jsx("p",{className:"text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full",children:"Products"})]}),e.jsxs("button",{onClick:()=>s(!1,"Orders"),className:"flex flex-col items-center justify-center gap-y-1 text-primary-500 group",children:[e.jsx("p",{className:"p-2 text-xl rounded-full border border-gray-50 group-hover:border-primary-500",children:e.jsx(b,{})}),e.jsx("p",{className:"text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full",children:"Orders"})]}),e.jsxs("button",{onClick:()=>s(!1,"/EcoVibe/"),className:"flex flex-col items-center justify-center gap-y-1 text-primary-500 group",children:[e.jsx("p",{className:"p-2 text-2xl rounded-full border border-gray-50 group-hover:border-primary-500",children:e.jsx(M,{})}),e.jsx("p",{className:"text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full",children:"Home"})]}),e.jsxs("button",{onClick:()=>s(!1,"/EcoVibe/messages"),className:"flex flex-col items-center justify-center gap-y-1 text-primary-500 group",children:[e.jsx("p",{className:"p-2 text-2xl rounded-full border border-gray-50 group-hover:border-primary-500",children:e.jsx(j,{})}),e.jsx("p",{className:"text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full",children:"Message"})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("button",{onClick:()=>s(!0,"add-product"),className:"flex flex-col items-center justify-center gap-y-1 text-primary-500 group",children:[e.jsx("p",{className:"p-2 text-2xl rounded-full border border-gray-50 group-hover:border-primary-500",children:e.jsx(N,{})}),e.jsx("p",{className:"text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full",children:"Add Item"})]}),e.jsxs("button",{onClick:()=>s(!0,"add-story"),className:"flex flex-col items-center justify-center gap-y-1 text-primary-500 group",children:[e.jsx("p",{className:"p-2 text-2xl rounded-full border border-gray-50 group-hover:border-primary-500",children:e.jsx(z,{})}),e.jsx("p",{className:"text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full",children:"Add Story"})]}),e.jsxs("button",{onClick:()=>s(!1,`/EcoVibe/seller/${c}`),className:"flex flex-col items-center justify-center gap-y-1 text-primary-500 group",children:[e.jsx("p",{className:"p-2 text-2xl rounded-full border border-gray-50 group-hover:border-primary-500",children:e.jsx(v,{})}),e.jsx("p",{className:"text-xs opacity-0 group-hover:opacity-100 transition-all text-center w-full",children:"Profile"})]})]}),e.jsx(w.div,{drag:!t&&"y",dragConstraints:{top:-113,bottom:x.height-380},className:"fixed z-50 left-0 top-1/4",children:e.jsx("button",{disabled:i||y!==200,onClick:()=>r(a=>!a),className:`${t?"translate-x-[4.25rem]":"translate-x-24"} bg-primary-500 z-10 absolute top-2 transition-all duration-500 p-1 rounded-r-lg disabled:-translate-x-48`,children:e.jsx("p",{className:`${t&&"rotate-180"} text-4xl text-gray-50 transition-all`,children:e.jsx(C,{})})})})]})})}function G(){const[o,t]=l.useState(null),r=k(),{userType:d,seller_step:x}=f(i=>i.userData),n=m();l.useEffect(()=>{d==="customer"?(E.error("You aren't a selller yet please sign up as a seller"),n("/EcoVibe/sellers-solutions")):x!=="third-step"&&n("/EcoVibe/sellers")},[d]),l.useEffect(()=>{r.modalKey&&(r.modalKey==="add-product"||r.modalKey==="add-story")&&t(r==null?void 0:r.modalKey)},[r]);function c(i){n("/EcoVibe/dashboard"),t(o===i?null:i)}return e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl -mb-4 relative min-h-screen",children:[e.jsx(R,{onModalChange:c}),e.jsx(D,{children:e.jsx(S,{children:e.jsx(A,{})})}),e.jsxs("div",{className:`${o?"visible opacity-100":"invisible opacity-0"} transition-all fixed inset-0 flex items-center justify-center px-2 z-50`,children:[o==="add-product"&&e.jsx(P,{onModalChange:c}),o==="add-story"&&e.jsx(O,{onModalChange:c}),e.jsx("div",{onClick:()=>t(null),className:"absolute inset-0 bg-gray-950/70 backdrop-blur cursor-pointer -z-20"})]})]})}export{G as default};
