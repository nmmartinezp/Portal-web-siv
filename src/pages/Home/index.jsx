import HomeLayout from "@layouts/HomeLayout";
import Carousel from "@components/Carousel";
import PresentationCard from "@components/PresentationCard";
import { Image } from "@heroui/react";
import useDataCarousel from "@hooks/useDataCarousel";
import catedral from "@assets/images/photo/catedral02Siv.webp";
import monument from "@assets/images/photo/monumento01Siv.webp";
import smSquare from "@assets/images/photo/plazuelaPuebloNuevoSiv.webp";
import viewSiv from "@assets/images/photo/territorioSiv.webp";

function Home() {
  const dataCarousel = useDataCarousel();

  return (
    <HomeLayout
      animexPicture={250}
      duration={1}
      carosusel={<Carousel data={dataCarousel} />}
      pt01={
        <Image
          loading="lazy"
          isBlurred
          isZoomed
          alt="Iglesia Catedral de San Ignacio de Velasco"
          src={catedral}
          className="w-full h-[230px] md:h-[350px] brightness-90"
        />
      }
      art01={
        <PresentationCard
          type="principal"
          title="San Ignacio de Velasco"
          to="/cultura"
          animation="right"
        >
          <p className="pb-4">
            Este encantador municipio de la chiquitania combina historia viva,
            arquitectura misional y tradiciones que perduran en el tiempo.
          </p>
          <p>
            Puerta de entrada a reservas ecológicas y hogar de una rica herencia
            cultural, el sonido de la música barroca en festivales únicos hacen
            de este lugar un destino inolvidable.
          </p>
        </PresentationCard>
      }
      pt02={
        <Image
          loading="lazy"
          isBlurred
          isZoomed
          alt="Monumento de las misiones jesuitas"
          src={monument}
          className="w-full h-[230px] md:h-[350px] brightness-90"
        />
      }
      art02={
        <PresentationCard
          title="Nuestra Historia Viva"
          to="/historia"
          animation="left"
        >
          <p className="pb-4">
            Fundado en 1748 por los misioneros jesuitas, este pueblo fue uno de
            los últimos y más importantes asentamientos misionales creados en la
            región. Su origen responde a un encuentro profundo entre la
            espiritualidad europea y la sabiduría ancestral de los pueblos
            indígenas chiquitanos.
          </p>
        </PresentationCard>
      }
      pt03={
        <Image
          loading="lazy"
          isBlurred
          isZoomed
          alt="Vista desde arriba San Ignacio de Velasco"
          src={viewSiv}
          className="w-full h-[230px] md:h-[350px] brightness-90"
        />
      }
      art03={
        <PresentationCard
          title="Territorio Oriental"
          to="/territorio"
          animation="right"
        >
          <p className="pb-4">
            San Ignacio de Velasco se extiende majestuoso en el oriente
            boliviano, formando parte del departamento de Santa Cruz. Con una
            superficie de más de 65.000 km², es uno de los municipios más
            extensos del país, caracterizado por una geografía diversa que
            abarca llanuras, sabanas, bosques tropicales y serranías.
          </p>
        </PresentationCard>
      }
      pt04={
        <Image
          loading="lazy"
          isBlurred
          isZoomed
          alt="Plazuela Pueblo Nuevo"
          src={smSquare}
          className="w-full h-[230px] md:h-[350px] brightness-90"
        />
      }
      art04={
        <PresentationCard
          title="Paraíso Chiquitano"
          to="/turismo"
          animation="left"
        >
          <p className="pb-4">
            El turismo en San Ignacio ofrece una variedad de experiencias: desde
            la exploración de sus parques nacionales, como el Parque Nacional
            Noel Kempff Mercado, uno de los más biodiversos del mundo, hasta la
            visita a sus misiones jesuíticas restauradas, patrimonio de la
            humanidad.
          </p>
        </PresentationCard>
      }
    />
  );
}

export default Home;
