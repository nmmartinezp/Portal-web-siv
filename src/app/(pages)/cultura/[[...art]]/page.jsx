import SpringAnimateText from "@/components/animation/SpringAnimateText";
import ParagraphContent from "@/components/ParagraphContent";
import ContentMenu from "@/components/ContentMenu";
import ContentTarjet from "@/components/ContentTarjet";
import IllustratedArticle from "@/components/IllustratedArticle";
import SugerenceMenu from "@/components/SugerenceMenu";
import ClientRender from "@/components/controller/ClientRender";
import SchemaScript from "@/components/controller/SchemaScript";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import { Link as HeroLink } from "@heroui/react";
import { getCultureData } from "@/lib/getData/getCultureData";
import metadata from "@/data/metadata.json";

export async function generateMetadata({ params }) {
  const { art } = await params;

  if (art === undefined) {
    const meta = metadata["culture"];

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
    const meta = metadata[art[1]];

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

export default async function Culture({ params }) {
  const { art } = await params;
  const artsCulture = await getCultureData();
  const BlockTitle = art !== undefined ? "h2" : "h1";
  const meta = art === undefined ? metadata["culture"] : undefined;

  const InterfaceCulture = () => (
    <>
      <section className="w-full h-[72vh] md:h-[80vh] flex items-center justify-center pb-16 pt-[calc(6rem_+_var(--myapp-navbar--height))] md:pt-[calc(4rem_+_var(--myapp-navbar--height))]">
        <div className="h-auto w-5/6 md:w-4/6 grid grid-cols-12 gap-4">
          <div className="h-full col-span-12 md:col-span-7 flex items-center justify-center">
            <BlockTitle className="w-3/4 md:w-full text-center text-3xl md:text-5xl">
              <span className="text-warning font-medium">
                <SpringAnimateText>SAN IGNACIO DE VELASCO</SpringAnimateText>
              </span>{" "}
              <SpringAnimateText>
                UN PUEBLO DE PATRIMONIO CULTURAL
              </SpringAnimateText>
            </BlockTitle>
          </div>
          <div className="h-full col-span-5 md:col-span-5 flex items-center justify-center py-12 md:py-0">
            <Image
              priority={true}
              src="/logoChiquitania01.svg"
              alt="logo chiquitano siv web"
              width={500}
              height={500}
              className="h-[18vh] md:h-[35vh] w-auto"
            />
          </div>
          <div className="col-span-7 md:col-span-12 w-full h-auto flex items-center justify-center py-12 md:py-8">
            <p className="w-full md:w-3/4 text-sm md:text-lg text-justify md:text-center">
              <SpringAnimateText speed={7}>
                San Ignacio de Velasco, cuna de cultura y tradición, es uno de
                los tesoros de la Chiquitanía boliviana. Conserva viva la
                herencia de las misiones jesuíticas a través de su arquitectura
                histórica, celebraciones religiosas y artesanía en madera.
              </SpringAnimateText>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-auto grid grid-cols-12">
        {artsCulture.map((item, index) => (
          <Fragment key={`fr-gr-art-${index}`}>
            <div
              id={`cart-${index}`}
              key={`cart-${index}`}
              className="w-full h-auto flex items-center md:items-start justify-center col-span-12 md:col-span-8"
            >
              <div
                id={`csart-${index}`}
                key={`csart-${index}`}
                className="w-4/5 md:w-[65%]"
              >
                <IllustratedArticle
                  id={`art-${index}`}
                  key={`art-${index}`}
                  title={item.title}
                  img={item.image.src}
                  altImg={item.image.alt}
                >
                  <ParagraphContent>{item.article}</ParagraphContent>
                </IllustratedArticle>
              </div>
            </div>
            <div
              id={`cmu-${index}`}
              key={`cmu-${index}`}
              className="w-full h-auto flex items-center md:items-start justify-center md:justify-start col-span-12 md:col-span-4"
            >
              <div
                id={`csmu-${index}`}
                key={`csmu-${index}`}
                className="w-4/5 md:w-[70%] pb-12"
              >
                <SugerenceMenu
                  id={`mu-${index}`}
                  key={`mu-${index}`}
                  title="Visitar tambien"
                >
                  {item.links.map((itemLink, indexLink) => (
                    <li key={`item-link-${index}-${indexLink}`}>
                      <HeroLink
                        as={Link}
                        id={`link-${index}-${indexLink}`}
                        key={`link-${index}-${indexLink}`}
                        href={itemLink.link}
                        showAnchorIcon
                        underline="hover"
                        color="primary"
                        className="py-1 cursor-pointer"
                      >
                        {itemLink.title}
                      </HeroLink>
                    </li>
                  ))}
                </SugerenceMenu>
              </div>
            </div>
            {Array.isArray(item.content) && item.content.length > 0 && (
              <div
                id={`cmuc-${index}`}
                className="w-full h-auto flex items-center justify-center col-span-12"
              >
                <div className="w-4/5 md:w-[77%] pb-12">
                  <ContentMenu
                    key={`cmt-${index}`}
                    title={item.subTitle}
                    src={item.image.src}
                    altImg={item.image.alt}
                    rounded
                  >
                    {item.content.map((itemContent, indexContent) => (
                      <div
                        id={`ccr-${index}-${indexContent}`}
                        key={`ccr-${index}-${indexContent}`}
                        className="col-span-6 md:col-span-3 h-full"
                      >
                        <ContentTarjet
                          id={`cardr-${index}-${indexContent}`}
                          key={`cardr-${index}-${indexContent}`}
                          title={itemContent.title}
                          src={itemContent.images[0].src}
                          altImg={itemContent.images[0].alt}
                          href={`/cultura/${index}/${itemContent.identifier}`}
                          scrollNavigate={false}
                        >
                          {itemContent.description}
                        </ContentTarjet>
                      </div>
                    ))}
                  </ContentMenu>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </section>
      {meta && <SchemaScript schema={meta.schema} />}
    </>
  );
  return art === undefined ? (
    <InterfaceCulture />
  ) : (
    <ClientRender>
      <InterfaceCulture />
    </ClientRender>
  );
}
