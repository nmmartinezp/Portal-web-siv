import historyData from "@/data/historyData.json";

export function getHistories() {
  const images = [
    {
      img: "/assets/images/photo/plazaPrincipalSiv.webp",
      alt: "Plaza Principal San Ignacio de Velasco",
      ref: {
        image: "",
        altImage: "",
      },
    },
    {
      img: "/assets/images/photo/catedralSiv.webp",
      alt: "Iglesica Catedral",
      ref: {
        image: "/assets/images/photo/catedral03Siv.webp",
        altImage: "Catedral de San Ignacio de Velasco",
      },
    },
    {
      img: "/assets/images/photo/represa02Siv.webp",
      alt: "Represa Guapomo",
      ref: {
        image: "/assets/images/photo/represa03Siv.webp",
        altImage: "Represa Guapomo de San Ignacio de Velasco",
      },
    },
    {
      img: "/assets/images/photo/plazaPrincipal02Siv.webp",
      alt: "Plaza principal 31 de julio",
      ref: {
        image: "/assets/images/photo/plazaPrincipal02Siv.webp",
        altImage: "PLaza Principal 31 de Julio de San Ignacio de Velasco",
      },
    },
    {
      img: "/assets/images/photo/parquenoelkempffmercado02.webp",
      alt: "Cascadas parque noel kempff mercado",
      ref: {
        image: "",
        altImage: "",
      },
    },
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
    refTurismo: item.refTurismo.content
      ? { ...item.refTurismo, ...images[index].ref }
      : item.refTurismo,
  }));
  return data;
}
