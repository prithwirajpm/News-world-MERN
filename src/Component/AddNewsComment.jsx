import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ForumIcon from "@mui/icons-material/Forum";
import { addCommentAPI } from "../services/allAPI";
import { addNewsCommentResponseContext } from "../Context/ContextShare";

function AddNewsComment({ newsFechDetails }) {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");
  const { addCommentResponce, setAddCommentResponce } = useContext(
    addNewsCommentResponseContext
  );
  console.log(newsFechDetails);

  const handleClose = () => {
    setShow(false);
    setAddCommentDetails({
      commentText: "",
    });
  };
  const handleShow = () => setShow(true);
  const [addCommentDetails, setAddCommentDetails] = useState({
    commentText: "",
    userId: newsFechDetails.userId,
    newsId: newsFechDetails._id,
  });

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  // AddComments
  const handleAddComment = async (e) => {
    e.preventDefault();
    const { commentText, userId, newsId } = addCommentDetails;
    if (!commentText) {
      alert("please fill the form Completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("commentText", commentText);
      reqBody.append("userId", userId);
      reqBody.append("newsId", newsId);
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const result = await addCommentAPI(userId, reqBody, reqHeader);
        console.log(result);
        if (result.status === 200) {
          console.log(result.data);
          setAddCommentResponce(result.data);
          handleClose();
        } else {
          console.log(result.data);
          alert(result.response.data);
        }
      }
    }
  };

  return (
    <>
      <ForumIcon onClick={handleShow} style={{ color: "grey" }} />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>comment section</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              className="border rounded p-2"
              type="text"
              placeholder="add your option"
              value={addCommentDetails.commentText}
              onChange={(e) =>
                setAddCommentDetails({
                  ...addCommentDetails,
                  commentText: e.target.value,
                })
              }
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddComment}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewsComment;
