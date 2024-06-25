import React from "react"
import { Link } from "react-router-dom";

const TodoNav=()=>{
    const LinkStyle={
        textDecoration:"none",
        color:"black",
    }

    return(
        <React.Fragment>
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
                    <Link to={"/"} style={LinkStyle}>TodoInput</Link>
                </li>  
                <li className="nav-item active nav-link">
                    <Link to={"/TodoList"} style={LinkStyle}>TodoList</Link>
                </li>  
                <li className="nav-item active nav-link">
                    <Link to={"/TodoSettings"} style={LinkStyle}>TodoSettings</Link>
                </li>              
                </ul>
            </div>
            </nav>
        </React.Fragment>
    )
}

export default TodoNav;