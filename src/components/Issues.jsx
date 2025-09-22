// import React, { useState } from 'react';

// const Issues = () => {
//   const [issues] = useState([
//     { id: 1, title: 'Broken Street Light', location: 'Main St & 5th Ave', status: 'Open', priority: 'High' },
//     { id: 2, title: 'Pothole on Highway', location: 'Highway 101', status: 'In Progress', priority: 'Medium' },
//     { id: 3, title: 'Park Bench Vandalized', location: 'Central Park', status: 'Resolved', priority: 'Low' },
//   ]);

//   return (
//     <div>
//       <h1 className="section-title">Issue Management</h1>
      
//       {/* Issues Stats */}
//       <div className="stats-grid" style={{ marginBottom: '2rem' }}>
//         <div className="stat-card">
//           <h3 className="stat-title">Open Issues</h3>
//           <div className="stat-number red">12</div>
//         </div>
//         <div className="stat-card">
//           <h3 className="stat-title">In Progress</h3>
//           <div className="stat-number yellow">35</div>
//         </div>
//         <div className="stat-card">
//           <h3 className="stat-title">Resolved Today</h3>
//           <div className="stat-number green">8</div>
//         </div>
//       </div>

//       {/* Issues Table */}
//       <div className="stat-card">
//         <h2 className="section-title">Recent Issues</h2>
//         <div style={{ overflowX: 'auto' }}>
//           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//             <thead>
//               <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
//                 <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280' }}>ID</th>
//                 <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280' }}>Title</th>
//                 <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280' }}>Location</th>
//                 <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280' }}>Status</th>
//                 <th style={{ textAlign: 'left', padding: '12px', color: '#6b7280' }}>Priority</th>
//               </tr>
//             </thead>
//             <tbody>
//               {issues.map(issue => (
//                 <tr key={issue.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
//                   <td style={{ padding: '12px' }}>#{issue.id}</td>
//                   <td style={{ padding: '12px', fontWeight: '500' }}>{issue.title}</td>
//                   <td style={{ padding: '12px' }}>{issue.location}</td>
//                   <td style={{ padding: '12px' }}>
//                     <span style={{
//                       padding: '4px 8px',
//                       borderRadius: '4px',
//                       fontSize: '12px',
//                       backgroundColor: issue.status === 'Open' ? '#fee2e2' : 
//                                      issue.status === 'In Progress' ? '#fef3c7' : '#d1fae5',
//                       color: issue.status === 'Open' ? '#dc2626' : 
//                              issue.status === 'In Progress' ? '#d97706' : '#065f46'
//                     }}>
//                       {issue.status}
//                     </span>
//                   </td>
//                   <td style={{ padding: '12px' }}>{issue.priority}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Issues;


// import React, { useState, useEffect } from "react";

// const Issues = () => {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/api/api/report/all")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("API Response:", data); // 👈 check structure
//         // If API gives an array
//         setIssues(Array.isArray(data) ? data : data.reports || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching issues:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading issues...</p>;

//   return (
//     <div>
//       <h1 className="section-title">Reported Issues</h1>

//       {issues.length === 0 ? (
//         <p>No issues found.</p>
//       ) : (
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
//               <th style={{ padding: "12px" }}>ID</th>
//               <th style={{ padding: "12px" }}>Category</th>
//               <th style={{ padding: "12px" }}>Location</th>
//               <th style={{ padding: "12px" }}>Status</th>
//               <th style={{ padding: "12px" }}>Zone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {issues.map((issue) => (
//               <tr key={issue.id} style={{ borderBottom: "1px solid #eee" }}>
//                 <td style={{ padding: "12px" }}>#{issue.id}</td>
//                 <td style={{ padding: "12px" }}>{issue.category}</td>
//                 <td style={{ padding: "12px" }}>{issue.location}</td>
//                 <td style={{ padding: "12px" }}>{issue.status}</td>
//                 <td style={{ padding: "12px" }}>{issue.zone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Issues;

import React, { useState, useEffect } from "react";
import "./Issues.css";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIssue, setSelectedIssue] = useState(null);

  useEffect(() => {
    fetch("/api/api/report/all")
      .then((res) => res.json())
      .then((data) => {
        setIssues(Array.isArray(data) ? data : data.reports || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching issues:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading issues...</p>;

  return (
    <div className="issues-container">
      <h1 className="section-title">Reported Issues</h1>

      {issues.length === 0 ? (
        <p>No issues found.</p>
      ) : (
        <table className="issues-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Location</th>
              <th>Status</th>
              <th>Zone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td>#{issue.id}</td>
                <td>{issue.category}</td>
                <td>{issue.location}</td>
                <td>{issue.status}</td>
                <td>{issue.zone}</td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => setSelectedIssue(issue)}
                  >
                    View Issue
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
      {selectedIssue && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedIssue(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Issue #{selectedIssue.id}</h2>
            <p><strong>Category:</strong> {selectedIssue.category}</p>
            <p><strong>Email:</strong> {selectedIssue.email}</p>
            <p><strong>Location:</strong> {selectedIssue.location}</p>
            <p><strong>Zone:</strong> {selectedIssue.zone}</p>
            <p><strong>Status:</strong> {selectedIssue.status}</p>
            <p><strong>Priority:</strong> {selectedIssue.pirorty || "N/A"}</p>
            <p><strong>Description:</strong> {selectedIssue.description}</p>
            <p><strong>Created At:</strong> {new Date(selectedIssue.created_at).toLocaleString()}</p>
            {selectedIssue.image && (
              <img src={selectedIssue.image} alt="Issue" />
            )}
            <button
              className="close-btn"
              onClick={() => setSelectedIssue(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Issues;
