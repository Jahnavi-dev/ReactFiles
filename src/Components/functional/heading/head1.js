// import "./head1_style.css"
import Style from "./head1.module.css"


const HeadFComp=()=>{
    //CSS properties must be follow camleCase notation
    const style2={
        backgroundColor:"black",
        color:"Red"
    }
    return(
        <>
        <h1 style={
            {backgroundColor:"blueviolet"}
            }>Heading1</h1>
        <h2 style={style2}>Heading2</h2>
        <h3 className="headStyle">Heading3</h3>
        <h4 className={Style.head_Module}>Heading4</h4>
        </>
    )
}

export default HeadFComp;