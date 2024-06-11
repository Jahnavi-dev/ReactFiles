import React, { useRef, useState } from "react";

const FormComp=()=>{
    const UserNameRef=useRef(null)
    const PasswordRef=useRef(null)

    const [UserNameError, UpdateUserNameError]=useState(false)
    const [PasswordError, UpdatePasswordError]=useState(false)

    const SubmitAction=(event)=>{
        event.preventDefault()
        const UserName=UserNameRef.current.value
        const Password=PasswordRef.current.value

        if(UserName.length<=3){
            UpdateUserNameError(true)
        }else{UpdateUserNameError(false)}

        if(Password.length<=3){
            UpdatePasswordError(true)
        }else{UpdatePasswordError(false)}

    }
    return(
        <React.Fragment>
            <form onSubmit={SubmitAction}>
                <div className="form-group">
                    <label htmlFor="UserName">UserName:</label>
                    <input type="text" className="form-control" id="UserName" ref={UserNameRef}/>
                    {UserNameError && <span style={{color:"red"}}>Please enter more than 3 characters</span>}
                </div><br/>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" id="pwd" ref={PasswordRef}/>
                    {PasswordError && <span style={{color:"red"}}>Please enter more than 3 characters</span>}
                </div><br/>
                <button type="submit" className="btn btn-default">
                    Submit
                </button>
            </form>
        </React.Fragment>
    )
}

export default FormComp;