import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Issues from './components/Issues';
// import Departments from './components/Departments';
import Reports from './components/Reports';
import Settings from './components/Settings';
import Login from './components/Login';  // ✅ import the Login component
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);   // ✅ logout resets login state
  };

  return (
    <Router>
      <div className="App">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Layout onLogout={handleLogout} />}  // ✅ pass logout to Layout
            >
              <Route index element={<Dashboard />} />
              <Route path="issues" element={<Issues />} />
              {/* <Route path="departments" element={<Departments />} /> */}
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

