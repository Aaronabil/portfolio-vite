import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, CheckCircle, Code, FileCode } from 'lucide-react';
import PageTransition from '../components/shared/PageTransition';
import SectionContainer from '../components/shared/SectionContainer';

const securityPosts = [
  {
    id: 1,
    title: "Common Frontend Security Vulnerabilities",
    excerpt: "Exploring the most common security vulnerabilities in frontend applications and how to mitigate them.",
    icon: <AlertTriangle className="h-8 w-8 text-accent-400" />,
    readTime: "8 min read",
    date: "June 15, 2023"
  },
  {
    id: 2,
    title: "Implementing Secure Authentication",
    excerpt: "Best practices for implementing secure authentication in web applications, from password handling to OAuth flows.",
    icon: <Lock className="h-8 w-8 text-accent-400" />,
    readTime: "12 min read",
    date: "August 22, 2023"
  },
  {
    id: 3,
    title: "XSS Prevention for React Developers",
    excerpt: "A comprehensive guide to understanding and preventing cross-site scripting (XSS) vulnerabilities in React applications.",
    icon: <Code className="h-8 w-8 text-accent-400" />,
    readTime: "10 min read",
    date: "October 5, 2023"
  },
  {
    id: 4,
    title: "Secure API Communication Patterns",
    excerpt: "Techniques and best practices for securing API communication in your frontend applications.",
    icon: <FileCode className="h-8 w-8 text-accent-400" />,
    readTime: "7 min read",
    date: "December 12, 2023"
  }
];

const securityPractices = [
  {
    title: "Input Validation",
    description: "Validate all user inputs on both client and server side to prevent injection attacks and ensure data integrity.",
    icon: <CheckCircle className="h-8 w-8 text-accent-400" />
  },
  {
    title: "Secure Authentication",
    description: "Implement secure authentication methods with proper password hashing, MFA, and protection against brute force attacks.",
    icon: <Lock className="h-8 w-8 text-accent-400" />
  },
  {
    title: "Content Security Policy",
    description: "Use Content Security Policy headers to control which resources can be loaded and executed on your web pages.",
    icon: <Shield className="h-8 w-8 text-accent-400" />
  },
  {
    title: "Secure Data Storage",
    description: "Store sensitive data securely, using encryption for sensitive information and secure storage solutions.",
    icon: <FileCode className="h-8 w-8 text-accent-400" />
  }
];

const CyberSecurityPage = () => {
  return (
    <PageTransition>
      <div className="pt-16">
        {/* Header */}
        <SectionContainer id="security-header" className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-6">Cybersecurity Insights</h1>
            <p className="text-xl mb-12">
              Exploring the intersection of frontend development and security, with insights and best practices for building secure web applications.
            </p>
          </motion.div>
        </SectionContainer>
        
        {/* Security Practices */}
        <SectionContainer id="security-practices" className="py-24 bg-dark-300">
          <div className="mb-12">
            <h2 className="section-heading">Security Best Practices</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">
                  {practice.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{practice.title}</h3>
                <p className="text-gray-400 text-sm">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
        
        {/* Security Framework */}
        <SectionContainer id="security-framework" className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-dark-200 text-accent-400 rounded-full text-sm mb-4">
                Security Framework
              </span>
              <h2 className="text-3xl font-bold mb-6">Secure by Design Approach</h2>
              <p className="mb-6">
                Building security into the development process from the beginning rather than treating it as an afterthought. This proactive approach ensures that security is an integral part of the application from its foundation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Threat Modeling</h3>
                    <p className="text-gray-400 text-sm">
                      Identifying potential threats and vulnerabilities before development begins.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Secure Coding Practices</h3>
                    <p className="text-gray-400 text-sm">
                      Following established secure coding standards to prevent common vulnerabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Security Testing</h3>
                    <p className="text-gray-400 text-sm">
                      Regular security testing throughout the development lifecycle, including static analysis and penetration testing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-400 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Continuous Monitoring</h3>
                    <p className="text-gray-400 text-sm">
                      Ongoing monitoring and response to security issues in production.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden border border-dark-100 animate-glow">
                <img 
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Cybersecurity Protection" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-dark-300 border border-dark-200 rounded-lg">
                <p className="text-accent-400 font-mono text-sm">
                  <span className="text-gray-400">if</span> (securityByDesign) &#123;<br />
                  &nbsp;&nbsp;<span className="text-gray-400">return</span> secureApplication;<br />
                  &#125;
                </p>
              </div>
            </motion.div>
          </div>
        </SectionContainer>
        
        {/* Security Insights/Blog Posts */}
        <SectionContainer id="security-insights" className="py-24 bg-dark-300">
          <div className="mb-12">
            <h2 className="section-heading">Security Insights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:bg-dark-200 transition-colors duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {post.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center mb-2 text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                    <a href="#" className="text-accent-400 hover:text-accent-300 inline-flex items-center">
                      Read more <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
        
        {/* CTA Section */}
        <SectionContainer id="security-cta" className="py-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Need a Security Assessment?</h2>
            <p className="text-xl mb-8">
              I offer security assessments for frontend applications, helping identify and address potential vulnerabilities before they become problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#" className="btn btn-outline">
                Learn More
              </a>
            </div>
          </motion.div>
        </SectionContainer>
      </div>
    </PageTransition>
  );
};

export default CyberSecurityPage;