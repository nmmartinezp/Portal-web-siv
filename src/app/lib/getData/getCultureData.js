import culutreData from "@/data/cultureData.json";

export function getCultureData() {
  const images = [
    {
      src: "/assets/images/photo/culture01Siv.webp",
      alt: "Escultura en pared de angel",
    },
    {
      src: "/assets/images/photo/culturaMusicaSiv.webp",
      alt: "Musica barroca y auctoctona en san ignacio de velasco",
    },
    {
      src: "/assets/images/photo/cabildo1Siv.webp",
      alt: "Posesion del cabildo indigenal de san ignacio de velasco",
    },
    {
      src: "/assets/images/photo/religion2Siv.webp",
      alt: "Religion ignaciana",
    },
  ];
  const links = [
    [
      {
        title: "Visita la iglesia Catedral",
        link: "/turismo/la-catedral-de-san-ignacio-de-velasco",
        type: "route",
      },
      {
        title: "Recorre la plaza principal",
        link: "/turismo/la-plaza-principal-31-de-julio",
        type: "route",
      },
    ],
    [
      {
        title: "Aprende de la historia de San Ignacio de Velasco",
        link: "/historia/historia-de-san-ignacio-de-velasco",
        type: "route",
      },
    ],
    [],
    [
      {
        title: "La historia del templo Ignaciano",
        link: "/historia/historia-de-la-catedral-de-san-ignacio-de-velasco",
        type: "route",
      },
    ],
  ];
  const imagesSet = [
    [
      [
        {
          src: "/assets/images/photo/culture02Siv.webp",
          alt: "Tallado y pintado en madera figura de angel",
        },
        {
          src: "/assets/images/photo/talllado01Siv.webp",
          alt: "Tallado de horcón en madera",
        },
        {
          src: "/assets/images/photo/tallado02Siv.webp",
          alt: "Tallado en progeso de angel",
        },
      ],
      [
        {
          src: "/assets/images/photo/ceramica01.webp",
          alt: "Mascaras, angeles de barro losa en preparación",
        },
        {
          src: "/assets/images/photo/ceramica02.webp",
          alt: "Macetas, fonderos, fuentes de barro losa",
        },
        {
          src: "/assets/images/photo/ceramica03.webp",
          alt: "Jarrones, pailas de barro losa",
        },
      ],
      [
        {
          src: "/assets/images/photo/tejido03.webp",
          alt: "Cubre mesas tejido con diseños chiquitano",
        },
        { src: "/assets/images/photo/tejido01.webp", alt: "Mantel decorativo" },
        {
          src: "/assets/images/photo/tejido02.webp",
          alt: "Manta con diseños chiquitanos",
        },
      ],
    ],
    [],
    [],
    [],
  ];
  const data = culutreData
    .filter((_, index) => index !== 0)
    .map((item, index) => ({
      ...item,
      image:
        item.image && Object.keys(item.image).length <= 0
          ? images[index]
          : item.image,
      links: [...item.links, ...links[index]],
      content:
        Array.isArray(item.content) && item.content.length > 0
          ? item.content.map((item, indexSub) => ({
              ...item,
              images: [...item.images, ...imagesSet[index][indexSub]],
              identifier: item.title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9\s-]/g, "")
                .trim()
                .replace(/\s+/g, "-"),
            }))
          : item.content,
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
