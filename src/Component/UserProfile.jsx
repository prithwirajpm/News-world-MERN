import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { BASE_URL } from "../services/baseurl";
import { editProfileAPI } from "../services/allAPI";
import { Form, Modal, Button, FloatingLabel } from "react-bootstrap";
function UserProfile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [existingImage, setExistingImage] = useState("");
  const [preview, setPreview] = useState("");
  const [userProfileUpdate, setUserProfileUpdate] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
  });
  const handleShow = () => setShow(true);

  //   UpdateUserProfile
  // ... (previous code)

  const handleProfileUpdate = async () => {
    const { username, email, password, profile } = userProfileUpdate;

    if (!username || !email || !password) {
      alert("Please fill in all the forms");
    } else {
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("email", email);
      reqBody.append("password", password);

      if (userProfileUpdate.profile) {
        reqBody.append("profile", userProfileUpdate.profile);
      } else {
        reqBody.append("profile", existingImage);
      }

      const token = sessionStorage.getItem("token");

      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };

      try {
        const res = await editProfileAPI(reqBody, reqHeader);

        if (res.status === 200) {
          sessionStorage.setItem("existingUser", JSON.stringify(res.data));
          console.log(res.data);

          // Update other details in the state
          setUserProfileUpdate({
            ...userProfileUpdate,
            username: res.data.username,
            email: res.data.email,
            password: res.data.password,
          });

          handleClose(); // Close the modal after successful update
        } else {
          console.log(res);
          console.log(res.response.data);
          alert("Failed to update profile.");
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("An error occurred while updating profile.");
      }
    }
  };

  // ... (remaining code)

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    setUserProfileUpdate({
      ...userProfileUpdate,
      username: user.username,
      email: user.email,
      password: user.password,
      profile: "",
    });
    setExistingImage(user.profile);
  }, []);

  useEffect(() => {
    if (userProfileUpdate.profile) {
      setPreview(URL.createObjectURL(userProfileUpdate.profile));
    } else if (existingImage) {
      setPreview(`${BASE_URL}/uploads/${existingImage}`);
    } else {
      setPreview("");
    }
  }, [userProfileUpdate.profile, existingImage]);

  return (
    <div>
      <button className="btn btn-success ms-1" onClick={handleShow}>
        Profile
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Profile</Form.Label>
              <div className="profileImg d-flex justify-content-start align-items-center">
                {existingImage !== "" ? (
                  <img
                    src={
                      preview ? preview : `${BASE_URL}/uploads/${existingImage}`
                    }
                    alt="Profile Picture"
                    style={{ width: "200px", height: "200px" }}
                    className="rounded-circle ms-5 shadow"
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Profile Picture"
                    style={{ width: "200px", height: "200px" }}
                    className="rounded-circle ms-5 shadow"
                  />
                )}
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                className="border rounded p-2"
                type="text"
                placeholder="date"
                value={userProfileUpdate.username}
                onChange={(e) =>
                  setUserProfileUpdate({
                    ...userProfileUpdate,
                    username: e.target.value,
                  })
                }
              />
              <Form.Control
                className="border rounded p-2 mt-2"
                type="text"
                placeholder="date"
                value={userProfileUpdate.email}
                onChange={(e) =>
                  setUserProfileUpdate({
                    ...userProfileUpdate,
                    email: e.target.value,
                  })
                }
              />
              <Form.Control
                type="text"
                className="border rounded p-2 mt-2"
                placeholder="uploadimage"
                value={userProfileUpdate.password}
                onChange={(e) =>
                  setUserProfileUpdate({
                    ...userProfileUpdate,
                    password: e.target.value,
                  })
                }
              />
              <Form.Control
                type="file"
                className="border rounded p-2 mt-2"
                placeholder="uploadimage"
                onChange={(e) =>
                  setUserProfileUpdate({
                    ...userProfileUpdate,
                    profile: e.target.files[0],
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
          <Button variant="primary" onClick={handleProfileUpdate}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserProfile;
