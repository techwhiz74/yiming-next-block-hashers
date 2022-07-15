import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import NextNProgress from "nextjs-progressbar";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {


  const [key, setKey] = useState()
  const [user, setUser] = useState({value: false})
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {

    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })

  }, [router.query])


  // logout 
  const logout = () => {

    localStorage.removeItem("token")
    setKey(Math.random())
    setUser({ value: true })
    router.push('/')
  }

  return <>
    <NextNProgress
      //  color='#ba03fc'
      color='#1f6feb'
      progress={progress}
      waitingTime={500}
      onLoaderFinished={() => setProgress(0)}
    />
    <Navbar user={user} logout={logout}/>
    <Component user={user} logout={logout} key={key} {...pageProps}  />


    <Footer />
  </>
}

export default MyApp
