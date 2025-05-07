import tourismData from "@data/tourismData.json";
import catedral from "@assets/images/photo/catedralSiv.webp";
import plaza from "@assets/images/photo/plazaPrincipalSiv.webp";

function useTourismPageData() {
  const imagesSet = [
    [
      { src: plaza, alt: "Plaza Principal San Ignacio de Velasco" },
      { src: catedral, alt: "Iglesica Catedral" },
    ],
    [
      { src: plaza, alt: "Plaza Principal San Ignacio de Velasco" },
      { src: catedral, alt: "Iglesica Catedral" },
    ],
    [
      { src: plaza, alt: "Plaza Principal San Ignacio de Velasco" },
      { src: catedral, alt: "Iglesica Catedral" },
    ],
    [
      { src: plaza, alt: "Plaza Principal San Ignacio de Velasco" },
      { src: catedral, alt: "Iglesica Catedral" },
    ],
    [
      { src: plaza, alt: "Plaza Principal San Ignacio de Velasco" },
      { src: catedral, alt: "Iglesica Catedral" },
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
