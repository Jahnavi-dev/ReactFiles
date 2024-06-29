import React, { useContext } from "react"
import CirclesNav from "./CirclesNav";
import { circlesInfo } from "./circleRouting";
import "./CircleStyle.css"

const ColoredCircles=()=>{
    const {circlesObjs}=useContext(circlesInfo)

    const coloredCircles=circlesObjs.filter((each)=>{
            return(each.styling===true)
            })
    console.log(coloredCircles)

    const circlebgT={
        backgroundImage: 'linear-gradient(to bottom, green, white)',
        color:"black"
       }
       const circlebgF={
        backgroundColor:"white",
        color:"black"
       }
        
    return(
        <React.Fragment>
            <CirclesNav/>
            <h2>Colored Circles</h2>
            <div className="mainCont text-center">
            {coloredCircles.length>0?
            coloredCircles.map((each)=>{
                return(
                    <React.Fragment key={each.id}>
                        <button className="circle" style={each.styling?circlebgT:circlebgF}>{each.id}</button>
                    </React.Fragment>
                )
            })
            :<h4>No Colored Circles</h4>
            }
            </div>
        </React.Fragment>
    )
}

export default ColoredCircles;