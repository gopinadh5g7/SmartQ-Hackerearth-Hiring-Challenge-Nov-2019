import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import Checkout from './Components/Checkout'

import brandLogo from './Assets/Images/brandLogo.png'

class App extends React.Component{
  state = {
    json_input : require('./smartQFood8bef5a2.json'),
    filter : {
      sort : "ascending",
      search : ""
    },
    cart : {},
    total : 0
  }

  render(){
    return (
      <BrowserRouter className="smartq-foodordering">
        <Switch>
          <Route path="/checkout" component={() => <Checkout store={this.state}/>}/>
          <Route path="**" component={() => <Dashboard store={this.state}/>}></Route>
        </Switch>
        <footer className="py-5">
          <div className="container">
            <div className="row align-items-center justify-content-xl-between">
              <div className="col">
                <div className="copyright text-center text-xl-left text-muted">
                  <h1 className="footer-copyright container text-center text-white py-3" id="developerswork">
                    <img src={brandLogo} className="brandLogo" alt="Developers@Work" />
                    <a href="https://developerswork.online" target="_blank" rel="noopener noreferrer">
                      <img src="https://i0.wp.com/developerswork.online/wp-content/uploads/2019/03/DESIGNS-Copy.png?fit=360%2C60&amp;ssl=1" alt="DevelopersWork" />
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    )
  }
}

export default App;
