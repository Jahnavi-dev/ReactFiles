import React, { useState } from "react"
import "./login.css"

const LoginComp=()=>{
    const [firstName, setfirstName]=useState(null) //state variable 
    //and by keeping ""  as useState value input values are not appearing so i kept null
    const [err1, seterr1]=useState(false)

    const [lastName, setlastName]=useState(null)
    const [err2, seterr2]=useState(false)

    const [Age, setAge]=useState(null)
    const [Email, setEmail]=useState(null)

    const [Password, setPassword]=useState(null)
    const [err3, seterr3]=useState(false)


    const firstNameAction=(event)=>{
        const firstName=event.target.value
        setfirstName(firstName)
        if(firstName.length>16){
            seterr1("Please enter less than 16 characters") 
        }else{
            seterr1(false)
        }
    }

    const lastNameAction=(event)=>{
        const LastName=event.target.value
        setlastName(LastName)
        if(LastName.length>16){
            seterr2("Please enter less than 16 characters") 
        }else{
            seterr2(false)
        }
    }

    const AgeAction=(event)=>{
        const Age=event.target.value
        setAge(Age) 
    }

    const EmailAction=(event)=>{
        const Email=event.target.value
        setEmail(Email)
    }
     
    const PasswordAction=(event)=>{
        console.log(event.target.value)
        const Password=event.target.value
        setPassword(Password)
        if(Password.length<8){
            seterr3("Please enter more than 8 characters") 
        }else{
            seterr3(false)
        }
    }


    const onSubmitForm=(event)=>{
        event.preventDefault()
        console.log(event)
        sendDataToServer()
    }

    const sendDataToServer=()=>{
        const userInfo={
            username: firstName,
            password: Password,
        }
        // username: "emilys",
        // password: "emilyspass",
        
        serverVerify(userInfo)
    }
    const serverVerify=(userInfo)=>{
        console.log(userInfo, "serverVerify")
        // fetch('https://dummyjson.com/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(
        //         {username: "emilys",
        //         password: "emilyspass"})
        //   })
        //   .then(res => res.json())
        //   .then(response=>{console.log(response)});
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: 'emilys',
              password: 'emilyspass',
              expiresInMins: 30, // optional, defaults to 60
            })
          })
          .then(res => res.json())
          .then(response=>{console.log(response)});
    }


    return(
    <React.Fragment>
        <div>
            
            <form onSubmit={onSubmitForm} className="formCont">
                <h3>Registration Form</h3>
                <label htmlFor="fname">FirstName</label><br/>
                <input type="text" id="fname" value={firstName} onChange={firstNameAction} className="inputStyle"/><br/>
                {err1 && <><p style={{color:"red"}}>{err1}</p></>}
                <label htmlFor="lname">LastName</label><br/>
                <input type="text" id="lname" value={lastName} onChange={lastNameAction} className="inputStyle"/><br/>
                {err2 && <><p style={{color:"red"}}>{err2}</p></>}
                <label htmlFor="age">Age</label><br/>
                <input type="text" id="age" value={Age} onChange={AgeAction} className="inputStyle"/><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" value={Email} onChange={EmailAction} className="inputStyle"/><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" id="password" value={Password} onChange={PasswordAction} className="inputStyle"/><br/>
                {err3 && <><p style={{color:"red"}}>{err3}</p></>}
                {/* <input type="submit"/> */}
                {!err1 && !err2 && !err3 && <button className="btnStyle">Submit</button>}
            </form>
        </div>
    </React.Fragment>)
}


export default LoginComp
    