import React, { Component } from 'react'

class UpdateProject extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             description: '',
             users:["601d6eef079d70001554b579"]
        }
    }
    ProjectUpdate(){
        const authToken = localStorage.getItem('Token')
        console.warn('form-data', this.state)
        fetch("https://stc-mgmt-portal.herokuapp.com/project/updateproject/6027c722c758700015530ba6", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "auth-token": authToken
         },
         body: JSON.stringify(this.state)
        }).then((res)=>{
          res.json().then((result)=>{
            console.warn(result)
            this.setState({response: result})
          })
        })
    }
    
    render() {
        return (
            <div>
                henlo
                <input type="text" onChange={(event) => {this.setState({description: event.target.value})}}/>
                <button onClick={()=> {this.ProjectUpdate()}}>Update Project</button>
            </div>
        )
    }
}

export default UpdateProject
