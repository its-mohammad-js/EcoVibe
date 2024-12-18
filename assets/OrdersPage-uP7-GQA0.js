import{r as u,ab as T,j as e,aC as z,b9 as y,J as S,b as P,u as k,ad as A,ba as _,bb as $,bc as q,aX as B,aj as L,W as E,ai as D,_ as C,bd as Q,p as V,ak as U,V as W,al as F,X as M,ae as R,be as X,ac as H}from"./index-B5E2kmdf.js";import{a as J}from"./index-D5kZ4OLN.js";import{I as Y}from"./IconicAlert--kV_Q3EY.js";function G({ordersData:a,onOrderDetail:c}){const[{paginetedItems:d,pageNum:l},i]=u.useState({paginetedItems:[],pageNum:0});if(u.useEffect(()=>{i(s=>({...s,paginetedItems:T(a,8)}))},[a]),u.useEffect(()=>{window.scrollTo(0,0)},[l]),!(a!=null&&a.length))return e.jsx("div",{className:"h-screen flex items-center justify-center text-3xl text-primary-950 font-bold text-center",children:e.jsx("h6",{children:"There is No Ordered item With This Name..."})});if(d.length)return e.jsxs("div",{children:[e.jsx("div",{className:" overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm xl:text-lg text-left text-gray-700",children:[e.jsx("thead",{className:"text-gray-700 uppercase bg-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Product"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Seller"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Date"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Quantity"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Price"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"status"})]})}),e.jsx("tbody",{children:d[l].items.map((s,n)=>{var m,t,o;return e.jsxs("tr",{onClick:()=>c("open",s.orderId,s.SellerId),className:"bg-white border-b hover:bg-gray-50 transition-all xl:text-lg cursor-pointer",children:[e.jsxs("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center justify-evenly sm:justify-start gap-2",children:[e.jsx("div",{className:"size-14 bg-gray-300 rounded-full",children:e.jsx("img",{src:s.Thumbnail,alt:"product-thumbnail",className:"size-full rounded-full object-cover"})}),e.jsxs("p",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"hover:underline line-clamp-1 max-w-24 lg:max-w-56 cursor-pointer",children:s.Name}),e.jsx("span",{className:"text-xs line-clamp-1 w-28 xl:text-base",children:s.Category})]})]}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"size-11 bg-gray-100 rounded-full",children:e.jsx("img",{src:s.SellerProfile,alt:"seller-avatar",className:"size-full rounded-full object-cover"})}),e.jsxs("p",{className:"flex flex-col gap-1",children:[e.jsx("span",{children:s.SellerName}),e.jsx("span",{children:s.SellerEmail})]})]})}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:z(s.date)}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:s.quantity}),e.jsxs("td",{className:"px-6 py-4",children:["$",s.Price]}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsxs("div",{className:"flex items-center justify-start gap-2",children:[e.jsx("p",{style:{background:(m=y)==null?void 0:m[s.delivery_status].color},className:"p-2 rounded-full"}),e.jsx("p",{style:{color:(t=y)==null?void 0:t[s.delivery_status].color},children:(o=y)==null?void 0:o[s.delivery_status].label})]})})]},n)})})]})}),e.jsxs("div",{className:"flex items-center px-2 py-1 lg:px-4 lg:py-2 justify-center lg:justify-end gap-2 my-1",children:[e.jsx("button",{onClick:()=>i(s=>({...s,pageNum:l-1})),disabled:l===0,className:"p-3 -z-10 bg-gray-200 border border-gray-400 disabled:bg-gray-200 disabled:opacity-50",children:e.jsx(S,{})}),d.map((s,n)=>n>l-3&&n<=l+1&&e.jsx("button",{onClick:()=>i(m=>({...m,pageNum:n})),disabled:n===l,className:"px-4 py-2 bg-gray-200 border border-gray-400 disabled:bg-gray-400 disabled:text-gray-50 transition-all",children:n+1},n)),e.jsx("button",{onClick:()=>i(s=>({...s,pageNum:l+1})),disabled:l===d.length-1,className:"p-3 -z-10 bg-gray-200 border border-gray-400 disabled:bg-gray-200 disabled:opacity-50",children:e.jsx(S,{className:"rotate-180"})})]})]})}function K({order:a,onModalClose:c,updateOrders:d}){const{personalInformation:{first_name:l}}=P(r=>r.userData),{orderId:i,createdAt:s,orders:n,paymentInfo:m}=a,{delivery_status:t,SellerId:o,SellerName:v,SellerProfile:w}=a.orders[0],[j,b]=u.useState(!1),[g,h]=u.useState(!1),f=k();A();async function N(){if(!g)h(!0);else if(g)try{b(!0);let r={orders:{...a.allOrders,[o]:{...a.allOrders[o],delivery_status:900}}};Object.entries(a).forEach(([x,I])=>{x!=="orders"&&x!=="allOrders"&&(r[x]=I)});const p=L(E,"Orders",i);await D(p,r),C("Order Canceled"),d(),b(!1),c("close")}catch(r){C.error("Faild To Cancel Order Plase Try Again"),b(!1),console.log(r)}}if(a)return e.jsxs("div",{className:"w-full h-screen overflow-auto styled-scroll-bar bg-white flex flex-col lg:grid grid-cols-4 grid-rows-4 gap-4 px-2 py-1.5 lg:px-4 lg:py-2",children:[e.jsxs("div",{className:"col-span-4 flex flex-col justify-between gap-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h4",{className:"flex items-center gap-1 text-xl lg:text-2xl font-medium",children:[e.jsx("span",{className:"text-gray-500",children:"Order"}),e.jsx("p",{className:"uppercase",children:i.slice(0,10)})]}),e.jsx("button",{onClick:()=>c("close"),className:"p-2 bg-gray-100 rounded-full border border-gray-100 lg:text-2xl",children:e.jsx(_,{})})]}),e.jsxs("p",{children:["Hi dear ",e.jsx("span",{className:"font-medium",children:l||"User"}),", thanks for your order! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique temporibus nemo labore quod alias accusamus animi quia odit, aliquid iusto ullam esse mollitia voluptates cupiditate impedit beatae cum. Ut."," ",e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat beatae laboriosam iste aut nemo corporis"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{style:{color:y[t].color,borderColor:y[t].color},className:"border-2 px-2 py-1 lg:px-4 lg:py-2 lg:text-xl rounded-md font-medium",children:y[t].label}),e.jsxs("div",{className:"flex items-end gap-1",children:[e.jsx("p",{className:"text-sm lg:text-lg",children:z(s)}),e.jsx("p",{className:"text-3xl text-gray-400",children:e.jsx(J,{})})]})]})]}),t!==900&&e.jsxs("div",{className:"bg-gray-50 px-2 py-1 rounded-md col-span-3 row-start-2",children:[e.jsxs("div",{className:"flex items-center justify-between px-2 py-1",children:[e.jsx("h4",{className:"text-xl font-medium my-1",children:"Delivery Status"}),t===100&&e.jsx("div",{className:"fixed bottom-0 px-4 py-2 bg-gray-50 w-full left-0 lg:static lg:w-fit lg:p-0",children:e.jsx("button",{onClick:N,className:"px-4 py-2 border-2 font-medium border-primary-500 text-primary-500 rounded-md float-right",children:"Cancel Order"})})]}),e.jsx("div",{className:"flex justify-center gap-4 lg:gap-20 py-1",children:Object.entries(y).map(([r,{label:p,color:x}])=>r<900&&e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs("p",{className:`${r>t?"bg-gray-300 text-gray-300":"bg-primary-500 text-gray-50"} rounded-full relative flex items-center text-4xl lg:text-7xl justify-center`,children:[e.jsx("span",{className:"z-10",children:e.jsx($,{})}),r<400&&e.jsx("span",{className:"absolute w-1.5 h-20 lg:h-40 bg-inherit opacity-70 -right-4 rotate-90"})]}),e.jsx("p",{className:`${r>t?"text-gray-500":"text-primary-500 font-semibold"}`,children:p})]},r))})]}),e.jsx("hr",{}),e.jsxs("div",{className:`${t===900&&"!row-start-2 [&>div]:max-h-96 mt-12 xl:mt-0"} bg-gray-50 px-2 py-1 rounded-md col-span-3 row-span-2 col-start-1 row-start-3`,children:[e.jsx("h4",{className:"text-xl font-medium my-1",children:"Orders Items"}),e.jsx("div",{className:"flex flex-col gap-y-2 max-h-64 overflow-auto styled-scroll-bar",children:n.map((r,p)=>e.jsxs("div",{className:"flex items-center gap-1 w-full h-32 bg-gray-100 border border-gray-300 rounded-md",children:[e.jsx("div",{className:"w-5/12 lg:w-1/5 h-full flex items-center justify-center",children:e.jsx("img",{src:r.Thumbnail,alt:"item-thumbnail",className:"size-11/12 rounded-md object-cover"})}),e.jsxs("div",{className:"w-3/5 h-full flex flex-col items-start py-2 justify-between",children:[e.jsx("h6",{className:"line-clamp-1 text-lg lg:text-xl font-medium text-gray-900",children:r.Name}),e.jsxs("p",{className:"text-sm font-medium",children:["Total Price: $",r.Price*r.quantity]}),e.jsx("div",{className:"",children:r.selectedOption.map(({title:x,option:I},O)=>O<3&&e.jsxs("div",{className:"flex items-center line-clamp-1",children:[e.jsxs("p",{className:"text-sm font-medium line-clamp-1 max-w-[60%]",children:[x,":  "]}),e.jsx("span",{className:"text-xs text-gray-800 flex-1",children:I})]},O))})]})]},p))})]}),e.jsx("hr",{}),e.jsxs("div",{className:"bg-gray-50 px-2 py-1 rounded-md row-span-3 col-start-4 row-start-2 mb-16",children:[e.jsx("h4",{className:"text-xl font-medium my-1",children:"Seller"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("img",{src:w,alt:"seller-avatar",className:"size-16 gradient-background rounded-full"}),e.jsx("h4",{onClick:()=>o!=="eco vibe"&&f(`/EcoVibe/seller/${o}`),className:"text-start w-full px-3 text-lg font-medium cursor-pointer hover:underline transition-all",children:v}),e.jsx("button",{className:"rotate-45 p-2 bg-gray-200 rounded-full",children:e.jsx(q,{})})]}),e.jsx("hr",{className:"my-2"}),e.jsx("h4",{className:"text-xl font-medium my-1",children:"Payment Infomtaion"}),e.jsx("div",{className:"",children:Object.entries(m).map(([r,p],x)=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"first-letter:uppercase font-semibold",children:r.replace("_"," ")}),e.jsx("p",{className:"line-clamp-1",children:p})]},x))})]}),e.jsxs("div",{className:`${g?"visible opacity-100":"invisible opacity-0"} fixed inset-0  z-50 flex items-center justify-center transition-all`,children:[e.jsx("div",{onClick:()=>{j||h(!1)},className:"bg-gray-950/50 absolute inset-0"}),!j&&e.jsx(Y,{title:"Are Sure About To Cancel This Order ?",subTitle:"Back To Orders",callBack:N,onClose:()=>h(!1)}),j&&e.jsx("div",{className:"z-50 absolute inset-0 flex items-center justify-center bg-gray-200/10 backdrop-blur-sm",children:e.jsx("img",{src:B,alt:"loading-icon",className:"size-36"})})]})]})}function Z(){return e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl -mb-6 lg:-mb-8 px-2 py-1 lg:px-4 lg:py-2 animate-pulse",children:[e.jsxs("div",{className:"flex",children:[e.jsx("input",{disabled:!0,type:"text",className:"w-full outline-none border px-4 py-2 rounded-tl-md lg:py-3 focus:border-gray-500",placeholder:"Search By Product Name"}),e.jsx("button",{disabled:!0,className:"px-4 py-2 bg-gray-500 text-gray-50 rounded-tr-md text-lg lg:text-3xl",children:e.jsx(Q,{})})]}),e.jsx("div",{children:e.jsx("div",{className:"relative overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm xl:text-lg text-left text-gray-700",children:[e.jsx("thead",{className:"text-gray-700 uppercase bg-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-6",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-6 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-6 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-6 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-6",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-6 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})})]})}),e.jsx("tbody",{children:V(10).map((a,c)=>e.jsxs("tr",{className:"bg-white border-b hover:bg-gray-50 transition-all xl:text-lg",children:[e.jsxs("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center justify-evenly sm:justify-start gap-2",children:[e.jsx("div",{className:"size-14 bg-gray-300 rounded-full"}),e.jsxs("p",{className:"flex flex-col gap-4",children:[e.jsx("span",{className:"w-12 h-2 bg-gray-400 rounded-md"}),e.jsx("span",{className:"w-16 h-2 rounded-md bg-gray-400"})]})]}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"size-11 bg-gray-300 rounded-full"}),e.jsxs("p",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"w-10 h-2 rounded-md bg-gray-300"}),e.jsx("span",{className:"w-16 h-2 rounded-md bg-gray-300"})]})]})}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("p",{className:"w-full h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsx("div",{className:"flex items-center justify-start gap-2",children:e.jsx("p",{className:"w-full h-2 bg-gray-300 rounded-md"})})})]},c))})]})})})]})}function ee(){const[a,c]=u.useState({orders:[],items:[],loading:!1,error:null}),d=u.useCallback(async i=>{c(s=>({...s,loading:!0,error:null}));try{const s=U(W(E,"Orders"),F("customerId","==",i)),n=await M(s);if(n.empty)throw new Error("You haven't placed an order yet. Start shopping now!");const m=n.docs.map(o=>({...o.data(),orderId:o.id})),t=l(m);c({orders:m,items:t,loading:!1,error:null})}catch(s){c({orders:[],items:[],loading:!1,error:s})}},[]),l=i=>i.flatMap(s=>Object.entries(s.orders).flatMap(([n,{delivery_status:m,items:t}])=>t.map(o=>({...o,delivery_status:m,orderId:s.orderId,date:s.createdAt,paymentInfo:s.paymentInfo}))));return{...a,fetchOrders:d,getOrderedItems:l}}function se(a){const[c,d]=u.useState(""),l=c?a.filter(i=>i.Name.toLowerCase().includes(c.toLowerCase())):a;return{searchQuery:c,setSearchQuery:d,filteredItems:l}}function te(){const{error:a,items:c,loading:d,orders:l,fetchOrders:i,getOrderedItems:s}=ee(),{filteredItems:n,searchQuery:m,setSearchQuery:t}=se(c),[{modalIsShow:o,order:v},w]=u.useState({modalIsShow:!1,order:null}),{userId:j}=P(f=>f.userData),b=k(),g=R();u.useEffect(()=>{!d&&(g!=null&&g.orderId)&&(l!=null&&l.length)&&h("open",`#${g.orderId}`,g.sellerId)},[d,g]),u.useEffect(()=>{i(j)},[]);function h(f,N,r){if(f==="open"){let p={...l==null?void 0:l.find(x=>x.orderId===N),allOrders:l==null?void 0:l.find(x=>x.orderId===N).orders};p.orders=s([p]).filter(x=>x.SellerId==r),w({modalIsShow:!0,order:p})}else w({modalIsShow:!1,order:null})}if(d)return e.jsx(Z,{});if(!d&&l.length)return e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl -mb-6 lg:-mb-8 px-2 py-1 lg:px-4 lg:py-2",children:[e.jsxs("div",{className:"flex",children:[e.jsx("input",{onChange:f=>t(f.target.value),value:m,type:"text",className:"w-full outline-none border px-4 py-2 rounded-tl-md lg:py-3 focus:border-gray-500",placeholder:"Search By Product Name"}),e.jsx("button",{className:"px-4 py-2 bg-primary-500 text-gray-50 rounded-tr-md text-lg lg:text-3xl",children:e.jsx(X,{})})]}),e.jsx(G,{ordersData:n,onOrderDetail:h}),e.jsx("div",{className:`${o?"visible opacity-100 translate-x-0":"invisible opacity-0 translate-y-96"} fixed inset-0 z-50 transition-all duration-300 flex items-center bg-white`,children:v&&e.jsx(K,{order:v,onModalClose:h,updateOrders:()=>i(j)})})]});if(!d&&a)return e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl h-screen flex flex-col items-center justify-center gap-y-4",children:[e.jsx("img",{src:H,alt:"error-icon",className:"size-80 object-cover"}),e.jsx("h4",{className:"text-xl lg:text-3xl text-center font-bold text-primary-900",children:a==null?void 0:a.message}),e.jsx("button",{onClick:()=>b("/EcoVibe/Explore-products/"),className:"px-4 py-2 bg-primary-500 lg:text-lg rounded-md text-gray-50 border-2 border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all",children:"Explore Products"})]})}export{te as default};