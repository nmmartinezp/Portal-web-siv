function TourismLayout({ children, banner, content2 }) {
  return (
    <div className="w-full h-auto">
      <section className="w-full h-auto md:h-[42vh] flex items-center justify-center">
        {banner}
      </section>
      <section className="w-full h-auto flex flex-col items-center justify-center">
        {children}
      </section>
      <section className="w-full h-auto flex items-center justify-center">
        <div className="w-full flex flex-col">{content2}</div>
      </section>
    </div>
  );
}

export default TourismLayout;
