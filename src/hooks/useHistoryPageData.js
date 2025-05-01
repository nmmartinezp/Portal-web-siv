import historyData from "@data/historyData.json";
import catedral from "@assets/images/home/catedral02Siv.webp";
import tallados from "@assets/images/history/culture02Siv.webp";
import balneario from "@assets/images/home/represaSiv.webp";

function useHistoryPageData() {
  const images = [
    { img: catedral, alt: "Iglesica Catedral" },
    { img: tallados, alt: "Tallado chiquitano" },
    { img: tallados, alt: "Tallado chiquitano" },
    { img: catedral, alt: "Iglesica Catedral" },
    { img: balneario, alt: "Balneario de la represa guapomo" },
  ];
  const secuence = ["8", "4", "3", "3", "6"];
  const data = historyData.map((item, index) => ({
    ...item,
    image: !item.image ? images[index].img : item.image,
    altImage: !item.altImage ? images[index].alt : item.altImage,
    space: secuence[index],
  }));
  return data;
}

export default useHistoryPageData;
