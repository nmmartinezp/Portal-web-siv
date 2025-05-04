import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router";

function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentData = data[currentIndex];

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden shadow-lg">
      <div
        className="relative w-full h-full bg-cover bg-center bg-no-repeat transition-background duration-500 ease-in-out"
        style={{ backgroundImage: `url(${currentData.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45 flex flex-col justify-center sm:justify-end items-center sm:items-start text-white p-4 sm:p-20 z-10">
          <div className="max-w-xs md:max-w-xl text-center md:text-left">
            <h2 className="text-3xl sm:text-6xl text-warning-400 font-bold mb-2 ">
              {currentData.title}
            </h2>
            <p className="text-lg md:text-lg mb-4 text-center md:text-justify">
              {currentData.description}
            </p>
            <Button
              color="primary"
              size="lg"
              onPress={() => navigate(currentData.navigate)}
            >
              Ver mas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
