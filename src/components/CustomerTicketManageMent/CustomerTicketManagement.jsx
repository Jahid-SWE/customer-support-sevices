import React, { use } from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import CountBox from '../CountBox/CountBox'

const CustomerTicketManagement = ({fetchPromice}) => {
    // console.log(fetchPromice)
    const   initialData= use(fetchPromice);
    console.log(initialData);
   
  return (
    <div>
      <CountBox></CountBox>

          {/* card section */}
           <div className="bg-[#f5f5f5]">
              <div className="container mx-auto py-5">
                <div className="grid grid-cols-12 gap-4">
                            
                        {/* Start Customer Section*/}

                    <div className="col-span-12 md:col-span-9">
                            <h2 className="text-xl font-bold mb-4">Customer</h2>
                            {/* start Card start */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-10">
                              {initialData.map((issue) => (
                                  <div key={issue.id} className="bg-white text-black p-4 rounded">
                                    
                              
                                    <div className="flex justify-between items-center mb-2">
                                      <h1 className="text-xl">{issue.title}</h1>
                                      <button className="bg-[#b9f8cf] flex items-center justify-center rounded-2xl gap-2 px-4 py-2">
                                        <span className="w-4 h-4 bg-[#02a53b]  rounded-full"></span>Open
                                      </button>
                                    </div>

                                    <div className="my-5 text-gray-700">
                                      <p>{issue.description}</p>
                                    </div>

                                    <div className="flex justify-between text-sm text-gray-500">
                                      <div>
                                        <h1>#{issue.id} <span className="ml-2">{issue.status}</span></h1>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <h1>{issue.customer}</h1>
                                        <div className="items-center flex  gap-1 ml-2">
                                          <FaRegCalendarAlt size={18} className="text-gray-400" />
                                          <span>{issue.createdAt}</span>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                ))}
                          </div>
                    </div>

                            {/* End Customer */}

                            {/*  start Task Section  */}
                        
                    <div className="col-span-12 md:col-span-3">
                        <h2 className="text-xl font-bold mb-4">Task</h2>
                        <div className="flex flex-col gap-4 ">
                            <div className="bg-[#ffffff] p-4 py-5 rounded">
                                <h1 className='pb-3'>title</h1>
                                <button className='bg-[#02a53b] w-full py-2 rounded-sm'> Complete</button>
                              </div>
                        </div>
                          <div className="flex flex-col gap-4 mt-5">
                            <div className="bg-[#ffffff] p-4 py-5 rounded">
                                <h1 className='pb-3'>title</h1>
                              <button className='bg-[#02a53b] w-full py-2 rounded-sm'> Complete</button>
                            </div>
                        </div>
                  </div>
                </div>
              </div>
          </div>

  

  </div>
  )
}

export default CustomerTicketManagement