import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import MyCourses from './MyCourses'
import Quizzes from './Quizzes'
import LiveSessions from './LiveSessions'
import Leaderboard from './Leaderboard'
import Community from './Community'
import Settings from './Settings'

const StudentDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)

  const isActive = (path) => location.pathname === path

  const stats = [
    { label: 'Course Enrolled', value: '5', icon: '📚' },
    { label: 'Lessons Completed', value: '12', icon: '✅' },
    { label: 'XP Earned', value: '1240', icon: '⭐' }
  ]

  const recommendedCourses = [
    {
      id: 1,
      category: 'Web Development',
      title: 'Complete Web Development with React',
      description: 'Learn React with hands-on projects.',
      price: 12500,
      image: './download.jpeg'
    },
    {
      id: 2,
      category: 'AI & ML',
      title: 'Machine Learning Fundamentals',
      description: 'Learn ML algorithms with Python. Real-world projects included.',
      price: 13500,
      image: './Data-Analysis-With-Python.svg'
    },
    {
      id: 3,
      category: 'Data Science',
      title: 'Data Science with Python',
      description: 'Real-world Data Visulization Project.',
      price: 12000,
      image: './images.jpeg'
    }
  ]

  const liveClasses = [
    {
      id: 1,
      title: 'React Live Class',
      instructor: 'John Doe',
      startDate: '16 Nov, 4 PM'
    },
    {
      id: 2,
      title: 'Machine Learning Live',
      instructor: 'Jane Smith',
      startDate: '17 Nov, 5 PM'
    },
    {
      id: 3,
      title: 'Data Science Workshop',
      instructor: 'Alex Johnson',
      startDate: '18 Nov, 3 PM'
    }
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const renderContent = () => {
    const path = location.pathname
    
    if (path === '/student/my-courses') return <MyCourses />
    if (path === '/student/quizzes') return <Quizzes />
    if (path === '/student/live-sessions') return <LiveSessions />
    if (path === '/student/leaderboard') return <Leaderboard />
    if (path === '/student/community') return <Community />
    if (path === '/student/settings') return <Settings />
    
    // Default dashboard content
    return (
          <>
            {/* Stats Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-r from-green-700 to-green-300 text-white p-5 rounded-2xl shadow-lg flex justify-between items-center">
                  <div>
                    <p className="text-bold opacity-80">{stat.label}</p>
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                  </div>
                  <div className="text-4xl opacity-80">{stat.icon}</div>
                </div>
              ))}
            </section>

            {/* Recommended Courses */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map((course) => (
                  <div key={course.id} className="bg-gray-50 hover:border hover:border-green-500 rounded-2xl shadow hover:shadow-xl overflow-hidden transition">
                    <img src={course.image} className="w-full h-40 object-cover" alt={course.title} />
                    <div className="p-4">
                      <p className="text-green-500 font-semibold">{course.category}</p>
                      <h3 className="font-bold text-lg text-gray-800">{course.title}</h3>
                      <p className="text-black text-sm mb-4">{course.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-indigo-600 font-bold">৳{course.price.toLocaleString()}</span>
                        <button className="w-32 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 rounded-md text-lg transition">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Live Classes */}
            <section className="mb-6">
              <h2 className="text-2xl font-bold text-black mb-4">Upcoming Live Classes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveClasses.map((liveClass) => (
                  <div key={liveClass.id} className="bg-gray-50 shadow rounded-xl p-4 flex flex-col hover:shadow-xl transition">
                    <h3 className="font-bold text-gray-800 mb-2">{liveClass.title}</h3>
                    <p className="text-sm text-black mb-1">Instructor: {liveClass.instructor}</p>
                    <p className="text-sm text-black mb-4">Starts: {liveClass.startDate}</p>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition">Join Class</button>
                  </div>
                ))}
              </div>
            </section>
          </>
        )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`w-64 bg-white shadow-md p-6 fixed inset-y-0 left-0 z-20 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-all duration-300 md:relative md:z-0`}>
        <div className="flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-5">
            <img src="/assets/downloadShikbo.png" alt="Shikbo.ai Logo" className="h-10 w-auto rounded-md" />
          </a>
          <button onClick={closeSidebar} className="md:hidden text-gray-600 text-2xl">
            ✖
          </button>
        </div>
        
        <nav className="space-y-1 mt-6">
          <button 
            onClick={() => navigate('/student/dashboard')}
            className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg transition ${
              isActive('/student/dashboard') ? 'bg-green-100 text-green-600' : 'text-gray-700 hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="font-medium">Dashboard</span>
          </button>

          <button 
            onClick={() => navigate('/student/my-courses')}
            className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg transition ${
              isActive('/student/my-courses') ? 'bg-green-100 text-green-600' : 'text-gray-700 hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="font-medium">My Courses</span>
          </button>

          <button 
            onClick={() => navigate('/student/quizzes')}
            className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg transition ${
              isActive('/student/quizzes') ? 'bg-green-100 text-green-600' : 'text-gray-700 hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span className="font-medium">Quizzes</span>
          </button>

          <button 
            onClick={() => navigate('/student/live-sessions')}
            className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg transition ${
              isActive('/student/live-sessions') ? 'bg-green-100 text-green-600' : 'text-gray-700 hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">Live Sessions</span>
          </button>

          <button 
            onClick={() => navigate('/student/leaderboard')}
            className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg transition ${
              isActive('/student/leaderboard') ? 'bg-green-100 text-green-600' : 'text-gray-700 hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="font-medium">Leaderboard</span>
          </button>

          <button 
            onClick={() => navigate('/student/community')}
            className={`flex items-center w-full gap-3 px-3 py-2 rounded-lg transition ${
              isActive('/student/community') ? 'bg-green-100 text-green-600' : 'text-gray-700 hover:bg-green-100 hover:text-green-600'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <span className="font-medium">Community</span>
          </button>

          
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 gap-2 p-6 md:p-10 ml-0 md:ml-6 transition-all duration-300">
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="md:hidden text-gray-600 text-2xl"
            >
              ☰
            </button>
            <h2 className="text-3xl font-extrabold text-gray-800">Welcome back, Student!</h2>
          </div>

          <div className="relative">
            <button 
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="flex items-center gap-4 bg-white shadow-md px-4 py-2 rounded-full hover:shadow-lg transition"
            >
              <div className="text-right">
                <p className="font-semibold text-gray-800">Student Profile</p>
              </div>
              <img src="https://api.dicebear.com/6.x/initials/svg?seed=SA" className="w-10 h-10 rounded-full" alt="Profile" />
            </button>

            {/* Dropdown Menu */}
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                <button
                  onClick={() => {
                    navigate('/student/settings')
                    setShowProfileDropdown(false)
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>My Profile</span>
                </button>

                <div className="border-t border-gray-100 my-1"></div>

                <button
                  onClick={() => {
                    // Add logout logic here
                    console.log('Logging out...')
                    navigate('/login')
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Render Active Tab Content */}
        {renderContent()}
      </main>
    </div>
  )
}

export default StudentDashboard