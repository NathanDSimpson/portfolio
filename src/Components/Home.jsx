import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'


class Home extends Component{
    render(){
        return(
            <div>
                Home Component
            </div>
        )
    }
}

export default withRouter(Home)