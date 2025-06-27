import NavBarProvider from "@/ui/NavBar/NavBarProvider";
import Footer from "@/ui/Footer";

function AppLayout({ children }) {
  return (
    <div className="w-screen min-h-[100vh] h-screen p-0 m-0 overflow-x-hidden scrollbar-hide">
      <NavBarProvider />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
