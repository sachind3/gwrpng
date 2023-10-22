import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();
export const AdminContext = createContext();

export const AppState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [openPic, setOpenPic] = useState({
    show: false,
    image: null,
  });
  const store = { openPic, setOpenPic, isLoading, setIsLoading };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const AdminState = ({ children }) => {
  const [records, setRecords] = useState([]);
  const fetchRecords = async () => {
    try {
      const res = await axios.post(
        "https://backend-pandggwr.solmc.in/index.php",
        {
          operation: "get",
        }
      );
      if (res.status === 200) {
        setRecords(res.data.records);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const actionUpdateRecord = async (id, status) => {
    try {
      const res = await axios.post(
        "https://backend-pandggwr.solmc.in/index.php",
        {
          operation: "update_status",
          record_id: id,
          status: status,
        }
      );
      if (res.status === 200) {
        toast.success("Data updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecords();
  }, []);

  const store = { records, setRecords, actionUpdateRecord };
  return (
    <AdminContext.Provider value={store}>{children}</AdminContext.Provider>
  );
};
