import React from 'react'
import Presentation from './presentation'

class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.store
        this.props.linkFooter(this.update)
    }

    update = (updatedState) => {
        // console.log(updatedState)
        this.setState({...updatedState})
    }

    calculateTotal = () => {
        let total = 0
        for(let i in this.state.cart){
            total += this.state.cart[i].quantity * this.state.cart[i].price
        }
        return total
        // console.log(this.state)
    }

    itemsInCart = () => {
        let items = ""
        for(let i in this.state.cart){
            items += this.state.cart[i].quantity + " X " + i.split("_")[0] + ", "    
        }
        return items
    }

    render(){
        return (
            <Presentation
                {...this.props}
                {...this.state}
                calculateTotal={this.calculateTotal}
                itemsInCart={this.itemsInCart}
            />
        )
    }
}

export default Container