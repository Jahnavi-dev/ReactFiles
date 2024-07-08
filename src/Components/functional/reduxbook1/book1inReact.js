import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { buyBookAction1, changeProfileNameAction1, returnBookAction1 } from "../../Redux/Redux1/action1"

const Book1inReact=()=>{
    const getState=useSelector(state=>state)
    console.log(getState)
    const dispatch=useDispatch()

    const buyBookEvent=()=>{
        dispatch(buyBookAction1())
    }
    const returnBookEvent=()=>{
        dispatch(returnBookAction1())
    }
    const nameEvent=(nameID)=>{
        const getname=document.getElementById("nameID").value
        console.log(getname , "inEvent")
        dispatch(changeProfileNameAction1(getname))
    }
    
    return(
        <React.Fragment>
           <h3>Getting Redux State using useSelectorHook</h3> 
           <h4>Books Status {getState.books}</h4>
           <button onClick={buyBookEvent}>Buy Book</button>
           <button onClick={returnBookEvent}>Return Book</button>
           <input type="text" id="nameID"/>
           <button onClick={nameEvent}>Click to get Name</button>
           <h2> Name: {getState.profileName}</h2>
        </React.Fragment>
    )
}

export default Book1inReact

