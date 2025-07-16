import React, { useRef } from "react";

const HorizontalScroller = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Left Scroll Button */}
      <button
        onClick={() => scrollByAmount(-300)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
      >
        ◀
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200 overflow-x-auto whitespace-nowrap px-12 py-4"
      >
        <div className="inline-flex gap-6">{children}</div>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scrollByAmount(300)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
      >
        ▶
      </button>
    </div>
  );
};

export default HorizontalScroller;
