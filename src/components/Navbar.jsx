import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger ">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white" aria-current="page" >🏠 Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link active text-white" > 📱 Contacto</Link>
        </li>
        </ul>
        </div>
        <div className='d-flex justify-content-end'>
        <span className="navbar-text text-white">
        Happy Cake 🍰
        </span>
        </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar