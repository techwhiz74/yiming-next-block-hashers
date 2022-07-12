import React from 'react'
import Image from 'next/image'

const contact = () => {
    return (
        <div>
            <section className="antialiased max-w-6xl mx-auto my-12 bg-gray-300 px-8">
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

                    <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16 ">
                        <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
                            <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">How can i help you ?</div>






                            <div className="max-w-2xl mx-auto">

                                <div id="default-carousel" className="relative " data-carousel="slide" >

                                    <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                            <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                                            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>

                                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>

                                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                                        </div>
                                    </div>

                                    <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                    </div>

                                    <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                            <span className="hidden">Previous</span>
                                        </span>
                                    </button>
                                    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                                        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                            <span className="hidden">Next</span>
                                        </span>
                                    </button>
                                </div>


                                <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                            </div>










                        </div>
                    </div>
                </div>
            </section>


            <section className=" relative block md:flex  items-center    sm:flex-shrink  justify-center lg:h-screen  bg-gradient-to-br from-indigo-500 to-indigo-800">

                {/* ---Ayandip Garai--- */}
                <div className='py-5 m-auto '>
                    <div className="bg-white font-semibold m-auto  text-center rounded-3xl border shadow-lg p-10 max-w-xs ">
                        <Image className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="/Work/ayandip.jpg" alt="product designer" height={200} width={200} />
                        <h1 className="text-lg text-gray-700"> Ayandip Garai </h1>
                        <h3 className="text-sm text-gray-400 "> Creative Director </h3>
                        <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button>
                    </div>
                </div>
                {/* ---Partha Singha Roy--- */}
                <div className='py-5 m-auto '>
                    <div className="bg-white font-semibold m-auto text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                        <Image className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="/Work/partha.jpg" alt="product designer" height={200} width={200} />
                        <h1 className="text-lg text-gray-700"> Partha Singha Roy </h1>
                        <h3 className="text-sm text-gray-400 "> Creative Director </h3>
                        <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button>
                    </div>
                </div>

                {/* ---Sunirban Ranjit--- */}
                <div className='py-5 m-auto '>
                    <div className="bg-white font-semibold m-auto text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                        <Image className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="/Work/sunirban.jpg" alt="product designer" height={200} width={200} />
                        <h1 className="text-lg text-gray-700"> Sunirban Ranjit </h1>
                        <h3 className="text-sm text-gray-400 "> Creative Director </h3>
                        <p className="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default contact