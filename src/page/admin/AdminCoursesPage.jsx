import React, { useState } from 'react'

const AdminCoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [courses] = useState([
    {
      id: 1,
      title: 'AI Fundamentals',
      instructor: 'Dr. Jane Smith',
      category: 'Artificial Intelligence',
      students: 432,
      price: 5000,
      status: 'Published',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Web Development Bootcamp',
      instructor: 'Prof. Ahmed Khan',
      category: 'Web Development',
      students: 856,
      price: 4500,
      status: 'Published',
      rating: 4.6
    },
    {
      id: 3,
      title: 'Data Science Complete',
      instructor: 'Sara Johnson',
      category: 'Data Science',
      students: 623,
      price: 6000,
      status: 'Draft',
      rating: 4.9
    },
    {
      id: 4,
      title: 'MERN Stack Development',
      instructor: 'Tania Mia',
      category: 'Web Development',
      students: 512,
      price: 5500,
      status: 'Published',
      rating: 4.7
    },
    {
      id: 5,
      title: 'Mobile App Development',
      instructor: 'Arif Rahman',
      category: 'Mobile Development',
      students: 289,
      price: 4800,
      status: 'Pending Review',
      rating: 4.5
    }
  ])

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-white p-8 rounded-2xl shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">All Courses</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm"
          />
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm shadow">
            + Add New Course
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-sm text-black border-b bg-gray-50">
              <th className="p-3">ID</th>
              <th className="p-3">Course Title</th>
              <th className="p-3">Instructor</th>
              <th className="p-3">Category</th>
              <th className="p-3">Students</th>
              <th className="p-3">Price (৳)</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredCourses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="p-3">#{course.id}</td>
                <td className="p-3 font-medium">{course.title}</td>
                <td className="p-3">{course.instructor}</td>
                <td className="p-3">
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                    {course.category}
                  </span>
                </td>
                <td className="p-3">{course.students}</td>
                <td className="p-3">৳{course.price.toLocaleString()}</td>
                <td className="p-3">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    {course.rating}
                  </div>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      course.status === 'Published'
                        ? 'bg-green-100 text-green-600'
                        : course.status === 'Draft'
                        ? 'bg-gray-100 text-gray-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}
                  >
                    {course.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm">
                    View
                  </button>
                  <button className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-black rounded text-sm ml-2">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-8 text-gray-500">No courses found</div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {filteredCourses.length} of {courses.length} courses
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
          <button className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  )
}

export default AdminCoursesPage
