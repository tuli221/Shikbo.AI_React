import React, { useState } from 'react'

const StudentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const stats = [
    { label: 'Course Enrolled', value: '5' },
    { label: 'Lessons Completed', value: '12' },
    { label: 'XP Earned', value: '1240' }
  ]

  const recommendedCourses = [
    {
      id: 1,
      category: 'Web Development',
      title: 'Complete Web Development with React',
      description: 'Learn React with hands-on projects.',
      price: 12500,
      image: '/download.jpeg'
    },
    {
      id: 2,
      category: 'AI & ML',
      title: 'Machine Learning Fundamentals',
      description: 'Learn ML algorithms with Python. Real-world projects included.',
      price: 13500,
      image: '/Data-Analysis-With-Python.svg'
    },
    {
      id: 3,
      category: 'Data Science',
      title: 'Data Science with Python',
      description: 'Real-world Data Visulization Project.',
      price: 12000,
      image: '/images.jpeg'
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

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside
        className={`w-68 bg-white shadow-md p-6 fixed md:static inset-y-0 left-0 z-20 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-all duration-300`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-5">
            <img src="/Shikbo.AI black (2).jpeg" alt="Shikbo.ai Logo" className="h-10 w-auto rounded-md" />
          </a>
          <button onClick={closeSidebar} className="md:hidden text-gray-600 text-2xl">
            ✖
          </button>
        </div>

        <nav className="space-y-1 mt-6">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
            <span className="text-lg">📊</span>
            <span className="font-medium">Dashboard</span>
          </a>

          <button className="flex items-center w-full text-black hover:text-indigo-600 px-3 py-2 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            My Courses
          </button>

          <button className="flex items-center w-full text-black hover:text-indigo-600 px-3 py-2 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Quizzes
          </button>

          <button className="flex items-center w-full text-black hover:text-indigo-600 px-3 py-2 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Live Sessions
          </button>

          <button className="flex items-center w-full text-black hover:text-indigo-600 px-3 py-2 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Leaderboard
          </button>

          <button className="flex items-center w-full text-black hover:text-indigo-600 px-3 py-2 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            Community
          </button>

          <button className="flex items-center w-full text-black hover:text-indigo-600 px-3 py-2 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>

          <button className="flex items-center w-full text-white bg-red-500 hover:bg-red-600 p-2 rounded mt-6 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 ml-0 md:ml-6 transition-all duration-300">
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-extrabold text-gray-800">Welcome back, Student!</h2>
          </div>

          <div className="flex items-center gap-4 bg-white shadow-md px-4 py-1 rounded-full">
            <div className="text-right">
              <p className="font-semibold">Student Profile</p>
            </div>
            <img
              src="https://api.dicebear.com/6.x/initials/svg?seed=SA"
              className="w-10 h-10 rounded-full"
              alt="Student"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-green-700 to-green-300 text-white p-5 rounded-2xl shadow-lg flex justify-between items-center"
            >
              <div>
                <p className="text-bold opacity-80">{stat.label}</p>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
              </div>
            </div>
          ))}
        </section>

        {/* Recommended Courses */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-50 hover:border hover:border-green-500 rounded-2xl shadow hover:shadow-xl overflow-hidden transition"
              >
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
              <div
                key={liveClass.id}
                className="bg-gray-50 shadow rounded-xl p-4 flex flex-col hover:shadow-xl transition"
              >
                <h3 className="font-bold text-gray-800 mb-2">{liveClass.title}</h3>
                <p className="text-sm text-black mb-1">Instructor: {liveClass.instructor}</p>
                <p className="text-sm text-black mb-4">Starts: {liveClass.startDate}</p>
                <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
                  Join Class
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed bottom-4 left-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg z-30 flex items-center justify-center w-12 h-12"
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

export default StudentDashboard
