import{G as k,j as e,p as L,aV as f,b as u,c as b,f as C,a4 as E,t as D,k as p,a5 as I,u as B,r as P,s as W}from"./index-Bkyzi3h6.js";function y(t){return k({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249 12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0 12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"},child:[]}]})(t)}function j(){return e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:px-2 md:max-h-[30rem] overflow-auto styled-scroll-bar",children:L(12).map(t=>e.jsxs("div",{className:"flex flex-col items-center h-44 lg:h-56 xl:h-72 bg-gray-100 shadow-md rounded-md relative animate-pulse",children:[e.jsx("div",{className:"absolute top-1.5 md:mx-2 right-1.5 md:right-0",children:e.jsx("button",{className:"text-xl md:text-3xl text-gray-500 transition-all",children:e.jsx(y,{})})}),e.jsx("div",{className:"h-5/6 w-full bg-gradient-to-br from-gray-50 via-gray-400 to-gray-100 rounded-t-md"}),e.jsxs("div",{className:"absolute w-11/12 h-16 md:h-20 bottom-1 rounded-md bg-gray-300/50 backdrop-blur hover:backdrop-blur-xl transition-all duration-700 flex items-center justify-between px-2 py-1.5 md:px-3 md:py-2 gap-x-4",children:[e.jsxs("div",{className:"flex flex-col items-start justify-evenly h-full flex-1",children:[e.jsx("h6",{className:"w-11/12 h-2 bg-gray-500 rounded-md",children:" "}),e.jsx("span",{className:"w-1/2 h-2 bg-gray-500 rounded-md",children:" "}),e.jsx("p",{className:"w-1/5 h-2 bg-gray-500 rounded-md",children:" "})]}),e.jsx("button",{disabled:!0,className:"p-3 text-xl md:text-3xl bg-gray-500 transition-all text-gray-50 rounded-xl",children:e.jsx(f,{})})]})]},t))})}function z(){const{wishlist:t,cartData:l}=u(s=>s.userData),{loading:x,data:m}=u(s=>s.products),h=b();function v(s){const a=D(t,s);h(p({data:a,field:"wishlist"}))}function N({Options:s,Name:a,Thumbnail:i,id:c,Price:o,Category:r}){let n=[];s.forEach(({title:w,options:g})=>{g.length>1&&n.push({title:w,option:g[0]})});const d={orderId:I(c),orderDate:Date.now(),productId:c,Category:r,Name:a,Thumbnail:i,Price:o,quantity:1,selectedOption:n};h(p({data:[...l,d],field:"cartData"}))}return x?e.jsx(j,{}):e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:px-2 md:max-h-[30rem] overflow-auto styled-scroll-bar",children:C(m,{idList:t}).map(({Name:s,Thumbnail:a,Price:i,Options:c,Category:o,id:r},n)=>e.jsxs("div",{className:"flex flex-col items-center h-44 lg:h-56 xl:h-72 bg-gray-100 shadow-md rounded-md relative",children:[e.jsx("div",{className:"absolute top-1.5 md:mx-2 right-1.5 md:right-0",children:e.jsx("button",{onClick:()=>v(r),className:"text-xl md:text-3xl text-red-500 hover:text-red-700 transition-all bg-red-500/10 backdrop-blur rounded-full",children:e.jsx(y,{})})}),e.jsx("div",{className:"h-full w-full",children:e.jsx("img",{src:a,alt:s,className:"w-full h-full rounded-md object-cover cursor-pointer"})}),e.jsxs("div",{className:"absolute w-11/12 h-16 md:h-20 bottom-1 rounded-md bg-gray-300/50 backdrop-blur hover:backdrop-blur-xl transition-all duration-700 flex items-center justify-between px-2 py-1.5 md:px-3 md:py-2 gap-x-4",children:[e.jsxs("div",{className:"flex flex-col items-start justify-evenly gap-y-0.5 md:gap-y-0 flex-1",children:[e.jsx("h6",{className:"text-sm md:text-lg font-bold text-gray-700 line-clamp-1 cursor-pointer hover:text-primary-600",children:s}),e.jsx("span",{className:"text-xs md:text-base line-clamp-1 text-gray-900 cursor-pointer hover:text-primary-600",children:o}),e.jsxs("p",{className:"text-xs md:text-base font-medium text-primary-600",children:["$",i]})]}),e.jsx("button",{onClick:()=>{N({Options:c,Name:s,Thumbnail:a,id:r,Price:i,Category:o})},disabled:l.find(({productId:d})=>d===r),className:"p-3 text-xl md:text-3xl bg-primary-500 hover:bg-primary-800 transition-all text-gray-50 rounded-xl disabled:bg-gray-600",children:l.find(({productId:d})=>d===r)?e.jsx(E,{}):e.jsx(f,{})})]})]},n))})}function G(){const{wishlist:t}=u(m=>m.userData),l=b(),x=B();return P.useEffect(()=>{t.length&&l(W({sortBy:""}))},[]),t!=null&&t.length?e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl",children:e.jsxs("div",{id:"wrapper",className:"px-2 py-2 md:px-4 flex flex-col gap-y-4",children:[e.jsx(j,{}),e.jsx(z,{})]})}):e.jsxs("div",{className:"h-screen flex flex-col items-center justify-center",children:[e.jsx("h6",{className:"text-2xl font-bold lg:text-4xl",children:"Wish List Is Empty"}),e.jsx("button",{onClick:()=>x("/EcoVibe/Explore-products/"),className:"px-4 py-2 bg-primary-500 mt-4 rounded-md text-white lg:text-lg",children:"Explore Products"})]})}export{G as default};
