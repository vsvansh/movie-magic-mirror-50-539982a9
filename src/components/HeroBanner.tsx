
import { featuredMovie } from '../utils/movieData';
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[80vh] mb-8">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${featuredMovie.imageUrl})`,
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-black to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-12 lg:px-20">
        <div className="w-full md:w-2/3 lg:w-1/2 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{featuredMovie.title}</h1>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-green-400 font-semibold">{featuredMovie.rating}</span>
            <span className="text-gray-400">•</span>
            <span>{featuredMovie.year}</span>
            <span className="text-gray-400">•</span>
            <span>{featuredMovie.category}</span>
          </div>
          <p className="text-base md:text-lg text-gray-200 line-clamp-3">{featuredMovie.description}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="bg-white hover:bg-gray-200 text-black flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Play
            </Button>
            <Button variant="outline" size="lg" className="bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.4)] text-white border-none flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
