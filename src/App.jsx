import { Outlet } from "react-router";
import AppLayout from "./layouts/AppLayout";
import "./App.css";

function App() {
  return (
    <AppLayout
      nav={<>Hola mundo</>}
      page={<Outlet />}
      footer={<>Pie de pagina</>}
    />
  );
}

export default App;
