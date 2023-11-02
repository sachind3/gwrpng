import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Gwr from "./pages/Gwr";
import AdminLayout from "./components/layouts/AdminLayout";
import GwrLayout from "./components/layouts/GwrLayout";
import Verifier from "./pages/Verifier";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="admin" element={<Admin />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="verifier" element={<Verifier />} />
      </Route>
      <Route element={<GwrLayout />}>
        <Route path="gwr" element={<Gwr />} />
      </Route>
    </Routes>
  );
};
export default App;
