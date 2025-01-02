"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FC, useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { HTMLMotionProps } from 'framer-motion';

interface TypingAnimationProps extends HTMLMotionProps<"div"> {
  words: string[];
  duration?: number;
  className?: string;
}

export const TypingAnimation: FC<TypingAnimationProps> = ({ 
  words, 
  duration = 50,
  className,
  ...props 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: false });

  useEffect(() => {
    if (!started) {
      setStarted(true);
      return;
    }

    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? duration / 1.5 : duration; // Faster delete

    const typingEffect = setInterval(() => {
      if (!isDeleting && displayedText.length < currentWord.length) {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 800); // Reduced from 1500
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(displayedText.substring(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearInterval(typingEffect);
  }, [started, displayedText, isDeleting, currentWordIndex, words, duration, isInView]);

  return (
    <motion.div
      ref={elementRef}
      className={cn(
        "inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text pb-1.5 leading-relaxed",
        className
      )}
      {...props}
    >
      {displayedText}
    </motion.div>
  );
}

export default TypingAnimation;
