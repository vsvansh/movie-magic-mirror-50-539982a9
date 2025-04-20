
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-8 border-[#232323] bg-netflix-black py-12 px-4 md:px-8 lg:px-12 text-[#737373]">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-6">
          <p className="text-base">Questions? Call <a href="tel:000-800-919-1694" className="underline">000-800-919-1694</a></p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 mb-8">
          <Link to="/" className="text-sm underline">FAQ</Link>
          <Link to="/" className="text-sm underline">Help Centre</Link>
          <Link to="/" className="text-sm underline">Account</Link>
          <Link to="/" className="text-sm underline">Media Centre</Link>
          <Link to="/" className="text-sm underline">Investor Relations</Link>
          <Link to="/" className="text-sm underline">Jobs</Link>
          <Link to="/" className="text-sm underline">Ways to Watch</Link>
          <Link to="/" className="text-sm underline">Terms of Use</Link>
          <Link to="/" className="text-sm underline">Privacy</Link>
          <Link to="/" className="text-sm underline">Cookie Preferences</Link>
          <Link to="/" className="text-sm underline">Corporate Information</Link>
          <Link to="/" className="text-sm underline">Contact Us</Link>
          <Link to="/" className="text-sm underline">Speed Test</Link>
          <Link to="/" className="text-sm underline">Legal Notices</Link>
          <Link to="/" className="text-sm underline">Only on Netflix</Link>
        </div>
        
        <div className="mb-6">
          <select className="bg-transparent border border-[#333] text-[#737373] py-1 px-4 text-sm">
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
        
        <div className="pt-4">
          <p className="text-sm">Netflix India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
