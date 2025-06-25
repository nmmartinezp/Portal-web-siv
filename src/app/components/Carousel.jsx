"use client";
import { useState, useEffect } from "react";
import { Button } from "@heroui/react";

function Carousel({ data, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, interval);

    return () => clearInterval(timer);
  }, [data.length, interval]);

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
      {data.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center sm:justify-end items-center sm:items-start text-white p-4 sm:p-20">
            <div className="max-w-xs md:max-w-xl text-center sm:text-left">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-warning-400">
                {item.title}
              </h2>
              <p className="text-md sm:text-lg mb-6 text-white/90">
                {item.description}
              </p>
              <Button
                color="primary"
                size="lg"
                //onPress={() => navigate(item.navigate)}
              >
                Ver más
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
