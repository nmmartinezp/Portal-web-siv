import territoryData from "@data/territoryData.json";
import culture from "@assets/images/photo/culture01Siv.webp";

function useTerritoryPageData() {
  const images = [
    { src: "", alt: "" },
    { src: culture, alt: "Escultura en pared de angel" },
    { src: "", alt: "" },
  ];
  const data = territoryData.map((item, index) => ({
    ...item,
    image: !item.image.src ? images[index] : item.image,
  }));
  return data;
}

export default useTerritoryPageData;
