
const DevicesSection = () => {
  return (
    <div className="py-12 md:py-20 px-4 md:px-8 lg:px-0 bg-netflix-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Enjoy on your TV</h2>
          <p className="text-lg md:text-xl text-[#e5e5e5]">
            Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>
        
        <div className="md:w-1/2 relative">
          <img 
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" 
            alt="TV" 
            className="relative z-10"
          />
          <div className="absolute top-[20%] left-[13%] right-[13%] bottom-[25%] z-0">
            <video autoPlay playsInline muted loop className="w-full h-full">
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
