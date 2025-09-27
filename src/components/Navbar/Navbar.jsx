import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-white p-5 shadow-md'>
            <div className='container  mx-auto flex flex-col sm:flex-row justify-between items-center  '>
                <div className='mb-3 sm:mb-0'>
                <h1 className='font-bold text-xl '>CS — Ticket System</h1>
                </div>

                <div className='items-center flex flex-col sm:flex-row '>
                <ul className='flex flex-col sm:flex-row  text-gray-600 items-center   '>
                    <li><a href='#' className='pr-5'>Home</a></li>
                    <li><a href='#' className='pr-5'>FAQ</a></li>
                    <li><a href='#' className='pr-5'>Changelog</a></li>
                    <li><a href='#' className='pr-5'>Blog</a></li>
                    <li><a href='#' className='pr-5'>Download</a></li>
                    <li><a href='#' className='pr-5'>Contact</a></li>
                </ul>

                <button className='mt-4 rounded-xl bg-gradient-to-r from-[#632ee3] to-[#9f62f2] px-6 py-2 text-white font-bold transition-all hover:scale-105 sm:ml-6 sm:mt-0'>
                    <span className='mr-1'>+</span> New Ticket
                </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar