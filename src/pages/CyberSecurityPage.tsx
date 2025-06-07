import { motion } from 'framer-motion';
import { Shield, Lock, GlobeLock, CheckCircle, ClipboardMinus, FileCode, Construction, ShieldAlert, LockKeyhole, Wrench } from 'lucide-react';
import PageTransition from '../components/shared/PageTransition';
import SectionContainer from '../components/shared/SectionContainer';
import ScrollVelocity from '../components/reactbits/ScrollVelocity';
import Magnet from '../components/reactbits/Magnet';
import { useState } from 'react';

const securityPosts = [
  {
    id: 1,
    title: "Roadmap 5 Tahun Menjadi Penetration Tester Andal (2025–2030).",
    excerpt: "Di artikel ini, aku bakal ngajak kalian ngelihat bareng-bareng gimana sih langkah-langkah jadi seorang Penetration Tester alias Ethical Hacker dalam waktu lima tahun ke depan.",
    icon: <Construction className="h-8 w-8 text-accent-400" />,
    readTime: "3 min read",
    date: "May 28, 2025",
    link: "https://medium.com/@nabilmuhamad630/roadmap-5-tahun-menjadi-penetration-tester-andal-2025-2030-9e8c9b7e4157"
  },
  {
    id: 2,
    title: "Belajar Jaringan dari Nol: Routing & IP Dasar Pakai Cisco Packet Tracer.",
    excerpt: "Di artikel ini, aku bakal ngajak kalian belajar bareng tentang dasar-dasar jaringan komputer — mulai dari bikin topologi, ngatur IP, sampai nyoba routing dasar pakai Cisco Packet Tracer.",
    icon: <GlobeLock className="h-8 w-8 text-accent-400" />,
    readTime: "3 min read",
    date: "May 28, 2025",
    link: "https://medium.com/@nabilmuhamad630/belajar-jaringan-dari-nol-routing-ip-dasar-pakai-cisco-packet-tracer-7e15efc94fa4"
  },
  {
    id: 3,
    title: "Laporan Insiden Keamanan: Deteksi dan Analisis Awal Infeksi Malware Win32/Koi Stealer.",
    excerpt: "Di artikel ini, aku bakal ngajak kalian ngelihat bareng-bareng gimana sih proses analisis insiden malware itu dilakukan di dunia nyata, khususnya saat menghadapi infeksi malware Win32/Koi Stealer, sebuah jenis malware pencuri informasi alias info stealer.",
    icon: <ShieldAlert className="h-8 w-8 text-accent-400" />,
    readTime: "7 min read",
    date: "June 1, 2025",
    link: "https://medium.com/@nabilmuhamad630/deteksi-dan-analisis-awal-infeksi-malware-win32-koi-stealer-a70f20dad0db"
  },
  {
    id: 4,
    title: "Keamanan Sistem ICS/SCADA: Kenapa Penting & Apa Saja Tantangannya?.",
    excerpt: "Di artikel ini, aku bakal ngajak kalian ngelihat bareng-bareng gimana sih pentingnya menjaga keamanan sistem ICS/SCADA — sistem yang jadi “otak” dan “jantung” berbagai infrastruktur penting kayak listrik, air, dan industri.",
    icon: <FileCode className="h-8 w-8 text-accent-400" />,
    readTime: "3 min read",
    date: "June 3, 2025",
    link: "https://medium.com/@nabilmuhamad630/keamanan-sistem-ics-scada-kenapa-penting-apa-saja-tantangannya-9511a162048e"
  },
  {
    id: 5,
    title: "Analisis Mendalam Keamanan Sistem ICS atau SCADA.",
    excerpt: "Ini adalah analisis mendalam tentang ICS/SCADA dan serangan yang ada pada ICS/SCADA.",
    icon: <ClipboardMinus className="h-8 w-8 text-accent-400" />,
    readTime: "20-30 min read",
    date: "June 3, 2025",
    link: "https://drive.google.com/file/d/18vtfc8yLixPElKBXlcqV8e2UrcTXDakD/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Mengamankan SSH Kali Linux dengan 2FA Google Authenticator.",
    excerpt: "Di artikel ini, aku bakal ngajak kalian belajar bareng tentang gimana caranya mengamankan akses SSH di Kali Linux dengan sistem autentikasi dua faktor (2FA) menggunakan Google Authenticator.",
    icon: <LockKeyhole className="h-8 w-8 text-accent-400" />,
    readTime: "2 min read",
    date: "June 5, 2025",
    link: "https://medium.com/@nabilmuhamad630/mengamankan-ssh-kali-linux-dengan-2fa-google-authenticator-9ece09449c8c"
  },
  {
    id: 7,
    title: "Tools Brute Force Custom HTTP Header.",
    excerpt: "Simulasi brute force terhadap custom HTTP header — berguna untuk edukasi keamanan API dan pengujian keamanan berbasis token. Cocok untuk memahami risiko apabila developer menyimpan otentikasi dalam header tanpa validasi ketat.",
    icon: <Wrench className="h-8 w-8 text-accent-400" />,
    readTime: "",
    date: "June 7, 2025",
    link: "https://github.com/Aaronabil/header-brute-force-simulator"
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
  const [showAllPosts, setShowAllPosts] = useState(false);

  const visiblePosts = showAllPosts ? securityPosts : securityPosts.slice(0, 4);

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
            <h1>
              <ScrollVelocity
                texts={['Cybersecurity', 'Insights']} 
                velocity={100} 
                className="custom-scroll-text mb-2"
              />
            </h1>
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
            {visiblePosts.map((post, index) => (
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
                    <a href={post.link} target="_blank" className="text-accent-400 hover:text-accent-300 inline-flex items-center">
                      Read more <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAllPosts && (
            <div className="text-center mt-12">
              <Magnet padding={50} disabled={false} magnetStrength={5}>
                <button
                  onClick={() => setShowAllPosts(true)}
                  className="btn btn-outline text-accent-400 border-accent-400 hover:bg-accent-400 hover:text-white">
                  Show More
                </button>
              </Magnet>
            </div>
          )}
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