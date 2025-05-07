function ArticleData({ id, children, title }) {
  return (
    <div id={id} key={id} className="w-full h-auto p-4 grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-4 flex items-center justify-center py-4">
        <h3 className="w-full text-start text-warning text-3xl md:text-5xl">
          {title}
        </h3>
      </div>
      <div className="col-span-12 md:col-span-8 pl-0 md:pl-6 py-6 flex items-center justify-center border-foreground-200 border-l-0 md:border-l border-t md:border-t-0">
        {children}
      </div>
    </div>
  );
}

export default ArticleData;
