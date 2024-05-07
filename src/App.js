import {React} from "react";
// import ButtonComp from "./Components/button.js"
import ImageComp from "./Components/image.js"
// import TableComp from "./Components/table.js"
// import FormsComp from "./Components/forms.js"
// import CardComp from "./Components/card.js"
import HeadComp from "./Components/heading"
import { UnOrderList } from "./Components/unOrderList.js";
import OrderListComp from "./Components/orderList.js";



const App=()=>{
  return(
    <>
      <HeadComp/>
      <ImageComp/>
      <UnOrderList/>
      <h3>Ordered List of teams</h3>
      <OrderListComp/>
    </> 
  )
}

export default App