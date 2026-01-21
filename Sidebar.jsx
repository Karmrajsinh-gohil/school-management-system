import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/", { replace: true });
  };

  return (
    <div className="sidebar">
      <h3>School Admin</h3>

      <NavLink to="/dashboard" className="link">Dashboard</NavLink>
      <NavLink to="/teachers" className="link">Teachers</NavLink>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;