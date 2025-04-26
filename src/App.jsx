import { Outlet } from "react-router";
import AppLayout from "./layouts/AppLayout";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <AppLayout
      nav={<NavBar />}
      page={<Outlet />}
      footer={
        <>
          <span className="text-3xl font-bold underline">Hello world!</span>
        </>
      }
    />
  );
}

export default App;
