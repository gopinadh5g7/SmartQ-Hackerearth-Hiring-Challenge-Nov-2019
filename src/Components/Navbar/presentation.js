import React from 'react'
import logo  from '../../Assets/Images/logo.png'
import profile from '../../Assets/Images/profile.png'

class Presentation extends React.Component{
    render(){
        return(
            <nav className="shadow p-3 mb-3 rounded bg-warning navbar">
                <div className="container align-middle">
                    <div className="row justify-content-center">
                        <div className="col">
                            <img src={logo} alt="logo" width="100px"/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" onChange={this.props.searchListener} placeholder="Type to search"/>
                        </div>
                    </div>
                    <div className="row text-right justify-content-center">
                        <div className="col align-middle">Location!!</div>
                        <div className="col align-middle">
                            <img src={profile} className="avatar avatar-sm" alt="account" width="50px" height="75px"/>
                        </div>
                    </div>
                </div>
          </nav>
        )
    }
}

export default Presentation