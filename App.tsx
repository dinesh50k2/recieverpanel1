import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import AuthForm, { AuthFormData } from './components/AuthForm';
import NGOProfile from './pages/NGOProfile';
import IndividualProfile from './pages/IndividualProfile';
import VolunteerProfile from './pages/VolunteerProfile';
import DonationsList from './components/DonationsList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const handleAuth = (formData: AuthFormData) => {
    setIsAuthenticated(true);
    setUserRole(formData.role);
    navigate('/donations');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('');
    navigate('/');
  };

  if (!isAuthenticated) {
    return <AuthForm onSubmit={handleAuth} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userRole={userRole} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Navigate to="/donations" replace />} />
        <Route path="/donations" element={<DonationsList />} />
        <Route 
          path="/profile" 
          element={
            userRole === 'NGO' ? <NGOProfile /> :
            userRole === 'Individual' ? <IndividualProfile /> :
            <VolunteerProfile />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;