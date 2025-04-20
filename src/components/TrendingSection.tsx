
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TrendingSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trendingMovies = [
    {
      id: 5,
      title: "Devil",
      imageUrl: "public/lovable-uploads/07f74cce-d604-412d-b71d-281135eb66a1.png",
      rank: 5
    },
    {
      id: 6,
      title: "Dragon",
      imageUrl: "public/lovable-uploads/99a7cc17-e068-42e4-8be1-58f9bbd66259.png",
      rank: 6
    },
    {
      id: 7,
      title: "Officer",
      imageUrl: "public/lovable-uploads/170becbf-f686-4a71-bd62-6983015f208a.png",
      rank: 7
    },
    {
      id: 8,
      title: "When Life Gives You Tangerines",
      imageUrl: "public/lovable-uploads/d4ce641f-a7c7-4359-91b1-de3a411f465b.png",
      rank: 8
    },
    {
      id: 9,
      title: "Test",
      imageUrl: "public/lovable-uploads/d500b13f-6b6b-4e77-9aa4-145c63b08df8.png",
      rank: 9
    }
  ];

  return (
    <section className="py-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Trending Now</h2>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {trendingMovies.map((movie) => (
              <CarouselItem key={movie.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105">
                  <div className="absolute -top-8 left-2 text-[120px] font-bold text-white/20 pointer-events-none z-10">
                    {movie.rank}
                  </div>
                  <img 
                    src={movie.imageUrl} 
                    alt={movie.title}
                    className="rounded-md w-full object-cover aspect-[2/3] transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">{movie.title}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 h-20 w-20 bg-black/50 hover:bg-black/80" />
          <CarouselNext className="absolute -right-12 top-1/2 h-20 w-20 bg-black/50 hover:bg-black/80" />
        </Carousel>
      </div>
    </section>
  );
};

export default TrendingSection;
