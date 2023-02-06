import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Style.css"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <h3><span className='text-primary'>Farhan</span><span className='text-muted'>Qureshi</span></h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto m-2 mb-lg-0">
            <li className="nav-item me-2">
              <NavLink classNameName="nav-link" style={{ textDecoration: "none", color: "black" }} to="/"> <h5>Home</h5></NavLink>
            </li>
            <li className="nav-item me-2">
              <NavLink classNameName="nav-link " style={{ textDecoration: "none", color: "black" }} to="/about"><h5>About</h5></NavLink>
            </li>
            <li className="nav-item me-2">
              <NavLink classNameName="nav-link " style={{ textDecoration: "none", color: "black" }} to="/contact"><h5>Contact</h5></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar