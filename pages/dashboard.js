import React from 'react'
import Tab from '../components/Cards/Tab'
import Small from '../components/Cards/Small'
import Chartbar from '../components/Cards/Chartbar'
import Details from '../components/Cards/Details'
import Footdetails from '../components/Cards/Footdetails'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const dashboard = ({logout}) => {

  const router = useRouter();

  useEffect(() => {
    
   if(localStorage.getItem('token')==null){
    router.push('/login')
   }
   


  }, [])
  



  return (
    // dashboardbackground
    <div className='  bg-slate-100'>
      <div className='flex '>
        <Tab logout={logout}/>

        <div className='flex-wrap justify-center overflow-y-auto overflow-x-auto m-auto scrollbar-hide' >
          <div className='h-screen  over-x-auto scrollbar-hide'>
            <div >
              <div className='flex ' >
                <Small />
                <Small />
                <Small />
                <Small />
              </div>
              <div className='flex pt-8' >
                <Chartbar />
                <Details />
              </div>
            </div>
            <div className='pt-10'>
              <Footdetails />
            </div>
          </div>

        </div>

      </div>


    </div>

  )
}

export default dashboard