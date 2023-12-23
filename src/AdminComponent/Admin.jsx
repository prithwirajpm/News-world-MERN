import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Admin({ setshowadmin }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("existingUser");
    sessionStorage.removeItem("token");
    navigate("/");
  };
  useEffect(() => {
    {
      setshowadmin(false);
      return () => setshowadmin(true);
    }
  }, [setshowadmin]);
  return (
    <div>
      <div className="bg-body-secondary shadow d-flex justify-content-between p-4">
        <div>
          <h5>ADMIN</h5>
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleLogout}>
            LogOut
          </button>
        </div>
      </div>
      <aside
        className="bg-body-secondary d-flex shadow vh-100 justify-content-center "
        style={{ width: "200Px" }}
      >
        <div className="d-flex flex-column">
          <Link to={"/userList"} className="pt-5  text-decoration-none">
            USER LIST
          </Link>
          <Link to={"/newsList"} className="pt-5 text-decoration-none">
            ALL NEWS
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default Admin;
