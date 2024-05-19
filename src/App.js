import {React} from "react";
import Button2Comp from "./Components/functional/Button/button2";
import { Para2Comp } from "./Components/functional/Paragraph/paragraph2";
import Para3Comp from "./Components/functional/Paragraph/paragraph3";
import Counter1Comp from "./Components/Class/Counter/counter1";
import Counter2Comp from "./Components/Class/Counter/counter2";


//prop and state practice 
//prop and state practice 
//prop and state practice 


const App=()=>{ 
  const buttons=[
    {id:1,
      text:"click me",
      height:100,
      width:100,
      bgcolor:"green",
      color:"blue"
    },
    {id:2,
      text:"Sign in",
      height:100,
      width:100,
      bgcolor:"pink",
      color:"violet"
    },
    {id:3,
      text:"login me",
      height:100,
      width:100,
      bgcolor:"black",
      color:"white"
    },
    {id:4,
      text:"logout",
      height:100,
      width:100,
      bgcolor:"yellow",
      color:"green"
    }
  ]
  
  return(
    <>
    {buttons.map((eachButton)=>{
      const {id,text, height, width, bgcolor, color}=eachButton
      return(<>
      <Button2Comp 
      key={id} 
      text={text} 
      bgColor={bgcolor} 
      buttonProperties={{color:color, height:height, width:width}}/>
      </>)
    })}


    <Para2Comp>
      <h1>Children Props in parent</h1>
      <p>Good Morning</p>
      <p>Good Evening</p>
    </Para2Comp>
    <Para3Comp>
      <>
      <h1>Flowers</h1>
      </>
    </Para3Comp>
    

    <Counter1Comp></Counter1Comp>
    <br/>
    <br/>
    
    <Counter2Comp></Counter2Comp>
    </>
  )
}

export default App