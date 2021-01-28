import React from 'react'
import classes from './TicketsWrapper.module.css'

const Tabs = props => {
  return (
    <div className={classes.tabs}>
      <button className={classes.tab}>Самый дешевый</button>
      <button className={classes.tab}>Самый быстрый</button>
      <button className={classes.tab}>Оптимальный</button>
    </div>
  )
}

export default Tabs
