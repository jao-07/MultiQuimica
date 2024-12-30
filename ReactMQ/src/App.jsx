import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Company from "./Components/pages/Company.jsx";
import ProtectedRoute from "./Components/pages/ProtectedRoutes.jsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/menu" element={
            <ProtectedRoute>
                <Company/>
            </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
