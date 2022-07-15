import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';



const Login = ({user}) => {

 

  //userouter use
  const router = useRouter()


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')

  const fillForm = (e) => {

    if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    else if (e.target.name == "password") {
      setPassword(e.target.value)
    }
  }
  const submitSingup = async (e) => {
    // console.log("hi guys");
    e.preventDefault()

    const data = {
      email: email, password: password,
    }
    let url = (window.location.href).split('/login')
    // console.log(url);

    // fetch("")
    let response = await fetch(`${url[0]}/api/login`, {
    // let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    // console.log(response);
    let res = await response.json()
    if(res){
      user.value = false;
    }
    // console.log(res);

    setEmail('')
    setPassword('')


    if (res.success) {
      //add a toast
      toast.success('🚀 You are Logged in !', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

      });

localStorage.setItem('token',res.token)


      //set tiem out for router.push
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000);


    }
    else {
      //  console.log(res.success); 
      toast.error(`🚀 invailed credentials`, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }



  }


  return (
    <div >
      <div className=" flex items-center bg-slate-100 justify-center py-12 px-4 sm:px-6 lg:px-8">
        <ToastContainer />
        <div className="max-w-md w-full space-y-8 bg-white p-5 rounded-md shadow-md">
          <div className='text-center'>

            <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

              <Image src="/logo123.png" alt="logo" height={40} width={40} />
              <span className="ml-3 text-xl text-blue-800"><strong>Block-#ERS</strong></span>
            </div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            Or{' '}
            <Link href='/signup'><a className="font-medium text-indigo-600 hover:text-indigo-500 text-center">Sign Up</a></Link>
          </div>
          <form onSubmit={submitSingup} className="mt-8 space-y-6" action="#" method="POST">
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={fillForm}
                  value={password}
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

              <div className="text-sm">
                <Link href='/forgot'><a className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a></Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                </span>
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login