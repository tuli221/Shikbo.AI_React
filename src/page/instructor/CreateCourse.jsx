import React, { useState } from 'react'

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    duration: '',
    description: '',
    instructor: '',
    level: 'Beginner',
    language: 'English',
    thumbnail: null
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      thumbnail: e.target.files[0]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Course data:', formData)
    // Add your course creation logic here
  }

  return (
    <div className="bg-white p-4 md:p-8 rounded-2xl shadow">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Add New Course</h3>
        <p className="text-gray-600 text-sm md:text-base">Fill in the details to create a new course</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* Course Title and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
              placeholder="Enter course title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
              required
            >
              <option value="">Select category</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>
        </div>

        {/* Price and Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price (৳) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
              placeholder="Enter price in BDT"
              required
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration (Months) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
              placeholder="Enter duration"
              required
              min="1"
            />
          </div>
        </div>

        {/* Instructor and Level */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instructor <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
              placeholder="Enter instructor name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Level <span className="text-red-500">*</span>
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
              required
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Language and Thumbnail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language <span className="text-red-500">*</span>
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
              required
            >
              <option value="English">English</option>
              <option value="Bengali">Bengali</option>
              <option value="Both">Both (English & Bengali)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Thumbnail
            </label>
            <input
              type="file"
              name="thumbnail"
              onChange={handleFileChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
              accept="image/*"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm md:text-base"
            placeholder="Write a detailed description about the course..."
            rows="5"
            required
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            type="button"
            className="w-full sm:w-auto border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition text-sm md:text-base"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition text-sm md:text-base"
          >
            Create Course
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateCourse
