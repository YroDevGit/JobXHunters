import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-6">
       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-200">JobXHunters</div>
        <Navigation />
      </div>
    </nav>
  )
}

export default Header