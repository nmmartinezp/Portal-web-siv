function MenuExplore({ id, children, title }) {
  return (
    <div
      id={id}
      key={id}
      className="w-full h-auto p-4 md:p-8 flex flex-col items-center justify-center rounded-xl bg-foreground-50"
    >
      <div className="w-full h-auto py-8 flex items-center justify-center">
        <h4 className="text-center text-2xl md:text-4xl">{title}</h4>
      </div>
      <div className="w-[98%] md:w-5/6 p-0 md:p-8 grid grid-cols-9 md:grid-cols-12 gap-8">
        {children}
      </div>
    </div>
  );
}

export default MenuExplore;
