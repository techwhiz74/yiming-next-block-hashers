import React from "react";
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="gradient">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl text-white font-bold">BLOCK-#ERS</span>
          </a>
          <nav className=" text-white  md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center  ">
            <a className="mr-5  hover:text-gray-300"><Link href={'/'} >Home</Link></a>
            <a className="mr-5 hover:text-gray-300"><Link href={'/about'}>About</Link></a>
            <a className="mr-5 hover:text-gray-300"><Link href={'/contact'} >Contact Us</Link></a>
          </nav>
          <button className="px-6  bg-green-500 inline-flex items-center text-white border-0 py-1 focus:outline-none  rounded-3xl text-lg mt-4 md:mt-0">
            Wallet
            
          </button>
          <svg
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              className="w-5 h-4 ml-1 "
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
