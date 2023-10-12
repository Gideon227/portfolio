'use client'
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const sentenceAnimation = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition : {
            delay: 0.5,
            staggerChildren: 0.08
        },
    }
}

const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition : {
            duration: 0.5
        }
    }
}



export const AnimatedText = ({ text, className }) => {
    const textArray = Array.isArray(text) ? text : [text]
    const textRef = useRef(null)
    const isInView = useInView(textRef, { amount: 0.5, once: true })


    return(
            <motion.span
                ref={textRef}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                variants={sentenceAnimation} 
                className={className}  
            >
                {textArray.map((line, index) => (  
                    <span className="block" key={index}>
                    {line.split(' ').map((word, index) => (
                        <span className="inline-block" key={index}>
                            {word.split('').map((char, index) => (
                                <motion.span key={char + '-' + index} variants={textAnimation}>
                                    {char}
                                </motion.span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </span>
                    ))}
                    </span>
                ))}
            </motion.span>
    )
}

