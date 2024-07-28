import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
// import { gridItems } from '@/data'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog"
import MagicButton from './ui/MagicButton'
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary'

export default async function Grid({
  params: { lang }
} : {
  params: {lang: Locale}
}) {
  const {more_me} = await getDictionary(lang)
  const {gridItems} = await getDictionary(lang)
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map ( ({id, title, description, className, 
                titleClassName}) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    titleClassName={titleClassName}
                    lang={lang}
                />
            ))}
        </BentoGrid>
        
        <div className='flex items-center justify-center mx-16 sm:mx-32 md:mx-auto pt-8 md:pt-2'>
          <Dialog>
            <DialogTrigger>
              <MagicButton title={more_me.btn}></MagicButton>
            </DialogTrigger>
          
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{more_me.title}</DialogTitle>
                <DialogDescription>
                  <p className='pt-4 text-sm font-normal' dir={`${lang==='fa' ? 'rtl': 'ltr'}`}>
                  
                  <span className={`${lang==='fa' ? 'text-right': 'text-left'} block py-2`}>
                    {more_me.a}
                  </span>
                  <span className={`${lang==='fa' ? 'text-right': 'text-left'} block py-2`}>
                    {more_me.b}
                  </span>
                  <span className={`${lang==='fa' ? 'text-right': 'text-left'} block py-2`}>
                    {more_me.c}
                  </span>
                  <span className={`${lang==='fa' ? 'text-right': 'text-left'} block py-2`}>
                    {more_me.d}
                  </span>
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
          
    </section>
  )
}

// export default Grid