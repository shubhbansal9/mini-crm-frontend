import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Data Ingestion</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/audience">Audience Builder</Link></li>
        <li><Link to="/campaigns">Campaigns</Link></li>
        <li><Link to="/messages">Messages</Link></li>
      </ul>
      <div className="user-info">
        {user && (
          <>
            <span>{user.name}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;