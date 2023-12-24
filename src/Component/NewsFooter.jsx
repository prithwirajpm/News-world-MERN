import React from "react";
import { Col } from "react-bootstrap";
import News from "../asset/news.png";
import { Link } from "react-router-dom";

function NewsFooter() {
  return (
    <div
      className="d-flex container-fulid pt-5 pb-5"
      style={{ backgroundColor: "#29AB87", height: "80vh" }}
    >
      <div className="row w-100 px-5">
        <Col
          className="d-flex justify-content-center align-items-center"
          lg={3}
          sm={12}
          xl={3}
        >
          <div className="d-flex flex-column">
            <Link
              to={"https://www.instagram.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Instagram
            </Link>
            <Link
              to={"https://web.telegram.org/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Telegram
            </Link>
            <Link
              to={"https://www.facebook.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Facebook
            </Link>
            <Link
              to={"https://twitter.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Twitter
            </Link>
            <Link
              to={"https://www.linkedin.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              LinkedIn
            </Link>
          </div>
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          lg={3}
          sm={12}
          xl={3}
        >
          <div className="d-flex flex-column">
            <Link
              to={"/"}
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home Page
            </Link>
            <Link
              to={"/addnewslist"}
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              News World
            </Link>
            <Link
              to={"/login"}
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Register
            </Link>
            <Link
              to={"/register"}
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Register
            </Link>
          </div>
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          lg={3}
          sm={12}
          xl={3}
        >
          <div className="d-flex flex-column">
            <Link
              to={"https://www.thehindu.com"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              The Hindu
            </Link>
            <Link
              to={"https://indianexpress.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Indian Express
            </Link>
            <Link
              to={"https://www.deccanchronicle.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Deccan Chronicle
            </Link>
            <Link
              to={"https://www.telegraphindia.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              The Telegraph
            </Link>
            <Link
              to={"https://timesofindia.indiatimes.com"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Time of India
            </Link>
          </div>
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          lg={3}
          sm={12}
          xl={3}
        >
          <div className="d-flex flex-column">
            <Link
              to={"https://www.instagram.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Instagram
            </Link>
            <Link
              to={"https://web.telegram.org/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Telegram
            </Link>
            <Link
              to={"https://www.facebook.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Facebook
            </Link>
            <Link
              to={"https://twitter.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              Twitter
            </Link>
            <Link
              to={"https://www.linkedin.com/"}
              target="_blank"
              className="nav-link m-2"
              aria-current="page"
              style={{ textDecoration: "none", color: "white" }}
            >
              LinkedIn
            </Link>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default NewsFooter;
