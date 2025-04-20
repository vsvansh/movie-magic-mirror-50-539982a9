
const KidsSection = () => {
  return (
    <div className="py-12 md:py-20 px-4 md:px-8 lg:px-0 bg-netflix-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Create profiles for kids
          </h2>
          <p className="text-lg md:text-xl text-[#e5e5e5]">
            Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
          </p>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src="https://occ-0-2482-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" 
            alt="Kids profiles" 
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default KidsSection;
