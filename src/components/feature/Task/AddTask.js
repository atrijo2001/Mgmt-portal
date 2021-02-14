import React, {useState, useEffect} from 'react'
import UserList from "../Project/Userlist"
import axios from "axios"

const AddTask = ({match}) => {
    const id = match.params.id
    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [users, setUsers] = useState([])

    const [response, setResponse] = useState({})
    const [selectedusers, setSelectedusers] = useState([])


    const authToken = localStorage.getItem('Token')
    const GetAllUsers = async() => {
      try {
        const {data} = await axios.get(`https://stc-mgmt-portal.herokuapp.com/project/getproject?projectId=${id}`,{
        headers:{
          'auth-token': authToken
        }
      })
        
        setUsers(data[0].users)
        console.log(data[0].users)
      } catch (error) {
        console.log(error)
      }
    }

    const TaskAdd = async() => {
        const proj = {
          title,
          type,
          description,
          status,
          priority,
          projectId: id,
          startDate,
          endDate,
          allottedUsers: selectedusers
        }
       
        try {
          console.log(proj)
          const res =  await axios.post("https://stc-mgmt-portal.herokuapp.com/project/addtask", proj, {
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            },
        })
          setResponse(res)
          console.log(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      const HandleChange = (userid) => {
         if(selectedusers.includes(userid)){
           const newselectedusers = selectedusers.filter(user => user!==userid)
           setSelectedusers(newselectedusers)
         } else{
           const newselectedusers = [...selectedusers, userid]
           setSelectedusers(newselectedusers)
         }
        //  console.log(selectedusers)
      }

      useEffect(()=>{
        GetAllUsers()
      }, [])
      useEffect(()=>{
        console.log(selectedusers)
      }, [selectedusers])

    return (
        <div>
            <input type="text" onChange={(event) => {setTitle( event.target.value)}}/> <br/>
            <input type="text" onChange={(event) => {setType( event.target.value)}}/> <br/>
            <input type="text" onChange={(event) => {setDescription(event.target.value)}}/>
            <input type="text" onChange={(event) => {setStatus(event.target.value)}}/>
            <input type="text" onChange={(event) => {setPriority(event.target.value)}}/>
            <input type="date" onChange={(event) => {setStartDate( event.target.value)}}/>
            <input type="date" onChange={(event) => {setEndDate(event.target.value)}}/>
            <UserList users={users} HandleChange={HandleChange}/>

            <button onClick={TaskAdd}>Add Task</button>
        </div>
    )
}

export default AddTask
