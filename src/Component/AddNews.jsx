import { useContext, useEffect, useState } from "react";
import { Form, Modal, Button, FloatingLabel } from "react-bootstrap";
import { addNewsResponseContext } from "../Context/ContextShare";
import { addNewsAPI } from "../services/allAPI";

function AddNews() {
  const [show, setShow] = useState(false);
  const { addNewsResponse, setaddNewsResponse } = useContext(
    addNewsResponseContext
  );
  // Store datas
  const [newsDetailsAdd, setNewsDetailsAdd] = useState({
    newsTitle: "",
    newsDetails: "",
    newsDate: "",
    newsImage: "",
  });

  const [preview, setPreview] = useState("");

  // holdToken
  const [token, setToken] = useState("");

  const handleClose = () => {
    setShow(false);
    setNewsDetailsAdd({
      newsTitle: "",
      newsDetails: "",
      newsDate: "",
      newsImage: "",
    });
  };
  const handleShow = () => setShow(true);
  console.log(newsDetailsAdd);

  // setToken from newsdetails
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);

  // addProject
  const handleAdd = async (e) => {
    e.preventDefault();
    const { newsTitle, newsDetails, newsDate, newsImage } = newsDetailsAdd;
    if (!newsTitle || !newsDetails || !newsDate || !newsImage) {
      alert("please fill the form Completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("newsTitle", newsTitle);
      reqBody.append("newsDetails", newsDetails);
      reqBody.append("newsDate", newsDate);
      reqBody.append("newsImage", newsImage);

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        const result = await addNewsAPI(reqBody, reqHeader);
        console.log(result);
        if (result.status === 200) {
          console.log(result.data);
          handleClose();
          setaddNewsResponse(result.data);
        } else {
          console.log(result.data);
          alert(result.response.data);
        }
      }
    }
  };

  // create uRL for Upload Image
  useEffect(() => {
    if (newsDetailsAdd.newsImage) {
      setPreview(URL.createObjectURL(newsDetailsAdd.newsImage));
    }
  }, [newsDetailsAdd.newsImage]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add News
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add News</Modal.Title>
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
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
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
          <Button variant="primary" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNews;
