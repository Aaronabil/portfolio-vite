import { motion } from 'framer-motion';
import { ArrowRight, Code, Shield, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeScene from '../components/three/ThreeScene';

// Import Shared Components
import PageTransition from '../components/shared/PageTransition';
import SectionContainer from '../components/shared/SectionContainer';

const HomePage = () => {
  return (
    <PageTransition>
      <div className="relative overflow-hidden">
        {/* Hero Section with 3D Model */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-10">
            <ThreeScene />
          </div>
          
          <div className="container-custom relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="mb-6 text-white">
                <span className="block text-lg font-medium text-primary-400 mb-2">Hi There, I'm   Muhamad Nabil Faiz Amrullah👋</span>
                Frontend Developer
                <span className="block text-secondary-400 mt-1">Design × Security👨‍💻</span>
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Creating beautiful, secure, and intuitive digital experiences that blend creativity with technical innovation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/projects" className="btn btn-primary">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
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
              <Code className="h-8 w-8 text-primary-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
              <p>Building responsive, accessible, and performant web applications using modern frameworks and best practices.</p>
              <Link to="/projects" className="mt-4 inline-flex items-center text-primary-400 hover:text-primary-300">
                See projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 hover:scale-105"
            >
              <Palette className="h-8 w-8 text-secondary-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p>Creating intuitive and aesthetically pleasing user interfaces with a focus on the overall user experience.</p>
              <Link to="/design" className="mt-4 inline-flex items-center text-secondary-400 hover:text-secondary-300">
                View designs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-8 hover:scale-105"
            >
              <Shield className="h-8 w-8 text-accent-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Cybersecurity</h3>
              <p>Implementing security best practices and protocols to create secure and resilient web applications.</p>
              <Link to="/cybersecurity" className="mt-4 inline-flex items-center text-accent-400 hover:text-accent-300">
                Explore insights <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </SectionContainer>
        
        {/* Featured Project Section */}
        <SectionContainer id="featured" className="py-24 bg-dark-300">
          <div className="mb-12">
            <h2 className="section-heading">Featured Project</h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 bg-dark-200 text-primary-400 rounded-full text-sm mb-4">
                Frontend Development & Security
              </span>
              <h3 className="text-2xl font-bold mb-4">SecureBank App Interface</h3>
              <p className="mb-6">
                A complete redesign of a banking application with a focus on security, usability, and modern design principles. The project involved extensive user research, security auditing, and implementation of best practices.
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                <li className="px-3 py-1 bg-dark-200 rounded-full text-sm">React</li>
                <li className="px-3 py-1 bg-dark-200 rounded-full text-sm">TypeScript</li>
                <li className="px-3 py-1 bg-dark-200 rounded-full text-sm">Tailwind CSS</li>
                <li className="px-3 py-1 bg-dark-200 rounded-full text-sm">Security Audit</li>
              </ul>
              <Link to="/projects" className="btn btn-primary">
                View Project Details
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden border border-dark-100 animate-glow">
                <img 
                  src="https://images.pexels.com/photos/6347708/pexels-photo-6347708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="SecureBank App Interface" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
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
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-3">
              Let's Connect
            </Link>
          </motion.div>
        </SectionContainer>
      </div>
    </PageTransition>
  );
};

export default HomePage;