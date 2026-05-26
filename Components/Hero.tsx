'use client';

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hi, The Name's Nilesh Kumawat",
      "Expert Next.js & React Developer",
      "MERN Stack Specialist",
      "Freelance Web Developer.tsx"
    ],
    loop: true,
    typeSpeed: 70,
    delaySpeed: 500,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <Image
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop"
        alt="Nilesh Kumawat - Full Stack Developer and Freelance Web Developer"
        width={128}
        height={128}
        priority
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Full Stack Developer</h2>
        <h1 className='text-2xl lg:text-4xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7ABBA' />
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton' aria-label="Learn more about Nilesh Kumawat">About</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton' aria-label="View developer skills">Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton' aria-label="View web development projects">Projects</button>
          </Link>
          <Link href="#contact">
            <button className='heroButton' aria-label="Contact Nilesh Kumawat">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
