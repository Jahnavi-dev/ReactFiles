import React, { useState } from "react"


function CircleGen(){
    const [circles, setCircles]=useState([])

    const AddCircles=()=>{
        setCircles([...circles, false])
    }

    const handleClick=(index)=>{
        console.log(index)
    }

    return(
        <React.Fragment>
            <h1>CircleTask-2</h1>
            <button onClick={AddCircles} style={{marginLeft:"30px"}}>AddCircles</button>
            <div className="d-flex flex-row justify-content-center flex-wrap" style={{width:"500px", height:"300px", border:"2px solid black", marginLeft:"100px"}}>
            {circles.map((eachCircle, index)=>{
                return(<Circle colored={eachCircle} handleClick={handleClick} index={index}/>)
            })}
            </div>
            
        </React.Fragment>
    )
}

export default CircleGen;

// function Circle(colored){
//     console.log(colored)
//     return(
//         <React.Fragment>
//             <div style={{width:"70px", height:"70px", borderRadius:"50%", border:"5px solid black", backgroundColor:colored?"black":"white"}}></div>
//         </React.Fragment>
//     )
// }
function Circle({colored, handleClick, index}){
    console.log(colored)
    return(
        <React.Fragment>
            <div 
            style={{width:"70px", height:"70px", borderRadius:"50%", border:"5px solid black", backgroundColor:colored?"black":"white"}}
            onClick={()=>handleClick(index)}></div>
        </React.Fragment>
    )
}

