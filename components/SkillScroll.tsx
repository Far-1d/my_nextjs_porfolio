import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { skills_1, skills_2 } from '@/data';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary'
import SkillSpawn from './ui/SkillSpawn';


export default async function SkillScroll({
    params: { lang }
    } : {
    params: {lang: Locale}
    }) {
    const {skill} = await getDictionary(lang)
  return (
    <div className='my-16' id="skills"> 
        <div className={"justify-items-center text-5xl font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 flex items-start justify-center"}>
            {/* <div className="flex items-center mr-2 mt-1">
                <IoIosFitness />
            </div> */}
            <div className="flex">
                <h1 className="heading">
                    {skill.my} {' '}
                    <span className={`text-purple ${lang==="fa" ? 'inline-block' :''}`}>{skill.skills}</span>
                </h1>

            </div>
        </div>
        <div className='w-5/6 md:w-3/4 mx-auto mt-16' >
            {/* <div className='w-full md:w-4/5 mx-auto py-4'>
                <InfiniteMovingCards
                    items={skills_1}
                    direction="right"
                    speed="normal"
                />
            </div> */}
            {/* <div className='w-full md:w-4/5 mx-auto py-2'>
                <InfiniteMovingCards
                    items={skills_2}
                    direction="left"
                    speed="normal"
                />
            </div> */}
            {/* <div className='w-3/4 mx-auto py-6'>
                <InfiniteMovingCards
                    items={hobbies}
                    direction="right"
                    speed="normal"
                />
            </div> */}
            <SkillSpawn/>
            
        </div>
    </div>
  )
}

// export default SkillScroll