import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <>
        <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-black'>
            <div className='w-full max-w-lg rounded-2xl bg-white/5 p-8 border border-white/10 backdrop-blur-md text-white'>
                <p className='text-sm py-2 text-gray-300 uppercase'>job hunting? </p>
                <h2 className='font-semibold text-3xl font-sans'>Create New Account</h2>

                <div className='flex flex-col md:flex-row gap-2 mt-8'>
                    <div className='w-full'>
                        <label htmlFor="email" className='text-sm/8 font-medium tracking-wide'>First Name</label>
                            <input type="text"
                                placeholder='Tyrone'
                                className='w-full px-2 py-2 border text-sm/8 border-gray-600  rounded-md  focus:outline-none focus:ring-1 focus:ring-pink-800'

                            />    
                    </div>
                    <div className='w-full'>
                        <label htmlFor="Last Name" className='text-sm/8 font-medium tracking-wide'>Last Name</label>
                            <input type="text"
                                placeholder='Manyak'
                                className='w-full px-2 py-2 border text-sm/8 border-gray-600  rounded-md  focus:outline-none focus:ring-1 focus:ring-pink-800'

                            />    
                    </div>
                </div>
                        
              <div className='flex flex-col gap-2'>
                <div className='w-full'>
                        <label htmlFor="email" className='text-sm/8 font-medium tracking-wide'>Email address</label>
                        <input type="text"
                            placeholder='@gmail.com'
                            className='w-full px-2 py-2 border text-sm/8 border-gray-600  rounded-md  focus:outline-none focus:ring-1 focus:ring-pink-800'

                        />                            
                </div>
                <div className='w-full'>
                        <label htmlFor="email" className='text-sm/8 font-medium tracking-wide'>Password</label>
                        <input type="password"
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
                    <p className='text-sm/8 text-gray-500'>Already have an account?</p>
                    <Link href="/login" className='text-base text-gray-300 underline'>Login here!</Link>
                </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default Register