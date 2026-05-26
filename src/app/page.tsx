import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";

// Dynamically import off-screen/heavy components to optimize initial bundle size and Core Web Vitals (LCP/FID)
const About = dynamic(() => import("../../Components/About"));
const Skills = dynamic(() => import("../../Components/Skills"));
const Projects = dynamic(() => import("../../Components/Projects"));
const ContactMe = dynamic(() => import("../../Components/ContactMe"));

export const metadata: Metadata = {
  title: "Nilesh Kumawat | Expert Full Stack, Frontend & Next.js Developer Portfolio",
  description: "Explore the professional portfolio of Nilesh Kumawat, a skilled Full Stack Developer, MERN Stack Developer, Frontend Developer, and Freelance Web Developer specializing in high-performance Next.js, React, and TypeScript applications.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Freelance Web Developer",
    "TypeScript Developer",
    "Nilesh Kumawat",
    "Portfolio",
    "Web Developer Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Nilesh Kumawat" }],
  creator: "Nilesh Kumawat",
  metadataBase: new URL("https://nileshkumawat.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nilesh Kumawat | Expert Full Stack, Frontend & Next.js Developer Portfolio",
    description: "Explore the professional portfolio of Nilesh Kumawat, a skilled Full Stack Developer, MERN Stack Developer, Frontend Developer, and Freelance Web Developer specializing in high-performance Next.js, React, and TypeScript applications.",
    url: "https://nileshkumawat.dev",
    siteName: "Nilesh Kumawat Portfolio",
    images: [
      {
        url: "https://nileshkumawat.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nilesh Kumawat - Full Stack & Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilesh Kumawat | Expert Full Stack, Frontend & Next.js Developer Portfolio",
    description: "Explore the professional portfolio of Nilesh Kumawat, a skilled Full Stack Developer, MERN Stack Developer, Frontend Developer, and Freelance Web Developer specializing in high-performance Next.js, React, and TypeScript applications.",
    images: ["https://nileshkumawat.dev/og-image.png"],
    creator: "@nilesh_kumawat",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nilesh Kumawat",
  "jobTitle": "Full Stack & Frontend Developer",
  "url": "https://nileshkumawat.dev",
  "sameAs": [
    "https://github.com/nilesh-kumawat",
    "https://linkedin.com/in/nilesh-kumawat",
    "https://twitter.com/nilesh_kumawat"
  ],
  "knowsAbout": [
    "Full Stack Development",
    "MERN Stack Development",
    "Next.js Development",
    "React Development",
    "Frontend Development",
    "TypeScript Development",
    "Freelance Web Development"
  ]
};

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {/* Structured data injection for Search Engine crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        <section id="Hero" className="snap-center">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="Skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>
        
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}
