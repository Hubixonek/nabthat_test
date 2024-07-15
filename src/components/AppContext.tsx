import { createContext, useState, useContext } from "react";

const AppContext = createContext(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [showPersonalData, setShowPersonalData] = useState(false);
  const handleReset = () => {
    setShowPersonalData(false);
  };
  return (
    <AppContext.Provider
      value={{ showPersonalData, setShowPersonalData, handleReset }}
    >
      {children}
    </AppContext.Provider>
  );
};
