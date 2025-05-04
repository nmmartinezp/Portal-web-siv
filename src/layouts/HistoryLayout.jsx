import React from "react";

function HistoryLayout({ banner, content1, content2 }) {
  return (
    <div className="w-full h-auto">
      <section className="w-full h-[35vh] md:h-[42vh] flex items-center justify-center">
        {banner}
      </section>
      <section className="w-full h-auto flex items-center justify-center">
        {content1}
      </section>
      <section className="w-full h-auto flex items-center justify-center">
        <div className="w-full flex flex-col">{content2}</div>
      </section>
    </div>
  );
}

export default HistoryLayout;
