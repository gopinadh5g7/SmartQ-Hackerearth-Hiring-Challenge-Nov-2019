import React from 'react'

import NavBar from '../Navbar'
import Operations from '../Operations'
import Items from '../Items'
import Footer from '../Footer'

class Presentation extends React.Component{
    render(){
        return(
            <div>
                <NavBar 
                    store={this.props.state} 
                    searchListener={this.props.searchListener}
                />
                
                <Operations 
                    store={this.props.state}
                    sortListener={this.props.sortListener}
                />

                <Items 
                    store={this.props.state}
                    addToCartListener={this.props.addToCartListener}
                />

                <Footer
                    store={this.props.state}
                    linkFooter={this.props.linkFooter}
                />
            </div>
        )
    }
}

export default Presentation