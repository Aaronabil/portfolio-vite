import { motion } from 'framer-motion';
import { Shield, Lock, GlobeLock, CheckCircle, ClipboardMinus, FileCode, Construction, ShieldAlert, LockKeyhole, Wrench, Wallet, Bug, BugPlay, Worm, NotebookText } from 'lucide-react';
import PageTransition from '@/components/shared/PageTransition';
import SectionContainer from '@/components/shared/SectionContainer';
import ScrollVelocity from '@/components/reactbits/ScrollVelocity';
import Magnet from '@/components/reactbits/Magnet';
import { useState } from 'react';
import { Marquee } from "@/components/magicui/Marquee";

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
  },
  {
    id: 8,
    title: "ECC & Web3 Cryptography: Superpower Baru di Dunia Siber.",
    excerpt: "Di artikel ini, aku mau ajak kalian ngulik bareng soal dunia kriptografi yang makin seru — khususnya ECC (Elliptic Curve Cryptography) dan Web3 Cryptography.",
    icon: <Wallet className="h-8 w-8 text-accent-400" />,
    readTime: "3 min read",
    date: "June 9, 2025",
    link: "https://medium.com/@nabilmuhamad630/ecc-web3-cryptography-superpower-baru-di-dunia-siber-6be384163dfa"
  },
  {
    id: 9,
    title: "Web Aplication Penetration Test Report: DVWA.",
    excerpt: "Sebagai bagian dari perjalanan belajar saya di bootcamp cybersecurity ID-Networkers (IDN.ID), saya berkesempatan untuk melakukan uji penetrasi aplikasi web secara penuh.",
    icon: <Bug className="h-8 w-8 text-accent-400" />,
    readTime: "7 min read",
    date: "June 23, 2025",
    link: "hhttps://www.linkedin.com/posts/muhamad-nabil-faiz-amrullah_report-dvwa-activity-7343502600203378689-ve4Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIqCDMBqEpfj5ZxR7TNOB4LBfgErzERGZU"
  },
  {
    id: 10,
    title: "Security Assessment Report: DVAPI (Dockerized Vulnerable API).",
    excerpt: "Selanjutnya saya melakukan pengujian keamanan API (API Security Testing) dari ID-Networkers (IDN.ID). Laporan ini adalah hasil dari lab API Security Testing saya.",
    icon: <Bug className="h-8 w-8 text-accent-400" />,
    readTime: "10 min read",
    date: "June 25, 2025",
    link: "https://www.linkedin.com/posts/muhamad-nabil-faiz-amrullah_report-lab-api-security-testing-activity-7343873101207625728-M7s3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIqCDMBqEpfj5ZxR7TNOB4LBfgErzERGZU"
  },
  {
    id: 11,
    title: "Penetration Testing on Metasploitable2 Vulnerable VM.",
    excerpt: "Selanjutnya saya melakukan pengujian penetrasi (penetration testing) terhadap VM Metasploitable2 sebagai bagian dari tugas praktikum di program pelatihan dari ID-Networkers (IDN.ID).",
    icon: <Bug className="h-8 w-8 text-accent-400" />,
    readTime: "3 min read",
    date: "June 27, 2025",
    link: "https://www.linkedin.com/posts/muhamad-nabil-faiz-amrullah_report-metasploitable2-activity-7344582455086981122-3Xsy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIqCDMBqEpfj5ZxR7TNOB4LBfgErzERGZU"
  },
  {
    id: 12,
    title: "Mobile Application Penetration Testing Report: InsecureBankv2.",
    excerpt: "Terakhir saya melakukan pengujian penetrasi (penetration testing) terhadap aplikasi Android InsecureBankv2, sebagai bagian dari tugas praktikum dalam program pelatihan Cyber Security di ID-Networkers (IDN.ID).",
    icon: <Bug className="h-8 w-8 text-accent-400" />,
    readTime: "3 min read",
    date: "June 28, 2025",
    link: "https://www.linkedin.com/posts/muhamad-nabil-faiz-amrullah_report-pentest-mobile-activity-7344944122614452224-19pp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIqCDMBqEpfj5ZxR7TNOB4LBfgErzERGZU"
  },
  {
    id: 13,
    title: "Methodology Bug Bounty.",
    excerpt: "Saya membuat report tentang methodology bug bounty versi saya sendiri",
    icon: <BugPlay className="h-8 w-8 text-accent-400" />,
    readTime: "3 min read",
    date: "July 13, 2025",
    link: "https://drive.google.com/file/d/1nw9cXyGj3P8SHc2ayBmA5XJahtOnMs1u/view"
  },
  {
    id: 14,
    title: "The difference between using manual and automation tools in bug bounty activities.",
    excerpt: "Disini saya menjelaskan perbedaan menggunakan tools manual dan automation pada kegiatan bug bounty versi saya sendiri.",
    icon: <BugPlay className="h-8 w-8 text-accent-400" />,
    readTime: "2 min read",
    date: "July 13, 2025",
    link: "https://drive.google.com/file/d/1_evz6Y_xUqvvQlTQedShKnKqWYuK6g5u/view"
  },
  {
    id: 15,
    title: "Red Teaming and Pentesting Differences.",
    excerpt: "Disini saya menulis pendapat saya tentang perbedaan Red Teaming dan Penetration Testing.",
    icon: <BugPlay className="h-8 w-8 text-accent-400" />,
    readTime: "1 min read",
    date: "July 13, 2025",
    link: "https://drive.google.com/file/d/1_Yqz82rKHQ_J_iOw3n2PztEcu7iETZ-a/view"
  },
  {
    id: 16,
    title: "Initial Reverse Engineering Report: Aenjaris Loader Sample.",
    excerpt: "Disini saya membuat report dan melakukan analyst terhadap malware.",
    icon: <Worm className="h-8 w-8 text-accent-400" />,
    readTime: "3 min read",
    date: "July 20, 2025",
    link: "https://drive.google.com/file/d/1jR6X6RHA1HIKck8S3q37QdhfuOPpeKpQ/view?usp=sharing"
  },
  {
    id: 17,
    title: "Malware Detection with Sigma & YARA - Use Case & Rules Implementation.",
    excerpt: "Disini saya membuat report, meresearch, dan mencoba Sigma dan YARA Rules sesuai IOC yang telah didapat dari report malware analyst.",
    icon: <Worm className="h-8 w-8 text-accent-400" />,
    readTime: "4 min read",
    date: "July 27, 2025",
    link: "https://www.linkedin.com/posts/muhamad-nabil-faiz-amrullah_yara-and-sigma-rule-activity-7355267705949601794-vcqK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIqCDMBqEpfj5ZxR7TNOB4LBfgErzERGZU"
  },
  {
    title: "Write Up Capture the Flag (CTF) at ID-Networkers.",
    excerpt: "Disini saya membuat report dari hasil CTF saya di ID-Networkers sebagai penyeleksian terhadap bootcamp yang akan saya ikuti.",
    icon: <NotebookText className="h-8 w-8 text-accent-400" />,
    readTime: "20-30 min read",
    date: "May 11, 2025",
    link: "https://drive.google.com/file/d/1l0-fMgPJtPlypjbxVF478z-LX7jEg7P6/view?usp=drive_link"
  }, 
  {
    id: 19,
    title: "Wazuh Decoder and Ruleset Fine-Tuning Report for OpenStack Logs",
    excerpt: "Di sini saya membuat laporan mengenai penyesuaian Wazuh Decoder dan Ruleset untuk log OpenStack.",
    icon: <NotebookText className="h-8 w-8 text-accent-400" />,
    readTime: "3 min read",
    date: "August 21, 2025",
    link: "https://drive.google.com/file/d/1IJfJ7SUBwHvHqkNPubsQ5wxQQ9HFC4fs/view?usp=sharing"
  },
  {
    id: 20,
    title: "Write Up Capture the Flag (CTF) at Compfest17 Universitas Indonesia",\
    excerp: "Di sini saya membuat report dari hasil CTF saya di Compfest17"
    icon: <NotebookText className="h-8 w-8 text-accent-400" />,
    readTime: "3 min read",
    date: "August 25, 2025",
    link: "https://write-up-aaronabil.notion.site/Write-Up-CTF-COMPFEST17-Universitas-Indonesia-25ad9750c6c880098736d2363c9ab6ec#25ad9750c6c88152aff8f5e7143dd379"
  },

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

  const IframeBadge = () => (
    <iframe
      src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=5159881"
      className="h-[88px] w-[340px] max-w-none rounded-md border-none object-contain mt-8"
      scrolling="no"
      allowTransparency={true}
    />
  );

  // const badges = Array(6).fill(0);

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
            <div className="relative overflow-hidden">
              <h1>
                <ScrollVelocity
                  texts={['Cybersecurity', 'Insights']}
                  velocity={100}
                  className="custom-scroll-text mb-2"
                />
              </h1>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-dark-400 to-transparent"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-dark-400 to-transparent"></div>
            </div>
            {/* <div className="relative my-8 flex h-[450px] w-full flex-row items-center justify-center overflow-hidden [perspective:1000px]">
  
  
  <div 
    className="flex flex-row items-center gap-4"
    style={{
      transform: "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-15deg) rotateZ(0deg)",
    }}
  >

    <Marquee pauseOnHover vertical className="[--duration:20s]">
      {badges.map((_, i) => (
        <div key={`c1-${i}`} className="py-2">
          <IframeBadge />
        </div>
      ))}
    </Marquee>

    <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
      {badges.map((_, i) => (
        <div key={`c2-${i}`} className="py-2">
          <IframeBadge />
        </div>
      ))}
    </Marquee>

    <Marquee pauseOnHover vertical className="[--duration:20s]">
      {badges.map((_, i) => (
        <div key={`c3-${i}`} className="py-2">
          <IframeBadge />
        </div>
      ))}
    </Marquee>
    
    <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
      {badges.map((_, i) => (
        <div key={`c4-${i}`} className="py-2">
          <IframeBadge />
        </div>
      ))}
    </Marquee>
  </div>


  <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
</div> */}
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
                  className="btn btn-outline rounded-full text-accent-400 border-accent-400 hover:bg-accent-400 hover:text-white">
                  Show More
                </button>
              </Magnet>
            </div>
          )}
          <div className="relative overflow-hidden mt-8">
            <Marquee className="[--duration:35s]">
              <IframeBadge />
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#181925] to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#181925] to-transparent"></div>
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
              <a href="/contact" className="btn btn-primary rounded-full">
                Get in Touch
              </a>
              <a href="#" className="btn btn-outline rounded-full">
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
