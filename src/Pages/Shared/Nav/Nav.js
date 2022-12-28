import React, { useState } from 'react'
// import Button from './Button';
import { HiMenu } from "react-icons/hi";


const Nav = () => {
    let [open, setOpen] = useState(false);
    let Links = [
        { name: "ADD TASK", link: "/addtask" },
        { name: "MY TASK", link: "/mytask" },
        { name: "COMPLETED TASK", link: "/completedtask" },
        { name: "CONTACT", link: "/contact" },
    ];
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                   
                    Daily Task
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <HiMenu name={open ? 'close' : 'menu'}></HiMenu>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }

                  <li>
                        <div className="mr-14 sm:ml-0">
                           <input type="text" id="success" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 ml-2
                             placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 
                             block w-full p-2.5 dark:bg-gray-700
                              dark:border-green-500" placeholder="Input a task" />
                                
                        </div>
                  </li>
                    
                </ul>
              
            </div>
        </div>
    )
}

export default Nav