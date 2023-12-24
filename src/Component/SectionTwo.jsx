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
            <p style={{ textAlign: "right", fontSize: "25px" }}>Prithwiraj</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
