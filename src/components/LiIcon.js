import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
        <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' width="75" height="75" viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none' />
            <motion.circle cx="75" cy="50" r="20" className='fill-light dark:fill-dark stroke-[5px]' style={{
                pathLength: scrollYProgress
            }} />
            <circle cx="75" cy="50" r="10" className='animate-pulse fill-primary dark:fill-primaryDark stroke-1' />
        </svg>
    </figure>
  )
}

export default LiIcon