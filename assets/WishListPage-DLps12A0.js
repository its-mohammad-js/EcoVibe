import{G as w,j as e,q as k,a_ as f,b as u,c as j,f as L,a5 as C,t as D,l as p,g as E,x as I,u as z,r as P,v as W}from"./index-DNYibs0x.js";function b(s){return w({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249 12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0 12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"},child:[]}]})(s)}function B(){return e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:px-2 md:max-h-[30rem] overflow-auto styled-scroll-bar",children:k(12).map(s=>e.jsxs("div",{className:"flex flex-col items-center h-44 lg:h-56 xl:h-72 bg-gray-100 shadow-md rounded-md relative animate-pulse",children:[e.jsx("div",{className:"absolute top-1.5 md:mx-2 right-1.5 md:right-0",children:e.jsx("button",{className:"text-xl md:text-3xl text-gray-500 transition-all",children:e.jsx(b,{})})}),e.jsx("div",{className:"h-5/6 w-full bg-gradient-to-br from-gray-50 via-gray-400 to-gray-100 rounded-t-md"}),e.jsxs("div",{className:"absolute w-11/12 h-16 md:h-20 bottom-1 rounded-md bg-gray-300/50 backdrop-blur hover:backdrop-blur-xl transition-all duration-700 flex items-center justify-between px-2 py-1.5 md:px-3 md:py-2 gap-x-4",children:[e.jsxs("div",{className:"flex flex-col items-start justify-evenly h-full flex-1",children:[e.jsx("h6",{className:"w-11/12 h-2 bg-gray-500 rounded-md",children:" "}),e.jsx("span",{className:"w-1/2 h-2 bg-gray-500 rounded-md",children:" "}),e.jsx("p",{className:"w-1/5 h-2 bg-gray-500 rounded-md",children:" "})]}),e.jsx("button",{disabled:!0,className:"p-3 text-xl md:text-3xl bg-gray-500 transition-all text-gray-50 rounded-xl",children:e.jsx(f,{})})]})]},s))})}function G(){const{wishlist:s,cartData:a}=u(t=>t.userData),{loading:d,data:i}=u(t=>t.products),h=j();function y(t){const l=D(s,t);h(p({data:l,field:"wishlist"}))}function v({Options:t,Name:l,Thumbnail:n,id:o,Price:x,Category:r}){let m=[];t.forEach(({title:N,options:g})=>{g.length>1&&m.push({title:N,option:g[0]})});const c={orderId:E(o),orderDate:Date.now(),productId:o,Category:r,Name:l,Thumbnail:n,Price:x,quantity:1,selectedOption:m};h(p({data:[...a,c],field:"cartData"}))}return d?e.jsx(B,{}):e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:px-2 md:max-h-[30rem] overflow-auto styled-scroll-bar",children:L(i,{idList:s}).map(({Name:t,Thumbnail:l,Price:n,Options:o,Category:x,id:r},m)=>e.jsxs("div",{className:"flex flex-col items-center h-44 lg:h-56 xl:h-72 bg-gray-100 shadow-md rounded-md relative",children:[e.jsx("div",{className:"absolute top-1.5 md:mx-2 right-1.5 md:right-0",children:e.jsx("button",{onClick:()=>y(r),className:"text-xl md:text-3xl text-red-500 hover:text-red-700 transition-all bg-red-500/10 backdrop-blur rounded-full",children:e.jsx(b,{})})}),e.jsx("div",{className:"h-full w-full",children:e.jsx("img",{src:l,alt:t,className:"w-full h-full rounded-md object-cover cursor-pointer"})}),e.jsxs("div",{className:"absolute w-11/12 h-16 md:h-20 bottom-1 rounded-md bg-gray-300/50 backdrop-blur hover:backdrop-blur-xl transition-all duration-700 flex items-center justify-between px-2 py-1.5 md:px-3 md:py-2 gap-x-4",children:[e.jsxs("div",{className:"flex flex-col items-start justify-evenly gap-y-0.5 md:gap-y-0 flex-1",children:[e.jsx("h6",{className:"text-sm md:text-lg font-bold text-gray-700 line-clamp-1 cursor-pointer hover:text-primary-600",children:t}),e.jsx("span",{className:"text-xs md:text-base line-clamp-1 text-gray-900 cursor-pointer hover:text-primary-600",children:x}),e.jsxs("p",{className:"text-xs md:text-base font-medium text-primary-600",children:["$",n]})]}),e.jsx("button",{onClick:()=>{v({Options:o,Name:t,Thumbnail:l,id:r,Price:n,Category:x})},disabled:a.find(({productId:c})=>c===r),className:"p-3 text-xl md:text-3xl bg-primary-500 hover:bg-primary-800 transition-all text-gray-50 rounded-xl disabled:bg-gray-600",children:a.find(({productId:c})=>c===r)?e.jsx(C,{}):e.jsx(f,{})})]})]},m))})}function A(){const{personalInformation:s,auth_status:a,wishlist:d}=u(i=>i.userData);return e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 gradient-background rounded-md -z-10"}),e.jsxs("div",{className:"w-full h-full py-2 bg-primary-50/50 backdrop-blur-sm rounded-md flex items-center justify-start gap-x-2",children:[e.jsx("div",{className:"size-24 md:size-28 flex items-center justify-center px-2",children:s.profilePic?e.jsx("img",{src:s.profilePic,alt:"profile-pic",className:"rounded-full bg-gray-50/50"}):e.jsx(I,{className:"bg-gray-50/50 text-6xl p-3 rounded-full"})}),e.jsxs("div",{className:"h-full w-fit flex flex-col items-start justify-start gap-y-1",children:[e.jsx("h4",{className:"text-2xl md:text-3xl font-medium",children:a===200?s.first_name||"first name not set!...":"Guest User"}),e.jsxs("p",{className:"text-primary-800",children:["wish-list (",e.jsx("span",{children:d.length}),")"]})]})]})]})}function U(){const{wishlist:s}=u(i=>i.userData),a=j(),d=z();return P.useEffect(()=>{s.length&&a(W({sortBy:""}))},[]),s!=null&&s.length?e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl",children:e.jsxs("div",{id:"wrapper",className:"px-2 py-2 md:px-4 flex flex-col gap-y-4",children:[e.jsx(A,{}),e.jsx(G,{})]})}):e.jsxs("div",{className:"h-screen flex flex-col items-center justify-center",children:[e.jsx("h6",{className:"text-2xl font-bold lg:text-4xl",children:"Wish List Is Empty"}),e.jsx("button",{onClick:()=>d("/EcoVibe/Explore-products/"),className:"px-4 py-2 bg-primary-500 mt-4 rounded-md text-white lg:text-lg",children:"Explore Products"})]})}export{U as default};