import React, { createContext, useState } from "react";
export const addNewsResponseContext = createContext();
export const editNewsResponseContext = createContext();
export const deleteNewsResponseContext = createContext();
export const addNewsCommentResponseContext = createContext();
export const deleteNewsResponseAlertContext = createContext();

function ContextShare({ children }) {
  const [addNewsResponse, setaddNewsResponse] = useState({});
  const [editNewsResponse, setEditNewsResponse] = useState({});
  const [addCommentResponce, setAddCommentResponce] = useState({});
  const [deleteNewsResponse, setdeleteNewsResponse] = useState({});
  const [dleteAlertResponse, setdeleteAlertResponse] = useState();

  return (
    <>
      <addNewsResponseContext.Provider
        value={{ addNewsResponse, setaddNewsResponse }}
      >
        <editNewsResponseContext.Provider
          value={{ editNewsResponse, setEditNewsResponse }}
        >
          <addNewsCommentResponseContext.Provider
            value={{ addCommentResponce, setAddCommentResponce }}
          >
            {" "}
            <deleteNewsResponseContext.Provider
              value={{ deleteNewsResponse, setdeleteNewsResponse }}
            >
              <deleteNewsResponseAlertContext.Provider
                value={{ dleteAlertResponse, setdeleteAlertResponse }}
              >
                {" "}
                {children}
              </deleteNewsResponseAlertContext.Provider>
            </deleteNewsResponseContext.Provider>
          </addNewsCommentResponseContext.Provider>
        </editNewsResponseContext.Provider>
      </addNewsResponseContext.Provider>
    </>
  );
}

export default ContextShare;
