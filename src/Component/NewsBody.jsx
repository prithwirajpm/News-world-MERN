import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { allNewsAPI } from "../services/allAPI";
import FirstSection from "./FirstSection";
import NewsCard from "./NewsCard";
import SectionFour from "./SectionFour";
import SectionThrd from "./SectionThrd";
import SectionTwo from "./SectionTwo";

function NewsBody() {
  const [allNewsPage, setAllNewsPage] = useState([]);

  const getAllProjects = async () => {
    const result = await allNewsAPI();
    if (result.status === 200) {
      setAllNewsPage(result.data);
    } else {
      console.log(result.response.data);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div>
      <div>
        <FirstSection />
      </div>
      <div className="m-5">
        <SectionTwo />
      </div>
      <div>
        <SectionThrd />
      </div>
      <div>
        <SectionFour />
      </div>
      <div>
        <div>
          <h1
            className="text-center py-5"
            style={{ fontFamily: "Romanesco", fontSize: "80px" }}
          >
            News Report
          </h1>
        </div>
        <div className="row d-flex w-100 mt-5 mb-5">
          {allNewsPage?.length > 0
            ? allNewsPage
                .map((item) => (
                  <Col
                    lg={4}
                    sm={2}
                    xl={4}
                    className="d-flex justify-content-center mb-5"
                    key={item.id}
                    data={item}
                  >
                    <NewsCard data={item} />
                  </Col>
                ))
                .slice(0, 3)
            : null}
        </div>
      </div>
    </div>
  );
}

export default NewsBody;
