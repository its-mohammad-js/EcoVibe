import{b as p,u as j,j as e,d as v,e as N,h as k,a as C,q as P,F as y,f as A,r as E,s as z,c as $,K as h,M as f,i as L,k as R,t as T,l as D,_ as g}from"./index-Bc-LpspM.js";import{R as b}from"./react-stars-CyMRd1_l.js";function F({productData:a,onProductLike:r,isLiked:t}){const{Thumbnail:n,Name:d,Price:i,Stars:c,id:o}=a,{loading:m}=p(u=>u.userData),x=j();return e.jsxs("div",{className:"flex select-none flex-col items-center justify-between hover:-translate-y-0.5 duration-500 h-72 md:h-80 md:w-56 w-44 bg-gray-50 rounded-lg hover:shadow-md transition-all cursor-pointer",children:[e.jsxs("div",{className:"w-full h-3/5 relative",children:[e.jsx("img",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),x(`/EcoVibe/Products/${o}`)},draggable:!1,src:n,alt:d,className:"rounded-lg h-full w-full object-cover"}),e.jsxs("button",{onClick:()=>r(o),disabled:m,className:"absolute top-2 right-2 text-xl md:text-2xl bg-gray-50/60 p-1.5 hover:scale-110 transition-all duration-300 rounded-full group disabled:opacity-70 disabled:cursor-progress",children:[e.jsx(v,{className:`${t&&"!hidden"} group-hover:hidden`}),e.jsx(N,{className:`${t?"!block text-red-600":""} hidden group-hover:block group-hover:text-red-500/75 transition-all`})]})]}),e.jsxs("div",{className:"flex flex-col justify-between px-3 py-1.5 md:px-4 md:py-2 h-2/5 w-full",children:[e.jsx("h2",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),x(`/EcoVibe/Products/${o}`)},className:"font-bold line-clamp-2 w-fit md:mt-1 hover:text-primary-700 transition-all",children:d}),e.jsxs("div",{className:"w-full flex items-center justify-between py-1",children:[e.jsx("div",{className:"",children:e.jsx(b,{count:5,value:k(c||[0]),size:18,color2:"#ffd700",edit:!1})}),e.jsx("p",{className:"font-semibold ",children:e.jsxs("span",{children:["$",i]})})]})]})]})}function S(){return e.jsxs("div",{className:"flex flex-col items-center justify-between hover:-translate-y-0.5 duration-500 h-72 md:h-80 md:w-56 w-44 bg-gray-50 rounded-lg hover:shadow-md transition-all",children:[e.jsx("div",{className:"w-full h-3/5 relative",children:e.jsx("div",{className:"rounded-lg h-full w-full object-cover bg-gray-300"})}),e.jsxs("div",{className:"flex flex-col justify-between px-3 py-1.5 md:px-4 md:py-2 h-2/5 w-full",children:[e.jsx("h2",{className:"font-bold line-clamp-2 bg-gray-300 mt-2.5 w-3/5 h-4 rounded-full",children:" "}),e.jsxs("div",{className:"w-full flex items-center justify-between py-1",children:[e.jsx("div",{className:"",children:e.jsx(b,{count:5,size:18,color2:"gray",edit:!1})}),e.jsx("p",{className:"font-semibold bg-gray-300 w-11 h-4 rounded-full",children:e.jsx("span",{children:" "})})]})]})]})}function V({title:a}){return e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl my-4 md:my-6 relative animate-pulse",children:[e.jsx("h2",{className:"px-2 text-2xl font-bold my-1 md:my-2 md:text-3xl",children:a}),e.jsxs("div",{className:"w-full overflow-auto scroll-smooth hidden-scroll-bar",children:[e.jsx("div",{className:"h-72 bg-gradient-to-l from-gray-50/0 transition-all duration-500 to-gray-50 w-16 md:w-24 absolute z-10 left-0 top-9 flex items-center justify-start opacity-50",children:e.jsx("button",{className:"text-lg md:text-2xl p-2 bg-gray-100 shadow-2xl rounded-md mx-2",children:e.jsx(C,{})})}),e.jsx("div",{className:"inline-flex items-center gap-x-8 px-4 py-2",children:P(10).map((r,t)=>e.jsx(S,{},t))}),e.jsx("div",{className:"h-72 bg-gradient-to-r from-gray-50/0 transition-all duration-500 to-gray-50 w-16 md:w-24 absolute z-10 right-0 top-8 flex items-center justify-end opacity-50",children:e.jsx("button",{className:"text-lg md:text-2xl p-2 bg-gray-100 shadow-2xl rounded-md mx-2",children:e.jsx(y,{})})})]})]})}function I({isLoading:a,products:r,filterObject:t,title:n}){const d=A(r,t),i=E.useRef();z(".products-wrapper",a);const{wishlist:c,auth_status:o}=p(s=>s.userData),m=$(),x=j();function u(){const s=Object.keys(t)[0],l=Object.values(t).toLocaleString();x(`/EcoVibe/Explore-Products/${s}=${l}`),window.scrollTo(0,0)}function w(s){try{R(o);const l=T(c,s);m(D({data:l,field:"wishlist"}))}catch(l){g.remove(),g.error(l==null?void 0:l.message)}}if(a)return e.jsx(V,{title:n});if(!a&&r.length)return e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8 relative bg-inherit",children:[e.jsxs("div",{className:"w-full px-2 my-1 md:px-4 flex items-center justify-between",children:[e.jsx("h2",{className:"text-2xl font-bold  md:text-3xl",children:n}),e.jsxs("button",{onClick:u,className:"flex items-center gap-x-1 md:gap-x-1.5 md:text-lg text-sm text-gray-500 hover:text-primary-300 transition-all cursor-pointer",children:["View All ",e.jsx(y,{className:"text-xs md:text-base"})]})]}),e.jsxs("div",{ref:i,className:"w-full overflow-x-scroll products-wrapper scrolling-wrapper hidden-scroll-bar md:px-4",children:[e.jsx("div",{className:"h-72 bg-gradient-to-l from-gray-50/0 transition-all duration-500 to-gray-50 w-16 md:w-24 absolute z-10 left-0 top-9 flex items-center justify-start opacity-50 hover:opacity-100",children:e.jsx("button",{onClick:()=>h("left",i.current),className:"text-lg md:text-2xl p-2 bg-gray-100 shadow-2xl rounded-md mx-2",children:e.jsx(f,{})})}),e.jsx("div",{className:"inline-flex items-center gap-x-8 px-4 py-2",children:d.map(s=>e.jsx(F,{productData:s,onProductLike:w,isLiked:L(c,s.id)},s.id))}),e.jsx("div",{className:"h-72 bg-gradient-to-r from-gray-50/0 transition-all duration-500 to-gray-50 w-10 absolute z-10 right-0 top-8 flex items-center justify-end opacity-50 hover:opacity-100",children:e.jsx("button",{onClick:()=>h("right",i.current),className:"text-lg md:text-2xl p-2 bg-gray-100 shadow-2xl rounded-md mx-2",children:e.jsx(f,{className:"rotate-180"})})})]})]})}export{I as P};
