import React from "react"
import Timer from "./Components/Class/LifeCycleMethods/timer"




const App=()=>{
  
  const a=-12
    return(
      <React.Fragment>
        {a && <button>btn</button>}
        <Timer/>
      </React.Fragment>
    )
}
export default App