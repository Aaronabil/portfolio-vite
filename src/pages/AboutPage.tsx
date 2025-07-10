import { motion } from 'framer-motion';
import React, { forwardRef, useRef } from "react";
import { VscVscode } from "react-icons/vsc";
import { SiNotion, SiBrave, SiSpotify, SiDiscord, SiLaragon, SiGooglegemini } from "react-icons/si";
import PageTransition from '@/components/shared/PageTransition';
import SectionContainer from '@/components/shared/SectionContainer';
import PixelTransition from '@/components/reactbits/PixelTransition';
import TrueFocus from '@/components/reactbits/TrueFocus';
import { Marquee } from "@/components/magicui/Marquee";
import { AnimatedBeam } from "@/components/magicui/Animatedbeam";
import { cn } from "@/lib/utils";

// Skill badges data
const skills = [
  // ... data skills Anda tetap sama
  { name: 'Bootstrap', color: '#7952B3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Tailwind', color: '#38BDF8', img: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'HTML', color: '#E44D26', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', color: '#1572B6', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'React', color: '#61DAFB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', color: '#3C873A', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'PHP', color: '#777BB4', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'CodeIgniter', color: '#777BB4', img: 'https://cdn.worldvectorlogo.com/logos/codeigniter.svg' },
  { name: 'Linux', color: '#777BB4', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
  { name: 'Javascript', color: '#777BB4', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'MySQL', color: '#777BB4', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'Github', color: '#777BB4', img: 'https://img.icons8.com/ios11/512/FFFFFF/github.png' },
  { name: 'Laravel', color: '#777BB4', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg' },
  { name: 'Python', color: '#777BB4', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'Typescript', color: '#777BB4', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
  { name: 'Vite', color: '#777BB4', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg' },
];

const SkillBadge = ({ name, img }: { name: string; img: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-900 bg-white/80 dark:bg-dark-500 shadow text-dark-500 dark:text-white text-base font-medium mr-3 mb-3">
    <img src={img} alt={name} width={22} height={22} />
    <span>{name}</span>
  </div>
);

// Komponen untuk lingkaran ikon yang akan dihubungkan oleh beam
const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white text-black shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const left1Ref = useRef<HTMLDivElement>(null);
  const left2Ref = useRef<HTMLDivElement>(null);
  const left3Ref = useRef<HTMLDivElement>(null);
  const right1Ref = useRef<HTMLDivElement>(null);
  const right2Ref = useRef<HTMLDivElement>(null);
  const right3Ref = useRef<HTMLDivElement>(null);

  return (
    <PageTransition>
      <div className="pt-16">
        {/* ... Hero Section Anda tidak berubah ... */}
        <SectionContainer id="about-hero" className="py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 text-6xl font-extrabold"
                >
                  <TrueFocus
                    sentence="About Me"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="text-primary-400"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                    className="text-inherit"
                  />
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl mb-6"
                >
                  I'm a frontend developer with a passion for creating beautiful, functional, and secure digital experiences.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-4"
                >
                  With over 4 years of experience building web applications, I specialize in creating responsive interfaces that are not only visually appealing but also secure and performant. I blend my expertise in UI/UX design with cybersecurity knowledge to build solutions that look great and protect user data.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  I love to create something simple and clean. I consider myself to be detail-oriented, hardworking and willing to learn every step of the way. I like work with new people, new people new experience.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-96 rounded-lg overflow-hidden border border-primary-800 animate-glow">
                  <PixelTransition
                    firstContent={
                      <img
                        src="https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/guaa.jpg"
                        alt="Muhamad Nabil"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        className="w-full h-full object-cover [object-position:50%_45%]"
                      />
                    }
                    secondContent={
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "grid",
                          placeItems: "center",
                          backgroundColor: "#111"
                        }}
                      >
                        <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Hover Me!</p>
                      </div>
                    }
                    gridSize={20}
                    pixelColor='#ffffff'
                    animationStepDuration={0.6}
                    className="custom-pixel-card"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 p-4 bg-dark-300 border border-dark-200 rounded-lg z-50">
                  <p className="text-primary-400 font-mono">
                    <span className="text-gray-400">function</span> createExperience() {'{'}
                    <br />
                    &nbsp;&nbsp;<span className="text-gray-400">return</span> [<span className="text-secondary-400">'design'</span>, <span className="text-secondary-400">'code'</span>, <span className="text-secondary-400">'security'</span>];
                    <br />
                    {'}'}
                  </p>
                </div>
              </motion.div>
            </div>
          </SectionContainer>


        {/* Skills Section */}
        <SectionContainer id="skills" className="py-24 bg-dark-300">
            <h2 className="section-heading">Skills & Expertise</h2>
            <div className="relative overflow-hidden mb-12">
              <Marquee pauseOnHover className="[--duration:35s] flex gap-4">
                {skills.map((skill, idx) => (
                  <SkillBadge key={skill.name + idx} name={skill.name} img={skill.img} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:35s] flex gap-4">
                {skills.map((skill, idx) => (
                  <SkillBadge key={skill.name + idx} name={skill.name} img={skill.img} />
                ))}
              </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#181925] to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#181925] to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-6">Connecting Technologies</h3>
              <p className="text-gray-400">
                I connect various technologies to create integrated and efficient solutions. This visualization shows how different aspects of my skills are interconnected, with my core development expertise at the center.
              </p>
            </div>
            {/* Bagian 'lol' diganti dengan ini */}
            <div
              className="relative flex h-72 w-full items-center justify-center p-4"
              ref={containerRef}
            >
              {/* Nodes Kiri */}
              <div className="absolute left-4 md:left-12 flex flex-col gap-y-16">
                <Circle ref={left1Ref}><SiNotion className='h-8 w-8'/></Circle>
                <Circle ref={left2Ref}><SiSpotify className='h-8 w-8'/></Circle>
                <Circle ref={left3Ref}><SiDiscord className='h-8 w-8' /></Circle>
              </div>

              {/* Node Tengah */}
              <Circle ref={centerRef} className="h-20 w-20 border-4"><VscVscode className='h-10 w-10'/></Circle>
              
              {/* Nodes Kanan */}
              <div className="absolute right-4 md:right-12 flex flex-col gap-y-16">
                <Circle ref={right1Ref}><SiGooglegemini className='h-8 w-8'/></Circle>
                <Circle ref={right2Ref}><SiBrave className='h-8 w-8'/></Circle>
                <Circle ref={right3Ref}><SiLaragon className='h-8 w-8'/></Circle>
              </div>

              {/* Animated Beams */}
              <AnimatedBeam containerRef={containerRef} fromRef={left1Ref} toRef={centerRef} duration={3} />
              <AnimatedBeam containerRef={containerRef} fromRef={left2Ref} toRef={centerRef} duration={4} />
              <AnimatedBeam containerRef={containerRef} fromRef={left3Ref} toRef={centerRef} duration={5} />
              <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={right1Ref} duration={3} />
              <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={right2Ref} duration={4} />
              <AnimatedBeam containerRef={containerRef} fromRef={centerRef} toRef={right3Ref} duration={5} />
            </div>
            {/* Akhir dari bagian pengganti */}
          </div>
        </SectionContainer>

        {/* ... Experience Section Anda tidak berubah ... */}
        <SectionContainer id="experience" className="py-24">
           <div className="mb-12">
             <h2 className="section-heading">Professional Experience</h2>
           </div>
 
           <div className="space-y-12">
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="relative pl-8 border-l-2 border-accent-700"
             >
               <div className="absolute -left-2.5 top-0">
                 <div className="w-5 h-5 bg-accent-500 rounded-full"></div>
               </div>
               <div className="mb-2">
                 <span className="inline-block px-3 py-1 bg-dark-300 text-accent-400 rounded-full text-sm">
                   2025
                 </span>
               </div>
               <h3 className="text-xl font-bold mb-2">Cyber Security</h3>
               <p className="text-gray-400 mb-2">IDN Networks, Jakarta</p>
               <p className="mb-4">
                 Bootcamp participation.
               </p>
               <ul className="flex flex-wrap gap-2">
                 <li className="px-3 py-1 bg-dark-300 rounded-full text-sm">Wireshark</li>
                 <li className="px-3 py-1 bg-dark-300 rounded-full text-sm">Nmap</li>
               </ul>
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="relative pl-8 border-l-2 border-primary-700"
             >
               <div className="absolute -left-2.5 top-0">
                 <div className="w-5 h-5 bg-primary-500 rounded-full"></div>
               </div>
               <div className="mb-2">
                 <span className="inline-block px-3 py-1 bg-dark-300 text-primary-400 rounded-full text-sm">
                   2023
                 </span>
               </div>
               <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
               <p className="text-gray-400 mb-2">SMPN 2 KUNINGAN, Kuningan</p>
               <p className="mb-4">
                 Lead frontend development for library applications, with a focus on security-conscious UI/UX design and implementation.
               </p>
               <ul className="flex flex-wrap gap-2">
                 <li className="px-3 py-1 bg-dark-300 rounded-full text-sm">CodeIgniter</li>
                 <li className="px-3 py-1 bg-dark-300 rounded-full text-sm">PHP</li>
                 <li className="px-3 py-1 bg-dark-300 rounded-full text-sm">Bootstrap</li>
                 <li className="px-3 py-1 bg-dark-300 rounded-full text-sm">Security Auditing</li>
               </ul>
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="relative pl-8 border-l-2 border-secondary-700"
             >
               <div className="absolute -left-2.5 top-0">
                 <div className="w-5 h-5 bg-secondary-500 rounded-full"></div>
               </div>
               <div className="mb-2">
                 <span className="inline-block px-3 py-1 bg-dark-300 text-secondary-400 rounded-full text-sm">
                   2023
                 </span>
               </div>
               <h3 className="text-xl font-bold mb-2">Programmer</h3>
               <p className="text-gray-400 mb-2">MySkill, Jakarta</p>
               <p className="mb-4">
                 Create desktop based applications.
               </p>
               <ul className="flex flex-wrap gap-2">
                 <li className="px-3 py-1 bg-dark-300 rounded-full text-sm">Java</li>
               </ul>
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="relative pl-8 border-l-2 border-accent-700"
             >
               <div className="absolute -left-2.5 top-0">
                 <div className="w-5 h-5 bg-accent-500 rounded-full"></div>
               </div>
               <div className="mb-2">
                 <span className="inline-block px-3 py-1 bg-dark-300 text-accent-400 rounded-full text-sm">
                   2020
                 </span>
               </div>
               <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
               <p className="text-gray-400 mb-2">PT. Sigma Cipta Caraka (Telkomsigma), Jakarta</p>
               <p className="mb-4">
                 Developed app user interface.
               </p>
               <ul className="flex flex-wrap gap-2">
                 <li className="px-3 py-1 bg-dark-300 rounded-full text-sm">HTML</li>
                 <li className="px-3 py-1 bg-dark-300 rounded-full text-sm">CSS</li>
                 <li className="px-3 py-1 bg-dark-300 rounded-full text-sm">Javascript</li>
               </ul>
             </motion.div>
           </div>
         </SectionContainer>
      </div>
    </PageTransition>
  );
};

export default AboutPage;