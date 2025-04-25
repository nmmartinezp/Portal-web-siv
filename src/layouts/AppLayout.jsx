function AppLayout({ nav, page, footer }) {
  const modeTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  return (
    <div
      className={`${modeTheme} text-foreground bg-background h-screen w-full overflow-y-scroll`}
    >
      {nav}
      <main className={`w-full h-screen p-8`}>{page}</main>
      <footer className={`w-full p-4`}>{footer}</footer>
    </div>
  );
}

export default AppLayout;
