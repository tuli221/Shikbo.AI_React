import React, { useState } from 'react'

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [users] = useState([
    { id: 1, name: 'Bob', email: 'bob@example.com', course: 'AI Fundamentals', status: 'Active' },
    { id: 2, name: 'Mim', email: 'mim@example.com', course: 'Web Dev', status: 'Pending' },
    { id: 3, name: 'Sarah Khan', email: 'sarah@example.com', course: 'Data Science', status: 'Active' },
    { id: 4, name: 'John Doe', email: 'john@example.com', course: 'Machine Learning', status: 'Inactive' },
    { id: 5, name: 'Alice Wong', email: 'alice@example.com', course: 'Web Dev', status: 'Active' }
  ])

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">All Users</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search user..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm"
          />
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm shadow">
            + Add New User
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm text-black border-b bg-gray-50">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Course</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-3">#{user.id}</td>
                <td className="p-3 font-medium">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.course}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : user.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm">
                    View
                  </button>
                  <button className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-black rounded text-sm">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-8 text-gray-500">No users found</div>
      )}
    </div>
  )
}

export default UsersPage
