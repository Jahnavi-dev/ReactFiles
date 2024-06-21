import React, { useContext } from "react"
import MyShopNavbar from "./myShopNavbar";
import img1 from "./Items/Img1.webp";
import img2 from "./Items/Img2.webp";
import img3 from "./Items/Img3.webp";
import img4 from "./Items/Img4.webp";
import { image1info } from "./myShopNavigation";

const MyShopHome=()=>{
    const {image1,image2,image3,image4,image1Action,image2Action,image3Action,image4Action}=useContext(image1info)
    console.log(image1, "In HomePage In HomePage In HomePage")

    const Action1=()=>{
        image1Action()
    }
    const Action2=()=>{
        image2Action()
    }
    const Action3=()=>{
        image3Action()
    }
    const Action4=()=>{
        image4Action()
    }


    const mainCont={
        padding:"30px",
        display:"flex",
        flexDirection:"row"
    }
    const cardCont={
        display:"inline-block",
        width:"200px",
        textAlign:"center",
        margin:"15px"
    }
    const imgStyle={
        width:"200px",
        height:"200px",
        borderRadius:"10px"
    }
    const infoStyle={
        fontFamily:"serif" 
    }
    const btnStyle={
        width:"100%",
        height:"35px",
        fontFamily:"serif",
        fontWeight:600,
        padding:"2px",
        color:"#da1d81",
        borderColor:"#da1d81"
    }
    return(
        <React.Fragment>
            <MyShopNavbar/>
            <div style={{mainCont}}>
                <div style={cardCont}>
                    <img src={img1} alt="slurrp" style={imgStyle}/>
                    <p style={infoStyle}>Slurrp Farm No Maida No Msg Millet Noodles</p>
                    {/* <button className="btn btn-outline-primary" style={btnStyle} onClick={Action1} id="btn1">Add to Cart</button> */}
                    {image1?<button className="btn btn-outline-primary" style={btnStyle} onClick={Action1}>Added</button>:<button className="btn btn-outline-primary" style={btnStyle} onClick={Action1}>Add to Cart</button>}
                </div>
                <div style={cardCont}>
                    <img src={img2} alt="slurrp" style={imgStyle}/>
                    <p style={infoStyle}>Slurrp Farm No Maida No Msg Millet Noodles</p>
                    {image2?<button className="btn btn-outline-primary" style={btnStyle} onClick={Action2}>Added</button>:<button className="btn btn-outline-primary" style={btnStyle} onClick={Action2}>Add to Cart</button>}
                </div>
                <div style={cardCont}>
                    <img src={img3} alt="slurrp" style={imgStyle}/>
                    <p style={infoStyle}>Slurrp Farm No Maida No Msg Millet Noodles</p>
                    {image3?<button className="btn btn-outline-primary" style={btnStyle} onClick={Action3}>Added</button>:<button className="btn btn-outline-primary" style={btnStyle} onClick={Action3}>Add to Cart</button>}
                </div>
                <div style={cardCont}>
                    <img src={img4} alt="slurrp" style={imgStyle}/>
                    <p style={infoStyle}>Slurrp Farm No Maida No Msg Millet Noodles</p>
                    {image4?<button className="btn btn-outline-primary" style={btnStyle} onClick={Action4}>Added</button>:<button className="btn btn-outline-primary" style={btnStyle} onClick={Action4}>Add to Cart</button>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyShopHome;