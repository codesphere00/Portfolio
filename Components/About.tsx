'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MotionImage = motion(Image);

function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-y-auto pt-24 pb-8 md:pt-0 md:pb-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      
      <MotionImage
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
        alt="Nilesh Kumawat - Full Stack Developer and Next.js Specialist"
        width={500}
        height={600}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-5 px-0 md:px-10 max-w-2xl text-left'>
        <p className='text-base text-gray-300 leading-relaxed'>
          Hey there! 👋 I’m Nilesh Kumawat — a passionate <strong>Full Stack Developer</strong> and <strong>Freelance Web Developer</strong> who loves turning creative ideas into high‑performance, responsive websites and applications. My coding journey started with a simple curiosity about how websites function, which quickly evolved into a dedicated career building modern web products.
        </p>
        <p className='text-base text-gray-300 leading-relaxed'>
          As an expert <strong>Next.js Developer</strong> and <strong>React Developer</strong>, I specialize in building fast, SEO-friendly frontends. Over the years, I have strengthened my capabilities as a <strong>TypeScript Developer</strong> and <strong>MERN Stack Developer</strong>, allowing me to engineer secure backend architectures and scalable APIs while maintaining clean code.
        </p>
        <p className='text-base text-gray-300 leading-relaxed'>
          Whether collaborating on SaaS platforms, building custom client portals, or optimizing performance for core web vitals, I am focused on writing clean, production-ready code that offers users a flawless visual experience. 🌟
        </p>
      </div>
    </motion.div>
  );
}

export default About;