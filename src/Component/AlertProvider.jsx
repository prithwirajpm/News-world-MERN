// AlertContext.js
import { createContext, useState } from "react";

export const AlertContext = createContext();

function AlertProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <AlertContext.Provider value={{ alertMessage, setAlertMessage }}>
      {children}
    </AlertContext.Provider>
  );
}

export default AlertProvider;
