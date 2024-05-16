import React from 'react'
import { Button } from '../ui/button'
import MobileNavBar from './mobile-nav-bar'

const NavBar = () => {
    return (
        <nav
            className=' fixed top-0 border border-border/80 md:border-none  bg-transparent backdrop-blur-md max-w-6xl justify-between items-center w-full flex gap-4 px-4 py-2  z-50 '
        >
            <div className="flex gap-2 justify-start items-center font-semibold ">
                <img
                    className=" size-11"
                    src="/logo.png"
                    alt="logo"
                />
                <p
                    className=' text-slate-600'
                >
                    Nexsus
                </p>
            </div>
            <div className="flex gap-3 justify-start items-center">
                <div className="md:flex hidden gap-4 bg-white/45 backdrop-blur-sm text-sm rounded-lg border border-border px-4 py-2 justify-end items-center">
                    <a
                        className=' text-slate-600'
                        href="#"
                    >
                        Home
                    </a>
                    <a
                        className=' text-slate-600'
                        href="#"
                    >
                        Features
                    </a>
                    <a
                        className=' text-slate-600'
                        href="#"
                    >
                        Pricing
                    </a>
                    <a
                        className=' text-slate-600'
                        href="#"
                    >
                        Contact
                    </a>
                    <a
                        className=' text-slate-600'
                        href="#"
                    >
                        Blog
                    </a>
                </div>
                <div
                className='md:hidden flex gap-4 justify-end items-center'
                >
                    <MobileNavBar />
                </div>
            </div>
        </nav>
    )
}

export default NavBar