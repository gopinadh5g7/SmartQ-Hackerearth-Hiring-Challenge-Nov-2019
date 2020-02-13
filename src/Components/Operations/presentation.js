import React from 'react'
import LaunchBox from '../../Assets/Images/pop_up_counter.png'

class Presentation extends React.Component{
    render(){
        return(
            <nav className="bg-ligh p-3 mb-5 navbar">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <img src={LaunchBox} alt="lunch box" width="100px"/>
                        </div>
                        <div className="col">
                            Buffet
                        </div>
                    </div>
                    
                    <div className="row text-right">
                        <div className="col">
                            <span className="glyphicon glyphicon-calendar">Date:</span>
                            {this.props.date()}
                        </div>
                        <div className="col">
                            <span className="glyphicon glyphicon-sort-by-attributes">Sort by</span>
                            {this.props.sort()}
                        </div>
                    </div>
                </div>
          </nav>
        )
    }
}

export default Presentation