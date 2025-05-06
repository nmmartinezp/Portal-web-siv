function CultureLayout({ children, banner, logo, description, content2 }) {
  return (
    <div className="">
      <section className="w-full h-full grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-7 p-4 h-auto md:h-[41vh]">
          {banner}
        </div>
        <div className="col-span-5 md:col-span-5 p-4 h-full md:h-[41vh]">
          {logo}
        </div>
        <div className="col-span-7 md:col-span-12 p-4 h-full">
          {description}
        </div>
      </section>
      <section className="w-full h-auto grid grid-cols-12 gap-4 py-12">
        {children}
      </section>
      <section className="w-full h-auto flex items-center justify-center">
        {content2}
      </section>
    </div>
  );
}

export default CultureLayout;
