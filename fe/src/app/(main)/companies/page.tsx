import Link from 'next/link'
import React from 'react'

const Companies = () => {
  return (
    <div className='max-w-6xl mx-auto backdrop-blur-sm shadow-xl rounded-md mt-5 px-4 py-4'>
        {/* Search Div */}
        <div className='flex flex-col'>
            <h1 className='text-5xl font-semibold text-gray-200'>Find great places to work</h1>
            <h2 className='mt-6 text-gray-400 text-2xl'>Get access to millions of company reviews</h2>
        </div>
        <h4 className='text-gray-300 font-semibold text-lg mt-4'>Company name or job title</h4>
        <div className='flex flex-col md:flex-row gap-2'>
            <input type="text" className='text-black border border-gray-400 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-pink-400 px-4 py-2 mt-1' />
            <button className='flex items-center justify-center gap-x-1 text-gray-100 text-lg tracking-normal px-4 py-2 bg-pink-700 cursor-pointer hover:bg-pink-800 md:w-[400px] rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                Find Companies
            </button>
        </div>

        <h2 className='text-3xl font-semibold text-black mt-8'>Popular Companies</h2>
        {/* List of Companies */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

            <div className='border border-gray-400 bg-white/90 flex flex-col gap-2 rounded-md mt-2 px-2 md:px-4 md:py-4 py-2 backdrop-blur-md shadow-lg hover:border-indigo-800'>
            <Link href="#">
                <img src="https://www.seekpng.com/png/detail/222-2227699_pnb-logo-vector-philippine-national-bank.png" alt="Company Photo" className='w-full h-60 object-contain object-left rounded-md' />
                <h2 className='text-xl font-semibold text-gray-900 mt-2'>PNB Inc.</h2>
                <div className='inline-text items-center space-x-3'>
                    <button className='mt-2 text-pink-600 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>                 
                    </button>
                    <span className='text-black font-semibold text-lg'>4.1</span>
                    <span className='text-black font-bold'> .</span>
                    <span className='text-black font-semibold text-lg'>8 Reviews</span>
                </div>
                <div className=' w-fit bg-gray-300 rounded-md px-2 mt-2'>
                    <span className='text-gray-900 font-semibold'>86 Jobs</span>
                </div>
            </Link>
            </div>

            <div className='border border-gray-400 bg-white/90 flex flex-col gap-2 rounded-md mt-2 px-2 md:px-4 md:py-4 py-2 backdrop-blur-md shadow-lg hover:border-pink-800'>
                <Link href="">
                <img src="https://logonoid.com/images/jollibee-logo.png" alt="Company Photo" className='w-full h-60 object-contain object-left rounded-md' />
                <h2 className='text-xl font-semibold text-gray-900 mt-2'>Jolibee Inc.</h2>
                <div className='inline-text items-center space-x-3'>
                    <button className='mt-2 text-pink-600 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>                 
                    </button>
                    <span className='text-black font-semibold text-lg'>4.1</span>
                    <span className='text-black font-bold'> .</span>
                    <span className='text-black font-semibold text-lg'>8 Reviews</span>
                </div>
                <div className=' w-fit bg-gray-300 rounded-md px-2 mt-2'>
                    <span className='text-gray-900 font-semibold'>86 Jobs</span>
                </div>
                </Link>
            </div>

            <div className='border border-gray-400 bg-white/90 flex flex-col gap-2 rounded-md mt-2 px-2 md:px-4 md:py-4 py-2 backdrop-blur-md shadow-lg hover:border-pink-800'>
                <Link href="">
                <img src="https://www.pngmart.com/files/22/McDonalds-Logo-PNG-File.png" alt="Company Photo" className='w-full h-60 object-contain object-left rounded-md' />
                <h2 className='text-xl font-semibold text-gray-900 mt-2'>McDonalds Inc.</h2>
                <div className='inline-text items-center space-x-3'>
                    <button className='mt-2 text-pink-600 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>                 
                    </button>
                    <span className='text-black font-semibold text-lg'>4.1</span>
                    <span className='text-black font-bold'> .</span>
                    <span className='text-black font-semibold text-lg'>8 Reviews</span>
                </div>
                <div className=' w-fit bg-gray-300 rounded-md px-2 mt-2'>
                    <span className='text-gray-900 font-semibold'>86 Jobs</span>
                </div>
                </Link>
            </div>

            <div className='border border-gray-400 bg-white/90 flex flex-col gap-2 rounded-md mt-2 px-2 md:px-4 md:py-4 py-2 backdrop-blur-md shadow-lg hover:border-pink-800'>
                <Link href="">
                <img src="https://www.pikpng.com/pngl/b/56-568909_the-history-of-starbucks-logo-and-a-look.png" alt="Company Photo" className='w-full h-60 object-contain object-left rounded-md' />
                <h2 className='text-xl font-semibold text-gray-900 mt-2'>Startbucks Inc.</h2>
                <div className='inline-text items-center space-x-3'>
                    <button className='mt-2 text-pink-600 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>                 
                    </button>
                    <span className='text-black font-semibold text-lg'>4.1</span>
                    <span className='text-black font-bold'> .</span>
                    <span className='text-black font-semibold text-lg'>8 Reviews</span>
                </div>
                <div className=' w-fit bg-gray-300 rounded-md px-2 mt-2'>
                    <span className='text-gray-900 font-semibold'>86 Jobs</span>
                </div>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Companies