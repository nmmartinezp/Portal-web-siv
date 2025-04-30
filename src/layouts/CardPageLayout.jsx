function CardPageLayout({ children, cols }) {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div
        className={`max-w-[97%] md:max-w-[90%] w-[97%] md:w-[90%] h-auto gap-3 grid ${cols} p-8`}
      >
        {children}
      </div>
    </div>
  );
}

export default CardPageLayout;
