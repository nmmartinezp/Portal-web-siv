import { motion } from "motion/react";

function HomeLayout({
  carosusel,
  pt01,
  art01,
  pt02,
  art02,
  pt03,
  art03,
  pt04,
  art04,
}) {
  return (
    <>
      <section className="w-full h-[93vh] px-2 flex items-start justify-center snap-start">
        {carosusel}
      </section>
      <section className="w-full h-[93vh] flex items-center justify-center px-2 snap-start">
        <div className="w-11/12 h-[78%] md:h-[93vh] flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="flex items-center justify-center pt-10 p-4 w-11/12 md:w-[40%] h-[40%] md:h-full"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {pt01}
          </motion.div>
          <motion.article
            className="flex items-center justify-center p-4 md:w-[60%] h-[60%] md:h-full"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {art01}
          </motion.article>
        </div>
      </section>
      <section className="w-full h-[93vh] flex items-center justify-center px-2 snap-start">
        <div className="w-11/12 h-[78%] md:h-[93vh] flex flex-col md:flex-row items-center justify-center">
          <motion.article
            className="flex items-center justify-center p-4 md:w-[60%] h-[60%] md:h-full"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {art02}
          </motion.article>
          <motion.div
            className="flex items-center justify-center p-4 w-11/12 md:w-[40%] h-[40%] md:h-full"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {pt02}
          </motion.div>
        </div>
      </section>
      <section className="w-full h-[93vh] flex items-center justify-center px-2 snap-start">
        <div className="w-11/12 h-[78%] md:h-[93vh] flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="flex items-center justify-center p-4 w-11/12 md:w-[40%] h-[40%] md:h-full"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {pt03}
          </motion.div>
          <motion.article
            className="flex items-center justify-center p-4 md:w-[60%] h-[60%] md:h-full"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {art03}
          </motion.article>
        </div>
      </section>
      <section className="w-full h-[93vh] flex items-center justify-center px-2 snap-start">
        <div className="w-11/12 h-[78%] md:h-[93vh] flex flex-col md:flex-row items-center justify-center">
          <motion.article
            className="flex items-center justify-center p-4 md:w-[60%] h-[60%] md:h-full"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {art04}
          </motion.article>
          <motion.div
            className="flex items-center justify-center p-4 w-11/12 md:w-[40%] h-[40%] md:h-full"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {pt04}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomeLayout;
