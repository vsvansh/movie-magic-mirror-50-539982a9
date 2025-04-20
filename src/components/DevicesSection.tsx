
import { useEffect, useRef } from 'react';

const DevicesSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, []);

  return (
    <div className="py-12 md:py-20 px-4 md:px-8 lg:px-0 bg-netflix-black border-t-8 border-[#232323]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">Enjoy on your TV</h2>
          <p className="text-lg md:text-xl text-[#e5e5e5] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>
        
        <div className="md:w-1/2 relative transform transition-transform duration-700 hover:scale-105">
          <img 
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
            alt="TV" 
            className="relative z-10 w-full"
          />
          <div className="absolute top-[20%] left-[13%] right-[13%] bottom-[25%] z-0 overflow-hidden">
            <video 
              ref={videoRef}
              autoPlay 
              playsInline 
              muted 
              loop 
              className="w-full h-full object-cover"
            >
              <source 
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" 
                type="video/mp4" 
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesSection;
