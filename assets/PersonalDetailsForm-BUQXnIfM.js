import{b as j,r,c as v,j as e,aV as u,o as N,l as S}from"./index-CsIKiOQM.js";import{u as w}from"./index.esm-BQy5lGjG.js";import{P}from"./ProfileImagePicker-CA9E1kVn.js";import{T as F}from"./TextInput-BL96VjWd.js";import{p as C}from"./formInputsInfo-KFJ55Zrl.js";import{S as D}from"./react-select.esm-5LlnAS8r.js";import"./Select-49a62830.esm-M9ph6mgO.js";const I=[{label:"Man",value:"man"},{label:"Women",value:"women"},{label:"Other",value:"other"}];function k(){var x;const{loading:b,personalInformation:s,userType:o}=j(a=>a.userData),[i,n]=r.useState(""),[f,m]=r.useState(!1),{register:d,handleSubmit:h,formState:{errors:l},setValue:c}=w(),g=v();console.log(o),r.useEffect(()=>{s&&(n(s==null?void 0:s.profilePic),c("first_name",s==null?void 0:s.first_name))},[s]);function y(a){const t={...s,...a,profilePic:i||u[0]};g(S({userType:o==="customer"?"customer":"both",data:t,field:"personalInformation",customer_step:"third-step"}))}return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("div",{className:"my-2 px-4 py-2 text-center",children:[e.jsxs("h4",{className:"text-3xl  font-bold mb-2 md:mb-4 md:text-5xl",children:["Set Up Your ",e.jsx("span",{className:"text-primary-500",children:"Information"})]}),e.jsx("span",{className:"text-primary-800 text-sm md:text-base font-medium",children:"Fill out your personal information to create an eco-friendly account and start your sustainable shopping journey! 🌍✨"})]}),e.jsxs("form",{onSubmit:h(a=>y(a)),className:"flex flex-col w-11/12 md:gap-y-2 lg:w-[34rem]",children:[e.jsx("div",{className:"flex items-center justify-center mb-4 md:mb-6",children:e.jsxs("div",{className:`${b?"animate-pulse":""} w-36 h-36 flex justify-center bg-gradient-to-tr from-primary-200 via-gray-100 to-primary-500 rounded-full relative`,children:[e.jsx("img",{src:i||u[0],alt:"default-avatar-pic",className:"w-full h-full object-cover mb-10 rounded-full"}),e.jsx("button",{type:"button",onClick:()=>m(!0),className:"absolute -bottom-1 right-3 bg-primary-500 text-gray-50 rounded-full text-xl p-2 disabled:bg-gray-400",children:e.jsx(N,{})}),e.jsx("div",{className:`${f?"visible opacity-100":"invisible opacity-0"} transition-all duration-200`,children:e.jsx(P,{onPicChange:a=>n(a),onModalClose:()=>m(!1)})})]})}),e.jsx("div",{className:"grid lg:grid-cols-4 lg:grid-rows-2 gap-2 mb-1",children:C.map((a,t)=>{var p;return e.jsx(F,{placeholder:a.placeholder||a.name.replace("_"," "),label:a.name.replace("_"," "),id:a.name,register:d(a.name,a.validation),error:(p=l[a.name])==null?void 0:p.message,style:`!h-fit [&>input]:py-3 ${a.name==="address"?"lg:col-span-4":"lg:col-span-2"}`},t)})}),e.jsxs("div",{className:"mb-4 md:m-0",children:[e.jsx("label",{htmlFor:"gender",className:"font-semibold xl:text-lg text-gray-800 hover:text-gray-950 transition-all",children:"Gender"}),e.jsx(D,{isSearchable:!1,placeholder:"Select Your Gender",styles:{control:(a,t)=>({...a,borderColor:t.menuIsOpen?"#6b7280":"#d1d5db",boxShadow:"none","&:hover":{borderColor:t.menuIsOpen?"#6b7280":"#d1d5db"}})},options:I,className:"[&>div]:p-1.5 [&>div]:rounded-lg",onChange:({value:a})=>c("gender",a)}),e.jsx("p",{className:"text-sm md:text-base mt-1 px-1 text-red-500 font-medium",children:(x=l==null?void 0:l.gender)==null?void 0:x.message})]}),e.jsxs("div",{className:"mb-4 md:m-0",children:[e.jsx("label",{htmlFor:"date",className:"font-semibold xl:text-lg text-gray-800 hover:text-gray-950 transition-all",children:"Brith Day"}),e.jsx("input",{id:"date",...d("birthday"),type:"date",className:"mt-1 px-4 py-3 border border-gray-300 rounded-md w-full outline-none"})]}),e.jsx("div",{className:"w-full mt-2 flex items-center justify-end gap-x-2",children:e.jsx("button",{type:"submit",className:"px-4 disabled:bg-gray-300 py-2 md:text-lg hover:bg-primary-800 bg-primary-500 transition-all text-white rounded-md w-fit",children:"Next"})})]})]})}export{k as default};
