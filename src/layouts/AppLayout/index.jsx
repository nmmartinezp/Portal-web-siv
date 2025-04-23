import measurements from "./AppLayout.module.css";

function AppLayout({ nav, page, footer }) {
  return (
    <>
      <nav className={`${measurements.body} ${measurements.nav}`}>{nav}</nav>
      <main className={`${measurements.body} ${measurements.page}`}>
        {page}
      </main>
      <footer className={`${measurements.body} ${measurements.footer}`}>
        {footer}
      </footer>
    </>
  );
}

export default AppLayout;
