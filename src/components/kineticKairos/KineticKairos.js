import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const KineticKairos = () => {
  return (
    <div className="p-6 bg-blue-200 min-h-screen text-black">
      <header className="text-center text-3xl font-bold mb-6">
        Kinetic Kairos
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="images.jpeg" alt="Captain boy 1" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Captain</h2>
          <p>Devanshi Shukla </p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="G_images.jpeg" alt="Captain girl 1" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Captain</h2>
          <p>Himanshu Rawat</p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="images.jpeg" alt="Vice Captain boy 2" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Vice Captain</h2>
          <p>Rohan Bisht</p>
        </div>
        <div className="card bg-white p-6 rounded-lg shadow-md text-center">
          <img src="G_images.jpeg" alt="Vice Captain girl 2" className="w-24 h-24 mx-auto rounded-full" />
          <h2 className="text-xl font-semibold mt-4">Vice Captain</h2>
          <p>Nikita Swami</p>
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

export default KineticKairos;
