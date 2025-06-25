import catedral from "@assets/images/photo/catedralSiv.webp";
import sculpture from "@assets/images/photo/culture01Siv.webp";
import statuette from "@assets/images/photo/religionSiv.webp";
import balneario from "@assets/images/photo/represaSiv.webp";

function useDataCarousel() {
  const data = [
    {
      src: catedral,
      title: "San Ignacio de Velasco",
      description:
        "Le puso el nombre de San Ignacio de Loyola, hoy San Ignacio de Velasco. Este fue el punto de partida de una gran iglesia, la más grande y ostentosa de toda la región.",
      navigate: "/historia",
    },
    {
      src: statuette,
      title: "Tradiciones vivas",
      description:
        "La cultura tradicional es muy rica, edificios jesuitas, música, instrumentos de cultura chiquitana.",
      navigate: "/cultura",
    },
    {
      src: sculpture,
      title: "Tierra chiquitana",
      description:
        "La ciudad es sede de la Diócesis de San Ignacio de Velasco, con jurisdicción de las provincias Velasco, Chiquitos, Ángel Sandoval y Germán Busch.",
      navigate: "/territorio",
    },
    {
      src: balneario,
      title: "Visita un patrimonio",
      description:
        "Riqueza histórica, arqueológica, arquitectónica y la diversidad de recursos naturales y sus manifestaciones culturales con una identidad propia.",
      navigate: "/turismo",
    },
  ];
  return data;
}

export default useDataCarousel;
