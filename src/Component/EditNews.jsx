import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { useContext, useEffect, useState } from "react";
import { Form, Modal, Button, FloatingLabel } from "react-bootstrap";
import { editNewsResponseContext } from "../Context/ContextShare";
import { editNewsAPI } from "../services/allAPI";
import { BASE_URL } from "../services/baseurl";

function EditNews({ editProject }) {
  const { editNewsResponse, setEditNewsResponse } = useContext(
    editNewsResponseContext
  );
  const [show, setShow] = useState(false);
  const [newsDetailsAdd, setNewsDetailsAdd] = useState({
    id: editProject._id,
    newsTitle: editProject.newsTitle,
    newsDetails: editProject.newsDetails,
    newsDate: editProject.newsDate,
    newsImage: "",
  });

  const [preview, setPreview] = useState("");
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    setNewsDetailsAdd({
      id: editProject._id,
      newsTitle: editProject.newsTitle,
      newsDetails: editProject.newsDetails,
      newsDate: editProject.newsDate,
      newsImage: "",
    });
    setPreview("");
  };

  // addProject

  // create uRL for Upload Image
  useEffect(() => {
    if (newsDetailsAdd.newsImage) {
      setPreview(URL.createObjectURL(newsDetailsAdd.newsImage));
    }
  }, [newsDetailsAdd.newsImage]);

  const handleUpdate = async () => {
    const { id, newsTitle, newsDetails, newsDate, newsImage } = newsDetailsAdd;
    if (!newsTitle || !newsDetails || !newsDate) {
      alert("please fill the form Completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("newsTitle", newsTitle);
      reqBody.append("newsDetails", newsDetails);
      reqBody.append("newsDate", newsDate);
      preview
        ? reqBody.append("newsImage", newsImage)
        : reqBody.append("newsImage", editProject.newsImage);
      const token = sessionStorage.getItem("token");
      if (preview) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        const result = await editNewsAPI(id, reqBody, reqHeader);
        if (result.status === 200) {
          handleClose();
          //   pass response to my news
          setEditNewsResponse(result.data);
        } else {
          console.log(result);
          alert(result.response.data);
        }
      } else {
        const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const result = await editNewsAPI(id, reqBody, reqHeader);
        if (result.status === 200) {
          handleClose();
          setEditNewsResponse(result.data);
        } else {
          console.log(result);
          alert(result.response.data);
        }
      }
    }
  };

  return (
    <>
      <DriveFileRenameOutlineIcon onClick={handleShow} />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Heading</Form.Label>
              <Form.Control
                className="border rounded p-2"
                type="text"
                placeholder="Enter News Heading"
                value={newsDetailsAdd.newsTitle}
                onChange={(e) =>
                  setNewsDetailsAdd({
                    ...newsDetailsAdd,
                    newsTitle: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  className="border rounded p-3"
                  value={newsDetailsAdd.newsDetails}
                  onChange={(e) =>
                    setNewsDetailsAdd({
                      ...newsDetailsAdd,
                      newsDetails: e.target.value,
                    })
                  }
                />
              </FloatingLabel>
              <Form.Label className="mt-2">Date</Form.Label>
              <Form.Control
                className="border rounded p-2"
                type="date"
                placeholder="date"
                value={newsDetailsAdd.newsDate}
                onChange={(e) =>
                  setNewsDetailsAdd({
                    ...newsDetailsAdd,
                    newsDate: e.target.value,
                  })
                }
              />
              <Form.Label className="mt-2">Upload Image</Form.Label>
              <Form.Control
                type="file"
                className="border rounded p-2"
                placeholder="uploadimage"
                src={
                  preview
                    ? preview
                    : `${BASE_URL}/uploads/${editProject.newsImage}`
                }
                onChange={(e) =>
                  setNewsDetailsAdd({
                    ...newsDetailsAdd,
                    newsImage: e.target.files[0],
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditNews;
