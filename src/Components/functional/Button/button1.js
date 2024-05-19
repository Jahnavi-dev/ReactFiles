

const Button1Comp=(props)=>{
    console.log(props,"props")
    // const btnstyle={
    //     width:props.btnProperties.width, 
    //     height:props.btnProperties.height,
    //     color:props.btnProperties.color,
    //     backgroundColor:props.btnProperties.bgColor,
    //     borderRadius:"10px",
    //     margin:"20px"
    // }
    const {btnText, btnProperties:{width, height, color, bgColor}}=props
    const btnstyle={
        width:width, 
        height:height,
        color:color,
        backgroundColor:bgColor,
        borderRadius:"10px",
        margin:"20px"
    }
    return(
        <>
        <button style={btnstyle} >{btnText}</button>
        </>
    )
}

export default Button1Comp

// export const Button2Comp=(props)=>{
//     console.log(props,"props2")
//     const btn2style={
//         backgroundColor:props.bgColor,
//         width:props.width,
//         height:props.height,
//     }
//     return(
//         <button style={btn2style}>{props.text}</button>
//     )
// }