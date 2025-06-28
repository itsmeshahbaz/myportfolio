'use client'
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div>
      {/* Header */}
      <header className="fixed top-[10px] left-[10px] right-[10px] z-50 mt-[5px] rounded-3xl backdrop-blur-md bg-black/10 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
          <h1 className='text-3xl font-bold text-cyan-800 ml-10 cursor-pointer'>M.Shahbaz</h1>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
            <Link href="/services" className="mr-5 hover:text-gray-900">Services</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Contact
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
