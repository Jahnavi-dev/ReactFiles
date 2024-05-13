const Head3Comp=()=>{
    const Tstyle={
        backgroundColor:"green",
        color:"yellowgreen"
    }
    const Fstyle={
        backgroundColor:"black",
        color:"red"
    }
    const condition=true
    return(
        <>
        <h1 style={condition?Tstyle:Fstyle}>Condition based Styling</h1>
        <h1 style={false?Tstyle:Fstyle}>Condition based Styling</h1>
        </>
    )
}

export default Head3Comp;