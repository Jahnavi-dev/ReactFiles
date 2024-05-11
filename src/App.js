import {React} from "react";
import { UnOrderList } from "./Components/unOrderList";
import ButtonClassComp from "./Components/Class_Comp/button_class";
import ImageClassComp from "./Components/Class_Comp/img_class";
import TableClassComp from "./Components/Class_Comp/table_class";



const App=()=>{
  return(
    <>
    <TableClassComp/>
    <ImageClassComp/>
    <br/>
   <ButtonClassComp/>
   </>
  )
}

export default App