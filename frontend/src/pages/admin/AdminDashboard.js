import { useNavigate } from "react-router-dom";
import Logout from "../../components/admin/Logout";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Logout /> {/* Include the Logout button */}
    </div>
  );
};

export default AdminDashboard;
