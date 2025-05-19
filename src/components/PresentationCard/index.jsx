import { useNavigate } from "react-router";
import { Button, Divider } from "@heroui/react";
import { motion } from "motion/react";

function PresentationCard({ type, title, children, to, animation }) {
  const navigate = useNavigate();
  const x =
    window.innerWidth <= 540
      ? 0
      : animation === "left"
      ? -200
      : animation === "right"
      ? 200
      : 0;
  const handleClick = (event) => {
    if (event?.target && typeof event.target.blur === "function") {
      event.target.blur();
    }
    navigate(to);
  };
  const xTitle = window.innerWidth <= 540 ? 0 : 70;
  const xDivider = window.innerWidth <= 540 ? 0 : 30;
  return (
    <div className="flex flex-col justify-evenly md:justify-center items-center md:items-start w-full h-full p-2 md:p-8">
      {type === "principal" ? (
        <motion.h1
          className="pb-4 md:pb-6 text-center md:text-start text-3xl md:text-5xl text-warning-300 font-medium"
          initial={{
            opacity: 0,
            x:
              animation === "left"
                ? x - xTitle
                : animation === "right"
                ? x + xTitle
                : 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>
      ) : (
        <motion.h2
          className="pb-4 md:pb-6 text-center md:text-start text-3xl md:text-5xl text-warning-300 font-medium"
          initial={{
            opacity: 0,
            x:
              animation === "left"
                ? x - xTitle
                : animation === "right"
                ? x + xTitle
                : 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h2>
      )}
      <motion.div
        className="w-full h-auto"
        initial={{
          opacity: 0,
          x:
            animation === "left"
              ? x - xDivider
              : animation === "right"
              ? x + xDivider
              : 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Divider className="mb-6" />
      </motion.div>
      <motion.div
        className="text-justify pb-4 md:pb-10 text-sm md:text-base"
        initial={{
          opacity: 0,
          x:
            animation === "left"
              ? x - xDivider
              : animation === "right"
              ? x + xDivider
              : 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="w-full h-auto"
        initial={{
          opacity: 0,
          x:
            animation === "left"
              ? x - xDivider
              : animation === "right"
              ? x + xDivider
              : 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Divider className="mb-6" />
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
