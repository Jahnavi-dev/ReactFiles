import React, { useMemo, useState } from "react"
const UseMemoHook=()=>{
    const [count1, setCount1]=useState(1)
    const [count2, setCount2]=useState(1)
    
    const counter1=()=>{
        setCount1(count1+1)
    }
    const counter2=()=>{
        setCount2(count2+1)
    }
    // const checkEven=(count1)=>{
    //     console.log("count1 even or odd")
    //     return count1%2===0?"EVEN":"ODD"
    // }
    const checkEven=useMemo((count1)=>{
        console.log("count1 even or odd")
        return (count1%2===0)?"EVEN":"ODD"
    }, [count1])
    return(
        <React.Fragment>
            <h1>UseMemoHook</h1>
            {/* <h1>count1 : {count1} ----------{checkEven()}</h1> */}
            <h1>count1 : {count1} ----------{checkEven}</h1>
            <h1>count2 : {count2}</h1>
            <button onClick={counter1}>Counter 1</button>
            <button onClick={counter2}>Counter 2</button>
        </React.Fragment>
    )
}
export default UseMemoHook;