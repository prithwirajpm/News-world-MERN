import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAPI, registerAPI } from "../services/allAPI";

function NewsAuth({ Register }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // navigate
  const navigate = useNavigate();

  //Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.info("Please fill the form completely");
    } else {
      const result = await loginAPI(userData);
      if (result.status === 200) {
        console.log(result);
        // alert(`${result.data.username} has registered successfully !!!`)
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);
        sessionStorage.setItem("admin", result.data.existingUser.isAdmin);
        // console.log("checking");
        console.log(JSON.parse(sessionStorage.getItem("admin")));

        // Add session storage for admin
        if (result.data.existingUser.isAdmin) {
          console.log(result.data.existingUser.isAdmin);
          sessionStorage.setItem(
            "adminData",
            JSON.stringify(result.data.existingUser.adminData)
          );
          if (sessionStorage.getItem("admin") === "true") {
            console.log("The user is an admin.");
          } else {
            console.log("The user is not an admin.");
          }
        }
        setUserData({
          email: "",
          password: "",
        });
        if (result.data.existingUser.isAdmin == true) {
          navigate("/admindasboard");
        } else {
          navigate("/addnewslist");
        }
      } else {
        toast.warning(result.response.data);
        console.log(result);
      }
    }
  };

  // Register
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.info("Please fill the form completely");
    } else {
      const result = await registerAPI(userData);
      if (result.status === 200) {
        console.log(result);
        alert(`${result.data.username} has registered successfully !!!`);
        setUserData({
          username: "",
          email: "",
          password: "",
        });
        navigate("/auth");
      } else {
        toast.warning(result.response.data);
        console.log(result);
      }
    }
  };

  return (
    <div className="row w-100 d-flex justify-content-center align-items-center vh-100">
      <div className="w-75 shadow-lg" style={{ backgroundColor: "#F0F8FF" }}>
        <div className="row w-100 p-5 d-flex justify-content-center align-items-center">
          <Col lg={6} sm={12}>
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              srcSet=""
            />
          </Col>
          <Col lg={6} sm={12}>
            <Form>
              {Register ? (
                <Form.Group className="mb-3">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    type="text"
                    controlId="ForBasicName"
                    placeholder="Username"
                    value={userData.username}
                    onChange={(e) =>
                      setUserData({ ...userData, username: e.target.value })
                    }
                  />
                </Form.Group>
              ) : null}
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  controlId="ForBasicEmail"
                  placeholder="name@example.com"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <div className="d-flex justify-content-between">
                  <Form.Label>Password</Form.Label>
                  <span>
                    <button
                      className="icon-link"
                      style={{ border: "none", backgroundColor: "white" }}
                    >
                      <VisibilityIcon style={{ color: "#6CB4EE" }} />
                    </button>
                  </span>
                </div>
                <Form.Control
                  type="password"
                  placeholder="password"
                  controlId="ForBasicPassword"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </Form.Group>
              <div className="d-flex justify-content-center mt-5">
                <div>
                  {Register ? (
                    <button
                      className="btn btn-primary m-3"
                      onClick={(e) => handleRegister(e)}
                    >
                      Register
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={(e) => handleLogin(e)}
                        className="btn btn-primary m-3"
                      >
                        Login
                      </button>
                      <p>
                        New User? Click here to{" "}
                        <Link to={"/register"}>Register</Link>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Form>
          </Col>
        </div>
      </div>
      <ToastContainer position="top-right" theme="colored" />
    </div>
  );
}

export default NewsAuth;
