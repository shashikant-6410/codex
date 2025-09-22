// import React from 'react';

// const Reports = () => {
//   return (
//     <div>
//       <h1 className="section-title">Reports & Analytics</h1>
      
//       <div className="bottom-grid">
//         <div className="stat-card">
//           <h2 className="section-title">Monthly Performance</h2>
//           <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
//             <div style={{ textAlign: 'center', color: '#6b7280' }}>
//               📊
//               <p>Chart Placeholder</p>
//               <p style={{ fontSize: '14px' }}>Monthly issue resolution trends</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="stat-card">
//           <h2 className="section-title">Quick Reports</h2>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//             <button className="view-issues-btn">
//               📄 Daily Summary Report
//             </button>
//             <button className="view-issues-btn">
//               📈 Department Performance
//             </button>
//             <button className="view-issues-btn">
//               📊 Budget Analysis
//             </button>
//             <button className="view-issues-btn">
//               📋 Issue Categories
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Recent Reports */}
//       <div className="stat-card" style={{ marginTop: '2rem' }}>
//         <h2 className="section-title">Recent Reports</h2>
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//           {['Q4 2024 Summary', 'Infrastructure Assessment', 'Public Safety Report'].map((report, index) => (
//             <div key={index} style={{ 
//               padding: '1rem', 
//               border: '1px solid #e5e7eb', 
//               borderRadius: '8px',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center'
//             }}>
//               <div>
//                 <h4 style={{ fontWeight: '500', marginBottom: '0.25rem' }}>{report}</h4>
//                 <p style={{ color: '#6b7280', fontSize: '14px' }}>Generated 2 days ago</p>
//               </div>
//               <button style={{ 
//                 padding: '4px 12px', 
//                 backgroundColor: '#f3f4f6', 
//                 border: 'none', 
//                 borderRadius: '4px',
//                 cursor: 'pointer'
//               }}>
//                 Download
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reports;


import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Reports = () => {
  const [issues, setIssues] = useState([]);

  // ✅ Fetch issues from backend
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const res = await fetch("/api/api/report/all");
        const data = await res.json();
        setIssues(data);
      } catch (err) {
        console.error("Error fetching issues:", err);
      }
    };

    fetchIssues(); // ✅ first load
    const interval = setInterval(fetchIssues, 10000); // ✅ refresh every 10s
    return () => clearInterval(interval); // ✅ cleanup
  }, []);

  return (
    <div>
      <h1 className="section-title">Reports & Analytics</h1>

      {/* ✅ Map Section */}
      <div className="stat-card" style={{ marginTop: "2rem" }}>
        <h2 className="section-title">Issue Locations</h2>
        <MapContainer
          center={[29.96, 77.55]} // default center
          zoom={12}
          style={{ height: "400px", width: "100%", borderRadius: "8px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {issues.map((issue) => {
            const [lat, lng] = issue.location
              ? issue.location.split(",").map((n) => parseFloat(n.trim()))
              : [null, null];

            if (!lat || !lng) return null;

            return (
              <Marker key={issue.id} position={[lat, lng]}>
                <Popup>
                  <strong>Category:</strong> {issue.category} <br />
                  <strong>Zone:</strong> {issue.zone} <br />
                  <strong>Status:</strong> {issue.status}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* Your old reports UI can stay here if needed */}
    </div>
  );
};

export default Reports;
