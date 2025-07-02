import ModalView from "@/components/ModalView";
import ParagraphContent from "@/components/ParagraphContent";
import { Card } from "@heroui/react";
import Image from "next/image";
import SchemaScript from "@/components/controller/SchemaScript";
import { getTourismData } from "@/lib/getData/getTourismData";
import metadata from "@/data/metadata.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const artsTourism = await getTourismData();
  return artsTourism.map((item) => ({
    place: [item.identifier],
  }));
}

async function TourismModalPage({ params }) {
  const { place } = await params;
  const artsTourism = await getTourismData();
  const tourismData =
    place !== undefined &&
    artsTourism.find((item) => item.identifier === String(place));
  const meta = place !== undefined ? metadata[place] : undefined;

  if (place !== undefined && !tourismData) {
    notFound();
  }

  return place !== undefined ? (
    tourismData !== undefined ? (
      <>
        <ModalView title={tourismData.title} closeHref={"/turismo"}>
          <section className="w-full h-[50vh] md:h-[30vh] gap-2 grid grid-cols-12">
            {tourismData.images.map((img, index) => (
              <Card
                key={`cardmodal-${index}`}
                className="col-span-12 md:col-span-4 h-full"
              >
                <Image
                  priority={true}
                  alt={img.alt}
                  src={img.src}
                  width={500}
                  height={500}
                  className="z-0 w-full h-full object-cover"
                />
              </Card>
            ))}
          </section>
          <ParagraphContent>{tourismData.content}</ParagraphContent>
          <section className="w-full p-3 md:p-4 flex flex-col items-center justify-center bg-foreground-100 rounded-lg">
            <h2 className="text-2xl text-center p-4">
              Visita
              <span className="text-warning">{` ${tourismData.title}`}</span>
            </h2>
            <iframe
              src={tourismData.locLink}
              className="w-[97%] md:w-2/4 h-[35vh] md:h-[40vh] rounded-lg"
            ></iframe>
          </section>
        </ModalView>
        {meta && <SchemaScript schema={meta?.schema} />}
      </>
    ) : (
      <></>
    )
  ) : (
    <></>
  );
}

export default TourismModalPage;
