import{j as e,bp as b,q as v,A as N,r as d,u as w,s as S,am as p,cT as C,cU as P,b2 as k,bs as D,bt as E,cS as L,ae as T,af as A,cV as $,_ as y,a9 as z,cW as B}from"./index-Bc-LpspM.js";import{u as F}from"./DashboardContext-CycBpBaG.js";import{S as M}from"./react-select.esm-pku_R0nG.js";import{A as R}from"./AddEditProductForm-BH_e7FQ8.js";import{I as K}from"./IconicAlert-CQtHv7YL.js";import{c as O}from"./index-CbHdAtlf.js";import"./index.esm-DKiaTbqJ.js";import"./index-DxCiKNqn.js";import"./lodash-BgJ17PjB.js";import"./useGetOptions-DPKAixv-.js";function Q(){return e.jsx("div",{className:"lg:flex gap-x-4 w-full",children:e.jsxs("div",{className:"flex flex-col gap-y-2 flex-1",children:[e.jsx("div",{className:"w-full px-2 xl:px-4 py-1",children:e.jsxs("div",{className:"flex items-center justify-center bg-white rounded-md border border-gray-300 lg:h-14",children:[e.jsx("input",{type:"text",className:"outline-none px-2 flex-1 lg:w-full bg-transparent lg:text-lg",placeholder:"search"}),e.jsx("button",{className:"px-4 py-3 rounded-r-md bg-gray-400 text-gray-50 lg:py-4 lg:text-2xl",children:e.jsx(b,{})})]})}),e.jsx("div",{className:"bg-white grid gap-4 grid-cols-1 px-4 py-2 lg:grid-cols-4 max-h-[80vh] overflow-auto styled-scroll-bar",children:v(20).map((l,c)=>e.jsxs("div",{className:"h-32 animate-pulse lg:h-64 xl:h-96 cursor-pointer flex lg:flex-col items-center gap-x-3 bg-gray-100 border border-gray-200 rounded-md px-2 py-1",children:[e.jsx("div",{className:"h-full w-5/12 lg:w-full lg:max-h-[60%] bg-gray-200 rounded-md"}),e.jsxs("div",{className:"w-6/12 lg:w-full flex flex-col justify-evenly h-full lg:max-h-[40%] xl:justify-evenly",children:[e.jsx("h4",{className:"w-4/5 h-4 bg-gray-500 rounded-md"}),e.jsx("p",{className:"w-1/3 h-2 bg-gray-400 rounded-md"}),e.jsx("p",{className:"w-2/5 h-1 bg-gray-300 rounded-md"})]})]},c))})]})})}const V=N.map(({title:l})=>({label:l,value:l}));function Y({setItems:l,products:c}){const[{searchQuery:r,selectedCategory:n},x]=d.useState({searchQuery:"",selectedCategory:""});function s(){const o=c.filter(({Name:t,Category:i})=>n===""?t.toLowerCase().includes(r.toLowerCase()):t.toLowerCase().includes(r.toLowerCase())&&i===n);console.log(o),l(o)}return d.useEffect(()=>{s()},[r,n]),e.jsx("div",{className:"w-full px-2 xl:px-4 py-1",children:e.jsxs("div",{className:"flex items-center justify-center bg-white rounded-md border border-gray-300 lg:h-14",children:[e.jsx("input",{type:"text",className:"outline-none px-2 w-[50%] lg:w-full bg-transparent lg:text-lg ",placeholder:"search",value:r,onChange:o=>{x(t=>({...t,searchQuery:o.target.value}))}}),e.jsx(M,{placeholder:"Sort By",className:"text-sm lg:text-base [&>div]:lg:py-2 [&>div]:border-none border-l border-gray-300 [&>div]:rounded-none w-[35%] lg:max-w-[40%] lg:w-2/12",options:[{label:"All",value:""},...V],onChange:({value:o})=>x(t=>({...t,selectedCategory:o})),isSearchable:!1}),e.jsx("button",{onClick:s,className:"px-4 py-3 rounded-r-md bg-primary-500 text-gray-50 lg:py-4 lg:text-2xl",children:e.jsx(b,{})})]})})}function H({filteredItems:l,setDetail:c}){return e.jsx(e.Fragment,{children:l.length?e.jsx("div",{className:"bg-white grid gap-4 grid-cols-1 px-4 py-2 lg:grid-cols-4 max-h-[80vh] overflow-auto styled-scroll-bar",children:l.map((r,n)=>e.jsxs("div",{onClick:()=>c({modalIsShow:!0,selectedItem:r}),className:"h-32 lg:h-64 xl:h-96 cursor-pointer flex lg:flex-col items-center gap-x-3 bg-gray-100 border border-gray-200 rounded-md px-2 py-1",children:[e.jsx("div",{className:"h-full w-5/12 lg:w-full lg:max-h-[60%] bg-gray-200 rounded-md",children:e.jsx("img",{src:r.Thumbnail,alt:"product-thumbnail",className:"size-full object-cover rounded-md"})}),e.jsxs("div",{className:"w-6/12 lg:w-full flex flex-col justify-evenly h-full lg:max-h-[40%] xl:justify-between xl:pt-3.5",children:[e.jsx("h4",{className:"text-lg xl:text-xl line-clamp-1 font-medium",children:r.Name}),e.jsx("p",{className:"line-clamp-3 py-1 text-xs xl:text-base xl:flex-1",children:r.Description}),e.jsxs("p",{className:"text-primary-700 font-bold xl:text-lg",children:["$",r.Price]})]})]},n))}):e.jsx("div",{className:"h-screen flex items-center justify-center text-3xl font-bold text-primary-500 text-center",children:e.jsx("h4",{children:"There is no product with this name or category"})})})}function W({selectedItem:l,onModalClose:c,setEditShow:r}){var u;const[n,x]=d.useState(!1),s=d.useRef(),o=w();S(null,null,s);const[t,i]=d.useState("");return d.useEffect(()=>{i(l==null?void 0:l.Images[0])},[l]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full bg-gray-200 rounded-md relative",children:[e.jsx("img",{src:t,alt:"product-thumbnail",className:"w-full object-cover rounded-md h-64"}),e.jsx("button",{onClick:()=>c({modalIsShow:!1,selectedItem:null}),className:"absolute p-2 bg-gray-500/80 text-gray-50 rounded-full text-3xl top-2 left-2",children:e.jsx(p,{})}),e.jsx("button",{onClick:()=>r(!0),className:"absolute p-2 bg-primary-500/80 text-gray-50 rounded-full text-3xl top-2 right-2",children:e.jsx(C,{})}),e.jsxs("div",{className:"absolute bottom-0 shadow-inner w-full px-4 py-2",children:[e.jsx("h4",{className:"text-2xl font-bold text-gray-50 bg-gray-700/20 backdrop-blur-sm px-1 w-fit",children:l==null?void 0:l.Name}),e.jsx("p",{className:"bg-gray-700 w-fit text-gray-50 bg-gray-700/20 backdrop-blur-sm px-1",children:l==null?void 0:l.Category})]})]}),e.jsxs("div",{className:"flex flex-col gap-y-1 my-2 items-start",children:[e.jsx("h6",{className:"text-3xl font-bold",children:"Description"}),e.jsx("p",{className:`${n?"line-clamp-none":"line-clamp-4"} transition-all w-full`,children:l==null?void 0:l.Description}),e.jsx("button",{onClick:()=>x(a=>!a),className:`${(l==null?void 0:l.Description.length)<240&&"hidden"} text-primary-500 font-semibold`,children:n?"Less":"Show More..."}),e.jsxs("h6",{className:"text-xl font-semibold",children:["Price: ",l==null?void 0:l.Price]})]}),e.jsxs("div",{className:"relative flex items-center justify-start",children:[e.jsx("button",{onClick:()=>s.current.scrollLeft-=200,className:"absolute left-0 mb-1.5 p-1 opacity-50 hover:opacity-100 transition-all bg-primary-800 rounded-full text-2xl text-gray-50",children:e.jsx(p,{})}),e.jsx("div",{ref:s,className:"w-full overflow-x-scroll py-2 scroll-smooth hidden-scroll-bar md:px-4 my-4",children:e.jsx("div",{className:"inline-flex items-center gap-5 select-none",children:l==null?void 0:l.Images.map((a,g)=>e.jsx("div",{className:`${t===a&&"lg:scale-110 rotate-6 -z-10"}  size-20 bg-gray-300 rounded-md transition-all`,children:e.jsx("img",{onClick:()=>i(a),src:a,className:"size-full rounded-md object-cover",draggable:!1})},g))})}),e.jsx("button",{onClick:()=>s.current.scrollLeft+=200,className:"absolute right-0 mb-1.5 p-1 opacity-50 hover:opacity-100 transition-all bg-primary-800 rounded-full text-2xl text-gray-50",children:e.jsx(P,{})})]}),e.jsx("div",{className:"flex flex-col gap-y-2 mb-4",children:l==null?void 0:l.Options.map(({title:a,options:g},f)=>e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsxs("h4",{className:"text-lg lg:text-lg font-bold",children:[a,":"]}),e.jsx("div",{className:"flex items-center gap-x-1 flex-wrap w-2/3",children:g.map((h,j)=>{var m;return e.jsxs("span",{className:"text-sm lg:text-base",children:[a==="Color"?(m=O(h))==null?void 0:m.name:h,","]},j)})})]},f))}),e.jsx("div",{className:"flex flex-wrap items-start justify-start gap-2 mb-20",children:((u=l==null?void 0:l.Tags)==null?void 0:u.length)>0&&(l==null?void 0:l.Tags.map((a,g)=>e.jsxs("button",{onClick:()=>o(`/EcoVibe/Explore-products/tags=${a}`),className:"px-2.5 py-1 bg-primary-500 text-gray-50 rounded-md border border-gray-50 hover:text-primary-500 hover:bg-gray-50 transition-all hover:border-primary-500",children:["#",a]},g)))})]})}function _({selectedItem:l,onModalClose:c,getProducts:r}){const[n,x]=d.useState(!1),[{loading:s,isSelected:o},t]=d.useState({isSelected:!1,loading:!1});async function i(){var u;if(o)try{t(f=>({...f,loading:!0}));const a=(u=l.Images)==null?void 0:u.map(async f=>{const h=D(E,f);await L(h)});await Promise.all(a);const g=T(A,"Products",l.id);await $(g),y("Product successfully deleted"),window.location.reload()}catch(a){y.error("There was an error deleting the product"),console.log(a)}finally{t({isSelected:!1,loading:!1})}else t(a=>({...a,isSelected:!0}))}return e.jsxs("div",{className:"flex h-full flex-col gap-y-2 max-h-screen overflow-auto styled-scroll-bar px-2 py-1 ",children:[e.jsx(W,{selectedItem:l,onModalClose:c,setEditShow:x}),e.jsx("div",{className:"absolute right-0 bottom-0 w-full bg-gray-50 px-2 py-2",children:e.jsx("button",{onClick:i,className:"py-2 text-lg border-2 border-gray-900 text-gray-900 rounded-md w-full hover:bg-gray-900 hover:text-gray-50 transition-all",children:"Delete Product"})}),e.jsx("div",{className:`${n?"visible opacity-100":"invisible opacity-0"} transition-all fixed inset-0 flex items-center justify-center`,children:n&&e.jsx(R,{onModalChange:()=>x(!1),isEdit:!0,selectedProduct:l,getProducts:r})}),o&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-950/80 backdrop-blur",children:e.jsx(K,{title:"Are you sure you want to delete this product?",subTitle:"Cancel",callBack:i,onClose:()=>t({isSelected:!1,loading:!1})})}),s&&e.jsxs("div",{className:"fixed inset-0 bg-gray-50 flex flex-col items-center justify-center",children:[e.jsx(k,{className:"size-24"}),e.jsx("h4",{className:"text-3xl font-bold",children:"Delete Product..."})]})]})}function ae(){const[l,c]=d.useState([]),[{modalIsShow:r,selectedItem:n},x]=d.useState({modalIsShow:!1,selectedItem:null}),{products:{products:s,loading:o},getProducts:t}=F(),i=z();if(d.useEffect(()=>{const u=(i==null?void 0:i.modalKey)&&!["add-story","add-product"].includes(i.modalKey);x({modalIsShow:u,selectedItem:u?s.find(a=>a.id===i.modalKey):null})},[i,s]),d.useEffect(()=>{c(s)},[s]),o)return e.jsx(Q,{});if(!o&&(s!=null&&s.length))return e.jsxs("div",{className:"lg:flex gap-x-4 w-full min-h-screen",children:[e.jsxs("div",{className:"flex flex-col gap-y-2 flex-1",children:[e.jsx(Y,{setItems:c,products:s}),e.jsx(H,{filteredItems:l,setDetail:x})]}),e.jsx("div",{className:`${r?"fixed inset-0 bg-white opacity-100 visible lg:relative lg:w-4/12":"opacity-0 invisible absolute right-0 -translate-x-96"} transition-all duration-500 lg:mx-2 z-50`,children:e.jsx(_,{selectedItem:n,onModalClose:()=>x({modalIsShow:!1,selectedItem:null}),getProducts:t})})]});if(!(s!=null&&s.length))return e.jsxs("div",{className:"h-screen flex flex-col items-center justify-center",children:[e.jsx("h4",{className:"text-3xl text-primary-500 text-center font-bold",children:"You Have No Product Yet"}),e.jsx(B,{to:"/EcoVibe/Dashboard/Products/add-product",className:"px-4 py-2 my-2 text-lg bg-primary-500 text-gray-50 rounded-md",children:"Add Your First Product"})]})}export{ae as default};
