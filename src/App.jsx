import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Gwr from "./pages/Gwr";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="admin" element={<Admin />} />
      <Route path="gwr" element={<Gwr />} />
    </Routes>
  );
};
export default App;
