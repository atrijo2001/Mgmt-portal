import React, {useState, useEffect} from 'react'
import Loading from "../../UI/Loading"
import Axios from "axios"

const GetUser = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [userdetails, setUserdetails] = useState({})
    const authToken = localStorage.getItem('Token')

    const getData =async() => {
        const {data} = await Axios.get('https://stc-mgmt-portal.herokuapp.com/user/getuser', {
            headers: {
                'auth-token': authToken
            }
        })
        setData(data)
        setUserdetails(data.userDetails)
        setLoading(false)
    }
    useEffect(()=>{
        getData()
    }, [])
    console.log(userdetails)
    return (
        <div>
            {loading? <Loading/>: <h1 className="text-center">{data.userDetails.email}</h1>}
        </div>
    )
}

export default GetUser
