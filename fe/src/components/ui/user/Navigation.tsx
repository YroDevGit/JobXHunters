"use client"

import React, { useEffect, useState } from 'react'
import NavLink from './NavLink'
import Profile from './Profile';

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(()=>{
    const handleClickOutside = (e:MouseEvent) => {
      const target = e.target as HTMLElement;
      if(
        !target.closest(".mobile-menu-container") &&
        !target.closest(".hamburger-button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    if(isMobileMenuOpen){
      document.addEventListener('click',handleClickOutside);
      document.body.classList.add("overflow-hidden");
    }else{
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener('click',handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    }

  },[isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false); // auto-close menu when switching to desktop
      }
    };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
  }, []);

  return (
    <>
    <div className="hidden lg:block md:space-x-5 space-x-0 py-2">   
          <NavLink label='Home' href='/' />
          <NavLink label='Job Posts' href='/jobs' />
          <NavLink label='Explore Companies' href='/companies' />                   
          {/* <span className='border border-gray-400 h-6 mt-1 -ml-6 mr-2'></span> */}
          <NavLink label='Employer Site' href='' />
          <button className='cursor-pointer py-2 -mt-2 px-6 rounded-lg border border-gray-500 text-white hover:bg-pink-700'>Login</button>
          
          
    </div>

     {/* hamburger button */}
        <button
            className=" absolute right-10 lg:hidden cursor-pointer hamburger-button z-50"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // X icon
              <svg
                className="w-6 h-6 text-gray-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}

        </button>

        {isMobileMenuOpen &&
        <div className="block lg:hidden">
            <div
              className={`mobile-menu-container fixed inset-0 bg-black/90 backdrop-blur-sm z-40 overflow-x-hidden overflow-y-auto pt-24 px-6 transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex flex-col space-y-6">
                <NavLink label="Home" href="/" onClick={() => setMobileMenuOpen(false)} />
                <NavLink label="Job Posts" href="/jobs" onClick={() => setMobileMenuOpen(false)} />
                <NavLink label="Explore Companies" href="/companies" onClick={() => setMobileMenuOpen(false)} />
                <NavLink label="Employer Site" href="/projects" onClick={() => setMobileMenuOpen(false)} />
                
              </div>
            </div>
        </div>
        }
  </>
  )
}

export default Navigation