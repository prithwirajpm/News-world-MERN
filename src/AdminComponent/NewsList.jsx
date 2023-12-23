import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { allNewsAPI } from "../services/allAPI";
import { BASE_URL } from "../services/baseurl";
import Admin from "./Admin";

function NewsList({ setshowadmin }) {
  const [listNews, setListNews] = useState([]);

  const getAllProjects = async () => {
    const result = await allNewsAPI();
    if (result.status === 200) {
      console.log(result.data);
      setListNews(result.data);
    } else {
      console.log(result.response.data);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  useEffect(() => {
    setshowadmin(false);
    return () => setshowadmin(true);
  }, [setshowadmin]);

  const columns = [
    { name: "ID", selector: (row, index) => index + 1, sortable: true },
    { name: "News Title", selector: "newsTitle", sortable: true },
    {
      name: "News Image",
      selector: "newsImage",
      sortable: true,
      cell: (row) => (
        <img
          alt="News"
          src={`${BASE_URL}/uploads/${row.newsImage}`}
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    { name: "News Description", selector: "newsDetails", sortable: true },
    { name: "Date", selector: "newsDate", sortable: true },
  ];

  return (
    <div>
      <aside>
        <Admin setshowadmin={setshowadmin} />
      </aside>
      <div
        className="mt-5 w-75 shadow"
        style={{ position: "absolute", top: "100px", left: "300px" }}
      >
        <DataTable columns={columns} data={listNews} pagination />
      </div>
    </div>
  );
}

export default NewsList;
