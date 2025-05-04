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
      animexArticule={200}
      animexPicture={250}
      duration={1}
      carosusel={<Carousel data={dataCarousel} />}
      pt01={
        <Image
          isBlurred
          isZoomed
          alt="Iglesia Catedral de San Ignacio de Velasco"
          src={catedral}
          className="w-full h-[230px] md:h-[350px]"
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
            San Ignacio de Velasco, joya cultural de la Chiquitania boliviana.
            Este encantador municipio boliviano combina historia viva,
            arquitectura misional y tradiciones que perduran en el tiempo.
          </p>
          <p>
            Rodeado de paisajes naturales únicos, puerta de entrada a reservas
            ecológicas y hogar de una rica herencia cultural, la calidez de su
            gente y el sonido de la música barroca en festivales únicos hacen de
            este lugar un destino inolvidable.
          </p>
        </PresentationCard>
      }
      pt02={
        <Image
          isBlurred
          isZoomed
          alt="Monumento de las misiones jesuitas"
          src={monument}
          className="w-full h-[230px] md:h-[350px]"
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
          <p>
            Tras la expulsión de los jesuitas en 1767, la comunidad mantuvo viva
            esta herencia con orgullo, transmitiendo conocimientos y tradiciones
            de generación en generación.
          </p>
        </PresentationCard>
      }
      pt03={
        <Image
          isBlurred
          isZoomed
          alt="Vista desde arriba San Ignacio de Velasco"
          src={viewSiv}
          className="w-full h-[230px] md:h-[350px]"
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
          <p>
            Su territorio incluye parte de la Reserva de Vida Silvestre Tucavaca
            y está próximo al Parque Nacional Noel Kempff Mercado, una de las
            áreas de mayor biodiversidad en Sudamérica.
          </p>
        </PresentationCard>
      }
      pt04={
        <Image
          isBlurred
          isZoomed
          alt="Plazuela Pueblo Nuevo"
          src={smSquare}
          className="w-full h-[230px] md:h-[350px]"
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
          <p>
            Los viajeros pueden disfrutar de actividades como el ecoturismo, el
            avistamiento de fauna, caminatas por la selva, o simplemente
            relajarse en un ambiente rural lleno de historia y tradición.
          </p>
        </PresentationCard>
      }
    />
  );
}

export default Home;
