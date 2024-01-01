import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { allNewsAPI } from "../services/allAPI";
import NewsCard from "./NewsCard";

function NewsReport() {
  const [allNewsPage, setAllNewsPage] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredNews = allNewsPage.filter((item) =>
    item.newsTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="Search box"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          class="form-control"
          style={{ width: "80%" }}
        />
      </div>
      <div className="row d-flex w-100 mt-5 mb-5">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
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
        ) : (
          <p>No matching news found.</p>
        )}
      </div>
    </div>
  );
}

export default NewsReport;
