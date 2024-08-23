'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills_1, skills_2, skills_3 } from '@/data';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/shadcn/tooltip"

const SkillSpawn = () => {
  return (
    <div>
        <div className='flex item-center space-x-5 sm:space-x-10 justify-center'>
            {skills_1.map((icon, idx)=>(
                <motion.span
                    key={idx}
                    initial={{opacity:0}}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay:icon.delay }}
                    className='flex items-center justify-center'
                >   
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className=''>
                            <Image src={icon.icon} height={70} width={70} alt={icon.icon} 
                            className='w-10 sm:w-16 h-10 sm:h-16'/>
                        </TooltipTrigger>
                        <TooltipContent className='max-w-56 text-pretty'>
                          <p>{icon.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                        
                </motion.span>
            ))}
        </div>
        <div className='flex item-center space-x-5 sm:space-x-10 justify-center my-6'>
            {skills_2.map((icon, idx)=>(
                <motion.span
                    key={idx}
                    initial={{opacity:0}}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay:icon.delay }}
                    className='flex items-center justify-center'
                >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className=''>
                            <Image src={icon.icon} height={70} width={70} alt={icon.icon} 
                            className='w-10 sm:w-16 h-10 sm:h-16'/>
                        </TooltipTrigger>
                        <TooltipContent className='max-w-56 text-pretty'>
                          <p>{icon.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                </motion.span>
            ))}
        </div>
        <div className='flex item-center space-x-5 sm:space-x-10 justify-center my-6'>
            {skills_3.map((icon, idx)=>(
                <motion.span
                    key={idx}
                    initial={{opacity:0}}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay:icon.delay }}
                    className='flex items-center justify-center'
                >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className=''>
                            <Image src={icon.icon} height={70} width={70} alt={icon.icon} 
                            className='w-10 sm:w-16 h-10 sm:h-16'/>
                        </TooltipTrigger>
                        <TooltipContent className='max-w-56 text-pretty'>
                          <p>{icon.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                </motion.span>
            ))}
        </div>
    </div>
  )
}

export default SkillSpawn