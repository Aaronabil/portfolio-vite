import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
// import ThreeScene from '@/components/three/ThreeScene';
import SplitText from '@/components/reactbits/SplitText';
// import DecryptedText from '@/components/reactbits/DecryptedText';
// import ScrollVelocity from '@/components/reactbits/ScrollVelocity';
import Magnet from '@/components/reactbits/Magnet';
// import SplashCursor from '@/components/reactbits/SplashCursor';
// import TiltedCard from '@/components/reactbits/TiltedCard';
// import Aurora from '@/components/reactbits/Aurora';
// import LiquidChrome from '@/components/reactbits/LiquidChrome';
import Squares from '@/components/reactbits/Squares';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

// Import Shared Components
import PageTransition from '@/components/shared/PageTransition';
import SectionContainer from '@/components/shared/SectionContainer';
// import Lanyard from '@/components/reactbits/Lanyard/Lanyard';
import { InteractiveHoverButton } from "@/components/magicui/Interactivebutton";
import { ShimmerButton } from "@/components/magicui/Shimmerbutton";
import ModelViewer from '@/components/reactbits/ModelViewer';
// import CurvedLoop from '@/components/reactbits/CurverdLoop';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const HomePage = () => {
  return (
    <PageTransition>
      {/* <SplashCursor /> */}
      <div className="relative overflow-hidden">
        {/* Hero Section with 3D Model */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-10">
            <Squares
              speed={0.5}
              squareSize={30}
              direction='down' // up, down, left, right, diagonal
              borderColor='#38B2AC'
              hoverFillColor='#fff'
            />
          </div>

          <div className="container-custom relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="mb-6 text-white">
                <span className="block text-lg font-medium text-primary-400 mb-2">Hi There, I'm   Muhamad Nabil Faiz👋</span>
                <SplitText
                  text="Frontend Developer"
                  className="mb-2 text-white"
                  delay={50}
                  duration={2}
                  ease="elastic.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
                <SplitText
                  text="Design × Security"
                  className="block text-secondary-400 mt-0"
                  delay={50}
                  duration={2}
                  ease="elastic.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Creating beautiful, secure, and intuitive digital experiences that blend creativity with technical innovation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/projects">
                  <ShimmerButton className="shadow-2xl w-fit px-5 py-1">
                    <span className="whitespace-pre-wrap text-center text-sm  leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      View Projects
                    </span>
                  </ShimmerButton>
                </Link>
                <Magnet padding={50} disabled={false} magnetStrength={5}>
                  <Link to="/contact" className="btn btn-outline rounded-full">
                    Get in Touch
                  </Link>
                </Magnet>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="animate-bounce"
            >
              <p className="text-sm text-gray-400 flex items-center">
                Scroll to explore <ArrowRight className="ml-2 h-4 w-4 rotate-90" />
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <SectionContainer id="overview" className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-8 hover:scale-105"
            >
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 225, 255, 0.2)">
                <Code className="h-8 w-8 text-primary-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
                <p>Building responsive, accessible, and performant web applications using modern frameworks and best practices.</p>
                <Link to="/projects" className="mt-4 inline-flex items-center text-primary-400 hover:text-primary-300">
                  See projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 hover:scale-105"
            >
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 225, 255, 0.2)">
                <Palette className="h-8 w-8 text-secondary-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                <p>Creating intuitive and aesthetically pleasing user interfaces with a focus on the overall user experience.</p>
                <Link to="/design" className="mt-4 inline-flex items-center text-secondary-400 hover:text-secondary-300">
                  View designs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-8 hover:scale-105"
            >
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 225, 255, 0.2)">
                <Shield className="h-8 w-8 text-accent-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Cybersecurity</h3>
                <p>Implementing security best practices and protocols to create secure and resilient web applications.</p>
                <Link to="/cybersecurity" className="mt-4 inline-flex items-center text-accent-400 hover:text-accent-300">
                  Explore insights <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </SpotlightCard>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Featured Project Section */}
        <SectionContainer id="featured" className="py-24 bg-dark-300">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 overflow-x-auto mt-2">
            <div className="flex-1 flex items-center justify-center md:justify-start mb-10 md:mb-0 relative z-20">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_2px_16px_rgba(255,255,255,0.8)] text-center md:text-left relative z-30">
                So Cool Right.
              </h2>
            </div>
            <div className="flex-1 flex items-center justify-center relative z-10 max-w-full">
              <div className="w-full max-w-[700px] h-auto flex items-center justify-center relative overflow-hidden">
                <ModelViewer
                  url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
                  width={800}
                  height={500}
                  autoRotate={true}
                  enableMouseParallax={false}
                  fadeIn={true}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#181925] to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#181925] to-transparent"></div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#181925] to-transparent"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#181925] to-transparent"></div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Call to Action */}
        <SectionContainer id="cta" className="py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">Interested in working together?</h2>
            <p className="text-xl mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/contact">
              <InteractiveHoverButton>
                Lets Connect
              </InteractiveHoverButton>
            </Link>
          </motion.div>
        </SectionContainer>
      </div>
    </PageTransition>
  );
};

export default HomePage;