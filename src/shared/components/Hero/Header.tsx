function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <h1 className="flex flex-col font-bold pb-2">
      <span className="text-lg lg:text-xl pb-2 text-white/80">{subtitle}</span>
      <span className="text-3xl lg:text-6xl">{title}</span>
    </h1>
  );
}

export default Header;
