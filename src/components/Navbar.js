import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo">
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
      </div>
    </nav>
  )
}
