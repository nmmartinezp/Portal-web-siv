function AppLayout({ nav, page, footer }) {
  return (
    <div
      className={`dark text-foreground bg-background h-screen w-full overflow-y-scroll scrollbar-hide`}
    >
      {nav}
      <main className={`w-full h-screen p-8`}>{page}</main>
      <footer className={`w-full p-4 bg-default-200`}>{footer}</footer>
    </div>
  );
}

export default AppLayout;
