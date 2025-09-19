import React, { useState } from 'react';

const Issues = () => {
  const [issues] = useState([
    { id: 1, title: 'Broken Street Light', location: 'Main St & 5th Ave', status: 'Open', priority: 'High' },
    { id: 2, title: 'Pothole on Highway', location: 'Highway 101', status: 'In Progress', priority: 'Medium' },
    { id: 3, title: 'Park Bench Vandalized', location: 'Central Park', status: 'Resolved', priority: 'Low' },
  ]);

  return (
    <div>
      <h1 className="section-title">Issue Management</h1>
      
      {/* Issues Stats */}
      <div className="stats-grid" style={{ marginBottom: '2rem' }}>
        <div className="stat-card">
          <h3 className="stat-title">Open Issues</h3>
          <div className="stat-number red">12</div>
        </div>
        <div className="stat-card">
          <h3 className="stat-title">In Progress</h3>
          <div className="stat-number yellow">35</div>
        </div>
        <div className="stat-card">
          <h3 className="stat-title">Resolved Today</h3>
          <div className="stat-number green">8</div>
        </div>
      </div>

      {/* Issues Table */}
      <div className="stat-card">
        <h2 className="section-title">Recent Issues</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280' }}>ID</th>
                <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280' }}>Title</th>
                <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280' }}>Location</th>
                <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280' }}>Status</th>
                <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280' }}>Priority</th>
              </tr>
            </thead>
            <tbody>
              {issues.map(issue => (
                <tr key={issue.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '12px' }}>#{issue.id}</td>
                  <td style={{ padding: '12px', fontWeight: '500' }}>{issue.title}</td>
                  <td style={{ padding: '12px' }}>{issue.location}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      backgroundColor: issue.status === 'Open' ? '#fee2e2' : 
                                     issue.status === 'In Progress' ? '#fef3c7' : '#d1fae5',
                      color: issue.status === 'Open' ? '#dc2626' : 
                             issue.status === 'In Progress' ? '#d97706' : '#065f46'
                    }}>
                      {issue.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px' }}>{issue.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Issues;