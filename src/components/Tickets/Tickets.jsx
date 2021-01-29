/* eslint-disable no-cond-assign */
import React from 'react'
import classes from './Tickets.module.css'

const Tickets = ({ tickets, sort }) => {
  const carrierLogo = `http://pics.avs.io/99/36/${tickets.carrier}.png`;
  const toSortArray = (arr) => {
    if(sort = 'price') {
      return arr.sort((a, b) => a.price > b.price ? 1 : -1)
    } else if (sort = 'duration') {
      return arr.sort((a, b) => a.segments[0].duration > b.segments[0].duration ? 1 : -1)
    } else if (sort = 'optimal') {
      return arr
    }
  }

  const ticketsToSort = toSortArray(tickets)
  return (
    <div>
      {ticketsToSort.map(i => { 
        if(ticketsToSort.length > 5) ticketsToSort.length = 5
        
        let dateFormat = new Date(Date.parse(i.segments[0].date))
        const hourMin = dateFormat.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute:'2-digit'
        });

        const stopsCode = i.segments[0].stops.join(', ')
        console.log(typeof(stopsCode))
        console.log(i.segments[0].stops)
        return (
          <div className={classes.card}>
            <div className={classes.top}>
              <span className={classes.price}>{i.price} P</span>
              <img src={carrierLogo} alt={i.carrier} className={classes.logo}/>
            </div>
            <div className={classes.there}>
              <div className={classes.route}>
                <div className={classes.cities}>
                  <span className={classes.origin}>{i.segments[0].origin} -</span>
                  <span className={classes.destination}>{i.segments[0].destination}</span>
                </div>
                <div className={classes.date}>
                  <span className={classes.origin_date}>{hourMin}</span>
                  {/* <span className={classes.destination_date}>wdwd</span> */}
                </div>
              </div>
              <div className={classes.duration}>
                <span className={classes.on_route}>В пути</span>
                <span className={classes.duration}>{i.segments[0].duration}</span>
              </div>
              <div className={classes.stops}>
                <span className={classes.stops_title}>пересадк</span>
                <span className={classes.stops_code}>{stopsCode}</span>
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
