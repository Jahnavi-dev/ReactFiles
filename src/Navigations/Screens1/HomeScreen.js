import React from "react"
import NavbarComp from "../Navbar"
import SearchProducts from "../../Components/functional/SearchProducts/sp"

const HomeScreen=()=>{
    return(
        <React.Fragment>
            <NavbarComp/>
            <h1>HomeScreen</h1>
            <SearchProducts/>
        </React.Fragment>
    )
}

export default HomeScreen