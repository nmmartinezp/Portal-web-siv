import { motion } from "motion/react";

function HomeLayout({
  animexPicture,
  duration,
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
  const computedAnimation = window.innerWidth <= 540 ? 0 : animexPicture;
  const computedDuration = window.innerWidth <= 540 ? 0 : duration;
  const sectionStyle =
    "w-full h-[var(--myapp-main-height)] px-2 flex items-center justify-center snap-start";
  const divContainerStyle =
    "w-11/12 h-[90%] md:h-[var(--myapp-main-height)] flex flex-col md:flex-row items-center justify-center";
  const divPictureStyle =
    "flex items-center justify-center p-4 w-11/12 md:w-[40%] h-[40%] md:h-full";
  const articuleStyle =
    "flex items-center justify-center p-4 md:w-[60%] h-[60%] md:h-full";

  return (
    <>
      <section className="w-full h-[var(--myapp-main-height)] px-2 flex items-start justify-center snap-start">
        {carosusel}
      </section>
      <section className={`${sectionStyle}`}>
        <div className={`${divContainerStyle}`}>
          <motion.div
            className={`${divPictureStyle}`}
            initial={{ opacity: 0, x: computedAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: computedDuration }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {pt01}
          </motion.div>
          <article className={`${articuleStyle}`}>{art01}</article>
        </div>
      </section>
      <section className={`${sectionStyle}`}>
        <div className={`${divContainerStyle}`}>
          <article className={`${articuleStyle}`}>{art02}</article>
          <motion.div
            className={`${divPictureStyle}`}
            initial={{ opacity: 0, x: -computedAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: computedDuration }}
            viewport={{ once: true }}
          >
            {pt02}
          </motion.div>
        </div>
      </section>
      <section className={`${sectionStyle}`}>
        <div className={`${divContainerStyle}`}>
          <motion.div
            className={`${divPictureStyle}`}
            initial={{ opacity: 0, x: computedAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: computedDuration }}
            viewport={{ once: true }}
          >
            {pt03}
          </motion.div>
          <article className={`${articuleStyle}`}>{art03}</article>
        </div>
      </section>
      <section className={`${sectionStyle}`}>
        <div className={`${divContainerStyle}`}>
          <article className={`${articuleStyle}`}>{art04}</article>
          <motion.div
            className={`${divPictureStyle}`}
            initial={{ opacity: 0, x: -computedAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: computedDuration }}
            viewport={{ once: true }}
          >
            {pt04}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HomeLayout;
