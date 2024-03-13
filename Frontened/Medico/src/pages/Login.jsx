import React, { useState } from 'react'

export const Login = () => {

  const[formData, setFormData] = useState({
    email:" ",
    password:" ",
    signedin:" ",
  })




  return (
    <div className='bg-slate-100 mx-[35rem] my-[6rem] h-[587px] w-[414px] rounded-md'>
      <div className='w-[366px] h-[22px] ml-8'>
        logo
      </div>
      <form>
        <div className='w-[366px] ml-8 mt-12'>
          <h1 className='font-semibold text-lg'>Login</h1>
          <p className='mt-2 text-sm'>Welcome back Enter your credentials to access your account</p>
        </div>

        <label className='my-4 '>
          <p className='font-semibold ml-8 mt-8'>
            Email Address<sup>*</sup>
          </p>
          <input className='ml-8 mt-2 border-black rounded-md border-2 h-[2.2rem] w-[360px]'
            required
            type='email'
            placeholder="Enter your email"
            name='email'
            value={formData.value}
          />
        </label>
        <label className='my-2 mt-8' >
          <p className='font-semibold ml-8 mt-8'>
            Password<sup>*</sup>
          </p>
          <input  className='ml-8 border-black rounded-md border-2 h-[2.2rem] w-[360px]'
            required
            type='password'
            name='password'
            placeholder='Enter your Password'
            value={formData.password} />
        </label>
        <div className='my-8 flex flex-row'>
        <input className='ml-8'
            type='checkbox'
            name='signedin'
            value={formData.signedin} />

          <p className=' ml-2'>
            Keep me signed in
          </p>
        </div>
        <button className='bg-emerald-700 w-[23rem] h-[2.5rem] ml-8 rounded-md'>
          <p>Continue</p>
        </button>
        <div>
          <p>
            Don't have an account? 
          </p>
          <p>
            Sign up here
          </p>
        </div>
      </form>





    </div>
  )
}

export default Login;