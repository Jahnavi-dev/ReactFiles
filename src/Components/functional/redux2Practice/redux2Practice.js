import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { userAction } from "../../Redux/Redux2Practice/actionPractice"

const Redux2Practice=()=>{
    // const getReduxStatePractice=useSelector((state)=>state)
    // console.log(getReduxStatePractice);
    const {user: {user}}=useSelector((state)=>state)
    const dispatch=useDispatch()
    

    const submitUserDetails=()=>{
        const getUserName=document.getElementById("userName").value 
        const getEmail=document.getElementById("Email").value 
        const getPassword=document.getElementById("Password").value 
        dispatch(userAction({username:getUserName, useremail:getEmail, userpassword:getPassword}))
    }

    return(
    <React.Fragment>
        <h1>redux2Practice</h1>
        <label for="userName">userName: </label>
        <input type="text" id="userName"/>
        <br/><br/>
        <label for="Email">Email:</label>
        <input type="email" id="Email"/>
        <br/><br/>
        <label for="Password">Password: </label>
        <input type="password" id="Password"/>
        <br/><br/>
        <button onClick={submitUserDetails}>Submit UserDetails</button>
        <br/>
        <br/>
        <h3>UserDetails</h3>
        <p>{user.username}</p>
        <p>{user.useremail}</p>
        <p>{user.userpassword}</p>


    </React.Fragment>
    )
}

export default Redux2Practice;