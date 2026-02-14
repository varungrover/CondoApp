import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Payments from './pages/Payments';
import Documents from './pages/Documents';
import Amenities from './pages/Amenities';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes Wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          {/* Fallback for other routes in the demo */}
          <Route path="/requests" element={<Dashboard />} />
          <Route path="/maintenance" element={<Dashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;