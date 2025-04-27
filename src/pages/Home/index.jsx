import Carousel from "../../components/Carousel";
import useDataCarousel from "../../hooks/useDataCarousel";

function Home() {
  const dataCarousel = useDataCarousel();
  return (
    <>
      <Carousel data={dataCarousel} />
    </>
  );
}

export default Home;
