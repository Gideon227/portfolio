'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AiFillLinkedin, AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiOutlineDribbble } from 'react-icons/ai'
import { BsArrowLeft, BsMedium } from 'react-icons/bs'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import { GoMail } from 'react-icons/go'
import { FiExternalLink } from 'react-icons/fi'
import { PiPhoneCallLight } from 'react-icons/pi'
import { RiTwitterXLine, RiTiktokFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
            {/** Laptop and Desktop footer */}
        
        <div className='space-y-3 justify-center text-center items-center mx-20 mt-20 max-lg:hidden'>
            <div>
                <h1 className='text-white text-[60px] font-medium'>Let&apos;s work together</h1>
                <p className='text-[#888888] text-[14px] font-medium whitespace-nowrap'>I would love to hear from you, so please feel free to reach out</p>
            </div>
            <div className='flex justify-center space-x-10 items-center py-4 mx-12'>
                <button className='flex group w-32 relative py-2 px-4 rounded-3xl bg-white hover:bg-[#F5DD37] transition duration-100 overflow-hidden'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 flex space-x-2'>
                        <span className='group-hover:opacity-0 transition duration-200'>
                            <HiOutlineClipboardDocumentList size={17} className='text-black my-auto'/>
                        </span>        
                        <p className='text-black text-[13px] font-bold'>CV/Résumé</p>   
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-black my-auto'/></span> 
                    </div>
                </button>


                <button onClick='mailto:golaiya123@gmail.com' className='flex group w-[200px] relative py-2 px-4 rounded-3xl bg-[#161616] transition duration-100 overflow-hidden'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 flex space-x-3'>
                        <span className='group-hover:opacity-0 transition duration-200'>
                            <GoMail size={17} className='text-white my-auto'/>
                        </span>        
                        <p className='text-gray-100 text-[13px] font-normal my-auto'>golaiya123@gmail.com</p>   
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>
                </button>


                <button onClick='tel:+2349065916691' className='flex group w-[190px] justify-center relative py-2 px-2 rounded-3xl bg-[#161616] transition duration-100 overflow-hidden'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 flex space-x-3'>
                        <span className='group-hover:opacity-0 transition duration-200'>
                            <PiPhoneCallLight size={17} className='text-white my-auto'/>
                        </span>        
                        <p className='text-gray-100 text-[13px] font-normal my-auto'>+234 906 591 6691</p>   
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>
                </button>

            </div>

            <div className='pt-16 flex justify-center space-x-32 items-start'>
                <Link href='https://www.linkedin.com/in/gideon-olaiya-852057209/' className='w-[95px] relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out overflow-hidden transition duration-100'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 gap-x-2 flex items-center '>
                        <span className='group-hover:opacity-0 transition duration-200 ease-in-out'>
                            <AiFillLinkedin size={18} className='text-white my-auto' /> 
                        </span>   
                        LinkedIn
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>  
                </Link>

                <Link href='https://x.com/X__developer?t=akj83scMEsH8VeRDmK0jug&s=09' className='w-[87px] relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out overflow-hidden transition duration-100'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 gap-x-2 flex items-center'>
                        <span className='group-hover:opacity-0 transition duration-200 ease-in-out'>
                            <RiTwitterXLine size={18} className='text-white my-auto' /> 
                        </span>   
                        Twitter
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>  
                </Link>

                <Link href='https://medium.com/@golaiya123' className='w-[87px] relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out overflow-hidden transition duration-100'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 gap-x-2 flex items-center'>
                        <span className='group-hover:opacity-0 transition duration-200 ease-in-out'>
                            <BsMedium size={18} className='text-white my-auto' /> 
                        </span>   
                        Medium
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>  
                </Link>

                <Link href='/' className='w-[93px] relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out overflow-hidden transition duration-100'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 gap-x-2 flex items-center'>
                        <span className='group-hover:opacity-0 transition duration-200 ease-in-out'>
                            <AiFillYoutube size={18} className='text-white my-auto' /> 
                        </span>   
                        Youtube
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>  
                </Link>
            </div>


            <div className='py-4 flex justify-center space-x-32 items-start'>
                <Link href='https://github.com/Gideon227' className='w-[85px] relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out overflow-hidden transition duration-100'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 gap-x-2 flex items-center'>
                        <span className='group-hover:opacity-0 transition duration-200 ease-in-out'>
                            <AiFillGithub size={18} className='text-white my-auto' /> 
                        </span>   
                        Github
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>  
                </Link>


                <Link href='https://www.instagram.com/gideondev_/' className='w-[100px] relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out overflow-hidden transition duration-100'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 gap-x-2 flex items-center'>
                        <span className='group-hover:opacity-0 transition duration-200 ease-in-out'>
                            <AiOutlineInstagram size={18} className='text-white my-auto' /> 
                        </span>   
                        Instagram
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>  
                </Link>


                <Link href='/' className='w-[80px] relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out overflow-hidden transition duration-100'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 gap-x-2 flex items-center'>
                        <span className='group-hover:opacity-0 transition duration-200 ease-in-out'>
                            <RiTiktokFill size={18} className='text-white my-auto' /> 
                        </span>   
                        Tiktok
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>  
                </Link>


                <Link href='/' className='w-[93px] relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out overflow-hidden transition duration-100'>
                    <div className='relative group-hover:-translate-x-4 transition duration-300 gap-x-2 flex items-center'>
                        <span className='group-hover:opacity-0 transition duration-200 ease-in-out'>
                            <AiOutlineDribbble size={18} className='text-white my-auto' /> 
                        </span>   
                        Dribbble
                        <span className='hidden group-hover:block transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>  
                </Link>

            </div>

            <p className='pt-12 text-center text-[#888888] text-[14px] font-medium whitespace-nowrap'>
                © 2023 Olaiya Gideon. All Rights Reserved
            </p>
            <p className='text-center text-[#888888] text-[14px] font-normal whitespace-nowrap pt-4 pb-16'>
                Designed with 💜 by <span className='font-medium'>Me</span>
            </p>
        </div>



            {/** Mobile footer */}



        <div className='lg:hidden space-y-3 justify-center text-center items-center sm:mx-20 max-sm:mx-6 mt-20'>
            <div>
                <h1 className='text-white text-[30px] max-sm:text-[35px] font-medium'>Let&apos;s work together</h1>
                <p className='text-[#888888] text-[14px] text-center max-sm:whitespace-normal font-medium whitespace-nowrap'>I would love to hear from you, so please feel free to reach out</p>
            </div>
            
            <div className='flex justify-between items-center py-4 sm:mx-2 max-sm:-mx-4 md:mx-14'>
                <button className='flex group items-center justify-center w-32 max-sm:w-40 relative py-2 max-sm:py-1 max-sm:px-3 px-4 rounded-3xl bg-white hover:bg-[#F5DD37] transition duration-100 overflow-hidden'>
                    <div className='relative sm:group-hover:-translate-x-4 transition duration-300 flex space-x-1'>
                        <span className='group-hover:scale-125 transition duration-200'>
                            <HiOutlineClipboardDocumentList size={15} className='text-black my-auto'/>
                        </span>        
                        <p className='text-black text-[13px] my-auto max-sm:text-[10px] font-bold'>CV/Résumé</p>   
                        <span className='hidden group-hover:block group-hover:max-sm:hidden transition duration-200'><FiExternalLink size={17} className='text-black my-auto'/></span> 
                    </div>
                </button>


                <button onClick='mailto:golaiya123@gmail.com' className='flex group items-center justify-center w-[200px] max-sm:w-[240px] relative py-2 px-4 max-sm:py-1 max-sm:px-3 rounded-3xl bg-[#161616] transition duration-100 overflow-hidden'>
                    <div className='relative sm:group-hover:-translate-x-4 transition duration-300 flex space-x-3 max-sm:space-x-1'>
                        <span className='group-hover:scale-125 transition duration-200'>
                            <GoMail size={13} className='text-white my-auto'/>
                        </span>        
                        <p className='text-gray-100 text-[13px] max-sm:text-[10px] font-normal my-auto'>golaiya123@gmail.com</p>   
                        <span className='hidden group-hover:block group-hover:max-sm:hidden transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>
                </button>


                <button onClick='tel:+2349065916691' className='flex group items-center justify-center w-[185px] max-sm:w-[170px] relative py-2 px-2 max-sm:py-1 max-sm:px-3 rounded-3xl bg-[#161616] transition duration-100 overflow-hidden'>
                    <div className='relative sm:group-hover:-translate-x-4 transition duration-300 flex space-x-3 max-sm:space-x-1'>
                        <span className='group-hover:scale-125 transition duration-200'>
                            <PiPhoneCallLight size={15} className='text-white my-auto'/>
                        </span>        
                        <p className='text-gray-100 text-[13px] max-sm:text-[10px] font-normal whitespace-nowrap my-auto'>+234 906 591 6691</p>   
                        <span className='hidden group-hover:block group-hover:max-sm:hidden transition duration-200'><FiExternalLink size={17} className='text-white my-auto'/></span> 
                    </div>
                </button>

            </div>

            <div className='pt-6 flex justify-between items-start -mx-1 md:mx-4'>
                <Link href='https://www.linkedin.com/in/gideon-olaiya-852057209/' className='relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out transition duration-100'>
                    <div className='relative gap-x-2 max-sm:gap-x-0.5 flex items-center'>
                        <span className='group-hover:scale-125 transition duration-200 ease-in-out'>
                            <AiFillLinkedin size={17} className='text-white my-auto' /> 
                        </span>   
                        LinkedIn
                    </div>  
                </Link>
                <Link href='https://x.com/X__developer?t=akj83scMEsH8VeRDmK0jug&s=09' className='relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out transition duration-100'>
                    <div className='relative gap-x-2 max-sm:gap-x-0.5 flex items-center'>
                        <span className='group-hover:scale-125 transition duration-200 ease-in-out '>
                            <RiTwitterXLine size={15} className='text-white my-auto' /> 
                        </span>   
                        Twitter
                    </div>  
                </Link>

                <Link href='https://medium.com/@golaiya123' className='relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out transition duration-100'>
                    <div className='relative gap-x-2 max-sm:gap-x-0.5 flex items-center'>
                        <span className='group-hover:scale-125 transition duration-200 ease-in-out'>
                            <BsMedium size={17} className='text-white my-auto' /> 
                        </span>   
                        Medium
                    </div>  
                </Link>
                
                <Link href='/' className='relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out transition duration-100'>
                    <div className='relative gap-x-2 max-sm:gap-x-0.5 flex items-center'>
                        <span className='group-hover:scale-125 transition duration-200 ease-in-out'>
                            <AiFillYoutube size={17} className='text-white my-auto' /> 
                        </span>   
                        Youtube
                    </div>  
                </Link>
            </div>



            <div className='py-4 flex justify-between items-start sm:mx-0 md:mx-4'>
                                
                <Link href='/' className='relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out transition duration-100'>
                    <div className='relative gap-x-2 max-sm:gap-x-0.5 flex items-center'>
                        <span className='group-hover:scale-125 transition duration-200 ease-in-out'>
                            <AiOutlineDribbble size={17} className='text-white my-auto' /> 
                        </span>   
                        Dribbble
                    </div>  
                </Link>

                <Link href='https://github.com/Gideon227' className='relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out transition duration-100'>
                    <div className='relative gap-x-2 max-sm:gap-x-0.5 flex items-center'>
                        <span className='group-hover:scale-125 transition duration-200 ease-in-out'>
                            <AiFillGithub size={17} className='text-white my-auto' /> 
                        </span>   
                        Github
                    </div>  
                </Link>

                <Link href='/' className='relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out transition duration-100'>
                    <div className='relative gap-x-2 max-sm:gap-x-0.5 flex items-center'>
                        <span className='group-hover:scale-125 transition duration-200 ease-in-out'>
                            <RiTiktokFill size={17} className='text-white my-auto' /> 
                        </span>   
                        Tiktok
                    </div>  
                </Link>

                <Link href='https://www.instagram.com/gideondev_/' className='relative text-gray-400 text-[14px] hover:text-[#9b876f] group ease-in-out transition duration-100'>
                    <div className='relative gap-x-2 max-sm:gap-x-0.5 flex'>
                        <span className='group-hover:scale-125 transition duration-200 ease-in-out'>
                            <AiOutlineInstagram size={17} className='text-white my-auto' /> 
                        </span>   
                        Instagram
                    </div>  
                </Link>
            </div>

            <p className='pt-6 text-center text-[#888888] text-[12px] font-medium whitespace-nowrap'>
                © 2023 Olaiya Gideon. All Rights Reserved
            </p>
            <p className='text-center text-[#888888] text-[12px] font-normal whitespace-nowrap pt-2 pb-10'>
                Designed with 💜 by <span className='font-medium'>Me</span>
            </p>

        </div>
    </footer>
  )
}

export default Footer