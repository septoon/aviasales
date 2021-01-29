import React from 'react'
import TicketsWrapper from './TicketsWrapper'
import { getTickets } from '../../redux/tickets-reducer'
import {connect} from 'react-redux'

class TicketsContainer extends React.Component {
  componentDidMount() {
    this.props.getTickets()
  }
  
  render()  {
   return (
    <TicketsWrapper tickets={this.props.tickets} />
   )
 }
}

const mapStateToProps = (state) => ({
  tickets: state.ticketsList.tickets
})

export default connect(mapStateToProps, { getTickets }) (TicketsContainer)
