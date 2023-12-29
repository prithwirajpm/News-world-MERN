import React, { useContext, useEffect, useState } from "react";
import AddNews from "../Component/AddNews";
import NewsCard from "../Component/NewsCard";
import Admin from "./Admin";
import { usersNewsAPI } from "../services/allAPI";
import {
  addNewsResponseContext,
  deleteNewsResponseContext,
  editNewsResponseContext,
} from "../Context/ContextShare";
import { Col } from "react-bootstrap";

function AdminAddNews({ setshowadmin }) {
  const { addNewsResponse, setaddNewsResponse } = useContext(
    addNewsResponseContext
  );
  const { editNewsResponse, setEditNewsResponse } = useContext(
    editNewsResponseContext
  );
  const { deleteNewsResponse, setdeleteNewsResponse } = useContext(
    deleteNewsResponseContext
  );

  // States
  const [userNews, setUserNews] = useState([]);

  // GetUserNews
  const getUserNews = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await usersNewsAPI(reqHeader);
        if (result.status === 200) {
          setUserNews(result.data);
          console.log(result.data);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.error("Error fetching user news:", error);
      }
    }
  };

  useEffect(() => {
    getUserNews();
  }, [addNewsResponse, editNewsResponse, deleteNewsResponse]);

  return (
    <div>
      <aside>
        <Admin setshowadmin={setshowadmin} />
      </aside>
      <div
        className="mt-5 w-75 shadow"
        style={{ position: "absolute", top: "100px", left: "300px" }}
      >
        <div className="d-flex justify-content-end">
          <AddNews />
        </div>
        <div className="row w-100 mt-5 mb-5">
          {userNews?.length > 0 ? (
            userNews.map((items) => (
              <Col
                key={items.id} // Don't forget to add a unique key to each element in the array
                className="d-flex justify-content-center align-items-center"
                lg={4}
                sm={2}
                xl={4}
              >
                <NewsCard data={items} />
              </Col>
            ))
          ) : (
            <p>Nothing</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminAddNews;
