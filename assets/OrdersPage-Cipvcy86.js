import{j as e,aF as O,b5 as u,r as x,a6 as T,M as w,u as S,b6 as E,b7 as k,aP as _,ad as A,ae as C,af as L,_ as I,b as P,a8 as $,b8 as q,b9 as B,q as D,ag as Q,ah as F,ai as M,aj as U,a9 as V,ba as R,a7 as W}from"./index-DNYibs0x.js";import{b as H}from"./index-BEK4Ffsz.js";import{c as Y}from"./index-CbHdAtlf.js";import{I as G}from"./IconicAlert-fCyiU1t7.js";function J({onOrderDetail:r,paginetedItems:t,pageNum:a}){return e.jsx("div",{className:" overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm xl:text-lg text-left text-gray-700",children:[e.jsx("thead",{className:"text-gray-700 uppercase bg-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Product"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Seller"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Date"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Quantity"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Price"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"status"})]})}),e.jsx("tbody",{children:t[a].items.map((s,c)=>{var l,d,i;return e.jsxs("tr",{onClick:()=>r("open",s.orderId,s.SellerId),className:"bg-white border-b hover:bg-gray-50 transition-all xl:text-lg cursor-pointer",children:[e.jsxs("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center justify-evenly sm:justify-start gap-2",children:[e.jsx("div",{className:"size-14 bg-gray-300 rounded-full",children:e.jsx("img",{src:s.Thumbnail,alt:"product-thumbnail",className:"size-full rounded-full object-cover"})}),e.jsxs("p",{className:"flex flex-col gap-1",children:[e.jsx("span",{className:"hover:underline line-clamp-1 max-w-24 lg:max-w-56 cursor-pointer",children:s.Name}),e.jsx("span",{className:"text-xs line-clamp-1 w-28 xl:text-base",children:s.Category})]})]}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"size-11 bg-gray-100 rounded-full",children:e.jsx("img",{src:s.SellerProfile,alt:"seller-avatar",className:"size-full rounded-full object-cover"})}),e.jsxs("p",{className:"flex flex-col gap-1",children:[e.jsx("span",{children:s.SellerName}),e.jsx("span",{children:s.SellerEmail})]})]})}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:O(s.date)}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:s.quantity}),e.jsxs("td",{className:"px-6 py-4",children:["$",s.Price]}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsxs("div",{className:"flex items-center justify-start gap-2",children:[e.jsx("p",{style:{background:(l=u)==null?void 0:l[s.delivery_status].color},className:"p-2 rounded-full"}),e.jsx("p",{style:{color:(d=u)==null?void 0:d[s.delivery_status].color},children:(i=u)==null?void 0:i[s.delivery_status].label})]})})]},c)})})]})})}function K({ordersData:r,onOrderDetail:t}){const[{paginetedItems:a,pageNum:s},c]=x.useState({paginetedItems:[],pageNum:0});if(x.useEffect(()=>{c(l=>({...l,paginetedItems:T(r,8)}))},[r]),x.useEffect(()=>{window.scrollTo(0,0)},[s]),!(r!=null&&r.length))return e.jsx("div",{className:"h-screen flex items-center justify-center text-3xl text-primary-950 font-bold text-center",children:e.jsx("h6",{children:"There is No Ordered item With This Name..."})});if(a.length)return e.jsxs("div",{children:[e.jsx(J,{onOrderDetail:t,paginetedItems:a,pageNum:s}),e.jsxs("div",{className:"flex items-center px-2 py-1 lg:px-4 lg:py-2 justify-center lg:justify-end gap-2 my-1",children:[e.jsx("button",{onClick:()=>c(l=>({...l,pageNum:s-1})),disabled:s===0,className:"p-3 -z-10 bg-gray-200 border border-gray-400 disabled:bg-gray-200 disabled:opacity-50",children:e.jsx(w,{})}),a.map((l,d)=>d>s-3&&d<=s+1&&e.jsx("button",{onClick:()=>c(i=>({...i,pageNum:d})),disabled:d===s,className:"px-4 py-2 bg-gray-200 border border-gray-400 disabled:bg-gray-400 disabled:text-gray-50 transition-all",children:d+1},d)),e.jsx("button",{onClick:()=>c(l=>({...l,pageNum:s+1})),disabled:s===a.length-1,className:"p-3 -z-10 bg-gray-200 border border-gray-400 disabled:bg-gray-200 disabled:opacity-50",children:e.jsx(w,{className:"rotate-180"})})]})]})}function X({delivery_status:r,orders:t}){return e.jsxs("div",{className:`${r===900&&"!row-start-2 [&>div]:max-h-96 mt-12 xl:mt-0"} bg-gray-50 px-2 py-1 rounded-md col-span-3 row-span-2 col-start-1 row-start-3`,children:[e.jsx("h4",{className:"text-xl font-medium my-1",children:"Orders Items"}),e.jsx("div",{className:"flex flex-col gap-y-2 max-h-64 overflow-auto styled-scroll-bar",children:t==null?void 0:t.map((a,s)=>e.jsxs("div",{className:"flex items-center gap-1 w-full h-32 bg-gray-100 border border-gray-300 rounded-md",children:[e.jsx("div",{className:"w-5/12 lg:w-1/5 h-full flex items-center justify-center",children:e.jsx("img",{src:a.Thumbnail,alt:"item-thumbnail",className:"size-11/12 rounded-md object-cover"})}),e.jsxs("div",{className:"w-3/5 h-full flex flex-col items-start py-2 justify-between",children:[e.jsx("h6",{className:"line-clamp-1 text-lg lg:text-xl font-medium text-gray-900",children:a.Name}),e.jsxs("p",{className:"text-sm font-medium",children:["Total Price: $",a.Price*a.quantity]}),e.jsx("div",{className:"",children:a.selectedOption.map(({title:c,option:l},d)=>{var i;return d<3&&e.jsxs("div",{className:"flex items-center line-clamp-1",children:[e.jsxs("p",{className:"text-sm font-medium line-clamp-1 max-w-[80%]",children:[c,":  "]}),e.jsx("span",{className:"text-xs text-gray-800 flex-1",children:c.toLowerCase()==="color"?(i=Y(l))==null?void 0:i.name:l})]},d)})})]})]},s))})]})}function Z({sellerInfo:r,paymentInfo:t}){const a=S(),{SellerName:s,SellerProfile:c,SellerId:l}=r;return e.jsxs("div",{className:"bg-gray-50 px-2 py-1 rounded-md row-span-3 col-start-4 row-start-2 mb-16",children:[e.jsx("h4",{className:"text-xl font-medium my-1",children:"Seller"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("img",{src:c,alt:"seller-avatar",className:"size-16 gradient-background rounded-full"}),e.jsx("h4",{onClick:()=>l!=="eco vibe"&&a(`/EcoVibe/seller/${l}`),className:"text-start w-full px-3 text-lg font-medium cursor-pointer hover:underline transition-all",children:s}),e.jsx("button",{className:"rotate-45 p-2 bg-gray-200 rounded-full",children:e.jsx(E,{})})]}),e.jsx("hr",{className:"my-2"}),e.jsx("h4",{className:"text-xl font-medium my-1",children:"Payment Infomtaion"}),e.jsx("div",{className:"",children:Object.entries(t).map(([d,i],n)=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"first-letter:uppercase font-semibold",children:d.replace("_"," ")}),e.jsx("p",{className:"line-clamp-1",children:i})]},n))})]})}function ee({updateOrders:r,onModalClose:t,order:a}){const[s,c]=x.useState(!1),[l,d]=x.useState(!1),{orderId:i}=a,{delivery_status:n,SellerId:m}=a.orders[0];async function f(){if(!s)c(!0);else if(s)try{d(!0);let o={orders:{...a.allOrders,[m]:{...a.allOrders[m],delivery_status:900}}};Object.entries(a).forEach(([h,p])=>{h!=="orders"&&h!=="allOrders"&&(o[h]=p)});const g=A(C,"Orders",i);await L(g,o),I("Order Canceled"),r(),d(!1),t("close")}catch(o){I.error("Faild To Cancel Order Plase Try Again"),d(!1),console.log(o)}}return e.jsxs(e.Fragment,{children:[n!==900&&e.jsxs("div",{className:"bg-gray-50 px-2 py-1 rounded-md col-span-3 row-start-2",children:[e.jsxs("div",{className:"flex items-center justify-between px-2 py-1",children:[e.jsx("h4",{className:"text-xl font-medium my-1",children:"Delivery Status"}),n===100&&e.jsx("div",{className:"fixed bottom-0 px-4 py-2 bg-gray-50 w-full left-0 lg:static lg:w-fit lg:p-0",children:e.jsx("button",{onClick:f,className:"px-4 py-2 border-2 font-medium border-primary-500 text-primary-500 rounded-md float-right",children:"Cancel Order"})})]}),e.jsx("div",{className:"flex justify-center gap-4 lg:gap-20 py-1",children:Object.entries(u).map(([o,{label:g,color:h}])=>o<900&&e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs("p",{className:`${o>n?"bg-gray-300 text-gray-300":"bg-primary-500 text-gray-50"} rounded-full relative flex items-center text-4xl lg:text-7xl justify-center`,children:[e.jsx("span",{className:"z-10",children:e.jsx(k,{})}),o<400&&e.jsx("span",{className:"absolute w-1.5 h-20 lg:h-40 bg-inherit opacity-70 -right-4 rotate-90"})]}),e.jsx("p",{className:`${o>n?"text-gray-500":"text-primary-500 font-semibold"}`,children:g})]},o))})]}),e.jsxs("div",{className:`${s?"visible opacity-100":"invisible opacity-0"} fixed inset-0  z-50 flex items-center justify-center transition-all`,children:[e.jsx("div",{onClick:()=>{l||c(!1)},className:"bg-gray-950/50 absolute inset-0"}),!l&&e.jsx(G,{title:"Are Sure About To Cancel This Order ?",subTitle:"Back To Orders",callBack:f,onClose:()=>c(!1)}),l&&e.jsx("div",{className:"z-50 absolute inset-0 flex items-center justify-center bg-gray-200/10 backdrop-blur-sm",children:e.jsx(_,{className:"size-24"})})]})]})}function se({order:r,onModalClose:t,updateOrders:a}){const{personalInformation:{first_name:s}}=P(n=>n.userData),{orderId:c,createdAt:l,paymentInfo:d}=r,{delivery_status:i}=r.orders[0];if($(),r)return e.jsxs("div",{className:"w-full h-full overflow-auto styled-scroll-bar bg-white flex flex-col lg:grid grid-cols-4 grid-rows-4 gap-4 px-2 py-1.5 lg:px-4 lg:py-2",children:[e.jsxs("div",{className:"col-span-4 flex flex-col justify-between gap-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h4",{className:"flex items-center gap-1 text-xl lg:text-2xl font-medium",children:[e.jsx("span",{className:"text-gray-500",children:"Order"}),e.jsx("p",{className:"uppercase",children:c.slice(0,10)})]}),e.jsx("button",{onClick:()=>t("close"),className:"p-2 bg-gray-100 rounded-full border border-gray-100 lg:text-2xl",children:e.jsx(q,{})})]}),e.jsxs("p",{children:["Hi dear ",e.jsx("span",{className:"font-medium",children:s||"User"}),", thanks for your order! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique temporibus nemo labore quod alias accusamus animi quia odit, aliquid iusto ullam esse mollitia voluptates cupiditate impedit beatae cum. Ut."," ",e.jsx("span",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat beatae laboriosam iste aut nemo corporis"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{style:{color:u[i].color,borderColor:u[i].color},className:"border-2 px-2 py-1 lg:px-4 lg:py-2 lg:text-xl rounded-md font-medium",children:u[i].label}),e.jsxs("div",{className:"flex items-end gap-1",children:[e.jsx("p",{className:"text-sm lg:text-lg",children:O(l)}),e.jsx("p",{className:"text-3xl text-gray-400",children:e.jsx(H,{})})]})]})]}),e.jsx(ee,{updateOrders:a,onModalClose:t,order:r}),e.jsx("hr",{}),e.jsx(X,{orders:r.orders,delivery_status:i}),e.jsx("hr",{}),e.jsx(Z,{paymentInfo:d,sellerInfo:r.orders[0]})]})}function le(){return e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl -mb-6 lg:-mb-8 px-2 py-1 lg:px-4 lg:py-2 animate-pulse",children:[e.jsxs("div",{className:"flex",children:[e.jsx("input",{disabled:!0,type:"text",className:"w-full outline-none border px-4 py-2 rounded-tl-md lg:py-3 focus:border-gray-500",placeholder:"Search By Product Name"}),e.jsx("button",{disabled:!0,className:"px-4 py-2 bg-gray-500 text-gray-50 rounded-tr-md text-lg lg:text-3xl",children:e.jsx(B,{})})]}),e.jsx("div",{children:e.jsx("div",{className:"relative overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm xl:text-lg text-left text-gray-700",children:[e.jsx("thead",{className:"text-gray-700 uppercase bg-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-6",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-6 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-6 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-6 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-6",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-6 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-400 rounded-md"})})]})}),e.jsx("tbody",{children:D(10).map((r,t)=>e.jsxs("tr",{className:"bg-white border-b hover:bg-gray-50 transition-all xl:text-lg",children:[e.jsxs("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center justify-evenly sm:justify-start gap-2",children:[e.jsx("div",{className:"size-14 bg-gray-300 rounded-full"}),e.jsxs("p",{className:"flex flex-col gap-4",children:[e.jsx("span",{className:"w-12 h-2 bg-gray-400 rounded-md"}),e.jsx("span",{className:"w-16 h-2 rounded-md bg-gray-400"})]})]}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"size-11 bg-gray-300 rounded-full"}),e.jsxs("p",{className:"flex flex-col gap-2",children:[e.jsx("span",{className:"w-10 h-2 rounded-md bg-gray-300"}),e.jsx("span",{className:"w-16 h-2 rounded-md bg-gray-300"})]})]})}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsx("p",{className:"w-full h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("p",{className:"w-full h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:e.jsx("div",{className:"flex items-center justify-start gap-2",children:e.jsx("p",{className:"w-full h-2 bg-gray-300 rounded-md"})})})]},t))})]})})})]})}function ae(){const[r,t]=x.useState({orders:[],items:[],loading:!1,error:null}),a=x.useCallback(async c=>{t(l=>({...l,loading:!0,error:null}));try{const l=Q(F(C,"Orders"),M("customerId","==",c)),d=await U(l);if(d.empty)throw new Error("You haven't placed an order yet. Start shopping now!");const i=d.docs.map(m=>({...m.data(),orderId:m.id})),n=s(i);t({orders:i,items:n,loading:!1,error:null})}catch(l){t({orders:[],items:[],loading:!1,error:l})}},[]),s=c=>c.flatMap(l=>Object.entries(l.orders).flatMap(([d,{delivery_status:i,items:n}])=>n.map(m=>({...m,delivery_status:i,orderId:l.orderId,date:l.createdAt,paymentInfo:l.paymentInfo}))));return{...r,fetchOrders:a,getOrderedItems:s}}function re(r){const[t,a]=x.useState(""),s=t?r.filter(c=>c.Name.toLowerCase().includes(t.toLowerCase())):r;return{searchQuery:t,setSearchQuery:a,filteredItems:s}}function ne(){const{error:r,items:t,loading:a,orders:s,fetchOrders:c,getOrderedItems:l}=ae(),{filteredItems:d,searchQuery:i,setSearchQuery:n}=re(t),[{modalIsShow:m,order:f},o]=x.useState({modalIsShow:!1,order:null}),{userId:g}=P(y=>y.userData),h=S(),p=V();x.useEffect(()=>{!a&&(p!=null&&p.orderId)&&(s!=null&&s.length)&&b("open",`#${p.orderId}`,p.sellerId)},[a,p]),x.useEffect(()=>{c(g)},[]);function b(y,v,z){if(y==="open"){let N={...s==null?void 0:s.find(j=>j.orderId===v),allOrders:s==null?void 0:s.find(j=>j.orderId===v).orders};N.orders=l([N]).filter(j=>j.SellerId==z),o({modalIsShow:!0,order:N})}else o({modalIsShow:!1,order:null})}if(a)return e.jsx(le,{});if(!a&&s.length)return e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl -mb-6 lg:-mb-8 px-2 py-1 lg:px-4 lg:py-2",children:[e.jsxs("div",{className:"flex",children:[e.jsx("input",{onChange:y=>n(y.target.value),value:i,type:"text",className:"w-full outline-none border px-4 py-2 rounded-tl-md lg:py-3 focus:border-gray-500",placeholder:"Search By Product Name"}),e.jsx("button",{className:"px-4 py-2 bg-primary-500 text-gray-50 rounded-tr-md text-lg lg:text-3xl",children:e.jsx(R,{})})]}),e.jsx(K,{ordersData:d,onOrderDetail:b}),e.jsx("div",{className:`${m?"visible opacity-100 translate-x-0":"invisible opacity-0 translate-y-96"} fixed inset-0 z-50 transition-all duration-300 flex items-center bg-white`,children:f&&e.jsx(se,{order:f,onModalClose:b,updateOrders:()=>c(g)})})]});if(!a&&r)return e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl h-screen flex flex-col items-center justify-center gap-y-4",children:[e.jsx("img",{src:W,alt:"error-icon",className:"size-80 object-cover"}),e.jsx("h4",{className:"text-xl lg:text-3xl text-center font-bold text-primary-900",children:r==null?void 0:r.message}),e.jsx("button",{onClick:()=>h("/EcoVibe/Explore-products/"),className:"px-4 py-2 bg-primary-500 lg:text-lg rounded-md text-gray-50 border-2 border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all",children:"Explore Products"})]})}export{ne as default};