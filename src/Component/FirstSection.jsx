import React from "react";
import { Link } from "react-router-dom";
import TitleImg from "../asset/titleNew.png";

function FirstSection() {
  return (
    <div className=" pb-5">
      <div className="row w-100">
        <div className="col-4  d-flex justify-content-center align-items-center">
          <div className="w-75">
            <div>
              <img
                src="https://blog.newspaperclub.com/wp-content/uploads/2023/01/wedding-gif-slower.gif"
                alt=""
                srcset=""
                className="shadow"
                style={{
                  mask: `url(${TitleImg}) center / contain no-repeat`,
                  width: "700px",
                  height: "450px",
                }}
              />
            </div>
            <div style={{ position: "absolute", top: "80vh", left: "120px" }}>
              <button className="btn" style={{ background: "#FFC72C" }}>
                <Link
                  to={"/NewsReport"}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  News Reports
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div>
            <div className="d-flex justify-content-center align-items-center mt-5 mb-5 ">
              <img
                src="https://blog.newspaperclub.com/wp-content/uploads/2023/10/Vintage-template-broadsheet.gif"
                alt=""
                className="m-2 shadow"
                srcset=""
                style={{ width: "100%", height: "80vh" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
