'use client'
import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from 'framer-motion'
import Image from "next/image"

import { AnimatedParagraph } from "./AnimatedParagraph"
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
    const imageRef = useRef(null)
    const isInView = useInView(imageRef, { amount: 0.5, once: true })

  const projects = [
     {
      image :'/Interface-design.png',
      title : 'INTERFACE DESIGN',
      link: 'https://interface-design.co.uk/',
      technologies: ['GATSBY', 'REACT', 'JAVASCRIPT', 'CSS', 'FRAMER MOTION']
    },
    {
      image :'/Webmastry-img.png',
      title : 'WEBMASTRY',
      link: 'https://webmastry.com/',
      technologies: ['WEBFLOW', 'HTML', 'CSS', 'JAVASCRIPT']
    },
     {
      image :'/Cnc.png',
      title : 'CAREER NETWORK CLUB',
      link: 'https://www.careernetworkclub.ca/',
      technologies: ['WORDPRESS', 'ELEMENTOR', 'MEMBERPRESS', 'WOOCOMMERCE']
    },
     {
      image :'/mirror.png',
      title : 'MIRROR STORE (IN PRODUCTION)',
      link: '/',
      technologies: ['NEXTJS', 'MONGODB', 'TAILWIND CSS', 'NEXT-AUTH']
    }
   ]
  return (
    <section className='lg:py-8 py-2 lg:px-10'>
        <p className="lg:ps-20 lg:pe-96 py-28 max-sm:py-8 px-5">
          <AnimatedParagraph 
            text={[
              `I'm a Full-stack website developer with skills ranging from conceptual thinking to`,
              'designing and developing high quality and converting websites.',
              '',
              `When I'm not sitting in front of a screen writing codes or admiring the work of others,`,
              `I'm busy learning a new technology or cooking😉. I have a strong passion for`,
              'modern architecture, martial arts, and cooking.'
            ]}
            className='leading-7 text-gray-400 font-medium text-[16px]'
          />
        </p>

        {/* <div className="flex justify-between relative my-28">
          <div className="space-y-4 w-1/2">
            <h2 className="indent-20 text-[25px] leading-8 text-gray-400 font-medium">A website developer who develop<br /> website that drives conversion</h2>
            <p className="text-[16px] leading-7 text-gray-400 font-normal">I'm a Full-stack website developer with skills ranging from conceptual thinking to designing and developing high quality and converting websites. <br /> <br />
            When I'm not sitting in front of a screen writing codes or admiring the work of others, I'm busy learning a new technology or cooking😉. I have a strong passion for modern architecture,martial arts, and cooking.</p>
          </div>
          <Image src='/Hero.jpg' alt='a photo of me' width={480} height={560} className="rounded-md "/>
          <p className="text-[#BE2DF7] text-[15px] absolute ">About</p>
        </div> */}

          <div>
            <p className='sm:text-[16px] text-[12px] py-2 font-normal text-gray-400 leading-6'>FEATURED PROJECTS — </p>
            <h1 className='sm:text-[35px] text-[27px] font-medium text-white'>Stuff I&apos;ve Worked On 📁</h1>
          </div>

        <div className='pt-12 pb-6 lg:px-8 gap-y-8'>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12">
            {projects?.map((project) => (
              <div key={project.title} className="flex flex-col h-full border-[0.5px] overflow-hidden rounded border-[#333333] align-start">
              <Image src={project.image} width={450} height={350} alt='project image' className="object-cover w-full align-middle"/>
              <div className="flex flex-col space-y-10 lg:px-12 max-lg:px-5 py-8 flex-wrap align-start">
                <div className="flex gap-x-2 whitespace-nowrap tech-gap flex-wrap">
                  {project.technologies?.map((item, index) => (
                    <div key={index} className="border-[0.5px] overflow-hidden rounded border-[#333333] text-[12px] px-2 py-1 text-[#b6b6b6]">{item}</div>                  
                  ))}
                </div>

                <Link href={project.link} className="lg:text-[16px] text-[14px] font-normal text-white leading-5 flex justify-between">
                  {project.title} 
                  <FiExternalLink className="my-auto"/>
                </Link>

              </div>
            </div>
            ))}
          </div>


        </div>
    </section>
  )
}

export default Projects