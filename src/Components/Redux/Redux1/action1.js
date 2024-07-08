export const buyBookAction1=()=>{
    return {type:"BUY_BOOK"}
}

export const returnBookAction1=()=>{
    return {type:"RETURN_BOOK"}
}

export const changeProfileNameAction1=(name)=>{
    console.log(name, "in Actions")
    return {type:"CHANGE_PROFILE_NAME",payload:name}
}

export const addressChangeAction1=()=>{
    
    return {type:"ADDRESS_CHANGE"}
}