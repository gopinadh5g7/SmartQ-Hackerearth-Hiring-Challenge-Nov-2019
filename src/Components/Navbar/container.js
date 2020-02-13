import React from 'react'
import Presentation from './presentation'

class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.store
        // console.log(this.state)
    }
    render(){
        return (
            <Presentation
                {...this.props}
                {...this.state}
                update={this.update}
            />
        )
    }
}

export default Container