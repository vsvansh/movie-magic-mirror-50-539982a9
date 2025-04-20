
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Info } from "lucide-react";

const BillboardSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="relative min-h-[95vh] flex items-center justify-start text-left px-4 md:px-12 lg:px-16">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ 
          backgroundImage: "url('/lovable-uploads/170becbf-f686-4a71-bd62-6983015f208a.png')",
          opacity: isLoaded ? 1 : 0
        }}
      >
        {/* Multiple gradient layers for better visual effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-black/95 via-netflix-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-netflix-black/40" />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 max-w-[650px] transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} pt-[120px]`}>
        {/* Title Card or Logo */}
        <div className="w-[40%] mb-6">
          <img 
            src="https://occ-0-2483-3663.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABW_PvqkxEU1USJmPj4F4rUkkcXi9-UPGVHHYg8hOg68MRxOFDomUg3PhyR_iQJ_PED_4Fn9NQ2eEt7wI_AErj2REB9KwvF7EwgBe_oOF1UfEQGOm-FjXq2ftX7bvgHiBm3YP6O5lJ_7jeqeRNlzpSE_8dxFNyVKoWzQVadFknVrl.webp?r=904" 
            alt="Featured Title"
            className="w-full"
          />
        </div>

        {/* Description */}
        <p className="text-lg text-white/90 mb-8 line-clamp-3 max-w-[600px]">
          A family man becomes a vigilante killing machine when his family is violently attacked by robbers. As he sets out for revenge, the son of a powerful crime boss stands in his way.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-12">
          <Button 
            size="lg"
            className="bg-white hover:bg-white/90 text-black font-medium px-8 flex items-center gap-2 text-lg"
          >
            <Play className="h-6 w-6" /> Play
          </Button>
          <Button 
            size="lg"
            className="bg-white/30 hover:bg-white/20 text-white font-medium px-8 flex items-center gap-2 text-lg"
          >
            <Info className="h-6 w-6" /> More Info
          </Button>
        </div>

        {/* Email Signup Section */}
        <div className="mt-8">
          <h3 className="text-xl md:text-2xl mb-5 font-medium">
            Ready to watch? Enter your email to create or restart your membership.
          </h3>
          <div className="flex flex-col md:flex-row gap-3 max-w-[600px]">
            <div className={`flex-1 relative transition-all duration-300 transform ${isEmailFocused ? 'scale-105' : ''}`}>
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                placeholder="Email address" 
                className="h-14 bg-black/70 border border-[#333] text-white w-full transition-all duration-300 focus:border-white text-lg rounded-md"
              />
            </div>
            <Button 
              className="h-14 bg-netflix-red hover:bg-[#f40612] text-xl font-medium px-8 transition-transform duration-200 hover:scale-105 rounded-md whitespace-nowrap"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillboardSection;
