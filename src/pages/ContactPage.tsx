import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, CheckCircle } from 'lucide-react';
import PageTransition from '../components/shared/PageTransition';
import SectionContainer from '../components/shared/SectionContainer';
import Lanyard from '../components/reactbits/Lanyard/Lanyard';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="pt-16">
        {/* Header */}
        <SectionContainer id="contact-header" className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl mb-12">
              Have a project in mind or want to discuss potential collaboration? I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>
          </motion.div>
        </SectionContainer>
        
        {/* Contact Methods */}
        <SectionContainer id="contact-options" className="pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400 mb-4">For project inquiries and general questions</p>
              <a href="mailto:nabilmuhamad630@gmail.com" className="text-primary-400 hover:text-primary-300">
                nabilmuhamad630@gmail.com
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-secondary-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-400 mb-4">For urgent matters and scheduled calls</p>
              <a href="tel:+628889465561" className="text-secondary-400 hover:text-secondary-300">
                +62 888-9465-561
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-accent-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-accent-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-400 mb-4">Tangerang, Banten</p>
              <p className="text-accent-400">
                Available for remote work worldwide
              </p>
            </motion.div>
          </div>
          
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Connect on Social Media</h2>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://linkedin.com/in/muhamad-nabil-faiz-amrullah-66b90626b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-300 hover:bg-dark-200 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-400" />
              </a>
              <a 
                href="https://github.com/Aaronabil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-300 hover:bg-dark-200 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-400" />
              </a>
              <a 
                href="https://instagram.com/abilvett" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-300 hover:bg-dark-200 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Instagram className="h-5 w-5 text-gray-400" />
              </a>
            </div>
          </div>
        </SectionContainer>
        
        {/* Contact Form */}
        <SectionContainer id="contact-form" className="py-24 bg-dark-300 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="absolute top-0 right-[25%] w-full h-full z-10 overflow-visible">
              <Lanyard position={[0, 0, 10]} gravity={[0, -25, 0]} />
            </div>
            <div className="col-start-2 relative">
              <div className="mb-8">
                <h2 className="section-heading bg">Send a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-dark-200 border border-dark-100 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-dark-200 border border-dark-100 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-dark-200 border border-dark-100 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Collaboration">Collaboration Opportunity</option>
                    <option value="Security Assessment">Security Assessment</option>
                    <option value="Design Services">Design Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-md bg-dark-200 border border-dark-100 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary w-full flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </button>
                  
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-3 bg-success-900 text-success-100 rounded-md flex items-center"
                    >
                      <CheckCircle className="h-5 w-5 mr-2 text-success-500" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </SectionContainer>
      </div>
    </PageTransition>
  );
};

export default ContactPage;