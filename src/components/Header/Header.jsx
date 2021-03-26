import React from 'react'
import classes from './Header.module' 
import logo from '../../assets/images/logo'
import reactLogo from '../../assets/images/react'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div>
                    <img className={classes.logo} src={logo} alt="Logo" />
                </div>
                <div className="textRight">
                    <img src={reactLogo} alt="React" className={classes.reactLogo} />
                    <strong>React </strong>
                </div>
            </div>
        </header>
    )
}

export default Header
