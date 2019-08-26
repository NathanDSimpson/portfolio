import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import About from './Components/About'


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />

        {/* <Route path='/trips' component={Trips} />
        <Route path='/trip/:id' component={Trip} /> */}
    </Switch>
)