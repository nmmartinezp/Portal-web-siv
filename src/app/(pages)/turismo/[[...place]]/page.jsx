import { Card, CardHeader, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import SpringAnimateText from "@/components/animation/SpringAnimateText";
import ContentMenu from "@/components/ContentMenu";
import ContentTarjet from "@/components/ContentTarjet";
import ClientRender from "@/components/controller/ClientRender";
import SchemaScript from "@/components/controller/SchemaScript";
import { getTourismData } from "@/lib/getData/getTourismData";
import metadata from "@/data/metadata.json";

export async function generateMetadata({ params }) {
  const { place } = await params;

  if (place === undefined) {
    const meta = metadata["tourism"];

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
  } else {
    const meta = metadata[place];

    if (!meta) {
      return {
        title: "no se econtro pagina 404",
        description: "no se econtro",
      };
    } else {
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
          images: [
            {
              url: meta.schema.image,
              alt: meta.schema.name,
            },
          ],
        },
        other: {
          schema: JSON.stringify(meta.schema),
        },
      };
    }
  }
}

export default async function Tourism({ params }) {
  const { place } = await params;
  const artsTourism = await getTourismData();
  const BlockTitle = place !== undefined ? "h2" : "h1";
  const meta = place === undefined ? metadata["tourism"] : undefined;

  const InterfaceTourism = () => (
    <>
      <section className="w-full h-[70vh] md:h-[60vh] flex items-center justify-center pb-12 pt-[calc(3rem_+_var(--myapp-navbar--height))]">
        <div className="h-auto w-5/6 md:w-4/6 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 flex items-center justify-center">
            <BlockTitle className="w-3/4 md:w-full text-center text-3xl md:text-5xl">
              <span className="text-warning font-medium">
                <SpringAnimateText>SAN IGNACIO DE VELASCO</SpringAnimateText>
              </span>{" "}
              <SpringAnimateText>
                UN VIAJE TURISTICO ENTRE TRADICIÓN Y BIODIVERSIDAD
              </SpringAnimateText>
            </BlockTitle>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center py-4 md:py-0">
            <Image
              priority={true}
              src="/destino.svg"
              alt="Icono de destino"
              width={500}
              height={500}
              className="h-[18vh] md:h-[28vh] w-auto"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-auto flex flex-col items-center justify-center py-4 px-8 md:px-28">
        <div className="w-full flex items-center justify-center pb-8">
          <h3 className="w-[95%] md:w-auto text-center text-3xl md:text-5xl">
            <span>¿Qué puedes </span>
            <span className="text-warning font-medium">visitar?</span>
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-3">
          {artsTourism.map((item, index) => (
            <article
              id={`cardContainer-${item.identifier}`}
              key={`cardContainer-${item.identifier}`}
              className={`h-[38vh] md:h-[41vh] cursor-pointer ease-in-out duration-150 hover:scale-[1.03] col-span-12 md:col-span-${item.space}`}
            >
              <Link
                href={`/turismo/${item.identifier}`}
                className="h-full"
                scroll={false}
              >
                <Card key={`CardHistory-${index}}`} className={`h-full`}>
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <h3 className="text-tiny text-white/60 uppercase font-bold">
                      {item.description}
                    </h3>
                    <h2 className="text-white font-medium text-large">
                      {item.title}
                    </h2>
                  </CardHeader>
                  <Image
                    priority={true}
                    alt={item.images[0].alt}
                    src={item.images[0].src}
                    width={500}
                    height={500}
                    className="z-0 w-full h-full object-cover brightness-75"
                  />
                </Card>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="w-full h-auto flex flex-col items-center justify-center py-24 px-4 md:px-28">
        <ContentMenu
          title={"Aprende mas de la historia de este municipio"}
          src={"/assets/images/photo/plazaPrincipalSiv.webp"}
          altImg={"Plaza Principal 31 de julio San Ignacio de Velasco"}
          rounded
        >
          <div
            key={`boxRefHistory-001`}
            className="col-span-6 md:col-span-3 h-full"
          >
            <ContentTarjet
              key={`contentRefHistory-001`}
              title="Historia"
              src={"/assets/images/photo/territorioSiv.webp"}
              altImg={"Vista desde arriba de San Ignacio de Velasco"}
              href={"/historia/historia-de-san-ignacio-de-velasco"}
            >
              Un pueblo con un pasado creado a partir de una cultura indígena y
              misional, pasado viviente
            </ContentTarjet>
          </div>
          {artsTourism.map(
            (item, index) =>
              item.refHistory.content && (
                <div
                  key={`boxRefHistory-${index}}`}
                  className="col-span-6 md:col-span-3 h-full"
                >
                  <ContentTarjet
                    key={`contentRefHistory-${index}}`}
                    title="Historia"
                    src={item.refHistory.image}
                    altImg={item.refHistory.altImage}
                    href={item.refHistory.href}
                  >
                    {item.refHistory.content}
                  </ContentTarjet>
                </div>
              )
          )}
        </ContentMenu>
        <Button size="lg" className="p-0 text-white bg-warning-300 my-4">
          <Link
            href={"/historia"}
            className="w-full h-full px-4 flex items-center justify-center"
          >
            Aprende sobre la historia
          </Link>
        </Button>
      </section>
      {meta && <SchemaScript schema={meta.schema} />}
    </>
  );

  return place === undefined ? (
    <InterfaceTourism />
  ) : (
    <ClientRender>
      <InterfaceTourism />
    </ClientRender>
  );
}
