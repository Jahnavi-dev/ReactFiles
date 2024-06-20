import React, { useContext } from "react"
import NavbarComp from "../Navbar"
import { CounterInfo, themeInfo } from "../Navigation1/routing1"

const SettingsScreen=()=>{
const {darkmodeSwitching}=useContext(themeInfo)
const {count,counterActionAll}=useContext(CounterInfo)
    const handlingDarkMode=()=>{
        darkmodeSwitching()
    }

    const counterFunction=(Action)=>{
        counterActionAll(Action)
    }
    
    return(
        <React.Fragment>
            <NavbarComp/>
            <h1>SettingsScreen</h1>
            <button onClick={handlingDarkMode}>enable/disable settingscreen</button>
            <h1>Counter : {count}</h1>
            <button onClick={()=>counterFunction("Increment")}>Increment</button>
            <button onClick={()=>counterFunction("Reset")}>Reset</button>
            <button onClick={()=>counterFunction("Decrement")}>Decrement</button>
        </React.Fragment>
    )
}

export default SettingsScreen