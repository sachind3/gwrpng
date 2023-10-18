import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [openPic, setOpenPic] = useState({
    show: false,
    image: null,
  });
  const store = { openPic, setOpenPic, isLoading, setIsLoading };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
