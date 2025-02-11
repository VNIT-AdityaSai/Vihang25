import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-2 px-4 flex justify-between items-center shadow-md">
      {/* Left Logo */}
      <img src="/logo1.png" alt="Left Logo" className="w-10 h-10 rounded-full" />

      {/* Center Navigation */}
      <nav className="flex space-x-6 text-sm">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <div className="relative group">
          <button className="hover:text-gray-400">Events</button>
        </div>

        <Link to="/" className="hover:text-gray-400">Vihang 2024</Link>
      </nav>

      {/* Right Logo */}
      <img src="/logo2.png" alt="Right Logo" className="w-10 h-10 rounded-full" />
    </header>
  );
};

export default Header;
