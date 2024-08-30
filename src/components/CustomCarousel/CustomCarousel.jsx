import React, { useRef } from "react";
import { Card, Text } from "@nextui-org/react";

const CustomCarousel = ({ cards }) => {
  const carouselRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full shadow-md p-2 z-10 hover:bg-gray-200 transition duration-300"
        onClick={scrollLeft}>
        &#10094;
      </button>

      {/* Scrollable Carousel */}
      <div
        className="flex space-x-4 overflow-x-auto py-4 scrollbar-hidden"
        ref={carouselRef}>
        {cards}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full shadow-md p-2 z-10 hover:bg-gray-200 transition duration-300"
        onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default CustomCarousel;
