const FormsComp=()=>{
    return(
        <form>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName"/>
            <br/>
            <label for="lastName">Last Name</label>
            <input type="text" id="laststName"/>
            <br/>
            <input type="submit" value="Proceed"/>
        </form>
    )
}

export default FormsComp