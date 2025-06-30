import CarouselContent from "@/components/Carousel/CarouselContent";
import CardPresentation from "@/components/CardPresentation";
import SchemaScript from "@/components/controller/SchemaScript";
import dataCarousel from "@/data/dataCarousel.json";
import metadata from "@/data/metadata.json";

export async function generateMetadata() {
  const meta = metadata["home"];

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    other: {
      schema: JSON.stringify(meta.schema),
    },
  };
}

export default function Home() {
  const meta = metadata["home"];
  return (
    <main className="w-full min-h-[var(--myapp-main-height)] flex flex-col items-center justify-center pt-[var(--myapp-navbar--height)]">
      <CarouselContent data={dataCarousel} />
      <section className="w-full h-auto flex flex-col gap-24 md:gap-20 py-40 md:py-24 px-8 md:px-24">
        <div className="w-full">
          <CardPresentation
            title={"San Ignacio de Velasco"}
            href={"/cultura"}
            src={"/assets/images/photo/catedral02Siv.webp"}
            altSrc={"Catedral de San Ignacio de Velasco"}
            direction="right"
            animation={true}
          >
            <p className="pb-4">
              Este encantador municipio de la chiquitania combina historia viva,
              arquitectura misional y tradiciones que perduran en el tiempo.
            </p>
            <p>
              Puerta de entrada a reservas ecológicas y hogar de una rica
              herencia cultural, el sonido de la música barroca en festivales
              únicos hacen de este lugar un destino inolvidable.
            </p>
          </CardPresentation>
        </div>
        <div className="w-full">
          <CardPresentation
            title={"Nuestra Historia Viva"}
            href={"/historia"}
            src={"/assets/images/photo/monumento01Siv.webp"}
            altSrc={"Monumento de las misiones jesuitas"}
            direction="left"
            animation={true}
          >
            <p className="pb-4">
              Fundado en 1748 por los misioneros jesuitas, este pueblo fue uno
              de los últimos y más importantes asentamientos misionales creados
              en la región. Su origen responde a un encuentro profundo entre la
              espiritualidad europea y la sabiduría ancestral de los pueblos
              indígenas chiquitanos.
            </p>
          </CardPresentation>
        </div>
        <div className="w-full">
          <CardPresentation
            title={"Territorio Oriental"}
            href={"/territorio"}
            src={"/assets/images/photo/territorioSiv.webp"}
            altSrc={"Vista desde arriba San Ignacio de Velasco"}
            direction="right"
            animation={true}
          >
            <p className="pb-4">
              San Ignacio de Velasco se extiende majestuoso en el oriente
              boliviano, formando parte del departamento de Santa Cruz. Con una
              superficie de más de 65.000 km², es uno de los municipios más
              extensos del país, caracterizado por una geografía diversa que
              abarca llanuras, sabanas, bosques tropicales y serranías.
            </p>
          </CardPresentation>
        </div>
        <div className="w-full">
          <CardPresentation
            title={"Paraíso Chiquitano"}
            href={"/turismo"}
            src={"/assets/images/photo/plazuelaPuebloNuevoSiv.webp"}
            altSrc={"Plazuela Pueblo Nuevo"}
            direction="left"
            animation={true}
          >
            <p className="pb-4">
              El turismo en San Ignacio ofrece una variedad de experiencias:
              desde la exploración de sus parques nacionales, como el Parque
              Nacional Noel Kempff Mercado, uno de los más biodiversos del
              mundo, hasta la visita a sus misiones jesuíticas restauradas,
              patrimonio de la humanidad.
            </p>
          </CardPresentation>
        </div>
      </section>
      <SchemaScript schema={meta.schema} />
    </main>
  );
}
