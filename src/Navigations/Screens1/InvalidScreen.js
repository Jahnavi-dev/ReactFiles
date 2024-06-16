import React from "react"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"

const InvalidScreen=()=>{

    const navigate=useNavigate()
    const linkStyle={
        color:"black",
        textDecoration:"none"
    }

    const Action=()=>{
        navigate("/")

    }
   
    return(
        <React.Fragment>
            <h1>InvalidScreen gone through wrong path click the below button to go home page </h1>
            {/* <button><Link style={linkStyle} to={"/"}>Click me</Link></button> */}
            <button style={linkStyle} onClick={Action}>Click Me</button>
        </React.Fragment>
    )
}

export default InvalidScreen