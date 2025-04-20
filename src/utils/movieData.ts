
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
  "Popular on Netflix",
  "Trending Now",
  "New Releases",
  "Netflix Originals",
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
  imageUrl: "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/3c111b72-3866-4215-8fb0-0f4f2476613e/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg",
  description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  year: 2022,
  category: "Sci-Fi & Fantasy",
  rating: "TV-14"
};

export const movies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    imageUrl: "https://occ-0-2483-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdpI5-BwUTasMnVBKcr9YD_5SocOzKL0X2v-oRgcgYO9N_dUk9iG2J1IFPRN_gjI4axkQuZOw_XiZGPSY6Qwn8Kdi5lWR0DxEz-i.jpg?r=d32",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    year: 2022,
    category: "Sci-Fi & Fantasy",
    rating: "TV-14"
  },
  {
    id: 2,
    title: "Money Heist",
    imageUrl: "https://occ-0-2483-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYsRYW8aYvAUAIZ8vV-1QXHGxF3kPfUUlc4jVHZ7SzvKxmuZ5phNiHjUQeQoghGtLHcGxjzjQE-KDxCzbVeZx52TNSAG_eLQsuHZQ69JPmB-YfhG7C3AxE-lH_Wobc-2x8cg.jpg?r=b95",
    description: "A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history.",
    year: 2021,
    category: "Thriller",
    rating: "TV-MA"
  },
  {
    id: 3,
    title: "The Witcher",
    imageUrl: "https://occ-0-2483-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdcgHwHye6PqcwA7O2BbecT7Nk7fyCjA-6Vq75rzTPzxGhTdX5nNfVWmjPBVFKAmU6NhUmqtwO6lkj5VIvQEP2n-qf0xegvwfK6H.jpg?r=116",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    year: 2022,
    category: "Fantasy",
    rating: "TV-MA"
  },
  {
    id: 4,
    title: "Squid Game",
    imageUrl: "https://occ-0-2483-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTJhGHvYLOEJOyVyZpv-2hPVpgBZdQ16U9cIcOeKfZNZvbg33V2d1VzJXmgG2o_UTazNJdD7-mVGzQgzDdVl0gl3BxTaxLHm3dIzHpmXVRYXcpXMD43FytcU_tA-qokce279.jpg?r=7c5",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    year: 2021,
    category: "Thriller",
    rating: "TV-MA"
  },
  {
    id: 5,
    title: "Wednesday",
    imageUrl: "https://occ-0-2483-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfy37DQoYF612_3y044YVB8MCl5pAYGJ_3s-Cdbw-Y1EIvG9kIf59zl6XYV7Rms3pDlQ_6F102kExe-DPUQEjRmpPE8Fpnx0q3YSt_ZbLn3DNYz8B8K54_jJk7mDsBD6DxlI.jpg?r=082",
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    year: 2022,
    category: "Comedy Horror",
    rating: "TV-14"
  },
  {
    id: 6,
    title: "Dark",
    imageUrl: "https://occ-0-2483-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdxfnzrXXnx84bx8Z8wpeG_jO1PnKWlnruaXSEXPx8h53mN6Av1-3Iht5Wp0Bchi-_0hO0Yi7EfSM7nEOOQSWYRZn81EegCeOlWZxQjB3x3Pl55HndkCgPFZ2p8S74M8Czl5.jpg?r=93f",
    description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    year: 2020,
    category: "Sci-Fi & Fantasy",
    rating: "TV-MA"
  },
  {
    id: 7,
    title: "The Crown",
    imageUrl: "https://occ-0-2483-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUb8dI_XI1_fDQPJ_-Y2p5hr1xQSBHxQQSJ3zRESjIlhRuvRyWdEEMNpTh6z2EF5vD788rEkY-HkdWZQ-UREJvCw8nRYfqLlt02K.jpg?r=066",
    description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    year: 2022,
    category: "Drama",
    rating: "TV-MA"
  },
  {
    id: 8,
    title: "Ozark",
    imageUrl: "https://occ-0-2483-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW66k_vgHu_1QON5XnFcPN0VNK4kSDqg0rUFEzp5hEYF8AL0ulIYlbJlBmSrYbj3GV0_DIQ2YWCJesLLIm3GOPY59Q4fwLrpR8aqTVOukb5EwjzfYmwuTAp_ug_dQlWwSvQB.jpg?r=2ed",
    description: "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    year: 2022,
    category: "Crime",
    rating: "TV-MA"
  }
];

export const getMoviesByCategory = (categoryName: string): Movie[] => {
  // In a real app, we would filter based on category
  // For this demo, we'll just return all movies shuffled
  return [...movies].sort(() => Math.random() - 0.5);
};
