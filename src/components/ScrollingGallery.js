import React from "react";

const ScrollingGallery = () => {
  return (
    <div className="scrolling-gallery p-4 flex overflow-hidden whitespace-nowrap">
      <img src="https://via.placeholder.com/300" alt="Event Pic" className="w-40 mx-2" />
      <img src="https://via.placeholder.com/300" alt="Event Pic" className="w-40 mx-2" />
      <img src="https://via.placeholder.com/300" alt="Event Pic" className="w-40 mx-2" />
      <img src="https://via.placeholder.com/300" alt="Event Pic" className="w-40 mx-2" />
    </div>
  );
};

export default ScrollingGallery;
