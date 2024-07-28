import { useState, useEffect } from 'react';
import GradualSpacing from '../magicui/gradual-spacing';

export default function ChangingDiv() {
  const [currentChild, setCurrentChild] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const children = [
    <GradualSpacing
      className="font-display text-center tracking-[-0.1em]  text-black dark:text-white md:leading-[5rem]"
      text="Coding Hours"
      duration={0.5}
      key={1}
    />,
    <GradualSpacing
      className="font-display text-center tracking-[-0.1em]  text-black dark:text-white md:leading-[5rem]"
      text="1840 hrs"
      duration={0.5}
      key={2}
    />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Hide the current child

      setTimeout(() => {
        setCurrentChild((prevChild) => (prevChild + 1) % children.length);
        setIsVisible(true); // Show the next child after 1 second
      }, 1000);
    }, 9000); // Total cycle: 5 seconds visible + 1 second hidden

    return () => clearInterval(interval);
  }, [children.length]);

  return (
    <div className="h-6">
      {isVisible ? children[currentChild] : null}
    </div>
  );
}