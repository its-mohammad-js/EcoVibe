import{G as L,j as e,ad as B,db as G,r as b,bb as k,bc as z,bd as _,be as E,cB as W,b0 as F,ar as D,b1 as R,g as q,A as M,N as K,t as Y,i as Z,b5 as H,q as J,b as Q,u as X,a8 as ee,aK as te,_ as S,dc as se}from"./index-C-z8IuQm.js";import{a as A,u as ae,F as le}from"./index.esm-DNj3cSOY.js";import{d as re}from"./index-BZtVX8-a.js";import{S as T}from"./react-select.esm-DXVZApao.js";import{S as oe}from"./Select-49a62830.esm-DtOmZPdr.js";import{l as O}from"./lodash-Brc3k7TG.js";import{u as ie}from"./useGetOptions-CnnR9c0F.js";function ne(o){return L({tag:"svg",attr:{version:"1.1",viewBox:"0 0 18 16"},child:[{tag:"path",attr:{d:"M17 2h-1v-1c0-0.55-0.45-1-1-1h-14c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h1v1c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-12c0-0.55-0.45-1-1-1zM2 3v10h-0.998c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996c0.001 0.001 0.001 0.001 0.002 0.002v0.998h-12c-0.55 0-1 0.45-1 1v0zM17 14.998c-0.001 0.001-0.001 0.001-0.002 0.002h-13.996c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996c0.001 0.001 0.001 0.001 0.002 0.002v11.996z"},child:[]},{tag:"path",attr:{d:"M15 5.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M16 14h-12v-2l3.5-6 4 5h1l3.5-3z"},child:[]}]})(o)}const $=({url:o,onRemove:r,onRetry:l,isFailed:n,isUploaded:a})=>e.jsxs("div",{className:"relative size-24 flex-none overflow-hidden rounded-lg",children:[e.jsx("img",{src:o,alt:"preview",className:"w-full h-full object-cover rounded-md"}),e.jsx("button",{type:"button",onClick:r,className:"absolute z-10 top-1 right-1 text-xl bg-white text-red-500 p-1 rounded-full",children:e.jsx(B,{})}),n&&e.jsx("button",{type:"button",onClick:l,className:"absolute bottom-1 right-1 bg-white text-gray-500 p-1 rounded-full",children:e.jsx(re,{})}),a&&e.jsx("div",{className:"absolute inset-0 bg-primary-500/80 flex items-center justify-center text-white",children:e.jsx(G,{className:"text-7xl"})})]}),ce=({isEdit:o})=>{const{setValue:r,getValues:l,watch:n}=A(),[a,y]=b.useState([]),[m,v]=b.useState({uploading:!1,failedImages:[]}),g=n("Images")||[],N=s=>{const c=s.map((h,f)=>({id:q(f),file:h}));y(h=>[...h,...c])},d=b.useCallback(async({file:s,id:c})=>{const h=l("Category"),f=l("Name"),p=k(z,`Products Images/${h}/${f}-${c}`);try{v(t=>({...t,uploading:!0})),await _(p,s);const i=await E(p);r("Images",[...g,i]),y(t=>t.filter(x=>x.id!==c)),v(t=>({...t,uploading:!1}))}catch{v(t=>({...t,uploading:!1,failedImages:[...t.failedImages,c]}))}},[l,g,r]),C=async()=>{for(const s of a)await d(s)},w=async(s,c,h)=>{try{if(s){const f=k(z,s);if(await W(f),h){const p=g.filter(i=>i!==s);r("Images",p)}}else y(f=>f.filter(p=>p.id!==c))}catch(f){if(f.code==="storage/object-not-found"){const p=g.filter(t=>t!==s),i=F(D,"Products",l().id);await R(i,{...l(),Images:p,Thumbnail:p[0]||""}),r("Images",p)}}};return b.useEffect(()=>{if(o&&g.length){const s=[...new Set(g)];(s.length!==g.length||!s.every((c,h)=>c===g[h]))&&r("Images",s)}},[g,o,r]),e.jsxs("div",{className:"lg:h-96 relative flex flex-col gap-3 lg:justify-between",children:[e.jsx("h4",{className:"text-xl font-bold",children:"Select Images:"}),e.jsxs("div",{className:"w-full relative h-60 lg:flex-1 flex flex-col items-center justify-center border-2 border-dotted border-primary-300 rounded-md gap-y-2",children:[e.jsx("input",{type:"file",multiple:!0,accept:"image/webp",className:"absolute inset-0 opacity-0 cursor-pointer",onChange:s=>N([...s.target.files])}),e.jsx(ne,{className:"text-4xl text-primary-400"}),e.jsx("h6",{className:"text-lg text-primary-400",children:"Add New Image"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Supports only ",e.jsx("span",{className:"font-semibold",children:"WEBP"})]})]}),e.jsxs("div",{className:"overflow-auto horizontal-scroll-bar w-full flex gap-x-4 py-2",children:[g.map((s,c)=>e.jsx($,{url:s,onRemove:()=>w(s,null,!0),isUploaded:!0},c)),a.map(({id:s,file:c})=>e.jsx($,{url:URL.createObjectURL(c),onRemove:()=>w(null,s,!1),onRetry:()=>d({id:s,file:c}),isFailed:m.failedImages.includes(s)},s))]}),e.jsx("button",{type:"button",disabled:a.length===0||m.uploading,className:"px-4 py-2 bg-primary-500 text-white rounded disabled:bg-gray-400",onClick:C,children:m.uploading?"Uploading...":"Upload"})]})},P={Name:{required:"Please choose a name",minLength:{value:3,message:"Min length is 3 characters"},pattern:{value:/^[a-zA-Z0-9 ]+$/,message:"Name can only contain letters and numbers"}},Category:{required:"Select Cateogry"},Type:{required:"Choose Product Type"},Description:{required:"This field is reqired"},Price:{required:"This field is reqired",max:{value:1e3,message:"Max price is $1000"},min:{value:1,message:"Max price is $1"},pattern:{value:/^(?!0\d)(\d+(\.\d{1,2})?)$/,message:"Invalid number, please enter price in N.NN format"}}};function de({isEdit:o}){var y,m,v,g,N,d,C,w,s,c,h,f,p,i;const{register:r,setValue:l,watch:n,formState:{errors:a}}=A();return e.jsxs("div",{className:"flex flex-col gap-y-2 mb-6 lg:basis-2/5",children:[e.jsxs("div",{className:"grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Product Name :"}),e.jsx("input",{autoFocus:o,type:"text",...r("Name",{...P.Name}),className:"px-3 py-2 border border-gray-300 rounded-md w-full outline-none focus:border-primary-400/50 transition-all",placeholder:"Enter Your Product Title"}),e.jsx("p",{className:"text-red-500 px-1",children:(y=a==null?void 0:a.Name)==null?void 0:y.message})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Category :"}),e.jsx(T,{menuShouldScrollIntoView:!1,options:me,...r("Category",{...P.Category}),onChange:({value:t})=>{l("Category",t),l("Type",void 0),l("Collection",void 0)},placeholder:(m=n())!=null&&m.Category?(v=n())==null?void 0:v.Category:"Add Category",isDisabled:o}),e.jsx("p",{className:"text-red-500 px-1",children:(g=a==null?void 0:a.Category)==null?void 0:g.message})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Product Type :"}),b.createElement(T,{menuShouldScrollIntoView:!1,...r("Type",{required:"Choose Product Type"}),onChange:({value:t})=>l("Type",t),options:V((N=n())==null?void 0:N.Category,"productTypes"),placeholder:(d=n())!=null&&d.Type?(C=n())==null?void 0:C.Type:"Select type",isDisabled:o,key:(w=n())==null?void 0:w.Category}),e.jsx("p",{className:"text-red-500 px-1",children:(s=a==null?void 0:a.Type)==null?void 0:s.message})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Collection :"}),b.createElement(T,{menuShouldScrollIntoView:!1,...r("Collection"),onChange:({value:t})=>l("Collection",t),options:V((c=n())==null?void 0:c.Category,"collections"),placeholder:o?(h=n())==null?void 0:h.Collection:"Add Collection",key:(f=n())==null?void 0:f.Category})]})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Tags :"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:K.map(({title:t},x)=>{var u;return e.jsxs("button",{type:"button",onClick:()=>{var j;return l("Tags",Y((j=n())==null?void 0:j.Tags,t))},className:`${Z((u=n())==null?void 0:u.Tags,t)?"bg-primary-500 text-gray-50 border-gray-50 [&>span]:inline":"border-primary-300 bg-gray-50 text-primary-500 [&>span]:hidden"} flex items-center gap-1 px-2 py-1 rounded-md border transition-all`,children:[e.jsx("p",{children:t}),e.jsx("span",{children:e.jsx(H,{})})]},x)})})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Description :"}),e.jsx("textarea",{type:"text",rows:8,...r("Description",{...P.Description}),className:"px-3 py-2 border border-gray-300 rounded-md w-full outline-none focus:border-primary-400/50 transition-all resize-none",placeholder:"Write About Your Product"}),e.jsx("p",{className:"text-red-500 px-1",children:(p=a==null?void 0:a.Description)==null?void 0:p.message})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Price :"}),e.jsx("input",{type:"number",step:"0.01",rows:8,...r("Price",{...P.Price}),className:"px-3 py-2 border border-gray-300 rounded-md w-full outline-none focus:border-primary-400/50 transition-all resize-none",placeholder:"Add Product Price"}),e.jsx("p",{className:"text-red-500 px-1",children:(i=a==null?void 0:a.Price)==null?void 0:i.message})]})]})}const me=M.map(({title:o})=>({label:o,value:o})),V=(o,r)=>{var l,n;return(n=(l=M.find(({title:a})=>a===o))==null?void 0:l[r])==null?void 0:n.filter(({used:a})=>!a).map(({title:a})=>({label:a,value:a}))};function pe(){return e.jsxs("div",{className:"w-full h-80 animate-pulse",children:[e.jsx("h6",{className:"text-center text-3xl font-bold text-primary-300",children:"Load Options..."}),e.jsx("div",{className:"flex flex-col gap-y-4 my-4",children:J(4).map((o,r)=>e.jsx(oe,{isDisabled:!0},r))})]})}function ue({isEdit:o}){var c,h,f,p,i;const{setValue:r,getValues:l,watch:n}=A(),[a,y]=b.useState([]),{Type:m}=l(),{error:v,getSupportedOptions:g,loading:N,optionsList:d}=ie(m),C=b.useRef();function w(t,x){if(t)return t.map(u=>x.toLowerCase()==="color"?{label:u.name,value:u.code}:{label:u,value:u})}b.useEffect(()=>{o||(y([]),r("Options",[]))},[(c=n())==null?void 0:c.Type,(h=n())==null?void 0:h.Category]),b.useEffect(()=>{r("Options",a)},[a]);function s(t,x){const u={title:t,options:O.map(x,"value")};y(j=>x.length?[...O.filter(j,I=>I.title!==t),u]:O.filter(j,I=>I.title!==t))}if(b.useEffect(()=>{var t,x,u;o&&((x=(t=l())==null?void 0:t.Options)!=null&&x.length)&&y((u=l())==null?void 0:u.Options)},[(p=(f=l())==null?void 0:f.Options)==null?void 0:p.length]),v&&!d.length)return e.jsxs("div",{className:"h-80 flex flex-col items-center justify-center gap-y-4",children:[e.jsx("h6",{className:"text-2xl font-bold",children:"Failed To Get Product Options..."}),e.jsx("button",{onClick:()=>g(),className:"px-4 py-2 rounded-md bg-primary-500 text-gray-50",children:"Try Again"})]});if(N)return e.jsx(pe,{});if(!N&&(d!=null&&d.length))return e.jsxs("div",{children:[e.jsxs("div",{className:"text-center my-2",children:[e.jsx("h4",{className:"text-3xl font-bold",children:"Select Options"}),e.jsxs("p",{className:"leading-6 text-sm",children:["This user-friendly interface allows admins to quickly add new products or update existing ones with ease ✏️. Key fields like product name, price, description, and category are neatly organized 🛍️.",e.jsx("span",{className:"hidden lg:inline",children:"  Admins can upload product images 📸 and set stock availability directly from the modal. Validation ensures correct data entry ✅, while real-time previews offer clarity 👀. Whether launching a new item or tweaking details, the modal streamlines operations for a smooth e-commerce experience 💼."})]})]}),e.jsxs("div",{className:"",children:[e.jsx("h6",{className:"text-xl font-bold",children:"Options List :"}),e.jsx("div",{ref:C,className:"flex flex-col gap-y-4 my-2",children:d.map(({title:t,options:x,once:u},j)=>e.jsx("div",{className:"option",children:e.jsx(T,{onChange:I=>s(t,u?[I]:I),isMulti:!u,options:w(x,t),placeholder:`Choose ${t}`})},j))})]},(i=n())==null?void 0:i.Type)]})}function ge({isEdit:o,onModalChange:r,currentStep:l,setCurrentStep:n}){const{watch:a}=A(),y=()=>l===1?r():n(m=>Math.max(m-1,1));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"max-h-96 lg:max-h-[55vh] overflow-y-auto overflow-x-hidden styled-scroll-bar scroll-smooth px-2 py-1.5 relative",children:[e.jsx("div",{className:`${l===1?"visible opacity-100 static translate-x-0":"invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"} transition-all duration-500`,children:e.jsx(de,{isEdit:o})}),e.jsx("div",{className:`${l===2?"visible opacity-100 static translate-x-0":"invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"} transition-all duration-500`,children:e.jsx(ue,{isEdit:o,currentStep:l})}),e.jsx("div",{className:`${l===3?"visible opacity-100 static translate-x-0":"invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"} transition-all duration-500`,children:e.jsx(ce,{isEdit:o})})]}),e.jsxs("div",{className:"flex items-center justify-end my-2 gap-x-2",children:[e.jsx("button",{type:"button",disabled:o&&l===3||l===3&&a().Images!=="[]",onClick:y,className:"px-4 py-2 lg:w-1/6 border-2 rounded-md border-gray-600 text-gray-900 hover:border-primary-800 hover:text-primary-800 transition-all disabled:invisible",children:l===1?"Close":"Back"}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-primary-500 text-gray-50 rounded-md border-2 border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all lg:w-1/5",children:l!==3?"Next":"Submit"})]})]})}const xe=[{step:1,title:"General Info"},{step:2,title:"Options"},{step:3,title:"Images"}];function we({onModalChange:o,isEdit:r,selectedProduct:l,getProducts:n}){const{userId:a,businessInformation:y,personalInformation:m}=Q(i=>i.userData),[v,g]=b.useState(!1),N=ae({defaultValues:{Collection:"",Tags:[]}}),[d,C]=b.useState(1),{setValue:w,watch:s,handleSubmit:c}=N,h=X();ee(),b.useEffect(()=>{r&&Object.entries(l).forEach(([i,t])=>{w(i,t)})},[r,l,w]);function f(){var I;const{Name:i,Type:t,Category:x,Price:u}=s(),j=s().Options;if(d===1&&(!(i!=null&&i.length)||!t||!x||!u)){S.error("Please complete the product information form");return}else if(d===2&&!j.length){S("Add at least one option");return}else if(d===3)if(((I=s())==null?void 0:I.Images.length)>0){p();return}else S.error("add one image at least");C(U=>Math.min(U+1,3))}async function p(i){var u;if(d!==3){f();return}const t=r?s().id:q(a),x={...s(),Images:O.uniq(s("Images")||[]),Thumbnail:((u=s())==null?void 0:u.Images[0])||"",SellerId:a,SellerName:(y==null?void 0:y.business_name)||(m==null?void 0:m.fisrt_name)||"",SellerEmail:(m==null?void 0:m.email)||"",SellerProfile:(m==null?void 0:m.profilePic)||"",createdByUser:!0,createdAt:se()};try{g(!0),await R(F(D,"Products",t),x),r?(S.success("your changes sumbitted"),n(),o()):(S.success("Product Uploaded Succesfully !"),h(`/EcoVibe/Products/${t}`)),g(!1)}catch(j){g(!1),console.log(j)}}return e.jsxs(le,{...N,children:[e.jsxs("form",{onSubmit:c(p),className:"px-4 bg-gray-50 relative py-2 lg:px-6 lg:py-4 flex flex-col lg:gap-4 w-[95vw] lg:w-[50vw] xl:w-[40vw] h-5/6 lg:h-auto mx-auto lg:border border-gray-200 lg:shadow hover:shadow-2xl transition-all duration-300 rounded-md",children:[e.jsx("div",{className:"flex items-center justify-evenly lg:justify-center lg:gap-x-6 my-4",children:xe.map(({step:i,title:t},x)=>e.jsxs("div",{className:"flex flex-col items-center justify-center text-center gap-2 transition-all",children:[e.jsxs("p",{className:`${d===i?"bg-primary-500 text-gray-50":"border border-primary-500 text-primary-500 bg-gray-50"} size-14 rounded-full flex items-center justify-center text-2xl relative`,children:[i,i<3&&e.jsx("p",{className:`${i===d?"bg-primary-500":"bg-gray-300"} absolute -right-9 -z-10 w-10 h-1`})]}),e.jsx("span",{className:`${d===i?"text-primary-500 font-bold":"text-primary-400"} text-sm`,children:t})]},x))}),v&&e.jsxs("div",{className:"absolute inset-0 bg-gray-50 z-50 flex items-center gap-4 justify-center flex-col",children:[e.jsx(te,{className:"size-24"}),e.jsxs("h4",{className:"text-2xl font-bold text-center",children:[r?"Update product info, please dont refresh page":"Add new product, please dont refresh page","..."]})]}),e.jsx(ge,{isEdit:r,onModalChange:o,currentStep:d,setCurrentStep:C,onSubmitProduct:c(p)})]}),e.jsx("div",{onClick:()=>{if(r)if(d!==3||s().Images!=="[]")o();else{S.remove(),S.error("Plase submit your changes...");return}o()},className:"absolute inset-0 bg-gray-950/70 backdrop-blur cursor-pointer -z-10"})]})}export{we as A};
