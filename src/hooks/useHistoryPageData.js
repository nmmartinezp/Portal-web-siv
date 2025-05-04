import historyData from "@data/historyData.json";
import catedral from "@assets/images/photo/catedralSiv.webp";
import tallados from "@assets/images/photo/culture02Siv.webp";
import balneario from "@assets/images/photo/represaSiv.webp";
import plaza from "@assets/images/photo/plazaPrincipalSiv.webp";

function useHistoryPageData() {
  const images = [
    { img: plaza, alt: "Plaza Principal San Ignacio de Velasco" },
    { img: catedral, alt: "Iglesica Catedral" },
    { img: tallados, alt: "Tallado chiquitano" },
    { img: catedral, alt: "Iglesica Catedral" },
    { img: balneario, alt: "Balneario de la represa guapomo" },
  ];
  const secuence = [7, 5, 3, 3, 6];
  const data = historyData.map((item, index) => ({
    ...item,
    image: !item.image ? images[index].img : item.image,
    altImage: !item.altImage ? images[index].alt : item.altImage,
    space: secuence[index],
    identifier: item.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-"),
  }));
  return data;
}

export default useHistoryPageData;
