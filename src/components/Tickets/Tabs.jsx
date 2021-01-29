import React from 'react'
import classes from './TicketsWrapper.module.css'

const Tabs = ({ toggleSort }) => {
  const toSort = (e) => {
    const sort = e.target.value
    toggleSort(sort)
  }

  return (
    <div className={classes.tabs}>
      <button onClick={ toSort } value='price' className={classes.tab}>Самый дешевый</button>
      <button onClick={ toSort } value='duration' className={classes.tab}>Самый быстрый</button>
      <button onClick={ toSort } value='optimal' className={classes.tab}>Оптимальный</button>
    </div>
  )
}

export default Tabs
