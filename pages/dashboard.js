import React from 'react'
import Tab from '../components/Tab'
import Small from '../components/Cards/Small'
import Chartbar from '../components/Cards/Chartbar'


const dashboard = () => {
  return (
    // dashboardbackground
    <div className=' flex bg-slate-100'>
        <Tab/>
        <div className='flex overflow-y-auto' >
          <Small/>
          <Small/>
          <Small/>
          <Small/>
        </div>

        {/* create a chart */}
        <div  >
            <Chartbar />
        </div>
    </div>
  )
}

export default dashboard