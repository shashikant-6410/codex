// IssueDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./IssueDetails.css";

const BASE_URL = "https://isuue-report-api.onrender.com/api";

const IssueDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // ✅ Get issue from state (if navigated from Issues page)
  const [issue, setIssue] = useState(location.state?.issue || null);
  const [loading, setLoading] = useState(!issue);

  // Admin fields
  const [assignedDept, setAssignedDept] = useState(issue?.department || "");
  const [status, setStatus] = useState(issue?.status || "submitted");

  // ✅ Fallback fetch if no state (e.g., page refresh)
  useEffect(() => {
    if (!issue) {
      fetch(`${BASE_URL}/report/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setIssue(data);
          setAssignedDept(data.department || "");
          setStatus(data.status || "submitted");
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching issue:", err);
          setLoading(false);
        });
    }
  }, [id, issue]);

  // ✅ Update issue details
  const handleSave = () => {
    fetch(`${BASE_URL}/assign/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        department: assignedDept,
        status: status,
      }),
    })
      .then((res) => res.json())
      .then((updated) => {
        alert("Issue updated successfully!");
        setIssue(updated);
      })
      .catch((err) => console.error("Update failed:", err));
  };

  if (loading) return <p>Loading issue details...</p>;
  if (!issue) return <p>Issue not found</p>;

  // ✅ Extract lat/long
  const [lat, lng] = issue.location?.split(",").map((x) => parseFloat(x.trim())) || [0, 0];

  return (
    <div className="issue-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>

      <h1>Issue #{issue.id}</h1>
      <p>Reported on {new Date(issue.created_at).toLocaleString()}</p>

      <div className="issue-top">
        <div className="issue-image">
          <img src={issue.image} alt="Issue" />
        </div>
        <div className="issue-map">
          <iframe
            title="map"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${lat},${lng}&hl=es;z=14&output=embed`}
          ></iframe>
        </div>
      </div>

      <div className="issue-management">
        <h2>Issue Management</h2>
        <label>
          Assign Department:
          <select
            value={assignedDept}
            onChange={(e) => setAssignedDept(e.target.value)}
          >
            <option value="">Select Department</option>
            <option value="Roads">Roads</option>
            <option value="Water">Water</option>
            <option value="Sanitation">Sanitation</option>
            <option value="Electricity">Electricity</option>
          </select>
        </label>

        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="submitted">Submitted</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </label>

        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>

      <div className="issue-description">
        <h2>Issue Details</h2>
        <p>{issue.description}</p>
      </div>
    </div>
  );
};

export default IssueDetails;
