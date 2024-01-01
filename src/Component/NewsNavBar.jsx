// port { Link } from '@mui/material';im
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

function NewsNavBar() {
  const [loggedin, setLoggedin] = useState(false);
  const [listUser, setListUser] = useState({});
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("existingUser");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    setLoggedin(!!sessionStorage.getItem("token"));
  }, []);
  return (
    <div style={{ fontFamily: "Romanesco" }}>
      <Navbar
        expand="lg"
        className="ps-3 pe-3"
        style={{ boxShadow: "0 0px 0px rgba(0,0,0)" }}
      >
        <Container>
          <Navbar.Brand>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "Black",
                fontSize: "40px",
              }}
            >
              News World
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link
                  to={"/auth"}
                  style={{
                    textDecoration: "none",
                    color: "Black",
                    fontSize: "20px",
                  }}
                >
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to={"/NewsReport"}
                  style={{
                    textDecoration: "none",
                    color: "Black",
                    fontSize: "20px",
                  }}
                >
                  Reports
                </Link>
              </Nav.Link>
              {loggedin && (
                <Nav.Link
                  style={{
                    textDecoration: "none",
                    color: "Black",
                    fontSize: "20px",
                  }}
                ></Nav.Link>
              )}
              {loggedin && (
                <Nav.Link
                  className="text-dark"
                  style={{
                    color: "Black",
                    fontSize: "20px",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NewsNavBar;
