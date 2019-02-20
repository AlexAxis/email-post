import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../home/home'
import Send_email from '../send_email/send_email'
import Email_list from '../email_list/email_list'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}/>
        <Route path='/send_email' component={Send_email}/>
        <Route path='/email_list' component={Email_list}/>
        <Redirect from='*' to='/home'/>
    </Router>
)