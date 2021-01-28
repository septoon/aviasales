import React from 'react'
import classes from './Filter.module.css'

const Filter = props => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>Количество пересадок</span>
      <div><input type="checkbox"/><span>Все</span></div>
      <div><input type="checkbox"/><span>Без пересадок</span></div>
      <div><input type="checkbox"/><span>1 пересадка</span></div>
      <div><input type="checkbox"/><span>2 пересадки</span></div>
      <div><input type="checkbox"/><span>3 пересадки</span></div>
    </div>
  )
}

export default Filter
