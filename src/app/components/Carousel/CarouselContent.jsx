import Tarjet from "./Tarjet";
import "@/styles/animation/animationCarousel.css";

export default function CarouselContent({ data }) {
  return (
    <div className="relative w-full h-[var(--myapp-main-height)] mx-2 overflow-hidden">
      {data.map((item, index) => (
        <Tarjet
          key={`tj-${index}`}
          index={index}
          title={item.title}
          description={item.description}
          src={item.src}
          href={item.navigate}
        />
      ))}
    </div>
  );
}
