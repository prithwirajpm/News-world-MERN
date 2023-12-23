// port { Link } from '@mui/material';im
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useEffect, useState } from "react";

function NewsNavBar() {
  const [loggedin, setLoggedin] = useState(false);
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
    <div>
      <Navbar
        expand="lg"
        className="ps-3 pe-3"
        style={{ backgroundColor: "#D0D0D0" }}
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link
                  to={"/auth"}
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  Login
                </Link>
              </Nav.Link>
              {loggedin && (
                <Nav.Link className="text-dark" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              )}

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NewsNavBar;
