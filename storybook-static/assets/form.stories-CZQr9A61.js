import{j as e}from"./tailwind-Ct16TRai.js";import{r as c}from"./index-DJO9vBfz.js";import{c as d}from"./cn.util-CKeN8Qs0.js";import{L as a}from"./label-WqK2yh4T.js";import{T as S}from"./textButton-n5Kr3Ns7.js";import{I as i}from"./input-D0uIh4JQ.js";import{B as t}from"./Button-DetpVQry.js";import{D as N}from"./digitInputForm-D92ZSFex.js";import"./showPasswordIcon-C64Cko5Y.js";import"./svg.interface-CCT0W7fS.js";import"./hidePasswordIcon-C1dvs_ge.js";function F({children:l}){const o=c.Children.toArray(l);return e.jsx("form",{className:d("h-92 w-128 rounded-lg shadow-form-custom p-7.5 gap-6"),style:{backgroundColor:"#FFFFFF"},children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-1.5",children:[o[0]||null,o[1]||null]}),e.jsxs("div",{className:"flex flex-col gap-1.5",children:[o[2]||null,o[3]||null,o[4]||null]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[o[5]||null,o[6]||null]})]})})}F.__docgenInfo={description:"",methods:[],displayName:"SignInForm",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function C({children:l}){const o=c.Children.toArray(l);return e.jsx("form",{className:d("h-80.5 w-128 rounded-lg shadow-form-custom p-7.5 gap-6"),style:{backgroundColor:"#FFFFFF"},children:e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("div",{className:"flex flex-col gap-1.5",children:o[0]||null}),o[1]||null,e.jsxs("div",{className:"flex flex-col gap-3",children:[o[2]||null,e.jsx("div",{className:"flex justify-center items-center",children:o[3]||null})]})]})})})}C.__docgenInfo={description:"",methods:[],displayName:"VerifyCodeForm",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};function j({children:l}){const o=c.Children.toArray(l);return e.jsx("form",{className:d("h-58 w-128 rounded-lg shadow-form-custom p-7.5 gap-6"),style:{backgroundColor:"#FFFFFF"},children:e.jsx("div",{className:"flex flex-col gap-6",children:e.jsxs("div",{className:"flex flex-col gap-6",children:[o[0]||null,e.jsxs("div",{className:"flex flex-col gap-1.5",children:[o[1]||null,o[2]||null]}),o[3]||null]})})})}j.__docgenInfo={description:"",methods:[],displayName:"VerifyQuestionForm",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const R={title:"Components/ui/Form",tags:["autodocs"],parameters:{layout:"centered"}},r=()=>e.jsxs(F,{children:[e.jsx(a,{label:"Email address"}),e.jsx(i,{placeholder:"Enter your email"}),e.jsx(a,{label:"Password"}),e.jsx(i,{placeholder:"Enter your password",type:"password"}),e.jsx(S,{label:"Forgot your password?",onClick:()=>console.log("forgot password")}),e.jsx(t,{label:"Sign in",onClick:()=>console.log("Sign In")}),e.jsx(t,{label:"Create an account",buttonColor:"additional",onClick:()=>console.log("Create Account")})]}),n=()=>e.jsxs(C,{children:[e.jsx(a,{label:`A verification code has been sent to your registered phone number ending in {***-55}.
           Please enter the code below to proceed.`,labelColor:"secondary",labelSize:"sm",highlightedColor:"black",highlightedSize:"sm"}),e.jsx(N,{}),e.jsx(t,{label:"Submit",onClick:()=>console.log("Submit")}),e.jsx(t,{label:"Resend code",buttonColor:"none",onClick:()=>console.log("Resend code")})]}),s=()=>e.jsxs(j,{children:[e.jsx(a,{label:"What is your mother’s maiden name?",labelSize:"sm",labelWidth:"semibold"}),e.jsx(a,{label:"Answer"}),e.jsx(i,{placeholder:"Type here"}),e.jsx(t,{label:"Submit",onClick:()=>console.log("Submit")})]});r.__docgenInfo={description:"",methods:[],displayName:"DefaultSignInForm"};n.__docgenInfo={description:"",methods:[],displayName:"DefaultVerifyCodeForm"};s.__docgenInfo={description:"",methods:[],displayName:"DefaultVerifyQuestionForm"};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <SignInForm>
      <Label label='Email address' />
      <Input placeholder='Enter your email' />
      <Label label='Password' />
      <Input placeholder='Enter your password' type='password' />
      <TextButton label='Forgot your password?' onClick={() => console.log('forgot password')} />
      <Button label='Sign in' onClick={() => console.log('Sign In')} />
      <Button label='Create an account' buttonColor='additional' onClick={() => console.log('Create Account')} />
    </SignInForm>;
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,h,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <VerifyCodeForm>
      <Label label={\`A verification code has been sent to your registered phone number ending in {***-55}.
           Please enter the code below to proceed.\`} // To create highlighted text, enclose it inside { }
    labelColor='secondary' labelSize='sm' highlightedColor='black' highlightedSize='sm' />
      <DigitInputForm />
      <Button label='Submit' onClick={() => console.log('Submit')} />
      <Button label='Resend code' buttonColor='none' onClick={() => console.log('Resend code')} />
    </VerifyCodeForm>;
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,b,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <VerifyQuestionForm>
      <Label label='What is your mother’s maiden name?' labelSize='sm' labelWidth='semibold' />
      <Label label='Answer' />
      <Input placeholder='Type here' />
      <Button label='Submit' onClick={() => console.log('Submit')} />
    </VerifyQuestionForm>;
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const L=["DefaultSignInForm","DefaultVerifyCodeForm","DefaultVerifyQuestionForm"];export{r as DefaultSignInForm,n as DefaultVerifyCodeForm,s as DefaultVerifyQuestionForm,L as __namedExportsOrder,R as default};
