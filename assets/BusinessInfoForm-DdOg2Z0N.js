import{r as m,b as y,c as j,j as e,S as N,aQ as v,aR as w,_ as o,k as S}from"./index-DFkV507d.js";import{M as F,a as I}from"./index.esm-D81s5IYm.js";import{u as k}from"./index.esm-CM4jPhL8.js";import{T}from"./TextInput-DICUFf2D.js";const _=[{name:"business_name",placeholder:"enter your business name"},{name:"career_title",placeholder:"what is your services ?"},{name:"slogan",placeholder:"enter your slogan"}];function L(){var u;const{register:i,handleSubmit:p,formState:{errors:n,isValid:x}}=k(),[l,h]=m.useState(null),[a,g]=m.useState(!1),{loading:t,userType:d}=y(s=>s.userData),b=j();async function f(s){if(!await w(l[0],l[1])){o.remove(),o.error("Please select a valid location");return}if(x&&!l){o("Please Add Your Location");return}else{const r={...s,locations:[{lat:l[0],lng:l[1]}]};b(S({userType:d==="customer"||d==="both"?"both":"seller",seller_step:"third-step",field:"businessInformation",data:r}))}}return e.jsx("div",{className:"relative lg:px-6",children:e.jsxs("form",{onSubmit:p(s=>f(s)),className:`${t&&"animate-pulse"} px-4 py-2 flex flex-col gap-4 lg:w-[48%] lg:bg-gray-50/30 lg:border lg:rounded-xl lg:py-4`,children:[e.jsx("h4",{className:"text-xl lg:text-2xl font-semibold text-gray-800",children:"Tell Us About Your Business ;)"}),e.jsxs("div",{className:`${a?"fixed inset-0 h-full":"border-2  rounded-xl relative lg:absolute lg:top-0 lg:w-1/2 lg:right-4 h-80 lg:h-full"}`,children:[e.jsx("button",{type:"button",disabled:t,onClick:()=>g(!a),className:"absolute bottom-2 z-10 right-2 bg-gray-50 rounded-full text-primary-400 transition-all",children:l&&a?e.jsx(N,{className:"text-5xl p-2"}):e.jsx(v,{className:"text-5xl p-1"})}),e.jsx(F,{onClick:s=>h(s.latLng),defaultCenter:[35.77142984637282,51.46089654722849],defaultZoom:11,minZoom:3,maxZoom:10,children:l&&e.jsx(I,{color:"#1632e9",width:50,anchor:l})})]}),_.map(({name:s,placeholder:c},r)=>e.jsxs(e.Fragment,{children:[e.jsxs("label",{htmlFor:s,className:"font-semibold first-letter:uppercase -mb-2",children:[s.replace("_"," ")," :"]}),e.jsx(T,{name:s,id:s,placeholder:c,register:i(s,{required:{value:!0,message:"this field is required"}}),errors:n,disabled:t,style:"!h-10 bg-white"},r)]})),e.jsx("div",{className:"",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Biography :"}),e.jsx("textarea",{type:"text",disabled:t,...i("biography",{required:{value:!0,message:"this field is required"}}),placeholder:"About you...",rows:5,className:"w-full border border-gray-300 px-2 disabled:animate-pulse py-2 rounded-lg outline-none placeholder:text-gray-400 focus:border-gray-300 transition-all resize-none"}),e.jsx("p",{className:"text-sm text-red-500 mt-1",children:(u=n.biography)==null?void 0:u.message})]})}),e.jsx("button",{onClick:()=>window.scrollTo(0,0),className:"px-4 py-2 bg-primary-500 w-fit rounded-md text-gray-50 self-end",children:"Submit"})]})})}export{L as default};
