import React from "react";
import { Link } from "react-router-dom";

const ThunderStrikers = () => {
  return (
    <div className="p-6 bg-violet-400 min-h-screen text-black">
      <header className="text-center text-3xl font-bold mb-6">
        Thunder Strikers
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="images.jpeg" alt="Captain Naveen" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Captain</h2>
          <p>Naveen</p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="G_images.jpeg" alt="Captain Chaaya" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Captain</h2>
          <p>Chaaya</p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="images.jpeg" alt="Vice Captain Yogesh" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Vice Captain</h2>
          <p>Yogesh</p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="G_images.jpeg" alt="Vice Captain Jasmine" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Vice Captain</h2>
          <p>Jasmine</p>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="text-center mt-8">
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThunderStrikers;
