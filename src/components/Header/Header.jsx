import React from 'react'
import classes from './Header.module.css'
import logo from '../../images/Logo.png'

const Header = (props) => {
  return (
    <div className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo"/>
    </div>
  )
}

export default Header
