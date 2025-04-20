
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

const BillboardSection = () => {
  return (
    <div className="relative min-h-[700px] flex items-center justify-center text-center px-4 md:px-8 lg:px-0">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/3c111b72-3866-4215-8fb0-0f4f2476613e/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[950px] mx-auto py-28">
        <h1 className="text-3xl md:text-5xl font-bold mb-5">
          The biggest Indian hits. Ready to watch here from ₹149.
        </h1>
        <p className="text-lg md:text-xl mb-5">
          Join today. Cancel anytime.
        </p>
        <p className="text-lg md:text-xl mb-5">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        {/* Email Signup Form */}
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-6 max-w-[700px] mx-auto">
          <div className="md:flex-1">
            <Input 
              type="email" 
              placeholder="Email address" 
              className="h-14 bg-black bg-opacity-70 border border-[#333] text-white w-full"
            />
          </div>
          <Button 
            className="h-14 bg-netflix-red hover:bg-[#f40612] text-lg font-medium px-6"
          >
            Get Started <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillboardSection;
