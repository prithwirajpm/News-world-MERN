// NewsCard.js

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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@mui/material/Collapse";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import AddNewsComment from "./AddNewsComment";
import { Form } from "react-bootstrap";
import { BASE_URL } from "../services/baseurl";
import EditNews from "../Component/EditNews";
import { deleteNewsAPI } from "../services/allAPI";

export default function NewsCard({ data }) {
  const [loggedin, setLoggedin] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    setLoggedin(!!sessionStorage.getItem("token"));
  }, []);

  const handleDlete = async (id) => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const result = await deleteNewsAPI(id, reqHeader);
    if (result.status === 200) {
      
    } else {
      alert(result.response.data);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <div>
            <IconButton aria-label="settings">
              {loggedin ? <EditNews editProject={data} /> : null}
            </IconButton>
            <IconButton aria-label="settings">
              <DeleteSweepOutlinedIcon onClick={() => handleDlete(data._id)} />
            </IconButton>
          </div>
        }
        title={data.newsTitle.slice(0, 20)}
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
          {data.newsDetails}
        </Typography>
      </CardContent>
      {loggedin ? (
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <span style={{ fontSize: "10px" }}>2</span>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to unfavorite">
            <span style={{ fontSize: "10px" }}>2</span>
            <HeartBrokenIcon />
          </IconButton>
          <IconButton aria-label="comment"></IconButton>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <AddNewsComment />
        </CardActions>
      ) : (
        <CardActions>Nothing</CardActions>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex justify-content-between">
                {" "}
                <Form.Label style={{ fontSize: "10px" }}>Heading</Form.Label>
                <Form.Label style={{ fontSize: "10px", color: "grey" }}>
                  <DeleteSweepOutlinedIcon />
                </Form.Label>
              </div>
              <Form.Control
                className="border rounded p-2"
                type="text"
                placeholder="comment"
                readOnly
              />
            </Form.Group>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
