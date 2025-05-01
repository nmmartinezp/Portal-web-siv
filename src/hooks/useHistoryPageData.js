import historyData from "@data/historyData.json";
import catedral from "@assets/catedral02Siv.webp";
import tallados from "@assets/culture02Siv.webp";
import balneario from "@assets/represaSiv.webp";

function useHistoryPageData() {
  const images = [catedral, tallados, tallados, catedral, balneario];
  const secuence = ["8", "4", "3", "3", "6"];
  const data = historyData.map((item, index) => ({
    ...item,
    image: !item.image ? images[index] : item.image,
    space: secuence[index],
  }));
  return data;
}

export default useHistoryPageData;
