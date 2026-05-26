'use client';

import { motion } from "framer-motion";
import Image from "next/image";

type SkillProps = {
  imageUrl: string;
  name: string;
  directionLeft?: boolean;
  invert?: boolean;
};

export default function Skill({ imageUrl, name, directionLeft, invert }: SkillProps) {
  return (
    <motion.div
      initial={{ x: directionLeft ? -40 : 40, opacity: 0 }}
      transition={{ duration: 0.6 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center space-x-3 bg-[#242424]/40 border border-gray-800/60 rounded-xl p-3 w-36 sm:w-44 md:w-48 hover:border-[#F7AB0A] hover:bg-[#242424]/80 hover:scale-105 hover:shadow-lg hover:shadow-[#F7AB0A]/10 transition-all duration-300 ease-in-out cursor-pointer"
      role="img"
      aria-label={name}
    >
      <div className="relative h-8 w-8 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${name} Logo`}
          fill
          className={`object-contain ${invert ? "brightness-0 invert" : ""}`}
        />
      </div>

      <div className="flex flex-col text-left min-w-0 flex-1">
        <h4 className="text-xs md:text-sm font-semibold text-white tracking-wide truncate">{name}</h4>
      </div>
    </motion.div>
  );
}
