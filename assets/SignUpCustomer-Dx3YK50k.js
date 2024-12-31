import{b as f,c as h,u as y,j as e,aP as j,aQ as r,aR as w,aS as N}from"./index-B95hrIzf.js";import{u as v}from"./index.esm-dRLTr8gn.js";import{S}from"./index-BihAjOUM.js";import{T as U}from"./TextInput-DneEYE3k.js";import{s as C}from"./formInputsInfo-S6NU7B-M.js";const T="https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ffisrt-step-figure-removebg-preview-6630e8a5af594.webp?alt=media&token=8e2e91b9-95a1-4416-866a-1bfe555ce0c9";function H(){const{loading:t}=f(s=>s.userData),{register:n,handleSubmit:o,formState:{errors:c},watch:d}=v(),a=h(),m=y();function x(s){a(N({method:"signUpEmail",userType:"customer",email:s.email,password:s.password}))}return e.jsxs("div",{className:"flex items-center justify-center gap-x-4 md:gap-x-6 lg:gap-x-14",children:[e.jsxs("div",{className:"md:w-1/2",children:[e.jsxs("div",{className:"text-center flex flex-col gap-y-2 md:gap-y-6 md:mb-6 md:w-4/5 px-2",children:[e.jsxs("h4",{className:"text-3xl font-medium md:text-start md:text-5xl",children:["Welcome To ",e.jsx("span",{className:"text-primary-500",children:"Eco Vibe"})]}),e.jsx("p",{className:"md:text-start",children:"Join the Eco Vibe Community: Shop Sustainably, Live Mindfully! 🌍"})]}),e.jsxs("form",{onSubmit:o(s=>x(s)),className:"mt-4 flex flex-col items-center md:items-stretch gap-y-4 px-2",children:[e.jsx("div",{className:"grid lg:grid-rows-2 gap-x-4 lg:grid-cols-2 w-full",children:Object.entries(C).map(([s,{placeholder:p,validation:g,type:u}],i)=>{var l;return e.jsx(U,{type:u,placeholder:p,register:n(s,{...g,validate:b=>s==="password_repeat"?b===d().password||"Passwords do not match":!0}),error:(l=c[s])==null?void 0:l.message,style:`${i===0&&"lg:col-span-2"} [&>input]:py-3 h-fit`},i)})}),e.jsxs("div",{className:"flex flex-col gap-y-4 w-full",children:[e.jsxs("button",{type:"submit",disabled:t,className:"flex items-center w-full justify-between gap-x-2 px-4 py-3 bg-primary-700 hover:bg-primary-600 disabled:bg-opacity-50 disabled:animate-pulse transition-all rounded-md",children:[e.jsx("span",{className:"text-gray-50 text-2xl md:text-3xl w-1/6 md:w-fit",children:e.jsx(j,{})}),e.jsx("span",{className:"text-gray-50 flex-1 md:text-lg",children:"Create New Account"})]}),e.jsxs("button",{type:"button",onClick:()=>m("/EcoVibe/sign-in"),className:"relative w-full flex items-center justify-center",children:[e.jsx("p",{className:"bg-white px-2 hover:font-bold transition-all ease-linear",children:"Already have account? Sign in"}),e.jsx("p",{className:"w-full absolute h-0.5 bg-gray-300 -z-10 top-1/2"})]}),e.jsxs("button",{onClick:()=>{a(r({method:"gitHub",userType:"customer"}))},disabled:t,type:"button",className:"flex items-center justify-between gap-x-2 px-4 py-3 bg-gray-950 hover:bg-gray-800 disabled:bg-opacity-50 disabled:animate-pulse transition-all rounded-md",children:[e.jsx("span",{className:"text-gray-50 text-2xl md:text-3xl w-1/6 md:w-fit",children:e.jsx(w,{})}),e.jsx("span",{className:"text-gray-50 flex-1 md:text-lg",children:"Sign Up with GitHub"})]}),e.jsxs("button",{onClick:()=>{a(r({method:"google",userType:"customer"}))},type:"button",disabled:t,className:"flex items-center justify-between gap-x-2 px-4 py-2 border border-gray-300 bg-gray-50 disabled:bg-opacity-50 disabled:animate-pulse hover:bg-gray-100 transition-all rounded-md",children:[e.jsx("span",{className:"text-red-700 text-2xl md:text-3xl w-1/6 md:w-fit",children:e.jsx(S,{})}),e.jsx("span",{className:"text-gray-900 flex-1 md:text-lg",children:"Sign Up with Gmail"})]})]})]})]}),e.jsx("div",{className:"hidden lg:block w-1/3",children:e.jsx("img",{src:T,alt:"icon-figure",className:"w-11/12"})})]})}export{H as default};
