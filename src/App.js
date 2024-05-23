import React from "react"
import CategoryWiseList from "./Components/Class/Category/category"
import { Spinner1Comp } from "./Components/functional/Spinner/spinner1"







const App=()=>{ 
  return(
    <React.Fragment>
      <h3 style={{margin:"10px"}}>View All the Products by filtering CategoryWise</h3>
      <CategoryWiseList/>
    </React.Fragment>
  )
}

export default App