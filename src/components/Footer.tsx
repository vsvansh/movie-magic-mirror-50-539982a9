
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-12 text-gray-400">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Link to="/" className="text-netflix-red font-bold text-2xl">
            NETFLIX
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-sm font-medium mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/" className="hover:underline">TV Shows</Link></li>
              <li><Link to="/" className="hover:underline">Movies</Link></li>
              <li><Link to="/" className="hover:underline">New & Popular</Link></li>
              <li><Link to="/" className="hover:underline">My List</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:underline">Privacy</Link></li>
              <li><Link to="/" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/" className="hover:underline">Cookie Preferences</Link></li>
              <li><Link to="/" className="hover:underline">Corporate Information</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Help</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:underline">Account</Link></li>
              <li><Link to="/" className="hover:underline">Help Center</Link></li>
              <li><Link to="/" className="hover:underline">Media Center</Link></li>
              <li><Link to="/" className="hover:underline">Investor Relations</Link></li>
              <li><Link to="/" className="hover:underline">Jobs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:underline">Gift Cards</Link></li>
              <li><Link to="/" className="hover:underline">Speed Test</Link></li>
              <li><Link to="/" className="hover:underline">Ways to Watch</Link></li>
              <li><Link to="/" className="hover:underline">Only on Netflix</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800">
          <p className="text-sm text-center">© {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
