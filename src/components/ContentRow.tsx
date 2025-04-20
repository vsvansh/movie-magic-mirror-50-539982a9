
import { useState, useRef } from 'react';
import MovieCard from './MovieCard';
import { getMoviesByCategory } from '../utils/movieData';

interface ContentRowProps {
  title: string;
  large?: boolean;
}

const ContentRow = ({ title, large = false }: ContentRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const movies = getMoviesByCategory(title);
  
  const scroll = (direction: 'left' | 'right') => {
    setIsScrolling(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const offset = direction === 'left' ? -clientWidth : clientWidth;
      rowRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth'
      });
    }
    
    // Reset scrolling state after animation completes
    setTimeout(() => setIsScrolling(false), 300);
  };

  return (
    <div className="content-row my-8">
      <h2 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h2>
      <div className="relative group">
        <div
          ref={rowRef}
          className="content-container"
        >
          {movies.map((movie) => (
            <MovieCard key={`${title}-${movie.id}`} movie={movie} large={large} />
          ))}
        </div>
        
        {/* Left scroll button */}
        <button
          className={`absolute left-0 top-0 bottom-0 flex items-center justify-center w-12 bg-gradient-to-r from-netflix-black to-transparent z-10 opacity-0 group-hover:opacity-100 ${!isScrolling ? 'transition-opacity duration-300' : ''}`}
          onClick={() => scroll('left')}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Right scroll button */}
        <button
          className={`absolute right-0 top-0 bottom-0 flex items-center justify-center w-12 bg-gradient-to-l from-netflix-black to-transparent z-10 opacity-0 group-hover:opacity-100 ${!isScrolling ? 'transition-opacity duration-300' : ''}`}
          onClick={() => scroll('right')}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContentRow;
