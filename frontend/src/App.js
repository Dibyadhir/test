// App.js
import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginPage from './components/Login';
import './App.css';
import ProfilePage from './components/Profile';
import Dashboard from './components/Dashbord';
import RegisterForm from './components/RegistrationForm';
import ChatBox from './components/ChatBox';
import ChatDashboard from './components/ChatDashboard';
import Navbar from './components/Navbar';
import DashboardContent from './components/DashboardContent';

// Define the theme with fallback for shadows to avoid the error
const theme = createTheme({
  shadows: Array(25).fill('none'), // Ensure shadows array has at least 25 values
});

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardContent />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/registorform' element={<RegisterForm />} />
        <Route path='/chatbox' element={<ChatDashboard />} />
      </Routes>
    </BrowserRouter>


    // <ChatBox friendName="John Doe" friendAvatar="https://example.com/avatar.jpg" />


    // <ThemeProvider theme={theme}>
    //   <ProfilePage />
    //   {/* <LoginPage /> */}
    //   {/* <Dashboard /> */}
    // </ThemeProvider>
  );
}

export default App;
