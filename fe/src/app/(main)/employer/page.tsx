import React from 'react'

const EmployerSite = () => {
  return (
    <>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 py-4 mt-4'>
            <div className='mt-2 w-full px-20 py-20'>
                <h2 className='font-semibold text-5xl text-white whitespace-normal break-words'>Let's make your next</h2>
                <h2 className='text-white text-5xl whitespace-normal break-words'>great hire. Fast.</h2>
                <button className='text-lg
                 btn-secondary mt-14 mb-2 px-14 py-4
                '>Post a Job</button>
            </div> 
            <div className='mt-2'>
                <img src="https://img.freepik.com/premium-vector/job-interview-hr-manager-with-laptop-talking-candidate_896717-4.jpg?w=2000"
                className='w-full h-90 object-contain shadow-2xl'
                alt=""
                loading='lazy' />
            </div> 
        </div>
        <div className='mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 md:px-4 md:py-4 sm:px-20 sm:py-20'>
            <div className='border border-gray-100 rounded-md px-8 py-8 bg-white/80 backdrop-blur-sm shadow-md'>
                <h1 className='text-indigo-800 text-2xl font-semibold'>1</h1>
                <h2 className='text-gray-900 text-3xl font-semibold mt-4 md:mt-10'>Create your</h2>
                <h2 className='text-gray-900 text-3xl font-semibold'> Free Account</h2>               
                <p className='text-base text-gray-900 mt-2 md:mt-8'>
                All you need is your email address to create an account and start building your job post.
                </p>
            </div>
            <div className='border border-gray-100 rounded-md px-8 py-8 bg-white/80 backdrop-blur-sm shadow-md'>
                <h1 className='text-indigo-800 text-2xl font-semibold'>2</h1>
                <h2 className='text-gray-900 text-3xl font-semibold mt-4 md:mt-10'>Build your</h2>
                <h2 className='text-gray-900 text-3xl font-semibold'> job post</h2>               
                <p className='text-base text-gray-900 mt-2 md:mt-8'>
                Then just add a title, description, and location to your job post, and you're ready to go.
                </p>
            </div>
            <div className='border border-gray-100 rounded-md px-8 py-8 bg-white/80 backdrop-blur-sm shadow-md'>
                <h1 className='text-indigo-800 text-2xl font-semibold'>3</h1>
                <h2 className='text-gray-900 text-3xl font-semibold mt-4 md:mt-10'>Post</h2>
                <h2 className='text-gray-900 text-3xl font-semibold'> your job</h2>               
                <p className='text-base text-gray-900 mt-2 md:mt-8'>
                After you post your job use our state of the art tools to help you find dream talent.
                </p>
            </div>
           
        </div>

        <div className='mx-auto bg-white/4 rounded-md backdrop-blur-xl max-w-7xl flex flex-col justify-center items-center px-4 py-4 md:px-20 md:py-20'>
            <h2 className='text-gray-100 font-semibold text-3xl mb-10 md:mb-15   mt-4 md:mt-8'>Save time and effort in your hiring journey.</h2>
            <div className='w-full md:w-[900px] px-4'>
                <h4 className='text-gray-100 text-[24px] text-wrap px-2 md:px-4'>Finding the best fit for the job shouldn’t be a full-time job. Indeed’s simple and powerful tools let you source, screen, and hire faster.</h4>
            </div>            
        </div>

        <div className='mx-auto max-w-7xl bg-white/3 rounded-md gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-4 px-8 py-8 gap-4'>
                 <div className='flex flex-row gap-2 py-8 px-8 bg-white/8 backdrop-blur-sm rounded-lg shadow-xl'>
                    <div className='w-[100px]'>
                        <img src="https://pluspng.com/img-png/task-png-tasks-icon-image-17815-1024.png" 
                        className='object-contain rounded-md h-20'
                        loading='lazy'
                        alt="" />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-2xl font-semibold'>Get more visibility</h2>
                        <div className='w-[300px] mt-2'>
                            <h4 className='text-[16px] text-wrap text-gray-300'>Sponsor your job to ensure it gets seen by the right people.</h4>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-2 py-8 px-8 bg-white/8 backdrop-blur-sm rounded-lg shadow-xl'>
                    <div className='w-[100px]'>
                        <img src="https://png.pngtree.com/png-clipart/20220909/original/pngtree-gold-award-ribbon-png-image_8497314.png" 
                        className='object-contain rounded-md h-20'
                        loading='lazy'
                        alt="" />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-2xl font-semibold'>Get more visibility</h2>
                        <div className='w-[300px] mt-2'>
                            <h4 className='text-[16px] text-wrap text-gray-300'>Sponsor your job to ensure it gets seen by the right people.</h4>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-2 py-8 px-8 bg-white/8 backdrop-blur-sm rounded-lg shadow-xl'>
                    <div className='w-[100px]'>
                        <img src="https://media.istockphoto.com/id/1952833352/vector/kyc-or-know-your-customer-with-business-verifying-the-identity-of-its-clients-concept-at-the.jpg?s=170667a&w=0&k=20&c=8GkyIN2ttjRaznrSdTAXCSW5btq00Pp3MW_hrKS89uc=" 
                        className='object-contain rounded-md h-20'
                        loading='lazy'
                        alt="" />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-2xl font-semibold'>Get more visibility</h2>
                        <div className='w-[300px] mt-2'>
                            <h4 className='text-[16px] text-wrap text-gray-300'>Sponsor your job to ensure it gets seen by the right people.</h4>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-2 py-8 px-8 bg-white/8 backdrop-blur-sm rounded-lg shadow-xl'>
                    <div className='w-[100px]'>
                        <img src="https://as1.ftcdn.net/v2/jpg/05/99/08/52/1000_F_599085204_HfyFldD6pDmNXEWXJkPgyHANdIrioGq4.jpg" 
                        className='object-contain rounded-md h-20'
                        loading='lazy'
                        alt="" />
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-2xl font-semibold'>Get more visibility</h2>
                        <div className='w-[300px] mt-2'>
                            <h4 className='text-[16px] text-wrap text-gray-300'>Sponsor your job to ensure it gets seen by the right people.</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* buttons */}
             <div className='mx-auto max-w-5xl flex flex-col md:flex-row gap-4 px-8 md:py-4 md:px-4'>
                <div className=''>
                    <button className='btn-secondary text-lg px-16 py-4'>
                    Get started
                    </button>
                </div>
                <div className='flex-1 mb-4'>
                    <span className='text-wrap text-base'>
                        You control your posts 24/7—edit, add, pause, or close them whenever you want. <strong className='cursor-pointer hover:text-gray-400'>Learn more about posting.</strong>                         
                    </span>
                </div>
             </div>
        </div>
    </>
  )
}

export default EmployerSite