
import React from "react"
export const ListComp=()=>{
    const teams=["RCB","CSK","SRH","LSG","PBKS"]
    return(
        <React.Fragment>
            <li>{teams[0]}</li>
            <li>{teams[1]}</li>
            <li>{teams[2]}</li>
            <li>{teams[3]}</li>
            <li>{teams[4]}</li>
        </React.Fragment>
    )
    
}