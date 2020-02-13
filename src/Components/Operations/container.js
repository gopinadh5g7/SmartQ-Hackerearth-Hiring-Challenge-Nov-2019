import React from 'react'
import Presentation from './presentation'

class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.store
        console.log(this.state)
    }

    date = () => {
        const date = new Date().toString().split(" ")
        return (<div>{date[1] + " " + date[2]}</div>)
    }

    sort = () => {
        return(
            <select defaultValue={this.state.filter.sort} onChange={this.props.sortListener}>
                <option value="descending">Descending</option>
                <option value="ascending">Ascending</option>
            </select>
        )
    }

    render(){
        return (
            <Presentation
                {...this.props}
                {...this.state}
                date={this.date}
                sort={this.sort}
            />
        )
    }
}

export default Container