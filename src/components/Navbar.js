import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <img src="/logo.png" alt="Wag N Wheels" />
          <span className="navbar-logo-text">Wag N Wheels</span>
        </NavLink>
        <div className="navbar-links">
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
