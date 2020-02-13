import React from 'react'

class Presentation extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header text-center text-warning">LUNCH</div>
                    <div className="card-body row d-flex justify-content-around">
                        {this.props.displayItems()}
                    </div>
                </div>
            </div> 
        )
    }
}

export default Presentation