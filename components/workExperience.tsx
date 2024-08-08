import React from 'react'
import { Button } from './ui/moving-border'
// import { experiences } from '@/data'
import { FaArrowUpRightFromSquare  } from 'react-icons/fa6'
import Image from 'next/image'
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary'

export default async function workExperience({
    params: { lang }
    } : {
    params: {lang: Locale}
    }) {
    const {experiences} = await getDictionary(lang)
    const {exp} = await getDictionary(lang)
  return (
    <div className="py-20" id="Experiences">
        {lang != 'fa' && (
        <h1 className="heading">
            <span className='inline'>{exp.work} </span>
            <span className='inline text-purple'>{exp.exp} </span>
        </h1>
        )}
        {lang=== 'fa' && (
        <h1 className="heading">
            <span className='inline text-purple'>{exp.exp} </span>
            <span className='inline'>{exp.work} </span>
        </h1>
        )}
        <div  dir={`${lang=== 'fa' ? 'rtl': 'ltr'}`} className="w-full mt-16 grid grid-cols-2 gap-10 justify-center">
            {experiences.map((card) =>(
                <Button
                    duration={Math.floor(Math.random()*1000+6000)}
                    key={card.id}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200
                    dark:border-slate-800 '>
                    
                    <div className='group flex lg:flex-row flex-col lg:items-center p-3
                    py-6 md:p-5 lg:p-10 gap-2'>
                        <div className='flex justify-between'>
                            <Image src={card.thumbnail} alt={card.thumbnail}
                                width={500} height={500}
                            className='lg:w-32 md:w-20 w-16'/>
                            {card.link && (
                                <a href={card.link} className='lg:hidden'> 
                                    <i className="block sm:invisible group-hover:visible">
                                        <FaArrowUpRightFromSquare  />
                                    </i>
                                </a>
                            )}
                        </div>
                        
                        <div className='lg:ms-5'>
                            <h1 className='flex justify-between text-start text-xl md:text-2xl font-bold'>
                                {card.title} {'  '}<span className="text-sm text-purple">{card.year}</span>
                                {card.link && (
                                <a href={card.link} className='absolute hidden lg:block text-sm top-5 right-5'> 
                                    <i className="block sm:invisible group-hover:visible">
                                        <FaArrowUpRightFromSquare  />
                                    </i>
                                </a>
                            )}
                            </h1>

                            <p className='text-start text-white-100 mt-3 
                            font-semibold'>
                                {card.desc}
                            </p>
                        </div>

                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

// export default workExperience