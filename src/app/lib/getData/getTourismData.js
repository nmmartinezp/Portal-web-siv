import tourismData from "@/data/tourismData.json";

export function getTourismData() {
  const imagesRef = [
    {
      ref: {
        image: "/assets/images/photo/catedral04Siv.webp",
        altImage: "Iglesia Catedral de San Ignacio de Velasco",
      },
    },
    {
      ref: {
        image: "",
        altImage: "",
      },
    },
    {
      ref: {
        image: "/assets/images/photo/represa02Siv.webp",
        altImage: "Orillas de la Represa Guapomo en San Ignacio de Velasco",
      },
    },
    {
      ref: {
        image: "",
        altImage: "",
      },
    },
    {
      ref: {
        image: "/assets/images/photo/plazaPrincipal02Siv.webp",
        altImage: "Plaza Principal 31 de Julio San Ignacio de Velasco",
      },
    },
  ];

  const imagesSet = [
    [
      {
        src: "/assets/images/photo/catedral03Siv.webp",
        alt: "Catedral de san ignacio de velasco",
      },
      {
        src: "/assets/images/photo/catedralSiv.webp",
        alt: "Iglesica Catedral san ignacio de velasco",
      },
      {
        src: "/assets/images/photo/catedralInteriorSiv.webp",
        alt: "Iglesica Catedral por dentro san ignacio de velasco",
      },
    ],
    [
      {
        src: "/assets/images/photo/cuevayeso01.webp",
        alt: "Cueva del yeso en San Ignacio de Velasco",
      },
      {
        src: "/assets/images/photo/cuevayeso02.webp",
        alt: "Cueva del yeso San Ignacio de Velasco",
      },
      {
        src: "/assets/images/photo/cuevayeso03.webp",
        alt: "Cueva del yeso en San Ignacio de Velasco",
      },
    ],
    [
      {
        src: "/assets/images/photo/represaSiv.webp",
        alt: "Parque de la represa guapomo san ignacio de velasco",
      },
      {
        src: "/assets/images/photo/represa02Siv.webp",
        alt: "represa guapomo san ignacio de velasco",
      },
      {
        src: "/assets/images/photo/represa03Siv.webp",
        alt: "represa guapomo san ignacio de velasco",
      },
    ],
    [
      {
        src: "/assets/images/photo/miradorCristo01Siv.webp",
        alt: "Mirador del cristo san ignacio de velasco",
      },
      {
        src: "/assets/images/photo/miradorCristo02Siv.webp",
        alt: "Mirador del cristo san ignacio de velasco",
      },
    ],
    [
      {
        src: "/assets/images/photo/plazaPrincipalSiv.webp",
        alt: "Plaza Principal San Ignacio de Velasco",
      },
      {
        src: "/assets/images/photo/plazaPrincipal02Siv.webp",
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
    refHistory: item.refHistory.content
      ? { ...item.refHistory, ...imagesRef[index].ref }
      : item.refHistory,
  }));
  return data;
}
