import React from "react";
import FieryPhoenixFooter from "./FieryPhoenixFooter";
import FieryPhoenixHeader from "./FieryPhoenixHeader";

const FieryPhoenix = () => {
  return (
    
    <div className="flex flex-col min-h-screen bg-red-200 text-black">
      {/* Main Content */}
      <FieryPhoenixHeader />
      <div className="flex-grow p-6">
        

        <main>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="card bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="images.jpeg"
                alt="Captain boy 1"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h2 className="text-xl font-semibold mt-4">Captain</h2>
              <p>Asin Ram S</p>
            </div>
            <div className="card bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="G_images.jpeg"
                alt="Captain girl 1"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h2 className="text-xl font-semibold mt-4">Captain</h2>
              <p>Samiksha Dhole</p>
            </div>
            <div className="card bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="images.jpeg"
                alt="Vice Captain boy 2"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h2 className="text-xl font-semibold mt-4">Vice Captain</h2>
              <p>Vamshi Krishna</p>
            </div>
            <div className="card bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="G_images.jpeg"
                alt="Vice Captain girl 2"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h2 className="text-xl font-semibold mt-4">Vice Captain</h2>
              <p>Rakshita Kyatamwar</p>
            </div>
          </section>
        </main>
      </div>

      {/* Footer - Stays at the Bottom */}
      <FieryPhoenixFooter />
    </div>
  );
};

export default FieryPhoenix;
