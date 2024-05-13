import {React} from "react";
import HeadCompClass from "./Components/Class/ClassHeading/classhead1";
import Button1Comp, { Button2Comp } from "./Components/functional/Button/button1";
import Greet1Comp from "./Components/functional/Greetings/greet1";


const App=()=>{
  const btns=[
    {
      text:"btn1",
      backgroundColor:"blue",
      width:"120px",
      height:"80px",
      id:1
    },
    {
      text:"btn2",
      backgroundColor:"Green",
      width:"120px",
      height:"80px",
      id:2
    },
    {
      text:"btn3",
      backgroundColor:"Red",
      width:"120px",
      height:"80px",
      id:3
    },{
      text:"btn4",
      backgroundColor:"Yellow",
      width:"120px",
      height:"80px",
      id:4
    },{
      text:"btn5",
      backgroundColor:"blueviolet",
      width:"120px",
      height:"80px",
      id:5
    }
  ]
  return(
    <>
    <HeadCompClass/>
    <Button1Comp btnText={"Login"} btnProperties={{width:100,height:100,color:"orange", bgColor:"black"}}/>
    <Button1Comp btnText={"SignIn"} btnProperties={{width:100,height:100,color:"orange", bgColor:"black"}}/>
    <Button1Comp btnText={"Submit"} btnProperties={{width:100,height:100,color:"orange", bgColor:"black"}}/>
    {btns.map((eachBtn)=>{
      const {id}=eachBtn
      return(
        <>
        {/* <Button2Comp key={eachBtn.id} propstyling={eachBtn}/> */}
        <Button2Comp 
        key={id}
        text={eachBtn.text} 
        bgColor={eachBtn.backgroundColor} 
        width={eachBtn.width} 
        height={eachBtn.height}/>
      </>
      )
    })}
    <Greet1Comp>
      <h1>Mango</h1>
      <h2>Banana</h2>
      <h3>Apple</h3>
    </Greet1Comp>
    </>
  )
}

export default App