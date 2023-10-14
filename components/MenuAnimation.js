import React from 'react'
import Link from 'next/link'
import { easeIn, motion } from 'framer-motion'

const menu = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition : {
            delay: 0.5,
            staggerChildren: 0.75,
        },
    },
}

const links = {
    hidden: {
        y: 30,
        transition: {
            duration: 0.5,
        }
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.7,
            delay: 0.75
        }
    },
    exit: {
        y: '30vh',
        transition: {
            duration: 2,
            delay: 0.5,
            easeIn
        }
    },
}

const navlinks = {
    hidden: {
        y: 60,
        transition: {
            duration: 0.5,
        }
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.7,
            delay: 1
        }
    },
    exit: {
        y: '30vh',
        transition: {
            duration: 2,
            delay: 0,
            easeIn
        }
    },
}


const MenuAnimation = ({ onMenuClick }) => {

  return (
    <motion.section 
        className='flex z-20 fixed top-0 right-0 w-screen'
        variants={menu}
        initial='hidden'
        animate='visible'
        key='modal'
        exit={{ transition: { duration: 25 }}}
    >
        <motion.div 
            key='modal' 
            initial={{y: '-100%'}} 
            animate={{ y: 0 }}
            exit={{ y:'-100%', transition: { delay: 1, duration: 0.5 } }} 
            transition={{ ease: [0.12, 0, 0.39, 0], duration: 0.5 }} 
            className='bg-[#FAF8F6] w-1/2 h-[500px] max-sm:h-screen flex justify-center align-middle my-auto'
        >
            <div className='my-auto sm:me-16 max-sm:ps-1 space-y-6'>

                <div className='overflow-hidden'>
                    <motion.h2 
                        variants={links}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        className='tracking-[3px] text-[14px] max-md:text-[12px] font-medium leading-6'>
                            GET IN TOUCH
                    </motion.h2>
                </div>
                <div className='overflow-hidden'>
                    <motion.h2
                        variants={links}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                    >
                    <Link 
                        href='mailto:golaiya123@gmail.com' 
                        className='block overflow-hidden font-semibold text-[28px] max-md:text-[16px] italic text-black leading-6 '>
                            golaiya123@gmail.com
                    </Link>
                    </motion.h2>
                </div>
                <div className='flex space-x-2 overflow-hidden'>
                    <motion.div  
                        variants={links}
                        initial='hidden'
                        animate='visible'
                        exit='exit' >
                    <Link href='/' className='text-[#bbb] leading-6 text-[14px] max-md:text-[12px] tracking-[2px] me-4 '>INSTAGRAM</Link>
                    <Link href='/' className='text-[#bbb] leading-6 text-[14px] max-md:text-[12px] tracking-[2px] me-4 '>LINKEDIN</Link>
                    </motion.div>
                </div>
            </div>

        </motion.div>

        <motion.div                 
            key='modal' 
            initial={{y: '-100%'}} 
            animate={{ y: 0 }}
            exit={{y: '-100%'}} 
            transition={{ delay: 0.5, ease: [0.12, 0, 0.39, 0], duration: 0.5 }} 
            className='bg-[#FAF8F6] w-1/2 h-[500px] max-sm:h-screen flex items-start justify-center space-y-4 flex-col overflow-hidden '>
                <div className='overflow-hidden'>
               <motion.div  
                        variants={navlinks}
                        initial='hidden'
                        animate='visible'
                        exit='exit' 
                        className='align-middle'>
                       <button onClick={() => onMenuClick(0)} className='text-[35px] max-md:text-[24px] font-medium text-black hover:text-[#9b876f]'>Home</button> 
                </motion.div>
                </div>

                <div className='overflow-hidden'>
                <motion.div  
                        variants={navlinks}
                        initial='hidden'
                        animate='visible'
                        exit='exit' 
                        className='align-middle'
                        >
                       <button onClick={() => onMenuClick(400)} className='text-[35px] max-md:text-[24px] font-medium text-black hover:text-[#9b876f]'>About</button> 
                </motion.div>
                </div>

                <div className='overflow-hidden'>
                <motion.div  
                        variants={navlinks}
                        initial='hidden'
                        animate='visible'
                        exit='exit' 
                        className='align-middle'>
                       <button onClick={() => onMenuClick(1000)} className='text-[35px] max-md:text-[24px] font-medium text-black hover:text-[#9b876f]'>Works</button> 
                </motion.div>
                </div>

                <div className='overflow-hidden'>
                <motion.div  
                        variants={navlinks}
                        initial='hidden'
                        animate='visible'
                        exit='exit' 
                        className='align-middle'>
                       <button onClick={() => onMenuClick(2300)} className='text-[35px] max-md:text-[24px] font-medium text-black hover:text-[#9b876f]'>Testimonials</button> 
                </motion.div>
                </div>

                <div className='overflow-hidden'>
                <motion.div  
                        variants={navlinks}
                        initial='hidden'
                        animate='visible'
                        exit='exit' 
                        className='align-middle'>
                       <button onClick={() => onMenuClick(3000)} className='text-[35px] max-md:text-[24px] font-medium text-black hover:text-[#9b876f]'>Contact</button> 
                </motion.div>
                </div>

                
        </motion.div>
    </motion.section>
  )
}

export default MenuAnimation