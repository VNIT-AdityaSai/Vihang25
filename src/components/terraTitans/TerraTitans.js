import React, { useEffect } from "react";
import TerraTitansHeader from "./TerraTitansHeader";
import TerraTitansFooter from "./TerraTitansFooter";

const TerraTitans = () => {
  useEffect(() => {
    document.title = "Terra Titans";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-blue-300 text-gray-900">
      {/* Header with Black Background */}
      <div className="bg-black text-white px-2 py-2">
        <TerraTitansHeader />
      </div>

      {/* Main Content */}

      {/* remove  Justify-center and Items-center for another UI */}
      <main className="flex-1 flex flex-col justify-center items-center p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-white p-6 rounded-lg shadow-md text-center">
            <img src="terra_captain1.jpeg" alt="Captain Rohan" className="w-24 h-24 mx-auto rounded-full" />
            <h2 className="text-xl font-semibold mt-4">Captain</h2>
            <p>Rohan</p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-md text-center">
            <img src="terra_captain2.jpeg" alt="Captain Sneha" className="w-24 h-24 mx-auto rounded-full" />
            <h2 className="text-xl font-semibold mt-4">Captain</h2>
            <p>Sneha</p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-md text-center">
            <img src="terra_vice1.jpeg" alt="Vice Captain Arjun" className="w-24 h-24 mx-auto rounded-full" />
            <h2 className="text-xl font-semibold mt-4">Vice Captain</h2>
            <p>Arjun</p>
          </div>
          <div className="card bg-white p-6 rounded-lg shadow-md text-center">
            <img src="terra_vice2.jpeg" alt="Vice Captain Priya" className="w-24 h-24 mx-auto rounded-full" />
            <h2 className="text-xl font-semibold mt-4">Vice Captain</h2>
            <p>Priya</p>
          </div>
        </section>
      </main>

      {/* Footer Stays at the Bottom */}
      <TerraTitansFooter />
    </div>
  );
};

export default TerraTitans;
