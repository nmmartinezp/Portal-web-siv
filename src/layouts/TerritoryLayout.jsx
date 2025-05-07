function TerritoryLayout({ children, banner, description, content2 }) {
  return (
    <div className="w-full h-auto">
      <section className="w-full h-full grid grid-cols-12 gap-4">
        <div className="col-span-12 p-4 h-[35vh] md:h-[42vh]">{banner}</div>
        <div className="col-span-12 p-4 h-full">{description}</div>
      </section>
      <section className="w-full h-auto grid grid-cols-12 gap-4 py-6 md:py-12">
        {children}
      </section>
      <section className="w-full h-auto flex items-center justify-center">
        {content2}
      </section>
    </div>
  );
}

export default TerritoryLayout;
