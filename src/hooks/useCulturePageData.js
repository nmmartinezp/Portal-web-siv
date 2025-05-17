import culutreData from "@data/cultureData.json";
import culture from "@assets/images/photo/culture01Siv.webp";
import tallado1 from "@assets/images/photo/culture02Siv.webp";
import tallado2 from "@assets/images/photo/talllado01Siv.webp";
import tallado3 from "@assets/images/photo/tallado02Siv.webp";
import ceramica1 from "@assets/images/photo/ceramica01.webp";
import ceramica2 from "@assets/images/photo/ceramica02.webp";
import ceramica3 from "@assets/images/photo/ceramica03.webp";
import tejido1 from "@assets/images/photo/tejido01.webp";
import tejido2 from "@assets/images/photo/tejido02.webp";
import tejido3 from "@assets/images/photo/tejido03.webp";
import musica1 from "@assets/images/photo/culturaMusicaSiv.webp";
import cabildo1 from "@assets/images/photo/cabildo1Siv.webp";
import religion1 from "@assets/images/photo/religion2Siv.webp";

function useCulturePageData() {
  const images = [
    { src: culture, alt: "Escultura en pared de angel" },
    {
      src: musica1,
      alt: "Musica barroca y auctoctona en san ignacio de velasco",
    },
    {
      src: cabildo1,
      alt: "Posesion del cabildo indigenal de san ignacio de velasco",
    },
    {
      src: religion1,
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
        link: "/historia/catedral-de-san-ignacio-de-velasco",
        type: "route",
      },
    ],
  ];
  const imagesSet = [
    [
      [
        { src: tallado1, alt: "Tallado y pintado en madera figura de angel" },
        { src: tallado2, alt: "Tallado de horcón en madera" },
        { src: tallado3, alt: "Tallado en progeso de angel" },
      ],
      [
        {
          src: ceramica1,
          alt: "Mascaras, angeles de barro losa en preparación",
        },
        { src: ceramica2, alt: "Macetas, fonderos, fuentes de barro losa" },
        { src: ceramica3, alt: "Jarrones, pailas de barro losa" },
      ],
      [
        { src: tejido3, alt: "Cubre mesas tejido con diseños chiquitano" },
        { src: tejido1, alt: "Mantel decorativo" },
        { src: tejido2, alt: "Manta con diseños chiquitanos" },
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

export default useCulturePageData;
