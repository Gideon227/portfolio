'use client'
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const sentenceAnimation = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition : {
            delay: 1,
            staggerChildren: 5
        },
    }
}

const paragraphAnimation = {
    hidden: {
        y: '30vh',
        transition: {
            duration: 0,
            staggerChildren: 0.1
        }
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0
        }
    },
}

export const AnimatedParagraph = ({ text, className }) => {
    const paragraphRef = useRef(null)
    const isInView = useInView(paragraphRef, { amount: 0.5, once: true })

    return(
            <motion.span
                ref={paragraphRef}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                variants={sentenceAnimation} 
                className={className}  
            >
                {text.map((line, index) => (  
                   <span className="block overflow-hidden" key={index}>
                   {line.split(' ').map((word, index) => (
                       <span key={index} className="overflow-hidden">
                           <motion.span key={word + '-' + index} className="inline-block" variants={paragraphAnimation}>
                               {word}
                            </motion.span>  
                        <span className="inline-block">&nbsp;</span>
                       </span>
                   ))}
                   </span>
                ))}
            </motion.span>
    )
}