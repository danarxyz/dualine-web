import { motion } from "framer-motion";
import { NumberTicker } from "./number-ticker";

interface StatsCardProps {
  value: number;
  suffix?: string;
  label: string;
}

export function StatsCard({ value, suffix, label }: StatsCardProps) {
  return (
    <motion.div 
      className="text-center group"
    >
      <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
        <NumberTicker value={value} suffix={suffix} />
      </h3>
      <p className="text-gray-400/80 font-medium mt-1">{label}</p>
    </motion.div>
  );
}