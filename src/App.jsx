import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import InteractPage from './page/InteractPage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import ForgotPasswordPage from './page/ForgotPasswordPage'
import CourseCard from './component/sections/Course/CourseCard'  

// Import shared styles (optional) and barrel exports for pages/components

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/interact" element={<InteractPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App