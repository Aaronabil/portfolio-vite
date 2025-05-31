import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import CustomCursor from './components/ui/CustomCursor';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import DesignPage from './pages/DesignPage';
import CyberSecurityPage from './pages/CyberSecurityPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
// import SplashCursor from './components/reactbits/SplashCursor';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* <CustomCursor /> */}
      {/* <SplashCursor /> */}
      <Header />
      <main className="min-h-screen pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/cybersecurity" element={<CyberSecurityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;