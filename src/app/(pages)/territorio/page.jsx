import { Divider } from "@heroui/react";
import IllustratedArticle from "@/components/IllustratedArticle";
import SingleArticle from "@/components/SingleArticle";
import ExplorerMenu from "@/components/ExplorerMenu";
import ExplorerCard from "@/components/ExplorerCard";
import Image from "next/image";
import SpringAnimateText from "@/components/animation/SpringAnimateText";
import ParagraphContent from "@/components/ParagraphContent";
import { getTerritoryData } from "@/lib/getData/getTerritoryData";
import metadata from "@/data/metadata.json";

export async function generateMetadata() {
  const meta = metadata["territory"];

  if (meta) {
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
    return {
      title: "no se econtro pagina 404",
      description: "no se econtro",
    };
  }
}

export default async function Territory() {
  const artsTerritory = await getTerritoryData();
  return (
    <main className="w-full min-h-[var(--myapp-main-height)] flex flex-col pt-[var(--myapp-navbar--height)]">
      <section className="w-full h-[45vh] md:h-[50vh] grid grid-cols-12">
        <div className="col-span-12 row-span-9 flex items-center justify-center">
          <h2 className="w-3/4 md:w-11/12 text-center text-3xl md:text-5xl">
            <span className="text-warning font-medium">
              <SpringAnimateText>SAN IGNACIO DE VELASCO</SpringAnimateText>
            </span>{" "}
            <SpringAnimateText>TERRITORIO CHIQUITANO</SpringAnimateText>
          </h2>
        </div>
        <div className="col-span-12 row-span-3 flex items-center justify-center">
          <p className="w-11/12 md:w-2/4 text-sm md:text-lg text-center">
            <SpringAnimateText speed={10}>
              San Ignacio de Velasco - Jose Miguel de Velasco - Santa Cruz -
              Bolivia
            </SpringAnimateText>
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-[97%] md:w-[45%] py-16">
          <Image
            priority={true}
            src={"/assets/images/maps/provinciaVelascoMap.webp"}
            alt="Mapa territorial de la provincia Velasco"
            width={500}
            height={500}
            className="w-full rounded-lg"
          />
          <Divider className="mt-8 bg-zinc-600" />
        </div>
        <div className="w-[90%] md:w-[45%] flex flex-col gap-28 items-center justify-center py-16">
          {artsTerritory.map((item, index) =>
            item.image.src ? (
              <IllustratedArticle
                id={`art-${index}`}
                key={`art-${index}`}
                title={item.title}
                img={item.image.src}
                altImg={item.image.alt}
              >
                <ParagraphContent>{item.content}</ParagraphContent>
              </IllustratedArticle>
            ) : (
              <SingleArticle
                id={`art-${index}`}
                key={`art-${index}`}
                title={item.title}
              >
                <ParagraphContent>{item.content}</ParagraphContent>
              </SingleArticle>
            )
          )}
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
        <div className="w-[95%] md:w-4/5 h-auto my-8 flex items-center justify-center">
          <ExplorerMenu title="Explora más de San Ignacio de Velasco">
            <li className="col-span-9 md:col-span-6">
              <ExplorerCard
                title="Historia"
                href={"/historia/historia-de-el-parque-noel-kempff-mercado"}
                image={"/assets/images/photo/parquenoelkempffmercado.webp"}
                altImage={"Cataratas en el parque Noel Kempff Mercado"}
              >
                Un parque de legado natural que guarda la historia de un gran
                personaje, Noel Kempff Mercado
              </ExplorerCard>
            </li>
            <li className="col-span-9 md:col-span-6">
              <ExplorerCard
                title="Turismo"
                href={"/turismo/el-mirador-del-cristo"}
                image={"/assets/images/photo/miradorCristo02Siv.webp"}
                altImage={"Mirador del Cristo San Ignacio de Velasco"}
              >
                Uno de los mejores miradores del municipio de San Ignacio, con
                una gran vista a la represa guapomó
              </ExplorerCard>
            </li>
            <li className="col-span-9 md:col-span-6">
              <ExplorerCard
                title="Historia"
                href={
                  "/historia/historia-de-la-catedral-de-san-ignacio-de-velasco"
                }
                image={"/assets/images/photo/catedral03Siv.webp"}
                altImage={"Iglesia Catedral San Ignacio de Velasco"}
              >
                La creación de la catedral por misioneros jesuítas que dejarían
                un legado de años
              </ExplorerCard>
            </li>
            <li className="col-span-9 md:col-span-6">
              <ExplorerCard
                title="Cultura"
                href={"/cultura#cabildo-indigenal-voz-y-raiz-del-pueblo"}
                image={"/assets/images/photo/cabildo1Siv.webp"}
                altImage={"Cabildo elegido 2024 San Ignacio de Velasco"}
              >
                Una institución que preserva la cultura y tradiciones de un
                pueblo que lucha por su identidad
              </ExplorerCard>
            </li>
          </ExplorerMenu>
        </div>
      </section>
    </main>
  );
}
