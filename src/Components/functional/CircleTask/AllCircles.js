import React, { useContext } from "react"
import { circlesInfo } from "./circleRouting"
import "./CircleStyle.css"
import CirclesNav from "./CirclesNav"


const AllCircles=()=>{
   const {circlesObjs, circleBGstyle, AddCircleObjs}=useContext(circlesInfo)

   const circlebgT={
    backgroundImage: 'linear-gradient(to bottom, green, white)',
    color:"black"
   }
   const circlebgF={
    backgroundColor:"white",
    color:"black"
   }

   const btnAction=(id)=>{
    circleBGstyle(id)
   }

   const btnActionAddCircles=()=>{
    AddCircleObjs()
   }

   

    return(
        <React.Fragment>
            <CirclesNav/>
            <h2 className="heading">Circles</h2>
            <div className="mainCont text-center">
            {circlesObjs.length>0?
            circlesObjs.map((eachCircle)=>{
                const {id, styling}=eachCircle
                return(
                    <React.Fragment key={id}>
                        <button className="circle" style={styling?circlebgT:circlebgF} onClick={()=>btnAction(id)}>{id}</button>
                        {/* <button >{id}</button> */}
                    </React.Fragment>
                )
            })
            :<h4>No Circles are in useState</h4>
            }
            <br/>
            <button className="AddBtnStyle" onClick={btnActionAddCircles}>Add Circle</button>
            </div>
        </React.Fragment>
    )
}

export default AllCircles