import React from 'react'
import Image from 'next/image'
function Services() {

    // create a array 
    const Details = [
        { title: "Services", img: "/Work2/1.jpg", watch : 1.3, message: 5, content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat." },
        { title: "Affordable", img: "/Work2/2.jpg", watch : 1.5, message: 2, content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat." },
        { title: "Questions", img: "/Work2/3.jpg", watch : 1.6, message: 8, content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat." },
    ]




    return (
        <section className="text-blueGray-700 bg-white mt-20">
            <div className="container flex flex-col items-center px-5 py-16 mx-auto  md:flex-row lg:px-28">
                <div>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">


                                {Details.map((detail, index) => (
                                    <div key={index} className="p-4 md:w-1/3">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <Image className="lg:h-48 md:h-96 w-full object-cover object-center" src={`${detail.img}`} alt="blog" height={400} width={400} ></Image>
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{`${detail.title}`}</h1>
                                            <p className="leading-relaxed mb-3">{detail.content}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>{detail.watch}K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>{detail.message}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                ))}
                              
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Services 