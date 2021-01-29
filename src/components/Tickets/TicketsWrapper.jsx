import React from 'react'
import Tabs from './Tabs'
import Tickets from './Tickets'
import classes from './TicketsWrapper.module.css'

const TicketsWrapper = props => {
  return (
    <div className={classes.tickets_wrapper}>
      <Tabs />
      <Tickets tickets={props.tickets} />
    </div>
  )
}

export default TicketsWrapper
