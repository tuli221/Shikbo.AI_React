import React, { useState } from 'react'

const InstructorsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [instructors] = useState([
    {
      id: 1,
      name: 'Dr. Jane Smith',
      email: 'jane@example.com',
      expertise: 'AI & Machine Learning',
      courses: 5,
      students: 1234,
      rating: 4.8,
      status: 'Approved'
    },
    {
      id: 2,
      name: 'Prof. Ahmed Khan',
      email: 'ahmed@example.com',
      expertise: 'Web Development',
      courses: 3,
      students: 856,
      rating: 4.6,
      status: 'Approved'
    },
    {
      id: 3,
      name: 'Sara Johnson',
      email: 'sara@example.com',
      expertise: 'Data Science',
      courses: 4,
      students: 992,
      rating: 4.9,
      status: 'Pending'
    },
    {
      id: 4,
      name: 'Tania Mia',
      email: 'tania@example.com',
      expertise: 'Mobile Development',
      courses: 5,
      students: 723,
      rating: 4.7,
      status: 'Approved'
    },
    {
      id: 5,
      name: 'Arif Rahman',
      email: 'arif@example.com',
      expertise: 'Cloud Computing',
      courses: 3,
      students: 512,
      rating: 4.5,
      status: 'Approved'
    }
  ])

  const filteredInstructors = instructors.filter(
    (instructor) =>
      instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.expertise.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Instructors</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search instructor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm"
          />
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm shadow">
            + Add Instructor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInstructors.map((instructor) => (
          <div
            key={instructor.id}
            className="border rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-semibold text-lg">{instructor.name}</h4>
                <p className="text-sm text-gray-600">{instructor.email}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  instructor.status === 'Approved'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-yellow-100 text-yellow-600'
                }`}
              >
                {instructor.status}
              </span>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-green-600">{instructor.expertise}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4 text-center">
              <div>
                <p className="text-lg font-bold text-green-600">{instructor.courses}</p>
                <p className="text-xs text-gray-500">Courses</p>
              </div>
              <div>
                <p className="text-lg font-bold text-green-600">{instructor.students}</p>
                <p className="text-xs text-gray-500">Students</p>
              </div>
              <div>
                <p className="text-lg font-bold text-green-600">{instructor.rating}</p>
                <p className="text-xs text-gray-500">Rating</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm">
                Message
              </button>
              <button className="flex-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg text-sm">
                View Details
              </button>
              {instructor.status === 'Pending' ? (
                <button className="px-3 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg text-sm">
                  Approve
                </button>
              ) : (
                <button className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm">
                  Block
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredInstructors.length === 0 && (
        <div className="text-center py-8 text-gray-500">No instructors found</div>
      )}
    </div>
  )
}

export default InstructorsPage
