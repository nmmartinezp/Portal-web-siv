import tourismData from "@data/tourismData.json";
import catedral from "@assets/images/photo/catedralSiv.webp";
import catedral2 from "@assets/images/photo/catedral03Siv.webp";
import catedral3 from "@assets/images/photo/catedralInteriorSiv.webp";
import plaza from "@assets/images/photo/plazaPrincipalSiv.webp";
import plaza2 from "@assets/images/photo/plazaPrincipal02Siv.webp";
import cuevayeso from "@assets/images/photo/cuevayeso01.webp";
import cuevayeso2 from "@assets/images/photo/cuevayeso02.webp";
import cuevayeso3 from "@assets/images/photo/cuevayeso03.webp";
import represa from "@assets/images/photo/represaSiv.webp";
import represa2 from "@assets/images/photo/represa02Siv.webp";
import represa3 from "@assets/images/photo/represa03Siv.webp";
import miradorCristo from "@assets/images/photo/miradorCristo01Siv.webp";
import miradorCristo2 from "@assets/images/photo/miradorCristo02Siv.webp";

function useTourismPageData() {
  const imagesSet = [
    [
      { src: catedral2, alt: "Catedral de san ignacio de velasco" },
      { src: catedral, alt: "Iglesica Catedral san ignacio de velasco" },
      {
        src: catedral3,
        alt: "Iglesica Catedral por dentro san ignacio de velasco",
      },
    ],
    [
      { src: cuevayeso, alt: "Cueva del yeso en San Ignacio de Velasco" },
      { src: cuevayeso2, alt: "Cueva del yeso San Ignacio de Velasco" },
      { src: cuevayeso3, alt: "Cueva del yeso en San Ignacio de Velasco" },
    ],
    [
      {
        src: represa,
        alt: "Parque de la represa guapomo san ignacio de velasco",
      },
      { src: represa2, alt: "represa guapomo san ignacio de velasco" },
      { src: represa3, alt: "represa guapomo san ignacio de velasco" },
    ],
    [
      { src: miradorCristo, alt: "Mirador del cristo san ignacio de velasco" },
      { src: miradorCristo2, alt: "Mirador del cristo san ignacio de velasco" },
    ],
    [
      { src: plaza, alt: "Plaza Principal San Ignacio de Velasco" },
      {
        src: plaza2,
        alt: "Plaza Principal 31 de julio San Ignacio de Velasco",
      },
    ],
  ];
  const secuence = [7, 5, 3, 3, 6];
  const data = tourismData.map((item, index) => ({
    ...item,
    images: [...item.images, ...imagesSet[index]],
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

export default useTourismPageData;
