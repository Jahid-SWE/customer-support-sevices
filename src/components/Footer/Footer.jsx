import React from 'react'
import { FaFacebook,FaLinkedinIn,FaEnvelope  } from 'react-icons/fa6'; 

const Footer = () => {
  return (
    <div className='bg-[#f5f5f5]'>
        <div className='container mx-auto bg-[#000000] text-white   grid grid-cols-1 sm:grid-cols-6 py-20 gap-5' >
            <div className='pl-5 grid grid-cols-1 sm:col-span-2'>
                <h3 className='py-3 text-2xl '>CS — Ticket System</h3>
                <p className='text-justify '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='pl-5 sm:pl-15'>
                <h3 className=' py-3 text-2xl'>Company </h3>
                <ul >
                    <li className=' py-3'>About Us</li>
                    <li className=' py-3'>Our Mission</li>
                    <li className=' py-3'>Contact Saled</li>
                </ul>
            </div>
            <div className=' pl-5'>
                <h3 className=' py-3 text-2xl'>Services </h3>
                <ul>
                    <li className=' py-3'>Products & Services</li>
                    <li className=' py-3'>Customer Stories </li>
                    <li className=' py-3'>Download Apps </li>
                </ul>
            </div>
            <div className=' pl-5'>
                <h3 className=' py-3 text-2xl'>Information </h3>
                <ul>
                    <li className=' py-3'>Privacy Policy</li>
                    <li className=' py-3'>Terms & Conditions </li>
                    <li className=' py-3'>Join Us </li>
                </ul>
            </div>
            <div className=' pl-5'>
                <h3 className=' py-3 text-2xl'>Social Links</h3>
                <ul>
                    <li className=' py-3 flex '><FaFacebook size={24} className="text-blue-600 mr-2" />@CS — Ticket System</li>
                    <li className=' py-3 flex'><FaLinkedinIn size={24} className="text-blue-600 mr-2" />@CS — Ticket System</li>
                    <li className=' py-3 flex' ><FaEnvelope   size={24} className="text-blue-600 mr-2"/>@CS — Ticket System</li>
                    <li className=' py-3 flex'>support@cst.com</li>
                </ul>
            </div>
        </div>
        <div>
            <h1 className='text-center py-10 border-t-2 bg-[#000000] text-white container mx-auto'>© 2025 CS — Ticket System. All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Footer