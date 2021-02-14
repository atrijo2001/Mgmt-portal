import React, { useEffect, useState} from 'react'
import axios from "axios"
import './AddProject.css'
import UserList from "./Userlist"

const AddProject =()=> {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [users, setUsers] = useState([])
    const [response, setResponse] = useState('')
    const [selectedusers, setSelectedusers] = useState([])
    
    const authToken = localStorage.getItem('Token')
    const GetAllUsers = async() => {
      // const authToken = localStorage.getItem('Token')
      try {
        const {data} = await axios.get('https://stc-mgmt-portal.herokuapp.com/project/getallusers',{
        headers:{
          'auth-token': authToken
        }
      })
        
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    const ProjectAdd = async() => {
        const proj = {
          title,
          description,
          startDate,
          endDate,
          users: selectedusers
        }
       
        try {
          console.log(proj)
          const res =  await axios.post("https://stc-mgmt-portal.herokuapp.com/project/addproject", proj, {
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
            },
        })
          setResponse(res)
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
					<div className='container-fluid'>
						<div className='form'>
							<div className='form-group'>
								<label htmlFor='title'>Title</label>
								<input
									type='text'
									className='form-control'
									onChange={(event) => {
										setTitle(event.target.value);
									}}
								/>{' '}
								<br />
							</div>
							<div className='form-group'>
								<label htmlFor='description'>Description</label>
								<input
									type='text'
									className='form-control'
									onChange={(event) => {
										setDescription(event.target.value);
									}}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='startDate'>Start Date</label>
								<input
									type='date'
									className='form-control'
									onChange={(event) => {
										setStartDate(event.target.value);
									}}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='endDate'>End Date</label>
								<input
									type='date'
									className='form-control'
									onChange={(event) => {
										setEndDate(event.target.value);
									}}
								/>
							</div>
							<UserList users={users} HandleChange={HandleChange} />
							<button className='btn btn-block' onClick={ProjectAdd}>
								Add Project
							</button>
						</div>
					</div>
				);
}

export default AddProject
