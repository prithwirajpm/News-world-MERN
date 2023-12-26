import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { allNewsAPI } from "../services/allAPI";
import { BASE_URL } from "../services/baseurl";

function ReadMore() {
  const [allNewsPage, setAllNewsPage] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await allNewsAPI();
        if (result.status === 200) {
          setAllNewsPage(result.data);
        } else {
          console.log(result.response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const newsItem = allNewsPage.find((item) => item._id === id);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex row">
      <div className="col-5 m-5">
        <img
          src={`${BASE_URL}/uploads/${newsItem.newsImage}`}
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-6">
        <div>
          <h2>{newsItem.newsTitle}</h2>
        </div>
        <div>{newsItem.newsDetails}</div>
      </div>
    </div>
  );
}

export default ReadMore;
