import React, {useEffect, useState} from 'react'
import Axios from "axios"
import Loading from "../../UI/Loading"
import Project from "./Project"
import './card-styles.css'

const GetallProjects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [ids, setIds] = useState([])
    const [authToken, setAuthToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDFkNmVlZjA3OWQ3MDAwMTU1NGI1NzkiLCJpYXQiOjE2MTMxMzMzMzN9.TQZ6Qpq4ZDTjiM1D2oh5oYMDQ77hQ17NWAJTN6BjwUc')
 const FetchData = async () => {
     const authToken = localStorage.getItem('Token')
       const {data} = await Axios.get('https://stc-mgmt-portal.herokuapp.com/project/getallprojects', {
           headers: {
               'auth-token': authToken
           }
       })
       await setProjects(data)
       setLoading(false)
       projects.map(project => setIds(project._id))
 }

 useEffect(()=>{
    setLoading(true)
    FetchData()
 }, [])
    return (
        <div style={userStyle}>
            {projects.map(project => <Project key={project._id} project={project}/>)}
        </div>
    )
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '0rem',
};

export default GetallProjects
