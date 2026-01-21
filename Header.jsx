import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/", { replace: true });
  };

  return (
    <div className="header">
      <h3>School Management System</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Header;