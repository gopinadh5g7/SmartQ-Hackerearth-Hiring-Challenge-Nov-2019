import React from 'react'
import {Link} from 'react-router-dom'

class Presentation extends React.Component{
    render(){
        return(
            <nav className="bg-ligh p-3 mb-5 navbar">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {this.props.itemsInCart()}
                        </div>
                    </div>

                    <div className="row text-right">
                        <div className="col-lg-6">
                            <strong>Total: Rs.{this.props.calculateTotal()}</strong>
                        </div>
                    
                        <div className="col-lg-6">
                            <Link to="/checkout" className="btn btn-outline-warning rounded">CHECKOUT</Link>
                        </div>
                    </div>
                    
                </div>
          </nav>
        )
    }
}


export default Presentation