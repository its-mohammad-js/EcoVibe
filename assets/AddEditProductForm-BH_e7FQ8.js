import{G as _,j as e,an as E,cX as W,r as N,bs as U,bt as V,bu as Y,bv as K,_ as C,bV as X,cS as Z,ae as R,af as q,ag as L,g as M,A as B,N as H,t as J,i as Q,bn as ee,q as ae,b as se,u as te,a8 as le,b2 as re,ac as oe}from"./index-Bc-LpspM.js";import{a as k,u as ie,F as ne}from"./index.esm-DKiaTbqJ.js";import{d as ce}from"./index-DxCiKNqn.js";import{S as z,a as de}from"./react-select.esm-pku_R0nG.js";import{l as A}from"./lodash-BgJ17PjB.js";import{u as me}from"./useGetOptions-DPKAixv-.js";function ge(i){return _({tag:"svg",attr:{version:"1.1",viewBox:"0 0 18 16"},child:[{tag:"path",attr:{d:"M17 2h-1v-1c0-0.55-0.45-1-1-1h-14c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h1v1c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-12c0-0.55-0.45-1-1-1zM2 3v10h-0.998c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996c0.001 0.001 0.001 0.001 0.002 0.002v0.998h-12c-0.55 0-1 0.45-1 1v0zM17 14.998c-0.001 0.001-0.001 0.001-0.002 0.002h-13.996c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996c0.001 0.001 0.001 0.001 0.002 0.002v11.996z"},child:[]},{tag:"path",attr:{d:"M15 5.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5z"},child:[]},{tag:"path",attr:{d:"M16 14h-12v-2l3.5-6 4 5h1l3.5-3z"},child:[]}]})(i)}const F=({url:i,fileId:n,onRemove:l,isFailed:r,isUploaded:t,loading:{isUploading:p,targetId:c}})=>{const y=p&&(c===i||c===n);return e.jsxs("div",{className:"relative bg-gray-300 size-24 flex-none overflow-hidden rounded-lg",children:[e.jsx("img",{src:i,alt:"preview",className:`${y&&"animate-pulse"} w-full h-full object-cover rounded-md`}),e.jsx("button",{type:"button",disabled:y,onClick:l,className:"absolute disabled:hidden z-10 top-1 right-1 text-xl bg-white text-red-500 p-1 rounded-full",children:e.jsx(E,{})}),r&&e.jsx("button",{type:"button",className:"absolute bottom-1 right-1 bg-white text-gray-500 p-1 rounded-full",children:e.jsx(ce,{})}),t&&!y&&e.jsx("div",{className:"absolute inset-0 bg-primary-500/80 flex items-center justify-center text-white",children:e.jsx(W,{className:"text-7xl"})})]})},pe=({isEdit:i,uploadState:n,setUploading:l})=>{const{setValue:r,getValues:t,watch:p}=k(),[c,y]=N.useState([]),u=p("Images")||[],v=s=>{var x,h;if(((x=p("Images"))==null?void 0:x.length)+s.length>=6||((h=p("Images"))==null?void 0:h.length)+c.length>=6){C.error("you can only add 5 images per product");return}let d=[];s.forEach((m,a)=>{X(m,50,o=>{d.push({id:M(a),file:o})})}),y(m=>[...m,...d])},g=N.useCallback(async({file:s,id:d})=>{try{l({isUploading:!0,targetId:d});const x=U(V,`Products Images/${p("Category")}/${p("name")}-${d}`);await Y(x,s);const h=await K(x);r("Images",[...p("Images")||[],h]),y(m=>m.filter(a=>a.id!==d)),l({isUploading:!1,targetId:null})}catch(x){C.remove(),C("there was an error on uploading, please try again later"),console.log(x),l({isUploading:!1,targetId:null})}},[t,u,r]),I=async()=>{for(const s of c)await g(s)},w=async(s,d,x)=>{try{if(s){l({isUploading:!0,targetId:s});const h=U(V,s);if(await Z(h),x){const m=u.filter(a=>a!==s);r("Images",m)}l({isUploading:!1,targetId:null})}else y(h=>h.filter(m=>m.id!==d))}catch(h){if(h.code==="storage/object-not-found"){const m=u.filter(o=>o!==s),a=R(q,"Products",t().id);await L(a,{...t(),Images:m,Thumbnail:m[0]||""}),r("Images",m)}}};return N.useEffect(()=>{if(i&&u.length){const s=[...new Set(u)];(s.length!==u.length||!s.every((d,x)=>d===u[x]))&&r("Images",s)}},[u,i,r]),e.jsxs("div",{className:"lg:h-96 relative flex flex-col gap-3 lg:justify-between",children:[e.jsx("h4",{className:"text-xl font-bold",children:"Select Images:"}),e.jsxs("div",{className:"w-full relative h-60 lg:flex-1 flex flex-col items-center justify-center border-2 border-dotted border-primary-300 rounded-md gap-y-2",children:[e.jsx("input",{type:"file",multiple:!0,accept:"image/jpeg, image/webp, image/png, image/gif",className:"absolute inset-0 opacity-0 cursor-pointer",onChange:s=>{v([...s.target.files]),s.target.value=""}}),e.jsx(ge,{className:"text-4xl text-primary-400"}),e.jsx("h6",{className:"text-lg text-primary-400",children:"Add New Image"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Supports only ",e.jsx("span",{className:"font-semibold",children:"WEBP"})]})]}),e.jsxs("div",{className:"overflow-auto horizontal-scroll-bar w-full flex gap-x-4 py-2",children:[u.map((s,d)=>e.jsx(F,{url:s,onRemove:()=>w(s,null,!0),isUploaded:!0,loading:n},d)),c.map(({id:s,file:d})=>e.jsx(F,{fileId:s,url:URL.createObjectURL(d),onRemove:()=>w(null,s,!1),onRetry:()=>g({id:s,file:d}),loading:n},s))]}),e.jsx("button",{type:"button",disabled:c.length===0||n.isUploading,className:"px-4 py-2 bg-primary-500 text-white rounded disabled:bg-gray-400",onClick:I,children:n.isUploading?"Uploading...":"Upload"})]})},O={Name:{required:"Please choose a name",minLength:{value:3,message:"Min length is 3 characters"},pattern:{value:/^[a-zA-Z0-9 ]+$/,message:"Name can only contain letters and numbers"}},Category:{required:"Select Cateogry"},Type:{required:"Choose Product Type"},Description:{required:"This field is reqired"},Price:{required:"This field is reqired",max:{value:1e3,message:"Max price is $1000"},min:{value:1,message:"Max price is $1"},pattern:{value:/^(?!0\d)(\d+(\.\d{1,2})?)$/,message:"Invalid number, please enter price in N.NN format"}}};function ue({isEdit:i}){var p,c,y,u,v,g,I,w,s,d,x,h,m,a;const{register:n,setValue:l,watch:r,formState:{errors:t}}=k();return e.jsxs("div",{className:"flex flex-col gap-y-2 mb-6 lg:basis-2/5",children:[e.jsxs("div",{className:"grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Product Name :"}),e.jsx("input",{autoFocus:i,type:"text",...n("Name",{...O.Name}),className:"px-3 py-2 border border-gray-300 rounded-md w-full outline-none focus:border-primary-400/50 transition-all",placeholder:"Enter Your Product Title"}),e.jsx("p",{className:"text-red-500 px-1",children:(p=t==null?void 0:t.Name)==null?void 0:p.message})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Category :"}),e.jsx(z,{isSearchable:!1,menuShouldScrollIntoView:!1,options:xe,...n("Category",{...O.Category}),onChange:({value:o})=>{l("Category",o),l("Type",void 0),l("Collection",void 0)},placeholder:(c=r())!=null&&c.Category?(y=r())==null?void 0:y.Category:"Add Category",isDisabled:i}),e.jsx("p",{className:"text-red-500 px-1",children:(u=t==null?void 0:t.Category)==null?void 0:u.message})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Product Type :"}),N.createElement(z,{menuShouldScrollIntoView:!1,...n("Type",{required:"Choose Product Type"}),onChange:({value:o})=>l("Type",o),options:D((v=r())==null?void 0:v.Category,"productTypes"),placeholder:(g=r())!=null&&g.Type?(I=r())==null?void 0:I.Type:"Select type",isDisabled:i,key:(w=r())==null?void 0:w.Category,isSearchable:!1}),e.jsx("p",{className:"text-red-500 px-1",children:(s=t==null?void 0:t.Type)==null?void 0:s.message})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Collection :"}),N.createElement(z,{menuShouldScrollIntoView:!1,...n("Collection"),onChange:({value:o})=>l("Collection",o),options:D((d=r())==null?void 0:d.Category,"collections"),placeholder:i?(x=r())==null?void 0:x.Collection:"Add Collection",key:(h=r())==null?void 0:h.Category,isSearchable:!1})]})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Tags :"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:H.map(({title:o},f)=>{var j;return e.jsxs("button",{type:"button",onClick:()=>{var b;return l("Tags",J((b=r())==null?void 0:b.Tags,o))},className:`${Q((j=r())==null?void 0:j.Tags,o)?"bg-primary-500 text-gray-50 border-gray-50 [&>span]:inline":"border-primary-300 bg-gray-50 text-primary-500 [&>span]:hidden"} flex items-center gap-1 px-2 py-1 rounded-md border transition-all`,children:[e.jsx("p",{children:o}),e.jsx("span",{children:e.jsx(ee,{})})]},f)})})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Description :"}),e.jsx("textarea",{type:"text",rows:8,...n("Description",{...O.Description}),className:"px-3 py-2 border border-gray-300 rounded-md w-full outline-none focus:border-primary-400/50 transition-all resize-none",placeholder:"Write About Your Product"}),e.jsx("p",{className:"text-red-500 px-1",children:(m=t==null?void 0:t.Description)==null?void 0:m.message})]}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h6",{className:"font-semibold lg:text-lg",children:"Price :"}),e.jsx("input",{type:"number",step:"0.01",rows:8,...n("Price",{...O.Price}),className:"px-3 py-2 border border-gray-300 rounded-md w-full outline-none focus:border-primary-400/50 transition-all resize-none",placeholder:"Add Product Price"}),e.jsx("p",{className:"text-red-500 px-1",children:(a=t==null?void 0:t.Price)==null?void 0:a.message})]})]})}const xe=B.map(({title:i})=>({label:i,value:i})),D=(i,n)=>{var l,r;return(r=(l=B.find(({title:t})=>t===i))==null?void 0:l[n])==null?void 0:r.filter(({used:t})=>!t).map(({title:t})=>({label:t,value:t}))};function he(){return e.jsxs("div",{className:"w-full h-80 animate-pulse",children:[e.jsx("h6",{className:"text-center text-3xl font-bold text-primary-300",children:"Load Options..."}),e.jsx("div",{className:"flex flex-col gap-y-4 my-4",children:ae(4).map((i,n)=>e.jsx(de,{isDisabled:!0},n))})]})}function fe({isEdit:i}){var x,h,m;const{setValue:n,getValues:l,watch:r}=k(),[t,p]=N.useState([]),{Type:c}=l(),{error:y,getSupportedOptions:u,loading:v,optionsList:g}=me(c),I=N.useRef();function w(a,o){if(a)return a.map(f=>o.toLowerCase()==="color"?{label:f.name,value:f.code}:{label:f,value:f})}N.useEffect(()=>{i||(p([]),n("Options",[]))},[(x=r())==null?void 0:x.Type,(h=r())==null?void 0:h.Category]);function s(a,o){const f={title:a,options:A.map(o,"value")},j=o.length?[...A.filter(t,b=>b.title!==a),f]:A.filter(t,b=>b.title!==a);p(j),n("Options",j)}function d(a){var j,b,P,T;const o=(j=g.filter(({title:S})=>(S==null?void 0:S.toLowerCase())==="color")[0])==null?void 0:j.options;return(T=(P=(b=r("Options"))==null?void 0:b.filter(({title:S})=>S===a)[0])==null?void 0:P.options)==null?void 0:T.map(S=>{var $;return{label:(a==null?void 0:a.toLowerCase())==="color"?($=o.filter(({code:G})=>G===S)[0])==null?void 0:$.name:S,value:S}})}if(y&&!g.length)return e.jsxs("div",{className:"h-80 flex flex-col items-center justify-center gap-y-4",children:[e.jsx("h6",{className:"text-2xl font-bold",children:"Failed To Get Product Options..."}),e.jsx("button",{onClick:()=>u(),className:"px-4 py-2 rounded-md bg-primary-500 text-gray-50",children:"Try Again"})]});if(v)return e.jsx(he,{});if(!v&&(g!=null&&g.length))return e.jsxs("div",{children:[e.jsxs("div",{className:"text-center my-2",children:[e.jsx("h4",{className:"text-3xl font-bold",children:"Select Options"}),e.jsxs("p",{className:"leading-6 text-sm",children:["This user-friendly interface allows admins to quickly add new products or update existing ones with ease ✏️. Key fields like product name, price, description, and category are neatly organized 🛍️.",e.jsx("span",{className:"hidden lg:inline",children:"  Admins can upload product images 📸 and set stock availability directly from the modal. Validation ensures correct data entry ✅, while real-time previews offer clarity 👀. Whether launching a new item or tweaking details, the modal streamlines operations for a smooth e-commerce experience 💼."})]})]}),e.jsxs("div",{className:"",children:[e.jsx("h6",{className:"text-xl font-bold",children:"Options List :"}),e.jsx("div",{ref:I,className:"flex flex-col gap-y-4 my-2",children:g.map(({title:a,options:o,once:f},j)=>e.jsx("div",{className:"option",children:e.jsx(z,{onChange:b=>s(a,f?[b]:b),isMulti:!f,value:d(a),options:w(o,a),placeholder:`Choose ${a}`,isSearchable:!1})},j))})]},(m=r())==null?void 0:m.Type)]})}function ye({isEdit:i,onModalChange:n,currentStep:l,setCurrentStep:r}){var u;const{watch:t}=k(),[p,c]=N.useState({isUploading:!1,targetId:null}),y=()=>l===1?n():r(v=>Math.max(v-1,1));return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"lg:max-h-[55vh] flex md:block items-center justify-center flex-1 overflow-y-auto overflow-x-hidden styled-scroll-bar scroll-smooth px-2 py-1.5 relative",children:[e.jsx("div",{className:`${l===1?"visible opacity-100 static translate-x-0":"invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"} transition-all duration-500 size-full`,children:e.jsx(ue,{isEdit:i})}),e.jsx("div",{className:`${l===2?"visible opacity-100 static translate-x-0":"invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"} transition-all duration-500 `,children:e.jsx(fe,{isEdit:i,currentStep:l})}),e.jsx("div",{className:`${l===3?"visible opacity-100 static translate-x-0":"invisible opacity-0 absolute -top-96 -translate-y-96 -translate-x-96"} transition-all duration-500 size-full`,children:e.jsx(pe,{isEdit:i,uploadState:p,setUploading:c})})]}),e.jsxs("div",{className:"flex items-center justify-end my-2 gap-x-2",children:[e.jsx("button",{type:"button",disabled:i&&l===3||l===3&&!((u=t("Images"))!=null&&u.length),onClick:y,className:"px-4 py-2 lg:w-1/6 border-2 rounded-md border-gray-600 text-gray-900 hover:border-primary-800 hover:text-primary-800 transition-all disabled:opacity-50",children:l===1?"Close":"Back"}),e.jsx("button",{disabled:p.isUploading,type:"submit",className:"px-4 py-2 disabled:cursor-not-allowed disabled:animate-pulse bg-primary-500 text-gray-50 rounded-md border-2 border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all lg:w-1/5",children:l!==3?"Next":"Submit"})]})]})}const be=[{step:1,title:"General Info"},{step:2,title:"Options"},{step:3,title:"Images"}];function Pe({onModalChange:i,isEdit:n,selectedProduct:l,getProducts:r}){const{userId:t,businessInformation:p,personalInformation:c}=se(a=>a.userData),[y,u]=N.useState(!1),v=ie({defaultValues:{Collection:"",Tags:[]}}),[g,I]=N.useState(1),{setValue:w,watch:s,handleSubmit:d}=v,x=te();le(480),N.useEffect(()=>{n&&Object.entries(l).forEach(([a,o])=>{w(a,o)})},[n,l,w]);function h(){var P;const{Name:a,Type:o,Category:f,Price:j}=s(),b=s().Options;if(g===1&&(!(a!=null&&a.length)||!o||!f||!j)){C.error("Please complete the product information form");return}else if(g===2&&!b.length){C("Add at least one option");return}else if(g===3)if(((P=s())==null?void 0:P.Images.length)>0){m();return}else C.error("add one image at least");I(T=>Math.min(T+1,3))}async function m(a){var j;if(g!==3){h();return}const o=n?s().id:M(t),f={...s(),Images:A.uniq(s("Images")||[]),Thumbnail:((j=s())==null?void 0:j.Images[0])||"",SellerId:t,SellerName:(p==null?void 0:p.business_name)||(c==null?void 0:c.fisrt_name)||"",SellerEmail:(c==null?void 0:c.email)||"",SellerProfile:(c==null?void 0:c.profilePic)||"",createdByUser:!0,createdAt:oe()};try{u(!0),await L(R(q,"Products",o),f),n?(C.success("your changes sumbitted"),r(),i()):(C.success("Product Uploaded Succesfully !"),x(`/EcoVibe/Products/${o}`)),u(!1)}catch(b){u(!1),console.log(b)}}return e.jsxs(ne,{...v,children:[e.jsxs("form",{onSubmit:d(m),className:"px-4 size-full bg-gray-50 relative py-2 lg:px-6 lg:py-4 flex flex-col lg:gap-4 lg:w-[50vw] xl:w-[40vw] md:h-5/6 lg:h-auto mx-auto lg:border border-gray-200 lg:shadow hover:shadow-2xl transition-all duration-300 rounded-md",children:[e.jsx("div",{className:"flex items-center justify-evenly lg:justify-center lg:gap-x-6 my-4",children:be.map(({step:a,title:o},f)=>e.jsxs("div",{className:"flex flex-col items-center justify-center text-center gap-2 transition-all",children:[e.jsxs("p",{className:`${g===a?"bg-primary-500 text-gray-50":"border border-primary-500 text-primary-500 bg-gray-50"} size-14 rounded-full flex items-center justify-center text-2xl relative`,children:[a,a<3&&e.jsx("p",{className:`${a===g?"bg-primary-500":"bg-gray-300"} absolute -right-9 -z-10 w-10 h-1`})]}),e.jsx("span",{className:`${g===a?"text-primary-500 font-bold":"text-primary-400"} text-sm`,children:o})]},f))}),y&&e.jsxs("div",{className:"absolute inset-0 bg-gray-50 z-50 flex items-center gap-4 justify-center flex-col",children:[e.jsx(re,{className:"size-24"}),e.jsxs("h4",{className:"text-2xl font-bold text-center",children:[n?"Update product info, please dont refresh page":"Add new product, please dont refresh page","..."]})]}),e.jsx(ye,{isEdit:n,onModalChange:i,currentStep:g,setCurrentStep:I,onSubmitProduct:d(m)})]}),e.jsx("div",{onClick:()=>{var a;if(n)if(g!==3||!((a=s("Images"))!=null&&a.length))i();else{C.remove(),C.error("Plase submit your changes...");return}i()},className:"absolute inset-0 bg-gray-950/70 backdrop-blur cursor-pointer -z-10"})]})}export{Pe as A};
