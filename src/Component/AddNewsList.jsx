import React, { useContext, useEffect, useState } from "react";
import NewsDashBoard from "../Pages/NewsDashBoard";
import NewsCard from "./NewsCard";
import { Col } from "react-bootstrap";
import AddNews from "./AddNews";
import { usersNewsAPI } from "../services/allAPI";
import {
  addNewsResponseContext,
  deleteNewsResponseContext,
  editNewsResponseContext,
} from "../Context/ContextShare";

function AddNewsList() {
  // ContextAPI
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
      <NewsDashBoard />
      <div className="d-flex justify-content-end align-items-start m-3">
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
  );
}

export default AddNewsList;
