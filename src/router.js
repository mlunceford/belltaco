import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import SecretMenu from './componenets/SecretMenu'
import TacoCart from './componenets/TacoCart'
import App from './App'

export default (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/tacocart' component={TacoCart}/>
            <Route path='/secretmenu'component={SecretMenu}/>
        </Switch>
    </Router>
)
