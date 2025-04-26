function AppLayout({ nav, page, footer }) {
  return (
    <div
      className={`my-theme text-foreground bg-background h-screen w-full overflow-y-scroll`}
    >
      {nav}
      <main className={`w-full h-screen p-8`}>{page}</main>
      <footer className={`w-full p-4`}>{footer}</footer>
    </div>
  );
}

export default AppLayout;
