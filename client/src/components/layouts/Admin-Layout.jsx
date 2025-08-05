import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";
import "./Admin-Layout.css"; 

export const AdminLayout = () => {
   const { user, isLoading } = useAuth();
  console.log("admin layout ", user);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
     <>
      <header>
        <div className="admin-container">
          <nav className="sidebar">
            <ul className="sidebar-list">
              <li>
                <NavLink to="/admin/users" className="sidebar-link">
                  <FaUser /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts" className="sidebar-link">
                  <FaMessage /> Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="sidebar-link">
                  <FaRegListAlt /> Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="sidebar-link">
                  <FaHome /> Home
                </NavLink>
              </li>
            </ul>
          </nav>
          <main className="admin-main">
            <Outlet />
          </main>
        </div>
      </header>
    </>
  );
};