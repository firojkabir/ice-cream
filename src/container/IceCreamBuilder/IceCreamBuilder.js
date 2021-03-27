import React, { Component } from 'react'
import classes from './IceCreamBuilder.module.css'
import IceCream from '../../components/iceCream/iceCream'
import Builder from '../../components/Builder/Builder'

class IceCreamBuilder extends Component {
    state = {}

    render() {
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream />
                <Builder />
            </div>
        )
    }
}

export default IceCreamBuilder
