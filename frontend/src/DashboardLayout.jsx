import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TimeTable from './components/Timetable/Timetable';

function DashboardLayout({ children }) {
  return (
    <div>
    
        <Navbar />
        <Outlet />

    </div>
  );
}

export default DashboardLayout;
