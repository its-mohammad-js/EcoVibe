import{r as o,b as m,j as b,ag as c,ah as u,ae as i,ai as f,aj as g}from"./index-WDWOvq0Z.js";const h=o.createContext();function P({children:p}){const[x,a]=o.useState({loading:!1,orders:[],error:null}),[y,n]=o.useState({products:[],loading:!1,error:null}),{userId:t}=m(r=>r.userData),D=async()=>{try{a(e=>({...e,loading:!0}));const r=c(u(i,"Orders"),f("sellers","array-contains",t)),{docs:d}=await g(r),s=d.map(e=>({...e.data(),orders:e.data().orders[t],allItems:e.data().orders})).filter(e=>e);if(s.length)a({loading:!1,orders:s,error:null});else throw new Error("Failed to fetch orders or there is no order")}catch(r){a({loading:!1,orders:[],error:r}),console.log(r)}};async function l(){try{n(s=>({...s,loading:!0}));const r=c(u(i,"Products"),f("SellerId","==",t)),d=await g(r).then(({docs:s})=>s.map(e=>({...e.data(),id:e.id})));n({loading:!1,products:d,error:null})}catch(r){n({products:[],loading:!1,error:r}),console.log(r)}}return o.useEffect(()=>{t&&l()},[t]),b.jsx(h.Provider,{value:{orderList:x,getOrders:D,products:y,getProducts:l},children:p})}const j=()=>o.useContext(h);export{P as D,j as u};