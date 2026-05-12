import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Scan from './pages/Scan';
import Result from './pages/Result';
import PlantDetail from './pages/PlantDetail';
import ManageAccount from './pages/ManageAccount';

// Components
import PrivateRoute from './components/PrivateRoute';
import ParticlesBackground from './components/ParticlesBackground';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      {/* Global components like Chatbot remain here */}
      <ParticlesBackground />
      <Chatbot />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/scan" element={<PrivateRoute><Scan /></PrivateRoute>} />
        <Route path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />
        <Route path="/plant/:id" element={<PrivateRoute><PlantDetail /></PrivateRoute>} />
        <Route path="/manage-account" element={<PrivateRoute><ManageAccount /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
