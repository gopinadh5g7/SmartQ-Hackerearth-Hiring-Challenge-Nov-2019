import React from 'react'
import Navbar from '../Navbar'

class Presentation extends React.Component{
    render(){
        return(
            <div className="">
                <Navbar/>

                <div className="container">
                    <h3>Order Details</h3>
                    <div className="card">
                        <div className="card-header bg-warning text-white">
                            <div className="text-left">
                                BUFFET
                            </div>
                            <div className="text-right">
                                DATE {this.props.getDate()}
                            </div>

                        </div>

                        <div className="card-body text-center">
                            {this.props.checkOutItems()}
                            <div>
                                <button className="btn btn-outline-warning">CONFIRM ORDER</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div> 
        )
    }
}

export default Presentation