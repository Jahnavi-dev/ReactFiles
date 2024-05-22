import React from "react"
import Mounting from "./Components/Class/LifeCycleMethods/mounting"






const App=()=>{ 
  return(
    <React.Fragment>
      <Mounting changeStateViaGDSFP={"fromApp.js"}/>
    </React.Fragment>
  )
}

export default App