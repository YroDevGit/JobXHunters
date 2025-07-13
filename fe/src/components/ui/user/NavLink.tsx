"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type NavlinkProps = {
    label: string,
    href: string
    onClick?: ()=> void;
};

const NavLink = ({
   label,
   href,
   onClick 
}: NavlinkProps ) => {
    const pathname = usePathname();
    const isActive = pathname === href;
  return (
       <Link href={href} scroll={false}>
      <span
        onClick={onClick}
        className={`cursor-pointer relative font-medium px-2 py-1 group ${
          isActive ? 'active-link text-gray-100' : 'text-gray-400 hover:text-pink-500'
        }`}
      >
        {label}
        <span className="link-underline hidden lg:block "></span>
      </span>
    </Link>
  )
}

export default NavLink