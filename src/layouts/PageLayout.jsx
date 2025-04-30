function PageLayout({ bannerBox, menuContent }) {
  return (
    <div className="w-full h-[var(--myapp-main-height)] p-0 flex flex-col md:flex-row items-center justify-center">
      <section className="flex items-center justify-center w-full md:w-[40%] h-full p-4">
        {bannerBox}
      </section>
      <section className="flex items-center justify-center w-full md:w-[60%] h-full p-4">
        {menuContent}
      </section>
    </div>
  );
}

export default PageLayout;
