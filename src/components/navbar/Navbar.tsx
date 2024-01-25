import React from "react"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="container-w">
      <nav className="navbar ">
        <div className="navbar-right">
          <div className="navbar-right-img-container">
            <img
              src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"
              alt=""
              className="navbar-right-img"
            />

          </div>
        </div>
        <div className="navbar-left">
          <ul className="navbar-left-links hidden	">
            <li  className="hidden md:block">Home</li>
            <li  className="hidden md:block" >Service</li>
            <li className="hidden md:block">Blogs</li>
            <li className="hidden md:block" >About</li>
          </ul>
          <div className="">
            <button className="navbar-left-btn">Book Now</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
