'use client'

import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GridGlobe";
import React, { useState } from "react";
import animationData from '@/data/confetti.json'
import Lottie from 'react-lottie';
import MagicButton from "./MagicButton";
import { Meteors } from "./meteors";
import {IoCopyOutline} from 'react-icons/io5'
import { BackgroundBeams } from "./background-beams";
import { motion } from "framer-motion";
import { IoLocationOutline } from "react-icons/io5";
import { IoLayersOutline  } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";
import ChangingDiv from "./hoursCoded";
import { Component } from "../shadcn/power-chart";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  titleClassName,
  lang
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  titleClassName?: string;
  lang: string;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('farid.zarie.000@gmail.com');
    setCopied(true);
  }
  const icon = id=== 1? <IoRocketOutline  /> : id === 2 ? <IoLocationOutline/> : id ===3 ? <IoLayersOutline  /> : id===4? <IoFlashOutline/> :''
  const copied_text = lang==="fa"? 'ایمیل کپی شد' :'Email copied';
  const not_copied_text = lang==="fa"? 'کپی ایمیل' :'Copy my email';

  return (
    
        <div
          className={cn(
            "row-span-1 relative overflow-hidden rounded-2xl group/bento hover:shadow-xl",
            "transition duration-200 shadow-input justify-between flex",
            "flex-col border border-white/[0.1]",
            className
          )}
          style={{
              background: 'rgb(4,7,25)',
              backgroundColor: 'linear-gradient(90deg, rgba(11,11,15,0.8) 0%, rgba(32,32,56,0.8) 35%, rgba(36,35,156,0.8) 100%)',
          }}
        > 
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="leading-relaxed lg:leading-snug "
            >
              <div className={`${id===5 && "flex justify-center bg-[url('/gradient.svg')] bg-cover bg-no-repeat"} h-full`}>
              
                {id === 3 && (
                  // 
                  <BackgroundBeams />
                )}
                <div className={cn( 
                      'group-hover/bento:translate-x-2 transition duration-200 relative h-full min-h-40 flex flex-col px-3 mt-4',
                      id==5 ? "group-hover/bento:translate-x-0":"" )}>
                    <div dir={`${lang==='fa' ? 'rtl': 'ltr'}`} className="">
                      
                      <div className={cn("font-sans font-bold m-2 flex items-start", titleClassName)}>
                        <span className="mx-2 mt-1">
                          {icon}
                        </span>
                        <div className="flex-1 z-20">
                          {title}
                        </div>
                      </div>
                      <div className="font-sans font-normal text-neutral-200 text-xs md:text-sm">
                        <p className={`mx-[44px] max-w-96 ${id===1 ? 'hidden':''}`}>{description}</p>
                      </div>
                    </div>
                    
                    {id===1 && (
                      <div className="h-40">
                        <Component desc={description} lang={lang}/>
                      </div>
                    )}

                    {id === 2 && (
                      <GlobeDemo /> 
                    )}
                    {id === 2 && (
                      <Meteors number={20} />
                    )}
                    {id===4 && (
                      <div className="flex items-center justify-end h-full mb-2 sm:mb-8 mr-8
                       text-xl font-semibold">
                        <ChangingDiv />
                      </div>
                    )}
                    
                    {id===5 && (
                        <div className="relative mx-auto">
                            <div className="absolute -botton-5 right-0">
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice',
                                    }
                                }} />
                            </div>
                            <MagicButton
                                title={copied ? copied_text : not_copied_text}
                                icon={<IoCopyOutline/>}
                                position={lang==="fa"? 'right' :'left'}
                                otherClasses="bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>

              </div>
          </motion.h1>
      </div>
  );
};
