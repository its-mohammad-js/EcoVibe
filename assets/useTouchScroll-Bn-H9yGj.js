import{r as s}from"./index-ESrmrEOn.js";function w(a,m,t){const[c,u]=s.useState(!1),[i,L]=s.useState(!1),[v,d]=s.useState(!1),[e,f]=s.useState(null);return s.useEffect(()=>{const o=document.querySelector(a);f(t!=null&&t.current?t==null?void 0:t.current:o)},[a,m,t]),s.useEffect(()=>{if(!e)return;const o=r=>{u(!0),e.classList.add("active"),L(r.pageX-e.offsetLeft),d(e.scrollLeft)};e.addEventListener("mousedown",o);const n=()=>{u(!1),e.classList.remove("active")};e.addEventListener("mouseleave",n),e.addEventListener("mouseup",n);const l=r=>{if(!(!c||![...e.classList].includes("active"))){r.preventDefault();const E=(r.pageX-e.offsetLeft-i)*1;e.scrollLeft=v-E}};return e.addEventListener("mousemove",l),()=>{e.removeEventListener("mousedown",o),e.removeEventListener("mouseleave",n),e.removeEventListener("mouseup",n),e.removeEventListener("mousemove",l)}},[e,c,i,v]),e}export{w as u};
