import{b as f,c as N,j as a,bl as j,aa as y,k as C}from"./index-B5E2kmdf.js";import{u as w}from"./index.esm-D6skBfNT.js";import{S as I}from"./react-select.esm-_xTxZ8zG.js";import{T as x}from"./TextInput-BiIeu2IX.js";const b=[{validation:{minLength:{value:19,message:"Code Card Must Be 19 Character At Least."},pattern:{value:/^[0-9-]+$/,message:"Invalid Card Code Format"}}},{name:"name",placeholder:"John Doe",validation:{minLength:{value:4,message:"min length is 4 character"}}},{name:"ex_date",type:"date",cols:2},{name:"cvv",placeholder:"NN-NN",cols:2}],A=[{label:"PayPal",value:{name:"payPal",bgUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fpaypal%20card.jpg?alt=media&token=c64bb846-38b9-4ecc-abaf-86f5236a5c0c"}},{label:"visa card",value:{name:"visa card",bgUrl:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2Fvisa%20card.jpg?alt=media&token=4c4d17b7-00c0-4c2d-b845-c0c7583030b0"}}];function $({onModalClose:t}){var p,g;const{register:l,formState:{errors:s},setValue:n,handleSubmit:i}=w(),{personalInformation:c}=f(e=>e.userData),m=N(),{creditCards:r}=c;function v(e){const o={...e,cardId:y()},d={...c,creditCards:r!=null&&r.length?[...r,o]:[o]};m(C({data:d,field:"personalInformation"})),t()}return a.jsxs("div",{className:"fixed inset-0 z-10 flex items-center justify-center lg:py-8 max-h-[45rem]",children:[a.jsx("div",{onClick:t,className:"fixed inset-0 bg-gray-800/80 backdrop-blur-sm -z-10"}),a.jsxs("div",{className:"bg-gray-50 rounded-md px-4 py-2 w-full h-full flex flex-col gap-y-4 lg:w-1/3 max-w-[40rem]",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("h4",{className:"text-2xl font-bold",children:["Add Card",a.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Add your debit/credit card"})]}),a.jsx("button",{type:"button",onClick:t,className:"p-2.5 bg-gray-300 rounded-full text-xl hover:bg-gray-800 hover:text-gray-50 transition-all",children:a.jsx(j,{})})]}),a.jsxs("form",{onSubmit:i(e=>v(e)),className:"flex flex-col justify-stretch w-full flex-1 relative",children:[a.jsxs("div",{className:"grid grid-cols-4 grid-rows-4 gap-14 -mb-8 xl:-mb-12 [&>div>p]:text-sm",children:[a.jsx(x,{label:"card code",register:l("code_number",{...b[0].validation,required:"code number Is Required"}),placeholder:"NNNN-NNNN-NNNN-NNNN",style:"col-span-4",error:(p=s.code_number)==null?void 0:p.message,onChange:e=>h(e,4,"-",20)}),b.map((e,o)=>{var d;return o>0&&a.jsx(x,{label:e.name.replace("_"," "),register:l(e.name,{...e.validation,required:`${e.name.replace("_"," ")} Is Required`}),onChange:u=>(e==null?void 0:e.name)==="cvv"&&h(u,2,"/",4),placeholder:e.placeholder,type:e.name==="ex_date"?e.type:"text",style:`${e.cols===2?"col-span-2":"col-span-4"}`,error:(d=s[e.name])==null?void 0:d.message},o)})]}),a.jsxs("div",{className:"",children:[a.jsx("h6",{className:"text-lg font-medium mb-1",children:"Provider :"}),a.jsx(I,{...l("provider",{required:"please select a provider"}),className:"[&>div]:bg-transparent",options:A,isSearchable:!1,placeholder:"Select a Provider",onChange:({value:e})=>n("provider",e)}),a.jsx("p",{className:"text-sm mt-1 text-red-500 font-semibold",children:(g=s==null?void 0:s.provider)==null?void 0:g.message})]}),a.jsx("button",{className:"px-4 py-2 bg-primary-600 text-white rounded-lg bottom-0 absolute w-full",children:"Add Card"})]})]})]})}function h(t,l=4,s="-",n=19){var r;const i=t.target.value.replace(new RegExp(`\\${s}`,"g"),"").slice(0,n),c=new RegExp(`.{1,${l}}`,"g"),m=((r=i.match(c))==null?void 0:r.join(s))||"";t.target.value=m}export{$ as A};