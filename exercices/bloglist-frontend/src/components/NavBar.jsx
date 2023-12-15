import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const liStyle = {
  listStyleType: "none",
};

const NavBar = () => {
  const { user, LogOut } = useUser();
  return (
    <>
      <ul style={{ display: "flex", gap: "10px" }}>
        <li style={liStyle}>
          <Link to="/">Blogs</Link>
        </li>
        <li style={liStyle}>
          <Link to="/users">Users</Link>
        </li>
        {user !== null && (
          <div>
            {user?.username} logged in <button onClick={LogOut}>logout</button>
          </div>
        )}
      </ul>
      <h1>blogs</h1>
    </>
  );
};

export default NavBar;
