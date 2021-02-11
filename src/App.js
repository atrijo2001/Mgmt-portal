import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import DashBoard from './components/pages/DashBoard'

export default class App extends Component {

    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <LandingPage />
                        </Route>
                        <Route exact path='/dashboard'>
                            <DashBoard />
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}
