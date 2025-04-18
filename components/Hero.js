'use client'
import Image from "next/image"
import Link from "next/link"

import { AnimatedText } from "./AnimatedText"
import { easeIn, easeOut, motion } from "framer-motion"

const Hero = () => {
  const onButtonClick = (top) => {
    typeof window !== 'undefined' &&
    setTimeout(() => {
      window.scrollTo({
        top,
        behavior: "smooth",
      })
    }, 500)   
  }

  return (
    <section className='pt-8 px-2 w-screen'>
      <div className='lg:flex hidden px-10 justify-between'>
        <div className="my-auto pb-8 w-1/2">
          {/* <h1> <AnimatedText text= {['Hi, my', 'name is Gideon']} className='text-[60px] font-normal text-white' delay= '0' /> </h1>
          <p className='text-[16px] py-2 hidden font-normal text-gray-400 leading-6'>I am an <span className="font-semibold"> independent creative full-stack website developer </span> <br /> from Lagos, Nigeria.</p>

          <p><AnimatedText 
            text={[
              'I am an  independent creative full-stack website developer',
              'from Lagos, Nigeria.'
            ]}
            className='text-[16px] py-2 font-normal text-gray-400 leading-6'
          /></p> */}

          <h1><AnimatedText text={[`I'm Gideon Olaiya —`, 'Full stack website developer & designer.']} className='text-[42px] font-medium text-white'/></h1>

          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{delay: 1.75, duration: 0.5, ease: easeIn}}
            className="w-40"
          >
            <button onClick={() => onButtonClick(950)} className="text-[16px] group font-medium text-gray-400 leading-5 mt-10 flex flex-col">
              VIEW PROJECTS
              <hr className="text-gray-400 w-[80px] group-hover:w-[140px] transit h-px mt-1.5"/>
            </button>
          </motion.div>
        </div>

        <div className="w-1/2">
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.5, duration: 0.5, ease: easeIn}}>
            <Image src='/Hero.jpeg' width={680} height={630} alt='hero image' priority/>
          </motion.div>
          <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{delay: 3, duration: 0.5, staggerChildren: 0.5, ease: easeIn}}
            className='flex flex-row space-x-2 mt-12 justify-end me-12 overflow-hidden'>
              <motion.li initial={{ y: '30vh' }} animate={{ y: 0 }} transition={{ delay: 4, ease: easeOut, duration: 1.5}}><Link href='https://www.instagram.com/gideondev_/' className="text-[16px] font-medium my-auto text-white">📸 IN</Link></motion.li>
              <motion.li initial={{ y: '30vh' }} animate={{ y: 0 }} transition={{ delay: 4.25, ease: easeOut, duration: 1.5}}><Link href='https://x.com/X__developer?t=akj83scMEsH8VeRDmK0jug&s=09' className="text-[16px] font-medium my-auto text-white">𝕏 TW</Link></motion.li>
              <motion.li initial={{ y: '30vh' }} animate={{ y: 0 }} transition={{ delay: 4.5, ease: easeOut, duration: 1.5}}><Link href='https://www.linkedin.com/in/gideon-olaiya-852057209/' className="text-[16px] font-medium my-auto text-white">💼 LD</Link></motion.li>
              <motion.li initial={{ y: '30vh' }} animate={{ y: 0 }} transition={{ delay: 4.75, ease: easeOut, duration: 1.5}}><button onClick='tel:+2349065916691' className="text-[16px] font-medium my-auto text-white">📞 PH</button></motion.li>
          </motion.div>
        </div>
      </div>


      <div className=" max-lg:flex flex-col justify-center text-center items-center lg:hidden">

        <h1> 
          <AnimatedText text={[
              `I'm Gideon — Full stack`,
              'website developer'
            ]} 
          className='text-[30px] sm:text-[45px] font-medium text-white' /> 
        </h1>
        {/* <p><AnimatedText 
            text={[
              'I am an  independent creative full-stack website developer',
              'from Lagos, Nigeria.'
            ]}
            className='text-[16px] text-center align-center justify-center py-2 font-normal text-gray-400 leading-6 flex flex-wrap'
          /></p> */}

        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.5, duration: 0.5, ease: easeIn}} className="justify-center mt-8 items-center pe-4">
          <Image src='/Hero.jpeg' width={1000} height={600} alt='hero image' className="w-[800px] overflow-hidden" priority/>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero