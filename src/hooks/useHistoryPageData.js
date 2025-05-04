import historyData from "@data/historyData.json";
import catedral from "@assets/images/photo/catedralSiv.webp";
import represaGuapomo from "@assets/images/photo/represa02Siv.webp";
import plaza from "@assets/images/photo/plazaPrincipalSiv.webp";
import nkmParque from "@assets/images/photo/parquenoelkempffmercado02.webp";
import plazaPrincipal from "@assets/images/photo/plazaPrincipal02Siv.webp";

function useHistoryPageData() {
  const images = [
    { img: plaza, alt: "Plaza Principal San Ignacio de Velasco" },
    { img: catedral, alt: "Iglesica Catedral" },
    { img: represaGuapomo, alt: "Represa Guapomo" },
    { img: plazaPrincipal, alt: "Plaza principal 31 de julio" },
    { img: nkmParque, alt: "Cascadas parque noel kempff mercado" },
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
