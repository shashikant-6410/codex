import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoRefresh: true,
    language: 'english'
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div>
      <h1 className="section-title">Settings</h1>
      
      <div style={{ display: 'grid', gap: '2rem' }}>
        {/* General Settings */}
        <div className="stat-card">
          <h2 className="section-title">General Settings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontWeight: '500' }}>Email Notifications</h4>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>Receive updates about new issues</p>
              </div>
              <button 
                onClick={() => handleToggle('notifications')}
                style={{
                  width: '50px',
                  height: '24px',
                  borderRadius: '12px',
                  border: 'none',
                  backgroundColor: settings.notifications ? '#22c55e' : '#d1d5db',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  position: 'absolute',
                  top: '2px',
                  left: settings.notifications ? '28px' : '2px',
                  transition: 'left 0.2s'
                }}></div>
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontWeight: '500' }}>Dark Mode</h4>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>Switch to dark theme</p>
              </div>
              <button 
                onClick={() => handleToggle('darkMode')}
                style={{
                  width: '50px',
                  height: '24px',
                  borderRadius: '12px',
                  border: 'none',
                  backgroundColor: settings.darkMode ? '#22c55e' : '#d1d5db',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  position: 'absolute',
                  top: '2px',
                  left: settings.darkMode ? '28px' : '2px',
                  transition: 'left 0.2s'
                }}></div>
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontWeight: '500' }}>Auto Refresh</h4>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>Automatically refresh dashboard data</p>
              </div>
              <button 
                onClick={() => handleToggle('autoRefresh')}
                style={{
                  width: '50px',
                  height: '24px',
                  borderRadius: '12px',
                  border: 'none',
                  backgroundColor: settings.autoRefresh ? '#22c55e' : '#d1d5db',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  position: 'absolute',
                  top: '2px',
                  left: settings.autoRefresh ? '28px' : '2px',
                  transition: 'left 0.2s'
                }}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="stat-card">
          <h2 className="section-title">Account Settings</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="view-issues-btn">
              👤 Edit Profile
            </button>
            <button className="view-issues-btn">
              🔐 Change Password
            </button>
            <button className="view-issues-btn">
              📧 Update Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;