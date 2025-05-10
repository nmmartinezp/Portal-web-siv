import territoryData from "@data/territoryData.json";
import repesaGuapomoArea from "@assets/images/maps/represaGuapomoArea.webp";

function useTerritoryPageData() {
  const images = [
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: repesaGuapomoArea, alt: "Área de la represa el guapomó" },
    { src: "", alt: "" },
  ];
  const data = territoryData.map((item, index) => ({
    ...item,
    image: !item.image.src ? images[index] : item.image,
  }));
  return data;
}

export default useTerritoryPageData;
