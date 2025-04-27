import catedralSiv from "../assets/catedralSiv.webp";
import culture01Siv from "../assets/culture01Siv.webp";
import religionSiv from "../assets/religionSiv.webp";
import represaSiv from "../assets/represaSiv.webp";

function useDataCarousel() {
  const data = [
    {
      src: catedralSiv,
      title: "Historia",
      description:
        "Le puso el nombre de San Ignacio de Loyola, hoy San Ignacio de Velasco. Este fue el punto de partida de una gran iglesia, la más grande y ostentosa de toda la región.",
      navigate: "/historia",
    },
    {
      src: religionSiv,
      title: "Cultura",
      description:
        "La cultura tradicional es muy rica, edificios jesuitas, música, instrumentos de cultura chiquitana.",
      navigate: "/cultura",
    },
    {
      src: culture01Siv,
      title: "Territorio",
      description:
        "La ciudad es sede de la Diócesis de San Ignacio de Velasco, con jurisdicción de las provincias Velasco, Chiquitos, Ángel Sandoval y Germán Busch.",
      navigate: "/territorio",
    },
    {
      src: represaSiv,
      title: "Turismo",
      description:
        "Riqueza histórica, arqueológica, arquitectónica y la diversidad de recursos naturales y sus manifestaciones culturales con una identidad propia.",
      navigate: "/turismo",
    },
  ];
  return data;
}

export default useDataCarousel;
