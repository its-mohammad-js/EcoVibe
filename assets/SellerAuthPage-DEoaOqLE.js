import{u as d,a as u,r as m,_ as l,j as e,l as x,O as p}from"./index-lzq7sxkh.js";const f=[{step:"first-step",num:1,title:"Register"},{step:"second-step",num:2,title:"Your Bussines Info"},{step:"third-step",num:3,title:"Add First Product"}];function g(){const{seller_step:s,loading:i,auth_status:n}=d(t=>t.userData),a=u();return m.useEffect(()=>{switch(s){case"first-step":a("/EcoVibe/Sellers/sign-up");break;case"second-step":l.success("Please add your business Information"),a("/EcoVibe/Sellers/business-details");break;case"third-step":l.success("You are already a seller"),a("/EcoVibe/dashboard/Analytics/add-product");break;default:throw new Error("Error : Unknown Step")}},[s]),i&&n===204?e.jsxs("div",{className:"h-screen flex items-center justify-center flex-col",children:[e.jsx("img",{src:x,alt:"loading-icon",className:"size-40"}),e.jsx("h4",{className:"my-2 text-2xl font-bold",children:"Just a moment while we get things ready..."})]}):e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl",children:[e.jsx("div",{className:"mx-auto w-fit flex items-center justify-evenly gap-x-5 my-6 relative",children:f.map(({step:t,title:c,num:o},r)=>e.jsxs("div",{className:"flex flex-col items-center w-1/3 h-32 gap-y-2",children:[e.jsx("div",{className:`${s===t?"bg-primary-500 text-white":"text-primary-500 border-2 border-primary-500 bg-gray-50"} size-16 rounded-full flex items-center justify-center text-3xl transition-all`,children:e.jsxs("p",{className:"flex relative items-center justify-center",children:[e.jsx("span",{children:o}),r!==2&&e.jsx("span",{className:`${t===s?"bg-primary-500":"bg-gray-200"} w-24 -z-10 h-1 -right-24 absolute`})]})}),e.jsx("p",{className:"text-center font-medium line-clamp-2",children:c})]},r))}),e.jsx(p,{})]})}export{g as default};
