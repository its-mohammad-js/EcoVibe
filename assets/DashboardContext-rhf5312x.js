import{r as o,a as m,j as w,C as c,D as u,z as i,E as f,F as g}from"./index-ESrmrEOn.js";const p=o.createContext();function E({children:h}){const[x,a]=o.useState({loading:!1,orders:[],error:null}),[D,n]=o.useState({products:[],loading:!1,error:null}),{userId:t}=m(r=>r.userData),y=async()=>{try{a(e=>({...e,loading:!0}));const r=c(u(i,"Orders"),f("sellers","array-contains",t)),{docs:d}=await g(r),s=d.map(e=>({...e.data(),orders:e.data().orders[t],allItems:e.data().orders})).filter(e=>e);if(s.length)a({loading:!1,orders:s,error:null});else throw new Error("Failed to fetch orders or there is no order")}catch(r){a({loading:!1,orders:[],error:r}),console.log(r)}};async function l(){try{n(s=>({...s,loading:!0}));const r=c(u(i,"Products"),f("SellerId","==",t)),d=await g(r).then(({docs:s})=>s.map(e=>({...e.data(),id:e.id})));n({loading:!1,products:d,error:null})}catch(r){n({products:[],loading:!1,error:r}),console.log(r)}}return o.useEffect(()=>{t&&l()},[t]),w.jsx(p.Provider,{value:{orderList:x,getOrders:y,products:D,getProducts:l},children:h})}const P=()=>o.useContext(p);export{E as D,P as u};
