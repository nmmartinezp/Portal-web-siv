"use client";

import { motion } from "framer-motion";

function MotionToX({
  direction,
  children,
  animate = false,
  h = "full",
  items = "center",
}) {
  return (
    <motion.div
      initial={{
        x: animate ? (direction === "right" ? "-20vw" : "20vw") : 0,
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
      className={`w-full ${
        h === "full" ? "h-full" : "h-auto"
      } flex flex-col items-center ${
        items === "center" ? "md:items-center" : "md:items-start"
      } justify-center`}
    >
      {children}
    </motion.div>
  );
}

export default MotionToX;
