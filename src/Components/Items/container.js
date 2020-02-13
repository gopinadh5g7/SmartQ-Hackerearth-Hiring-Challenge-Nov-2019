import React from 'react'
import Presentation from './presentation'

class Container extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.store
        // console.log(this.state)
    }

    itemsSort = (e1,e2) => {
        if(e1.price > e2.price)
            return this.state.filter.sort === "ascending" ? 1 : -1
        if(e1.price < e2.price)
            return this.state.filter.sort === "ascending" ? -1 : 1
        return 0
    }

    buttonLoader = (itemname) => {
        const cart = this.state.cart
        if(!cart)
        return <button type="button" name={itemname} value="0" onClick={this.props.addToCartListener} className="btn btn-outline-warning">ADD</button>

        if(cart[itemname]){
            return(
                <div className="">
                    <button className="btn btn-outline-warning" name={itemname} value="-1" onClick={this.props.addToCartListener}>-</button>
                    
                    <button className="btn btn-outline-warning" type="button">{cart[itemname].quantity}</button>
                    
                    <button className="btn btn-outline-warning" name={itemname} value="1" onClick={this.props.addToCartListener}>+</button>
                </div>
            )
        }

        return <button type="button" name={itemname} value="0" onClick={this.props.addToCartListener} className="btn btn-outline-warning">ADD</button>
    }

    displayItems = () => {
        const time = new Date().toString().split(" ")[4].split(":")
        const hrs = parseInt(time[0])
        const min = parseInt(time[1])

        return this.state.json_input
        .sort(this.itemsSort)
        .filter(item => {
            const name = item.itemname

            if(name.match(this.state.filter.search))
                return true
            return false
        })
        .filter(item => {
            const times = item.availabletime.split(",")

            let flag = 0

            for(let i in times){
                const range = times[i].split("-")
                const t1 = range[0].split(":").map(e => parseInt(e))
                const t2 = range[1].split(":").map(e => parseInt(e))
                
                let hd1 = hrs - t1[0]
                let md1 = min - t1[1]
                let hd2 = t2[0] - hrs
                let md2 = t2[1] - min
                // console.log(hrs,min,range)
                if((hd1 > 0 || (hd1 === 0 && md1 > 0)) && (hd2 > 0 || (md2 > 0 && hd2 === 0))){
                    flag = 1;
                    break;
                }
                // console.log(hd1,md1,hd2,md2)

            }
            if(flag === 0)
                return false
            return true
        })
        .map(item => {
            return(
                <div key={item.itemname+"_"+item.price} className="card col-lg-3 text-center m-1 shadow-sm p-1 mb-5 bg-white rounded">
                        <div className="card-title row m-6 mb-5">
                            <div className="col">
                                <strong>{item.itemname}</strong>
                            </div>
                            <div className="col">
                                Rs.{item.price}
                            </div>
                        </div>
                    <div className="card-body">
                        <div className="card-link text-right">
                            {this.buttonLoader(item.itemname+"_"+item.price)}
                        </div>
                    </div>
                </div>
            )
        })

    }

    render(){
        return (
            <Presentation
                {...this.props}
                {...this.state}
                displayItems={this.displayItems}
            />
        )
    }
}

export default Container