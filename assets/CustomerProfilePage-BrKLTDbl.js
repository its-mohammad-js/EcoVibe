import{r as b,b as g,c as h,j as e,aP as N,bb as w,l as j,A as I,i as v,b3 as C,u as P,bc as S}from"./index-ChGSuyC4.js";import{P as E}from"./ProfileImagePicker-B43SSCX6.js";import{u as k}from"./index.esm-B0Q2-dhH.js";import{T as D}from"./TextInput-D_gnO7w9.js";import{S as z}from"./index-Dl-l_Lau.js";import{A as T}from"./AddCreditCardForm-5Wa8NRql.js";import"./react-select.esm-DdBS4_WQ.js";function U(){const[{modalIsShow:d},i]=b.useState({profilePicUrl:"",modalIsShow:!1}),{loading:n,personalInformation:c}=g(t=>t.userData),r=h();function x(t){const a={...c,profilePic:t};r(j({data:a,field:"personalInformation"}))}return n?e.jsxs("div",{className:"fixed inset-0 backdrop-blur bg-gray-950/70 gap-y-4 flex flex-col items-center justify-center z-50",children:[e.jsx(N,{className:"size-24"}),e.jsx("h4",{className:"text-2xl text-gray-50 font-bold animate-pulse text-center",children:"Update you info, please don't refresh page..."})]}):e.jsxs("div",{className:"flex items-center justify-between mb-4 relative",children:[e.jsxs("div",{className:"size-20 flex items-center justify-center md:size-24 rounded-full bg-gray-100 relative",children:[n?e.jsx(N,{className:"size-12"}):e.jsx("img",{src:c.profilePic,alt:"profile picture",className:"size-full rounded-full"}),e.jsx("button",{onClick:()=>{i(t=>({...t,modalIsShow:!0}))},className:"p-2 md:text-lg bg-primary-600 text-gray-50 rounded-full absolute -bottom-1.5 right-0",children:e.jsx(w,{})})]}),e.jsx("div",{className:`${d?"visible opacity-100":"invisible opacity-0"} absolute transition-all duration-300 z-50`,children:e.jsx(E,{onPicChange:x,onModalClose:()=>{i(t=>({...t,modalIsShow:!1}))}})})]})}function A(){const{register:d,formState:{isDirty:i},setValue:n,handleSubmit:c}=k(),{personalInformation:r,loading:x}=g(s=>s.userData),{first_name:t,last_name:a,address:l,birthday:m}=r,u=h();b.useEffect(()=>{Object.entries({first_name:t,birthday:m,last_name:a,address:l}).forEach(([s,o])=>{n(s,o)})},[t,m,a,l]);function p(s){let o={...r};Object.entries(s).forEach(([f,y])=>{o[f]=y}),u(j({data:o,field:"personalInformation"}))}return e.jsxs("form",{onSubmit:c(s=>{p(s)}),className:"bg-white px-4 h-96 pt-4 border border-gray-400 rounded-md mt-2 flex flex-col gap-10 relative",children:[e.jsx("button",{className:"absolute right-3 -top-4 px-4 py-2 text-gray-50 rounded-md transition-all bg-primary-500",children:"Save Changes"}),Object.entries({first_name:t,last_name:a,birthday:m,address:l}).map(([s],o)=>e.jsx(D,{label:s.replace("_"," "),register:d(s,{required:"this field is required"}),placeholder:s,disable:x,type:s!=="birthday"?"text":"date",style:"[&>label]:text-base m t-6"},o))]})}function F(){const[d,i]=b.useState([]),{interests:n,loading:c}=g(a=>a.userData),r=h();b.useEffect(()=>{i(n)},[n]);function x(a){i(l=>v(l,a)?l.filter(m=>m!==a):[...l,a])}function t(){r(j({data:d,field:"interests"}))}return e.jsxs("div",{className:`${c&&"animate-pulse"} bg-white px-4 py-2 border border-gray-400 rounded-md mt-2`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h6",{className:"text-base font-bold",children:"Your Interests :"}),e.jsx("button",{onClick:t,className:"text-sm px-3 py-1.5 bg-primary-500 text-gray-50 rounded-md transition-all",children:"Update interests"})]}),e.jsx("div",{className:"w-full grid grid-cols-2 gap-2 py-2",children:I.map(({productTypes:a})=>a.map(({title:l},m)=>e.jsx("button",{onClick:()=>x(l),disabled:c,className:`${v(d,l)?"border-primary-500 text-primary-500":"border-gray-300 text-gray-400"} border-2 rounded-md px-4 py-2 flex items-center justify-center transition-all disabled:animate-pulse disabled:cursor-wait`,children:e.jsx("p",{className:"text-xs text-center line-clamp-1 font-medium",children:l})},m)))})]})}function $(){const[d,i]=b.useState(!1),{loading:n,personalInformation:c}=g(u=>u.userData),{creditCards:r}=c,x={dots:!0,infinite:!0,arrows:!1,speed:1200,slidesToShow:1,slidesToScroll:1,appendDots:l},t=b.useRef(null),a=h();function l(u){var s;const p=(s=t==null?void 0:t.current)==null?void 0:s.innerSlider.state.currentSlide;return e.jsx("div",{className:"w-full bg-red-600",children:u.map((o,f)=>e.jsx("button",{className:`${p===f?"bg-primary-700":"bg-gray-500"} p-1 lg:p-1.5 mx-0.5 rounded-full transition-all`},f))})}function m(u,p){const s=r==null?void 0:r.filter(o=>o.cardId!==u);a(j({data:{...c,creditCards:s},field:"personalInformation"}))}return e.jsxs("div",{className:`${n&&"animate-pulse"} bg-gray-50 px-4 pt-2 pb-8 border border-gray-400 rounded-md mt-2`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h6",{className:"text-base font-bold",children:"Your Credit Cards :"}),e.jsx("button",{onClick:()=>i(!0),className:"px-3 py-1.5 bg-primary-500 rounded-md text-sm text-white",children:"Add Card"})]}),e.jsx("div",{className:"relative",children:e.jsx(z,{ref:t,...x,className:"w-full mt-2 relative",children:r==null?void 0:r.map(({provider:u,name:p,code_number:s,cvv:o,cardId:f},y)=>e.jsxs("div",{className:"w-full h-48 relative z-10 p-3.5 ",children:[e.jsx("button",{onClick:()=>m(f),className:"absolute text-red-400 text-3xl",children:e.jsx(C,{})}),e.jsx("div",{className:"absolute inset-0 -z-10 bg-gradient-to-br from-primary-300 to-primary-950 rounded-2xl",children:e.jsx("img",{src:u.bgUrl,alt:"card-bg",className:"w-full h-full object-cover object-right rounded-2xl"})}),e.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-end text-gray-200",children:[e.jsx("p",{className:"text-xl font-medium lg:text-2xl mb-2",children:s}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-medium",children:p}),e.jsxs("p",{children:["CVV : ",o]})]})]})]},y))})}),e.jsx("div",{className:`${d?"visible opacity-100":"invisible opacity-0"} transition-all duration-200`,children:e.jsx(T,{onModalClose:()=>i(!1)})})]})}function q(){const d=h(),i=P();function n(){d(S()),i("/EcoVibe/"),window.location.reload()}return e.jsxs("div",{id:"wrapper",className:"2xl:max-w-screen-2xl mx-auto relative md:px-4 md:py-2 gradient-background -mb-8",children:[e.jsxs("div",{className:"w-full h-16 bg-primary-200/50 lg:h-40 lg:rounded-t-md lg:rounded-lg flex items-center justify-between px-2",children:[e.jsxs("h4",{className:"text-white text-xl",children:["MY PROFILE ",e.jsx("br",{}),e.jsxs("span",{className:"text-sm hidden md:inline text-gray-200",children:["Change Your Personal Information, ",e.jsx("br",{})," Add Credit Card, Enjoy Eco Vibe"]})]}),e.jsx("button",{onClick:n,className:"px-3 py-1.5 text-sm md:text-lg bg-gray-300/50 text-white rounded-md",children:"Log out"})]}),e.jsxs("div",{className:"bg-gray-100/70 px-4 py-2 lg:w-4/12 lg:mx-auto lg:-mt-32 md:rounded-md",children:[e.jsx(U,{}),e.jsx(A,{}),e.jsx($,{}),e.jsx(F,{})]})]})}export{q as default};
