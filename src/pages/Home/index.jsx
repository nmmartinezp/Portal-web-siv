import HomeLayout from "../../layouts/HomeLayout";
import Carousel from "../../components/Carousel";
import { Image } from "@heroui/react";
import useDataCarousel from "../../hooks/useDataCarousel";
import catedral02Siv from "../../assets/catedral02Siv.webp";

function Home() {
  const dataCarousel = useDataCarousel();
  return (
    <HomeLayout
      carosusel={<Carousel data={dataCarousel} />}
      pt01={
        <Image
          isBlurred
          isZoomed
          alt="Iglesia Catedral de San Ignacio de Velasco"
          src={catedral02Siv}
          className="w-full h-[230px] md:h-[350px]"
        />
      }
      art01={<span>Hola</span>}
      pt02={
        <Image
          isBlurred
          isZoomed
          alt="Iglesia Catedral de San Ignacio de Velasco"
          src={catedral02Siv}
          className="w-full h-[230px] md:h-[350px]"
        />
      }
      art02={<span>Hola</span>}
      pt03={
        <Image
          isBlurred
          isZoomed
          alt="Iglesia Catedral de San Ignacio de Velasco"
          src={catedral02Siv}
          className="w-full h-[230px] md:h-[350px]"
        />
      }
      art03={<span>Hola</span>}
      pt04={
        <Image
          isBlurred
          isZoomed
          alt="Iglesia Catedral de San Ignacio de Velasco"
          src={catedral02Siv}
          className="w-full h-[230px] md:h-[350px]"
        />
      }
      art04={<span>Hola</span>}
    />
  );
}

export default Home;
