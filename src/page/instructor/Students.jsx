import React, { useState } from 'react'

const Students = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [students] = useState([
    {
      id: 1,
      name: 'Rahul Ahmed',
      email: 'rahul@example.com',
      course: 'Web Development Bootcamp',
      enrolled: '2024-11-01',
      progress: 75,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sadia Rahman',
      email: 'sadia@example.com',
      course: 'Python for Data Science',
      enrolled: '2024-10-15',
      progress: 60,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Tahmid Khan',
      email: 'tahmid@example.com',
      course: 'Machine Learning Basics',
      enrolled: '2024-09-20',
      progress: 90,
      status: 'Active'
    },
    {
      id: 4,
      name: 'Nusrat Jahan',
      email: 'nusrat@example.com',
      course: 'Web Development Bootcamp',
      enrolled: '2024-11-10',
      progress: 45,
      status: 'Active'
    },
    {
      id: 5,
      name: 'Fahim Islam',
      email: 'fahim@example.com',
      course: 'React Advanced Patterns',
      enrolled: '2024-08-05',
      progress: 100,
      status: 'Completed'
    }
  ])

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.course.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <h3 className="text-xl md:text-2xl font-bold">Students</h3>
        <input
          type="text"
          placeholder="Search students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Student</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Course</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Enrolled</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Progress</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-800">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{student.course}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{student.enrolled}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.status === 'Active' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold transition">
                      Message
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-8 text-gray-500">No students found</div>
      )}
    </div>
  )
}

export default Students
