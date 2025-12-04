import React, { useState } from 'react'

const Settings = () => {
  const [formData, setFormData] = useState({
    fullName: 'Shikbo Instructor',
    email: 'instructor@shikbo.ai',
    phone: '+880 1712-345678',
    bio: 'Experienced instructor specializing in web development and data science.',
    expertise: 'Web Development, Data Science',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    console.log('Profile updated:', formData)
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    console.log('Password changed')
  }

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Settings</h3>

      <div className="space-y-4 md:space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
          <h4 className="text-xl font-bold mb-6">Profile Information</h4>
          
          <form onSubmit={handleProfileSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Expertise
                </label>
                <input
                  type="text"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Password Settings */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h4 className="text-xl font-bold mb-6">Change Password</h4>
          
          <form onSubmit={handlePasswordSubmit}>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h4 className="text-xl font-bold mb-6">Notification Preferences</h4>
          
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-green-500 rounded focus:ring-green-500" defaultChecked />
              <span className="text-gray-700">Email notifications for new student enrollments</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-green-500 rounded focus:ring-green-500" defaultChecked />
              <span className="text-gray-700">Email notifications for new messages</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-green-500 rounded focus:ring-green-500" />
              <span className="text-gray-700">Weekly earnings report</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-green-500 rounded focus:ring-green-500" defaultChecked />
              <span className="text-gray-700">Course review notifications</span>
            </label>
          </div>

          <div className="mt-6">
            <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
