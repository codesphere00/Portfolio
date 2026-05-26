'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-col max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 mt-20 max-w-4xl px-4">
        <Skill imageUrl='https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png' directionLeft name="Next.js" /> 
        <Skill imageUrl='https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fhpg6if7btrwilqkidqbe.png' directionLeft name="React" /> 
        <Skill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' directionLeft name="TypeScript" /> 
        <Skill imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUADBmFAAnjORHitXpQvZBZzazX9rM3B7-A&s' directionLeft name="Tailwind CSS" /> 
        <Skill imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ajtj32qaXU3UKjN17SEsLcApRTtbwKEssQ&s' directionLeft name="Node.js" /> 
        <Skill imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' directionLeft name="PostgreSQL" /> 
        <Skill imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s' directionLeft name="MongoDB" /> 
        <Skill imageUrl='https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/stripe.svg' directionLeft name="Stripe" invert /> 
        <Skill imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR9npLfmApWYC0keCwuwCDzeini7NocCW8w&s' name="Sanity CMS" /> 
        <Skill imageUrl='https://refine-web.imgix.net/blog/2024-06-20-framer-motion/social.png?w=1788' name="Prisma ORM" /> 
        <Skill imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5mZo9FxQB3jZKNX01QqE_DlYHmtoknYwyg&s' name="Zustand" /> 
        <Skill imageUrl='https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/radixui.svg' name="shadcn/ui" invert /> 
      </div>
    </motion.div>
  );
}

export default Skills;
