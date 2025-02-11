import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Clubs = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Participating Clubs</h2>
      <div className="flex justify-center space-x-6">
        <Link to="/terra-titans" className="bg-white p-6 rounded-lg shadow-md text-center">
          Terra Titans
        </Link>
        

        <Link to="/fiery-phoenix" className="bg-white p-6 rounded-lg shadow-md text-center">
          Fiery Phoenix
        </Link>

        <Link to="/verdant-mavericks" className="bg-white p-6 rounded-lg shadow-md text-center">
          Verdant Mavericks
        </Link>

        <Link to="/thunder-strikers" className="bg-white p-6 rounded-lg shadow-md text-center">
          Thunder Strikers
        </Link>

        <Link to="/kinetic-kairos" className="bg-white p-6 rounded-lg shadow-md text-center">
          Kinetic Kairos
        </Link>

      </div>
    </section>
  );
};

export default Clubs;
