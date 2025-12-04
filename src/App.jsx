import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import InteractPage from './page/InteractPage'
import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import ForgotPasswordPage from './page/ForgotPasswordPage'
import CourseDetailsPage from './page/CourseDetailsPage'
import CoursesPage from './page/CoursesPage'
import CourseCard from './component/sections/Course/CourseCard'
import AdminLayout from './page/admin/AdminLayout'
import DashboardPage from './page/admin/DashboardPage'
import UsersPage from './page/admin/UsersPage'
import InstructorsPage from './page/admin/InstructorsPage'
import AdminCoursesPage from './page/admin/AdminCoursesPage'
import PaymentsPage from './page/admin/PaymentsPage'
import AnalyticsPage from './page/admin/AnalyticsPage'
import AddCoursePage from './page/admin/AddCoursePage'
import InstructorDashboard from './page/instructor/InstructorDashboard'
import StudentDashboard from './page/student/StudentDashboard'

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
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:courseId" element={<CourseDetailsPage />} />
        
        {/* Instructor Routes */}
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        
        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="instructors" element={<InstructorsPage />} />
          <Route path="courses" element={<AdminCoursesPage />} />
          <Route path="courses/add" element={<AddCoursePage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App