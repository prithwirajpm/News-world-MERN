import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getAllUsersAPI } from "../services/allAPI";
import Admin from "./Admin";

function UserList({ setshowadmin }) {
  const [listUser, setListUser] = useState([]);

  const getAllUsers = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const result = await getAllUsersAPI(reqHeader);

      if (result.status === 200) {
        // Assuming the response contains the user data
        console.log(result.data);
        setListUser(result.data);
      } else {
        console.log(result.response.data);
      }
    } catch (error) {
      console.error("Error fetching user news:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    setshowadmin(false);
    return () => setshowadmin(true);
  }, [setshowadmin]);

  const columns = [
    { name: "ID", selector: (row, index) => index + 1, sortable: true },
    { name: "Username", selector: (row) => row.username, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
  ];

  return (
    <div>
      <div>
        <aside>
          <Admin setshowadmin={setshowadmin} />
        </aside>
        <div
          className="mt-5 w-75 shadow"
          style={{ position: "absolute", top: "100px", left: "300px" }}
        >
          <DataTable
            className="p-5"
            columns={columns}
            data={listUser}
            pagination
          />
        </div>
      </div>
    </div>
  );
}

export default UserList;
