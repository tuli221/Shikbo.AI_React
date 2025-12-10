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
import UsersPage from './page/admin/StudentPage'
import AdminInstructorsPage from './page/admin/InstructorsPage'
import AdminCoursesPage from './page/admin/AdminCoursesPage'
import PaymentsPage from './page/admin/PaymentsPage'
import AnalyticsPage from './page/admin/AnalyticsPage'
import AddCoursePage from './page/admin/AddCoursePage'
import StudentDashboard from './page/student/StudentDashboard'
import LeaderboardPage from './page/LeaderboardPage'
import PublicInstructorsPage from './page/InstructorsPage'
import InstructorDashboard from './page/instructor/InstructorDashboard'
import LearningCenter from './page/LearningCenter'

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
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/instructors" element={<PublicInstructorsPage />} />
        <Route path="/learning-center" element={<LearningCenter />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="instructors" element={<AdminInstructorsPage />} />
          <Route path="courses" element={<AdminCoursesPage />} />
          <Route path="courses/add" element={<AddCoursePage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
        </Route>
        {/* Instructor Routes */}
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/my-courses" element={<InstructorDashboard />} />
        <Route path="/instructor/create-course" element={<InstructorDashboard />} />
        <Route path="/instructor/students" element={<InstructorDashboard />} />
        <Route path="/instructor/payments" element={<InstructorDashboard />} />
        <Route path="/instructor/messages" element={<InstructorDashboard />} />
        <Route path="/instructor/profile" element={<InstructorDashboard />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/my-courses" element={<StudentDashboard />} />
        <Route path="/student/quizzes" element={<StudentDashboard />} />
        <Route path="/student/live-sessions" element={<StudentDashboard />} />
        <Route path="/student/leaderboard" element={<StudentDashboard />} />
        <Route path="/student/community" element={<StudentDashboard />} />
        <Route path="/student/settings" element={<StudentDashboard />} />

        
      </Routes>
    </BrowserRouter>
  )
}

export default App