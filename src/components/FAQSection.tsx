
import { useState } from 'react';
import { ChevronRight, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="py-12 md:py-20 px-4 md:px-8 lg:px-0 bg-netflix-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Frequently Asked Questions
        </h2>
        
        <div className="mb-8">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <button 
                className="w-full bg-[#2D2D2D] hover:bg-[#414141] text-white p-5 text-left flex justify-between items-center transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg md:text-xl font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <X size={24} />
                ) : (
                  <Plus size={24} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="bg-[#2D2D2D] mt-px p-6 text-lg md:text-xl">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <p className="text-lg md:text-xl mb-5">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          
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
    </div>
  );
};

export default FAQSection;
