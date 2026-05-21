import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={close}>
          <img src="/logo.jpg" alt="Wag N Wheels" />
        </NavLink>
        <div className="navbar-center">
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            About
          </NavLink>
          <span className="nav-divider">|</span>
          <NavLink
            to="/services"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            Services
          </NavLink>
        </div>
        <div className="navbar-right">
          <a href="#contact" className="nav-link nav-link-contact">
            Contact
          </a>
        </div>
        <button
          className={`nav-hamburger${open ? ' nav-hamburger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>
      {open && (
        <div className="nav-mobile-menu">
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
            onClick={close}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
            onClick={close}
          >
            Services
          </NavLink>
          <a href="#contact" className="nav-mobile-link nav-mobile-link-contact" onClick={close}>
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}
