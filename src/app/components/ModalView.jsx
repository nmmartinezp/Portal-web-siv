"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/react";

function ModalView({ title, children, closeHref }) {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        router.push(closeHref, { scroll: false });
      }}
    >
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: 0.1,
          }}
          className="fixed opacity-0 z-40 w-screen h-screen backdrop-blur-lg flex items-center justify-center"
        >
          <motion.main
            role="dialog"
            aria-modal={true}
            initial={{ opacity: 0, y: "-5vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-5vh" }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
            className="dark bg-foreground-50 text-foreground opacity-0 flex flex-col justify-between w-[97%] md:w-3/4 min-h-[30vh] max-h-[95vh] md:max-h-[90vh] rounded-2xl z-50"
          >
            <article className="w-full h-auto">
              <section className="w-full h-16 border-b-1 border-zinc-600 flex items-center justify-start px-6">
                <h1 className="text-foreground text-lg font-semibold">
                  {title}
                </h1>
              </section>
              <section className="w-full flex flex-col p-6 text-base max-h-[70vh] md:max-h-[60vh] overflow-y-auto">
                {children}
              </section>
            </article>
            <section className="w-full h-16 border-t-1 border-zinc-600">
              <div className="w-full h-full flex items-center justify-end px-6">
                <Button
                  onPress={() => {
                    setShowModal(false);
                  }}
                  color="warning"
                  className="font-bold"
                >
                  Cerrar
                </Button>
              </div>
            </section>
          </motion.main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalView;
