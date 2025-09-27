import React from 'react'

const Banner = () => {
  return (
        <div className='bg-[#f5f5f5]'>
            <div className='container mx-auto text-center grid grid-cols-1 sm:grid-cols-2 gap-5 py-20'>
                <div className='flex justify-between h-[250px]  bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-lg relative'>
                    <div>
                        <img className='h-full w-full' src="/src/assets/vector1.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center min-w-[200px] text-2xl text-white'>
                        <h1  >In-Process <br/><span className='text-5xl  font-bold'>0</span></h1>
                    </div>
                    
                    <div>
                        <img className='h-full w-full' src="/src/assets/vector2.png" alt="" />
                    </div>
                </div>
                <div className='flex justify-between h-[250px] bg-gradient-to-r from-[#54cf68] to-[#00827a] rounded-lg'>
                    <div>
                        <img className='h-full w-full' src="/src/assets/vector1.png" alt="" />
                    </div>
                     <div className='flex justify-center items-center text-2xl min-w-[200px] text-white'>
                        <h1 >Resolved <br/><span className='text-5xl  font-bold'>0</span></h1>
                    </div>
                    <div>
                        <img className='h-full w-full' src="/src/assets/vector2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner