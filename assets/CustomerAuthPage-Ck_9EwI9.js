import{u,a as m,r as d,_ as a,j as e,V as p,O as x}from"./index-lzq7sxkh.js";const f=[{step:"first-step",num:1,title:"Register",path:"/EcoVibe/Customers/sign-up"},{step:"second-step",num:2,title:"set up Your Profile",path:"/EcoVibe/Customers/personal-details"},{step:"third-step",num:3,title:"Your Interests",path:"/EcoVibe/Customers/user-intersets"}];function g(){const{customer_step:s,auth_status:i,loading:o}=u(r=>r.userData),t=m();return d.useEffect(()=>{switch(s){case"first-step":t("/EcoVibe/Customers/sign-up");break;case"second-step":a.success("Please Add Your Personal Information"),t("/EcoVibe/Customers/personal-details");break;case"third-step":a.success("Add Your Intersets"),t("/EcoVibe/Customers/user-intersets");break;case"completed":a.success("You Are Already signed in "),window.scrollTo(0,0),t("/EcoVibe/");break;default:throw new Error("Error : Unknown Step")}},[s]),o&&i===204?e.jsxs("div",{className:"h-screen flex items-center justify-center flex-col gap-y-4",children:[e.jsx(p,{className:"size-24"}),e.jsx("h4",{className:"my-2 text-2xl font-bold",children:i===204?"Just a moment while we get things ready...":"Update Your Infomation..."})]}):e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl",children:[e.jsx("div",{className:"mx-auto w-fit flex items-center justify-evenly gap-x-5 my-10 relative",children:f.map(({step:r,title:c,num:l},n)=>e.jsxs("div",{className:"flex flex-col items-center w-1/3 h-32 gap-y-2",children:[e.jsx("div",{className:`${s===r?"bg-primary-500 text-white":"text-primary-500 border-2 border-primary-500 bg-gray-50"} w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all`,children:e.jsxs("p",{className:"flex relative items-center justify-center",children:[e.jsx("span",{children:l}),n!==2&&e.jsx("span",{className:`${r===s?"bg-primary-500":"bg-gray-200"} w-14 -z-10 h-1 -right-20 absolute`})]})}),e.jsx("p",{className:"text-center font-medium",children:c})]},n))}),e.jsx(x,{})]})}export{g as default};
