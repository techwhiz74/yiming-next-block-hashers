import React from 'react'

const Small = () => {
  return (
    <div className='m-5  '>
        
        <div className="flex items-center justify-between p-5 bg-white rounded shadow">
              <div>
                <div className="text-sm text-gray-400 ">Check in Today</div>
                <div className="flex items-center pt-1">
                  <div className="text-3xl font-medium text-gray-600 ">34</div>
                </div>
              </div>
              <div className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd" />
                </svg>
              </div>
            </div>
        
    </div>
  )
}

export default Small