import { Divider } from "@heroui/react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router";

function CardExplore({ id, children, to, toHashLink = "#", image, title }) {
  const navigate = useNavigate();

  const handleTab = () => {
    if (to) {
      navigate(to);
    }
  };
  return (
    <div
      id={id}
      key={id}
      className="w-full h-full flex items-center justify-center"
    >
      <HashLink
        smooth
        to={toHashLink}
        className="w-[35%] md:w-[45%] h-[10vh] md:h-[18vh]"
      >
        <img
          loading="lazy"
          src={image}
          className="w-full h-full object-cover brightness-90 rounded-md cursor-pointer hover:brightness-50"
          onClick={to ? handleTab : () => {}}
        />
      </HashLink>

      <div className="w-[65%] md:w-[55%] h-full px-4 flex flex-col items-start justify-start">
        <div className="w-auto h-auto py-0 text-left text-warning-400">
          <h4>{title}</h4>
        </div>
        <Divider className="my-1 bg-foreground-300" />
        <div className="w-auto h-full text-justify">
          <HashLink smooth to={toHashLink}>
            <p
              onClick={to ? handleTab : () => {}}
              className="cursor-pointer text-foreground text-xs md:text-medium hover:text-warning-400"
            >
              {children}
            </p>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default CardExplore;
