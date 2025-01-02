import { motion } from "framer-motion";
import { IconTruck, IconGlobe, IconRobot, IconLeaf } from "@tabler/icons-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
  icon: 'truck' | 'globe' | 'robot' | 'leaf';
}

const icons = {
  truck: IconTruck,
  globe: IconGlobe,
  robot: IconRobot,
  leaf: IconLeaf,
};

export function TimelineItem({ year, title, description, position, icon }: TimelineItemProps) {
  const Icon = icons[icon];
  return (
    <motion.div 
      initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-center gap-8 ${position === 'right' ? 'flex-row-reverse' : ''}`}
    >
      <div className={`w-1/2 ${position === 'right' ? 'text-left' : 'text-right'} p-6 group`}>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5
            hover:bg-gradient-to-r from-purple-500/10 to-pink-500/10 transition-all duration-300"
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold 
            bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
            {year}
          </div>
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-gray-400">{description}</p>
        </motion.div>
      </div>
      <motion.div 
        className="relative size-4"
        whileHover={{ scale: 1.5 }}
        whileInView={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute size-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
      </motion.div>
      <div className="w-1/2" />
    </motion.div>
  );
}