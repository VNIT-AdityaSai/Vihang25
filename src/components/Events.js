import React from "react";

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Vihang 2025 Events</h1>
      
      {/* Two-column layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Events Today Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Events Today</h2>
          <ul className="list-disc pl-4">
            <li>Robo Wars - 10:00 AM</li>
            <li>AI Hackathon - 12:00 PM</li>
            <li>Cultural Dance - 6:00 PM</li>
          </ul>
        </div>

        {/* Latest Updates Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Latest Updates</h2>
          <ul className="list-disc pl-4">
            <li>Guest Speaker at 4:00 PM</li>
            <li>New event added: Drone Racing</li>
            <li>Registration deadline extended to tomorrow</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Events;
