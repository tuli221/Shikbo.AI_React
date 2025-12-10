import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ hideLogin = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

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
        <img src="/assets/downloadShikbo.png" alt="Shikhbo.AI Logo" className="h-10" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-medium items-center">
        <li><Link to="/" className={`hover:text-green-500 ${location.pathname === '/' ? 'text-green-500 underline' : ''}`}>Home</Link></li>
        <li><Link to="/courses" className={`hover:text-green-500 ${location.pathname === '/courses' ? 'text-green-500 underline' : ''}`}>Courses</Link></li>
        <li><Link to="/learning-center" className={`hover:text-green-500 ${location.pathname === '/learning-center' ? 'text-green-500 underline' : ''}`}>Learning center</Link></li>
        <li><Link to="/instructors" className={`hover:text-green-500 ${location.pathname === '/instructors' ? 'text-green-500 underline' : ''}`}>Instructors</Link></li>
        <li><Link to="/leaderboard" className={`hover:text-green-500 ${location.pathname === '/leaderboard' ? 'text-green-500 underline' : ''}`}>Leaderboard</Link></li>
        {!hideLogin && (
          <Link to="/login" className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-green-500 transition">
            <span className="font-semibold">Log in</span>
          </Link>
        )}
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
            <li><Link to="/" onClick={handleLinkClick} className={`hover:text-green-500 ${location.pathname === '/' ? 'text-green-500 underline' : ''}`}>Home</Link></li>
            <li><Link to="/courses" onClick={handleLinkClick} className={`hover:text-green-500 ${location.pathname === '/courses' ? 'text-green-500 underline' : ''}`}>Courses</Link></li>
            <li><Link to="/learning-center" onClick={handleLinkClick} className={`hover:text-green-500 ${location.pathname === '/learning-center' ? 'text-green-500 underline' : ''}`}>Learning center</Link></li>
            <li><Link to="/instructors" onClick={handleLinkClick} className={`hover:text-green-500 ${location.pathname === '/instructors' ? 'text-green-500 underline' : ''}`}>Instructors</Link></li>
            <li><Link to="/leaderboard" onClick={handleLinkClick} className={`hover:text-green-500 ${location.pathname === '/leaderboard' ? 'text-green-500 underline' : ''}`}>Leaderboard</Link></li>
            {!hideLogin && (
              <Link to="/login" className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-green-500 transition text-center">
                <span className="font-semibold">Log in</span>
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar