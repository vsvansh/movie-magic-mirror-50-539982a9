
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

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
    <div className="relative min-h-[700px] flex items-center justify-center text-center px-4 md:px-8 lg:px-0">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{ 
          backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/3c111b72-3866-4215-8fb0-0f4f2476613e/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
          opacity: isLoaded ? 1 : 0
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-netflix-black/80 via-transparent to-netflix-black" />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 max-w-[950px] mx-auto py-28 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5">
          The biggest Indian hits. Ready to watch here from ₹149.
        </h1>
        <p className="text-lg md:text-xl mb-5">
          Join today. Cancel anytime.
        </p>
        <p className="text-lg md:text-xl mb-5">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        {/* Email Signup Form */}
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-6 max-w-[700px] mx-auto relative">
          <div className={`md:flex-1 relative transition-all duration-300 ${isEmailFocused ? 'scale-105' : ''}`}>
            <Input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              placeholder="Email address" 
              className="h-14 bg-black/70 border border-[#333] text-white w-full transition-all duration-300 focus:border-white"
            />
            {email && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? (
                  <span className="text-green-500">✓</span>
                ) : (
                  <span className="text-red-500">✗</span>
                )}
              </div>
            )}
          </div>
          <Button 
            className="h-14 bg-netflix-red hover:bg-[#f40612] text-lg font-medium px-6 transition-transform duration-200 hover:scale-105"
          >
            Get Started <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillboardSection;
