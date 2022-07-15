import React from 'react'
import Image from 'next/Image'
const Body = () => {
    return (
        <div className="min-h-screen p-10 pt-15 h-100 BBackground">
            <section className="text-blueGray-700 bg-white mt-20 shadow-lg rounded-md">
                <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
                    <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                        <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Your tagline </h2>
                        <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Equity Crowdfunding</h1>
                        <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Through online equity crowdfunding, private enterprises can solicit funds from investors in exchange for equity (shares) in the business.
                        </p>
                        <div className="flex flex-col justify-center lg:flex-row">
                            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Invest Now </button>
                            <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> Invest on most populer contracts. <br className="hidden lg:block" />
                                <a href="#" className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </a>
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
                    <Image src={'/Body/body2.jpg'} height={600} width={720} className="object-cover object-center rounded-lg " alt={'Image'}></Image>
                    </div>
                </div>
            </section>

            <section className="text-blueGray-700 bg-white mt-20 shadow-lg rounded-md">
                <div className="container flex flex-col items-center px-5 py-16 mx-auto  md:flex-row lg:px-28">
                    <div className="flex flex-col items-start w-full pt-0 mb-16 text-left  lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
                        <h1 className="mb-8 text-2xl font-black tracking-tighter text-black  md:text-5xl title-font">Reward Crowdfunding
                        </h1>
                        <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600"> Here, ideas and projects are offered to the public for financing. In exchange, those who support the idea (through pledges) will obtain prizes from project owners.</p>
                        <div className="flex flex-col w-full gap-2 md:justify-start md:flex-row">
                            
                            <button className="flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg  hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Invest Now </button>
                        </div>
                        {/* <p className="w-full mt-2 mb-8 text-sm text-left text-blueGray-600"> I got 99 problems and blocks ain't one. </p> */}
                    </div>
                    <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                        <Image src={'/Body/body1.jpg'} height={600} width={720} className="object-cover object-center rounded-lg " alt={'Image'}></Image>
                    </div>
                </div>
            </section>


            <section className=''>
                <div className='flex items-center justify-center min-h-screen mt-14 md:-mt-10'>
                    <div className="bg-slate-800 shadow-lg rounded-md">
                        <div className="bg-slate-700 -xl m-6 md:m-16 border border-indigo-500/50 shadow-xl shadow-indigo-500/50">
                            <div className="flex flex-col p-10 px-10 md:px-16 space-y-6 items-center text-center">
                                <h1 className="font-light md:text-6xl text-2xl   text-white tracking-wide ">Hire the <span id="spin" className="text-transparent font-normal bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 "></span> <br /> expert you need</h1>
                                <p className="text-gray-400 md:text-2xl text-xl px-18"> Create a job to connect with freelancers and agencies who can increase your sales, make your website stand out, and more</p>
                                <button className="rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white text-lg py-4 px-6">Find Expert</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="text-blueGray-700 bg-white mt-20 shadow-lg rounded-md">
                <div className="container flex flex-col items-center px-5 py-16 mx-auto  md:flex-row lg:px-28">
                    <div className="flex flex-col items-start w-full pt-0 mb-16 text-left  lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
                        <h1 className="mb-8 text-2xl font-black tracking-tighter text-black  md:text-5xl title-font">Reward Crowdfunding
                        </h1>
                        <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600"> Here, ideas and projects are offered to the public for financing. In exchange, those who support the idea (through pledges) will obtain prizes from project owners.</p>
                        <div className="flex flex-col w-full gap-2 md:justify-start md:flex-row">
                            
                            <button className="flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg  hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Invest Now </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                        <Image src={'/Body/body1.jpg'} height={600} width={720} className="object-cover object-center rounded-lg " alt={'Image'}></Image>
                    </div>
                </div>
            </section>


            <section className="text-blueGray-700 bg-white mt-20 shadow-lg rounded-md">
                <div className="container flex flex-col items-center px-5 py-16 mx-auto  md:flex-row lg:px-28">
                    <div className="flex flex-col items-start w-full pt-0 mb-16 text-left  lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
                        <h1 className="mb-8 text-2xl font-black tracking-tighter text-black  md:text-5xl title-font">Reward Crowdfunding
                        </h1>
                        <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600"> Here, ideas and projects are offered to the public for financing. In exchange, those who support the idea (through pledges) will obtain prizes from project owners.</p>
                        <div className="flex flex-col w-full gap-2 md:justify-start md:flex-row">
                            
                            <button className="flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg  hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Invest Now </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                        <Image src={'/Body/body1.jpg'} height={600} width={720} className="object-cover object-center rounded-lg " alt={'Image'}></Image>
                    </div>
                </div>
            </section> */}



        </div>
    )
}

export default Body