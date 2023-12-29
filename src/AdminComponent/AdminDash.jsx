import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Link } from "react-router-dom";
import Admin from "./Admin";

function AdminDash({ setshowadmin }) {
  return (
    <div>
      <aside>
        <Admin setshowadmin={setshowadmin} />
      </aside>
      <div
        className="mt-5 w-75 row"
        style={{ position: "absolute", top: "100px", left: "300px" }}
      >
        <div className="shadow m-5 col-3 text-center p-5">
          <Link to={"/userList"} className="pt-5  text-decoration-none">
            <GroupIcon style={{ fontSize: "100px" }} />
            <h3>USERS</h3>
          </Link>
        </div>

        <div className="shadow m-5 col-3 text-center p-5">
          <Link to={"/newsList"} className="pt-5  text-decoration-none">
            <NewspaperIcon style={{ fontSize: "100px" }} />
            <h3>NEWS</h3>
          </Link>
        </div>
        <div className="shadow m-5 col-3 text-center p-5">
          <Link to={"/adminaddNews"} className="pt-5  text-decoration-none">
            <PostAddIcon style={{ fontSize: "100px" }} />
            <h3>Add News</h3>
          </Link>
        </div>
        <div className="shadow m-5 col-3 text-center p-5">
          <Link to={"/blockNews"} className="pt-5  text-decoration-none">
            <PostAddIcon style={{ fontSize: "100px" }} />
            <h3>Block News</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDash;
