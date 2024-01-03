import React from "react";

function SectionFour() {
  return (
    <div className="row py-5 my-5 w-100">
      <div className="col-6 d-flex justify-content-center">
        <div className="w-75 text-center" style={{ fontFamily: "Romanesco" }}>
          <div>
            <h3 className="pt-3 pb-3" style={{ fontSize: "80px" }}>
              Features
            </h3>
          </div>
          <div>
            <p style={{ textAlign: "justify", fontSize: "25px" }}>
              "News World, a dynamic platform, offers users an array of features
              to enhance their engagement with news content. To access reporter
              functionalities, users log in, enabling actions such as uploading,
              editing, and deleting news articles. Reading news articles,
              liking, disliking, and commenting are available even without
              logging in. Users can also edit their profiles for a personalized
              experience. The Admin module provides administrators with a
              comprehensive view, allowing them to act as reporters, manage news
              articles, and receive alerts for reported content. Admins can
              swiftly delete articles violating policies and edit their
              profiles, ensuring effective oversight. This feature-rich
              environment encourages user interaction while maintaining platform
              integrity through administrative control."
            </p>
          </div>
        </div>
      </div>
      <div className="col-6">
        <img
          src="https://blog.newspaperclub.com/wp-content/uploads/2023/10/Canva-templates-7-2-1.jpg"
          alt=""
          width={"100%"}
          className="shadow"
        />
      </div>
    </div>
  );
}

export default SectionFour;
