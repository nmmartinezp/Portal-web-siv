"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function ClientRender({ children, idScroll }) {
  const [mounClient, setMountClient] = useState(false);
  useEffect(() => {
    setMountClient(true);
  }, []);

  return mounClient ? (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.0 }}
      onAnimationComplete={() => {}}
    >
      {children}
    </motion.div>
  ) : null;
}

export default ClientRender;
