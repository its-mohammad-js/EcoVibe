import{r as d,b as p,j as e,aJ as f,aP as g,aO as u,bc as b,bd as y,be as j,bf as h}from"./index-KofMtEW3.js";function U({onPicChange:c,onModalClose:t}){const[{picUrl:o,loading:i,error:N},r]=d.useState({picUrl:"",loading:!1,error:""}),{personalInformation:{profilePic:n}}=p(s=>s.userData);d.useEffect(()=>{r(s=>({...s,picUrl:n}))},[n]);async function m(s){try{r(x=>({...x,loading:!0}));const a=b(y,`/Profile Images/Users/${s.name}`);await j(a,s);const l=await h(a);c(l),t()}catch(a){console.log(a)}finally{r(a=>({...a,loading:!1}))}}if(i)return e.jsxs("div",{className:"fixed inset-0 flex flex-col items-center justify-center z-50 bg-gray-950/50 backdrop-blur-lg",children:[e.jsx(f,{className:"size-24 my-4"}),e.jsx("h6",{className:"text-xl md:text-2xl text-gray-300 font-bold text-center animate-pulse",children:"Uplaoding your profile pic, please dont re-fresh page"})]});if(!i)return e.jsxs("div",{className:"fixed inset-0  md:flex items-center justify-center z-50",children:[e.jsx("div",{onClick:t,className:"hidden md:block fixed inset-0 bg-gray-900/70 backdrop-blur-sm"}),e.jsxs("div",{className:`${i&&"animate-pulse"} absolute inset-0 md:static md:inset-auto md:w-[40rem] md:h-64 lg:h-80 z-10 bg-gray-100 rounded-md md:shadow-2xl md:shadow-gray-600`,children:[e.jsxs("div",{className:"flex items-center justify-between px-2 md:px-4 py-2",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Choose profile :"}),e.jsx("button",{onClick:()=>{c(o),t()},type:"button",className:"px-4 py-2 bg-primary-500 text-gray-50 rounded-md",children:"Done"})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 overflow-auto styled-scroll-bar h-[95%] bg-gray-100",children:[e.jsxs("div",{className:"border relative flex items-center justify-center",children:[e.jsx("input",{onChange:s=>{var a;return m((a=s.target)==null?void 0:a.files[0])},type:"file",accept:"image/*",className:"absolute inset-0 opacity-0 cursor-pointer"}),e.jsx("span",{className:" text-2xl text-primary-800",children:e.jsx(g,{})})]}),u.map((s,a)=>e.jsx("div",{onClick:()=>r(l=>({...l,picUrl:s})),className:`${o===s&&"bg-primary-200"} border transition-all cursor-pointer`,children:e.jsx("img",{src:s,alt:"avatar-pic",className:"size-full object-contain"})},a))]})]})]})}export{U as P};
