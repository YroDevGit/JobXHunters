import React from 'react'

const JobSearch = () => {
  return (
   <div className="w-full rounded-2xl mt-4 mx-auto max-w-3xl bg-white/5 p-8 border border-white/10 backdrop-blur-md">
    <div className="flex flex-col sm:flex-row gap-4">
        <input
        className="flex-1 px-4 py-2 bg-white/10 text-white placeholder-white/50 rounded-md border-none focus:outline-none focus:ring-1 focus:ring-pink-800"
        type="text"
        placeholder="Search job title"
        />
        <input
        className="flex-1 px-4 py-2 bg-white/10 text-white placeholder-white/50 rounded-md border-none focus:outline-none focus:ring-1 focus:ring-pink-800"
        type="text"
        placeholder="Location"
        />
    </div>
</div>

  )
}

export default JobSearch