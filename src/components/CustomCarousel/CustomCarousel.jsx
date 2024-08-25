import React, { useRef } from "react";
import "./CustomCarousel.css"; // Import the CSS file

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
    <div className="carousel-container">
      {/* Left Scroll Button */}
      <button className="scroll-button left" onClick={scrollLeft}>
        &#10094;
      </button>

      {/* Scrollable Carousel */}
      <div className="carousel" ref={carouselRef}>
        {cards} {/* Directly render the array of JSX elements */}
      </div>

      {/* Right Scroll Button */}
      <button className="scroll-button right" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default CustomCarousel;
