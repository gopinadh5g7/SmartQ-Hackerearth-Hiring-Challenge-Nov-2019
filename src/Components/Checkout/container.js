import React from 'react'
import Presentation from './presentation'
import {Redirect} from 'react-router-dom'

class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.store
        console.log(this.state)
    }

    getDate = () => {
        const date = new Date()
        return date.getDay() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
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
        // this.state.footerListener({...this.state})
        // console.log(this.state)
    }

    buttonLoader = (itemname) => {
        const cart = this.state.cart

        if(!cart)
            return;

        if(cart[itemname]){
            return(
                <div>
                    <button className="btn btn-outline-warning" name={itemname} value="-1" onClick={this.addToCartListener}>-</button>
                    
                    <button className="btn btn-outline-warning" type="button">{cart[itemname].quantity}</button>
                    
                    <button className="btn btn-outline-warning" name={itemname} value="1" onClick={this.addToCartListener}>+</button>
                </div>
            )
        }

        return <button type="button" name={itemname} value="0" onClick={this.addToCartListener} className="btn btn-outline-warning">ADD</button>
    }

    calculateTotal = () => {
        let total = 0
        for(let i in this.state.cart){
            total += this.state.cart[i].quantity * this.state.cart[i].price
        }
        return total
        // console.log(this.state)
    }

    checkOutItems = () => {
        let items = []
        for(let i in this.state.cart){
            const jsx = (
                <div>
                    <div className="row mb-3">
                        <div className="col">
                                {i.split("_")[0]}      
                        </div>
                        <div className="col text-right">{this.buttonLoader(i)}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">{this.state.cart[i].quantity +" x Rs."+this.state.cart[i].price}</div>
                        <div className="col text-right">Rs. {this.state.cart[i].quantity * this.state.cart[i].price}</div>
                    </div>
                    <hr/>
                </div>
            )
            items.push(jsx)
        }
        return items
    }

    checkOutList = () => {
        return(
            <div>
                {this.checkOutItems()}
                <div>
                    <div className="row mb-3">
                        <div className="col">
                            <strong>
                                Sub Total
                            </strong>        
                        </div>
                        <div className="col text-right">Rs. {this.calculateTotal()}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">Taxes</div>
                        <div className="col text-right">Rs. 0.00</div>
                    </div>
                    <hr/>
                </div>
                <div>
                    <div className="row mb-3">
                        <div className="col">
                            <h4>
                                Grand Total
                            </h4>        
                        </div>
                        <div className="col text-right">Rs. {this.calculateTotal()}</div>
                    </div>
                </div>
            </div>
        )
    }
    

    render(){
        if(Object.keys(this.props.store.cart).length === 0 )
            return <Redirect to="/"/>
        else
            return (
                <Presentation
                    {...this.props}
                    {...this.state}
                    getDate={this.getDate}
                    checkOutItems={this.checkOutList}
                />
        )
    }
}

export default Container