import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardProvider } from './components/context/DashboardContext';
import DashboardLayout from './components/Layout/DashboardLayout';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<DashboardProvider> <DashboardLayout /> </DashboardProvider>} />
          {/* bisa menambahkan lebih banyak Route di sini */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes> 
    </Router>
  );
}

export default App;
