import{r as x,u as p,c as u,a as g,j as e,g as h,h as f,f as j}from"./index-lzq7sxkh.js";function b(){const[a,c]=x.useState([]),{userType:i}=p(t=>t.userData),d=u(),n=g();function m(t){let r=a.find(s=>s===t);c(s=>r?s.filter(l=>l!==t):[...s,t])}function o(){d(j({data:a,field:"interests",customer_step:"completed",userType:i==="seller"||i==="both"?"both":"customer"}))}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-y-4 items-center",children:[e.jsxs("h4",{className:"text-3xl font-bold md:text-5xl",children:["Select Your ",e.jsx("span",{className:"text-primary-500",children:"interests"})]}),e.jsx("p",{className:"text-sm text-center md:text-start md:text-lg",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, quos?"})]}),e.jsxs("div",{className:"w-full md:w-2/3 md:mx-auto mt-4 md:mt-6",children:[e.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2 px-2 justify-items-center",children:h.map(({productTypes:t})=>t.map(({title:r},s)=>e.jsxs("button",{onClick:()=>m(r),className:`${a.find(l=>l===r)&&"!border-primary-400 text-primary-400"} flex items-center border-2 rounded-md border-gray-400 text-gray-400 hover:border-primary-300 hover:text-primary-300 transition-all px-3 py-2 w-11/12 md:w-56 gap-x-2`,children:[e.jsx("span",{className:"text-xl",children:e.jsx(f,{})}),e.jsx("h6",{className:"lg:text-lg font-medium text-start line-clamp-1",children:r})]},s)))}),e.jsxs("div",{className:"mt-4 w-full flex items-center justify-end gap-x-4 px-4",children:[e.jsx("button",{disabled:!a.length,onClick:()=>o(),className:"px-4 py-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all bg-primary-500 rounded-md text-white md:text-lg",children:"Done"}),e.jsx("button",{onClick:()=>n("/EcoVibe/"),className:"text-primary-500 md:text-lg",children:"Skip..."})]})]})]})}export{b as default};
