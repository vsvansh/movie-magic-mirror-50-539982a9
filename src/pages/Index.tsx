
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BillboardSection from '@/components/BillboardSection';
import FAQSection from '@/components/FAQSection';
import DevicesSection from '@/components/DevicesSection';
import OfflineSection from '@/components/OfflineSection';
import KidsSection from '@/components/KidsSection';
import { useEffect } from 'react';

const Index = () => {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-netflix-black text-white overflow-x-hidden">
      <NavBar />
      
      <main>
        {/* Hero Banner with Sign Up Form */}
        <BillboardSection />
        
        {/* TV Shows Section */}
        <DevicesSection />
        
        {/* Download & Watch Offline Section */}
        <OfflineSection />
        
        {/* Watch Everywhere Section */}
        <KidsSection />
        
        {/* FAQ Section */}
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
