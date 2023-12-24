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
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, expedita, aspernatur qui ipsam voluptates mollitia
              quo deserunt sequi iusto ad soluta dolor a aperiam. Corporis
              exercitationem recusandae eaque provident reprehenderit!. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              molestias ab, facere quibusdam optio ullam possimus sapiente saepe
              ut aliquid est earum eum mollitia assumenda explicabo qui a
              adipisci enim! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nemo facere alias quas, modi perspiciatis deleniti eaque"
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
