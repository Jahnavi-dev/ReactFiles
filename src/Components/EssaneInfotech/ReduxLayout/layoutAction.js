

export const layoutAction=(data)=>{
    console.log("layoutActiontriggered")
    return {
        type:"GET_DATA", 
        payload:data
    }

}