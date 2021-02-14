import React, {useState, useEffect} from 'react'
import axios from "axios"
import Loading from "../../UI/Loading"

const GetSpecificTask = ({match}) => {
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(true)
    const id = match.params.id
    const token = localStorage.getItem('Token')
    const FetchData = async() => {
        try {
           const {data} =  await axios.get(`https://stc-mgmt-portal.herokuapp.com/project/getspecifictask?taskId=${id}`, {
               headers: {
                   'auth-token': token
               }
           })
            setResponse(data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
        FetchData()
    }, [])
    return (
        <div>
            Henl
        </div>
    )
}

export default GetSpecificTask
