import { useState } from 'react'
import Image from 'next/image'
import Link from "next/link";

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}


export default function Navbar() {
    
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md text-green-500 sm:text-red-500 lg:text-blue-500 bg-white px-4 py-4 h-12 items-center">
            <div className="h-10 ml-left"> 
                <img className= "rounded-full border border-gray-100 shadow-sm h-full" src="/images/globe.jpg" />
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="hidden md:flex absolute left-20"> 
                    <NavLink to="/">
                        HOME
                    </NavLink>
                    <NavLink to="/layout2">
                        LAYOUT 2
                    </NavLink>

                    <NavLink to="/layout3">
                        LAYOUT 3
                    </NavLink>
                 
                </div>
            </div>
        </nav>
    )
}