import{r as I,b as g,_ as b}from"./index-D-03quZq.js";import{g as h,i as R,r as l,f as y}from"./index.esm2017-Dzdnhjb1.js";const O=()=>{const[c,t]=I.useState(!1),[f,n]=I.useState(null),s=g(e=>e.userData);return{createRoom:async(e,u)=>{t(!0),n(null);try{const r=h(),m=`FROM:${s.userId}&TO:${e.userId}`,p=(await R(l(r,"rooms"))).val()||{},a=Object.entries(p).find(([,o])=>{var i,d;return((i=o.members)==null?void 0:i.includes(s.userId))&&((d=o.members)==null?void 0:d.includes(e.userId))});if(a)u(a[1]);else{const o={roomId:m,[s.userId]:{...s.personalInformation,...s.businessInformation,userId:s.userId},[e.userId]:{...e,userType:e.userType,userId:e.userId},members:[s.userId,e.userId]};await y(l(r,`rooms/${m}`),o),u(o)}}catch(r){console.error(r),n(r.message),b.error("There was an error creating the chat room.")}finally{t(!1)}},isLoading:c,error:f}};export{O as u};
