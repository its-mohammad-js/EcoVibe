import{j as e,af as N,r as h,b as p,l as w,c as v,Z as C,aP as P,aX as S,k as g,u as j,aY as F,aZ as O,a_ as k}from"./index-KofMtEW3.js";import{S as I}from"./react-select.esm-Dmsd7Mod.js";const E=[{label:"High to Low Price",value:"high_price"},{label:"Low to High Price",value:"low_price"},{label:"Oldest to Newest",value:"oldest"},{label:"Newest to Oldest",value:"newest"}];function q({onFiltersChange:s}){return e.jsxs("div",{className:"flex flex-col md:flex-row gap-2",children:[e.jsxs("div",{className:"p-2 gap-x-2 rounded-md md:flex-1 flex items-center bg-gray-50 border border-gray-300",children:[e.jsx(N,{className:"text-gray-500 text-lg"}),e.jsx("input",{onChange:t=>s("searchQuery",t.target.value),type:"text",className:"bg-transparent h-full flex-1 outline-none",placeholder:"Search In Your Cart"})]}),e.jsx(I,{placeholder:"Sort Orders By",isSearchable:!1,options:E,onChange:({value:t})=>{s("sortValue",t)}})]})}function Q({orderDetails:s}){var x,f;const[t,l]=h.useState(""),{cartData:c,loading:r}=p(n=>n.userData),d=w({maxWidth:480}),m=v();function i(){l(s.orderId);const n=c.filter(({orderId:u})=>u!==s.orderId);m(g({data:n,field:"cartData"}))}function a(n){l(s.orderId);const u={...s,quantity:n==="increase"?s.quantity+1:s.quantity-1},o=[...c],b=o.findIndex(({orderId:y})=>y===s.orderId);o[b]=u,m(g({data:o,field:"cartData"}))}return h.useEffect(()=>{t!==""&&!r&&l("")},[r,t]),e.jsxs("div",{className:`${r&&t===s.orderId&&"animate-pulse bg-gray-200"} bg-gray-100/80 rounded-md flex items-center h-36 md:h-40 px-2 py-1 relative`,children:[e.jsxs("div",{className:"basis-3/6 md:basis-2/12 h-full",children:[e.jsx("img",{src:s.Thumbnail,alt:s.Name,className:"w-full h-full object-cover rounded-md"}),e.jsx("button",{disabled:r,onClick:i,className:"size-8 bg-slate-100 absolute top-1.5 left-1.5 md:left-auto md:right-2 md:text-lg md:size-9 rounded-full text-red-500",children:e.jsx(C,{className:"mx-auto"})})]}),e.jsxs("div",{className:"basis-3/6 md:flex-1 flex flex-col justify-between h-full px-3 py-1.5",children:[e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-xs font-medium md:text-sm line-clamp-1 text-gray-500",children:e.jsx("span",{children:s.Category})}),e.jsxs("h4",{className:"line-clamp-1 md:line-clamp-2 md:text-xl",children:[e.jsx("span",{className:"hidden md:inline text-sm border-b-2 border-b-gray-700 uppercase italic",children:(x=s.selectedOption[0])==null?void 0:x.option})," ",e.jsx("span",{className:"font-medium",children:s.Name}),"  ",e.jsxs("span",{className:"hidden md:inline",children:["* ",s.quantity]})]})]}),e.jsx("div",{className:"flex flex-wrap gap-x-1",children:(f=s.selectedOption)==null?void 0:f.map(({title:n,option:u},o)=>(d?o<2:o>-1)&&e.jsx("div",{style:{backgroundColor:n==="color"&&u},className:`${n==="color"&&"size-5 rounded-full"}`,children:n!=="color"&&e.jsx("div",{className:"flex items-center gap-x-1 text-xs bg-gray-100 text-gray-950 border border-gray-500 w-fit px-2 py-0.5 rounded-xl",children:e.jsx("p",{className:"line-clamp-1",children:u})})},o))}),e.jsx("div",{className:"font-medium",children:e.jsxs("p",{children:["$",s.Price]})})]}),e.jsxs("div",{className:"basis-1/6 md:basis-2/12 h-full flex flex-col md:flex-row md:items-end md:gap-4 items-center justify-between",children:[e.jsx("button",{onClick:()=>a("increase"),className:"w-full h-11 bg-slate-50 border rounded-xl flex items-center justify-center text-gray-900",children:e.jsx(P,{})}),e.jsx("div",{className:"w-8/12 border-b-2 md:mb-2 border-slate-600 text-center",children:s.quantity}),e.jsx("button",{disabled:(s==null?void 0:s.quantity)<=1,onClick:()=>a("decrease"),className:"w-full h-11 bg-slate-50 border rounded-xl flex items-center justify-center text-gray-900 disabled:opacity-50",children:e.jsx(S,{})})]})]})}function M({cartData:s,filters:t}){const[l,c]=h.useState([]),{searchQuery:r,sortValue:d}=t,m=j();return h.useEffect(()=>{let i=s.filter(a=>r.length?a.Name.toLowerCase().includes(r.toLowerCase()):a);i.sort((a,x)=>{switch(d){case"high_price":return Number(x.Price)-Number(a.Price);case"low_price":return Number(a.Price)-Number(x.Price);case"oldest":return a.orderDate-x.orderDate;case"newest":return x.orderDate-a.orderDate;default:return a}}),c(i)},[s,t]),s.length?l.length?e.jsx("div",{className:"mt-4 md:mt-6 grid gap-4 max-h-[30rem] overflow-y-auto styled-scroll-bar",children:l.map((i,a)=>e.jsx(Q,{orderDetails:i},a))}):e.jsx("div",{className:"w-full bg-white absolute right-0 h-[40rem] flex justify-center items-center",children:e.jsxs("h4",{className:"text-4xl text-center font-bold text-primary-800",children:["No products contain the word",e.jsxs("span",{className:"text-primary-500",children:['  "',t==null?void 0:t.searchQuery,'"  ']})," ","in in their names."]})}):e.jsxs("div",{className:"h-screen flex flex-col items-center justify-center gap-4 lg:gap-6",children:[e.jsx("h4",{className:"text-2xl lg:text-4xl text-center font-bold",children:"Oops! 🛒 Your cart is currently empty."}),e.jsx("button",{onClick:()=>m("/EcoVibe/Explore-products/"),className:"bg-primary-500 text-white hover:bg-primary-800 transition-all lg:text-xl px-4 py-2 rounded-md",children:"Explore Products..."})]})}function V(){const{cartData:s}=p(c=>c.userData),t=s.reduce((c,r)=>c+Number(r.Price),0),l=j();return e.jsxs("div",{className:"mt-4 flex flex-col items-center gap-y-3 px-4 py-3 bg-slate-100 rounded-md md:w-80 md:ml-auto",children:[e.jsxs("div",{className:"flex items-center justify-between w-full text-2xl font-medium",children:[e.jsx("h6",{children:"Total :"}),e.jsxs("p",{children:["$",t.toFixed(2)]})]}),e.jsx("p",{className:"text-sm text-gray-500",children:"Shipping,taxes & discounts calcuted"}),e.jsx("button",{onClick:()=>{window.scroll(0,0),l("/EcoVibe/bag/checkout")},className:"py-2 text-lg bg-primary-500 w-full text-gray-50 rounded",children:"Checkout"}),e.jsx("span",{className:"text-sm text-gray-500",children:"Secured Payments By"}),e.jsxs("div",{className:"flex items-center gap-x-4 text-3xl",children:[e.jsx("p",{children:e.jsx(F,{})}),e.jsx("p",{children:e.jsx(O,{})}),e.jsx("p",{children:e.jsx(k,{})})]})]})}function L(){const[s,t]=h.useState({searchQuery:"",sortValue:""}),{cartData:l,loading:c}=p(d=>d.userData);function r(d,m){t(i=>({...i,[d]:m}))}return e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl min-h-screen",children:e.jsxs("div",{id:"wrapper",className:"md:w-10/12 md:mx-auto px-4 py-2 relative",children:[e.jsx(q,{onFiltersChange:r}),e.jsx(M,{cartData:l,filters:s,loading:c}),e.jsx(V,{})]})})}export{L as default};
