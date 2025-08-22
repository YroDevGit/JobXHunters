import React from 'react'
import Link from 'next/link'

const Jobs = () => {
  return (
    
    <div className=' max-w-4xl mx-auto px-2 py-2 md:py-4 md:px-4 grid grid-cols-1 md:grid-cols-2 bg-white/90 backdrop-blur-md rounded-md shadow-xl gap-2'>
    
      <div className=' border border-gray-400 rounded-md p-4'>
        <div className='flex justify-between mb-2'>
          <div className="border border-gray-400 inline-flex items-center justify-center px-2 rounded-md">
            <span className="text-sm text-pink-800">New</span>
          </div>
          <div className='mt-2'>
            <button className=' text-gray-800 cursor-pointer hover:text-pink-700'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              </svg>
            </button>
          </div>
        </div>
              {/* title */}
              <h2 className='text-2xl font-semibold tracking-tight text-gray-900 mt-2'> Web Developer</h2>
              {/* Company */}
            <div className='ml-2'>                  
              <h3 className='text-1xl text-gray-800 mt-2'>IBM Tech Company</h3>
              <h3 className='text-1xl text-gray-800'>Taguig City</h3>
            </div>

            {/* Salary Range and Job Type  */}
            <div className='flex flex-row flex-wrap gap-2 mt-4'>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  PHP 130,000 a Month
                </p>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  Full-Time
                </p>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  Work from Home

                </p>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  Health Insurance

                </p>
                
            </div>
          <div className=''>
            <Link href="#" className='flex flex-row items-center mt-5 gap-1 text-black border border-gray-700 w-fit rounded-md p-2 hover:bg-pink-600 hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
              </svg>
                Easy Apply
            </Link>
          </div>
      </div>
      
      <div className=' border border-gray-400 rounded-md p-4'>
        <div className='flex justify-between mb-2'>
          <div className="border border-gray-400 inline-flex items-center justify-center px-2 rounded-md">
            <span className="text-sm text-pink-800">Urgent Hiring</span>
          </div>
          <div className='mt-2'>
            <button className=' text-gray-800 cursor-pointer hover:text-pink-700'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              </svg>
            </button>
          </div>
        </div>
              {/* title */}
              <h2 className='text-2xl font-semibold tracking-tight text-gray-900 mt-2'> Software Developer</h2>
              {/* Company */}
            <div className='ml-2'>                  
              <h3 className='text-1xl text-gray-800 mt-2'>Ryan Tech Company</h3>
              <h3 className='text-1xl text-gray-800'>Quezon City</h3>
            </div>

            {/* Salary Range and Job Type  */}
            <div className='flex flex-row flex-wrap gap-2 mt-4'>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  PHP 130,000 a Month
                </p>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  Full-Time
                </p>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  Work from Home

                </p>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  Health Insurance

                </p>
                
            </div>
          <div className=''>
            <Link href="#" className='flex flex-row items-center mt-5 gap-1 text-black border border-gray-700 w-fit rounded-md p-2 hover:bg-pink-600 hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
              </svg>
                Easy Apply
            </Link>
          </div>
      </div>

      <div className=' border border-gray-400 rounded-md p-4'>
        <div className='flex justify-between mb-2'>
          <div className="border border-gray-400 inline-flex items-center justify-center px-2 rounded-md">
            <span className="text-sm text-pink-800">New</span>
          </div>
          <div className='mt-2'>
            <button className=' text-gray-800 cursor-pointer hover:text-pink-700'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
              </svg>
            </button>
          </div>
        </div>
              {/* title */}
              <h2 className='text-2xl font-semibold tracking-tight text-gray-900 mt-2'> Mid Software Developer</h2>
              {/* Company */}
            <div className='ml-2'>                  
              <h3 className='text-1xl text-gray-800 mt-2'>Jedydy Tech Company</h3>
              <h3 className='text-1xl text-gray-800'>Makati City</h3>
            </div>

            {/* Salary Range and Job Type  */}
            <div className='flex flex-row flex-wrap gap-2 mt-4'>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  PHP 130,000 a Month
                </p>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  Full-Time
                </p>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  Work from Home

                </p>
                <p className='text-sm font-semibold text-gray-800
                  bg-gray-300 rounded-sm inline-block px-3
                '>
                  Health Insurance

                </p>
                
            </div>
          <div className=''>
            <Link href="#" className='flex flex-row items-center mt-5 gap-1 text-black border border-gray-700 w-fit rounded-md p-2 hover:bg-pink-600 hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
              </svg>
                Easy Apply
            </Link>
          </div>
      </div>
    </div>

  )
}

export default Jobs