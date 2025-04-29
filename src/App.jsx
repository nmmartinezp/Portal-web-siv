import { Outlet } from "react-router";
import AppLayout from "@layouts/AppLayout";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import TitleUpdater from "@components/TitleUpdater";
import "./App.css";

function App() {
  return (
    <>
      <TitleUpdater />
      <AppLayout nav={<NavBar />} page={<Outlet />} footer={<Footer />} />
    </>
  );
}

export default App;
