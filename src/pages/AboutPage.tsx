import { motion } from 'framer-motion';
import { Code, Palette, Shield, Cpu, Globe, Server } from 'lucide-react';
import PageTransition from '../components/shared/PageTransition';
import SectionContainer from '../components/shared/SectionContainer';

const skills = [
  { name: 'Bootstrap', level: 90, category: 'Frontend' },
  { name: 'Tailwind', level: 85, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'React', level: 50, category: 'Frontend' },
  { name: 'UX Design', level: 85, category: 'Design' },
  { name: 'Figma', level: 65, category: 'Design' },
  { name: 'Canva', level: 95, category: 'Design' },
  { name: 'Security Auditing', level: 70, category: 'Security' },
  { name: 'OWASP', level: 75, category: 'Security' },
  { name: 'Node.js', level: 70, category: 'Backend' },
  { name: 'PHP', level: 90, category: 'Backend' },
];

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section */}
        <SectionContainer id="about-hero" className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                About Me
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
                <img 
                  src="images/masmulet.jpg" 
                  alt="Muhamad Nabil Faiz Amrullah" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 bg-dark-300 border border-dark-200 rounded-lg">
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
          <div className="mb-12">
            <h2 className="section-heading">Skills & Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Technical Proficiencies</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-400 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          skill.category === 'Frontend' ? 'bg-primary-500' : 
                          skill.category === 'Design' ? 'bg-secondary-500' : 
                          skill.category === 'Security' ? 'bg-accent-500' : 
                          'bg-green-500'
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Areas of Focus</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <Code className="h-8 w-8 text-primary-400 mb-4" />
                  <h4 className="text-lg font-bold mb-2">Frontend Development</h4>
                  <p className="text-sm text-gray-400">
                    Building responsive, accessible web applications with modern frameworks and performance optimization.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <Palette className="h-8 w-8 text-secondary-400 mb-4" />
                  <h4 className="text-lg font-bold mb-2">UI/UX Design</h4>
                  <p className="text-sm text-gray-400">
                    Creating intuitive, aesthetically pleasing interfaces with a focus on user experience and accessibility.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <Shield className="h-8 w-8 text-accent-400 mb-4" />
                  <h4 className="text-lg font-bold mb-2">Cybersecurity</h4>
                  <p className="text-sm text-gray-400">
                    Implementing security best practices, conducting security audits, and mitigating vulnerabilities.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <Cpu className="h-8 w-8 text-green-400 mb-4" />
                  <h4 className="text-lg font-bold mb-2">Performance Optimization</h4>
                  <p className="text-sm text-gray-400">
                    Analyzing and improving application performance, reducing load times, and enhancing user experience.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </SectionContainer>
        
        {/* Experience Section */}
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
              <p className="text-gray-400 mb-2">SMPN 2 KUNIGAN, Kuningan</p>
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