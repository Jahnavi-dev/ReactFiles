import React, { useContext } from "react"
import NavbarURH from "./navURH"
import { data } from "./routingURH"

const SettingURH=()=>{
    const {handleIncrement, handleDecrement, handleReset, nameChange, subjectsAdd, subjectsAdd1}=useContext(data)
    const counterIncrement=()=>{
        handleIncrement()
    }
    return(
        <React.Fragment>
            <NavbarURH/>
            <h1>Setting</h1>
            <button onClick={counterIncrement}>Counter Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Counter Decrement</button>
            <button onClick={nameChange}>Name Change</button>
            <br/>
            <button onClick={subjectsAdd}>Add Subjects</button>
            <br/>
            <button onClick={subjectsAdd1("Next JS")}>Add Subjects1 through arg</button>
        </React.Fragment>
    )
}

export default SettingURH;