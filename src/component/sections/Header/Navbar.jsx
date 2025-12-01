import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white/80 shadow-md sticky top-0 z-50 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/assets/download Shikbo.png" alt="Shikhbo.AI Logo" className="h-10" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-medium items-center">
        <li><a href="#" className="hover:text-green-500">Home</a></li>
        <li><a href="#" className="hover:text-green-500">Courses</a></li>
        <li><a href="#" className="hover:text-green-500">Learning center</a></li>
        <li><a href="#" className="hover:text-green-500">Instructors</a></li>
        <li><a href="#" className="hover:text-green-500">Leaderboard</a></li>
        <Link to="/login" className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-green-500 transition">
          <span className="font-semibold">Log in</span>
        </Link>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 p-6">
            <li><a href="#" onClick={handleLinkClick} className="hover:text-green-500">Home</a></li>
            <li><a href="#" onClick={handleLinkClick} className="hover:text-green-500">Courses</a></li>
            <li><a href="#" onClick={handleLinkClick} className="hover:text-green-500">Learning center</a></li>
            <li><a href="#" onClick={handleLinkClick} className="hover:text-green-500">Instructors</a></li>
            <li><a href="#" onClick={handleLinkClick} className="hover:text-green-500">Leaderboard</a></li>
            <Link to="/login" className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-green-500 transition text-center">
              <span className="font-semibold">Log in</span>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar