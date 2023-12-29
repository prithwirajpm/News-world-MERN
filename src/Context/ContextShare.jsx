import React, { createContext, useState } from "react";
export const addNewsResponseContext = createContext();
export const editNewsResponseContext = createContext();
export const deleteNewsResponseContext = createContext();
export const addNewsCommentResponseContext = createContext();
export const userListIdResponseContext = createContext();

function ContextShare({ children }) {
  const [addNewsResponse, setaddNewsResponse] = useState({});
  const [editNewsResponse, setEditNewsResponse] = useState({});
  const [addCommentResponce, setAddCommentResponce] = useState({});
  const [deleteNewsResponse, setdeleteNewsResponse] = useState({});
  const [userListIdResponse, setuserListIdResponse] = useState({});

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
              <userListIdResponseContext.Provider
                value={{ userListIdResponse, setuserListIdResponse }}
              >
                {" "}
                {children}
              </userListIdResponseContext.Provider>
            </deleteNewsResponseContext.Provider>
          </addNewsCommentResponseContext.Provider>
        </editNewsResponseContext.Provider>
      </addNewsResponseContext.Provider>
    </>
  );
}

export default ContextShare;
