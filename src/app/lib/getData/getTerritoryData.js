import territoryData from "@/data/territoryData.json";

export function getTerritoryData() {
  const images = [
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    {
      src: "/assets/images/maps/represaGuapomoArea.webp",
      alt: "Área de la represa el guapomó",
    },
    { src: "", alt: "" },
  ];
  const data = territoryData.map((item, index) => ({
    ...item,
    image: !item.image.src ? images[index] : item.image,
  }));
  return data;
}
