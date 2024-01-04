import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import Collapse from "@mui/material/Collapse";
import BlockIcon from "@mui/icons-material/Block";
import { Form } from "react-bootstrap";
import { BASE_URL } from "../services/baseurl";
import EditNews from "../Component/EditNews";
import "animate.css";
import {
  deleteCommentAPI,
  deleteNewsAPI,
  dislikeNewsAPI,
  getCommentAPI,
  getLikesAndDislikesAPI,
  likeNewsAPI,
  reportNewsAPI,
} from "../services/allAPI";
import AddNewsComment from "./AddNewsComment";
import { useContext } from "react";
import {
  addNewsCommentResponseContext,
  deleteNewsResponseContext,
} from "../Context/ContextShare";
import { Link } from "react-router-dom";

export default function NewsCard({ data }) {
  const [loggedin, setLoggedin] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [usersComment, setUsersComment] = useState([]);
  const [userCommentDelete, setUserCommentDelete] = useState({});
  const [report, SetRepot] = useState(true);
  const [likes, setLikes] = useState(0); // Initialize likes state
  const [dislikes, setDislikes] = useState(0);
  const { addCommentResponce, setAddCommentResponce } = useContext(
    addNewsCommentResponseContext
  );
  const { deleteNewsResponse, setdeleteNewsResponse } = useContext(
    deleteNewsResponseContext
  );
  const existingUserString = sessionStorage.getItem("existingUser");
  const loggedUserId = existingUserString
    ? JSON.parse(existingUserString)._id
    : null;

  useEffect(() => {
    setLoggedin(!!sessionStorage.getItem("token"));
    getCommentNews();
    getLikesAndDislikes();
  }, [addCommentResponce, userCommentDelete]);

  const handleDlete = async (id) => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const result = await deleteNewsAPI(id, reqHeader);
    if (result.status === 200) {
      alert("Delete News");
      setdeleteNewsResponse(result.data);
    } else {
      alert(result.response.data);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // DeleteComment

  const handleDleteComment = async (id) => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const result = await deleteCommentAPI(id, reqHeader);
    if (result.status === 200) {
      alert("Delete This Comment ");
      setUserCommentDelete(result.data);
    } else {
      alert(result.response.data);
    }
  };
  // GetComment List

  const getCommentNews = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await getCommentAPI(reqHeader);
        if (result.status === 200) {
          setUsersComment(result.data);
          console.log(result.data);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.error("Error fetching user news:", error);
      }
    }
  };

  // LIKEBUtton
  const handleLike = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const result = await likeNewsAPI(data._id, {}, reqHeader);
      if (result.status === 200) {
        // Update the likes count in the state
        setLikes(result.data.likes);
      } else {
        alert(result.response.data);
      }
    } catch (error) {
      console.error("Error handling like:", error);
    }
  };

  // DISLIKE button
  const handleDislike = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const result = await dislikeNewsAPI(data._id, {}, reqHeader);
      if (result.status === 200) {
        // Update the dislikes count in the state
        setDislikes(result.data.dislikes);
      } else {
        alert(result.response.data);
      }
    } catch (error) {
      console.error("Error handling dislike:", error);
    }
  };

  // GetALLDATA
  const getLikesAndDislikes = async () => {
    try {
      const result = await getLikesAndDislikesAPI(data._id);
      if (result.status === 200) {
        console.log("Received data:", result.data);
        setLikes(result.data.likes);
        setDislikes(result.data.dislikes);
        console.log("Likes and dislikes updated:", likes, dislikes);
      } else {
        alert(result.response.data);
      }
    } catch (error) {
      console.error("Error fetching likes and dislikes:", error);
    }
  };

  // REportSection
  const handleReport = async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const result = await reportNewsAPI(id, reqHeader);

      if (result.status === 200) {
        // Update the state or perform any action upon successful report
        alert("Successfully reported the news.");
        SetRepot(false); // Assuming setReport is a state updater function
      } else {
        // Handle error response from the API
        alert(result.response.data);
      }
    } catch (error) {
      console.error("Error handling report:", error);
      // Handle other errors (e.g., network issues)
    }
  };

  useEffect(() => {}, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          loggedUserId && loggedUserId == data.userId ? (
            <div>
              <IconButton aria-label="settings">
                <EditNews editProject={data} />
              </IconButton>
              <IconButton aria-label="settings">
                <DeleteSweepOutlinedIcon
                  onClick={() => handleDlete(data._id)}
                />
              </IconButton>
            </div>
          ) : null
        }
        title={data.newsTitle ? data.newsTitle.slice(0, 20) : null}
        subheader={data.newsDate}
      />
      <CardMedia
        component="img"
        height="194"
        src={`${BASE_URL}/uploads/${data.newsImage}`}
        alt={`Image for ${data.newsTitle}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.newsDetails ? data.newsDetails.slice(0, 50) : null}.....
          <Link to={`/Readmore/${data._id}`}>Read More...</Link>
        </Typography>
      </CardContent>
      {loggedin ? (
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <span style={{ fontSize: "10px" }}>{likes}</span>
            <FavoriteIcon  className="text-danger" onClick={() => handleLike(data._id)} />
          </IconButton>
          <IconButton aria-label="add to unfavorite">
            <span style={{ fontSize: "10px" }}>{dislikes}</span>
            <HeartBrokenIcon onClick={() => handleDislike(data._id)} />
          </IconButton>
          <IconButton aria-label="comment"></IconButton>

          <IconButton style={{ marginLeft: "100px" }}>
            <AddNewsComment newsFechDetails={data} />
          </IconButton>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <IconButton>
            {report && (
              <BlockIcon
                className="text-danger"
                onClick={() => handleReport(data._id)}
              />
            )}
          </IconButton>
        </CardActions>
      ) : (
        <CardActions>
          <FavoriteIcon
            className="text-danger"
            onClick={() =>
              alert("Please loging other wise you canot explore the website")
            }
          />
          <HeartBrokenIcon
            onClick={() =>
              alert("Please loging other wise you canot explore the website")
            }
          />
        </CardActions>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comment:</Typography>
          <Typography paragraph>
            {usersComment?.length > 0 &&
            usersComment.some((item) => item.newsId === data._id)
              ? usersComment
                  .filter((item) => item.newsId === data._id)
                  .map((item) => (
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                      key={item.commentText}
                    >
                      <div className="d-flex justify-content-end">
                        {loggedUserId && loggedUserId == item.userId ? (
                          <Form.Label
                            style={{ fontSize: "10px", color: "grey" }}
                          >
                            <DeleteSweepOutlinedIcon
                              onClick={() => handleDleteComment(item?._id)}
                            />
                          </Form.Label>
                        ) : null}
                      </div>
                      <Form.Control
                        className="border rounded p-2"
                        type="text"
                        placeholder="comment"
                        readOnly
                        value={item?.commentText}
                      />
                    </Form.Group>
                  ))
              : null}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
