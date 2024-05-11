import { Component } from "react";



class ImageClassComp extends Component{
    
    render(){
        const ImgStyle={
            borderRadius:"20px",// CSS properties are camelCased in React
            boxShadow:"2px 2px 2px black",
            margin:"20px"
        }
        return(
            <>
            <img src="https://media.istockphoto.com/id/486621567/photo/medicinal-neem-leaves-and-flower.webp?b=1&s=612x612&w=0&k=20&c=HU7pJHP37HLh5SpV9F0Q34Hxw6tQjOwB-ln6fIoT8K0=" height={200} width={200} style={ImgStyle} alt=""/>
            </>
        )
    }
}

export default ImageClassComp