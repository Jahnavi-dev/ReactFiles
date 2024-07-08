import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { profileAction } from "../../Redux/Redux2/ProfileDetails/actionP"


const FromReducer1and2Data=()=>{
//    const TotalReduxState=useSelector((state)=>state)
//    console.log(TotalReduxState, "TotalReduxState")
      const {books,profile:{profile1}}=useSelector((state)=>state)
      const dispatch=useDispatch()

      const ProfileUpdateBtn=()=>{
        dispatch(profileAction({name:"Jahnavi", email:"abc@gmail,com", mobile:11111111}))
      }


    return(<React.Fragment>
        <h1>Getting Reducer 1 and 2 with single store</h1>
        <p>{books.books}</p>
        <p>{profile1.name}</p>
        <p>{profile1.email}</p>
        <p>{profile1.mobile}</p>
        <button onClick={ProfileUpdateBtn}>ProfileUpdateBtn</button>


    </React.Fragment>)
}

export default FromReducer1and2Data