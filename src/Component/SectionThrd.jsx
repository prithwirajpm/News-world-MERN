import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SectionThrd() {
  const images = [
    "https://blog.newspaperclub.com/wp-content/uploads/2023/08/grasby-leaves.gif",
    "https://blog.newspaperclub.com/wp-content/uploads/2023/02/100th-bday.gif",
    "https://blog.newspaperclub.com/wp-content/uploads/2023/01/vintage-template.gif",
    "https://blog.newspaperclub.com/wp-content/uploads/2023/10/Vintage-template-broadsheet.gif",
    "https://blog.newspaperclub.com/wp-content/uploads/2023/01/business-template.gif",
    "https://blog.newspaperclub.com/wp-content/uploads/2023/08/ER-Designs.gif",
    "https://blog.newspaperclub.com/wp-content/uploads/2023/11/photobook.gif",
    "https://blog.newspaperclub.com/wp-content/uploads/2023/01/wedding-gif-slower.gif",
    "https://blog.newspaperclub.com/wp-content/uploads/2023/01/celebration-newspaper.gif",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust the number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change the delay as needed (in milliseconds)
  };

  return (
    <div className="py-5 mx-5">
      <h1
        className="text-center py-5"
        style={{ fontFamily: "Romanesco", fontSize: "80px" }}
      >
        News
      </h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="m-2 d-flex justify-content-center">
            <img
              src={image}
              alt={`image-${index}`}
              style={{ width: "150px", height: "150px" }}
              className="rounded-circle shadow"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SectionThrd;
