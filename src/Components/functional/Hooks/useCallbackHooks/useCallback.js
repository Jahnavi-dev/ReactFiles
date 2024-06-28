import React, { useCallback, useState } from "react"
import Classes from "./ClassesTime"
import HeadingUCH from "./heading"

const UseCallBack=()=>{
    console.log("UseCallBack mainComp")
    const [classesTime, setClassesTime]=useState(["9AM React"])

    const [classFee, setClassFee]=useState(1000)

    const addClassesTime=
    useCallback(()=>{
        setClassesTime([...classesTime, "1PM Lunch"])
    }, [classesTime])

    const classFeeIncre=()=>{
        setClassFee(classFee+100)
    }
    return(
        <React.Fragment>
            <HeadingUCH title={"Class Fee: "}/>
            <h4>{classFee}</h4>
            <button onClick={classFeeIncre}>Fee Increment</button>
            <HeadingUCH title={"Classes"}/>
            <Classes classes={classesTime} addClass={addClassesTime}/>
        </React.Fragment>
    )
}

export default UseCallBack