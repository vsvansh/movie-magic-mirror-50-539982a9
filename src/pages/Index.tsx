
import NavBar from '@/components/NavBar';
import HeroBanner from '@/components/HeroBanner';
import ContentRow from '@/components/ContentRow';
import Footer from '@/components/Footer';
import { categories } from '@/utils/movieData';

const Index = () => {
  return (
    <div className="min-h-screen bg-netflix-black overflow-x-hidden">
      <NavBar />
      
      <main className="pt-0">
        <HeroBanner />
        
        <div className="pb-10">
          {categories.slice(0, 6).map((category, index) => (
            <ContentRow 
              key={category} 
              title={category} 
              large={index === 0} 
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
