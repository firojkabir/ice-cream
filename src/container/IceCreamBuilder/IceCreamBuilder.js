import React, { Component } from 'react'
import classes from './IceCreamBuilder.module.css'
import IceCream from '../../components/iceCream/iceCream'
import Builder from '../../components/Builder/Builder'

class IceCreamBuilder extends Component {
    state = {
        items: {
            vanilla: 45,
            chocolate: 50,
            lemon: 35,
            orange: 55,
            strawberry: 60
        },
        scoops: [],
        totalPrice: 0
    }

    render() {
        const { items } = this.state
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream items={items} />
                <Builder />
            </div>
        )
    }
}

export default IceCreamBuilder
