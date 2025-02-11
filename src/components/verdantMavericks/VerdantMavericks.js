import React from "react";
import { Link } from "react-router-dom";

const VerdantMavericks = () => {
  return (
    <div className="p-6 bg-green-400 min-h-screen text-black">
      <header className="text-center text-3xl font-bold mb-6">
        Verdant Mavericks
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="images.jpeg" alt="Captain Naveen" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Captain</h2>
          <p>Venkatesh Kulkarni </p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="G_images.jpeg" alt="Captain Chaaya" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Captain</h2>
          <p>Akshata Parbate</p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="images.jpeg" alt="Vice Captain Yogesh" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Vice Captain</h2>
          <p>Vaibhav Kamble</p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="G_images.jpeg" alt="Vice Captain Jasmine" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Vice Captain</h2>
          <p>Aabriti Saha</p>
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

export default VerdantMavericks;
