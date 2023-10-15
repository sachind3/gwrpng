import { Outlet } from "react-router-dom";
import Header from "./Header";
import PicModal from "./PicModal";
import { useContext } from "react";
import { AppContext } from "../context";

const Layout = () => {
  const { openPic, setOpenPic } = useContext(AppContext);
  return (
    <>
      <Header />
      <Outlet />
      <PicModal openPic={openPic} setOpenPic={setOpenPic} />
    </>
  );
};
export default Layout;
