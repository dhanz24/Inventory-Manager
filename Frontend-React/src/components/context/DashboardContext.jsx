// DashboardContext.js
import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('Dashboard');

  const switchPage = (page) => {
    setActivePage(page);
  };

  return (
    <DashboardContext.Provider value={{ activePage, switchPage }}>
      {children}
    </DashboardContext.Provider>
  );
};

