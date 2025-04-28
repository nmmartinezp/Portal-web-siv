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
      <section className="w-full h-[93vh] flex items-center justify-center px-2 snap-start">
        <div className="w-11/12 h-[78%] md:h-[93vh] flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center justify-center pt-10 p-4 w-11/12 md:w-[40%] h-[40%] md:h-full">
            {pt01}
          </div>
          <article className="flex items-center justify-center p-4 md:w-[60%] h-[60%] md:h-full">
            {art01}
          </article>
        </div>
      </section>
      <section className="w-full h-[93vh] flex items-center justify-center px-2 snap-start">
        <div className="w-11/12 h-[78%] md:h-[93vh] flex flex-col md:flex-row items-center justify-center">
          <article className="flex items-center justify-center p-4 md:w-[60%] h-[60%] md:h-full">
            {art02}
          </article>
          <div className="flex items-center justify-center p-4 w-11/12 md:w-[40%] h-[40%] md:h-full">
            {pt02}
          </div>
        </div>
      </section>
      <section className="w-full h-[93vh] flex items-center justify-center px-2 snap-start">
        <div className="w-11/12 h-[78%] md:h-[93vh] flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center justify-center p-4 w-11/12 md:w-[40%] h-[40%] md:h-full">
            {pt03}
          </div>
          <article className="flex items-center justify-center p-4 md:w-[60%] h-[60%] md:h-full">
            {art03}
          </article>
        </div>
      </section>
      <section className="w-full h-[93vh] flex items-center justify-center px-2 snap-start">
        <div className="w-11/12 h-[78%] md:h-[93vh] flex flex-col md:flex-row items-center justify-center">
          <article className="flex items-center justify-center p-4 md:w-[60%] h-[60%] md:h-full">
            {art04}
          </article>
          <div className="flex items-center justify-center p-4 w-11/12 md:w-[40%] h-[40%] md:h-full">
            {pt04}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeLayout;
