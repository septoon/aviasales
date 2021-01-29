import React from 'react'
import classes from './Tickets.module.css'

const Tickets = ({ tickets }) => {
  const sortByPrice = (arr) => arr.sort((a, b) => a.price > b.price ? 1 : -1)
  const sortByDuration = (arr) => arr.sort((a, b) => a.segments[0].duration > b.segments[0].duration ? 1 : -1)

  return (
    <div>
      {tickets.map(i => {
        if(tickets.length > 5) tickets.length = 5
        return (
          <div className={classes.card}>
            <div className={classes.top}>
              <span className={classes.price}>{i.price} P</span>
              <img src="" alt={i.carrier} className={classes.logo}/>
            </div>
            <div className={classes.there}>
              <div className={classes.route}>
                <div className={classes.cities}>
                  <span className={classes.origin}>{i.segments[0].origin}</span>
                  <span className={classes.destination}>{i.segments[0].destination}</span>
                </div>
                <div className={classes.date}>
                  <span className={classes.origin_date}>{i.segments[0].date}</span>
                  {/* <span className={classes.destination_date}>wdwd</span> */}
                </div>
              </div>
              <div className={classes.duration}>
                <span className={classes.on_route}>В пути</span>
                <span className={classes.duration}>{i.segments[0].duration}</span>
              </div>
              <div className={classes.stops}>
                <span className={classes.top}>пересадк</span>
                <span className={classes.bottom}>{i.segments[0].stops}</span>
              </div>
            </div>
            <div className={classes.back}>
              
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Tickets
