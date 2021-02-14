import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import DashBoard from './components/pages/DashBoard'
import GetUser from "./components/feature/auth/GetUser"
import AddProject from "./components/feature/Project/AddProject"
import GetallProjects from "./components/feature/Project/GetallProjects"
import UpdateProject from './components/feature/Project/UpdateProject'
import AddTask from "./components/feature/Task/AddTask"
import Getspecificproject from "./components/feature/Project/GetSpecificProject"
import GetSpecificTask from "./components/feature/Task/GetSpecificTask"
import GetTasksUnderSpecificProject from "./components/feature/Task/GetTasksUnderSpecificProject"
// import AddTask from "./components/feature/Task/AddTask"

export default class App extends Component {

    render() {
        return (
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <LandingPage />
                        </Route>
                        <Route exact path='/dashboard'>
                            <DashBoard />
                        </Route>
                        <Route exact path='/getuser'>
                            <GetUser/>
                        </Route>
                        <Route exact path='/project/addproject'>
                            <AddProject/>
                        </Route>
                        <Route exact path='/project/getallprojects'>
                            <GetallProjects/>
                        </Route>
                        <Route exact path='/project/updateproject'>
                            <UpdateProject/>
                        </Route>
                        <Route exact path='/project/addtask'>
                            <AddTask/>
                        </Route>
                        <Route exact path='/project/:id' component={Getspecificproject}>
                        </Route>
                        <Route exact path='/project/addtask/:id' component={AddTask}/>
                        <Route exact path='/project/getspecifictask/:id' component={GetSpecificTask}/>
                        <Route exact path='/project/getalltasks/:id' component={GetTasksUnderSpecificProject}/>
                    </Switch>
                </Router>
        )
    }
}
