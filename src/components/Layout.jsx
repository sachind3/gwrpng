import { Outlet } from "react-router-dom";
import Header from "./Header";
import PicModal from "./PicModal";
import { useContext } from "react";
import { AppContext } from "../context";
import { Loader } from "./ui";

const Layout = () => {
  const { openPic, setOpenPic, isLoading } = useContext(AppContext);
  return (
    <>
      <Header />
      <Outlet />
      <PicModal openPic={openPic} setOpenPic={setOpenPic} />
      <Loader isLoading={isLoading} />
    </>
  );
};
export default Layout;
