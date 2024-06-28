import React from "react"


const HeadingUCH=({title})=>{
    console.log("HeadingUCH")
    return(
        <React.Fragment>
            <h3>{title}</h3>
        </React.Fragment>
    )
}

export default React.memo(HeadingUCH) 