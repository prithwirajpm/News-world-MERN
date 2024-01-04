import React from "react";

function SectionTwo() {
  return (
    <div className="row w-100">
      <div className="col-6 ps-3">
        <img
          src="https://cdn.blue.prod.newspaperclub.com/blog/thumbs/25023.jpg"
          alt=""
          width={"100%"}
          className="shadow"
        />
      </div>
      <div className="col-6 d-flex justify-content-center">
        <div className="w-75 text-center" style={{ fontFamily: "Romanesco" }}>
          <div>
            <h3 className="pt-3 pb-3" style={{ fontSize: "80px" }}>
              News World
            </h3>
          </div>
          <div>
            <p style={{ textAlign: "justify", fontSize: "25px" }}>
              "Welcome to News World! It's my MERN stack project, aiming to
              reveal the truth. Every user is a reporter; log in to report news,
              edit, and delete. Read news without logging in. Express opinions
              with likes, dislikes, comments, and report news for blocking. Two
              modules: User and Admin. Admin views user lists, news reports, and
              acts as a reporter. Alerts for reported news. Admin deletes
              rule-breaking news. Users edit profiles. Aiming for a transparent
              and accountable news space in the News World. Exciting journey
              into truth!"
            </p>
            <p style={{ textAlign: "right", fontSize: "25px" }}>Prithwiraj</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
