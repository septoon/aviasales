import React from 'react'
import TicketsWrapper from './TicketsWrapper'
import { getTickets, toggleSort } from '../../redux/tickets-reducer'
import {connect} from 'react-redux'

class TicketsContainer extends React.Component {
  componentDidMount() {
    this.props.getTickets()
  }
  
  render()  {
   return (
    <TicketsWrapper tickets={this.props.tickets}
                    toggleSort={this.props.toggleSort}
                    sort={this.props.sort} />
   )
 }
}

const mapStateToProps = (state) => ({
  tickets: state.ticketsList.tickets,
  sort: state.ticketsList.sort
})

export default connect(mapStateToProps, { getTickets, toggleSort }) (TicketsContainer)
