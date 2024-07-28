import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary'

export default async function Hero({
  params: { lang }
} : {
  params: {lang: Locale}
}) {
  const {hero} = await getDictionary(lang)
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10
        md:-left-32 md:-top-20 h-screen" fill='#ccc'/>
        <Spotlight className="lg:top-24 md:-top-[15%] -top-[16%]
        left-full lg:h-[80vh]  sm:h-[90wh] 
        w-[50vw]" fill='grey'/>
        <Spotlight className="lg:top-28 md:top-12 -top-6 left-80 
        h-[100vh] w-[70vw]" fill='blue'/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  
        dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex 
        items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex 
          items-center justify-center dark:bg-black-100 bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='w-full flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-2-2xl lg:max-w-[60vw] flex 
          flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs
            text-center text-blue-100 max-w-80'>
            {hero.hello}
          </h2>
          <TextGenerateEffect
            className='text-center text-[60px] md:text-5xl
            lg:text-6xl'
            words={hero.me}
            lng={lang}
          />

          <p className='text-center md:tracking-wider
            mb-4 text-sm md:text-lg lg:text-2xl'>
            {hero.job}
          </p>
          
          <a href="#about">
            <MagicButton
              title={hero.about}
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
          
        </div>
      </div>
    </div>
  )
};

// export default Hero