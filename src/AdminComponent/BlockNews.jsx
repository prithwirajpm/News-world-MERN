import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { allNewsAPI, deleteNewsAPI } from "../services/allAPI";
import { BASE_URL } from "../services/baseurl";
import Admin from "./Admin";
import { deleteNewsResponseContext } from "../Context/ContextShare";

function BlockNews({ setshowadmin }) {
  const [listNews, setListNews] = useState([]);
  const { deleteNewsResponse, setdeleteNewsResponse } = useContext(
    deleteNewsResponseContext
  );

  const filteredListNews = listNews.filter((item) => item.blockSection > 2);

  const getAllProjects = async () => {
    const result = await allNewsAPI();
    if (result.status === 200) {
      console.log(result.data);
      setListNews(result.data);
    } else {
      console.log(result.response.data);
    }
  };

  const handleDlete = async (id) => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const result = await deleteNewsAPI(id, reqHeader);
    if (result.status === 200) {
      alert("Delete the News");
      console.log(result.data);
    } else {
      alert(result.response.data);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, [deleteNewsResponse]);

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
    { name: "Date", selector: "newsDate", sortable: true },
    { name: "Block Cound", selector: "blockSection", sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button onClick={() => handleDlete(row._id)}>Delete</button>
        </div>
      ),
    },
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
        <DataTable columns={columns} data={filteredListNews} pagination />
      </div>
    </div>
  );
}

export default BlockNews;
