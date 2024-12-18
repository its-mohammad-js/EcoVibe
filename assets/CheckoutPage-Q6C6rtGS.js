import{b as N,c as E,j as e,b6 as q,k as L,l as $,r as f,R as z,u as A,_ as y,b7 as M,aj as X,W as Q,ai as W,aa as Y,b8 as D,aQ as R}from"./index-BOiJ9usr.js";import{u as B}from"./index.esm-B5vQHvwU.js";import{A as H}from"./AddCreditCardForm-DOpy5E2g.js";import{T as J}from"./TextInput-GCl8a_qX.js";import{S as U}from"./index-BNievUSk.js";import{l as G}from"./lodash-DC0sVoSL.js";import"./react-select.esm-DvOs7XXf.js";function K({shippingCost:n,totalPrice:i}){const{cartData:s}=N(o=>o.userData),u=E(),l=Number(i)+Number(n);function p(o){const d=s.filter(a=>a.orderId!==o);u(L({data:d,field:"cartData"}))}return e.jsxs("div",{id:"wrapper",className:"bg-white w-full lg:px-4 pb-4 lg:border rounded-md",children:[e.jsx("h4",{className:"text-xl lg:text-2xl font-medium my-2",children:"Order Summary"}),e.jsx("div",{className:"flex flex-col gap-4 h-96 overflow-auto px-1 py-0.5 styled-scroll-bar",children:s.map(({Name:o,Price:d,quantity:a,Thumbnail:t,orderId:r},c)=>e.jsxs("div",{className:"border-2 rounded-md h-32 flex items-center px-2 py-1 gap-4 relative",children:[e.jsx("div",{className:"w-2/5 h-full",children:e.jsx("img",{src:t,alt:"",className:"w-full h-full object-cover rounded-xl"})}),e.jsxs("div",{className:"flex flex-col flex-1 gap-y-0.5 text-gray-500",children:[e.jsx("h6",{className:"font-medium line-clamp-1 text-lg text-gray-950",children:o}),e.jsxs("p",{className:"",children:["$",d]}),e.jsxs("p",{children:["Quantity: ",a]})]}),e.jsx("button",{onClick:()=>p(r),className:"absolute top-1 right-1 text-2xl text-red-500",children:e.jsx(q,{})})]},c))}),e.jsx("hr",{className:"my-4"}),e.jsxs("div",{className:"flex flex-col gap-y-4 px-4 font-semibold text-gray-700",children:[e.jsxs("p",{className:"w-full flex items-center justify-between",children:[e.jsx("span",{children:"Subtotal:"})," ",e.jsx("span",{children:i==null?void 0:i.toFixed(2)})]}),e.jsxs("p",{className:"w-full flex items-center justify-between",children:[e.jsx("span",{children:"Shiping Cost:"})," ",e.jsx("span",{children:n||0})]}),e.jsxs("p",{className:"w-full flex items-center justify-between",children:[e.jsx("span",{children:"Discount: "})," ",e.jsx("span",{children:"0"})]}),e.jsx("hr",{className:"my-1"}),e.jsxs("p",{className:"w-full flex items-center justify-between",children:[e.jsx("span",{children:"Total Amount: "}),e.jsx("span",{children:Number(l).toFixed(2)})]})]})]})}const Z=[{name:"full_Name",placeholder:"John Doe",validation:{required:{value:!0,message:"test"},minLength:{value:4,message:"Min Length Is 4 Characters"}},cols:3},{name:"phone_Number",placeholder:"892-345-145",validation:{minlength:{value:8,message:"Please Enter 8 Numbers At Least"}},cols:3},{name:"email",placeholder:"Example@mail.com",validation:{minLength:{value:4,message:"Minimum Length Is 4 Characters"},pattern:{value:{},message:"Invalid email format"}},cols:3},{name:"address",placeholder:"Plsease Enter A Valid Address",validation:{minLength:{value:15,message:"Minimum Length Is 15 Characters"}},cols:3},{name:"post_Code",placeholder:"XX-XX",validation:{minLength:{value:4,message:"Minimum Length Is 4 Characters"},max:{value:9999,message:"Invalide code format"}}},{name:"Country",placeholder:"Iran"},{name:"City",placeholder:"Tehran"}];function ee({register:n,errors:i}){return e.jsx("div",{className:"grid gap-y-12 lg:gap-x-6 lg:grid-cols-6 lg:grid-rows-3 mb-16",children:Z.map((s,u)=>{var l;return e.jsx(J,{label:s.name.replace("_"," "),id:s.name,placeholder:s.placeholder,register:{...n(s.name,{...s.validation,required:{value:!0,message:"This Field Is Required"}})},error:(l=i[s.name])==null?void 0:l.message,style:`w-full [&>input]:bg-gray-50 [&>p]:text-sm ${s.cols===3?"lg:col-span-3":"lg:col-span-2 lg:mt-1"}`},u)})})}function se({selectedCard:n,setCardModal:i,setCard:s}){const u=$({maxWidth:480}),{personalInformation:{creditCards:l}}=N(a=>a.userData),p=f.useRef(null),o={dots:!0,infinite:!0,arrows:!1,speed:1200,appendDots:d,slidesToShow:!u&&(l==null?void 0:l.length)>1?2:1,slidesToScroll:!u&&(l==null?void 0:l.length)>1?2:1};function d(a,t){var c;const r=(c=t==null?void 0:t.current)==null?void 0:c.innerSlider.state.currentSlide;return e.jsx("div",{className:"w-full bg-red-600",children:a.map((h,g)=>e.jsx("button",{className:`${r===g?"bg-primary-700":"bg-gray-500"} p-1 lg:p-1.5 mx-0.5 rounded-full transition-all`},g))})}return e.jsxs("div",{className:"w-full pb-8 lg:pb-0",children:[e.jsx("h6",{className:"font-medium mb-2 first-letter:uppercase lg:text-lg",children:"Select Credit Card :"}),l!=null&&l.length?e.jsx(U,{ref:p,...o,className:"lg:w-[50rem] lg:mx-auto",children:l.map(({provider:a,code_number:t,name:r,cvv:c,cardId:h},g)=>e.jsx("div",{onClick:()=>s(h),children:e.jsxs("div",{className:`${(l==null?void 0:l.length)<=1&&"w-full xl:h-72"} w-11/12 h-48 relative p-3.5 z-10`,children:[e.jsx("p",{className:`${n===h?"opacity-100 visible":"opacity-0 invisible"} absolute text-primary-600 text-lg p-2 rounded-full bg-gray-50 transition-all`,children:e.jsx(z,{})}),e.jsx("div",{className:"absolute inset-0 -z-10 bg-gradient-to-br from-primary-300 to-primary-950 rounded-2xl",children:e.jsx("img",{src:a.bgUrl,alt:"card-bg",className:"w-full h-full object-cover object-right rounded-2xl"})}),e.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-end text-gray-200",children:[e.jsx("p",{className:"text-xl lg:text-2xl font-semibold mb-2",children:t}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-medium",children:r}),e.jsxs("p",{children:["CVV : ",c]})]})]})]})},g))}):e.jsxs("div",{className:"flex items-center justify-center flex-col gap-y-2 py-8",children:[e.jsx("p",{className:"font-bold",children:"You Don't Have Credit Card"}),e.jsx("button",{onClick:()=>i(!0),type:"button",className:"px-2 py-1.5 text-sm text-white bg-primary-600 rounded-md",children:"Add New"})]})]})}function le({shippingMethod:n,totalPrice:i,setLoading:s}){const{register:u,formState:{errors:l},handleSubmit:p,setValue:o}=B({mode:"all"}),{personalInformation:{first_name:d,last_name:a,address:t,creditCards:r},userId:c,cartData:h}=N(m=>m.userData),[g,w]=f.useState(null),S=$({maxWidth:480}),[_,C]=f.useState(),[I,F]=f.useState(1),k=E(),T=A();f.useEffect(()=>{const m=()=>{F(window.scrollY<=450?1:2)};return window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}},[]),f.useEffect(()=>{var m;(d&&a||t)&&[{title:"full_Name",value:`${d} ${a}`},{title:"address",value:t||""}].forEach(({title:j,value:b})=>o(j,b)),r!=null&&r.length&&w((m=r[0])==null?void 0:m.cardId)},[d,a,t,r]);async function O(m){if(!g){y.error("Please select a credit card first");return}const v=G.uniq(h.map(x=>x.SellerId));let j={};v.forEach(x=>{j[x]={items:h.filter(({SellerId:P})=>P===x),delivery_status:100}});const b=`#${Y(c)}`,V={orderId:b,createdAt:M.now(),paymentInfo:m,shippingMethod:{title:n==null?void 0:n.title},orders:j,totalPrice:(Number(n.cost)+Number(i)).toFixed(2),sellers:v,customerId:c};try{s(!0);const x=X(Q,"Orders",b);await W(x,V),k(L({field:"cartData",data:[]})),y.success("order submited successfully"),T("/EcoVibe/bag/orders")}catch(x){y.remove(),y.error(x==null?void 0:x.message),console.log(x)}finally{s(!1)}}return e.jsxs("div",{id:"wrapper",className:"bg-white px-4 py-2 rounded-md border",children:[e.jsx("h4",{className:"text-xl lg:text-2xl font-medium mb-4",children:"Payment Information"}),e.jsxs("form",{onSubmit:p(m=>{I==1&&S?window.scroll(0,450):O(m)}),children:[e.jsx(ee,{register:u,errors:l}),e.jsx("hr",{className:"my-4"}),e.jsx(se,{selectedCard:g,setCardModal:C,setCard:w}),e.jsx("div",{className:"fixed lg:static bottom-0 left-0 p-3 bg-gray-100 w-full rounded-t-lg z-10 border-t-2 border-gray-300 lg:p-0 lg:border-0 lg:mt-8",children:e.jsx("button",{className:"px-4 py-2 w-full bg-primary-600 rounded-lg text-gray-50 text-lg",children:I===1&&S?"Continue to payment":"Complete order"})})]}),e.jsx("div",{className:`${_?"visible opacity-100":"invisible opacity-0"} transition-all duration-200`,children:e.jsx(H,{onModalClose:()=>C(!1)})})]})}function de(){const{loading:n,cartData:i}=N(a=>a.userData),[s,u]=f.useState(D[0]),l=A(),p=i.reduce((a,t)=>a+Number(t.Price),0),[o,d]=f.useState(null);return o?e.jsxs("div",{className:"h-screen flex flex-col gap-y-5 justify-center items-center",children:[e.jsx(R,{className:"size-24"}),e.jsx("h4",{className:"text-3xl font-bold text-primary-900 animate-pulse",children:"Sumbit Your Order..."})]}):i.length?e.jsxs("div",{id:"wrapper",className:`${n&&"animate-pulse select-none pointer-events-none"} mx-auto 2xl:max-w-screen-2xl px-2 py-1 lg:px-6 lg:py-4`,children:[e.jsxs("div",{className:"lg:flex items-start justify-center lg:gap-x-20",children:[e.jsx("div",{className:"lg:order-2 mb-4 lg:basis-1/3",children:e.jsx(K,{shippingCost:s==null?void 0:s.cost,totalPrice:p})}),e.jsx("div",{className:"lg:basis-2/3",children:e.jsx(le,{shippingMethod:s,totalPrice:p,setLoading:d})})]}),e.jsx("div",{className:"w-full order-3",children:e.jsxs("div",{className:"flex flex-col px-4 py-2",children:[e.jsx("h4",{className:"text-xl lg:text-2xl font-medium my-2",children:"Shipping Address"}),e.jsx("div",{className:"flex flex-col lg:flex-row w-full items-center gap-4",children:D.map(({logoUrl:a,cost:t,subTitle:r,title:c},h)=>e.jsxs("div",{onClick:()=>u({logoUrl:a,cost:t,subTitle:r,title:c}),className:`${(s==null?void 0:s.title)===c?"bg-primary-50 border-primary-500":"bg-gray-50"} flex items-center gap-x-4 w-full h-28 rounded-md px-4 py-2 lg:basis-3/12 border-2 transition-all`,children:[e.jsx("div",{className:"basis-2/5 border-r h-full",children:e.jsx("img",{src:a,alt:"shipping-logo",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"h-full flex flex-col justify-center text-sm text-gray-700 gap-1",children:[e.jsx("h6",{className:"text-lg line-clamp-1 font-bold",children:c}),e.jsx("p",{children:r}),e.jsxs("p",{children:["$",t]})]})]},h))})]})})]}):e.jsxs("div",{className:"h-screen flex items-center justify-center flex-col",children:[e.jsx("h4",{className:"text-2xl font-medium lg:text-4xl",children:"Cart Is Empty"}),e.jsx("button",{onClick:()=>l("/EcoVibe/Explore-products/"),className:"mt-4 lg:mt-6 px-4 py-2 rounded-md bg-primary-500 text-gray-50 lg:text-xl",children:"Explore Products"})]})}export{de as default};
