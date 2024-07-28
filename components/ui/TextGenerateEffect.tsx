"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { Locale } from '@/i18n.config';

export const TextGenerateEffect = ({
  words,
  className,
  lng
}: {
  words: string;
  className?: string;
  lng: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = ({lang}:{lang:string}) => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                lang === "fa"
                  ? (idx === 1 || idx === 2 ? 'text-purple' : 'dark:text-white text-black')
                  : (idx > 1 ? 'text-purple' : 'dark:text-white text-black')
              } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords({lang:lng})}
        </div>
      </div>
    </div>
  );
};
