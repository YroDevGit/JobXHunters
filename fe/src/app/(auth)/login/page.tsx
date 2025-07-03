"use client"

import {handleRegister } from '@/lib/api/auth'
import { Result } from '@/types/result'
import { AuthResponse } from '@/types/user'
import Link from 'next/link'
import { useActionState } from 'react'



const Login = () => {
    const [state, formAction, isPending] = useActionState<Result<AuthResponse>, FormData>(
        handleRegister,
        {error : ''}
    );

  return (
    <>
    <div className='w-full max-w-md rounded-2xl bg-white/5 p-8 border border-white/10 backdrop-blur-md text-white'>
        <h2 className='font-semibold text-3xl font-sans'>Welcome back</h2>
        <p className='text-sm py-2 text-gray-300'>Sign In to your account</p>
        <div className='flex flex-row sm:flex-col w-full mt-5 gap-2'>
            <button className='flex items-center justify-center w-full py-2  rounded-lg shadow-md cursor-pointer hover:bg-gray-700  bg-gray-800 transition-colors'>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className='font-medium hidden sm:block'>Continue with Google</span>
            </button>
            <button className='flex items-center justify-center w-full py-2  rounded-lg shadow-md border border-white/10 cursor-pointer hover:bg-gray-800  bg-gray-900 transition-colors'>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className='hidden sm:block font-medium text-base'>Sign up with Apple</span>
            </button>
        </div>
        
        <div className="flex items-center justify-center my-6">
        <div className="flex-grow h-px bg-white/20 backdrop-blur-sm"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
        <div className="flex-grow h-px bg-white/20 backdrop-blur-sm"></div>
        </div>

        <form action={formAction}>
        <div className='flex flex-col gap-2 '>
            <div className='w-full'>
                <label htmlFor="email" className='text-sm/8 font-medium tracking-wide'>Email address</label>
                <input type="text"
                    name='email'
                    placeholder='@gmail.com'
                    className='w-full px-2 py-2 border text-sm/8 border-gray-600  rounded-md  focus:outline-none focus:ring-1 focus:ring-pink-800'

                />                            
            </div>
            <div className='w-full'>
                <label htmlFor="email" className='text-sm/8 font-medium tracking-wide'>Password</label>
                <input type="password"
                    name='password'
                    placeholder='*******'
                    className='w-full px-2 py-2 border text-sm/8 border-gray-600  rounded-md  focus:outline-none focus:ring-1 focus:ring-pink-800'

                />                            
            </div>
            <div className='mt-4 w-full'>
                <button className=" w-full rounded-lg px-2 py-2 cursor-pointer bg-gradient-to-br from-pink-600 to-pink-900 hover:from-pink-700 hover:to-pink-800 transition-all duration-300">
                    Sign In
                </button>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-2'>
                <p className='text-sm/8 text-gray-500'>Don't have an account?</p>
                <Link href="/register" className='text-base text-gray-300 underline'>Register here! </Link>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default Login