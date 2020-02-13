import React from 'react'
import Presentation from './presentation'

class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.store
    }

    searchListener = (e) => {
        const filter = this.state.filter
        filter.search = e.target.value
        this.setState({
            filter : filter
        })
    }

    sortListener = (e) => {
        const filter = this.state.filter
        filter.sort = e.target.value
        this.setState({
            filter : filter
        })
    }

    addToCartListener = (e) => {
        const cart = this.state.cart
        // console.log(e.target.value)

        if(e.target.value === "1")
            cart[e.target.name].quantity += 1
        else if(e.target.value === "-1"){
            cart[e.target.name].quantity -= 1
            if(cart[e.target.name].quantity === 0){
                delete cart[e.target.name]
            }
        }
        else{
            cart[e.target.name] = { 
                quantity : 1,
                price : parseInt(e.target.name.split("_")[1])
            
            }

        }

        this.setState({
            cart : cart
        })
        this.state.footerListener({...this.state})
        // console.log(this.state)
    }

    linkFooter = (callback) => {
        this.setState({
            footerListener : callback
        })
    }

    render(){
        return (
            <Presentation
                {...this.props}
                {...this.state}
                state={this.state}
                searchListener={this.searchListener}
                sortListener={this.sortListener}
                addToCartListener={this.addToCartListener}
                linkFooter={this.linkFooter}
            />
        )
    }
}

export default Container