
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BillboardSection from '@/components/BillboardSection';
import FAQSection from '@/components/FAQSection';
import DevicesSection from '@/components/DevicesSection';
import OfflineSection from '@/components/OfflineSection';
import KidsSection from '@/components/KidsSection';
import TrendingSection from '@/components/TrendingSection';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <NavBar />
      
      <main className="relative z-0">
        <BillboardSection />
        <TrendingSection />
        <DevicesSection />
        <OfflineSection />
        <KidsSection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
