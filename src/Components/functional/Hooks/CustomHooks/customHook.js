import { useState } from "react"

const useCounterCustomHook=(initial=1, value=1)=>{
    const[countCH, setCountCH]=useState(initial)

    const increment=()=>{
        setCountCH(countCH+value)
    }
     
    const decrement=()=>{
        if(countCH>0){setCountCH(countCH-value)}
        else{setCountCH(countCH)}
    }

    const reset=()=>{
        setCountCH(initial)
    }

    return [countCH, increment, decrement, reset]

}
export default useCounterCustomHook