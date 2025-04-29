import { useNavigate } from "react-router";
import { Button } from "@heroui/react";
import { motion } from "motion/react";

function PresentationCard({ type, title, children, to, animation }) {
  const navigate = useNavigate();
  const x = animation === "left" ? -200 : animation === "right" ? 200 : 0;
  const handleClick = () => {
    navigate(to);
  };
  return (
    <div className="flex flex-col justify-evenly md:justify-center items-center md:items-start w-full h-full p-2 md:p-8">
      {type === "principal" ? (
        <motion.h1
          className="pb-4 md:pb-10 text-center md:text-start text-3xl md:text-5xl"
          initial={{
            opacity: 0,
            x:
              animation === "left"
                ? x - 70
                : animation === "right"
                ? x + 70
                : 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>
      ) : (
        <motion.h2
          className="pb-4 md:pb-10 text-center md:text-start text-3xl md:text-5xl"
          initial={{
            opacity: 0,
            x:
              animation === "left"
                ? x - 70
                : animation === "right"
                ? x + 70
                : 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h2>
      )}
      <motion.div
        className="text-justify pb-4 md:pb-10 text-sm md:text-base"
        initial={{
          opacity: 0,
          x: animation === "left" ? x - 30 : animation === "right" ? x + 30 : 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="w-full md:w-auto"
        initial={{ opacity: 0, x: x }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Button
          onPress={handleClick}
          color="primary"
          size="lg"
          className="w-full md:w-auto"
        >
          Ver mas
        </Button>
      </motion.div>
    </div>
  );
}

export default PresentationCard;
