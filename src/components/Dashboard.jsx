import React from 'react';
import './Dashboard.css'; // Import the CSS file
import { 
  LayoutDashboard, 
  AlertTriangle, 
  Building2, 
  BarChart3, 
  Settings,
  LogOut,
  User,
  MapPin,
  ExternalLink
} from 'lucide-react';

const Dashboard = () => {
  // Sample data for the dashboard
  const stats = {
    newIssues: 12,
    inProgress: 35,
    resolved: 78
  };

  const urgentIssues = 3;

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        {/* Logo and Header */}
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">
              <Building2 size={24} color="white" />
            </div>
            <h1 className="logo-text">CityConnect</h1>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {/* Dashboard - Active State */}
            <li>
              <a href="#" className="nav-item active">
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </a>
            </li>
            
            {/* Issues */}
            <li>
              <a href="#" className="nav-item">
                <AlertTriangle size={20} />
                <span>Issues</span>
              </a>
            </li>
            
            {/* Departments */}
            <li>
              <a href="#" className="nav-item">
                <Building2 size={20} />
                <span>Departments</span>
              </a>
            </li>
            
            {/* Reports */}
            <li>
              <a href="#" className="nav-item">
                <BarChart3 size={20} />
                <span>Reports</span>
              </a>
            </li>
            
            {/* Settings */}
            <li>
              <a href="#" className="nav-item">
                <Settings size={20} />
                <span>Settings</span>
              </a>
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
            {/* Logout Button */}
            <button className="logout-btn">
              <LogOut size={16} />
              <span>Logout</span>
            </button>
            
            {/* User Avatar */}
            <div className="user-avatar">
              <User size={24} color="white" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="dashboard-main">
          {/* Stats Cards Row */}
          <div className="stats-grid">
            {/* New Issues Today Card */}
            <div className="stat-card">
              <h3 className="stat-title">New Issues Today</h3>
              <div className="stat-number red">{stats.newIssues}</div>
            </div>

            {/* In Progress Card */}
            <div className="stat-card">
              <h3 className="stat-title">In Progress</h3>
              <div className="stat-number yellow">{stats.inProgress}</div>
            </div>

            {/* Resolved Card */}
            <div className="stat-card">
              <h3 className="stat-title">Resolved</h3>
              <div className="stat-number green">{stats.resolved}</div>
            </div>
          </div>

          {/* Bottom Section - Map and Urgent Issues */}
          <div className="bottom-grid">
            {/* City Hotspots Map */}
            <div className="map-section">
              <h2 className="section-title">City Hotspots</h2>
              
              {/* Map Container */}
              <div className="map-container">
                {/* Simulated Map with San Francisco Layout */}
                <div className="map-overlay">
                  <svg width="100%" height="100%" viewBox="0 0 400 320">
                    {/* Water areas */}
                    <rect x="0" y="0" width="120" height="320" fill="#60a5fa" />
                    <rect x="300" y="0" width="100" height="200" fill="#60a5fa" />
                    
                    {/* Land areas */}
                    <rect x="120" y="0" width="180" height="320" fill="#86efac" />
                    
                    {/* Streets grid */}
                    <g stroke="#ffffff" strokeWidth="1" opacity="0.5">
                      <line x1="120" y1="50" x2="300" y2="50" />
                      <line x1="120" y1="100" x2="300" y2="100" />
                      <line x1="120" y1="150" x2="300" y2="150" />
                      <line x1="120" y1="200" x2="300" y2="200" />
                      <line x1="120" y1="250" x2="300" y2="250" />
                      
                      <line x1="150" y1="0" x2="150" y2="320" />
                      <line x1="200" y1="0" x2="200" y2="320" />
                      <line x1="250" y1="0" x2="250" y2="320" />
                    </g>
                  </svg>
                </div>
                
                {/* Map Markers */}
                <div className="map-marker pink">
                  <div style={{width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%'}}></div>
                </div>
                
                <div className="map-marker purple">
                  <User size={12} color="white" />
                </div>
                
                <div className="map-marker green-1">
                  <div style={{width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%'}}></div>
                </div>
                
                <div className="map-marker green-2">
                  <MapPin size={12} color="white" />
                </div>
                
                {/* City Label */}
                <div className="map-label">
                  San Francisco
                </div>
              </div>
            </div>

            {/* Urgent Issues Panel */}
            <div className="urgent-panel">
              <h2 className="urgent-header">Urgent Issues</h2>
              
              {/* City Image Placeholder */}
              <div className="city-image-container">
                <div className="city-image">
                  {/* Simulated city skyline */}
                  <svg className="skyline-svg" viewBox="0 0 200 60">
                    <rect className="building" x="10" y="20" width="15" height="40" />
                    <rect className="building-alt" x="30" y="10" width="20" height="50" />
                    <rect className="building" x="55" y="25" width="12" height="35" />
                    <rect className="building-alt" x="70" y="5" width="25" height="55" />
                    <rect className="building" x="100" y="15" width="18" height="45" />
                    <rect className="building-alt" x="125" y="30" width="15" height="30" />
                    <rect className="building" x="145" y="20" width="20" height="40" />
                    <rect className="building-alt" x="170" y="25" width="12" height="35" />
                    
                    {/* Building windows */}
                    <g className="window">
                      <rect x="32" y="15" width="2" height="2" />
                      <rect x="36" y="15" width="2" height="2" />
                      <rect x="32" y="20" width="2" height="2" />
                      <rect x="72" y="10" width="2" height="2" />
                      <rect x="76" y="10" width="2" height="2" />
                      <rect x="72" y="15" width="2" height="2" />
                      <rect x="102" y="20" width="2" height="2" />
                      <rect x="106" y="20" width="2" height="2" />
                    </g>
                  </svg>
                </div>
                
                {/* Warning Icon Overlay */}
                <div className="warning-overlay">
                  <AlertTriangle size={16} color="white" />
                </div>
              </div>

              {/* Urgent Issues Count */}
              <div className="urgent-content">
                <div className="urgent-count">{urgentIssues} Urgent Issues</div>
                <p className="urgent-description">Immediate action required in designated zones.</p>
              </div>

              {/* View Issues Button */}
              <button className="view-issues-btn">
                <span>View Issues</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;