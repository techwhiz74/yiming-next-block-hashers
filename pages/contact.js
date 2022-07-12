import React from 'react'

const contact = () => {
    return (
        <div>
            <div className="antialiased max-w-6xl mx-auto my-12 bg-gray-300 px-8">


                <div className="relative block md:flex items-center">
                    <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
                        <div className="text-xl font-medium text-green-500 uppercase px-8 py-3 text-center border-b border-gray-200 tracking-wide">Contact Us</div>


                        <div className="block sm:flex md:block lg:flex items-center justify-center ">
                            <div className=" xs:p-0 mx-auto md:w-full md:max-w-md">

                                <div className="  w-full rounded-lg ">
                                    <div className="px-3 py-7">
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
                                        <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                                        <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Question ?</label>
                                        <textarea type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                        <button type="button" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                            <span className="inline-block mr-2">Submit</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="grid grid-cols-3 gap-1">
                                            <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">MailUp</button>
                                            <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
                                            <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Github</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>





                    <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
                        <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                            <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">Enterprise</div>
                            <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
                                Stripe offers everything needed to run an online business at scale. Get in touch for details.
                            </div>
                            <div className="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">Account management</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">Volume discounts</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">Migration assistance</div>
                                <div className="flex items-center justify-center w-1/2 text-center p-4">Dedicated support</div>
                            </div>
                            <a className="flex items-center justify-center bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8" href="#">
                                <span>Contact sales</span>
                                <span className="font-medium text-gray-300 ml-2">➔</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>




            <section className="flex sm:flex-shrink items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">

                {/* ---Ayandip Garai--- */}
                <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                    <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer" />
                    <h1 className="text-lg text-gray-700"> Ayandip Garai </h1>
                    <h3 className="text-sm text-gray-400 "> Creative Director </h3>
                    <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button>
                </div>

                {/* ---Partha Singha Roy--- */}
                <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                    <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer" />
                    <h1 className="text-lg text-gray-700"> Partha Singha Roy </h1>
                    <h3 className="text-sm text-gray-400 "> Creative Director </h3>
                    <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button>
                </div>

                {/* ---Sunirban Ranjit--- */}
                <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                    <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="product designer" />
                    <h1 className="text-lg text-gray-700"> Sunirban Ranjit </h1>
                    <h3 className="text-sm text-gray-400 "> Creative Director </h3>
                    <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button>
                </div>
            </section>
        </div>
    )
}

export default contact