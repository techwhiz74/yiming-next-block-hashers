import Head from 'next/head'
import Image from 'next/image'
import Body from '../components/Body'





export default function Home() {
  return (


    <>
      <div className='backGround '>



        {/* BODY */}
        <section className="text-gray-600 body-font curveImg ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:ml-40">
              <p className='font-semibold text-green-500'>FAST. SECURE.</p>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Decentralized Options

                <br className="hidden lg:inline-block" />Crowdfunding Platform
              </h1>
              <p className="mb-8 leading-relaxed text-gray-100">The discovery of women-led businesses and opportunities have always been a challenge especially when it comes funding and matching with the right investors.</p>
              <div className="">
                <button className=" text-2xl font-bold inline-flex text-white rounded-3xl bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600  ">Start Now</button>

              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-img">
              <Image className="object-cover object-center rounded" alt="hero" src={'/Computer.png'} height={550} width={760}></Image>
            </div>
          </div>
        </section>

      </div>
      <Body />
    </>

  )
}
