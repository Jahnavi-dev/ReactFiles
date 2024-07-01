import axios from 'axios'; 
import { useEffect, useState } from 'react';

const useAxios=(url)=>{
    const [data, setData]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(null)
    useEffect(()=>{
        fetchingData()
    },[])
    const fetchingData=async()=>{
        try{
            setLoading(true)
            const response = await axios.get(url)
            if(response.status===200){
                setData(response.data)
            }
        }
        catch(err){
            console.log(err)
            setError(err)

        }
        finally{
            setLoading(false)
        }
      
    }
    return [data, loading, error]
}

export default useAxios