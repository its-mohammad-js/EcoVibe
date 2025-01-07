import{a as w,b as O,r as f,j as e,Z as F,e as _,h as v,v as E,u as C,V as A,c as H,y as q,z as k,G as V,C as I,E as S,D as P,F as L,_ as j,i as D,I as U,K as Y,X as B,g as W}from"./index-ESrmrEOn.js";import{a as G}from"./index-C-Bc6qyG.js";import{T as Q}from"./TextInput-Cz3yFmJA.js";import{u as K}from"./index.esm-C_jGV2eA.js";import{j as X,c as Z}from"./index-OB9ZjW7E.js";import{S as $}from"./StoryListModal-BiXd5K4l.js";import{l as J}from"./lodash-CzOzwPMQ.js";import{c as M,m as ee}from"./index-CNr8gGGJ.js";import{A as se}from"./AddStoryModal-CjJt7EUf.js";import{u as te}from"./useCreateChatRoom-DfYnz20J.js";import{u as le}from"./useGetStories-Bbr6IcXw.js";import{u as ae}from"./useTouchScroll-Bn-H9yGj.js";import{C as R}from"./ContentSwitcher-O8vyYG-5.js";import"./iconBase-Bj5bncte.js";import"./index-CkFdn7M8.js";import"./useMediaQuery-BWkRnAdY.js";import"./UseDisableScroll-D8RzUP5N.js";import"./motion-BS1Z_Kp4.js";import"./index-C72pA4T2.js";import"./index-BAQw_jf8.js";import"./UseOutsideClick-CCOyNy9R.js";import"./index-DzCauULZ.js";import"./index-DAeIldZ9.js";import"./index-tLdj4Ho7.js";const re=[{name:"business_name",placeholder:"What Should We Call You?"},{name:"career_title",placeholder:"Your Career Title"}];function ie({onModalClose:s}){var u;const{loading:t,businessInformation:l}=w(n=>n.userData),{register:a,handleSubmit:i,setValue:c,formState:{errors:x}}=K(),d=O();if(f.useEffect(()=>{Object.entries(l).map(([n,o])=>{c(n,o)})},[l]),t)return e.jsxs("div",{className:"z-40 size-full flex items-center justify-center flex-col bg-gray-50/80",children:[e.jsx(F,{className:"size-24"}),e.jsx("h4",{className:"text-2xl lg:text-4xl font-bold text-center",children:"Update Your Business Information..."})]});if(!t)return e.jsxs("form",{onSubmit:i(async n=>{await d(_({field:"businessInformation",data:{...l,...n}})),s(),window.location.reload()}),className:"bg-gray-50 rounded-lg w-full h-full lg:w-96 lg:max-h-[80vh] z-50 px-4 py-2 relative",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-xl font-bold text-primary-900",children:"Edit Business Information"}),e.jsx("button",{type:"button",onClick:()=>s(),className:"p-1.5 text-xl rounded-full bg-gray-200 hover:bg-gray-950 hover:text-gray-50 transition-all",children:e.jsx(G,{})})]}),e.jsxs("div",{className:"flex flex-col gap-y- pt-6",children:[re.map((n,o)=>{var m;return e.jsx(Q,{placeholder:n.placeholder,label:n.name.replace("_"," "),register:a(n.name,{required:"This Field Is Required"}),error:(m=x[n.name])==null?void 0:m.message,style:"h-fit [&>input]:py-3"},o)}),e.jsxs("div",{className:"",children:[e.jsx("label",{htmlFor:"biography",className:"font-semibold xl:text-lg text-gray-800 hover:text-gray-950 transition-all",children:"Biography"}),e.jsx("textarea",{id:"biography",rows:5,...a("biography",{required:"This Field Is Required"}),placeholder:"Write About Yourself",className:"placeholder:first-letter:uppercase size-full outline-none mt-1 px-4 py-2 order-2 disabled:animate-pulse bg-transparent border border-gray-300 hover:border-gray-400 transition-all group focus:!border-gray-500 rounded-lg"}),e.jsx("p",{className:"text-sm md:text-base mt-0.5 px-1 text-red-500 font-medium",children:(u=x==null?void 0:x.biography)==null?void 0:u.message})]})]}),e.jsx("div",{className:""}),e.jsx("div",{className:"absolute bottom-0 rounded-b-lg w-full right-0 px-2 py-1",children:e.jsx("button",{className:"px-4 py-2 w-full bg-primary-500 text-gray-50 rounded-lg border-2 xl:text-lg border-primary-500 hover:bg-gray-50 hover:text-primary-500 transition-all",children:"Submit"})})]})}function ne(){return e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl flex flex-col justify-between",children:e.jsxs("div",{id:"wrapper",className:"size-full lg:w-8/12 lg:mx-auto animate-pulse",children:[e.jsxs("div",{className:"px-4 py-2",children:[e.jsxs("div",{className:"flex items-center justify-evenly gap-x-4 lg:gap-x-8 lg:w-fit",children:[e.jsx("div",{className:"size-20 lg:size-24 bg-gray-300 rounded-full overflow-hidden select-none cursor-pointer"}),e.jsx("div",{className:"flex w-2/3 items-center justify-evenly gap-x-4",children:v(3).map(s=>e.jsxs("div",{className:"flex items-center justify-center flex-col font-medium gap-y-2",children:[e.jsx("h6",{className:"w-10 h-2 bg-gray-300 rounded-md"}),e.jsx("p",{className:"text-center w-16 h-2 bg-gray-200 rounded-md"})]},s))})]}),e.jsxs("div",{className:"my-2 flex flex-col gap-y-2.5",children:[e.jsx("p",{className:"h-4 w-1/4 bg-gray-200 rounded-md"}),e.jsx("p",{className:"h-2 w-2/12 bg-gray-200 rounded-md"}),e.jsx("p",{className:"h-2 w-1/12 bg-gray-200 rounded-md"}),e.jsx("div",{className:"flex flex-col gap-y-2",children:v(4).map((s,t)=>e.jsx("p",{className:"h-2 bg-gray-200 odd:w-1/3 even:w-1/4 last-of-type:w-2/4 rounded-md"},t))})]}),e.jsxs("div",{className:"flex items-center justify-around my-3 lg:w-fit lg:gap-x-4",children:[e.jsx("button",{className:"px-4 py-1 w-24 text-sm lg:text-base bg-gray-300 cursor-auto transition-all text-gray-950 rounded-lg",children:" "}),e.jsx("button",{className:"px-4 py-1 w-24 text-sm lg:text-base bg-gray-300 cursor-auto transition-all text-gray-950 rounded-lg",children:" "}),e.jsx("button",{className:"px-4 py-1 w-24 text-sm lg:text-base bg-gray-300 cursor-auto transition-all text-gray-950 rounded-lg",children:" "})]})]}),e.jsx("div",{className:"flex select-none highlights-wrapper items-center gap-x-4 overflow-auto px-2 py-2 scroll-smooth hidden-scroll-bar",children:v(8).map(s=>e.jsx("div",{className:"size-16 cursor-pointer rounded-full bg-gray-200 flex-none flex items-center justify-center text-3xl text-gray-500"},s))}),e.jsxs("div",{className:"flex-1 w-full overflow-auto styled-scroll-bar relative",children:[e.jsxs("div",{className:"flex items-center gap-x-4 mt-2 justify-center px-1 lg:w-2/3 lg:mx-auto sticky top-0 bg-inherit",children:[e.jsx("p",{className:"w-1/4 h-4 rounded-md bg-gray-200"}),e.jsx("p",{className:"w-1/4 h-4 rounded-md bg-gray-200"}),e.jsx("p",{className:"w-1/4 h-4 rounded-md bg-gray-200"})]}),e.jsx("div",{className:"flex flex-wrap my-2",children:e.jsx("div",{className:"w-full grid grid-cols-2 lg:grid-cols-3 gap-0.5 pb-1",children:v(10).map((s,t)=>e.jsx("div",{className:"h-36 relative group lg:h-56 bg-gray-200"},t))})})]})]})})}function oe(){const{sellerData:{orders:s}}=h(),t=E(),l=C();if(!(s!=null&&s.length))return e.jsx("div",{className:"size-full flex justify-center",children:e.jsx("h2",{className:"my-32 text-xl font-semibold",children:"You haven't any order from this seller..."})});if(s!=null&&s.length)return e.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-3 gap-0.5 lg:-cols-3 w-full select-none cursor-pointer",children:s.map((a,i)=>e.jsxs("div",{onClick:()=>l(`/EcoVibe/bag/orders/${a.orderId.replace("#","")}/${t.id}`),className:"h-36 lg:h-56 gradient-background relative hover:opacity-80 transition-all",children:[e.jsx("div",{className:"grid grid-rows-2 grid-cols-2 h-full",children:a.orders[t==null?void 0:t.id].items.map((c,x)=>x<3&&e.jsx("img",{className:"object-cover",src:c.Thumbnail},x))}),e.jsxs("div",{className:"absolute left-0 bottom-0 lg:h-1/3 bg-gray-950/50 z-40 w-full px-2 py-1 flex flex-col justify-evenly",children:[e.jsxs("h4",{className:"text-sm lg:text-base font-bold text-gray-200",children:["Ordered at: ",A(a.createdAt)]}),e.jsxs("p",{className:"text-sm font-medium text-gray-300",children:["total price: $",a.totalPrice]})]})]},i))})}function ce(){const{isOwner:s,sellerData:{products:t}}=h(),l=C();if(!(t!=null&&t.length))return e.jsx("div",{className:"size-full flex justify-center",children:e.jsx("h2",{className:"my-32 text-xl font-semibold",children:"No product yet..."})});if(t!=null&&t.length)return e.jsx("div",{className:"w-full grid grid-cols-2 lg:grid-cols-3 gap-0.5 pb-1",children:t.map((a,i)=>e.jsxs("div",{className:"h-36 relative group lg:h-56 bg-gray-200",children:[e.jsx("img",{src:a.Thumbnail,alt:"product-thumbnail",className:"size-full object-cover"}),e.jsxs("div",{className:"absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all inset-0 bg-gray-950/50 backdrop-blur-md flex items-center justify-evenly flex-col px-2 py-1",children:[e.jsxs("p",{className:"text-center line-clamp-5 text-xs lg:text-base text-gray-50 select-none break-words",children:[a.Description," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dolores aut libero nemo quia nihil, quis, natus nobis dignissimos asperiores labore delectus magnam eveniet voluptates quo, laboriosam sed obcaecati ullam."]}),e.jsx("button",{onClick:()=>l(s?`/EcoVibe/Dashboard/Products/${a.id}`:`/EcoVibe/Products/${a.id}`),className:"px-4 py-2 text-xs lg:text-base bg-gray-950 text-gray-50 rounded-xl w-fit hover:bg-gray-200 hover:text-gray-950 transition-all",children:s?"Show in dashborad":"More info"})]})]},i))})}function de(){const{sellerData:{reviews:s}}=h();function t(l){return new Date(l).toLocaleTimeString("en-us",{year:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}if(!(s!=null&&s.length))return e.jsx("div",{className:"size-full flex justify-center",children:e.jsx("h2",{className:"my-32 text-xl font-semibold",children:"There isn't any review for this seller..."})});if(s!=null&&s.length)return e.jsx("div",{className:"flex flex-col gap-y-2 pb-2 w-full",children:s.map((l,a)=>e.jsxs("div",{className:"flex items-start w-full px-2 py-1 relative border-b  hover:bg-gray-200  cursor-pointer transition-all last-of-type:border-none lg:py-2",children:[e.jsx("div",{className:"size-16 lg:size-20 bg-gray-200 rounded-full overflow-hidden",children:e.jsx("img",{src:l.authorProfile,alt:"author-profile"})}),e.jsxs("div",{className:"flex-1 px-2",children:[e.jsx("h4",{className:"font-bold lg:text-lg",children:l.content.header}),e.jsx("h6",{className:"text-sm lg:text-base font-medium line-clamp-1",children:l.content.first_name+" "+l.content.last_name}),e.jsx("p",{className:"line-clamp-2 lg:line-clamp-4 break-words text-xs lg:text-base",children:l.content.review}),e.jsx("p",{className:"absolute top-2 right-2 text-sm text-gray-800",children:t(l.date)})]}),e.jsx("hr",{})]},a))})}function xe(){const[s,t]=f.useState("products"),{isOwner:l}=h(),{auth_status:a}=w(i=>i.userData);return e.jsxs("div",{className:"flex-1 w-full overflow-auto styled-scroll-bar relative",children:[e.jsxs("div",{className:"flex items-center justify-center px-1 lg:w-2/3 lg:mx-auto sticky top-0 bg-inherit",children:[e.jsx("button",{onClick:()=>t("products"),className:`${s==="products"&&"font-bold border-b-2 border-b-gray-950"} text-base lg:text-lg px-4 py-2`,children:"Products"}),e.jsx("button",{onClick:()=>t("reviews"),className:`${s==="reviews"&&"font-bold border-b-2 border-b-gray-950"} text-base lg:text-lg px-4 py-2`,children:"Reviews"}),e.jsx("button",{disabled:l||a!==200,onClick:()=>t("orders"),className:`${s==="orders"&&"font-bold border-b-2 border-b-gray-950"} text-base lg:text-lg px-4 py-2 disabled:hidden`,children:"My Orders"})]}),e.jsx("div",{className:"flex flex-wrap",children:s==="products"?e.jsx(ce,{}):s==="orders"?e.jsx(oe,{}):e.jsx(de,{})})]})}function ue(){var N;const{sellerData:{userInfo:s,orders:t,products:l,reviews:a},storyLoading:i,storiesList:c,isStoriesShow:x,setStorieModal:d,isOwner:u}=h(),{personalInformation:n,businessInformation:o}=s||{},[m,r]=f.useState(!1);function g(){!i&&(c==null?void 0:c.length)>0&&d(0)}function p(){return J.uniq(t.map(y=>y.customerId)).length}function b(){const z=H(a.map(({content:y})=>y==null?void 0:y.stars));return isNaN(z)?0:z}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-evenly gap-x-4 lg:gap-x-8 lg:w-fit",children:[e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${i&&"animate-pulse"} size-20 flex-none lg:size-[5.5rem] relative border-4 border-gray-50 bg-gray-50 flex items-center justify-center rounded-full select-none cursor-pointer`,children:[(c==null?void 0:c.length)>0&&e.jsx("div",{className:`${(N=c[0])!=null&&N.isSeen?"bg-slate-400":"gradient-background"} absolute size-[5.5rem] lg:size-24 -z-10 rounded-full`}),e.jsx("img",{onClick:g,src:n==null?void 0:n.profilePic,alt:"user-avatar",className:"rounded-full"}),e.jsx("button",{disabled:!u,onClick:()=>r(!0),className:"absolute disabled:hidden hover:scale-125 transition-all -bottom-1 -right-1 p-1.5 bg-primary-500 rounded-full text-gray-50",children:e.jsx(M,{})})]}),e.jsxs("div",{className:`${m?"opacity-100 visible":"opacity-0 invisible"} transition-all fixed inset-0 z-50 flex items-center justify-center`,children:[e.jsx(se,{onModalChange:()=>r(!1)}),e.jsx("div",{onClick:()=>r(!1),className:"absolute inset-0 bg-gray-950/80"})]}),x!==null&&e.jsx($,{currentListIndex:x,setList:d,storiesList:[c[0]]})]}),e.jsxs("div",{className:"flex items-center justify-evenly gap-x-4",children:[e.jsxs("div",{className:"flex items-center justify-center flex-col font-medium",children:[e.jsx("h6",{className:"text-center",children:b()}),e.jsx("p",{className:"text-center ",children:"stars"})]}),e.jsxs("div",{className:"flex items-center justify-center flex-col font-medium",children:[e.jsx("h6",{className:"text-center",children:l.length}),e.jsx("p",{className:"text-center ",children:"products"})]}),e.jsxs("div",{className:"flex items-center justify-center flex-col font-medium",children:[e.jsx("h6",{className:"text-center",children:p()}),e.jsx("p",{className:"text-center ",children:"customers"})]})]})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("h4",{className:"text-lg font-bold",children:(n==null?void 0:n.first_name)+" "+(n==null?void 0:n.last_name)}),e.jsx("p",{className:"",children:o==null?void 0:o.business_name}),e.jsx("p",{className:"line-clamp-2",children:o==null?void 0:o.biography})]})]})}function me({onEditHandler:s}){const{sellerData:{userInfo:t},isOwner:l}=h(),{personalInformation:a}=t||{},i=E(),c=C(),{createRoom:x}=te();function d(){const n={...t.personalInformation,...t.businessInformation,userType:t.userType,userId:i==null?void 0:i.id};x(n,({roomId:o})=>{c("/EcoVibe/Messages/",{state:{roomId:o}})})}const u=()=>{window.location.href=`mailto:${a.email}?subject=Hi%20There!&body=Wrote%20Something%20a%20here!.`};return e.jsxs("div",{className:"px-4 py-2",children:[e.jsx(ue,{}),e.jsxs("div",{className:"flex items-center justify-around my-2 lg:w-fit lg:gap-x-4",children:[e.jsx("button",{onClick:()=>l?s():d(),className:"px-4 py-2 text-sm lg:text-base bg-gray-300 hover:bg-opacity-50 transition-all text-gray-950 rounded-lg",children:l?"Edit":"Message"}),e.jsx("button",{onClick:()=>c(l?"/EcoVibe/Dashboard/Products":`/EcoVibe/Explore-Products/seller=${i.id}`),className:"px-4 py-2 text-sm lg:text-base bg-gray-300 hover:bg-opacity-50 transition-all text-gray-950 rounded-lg",children:l?"My Products":"All Products"}),e.jsx("button",{onClick:()=>l?c("/EcoVibe/Dashboard/"):u(),className:"px-4 py-2 text-sm lg:text-base bg-gray-300 hover:bg-opacity-50 transition-all text-gray-950 rounded-lg",children:l?"Dashboard":"Email"})]})]})}const ge=async s=>{const t=q(k,"users",s);return V(t).then(l=>l.data())},fe=async s=>{const t=I(P(k,"comments"),S("sellerId","==",s));return L(t).then(({docs:l})=>l.map(a=>a.data()))},he=async(s,t)=>{const l=I(P(k,"Orders"),S("customerId","==",s),S("sellers","array-contains",t));return L(l).then(({docs:a})=>a.map(i=>i.data()))},pe=async s=>{const t=I(P(k,"Products"),S("SellerId","==",s));return L(t).then(({docs:l})=>l.map(a=>({...a.data(),id:a.id})))},be=s=>{const{userId:t}=w(m=>m.userData),l=s===t,a=w(m=>m.userData),[i,c]=f.useState({userInfo:{},orders:[],reviews:[],products:[],loading:!1,error:null}),[x,d]=f.useState(null),{loading:u,groupedStories:n}=le(s,x!==null),o=f.useCallback(async()=>{try{c(b=>({...b,loading:!0}));const[m,r,g,p]=await Promise.all([l?a:ge(s),fe(s),he(t,s),pe(s)]);c({userInfo:m,reviews:r,orders:g,products:p,loading:!1,error:null})}catch(m){c(r=>({...r,error:m,loading:!1})),console.error(m)}},[s,t,l,a]);return f.useEffect(()=>{o()},[o]),{sellerData:i,storyLoading:u,storiesList:n,isStoriesShow:x,setStorieModal:d,isOwner:l}};function ye({onCloseModal:s,highlightsList:t}){var o,m;const[l,a]=f.useState([]),[i,c]=f.useState(""),{storyLoading:x,storiesList:d}=h();function u(r){if(!D(l,r)&&l.length===4){j("You can include up to 4 slides in each highlight list.");return}a(g=>D(l,r)?g.filter(p=>p.id!==r.id):[...g,r])}async function n(){if(!i||i===""){j.error("Please set a title for highlight");return}if((t==null?void 0:t.length)>=5){j.error("you can add 5 highlight only...");return}const r=W(i);let g=0;l.forEach(async p=>{try{const b=U(),N=Y(b,`stories/${p.id}`);B(N,{highlightRef:r,title:i}),g=g+1,g===l.length&&(j.success("highlight succesfully added"),a([]),c(""),s())}catch{console.log("error on update slide")}})}return e.jsxs("div",{className:"w-96 z-50 h-[80vh] bg-gray-50 rounded-md px-4 pt-2 pb-4 flex flex-col gap-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-xl font-bold",children:"Set Highlight"}),e.jsx("button",{onClick:()=>s(),children:e.jsx(X,{className:"text-3xl"})})]}),e.jsx("div",{className:"w-full flex-1 overflow-auto styled-scroll-bar p-2.5",children:e.jsx("div",{className:"w-full grid grid-cols-2 gap-4",children:x?e.jsx(e.Fragment,{children:v(20).map(r=>e.jsx("div",{className:"bg-gray-400 h-36 rounded-lg animate-pulse"},r))}):(m=(o=d[0])==null?void 0:o.slides)==null?void 0:m.map((r,g)=>e.jsxs("div",{onClick:()=>{r!=null&&r.highlightRef?j("slide is already part of the highlights. You can go ahead and remove it from the highlights list"):u(r)},className:`${(r==null?void 0:r.highlightRef)&&"opacity-60 !bg-gray-400"} relative bg-gray-200 h-36 overflow-hidden rounded-lg`,children:[e.jsx(R,{contentUrl:r==null?void 0:r.contentUrl,contentType:r.type}),e.jsxs("div",{className:`${D(l,r)||r!=null&&r.highlightRef?"block":"hidden"} ${(r==null?void 0:r.highlightRef)&&"!bg-gray-950/80 !text-gray-200 cursor-pointer"} absolute inset-0 bg-primary-500/50 transition-all flex flex-col gap-y-4 items-center justify-center text-7xl text-gray-50`,children:[e.jsx(ee,{}),e.jsx("p",{className:"text-base",children:r==null?void 0:r.title})]})]},g))})}),e.jsx("input",{type:"text",value:i,onChange:r=>c(r.target.value),placeholder:"highlight title",className:"px-4 py-2 bg-gray-200 outline-none border-2 border-gray-200 rounded-md"}),e.jsxs("div",{className:"flex items-center justify-end gap-x-4",children:[e.jsx("button",{onClick:()=>s(),className:"px-4 py-2 ring-2 ring-gray-950 text-gray-950 rounded-md",children:"Cancel"}),e.jsx("button",{onClick:()=>n(),className:"px-4 py-2 bg-primary-500 text-gray-50 ring-2 ring-primary-500 rounded-md",children:"Submit"})]})]})}function je(){const[s,t]=f.useState(null),[l,a]=f.useState(!1);ae(".highlights-wrapper");const[i,c]=f.useState([]),{storiesList:x}=h();return f.useEffect(()=>{var n;const d=(n=x[0])==null?void 0:n.slides;if(!(d!=null&&d.length))return;let u={};d.forEach(o=>{o.highlightRef&&(u[o.highlightRef]=[...u[o.highlightRef]||[],o])}),c(Object.entries(u).map(([o,m],r)=>({title:m[0].title,slides:m.map(g=>({...g,author:{...g.author,first_name:g.title}})),listIndex:r})))},[x]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex px-4 items-center select-none highlights-wrapper gap-x-4 overflow-auto lg:px-2 py-2 scroll-smooth hidden-scroll-bar",children:[e.jsx(e.Fragment,{children:i.map((d,u)=>{var n,o;return e.jsxs("div",{onClick:()=>t(u),className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:"size-16 cursor-pointer overflow-hidden rounded-full bg-gray-200 flex-none flex items-center justify-center text-3xl text-gray-500",children:e.jsx(R,{contentType:(n=d==null?void 0:d.slides[0])==null?void 0:n.type,contentUrl:(o=d==null?void 0:d.slides[0])==null?void 0:o.contentUrl})}),e.jsx("h4",{className:"font-bold text-sm line-clamp-1 text-center w-20 break-words",children:d==null?void 0:d.title})]},u)})}),e.jsx("div",{onClick:()=>a(!0),className:"size-16 cursor-pointer mb-5 rounded-full bg-gray-200 flex-none flex items-center justify-center text-3xl text-gray-500",children:e.jsx(M,{})})]}),e.jsxs("div",{className:`${l?"opacity-100 visible":"opacity-0 invisible"} transition-all fixed inset-0  z-50 flex items-center justify-center`,children:[e.jsx(ye,{onCloseModal:()=>a(!1),highlightsList:i}),e.jsx("div",{onClick:()=>a(!1),className:"absolute inset-0 z-40 bg-gray-950/70"})]}),s!==null&&e.jsx($,{currentListIndex:s,setList:t,storiesList:i})]})}const T=f.createContext();function Ye(){var o;const s=E(),t=C(),[l,a]=f.useState(!1),{sellerData:i,storyLoading:c,storiesList:x,isStoriesShow:d,setStorieModal:u,isOwner:n}=be(s.id);if(i.loading)return e.jsx(ne,{});if(!i.loading)return e.jsx(T.Provider,{value:{sellerData:i,isOwner:n,storyLoading:c,storiesList:x,isStoriesShow:d,setStorieModal:u},children:e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl flex flex-col justify-between",children:e.jsxs("div",{id:"wrapper",className:"size-full lg:w-8/12 lg:mx-auto",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 relative",children:[e.jsx("button",{onClick:()=>t(-1),className:"text-2xl",children:e.jsx(Z,{})}),e.jsx("h6",{className:"font-bold flex-1 text-center",children:(o=i.userInfo.businessInformation)==null?void 0:o.business_name})]}),e.jsx(me,{onEditHandler:()=>a(!0)}),e.jsx(je,{}),e.jsx(xe,{}),e.jsxs("div",{className:`${l?"opacity-100 visible":"opacity-0 invisible"} fixed z-50 inset-0 flex items-center justify-center transition-all`,children:[e.jsx(ie,{onModalClose:()=>a(!1)}),e.jsx("div",{onClick:()=>a(!1),className:"absolute bg-gray-950/80 backdrop-blur inset-0"})]})]})})})}const h=()=>f.useContext(T);export{Ye as default,h as useProfileData};
