import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

class NavBar extends Component{

    goToHome = () => this.props.history.push('/')
    goToAbout = () => this.props.history.push('/about')
    goToSkills = () => this.props.history.push('/skills')
    goToProjects = () => this.props.history.push('/projects')
    goToContact = () => this.props.history.push('/contact')

    render(){
        return(
            <div className='navbar'>
                <div>Nathan SIMPSON</div>
                <div className='navlinks'>
                    <span onClick={this.goToHome}>Home</span>
                    <span onClick={this.goToAbout}>About</span>
                    <span onClick={this.goToSkills}>Skills</span>
                    <span onClick={this.goToProjects}>Projects</span>
                    <span onClick={this.goToContact}>Contact</span>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar)