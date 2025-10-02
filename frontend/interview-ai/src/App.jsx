import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import LandingPage from './Pages/InterviewPrep/LandingPage';
import Dashboard from './Pages/Home/Dashboard';
import InterviewPrep from './Pages/InterviewPrep/InterviewPrep';

const App = () => {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        toastOptions={{
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  )
}

export default App;
