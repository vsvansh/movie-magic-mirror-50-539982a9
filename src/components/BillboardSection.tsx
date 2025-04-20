
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

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
    <div className="relative min-h-[85vh] flex items-center justify-center text-center px-4 md:px-8 lg:px-0">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ 
          backgroundImage: "url('/lovable-uploads/170becbf-f686-4a71-bd62-6983015f208a.png')",
          opacity: isLoaded ? 1 : 0
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/30 to-netflix-black/10" />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 max-w-[950px] mx-auto transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          Watch Anywhere. Cancel Anytime.
        </h1>
        <p className="text-lg md:text-2xl mb-5">
          Join today. Cancel anytime.
        </p>
        <p className="text-lg md:text-2xl mb-5">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        {/* Email Form */}
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-6 max-w-[700px] mx-auto">
          <div className={`md:flex-1 relative transition-all duration-300 transform ${isEmailFocused ? 'scale-105' : ''}`}>
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
            className="h-14 bg-netflix-red hover:bg-[#f40612] text-xl font-medium px-8 transition-transform duration-200 hover:scale-105 rounded-md"
          >
            Get Started <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillboardSection;
