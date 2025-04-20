
export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  year: number;
  category: string;
  rating: string;
}

export const categories = [
  "Trending Now",
  "Popular on Netflix",
  "New Releases",
  "Watch Again",
  "Action Movies",
  "Comedy",
  "Drama",
  "Horror",
  "Documentaries"
];

export const featuredMovie: Movie = {
  id: 0,
  title: "Stranger Things",
  imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&h=900",
  description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  year: 2022,
  category: "Sci-Fi & Fantasy",
  rating: "TV-14"
};

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Digital Frontier",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300",
    description: "A visionary journey through the digital landscape, exploring the boundaries of human and machine interaction.",
    year: 2023,
    category: "Sci-Fi & Fantasy",
    rating: "PG-13"
  },
  {
    id: 2,
    title: "Media Revolution",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&h=300",
    description: "The story of how digital media transformed society and connected the world in unprecedented ways.",
    year: 2021,
    category: "Documentary",
    rating: "PG"
  },
  {
    id: 3,
    title: "Home",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=500&h=300",
    description: "A heartwarming tale about finding meaning and connection in the place you least expect.",
    year: 2022,
    category: "Drama",
    rating: "G"
  },
  {
    id: 4,
    title: "Digital Dreams",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=500&h=300",
    description: "A mind-bending thriller that explores the thin line between reality and virtual worlds.",
    year: 2023,
    category: "Thriller",
    rating: "R"
  },
  {
    id: 5,
    title: "Urban Stories",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=500&h=300",
    description: "Intersecting tales of urban life, connection, and transformation in the modern metropolis.",
    year: 2021,
    category: "Drama",
    rating: "PG-13"
  },
  {
    id: 6,
    title: "Ocean Depths",
    imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=500&h=300",
    description: "A mesmerizing documentary exploring the mysteries of the ocean's deepest regions.",
    year: 2022,
    category: "Documentary",
    rating: "G"
  },
  {
    id: 7,
    title: "Mountain Peak",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&h=300",
    description: "The harrowing journey of climbers attempting to conquer the world's most dangerous summit.",
    year: 2020,
    category: "Adventure",
    rating: "PG-13"
  },
  {
    id: 8,
    title: "Desert Mirage",
    imageUrl: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=500&h=300",
    description: "A psychological thriller set in the vast emptiness of the world's most beautiful desert.",
    year: 2021,
    category: "Thriller",
    rating: "R"
  }
];

export const getMoviesByCategory = (categoryName: string): Movie[] => {
  // In a real app, we would filter based on category
  // For this demo, we'll just return all movies shuffled
  return [...movies].sort(() => Math.random() - 0.5);
};
