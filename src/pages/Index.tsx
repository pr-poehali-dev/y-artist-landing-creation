import NavBar from '@/components/NavBar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import NominationsSection from '@/components/sections/NominationsSection';
import GallerySection from '@/components/sections/GallerySection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import ResultsSection from '@/components/sections/ResultsSection';
import JurySection from '@/components/sections/JurySection';
import ContactsSection from '@/components/sections/ContactsSection';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--dark-bg)' }}>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <NominationsSection />
      <GallerySection />
      <RegistrationSection />
      <JurySection />
      <ResultsSection />
      <ContactsSection />
    </div>
  );
};

export default Index;