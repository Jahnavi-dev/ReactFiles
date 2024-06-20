import React, { useContext } from "react"
import NavbarComp from "../Navbar"
import { CounterInfo } from "../Navigation1/routing1"

const ContactScreen=()=>{
    const {count,counterActionAll}=useContext(CounterInfo)

    const IncrementAction=(Action)=>{
        console.log(Action, "Triggering at ContactScreen")
        counterActionAll(Action)
    }
    return(
        <React.Fragment>
            <NavbarComp/>
            <h1>ContactScreen</h1>
            <h3>Counter Value: {count}</h3>
            <button onClick={()=>IncrementAction("Increment")}>Increment</button>
        </React.Fragment>
    )
}

export default ContactScreen