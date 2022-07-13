import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Signup = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  const fillForm = (e) => {
    //for debugging 
    // console.log("hey U");
    // console.log(e.target.value);
    if(e.target.name == "name"){
      setName(e.target.value)
    }
    else if(e.target.name == "email"){
      setEmail(e.target.value)
    }
    else if(e.target.name == "password"){
      setPassword(e.target.value)
    }
    else if(e.target.name == "cpassword"){
      setCpassword(e.target.value)
    }



  }
  const submitSingup = async (e) => {
    // console.log("hi guys");
    e.preventDefault()

    const data = {
      name:name,email:email,password:password,cpassword:cpassword
    }
    let url = (window.location.href).split('/signup')
    // fetch("")
    let response = await fetch(`${url[0]}/api/signup`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    console.log(response);
    let res = await response.json()
    console.log(res);

    setName('')
    setEmail('')
    setPassword('')
    setCpassword('')

    //add a toast
    toast.success('🚀 Your account has been created successfully !', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    
      });
  }

  return (
    <div className='flex flex-col bg-slate-100'>
      <ToastContainer/>
      <div className=" flex items-center  justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-5 rounded-md shadow-md">
          <div className='text-center'>

            <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

              <Image src="/logo123.png" alt="logo" height={30} width={30} />
              <span className="ml-3 text-xl text-blue-800"><strong>Block-#ERS</strong></span>
            </div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Your Account</h2>

          </div>
          <form onSubmit={submitSingup} className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div >
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className=" mt-2 mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                  onChange={fillForm}
                  value={name}
                />
              </div>
              <div className='mt-2 mb-2'>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={fillForm}
                  value={email}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-2 mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={fillForm}
                  value={password}
                />
              </div>
              <div >
                <label htmlFor="cpassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-2 mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  onChange={fillForm}
                  value={cpassword}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>


            </div>

            <div>
              <button 
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                </span>
                Sign in
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a className="no-underline border-b border-grey-dark text-grey-dark" >
              Terms of Service
            </a> and
            <a className="no-underline border-b border-grey-dark text-grey-dark" >
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
      <div className="text-grey-dark mt-5 mb-5 text-center ">
        Already have an account?
        <Link href={'/login'}><a className="no-underline text-indigo-700">
          Log in
        </a></Link>.
      </div>



    </div>
  )
}

export default Signup