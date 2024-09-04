import React from 'react';
import './App.css'
import SignInForm from './components/ui/signInForm'
import Label from './components/ui/label'
import Input from './components/ui/input'
import TextButton from './components/ui/textButton'
import Button from './components/ui/Button'


export default function App() {
  return (
    <div>
    <SignInForm>
      <Label label='Email address' />
      <Input placeholder='Enter your email' />
      <Label label='Password' />
      <Input placeholder='Enter your password' type='password' />
      <TextButton label='Forgot your password?' onClick={()=> console.log('forgot password')} />
      <Button
        label='Sign in'
        onClick={()=> console.log('Sign In')}
      />
      <Button
        label='Create an account' 
        buttonColor='additional'
        onClick={()=> console.log('Sign In')}
      />
    </SignInForm>
    </div>
  );
}
