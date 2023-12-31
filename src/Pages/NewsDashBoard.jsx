import React, { useEffect, useState } from "react";
import "./NewsDasBoard.css";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import { BASE_URL } from "../services/baseurl";
import { editUserAPI } from "../services/allAPI"; // Add your API file import
import { Form } from "react-bootstrap";

function NewsDashBoard() {
  const [username, setUsername] = useState("");
  const [usId, setUsId] = useState();
  const [userProfileImage, setuserProfileImage] = useState("");
  const [userProfile, setUserProfile] = useState({
    username: "",
    email: "",
    password: "",
    profile: null,
  });
  const [existingImage, setExistingImage] = useState("");
  const [preview, setPreview] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserProfile({
      ...userProfile,
      profile: file,
    });

    // Optional: Display a preview of the selected image
    setPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      const user = JSON.parse(sessionStorage.getItem("existingUser"));
      setUsername(user.username);
      setUsId(user._id);
      setuserProfileImage(user.profile);
      setUserProfile({
        ...userProfile,
        username: user.username,
        email: user.email,
        password: user.password,
        profile: user.profile,
      });
      setExistingImage(user.profile);
    }
  }, []);

  useEffect(() => {
    if (userProfile.profile) {
      setPreview();
    } else {
      setPreview(existingImage ? `${BASE_URL}/uploads/${existingImage}` : "");
    }
  }, [userProfile.profile, existingImage]);

  const handleProfileEdit = async (e) => {
    e.preventDefault();

    try {
      const userId = usId;
      const reqBody = new FormData();
      reqBody.append("profile", userProfile.profile);
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      // Check if the profile image has changed
      if (userProfile.profile) {
        const updatedUserProfile = await editUserAPI(
          userId,
          reqBody,
          reqHeader
        );
        console.log("User profile updated successfully:", updatedUserProfile);

        // Update existingImage and preview with the new image URL
        setExistingImage(updatedUserProfile.profile);
        setPreview(URL.createObjectURL(userProfile.profile));
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <div>
      <div className="profileImg d-flex justify-content-start align-items-center">
        <img
          src={
            preview
              ? preview
              : existingImage
              ? `${BASE_URL}/uploads/${existingImage}`
              : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          }
          alt="Profile Picture"
          style={{ width: "200px", height: "200px" }}
          className="rounded-circle ms-5 shadow"
        />
        <label
          className="btn rounded-circle bg-dark"
          style={{ position: "absolute", left: "200px", top: "290px" }}
        >
          <Form>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <EditIcon style={{ color: "white" }} />
            <button onClick={handleProfileEdit}>ddd</button>
          </Form>
        </label>
      </div>
      <div className="w-100 d-flex justify-content-end align-items-start">
        <div className="border w-100">
          <ul className="nav nav-tabs ">
            <li className="nav-item">
              <h5 className="ms-2">
                Welcome : {username} <PhotoCameraFrontIcon />
              </h5>
            </li>
            <li className="nav-item ms-auto">
              <Link
                to={"/addnewslist"}
                className="nav-link"
                aria-current="page"
                style={{ textDecoration: "none", color: "Black" }}
              >
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/listcomment"}
                className="nav-link"
                aria-current="page"
                style={{ textDecoration: "none", color: "Black" }}
              >
                Command
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Details
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewsDashBoard;
