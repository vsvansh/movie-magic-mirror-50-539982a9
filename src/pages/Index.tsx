
import NavBar from '@/components/NavBar';
import HeroBanner from '@/components/HeroBanner';
import ContentRow from '@/components/ContentRow';
import Footer from '@/components/Footer';
import { categories } from '@/utils/movieData';
import BillboardSection from '@/components/BillboardSection';
import FAQSection from '@/components/FAQSection';
import DevicesSection from '@/components/DevicesSection';
import OfflineSection from '@/components/OfflineSection';
import KidsSection from '@/components/KidsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-netflix-black text-white overflow-x-hidden">
      <NavBar />
      
      <main>
        {/* Hero Banner with Sign Up Form */}
        <BillboardSection />
        
        {/* TV Shows Section */}
        <div className="border-t-8 border-[#232323]">
          <DevicesSection />
        </div>
        
        {/* Download & Watch Offline Section */}
        <div className="border-t-8 border-[#232323]">
          <OfflineSection />
        </div>
        
        {/* Watch Everywhere Section */}
        <div className="border-t-8 border-[#232323]">
          <KidsSection />
        </div>
        
        {/* FAQ Section */}
        <div className="border-t-8 border-[#232323]">
          <FAQSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
