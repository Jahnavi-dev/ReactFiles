

const Button2Comp=(props)=>{
    console.log(props)
    // props.width=200 we cannot change the prop
    const {text, bgColor, buttonProperties:{color, height, width}}=props
    return(
        <>
        <button
        style={
            {backgroundColor:bgColor,
                color:color,
                height:height,
                width:width,
                text:text
            }
        } 
        >{text}</button>
        </>
    )
}


export default Button2Comp;