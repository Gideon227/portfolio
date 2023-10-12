'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillPlayCircle, AiOutlinePlayCircle } from 'react-icons/ai'
import { VscActivateBreakpoints } from 'react-icons/vsc'
import { RxCross2 } from 'react-icons/rx'

const Testimonials = () => {
    const [toggleVideo, setToggleVideo] = useState(false)

    const testimonials = [
        {   
            avatar: '/curt-avatar.jpeg',
            name: 'Curt Skene',
            position: 'FOUNDER, CAREER NETWORK CLUB',
            testimonial: 'Gideon is a rock star! He took a tired and inefficient site and made it something amazing. I asked for some very difficult backend enhancements and he delivered on all. Great guy. Definitely a keeper and go-to resource.',
            date:'November 27, 2021'
        },
        {   
            avatar: '/Aaron-Tan.jpg',
            name: 'Aaron Tan',
            position: 'FOUNDER, SCALINGUP VENTURES',
            testimonial: 'Gideon was very easy to work with, patient and understood the assignment well. He communicated clearly and was very responsive. Thanks!',
            date:'November 30, 2022'
        },
        {   
            avatar: '/jason.jpeg',
            name: 'Jason Dexter',
            position: 'SENIOR PM, BUSINESS OF FASHION',
            testimonial: 'Everything was amazing with Gideon. He built a great site for me. Helped with SEO and also built a few unique apps. A great find with a pleasant and fun personality. Will work with him again in the future for sure.',
            date:'November 27, 2021'
        }
    ]

  return (
    <div className='lg:ps-20 py-10 max-sm:py-8 px-5'>
        <div>
            <p className='sm:text-[16px] text-[12px] py-2 font-normal text-gray-400 leading-6'>TESTIMONIALS —</p>
            <h1 className='sm:text-[35px] text-[27px] font-medium text-white '>WHAT MY CLIENTS SAY ABOUT ME 🖋</h1>
        </div>

        <div className='no-scrollbar -mx-12 max-lg:mx-2 overflow-x-scroll pt-14'>
            <div className='gallery flex no-scrollbar space-x-4 max-md:space-x-1.5 w-full'>
                <div className='bg-[#171A21] relative p-4 rounded justify-center items-center flex flex-col space-y-2'>
                    <video 
                        src='/Muhammed.mp4'
                        autoPlay
                        muted
                        height={400}
                        width={300} 
                        className='object-cover h-[290px] w-[280px]'
                    />
                    <h1 className='text-white font-normal text-[16px] pt-3'>Mohammed Yassir Khalid</h1>
                    <p className='text-[#616773] text-[14px] font-normal'>FOUNDER, WEBSMASTRY</p>
                    <button onClick={() => setToggleVideo(true)} className='flex px-2 py-3 rounded-lg space-x-2 justify-center items-center bg-white cursor-pointer absolute bottom-[105px] left-12 right-12'>
                        <AiFillPlayCircle size={20}/>
                        <h1 className='text-[14px] font-semibold '>PLAY VIDEO</h1>
                    </button>
                </div>
                {testimonials?.map((item) => (
                   <div className='bg-[#171A21] p-4 rounded space-y-4 h-[400px] w-[300px]' key={item.name}>
                        <div className='flex space-x-4'>
                            <Image src={item.avatar} width={70} height={70} alt={item.name} className='rounded-full object-contain'/>
                            <div>
                                <h1 className='text-white font-normal text-[16px]'>{item.name}</h1>
                                <p className='text-[#616773] text-[13px] font-normal'>{item.position}</p>
                            </div>
                        </div>
                        <p className='text-white text-[16px] pt-6 pb-2'>{item.testimonial}</p>
                        <div className='flex justify-between'>
                            <p className='text-[#616773] text-[13px] font-normal'>{item.date}</p>
                            <VscActivateBreakpoints size={17} className='text-white'/>
                        </div>
                   </div> 
                ))}
                
            </div>
        </div>

        {toggleVideo && (
            <div className='fixed top-0 left-0 bg-black h-screen w-screen z-20'>
                <button onClick={() => setToggleVideo(false)} className='border-white rounded-full cursor-pointer p-2 border-[0.5px] absolute top-4 right-2'> 
                    <RxCross2 size={22} className='text-white'/> 
                </button>

                <div className='absolute top-1/2 md:right-1/2'>
                    <video 
                        src='/Muhammed.mp4'
                        autoPlay
                        controls
                        height={400}
                        width={300} 
                        className='object-cover h-[700px] w-[1200px] max-md:w-screen max-md:h-[500px] z-50 md:translate-x-1/2 -translate-y-1/2'
                    />
                </div>
            </div> 
        )}

    </div>
  )
}

export default Testimonials