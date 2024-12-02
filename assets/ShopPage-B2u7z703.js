import{b as p,f as h,l as f,u as o,j as e,m as d,r as m,h as b,F as x,y as g,z as u,A as n,c as j,w as y,L as v,C as w,D as N,E as k,G as E,H as F,I as P,J as A}from"./index-KofMtEW3.js";import{P as S}from"./ProductsContainer-B_FRFkF_.js";import{S as C}from"./index-BBnVwlHH.js";import"./react-stars-DyT1UezX.js";function I(){const{loading:a,data:s}=p(l=>l.products),t=h(s,{tags:["background"]}),i=f({maxWidth:480}),r=o();return e.jsxs("div",{className:"mx-auto 2xl:max-w-screen-2xl flex flex-col gap-y-6",children:[e.jsx("div",{className:"w-full",children:e.jsx(S,{isLoading:a,products:s,title:"2024 Products",filterObject:{tags:"2024"}})}),e.jsxs("div",{className:"h-20 md:h-28 mx-2 rounded-3xl bg-gray-200 flex items-center justify-between px-1.5",children:[e.jsxs("div",{className:"h-full flex items-center",children:[e.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Foffer%20banner.webp?alt=media&token=0aeb869f-11c9-4aa6-8476-e445f30f03fa",alt:"banner image",className:"w-20 h-16 object-cover"}),e.jsx("div",{className:"flex-1 h-full flex flex-col items-start justify-evenly ml-2 md:ml-4 cursor-pointer",children:e.jsxs("h6",{className:"text-xl font-bold relative md:flex gap-x-1.5 items-center md:text-3xl",children:["Big ",e.jsx("span",{className:"border-b-2 border-primary-500",children:"Savings"})," ","Alert!",e.jsx("p",{className:"text-sm absolute -top-6 -right-4 md:relative md:text-xl md:top-0 rotate-6 bg-primary-800 rounded-md text-white p-1",children:"Up to 20% off"})]})})]}),e.jsx("div",{className:"h-full w-1/3 flex items-center justify-end md:justify-center gap-x-2 md:gap-x-6",children:!a&&t.length&&t.map((l,c)=>i&&c>0||e.jsxs(d.div,{onClick:()=>{window.scrollTo(0,0),r(`/EcoVibe/Products/${l.id}`)},initial:{scale:0,rotateX:180},whileInView:{scale:1,rotateX:0},transition:{type:"spring",damping:25,delay:c/2},className:"w-16 h-16 bg-gray-50 md:w-20 md:h-20 rounded-full relative cursor-pointer",children:[e.jsx("img",{src:l.Thumbnail,className:"w-full h-full object-cover"}),e.jsxs("p",{className:"bg-primary-400 w-fit rotate-6 absolute -bottom-5 rounded-md p-1 text-white text-xs md:bottom-0",children:[e.jsx("span",{children:c+100/2}),"%"]})]},c))})]})]})}function V(){const a={arrows:!1,speed:2500,dots:!0,appendDots:i,autoplay:!0,autoplaySpeed:2e3},s=m.useRef(null),t=o();function i(r){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-center sm:justify-between items-end mt-2 gap-x-2 absolute bottom-0 right-0 px-8 py-4 w-fit",children:e.jsx("div",{className:"flex items-center justify-center gap-x-1.5",children:r.map(l=>e.jsx("p",{onClick:()=>s.current.slickGoTo(l.key),className:`${l.props.className===""?"bg-gray-950":"bg-gray-100"} w-2.5 h-2.5 md:w-5 md:h-3 rounded-full transition-all cursor-pointer`},l.key))})})})}return e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl mt-4 md:mt-2",children:e.jsx(C,{ref:s,...a,className:"mx-2",children:b.shopPage.map((r,l)=>e.jsxs("div",{className:"w-full h-48 rounded-md md:h-[34rem] relative focus:outline-none",children:[e.jsxs("div",{className:"absolute inset-0 -z-10",children:[e.jsx("div",{className:"absolute inset-0 bg-primary-50/40 backdrop-blur-sm rounded-md md:hidden"}),e.jsx("img",{src:r.img,alt:"hero section banner",className:"w-full h-full object-cover rounded-md"})]}),e.jsxs("div",{className:"h-full w-full md:w-2/4 flex flex-col justify-evenly md:justify-center gap-y-4 md:gap-y-8 px-4 py-2",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("h2",{className:"text-2xl md:text-5xl font-bold",children:r.title}),e.jsx("p",{className:"line-clamp-3 md:line-clamp-none font-semibold text-sm md:text-xl",children:r.subTitle})]}),e.jsx("button",{onClick:()=>{window.scrollTo(0,0),t(r.query)},className:"w-fit md:text-lg px-4 py-1 md:py-2 md:px-8 text-white text-sm bg-primary-950 rounded-md",children:"Shop Now"})]})]},l))})})}const T=[{title:"2024",avatarUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(5).webp?alt=media&token=0eb13ee7-01b6-4708-9f73-c6444a13562a",query:"/EcoVibe/Explore-Products/tags=2024"},{title:"Sales",avatarUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(4).webp?alt=media&token=a67d59d3-07c0-44b8-bf41-8497c046ca75",query:"/EcoVibe/Explore-Products/tags=special"},{title:"New Release",avatarUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(6).webp?alt=media&token=f14970e3-64f8-43e5-9fac-d154696d12f9",query:"/EcoVibe/Explore-Products/tags=new release"},{title:"Best Seller",avatarUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(3).webp?alt=media&token=70eba716-21d5-4b60-b047-81b04cfff339",query:"/EcoVibe/Explore-Products/tags=best sell"},{title:"Top Products",avatarUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(2).webp?alt=media&token=69f14ff0-9bab-4005-a346-99503e745e89",query:"/EcoVibe/Explore-Products/tags=popular"},{title:"Trend's",avatarUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Ftrend-cards-banner%20(1).webp?alt=media&token=deb109c7-d494-4d5d-87f1-d0df2496fbe2",query:"/EcoVibe/Explore-Products/tags=trend"}];function q(){const a=o();return e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8",children:e.jsx("div",{id:"wrapper",className:"flex flex-wrap md:flex-nowrap items-center justify-evenly gap-y-8 gap-x-2 lg:gap-x-6 px-2",children:T.map((s,t)=>e.jsxs(d.div,{initial:"hidden",animate:"show",variants:{hidden:{opacity:0,rotateX:180,scale:.5},show:{opacity:1,rotateX:0,scale:1}},transition:{type:"spring",damping:30,delay:t/3},className:"w-full h-40 relative",children:[e.jsx("div",{className:"absolute inset-0 -z-10 shadow-xl",children:e.jsx("img",{src:s.avatarUrl,alt:"card banner",className:"w-full h-full object-cover rounded-md"})}),e.jsxs("div",{className:"w-full h-full rounded-md flex bg-primary-500/45 flex-col items-center justify-evenly px-4 py-2 gap-2",children:[e.jsx("h4",{className:"text-3xl md:text-2xl text-white font-bold",children:s.title}),e.jsx("button",{onClick:()=>{window.scrollTo(0,0),a(s.query)},className:"text-primary-950 px-2 p-1 rounded-md bg-primary-50 hover:bg-primary-950 hover:text-white transition-all",children:"Show More"})]})]},t))})})}const U=[{title:"Fashion",thumbnail:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20categories%20banners%20(3).webp?alt=media&token=0274a5e4-a2cb-40e1-8d23-863122540a7e",query:"/EcoVibe/Explore-Products/category=fashion"},{title:"Electronics",thumbnail:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20categories%20banners%20(4).webp?alt=media&token=808a32db-2350-440e-9c99-a95c0278663c",query:"/EcoVibe/Explore-Products/category=electronics"},{title:"Home Decor",thumbnail:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20categories%20banners%20(5).webp?alt=media&token=c7991f41-f904-4840-8a89-12233566fdc0",query:"/EcoVibe/Explore-Products/category=home decor"},{title:"Health and Wellness",thumbnail:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20categories%20banners%20(1).webp?alt=media&token=5d1daa08-cf2e-4c43-8e35-df0e03a1381d",query:"/EcoVibe/Explore-Products/category=health and wellness"},{title:"Beauty and Personal Care",thumbnail:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20categories%20banners%20(2).webp?alt=media&token=e6fb720a-ba2f-4888-82b7-ebf301e2e207",query:"/EcoVibe/Explore-Products/category=beauty and personal care"}];function B(){const a=o();return e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8",children:e.jsxs("div",{id:"wrapper",className:"flex flex-col items-center gap-y-4 md:gap-y-8 px-2.5 md:px-4 py-2",children:[e.jsxs("div",{className:"text-center flex flex-col gap-y-1.5 md:gap-y-2",children:[e.jsx("p",{className:"text-base md:text-xl text-primary-400 font-semibold",children:"All Categories"}),e.jsx("h4",{className:"text-3xl md:text-5xl font-bold",children:"Shop By Category"}),e.jsxs("span",{className:"text-sm text-gray-600 md:text-lg",children:["Lorem ipsum dolor sit amet consectetur ",e.jsx("br",{}),"adipisicing elit. Deserunt blanditiis provident dicta."]})]}),e.jsx("div",{className:"flex flex-col md:flex-row gap-x-4 items-center w-full gap-y-4",children:U.map((s,t)=>e.jsxs("div",{className:"w-full h-72 flex flex-col items-center justify-center gap-y-4 relative bg-gray-950 bg-opacity-40 hover:bg-opacity-50 group",children:[e.jsx("div",{className:"absolute inset-0 -z-10",children:e.jsx("img",{src:s.thumbnail,alt:"category thumbnail",className:"w-full h-full object-cover group-hover:object-right-bottom transition-all duration-1000"})}),e.jsxs("div",{className:"w-full text-center text-white flex flex-col items-center h-full justify-center gap-y-6",children:[e.jsx("h4",{className:"text-xl font-bold md:text-2xl",children:s.title}),e.jsx("button",{onClick:()=>{window.scrollTo(0,0),a(s.query)},className:"bg-primary-900 px-4 py-2 rounded-md w-fit text-base md:text-lg hover:bg-primary-50 transition-all hover:text-primary-950 text-white font-semibold",children:"Shop Now"})]})]},t))})]})})}const D=[{title:"November Outfits",bgUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcollection%20shop%20banner%20(3).webp?alt=media&token=327f8f92-d2a0-4754-9f47-c3018ae26d6b",query:"/EcoVibe/Explore-Products/collections=november outfits"},{title:"Cashmere Set",bgUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcollection%20shop%20banner%20(2).webp?alt=media&token=08c6a462-3a98-4489-8fb1-c3820cb411f2",query:"/EcoVibe/Explore-Products/collections=cashmere set"},{title:"The New Nordic",bgUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcollection%20shop%20banner%20(4).webp?alt=media&token=a8e07234-efa8-4397-955e-60262be5abc4",query:"/EcoVibe/Explore-Products/collections=new nordic"},{title:"The Leather",bgUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcollection%20shop%20banner%20(1).webp?alt=media&token=d21063fd-7de0-403c-8760-d433d3245eae",query:"/EcoVibe/Explore-Products/collections=leather"}];function L(){const a=o();return e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8",children:e.jsxs("div",{id:"wrapper",className:"flex flex-col items-center gap-y-4 md:gap-y-8 px-2.5 md:px-4 py-2",children:[e.jsxs("div",{className:"text-center flex flex-col gap-y-1.5 md:gap-y-2",children:[e.jsx("p",{className:"text-base md:text-xl text-primary-400 font-semibold",children:"Most Popular Collections"}),e.jsx("h4",{className:"text-3xl md:text-5xl font-bold",children:"Best Selling Items"}),e.jsxs("span",{className:"text-sm text-gray-600 md:text-lg",children:["Lorem ipsum dolor sit amet consectetur ",e.jsx("br",{}),"adipisicing elit. Deserunt blanditiis provident dicta."]})]}),e.jsx("div",{className:"flex flex-col md:flex-row gap-4 w-full ",children:D.map((s,t)=>e.jsxs("div",{className:"w-full h-96 flex flex-col px-5 py-8 items-start justify-end gap-y-2 relative group",children:[e.jsx("div",{className:"absolute inset-0 -z-10 bg-gray-950",children:e.jsx("img",{src:s.bgUrl,alt:"slide banner",className:"w-full h-full object-cover group-hover:opacity-50 transition-all duration-500"})}),e.jsx("h6",{className:"text-2xl font-semibold text-white cursor-pointer group-hover:text-3xl transition-all duration-300",children:s.title}),e.jsxs("button",{onClick:()=>{window.scrollTo(0,0),a(s.query)},className:"w-fit flex items-center justify-center gap-x-1.5 text-lg text-gray-200 border-b-2 border-gray-200",children:[e.jsx("span",{children:"Collection"}),e.jsx("span",{children:e.jsx(x,{})})]})]},t))})]})})}const O=[{url:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(3).webp?alt=media&token=41d209c1-e5f3-490b-9451-83fa71260601"},{url:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(2).webp?alt=media&token=597ee118-5bc1-4127-81b4-a2e9ccf2c0f1"},{url:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(4).webp?alt=media&token=18e5ace2-7c20-4aed-ba9a-8ea73a4c9b1c"},{url:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(1).webp?alt=media&token=fb674a1b-4c64-47e1-9d0b-9cf9dd1997df"},{url:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(5).webp?alt=media&token=52577425-0922-4ad2-bfcf-223afbe3de65"},{url:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fcompany-banner%20(6).webp?alt=media&token=ca03b220-dc36-4b8e-abae-5848f848fe8d"}];function M(){return e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8",children:e.jsxs("div",{id:"wrapper",className:"bg-gray-100 flex flex-col items-center gap-y-10 md:justify-evenly px-4 py-8",children:[e.jsxs("div",{className:"text-center flex flex-col gap-y-1.5 md:gap-y-2",children:[e.jsx("p",{className:"text-base md:text-xl text-primary-400 font-semibold",children:"Work With Us!"}),e.jsx("h4",{className:"text-3xl md:text-5xl font-bold",children:"Big Companies Are Here"}),e.jsx("span",{className:"text-sm text-gray-600 md:text-lg",children:"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"})]}),e.jsx("div",{className:"grid grid-cols-3 gap-y-10 w-full lg:w-2/5",children:O.map(({url:a},s)=>e.jsx("img",{src:a,className:"w-32 md:w-28 lg:w-36 h-18 object-cover md:hover:rotate-12 transition-all"},s))})]})})}function R(){return e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8",children:e.jsx("div",{id:"wrapper",className:"px-4 py-2",children:e.jsxs("div",{className:"flex flex-col items-center gap-y-4 md:flex-row w-full md:h-64 md:gap-x-16",children:[e.jsxs("div",{className:"text-center md:text-start flex flex-col md:h-full md:justify-start gap-y-1.5 md:gap-y-2 md:w-2/5",children:[e.jsx("p",{className:"text-base md:text-xl text-primary-400 font-semibold",children:"Green Living Market"}),e.jsx("h4",{className:"text-3xl md:text-5xl font-bold",children:"Becoming a Seller on Eco Vibe"}),e.jsx("span",{className:"text-sm text-gray-600 md:text-lg",children:"Welcome to Eco Vibe, your eco-friendly haven for handpicked sustainable treasures! 🌿 From biodegradable household essentials to ethically sourced fashion pieces."})]}),e.jsxs("div",{className:"md:w-3/5 flex flex-col md:flex-row flex-wrap md:items-start md:h-full items-center justify-evenly gap-y-16 md:gap-0 py-2 px-4",children:[e.jsxs("div",{className:"flex items-start justify-center gap-x-3 md:w-1/2 md:h-20",children:[e.jsx("div",{className:"w-16 h-16 bg-primary-700 rounded-xl text-white flex items-center justify-center",children:e.jsx("span",{className:"text-2xl",children:e.jsx(g,{})})}),e.jsxs("div",{className:"w-2/3 flex flex-col gap-y-2",children:[e.jsx("h6",{className:"text-xl font-bold",children:"Create Your Account"}),e.jsx("span",{className:"text-sm",children:"📝 Sign up on Soc Vibe as a seller by providing necessary details such as your store name."})]})]}),e.jsxs("div",{className:"flex items-start justify-center gap-x-3 md:w-1/2 md:h-20",children:[e.jsx("div",{className:"w-16 h-16 bg-primary-700 rounded-xl text-white flex items-center justify-center",children:e.jsx("span",{className:"text-2xl",children:e.jsx(u,{})})}),e.jsxs("div",{className:"w-2/3 flex flex-col gap-y-2",children:[e.jsx("h6",{className:"text-xl font-bold",children:"Set Up Your Store"}),e.jsx("span",{className:"text-sm",children:"🛍️ Customize your store on Soc Vibe by adding products, setting prices, uploading images."})]})]}),e.jsxs("div",{className:"flex items-start justify-center gap-x-3 md:w-1/2 md:h-20",children:[e.jsx("div",{className:"w-16 h-16 bg-primary-700 rounded-xl text-white flex items-center justify-center",children:e.jsx("span",{className:"text-2xl",children:e.jsx(n,{})})}),e.jsxs("div",{className:"w-2/3 flex flex-col gap-y-2",children:[e.jsx("h6",{className:"text-xl font-bold",children:"Start Selling & Promoting"}),e.jsx("span",{className:"text-sm",children:"📈 Begin listing your products for sale, engage with customers, offer promotions."})]})]}),e.jsxs("div",{className:"flex items-start justify-center gap-x-3 md:w-1/2 md:h-20",children:[e.jsx("div",{className:"w-16 h-16 bg-primary-700 rounded-xl text-white flex items-center justify-center",children:e.jsx("span",{className:"text-2xl",children:e.jsx(n,{})})}),e.jsxs("div",{className:"w-2/3 flex flex-col gap-y-2",children:[e.jsx("h6",{className:"text-xl font-bold",children:"Start Selling & Promoting"}),e.jsx("span",{className:"text-sm",children:"📈 Begin listing your products for sale, engage with customers, offer promotions."})]})]})]})]})})})}function X(){const a=j(),s=o();return m.useEffect(()=>{a(y())},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"lg:hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-1",children:[e.jsx("h2",{className:"font-bold",children:"Categories"}),e.jsx(v,{to:"/EcoVibe/Explore-Products",children:e.jsxs("span",{className:"text-sm flex text-gray-700 items-center justify-center gap-x-1",children:["Show More ",e.jsx(x,{className:"text-xs font-thin"})]})})]}),e.jsx("div",{className:"flex items-center sm:justify-center gap-x-4 overflow-auto px-6 py-2",children:w.map((t,i)=>e.jsxs("button",{onClick:()=>{s(`/EcoVibe/Explore-Products/category=${t.title.toLocaleLowerCase()}`)},className:"flex flex-col items-center justify-between gap-y-2",children:[e.jsx("span",{className:"bg-primary-100 p-3 rounded-full w-16 h-16",children:e.jsx("img",{src:t.iconURl,alt:t.title,className:"w-full h-full"})}),e.jsx("p",{className:"text-sm line-clamp-1",children:t.title})]},i))})]}),e.jsx(V,{}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"order-2 md:order-1",children:e.jsx(q,{})}),e.jsx("div",{className:"order-1 md:order-2",children:e.jsx(I,{})})]}),e.jsx(L,{}),e.jsx(M,{}),e.jsx(R,{}),e.jsx(B,{}),e.jsx("div",{style:{backgroundImage:"url(https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fshop%20page%20banner.webp?alt=media&token=2086af8a-5344-4201-9a50-1d9bc4dc8871)",backgroundSize:"cover",backgroundPosition:"center"},className:"mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8 h-96 flex items-center justify-center",children:e.jsxs("div",{className:"w-11/12 md:w-2/5 h-5/6 border-2 border-gray-500 px-4 py-2 flex flex-col items-center justify-evenly",children:[e.jsxs("div",{className:"flex flex-col gap-y-4 text-center",children:[e.jsx("h4",{className:"text-xl md:text-2xl font-bold text-gray-950",children:"-50 PROMOTION HOT SUMMER"}),e.jsx("span",{className:"text-sm md:text-base text-gray-700",children:"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-y-1.5",children:[e.jsx("button",{className:"w-fit px-4 py-2 bg-gray-700 rounded-md text-white",children:"ADD YOUR CALL TO ACTION"}),e.jsx("span",{className:"text-sm text-gray-600 border-b-2 border-b-gray-400",children:"Designing Better Experience"})]})]})}),e.jsx("div",{className:"mx-auto 2xl:max-w-screen-2xl mt-6 md:mt-8",children:e.jsxs("div",{id:"wrapper",className:"flex flex-col items-center md:flex-row md:justify-between w-full text-center px-4 py-2 gap-y-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-y-4",children:[e.jsx("h4",{className:"text-3xl md:text-4xl font-bold",children:"Get answers to all your questions."}),e.jsxs("span",{className:"text-base md:text-lg text-gray-600",children:["Problems trying to resolve the",e.jsx("span",{className:"hidden md:inline",children:e.jsx("br",{})}),"conflict between the two major realms of Classical physics:"]}),e.jsx("button",{className:"bg-primary-400 w-fit text-sm md:text-base text-white px-4 py-2 rounded-md hover:-translate-y-2 shadow-xl shadow-inherit transition-all duration-500 hover:shadow-primary-800",children:"CONTACT OUR COMPANY"})]}),e.jsxs("div",{className:"flex items-center justify-center md:w-80 md:flex-wrap gap-4 md:gap-x-6 lg:gap-x-8 w-full text-3xl md:text-6xl my-2 text-gray-500",children:[e.jsx("span",{className:"md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all",children:e.jsx(N,{})}),e.jsx("span",{className:"md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all",children:e.jsx(k,{})}),e.jsx("span",{className:"md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all",children:e.jsx(E,{})}),e.jsx("span",{className:"md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all",children:e.jsx(F,{})}),e.jsx("span",{className:"md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all",children:e.jsx(P,{})}),e.jsx("span",{className:"md:h-20 md:w-20 flex items-center justify-center hover:text-black transition-all",children:e.jsx(A,{})})]})]})})]})}export{X as default};
