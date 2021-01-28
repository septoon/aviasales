import React from 'react'
import classes from './Tickets.module.css'

const Tickets = props => {
  return (
    <div className={classes.card}>
      <div className={classes.top}>
        <span className={classes.price}>13 400 P</span>
        <img src="" alt="avia-logo" className={classes.logo}/>
      </div>
      <div className={classes.first}>
        <div className={classes.route}>
          <span className={classes.top}></span>
          <span className={classes.bottom}></span>
        </div>
        <div className={classes.lengths}>
          <span className={classes.top}></span>
          <span className={classes.bottom}></span>
        </div>
        <div className={classes.stops}>
          <span className={classes.top}></span>
          <span className={classes.bottom}></span>
        </div>
      </div>
      <div className={classes.second}>
        <div className={classes.route}>
            <span className={classes.top}></span>
            <span className={classes.bottom}></span>
          </div>
          <div className={classes.lengths}>
            <span className={classes.top}></span>
            <span className={classes.bottom}></span>
          </div>
          <div className={classes.stops}>
            <span className={classes.top}></span>
            <span className={classes.bottom}></span>
          </div>
      </div>
    </div>
  )
}

export default Tickets
