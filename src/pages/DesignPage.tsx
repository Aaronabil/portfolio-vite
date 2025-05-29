import { motion } from 'framer-motion';
import { Layout, Smartphone, Monitor, Figma } from 'lucide-react';
import PageTransition from '../components/shared/PageTransition';
import SectionContainer from '../components/shared/SectionContainer';
import TiltedCard from '../components/reactbits/TiltedCard';
import ScrollVelocity from '../components/reactbits/ScrollVelocity';

const designProjects = [
  {
    id: 1,
    title: "Album Cover",
    description: "Photos for music albums.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/canva1.png",
    link: "#",
    figmaLink: "#",
    type: "Graphic Design"
  },
  {
    id: 2,
    title: "Stamps",
    description: "Gatau bingung mau isi apa.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/canva2.png",
    link: "#",
    figmaLink: "#",
    type: "Graphic Design"
  },
  {
    id: 3,
    title: "Album Music",
    description: "Photos for music albums.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/canva3.jpg",
    link: "#",
    figmaLink: "#",
    type: "Design System"
  },
  {
    id: 4,
    title: "Closing the year 2023",
    description: "A design to close the year 2023.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/canva4.jpg",
    link: "#",
    figmaLink: "#",
    type: "Graphic Design"
  },
  {
    id: 5,
    title: "Genshin Impact",
    description: "Genshin impact characters with double hydro and double anemo.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/canva5.jpg",
    link: "#",
    figmaLink: "#",
    type: "Graphic Design"
  },
  {
    id: 6,
    title: "Logo Studio",
    description: "A logo for a studio.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/canva6.jpg",
    link: "#",
    figmaLink: "#",
    type: "Graphic Design"
  },
  {
    id: 7,
    title: "Porsche",
    description: "A porsche 911 gtr car design for racing with the trex model.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/canva7.jpg",
    link: "#",
    figmaLink: "#",
    type: "Website Design"
  },
  {
    id: 8,
    title: "Genshin Impact",
    description: "A genshin impact character deskmat design.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/canva8.jpg",
    link: "#",
    figmaLink: "#",
    type: "Graphic Design"
  },
  {
    id: 9,
    title: "Genshin Impact",
    description: "A hydro archon character named furina.",
    image: "https://raw.githubusercontent.com/Aaronabil/Aaronabil.github.io/main/public/images/canva9.png",
    link: "#",
    figmaLink: "#",
    type: "Website Design"
  }
];

const designPrinciples = [
  {
    title: "User-Centered Design",
    description: "Putting the user at the center of every design decision, focusing on usability, accessibility, and meeting real user needs.",
    icon: <Layout className="h-8 w-8 text-secondary-400" />
  },
  {
    title: "Responsive Design",
    description: "Creating interfaces that work seamlessly across all devices and screen sizes, from mobile to desktop.",
    icon: <Smartphone className="h-8 w-8 text-secondary-400" />
  },
  {
    title: "Visual Hierarchy",
    description: "Organizing elements to guide users through the interface naturally, emphasizing important elements and actions.",
    icon: <Monitor className="h-8 w-8 text-secondary-400" />
  },
  {
    title: "Component-Based Design",
    description: "Building scalable design systems with reusable components for consistency and efficiency across projects.",
    icon: <Figma className="h-8 w-8 text-secondary-400" />
  }
];

const DesignPage = () => {
  return (
    <PageTransition>
      <div className="pt-16">
        {/* Header */}
        <SectionContainer id="design-header" className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1>
              <ScrollVelocity
                texts={['Design', 'Showcase']} 
                velocity={100} 
                className="custom-scroll-text mb-2"
              />
            </h1>
            <p className="text-xl mb-12">
              Exploring the intersection of aesthetics and functionality with design solutions that blend beauty, usability, and purpose.
            </p>
          </motion.div>
        </SectionContainer>
        
        {/* Design Principles */}
        <SectionContainer id="design-principles" className="py-24 bg-dark-300">
          <div className="mb-12">
            <h2 className="section-heading">Design Philosophy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-400 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
        
        {/* Featured Designs */}
        <SectionContainer id="featured-designs" className="py-24">
          <div className="mb-12">
            <h2 className="section-heading">Featured Design Work</h2>
          </div>
          
          <div className="space-y-24">
            {designProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <span className="inline-block px-3 py-1 bg-dark-200 text-secondary-400 rounded-full text-sm mb-4">
                    {project.type}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="mb-6 text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      View Case Study
                    </a>
                    <a 
                      href={project.figmaLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline inline-flex items-center"
                    >
                      <Figma className="mr-2 h-4 w-4" />
                      Figma File
                    </a>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    {/* <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    /> */}
                    <TiltedCard
                      imageSrc={project.image}
                      altText={project.title}
                      captionText={project.title}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={false}
                      rotateAmplitude={14}
                      scaleOnHover={1}
                    />
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
        
        {/* Design Process */}
        <SectionContainer id="design-process" className="py-24 bg-dark-300">
          <div className="mb-12">
            <h2 className="section-heading">Design Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="card p-8 pt-10">
                <h3 className="text-xl font-bold mb-4">Research & Discovery</h3>
                <p className="text-sm text-gray-400">
                  Understanding user needs, business goals, and technical constraints through research, interviews, and analysis.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    User research and interviews
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Competitive analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Requirements gathering
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="card p-8 pt-10">
                <h3 className="text-xl font-bold mb-4">Design & Ideation</h3>
                <p className="text-sm text-gray-400">
                  Translating insights into concrete design solutions, from wireframes and prototypes to final visual designs.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Wireframing and flows
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Visual design and UI components
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Interactive prototyping
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="card p-8 pt-10">
                <h3 className="text-xl font-bold mb-4">Testing & Iteration</h3>
                <p className="text-sm text-gray-400">
                  Validating designs through user testing and feedback, iterating to improve usability and effectiveness.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Usability testing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Feedback collection and analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                    Design refinement
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
      </div>
    </PageTransition>
  );
};

export default DesignPage;