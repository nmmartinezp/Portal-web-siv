function AppLayout({ nav, page, footer }) {
  return (
    <div
      className={`dark text-foreground bg-background h-screen w-full overflow-y-scroll scrollbar-hide`}
    >
      {nav}
      <main
        className={`w-full h-[93vh] p-0 overflow-y-scroll scrollbar-hide snap-y snap-mandatory scroll-smooth`}
      >
        {page}
        <footer className={`w-full p-4 bg-default-200 snap-start`}>
          {footer}
        </footer>
      </main>
    </div>
  );
}

export default AppLayout;
