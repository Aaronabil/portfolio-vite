import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import PageTransition from '../components/shared/PageTransition';
import SectionContainer from '../components/shared/SectionContainer';

// Project data
const projects = [
  {
    id: 1,
    title: "SecureBank App Interface",
    description: "A complete redesign of a banking application with a focus on security, usability, and modern design principles.",
    image: "https://images.pexels.com/photos/6347708/pexels-photo-6347708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
    github: "#",
    categories: ["design", "security"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Security Audit"]
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce store owners featuring analytics, inventory management, and order processing.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
    github: "#",
    categories: ["frontend", "design"],
    technologies: ["Next.js", "TypeScript", "Chakra UI", "Chart.js"]
  },
  {
    id: 3,
    title: "Crypto Security Scanner",
    description: "A tool for analyzing smart contracts and cryptocurrency wallets for potential security vulnerabilities.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
    github: "#",
    categories: ["security", "frontend"],
    technologies: ["React", "Node.js", "Blockchain APIs", "Ethers.js"]
  },
  {
    id: 4,
    title: "Social Media UI Kit",
    description: "A comprehensive UI kit for social media applications with over 100 components and design patterns.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
    github: "#",
    categories: ["design"],
    technologies: ["Figma", "React", "Storybook", "Styled Components"]
  },
  {
    id: 5,
    title: "Secure File Transfer App",
    description: "An end-to-end encrypted file transfer application with a focus on privacy and security.",
    image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
    github: "#",
    categories: ["security", "frontend"],
    technologies: ["React", "TypeScript", "Electron", "Encryption"]
  },
  {
    id: 6,
    title: "Health Dashboard",
    description: "A health monitoring dashboard for patients and healthcare providers with real-time data visualization.",
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
    github: "#",
    categories: ["frontend", "design"],
    technologies: ["React", "D3.js", "Firebase", "Tailwind CSS"]
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));
  
  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Design', value: 'design' },
    { label: 'Security', value: 'security' }
  ];

  return (
    <PageTransition>
      <div className="pt-16">
        {/* Header */}
        <SectionContainer id="projects-header" className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-6">Projects</h1>
            <p className="text-xl mb-12">
              A collection of my work across frontend development, design, and cybersecurity. Each project showcases different skills and approaches to problem-solving.
            </p>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    filter === category.value 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-dark-300 text-gray-300 hover:bg-dark-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>
        </SectionContainer>
        
        {/* Projects Grid */}
        <SectionContainer id="projects-grid" className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-dark-400 hover:bg-dark-300 text-white p-2 rounded-full transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.categories.map(category => (
                      <span 
                        key={category} 
                        className={`text-xs px-2 py-1 rounded-full ${
                          category === 'frontend' ? 'bg-primary-900 text-primary-300' :
                          category === 'design' ? 'bg-secondary-900 text-secondary-300' :
                          'bg-accent-900 text-accent-300'
                        }`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-dark-200 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
        
        {/* Call to Action */}
        <SectionContainer id="projects-cta" className="py-20 bg-dark-300">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Want to see more?</h2>
            <p className="text-xl mb-8">
              Check out my GitHub for additional projects, contributions, and code samples.
            </p>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline inline-flex items-center"
            >
              <Github className="mr-2 h-5 w-5" />
              Visit GitHub Profile
            </a>
          </motion.div>
        </SectionContainer>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;