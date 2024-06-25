import { useContext } from "react";
import { Link } from "react-router-dom";
import { data } from "./routingURH";

const NavbarURH=()=>{
    const {currentState}=useContext(data)
    const LinkStyle={
        textDecoration:"none",
        color:"black"
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
            </a>
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
                <li className="nav-item active nav-link">
                    <Link to={"/"} style={LinkStyle}>Home</Link>
                </li>
                <li className="nav-item active nav-link">
                    <Link to={"/About"} style={LinkStyle}>About</Link>
                </li>
                <li className="nav-item active nav-link">
                    <Link to={"/Setting"} style={LinkStyle}>Settings</Link>
                </li>     
                <li className="nav-item active nav-link">
                    (GSM) useReducer Global Counter: {currentState.count}
                </li>            
                </ul>
            </div>
        </nav>
    )
}

export default NavbarURH;
