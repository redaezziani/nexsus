'use client';
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const Badge = () => {
    const ref = React.useRef(null)
    const [isHovered, setIsHovered] = React.useState(false)

    const handelIsHovered = () => {
        setIsHovered(!isHovered)
    }
    return (
        <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.25}}
            ref={ref}
            onMouseEnter={handelIsHovered}
            onMouseLeave={handelIsHovered}
            className=" px-4 relative flex justify-center cursor-pointer items-center gap-2 border border-blue-300/30 rounded-full py-0.5  bg-amber-50/25">
            <div className="size-3 rounded-full animate-pulse border bg-amber-500" />
            <motion.p
                className=" text-amber-900 font-semibold text-sm"
            >
                nexsus is live try it out
            </motion.p>
            <motion.div className=" relative w-5">
                <motion.img
                    animate={{y: isHovered ? -10 : -5, x: isHovered ? 10 : 5}}
                    transition={{ duration: 0.3, type: 'spring', bounce: 0.25}}
                    style={{
                        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
                    }}
                    className=" w-7 h-auto aspect-auto  "
                    src="/hero/party.png" alt="image-hero" />
            </motion.div>
        </motion.span>
    )
}

export default Badge