import culutreData from "@data/cultureData.json";
import culture from "@assets/images/photo/culture01Siv.webp";

function useCulturePageData() {
  const images = [
    { src: culture, alt: "Escultura en pared de angel" },
    { src: culture, alt: "Escultura en pared de angel" },
  ];
  const links = [
    [
      {
        title: "Vive el arte de tallado",
        link: "/historia",
        type: "route",
      },
      {
        title: "Una herencia artistica",
        link: "/historia",
        type: "route",
      },
      {
        title: "En la historia",
        link: "/historia",
        type: "route",
      },
    ],
    [
      {
        title: "Vive la religion ignaciana",
        link: "/historia",
        type: "route",
      },
      {
        title: "Una herencia jesuita",
        link: "/historia",
        type: "route",
      },
      {
        title: "En la historia",
        link: "/historia",
        type: "route",
      },
    ],
  ];
  const imagesSet = [
    [
      [
        { src: culture, alt: "Escultura en pared de angel" },
        { src: culture, alt: "Escultura en pared de angel" },
      ],
      [
        { src: culture, alt: "Escultura en pared de angel" },
        { src: culture, alt: "Escultura en pared de angel" },
      ],
      [
        { src: culture, alt: "Escultura en pared de angel" },
        { src: culture, alt: "Escultura en pared de angel" },
      ],
    ],
    [
      [
        { src: culture, alt: "Escultura en pared de angel" },
        { src: culture, alt: "Escultura en pared de angel" },
      ],
      [
        { src: culture, alt: "Escultura en pared de angel" },
        { src: culture, alt: "Escultura en pared de angel" },
      ],
      [
        { src: culture, alt: "Escultura en pared de angel" },
        { src: culture, alt: "Escultura en pared de angel" },
      ],
    ],
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
