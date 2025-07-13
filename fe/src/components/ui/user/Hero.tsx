import React from 'react';

const Hero = () => {
  return (
    <>
    <div className='max-w-7xl relative mb-2 mt-4 w-full'>
        <div className='relative flex flex-col md:flex-row gap-1 md:gap-0 items-center justify-items-center'>          
            <div className='relative md:w-[500px] md:absolute md:left-0 flex flex-col bg-white/90 rounded-md backdrop-blur-md shadow-xl p-2 md:p-4 z-[10]'>
                <h2 className='text-3xl font-semibold text-gray-900'>Find the right job for you on JobXHunters</h2>
                <p className='text-lg/8 mt-2 mb-2 text-gray-900'>Sign in to see the right Jobs for you.</p>
                <button className='flex items-center justify-center w-full py-2  rounded-lg shadow-md cursor-pointer hover:bg-gray-700  bg-gray-800 transition-colors'>
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className='font-medium hidden sm:block'>Continue with Google</span>
                </button>
                 <div className="flex items-center justify-center my-6">
                    <div className="flex-grow h-px bg-gray-800 backdrop-blur-sm"></div>
                        <span className="px-4 text-gray-900 text-sm">OR</span>
                    <div className="flex-grow h-px bg-gray-800 backdrop-blur-sm"></div>
                  </div>
                <button className='btn-primary'>
                    Sign In
                </button>
                  <div className='flex items-center justify-center'>
                    <h2 className='text-base text-gray-700 mt-2'>Don't have an account?
                      <a href="#" className='text-base underline text-gray-900'> Register here!</a>
                    </h2>
                  </div>               
            </div>
          {/* To fake the design and create a space when breakpoints is in md */}
            <div className='relative flex flex-grow-1'>

            </div>
          
            {/* Image */}
            <div className=' w-full md:mt-2 z-[0] md:w-[65%]'>
                 <img
                src="https://thumbs.dreamstime.com/b/business-women-working-office-excited-multi-ethnic-businesswomen-discussing-notes-hanging-wall-front-them-123951707.jpg"
                alt="Hero"
                className="w-full md:h-auto object-cover rounded-md "
              />

            </div>
        </div>
    </div>
    </>
  );
};

export default Hero;
