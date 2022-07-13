import React,{useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Forgot = () => {
  const router = useRouter();

useEffect(() => {
  if(localStorage.getItem('token')){
    router.push('/')
  }
}, [])




  return (
    <div>
    
      <div className=" flex items-center bg-slate-100  justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-5 rounded-md shadow-md">
          <div className='text-center'>

            <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

              <Image src="/logo123.png" alt="logo" height={30} width={30} />
              <span className="ml-3 text-xl text-blue-800"><strong>Block-#ERS</strong></span>
            </div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
            Or{' '}
            <Link href='/login'><a className="font-medium text-indigo-600 hover:text-indigo-500 text-center">Login</a></Link>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  )
}

export default Forgot