import React from 'react'
import { Link } from '@tanstack/react-router'
import { useLogin } from '../hooks/login.hook'
import type { LoginPayload } from '../api/auth';

type Props = {}

export default function LoginPage({}: Props) {

//uzyj tu hooka aha ok?

const login = useLogin();

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload: LoginPayload = {
      email: formData.get('email') as string,
      password: formData.get('password') as string
    }
    // wywołujemy mutation
    login.mutate(payload)
  }



  return (
    <div className='wrapper'>
    <p>Zaloguj się</p>
      <form className='form_wrapper' onSubmit={handleSubmit}>
        <input className='form_wrapper_input' type='text' name='email' placeholder='Email'/>
        <input className='form_wrapper_input' type='password' name='password' placeholder='Password'/>
        <div className='form_buttons_wrapper'>
          <button className='form_button' type='submit'>Sign&nbsp;in</button>
          <p className='form_textbutton'>Don't have account? <Link to='/register'>Sign&nbsp;up</Link></p>
        </div>
      </form>
    </div>
  )
}