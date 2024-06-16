import React from "react"
import { Link } from "react-router-dom"

const NavbarComp=()=>{
  const linkTagStyle={textDecoration:"none", color:"black"}

    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item nav-link">
                <Link to={"/"} style={linkTagStyle}>Home</Link>
                </li>
                <li className="nav-item nav-link">
                <Link to={"/About"} style={linkTagStyle}>About</Link>
                </li>
                <li className="nav-item nav-link">
                <Link to={"/Contact"} style={linkTagStyle}>Contact</Link>
                </li>
                <li className="nav-item nav-link">
                <Link to={"/Settings"} style={linkTagStyle}>Settings</Link>
                </li>
              </ul>
            </div>
          </nav>
        </React.Fragment>
    )
}

export default NavbarComp