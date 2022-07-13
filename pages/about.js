import React from 'react'
import Image from 'next/image'    


const about = () => {
    
    return (
        <div className='bg-gray-100 flex '>
            


	
		<div className="container mx-auto ">
			<div className="flex justify-center px-6 my-12 ">
			
				<div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg">
					
					<div
						className="w-full bg-white  hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						
					>
                      <Image src={'/Block_Hashers.png'} width={720} height={720} className="rounded"></Image>

                    </div>
			
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div className="px-8 mb-4 text-center">
							<h3 className="pt-4 mb-2 font-bold text-3xl">About Us</h3>
							<p className="mb-4 text-sm text-gray-700">
								{/* about us write up */}
							</p>
						</div>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4">
								We the Students of kalyani Government Engineering College
								
							</div>
							<div className="mb-6 text-center">
								
							</div>
							<hr className="mb-6 border-t" />
							
						</form>
					</div>
				</div>
			</div>
		</div>




      
            
        </div>
    )
}

export default about
