import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import DataIngestion from './components/DataIngestion';
import AudienceBuilder from './components/AudienceBuilder';
import CampaignHistory from './components/CampaignHistory';
import CustomerList from './components/CustomerList';
import MessageSender from './components/MessageSender';
import './styles.css';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const App = () => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <>
                      <Navigation />
                      <main className="main-content">
                        <DataIngestion />
                      </main>
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/customers"
                element={
                  <PrivateRoute>
                    <>
                      <Navigation />
                      <main className="main-content">
                        <CustomerList />
                      </main>
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/audience"
                element={
                  <PrivateRoute>
                    <>
                      <Navigation />
                      <main className="main-content">
                        <AudienceBuilder />
                      </main>
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/campaigns"
                element={
                  <PrivateRoute>
                    <>
                      <Navigation />
                      <main className="main-content">
                        <CampaignHistory />
                      </main>
                    </>
                  </PrivateRoute>
                }
              />
              <Route
                path="/messages"
                element={
                  <PrivateRoute>
                    <>
                      <Navigation />
                      <main className="main-content">
                        <MessageSender />
                      </main>
                    </>
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;