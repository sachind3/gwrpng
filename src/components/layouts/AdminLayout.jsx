import { useContext } from "react";
import { AdminState, AppContext } from "../../context";
import { Outlet } from "react-router-dom";
import { Loader } from "../ui";
import GwrHeader from "./GwrHeader";

const AdminLayout = () => {
  const { isLoading } = useContext(AppContext);
  return (
    <>
      <GwrHeader />
      <AdminState>
        <Outlet />
      </AdminState>
      <Loader isLoading={isLoading} />
    </>
  );
};
export default AdminLayout;
