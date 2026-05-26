'use client';

import React from 'react'
import { SocialIcon } from 'react-social-icons'
// import { motion } from "motion/react";
import { motion } from "framer-motion";
import Link from 'next/link';

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center'>
    <motion.div
    initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
    }}
    animate={{
        x:0,
        opacity: 1,
        scale: 1,
    }}
    transition={{
        duration: 1.5,
    }}
    className='flex flex-row items-center'>
      <SocialIcon url="https://github.com/codesphere00"
      fgColor='gray'
      bgColor='transparent'
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nilesh Kumawat's GitHub Profile"
       />
      <SocialIcon url="https://www.linkedin.com/in/nilesh-kumawat-51b9a2304/"
      fgColor='gray'
      bgColor='transparent'
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nilesh Kumawat's LinkedIn Profile"
       />
      <SocialIcon 
        url="mailto:nileshkmt2005@gmail.com"
        fgColor='gray'
        bgColor='transparent'
        network='email'
        aria-label="Send Nilesh Kumawat an Email"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "mailto:nileshkmt2005@gmail.com";
        }}
      />
    </motion.div>
    <Link href='#contact' aria-label="Contact Nilesh Kumawat">
    <motion.div 
    initial={{
      x: 500,
      opacity:0,
      scale: 0.5,
    }}
    animate={{
        x:0,
        opacity:1,
        scale: 1,
    }}
    transition={{duration: 1.5}}
    className=' flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
        className='cursor-pointer'
        network='email'
        fgColor='gray'
        bgColor='transparent'
        aria-label="Email Contact Link"
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
    </motion.div>
    </Link>
    </header>
  )
}

export default Header
