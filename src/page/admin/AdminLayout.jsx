import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const navLinks = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/users', label: 'Users', icon: '👥' },
    { path: '/admin/instructors', label: 'Instructors', icon: '👩‍🏫' },
    { path: '/admin/courses', label: 'Courses', icon: '📚' },
    { path: '/admin/payments', label: 'Payments', icon: '💳' },
    { path: '/admin/analytics', label: 'Analytics', icon: '📈' }
  ]

  return (
    <div className="min-h-screen flex bg-white">
      {/* SIDEBAR */}
      <aside
        className={`w-68 bg-white border-r shadow-lg p-6 space-y-6 fixed md:static inset-y-0 left-0 z-20 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-all duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/download Shikbo.png" alt="Shikbo.AI" className="h-10 rounded-md" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-gray-600 text-2xl"
          >
            ✖
          </button>
        </div>

        {/* Nav Links */}
        <nav className="space-y-1 text-black font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition ${
                isActive(link.path)
                  ? 'bg-green-100 text-green-600'
                  : 'hover:bg-green-100 hover:text-green-600'
              }`}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/admin/courses/add"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg py-2 transition block text-center"
        >
          + Add Course
        </Link>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 gap-2 p-6 md:p-10 ml-0 md:ml-6 transition-all duration-300">
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-600 text-2xl"
            >
              ☰
            </button>
            <h2 className="text-3xl font-extrabold text-gray-800">Admin Dashboard</h2>
          </div>

          <div className="flex items-center gap-4 bg-white shadow-md px-4 py-1 rounded-full">
            <div className="text-right">
              <p className="font-semibold">Shikbo Admin</p>
            </div>
            <img
              src="https://api.dicebear.com/6.x/initials/svg?seed=SA"
              className="w-10 h-10 rounded-full"
              alt="Admin"
            />
          </div>
        </div>

        {/* Page Content */}
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
