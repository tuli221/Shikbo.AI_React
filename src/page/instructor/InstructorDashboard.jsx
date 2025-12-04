import React, { useState } from 'react'
import MyCourses from './MyCourses'
import CreateCourse from './CreateCourse'
import Students from './Students'
import Payments from './Payments'
import Messages from './Messages'
import Settings from './Settings'

const InstructorDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  const recentCourses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      students: 530,
      status: 'Live',
      statusColor: 'bg-green-100 text-green-600'
    },
    {
      id: 2,
      title: 'Python for Data Science',
      students: 320,
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: 3,
      title: 'Machine Learning Basics',
      students: 390,
      status: 'Draft',
      statusColor: 'bg-red-100 text-red-600'
    }
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (isSidebarOpen) {
      closeSidebar()
    }
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            {/* TOP STATS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-10">
              <div className="bg-gradient-to-r from-green-700 to-green-400 text-white p-6 md:p-8 rounded-2xl shadow-lg flex justify-between items-center">
                <p className="text-white font-semibold text-sm md:text-base">Total Courses</p>
                <h3 className="text-2xl md:text-3xl font-bold">12</h3>
              </div>

              <div className="bg-gradient-to-r from-green-700 to-green-400 text-white p-6 md:p-8 rounded-2xl shadow-lg flex justify-between items-center">
                <p className="text-white font-semibold text-sm md:text-base">Total Students</p>
                <h3 className="text-2xl md:text-3xl font-bold">1,240</h3>
              </div>

              <div className="bg-gradient-to-r from-green-700 to-green-400 text-white p-6 md:p-8 rounded-2xl shadow-lg flex justify-between items-center sm:col-span-2 lg:col-span-1">
                <p className="text-white font-semibold text-sm md:text-base">Earnings</p>
                <h3 className="text-2xl md:text-3xl font-bold">৳85,000</h3>
              </div>
            </div>

            {/* RECENT COURSES */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg mb-6 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-4">My Recent Courses</h3>
              <div className="overflow-x-auto -mx-4 md:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <table className="w-full text-left min-w-[600px]">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-2 md:px-4 text-sm md:text-base">Course</th>
                        <th className="py-2 px-2 md:px-4 text-sm md:text-base">Students</th>
                        <th className="py-2 px-2 md:px-4 text-sm md:text-base">Status</th>
                        <th className="py-2 px-2 md:px-4 text-sm md:text-base">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      {recentCourses.map((course) => (
                        <tr key={course.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-2 md:px-4 font-semibold text-sm md:text-base">{course.title}</td>
                          <td className="py-3 px-2 md:px-4 text-sm md:text-base">{course.students}</td>
                          <td className="py-3 px-2 md:px-4">
                            <span className={`px-2 md:px-3 py-1 ${course.statusColor} rounded-lg text-xs md:text-sm`}>
                              {course.status}
                            </span>
                          </td>
                          <td className="py-3 px-2 md:px-4">
                            <button className="px-3 md:px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-sm">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* STUDENT ENGAGEMENT */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <h3 className="text-lg md:text-xl font-bold mb-3">Student Engagement</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">Last 7 days activity</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-green-50 p-4 md:p-5 rounded-xl shadow-sm text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-green-600">230</h4>
                  <p className="text-gray-600 text-sm md:text-base">New Enrollments</p>
                </div>

                <div className="bg-green-50 p-4 md:p-5 rounded-xl shadow-sm text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-green-600">1,540</h4>
                  <p className="text-gray-600 text-sm md:text-base">Video Views</p>
                </div>

                <div className="bg-green-50 p-4 md:p-5 rounded-xl shadow-sm text-center sm:col-span-2 lg:col-span-1">
                  <h4 className="text-xl md:text-2xl font-bold text-green-600">98%</h4>
                  <p className="text-gray-600 text-sm md:text-base">Course Completion Rate</p>
                </div>
              </div>
            </div>
          </>
        )
      
      case 'courses':
        return <MyCourses />
      
      case 'create':
        return <CreateCourse />
      
      case 'students':
        return <Students />
      
      case 'payments':
        return <Payments />
      
      case 'messages':
        return <Messages />
      
      case 'settings':
        return <Settings />
      
      default:
        return null
    }
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* SIDEBAR */}
      <aside
        id="sidebar"
        className={`w-64 bg-white border-r shadow-lg p-6 space-y-6 fixed md:static inset-y-0 left-0 z-20 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-all duration-300 h-screen overflow-y-auto`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between">
          <a className="flex items-center gap-3">
            <img src="./assets/download Shikbo.png" className="h-10 rounded-md" alt="Shikbo.AI" />
          </a>
          <button onClick={closeSidebar} className="md:hidden text-gray-600 text-2xl">
            ✖
          </button>
        </div>

        {/* Nav Links */}
        <nav className="space-y-1 text-black font-medium">
          <button 
            onClick={() => handleTabChange('dashboard')}
            className={`flex items-center gap-3 p-3 rounded-lg transition cursor-pointer w-full text-left ${
              activeTab === 'dashboard' ? 'bg-green-100 text-green-600' : 'hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <span>📊</span>Dashboard
          </button>

          <button 
            onClick={() => handleTabChange('courses')}
            className={`flex items-center gap-3 p-3 rounded-lg transition cursor-pointer w-full text-left ${
              activeTab === 'courses' ? 'bg-green-100 text-green-600' : 'hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <span>📚</span>My Courses
          </button>

          <button 
            onClick={() => handleTabChange('create')}
            className={`flex items-center gap-3 p-3 rounded-lg transition cursor-pointer w-full text-left ${
              activeTab === 'create' ? 'bg-green-100 text-green-600' : 'hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <span>➕</span>Create Course
          </button>

          <button 
            onClick={() => handleTabChange('students')}
            className={`flex items-center gap-3 p-3 rounded-lg transition cursor-pointer w-full text-left ${
              activeTab === 'students' ? 'bg-green-100 text-green-600' : 'hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <span>👨‍🎓</span>Students
          </button>

          <button 
            onClick={() => handleTabChange('payments')}
            className={`flex items-center gap-3 p-3 rounded-lg transition cursor-pointer w-full text-left ${
              activeTab === 'payments' ? 'bg-green-100 text-green-600' : 'hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <span>💳</span>Payments
          </button>

          <button 
            onClick={() => handleTabChange('messages')}
            className={`flex items-center gap-3 p-3 rounded-lg transition cursor-pointer w-full text-left ${
              activeTab === 'messages' ? 'bg-green-100 text-green-600' : 'hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <span>💬</span>Messages
          </button>

          <button 
            onClick={() => handleTabChange('settings')}
            className={`flex items-center gap-3 p-3 rounded-lg transition cursor-pointer w-full text-left ${
              activeTab === 'settings' ? 'bg-green-100 text-green-600' : 'hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <span>⚙️</span>Settings
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-6 lg:p-10 w-full md:ml-0 transition-all duration-300 overflow-x-hidden">
        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">Instructor Dashboard</h2>
          </div>

          <div className="flex items-center gap-3 md:gap-4 bg-white shadow-md px-3 md:px-4 py-2 rounded-full">
            <div className="text-right hidden sm:block">
              <p className="font-semibold text-sm md:text-base">Shikbo Instructor</p>
            </div>
            <img
              src="https://api.dicebear.com/6.x/initials/svg?seed=SI"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              alt="Instructor"
            />
          </div>
        </div>

        {renderContent()}
      </main>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed bottom-4 left-4 bg-green-600 text-white p-3 rounded-full shadow-lg z-30 flex items-center justify-center w-12 h-12 hover:bg-green-700 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  )
}

export default InstructorDashboard
