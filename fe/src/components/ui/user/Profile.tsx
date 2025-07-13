'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); //prev is the current value of isOpen.
    //!prev flips the boolean value (true to false, or false to true).
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative hidden md:block" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center gap-2 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
          <Image
            src="/images/profile/apoapo.jpg"
            alt="Profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
        <span className="hidden md:inline font-medium">User</span>
        <ChevronIcon isOpen={isOpen} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[100] border border-gray-100">
          <DropdownItem href="/profile">Your Profile</DropdownItem>
          <DropdownItem href="/settings">Settings</DropdownItem>
          <DropdownItem href="/logout">Sign Out</DropdownItem>
        </div>
      )}
    </div>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function DropdownItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
      onClick={(e) => e.preventDefault()} // Replace with router push or similar
    >
      {children}
    </a>
  );
}