import React from "react";
import Link from 'next/link'
import Image from "next/image";
const Navbar = ({user,logout}) => {
   
  // console.log("user : ",user)
  return (
    <div className="gradient">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <Image src={'/logo123.png'} height={40} width={40} ></Image>
            <span className="ml-3 text-2xl text-white font-bold">BLOCK-#ERS</span>
          </a>
          <nav className=" text-white  md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center  ">
          <Link href={'/'} ><a className="mr-5  hover:text-gray-300">Home</a></Link>
          <Link href={'/about'}><a className="mr-5 hover:text-gray-300">About</a></Link>
          <Link href={'/contact'} ><a className="mr-5 hover:text-gray-300">Contact Us</a></Link>
          {!user.value  && 
          <Link href={'/dashboard'} ><a className="mr-5 hover:text-gray-300">Dashboard</a></Link>}
          {!user.value  && 
          <a  onClick={logout} className="mr-5 hover:text-gray-300">Logout</a>}
          </nav>
          
          {user.value  && 
          <Link href={'/login'}   ><button className="mx-3 px-6  bg-blue-500 inline-flex items-center text-white border-0 py-1 focus:outline-none  rounded-3xl text-lg mt-4 md:mt-0">Login</button></Link>

            }
          <button className=" px-6  bg-green-500 inline-flex items-center text-white border-0 py-1 focus:outline-none  rounded-3xl text-lg mt-4 md:mt-0">Wallet</button>
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
