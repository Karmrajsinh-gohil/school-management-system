import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h2>Dashboard</h2>
        <p>Welcome to School Management System</p>
      </div>
    </div>
  );
}

export default Dashboard;