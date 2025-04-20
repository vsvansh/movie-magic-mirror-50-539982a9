
const OfflineSection = () => {
  return (
    <div className="py-12 md:py-20 px-4 md:px-8 lg:px-0 bg-netflix-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pl-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Download your shows to watch offline
          </h2>
          <p className="text-lg md:text-xl text-[#e5e5e5]">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
        
        <div className="md:w-1/2 relative">
          <img 
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
            alt="Mobile device" 
            className="relative z-10"
          />
          
          <div className="absolute left-1/2 bottom-[8%] transform -translate-x-1/2 w-[60%] border-2 border-[#333] rounded-lg bg-netflix-black p-2 z-20 flex items-center">
            <img 
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" 
              alt="Stranger Things" 
              className="w-[20%] mr-4"
            />
            <div className="flex-1">
              <div className="font-medium">Stranger Things</div>
              <div className="text-xs text-[#0071eb]">Downloading...</div>
            </div>
            <div className="ml-4">
              <div className="w-10 h-10 border-2 border-t-[#0071eb] rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineSection;
