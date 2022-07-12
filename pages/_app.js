import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {Footer} from '../components/Footer'
import NextNProgress from "nextjs-progressbar";

import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {

    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })

  }, [router.query])


  return <>
<NextNProgress
 color='#f11946'
 // color='#1f6feb'
 progress={progress}
 waitingTime={500}
 onLoaderFinished={() => setProgress(0)}
/>
 <Navbar/>
  <Component {...pageProps} />


 <Footer/>
 </>
}

export default MyApp
