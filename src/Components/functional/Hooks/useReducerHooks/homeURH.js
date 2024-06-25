import React, { useContext } from "react"
import NavbarURH from "./navURH"
import { data } from "./routingURH"
import UseMemoHook from "../useMemoHooks/useMemo"

const HomeURH=()=>{
    const liStyle={fontSize:"20px"}
    const {currentState}=useContext(data)
    console.log(currentState, "currentState from Home")
    return(
        <React.Fragment>
            <NavbarURH/>
            <h1>Home</h1>
            <div>
                <h1>Counter : {currentState.count}</h1>
                <h1>Name : {currentState.name}</h1>
                <h1>Designation : {currentState.Designation}</h1>
                <h1>Subjects : </h1>
                <ol>
                {
                  currentState.subjects.map((each)=>{
                    return(<li style={liStyle} key={each}>{each}</li>)
                  })
                }
                </ol>
            </div>
          <UseMemoHook/>
        </React.Fragment>
    )
}

export default HomeURH;