import{j as a}from"./tailwind-bVZ7dlgo.js";import{r as g}from"./index-DJO9vBfz.js";import{I as b}from"./input-CiUZZ8Id.js";import{B as f}from"./Button-C5kiXvu4.js";import{c as I}from"./cn.util-CKeN8Qs0.js";import{L as x}from"./label-sVcWE-cU.js";import{T as _}from"./textButton-CjlpPrLu.js";import"./showPasswordIcon-D4qh1_7U.js";import"./hidePasswordIcon-KSjs4SW0.js";const q=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),B=e=>{if(e.length<8)return!1;const o=/[A-Z]/.test(e),r=/[a-z]/.test(e),l=/\d/.test(e),s=/[!@#$%^&*(),.?":{}|<>]/.test(e);if(!(o&&r&&l&&s))return!1;const d=["password","12345678","qwerty","letmein","monkey","abc123"],i=["john","mary","james","linda","robert","michael","google","facebook"],t=e.toLowerCase();return!(d.includes(t)||i.some(m=>t.includes(m)))};function y({className:e="h-92 w-128 rounded-lg",backgroundColor:o="#FFFFFF",boxShadow:r="shadow-form-custom-1 shadow-form-custom-2",padding:l="p-7.5",gap:s="gap-6",margin:d="",label_1:i={label:"Email address",margin:"mb-1"},label_2:t={label:"Password",margin:"mt-7 mb-1"},emailInput:m={},passwordInput:C={placeholder:"Enter your password",type:"password"},textButton:k={margin:"mt-4"},button_1:p={label:"Sign in",margin:"mt-7"},button_2:S={backgroundColor:"transparent",border:"border-1 border-twiist-blue",label:"Create an account",textColor:"#0171E3",margin:"mt-2"}}){const[E,V]=g.useState(""),[N,P]=g.useState(""),T=q(E),v=B(N),c=!T||!v;return a.jsxs("form",{className:I(`${r} ${e} ${d} ${l} ${s}`),style:{backgroundColor:o},children:[a.jsx(x,{...i}),a.jsx(b,{...m,onChange:u=>V(u.target.value)}),a.jsx(x,{...t}),a.jsx(b,{...C,onChange:u=>P(u.target.value)}),a.jsx(_,{...k}),a.jsx(f,{...p,disabled:c,backgroundColor:c?"green":p.backgroundColor}),a.jsx(f,{...S})]})}y.__docgenInfo={description:"",methods:[],displayName:"SignInForm",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'h-92 w-128 rounded-lg'",computed:!1}},boxShadow:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'shadow-form-custom-1 shadow-form-custom-2'",computed:!1}},margin:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},padding:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'p-7.5'",computed:!1}},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'gap-6'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FFFFFF'",computed:!1}},label_1:{required:!1,tsType:{name:"LabelProps"},description:"",defaultValue:{value:"{ label: 'Email address', margin: 'mb-1' }",computed:!1}},label_2:{required:!1,tsType:{name:"LabelProps"},description:"",defaultValue:{value:"{ label: 'Password', margin: 'mt-7 mb-1'}",computed:!1}},emailInput:{required:!1,tsType:{name:"InputProps"},description:"",defaultValue:{value:"{}",computed:!1}},passwordInput:{required:!1,tsType:{name:"InputProps"},description:"",defaultValue:{value:"{ placeholder: 'Enter your password', type: 'password' }",computed:!1}},textButton:{required:!1,tsType:{name:"TextButtonProps"},description:"",defaultValue:{value:"{margin: 'mt-4'}",computed:!1}},button_1:{required:!1,tsType:{name:"ButtonProps"},description:"",defaultValue:{value:"{ label: 'Sign in', margin: 'mt-7'}",computed:!1}},button_2:{required:!1,tsType:{name:"ButtonProps"},description:"",defaultValue:{value:`{            
    backgroundColor: "transparent",
    border: "border-1 border-twiist-blue",
    label: "Create an account",
    textColor: "#0171E3",
    margin: 'mt-2'
}`,computed:!1}}}};const U={title:"Components/ui/Form",component:y,tags:["autodocs"],parameters:{layout:"centered"}},n={args:{className:"h-92 w-128 rounded-lg",backgroundColor:"#FFFFFF",boxShadow:"shadow-form-custom-1 shadow-form-custom-2",padding:"p-7.5",gap:"gap-6",margin:"",label_1:{label:"Email address",labelColor:"black",labelSize:"text-1xs",margin:"mb-1",className:"tracking-normal",fontWeight:"font-normal",labelAlign:"text-left",labelFontFamily:""},label_2:{label:"Password",margin:"mt-5 mb-1",labelColor:"black",labelSize:"text-1xs",className:"tracking-normal",fontWeight:"font-normal",labelAlign:"text-left",labelFontFamily:""},emailInput:{className:"h-9 w-120 rounded-md",backgroundColor:"#F9FAFB",placeholder:"Enter your password",type:"text",padding:"py-1.5 px-3",gap:"gap-1.5",border:"border border-gray-400 focus:border-twiist-blue focus:outline-none",margin:""},passwordInput:{className:"h-9 w-120 rounded-md",backgroundColor:"#F9FAFB",placeholder:"Enter your password",type:"password",iconFill:"black",padding:"py-1.5 px-3",gap:"gap-1.5",border:"border border-gray-400 focus:border-twiist-blue focus:outline-none",margin:""},textButton:{label:"Forgot your password?",labelColor:"#0171E3",labelSize:"text-1xs",margin:"mt-3"},button_1:{label:"Sign in",backgroundColor:"#0171E3",textColor:"white",className:"h-11 w-120 rounded-md",fontWeight:"font-normal",textFont:"font-sans",textSize:"text-1s",padding:"py-3 px-4",gap:"gap-1.5",margin:"mt-7"},button_2:{label:"Create an account",backgroundColor:"transparent",textColor:"#0171E3",className:"h-11 w-120 rounded-md",border:"border-1 border-twiist-blue",fontWeight:"font-normal",textFont:"font-sans",textSize:"text-1s",padding:"py-3 px-4",gap:"gap-1.5",margin:"mt-2"}}};var w,F,h;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    className: 'h-92 w-128 rounded-lg',
    backgroundColor: '#FFFFFF',
    boxShadow: 'shadow-form-custom-1 shadow-form-custom-2',
    padding: 'p-7.5',
    gap: 'gap-6',
    margin: '',
    label_1: {
      label: 'Email address',
      labelColor: 'black',
      labelSize: 'text-1xs',
      margin: 'mb-1',
      className: 'tracking-normal',
      fontWeight: 'font-normal',
      labelAlign: 'text-left',
      labelFontFamily: ''
    },
    label_2: {
      label: 'Password',
      margin: 'mt-5 mb-1',
      labelColor: 'black',
      labelSize: 'text-1xs',
      className: 'tracking-normal',
      fontWeight: 'font-normal',
      labelAlign: 'text-left',
      labelFontFamily: ''
    },
    emailInput: {
      className: 'h-9 w-120 rounded-md',
      backgroundColor: '#F9FAFB',
      placeholder: 'Enter your password',
      type: 'text',
      padding: 'py-1.5 px-3',
      gap: 'gap-1.5',
      border: 'border border-gray-400 focus:border-twiist-blue focus:outline-none',
      margin: ''
    },
    passwordInput: {
      className: 'h-9 w-120 rounded-md',
      backgroundColor: '#F9FAFB',
      placeholder: 'Enter your password',
      type: 'password',
      iconFill: 'black',
      padding: 'py-1.5 px-3',
      gap: 'gap-1.5',
      border: 'border border-gray-400 focus:border-twiist-blue focus:outline-none',
      margin: ''
    },
    textButton: {
      label: 'Forgot your password?',
      labelColor: '#0171E3',
      labelSize: 'text-1xs',
      margin: 'mt-3'
    },
    button_1: {
      label: 'Sign in',
      backgroundColor: '#0171E3',
      textColor: 'white',
      className: 'h-11 w-120 rounded-md',
      fontWeight: 'font-normal',
      textFont: 'font-sans',
      textSize: 'text-1s',
      padding: 'py-3 px-4',
      gap: 'gap-1.5',
      margin: 'mt-7'
    },
    button_2: {
      label: 'Create an account',
      backgroundColor: 'transparent',
      textColor: '#0171E3',
      className: 'h-11 w-120 rounded-md',
      border: 'border-1 border-twiist-blue',
      fontWeight: 'font-normal',
      textFont: 'font-sans',
      textSize: 'text-1s',
      padding: 'py-3 px-4',
      gap: 'gap-1.5',
      margin: 'mt-2'
    }
  }
}`,...(h=(F=n.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};const Z=["DefaultSignInForm"];export{n as DefaultSignInForm,Z as __namedExportsOrder,U as default};
