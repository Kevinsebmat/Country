import { useState } from 'react'
import Image from 'next/image'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
              <div className="h-10 ml-left"> 
                <img className= "rounded-full border border-gray-100 shadow-sm h-full" src="/images/globe.jpg" />
            </div>
            <div className="flex flex-col ml-4">
            
                <a className="text-xl font-normal my-4" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    HOME
                </a> 
                <a className="text-xl font-normal my-4" href="/layout2" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    LAYOUT 2
                </a>
                 <a className="text-xl font-normal my-4" href="/layout3" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    LAYOUT 2
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md text-green-500 sm:text-red-500 lg:text-blue-500 bg-white px-4 py-4 h-12 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="h-10 ml-left"> 
                <img className= "rounded-full border border-gray-100 shadow-sm h-full" src="/images/globe.jpg" />
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

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