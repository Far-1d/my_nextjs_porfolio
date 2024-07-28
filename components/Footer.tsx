import React from 'react'
import GridPattern from './magicui/animated_grid_pattern'
import { cn } from '@/lib/utils'
import MagicButton from './ui/MagicButton'
import { LuSend } from "react-icons/lu";
import { socialMedia } from '@/data';
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary'

export default async function footer ({
  params: { lang }
} : {
  params: {lang: Locale}
}){
  const {footer} = await getDictionary(lang)
  return (
    <footer className='w-full h-[20%] min-h-44 pt-10 pb-2 overflow-hidden mt-32 mb-10' id="Contact">
        <div className='absolute left-[10%] top-[90%] h-[350px] w-full'>
          <GridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              // "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "[mask-image:radial-gradient(700px_circle_at_bottom,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
        </div>

        <div className='flex flex-col items-center'> 
          <h1 className='heading lg:max-w-[45vw] text-2xl text-center'>
          <span className={`${lang==="fa" ? 'text-purple' : ''}`}>{footer.more1}</span> 
          <span className={`${lang==="en" ? 'text-purple' : ''}`}>{footer.more2}</span> 
          {footer.more3}
          </h1>

          <a href='https://t.me/Faridz98' className='mt-4'>
            <MagicButton 
              title={footer.touch}
              icon={<LuSend/>}
              position="right"
            />
          </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-small md:font-normal font-light'>
              © 2024 - {footer.copy}
            </p>
            <div className='flex items-center md:gap-3 gap-6'>
              {socialMedia.map((profile)=> (
                <div key={profile.id} className="w-10 h-10 cursor-pointer flex 
                items-center justify-center">
                    <a href={profile.link} className='z-20 h-full w-full text-3xl flex items-center justify-center'>
                      {profile.name==="github" ? <FaGithub /> : <FaTelegramPlane/>}
                    </a>
                </div>
              ))}
            </div>
        </div>
    </footer>
  )
}

// export default footer