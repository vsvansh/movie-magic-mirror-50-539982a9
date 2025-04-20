
import { useState } from 'react';
import { Movie } from '../utils/movieData';

interface MovieCardProps {
  movie: Movie;
  large?: boolean;
}

const MovieCard = ({ movie, large = false }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={large ? 'movie-card-large' : 'movie-card'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={movie.imageUrl} 
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-end p-3 transition-opacity duration-300 ease-in-out">
          <h3 className="font-bold text-sm md:text-base text-white">{movie.title}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-xs text-green-400">{movie.rating}</span>
            <span className="text-xs text-gray-400">{movie.year}</span>
          </div>
          <div className="flex space-x-2 mt-2">
            <button className="p-1 bg-white rounded-full">
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-1 bg-[rgba(42,42,42,0.6)] border border-white border-opacity-20 rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="p-1 bg-[rgba(42,42,42,0.6)] border border-white border-opacity-20 rounded-full">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
