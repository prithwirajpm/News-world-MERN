import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { allNewsAPI } from "../services/allAPI";
import NewsCard from "./NewsCard";

function NewsReport() {
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
      <div className="row d-flex w-100 mt-5 mb-5">
        {allNewsPage?.length > 0
          ? allNewsPage.map((item) => (
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
          : null}
      </div>
    </div>
  );
}

export default NewsReport;
