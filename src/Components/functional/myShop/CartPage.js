import React, { useContext } from "react"
import MyShopNavbar from "./myShopNavbar";
import { image1info } from "./myShopNavigation";
import img1 from "./Items/Img1.webp";
import img2 from "./Items/Img2.webp";
import img3 from "./Items/Img3.webp";
import img4 from "./Items/Img4.webp";

const MyShopCart=()=>{
    const {image1,image2,image3,image4}=useContext(image1info)
    const imgStyle={
        width:"200px",
        height:"200px",
        borderRadius:"10px"
    }
    return(
        <React.Fragment>
            <MyShopNavbar/>
            {image1&&<><img src={img1} alt="slurrp" style={imgStyle}/></>}
            {image2&&<><img src={img2} alt="slurrp" style={imgStyle}/></>}
            {image3&&<><img src={img3} alt="slurrp" style={imgStyle}/></>}
            {image4&&<><img src={img4} alt="slurrp" style={imgStyle}/></>}
        </React.Fragment>
    )
}
export default MyShopCart;