import historyData from "@data/historyData.json";
import catedral from "@assets/images/home/catedral02Siv.webp";
import tallados from "@assets/images/history/culture02Siv.webp";
import balneario from "@assets/images/home/represaSiv.webp";

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
