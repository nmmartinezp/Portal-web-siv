import ModalView from "@/components/ModalView";
import ParagraphContent from "@/components/ParagraphContent";
import { Card } from "@heroui/react";
import Image from "next/image";
import SchemaScript from "@/components/controller/SchemaScript";
import { getHistories } from "@/lib/getData/getHistoryData";
import metadata from "@/data/metadata.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const historiesData = await getHistories();
  return historiesData.map((item) => ({
    history: [item.identifier],
  }));
}

async function HistoryModalPage({ params }) {
  const { history } = await params;
  const historiesData = await getHistories();
  const historyData =
    history !== undefined &&
    historiesData.find((item) => item.identifier === String(history));
  const meta = history !== undefined ? metadata[history] : undefined;

  if (history !== undefined && !historyData) {
    notFound();
  }

  return history !== undefined ? (
    historyData !== undefined ? (
      <>
        <ModalView title={historyData.title} closeHref={"/historia"}>
          <div className="w-full h-[30vh] grid grid-cols-2">
            <Card className="col-span-2 h-full">
              <Image
                priority={true}
                alt={historyData.altImage}
                src={historyData.image}
                width={500}
                height={500}
                className="z-0 w-full h-full object-cover"
              />
            </Card>
          </div>
          <ParagraphContent>{historyData.history}</ParagraphContent>
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

export default HistoryModalPage;
