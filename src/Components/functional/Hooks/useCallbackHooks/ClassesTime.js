import React from "react"


const Classes=(prop)=>{
    console.log("Classes Comp")
    const {classes, addClass}=prop
    console.log(classes, "props")
    return(
        <React.Fragment>
            <button onClick={addClass}>AddClass</button>
            {classes.map((each, index)=>{
                return(<React.Fragment key={index}><h5>{each}</h5></React.Fragment>)
            })}
        </React.Fragment>
    )
}

export default React.memo(Classes)