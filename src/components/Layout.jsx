import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'; // Reuse the same styles

const Layout = ({ onLogout }) => {
  // const handleLogout = () => {
  //   if (onLogout) onLogout(); // trigger logout in App.jsx
  // };

  // const handleLogout = () => {
  //   // Add logout logic here
  //   console.log('Logging out...');
  //   // navigate('/login'); // If you have a login page
  // };
  
  

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        {/* Logo and Header */}
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">
              🏢
            </div>
            <h1 className="logo-text">Nagar<span style={{'color':'green'}}>Setu</span></h1>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
                end
              >
                📊 <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/issues" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                ⚠️ <span>Issues</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink 
                to="/departments" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                🏢 <span>Departments</span>
              </NavLink>
            </li> */}
            <li>
              <NavLink 
                to="/reports" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                📈 <span>Map</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/settings" 
                className={({ isActive }) => 
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                ⚙️ <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Top Header */}
        <header className="header">
          <div></div>
          
          {/* User Actions */}
          <div className="header-actions">
            <button className="logout-btn" onClick={onLogout}>
              🚪 <span>Logout</span>
            </button>
            
            <div className="user-avatar">
              👤
            </div>
          </div>
        </header>

        {/* Page Content - This changes based on route */}
        <main className="dashboard-main">
          <Outlet /> {/* This renders the current page component */}
        </main>
      </div>
    </div>
  );
};

export default Layout;