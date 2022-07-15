import React from 'react'
import Tab from '../components/Tab'
import Small from '../components/Cards/Small'
import Chartbar from '../components/Cards/Chartbar'
import Details from '../components/Cards/Details'
import Footdetails from '../components/Cards/Footdetails'


const dashboard = () => {
  return (
    // dashboardbackground
    <div className='  bg-slate-100'>
      <div className='flex '>
        <Tab />

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