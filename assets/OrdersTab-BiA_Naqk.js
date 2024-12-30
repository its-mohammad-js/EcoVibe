import{j as e,C as w,K as S,r as u,p as D,h as I,a as E,v as F,u as T,I as k,z as P,J as A,_ as O}from"./index-BktEY0AR.js";import{E as C,s as M,l as _}from"./index-B_HFf_np.js";import{a as $}from"./index-Cz5Hziye.js";import{u as L}from"./UseDisableScroll-CkfVoSi8.js";import{S as R}from"./react-select.esm-BGlIssT-.js";import{l as Y}from"./lodash-f6c8T4ME.js";import{u as z}from"./DashboardContext-C7-_orKa.js";import"./iconBase-BL6_KYrt.js";import"./useMediaQuery-sTwrKcTY.js";import"./Select-49a62830.esm-PKmHK7Zp.js";import"./index-CnyDuYXe.js";function q({orderData:l,onModalClose:x}){const{orderId:p,orders:o,paymentInfo:r,shippingMethod:m,createdAt:t,totalPrice:c}=l;return L(),e.jsxs("div",{className:"flex flex-col px-4 py-2 h-screen lg:py-3 bg-gray-50 lg:h-[35rem] xl:h-[42rem] max-h-[90vh] overflow-auto styled-scroll-bar lg:rounded-md",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-x-2 text-gray-600",children:[e.jsx("p",{children:"Orders"}),e.jsx(C,{className:"text-gray-400 text-sm"}),e.jsx("p",{className:"line-clamp-1 w-28",children:p})]}),e.jsx("button",{onClick:x,className:"text-xl p-1 text-gray-50 bg-gray-400 rounded-full",children:e.jsx($,{})})]}),e.jsxs("div",{className:"py-2 flex flex-col gap-y-1",children:[e.jsxs("h4",{className:"flex gap-x-2 text-lg font-semibold",children:[e.jsx("p",{children:"ORDER ID:"}),e.jsx("p",{className:"line-clamp-1 w-2/3 break-words",children:p})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["ordered at: ",w(t)]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-xl font-bold text-gray-950",children:"Ordered Items :"}),e.jsx("div",{className:"flex flex-col gap-y-2 max-h-96 overflow-auto styled-scroll-bar",children:o.items.map((n,g)=>e.jsxs("div",{className:"w-full h-32 flex items-center px-2 py-2 border-b border-gray-400 last-of-type:border-none",children:[e.jsx("div",{className:"h-full w-2/5 border-2 border-gray-200 bg-gray-200 rounded-lg",children:e.jsx("img",{src:n.Thumbnail,alt:"product-thumbnail",className:"w-full h-full object-cover rounded-lg"})}),e.jsxs("div",{className:"w-3/5 flex flex-col h-full justify-evenly px-2",children:[e.jsx("h6",{className:"font-semibold line-clamp-1",children:n.Name}),e.jsx("div",{className:"text-sm text-gray-700",children:e.jsxs("p",{children:["price $",n.Price," * ",n.quantity]})}),e.jsx("p",{className:"flex items-center flex-wrap",children:n.selectedOption.map((s,a)=>a<10&&e.jsx("span",{className:"text-xs border-r border-gray-700 line-clamp-1 px-1 last-of-type:border-none",children:s.option},a))})]})]},g))})]}),e.jsxs("div",{className:"max-h-48 styled-scroll-bar overflow-auto",children:[e.jsxs("div",{className:"pt-2 pb-4 text-sm text-gray-800 border-b border-gray-400",children:[e.jsx("h4",{className:"text-gray-950 text-xl font-bold",children:"Customer Info :"}),e.jsxs("p",{children:["Name : ",r.full_Name]}),e.jsxs("p",{children:["Country : ",r.country]}),e.jsxs("p",{children:["City : ",r.city]}),e.jsxs("p",{children:["Address : ",r.address]}),e.jsxs("p",{children:["Email : ",r.email]}),e.jsxs("p",{children:["Post Code : ",r.post_Code]}),e.jsxs("p",{children:["Phone Number : ",r.phone_Number]})]}),e.jsxs("div",{className:"py-2 flex flex-col",children:[e.jsxs("div",{className:"order-2 text-sm text-gray-800",children:[e.jsx("h4",{className:"text-xl font-bold",children:"Need Help ?"}),e.jsx("p",{className:"underline cursor-pointer w-fit",children:"Order Issues"}),e.jsx("p",{className:"underline cursor-pointer w-fit",children:"Delivery Info"}),e.jsx("p",{className:"underline cursor-pointer w-fit",children:"Returns"})]}),e.jsxs("div",{className:"text-sm text-gray-800 my-2",children:[e.jsx("h4",{className:"text-xl font-bold text-gray-950",children:"Order Summary :"}),e.jsxs("p",{children:["Total Price : $",c]}),e.jsxs("p",{children:["Shipping Method : ",m.title]}),e.jsxs("p",{children:["Total Items : ",o.items.length]})]})]})]})]})}const H=[{label:"All Orders",value:""},...S.getOptions(0)];function K({allOrders:l,onFilterChange:x}){const[{search:p,status:o,from:r,to:m},t]=u.useState({search:"",status:"",from:null,to:null});u.useEffect(()=>{x(l)},[l]);function c(){let s=[...l];Object.entries({search:p,status:o}).forEach(([a,i])=>{switch(a){case"search":s=s.filter(({orderId:h,paymentInfo:d})=>h.toLowerCase().includes(i)||d.full_Name.toLowerCase().includes(i));break;case"status":i!==""&&(s=s.filter(({orders:h})=>h.delivery_status===i));break}}),x(g(s,r,m))}u.useEffect(()=>{c()},[o,p,r,m]);function n(s,a){if(!s.target.value){t(d=>({...d,[a]:null}));return}const i=new Date(s.target.value),h={year:i.getFullYear(),month:i.getMonth()};t(d=>({...d,[a]:h}))}function g(s,a,i){if(!a||!i)return s;const h=a.year,d=a.month,y=i.year,f=i.month;return Y.filter(s,N=>{const j=w(N==null?void 0:N.createdAt,{year:"numeric",month:"2-digit"}).split("/"),b=Number(j[1]),v=Number(j[0]-1);return b>=h&&(b>h||v>=d)&&b<=y&&(b<y||v<=f)})}return e.jsxs("div",{className:"my-2 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-2 gap-y-2",children:[e.jsxs("div",{className:"flex items-center px-4 py-2 gap-x-2 rounded-md border border-gray-300 xl:w-[55%]",children:[e.jsx("p",{className:"text-gray-500 text-sm",children:e.jsx(M,{})}),e.jsx("input",{onChange:s=>t(a=>({...a,search:s.target.value})),type:"text",placeholder:"Search orders by id or customer",className:"bg-transparent outline-none flex-1"})]}),e.jsxs("div",{className:"flex flex-col xl:w-[45%] xl:flex-row xl:items-center justify-between gap-2",children:[e.jsx(R,{placeholder:"All Orders",className:"lg:[&>div]:py-0.5",options:H,onChange:({value:s})=>t(a=>({...a,status:s}))}),e.jsxs("div",{className:"w-full xl:w-fit gap-x-4 flex items-center justify-between",children:[e.jsx("label",{htmlFor:"FromDate",className:"font-bold",children:"From:"}),e.jsx("input",{onChange:s=>{n(s,"from")},type:"month",id:"FromDate",className:"outline-none border border-gray-300 px-2 rounded-md py-2"})]}),e.jsxs("div",{className:"w-full xl:w-fit gap-x-4 flex items-center justify-between",children:[e.jsx("label",{htmlFor:"ToDate",className:"font-bold",children:"To:"}),e.jsx("input",{onChange:s=>n(s,"to"),type:"month",id:"ToDate",className:"outline-none border border-gray-300 px-2 rounded-md py-2"})]})]})]})}function B({filteredOrders:l,onOrderDetail:x,onStatusChange:p}){const o=D(l,8),[r,m]=u.useState(0);if(!l.length)return e.jsx("div",{className:"h-screen flex items-center flex-col text-primary-900 font-medium gap-4 justify-center text-4xl",children:e.jsx("h4",{children:"There is no order with these details :)"})});if(l.length)return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"relative",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500",children:[e.jsx("thead",{className:"text-sm lg:text-base text-gray-50 uppercase bg-primary-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Order Id"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Customer"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Date"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Price"}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:"Qty"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Status"})]})}),e.jsx("tbody",{children:o[r].items.map((t,c)=>e.jsxs("tr",{className:"bg-gray-100 border-b text-sm lg:text-base",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap ",children:e.jsx("button",{onClick:()=>x({selectedOrder:t,detailShow:!0}),className:"line-clamp-1 w-28 xl:w-auto lg:max-w-full hover:underline font-semibold",children:t.orderId})}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:t.paymentInfo.full_Name}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:w(t.createdAt)}),e.jsxs("td",{className:"px-6 py-4 hidden lg:table-cell",children:["$",t.orders.items.reduce((n,g)=>n+Number(g.Price),0)]}),e.jsx("td",{className:"px-6 py-4 hidden lg:table-cell",children:t.orders.items.reduce((n,g)=>n+Number(g.quantity),0)}),e.jsx("td",{className:"px-6 py-4",children:e.jsx(ChangeStatusMenu,{item:t,index:c,onStatusChange:p})})]},c))})]})}),e.jsxs("div",{className:`${l.length<8&&"hidden"} flex items-center justify-center lg:justify-end my-2`,children:[e.jsx("button",{disabled:r===0,onClick:()=>m(r-1),className:"p-3 bg-gray-50 border border-gray-300 disabled:bg-gray-200",children:e.jsx(_,{})}),o.map((t,c)=>c>r-3&&c<=r+1&&e.jsx("button",{onClick:()=>m(c),className:`${r===c&&"!bg-primary-400 text-gray-50 border-primary-400"} px-4 py-2 bg-gray-50 border border-gray-300`,children:c+1},c)),e.jsx("button",{disabled:r===o.length-1,onClick:()=>m(r+1),className:"p-3 bg-gray-50 border  border-gray-300 disabled:bg-gray-200",children:e.jsx(C,{})})]})]})}function J(){return e.jsx("div",{className:"px-2 py-1 lg:px-4 lg:py-2 animate-pulse",children:e.jsx("div",{className:"relative",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500",children:[e.jsx("thead",{className:"text-sm lg:text-base text-gray-50 uppercase bg-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-6",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-3 hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})})]})}),e.jsx("tbody",{children:I(20).map((l,x)=>e.jsxs("tr",{className:"bg-gray-100 border-b text-sm lg:text-base",children:[e.jsx("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap ",children:e.jsx("button",{className:"w-28 h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:" hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"hidden lg:table-cell",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})}),e.jsx("td",{className:"",children:e.jsx("p",{className:"w-3/5 h-2 bg-gray-300 rounded-md"})})]},x))})]})})})}function te(){const{orderList:{orders:l,loading:x,error:p},getOrders:o}=z(),[{detailShow:r,selectedOrder:m},t]=u.useState({selectedOrder:null,detailShow:!1}),{userId:c}=E(d=>d.userData),[n,g]=u.useState([]),s=F(),a=T();u.useEffect(()=>{o()},[]),u.useEffect(()=>{if(l.length){const d=l==null?void 0:l.find(({orderId:y})=>y===`#${s==null?void 0:s.modalKey}`);d&&t({detailShow:!0,selectedOrder:d})}},[s,l]);async function i(d,y){try{let f={orders:{...d.allItems,[c]:{...d.allItems[c],delivery_status:y}}};Object.entries(d).forEach(([j,b])=>{j!=="orders"&&j!=="allItems"&&(f[j]=b)});const N=k(P,"Orders",d.orderId);await A(N,f),O.success("order updated"),o()}catch{O.error("failed to update order status")}}function h(){t({detailShow:!1,selectedOrder:null}),a("/EcoVibe/dashboard/Orders")}if(x)return e.jsx(J,{});if(!(l!=null&&l.length)&&p)return e.jsx("div",{className:"h-screen flex items-center justify-center",children:e.jsx("h4",{className:"text-3xl font-bold text-primary-500",children:"You Haven't Any Order, Please Try Again Later"})});if(!x&&(l!=null&&l.length))return e.jsxs("div",{className:"px-2 py-1 lg:px-4 lg:py-2",children:[e.jsx(K,{allOrders:l,onFilterChange:g}),e.jsx(B,{filteredOrders:n,onOrderDetail:t,onStatusChange:i}),e.jsxs("div",{className:`${r?"visible opacity-100 translate-y-0":"invisible opacity-0 translate-y-96 lg:translate-y-0"} fixed inset-0 h-screen transition-all duration-500 z-50 lg:flex items-center justify-center`,children:[e.jsx("div",{onClick:h,className:"fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm hidden lg:block"}),e.jsx("div",{className:"lg:w-2/5 z-50",children:m&&e.jsx(q,{orderData:m,onModalClose:h})})]})]})}export{te as default};
