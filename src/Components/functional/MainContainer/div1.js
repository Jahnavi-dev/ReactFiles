import Card1Comp from "../Card/card1"

const Div1Comp=()=>{
    const main_cont_style={
        width:"100vw",
        display:"flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly", 
        rowGap:"30px"
      }
    
    return(
        <div style={main_cont_style}>
            <Card1Comp></Card1Comp>
      
        </div>   
    )
}

export default Div1Comp;