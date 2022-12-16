'use client'
import Image from 'next/image'
import React, {useState} from 'react'
import {BsArrowLeftShort, BsSearch, BsChevronDown} from "react-icons/bs"
import Flavicon from "../images/Flavicon.png"
import {RiDashboardFill} from "react-icons/ri"
function Sidebar() {

const [open, setOpen] = useState<boolean>(true)
const [submenuOpen, setSubmenuOpen] = useState<boolean>(false)
const Menus = [
    {title: "Dashboard"},
    {title: "Pages"},
    {title: "Media", spacing: true},
    {
        title: "Projects",
        submenu:true,
        submenuItems: [
            {title: "Submenu 1"},
            {title: "Submenu 2"},
            {title: "Submenu 3"}
        ],
    },
    {title: "Analytics"},
    {title: "Inbox"},
    {title: "Profile", spacing: true},
    {title: "Settings"},
    {title: "Logout"},

]

  return (
    <div className={`bg-[#f9faf5] h-screen p-5 pt-8 ${open ? 'w-72' : "w-20"} duration-300 relative`}>
        <div className='inline-flex'>
           <BsArrowLeftShort onClick={() => setOpen(!open)} 
                className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-black cursor-pointer 
                ${!open && "rotate-180"}`} />
                <Image src={Flavicon} alt='' className={`duration-500 rounded cursor-pointer block float-left h-10 w-10 mr-2
            ${open && "rotate-[360deg]"}`}/>
            <h1 className={`origin-left font-medium duration-300 text-2xl ${!open && "scale-0"}`}>Dashboard</h1>
        </div>
        
            
            <div className={`flex items-center rounded-md bg-slate-100 mt-6  ${!open ? "px-2.5": "px-4"} py-2`}>
                <BsSearch className={`text-black text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
                <input type={"search"} placeholder='Search' className={`text-base bg-transparent w-full 
                focus:outline-none text-black ${!open && "hidden"}`} />
            </div>
            <ul className='pt-2'>
                {Menus.map((menu, index) => (
                    <>
                        <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer
                        p-2 hover:bg-slate-200 rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                            <span className='text-2xl block float-left'>
                                <RiDashboardFill />
                            </span>
                            <span className={`duration-200 text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                            {menu.submenu && open && (
                                <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)} />
                            )}
                        </li>
                        {menu.submenu && submenuOpen && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) => (
                                    <li key={index} className='text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer
                                    p-2 px-5 hover:bg-slate-200 rounded-md'>
                                        {submenuItem.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                ))}
            </ul>
          
        
    </div>
  )
  
}



export default Sidebar



