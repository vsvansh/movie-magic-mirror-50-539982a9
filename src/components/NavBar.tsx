
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-netflix-black shadow-md' : 'bg-transparent bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-netflix-red font-bold text-3xl">
            NETFLIX
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">TV Shows</Link>
            <Link to="/" className="nav-link">Movies</Link>
            <Link to="/" className="nav-link">New & Popular</Link>
            <Link to="/" className="nav-link">My List</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white p-2 rounded hover:bg-[rgba(255,255,255,0.1)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <button className="hidden md:block text-white p-2 rounded hover:bg-[rgba(255,255,255,0.1)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-netflix-red flex items-center justify-center text-white font-bold">
              N
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
