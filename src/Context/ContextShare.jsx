import React, { createContext, useState } from "react";
export const addNewsResponseContext = createContext();
export const editNewsResponseContext = createContext();

function ContextShare({ children }) {
  const [addNewsResponse, setaddNewsResponse] = useState({});
  const [editNewsResponse, setEditNewsResponse] = useState({});
  return (
    <>
      <addNewsResponseContext.Provider
        value={{ addNewsResponse, setaddNewsResponse }}
      >
        <editNewsResponseContext.Provider
          value={{ editNewsResponse, setEditNewsResponse }}
        >
          {children}
        </editNewsResponseContext.Provider>
      </addNewsResponseContext.Provider>
    </>
  );
}

export default ContextShare;
