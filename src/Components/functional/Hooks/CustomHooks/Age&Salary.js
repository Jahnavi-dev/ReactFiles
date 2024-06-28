import useCounterCustomHook from "./customHook"
import React from "react"

const AgeSalary=()=>{
    const[Age, incrementAge, decrementAge, resetAge]=useCounterCustomHook(20)
    const[Salary, incrementSal, decrementSal, resetSal]=useCounterCustomHook(1000, 500)
    return(
        <React.Fragment>
            <h4>Age: {Age}</h4>
            <button onClick={incrementAge}>incrementAge</button>
            <button onClick={resetAge}>resetAge</button>
            <button onClick={decrementAge}>decrementAge</button>
            <br/>
            <h4>Salary: {Salary}</h4>
            <button onClick={incrementSal}>incrementAge</button>
            <button onClick={resetSal}>resetAge</button>
            <button onClick={decrementSal}>decrementAge</button>
        </React.Fragment>
    )
}

export default AgeSalary