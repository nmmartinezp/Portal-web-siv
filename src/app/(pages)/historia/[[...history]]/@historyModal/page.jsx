import ModalView from "@/components/ModalView";
import ParagraphContent from "@/components/ParagraphContent";
import { Card } from "@heroui/react";
import Image from "next/image";
import SchemaScript from "@/components/controller/SchemaScript";
import { getHistories } from "@/lib/getData/getHistoryData";
import metadata from "@/data/metadata.json";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { history } = await params;
  if (!history) {
    return {
      title: "Historial no encontrado",
      description: "No se encontró el historial solicitado.",
    };
  }

  const historyValue = Array.isArray(history) ? history[0] : history;

  const meta = metadata[historyValue];

  if (!meta) {
    return {
      title: "Historial no encontrado",
      description: "No se encontró el historial solicitado.",
    };
  }

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
      // Aquí mandamos el schema como string para luego inyectarlo en el <script>
      schema: JSON.stringify(meta.schema),
    },
  };
}

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
  const meta = metadata[history];

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
        <SchemaScript schema={meta?.schema} />
      </>
    ) : (
      notFound()
    )
  ) : (
    <></>
  );
}

export default HistoryModalPage;
