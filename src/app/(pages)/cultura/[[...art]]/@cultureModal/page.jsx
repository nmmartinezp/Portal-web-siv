import ModalView from "@/components/ModalView";
import ParagraphContent from "@/components/ParagraphContent";
import { Card } from "@heroui/react";
import Image from "next/image";
import SchemaScript from "@/components/controller/SchemaScript";
import { getCultureData } from "@/lib/getData/getCultureData";
import metadata from "@/data/metadata.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const artsData = await getCultureData();

  const params = artsData.flatMap((item, parentIndex) => {
    if (Array.isArray(item.content) && item.content.length > 0) {
      return item.content.map((contentItem) => ({
        art: [String(parentIndex), contentItem.identifier],
      }));
    }
    return [];
  });

  return params;
}

async function CultureModalPage({ params }) {
  const { art } = await params;
  const artsData = await getCultureData();
  const artData =
    art !== undefined &&
    art.length > 0 &&
    Number.isInteger(Number(art[0])) &&
    artsData.length > Number(art[0]) &&
    Number(art[0]) >= 0 &&
    artsData[Number(art[0])].content.find(
      (item) => item.identifier === String(art[1])
    );
  const meta = art !== undefined ? metadata[art[1]] : undefined;

  if (art !== undefined && !artData) {
    notFound();
  }

  return art !== undefined ? (
    artData !== undefined ? (
      <>
        <ModalView title={artData.title} closeHref={"/cultura"}>
          <div className="w-full h-[50vh] md:h-[30vh] gap-2 grid grid-cols-12">
            {artData.images.map((img, index) => (
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
          </div>
          <ParagraphContent>{artData.content}</ParagraphContent>
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

export default CultureModalPage;
