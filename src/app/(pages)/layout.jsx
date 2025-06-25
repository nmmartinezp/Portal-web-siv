import NavBarProvider from "@/ui/NavBarProvider";
import Footer from "@/ui/Footer";

function AppLayout({ children }) {
  return (
    <div className="w-screen min-h-[100vh] p-0 m-0">
      <NavBarProvider />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
