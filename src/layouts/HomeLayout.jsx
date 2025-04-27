import React from "react";

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
      <section className="w-full h-[93vh] px-2 flex items-center justify-center snap-start">
        <div>{pt01}</div>
        <article>{art01}</article>
      </section>
      <section className="w-full h-[93vh] px-2 flex items-center justify-center snap-start">
        <article>{art02}</article>
        <div>{pt02}</div>
      </section>
      <section className="w-full h-[93vh] px-2 flex items-center justify-center snap-start">
        <div>{pt03}</div>
        <article>{art03}</article>
      </section>
      <section className="w-full h-[93vh] px-2 flex items-center justify-center snap-start">
        <article>{art04}</article>
        <div>{pt04}</div>
      </section>
    </>
  );
}

export default HomeLayout;
