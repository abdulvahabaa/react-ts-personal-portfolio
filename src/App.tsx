import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { GitHub } from './components/GitHub';
import { Leetcode } from './components/Leetcode';
import { Badges } from './components/Badges';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { useLoading } from './hooks/useLoading';

function App() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 opacity-100">
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Skills />
          <Achievements />
          <Projects />
          <GitHub />
          <Leetcode />
          <Badges />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
          <Footer />
          <ScrollToTop />
          <Analytics />
        </div>
      )}
    </>
  );
}

export default App;
