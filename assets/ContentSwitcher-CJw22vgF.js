import{r as c,j as t}from"./index-C-z8IuQm.js";function j({contentType:i,contentUrl:r,autoPlayCondition:u=!1,loadingCallBack:a=()=>{},setRemainingTime:f=()=>{},pause:s=!1,loading:n,controls:l=!1}){const e=c.useRef();return c.useEffect(()=>{e.current&&(s?e.current.pause():e.current.play())},[s]),t.jsx(t.Fragment,{children:i.startsWith("image/")?t.jsx("img",{src:r,alt:"story-content",className:`${n&&"animate-pulse"} size-full object-contain`,onLoad:()=>a()}):t.jsx("video",{ref:e,onLoadedData:()=>a(),onPlaying:o=>{const m=Math.max(0,(o.target.duration-o.target.currentTime)*1e3);f(m)},controls:l,autoPlay:u,className:`${n&&"animate-pulse"} size-full object-cover`,src:r})})}export{j as C};
