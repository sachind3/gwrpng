import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [openPic, setOpenPic] = useState({
    show: false,
    image: null,
  });
  const store = { openPic, setOpenPic };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
