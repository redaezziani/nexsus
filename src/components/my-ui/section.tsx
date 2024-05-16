'use client';
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const Section = () => {
    const ref1 = React.useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = React.useState(false)

    const handleMouseEnter = () => {
        setIsHovered(!isHovered)
    }
    return (
        <section
            className='max-w-6xl justify-start md:text-start text-center items-center md:items-start z-10 mt-10 flex-col w-full flex gap-4 px-4 py-2 '
        >
            <h2
                className=' text-xl text-primary font-semibold'
            >
                Built for growth
            </h2>
            <h1
                className=' text-3xl font-semibold text-slate-700 mt-4 w-[90%] md:w-[45%]'
            >
                Take your web app to the next level
            </h1>
            <p
                className='  text-slate-500 w-full md:w-[40%]'
            >
                start your day by transforming your web app to a desktop app in minutes.
                with nexsus, you can convert your web app to a desktop app in minutes.
            </p>
            <div
                className="w-full grid mt-6 p-2 grid-cols-1 gap-3 md:grid-cols-3">
                <div className="w-full relative">
                    <svg
                        className=' hidden md:block absolute text-4xl -right-2 top-5 text-primary rotate-90'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25} fill={"none"}>
                        <path d="M4 21V18.9231C4 16.9221 4 15.9217 4.14533 15.0846C4.94529 10.4765 8.90656 6.86243 13.9574 6.13259C14.8749 6 16.8068 6 19 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 3C17.6068 3.58984 20 5.15973 20 6C20 6.84027 17.6068 8.41016 17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <motion.div
                        ref={ref1}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseEnter}
                        className=" w-full md:w-[90%] bg-slate-50 cursor-pointer col-span-1 overflow-hidden border border-border relative flex justify-center items-start flex-col gap-2   rounded-md p-2 aspect-square"> 
                    </motion.div>
                </div>
                <div className="w-full relative">
                    <svg
                        className=' hidden md:block absolute text-4xl -right-2 top-32 text-primary rotate-90'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25} fill={"none"}>
                        <path d="M4 21V18.9231C4 16.9221 4 15.9217 4.14533 15.0846C4.94529 10.4765 8.90656 6.86243 13.9574 6.13259C14.8749 6 16.8068 6 19 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 3C17.6068 3.58984 20 5.15973 20 6C20 6.84027 17.6068 8.41016 17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className=" w-full md:w-[90%] col-span-1 border border-border md:mt-24 bg-slate-50 rounded-md p-2 aspect-square" />
                </div>
                <div className=" w-full md:w-[90%] col-span-1 border border-border md:mt-[12rem] bg-slate-50 rounded-md p-2 aspect-square" />

            </div>
        </section>
    )
}

export default Section