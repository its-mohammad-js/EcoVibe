import{r as i,j as t}from"./index-WDWOvq0Z.js";function j({contentType:c,contentUrl:a,autoPlayCondition:u=!1,loadingCallBack:s=()=>{},setRemainingTime:f=()=>{},pause:r,loading:n,controls:m=!1}){const e=i.useRef();return i.useEffect(()=>{r!==void 0&&e.current&&(r?e.current.pause():e.current.play())},[r]),t.jsx(t.Fragment,{children:c.startsWith("image/")?t.jsx("img",{src:a,alt:"story-content",className:`${n&&"animate-pulse"} size-full object-contain`,onLoad:()=>s()}):t.jsx("video",{ref:e,onLoadedData:()=>s(),onPlaying:o=>{const l=Math.max(0,(o.target.duration-o.target.currentTime)*1e3);f(l)},controls:m,autoPlay:u,className:`${n&&"animate-pulse"} size-full object-cover`,src:a})})}export{j as C};