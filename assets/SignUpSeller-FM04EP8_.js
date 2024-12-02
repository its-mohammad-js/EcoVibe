import{G as i,u as g,b as h,c as b,a as f,j as e,T as y,s as l,e as C}from"./index-lzq7sxkh.js";function v(s){return i({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(s)}function j(s){return i({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"},child:[]}]})(s)}const w=[{name:"first_name",placeholder:"Please Enter Your Name",validation:{required:{value:!0,message:"First name is required"},minLength:{value:2,message:"First name must be at least 2 characters"}}},{name:"last_name",placeholder:"Enter Your Last name",validation:{required:{value:!0,message:"Last name is required"},minLength:{value:2,message:"Last name must be at least 2 characters"}}},{name:"email",placeholder:"Enter Your Mail",validation:{required:{value:!0,message:"Email is required"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email format"}}},{name:"password",placeholder:"Choose A Password",type:"password",validation:{required:{value:!0,message:"Password is required"},minLength:{value:8,message:"Password must be at least 8 characters"},pattern:{value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\|;:'"\?><.,\/\\`~])[^\s]{8,}$/,message:"Password needs at least one uppercase letter, lowercase letter, number, and symbol."}}},{name:"password_repeat",placeholder:"Re-peat Password",type:"password",validation:{required:{value:!0,message:"Repeat password is required"}}}];function A(){const{loading:s}=g(a=>a.userData),{register:n,handleSubmit:d,formState:{errors:o},watch:c}=h(),t=b(),m=f();function p(a){t(l({method:"signUpEmail",email:a.email,password:a.password,userType:"seller",personalInformation:{email:a.email,profilePic:C[0],first_name:a.first_name,last_name:a.last_name}}))}return e.jsxs("div",{className:"lg:flex py-4 justify-evenly items-center",children:[e.jsxs("form",{onSubmit:d(a=>p(a)),className:"px-3 py-1.5 flex flex-col gap-y-2 lg:basis-1/3 lg:bg-gray-50 lg:px-6 lg:py-4 lg:rounded-xl lg:border",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("h4",{className:"text-4xl text-center w-full lg:text-start font-bold text-black/80",children:"Become a seller !"})}),e.jsx("div",{className:"flex flex-col gap-y-2",children:w.map((a,u)=>{var r;return e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsx("h6",{className:"first-letter:uppercase font-bold lg:text-lg text-gray-600",children:a.name.replace("_"," ")}),e.jsx(y,{placeholder:a.placeholder,register:{...n(a.name,{...a.validation,validate:x=>a.name==="password_repeat"?x===c().password||"Passwords do not match":!0})},error:(r=o[a.name])==null?void 0:r.message,type:(a==null?void 0:a.type)||"text",style:"h-fit [&>input]:py-4"})]},u)})}),e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx("button",{type:"submit",disabled:s,className:"bg-primary-600 hover:bg-primary-800 text-gray-50 py-2 rounded-3xl text-lg transition-all disabled:animate-pulse",children:"Create New Account"}),e.jsxs("p",{className:"text-center my-1 text-xl relative flex items-center justify-center",children:[e.jsx("p",{className:"w-full h-0.5 bg-gray-300 absolute"}),e.jsx("p",{className:"relative text-base bg-white lg:bg-gray-100 px-3 text-gray-700",children:"Or, use your social media accounts"})]}),e.jsxs("button",{type:"button",disabled:s,onClick:()=>t(l({method:"google",userType:"seller"})),className:"flex items-center justify-between gap-x-2 px-4 py-1 border-2 text-lg border-gray-300 rounded-3xl disabled:animate-pulse",children:[e.jsx("p",{className:"text-4xl",children:e.jsx(v,{})}),e.jsx("p",{children:"Continue with Google"}),"  "]}),e.jsxs("button",{type:"button",disabled:s,onClick:()=>t(l({method:"gitHub",userType:"seller"})),className:"flex items-center justify-between gap-x-2 px-4 py-1 border-2 text-lg border-gray-300 rounded-3xl disabled:animate-pulse",children:[e.jsx("p",{className:"text-4xl",children:e.jsx(j,{})}),e.jsx("p",{children:"Continue with Github"}),"  "]}),e.jsxs("button",{type:"button",disabled:s,onClick:()=>{window.scrollTo(0,0),m("/EcoVibe/sign-in")},className:"flex items-center gap-2 px-4 py-1 text-lg",children:[e.jsx("p",{children:"Already have account?"}),e.jsx("p",{className:"font-semibold underline",children:"login instead"})]})]})]}),e.jsx("div",{className:"hidden lg:flex basis-1/4 h-full items-center",children:e.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/ecovibe-c6720.appspot.com/o/AppImages%2F%E7%A4%BE%E4%BA%A4210234509180930blue-01%201.png?alt=media&token=9476184e-43e1-41a4-9c30-7a215b7d035e",alt:"side-banner",className:"size-full object-cover"})})]})}export{A as default};
