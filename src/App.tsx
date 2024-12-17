import React from "react";
import LoginForm from "./interfaces/pages/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./interfaces/pages/Dashboard";

const App: React.FC = () => {
  return (
  
    <div className="container">
      <Router>
      <div className="left-section">
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </div>
      </Router>
      <div className="right-section">
        <img
          src={`${process.env.PUBLIC_URL}/people.png`}
          alt="Illustration"
          className="max-w-full h-auto"
        />
      </div>
      </div>

  );
};

export default App;
