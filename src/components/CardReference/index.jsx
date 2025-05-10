import { Divider } from "@heroui/react";
import { useNavigate } from "react-router";

function CardReference({ id, children, image, altImg, title, to }) {
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
      className="w-auto h-full flex flex-col items-center justify-center"
    >
      <img
        alt={altImg}
        src={image}
        className="w-full h-[11vh] md:h-[20vh] object-cover brightness-90 rounded-md cursor-pointer hover:brightness-50"
        onClick={handleTab}
      />
      <div className="w-full h-auto py-2 text-left text-warning-400">
        <h4>{title}</h4>
      </div>
      <div className="w-full h-full text-justify">
        <p
          onClick={handleTab}
          className="cursor-pointer hover:text-warning-400"
        >
          {children}
        </p>
      </div>
      <Divider className="my-4 bg-foreground-300" />
    </div>
  );
}

export default CardReference;
