'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import MenuAnimation from './MenuAnimation'
import { AnimatePresence, easeIn, motion } from 'framer-motion'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const onMenuClick = (top) => {
      setToggle(false)
      setTimeout(() => {
        window.scrollTo({
          top,
          behavior: "smooth",
        })
      },1500)   
    }

  return (
    <nav>
      <AnimatePresence>
        {toggle && <MenuAnimation onMenuClick={onMenuClick}/>}
      </AnimatePresence>
      <div className='flex justify-between lg:p-5 p-2'>
          <Link href='/' className='inline-flex'>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              transition={{delay: 2, duration: 0.5, ease: easeIn}}
              className='flex'
            >
              <Image src='/portfolio logo.png' width={70} height={50} alt='website logo' className='object-contain'/>
              <p className='text-[12px] font-medium text-gray-400 my-auto -ms-2'>Gideon Olaiya</p>
            </motion.div>
          </Link>
       
          <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              transition={{delay: 3, duration: 0.5, ease: easeIn}}
              className='z-50 my-auto pe-5'
            >
          <button onClick={() => setToggle(prev => !prev)} className='bg-transparent justify-center items-center flex flex-col z-50'>
              <div className={`${toggle ? 'bar-1 bg-black' : 'bg-white'} w-5 h-0.5 my-1 transition duration-300 rounded block cursor-pointer`}></div>
              <div className={`${toggle ? 'bar-2 bg-black' : 'bg-white'} w-[30px] h-0.5 my-1 transition duration-300 rounded block cursor-pointer`}></div>
              <div className={`${toggle ? 'bar-3 bg-black' : 'bg-white'} w-5 h-0.5 my-1 transition duration-300 rounded block cursor-pointer`}></div>
          </button>
          </motion.div>
      </div>
    </nav>
  )
}

export default Navbar