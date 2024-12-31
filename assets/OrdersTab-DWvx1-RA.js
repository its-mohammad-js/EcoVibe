import{a8 as I,j as e,de as S,b6 as D,aD as O,b3 as w,r as m,aa as T,O as k,df as F,U as E,_ as v,a6 as _,M,q as $,b as P,a9 as A,u as R,ad as L,ae as Y,af as q}from"./index-CO817kPh.js";import{S as z}from"./react-select.esm-C_r2qHfq.js";import{l as B}from"./lodash-BEsk7hhC.js";import{u as H}from"./DashboardContext-mXQzhaXH.js";import"./Select-49a62830.esm-ZOAN-U8D.js";function V({orderData:l,onModalClose:i}){const{orderId:p,orders:o,paymentInfo:t,shippingMethod:x,createdAt:r,totalPrice:a}=l;return I(),e.jsxs("div",{className:"flex flex-col px-4 py-2 h-screen lg:py-3 bg-gray-50 lg:h-[35rem] xl:h-[42rem] max-h-[90vh] overflow-auto styled-scroll-bar lg:rounded-md",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-x-2 text-gray-600",children:[e.jsx("p",{children:"Orders"}),e.jsx(S,{className:"text-gray-400 text-sm"}),e.jsx("p",{className:"line-clamp-1 w-28",children:p})]}),e.jsx("button",{onClick:i,className:"text-xl p-1 text-gray-50 bg-gray-400 rounded-full",children:e.jsx(D,{})})]}),e.jsxs("div",{className:"py-2 flex flex-col gap-y-1",children:[e.jsxs("h4",{className:"flex gap-x-2 text-lg font-semibold",children:[e.jsx("p",{children:"ORDER ID:"}),e.jsx("p",{className:"line-clamp-1 w-2/3 break-words",children:p})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["ordered at: ",O(r)]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold text-gray-950",children:"Ordered Items :"}),e.jsx("div",{className:"flex flex-col gap-y-2 max-h-96 overflow-auto styled-scroll-bar",children:o.items.map((c,u)=>e.jsxs("div",{className:"w-full h-32 flex items-center px-2 py-2 border-b border-gray-400 last-of-type:border-none",children:[e.jsx("div",{className:"h-full w-2/5 border-2 border-gray-200 bg-gray-200 rounded-lg",children:e.jsx("img",{src:c.Thumbnail,alt:"product-thumbnail",className:"w-full h-full object-cover rounded-lg"})}),e.jsxs("div",{className:"w-3/5 flex flex-col h-full justify-evenly px-2",children:[e.jsx("h6",{className:"font-semibold line-clamp-1",children:c.Name}),e.jsx("div",{className:"text-sm text-gray-700",children:e.jsxs("p",{children:["price $",c.Price," * ",c.quantity]})}),e.jsx("p",{className:"flex items-center flex-wrap",children:c.selectedOption.map((s,d)=>d<10&&e.jsx("span",{className:"text-xs border-r border-gray-700 line-clamp-1 px-1 last-of-type:border-none",children:s.option},d))})]})]},u))})]}),e.jsxs("div",{className:"max-h-48 styled-scroll-bar overflow-auto",children:[e.jsxs("div",{className:"pt-2 pb-4 text-sm text-gray-800 border-b border-gray-400",children:[e.jsx("h4",{className:"text-gray-950 text-xl font-bold",children:"Customer Info :"}),e.jsxs("p",{children:["Name : ",t.full_Name]}),e.jsxs("p",{children:["Country : ",t.country]}),e.jsxs("p",{children:["City : ",t.city]}),e.jsxs("p",{children:["Address : ",t.address]}),e.jsxs("p",{children:["Email : ",t.email]}),e.jsxs("p",{children:["Post Code : ",t.post_Code]}),e.jsxs("p",{children:["Phone Number : ",t.phone_Number]})]}),e.jsxs("div",{className:"py-2 flex flex-col",children:[e.jsxs("div",{className:"order-2 text-sm text-gray-800",children:[e.jsx("h4",{className:"text-xl font-bold",children:"Need Help ?"}),e.jsx("p",{className:"underline cursor-pointer w-fit",children:"Order Issues"}),e.jsx("p",{className:"underline cursor-pointer w-fit",children:"Delivery Info"}),e.jsx("p",{className:"underline cursor-pointer w-fit",children:"Returns"})]}),e.jsxs("div",{className:"text-sm text-gray-800 my-2",children:[e.jsx("h4",{className:"text-xl font-bold text-gray-950",children:"Order Summary :"}),e.jsxs("p",{children:["Total Price : $",a]}),e.jsxs("p",{children:["Shipping Method : ",x.title]}),e.jsxs("p",{children:["Total Items : ",o.items.length]})]})]})]})]})}const K=[{label:"All Orders",value:""},...w.getOptions(0)];function Q({allOrders:l,onFilterChange:i}){const[{search:p,status:o,from:t,to:x},r]=m.useState({search:"",status:"",from:null,to:null});m.useEffect(()=>{i(l)},[l]);function a(){let s=[...l];Object.entries({search:p,status:o}).forEach(([d,h])=>{switch(d){case"search":s=s.filter(({orderId:g,paymentInfo:n})=>g.toLowerCase().includes(h)||n.full_Name.toLowerCase().includes(h));break;case"status":h!==""&&(s=s.filter(({orders:g})=>g.delivery_status===h));break}}),i(u(s,t,x))}m.useEffect(()=>{a()},[o,p,t,x]);function c(s,d){if(!s.target.value){r(n=>({...n,[d]:null}));return}const h=new Date(s.target.value),g={year:h.getFullYear(),month:h.getMonth()};r(n=>({...n,[d]:g}))}function u(s,d,h){if(!d||!h)return s;const g=d.year,n=d.month,y=h.year,f=h.month;return B.filter(s,N=>{const b=O(N==null?void 0:N.createdAt,{year:"numeric",month:"2-digit"}).split("/"),j=Number(b[1]),C=Number(b[0]-1);return j>=g&&(j>g||C>=n)&&j<=y&&(j<y||C<=f)})}return e.jsxs("div",{className:"my-2 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-2 gap-y-2",children:[e.jsxs("div",{className:"flex items-center px-4 py-2 gap-x-2 rounded-md border border-gray-300 xl:w-[55%]",children:[e.jsx("p",{className:"text-gray-500 text-sm",children:e.jsx(T,{})}),e.jsx("input",{onChange:s=>r(d=>({...d,search:s.target.value})),type:"text",placeholder:"Search orders by id or customer",className:"bg-transparent outline-none flex-1"})]}),e.jsxs("div",{className:"flex flex-col xl:w-[45%] xl:flex-row xl:items-center justify-between gap-2",children:[e.jsx(z,{placeholder:"All Orders",className:"lg:[&>div]:py-0.5",options:K,onChange:({value:s})=>r(d=>({...d,status:s}))}),e.jsxs("div",{className:"w-full xl:w-fit gap-x-4 flex items-center justify-between",children:[e.jsx("label",{htmlFor:"FromDate",className:"font-bold",children:"From:"}),e.jsx("input",{onChange:s=>{c(s,"from")},type:"month",id:"FromDate",className:"outline-none border border-gray-300 px-2 rounded-md py-2"})]}),e.jsxs("div",{className:"w-full xl:w-fit gap-x-4 flex items-center justify-between",children:[e.jsx("label",{htmlFor:"ToDate",className:"font-bold",children:"To:"}),e.jsx("input",{onChange:s=>c(s,"to"),type:"month",id:"ToDate",className:"outline-none border border-gray-300 px-2 rounded-md py-2"})]})]})]})}function U({item:l,index:i,onStatusChange:p}){const[{selectedStatus:o,selectedItem:t},x]=m.useState({selectedStatus:null,selectedItem:null}),[r,a]=m.useState(null),c=m.useRef();k(c,()=>a(null)),m.useEffect(()=>{r||x({selectedStatus:null,selectedItem:null})},[r]);function u(s){o!==s?x({isFirstTry:!1,selectedStatus:s,selectedItem:l.orderId}):(p(l,s),v("Your request has been sent"),a(null),x({selectedStatus:null,selectedItem:null}))}return e.jsxs("div",{ref:c,className:"flex items-center w-full justify-between gap-x-1 relative",children:[e.jsx("span",{style:{background:w[l.orders.delivery_status].color},className:"p-1.5 rounded-full"}),e.jsx("p",{style:{color:w[l.orders.delivery_status].color},children:w[l.orders.delivery_status].label}),e.jsx("button",{className:`${l.orders.delivery_status>=400&&"invisible"}`,onClick:()=>a(s=>s===i?null:i),children:e.jsx(F,{className:"lg:text-xl"})}),e.jsx("ul",{className:`${r===i?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-4"} absolute top-6 z-10 lg:top-8 right-0 w-44 transition-all border border-gray-300 rounded-md`,children:w.getOptions(l.orders.delivery_status).map(({label:s,value:d},h)=>e.jsxs("li",{onClick:()=>u(d),className:`${o===d&&t===l.orderId?"[&>span]:hidden !bg-primary-500 !text-gray-50":"[&>p]:hidden"} px-4 py-2 bg-gray-50 text-start cursor-pointer hover:text-gray-950 transition-all rounded-md border-b border-gray-300 hover:bg-gray-100`,children:[e.jsx("span",{children:s}),e.jsxs("p",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"",children:"Click To Submit"}),e.jsx(E,{})]})]},h))})]})}function G({filteredOrders:l,onOrderDetail:i,onStatusChange:p}){const o=_(l,8),[t,x]=m.useState(0);if(!l.length)return e.jsx("div",{className:"h-screen flex items-center flex-col text-primary-900 font-medium gap-4 justify-center text-4xl",children:e.jsx("h4",{children:"There is no order with these details :)"})});if(l.length)return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"relative",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500",children:[e.jsx("thead",{className:"text-sm lg:text-base text-gray-50 uppercase bg-primary-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Order Id"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Customer"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Date"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Price"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Qty"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Status"})]})}),e.jsx("tbody",{children:o[t].items.map((r,a)=>e.jsxs("tr",{className:"bg-gray-100 border-b text-sm lg:text-base",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap ",children:e.jsx("button",{onClick:()=>i({selectedOrder:r,detailShow:!0}),className:"line-clamp-1 w-28 xl:w-auto lg:max-w-full hover:underline font-semibold",children:r.orderId})}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:r.paymentInfo.full_Name}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:O(r.createdAt)}),e.jsxs("td",{className:"px-6 py-4 hidden lg:table-cell",children:["$",r.orders.items.reduce((c,u)=>c+Number(u.Price),0)]}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:r.orders.items.reduce((c,u)=>c+Number(u.quantity),0)}),e.jsx("td",{className:"px-6 py-4",children:e.jsx(U,{item:r,index:a,onStatusChange:p})})]},a))})]})}),e.jsxs("div",{className:`${l.length<8&&"hidden"} flex items-center justify-center lg:justify-end my-2`,children:[e.jsx("button",{disabled:t===0,onClick:()=>x(t-1),className:"p-3 bg-gray-50 border border-gray-300 disabled:bg-gray-200",children:e.jsx(M,{})}),o.map((r,a)=>a>t-3&&a<=t+1&&e.jsx("button",{onClick:()=>x(a),className:`${t===a&&"!bg-primary-400 text-gray-50 border-primary-400"} px-4 py-2 bg-gray-50 border border-gray-300`,children:a+1},a)),e.jsx("button",{disabled:t===o.length-1,onClick:()=>x(t+1),className:"p-3 bg-gray-50 border  border-gray-300 disabled:bg-gray-200",children:e.jsx(S,{})})]})]})}function J(){return e.jsx("div",{className:"px-2 py-1 lg:px-4 lg:py-2 animate-pulse",children:e.jsx("div",{className:"relative",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500",children:[e.jsx("thead",{className:"text-sm lg:text-base text-gray-50 uppercase bg-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-6",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})})]})}),e.jsx("tbody",{children:$(20).map((l,i)=>e.jsxs("tr",{className:"bg-gray-100 border-b text-sm lg:text-base",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap ",children:e.jsx("button",{className:"w-28 h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:" hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})})]},i))})]})})})}function le(){const{orderList:{orders:l,loading:i,error:p},getOrders:o}=H(),[{detailShow:t,selectedOrder:x},r]=m.useState({selectedOrder:null,detailShow:!1}),{userId:a}=P(n=>n.userData),[c,u]=m.useState([]),s=A(),d=R();m.useEffect(()=>{o()},[]),m.useEffect(()=>{if(l.length){const n=l==null?void 0:l.find(({orderId:y})=>y===`#${s==null?void 0:s.modalKey}`);n&&r({detailShow:!0,selectedOrder:n})}},[s,l]);async function h(n,y){try{let f={orders:{...n.allItems,[a]:{...n.allItems[a],delivery_status:y}}};Object.entries(n).forEach(([b,j])=>{b!=="orders"&&b!=="allItems"&&(f[b]=j)});const N=L(Y,"Orders",n.orderId);await q(N,f),v.success("order updated"),o()}catch{v.error("failed to update order status")}}function g(){r({detailShow:!1,selectedOrder:null}),d("/EcoVibe/dashboard/Orders")}if(i)return e.jsx(J,{});if(!(l!=null&&l.length)&&p)return e.jsx("div",{className:"h-screen flex items-center justify-center",children:e.jsx("h4",{className:"text-3xl font-bold text-primary-500",children:"You Haven't Any Order, Please Try Again Later"})});if(!i&&(l!=null&&l.length))return e.jsxs("div",{className:"px-2 py-1 lg:px-4 lg:py-2",children:[e.jsx(Q,{allOrders:l,onFilterChange:u}),e.jsx(G,{filteredOrders:c,onOrderDetail:r,onStatusChange:h}),e.jsxs("div",{className:`${t?"visible opacity-100 translate-y-0":"invisible opacity-0 translate-y-96 lg:translate-y-0"} fixed inset-0 h-screen transition-all duration-500 z-50 lg:flex items-center justify-center`,children:[e.jsx("div",{onClick:g,className:"fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm hidden lg:block"}),e.jsx("div",{className:"lg:w-2/5 z-50",children:x&&e.jsx(V,{orderData:x,onModalClose:g})})]})]})}export{le as default};
