import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

interface NumberTickerProps {
  value: number;
  suffix?: string;
}

export function NumberTicker({ value, suffix = "" }: NumberTickerProps) {
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  const display = useTransform(spring, (current) => Math.round(current));

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <motion.span>{display}</motion.span>{suffix}
    </motion.span>
  );
}