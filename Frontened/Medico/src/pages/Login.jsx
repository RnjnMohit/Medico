import React, { useState } from 'react';
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    signedin: false,
    showPassword: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleTogglePassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className='mx-auto my-[6rem] h-[580px] w-[414px] rounded-xl shadow-2xl opacity-100'>
      <div className='w-[366px] h-[22px] ml-8'>logo</div>
      <form onSubmit={submitHandler}>
        <div className='w-[366px] ml-8 mt-12'>
          <h1 className='font-semibold text-lg'>Login</h1>
          <p className='mt-2 text-sm'>
            Welcome back. Enter your credentials to access your account
          </p>
        </div>

        <label className='my-4'>
          <p className='font-semibold ml-8 mt-8'>
            Email Address<sup>*</sup>
          </p>
          <input
            className='ml-8 mt-2 border-black rounded-md border-2 h-[2.2rem] w-[356px]'
            required
            type='email'
            placeholder='Enter your email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label className='my-2 mt-8'>
          <p className='font-semibold ml-8 mt-8'>
            Password<sup>*</sup>
          </p>
          <div className='relative ml-8'>
            <input
              className='border-black rounded-md border-2 h-[2.2rem] w-[356px] pr-10'
              required
              type={formData.showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Enter your Password'
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type='button'
              onClick={handleTogglePassword}
              className='absolute inset-y-0 right-0 px-10 flex items-center text-2xl'
            >
              {formData.showPassword ? <FaEyeSlash /> : <IoEye />}
            </button>
          </div>
        </label>
        <div className='my-8 flex flex-row'>
          <input
            className='ml-8'
            type='checkbox'
            name='signedin'
            checked={formData.signedin}
            onChange={handleInputChange}
          />
          <p className='ml-2'>Keep me signed in</p>
        </div>
        <button className='bg-emerald-700 w-[22rem] h-[2.5rem] ml-8 rounded-md'>
          <p>Continue</p>
        </button>
        <div className='flex flex-row mt-16 ml-20'>
          <p>Don't have an account?</p>
          <p className='text-emerald-700'>Sign up here</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
