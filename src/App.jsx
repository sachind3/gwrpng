import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Gwr from "./pages/Gwr";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.post(
        "https://backend-pandggwr.solmc.in/index.php",
        {
          operation: "get",
        }
      );
      if (res.status === 200) {
        setData(res.data.records);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
