
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const KidsSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="py-12 md:py-20 px-4 md:px-8 lg:px-0 bg-netflix-black border-t-8 border-[#232323]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12">
          <h2 
            className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Create profiles for kids
          </h2>
          <p 
            className={`text-lg md:text-xl text-[#e5e5e5] transition-all duration-700 delay-300 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
          </p>
        </div>
        
        <div className={`md:w-1/2 transition-all duration-1000 transform ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <img 
            src="https://occ-0-2482-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" 
            alt="Kids profiles" 
            className="w-full transform transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default KidsSection;
