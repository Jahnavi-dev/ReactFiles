import { Component } from "react";
import "./todo1.css"

class Todo1Comp extends Component{
    state={
        fruits:[{id:1,name:"apple"}, {id:2,name:"banana"}, {id:3,name:"orange"}, {id:4,name:"pineapple"}],
        index:0
    }
    addFruit=()=>{

        const addItems=[{id:5,name:"sapota"},{id:6,name:"grapes"},{id:7,name:"watermelon"},{id:8,name:"muskmelon"}, {id:9,name:"papaya"}, {id:10,name:"sugarcane"}]

        const newFruitsList=[...this.state.fruits,addItems[this.state.index]]
        this.setState(
            {fruits:newFruitsList,index:this.state.index+1}
        )
        if(this.state.index===5){
            this.setState(
                {index:0}
            )
        }
    }

    clearFruit=()=>{
        this.setState(
            {fruits:[]}
        )
    }

    deleteFruit=(id)=>{
        // alert(id)
        const filteredLists=this.state.fruits.filter((eachFruit,i)=>id!==i+1)
        this.setState({fruits:filteredLists})
    }

    updateFruit=(id)=>{
        alert(id)
        const updatedLists=this.state.fruits.map((eachFruit,i)=>
        {
            if(id===i+1){
                return {name:"Kiwi",id:id}
            }
            else{
                return eachFruit
            }
        })
        this.setState({fruits:updatedLists})

    }


    render(){
        return(
        <>
        <div className="mainCont">
        <h1>Fruits List</h1>
        <button className="addBtn" onClick={this.addFruit}>Add Fruit</button>
        <button className="addBtn" onClick={this.clearFruit}>Clear All</button>
        {
            this.state.fruits.map((eachFruit)=>{
                const {id, name}=eachFruit
                return(
                    <>
                    <h3>{id} {name}</h3>
                    <button className="addBtn" onClick={()=>this.deleteFruit(id)}>Delete Fruit</button>
                    <button className="addBtn" onClick={()=>this.updateFruit(id)}>Update Fruit</button>
                    </>
                )
            })

        }
        </div>
        </>
        )
    }

}

export default Todo1Comp