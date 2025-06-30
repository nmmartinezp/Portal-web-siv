import { Card, CardHeader, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import SpringAnimateText from "@/components/animation/SpringAnimateText";
import ContentMenu from "@/components/ContentMenu";
import ContentTarjet from "@/components/ContentTarjet";
import ClientRender from "@/components/controller/ClientRender";
import SchemaScript from "@/components/controller/SchemaScript";
import { getHistories } from "@/lib/getData/getHistoryData";
import metadata from "@/data/metadata.json";

export async function generateMetadata({ params }) {
  const { history } = await params;

  if (history === undefined) {
    const meta = metadata["history"];

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
    const meta = metadata[history];

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
          type: "article",
          images: [
            {
              url: meta.schema.image,
              alt: meta.title,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: meta.title,
          description: meta.description,
          images: [meta.schema.image],
        },
        other: {
          schema: JSON.stringify(meta.schema),
        },
      };
    }
  }
}

async function History({ params }) {
  const { history } = await params;
  const historiesData = await getHistories();
  const BlockTitle = history !== undefined ? "h2" : "h1";
  const meta = history === undefined ? metadata["history"] : undefined;

  const InterfaceHistory = () => (
    <>
      <section className="w-full h-[50vh] md:h-[52vh] flex items-center justify-center pb-28 pt-[calc(7rem_+_var(--myapp-navbar--height))]">
        <BlockTitle className="w-3/4 md:w-2/4 text-center text-3xl md:text-5xl">
          <span className="text-warning font-medium">
            <SpringAnimateText>SAN IGNACIO DE VELASCO</SpringAnimateText>
          </span>{" "}
          <SpringAnimateText>
            UN PUEBLO DE PATRIMONIO HISTÓRICO
          </SpringAnimateText>
        </BlockTitle>
      </section>
      <section className="w-full h-auto flex items-center justify-center py-4 px-8 md:px-28">
        <div className="grid grid-cols-12 gap-3">
          {historiesData.map((item, index) => (
            <article
              id={`cardContainer-${item.identifier}`}
              key={`cardContainer-${item.identifier}`}
              className={`h-[38vh] md:h-[41vh] cursor-pointer ease-in-out duration-150 hover:scale-[1.03] col-span-12 md:col-span-${item.space}`}
            >
              <Link
                href={`/historia/${item.identifier}`}
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
                    alt={item.altImage}
                    src={item.image}
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
          title={"Visita la historia de este municipio"}
          src={"/assets/images/photo/plazaPrincipalSiv.webp"}
          altImg={"Plaza 31 de julio San Ignacio de Velasco"}
          rounded
        >
          {historiesData.map(
            (item, index) =>
              item.refTurismo.content && (
                <div
                  key={`boxRefTurismo-${index}}`}
                  className="col-span-6 md:col-span-3 h-full"
                >
                  <ContentTarjet
                    key={`contentRefTurismo-${index}}`}
                    title="Turismo"
                    src={item.refTurismo.image}
                    altImg={item.refTurismo.altImage}
                    href={item.refTurismo.href}
                  >
                    {item.refTurismo.content}
                  </ContentTarjet>
                </div>
              )
          )}
        </ContentMenu>
        <Button size="lg" className="p-0 text-white bg-warning-300 my-4">
          <Link
            href={"/turismo"}
            className="w-full h-full px-4 flex items-center justify-center"
          >
            Visitar el patrimonio
          </Link>
        </Button>
      </section>
      {meta && <SchemaScript schema={meta.schema} />}
    </>
  );

  return history === undefined ? (
    <InterfaceHistory />
  ) : (
    <ClientRender idScroll={`cardContainer-${String(history)}`}>
      <InterfaceHistory />
    </ClientRender>
  );
}

export default History;
