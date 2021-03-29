import React, { Component } from 'react'
import classes from './IceCreamBuilder.module.css'
import IceCream from '../../components/iceCream/iceCream'
import Builder from '../../components/Builder/Builder'

class IceCreamBuilder extends Component {
    state = {
        items: {},
        scoops: [],
        totalPrice: 0
    }

    componentDidMount() {
        fetch('https://react-ice-cream-f1325-default-rtdb.europe-west1.firebasedatabase.app/items.json').then(response => response.json()).then(responseData => {
            this.setState({
                items: responseData,
            })
        })
    }

    addScoop = (scoop) => {
        const { scoops, items } = this.state
        const workingScoops = [...scoops]
        workingScoops.push(scoop)

        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop]
            }
        })
    }

    removeScoop = (scoop) => {
        const { scoops, items } = this.state
        const workingScoops = [...scoops]
        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop)
        workingScoops.splice(scoopIndex, 1)

        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice - items[scoop]
            }
        })
    }

    render() {
        const { items, totalPrice, scoops } = this.state
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoops={scoops} />
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={scoops}
                />
            </div>
        )
    }
}

export default IceCreamBuilder
