import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { GitHub } from './components/GitHub';
import { Leetcode } from './components/Leetcode';
import { Badges } from './components/Badges';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { useLoading } from './hooks/useLoading';
import { YouTubeVideos } from './components/YouTubeVideos';
import { GithubStarsButton } from './components/ui/GithubStarsButton';
import { SEO } from './components/SEO';
import { StructuredData } from './components/StructuredData';

function App() {
  const isLoading = useLoading();

  // Ensure scroll is enabled after loading
  useEffect(() => {
    if (!isLoading) {
      // Force enable scroll after a short delay to ensure LoadingScreen cleanup
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <SEO />
      <StructuredData />
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 opacity-100">
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Skills />
          {/* <Achievements /> */}
          <Projects />
          <Gallery />
          <GitHub />
          <Leetcode />
          <Badges />
          <Experience />
          {/* <Certifications /> */}
          <Education />
          <YouTubeVideos />
          <Contact />
          <Footer />
          <ScrollToTop />
          <GithubStarsButton />
          <Analytics />
        </div>
      )}
    </>
  );
}

export default App;
