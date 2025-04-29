import HomeLayout from "@layouts/HomeLayout";
import Carousel from "@components/Carousel";
import PresentationCard from "@components/PresentationCard";
import { Image } from "@heroui/react";
import useDataCarousel from "@hooks/useDataCarousel";
import catedral02Siv from "@assets/catedral02Siv.webp";

function Home() {
  const dataCarousel = useDataCarousel();

  return (
    <HomeLayout
      animexArticule={200}
      animexPicture={300}
      duration={1}
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
      art01={
        <PresentationCard
          type="principal"
          title="San Ignacio de Velasco"
          to="/historia"
          animation="right"
        >
          San Ignacio de Velasco (antiguamente San Ignacio de Loyola) es una
          ciudad y municipio de Bolivia, capital de la provincia de Velasco en
          el departamento de Santa Cruz, al este del país. Se encuentra a 476
          kilómetros al estesureste de la ciudad de Santa Cruz de la Sierra en
          una colina junto a las nacientes del río Paraguá. Se ha convertido en
          un centro turístico. Tiene aproximadamente 61.412 habitantes según el
          censo nacional del año 2001 constituyéndose en uno de los municipios
          más poblados del departamento.
        </PresentationCard>
      }
      pt02={
        <Image
          isBlurred
          isZoomed
          alt="Iglesia Catedral de San Ignacio de Velasco"
          src={catedral02Siv}
          className="w-full h-[230px] md:h-[350px]"
        />
      }
      art02={
        <PresentationCard
          title="San Ignacio de Velasco"
          to="/cultura"
          animation="left"
        >
          San Ignacio de Velasco (antiguamente San Ignacio de Loyola) es una
          ciudad y municipio de Bolivia, capital de la provincia de Velasco en
          el departamento de Santa Cruz, al este del país. Se encuentra a 476
          kilómetros al estesureste de la ciudad de Santa Cruz de la Sierra en
          una colina junto a las nacientes del río Paraguá. Se ha convertido en
          un centro turístico. Tiene aproximadamente 61.412 habitantes según el
          censo nacional del año 2001 constituyéndose en uno de los municipios
          más poblados del departamento.
        </PresentationCard>
      }
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
