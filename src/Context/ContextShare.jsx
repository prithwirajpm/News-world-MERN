import React, { createContext, useState } from "react";
export const addNewsResponseContext = createContext();

function ContextShare({ children }) {
  const [addNewsResponse, setaddNewsResponse] = useState({});
  return (
    <>
      <addNewsResponseContext.Provider
        value={{ addNewsResponse, setaddNewsResponse }}
      >
        {children}
      </addNewsResponseContext.Provider>
    </>
  );
}

export default ContextShare;
