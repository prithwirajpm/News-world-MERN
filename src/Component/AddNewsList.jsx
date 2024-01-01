import React, { useContext, useEffect, useState } from "react";
import NewsDashBoard from "../Pages/NewsDashBoard";
import NewsCard from "./NewsCard";
import { Col } from "react-bootstrap";
import AddNews from "./AddNews";
import { allNewsAPI, usersNewsAPI } from "../services/allAPI";
import {
  addNewsResponseContext,
  deleteNewsResponseContext,
  editNewsResponseContext,
} from "../Context/ContextShare";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import UserProfile from "./UserProfile";

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
  const [listNews, setListNews] = useState([]);
  const [listUser, setListUser] = useState();

  // getIds
  const getIdDetails = async () => {
    const usersIdes = sessionStorage.getItem("existingUser");
    const usersIdesArray = JSON.parse(usersIdes);
    setListUser(usersIdesArray._id);
  };
  console.log(listUser);
  // getAll project
  const getAllProjects = async () => {
    const result = await allNewsAPI();
    if (result.status === 200) {
      console.log(result.data);
      setListNews(result.data);
    } else {
      console.log(result.response.data);
    }
  };

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
    getAllProjects();
    getIdDetails();
  }, [addNewsResponse, editNewsResponse, deleteNewsResponse]);

  return (
    <div>
      <div className="d-flex justify-content-end align-items-start m-3">
        <AddNews />
        <UserProfile />
      </div>
      <div className="d-flex justify-content-center">
        <Stack sx={{ width: "80%" }} spacing={2}>
          {listNews.some(
            (item) => item.blockSection > 2 && item.userId == listUser
          ) ? (
            <Alert severity="warning">
              Please delete this News :
              {
                listNews.find(
                  (item) => item.blockSection > 2 && item.userId === listUser
                ).newsTitle
              }{" "}
            </Alert>
          ) : null}
        </Stack>
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
