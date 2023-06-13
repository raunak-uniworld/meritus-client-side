import React from "react";
import Carousel from "react-grid-carousel";
import Card2 from "./Card2";

const Gallery = () => {
  const isMobile = window.innerWidth <= 768; // Set the breakpoint for mobile screens

  const cardData = [
    {
      Card2title: "AI Meritus",
      Card2Para: "Build an impressive AI knowledge portfolio",
      Card2imageUrl: "images/home/card23.png",
      backgroundColor: "#2ECC40",
      Card2age: "5+",
      Card2rating: "4.7 ★★★★★",
      Card2Price: "₹6,999",
      Card2sessions: "20"
    }
    // Add more card objects as needed
  ];

  if (isMobile) {
    return (
      <Carousel cols={3} rows={1} gap={40} scrollSnap={true} loop>
        {cardData.map((card, index) => (
          <Carousel.Item key={index} css={{ width: "70%" }}>
            <Card2 {...card} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  // Render all cards on desktop
  return (
    <div>
      {cardData.map((card, index) => (
        <Card2 key={index} {...card} />
      ))}
    </div>
  );
};

export default Gallery;
