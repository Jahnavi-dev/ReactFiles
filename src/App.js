import React, { Component } from "react"
import UpdatingComp from "./Components/Class/LifeCycleMethods/updating"
import UnMountingComp from "./Components/Class/LifeCycleMethods/unmounting"


class App extends Component{ 
  state={
    color:"Green"
  }

  changeColor=()=>{
    this.setState({
      color:"blue"
    })
  }

  render(){
    return(
      <React.Fragment>
        <UpdatingComp color={this.state.color}/>
        <button onClick={this.changeColor}>ChangeColor</button>
        <br/>
        <br/>
        <UnMountingComp/>
      </React.Fragment>
    )
  }
  
}

export default App