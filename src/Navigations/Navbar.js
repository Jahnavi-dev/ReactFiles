import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { themeInfo, userInfo } from "./Navigation1/routing1"

const NavbarComp=()=>{
  const userNames=useContext(userInfo)
  const {darkmode}=useContext(themeInfo)
  console.log(userNames)

  const linkTagStyle={textDecoration:"none", color:darkmode?"white":"black"}

    return(
        <React.Fragment>
            <nav className={darkmode?"navbar navbar-expand-lg navbar-light bg-dark":"navbar navbar-expand-lg navbar-light bg-light"}>
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
                <li className="nav-item nav-link" style={{marginLeft:"850px"}}>
                {/* <button style={{borderRadius:"50px", padding:"8px", border:"3px solid blueviolet"}}><Link to={"/Settings"} style={linkTagStyle}>User</Link></button> */}
                <button style={{borderRadius:"50px", padding:"8px", border:"3px solid blueviolet", backgroundColor:"blueviolet"}}><Link to={"/Settings"} style={linkTagStyle}>{userNames}</Link></button>
                </li>
              </ul>
            </div>
          </nav>
        </React.Fragment>
    )
}

export default NavbarComp