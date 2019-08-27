import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'

class Contact extends Component{
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleInput = event => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <form>
                    <div>
                    <input 
                        onChange={this.handleInput} 
                        type="text" 
                        name='name' 
                        placeholder='Name'
                    />                    
                    <input 
                    onChange={this.handleInput} 
                    type="text" 
                    name='email' 
                    placeholder='Email'
                />
                    </div>
                    <div>
                    <input 
                        onChange={this.handleInput} 
                        type="text" 
                        name='message' 
                        placeholder='Message'
                    />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Contact)