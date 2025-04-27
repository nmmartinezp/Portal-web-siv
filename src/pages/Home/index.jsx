import HomeLayout from "../../layouts/HomeLayout";
import Carousel from "../../components/Carousel";
import useDataCarousel from "../../hooks/useDataCarousel";

function Home() {
  const dataCarousel = useDataCarousel();
  return <HomeLayout carosusel={<Carousel data={dataCarousel} />} />;
}

export default Home;
