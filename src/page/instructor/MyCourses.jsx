import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MyCourses = () => {
  const navigate = useNavigate()
  const [courses] = useState([
    {
      id: 1,
      title: 'Web Development Bootcamp',
      students: 530,
      status: 'Published',
      rating: 4.8,
      revenue: 42500,
      progress: 85
    },
    {
      id: 2,
      title: 'Python for Data Science',
      students: 320,
      status: 'Published',
      rating: 4.6,
      revenue: 28800,
      progress: 70
    },
    {
      id: 3,
      title: 'Machine Learning Basics',
      students: 390,
      status: 'Draft',
      rating: 4.9,
      revenue: 35100,
      progress: 45
    },
    {
      id: 4,
      title: 'React Advanced Patterns',
      students: 245,
      status: 'Published',
      rating: 4.7,
      revenue: 22050,
      progress: 90
    }
  ])

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <h3 className="text-xl md:text-2xl font-bold">My Courses</h3>
        <button 
          onClick={() => navigate('/instructor/create-course')}
          className="px-4 md:px-6 py-2 bg-green-600 hover:bg-green-600 text-white rounded-lg font-semibold transition text-sm md:text-base w-full sm:w-auto"
        >
          + Create New Course
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-40 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
              <h4 className="text-white text-xl font-bold text-center px-4">{course.title}</h4>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  course.status === 'Published' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {course.status}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="font-semibold">{course.rating}</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Students</span>
                  <span className="font-semibold">{course.students}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Revenue</span>
                  <span className="font-semibold text-green-600">৳{course.revenue.toLocaleString()}</span>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Course Progress</span>
                    <span className="font-semibold">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-semibold transition">
                  Edit
                </button>
                <button className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold transition">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyCourses
