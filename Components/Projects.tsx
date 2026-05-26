'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

// PLACEHOLDER VARIABLES - Edit these variables in VS Code to set your project links
const shoprLiveLink = "https://reliable-pony-78c42c.netlify.app/";
const shoprGithubLink = "https://github.com/codesphere00/Ecommerce";

const coldcraftLiveLink = "https://emailgenerator-ai.netlify.app/";
const coldcraftGithubLink = "https://github.com/codesphere00/EmailGenerator";

const smartScheduleLiveLink = "https://schedulegenerator-ai.netlify.app/";
const smartScheduleGithubLink = "https://github.com/codesphere00/ScheduleGenerator";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  link: string;
}

const projectsData: Project[] = [
  {
    title: "Shopr - Full Stack E-Commerce Platform",
    description: "Built a modern full-stack e-commerce platform with authentication, product management, cart functionality, secure payments, CMS integration, and responsive UI. Users can browse products, manage carts, and complete secure checkout experiences.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600&auto=format&fit=crop",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Sanity CMS", "GROQ", "Clerk Auth", "Stripe", "Zustand", "shadcn/ui"],
    github: shoprGithubLink,
    link: shoprLiveLink
  },
  {
    title: "ColdCraft AI - Email Generator",
    description: "Developed an AI-powered cold email generator that helps users create professional outreach emails with authentication, responsive UI, and clean user experience. Built with modern full-stack architecture and API integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    technologies: ["Next.js 15", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "JWT Authentication", "Gemini API", "Nodemailer", "Tailwind CSS", "Zustand", "shadcn/ui", "REST APIs"],
    github: coldcraftGithubLink,
    link: coldcraftLiveLink
  },
  {
    title: "Smart Schedule Generator",
    description: "Built a smart student schedule generator that helps users organize weekly class schedules, subjects, attendance, and timetable management with responsive dashboard functionality and modern UI.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop",
    technologies: ["Next.js 15", "React", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "shadcn/ui", "UploadThing", "Zustand", "REST APIs"],
    github: smartScheduleGithubLink,
    link: smartScheduleLiveLink
  }
];

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projectsData.map((project, i) => (
          <div
            className="h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 w-screen"
            key={i}
          >
            <MotionImage
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image}
              alt={`${project.title} screenshot - Web Development Case Study`}
              width={320}
              height={200}
              className="h-44 w-72 object-cover rounded border border-gray-700"
            />

            <div className="space-y-5 px-0 md:px-10 max-w-6xl text-center">
              <h4 className="text-2xl md:text-4xl font-semibold">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projectsData.length}:
                </span>{" "}
                {project.title}
              </h4>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 justify-center py-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 bg-[#242424] text-[#F7AB0A]/80 border border-[#333333] rounded-full text-xs tracking-wider font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {project.description}
              </p>

              {/* Interactive Links with Premium Hover States and Aria Labels */}
              <div className="flex space-x-4 justify-center pt-2">
                <a
                  href={project.github || "#"}
                  target={project.github ? "_blank" : undefined}
                  rel={project.github ? "noopener noreferrer" : undefined}
                  aria-label={`View GitHub repository for ${project.title}`}
                  className="px-4 py-2 border border-[#333333] rounded-full uppercase text-xs tracking-widest text-gray-400 transition-all hover:border-[#F7AB0A]/60 hover:text-[#F7AB0A] bg-[#242424]"
                >
                  GitHub
                </a>
                <a
                  href={project.link || "#"}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  aria-label={`View Live Demo of ${project.title}`}
                  className="px-4 py-2 border border-[#333333] rounded-full uppercase text-xs tracking-widest text-gray-400 transition-all hover:border-[#F7AB0A]/60 hover:text-[#F7AB0A] bg-[#242424]"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
